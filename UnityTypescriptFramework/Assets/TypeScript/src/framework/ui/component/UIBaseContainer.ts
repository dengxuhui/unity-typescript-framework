/**
 * 基础组件容器
 */
import {UIBaseComponent} from "./UIBaseComponent";
import Handler from "../../utils/Handler";
import {IUIComponent} from "../../interface/IUIComponent";
import {CS} from "csharp";

export class UIBaseContainer extends UIBaseComponent {
    /**
     * 所有组件
     */
    private _components: Map<string, Map<Function, IUIComponent>>;
    /**
     * 子节点数量
     */
    private _length: number;

    onCreate(): void {
        super.onCreate();
        this._components = new Map<string, Map<Function, IUIComponent>>();
        this._length = 0;
    }

    onDestroy(): void {
        this.walk(Handler.create(this, (component: UIBaseComponent) => {
            if (component._holder == this) {
                component.destroy();
            }
        }, null, false));
        this._components = null;
        super.onDestroy();
    }

    onEnable(): void {
        super.onEnable();
        this.walk(Handler.create(this, (component: UIBaseComponent) => {
            component.onEnable();
        }, null, false));
    }

    onDisable(): void {
        super.onDisable();
        this.walk(Handler.create(this, (component: UIBaseComponent) => {
            if (component._holder == this) {
                component.onDisable();
            }
        }, null, false));
    }

    /**
     * 遍历所有组件
     * @param callback
     * @param component_class
     */
    walk(callback: Handler, component_class: any = null) {
        this._components.forEach((component_map: Map<Function, IUIComponent>, name: string) => {
            if (component_map != null) {
                component_map.forEach((component: IUIComponent, cmp_class: Function) => {
                    if (component_class == null) {
                        callback.runWith(component);
                    } else if (cmp_class == component_class) {
                        callback.runWith(component);
                    }
                });
            }
        });
    }

    /**
     * 添加组件
     * @param component_class
     * @param var_arg
     * @param params
     */
    addComponent<T extends IUIComponent>(component_class: { new(T, any): T }, var_arg: any, ...params: any[]): T {
        let component_inst = new component_class(this, var_arg);
        component_inst.onCreate(params);
        let name = component_inst.getName();
        this.recordComponent(name, component_class, component_inst);
        this._length++;
        return component_inst;
    }

    /**
     * 获取单个组件，如果没有传入类类型，返回这个名字的第一个组件
     * @param name
     * @param component_class
     */
    getComponent(name: string, component_class: Function): IUIComponent {
        let components: Map<Function, IUIComponent> = this._components[name];
        if (components == null) {
            return null;
        }
        if (component_class == null) {
            components.forEach((v) => {
                return v;
            });
        } else {
            return components.get(component_class);
        }
    }

    /**
     * 获取所有类型组件
     * @param component_class
     */
    getComponents(component_class: Function) {
        let components = new Array<IUIComponent>();
        this.walk(Handler.create(this, (component) => {
            components.push(component);
        }, null, false), component_class);
        return components;
    }

    /**
     * 移除组件
     * @param name
     * @param component_class
     */
    removeComponent(name: string, component_class: Function): IUIComponent {
        let component = this.getComponent(name, component_class);
        if (component != null) {
            component.destroy();
            this._length--;
            this._components[name][component_class] = null;
        }
        return component;
    }

    /**
     * 移除组件
     * @param component_class
     */
    removeComponents(component_class: Function): Array<IUIComponent> {
        let components = this.getComponents(component_class);
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            let cmp_name = component.getName();
            component.destroy();
            this._components[cmp_name][component_class] = null;
            this._length--;
        }
        return components;
    }

    /**
     * 记录组件
     * @param name
     * @param component_class
     * @param component
     */
    private recordComponent<T extends IUIComponent>(name: string, component_class: Function, component: T) {
        if (this._components[name][component_class] != null) {
            CS.Logger.LogError("Already exist component_class:" + component_class.name);
        }
        this._components[name][component_class] = component;
    }
}