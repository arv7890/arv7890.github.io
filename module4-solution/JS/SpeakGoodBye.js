// For better appearance, i removed the comment section

(function (window) {

    // Creating byeSpeaker object
    var byeSpeaker = {};
  
    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";
  
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    };
  
    // Exposing byeSpeaker to the global context
    window.byeSpeaker = byeSpeaker;
  })(window);