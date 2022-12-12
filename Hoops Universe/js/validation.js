function validate(){
    var name = document.forms["formVali"]["valiName"].value;
    var numb = document.forms["formVali"]["valiNumb"].value;
    var email = document.forms["formVali"]["valiEmail"].value;
    var age = document.forms["formVali"]["valiAge"].value;
    var district = document.forms["formVali"]["valiDistrict"].value;
    var address = document.forms["formVali"]["valiAddress"].value;
    var postal = document.forms["formVali"]["valiPostal"].value;
    var notes = document.forms["formVali"]["valiNotes"].value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var checkbox = document.getElementById('checkbox').checked;

    if(name == ""){
        alert("Please enter your name !!");
        return false;
    }else if(name.length < 4){
        alert("Min input 5 character !!");
        return false;
    }

    if(numb == ""){
        alert("Please enter your phone number !!");
        return false;
    }else if(numb.length != 12){
        alert("Phone number must be 12 DIGIT !!");
        return false;
    }

    if(email == ""){
        alert("Please enter your email !!");
        return false;
    }else if(email.includes('@') == false){
        alert("Please input again the email !!");
        return false;
    }

    if(male == false && female == false){
        alert("Please select gender !!");
        return false
    }

    if(age == ""){
        alert("Please enter your age !!");
        return false;
    }
    
    if(district == ""){
        alert("Please enter your district !!");
        return false;
    }

    if(address == ""){
        alert("Please enter your address !!");
        return false;
    }
    
    if(postal == ""){
        alert("Please enter your postal code !!");
        return false;
    }else if(postal.length != 5){
        alert("Postal code must be 5 DIGIT !!");
        return false;
    }

    if(notes == ""){
        alert("Please enter additional notes !!");
        return false;
    }

    if(checkbox == false){
        alert("Check again your data and check the box !!!");
        return false;
    }
}