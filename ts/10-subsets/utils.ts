export function lstToSetStr(lst) {
  if (lst.length === 0) {
    const out = "{}";
    return out;
  }
  var i;
  let out = "{";
  for (i = 0; i < lst.length - 1; i++) {
    out += lst[i] + ", ";
  }
  out += lst[i] + "}";
  return out;
}

export function twoDLstToSetStr(lst) {
  if (lst.length === 1) {
    const out = "[{}]";
    return out;
  }
  let out = "[{}, ";
  let count1 = 0;
  for (var i = 1; i < lst.length; i++) {
    let count2 = 0;
    out += "{";
    for (var j = 0; j < lst[i].length; j++) {
      if (count2 === lst[i].length - 1) {
        out += lst[i][j] + "}";
      } else {
        out += lst[i][j] + ", ";
      }

      count2++;
    }
    count1++;

    if (count1 === lst.length - 1) {
      out += "]";
    } else {
      out += ", ";
    }
  }
  return out;
}

export function printList(lst) {
  let output = "[";
  var i = 0;
  for (i = 0; i < lst.length - 1; i++) {
    output += lst[i] + ", ";
  }
  output += lst[i] + "]";
  return output;
}
