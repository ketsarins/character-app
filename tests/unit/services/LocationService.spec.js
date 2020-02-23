import LocationService from '../../../src/services/api/LocationService';
import axios from 'axios';

// jest.mock('axios');

describe('LocationService.vue', () => {
    it('has a getLocation function', () => {
        expect(typeof LocationService.getLocation).toBe('function');
    })

    it('get location successfully', () => {
        jest.setTimeout(30000);
        let mockUrl = "https://urlfortest.com/api/getlocaltions";
        const mockData = {
            data: {
                result: "Hello"
            }
        }

        jest.mock("axios", () => ({
            get: jest.fn(() => Promise.resolve(mockData))
        }));

        jest.mock('../../../src/services/api/LocationService', () => {
            return {
              getLocation: jest.fn(() => Promise.resolve(mockData))
            };
          });

        expect(LocationService.getLocation(mockUrl)).resolves.toEqual(mockData);
    })

    it('get location error', () => {
        jest.setTimeout(30000);
        let mockUrl = "https://urlfortest.com/api/getlocaltions";
        const mockData = "reason of error";

        jest.mock("axios", () => ({
            get: jest.fn(() => Promise.reject(mockData))
        }));

        jest.mock('../../../src/services/api/LocationService', () => {
            return {
              getLocation: jest.fn(() => Promise.reject(mockData))
            };
          });

        expect(LocationService.getLocation(mockUrl)).rejects.toEqual(mockData);
    })
})