uuid = require('node-uuid');
var helper = {};

helper.uuid = function(file) {
  var fileuuid = uuid.v1(file);
  return fileuuid;
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
