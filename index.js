const themeBtn = document.getElementById('theme-btn');
const body = document.body;
//load saved choice
const savedTheme = localStorage.getItem('theme');
// all ramana content
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
const myimage = document.getElementById("myimage");         // Ramana image
const Ramana = document.querySelector(".Ramana");
const aboutittle  = document.querySelector("#about-us");
const hobbies = document.querySelector("#hobbies");
const  certDiv = document.querySelector(".certificate");    //Ramana certificate
const  certimg = document.querySelector("#cert-img");
const myresume = document.querySelector("#myresume");       //Ramana resume
const resume = document.querySelector("#resume");
const mycontact = document.querySelector(".contacts");        //Ramana contacts
const nirbhayaram = document.querySelector(".Nirbhayaram");   //Nirbhayarm content
const abouttittle  = document.querySelector("#about-you");
const Nirbhayaramimage = document.querySelector("#Nirbhayaramimg");
const poorna = document.querySelector(".poorna-chandran");    //poorna chandran content
const poornachandran = document.querySelector("#poorna-img");
const aboutpoorna = document.querySelector("#about-poorna");
const yuvaraj = document.querySelector(".Yuvaraj");    //yuvaraj content
const Yuvarajimg = document.querySelector("#yuvarajimg");
const aboutyuvaraj = document.querySelector("#about-yuvaraj");
let age;

if (savedTheme === 'dark'){
    body.classList.add('dark');
    body.classList.remove('light');
    themeBtn.textContent = '🔆';
}else{
    body.classList.add('light');
     body.classList.remove('dark');
    themeBtn.textContent = '🌙';
}

// toggle on click
themeBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    body.classList.toggle('light', !isDark);

    themeBtn.textContent = isDark ? '🔆' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// my website

mysubmit.onclick = function(){

    age = mytext.value;
    resultelement.textContent = "";

    if(age == "Ramana"){
        myimage.style.display = "block";
        Ramana.style.display = "block";
        nirbhayaram.style.display = "none";
        poorna.style.display = "none";
        yuvaraj.style.display = "none";
       

        //show the certificate
        certDiv.style.display = "block";
        certDiv.querySelector("h2").style.display = "block";
        certimg.style.display = "block";
        myresume.style.display = "block";
        resume.style.display = "block";
       
         
        //show headings
        aboutittle.style.display = "block";
        hobbies.style.display = "block";
        aboutittle.style.padding = "20px 0";
        
        //show all none elemnts
        Ramana.querySelector("h1").style.display = "block";
        ramanapara.style.display = "block";
        Ramana.querySelector("about us").style.display = "block";
        para.style.textAlign = 'center';
        para.style.margin = '20px'; 
        mycontact.style.display = "block";
       
    }

     else if(age == "Nirbhayaram"){
             Nirbhayaramimage.style.display = "block";
             myimage.style.display = "none";
             nirbhayaram.style.display = "block";
             certDiv.style.display = "none"
             Ramana.style.display = "none";
             poorna.style.display = "none";
             yuvaraj.style.display = "none";
            myimage.style.display = "none";
     }

     else if(age == "Poorna chandran"){
        poorna.style.display = "block";
        poornachandran.style.display = "block";
        aboutpoorna.style.display = "block";
        poorna.style.display = "block";
        Ramana.style.display = "none";
        yuvaraj.style.display = "none";
        nirbhayaram.style.display = "none";
        certDiv.style.display = "none";
        myimage.style.display = "none";

    
    }

    else if(age == "Yuvaraj"){
        yuvaraj.style.display = "block";
        Yuvarajimg.style.display = "block";
        aboutyuvaraj.style.display = "block";
        Ramana.style.display = "none";
        nirbhayaram.style.display = "none";
        poorna.style.display = "none";
        certDiv.style.display = "none";
        myimage.style.display = "none";

    }


    else{
        resultelement.textContent = ` Notu! you enter the wrong name`;
        myimage.style.display = "none";
        Ramana.style.display = "none";
        certDiv.style.display = "none";
        nirbhayaram.style.display = "none";
        poorna.style.display = "none";
        mycontact.style.display = "none";
        yuvaraj.style.display = "none";
    }
  }

