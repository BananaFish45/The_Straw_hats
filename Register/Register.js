// Commands to run server:
//      npm init
//      npm install nedb
//      node *.js
// The Submit button's onClick function
// Creating the database
const DatabaseStore = require("nedb");
const database = new DatabaseStore("../uploadprofile.db");
database.loadDatabase();
console.log("UploadProfile Running!");
// database.insert({Names:"P",Artwork_Desc:"I",Price:"U",Tax_Number:"I",Contact_Details:"J",Owner_Image:"B",Picture:"N"});

function submitData() {

    database.insert({Names:$('#text1').val(),Artwork_Desc:$('#text2').val(),Price:$('#text3').val(),Tax_Number:$('#text4').val(),Contact_Details:$('#text5').val(),Owner_Image:$('#text6').val(),Picture:$('#text7').val()});
}