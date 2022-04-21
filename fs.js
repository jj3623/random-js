class File {
  constructor(iFs, iId, iParent, iName) {
    if(typeof iFs !== 'object' || !iFs instanceof FS || typeof iId !== 'number' || typeof iParent !== 'number' || typeof iName !== 'string' || !name) {
      throw TypeError('Arguements invalid');
    }
    if(!iFs.exists(id) || iFs.trashed(id) || iFs.type(id) !== 'folder') throw ReferenceError('Parent folder invalid');
    
    let fs = iFs;
    let id = iId;
    let trashed = false;
    let parent = iParent;
    let name = iName;
    let description = '';
    let content = '';
    
    this.getFs = function getFs() {
      return fs;
    }
    
    this.getId = function getId() {
      return id;
    }
    
    this.getParent = function getParent() {
      return parent;
    }
    
    this.setParent = function setParent(newParent) {
      if(typeof id !== 'number') throw TypeError('Arguements invalid');
      if(!fs.exists(newParent) || fs.trashed(newParent) || fs.type(newParent) !== 'folder') throw ReferenceError('Parent folder invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      fs.get(parent).removeChild(id);
      fs.get(newParent).addChild(id);
      parent = newParent;
      return this;
    }
    
    this.getName = function getName() {
      return name;
    }
    
    this.setName = function setName(newName) {
      if(typeof newName !== 'string' || !newName) throw TypeError('Arguements invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      name = newName;
      return this;
    }
    
    this.getDescription = function getDescription() {
      return description;
    }
    
    this.setDescription = function setDescription(newDescription) {
      if(typeof newDescription !== 'string') throw TypeError('Arguements invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      description = newDescription;
      return this;
    }
    
    this.getContent = function getContent() {
      return description;
    }
    
    this.setContent = function setContent(newContent) {
      if(typeof newContent !== 'string') throw TypeError('Arguements invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      content = newContent;
      return this;
    }
    
    this.getTrashed = function getTrashed() {
      return trashed;
    }
    
    this.setTrashed = function setTrashed(newTrashed) {
      if(typeof newTrashed !== 'boolean') throw TypeError('Arguements invalid');
      
      trashed = newTrashed;
      return this;
    }
    
    this.remove = function remove() {
      fs.remove(id);
    }
  }
}

class Folder {
  constructor(iFs, iId, iParent, iName) {
    if(typeof iFs !== 'object' || !iFs instanceof FS || typeof iId !== 'number' || typeof iParent !== 'number' || typeof iName !== 'string' || !name) {
      throw TypeError('Arguements invalid');
    }
    if((!iFs.exists(id) || iFs.trashed(id) || iFs.type(id) !== 'folder') && ) throw ReferenceError('Parent folder invalid');
    
    let fs = iFs;
    let id = iId;
    let trashed = false;
    let parent = iParent;
    let name = iName;
    let description = '';
    let children = {};
    
    this.getFs = function getFs() {
      return fs;
    }
    
    this.getId = function getId() {
      return id;
    }
    
    this.getParent = function getParent() {
      return parent;
    }
    
    this.setParent = function setParent(newParent) {
      if(typeof id !== 'number') throw TypeError('Arguements invalid');
      if(!fs.exists(newParent) || fs.trashed(newParent) || fs.type(newParent) !== 'folder') throw ReferenceError('Parent folder invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      fs.get(newParent).addChild(id);
      return this;
    }
    
    this.getName = function getName() {
      return name;
    }
    
    this.setName = function setName(newName) {
      if(typeof newName !== 'string' || !newName) throw TypeError('Arguements invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      name = newName;
      return this;
    }
    
    this.getDescription = function getDescription() {
      return description;
    }
    
    this.setDescription = function setDescription(newDescription) {
      if(typeof newDescription !== 'string') throw TypeError('Arguements invalid');
      if(fs.trashed(id)) throw ReferenceError('This file is trashed');
      
      description = newDescription;
      return this;
    }
    
    //folder funcs here
    
    this.getTrashed = function getTrashed() {
      return trashed;
    }
    
    this.setTrashed = function setTrashed(newTrashed) {
      if(typeof newTrashed !== 'boolean') throw TypeError('Arguements invalid');
      
      trashed = newTrashed;
      return this;
    }
    
    this.remove = function remove() {
      fs.remove();
    }
  }
}
