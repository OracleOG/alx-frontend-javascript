export default function* createIteratorObject(report) {
  const dict = report.allEmployees;
  console.log(dict);
  const iter = report.allEmployees;
  for (const key in iter) {
    if (Object.prototype.hasOwnProperty.call(iter, key)) {
      for (const value of iter[key]) {
        yield value;
      }
    }
  }
}
