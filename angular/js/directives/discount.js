angular.module('app')
    .directive('discountChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                
                for (var i = 0; i < scope.data.length; i++) {
                    
                var radius = 80,
                    height = 10,
                    width = 200,
                    padding = 10,
                    radians = 2 *(scope.data[i].pcdiscount * Math.PI/100);

                var dimension = (2 * radius) + (2 * padding),
                    points = 50;

                var angle = d3.scale.linear()
                    .domain([0, points-1])
                    .range([0, radians]);

                var line = d3.svg.line.radial()
                    .interpolate("basis")
                    .tension(0)
                    .radius(radius)
                    .angle(function(d, i) { return angle(i); });
                var div =  d3.select(elem[0])
                            .append("div")
                            .attr("id","discount"+scope.data[i].name)


                var svg = d3.select("#discount"+scope.data[i].name).append("svg")
                    .attr("width", dimension+40)
                    .attr("height", dimension+60)
                    .style("padding","20px 15px")
                    .append("g");

                svg.append("text")
                    .text(scope.data[i].name)
                    .attr("transform", "translate(20, 0)")
                    .style("font-size","22px")
                    .style("font-weight","bold");

                svg.append("text")
                    .text("Average discount rate: "+ scope.data[i].averagediscount+"%")
                    .attr("transform", "translate(10 , " + ((radius + padding)+120) + ")")
                    .style("font-size","15px")
                    .style("font-weight","bold");
                        
                svg.append("text")
                    .text(scope.data[i].pcdiscount+"%")
                    .attr("transform", "translate(" + ((radius + padding)-30) + ", " + ((radius + padding)) + ")")
                    .style("font-size","34px")
                    .style("font-weight","bold")
                    .style("fill","steelblue");

                svg.append("text")
                    .text("of SKU are discounted" )
                    .attr("transform", "translate(" + ((radius + padding)-70) + ", " + ((radius + padding)+35) + ")")
                    .style("font-size","15px")
                        

                svg.append("path").datum(d3.range(points))
                    .attr("class", "line")
                    .attr("d", line)
                    .style("fill","none")
                    .style('stroke', 'steelblue')
                    .style('stroke-width', '1.5px')
                    .attr("transform", "translate(" + (radius + padding) + ", " + ((radius + padding)+15) + ")");

                svg.append("svg:line")
                        .attr("x1", 0)
                        .attr("x2", width)
                        .attr("y1", radius + padding+130 )
                        .attr("y2", radius + padding+130 )
                        .style("stroke", "rgb(189, 189, 189)");

                svg.append("svg:line")
                        .attr("x1", 0)
                        .attr("x2", width*scope.data[i].averagediscount/100)
                        .attr("y1", radius + padding+130 )
                        .attr("y2", radius + padding+130 )
                        .style("stroke", "#000")
                        .style("stroke-width","1.5px");        
                        
                }
            }
        };
    });