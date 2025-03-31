export default function cleanSet(set, startString) {
  if (startString !== '') {
    let result = [...set]
      .filter((value) => typeof(value) === 'string' && value.startsWith(startString))
      .map((value) => value.slice(startString.length))
      .join('-');

    return result;
  }
  return '';
}


console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
console.log(cleanSet(set, 'id-'));