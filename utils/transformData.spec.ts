import { mockData, transformedMockData } from "../mocks/mockDataForTests";
import { transformData } from "./transformData";

describe('transformFetchedData util', () => {
  describe('if Transaction array is empty', () => {
    it('should return empty array', () => {
      const transformedData = transformData([]);
      expect(transformedData).toStrictEqual([]);
    });
  });
  describe('if Transaction array is not empty', () => {
    it('should return correctly transformed balance', () => {
      const transformedData = transformData(mockData);
      expect(transformedData).toEqual(transformedMockData);
    });
  });
});
