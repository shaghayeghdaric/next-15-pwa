export const toNumber = (input: any) => parseInt(input, 10) || 0;

export const toExactNumber = (input: any) => input.toString().replace(/,/g, "");

export const addIranCode = (input: string) => `+98${input}`;

export const removeIranCode = (input: string | undefined) => (input ? `0${input.slice(3)}` : "");

export const toMinutes = (input: number | undefined) => (input ? Math.ceil(input / 60) : 0);

export const formatPrice = (input: number | undefined) => toNumber(input) / 100;

export const getProgress = (status: string | undefined, isReady: boolean | undefined): number => {
  const numericalProgress = toNumber(status?.split(":")?.[0]);

  const adjustedProgress = isReady ? numericalProgress : Math.round(numericalProgress * 0.9);

  return adjustedProgress;
};

export const isOdd = (number: number): boolean => number % 2 === 0;

export function isoToTimestamp(isoString: string) {
  const date = new Date(isoString);
  return Math.floor(date.getTime() / 1000);
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

// biome-ignore lint/style/noRestrictedGlobals: <explanation>
export const isNumeric = (str: any) => !isNaN(str) && !isNaN(parseFloat(str));
