angular.module('app')
    .directive('productChart',function () {
        return {
            restrict: 'EA',
            replace: true,
            link: function (scope, elem, attr) {


                window.appendItems = function (dataForElements) {
                    $('product-chart').empty();
                    var margin = {top: 20, right: 20, bottom: 30, left: 40},
                        width = 200 - margin.left - margin.right,
                        chartwidth = 30,
                        height = 300 - margin.top - margin.bottom;
                    var xScale = d3.scale.ordinal(),
                        range = [],
                        xoffset = 15;

                    // create an array with the position of each label
                    for (var k = 0; k < 5; k++) {
                        range.push(k * chartwidth + k*12+5)
                    }

                    xScale
                        .domain(['Dpam', 'Lahalle', 'Orchestra', 'Okaidi', 'Kiabi'])
                        .range(range);

                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], 0);

                    var y = d3.scale.linear()
                        .range([height, 0]);


                    var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom");

                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("center")
                        .ticks(10, "%");

                    var svg = d3.select("product-chart").append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(10,0)");

                    var data = dataForElements;



                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(20,0)")


                    x.domain(data.map(function (d, i) {
                        return i * 10;
                    }));
                    y.domain([0, d3.max(data, function (d) {
                        return d.value + 10;
                    })]);


                    svg.append("g")
                        .attr("class", "x axis")

                        .append("text")
                        .attr("y", 6)
                        .attr("dy", ".71em")
                        .style("font-size",10)
                        .style("text-anchor", "end")

                    var chartbar = svg.append("g");


                    chartbar.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", function (d, i) {
                            return chartwidth * i + i * 10;
                        })
                        .attr("width", chartwidth)
                        .attr("y", function (d) {
                            return y(d.value);
                        })
                        .attr("height", function (d) {
                            return height - y(d.value);
                        })


                    var perc = chartbar.selectAll("text")
                        .data(data)
                        .enter()
                        .append("text")
                        .attr("x", function (d, i) {

                            return  i*5+i*chartwidth+10;
                        })
                        .attr("y", function (d) {

                            return y(d.value) - 15;
                        })
                        .text(function (d) {
                            return d.value + "%";
                        })
                        .style("font-size", "14")
                        .style("font-weight", "bold")
                        .style("color", "#4682b4")


                    chartbar.append('g')
                        .attr("transform", "translate(0,250)")
                        .attr("width", function (d, i) {
                            return chartwidth * i + i * 5;
                        })
                        .style("font-size",10)
                        .style("color", "#989898")
                        .call(xAxis);


                    function type(d) {
                        d.value = +d.value;
                        return d;
                    }

                };
                window.appendItems(scope.dataProduct);
            }
        };
    });