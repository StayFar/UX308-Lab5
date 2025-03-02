import { convertSquareFeetToAcres } from '../sqfttoacres.js';


describe("A suite of tests for sqfttoacres.js", function() {
   it('converts 5000 square feet to acres', function() {
       expect(convertSquareFeetToAcres(5000)).toBeCloseTo(0.1148, 4);
   });


   it('converts 43560 square feet (1 acre) to acres', function() {
       expect(convertSquareFeetToAcres(43560)).toBe(1);
   });


   it('converts 87120 square feet (2 acres) to acres', function() {
       expect(convertSquareFeetToAcres(87120)).toBe(2);
   });
});
