let c = {};
c.initialized = false;
c.width = 0;
c.height = 0;
c.checks = [];

c.init = function init(width = 20, height = 20) {
  if(c.initialized) throw Error('Already initialized');
  if(width < 1 || height < 1) throw RangeError('Invalid dimensions');
  c.width = width;
  c.height = height;
  c.checks = [];
  
  
  for(let x=0; x<width; x++) {
    for(let y=0; y<height; y++) {
      let check = document.createElement('input');
      check.type =
