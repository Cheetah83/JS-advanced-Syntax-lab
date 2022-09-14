function solve (str1, str2, str3) {
  let sumLength = str3.length +str2.length +str1.length
  let averageLength = Math.floor(sumLength/3);
  console.log(sumLength);
  console.log(averageLength)
}
solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3')