
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


//this function makes the call to google map API to display map using iframe

function onSuccess(position) {
  
    document.getElementById('map').innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?           q="+position.coords.latitude+","+position.coords.longitude+"&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:100%; width:100%\"><\/iframe>";

  }
    
     

//this function displays error messages incase of any
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

// this funcion is used to hide the location of a person on the map by pointing the marker to the see
function hide(){
    document.getElementById('map').innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q=3.5317,2.4604&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:100%; width:100%\"><\/iframe>";
    
    
}