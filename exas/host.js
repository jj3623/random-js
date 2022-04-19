class Host {
  constructor(iId, iName, iWidth, iHeight) {
    if(typeof iId !== 'number' || typeof iName !== 'string' || !iName || typeof iWidth !== 'number' || typeof iHeight !== 'number') {
      throw TypeError('Arguements invalid');
    }
    if(iWidth < 1 || iHeight < 1) throw RangeError('Dimensions invalid');
    
    let id = iId;
    let name = iName;
    let width = iWidth;
    let height = iHeight;
    let cells = new Array(width);
    for(let i=0; i<width; i++) {
      cells[i] = new Array(height);
    }
    let links = {};
    
    this.getId = function getId() {
      return id;
    }
    
    this.getName = function getName() {
      return name;
    }
    
    this.setName = function setName(newName) {
      if(typeof newName !== 'string') throw TypeError('Arguements invalid');
      
      name = newName;
    }
    
    this.getWidth = function getWidth() {
      return width;
    }
    
    this.getHeight = function getHeight() {
      return height;
    }
    
    this.
  }
}
