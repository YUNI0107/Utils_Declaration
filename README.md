# Declaration Files Practice

The goal of this project is to collect the function I wrote in projects and hope can be used in multiple projects.

- If you click the method in example, it will link to declaration file and also show the description when you hover the function.
- Practice to use "Class" to achieve the goal of Object-oriented programming. :heart_eyes:

## Testing

Use pure Jest to test each function.

```javascript=
npm run test
```

---

## Methods

## GetTime

| FunctionName                              | Type   | Description                                                                                                                                                                 |
| ----------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getTimeStamp                              | number | Get timeStamp.                                                                                                                                                              |
| getFullYear                               | number | Get Year.                                                                                                                                                                   |
| timerHandler                              | number | Get Month.                                                                                                                                                                  |
| getDate                                   | number | Get Date.                                                                                                                                                                   |
| getWeekDay(lang, isShort)                 | string | @param lang choose English or zh-TW(Transitional Chinese) to display & @param isShort should it need to shorten or not                                                      |
| getFormatDay(symbol,needAutoCompleteZero) | string | @param symbol Add the symbol you want to connect between number & @param needAutoCompleteZero When the month or date is less than 10, Do you need to add 0 in front of them |

### Example

```javascript =
// mock the date object
const date = new Date("Mon Apr 18 2022 17:31:58 GMT+0800 (台北標準時間)")

const timerHandler = new GetTime(date)

console.log(timerHandler.getTimeStamp()) // 1650274500663
console.log(timerHandler.getFullYear()) // 2022
console.log(timerHandler.getMonth()) // 4
console.log(timerHandler.getDate()) // 18
console.log(timerHandler.getWeekDay("en", true)) // Mon.
console.log(timerHandler.getWeekDay("zh", false)) // 星期一
console.log(timerHandler.getFormatDay("-")) // 2022-4-18
console.log(timerHandler.getFormatDay("-", true)) // 2022-04-18
```
