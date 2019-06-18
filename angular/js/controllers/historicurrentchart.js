'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('historicurrentchartCtrl', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {    
      
      
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select("#svghistoricurrentchart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var rectangle1 = svg.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text1 = svg.append("text")
            .attr("x", 0)
            .attr("y", 20)
            .text("LUXURY DESIGNER")
            .style("font-size","24px")
            .style("fill","#8b908f");
        var rectangle2 = svg.append("rect")
            .attr("x", 0)
            .attr("y", height/3)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text2 = svg.append("text")
            .attr("x", 0)
            .attr("y", height/3+20)
            .text("AFFORDABLE DESIGNER")
            .style("font-size","24px")
            .style("fill","#8b908f");
        var rectangle3 = svg.append("rect")
            .attr("x", 0)
            .attr("y", 2*height/3)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text3 = svg.append("text")
            .attr("x", 0)
            .attr("y", 2*height/3+20)
            .text("LOCAL BRANDS")
            .style("font-size","24px")
            .style("fill","#8b908f");
        var rectangle4 = svg.append("rect")
            .attr("x", width/2)
            .attr("y", 0)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text4 = svg.append("text")
            .attr("x", width)
            .attr("y", 20)
            .text("LUXURY")
            .style("font-size","24px")
            .style("text-anchor","end")
            .style("fill","#8b908f");
        var rectangle5 = svg.append("rect")
            .attr("x", width)
            .attr("y", height/3)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text5 = svg.append("text")
            .attr("x", width)
            .attr("y", height/3+20)
            .text(" AFFORDABLE LUXURY")
            .style("font-size","24px")
            .style("text-anchor","end")
            .style("fill","#8b908f");
        var rectangle6 = svg.append("rect")
            .attr("x", width/2)
            .attr("y", 2*height/3)
            .attr("width", width/2)
            .attr("height", height/3)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text6 = svg.append("text")
            .attr("x", width)
            .attr("y", 2*height/3+20)
            .text("MASS MARKET")
            .style("font-size","24px")
            .style("text-anchor","end")
            .style("fill","#8b908f");
        var rectangle7=svg.append("rect")
            .attr("x", width/2)
            .attr("y", 2*height/3)
            .attr("width", width/2)
            .attr("height", height/6)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');
        var text7 = svg.append("text")
            .attr("x", width)
            .attr("y", 2*height/3+(height/6)+20)
            .text("DISCOUNTER")
            .style("font-size","24px")
            .style("text-anchor","end")
            .style("fill","#8b908f");
        var rectangle8=svg.append("rect")
            .attr("x", width/2)
            .attr("y", 2*height/3)
            .attr("width", width/2)
            .attr("height", height/6)
            .style("fill","none")
            .attr('stroke', 'gray')
            .attr('stroke-dasharray', '10,5')
            .attr('stroke-linecap', 'butt')
            .attr('stroke-width', '1');

        d3.json("./js/current.json", function(error, data) {
            $scope.content = data[0].showHideValue;
            var xSku =[];
            var yPrice=[];
         for (var i=0; i<data.length; i++){
             xSku.push(data[i].currentvalue.nb_sku); xSku.push(data[i].histovalue.nb_sku);
             yPrice.push(data[i].currentvalue.Average_price); yPrice.push(data[i].histovalue.Average_price);
         }

          if (error) throw error;
          x.domain([d3.min(xSku)-((d3.min(xSku)*10)/100), d3.max(xSku)+((d3.max(xSku)*10)/100) ]);
          y.domain([d3.min(yPrice)-((d3.min(yPrice)*10)/100), d3.max(yPrice)+((d3.max(yPrice)*10)/100) ]);
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
              .append("text")
              .attr("class", "label")
              .attr("x", width)
              .attr("y", -1)
              .style("text-anchor", "end");

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
              .append("text")
              .attr("class", "label")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end");
              
          svg.selectAll(".doted")
              .data(data)
              .enter().append("circle")
              .attr("class", "doted")
              .attr("r", 25)
              .attr("cx", function(d) { return x(d.currentvalue.nb_sku);  })
              .attr("cy", function(d) { return y(d.currentvalue.Average_price); })
              .style("stroke-dasharray", ("10,3")) // make the stroke dashed
              .style("stroke",function(d) { return d.color; } )   // set the line colour
              .style("fill", "none");

          

          svg.selectAll(".dot1")
              .data(data)
              .enter().append("circle")
              .attr("class", "dot1")
              .attr("r", 25)
              .attr("cx", function(d) { return x(d.histovalue.nb_sku); })
              .attr("cy", function(d) { return y(d.histovalue.Average_price); })
              .style("stroke",function(d) { return d.color; } )   // set the line colour
              .style("fill", function(d) { return d.color; } );



        });


        $(document).ready(function(){
          
            $("input.forhistoridisplay").on("change",function(){
            if($(this).val() == 'true'){
              $("circle.doted").css("display","none");
            }else if($(this).val() == 'false'){
              $("circle.doted").css("display","block ");
            }

          })
        });
       
    }]);
