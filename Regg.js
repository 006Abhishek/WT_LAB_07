function validate(){

    var user = document.getElementById('uname').value;
    var emlid = document.getElementById('emaill').value;
    var pass = document.getElementById('pass').value;
    var confpass = document.getElementById('cpass').value;
    var mble = document.getElementById('mble').value;
    var dt = document.getElementById('dt').value;
    var correct = /^[A-Za-z]+$/;

    //Name
    if(user == ""){
        document.getElementById('nm').innerHTML="** Please fill user name field";
        return false;
    }
    if((user.length <=2) || (user.length > 20)){
        document.getElementById('nm').innerHTML="** user name must be b/w 2 and 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('nm').innerHTML="** only charactors are allowed";
        return false;
    }
    if(!user.match(correct)){
        document.getElementById("nm").innerHTML="*only alphabets are allowed";
        return false
    } 

    
    //EMAIL ID
    if(emlid == ""){
        document.getElementById('em').innerHTML="** Please fill email field";
        return false;
    }
    if(emlid.charAt(0)=='@'){
        document.getElementById('em').innerHTML="** Please put some char before @";
        return false;
    }
    if((emlid.charAt(emlid.length-4)!='.') && (emlid.charAt(emlid.length-3)!='.')){
        document.getElementById('em').innerHTML="** Email Invalid";
        return false;
    }

    if(dt == ""){
        document.getElementById('dat').innerHTML="** Please fill DOB"
    }

    //MOBILE NUMBER
    if(mble == ""){
        document.getElementById('mb').innerHTML="** Please fill mobile no. field";
        return false;
    }
    if(mble.length!=10){
        document.getElementById('mb').innerHTML="** Please enter valid mobile no.";
        return false;
    }
    if(isNaN(mble)){
        document.getElementById('mb').innerHTML="** only enter numeric no.";
        return false;
    }
    if((mble.charAt(0)!=9) && (mble.charAt(0)!=8) && (mble.charAt(0)!=7)){
        document.getElementById('mb').innerHTML="** mobile no. must be started with only 9 , 8 and 7";
        return false;
    }

    //PASSWORD
    if(pass == ""){
        document.getElementById('pas').innerHTML="** Please fill password field";
        return false;
    }
    if((pass.length < 5) || (pass.length > 20)){
        document.getElementById('pas').innerHTML="** Password length must be b/w 5 and 20";
        return false;
    }
    if(pass!=confpass){
        document.getElementById('cpas').innerHTML="** Password are not matched";
        return false;
    }

    //CONFORM PASSWORD
    if(confpass == ""){
        document.getElementById('cpas').innerHTML="** Please fill conform password field";
        return false;
    }
    
    swal("Success!", "Your data have been saved. Thank you!", "success");
}

