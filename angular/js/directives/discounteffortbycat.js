angular.module('app')
    .directive('discounteffortbycatChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                
                var margin = {top: 20, right: 20, bottom: 70, left: 40},
                    width = 300,
                    height = 420 - margin.top - margin.bottom;
                // set the ranges
                var x = d3.scale.ordinal().rangeRoundBands([0, 250], .2);
                var y = d3.scale.linear().range([height, 0]);
                // define the axis
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                // add the SVG element
                var svg = d3.selectAll(".idfordiscounteffortbycatchart")
                    .append("svg")
                    .style("background","#fff")
                    .attr("height", 220 + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + (margin.left+margin.top+20) + "," + margin.left + ")");

                var k=1;
                var cat = [];
                var rate = [], colors=[];
                var keyName;
                var arrkeyName = [];
                var ind = 0;
                var rectNum = [0,0];

                for(var i = 0; i<scope.data.length; i++){
                    for(var j =0; j<scope.data[i].value.length; j++){                        
                        keyName=scope.data[i].value[j].category;
                        if(cat[j]!=scope.data[i].value[j].Share){
                            arrkeyName.push(keyName);
                        }
                        if(colors[j]!=scope.data[i].value[j].color){
                            colors.push(scope.data[i].value[j].color);
                        }
                        if(cat[j]!=scope.data[i].value[j].Share){
                            cat.push(scope.data[i].value[j].Share);
                        }
                        if(rate[j]!=scope.data[i].value[j].Rate){
                            rate.push(scope.data[i].value[j].Rate);
                        }
                        
                        
                        
                    }
                };
                var display = function(ind, i) {
                

                var div1 = d3.select(svg[0][ind]).append("g")
                            .attr("transform",function(d,j){ return  "translate("+(rectNum[ind]*300)+",20)"})
                            .style("float","left")
                            .style("width","25%")
                            .style("position","relative")
                            .attr("id",scope.data[i].name+"2");
              div1.append("rect")
                    .attr("transform",function(d,j){ return  "translate(15,-50)"})
                    .style("background","red")
                    .style("width","24.8%")
                    .style("height","250px")
                    .style("fill","#f0f3f4")
                

                    div1.append("text")
                        .text(scope.data[i].name)
                        .attr("transform",function(d,j){ return  "translate("+(rectNum[ind]*20+50)+",-35)"})
                        .style("float","left")
                        .style("width","25%")
                        .style("font-weight","bold");

                    div1.append("g")
                        .attr("class", "x axis")
                        .attr("transform",function(d,j){ return  "translate("+(rectNum[ind]*20+5)+"," + (height + 5)+")"})
                        .call(xAxis)
                        .selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.30em")
                        .attr("dy", "-.55em");    

                var colorScale = d3.scale.quantize()
                            .domain([0,scope.data[i].value.length])
                            .range(colors);

                var yscale = d3.scale.linear()
                            .domain([0,scope.data[i].value.length])
                            .range([0,180]);

                var yAxis = d3.svg.axis();

                            yAxis
                            .orient('left')
                            .scale(yscale)
                            .tickSize(3)
                            .tickFormat(function(d,o){ return arrkeyName[o]; })
                            .tickValues(d3.range(scope.data[i].value.length));


                var y_xis = svg.append('g')
                            .attr("transform", "translate(15,38)")
                            .attr('id','yaxis')
                            .call(yAxis);
                div1.append("text")
                    .text("Share of Discounted SKU")
                    .attr("transform", "translate(25,-10)");

                div1.append("text")
                    .text("Rate")
                    .attr("transform", "translate(270,-10)");

                
                
                var chart = div1.append('g')
                    .attr("transform", "translate(15,0)")
                    .attr('class','barsfordiscbyplayer')
                    .selectAll('rect')
                    .data(scope.data[i].value)
                    .enter()
                    .append('rect')
                    .attr('height',33)
                    .attr("dataofdisc",function(d){return d.Share})
                    .attr("class",function(d,o){  return  d.category;})
                    .attr({'x':0,'y':function(d,o){ return yscale(o); }})
                    .style('fill',function(d,o){ return colorScale(o); })
                    .attr('width',function(d){ return (d.Share*250)/100; })
                    .on("mouseover", function(d,f){
                        $(this).parent(".barsfordiscbyplayer").siblings('.info').attr("style","display:block").attr("transform","translate("+($(this).attr("width")/2)+","+(yscale(f)+20)+")");
                        $(".text_category").text(d.category);
                        $(".text_discount").text(d.Share+"%");
                        
                    })
                    .on("mouseout", function(d){
                         
                        $("."+d.category).parent(".barsfordiscbyplayer").siblings('.info').attr("style","display:none");
                    });;
             

                var infobox = div1
                    .append('g')
                    .attr('class', 'info')
                    .attr('patternUnits', 'userSpaceOnUse')
                    .attr('width', 80)
                    .attr('height', 60)
                    infobox.append("image")
                    .attr("xlink:href", "./img/iconmessagediscount.png")
                    .attr('width', 80)
                    .attr('height', 60)
                    infobox.append("text")
                    .text("Cat")
                    .attr("class","text_category")
                    .style("text-anchor","middle ")
                    .attr("transform", "translate(40,27)")
                    infobox.append("text")
                    .text("Disc. SKU:")
                    .style("text-anchor","middle ")
                    .attr("transform", "translate(40,42)")
                    infobox.append("text")
                    .text("")
                    .attr("class","text_discount")
                    .style("text-anchor","middle ")
                    .attr("transform", "translate(40,55)");
                
                var rate = div1.append('g')
                    .attr("transform", "translate(250,0)")
                    .attr('class','barsfordiscbyplayerrate');    

                var transitext = d3.selectAll('.barsfordiscbyplayer')
                    .selectAll('text')
                    .data(scope.data[i].value)
                    .enter()
                    .append('text')
                    .attr({'x':function(d) {return (((d.Share*250)/100)-35); },'y':function(d,o){ return yscale(o)+21; }})
                    .text(function(d){ return d.Share+"%"; }).style({'fill':'#fff','font-size':'17px'});



                var transitext11 = d3.selectAll('.barsfordiscbyplayerrate')
                    .selectAll('text')
                    .data(scope.data[i].value)
                    .enter()
                    .append('text')
                    .attr({'x':function(d) {return 25; },'y':function(d,o){ return yscale(o)+15; }})
                    .text(function(d){ return d.Rate+"%"; })
                    .attr("class",function(d){ if(d.Rate>20){ return "redtext";}else{return "blacktext";}});    
                };
                

                for(var i =0; i<scope.data.length; i++){    
                        if(i<3){
                            
                            
                            $($("svg")[ind]).attr("width", '100%');
                            $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",((i+1)*width) + margin.left + margin.right);

                            display(ind,i);
                            rectNum[ind]++;
                            $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((rectNum*width)/2)-68)+"," + (height + 25)+")"})
                            
                        }
                        else{
                            ind=1;
                            $($("svg")[ind]).attr("width", '100%');
                            $($("svg")[ind]).find($("g.y.axis .tick line")).attr("x2",(i*width) + margin.left + margin.right);
                            
                            $($("svg")[ind]).find($(".xname")).attr("transform",function(d){ return  "translate("+(((width)/2)-68)+"," + (height + 25)+")"})
                            display(ind,i);
                            rectNum[ind]++;
                        }
                    }        
        }
    };
});