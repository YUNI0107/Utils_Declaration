import { GetTime } from "../methods/getTime/getTime"
import { Converter } from "../methods/converter/converter"

// mocks
import { mockJson } from "../mocks/data"

// GetTime
const date = new Date()
const timerHandler = new GetTime(date)

console.log(timerHandler.getTimeStamp())
console.log(timerHandler.getFullYear())
console.log(timerHandler.getMonth())
console.log(timerHandler.getDate())
console.log(timerHandler.getWeekDay("en", true))
console.log(timerHandler.getWeekDay("zh", false))
console.log(timerHandler.getFormatDay("-"))
console.log(timerHandler.getFormatDay("-", true))

// Converter
const converter = new Converter()

console.log(converter.jsonParse(mockJson))
