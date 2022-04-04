let net = {
  networks: {
    networks: {},
    map: {},
    nextId: 0
  },
  nodes: {
    nodes: {},
    map: {},
    nextId: 0
  }
};

net.checkIp = function checkIp(ip) { //only checks syntax
  if(typeof ip !== 'string' || !ip) throw TypeError('Arguements invalid');
  
  let regex
