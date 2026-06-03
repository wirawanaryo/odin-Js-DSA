function fibonacci(iteration) {
  // basecase
  console.log("This was printed recursively");
  if(iteration<=0) return [];
  if(iteration===1) return [0];
  if(iteration===2) return [0,1];

  const ans = fibonacci(iteration-1);
  ans.push(ans[ans.length-1]+ans[ans.length-2]);
  return ans;
}

console.log(fibonacci(8))