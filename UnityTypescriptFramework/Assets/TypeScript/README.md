# todolist
[ ] Loader管理器，对于AB包的加载
[ ] Audio声音管理器
[ ] 粒子特效管理器
[ ] 动画管理器
[ ] 玩家数据模块UserDataModule

# 配置数据管理器
## 配置数据excel转json文件
1.通过excel转为json文件，将配置数据导出时导出一份配置数据interface的接口表，这样好处是在编译的时候不会打包到bundle.js中。做到了运行时对于interface的无感，但是开发时也能很好索引配置数据。
2.json数据分为array与object两种类型，主要看excel中id是字符串类型还是int类型。
3.Module持有相应的配置管理器，配置数据可以预加载，加载后到内存通过Json.parse转为对象使用。模块卸载也卸载json内容。