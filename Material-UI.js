/* CODE */
{[...Array(11)].map((e, i) => (<MenuItem value={i} key={i}>{i}</MenuItem>)).slice(1)}


/* RESULT
<MenuItem value={1}>1</MenuItem>
<MenuItem value={2}>2</MenuItem>
<MenuItem value={3}>3</MenuItem>
<MenuItem value={4}>4</MenuItem>
<MenuItem value={5}>5</MenuItem>
<MenuItem value={6}>6</MenuItem>
<MenuItem value={7}>7</MenuItem>
<MenuItem value={8}>8</MenuItem>
<MenuItem value={9}>9</MenuItem> 
<MenuItem value={10}>10</MenuItem> 
*/
