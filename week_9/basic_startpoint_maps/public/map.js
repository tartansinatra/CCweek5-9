var Map = function(latLng, zoom){
  this.googleMap = new google.maps.Map(document.getElementById('map'),{
    center:  latLng,
    zoom: zoom
  }),

  this.addMarker = function(latLng, title, icon){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon
    });
    return marker;
  },

  this.bindClick = function(){
      // var that = this; 
      // that = this is used to redefine 'this' object, which will be invoked by GoogleMaps and becomes part of the Google external object.  We need the callback event (latLng) to be returned to us, to then invoke & plot the marker.

      google.maps.event.addListener(this.googleMap, 'click', function(event){
        // var counter = 1;   // needs a starting point and increments on line 27
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        var latLng = {lat: event.latLng.lat(), lng:event.latLng.lng()};
        // that.addMarker(latLng, counter.toString());   OR ALTERNATIVELY....
        this.addMarker(latLng, counter.toString());
        // counter++;   // ties in with the counter on line 21
      }.bind(this));  // this keep the object belonging to us in the realm of the local object, not part of the Google realm as discussed above.
},




// //   OPTION TWO - BINDCLICK WHICH DISPLAYS A CAT MARKER ON THE MAP      
// this.bindClick = function(){ 
//     google.maps.event.addListener(this.googleMap, 'click', function(event){ 
//           this.addInfoWindow({lat: event.latLng.lat(), lng: event.latLng.lng()}, "meow!", "https://33.media.tumblr.com/avatar_e2fbfbcbb52d_128.png");     
//         }.bind(this));   },









    this.setCentre = function(latLng){
      this.googleMap.setCenter(latLng);
    },

    this.addInfoWindow = function(latLng, title, icon){
      var marker = this.addMarker(latLng, title, icon);
      marker.addListener('click', function(){
        var infoWindow = new google.maps.InfoWindow({
          content: this.title

        });
        infoWindow.open(this.map, marker);
      });
    }


}