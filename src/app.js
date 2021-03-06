import $ from 'jquery';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';
import ApplicationView from 'app/views/application_view';

const simulate = function(quote) {
  // Calculate a random price movement
  const maxChange = 1.00;
  const minChange = 0.00;
  var change = _.random(minChange * 10, maxChange * 10) / 10;

  // Decide if the change is positive or negative
  if(_.random(0,1) === 1) {
    change *= -1;
  }

  // Actually trigger the change
  quote.trigger('change:price', change);
};

var quoteData = [
  {
    symbol: "HUMOR",
    price: 88.50,
    about: "Cristal's HumorUs capstone"
  }, {
    symbol: "CLOTH",
    price: 81.70,
    about: "Sophia's Cloth Sim capstone"
  }, {
    symbol: "HABIT",
    price: 98.00,
    about: "Val's Habitmon capstone"
  }, {
    symbol: "SUPER",
    price: 83.10,
    about: "Rowan's Super Hero Draft capstone"
  }, {
    symbol: "INGRD",
    price: 79.40,
    about: "Nicole's Ingredient Inspector capstone"
  }, {
    symbol: "MXTPE",
    price: 109.20,
    about: "Jess's Digital Mixtape capstone"
  }, {
    symbol: "CNTAR",
    price: 90.70,
    about: "Leah's Centaur capstone"
  }, {
    symbol: "EVCLR",
    price: 101.90,
    about: "Lisa's Evolution In Color capstone"
  }, {
    symbol: "FUZZY",
    price: 88.60,
    about: "Jade's Fuzz Therapy capstone"
  },
];


$(document).ready(function() {
  var appView = new ApplicationView({
    el: '#application',
    quoteData: quoteData
  });

  appView.render();

  setInterval(function() {
    // Wave 3
    var allQuotes = appView.cardList;
    allQuotes.forEach(function(quote) {
      console.log(quote);
      simulate(quote);
    });
  }, 1000);
});
