var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hey, je suis yayab',
  'Bienvenue sur mon site !',
  'Comment ça va ?',
  'Toujours à développer des trucs =)',
  'Alors comme ça on s\'intéresse à ce que je fais ?',
  'Tu savais que Netflix était fait en Django ?',
  'J\'adore développer en python, et toi tu préfère quoi ?',
  'Les objets connectés c\'est la vie, tu en as toi ?',
  'Ce que j\'aime le plus c\'est les lumières connectées',
  'Bientôt on pourra parler à notre maison pour qu\'elle nous fasse le café elle même c\'est pas génial ?',
  'Je dois te laisser on m\'appelle pour coder une maison ! ^-^',
  'C\'était cool d\'être passé',
  'Bonne journée !',
  '@+',
  '^-^ '
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="./static/img/yayab.jpeg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="./static/img/yayab.jpeg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}