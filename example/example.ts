import { GetTime } from "../getTime/getTime"
import { getArrayLength } from "../getTime/timetest"

const date = new Date()
const timerHandler = new GetTime(date)

console.log(timerHandler.getTimeStamp())

getArrayLength([0, 2, 3])
