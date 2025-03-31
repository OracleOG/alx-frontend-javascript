export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const buffView = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  buffView.setInt8(position, value);

  return buffView;
}



function setFromArray(arr) {
  return (new Set(arr))
}


console.log(setFromArray([12, 32, 15, 78, 98, 15]));


function hasValuesFromArray(set, arr) {

  for (const val of arr) {
    let bool = set.has(val)
    if (!bool) {
      return false
    }
  }
  return true
}

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
