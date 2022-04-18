const { GetTime } = require("../getTime/getTime")

const date = new Date("Thu Mar 03 2022 17:30:16 GMT+0800 (台北標準時間)")

describe("Test getTime Function", () => {
  it("Should get timeStamp 1646299816000, when you provide the date with Date type.", () => {
    const timer = new GetTime(date)
    expect(timer.getTimeStamp()).toBe(1646299816000)
  })

  it("Should get 2022 as year, when you provide the date with Date type.", () => {
    const timer = new GetTime(date)
    expect(timer.getFullYear()).toBe(2022)
  })

  it("Should get 3 as month, when you provide the date with Date type without format the number.", () => {
    const timer = new GetTime(date)
    expect(timer.getMonth()).toBe(3)
  })

  it("Should get 3 as date, when you provide the date with Date type.", () => {
    const timer = new GetTime(date)
    expect(timer.getDate()).toBe(3)
  })

  it.each`
    lang    | weekday        | langFullName | time
    ${"zh"} | ${"星期日"}    | ${"Chinese"} | ${"Sun Feb 27 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期一"}    | ${"Chinese"} | ${"Mon Feb 28 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期二"}    | ${"Chinese"} | ${"Tue Mar 01 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期三"}    | ${"Chinese"} | ${"Wed Mar 02 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期四"}    | ${"Chinese"} | ${"Thu Mar 03 2022 17:30:16 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期五"}    | ${"Chinese"} | ${"Fri Mar 04 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"星期六"}    | ${"Chinese"} | ${"Sat Mar 05 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Sunday"}    | ${"English"} | ${"Sun Feb 27 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Monday"}    | ${"English"} | ${"Mon Feb 28 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Tuesday"}   | ${"English"} | ${"Tue Mar 01 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Wednesday"} | ${"English"} | ${"Wed Mar 02 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Thursday"}  | ${"English"} | ${"Thu Mar 03 2022 17:30:16 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Friday"}    | ${"English"} | ${"Fri Mar 04 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Saturday"}  | ${"English"} | ${"Sat Mar 05 2022 08:00:00 GMT+0800 (台北標準時間)"}
  `(
    "Should get $langFullName weekday $weekday, when you provide the date with Date type and set to $langFullName.",
    ({ lang, weekday, time }) => {
      const eachDate = new Date(time)
      const timer = new GetTime(eachDate)
      expect(timer.getWeekDay(lang)).toMatch(weekday)
    }
  )

  it.each`
    lang    | weekday     | langFullName | time
    ${"zh"} | ${"日"}     | ${"Chinese"} | ${"Sun Feb 27 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"一"}     | ${"Chinese"} | ${"Mon Feb 28 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"二"}     | ${"Chinese"} | ${"Tue Mar 01 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"三"}     | ${"Chinese"} | ${"Wed Mar 02 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"四"}     | ${"Chinese"} | ${"Thu Mar 03 2022 17:30:16 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"五"}     | ${"Chinese"} | ${"Fri Mar 04 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"zh"} | ${"六"}     | ${"Chinese"} | ${"Sat Mar 05 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Sun."}   | ${"English"} | ${"Sun Feb 27 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Mon."}   | ${"English"} | ${"Mon Feb 28 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Tues."}  | ${"English"} | ${"Tue Mar 01 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Wed."}   | ${"English"} | ${"Wed Mar 02 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Thurs."} | ${"English"} | ${"Thu Mar 03 2022 17:30:16 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Fri."}   | ${"English"} | ${"Fri Mar 04 2022 08:00:00 GMT+0800 (台北標準時間)"}
    ${"en"} | ${"Sat."}   | ${"English"} | ${"Sat Mar 05 2022 08:00:00 GMT+0800 (台北標準時間)"}
  `(
    "Should get $langFullName weekday shortname $weekday, when you provide the date with Date type and set to $langFullName shortname.",
    ({ lang, weekday, time }) => {
      const eachDate = new Date(time)
      const timer = new GetTime(eachDate)
      expect(timer.getWeekDay(lang, true)).toMatch(weekday)
    }
  )

  it("Should add 0 in front of the number of month and date in order to format, when those number are less than 10.", () => {
    const timer = new GetTime(date)
    expect(timer.getFormatDay("-", true)).toMatch("2022-03-03")
  })

  it("Should show origin number of month and date without format, even if those number are less than 10.", () => {
    const timer = new GetTime(date)
    expect(timer.getFormatDay("-")).toMatch("2022-3-3")
  })

  it("Should combine with the symbol, which setting to be used.", () => {
    const timer = new GetTime(date)
    expect(timer.getFormatDay(".")).toMatch("2022.3.3")
    expect(timer.getFormatDay("!")).toMatch("2022!3!3")
    expect(timer.getFormatDay("+")).toMatch("2022+3+3")
  })
})
