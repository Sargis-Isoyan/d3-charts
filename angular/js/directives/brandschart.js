angular.module('app')
    .directive('brandsChart', function ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {

                var widthOfChartPerShop = Math.round(angular.element('#brandChartsArea').width()) / 5 - 20 - 10;

                function getWorkingColor(a, b) {
                    if (typeof a != 'undefined') {
                        return a;
                    } else {
                        return b;
                    }
                }

                var root, treemap, x, y, svg, svg1, grandparent;

                var unBindEvent = $rootScope.$on('event::RENDER_D3', function () {
                    root = treemap = x = y = grandparent = null;
                    init();
                });

                var margin = {
                        top: 40,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    width = widthOfChartPerShop,
                    height = 600,
                    formatNumber = d3.format(",d"),
                    transitioning;

                function init() {
                    root = scope.data;

                    x = d3.scale.linear()
                        .domain([0, width])
                        .range([0, width]);

                    y = d3.scale.linear()
                        .domain([0, height])
                        .range([0, height]);

                    treemap = d3.layout.treemap()
                        .children(function (d, depth) {
                            return depth ? null : d._children;
                        })
                        .sort(function (a, b) {
                            return a.value - b.value;
                        })
                        .ratio(height / width * 0.001 * (1 + Math.sqrt(5)))
                        .round(false);
                    svg1  = d3.select(elem[0]).append("svg")
                        .attr("width", widthOfChartPerShop)
                        .attr("height", '15')
                        .style("margin-left", -margin.left + "px")
                        .style("margin.right", -margin.right + "px")
                        .style("display","block")
                        .style("margin-top","5px")
                        .style("margin-bottom","15px")
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.left + ")")
                        .style("shape-rendering", "crispEdges");
                    svg = d3.select(elem[0]).append("svg")
                        .attr("width", widthOfChartPerShop)
                        .attr("height", height)
                        .style("margin-left", -margin.left + "px")
                        .style("margin.right", -margin.right + "px")
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.left + ")")
                        .style("shape-rendering", "crispEdges");

                    grandparent = svg1.append("g")
                        .attr("class", "grandparent");

                    grandparent.append("rect")
                        .attr("width", width)
                        .attr("height",margin.top);

                    grandparent.append("text")
                        .attr("x", 0)
                        .attr("dy", ".75em");

                    initialize(root);
                    accumulate(root);
                    layout(root);
                    display(root);
                }

                init();

                function initialize(root) {
                    root.x = root.y = 0;
                    root.dx = width;
                    root.dy = height;
                    root.depth = 0;
                }

                function accumulate(d) {
                    return (d._children = d.children) ? d.value = d.children.reduce(function (p, v) {
                        return p + accumulate(v);
                    }, 0) : d.value;
                }

                function getTitleOfParent (d) {
                    if(typeof d.children != 'undefined'){
                        return "'" +  d.shopName + "'"
                    }else{
                        return 0

                    }
                }

                function layout(d) {
                    if (d._children) {
                        treemap.nodes({
                            _children: d._children
                        });
                        d._children.forEach(function (c) {
                            c.x = d.x + c.x * d.dx;
                            c.y = d.y + c.y * d.dy;
                            c.dx *= d.dx;
                            c.dy *= d.dy;
                            c.parent = d;
                            layout(c);
                        });
                    }
                }

                function display(d) {
                    grandparent
                        .datum(d.parent)
                        .on("click", transition)
                        .select("text")
                        .text(name(d));

                    var g1 = svg.insert("g", ".grandparent")
                        .datum(d)
                        .attr("class", "depth");

                    var g = g1.selectAll("g")
                        .data(d._children)
                        .enter().append("g");

                    g.filter(function (d) {
                        return d._children;
                    })
                        .classed("children", true)
                        .on("click", transition);

                    g.selectAll(".child")
                        .data(function (d) {
                            return d._children || [d];
                        })
                        .enter()
                        .append("rect")
                        .attr("class", "child")
                        .attr("style", function (d) {
                            return "fill:" + d.colorSubCategory
                        })
                        .call(rect);

                    g.append("rect")
                        .attr("class", "parent")
                        .attr("onmouseover","window.onMouseOverOnRectParent(this, " + getTitleOfParent(d) + ")")
                        .attr("style", function (d) {
                            return "fill:" + getWorkingColor(d.colorCategory, d.colorSubCategory)
                        })
                        .call(rect)
                        .append("title")
                        .text(function (d) {

                            return d.name;
                        });

                    g.append("text")
                        .classed("overlaidText", true)
                        .text(function (d) {
                            return d.name;
                        })
                        .call(text);

                    g.append("text")
                        .attr("dy", "1.4em")
                        .classed("overlaidText", true)
                        .text(function (d) {
                            return Math.round(d.value) + " SKU"
                        })
                        .call(middletext);

                    function transition(d) {

                        if (transitioning || !d) return;
                        transitioning = true;

                        var g2 = display(d),
                            t1 = g1.transition().duration(750),
                            t2 = g2.transition().duration(750);

                        // Update the domain only after entering new elements.
                        x.domain([d.x, d.x + d.dx]);
                        y.domain([d.y, d.y + d.dy]);

                        // Enable anti-aliasing during the transition.
                        svg.style("shape-rendering", null);

                        // Draw child nodes on top of parent nodes.
                        svg.selectAll(".depth").sort(function (a, b) {
                            return a.depth - b.depth;
                        });

                        // Fade-in entering text.
                        g2.selectAll("text").style("fill-opacity", 0);

                        // Transition to the new view.
                        t1.selectAll("text").call(text).style("fill-opacity", 0);
                        t2.selectAll("text").call(text).style("fill-opacity", 1);
                        t2.selectAll(".overlaidText").call(middletext).style("fill-opacity", 1);
                        t1.selectAll(".overlaidText").call(middletext).style("fill-opacity", 1);
                        t1.selectAll("rect").call(rect);
                        t2.selectAll("rect").call(rect);

                        // Remove the old node when the transition is finished.
                        t1.remove().each("end", function () {
                            svg.style("shape-rendering", "crispEdges");
                            transitioning = false;
                        });
                    }

                    if (typeof window.svgTransition[d.shopName] != 'undefined') {
                        if (d.name == d.shopName) {
                            window.svgTransition[d.shopName].f = transition;
                            window.svgTransition[d.shopName].type = 0;
                            window.svgTransition[d.shopName].routName = d.name;
                        } else {
                            window.svgTransition[d.shopName].f = transition;
                            window.svgTransition[d.shopName].type = 1;
                            window.svgTransition[d.shopName].routName = d.name;
                            window.triggerSvgShops(d.shopName, 1, d.name);
                        }
                    } else {
                        window.svgTransition[d.shopName] = {
                            f: transition,
                            type: 0,
                            routName: d.name
                        };
                    }
                    return g;
                }

                function text(text) {
                    text.attr("x", function (d) {
                        return x(d.x + d.dx / 2);
                    })
                        .attr("y", function (d) {
                            return y(d.y + d.dy / 2);
                        });
                }

                function middletext(text) {
                    text.attr("x", function (d) {
                        return x(d.x + d.dx / 2);
                    })
                        .attr("y", function (d) {

                            return y(d.y+d.dy /2);
                        });
                }

                function rect(rect) {
                    rect.attr("x", function (d) {
                        return x(d.x);
                    })
                        .attr("y", function (d) {
                            return y(d.y);
                        })
                        .attr("width", function (d) {
                            return x(d.x + d.dx) - x(d.x);
                        })
                        .attr("height", function (d) {
                            return y(d.y + d.dy) - y(d.y);
                        });
                }

                function name(d) {
                    return d.parent ? " " + formatNumber(d.value) + " SKU" : " " + formatNumber(d.value) + " SKU";
                }

                $($($($("svg")[1]).find('g.children:last-child')[0]).find('text')[0]).text()

            }
        };
    });