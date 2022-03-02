import { GetTime } from "../getTime/getTime"

const date = new Date()

console.log(date.getFullYear())

const timerHandler = new GetTime(date)

console.log(timerHandler.getTimeStamp())
console.log(timerHandler.getDate())
console.log(timerHandler.getWeekDay("en", true))
console.log(timerHandler.getWeekDay("zh", false))
console.log(timerHandler.getFormatDay("-"))
console.log(timerHandler.getFormatDay("-", true))
