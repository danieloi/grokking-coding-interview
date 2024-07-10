

export function printMatrix(mat) {
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[0].length; j++) {
			if (j === 0) {
				process.stdout.write("\t" + mat[i][j] + "  ");
			} else {
				process.stdout.write(mat[i][j] + "  ");
			}
		}
		console.log();
	}
}