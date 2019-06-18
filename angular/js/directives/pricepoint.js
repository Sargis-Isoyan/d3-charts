angular.module('app')
    .directive('pricepointChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                var margin = {top: 20, right: 20, bottom: 70, left: 40},
                    width = 300,
                    height = 400 - margin.top - margin.bottom;
                // set the ranges
                var x = d3.scale.ordinal().rangeRoundBands([0, 250], .2);
                var y = d3.scale.linear().range([height, 0]);
                // define the axis
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                // add the SVG element
                var svg = d3.selectAll(".idforpricepointchart")
                    .append("svg")
                    .attr("height", 290 + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.left + ")");

                svg.append("g").append("text")
                    .attr("class", "xname")
                    .text("nb_sku");

                svg.append("text")
                    .text("#Price")
                    .attr("transform", "translate(-20,-20)");

                var div = d3.selectAll(".idforpricepointchart").append("div")  // declare the tooltip div
                    .attr("class", "tooltip closcolrdivstyle")
                    .style("background", "#fff")              // apply the 'tooltip' class
                    .style("border", "solid 2px black")
                    .style("width", "250px")
                    .style("height", "100px");
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(9)
                    .innerTickSize(-width)
                    .outerTickSize(5)
                    .tickPadding(10);


                    var sku = [];
                    var price = [];
                    for(var i = 0; i<scope.data.length; i++){
                        for(var j =0; j<scope.data[i].value.length; j++){
                            sku.push(scope.data[i].value[j].nb_sku);
                            price.push(scope.data[i].value[j].price);
                        }
                    }
                    y.domain([d3.min(price),d3.max(price)])



                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("y", 5)
                        .attr("dy", ".71em");
                    var ind = 0;
                    var rectNum = 0;
                    var nb_sku = 0;
                    var circle;
                    var display = function (ind,i){
                        var div1 = d3.select(svg[0][ind]).append("g")
                            .attr("transform",function(d,j){ return  "translate("+(rectNum*300)+",0)"})
                            .style("float","left")
                            .style("width","25%")
                            .attr("id",scope.data[i].name+"1");
                        div1.append("text")
                            .text(scope.data[i].name)
                            .attr("transform",function(d,j){ return  "translate("+(rectNum*20+50)+",-20)"})
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
                        for (var k=0; k<scope.data[i].value.length; k++){
                            for(var l=0;l<scope.data[i].value[k].nb_sku;l++){
                                circle = div1.selectAll("bar")
                                    .data(scope.data)
                                    .enter()
                                    .append("circle")
                                    .attr("cx",function(d){ return (15*l)+(l*4)+10; })
                                    .attr("cy",function(d){  return y(d.value[k].price);})
                                    .attr("r",5)
                                    .attr("data",function(d){  return d.value[k].price;})
                                    .style("padding","0px 3px")
                                    .on("mouseover", function(d) {
                                        console.log(scope.data[i].value[k]);
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').addClass('opencolrdivstyle');
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').removeClass('closcolrdivstyle');
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').html(
                                            "<div class='row ' style='margin:0'>"+
                                            "<div class='col-sm-8 ' style='padding:5px 2px'><h2 class='pricestyle'>"+$(this).attr('data') +"&euro;</h2></div>"+
                                            "<div class='col-sm-4 ' style='padding:5px 2px'><img src='./img/b11.jpg' style='width:100%'/></div>"+
                                            "</div>" +
                                            "<p>"+$(this).siblings("text").text()+"</p>"+
                                            "<p>Top fendu sur les cotes</p>"+
                                            "<div style='position: absolute;width: 45px;height: 3px; border-bottom: solid 2px #4c3a1e; top: 125px; left: -45px;'>"+
                                            "</div><div style='position: absolute;width: 10px;background: #4c3a1e;border-left: solid 2px #4c3a1e;top: 122px;left: -50px; height: 10px;border-radius: 50%;'></div>")
                                            .attr("style","background-color:#fff; border: 2px solid #4c3a1e; width: 250px;top:"+ (parseInt($(this).attr('cy'))-90) + "px;left:"+ (parseInt(($(this).parent("g").attr('transform').split("(")[1]).split(",")[0])+parseInt($(this).attr('cx'))+93)+ "px");
                                    })
                                    .on("mouseout", function(d) {
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').addClass('closcolrdivstyle');
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').css('top','-99999px');
                                        $(this).parent('g').parent('g').parent('svg').siblings('.tooltip').removeClass('opencolrdivstyle');
                                    })
                            }

                        }



                    }
                    for(var i =0; i<scope.data.length; i++){

                        if(i !== 4){

                            $($("svg")[ind]).attr("width", ((i+1)*width) + margin.left + margin.right);
                            $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",((i+1)*width) + margin.left + margin.right);

                            display(ind,i);
                            rectNum++;
                            $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((rectNum*width)/2)-68)+"," + (height + 25)+")"})

                        }
                        else{
                            j=0;
                            nb_sku =0;
                            nb_sku++;
                            ind++;
                            $($("svg")[ind]).attr("width", ((i)*width) + margin.left + margin.right);
                            $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",((nb_sku)*width) + margin.left + margin.right);
                            rectNum= 0;
                            $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((width)/2)-68)+"," + (height + 25)+")"})
                            display(ind,i);
                        }
                    }        
            }
    }
});