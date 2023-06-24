// For better appearance, i removed the comment section

(function (window) {
    // Creating helloSpeaker object
    var helloSpeaker = {};
  
    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";
  
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    };
  
    // Exposing helloSpeaker to the global context
    window.helloSpeaker = helloSpeaker;
  })(window);
  // For better appearance, i removed the comment section