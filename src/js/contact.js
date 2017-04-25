const contact = {};
contact.e = {};
contact.e.msg = document.getElementById('contactMessage');
contact.e.name = document.getElementById('contactName');
contact.e.email = document.getElementById('contactEmail');

contact.update = function (msg) {
  contact.e.msg.value = msg;
  setTimeout(function () {
    contact.e.msg.focus();
  }, 1000);
}

function updateContact(msg) {
  contact.e.msg.value = msg;
}