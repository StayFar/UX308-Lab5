import { calculateMowingTime } from '../calcmowtime.js'


describe("A suite of tests for calcmowtime.js", function() {
 it('calculates mowing time for a 10m x 20m lawn with a cut rate of 5 sqm/min', function() {
     expect(calculateMowingTime(10, 20, 5)).toBe(40);
 });


 it('calculates mowing time for a 15m x 30m lawn with a cut rate of 10 sqm/min', function() {
     expect(calculateMowingTime(15, 30, 10)).toBe(45);
 });


 it('calculates mowing time for a 25m x 50m lawn with a cut rate of 25 sqm/min', function() {
     expect(calculateMowingTime(25, 50, 25)).toBe(50);
 });
});
