import {consumptionAvg} from "../js/rashod";

test ('it should return distance', ()=>{
    const result=consumptionAvg(7.5, 10);
    expect(result).toBe(133);
})