module.exports = function check(str, bracketsConfig) {
  const brmap = new Map(bracketsConfig);
  const open_braskets = [...brmap.keys()];
  const close_braskets = [...brmap.values()];
  const stack = [];

  for (let elem of str.split('')) {
    if (close_braskets.includes(elem) && (elem === brmap.get(stack[stack.length-1])) && stack.length>0){
      stack.pop();
    } else if (open_braskets.includes(elem)) {
      stack.push(elem);
    } else {
      return false;
    } 
  }
  return stack.length===0 ? true : false;
}
