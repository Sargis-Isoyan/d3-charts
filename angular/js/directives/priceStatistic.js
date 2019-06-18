angular.module('app')
    .directive('pricestatisticChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                var width = 900;
                var height = 400;

                var categories= [];
                for(var m = 0; m < scope.data.length; m++){
                    categories[m] = scope.data[m].name;
                }
                var dollars = [];



                var colors = ['#FEBF95','#BBBBB9','#70A4D4'];
// ,'#4DA79C','#6b6b69','#f5c9ab'
                var grid = d3.range(1).map(function(i){
                    return {'x1':0,'y1':0,'x2':0,'y2':480};
                });

                var tickVals = grid.map(function(d,i){
                    if(i>0){ return i*10; }
                    else if(i===0){ return "100";}
                });

                var xscale = d3.scale.linear()
                                .domain([10,180])
                                .range([0,900]);

                var yscale = d3.scale.linear()
                                .domain([0,categories.length])
                                .range([96,400]);

                var colorScale = d3.scale.quantize()
                                .domain([0,categories.length])
                                .range(colors);

                var canvas = d3.select(elem.children()[0])
                                .append('svg')
                                .attr({'width':width,'height':height});
                                canvas.append('rect')
                                .attr("transform", "translate(70,0)")
                                .attr({'width':width,'height':height})
                                .style('fill',"#fff");

                

                var xAxis = d3.svg.axis();
                    xAxis
                        .orient('bottom')
                        .scale(xscale)
                        // .tickValues(tickVals);

                var yAxis = d3.svg.axis();
                    yAxis
                        .orient('left')
                        .scale(yscale)
                        .tickSize(2)
                        .tickFormat(function(d,i){ return categories[i]; })
                        .tickValues(d3.range(5));

                var y_xis = canvas.append('g')
                                  .attr("transform", "translate(150,0)")
                                  .attr('id','yaxis')
                                  .call(yAxis);

                var x_xis = canvas.append('g')
                                  .attr("transform", "translate(150,390)")
                                  .attr('id','xaxis')
                                  .call(xAxis);
                var chart, objectKeys, rect;
                var object = []; 

                for (var i = 0; i < scope.data.length; i++) {
                    
                    objectKeys = Object.keys(scope.data[i].value.periphery);

                    var rectg = canvas.append('g')
                            .attr("transform", "translate(150,-20)")
                            .attr('id','bars'+i)

                            
                    var arr = [];
                    var objName = scope.data[i].name;
                    var summa = 0;
                    for(var j=0; j<3; j++){
                        
                        arr[j]= ((scope.data[i].value.periphery[objectKeys[j]]+scope.data[i].value.mall[objectKeys[j]]+scope.data[i].value.cityCenter[objectKeys[j]])*width)/100;
                        summa +=arr[j];
                    
                        
                        rect = d3.select('#bars'+i)
                            .append('rect')
                            .attr("id",scope.data[i].name+"rect"+j)
                            .attr("title",scope.data[i].name)
                            .attr('height',30);                      
                    }
                    
                    object[objName] = arr;
                    
                };
                var startXcordinat = [], maxLowpric, maxMidlePrice, maxmaxPrice,low=[], lowPrice =[], mid=[], midPrice=[], hidh=[], hightPrice=[];   
                var ar = [];
                for(var i=0; i<scope.data.length; i++){
                    ar = object[scope.data[i].name];
                    startXcordinat.push(object[scope.data[i].name][0]+(object[scope.data[i].name][1]/2));
                    
                    midPrice.push(object[scope.data[i].name][1]);
                    hightPrice.push(object[scope.data[i].name][2]);
                     
                    
                    for(var j = 0; j<ar.length; j++){
                    
                        
                        $("#"+scope.data[i].name+"rect"+j).attr("width",ar[j]);
                        $("#"+scope.data[i].name+"rect"+j).attr("style","fill:"+colors[j]);

                    }

                   
                   
                    
                }
                maxLowpric =Math.max.apply(null, lowPrice) ;
                maxMidlePrice =Math.max.apply(null, midPrice) ;
                maxmaxPrice = Math.max.apply(null, hightPrice);
                maxStartXcordinat = Math.max.apply(null, startXcordinat)+20;

               

                var grids = canvas.append('g')
                                  .attr('id','grid')
                                  .attr('transform','translate(150,10)')
                                  .selectAll('line')
                                  .data(grid)
                                  .enter()
                                  .append('line')
                                  .attr({'x1':function(d,i){ return maxStartXcordinat; },
                                         'y1':function(d){ return d.y1; },
                                         'x2':function(d,i){ return maxStartXcordinat; },
                                         'y2':function(d){ return d.y2; },
                                    })
                                  .style({'stroke':'#adadad','stroke-width':'1px'});
                shopname = Object.keys(scope.data);
                var pricesSumObj = []; 
                var shopsValuesName = [], shopsPricevalues = [], priceNames = ['Lowprice','Middleprice','Highprice'],obj={};
                for(var i=0; i<scope.data.length; i++){
                    var prevWidth = 0, textX = 0, arrayOfPricesvalues = [];
                    var pricesSum=[];
                    var lowSum = 0;
                    var midSum = 0;
                    var hightSum = 0,sum=0;
                $('#bars'+i+" rect").each( function(){ sum += parseInt($(this).attr("width")) ;})
                   

                var circle =canvas.select('#bars'+i).append("circle")
                        .attr("class","showHide")
                        .attr("style","display:none")
                        .attr("cx", 650)
                        .attr("cy", (yscale(i))+35)
                        .attr("r",8)
                        .style("fill","blue")
                var rectan =canvas.select('#bars'+i).append("rect")
                        .attr("class","showHide")
                        .attr("style","display:none")
                        .attr("transform", "translate(655,"+((yscale(i))+35)+")")
                        .attr("height",3)
                        .attr("width", 300)
                        .style("fill","blue")        
                    
                    
                    shopsValuesName =  Object.keys(scope.data[i].value);
                    for(var j = 0; j<ar.length; j++){
                        var widthOfElements, obj = scope.data[i].value[shopsValuesName[j]]; 
                        


                        for (var m = 0; m <3; m++) {
                            if(m == 0 && j <= 2){
                                lowSum += obj[Object.keys(obj)[m]];
                                pricesSum[m] = lowSum;
                            }
                            if(m==1 && j <= 2){
                                midSum += obj[Object.keys(obj)[m]];
                                pricesSum[m] = midSum;
                            }
                            if(m==2 && j <= 2){
                                hightSum += obj[Object.keys(obj)[m]];
                                pricesSum[m] = hightSum;
                            }

                            
                            
                        }

                        
                        var transitext = d3.select('#bars'+i)
                                    .append('text')
                                    .attr("id",scope.data[i].name+"text"+j)
                                    .attr({'x': function(){
                                        if(j==0)
                                            {
                                                return (maxStartXcordinat-startXcordinat[i])+40; 
                                            }
                                        else
                                            {
                                                textX+=parseInt($("#"+scope.data[i].name+"rect"+j).siblings().eq(j-1).attr('width'))
                                                return ((maxStartXcordinat-startXcordinat[i])+textX+40);
                                            } 
                                        },
                                        'y': function(d,o){ return (yscale(i))+35; }})
                                    

                        $("#"+scope.data[i].name+"rect"+j).attr({
                            'x': function(){
                            if(j==0)
                                {
                                    return (maxStartXcordinat-startXcordinat[i]); 
                                }
                            else
                                {
                                    prevWidth+=parseInt($("#"+scope.data[i].name+"rect"+j).siblings().eq(j-1).attr('width'))
                                    widthOfElements=(maxStartXcordinat-startXcordinat[i])+prevWidth;
                                    return ((maxStartXcordinat-startXcordinat[i])+prevWidth);
                                } 
                            },
                            
                            'y':function(d,o){ return (yscale(i))+19; }
                        });
                        $("#"+scope.data[i].name+"rect"+j).on("mouseout", function () {
                            $(elem.children()[1]).children().remove();
                            $(this).siblings('.showHide').attr("style","display:none")

                                // $("#priceStaticsSecondChart").attr("style","display:none");
                            })
                        $("#"+scope.data[i].name+"rect"+j).on("mouseover",function (argument) {
                            $(this).siblings('.showHide').attr("fill","blue")
                                $(this).siblings('.showHide').attr("style","display:block")
                                displayRightBlock($(this).attr("title"))
                            })
                    }
                    pricesSumObj[i] = pricesSum;
                   
                    
                }
                // console.log(pricesSumObj);
                var newArrary=[];
                for(var i=0; i<scope.data.length; i++){
                    newArrary = pricesSumObj[i];
                    for(var j=0; j<3; j++){
                        $("#"+scope.data[i].name+"text"+j).text(newArrary[j]);
                        $("#"+scope.data[i].name+"text"+j).attr("style",'fill:#000;font-size:14px');
                    }
                }


                var transit = d3.select("svg").selectAll("rect")
                                    .data(dollars)
                                    .transition()
                                    .duration(1000) 
                                    .attr("width", function(d) {return xscale(d); });

                
                // second chart right side
function displayRightBlock(arg){

    
            var margin1 = {top: 20, right: 20, bottom: 30, left: 40},
            w = 450 - margin1.left - margin1.right,
            h = 400 - margin1.top - margin1.bottom;

       

        var y1 = d3.scale.linear()
            .range([h, 0]);

        var color1 = d3.scale.category10();

        var xscale1 = d3.scale.linear()
                                
                                .range([0,380]);

               
                var xAxis1 = d3.svg.axis();
                    xAxis1
                        .orient('bottom')
                        .scale(xscale1)
                        // .tickValues(tickVals);

                

        var svg = d3.select(elem.children()[1]).append("svg")
            .attr("width", w + margin1.left + margin1.right)
            .attr("height", h + margin1.top + margin1.bottom)
            .append("g")
            .attr("transform", "translate(20,20)")

        

        var x_xis1 = svg.append('g')
                          .attr("transform", "translate(0,335)")
                          .attr('id','xaxis')
                          // .call(xAxis1);

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(-10,"+(h/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Price / Sum");
            
            var objName,pricenames, arr=[],arr1=[], objName2;
            for(var m=0; m<scope.data.length; m++){
                if(scope.data[m].name == arg){
                    objName = Object.keys(scope.data[m].value)
                     
                    for (var i = 0; i <3; i++) {
                        var num = 2;
                        var num2=0;
                        
                        
                        priceNames = Object.keys(scope.data[m].value[objName[i]]);
                        arr = scope.data[m].value[objName[i]];
                        objName2 = Object.keys(arr);
                       
                        arr1.push(arr[objName2[j]])

                        var text = svg.append("text")
                        .attr("x", (i+1)*(w/3)-20)
                        .attr("y", h+15)
                        .text(objName[i])
                        .style("font-size","14px")
                        .style("text-anchor","middle")
                        .style("fill","#8b908f");
                        
                        for(var j=2; j>=0; j--){
                        var rectangle = svg.append("rect")
                                .attr("id","rect"+num)
                                .attr("x", i*w/3)
                                .attr("y", num2*h/3)
                                .attr("width", w/3)
                                .attr("height", h/3)
                                .style("fill","none")
                                .attr('stroke', 'gray')
                                .attr('stroke-dasharray', '10,5')
                                .attr('stroke-linecap', 'butt')
                                .attr('stroke-width', '1');  

                        if(arr[objName2[j]] != 0){
                            rectangle 
                                .style("fill",colors[num])
                                

                            var insRectangle = svg.append("text")
                                .attr("x", (i*w/3)+20)
                                .attr("y", (num2*h/3)+15)
                                .text("Tier-"+objName[i]);

                            var rectangle1 = svg.append("rect")
                                .attr("id","rect"+num)
                                .attr("x", (i*w/3)+30)
                                .attr("y", (num2*h/3)+h/6-15)
                                .attr("width", w/6)
                                .attr("height", 20)
                                .style("fill","#fff")
                                .attr('stroke', '#000')
                                .attr("rx",4)
                                .attr("ry",4)
                                // .attr('stroke-dasharray', '10,5')
                                .attr('stroke-linecap', 'butt')
                                .attr('stroke-width', '1');

                            var insRectangle1 = svg.append("text")
                                .attr("x", (i*w/3)+35)
                                .attr("y", (num2*h/3)+h/6)
                                .text(arr[objName2[j]]+" POS");    
                        }    
                        num2++;
                        num--;                    

                            

                                
                                
                        }
                    }
                   
                }
                
            } 
             
            

            var text4 = svg.append("text")
            .attr("x", 50)
            .attr("y", -10)
            .text(arg)
            .style("font-size","14px")
            .style("text-anchor","end")
            .style("fill","#000"); 
        }   
///end of function right side
                
                        
        }
};
            


});    