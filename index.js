//-------1st player-------

let hmScr = document.getElementById("hm-Scr")
 let Hscore = 0
 
 function addHOne() {
     Hscore +=1
     //console.log(score)
     hmScr.textContent = (Hscore)
 }
 
 function addHTwo() {
     Hscore +=2
     hmScr.textContent = (Hscore)
 }
 
 function addHFour() {
     Hscore +=4
        hmScr.textContent = (Hscore) 
}
function addHSix() {
     Hscore +=6
        hmScr.textContent = (Hscore) 
}

//-------2nd player-------

let gstScr = document.getElementById("gst-Scr")
 let Gscore = 0
 
 function addGOne() {
     Gscore +=1
     //console.log(score)
     gstScr.textContent = (Gscore)
 }
 
 function addGTwo() {
     Gscore +=2
     gstScr.textContent = (Gscore)
 }
 
 function addGFour() {
     Gscore +=4
        gstScr.textContent = (Gscore) 
}
 
 function addGSix() {
     Gscore +=6
        gstScr.textContent = (Gscore)
 }