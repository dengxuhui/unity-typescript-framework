import {CS} from "csharp";

export class GameTest {
    /**
     * 运行ts-cs用例，单纯的ts测试写到.test.ts里面
     * @constructor
     */
    static Run(){
        let tester = new GameTest();
        tester.binarySearchTest();
    }

    /**
     * 二分查找测试
     */
    private binarySearchTest(){
        CS.Logger.Log("--------------binary search test start--------------");
        let sourceData = [1,15,23,30,213,324,4456,4578,31435,343445,2123354,3574853784,2318627163];
        let indexOf = (sortedArray:Array<number>,findValue:number)=>{
            if(sortedArray.length <= 0) return -1;
            let low = 0;
            let high = sortedArray.length - 1;
            while (low <= high){
                let mid = low + Math.ceil((high - low) / 2);
                if(findValue < sortedArray[mid]) high =  mid - 1;
                else if(findValue > sortedArray[mid]) low = mid + 1;
                else return mid;
            }
            return -1;
        };
        let tValue = 31435;
        let findIndex = indexOf(sourceData,tValue);
        CS.Logger.Log(sourceData.join(","));
        CS.Logger.Log(`find value=>${tValue},find index=>${findIndex}`);
        CS.Logger.Log("--------------binary search test over--------------");
    }
}