window.onload = function(){		
	var video = document.getElementById('video');

	var tracker = new tracking.ColorTracker(['yellow']);
	
	tracking.track('#video', tracker, { camera: true });

	tracker.on('track', function(event) {
		if (event.data.length === 0) {
				showpeppa(true);
		 } else {
		    event.data.forEach(function(rect) {
				console.log("ok");
				showpeppa(false);
		    });
		  }
	});
}

function showpeppa(arg){
	document.getElementById("peppapig").hidden = arg;
}
