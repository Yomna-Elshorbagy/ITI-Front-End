import calculateHeroStrengthPower from "../utils/heroStrength";

describe("calculateHeroStrengthPower function",()=>{
    test("should return 'weak' when passing 9",()=>{
        expect(calculateHeroStrengthPower(9)).toBe('9 (weak)')
    })
    test("should return 'strong' when passing 12",()=>{
        expect(calculateHeroStrengthPower(12)).toMatch(/strong/i)
    })
    test("should return 'unbelievable' when passing 30",()=>{
        expect(calculateHeroStrengthPower(30)).toContain("unbelievable")
    })
})