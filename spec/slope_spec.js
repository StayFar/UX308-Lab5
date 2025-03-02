import { slope } from '../slope.js'


describe("A suite of tests for slope function", function() {
 it('calculates the slope of a line with positive slope', function() {
     expect(slope(1, 2, 4, 8)).toBeCloseTo(2);  // (8-2) / (4-1) = 6/3 = 2
 });


 it('calculates the slope of a line with negative slope', function() {
     expect(slope(2, 5, 6, 1)).toBeCloseTo(-1);  // (1-5) / (6-2) = -4/4 = -1
 });


 it('calculates the slope of a horizontal line (zero slope)', function() {
     expect(slope(2, 3, 6, 3)).toBe(0);  // (3-3) / (6-2) = 0/4 = 0
 });
});
