angular.module('app')
    .directive('newBrandsChart', function () {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {
                /* create x and y scales */
                function ZoomableTreeMap() {
                    var $container = $('#hottopics'),
                        w = $container.width(),
                        h = $container.height(),
                        x = d3.scale.linear().range([0, w]),
                        y = d3.scale.linear().range([0, h]),
                        //color = d3.scale.category20b(),
                        root,
                        node;
                    var opacity = 1;

                    /* create treemap layout */
                    var treemap = d3.layout.treemap()
                        .children(function (d, depth) {
                            return depth ? null : d._children;
                        })
                        .round(false)
                        .size([w, h])
                        .sticky(true)
                        .value(function (d) {
                            return d.value;
                        });

                    var svg = d3.select("#hottopics").append("div")
                        .attr('id', 'my-svg-div')
                        .attr("class", "chart")
                        .style("width", w + "px")
                        .style("height", h + "px")
                        .append("svg:svg")
                        .attr("width", w)
                        .attr("height", h)
                        .append("svg:g")
                        .attr("transform", "translate(.5,.5)");

                    function init(){
                            node = root = scope.data;

                            var nodes = treemap.nodes(root)
                                .filter(function (d) {
                                    return !d.children;
                                });



                            var cell = svg.selectAll("g")
                                .data(nodes)
                                .enter().append("svg:g")
                                .attr("class", "cell")
                                .attr("transform", function (d) {
                                    return "translate(" + d.x + "," + d.y + ")";
                                })
                                .on("click", function (d) {
                                    return zoom(node === d.parent ? root : d.parent);
                                });


                            cell.append("svg:rect")
                                .attr("width", function (d) {

                                    return d.dx - 1;
                                })
                                .attr("height", function (d) {
                                    return d.dy - 1;
                                })
                                .style({
                                    "fill": "#6b6ecf", "opacity": function (d) {
                                        opacity -= 0.09;
                                        return (opacity);
                                    }
                                });

                            cell.append("svg:text")
                                .attr("x", function (d) {
                                    return d.dx / 2;
                                })
                                .attr("y", function (d) {
                                    return d.dy / 2;
                                })

                                .attr("text-anchor", "middle")
                                .text(function (d) {
                                    return d.parent['name'];
                                })
                                .style("opacity", function (d) {
                                    d.w = this.getComputedTextLength();
                                    return d.dx > d.w ? 1 : 0;
                                });

                            d3.select(window).on("click", function () {
                                zoom(root);
                            });

                            d3.select("select").on("change", function () {
                                treemap.value(this.value === "value" ? value : count).nodes(root);
                                zoom(node);
                            });
                    }
                    init();

                    function value(d) {
                        return d.value;
                    }

                    function count(d) {
                        return 1;
                    }

                    function zoom(d) {
                        var kx = w / d.dx, ky = h / d.dy;
                        x.domain([d.x, d.x + d.dx]);
                        y.domain([d.y, d.y + d.dy]);
                        var nodeCurr = d;
                        var t = svg.selectAll("g.cell").transition()
                            .duration(750)
                            .attr("transform", function (d) {
                                return "translate(" + x(d.x) + "," + y(d.y) + ")";
                            });

                        t.select("rect")
                            .attr("width", function (d) {
                                return kx * d.dx;
                            })
                            .attr("height", function (d) {
                                return ky * d.dy;
                            });

                        t.select("text")
                            .attr("x", function (d) {
                                return kx * d.dx / 2;
                            })
                            .attr("y", function (d) {
                                return ky * d.dy / 2;
                            })
                            .text(function (d) {
                                var text = nodeCurr.depth > 0 ? d.name : d.parent['name'];
                                return text;
                            })
                            .style("opacity", function (d) {
                                return kx * d.dx > d.w ? 1 : 0;
                            });

                        node = d;
                        d3.event.stopPropagation();
                    }
                }

                ZoomableTreeMap();

                $(window).resize(function () {
                    var div = document.getElementById("my-svg-div");
                    div.parentNode.removeChild(div);
                    ZoomableTreeMap();
                });
            }
        };
    });