

export function printMatrix(matrix) {
	console.log("[");
	for (let i = 0; i < matrix.length; i++) {
	  console.log("  [" + matrix[i].join(", ") + "]");
	}
	console.log("]");
  }
  

  export function arrayToString(arr) {
    return "[" + arr.join(", ") + "]";
}