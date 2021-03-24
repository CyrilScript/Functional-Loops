function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  };
  
  console.log(range(9, 18));