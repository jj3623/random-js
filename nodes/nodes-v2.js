let net = {
  networks: {
    networks: {
      0: {
        id: 0,
        parent: 0,
        ip: '0.0.0.0',
        nodes
      }
    },
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
  
  let regex = /^([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regex.test(ip);
}
