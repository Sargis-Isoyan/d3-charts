angular.module('app')
    .directive('colorChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {

        // set the dimensions of the canvas
        var margin = {top: 20, right: 20, bottom: 70, left: 40},
            width = 300,
            height = 300 - margin.top - margin.bottom;


        // set the ranges
        var x = d3.scale.ordinal().rangeRoundBands([0, 250], .2);

        var y = d3.scale.linear().range([height, 0]);

        // define the axis
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
            var newArray= [];
            for(var i =0; i<scope.data.length; i++){          
                for(var j =0; j<scope.data[i].value.length; j++){ 
                    newArray.push(scope.data[i].value[j].sum);
                }
            }
   
        
        y.domain([0, d3.max(newArray, function(d) { return d; })]);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10)
            .innerTickSize(-width)
            .outerTickSize(0)
            .tickPadding(10);
        

        // add the SVG element
        var svg = d3.selectAll(".idforcolorchart")
            .append("svg")
            .attr("height", 170 + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 

        svg.append("g").append("text")
            .attr("class","xname")
            .text("#declination per model");

        svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")                
                .attr("y", 5)
                .attr("dy", ".71em");

                
        svg.append("text")               
                .text("#model")
                .attr("transform","translate(-20,-10)")   

        // load the data
       

        var div = d3.selectAll(".idforcolorchart").append("div")  // declare the tooltip div 
                .attr("class", "tooltip closcolrdivstyle")
                .style("background","#fff")              // apply the 'tooltip' class
                .style("border","solid 2px black")
                .style("width","250px")
                .style("height","100px");
                
            var ind = 0;
            var rectNum = 0;
            var num = 0;
    var display = function (ind,i){


            var div1 = d3.select(svg[0][ind]).append("g")
                .attr("transform",function(d,j){ return  "translate("+(rectNum*300)+",0)"})
                .style("float","left")
                .style("width","25%")
                .attr("id",scope.data[i].name);  

            div1.append("text")
                .text(scope.data[i].name)
                .attr("transform",function(d,j){ return  "translate("+(rectNum*20+50)+",0)"})
                .style("float","left")
                .style("width","25%")
                .style("font-weight","bold");

            

            div1.append("g")
                .attr("class", "x axis")
                .attr("transform",function(d,j){ return  "translate("+(rectNum*20+5)+"," + (height + 5)+")"})
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.30em")
                .attr("dy", "-.55em");

            div1.selectAll("bar")
                .data(scope.data[i].value)
                .enter()
                .append("rect")
                .attr("class", "bar "+scope.data[i].name)                
                .attr("x", function(d,j) { return  (rectNum*20+5)+x(d.num); })
                .attr("width", "20")
                .attr("y", function(d) { return y(d.sum); })
                .attr("height", function(d) { return height - y(d.sum); })
                .on("mouseover", function(d) {
                    $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').addClass('opencolrdivstyle');
                     $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').removeClass('closcolrdivstyle'); 
                    $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').html(
                        "<div class='row ' style='margin:0'>"+
                            "<div class='col-sm-3 ' style='padding:5px 2px'><img src='./img/b10.jpg' style='width:100%'/></div>"+
                            "<div class='col-sm-3 ' style='padding:5px 2px'><img src='./img/b11.jpg' style='width:100%'/></div>"+
                            "<div class='col-sm-3 ' style='padding:5px 2px'><img src='./img/b12.jpg' style='width:100%'/></div>"+
                            "<div class='col-sm-3 ' style='padding:5px 2px'><img src='./img/b13.jpg' style='width:100%'/></div>"+
                        "</div>" +                          // closing </a> tag
                        "<p>"+($(this).attr('class').split(" "))[1]+"</p>"+
                        "<p>Top fendu sur les cotes"+
                            " <span style='float:right;margin:0px 5px;width: 10px;background: pink;height: 10px;border-radius: 50%;display: inline-block;'></span>"+
                            "<span style='float:right;margin:0px 5px;width: 10px;background: blue;height: 10px;border-radius: 50%;display: inline-block;'></span>"+
                            "<span style='float:right;margin:0px 5px;width: 10px;background: #000;height: 10px;border-radius: 50%;display: inline-block;'></span>"+
                        "</p>"+
                        "<div style='position: absolute;width: 2px;height: 45px;border-left: solid 2px #4c3a1e;top: 138px;left: 40px;'>"+
                        "</div><div style='position: absolute;width: 10px;background: #4c3a1e;border-left: solid 2px #4c3a1e;top: 175px;left: 36px;height: 10px;border-radius: 50%;'></div>")         
                        .attr("style","background-color:#fff; border: 2px solid #4c3a1e; width: 320px;top:"+ (parseInt($(this).attr('y'))-165) + "px;left:"+ (parseInt(($(this).parent("g").attr('transform').split("(")[1]).split(",")[0])+parseInt($(this).attr('x'))+5 )+ "px");
                })
                .on("mouseout", function(d) {                  
                      
                    $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').addClass('closcolrdivstyle');
                     $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').removeClass('opencolrdivstyle'); 
                    })
               
             }          
        for(var i =0; i<scope.data.length; i++){            


            // scale the range of the data
            
    x.domain(scope.data[i].value.map(function(d) { return d.num; }));
           

            if(i !== 4){

                num++;
                $($("svg")[ind]).attr("width", ((num)*width) + margin.left + margin.right);
                $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",((num)*width) + margin.left + margin.right);
                
                display(ind,i);
                rectNum++;
                $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((rectNum*width)/2)-68)+"," + (height + 25)+")"})

            }
            else{
                j=0;
                num =0;
                num++;
                ind++;
                $($("svg")[ind]).attr("width", ((num)*width) + margin.left + margin.right);
                $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",((num)*width) + margin.left + margin.right);
                rectNum= 0;
                $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((width)/2)-68)+"," + (height + 25)+")"})
                display(ind,i);
            }    
            
           
                
        }

        }
    };
});