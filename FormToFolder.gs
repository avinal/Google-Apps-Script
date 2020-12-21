// @author Avinal Kumar
// @date December 20th, 2020
// @brief This Google Apps Script moves files to seperate folders on basis of certain 
// response when a form is submitted.


// Trigger function to run when form is submitted
function onFormSubmit(e) {
    // get all items
    var items = e.response.getItemResponses();
    // get ID(s) of the file items , 0 indexing 
    var files = items[1].getResponse();

    // define destination folders from google drive 
    var dest1 = DriveApp.getFolderById('dest1 folder ID');
    var dest2 = DriveApp.getFolderById('dest2 folder ID');

    // deciding factor 
    var option = items[2].getResponse();

    switch (option) {
        case "dest1":
            for (var i = 0; i < files.length; i++) {
                // get file
                file = DriveApp.getFileById(files[i]);
                // move file to destination 
                moveFile(file, "rename", dest1);
            }
            break;
        case "dest2":
            for (var i = 0; i < files.length; i++) {
                // get file
                file = DriveApp.getFileById(files[i]);
                // move file to destination 
                moveFile(file, "rename", dest2);
            }
            break;
        // add more options
    }
}

// move file function
function moveFile(file, rename, folder) {
    file.makeCopy(rename, folder);
    file.setTrashed(true);
}