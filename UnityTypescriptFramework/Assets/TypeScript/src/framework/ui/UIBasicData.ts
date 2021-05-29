import MVCData from "framework/mvc/MVCData";

/**
 * ui基础数据
 */
export default class UIBasicData extends MVCData{
    /**
     * Determines whether opened is
     */
    public isOpened:boolean = false;
    /**
     * Determines whether loaded is
     */
    public isLoaded:boolean = false;
    /**
     * Determines whether loading is
     */
    public isLoading:boolean = false;
}