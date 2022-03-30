let c = {};
c.initialized = false;
c.width = 0;
c.height = 0;
c.checks = [];

c.init = function init(width = 20, height = 20) {
  if(typeof width !== 'number' || typeof height !== 'number') throw TypeError('Invalid arguements');
  if(c.initialized) throw Error('Already initialized');
  if(width < 1 || height < 1) throw RangeError('Invalid dimensions');
  if(document.getElementById('checks')) document.getElementById('checks').remove();
  c.width = width;
  c.height = height;
  c.checks = [];
  let div = document.createElement('div');
  div.id = 'checks';
  
  for(let x=0; x<width; x++) {
    let checks[x] = [];
    for(let y=0; y<height; y++) {
      let check = document.createElement('input');
      check.type = 'checkbox';
      c.checks[x][y] = check;
      div.append(check);
    }
    let br = document.createElement('br');
    div.append(br);
  }
  document.body.append(div);
  c.initialized = true;
}

c.reset = function reset() {
  if(!c.initialized) throw Error('Not initialized');
  c.initialized = false;
  c.width = 0;
  c.height = 0;
  c.checks = [];
  document.getElementById('checks').remove();
}

c.clear = function clear() {
  if(!c.initialized) throw Error('Not initialized');
  
  for(let x=0; x<c.width; x++) {
    for(let y=0; y<c.height; y++) {
      c.checks[x][y].checked = false;
    }
  }
}

c.invert = function invert() {
  if(!c.initialized) throw Error('Not initialized');
  
  for(let x=0; x<c.width; x++) {
    for(let y=0; y<c.height; y++) {
      c.checks[x][y].checked = !c.checks[x][y].checked;
    }
  }
}

c.get = function get(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') throw TypeError('Invalid arguements');
  if(!c.initialized) throw Error('Not initialized');
  if(x < 1 || x >= c.width || y < 1 || y >= c.height) throw RangeError('Invalid coordinates');
  
  return c.checks[x][y].checked;
}

c.set = function set(x, y, v) {
  if(typeof x !== 'number' || typeof y !== 'number' || typeof v !== 'boolean') throw TypeError('Invalid arguements');
  if(!c.initialized) throw Error('Not initialized');
  if(x < 1 || x >= c.width || y < 1 || y >= c.height) throw RangeError('Invalid coordinates');
  
  c.checks[x][y].checked = v;
}

c.box = function box(x1, y1, x2, y2) {
  if(typeof x1 !== 'number' || typeof y1 !== 'number' || typeof x2 !== 'number' || typeof y2 !== 'number') throw TypeError('Invalid arguements');
  if(!c.initialized) throw Error('Not initialized');
  if(x1 < 1 || x1 >= c.width || y1 < 1 || y1 >= c.height || x2 < 1 || x2 >= c.width || y2 < 1 || y2 >= c.height) throw RangeError('Invalid coordinates');
  
  for(let x=x1; x<x2; x++) {
    
