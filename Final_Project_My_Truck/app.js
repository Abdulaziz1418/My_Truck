apiKey = 'AIzaSyBZ4k9bWB7-fq4S98qOMPtqRzZZmVLWw3g'

function myMap(){


let map;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                  console.log('lat: ' + position.coords.latitude);
                  console.log('lon: ' + position.coords.longitude);
             
            
            let s = document.createElement("script");
            document.head.appendChild(s);
            s.addEventListener("load", () => {

                console.log("script has loaded");
                map = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: 14,
                });
               var marker = new google.maps.Marker(loc = {
                 position:{lat: position.coords.latitude,lng: position.coords.longitude},
                 map:map,
               })
          
            });
            s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        })
      }};
    

    myMap()

   
    $.ajax({
           
        url: `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
        contentType: 'application/json',
        dataType:'jsonp',
        responseType:'application/json',
        xhrFields: {
          withCredentials: false
        },
        headers: {
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET',
          'Access-Control-Allow-Headers':'application/json',
        },
        success: function(response) {
            displayData(response);
        },
        error: function(error) {
          console.log("FAIL....=================");
        }
      });

  


function displayData(data){
    console.log(data)
}


$('#submit').on('click',function(){
    if ($('#Order').val() == '' || $('#name').val() == '' || $('#phone').val() == ''){
        alert('Please Insert your order!!!!')
    }
    else{
  $('#para').html('Thank you we will contact you soon.')
  
    }

})

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    
 
    

$('#orders').on('click',function(){
if ($('#Order').val() == '' || $('#name').val() == '' || $('#phone').val() == ''){
    alert("Sorry there aren't any orders!!!")
}
else {
 mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=${$('#location').val()}`

  $('#listOrder').append('<p><span> Full Name: </span>'+$('#name').val()+'</p>'+'<br>'+'<p> <span>Phone: </span>'+
  $('#phone').val()+'</p>'+'<br>'+'<p><span>Order: </span>'+$('#Order').val()+'</p>'
  +'<a href='+mapUrl+' target="_blank" >Open location order</a>')

  $('#name').val('')
  $('#phone').val('')
  $('#Order').val('')
}
})
    })}