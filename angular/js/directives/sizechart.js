angular.module('app')
    .directive('sizeChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                
                  
                
                for(var j=0; j<scope.data.length; j++){
                
                // console.log(scope.data[j].innervalue);
                var canvas = d3.select("#"+scope.data[j].name)
                        .append("svg")
                        .attr("class", "visualisation")
                        .attr("width", "630")
                        .attr("height", "210")
                        .attr("transform", "translate(10,0)"),

                    // vis = d3.selectAll(".visualisation"),

                    WIDTH = 630,
                    HEIGHT = 180,
                    MARGINS = {
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 50
                    };
                    xScale = d3.scale.linear()
                        .range([0, WIDTH - MARGINS.right-25])
                        .domain([d3.min(scope.data[j].value, function (d) {
                            return +d.x;
                        }), d3.max(scope.data[j].value, function (d) {
                            return +d.x;
                        })]),

                    yScale = d3.scale.linear()
                        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
                        .domain([0, d3.max(scope.data[j].value, function (d) {
                            return +d.y;
                        })]),

                    xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .innerTickSize(-HEIGHT)
                        .outerTickSize(1),

                yAxis = d3.svg.axis()
                    .scale(yScale)
                    .innerTickSize(-WIDTH)
                    .outerTickSize(0)
                    .orient("left");

                canvas.append("svg:g")
                    .attr("transform", "translate(5," + (HEIGHT - MARGINS.bottom) + ")")
                    .attr("class","xaxis")
                    .call(xAxis);
                canvas.append("svg:g")
                    .attr("transform", "translate(5,0)")
                    .attr("class","yaxis")
                    .call(yAxis);

                canvas.append("svg:g")
                    .attr("transform", "translate(" + (MARGINS.left) + ",0)");

                var lineGen = d3.svg.line()
                    .x(function (d) {
                        return xScale(d.x);
                    })
                    .y(function (d) {
                        return yScale(d.y);
                    });
                canvas.append('svg:path')
                    .attr('d', lineGen(scope.data[j].innervalue))
                    .attr('stroke', '#117c62')
                    .attr('stroke-width', 1.5)
                    .attr("transform", "translate(5,0)")
                    .attr('fill', '#aec6d8')
                    .attr("opacity", "0.5");

                canvas.append("text")
                    .text("80%, SKU Between 35-41")
                    .style("font-weight","900")
                    .style("font-size","18")
                    .attr("x", WIDTH / 3)
                    .attr("y", 150);
                canvas.append('svg:path')
                    .attr('d', lineGen(scope.data[j].value))
                    .attr('stroke', '#117c62')
                    .attr("transform", "translate(5,0)")
                    .attr('stroke-width', 1.5)
                    .attr('fill', 'none');
                var tree = d3.layout.tree()
                    .size([630, 210]);
                var nodes = tree.nodes(scope.data[j].value);
                var i;
                var ar = [];
                var ar = lineGen(scope.data[j].value).split(",");

                for (i = ar.length - 1; i > 0; i--) {

                    ar[i] = ar[i].split("L");
                    
                    ar[i] = ar[i].reverse();
                }
                
                ar[0] = ar[0].replace("M","");
                ar[0] = ar[0]+",0";
                ar[0]= JSON.parse("[" + ar[0] + "]");

                ar[0][1] = "0";
                ar[ar.length - 1][1] = ar[ar.length - 1][0];
                ar[ar.length - 1][0] = WIDTH - MARGINS.right;

                for (var i = ar.length - 2; i > 0; i--) {
                    ar[i][0] = parseInt(ar[i][0]) - 25;
                }

                var node = canvas.selectAll(".nodes")
                    .data(ar)
                    .enter()
                    .append("svg:g")
                    .attr("transform", function (d) {       
                        return "translate(" + (parseInt(d[0])-MARGINS.right)+","+d[1] + ")";
                    });

                node.append("circle")
                    .attr("r", 3.5)
                    .attr("fill", "#117c62")
                    .attr("transform", "translate(0,0)")
                    .append("svg:title")
                    .text(function (d, i) {
                        if (i >= scope.data[j].value.length) return false;
                        if (i>0)  return scope.data[j].value[i-1].y;                        
                    });


              };  

            }
        };
    });