var arr = [];
for (let i = 1; i <= 7; i++) {
    arr[i] = [];
    for (let j = 1; j <= 7; j++) {

        if (i === j) {
            arr[i][j] = 1
        } else {
            arr[i][j] = 0
        }
    }
}

console.table(arr);
