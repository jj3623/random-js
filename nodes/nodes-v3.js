let net = {};
net.nodes = {};
net.nextId = 0;

net.checkIp = function checkIp(ip) { //only checks syntax
  if(typeof ip !== 'string' || !ip) throw TypeError('Arguements invalid');
  
  let regex = /^([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regex.test(ip);
}

net.exists = function exists(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  
  return typeof net.nodes[id] !== 'undefined';
}

net.create = function create(type, name) {
  if(typeof type !== 'string' || typeof name !== 'string' || !name) throw TypeError('Arguements invalid');
  if(type !== 'pc' && type !== 'switch' && type !== 'router') throw TypeError('Arguements invalid');
  
  let node = {};
  node.id = net.nextId;
  node.type = type;
  node.name = name;
  node.gw = {};
  node.gw.id = -1;
  node.gw.ip = '0.0.0.0';
  node.ints = {};
  let intCount = 0;
  
  switch(type) {
    case 'pc':
      intCount = 1;
    break;
    
    case 'switch':
      intCount = 12;
    break;
    
    case 'router':
      intCount = 4;
    break;
  }
  
  for(let i=0; i<intCount; i++) {
    node.ints[i] = {};
    node.ints[i].id = i;
    node.ints[i].name = 'ethernet' + i;
    node.ints[i].ip = '0.0.0.0';
    node.ints[i].con = {};
    node.ints[i].con.con = false;
    node.ints[i].con.id = -1;
    node.ints[i].con.ip = '0.0.0.0';
  }
  
  net.nodes[net.nextId] = node;
  net.nextId++;
  return node.id;
}

net.remove = function remove(id) {
  if(typeof id !== 'number') throw TypeError('Arguements invalid');
  if(!net.exists(id)) throw ReferenceError('Unkown node');
  
  let node = net.nodes[id];
  for(let i=0; i<Object.keys(node.ints).length; i++) {
    let int = node.ints[i];
    if(int.con.con) {
      nodes.
