import { yee_ha } from '../yeeha.js'


describe("A suite of tests for yee_ha function", function() {
 it('returns "Yee" when the number is divisible by 3 only', function() {
     expect(yee_ha(9)).toBe("Yee");   // 9 is divisible by 3
     expect(yee_ha(12)).toBe("Yee");  // 12 is divisible by 3
 });


 it('returns "Ha" when the number is divisible by 7 only', function() {
     expect(yee_ha(14)).toBe("Ha");  // 14 is divisible by 7
     expect(yee_ha(28)).toBe("Ha");  // 28 is divisible by 7
 });


 it('returns "Yee Ha" when the number is divisible by both 3 and 7', function() {
     expect(yee_ha(21)).toBe("Yee Ha");  // 21 is divisible by 3 and 7
     expect(yee_ha(42)).toBe("Yee Ha");  // 42 is divisible by 3 and 7
 });


 it('returns "Nada" when the number is not divisible by 3 or 7', function() {
     expect(yee_ha(5)).toBe("Nada");   // 5 is not divisible by 3 or 7
     expect(yee_ha(19)).toBe("Nada");  // 19 is not divisible by 3 or 7
 });
});
