/*
  Author: Zachary Stenger
  dutm.js
  Don't Use The Mouse!!!
*/
//FYI: if you add a function, add it's name to genhtmls.js funcList
(function(){

  var root = this;
  
  root.dutm = {
    noise: function() {
      document.addEventListener('mousemove', function(e){ 
        var data = [];
        for (var i=0; i<100; i++) data[i] = Math.round(255 * Math.random());
  	    var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
        audio.play();
      }, false);
    },
    angryComputer: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        for (var i=0; i<1000; i++) data[i] = 128+Math.round(127*Math.sin(i*10*y/x));
  		  var wave = new RIFFWAVE(data); // create the wave file
      	var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    fax: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        for (var i=0; i<y/2; i++) data[i] = Math.round(Math.sin((x*y)%256));
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    wobbly: function(address){
      document.addEventListener('mousemove', function(e){ 
        console.log('  '); 
        var data = [];
        for (var i=0; i<1000; i++) data[i] = 128+Math.round(127*Math.sin(i/10));
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    }, 
    bird: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        var data = [];
        var rand = Math.random();
        for (var i=0; i<250; i++) data[i] = rand*(128+Math.round(127*Math.sin(i*15*y/x))); 				
        var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    unknown: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        for (var i=0; i<500; i++) data[i] = 128+Math.round(127*Math.sin(5*y*x/i));
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    abrasive: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        for (var i=0; i<250; i++) data[i] = 128+Math.round(127*Math.sin(5*y*x/i));
        for (var i=250; i<500; i++) data[i] = 82+Math.round(72*Math.sin(y*x/(i*5)));
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    laser: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        var rand = Math.random();
        for (var i=0; i<500; i++) data[i] = 82+Math.round(72*Math.sin(y*x/(i*5)));
        for (var i=250; i<750; i++) data[i] = Math.round(Math.sin(10*y*x/(i))*Math.sin(y*x/(i*rand)));
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    },
    interference: function(address){
      document.addEventListener('mousemove', function(e){ 
        var x = e.clientX || e.pageX; 
        var y = e.clientY || e.pageY;
        console.log(x+'  '+y); 
        var data = [];
        var rand = Math.random();
        for (var i=0; i<500; i++) data[i] = (128+Math.round(127*Math.sin(y*x/i)))/rand;
  		  var wave = new RIFFWAVE(data); // create the wave file
  	    var audio = new Audio(wave.dataURI); // create the HTML5 audio element
  	    audio.play();
      }, false);
    }
  }
})();
