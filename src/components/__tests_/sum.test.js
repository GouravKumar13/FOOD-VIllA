import { sum } from "./sum"
test("check sum of 2 positive numbers", ()=>{
    expect(sum(2, 7)).toBe(9) 
    expect(sum(2 , 8)).toBe(10)
})