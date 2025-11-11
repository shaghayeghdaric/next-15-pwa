import numeral from "numeral";

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function formatNumberWithSeparator(number: number): string {
  return numeral(number).format("0,0");
}

export function fCurrency(number: InputValue, format?: string) {
  const formatted = number ? numeral(number).format(format ?? "0,0.00") : "";

  return result(formatted, ".00");
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";

  return result(format, ".0");
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format("0.00a") : "";

  return result(format, ".00");
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format("0.0 b") : "";

  return result(format, ".0");
}

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}

function removeTrailingZeros(str: string): string {
  return str.replace(/\.?0+$/, "");
}

export function formatMillionTomans(number: InputValue, format?: string): string {
  if (!number) {
    return "";
  }

  const num = typeof number === "number" ? number : Number(number);
  if (Number.isNaN(number)) {
    return "";
  }

  const millionValue = num / 1_000_000;
  const defaultFormat = num < 1_000_000 ? "0.000" : "0,0.000";
  const formatted = numeral(millionValue).format(format ?? defaultFormat);

  return removeTrailingZeros(formatted);
}
