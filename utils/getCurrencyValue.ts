import { ICurrencies, ICurrency } from "types/index";

export const getCurrencyValue = (ar: ICurrency[], currency: ICurrencies) => {
  const current: ICurrency | undefined = ar.find(
    p => Object.keys(p)[0] === currency,
  );
  return current ? current[currency] : false;
};
