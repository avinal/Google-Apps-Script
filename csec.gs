function onFormSubmit(e) {
  var items = e.response.getItemResponses();
  var name = items[0].getResponse();
  var email = items[3].getResponse();
  var roll = items[1].getResponse();
  var count = DriveApp.getFileById('...');
  serial = +count.getName();
  var has_resume="\n";
  try {
    var resume = items[5].getResponse();
    file = DriveApp.getFileById(resume);
    
    if (file != null) {
      file.setName((serial+1)+'-'+roll+'-'+name);
    }
  }catch(ex){
    has_resume="\nYou have not submitted resume, please carry it during interview.";
  }
  
  count.setName(serial+1);
  
  // send confirmation
  var subject = "CSEC 2nd Yr Interview Confirmation"
  var message = "Hello "+ name +  ",\n" +
    "This is a confirmation mail to let you know that we have received your form submission."+
      " The interview will be conducted on January 6-7th, 2021, all further instruction will be given via WhatsApp. "+
    "Please join the WhatsApp Group given below.\n\n"+
      "https://chat.whatsapp.com/LhIoddHFIfb5b0A9mXGNxE \n"+
        has_resume+"\nSee you at the interview, Good Luck.\n"+
          "\nFollows us on:-\n"+
            "GLUG Discord:- https://discord.gg/SSQmhmrV2B \n"+
              "Instagram:- https://www.instagram.com/glugnith/ \n"+
                "Facebook:- https://www.facebook.com/csec.nith \n"+
                  "LinkedIn:- https://www.linkedin.com/company/csecnith \n\n"+
        "\nRegards\n"+"\nComputer Science Engineers' Society\n"+"NIT Hamirpur\n";
  GmailApp.sendEmail(email, subject, message, {
    noReply:true,
    name: "CSEC"
  });
}
