'use strict';
const API_KEY = '';
const items = [
  {
    'kind': 'youtube#searchResult',
    'etag': '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/2RLd9Pj448BrUeZkkTlLhkASYng\'',
    'id': {
      'kind': 'youtube#video',
      'videoId': 'e3SRTL_XWyc'
    },
    'snippet': {
      'publishedAt': '2018-04-22T18:22:23.000Z',
      'channelId': 'UCwD4x63A9KC7Si2RuSfg-SA',
      'title': 'SCARY CLOWNS STOLE MY TWIN BROTHER!',
      'description': 'I HAD TO GET HIM BACK! WANT TO SEE US IN NYC & NJ?! BUY TIX HERE! ➨ http://bit.ly/DobreTour WE POST TUESDAY,THURSDAY, & SUNDAY!',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/e3SRTL_XWyc/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/e3SRTL_XWyc/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/e3SRTL_XWyc/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Lucas and Marcus',
      'liveBroadcastContent': 'none'
    }
  },
  {
    'kind': 'youtube#searchResult',
    'etag': '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VGZapExdeg4eKKt4c4_ye3s7G0w\'',
    'id': {
      'kind': 'youtube#video',
      'videoId': 'yXb8Yszgh_o'
    },
    'snippet': {
      'publishedAt': '2018-04-29T21:12:15.000Z',
      'channelId': 'UCwD4x63A9KC7Si2RuSfg-SA',
      'title': 'WE CAUGHT THE SCARY CLOWNS!',
      'description': 'FINALLY!!! WANT TO SEE US IN NYC & NJ?! BUY TIX HERE! ➨ http://bit.ly/DobreTour WE POST TUESDAY,THURSDAY, & SUNDAY! TURN OUR POST ...',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/yXb8Yszgh_o/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/yXb8Yszgh_o/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/yXb8Yszgh_o/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Lucas and Marcus',
      'liveBroadcastContent': 'none'
    }
  },
]

/*
  We want our store to hold a `videos` array of 'decorated' objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:

  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=${API_KEY}&q=`


// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.

const fetchVideos = function(searchTerm, callback) {
  const url = BASE_URL + searchTerm;
  $.getJSON(url, callback);
};

fetchVideos('thinkful',results => console.log(results));

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`,
// `thumbnail` which each hold the appropriate values from the API item object. You
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  return response.map(item => ({

    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
};
console.log(decorateResponse(items));

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
