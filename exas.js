class Host {
  constructor(iId, iName, iLength, iWidth) {
    if(typeof id !== 'number' || typeof name !== 'string' || !name || typeof length !== 'number' || typeof width !== 'number') {
      throw TypeError('Arguements invalid');
    }
    if(length < 1 || width < 1) throw RangeError('Invalid length and/or width');
    
    let id = iId;
    let name = iName;
  }
}
