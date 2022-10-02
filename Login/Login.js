// Commands to run server:
//      npm init
//      npm install nedb
//      node *.js
// The Submit button's onClick function
// Creating the database

function submitData() {

    for(let k = 0; k<10;k++){
        database.find({}, function(err, databaseOut) {
            if(err) {
                console.log("Error: " + err.message);
            }
            else {
                if(databaseOut.Email==$('#text1').val() && databaseOut.Password==$('#text2').val()){
                    return true;
                }
            }
        });
    }
}