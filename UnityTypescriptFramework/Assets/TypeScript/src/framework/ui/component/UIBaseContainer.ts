/**
 * 基础组件容器
 */
import {UIBaseComponent} from "./UIBaseComponent";
import {IComponent} from "../../interface/IComponent";
import Handler from "../../utils/Handler";
import {IUIComponent} from "../../interface/IUIComponent";
import {CS} from "csharp";
import {buildSolutionReferences} from "ts-loader/dist/instances";

export class UIBaseContainer extends UIBaseComponent {
    /**
     * 所有组件
     */
    private _components: Map<string, Map<any, IUIComponent>>;
    /**
     * 子节点数量
     */
    private _length: number;

    onCreate(): void {
        super.onCreate();
        this._components = new Map<string, Map<any, IUIComponent>>();
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
        this._components.forEach((component_map: Map<any, IUIComponent>, name: string) => {
            if (component_map != null) {
                component_map.forEach((component: IUIComponent, cmp_class: any) => {
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
    addComponent<T extends IUIComponent>(component_class: { new(T, any): T }, var_arg: any, params: any[] = null): T {
        let component_inst = new component_class(this, var_arg);
        component_inst.onCreate(params);
        let name = component_inst.getName();
        this.recordComponent(name, component_class, component_inst);
        this._length = this._length + 1;
        return component_inst;
    }

    getComponent(name: string, component_class: any): IUIComponent {
        let components: Map<any, IUIComponent> = this._components[name];
        if (components == null) {
            return null;
        }
        if (component_class == null) {
            let r;
            components.forEach((v) => {
                r = v;
                return;
            });
            return r;
        } else {
            return components[component_class];
        }
    }

    removeComponent(name: string, component_class) {
        
    }

    /**
     * 记录组件
     * @param name
     * @param component_class
     * @param component
     */
    private recordComponent<T extends IUIComponent>(name: string, component_class: any, component: T) {
        if (this._components[name][component_class] != null) {
            CS.Logger.LogError("Already exist component_class:" + component_class.constructor.name);
        }
        this._components[name][component_class] = component;
    }
}