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

function display(vec: Interval[]) {
  let string = "[";
  if (vec.length > 0) {
    for (let i = 0; i < vec.length; i++) {
      string += vec[i].formatInterval();
      if (i + 1 < vec.length) {
        string += ", ";
      }
    }
  }
  string += "]";
  return string;
}

export { Interval, display };
