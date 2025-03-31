export default function setFromArray(arr) {
  const newSet = new Set(arr);
  return newSet;
}

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
