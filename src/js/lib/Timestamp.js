export default class Timestamp {
  constructor (opts = {}) {
    this.duration = opts.duration;
    this.start = 0;
    this.current = this.duration;
  }// end constructor

  startCount () {
    this.start = new Date().getTime();
  }// end addTimestamp

  calcTime () {
    this.current = this.duration - (new Date().getTime() - this.start) / 1000;
    return this.current;
  }// end calcTime
};// end Timestamp