var c = 0;

var when = ["said the tall man.", "said the woman with large eyes.","said the child with the red balloon","said the gentle breeze.","said the pawnshop owner.","said the teacher towering over you in English class after you've made a remarkbly opinionated statement.","said your soon to be past-lover.","said the dog talking in your dreams.","said the discord mod that caught you in a lie.","said your mother that caught you late out at night.", "said the man without hands.", "said the green goblin holding all your dreams and aspirations in a jar of tuyo.","said the barista after you ordered a cappucino without the coco powder sprinkled ontop because that's just an extra frothy latte.", "said the person who you just told didn't understand the ending of Tenet or Inception.", "said the bookworm who you asked how Little Life was like.", "said the person from boston after you told them you can't play your weekly minecraft session because your moka pot coffee hasn't boiled over yet.", "said your org president after you leaked the doc of all the people they disqualified", "said your boss at work after you've given them your two week notice despite everything being built on you. hahaha get owned by capitalism.", "said your friend after you've lost your 5th game in a row and saying you shouldn't end on a loss.", "said your father when he found out you couldn't make it to class today.", "said your lola after you said you weren't hungry.", "said your partner after you pulled them in for a deep yearning kiss.", "said your prof after arguing against their design philosophy of having purely just designs made for robots.", "said your friend after asking if they should watch foolycooly. (its amazing go watch it)", "said the cold misty air of baguio after you shiver and wanting to go home", "said the night sky saying could it get any worse?"];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});


$(document).click(function (e) {

  if (e.button == 0) {

    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++;

    if (c == when.length) {

      $("<p>said the past.</p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      $(document).unbind("click");

    }

  }
});
