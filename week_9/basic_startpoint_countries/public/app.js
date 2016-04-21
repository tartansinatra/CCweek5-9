window.onload = function(){
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  var countryNameList = [];
  var dropdown = document.getElementById('countryNameList')

  request.open('GET', url);

  var displayDropdown = function(countryNameList) {
    for (var i = 0; i < countryNameList.length; i++) {
      
      var option = document.createElement("option");
      option.innerText = countryNameList[i];

      var select = document.querySelector("select");
      select.appendChild(option);
    };
  }

  var displayCountry = function(index){
      var section = document.getElementById('info');
      var countryName = document.getElementById(index)['name'];
      var countryCap = document.getElementById[index]['capital'];
      var countryPop = document.getElementById[index]['population'];

    }



  request.onload = function() {
    if (request.status === 200) {
      console.log("got the data");
      var countriesData = JSON.parse(request.responseText);
      console.log(countriesData);
      console.log(countriesData[0].name);
      
      for (var i = 0; i < countriesData.length; i++) {
        countryNameList.push(countriesData[i].name);
      };
      console.log(countryNameList);
      displayDropdown(countryNameList);
    }
  }
   
    dropdown.onchange = function(){
        var countryName = this.value;
        var countryIndex = null;

        for(index in countryNameList){
          var testCountryName = countryNameList[index];
          if(testCountryName === countryName){
            var countryIndex = index;
            console.log(countryIndex);
            displayCountry(countryIndex);
          }
        }
      }

      



  

  request.send(null);

};

