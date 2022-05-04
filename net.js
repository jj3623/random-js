net = {};
net.nodes = {};
net.nextId = 0;
net.grid = new Array(25);
for(let i=0; i<25; i++) {
  net.grid[i] = new Array(25);
}

net.nodeGetNextId = function getNextId() {
  return net.nextId;
}

net.nodeList = function list() {
  let out = [];
  for(let i in net.nodes) {
    out[i] = net.nodes[i].name;
  }
  return out;
}

net.nodeExists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof net.nodes[id] !== 'undefined';
}

net.createNode = function createNode(type, name, x, y) {
  if(typeof type !== 'string' ||
     typeof name !== 'string' ||
     typeof x !== 'number' ||
     typeof y !== 'number' ||
     (type !== 'computer' && type !== 'router' && type !== 'switch') ||
     !name ||
     x < 0 ||
     x > 24 ||
     y < 0 ||
     y > 24) {
    throw TypeError('Arguements invalid');
  }
  if()
}

net.getType = function getType(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  if(!net.exists(id)) throw ReferenceError('Unknown node');
  
  return net.nodes[id].type;
}
