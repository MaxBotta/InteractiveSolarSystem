/**
 * Created by maxbotta on 07.07.17.
 */



function moonphases() {

    var mPhases =   [
        {date:"2017-07-07", sichtbarkeit:96, zunehmend:true},
        {date:"2017-07-08", sichtbarkeit:99, zunehmend:true},
        {date:"2017-07-09",sichtbarkeit:100, zunehmend:true},
        {date:"2017-07-10", sichtbarkeit:99, zunehmend:false},
        {date:"2017-07-11", sichtbarkeit:97, zunehmend:false},
        {date:"2017-07-12",sichtbarkeit:92, zunehmend:false},
        {date:"2017-07-13", sichtbarkeit:86, zunehmend:false},
        {date:"2017-07-14", sichtbarkeit:78, zunehmend:false},
        {date:"2017-07-15", sichtbarkeit:69, zunehmend:false},
        {date:"2017-07-16", sichtbarkeit:50, zunehmend:false},
        {date:"2017-07-17", sichtbarkeit:48, zunehmend:false},
        {date:"2017-07-18", sichtbarkeit:37, zunehmend:false},
        {date:"2017-07-19", sichtbarkeit:26, zunehmend:false},
        {date:"2017-07-20", sichtbarkeit:16, zunehmend:false},
        {date:"2017-07-21", sichtbarkeit:8, zunehmend:false},
        {date:"2017-07-22", sichtbarkeit:3, zunehmend:false},
        {date:"2017-07-23", sichtbarkeit:0, zunehmend:false},
        {date:"2017-07-24", sichtbarkeit:1, zunehmend:true},
        {date:"2017-07-25", sichtbarkeit:4, zunehmend:true},
        {date:"2017-07-26", sichtbarkeit:9, zunehmend:true},
        {date:"2017-07-27", sichtbarkeit:16, zunehmend:true},
        {date:"2017-07-28", sichtbarkeit:25, zunehmend:true},
        {date:"2017-07-29", sichtbarkeit:34, zunehmend:true},
        {date:"2017-07-30", sichtbarkeit:50, zunehmend:true},
        {date:"2017-07-31", sichtbarkeit:54, zunehmend:true},
        {date:"2017-08-01", sichtbarkeit:63, zunehmend:true},
        {date:"2017-08-02", sichtbarkeit:72, zunehmend:true},
        {date:"2017-08-03", sichtbarkeit:80, zunehmend:true},
        {date:"2017-08-04", sichtbarkeit:87, zunehmend:true},
        {date:"2017-08-05", sichtbarkeit:93, zunehmend:true},
        {date:"2017-08-06", sichtbarkeit:97, zunehmend:true},
        {date:"2017-08-07", sichtbarkeit:100, zunehmend:true},
        {date:"2017-08-08", sichtbarkeit:99, zunehmend:false},
        {date:"2017-08-09", sichtbarkeit:96, zunehmend:false},
        {date:"2017-08-10", sichtbarkeit:95, zunehmend:false},
        {date:"2017-08-11", sichtbarkeit:89, zunehmend:false},
        {date:"2017-08-12", sichtbarkeit:81, zunehmend:false},
        {date:"2017-08-13", sichtbarkeit:72, zunehmend:false},
        {date:"2017-08-14", sichtbarkeit:62, zunehmend:false},
        {date:"2017-08-15", sichtbarkeit:50, zunehmend:false},
        {date:"2017-08-16", sichtbarkeit:39, zunehmend:false},
        {date:"2017-08-17", sichtbarkeit:28, zunehmend:false},
        {date:"2017-08-18", sichtbarkeit:18, zunehmend:false},
        {date:"2017-08-19", sichtbarkeit:10, zunehmend:false},
        {date:"2017-08-20", sichtbarkeit:4, zunehmend:false},
        {date:"2017-08-21", sichtbarkeit:0, zunehmend:false},
        {date:"2017-08-22", sichtbarkeit:1, zunehmend:true},
        {date:"2017-08-23", sichtbarkeit:2, zunehmend:true},
        {date:"2017-08-24", sichtbarkeit:6, zunehmend:true},
        {date:"2017-08-25", sichtbarkeit:12, zunehmend:true},
        {date:"2017-08-26", sichtbarkeit:20, zunehmend:true},
        {date:"2017-08-27", sichtbarkeit:28, zunehmend:true},
        {date:"2017-08-28", sichtbarkeit:37, zunehmend:true},
        {date:"2017-08-29", sichtbarkeit:50, zunehmend:true},
        {date:"2017-08-30", sichtbarkeit:56, zunehmend:true},
        {date:"2017-08-31", sichtbarkeit:65, zunehmend:true},
        {date:"2017-09-01", sichtbarkeit:74, zunehmend:true},
        {date:"2017-09-02", sichtbarkeit:82, zunehmend:true},
        {date:"2017-09-03", sichtbarkeit:89, zunehmend:true},
        {date:"2017-09-04", sichtbarkeit:94, zunehmend:true},
        {date:"2017-09-05", sichtbarkeit:96, zunehmend:true},
        {date:"2017-09-06", sichtbarkeit:100, zunehmend:true},
        {date:"2017-09-07", sichtbarkeit:99, zunehmend:false},
        {date:"2017-09-08", sichtbarkeit:97, zunehmend:false},
        {date:"2017-09-09", sichtbarkeit:91, zunehmend:false},
        {date:"2017-09-10", sichtbarkeit:84, zunehmend:false},
        {date:"2017-09-11", sichtbarkeit:75, zunehmend:false},
        {date:"2017-09-12", sichtbarkeit:64, zunehmend:false},
        {date:"2017-09-13", sichtbarkeit:50, zunehmend:false},
        {date:"2017-09-14", sichtbarkeit:42, zunehmend:false},
        {date:"2017-09-15", sichtbarkeit:31, zunehmend:false},
        {date:"2017-09-16", sichtbarkeit:21, zunehmend:false},
        {date:"2017-09-17", sichtbarkeit:12, zunehmend:false},
        {date:"2017-09-18", sichtbarkeit:6, zunehmend:false},
        {date:"2017-09-19", sichtbarkeit:2, zunehmend:false},
        {date:"2017-09-20", sichtbarkeit:0, zunehmend:false},
        {date:"2017-09-21", sichtbarkeit:1, zunehmend:true},
        {date:"2017-09-22", sichtbarkeit:4, zunehmend:true},
        {date:"2017-09-23", sichtbarkeit:8, zunehmend:true},
        {date:"2017-09-24", sichtbarkeit:15, zunehmend:true},
        {date:"2017-09-25", sichtbarkeit:22, zunehmend:true},
        {date:"2017-09-26", sichtbarkeit:30, zunehmend:true},
        {date:"2017-09-27", sichtbarkeit:39, zunehmend:true},
        {date:"2017-09-28", sichtbarkeit:50, zunehmend:true},
        {date:"2017-09-29", sichtbarkeit:56, zunehmend:true},
        {date:"2017-09-30", sichtbarkeit:68, zunehmend:true}];


    var date = new Date().toISOString().split('T')[0];

    //date = new Date("2017-09-09").toISOString().split('T')[0];
    console.log(date);


    for (var i = 0; i < mPhases.length; i++) {
        if (mPhases[i].date == date) {
            if(mPhases[i].sichtbarkeit < 25) {
                changeMoon("../pictures/mond1.svg");
            } else if (mPhases[i].sichtbarkeit < 50 && mPhases[i].zunehmend == true) {
                changeMoon("../pictures/mond2.svg");
            } else if (mPhases[i].sichtbarkeit < 75 && mPhases[i].zunehmend == true) {
                changeMoon("../pictures/mond3.svg");
            } else if (mPhases[i].sichtbarkeit < 100 && mPhases[i].zunehmend == true) {
                changeMoon("../pictures/mond4.svg");
            } else if (mPhases[i].sichtbarkeit == 100) {
                changeMoon("../pictures/mond5.svg");
            } else if (mPhases[i].sichtbarkeit < 100 && mPhases[i].zunehmend == false) {
                changeMoon("../pictures/mond6.svg");
            } else if (mPhases[i].sichtbarkeit < 75 && mPhases[i].zunehmend == false) {
                changeMoon("../pictures/mond7.svg");
            } else if (mPhases[i].sichtbarkeit < 50 && mPhases[i].zunehmend == false) {
                changeMoon("../pictures/mond2.svg");
            }

        }
    }

    function changeMoon(path) {
        console.log(path);
        var mond = document.getElementById("mond");
        mond.data = path;
    }

}
