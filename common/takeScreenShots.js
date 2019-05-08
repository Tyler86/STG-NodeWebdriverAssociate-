var fs = require('fs');

module.exports  = {
  takeScreenShot : function ( name, driver){
    let imageName = '.\/screenshots\/'+ name +'.jpg'
    driver.takeScreenshot().then(function (base64Image) {
      var decodedImage = new Buffer(base64Image, 'base64');
      fs.writeFile(imageName, decodedImage, function(err) {});
      console.log('screenshot taken name - ' + imageName);
  });
}
}