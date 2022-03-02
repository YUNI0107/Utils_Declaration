class GetTime {
  constructor(day) {
    this.day = day
  }

  getTimeStamp() {
    return this.day.getTime()
  }
  getFullYear() {
    return this.day.getFullYear()
  }
  getMonth() {
    return this.day.getMonth() + 1
  }
  getDate() {
    return this.day.getDate()
  }
  getWeekDay(lang, isShort) {
    const weekday = this.day.getDate()

    if (lang === "en") {
      switch (weekday) {
        case 0:
          return isShort ? "Sun." : "Sunday"
        case 1:
          return isShort ? "Mon." : "Monday"
        case 2:
          return isShort ? "Tues." : "Tuesday"
        case 3:
          return isShort ? "Wed." : "Wednesday"
        case 4:
          return isShort ? "Thurs." : "Thursday"
        case 5:
          return isShort ? "Fri." : "Friday"
        case 6:
          return isShort ? "Sat." : "Saturday"
        default:
          return isShort ? "Sun." : "Sunday"
      }
    } else {
      switch (weekday) {
        case 0:
          return isShort ? "日" : "星期日"
        case 1:
          return isShort ? "一" : "星期一"
        case 2:
          return isShort ? "二" : "星期二"
        case 3:
          return isShort ? "三" : "星期三"
        case 4:
          return isShort ? "四" : "星期四"
        case 5:
          return isShort ? "五" : "星期五"
        case 6:
          return isShort ? "六" : "星期六"
        default:
          return isShort ? "日" : "星期日"
      }
    }
  }

  getFormatDay(symbol, needAutoCompleteZero) {
    const formatNumber = (number) => (number < 10 ? `0${number}` : number)
    const year = this.getFullYear()
    const month = this.getMonth()
    const date = this.getDate()

    if (needAutoCompleteZero) {
      return [year, formatNumber(month), formatNumber(date)].join(symbol)
    } else {
      return [year, month, date].join(symbol)
    }
  }
}

module.exports = { GetTime }
