import { summarizeAmountByCurrency } from "./summarizeByCurrency";
import { eurMock, usdMock } from "../mocks/groupByCurrency";

describe('summarizeAmountByCurrency util', () => {
  it('it should sum EUR amounts for user', () => {
    const transformedData = summarizeAmountByCurrency(eurMock);
    expect(transformedData).toEqual({EUR: '-1371.57'});
  });

  it('it should sum EUR and USD amounts for user', () => {
    const transformedData = summarizeAmountByCurrency({
      ...eurMock,
      ...usdMock,
    });
    expect(transformedData).toEqual({"EUR": "-1371.57", "USD": "-767.01"});
  });
});
