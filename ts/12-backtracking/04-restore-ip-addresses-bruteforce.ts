function leading_0(string) {
  return string[0] === "0" && string !== "0";
}

function valid(part) {
  return !leading_0(part) && parseInt(part) <= 255;
}

function valid_ip(nums) {
  return nums.every((part) => valid(part));
}

function restoreIpAddresses(s) {
  const ret: string[] = [];
  const length = s.length;
  for (let i = 1; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const ip = [
          s.slice(0, i),
          s.slice(i, j),
          s.slice(j, k),
          s.slice(k),
        ];
        if (valid_ip(ip)) {
          ret.push(ip.join("."));
        }
      }
    }
  }
  return ret;
}
