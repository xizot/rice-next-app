interface FormatOptions {
  unit?: string;
  round?: boolean;
}

export class CurrencyHelper {
  static formatVND(
    amount: number | string,
    options: FormatOptions = {}
  ): string {
    const { unit = "đ", round = true } = options;

    const number = round ? Math.round(Number(amount)) : Number(amount);
    if (isNaN(number)) return "Số không hợp lệ";

    const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${formatted} ${unit}`;
  }
}
