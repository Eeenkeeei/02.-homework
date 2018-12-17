import {returnMoney} from "../js/coffee";

test ('it should return money', () =>{
    const result=returnMoney('latte',80);
    expect (result).toBe(50);
})