  function checkIt() {

    // initialize scores
    var quavo = 0;
    var future = 0;
    var youngthug = 0;
    var chiefkeef = 0;
    var liluzivert = 0;
    var uglygod = 0;

    // get results from form
    var elements = document.getElementsByClassName('answer');

    for (var e of elements) {

      if (e.checked) {
        if (e.value.includes('quavo')) {
            quavo++;
        }
        if (e.value.includes('future')) {
          future++
        }
        if (e.value.includes('youngthug')) {
          youngthug++
        }
        if (e.value.includes('chiefkeef')) {
          chiefkeef++
        }
        if (e.value.includes('liluzivert')) {
          liluzivert++
        }
        if (e.value.includes('uglygod')) {
          uglygod++
        }
      }
    }



  // make a message
  var counts = "Quavo: " + quavo + ", " +
               "Future: " + future + ", " +
               "Young Thug: " + youngthug + ", " +
               "Chief Keef: " + chiefkeef + ", " +
               "Lil Uzi Vert: " + liluzivert + ", " +
               "Ugly God: " + uglygod;

   var max = Math.max(quavo, future, youngthug, chiefkeef, liluzivert, uglygod);

   var message;

   if (max == quavo) {
     message = "You are Quavo.";
   }

   if (max == future) {
     message = "You are Future.";
   }

   if (max == youngthug) {
     message = "You are Young Thug.";
   }

   if (max == chiefkeef) {
     message = "You are Chief Keef.";
   }

   if (max == liluzivert) {
     message = "You are Lil Uzi Vert.";
   }

   if (max == uglygod) {
     message = "You are Ugly God.";
   }


   // display results
   //document.getElementById('result').innerHTML = counts;
   document.getElementById('result').innerHTML = message;
}
