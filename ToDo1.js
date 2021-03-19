
function pushFront(arr, value) {
	for(let i = arr.length; i > 0; i--)
		arr[i] = arr[i-1]
	console.log(arr);
	arr[0] = value;
}

pushFront([2,4,5,8,7,13,12,9,0])

function popFront(arr) {
	const val = arr[0];
	for(let i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
    console.log(arr);
	return val;
}
popFront([2,4,5,8,7,13,12,9,0])

function insertAt(arr, idx, val) {
	for(let i = arr.length; i > idx; i--)
		arr[i] = arr[i-1]
	console.log(arr);
	arr[idx] = val;
}
insertAt([2,4,5,8,7,13,12,9,0])

function removeAt(arr, idx) {
	toRemove = arr[idx];
	for(let i = idx; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr);
    return toRemove;
}
removeAt([2,4,5,8,7,13,12,9,0])

function swapPairs(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
        console.log(arr)
	}
}
swapPairs([2,3,4,5,5,6,7,8,9])

function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
    console.log(newArr);
	return newArr;
}

removeDupesUnnested([2,4,5,8,6,6,8,7,13,12,9,0])