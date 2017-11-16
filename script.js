function daysInMonth() {
    //alert("hi");
    var month = document.getElementById("selectBoxMonth").value;
    var day = document.getElementById("selectBoxDay").value;
    console.log(month);
    document.getElementById("selectBoxDay").innerHTML = "";
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){

        daysInTheMonth = 31
    }else{
        if(month == 1){
            daysInTheMonth = 29;
        }else{
            daysInTheMonth = 30;
        }
    }
    for(var i=1; i <= daysInTheMonth; i++){
        document.getElementById("selectBoxDay").innerHTML += '<option value="'+i+'">'+i+'</option>'
    }
}

function determineSign() {
    var month = document.getElementById("selectBoxMonth").value;
    var day = document.getElementById("selectBoxDay").value;
    console.log(month)
    var sign = ""
    if(month == 0){
        if(day<20){
            var sign = "Capricorn";
        }else{
            var sign = "Aquarius";
        }
    }
    if(month == 1){
        if(day<20){
            var sign = "Aquarius";
        }else{
            var sign = "Pisces";
        }
    }
    if(month == 2){
        if(day<21){
            var sign = "Pisces";
        }else{
            var sign = "Aries";
        }
    }
    if(month == 3){
        if(day<21){
            var sign = "Aries";
        }else{
            var sign = "Taurus";
        }
    }
    if(month == 4){
        if(day<21){
            var sign = "Taurus";
        }else{
            var sign = "Gemini";
        }
    }
    if(month == 5){
        if(day<21){
            var sign = "Gemini";
        }else{
            var sign = "Cancer";
        }
    }
    if(month == 6){
        if(day<23){
            var sign = "Cancer";
        }else{
            var sign = "Leo";
        }
    }
    if(month == 7){
        if(day<23){
            var sign = "Leo";
        }else{
            var sign = "Virgo";
        }
    }
    if(month == 8){
        if(day<23){
            var sign = "Virgo";
        }else{
            var sign = "Libra";
        }
    }
    if(month == 9){
        if(day<23){
            var sign = "Libra";
        }else{
            var sign = "Scorpio";
        }
    }
    if(month == 10){
        if(day<23){
            var sign = "Scorpio";
        }else{
            var sign = "Sagittarius";
        }
    }
    if(month == 11){
        if(day<22){
            var sign = "Sagittarius";
        }else{
            var sign = "Capricorn";
        }
    }
    return sign;
}

function horoscope(sign){
    return document.getElementById("Picture").innerHTML = "<img src='img/" + sign + ".webp'>";

}
function getName(name){
    var name = document.getElementById("name").value;
}
function messageForHoroscope(name, sign){
    var name = document.getElementById("name").value;
    if(sign == "Capricorn"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " This doesn't mean anything, but have a good day.</p>";
    }
    if(sign == "Aquarius"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You're a pretty cool dude.</p>";
    }
    if(sign == "Pisces"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You're pretentious.</p>";
    }
    if(sign == "Aries"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " This means tomorrow you will find $20 on the street.</p>";
    }
    if(sign == "Taurus"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " Wow! You're special!</p>";
    }
    if(sign == "Gemini"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You're always the least interesting person in the room.</p>";
    }
    if(sign == "Cancer"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You always value your friends and family, even when they hit you.</p>";
    }
    if(sign == "Leo"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You tell yourself you're loyal but really you're just clingy; no one likes you but they don't want to be rude so they don't tell you that they'd rather not have you around.</p>";
    }
    if(sign == "Virgo"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " This means nothing you're not special.</p>";
    }
    if(sign == "Libra"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " Your mom is proud of you.</p>";
    }
    if(sign == "Scorpio"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " Your dad is proud of you.</p>";
    }
    if(sign == "Sagittarius"){
        document.getElementById("Message").innerHTML="<p>Congratulations " + name + "! Your horoscope is " + sign + "! " + " You're a disapointment to your family.</p>";
    }

}
function runMe(){
    var sign = determineSign();
    horoscope(sign);
    messageForHoroscope(name, sign);
    getName(name);
}


/*
<img src="img/4.jpg">

function askName(){
    var name = prompt("What is your name?")
    document.getElementById("daysInMonth").innerHTML = ""
}

var signs = ["Aqurius","Aries","Cancer","Capricorn","Gemini","Leo","Libra","Pices","Sagittarius","Scorpio","Taurus","Virgo"]
*/