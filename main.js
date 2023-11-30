UpdIntID = setInterval(changeTime, 100);
const messages = ["liebenswert", "bewundernswert", "atemberaubend", "einzigartig", "beeindruckend", "charmant", "attraktiv", "entzückend", "klug", "fröhlich", "fantastisch", "großartig", "strahlend", "mitreißend", "selbstbewusst", "erfolgreich", "stark", "hilfsbereit", "talentiert", "umwerfend", "überragend", "unwiderstehlich", "warmherzig", "wertvoll", "25", "26", "27", "28"];
let lockRefresh = False;

function changeTime(){

    let date = new Date();

    let day = date.getDate();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds(); 

    document.getElementById("sec").innerHTML = (59 - secs).toString();
    document.getElementById("min").innerHTML = (59 - mins).toString();   
    document.getElementById("hrs").innerHTML = (23 - hrs).toString();
    document.getElementById("picture").src = ("pictures/" + "pic" + day.toString() + ".jpeg");
    document.getElementById("message").innerHTML = ("Sascha, du bist " + messages[(day - 1)] + "!");
    document.getElementById("christmascountdown").innerHTML = "... und noch " + ((24 - date.getDate()).toString()) + " Tage bis Weihnachten";

    /*
    if (hrs == 0 && lockRefresh == False) {
        document.getElementById("picture").src = ("pictures/" + date.getDate() + ".png");
        document.getElementById("test").innerHTML = ("Sascha, du bist " + messages[(date.getDate() - 1)]);
        lockRefresh = True;
    } else if (lockRefresh = True) {
        lockRefresh = False;
    }
    */
}

/*changeImgURL(getDate())*/
