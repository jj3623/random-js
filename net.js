net = {};
net.nodes = {};
net.nextId = 0;
net.grid = new Array(25);
for(let i=0; i<25; i++) {
  net.grid[i] = new Array(25);
}

net.getNextId = function getNextId() {
  return net.nextId;
}

net.list = function list() {
  let out = [];
  for(let i in net.nodes) {
    out[i] = net.nodes[i].name;
  }
  return out;
}

net.exists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof net.nodes[id] !== 'undefined';
}
