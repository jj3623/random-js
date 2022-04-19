class Item {
  constructor(iGrid, iId, iName, iX, iY, iData) {
    if(!iGrid instanceof Grid || typeof iId !== 'number' || typeof iName !== 'string' || typeof iX !== 'number' || typeof iY !== 'number') {
      throw TypeError('Arguements invalid');
    }
    
    let grid = iGrid;
    let id = iId;
    let name = iName;
    let x = iX;
    let y = iY;
    let data = iData;
    
    this.getGrid = function getGrid() {
      return grid;
    }
    
    this.getId = function getId()
  }
}

class Grid {
  constructor(iWidth, iHeight) {
    if(typeof iWidth !== 'number' || typeof iHeight !== 'number') throw TypeError('Arguements invalid');
    if(iWidth < 1 || iHeight < 1) throw RangeError('Dimensions invalid');
    
    let width = iWidth;
    let height = iHeight;
    let grid = new Array(width);
    for(let i=0; i<width; i++) {
      grid[i] = new Array(height);
    }
    let nextItemId = 0;
    let items = {};
    
    this.getWidth = function getWidth() {
      return width;
    }
    
    this.getHeight = function getHeight() {
      return height;
    }
    
    this.coordsValid = function coordsValid(x, y) {
      if(typeof x !== 'number' || typeof y !== 'number') throw TypeError('Arguements invalid');
      
      return x >= 0 && y >= 0 && x < width && y < height;
    }
    
    this.isOccupied = function isOccupied(x, y) {
      if(typeof x !== 'number' || typeof y !== 'number') throw TypeError('Arguements invalid');
      if(!this.coordsValid(x, y)) throw RangeError('Coordinates invalid');
      
      return typeof grid[x][y] !== 'undefined';
    }
    
    this.createItem = function createItem(name, x, y, data) {
      if(typeof name !== 'string' || typeof x !== 'number' || typeof y !== 'number') throw TypeError('Arguements invalid');
      if(!this.coordsValid(x, y)) throw RangeError('Coordinates invalid');
      if(this.isOccupied())
      
      let item = new Item(this, nextItemId, x, y, data);
      nextItemId++;
      grid[x][y] = item;
      return item.getId();
    }
    
    this.getItemById = function getItem(id) {
      if(typeof id !== 'number') throw TypeError('Arguements invalid');
      if(typeof items[id] === 'undefined') throw ReferenceError('')
    }
  }
}
