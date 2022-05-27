window.onload = begin;

function begin(){
  //Loading the Charts package from google
  google.charts.load('current',{packages:['corechart']});
  //loading the drawing callback when package is loaded
  google.charts.setOnLoadCallback(drawExampleChart);

  //there is no resize event on elements only the window.
  //also this is slightly unsafe on timing as TECHNICALLY it is possible
  // to resize before the google charts package is loaded...
  //redraw first example when window resizes
  window.onresize = drawExampleChart;

  //this solution commented out below is better on timing
  // but harder to read and also dependent on ResizeObserver API
  //I.E. https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html
  /*
    //This examples assumes drawChart needs to be triggered for everyelement
    // observed by this ResizeObserver.
      google.charts.setOnLoadCallback( ()=>{
         const resizeChart = new ResizeObserver(drawExampleChart);
         resizeChart.observe(document.getElementById('myChart'));
  } )
    /**/
  //load second and third example when package is loaded.
  google.charts.setOnLoadCallback(function()
    {
      //performance #1 using JSON on database
      let ajaxInfo = new XMLHttpRequest();
      ajaxInfo.onload = function() {
        drawPieChartDB(JSON.parse(this.responseText))
      };

      ajaxInfo.open("GET", "/students/ankiewiczk/UltraVoting/php/switchAction.php?action=getParticipation");
      ajaxInfo.send();

      //performance example #2 using AJAX on text file and using JSON to parse
      let ajaxInfo2 = new XMLHttpRequest();
      ajaxInfo2.onload = function() {
        drawPieChartTEXT(JSON.parse(this.responseText))
      };

      ajaxInfo2.open("GET", "/students/ankiewiczk/MyPortfolio/ajax_info.txt");
      ajaxInfo2.send();

    });
}

function drawPieChartDB(input){
  var data = google.visualization.arrayToDataTable([
    ['Label','# of students'],
    ['Voted',parseInt(input.count)],
    ['No Vote',parseInt(input.total-input.count)]
   ]);

   var options = {
     title: 'Voter Participation',
     is3D:true
   };

   var chart = new google.visualization.PieChart(document.getElementById('voterParticipation'));
   chart.draw(data, options);
}

function drawPieChartTEXT(input){
  var data = google.visualization.arrayToDataTable(input);

  var options = {
    title:'World Wide Wine Production'
  };

   var chart = new google.visualization.PieChart(document.getElementById('perf2'));
   chart.draw(data, options);
}

function drawExampleChart() {

var data = google.visualization.arrayToDataTable([
  ['Country', 'Mhl'],
  ['Italy', 55],
  ['France', 49],
  ['Spain', 44],
  ['USA', 24],
  ['Argentina', 15]
]);

var options = {
  title: 'World Wide Wine Production'
};

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
chart.draw(data, options);

}
