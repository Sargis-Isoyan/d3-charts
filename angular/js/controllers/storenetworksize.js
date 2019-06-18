'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('storenetworksizeCtrl', ['$rootScope', '$scope',  function ($rootScope, $scope) {
       var  width= 900;
       var  height= 500;
        var centered;

//focusing france on SVG
       var  xy=d3.geo.mercator().translate([207,2036]).scale(1946)
        var projection = d3.geo.albers()
            .center([0, 49.5])
            .rotate([-2.8, 3])
            .parallels([45, 55])
            .scale(2950)
            .translate([width / 3, height / 2]);
        var path=d3.geo.path().projection(projection);

        var svg = d3.select("#storenetworksizeMap").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("id", "polygons");

        var g = svg.append("g")
            .style("stroke-width", "1.5px");

        d3.json('./js/france.json', function(collection) {


        d3.csv('./js/shops.csv', function(data) {

            var force = d3.layout.force()
            //  .gravity(0)
                .charge(-0.7)
                .nodes(data)
                .size([0, 0])
                .start();



            var to_bubble=[]
//this function could be used to filter circles by city parameter
            var filter_by_city =function (city)
            {

                data.features.forEach(function(data) {
                    if (data.properties.city==city)
                    {
                        to_bubble.push(data)
                    }


                })
                return to_bubble;
            }

//console.warn(collection.features)
            g.selectAll("path")
                .data(collection.features)
                .enter().append("path").style("fill","#ccc")
                .attr("d", d3.geo.path().projection(projection)).on("zoom",zoom);

            var node = d3.select("svg").selectAll("g")
                .data(data)  //filter_by_city('Paris') could be used here, assigning later a more negative charge but its not the ideal solution at all
                .enter().append("g")
                .attr("id", function(d){ return d.name;})



            g.selectAll(".mark").data(data).enter().append("circle").attr("class","mark")

                .attr("transform", function(d) {
                    return "translate(" + projection([d.lat,d.lon]) + ")"; })
                .attr("id", function(d){ return d.name;})
                // .attr("class", "node")
                .attr('fill','blue')
                .attr('opacity',0.5)
                .attr('r', 1.5);

        });




        })
        var zoom = d3.behavior.zoom().on('zoom', function() {
            g.attr('transform', 'translate(' + d3.event.translate.join(',') + ') scale(' + d3.event.scale + ')');
            //g.selectAll('path').attr('d', path.projection(projection));
        });
        svg.call(zoom);
        svg.on({
            "mouseover": function(d) {
                d3.select(this).style("cursor", "pointer")
            },
            "mouseout": function(d) {
                d3.select(this).style("cursor", "default")
            }
        })



    }]);
