function onFormSubmit(e) {
  var items = e.response.getItemResponses();
  var currFile = items[5].getResponse();
  var hindiFolder = DriveApp.getFolderById('...');
  var englishFolder = DriveApp.getFolderById('...');
  var artFolder = DriveApp.getFolderById('...');
  
  var hindiCount = DriveApp.getFileById('...');
  var englishCount = DriveApp.getFileById('...');
  var artCount = DriveApp.getFileById('...');
  
  var category = items[4].getResponse();
  if (category == 'Hindi') {
    count = +hindiCount.getName();
    for (var i=0; i< currFile.length; i++) {
      count = count + 1;
      file = DriveApp.getFileById(currFile[i]);
      file.makeCopy(count + '-'+ items[1].getResponse()+'-'+ items[0].getResponse(), hindiFolder);
      file.setTrashed(true);
    }
    hindiCount.setName(count);
  } else if (category == 'English') {
    count = +englishCount.getName();
    for (var i=0; i< currFile.length; i++) {
      count = count + 1;
      file = DriveApp.getFileById(currFile[i]);
      file.makeCopy(count + '-'+items[1].getResponse()+'-'+ items[0].getResponse(), englishFolder);
      file.setTrashed(true);
    }
    englishCount.setName(count);
  } else if (category == 'Artwork') {
    count = +artCount.getName();
    for (var i=0; i< currFile.length; i++) {
      count = count + 1;
      file = DriveApp.getFileById(currFile[i]);
      file.makeCopy(count + '-'+items[1].getResponse()+'-'+ items[0].getResponse(), artFolder);
      file.setTrashed(true);
    };
    artCount.setName(count);
  }
}


