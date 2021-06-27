# 项目介绍
## 基础介绍
unity-typescript-framework基于puerts实现了typescript+c#语言开发环境。本项目主要实现ts侧的框架功能，包括了UI框架及基础的UI组件，场景及资源管理，定时器，事件管理器。并包含丰富的模块功能，包含多语言模块，玩家数据抽象层等。
## 场景结构
启动场景为LaunchScene，目前场景管理器中实现的场景切换均为切换模式，如果需要实现additive模式请自行实现。项目默认包含了HomeScene，BattleScene场景，如果不需要则可以删除。
## typescript-> javascript
使用webpack编辑ts，在日常开发中只需要使用命令npm run dev启动编译监听。LaunchScene这个场景中可以设置调试模式。

# 工具介绍
本项目除了基本的逻辑框架还包含了多个工具包，下面介绍下几个工具的使用
## excel2json
这个工具用于将Excel文件转换为json文件，目前excel表格是有一定潜规则，示例配置为Residents.xlsx配置
### 工具入口
入口在菜单栏Tools/Excel2Json中，代码文件在Editor/Excel2Json中定义
### excel规范
- 属性命名方式为 属性名:属性类型的方式，例如id:string，表示字符串类型id，具体支持类型在FuncExcel2Json.cs中_handleDic字典中定义，如果需要扩展请执行扩展
- 一个excel文件只能存在一个有效的sheet表格，有效表格格式以#开头，#结尾，例如#resident#命名
- 表格前两行为默认数据，表格必须大于两行，第一行为注释行，第二行为属性定义行，后面行为数据行
- 表格导出为键值对，因此必须有一个id:string的字段存在于表格，一般放到第一列
### 导出规范
- 导出表格时应关闭所有表格再导出
- excel表格配置在Editor/Excel2Json/Excel2JsonRules.asset中定义，目前支持文件源配置及输出路径配置，后期如有需要可能会存在更多配置项
- 如果勾选导出接口会在Typescript文件夹下生成对应的json转ts的接口定义
### typescript中使用json数据

# 代码规范
1.命名空间：所有CS侧需要暴露给js的都放到CS命名空间下，避免污染Typescript编辑环境