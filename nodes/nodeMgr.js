let nodes = {};
nodes.nodes = {};
nodes.nextId = 0;
nodes.maps = {};
nodes.maps.ips = {};
nodes.maps.names = {};

nodes.validateIP = function validateIP(ip) {
  if(typeof ip !== 'string') throw TypeError('Arguements invalid');
  
  let regex = /([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regex.test(ip);
}

nodes.randomIP = function randomIP() {
  let ip = '';
  for(let i=0; i<4; i++) {
    ip += Math.floor(Math.random()*255)+1 + '.';
  }
  return ip.slice(0, -1);
}

nodes.getNextId = function getNextId() {
  return nodes.nextId;
}

nodes.getCount = function getCount() {
  let keys = Object.keys(nodes.nodes);
  return keys.length;
}

nodes.exists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof nodes.nodes[id] !== 'undefined';
}

nodes.create = function create(ip, name, password) {
  if(typeof ip !== 'string' || typeof name !== 'string' || typeof password !== 'string') throw TypeError('Arguements invalid');
  if(!nodes.validateIP(ip)) throw TypeError('Arguements invalid');
