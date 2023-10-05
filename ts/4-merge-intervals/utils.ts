class Interval {
  start: number;
  end: number;
  closed: boolean;
  setClosed: (closed: boolean) => void;
  formatInterval: () => string;
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.closed = true; // the interval is closed by default

    this.setClosed = function (closed) {
      this.closed = closed;
    };

    this.formatInterval = function () {
      return this.closed
        ? "[" + this.start + ", " + this.end + "]"
        : "(" + this.start + ", " + this.end + ")";
    };
  }
}

export { Interval };
