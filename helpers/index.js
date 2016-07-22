var helper = {};


helper.getFileExntesion = function(file) {
  var lastDotArray = file.lastIndexOf('.');
  extension = file.substr(lastDotArray);
  return extension;
};

module.exports = helper;
