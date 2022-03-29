let c = {};
c.width = 0;
c.height = 0;
c.checks = [];
c.initialized = false;

c.init = function init(width = 20, height = 20) {
  if(width < 1 || height < 1) throw RangeError();
  if(document.getElementById('checks')) document.getElementById('checks').remove();
  c.width = width;
  c.height = height;
  let checks = document.createElement('div');
  checks.id = 'checks';
  
  for(let x=0; x<width; x++) {
    let c.checks[x] = [];
    for(let y=0; y<height; y++) {
      let check = document.createElement('input');
      check.type = 'checkbox';
      c.checks[x][y] = check;
      checks.append(check);
    }
    let br = document.createElement('br');
    checks.append(br);
  }
}

c.reset = function reset() {
  if(document.getElementById('checks')) {
    for(let x=0; x<c.width; x++) {
      for(let y=0; y<c.height; y++) {
        
