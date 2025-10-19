import numeral from "numeral";
type InputValue = string | number | null;

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}

export const toNumber = (input: any) => parseInt(input, 10) || 0;

export const isOdd = (input: any) => input % 2 !== 0;

export const toToman = (input: any) => {
  return parseFloat(input) / 10;
};
export function fCurrency(number: InputValue, format?: string) {
  const formatted = number ? numeral(number).format(format ?? "0,0.00") : "";

  return result(formatted, ".00");
}

/**
 * Converts digits into asked locale formatted number
 *
 * @param {string | number} digit
 * @param {"fa" | "en"} locale
 * @returns {string}
 */
export const digits = (digit: string | number, locale: "fa" | "en" | "ar" = "fa"): string => {
  const numbers = {
    fa: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    ar: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    en: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  };

  if (digit === null || typeof digit === "undefined") {
    return digit;
  }

  return `${digit}`
    .replace(/[0123456789]/g, (w) => numbers[locale][numbers.en.indexOf(w)] as string)
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (w) => numbers[locale][numbers.fa.indexOf(w)] as string)
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (w) => numbers[locale][numbers.ar.indexOf(w)] as string);
};
