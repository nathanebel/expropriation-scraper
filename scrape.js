'use strict'

var Xray = require('x-ray')
var util = require('util')
var x = new Xray()

// https://stackoverflow.com/questions/31802903/nodejs-x-ray-web-scraper-how-to-follow-links-and-get-content-from-sub-page

var genericScrape = function(url, callback) {
  x(url, 'html', {
    title: 'title',
    url: 'a@href',
    body:'body@html'

  })((err, obj) => {
    if(err || !obj) {
      callback(err)
      return;
    }
    callback(null, obj);
  })
}

genericScrape('http://meeting.reddeer.ca/meetresults.aspx?keywords=expropriate', function(err, obj) {
    console.log(obj)
})