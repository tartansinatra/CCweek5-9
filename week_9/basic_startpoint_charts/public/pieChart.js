var PieChart = function(){
  var container = document.getElementById("pieChart");
  var container2 = document.getElementById("lineChart");
  var chart = new Highcharts.Chart({
    
////////  PIE CHART - SAMPLE VALUES
    chart: {
      type: 'pie',  // THIS CAN SIMPLY BE CHANGED TO 'bar'
      renderTo: container,
      showInlegend: true
    },
    
    plotOptions: {

    },


    title: {
      text: "Pokemon types I've caught"

    },
    
    legend: {
      align: 'center',
      backgroundColor: "#f5deb3"
    },

    series: [{
        name: "Pokemons",
        data: [{
        name: "Fire",
        y: 74,
        color: "#ffac33"
        },
        {
        name: "Water",
        y: 25,
        color: "#73b7ff",
        // sliced: true
        },
        {
        name: "Grass",
        y: 1,
        color: "#00ba2f"
        }
      ]
    }],


////////  LINE CHART - SAMPLE VALUES
    chart: {
      marginRight: 120,
      renderTo: container2
    },

    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 100,
      labelFormat: 'Pokemons Caught'
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }],



  });
  console.log(chart)

}






