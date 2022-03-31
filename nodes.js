let nodes = {};
nodes.nodes = {};
nodes.ips = {};
nodes.names = {};
nodes.nextId = 0;

nodes.getNextId = function getNextId() {
  return nodes.nextId;
}

nodes.exists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof nodes.nodes[id] !== 'undefined';
}

nodes.getName = function getName(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  if(!nodes.exists(id)) throw ReferenceError('Unknown node');
  
  return nodes.nodes[id].name;
}

nodes.setName = function setName(id, creds, newName) {
  if(typeof id !== 'number' || typeof creds !== 'object' || typeof newName !== 'string') throw TypeError('Arguements invalid');
  
}
