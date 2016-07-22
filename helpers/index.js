uuid = require('node-uuid');
var helper = {};

helper.uuid = function(files) {
  for(var x in files) {
    files[x].originalname = uuid.v1(files[x].originalname);
  }
  return files;
};

helper.convertFileExtension = function(extension) {
  if(extension === 'jpeg') {
    var convertedExtension = 'jpg';
    return convertedExtension;
  }
};

helper.getFileExtension = function(files) {
  var lastSlashArray = files.lastIndexOf('/') + 1;

  extension = '.' + helper.convertFileExtension(files.substr(lastSlashArray));
  return extension;
};

module.exports = helper;
