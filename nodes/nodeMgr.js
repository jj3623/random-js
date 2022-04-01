let nodes = {};
nodes.nodes = {};
nodes.nextId = 0;
nodes.maps = {};
nodes.maps.ips = {};
nodes.maps.names = {};

nodes.getNextId = function getNextId() {
  return nodes.nextId;
}

nodes.getCount = function getCount() {
  let keys = Object.keys(nodes.nodes);
  return keys.length;
}

nodes.exists = function exists(id) {
  
