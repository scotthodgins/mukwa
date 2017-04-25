const tours = {};

tours.section = document.getElementsByClassName("toursArea")[0];
tours.section.addEventListener('click', function (e) {
  let targetName = e.target.id;
  let message = tours.messages[targetName];
  contact.update(message);
  $('html,body').animate({
            scrollTop: $('#Contact').offset().top + 60
  }, 500);
})
tours.buttons = document.getElementsByClassName('learnMore');

tours.messages = {
  "halfDayTour": "I am interested in learning more about the half-day tour.",
  "fullDayTour": "I am interested in learning more about the full-day tour.",
  "weekendTour": "I am interested in learning more about the weekend tour.",
  "customTour": "I am interested in learning more about custom tours."
}

