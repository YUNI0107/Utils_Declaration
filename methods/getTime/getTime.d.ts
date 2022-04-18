export class GetTime {
  constructor(date: Date)
  /**
   * Get getTimeStamp
   */
  getTimeStamp(): number
  /**
   * Year: 年
   */
  getFullYear(): number
  /**
   * Month: 月
   */
  getMonth(): number
  /**
   * Date: 天
   */
  getDate(): void
  /**
   *
   * @param lang  choose English or zh-TW(Transitional Chinese) to display
   * @param isShort should it need to shorten or not
   */
  getWeekDay(lang: "en" | "zh", isShort: boolean): string
  /**
   * @param symbol  Add the symbol you want to connect between number
   * @param needAutoCompleteZero When the month or date is less than 10, Do you need to add 0 in front of them
   */
  getFormatDay(symbol: string, needAutoCompleteZero?: boolean): string
}
