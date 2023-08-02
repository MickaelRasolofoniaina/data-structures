// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1, 1, 2, 3

function fib(nth){
  if(nth === 1 || nth === 2) return 1;
  return fib(nth - 2) + fib(nth - 1);
}

console.log(fib(10));