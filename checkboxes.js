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
  
  
