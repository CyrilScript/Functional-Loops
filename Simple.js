// Simple JS Version - 

//Say Hello 3 times in an Array
{[...Array(3)].map((e, i) => "hello")}
//Result =>  ["hello", "hello", "hello"]


//Count to 10 in an Array
{[...Array(11)].map((e, i) => i)}
//Result => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Range Calculator
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  };
  
  console.log(range(9, 18));
//Result =>  [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]