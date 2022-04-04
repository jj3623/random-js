let nodes = {};
nodes.nodes = {};
nodes.nextId = 0;
nodes.maps = {};
nodes.maps.ips = {};
nodes.maps.names = {};

nodes.validateIp = function validateIp(ip) {
  if(typeof ip !== 'string' || !ip) throw TypeError('Arguements invalid');
  
  let regex = /^([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regex.test(ip);
}

nodes.randomIp = function randomIp() {
  let ip = '';
  for(let i=0; i<4; i++) {
    ip += Math.floor(Math.random()*255)+1 + '.';
  }
  return ip.slice(0, -1);
}

nodes.ipInUse = function ipInUse(ip) {
  if(typeof ip !== 'string' || !ip) throw TypeError('Arguements invalid');
  
  return typeof nodes.maps.ips[ip] !== 'undefined';
}

nodes.ipToId = function ipToId(ip) {
  if(typeof ip !== 'string' || !ip) throw TypeError('Arguements invalid');
  if(!nodes.ipInUse(ip)) throw ReferenceError('IP not in use');
  
  return nodes.maps.ips[ip];
}

nodes.nameInUse = function nameInUse(name) {
  if(typeof name !== 'string' || !name) throw TypeError('Arguements invalid');
  
  return typeof nodes.maps.names[name] !== 'undefined';
}

nodes.nameToId = function nameToId(name) {
  if(typeof name !== 'string' || !name) throw TypeError('Arguements invalid');
  if(!nodes.nameInUse(name)) throw ReferenceError('Name not in use');
  
  return nodes.maps.names[name];
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
  if(nodes.ipInUse(ip)) throw ReferenceError('IP in use');
  if(nodes.nameInUse(name)) throw ReferenceError('Name in use');
  
  let node = {};
  node.id = nodes.nextId;
  node.ip = ip;
  node.name = name;
  nodes.maps.ips[ip] = nodes.nextId;
  nodes.maps.names[name] = nodes.nextId;
  
  node.users = {};
  node.users.users = {};
  node.users.map = {};
  node.users.nextId = 1;
  node.users[0] = {
    id: 0,
    username: 'admin',
    password: password,
    level: 'admin',
    canChangePass: true
  };
  node.users.map['admin'] = 0;
  
  node.fs = {};
  node.fs.sys = {};
  node.fs.home = {};
  
  node.logs = {};
  node.logs.logs = {};
  node.logs.nextId = 1;
  node.logs[0] = {
    id: 0,
    type: 'created',
    time: Date.now()
  };
  
  nodes[id] = node;
