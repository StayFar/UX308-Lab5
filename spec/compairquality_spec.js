import { computeAirQuality } from '../compairquality.js'


describe("A suite of tests for computeAirQuality function", function() {
 it('returns "Good" for AQI 0 - 50', function() {
     expect(computeAirQuality(25)).toBe("Good");
     expect(computeAirQuality(50)).toBe("Good");
 });


 it('returns "Moderate" for AQI 51 - 100', function() {
     expect(computeAirQuality(75)).toBe("Moderate");
     expect(computeAirQuality(100)).toBe("Moderate");
 });


 it('returns "Unhealthy for Sensitive Groups" for AQI 101 - 150', function() {
     expect(computeAirQuality(120)).toBe("Unhealthy for Sensitive Groups");
     expect(computeAirQuality(150)).toBe("Unhealthy for Sensitive Groups");
 });


 it('returns "Unhealthy" for AQI 151 - 200', function() {
     expect(computeAirQuality(175)).toBe("Unhealthy");
     expect(computeAirQuality(200)).toBe("Unhealthy");
 });


 it('returns "Very Unhealthy" for AQI 201 - 300', function() {
     expect(computeAirQuality(250)).toBe("Very Unhealthy");
     expect(computeAirQuality(300)).toBe("Very Unhealthy");
 });


 it('returns "Hazardous" for AQI 301 and above', function() {
     expect(computeAirQuality(350)).toBe("Hazardous");
     expect(computeAirQuality(500)).toBe("Hazardous");
 });
});
