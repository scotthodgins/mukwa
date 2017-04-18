nav();
learnMore();

function nav() {
//Mobile nav menu toggle
  var navToggle = document.getElementsByClassName('navToggle')[0];
  var navspace = document.getElementsByClassName('navspace')[0];
  var logospace = document.getElementsByClassName('logospace')[0];
  
  navToggle.addEventListener("click", function () {
    toggleNav();
  });

  navspace.addEventListener("click", function() {
    toggleNav();
  });

  function toggleNav() {
    var linksPanelHeight = navspace.offsetHeight;
    var titleBarHeight = logospace.offsetHeight;
    var linksTopPosition = getOffset(navspace);
    if (linksTopPosition.top < 0) { //show
      navspace.style.top = titleBarHeight + "px";
    } else { //hide
      navspace.style.top = "-" + linksPanelHeight + "px";
    }
    
  }

}


function learnMore() {
  //Preload Contact Form
  var halfDayTour = document.getElementById('halfDayTour');
  var fullDayTour = document.getElementById('fullDayTour');
  var weekendTour = document.getElementById('weekendTour');
  var customTour = document.getElementById('customTour');
  var contactMessage = document.getElementById('contactMessage');
  var messages = {
    "halfDayTour": "I am interested in learning more about the half-day tour.",
    "fullDayTour": "Tell me more about your full-day tour!",
    "weekendTour": "I am interested in learning more about the weekend tour.",
    "customTour": "Tell me about your custom tours!"
  }
  halfDayTour.addEventListener('click', function () {
    contactMessage.value = "I am interested in learning more about the half-day tour.";
    doScrolling(contactMessage.getBoundingClientRect().top + 900, 200);
    contactMessage.focus();
  });
  fullDayTour.addEventListener('click', function () {
    contactMessage.value = "I am interested in learning more about the full-day tour.";
    doScrolling(contactMessage.getBoundingClientRect().top + 900, 200);
    contactMessage.focus();
  }); 
  weekendTour.addEventListener('click', function () {
    contactMessage.value = "I am interested in learning more about the weekend tour.";
    doScrolling(contactMessage.getBoundingClientRect().top + 900, 200);
    contactMessage.focus();
  });
  customTour.addEventListener('click', function () {
    contactMessage.value = "I am interested in learning more about custom tours.";
    doScrolling(contactMessage.getBoundingClientRect().top + 900, 200);
    contactMessage.focus();
  });
  
}


function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset  
  var diff = elementY - startingY  
  var start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

var submitContactForm = document.getElementsByClassName('submitContactForm')[0];
submitContactForm.addEventListener('click', function () {
  console.log("sending...");
  submitContactForm.innerHTML = "Sent"
  submitContactForm.style.backgroundColor = "green";

  var contactName = document.getElementById('contactName');
  var contactEmail = document.getElementById('contactEmail');
  var contactMessage = document.getElementById('contactMessage');

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');

  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  if (contactName.value === "" || contactEmail.value === "" || contactMessage.value === "") {
    if (contactName.value === "") {
      contactName.focus();
      nameError.style.display = "block";
    }
    if (contactEmail.value === "") {
      contactEmail.focus();
      emailError.style.display = "block";
    }
    if (contactMessage.value === "") {
      contactMessage.focus();
      messageError.style.display = "block";
    }
  } else {
    //send message

    
    $.ajax({
      type: 'POST',
      url: 'http://www.mukwa.ca/api/mailform.php',
      data: { name: contactName.value, email: contactEmail.value, message: contactMessage.value }
    })
      .done(function (msg) {
        if (msg == "Message has been sent") {
          submitContactForm.value = "Sent"
          submitContactForm.style.backgroundColor = "green";
        } else {
          console.log(msg);
        }
      });
  }
});



//Helper functions
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}

//Sample call:
//var myajaxrequest=new ajaxRequest()


function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function d(msg) {
  console.log(msg);
}

function forEachPolyfill() {
  if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback/*, thisArg*/) {

      var T, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      // 1. Let O be the result of calling toObject() passing the
      // |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get() internal
      // method of O with the argument "length".
      // 3. Let len be toUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If isCallable(callback) is false, throw a TypeError exception. 
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let
      // T be undefined.
      if (arguments.length > 1) {
        T = arguments[1];
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {

        var kValue;

        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {

          // i. Let kValue be the result of calling the Get internal
          // method of O with argument Pk.
          kValue = O[k];

          // ii. Call the Call internal method of callback with T as
          // the this value and argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
    };
  }
}