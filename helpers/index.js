uuid = require('node-uuid');
var helper = {};

helper.uuid = function(file) {
  var fileuuid = uuid.v1(file);
  return fileuuid;
};

helper.convertFileExtension = function(extension) {
  var ext = ['jpeg'];
  for(i = 0; i < ext.length; i++) {
    if(extension === ext[i]) {
      extension = 'jpg';
    }
  return extension;
  }
};

helper.getFileExtension = function(files) {
  var lastSlashArray = files.lastIndexOf('/') + 1;

  extension = '.' + helper.convertFileExtension(files.substr(lastSlashArray));
  return extension;
};

module.exports = helper;
