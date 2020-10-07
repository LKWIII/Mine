function ObjToArray(obj) {
  var result = [];
  for (key in obj) {
    var value = obj[key];
    currentArr = [key, value];
    result.push(currentArr);
  }
  return result;
}
