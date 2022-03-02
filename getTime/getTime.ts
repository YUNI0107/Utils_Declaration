export class GetTime {
  constructor(public date: Date) {}

  getTimeStamp() {
    return this.date.getTime()
  }

  getFormatDate() {}
}
