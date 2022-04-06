let net = {};
net.nodes = {};
net.nextId = 0;

net.exists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof net.nodes[id] !== 'undefined';
}

net.create = function create(name) {
  if(typeof name !== 'string' || !name) throw TypeError('Arguements invalid');
  
  let node = {};
  node.id = net.nextId;
  node.name = name;
  node.ints = {};
  
  net.nodes[node.id] = node;
  net.nextId++;
  return node.id;
}

net.remove = function remove(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  if(!net.exists(id)) throw ReferenceError('Unknown node');
  
  let node = net.nodes[id];
  for(let i=0; i<)
