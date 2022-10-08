const arr = [1, 2, 3, 4, 5, 6];
const findCumulativeSum = arr => {
   const creds = arr.reduce((acc, val) => {
      let { sum, res } = acc;
      sum += val;
      res.push(sum);
      return { sum, res };
   }, {
      sum: 0,
      res: []
   });
   return creds.res;
};
console.log("The cumulative sum is :");
console.log(findCumulativeSum(arr));