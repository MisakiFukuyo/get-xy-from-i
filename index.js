module.exports = function(i, width){
  const x = i % width;
  const y = (i - x) / width;
  return {x, y};
}
