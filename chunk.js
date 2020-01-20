const chunkArray = (arr, len) => {
  //init chunked array
  const chunkedArr = [];

  //loop through array
  arr.forEach(val => {
    //get last
    const last = chunkedArr[chunkedArr.length - 1];

    //checks if last and last length is equal to chunked length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

module.exports = chunkArray;