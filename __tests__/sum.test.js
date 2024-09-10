import { sum } from "../src/utils/sum"


test("sum of 2 numbers",()=>{
    let res = sum(3,7);
    expect(res).toBe(10);
   
})