function insertSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var value = a[i];
		var i = i - 1;
		while (j >= 0 && arr[j] > value) {
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = value;
	}
}