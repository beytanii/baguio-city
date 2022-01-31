// this validates the name of the user
function checkName(){
    "use strict"
    var is_valid = false;
    var firstName_valid = true;
    var lastName_valid = true;
    if(document.getElementById("firstName").value==""){
        document.getElementById("firstName").style.borderColor = "red"
        document.getElementById("astiriskName").style.color = "red"
        //document.getElementById("firstName").style.backgroundColor = "pink"
        firstName_valid = false
    }
    if(document.getElementById("lastName").value==""){
        document.getElementById("lastName").style.borderColor = "red"
        document.getElementById("astiriskName").style.color = "red"
        //document.getElementById("lastName").style.backgroundColor = "pink"
        lastName_valid = false
    }

    if(firstName_valid == true && lastName_valid == true){
        is_valid = true;
        document.getElementById("firstName").style = null;
        document.getElementById("lastName").style = null;
    }
        
    else {
        is_valid = false;
    }
    //console.log("In checkname - is valid value is "+ is_valid);
    return (is_valid);

}

//  function to validate visitor's date to current date
function checkDate(){
    "use strict";
    var dateValid=true;
    var vdate = document.getElementById('visitDate').value;
    var today = new Date();
    //console.log("Users date  = " + vdate);
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }  // need this in case day number is one digit like 6
    if (mm < 10) {
        mm = '0' + mm;
    }  // need this is month number is 1 digit like 4

    var td = "" + yyyy + "-" + mm + "-" + dd;
    //console.log("System date = " + td);

    
    if(vdate >= td){
        document.getElementById('errorMessage').innerHTML="  ** Warning: You cannot select today or the days after. **  ";
        document.getElementById('errorMessage').style.color="red"
        document.getElementById("visitDate").style.borderColor="red";
        document.getElementById("astiriskDate").style.color = "red";
        //document.getElementById("errorMessage").style.backgroundColor = 'pink';
        dateValid = false;
    }
    else if(vdate == ""){
        document.getElementById('errorMessage').innerHTML="  ** Warning: You cannot leave date empty. **  ";
        document.getElementById('errorMessage').style.color="red"
        document.getElementById("visitDate").style.borderColor="red";
        document.getElementById("astiriskDate").style.color = "red";
        //document.getElementById("errorMessage").style.backgroundColor = 'pink';
        dateValid = false;
    }
    else  {
        document.getElementById('errorMessage').innerHTML="";
        document.getElementById("visitDate").style.border = null;
        document.getElementById("errorMessage").style = null;
        dateValid = true;
        }// end of else path

    //console.log("In function to check date - dateValid is --->" + dateValid);
    return (dateValid);
}//end of function validate visitor's date to present date

// validates the radio button Landmark
function checkLandmark(){
    "use strict"
    var is_valid = false;
    var landmark = document.getElementsByName('landmark');
    
    for(let i = 0; i < landmark.length; i++) {
        if(landmark[i].checked) {
            is_valid = true;
        }
    }

    if( !is_valid){
        document.getElementById('legendBox').style.borderColor="red";
        document.getElementById('legendText').innerHTML=" ** Warning: You must select one. **";
        document.getElementById('legendText').style.color="red";
    }

    return(is_valid)
}

// validates EcoPark
function checkEcoPark(){
    "use strict"
    var is_valid = false;
    var ecopark = document.getElementsByName('ecopark');

    for(let i = 0; i < ecopark.length; i++) {
        if(ecopark[i].checked) {
            is_valid = true;
        }
    }

    if( !is_valid ){
        document.getElementById('ecoparkBox').style.borderColor="red";
        document.getElementById('ecoparkText').innerHTML=" ** Warning: You must select one. **";
        document.getElementById('ecoparkText').style.color="red";
        is_valid = false;
    }

    return(is_valid)
}

function validateForm(){
    "use strict";
    
    var is_name_ok = checkName();
    var is_date_ok = checkDate();
    var is_landmark_ok = checkLandmark();
    var is_ecopark_ok = checkEcoPark();
    var result = is_date_ok && is_name_ok && is_ecopark_ok && is_landmark_ok
    return(result);
}