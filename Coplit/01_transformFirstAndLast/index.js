function transformFirstAndLast(arr) {
  let newObj = {};
  if (arr.length === 0) {
    return newObj;
  } else {
    newObj[arr[0]] = arr[arr.length - 1];
  }
  return newObj;
}
