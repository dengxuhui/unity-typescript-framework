let comm: IAtlasConfig = {
    name: "comm",
    atlasPath: "ui/atlas/comm",
};

/**
 * 图集配置
 */
let AtlasConfig = {
    Comm: comm
};

/**
 * 图集类型接口
 */
export interface IAtlasConfig {
    name: string;
    atlasPath: string;
}

export {AtlasConfig}