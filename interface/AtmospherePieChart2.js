/**
 * Created by maxbotta on 09.07.17.
 */

function atmospherePieChart2() {

    var interface = document.getElementById("interface");
    var container = document.createElement("div");
    container.setAttribute("id", "atmosphereContainer");
    container.style.width = "450px";
    container.style.height = "450px";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.margin = "-225px 0 0 -225px";
    container.style.position = "absolute";


    interface.appendChild(container);

    var merkur = [
        {name: "Sauerstoff", gasanteil: 42},
        {name: "Natrium", gasanteil: 29},
        {name: "Wasserstoff", gasanteil: 22},
        {name: "Helium", gasanteil: 6},
        {name: "Kalium", gasanteil: 1},
        {name: "Kohlenstoffdioxid", gasanteil: 0},
        {name: "Stickstoff", gasanteil: 0},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0},
        {name: "Ammoniak", gasanteil: 0}];

    var venus = [
        {name: "Sauerstoff", gasanteil: 0},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 0},
        {name: "Helium", gasanteil: 0},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 96.5},
        {name: "Stickstoff", gasanteil: 3.5},
        {name: "Schwefeldioxid", gasanteil: 0.02},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0},
        {name: "Ammoniak", gasanteil: 0}];


    var erde = [
        {name: "Sauerstoff", gasanteil: 21},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 0},
        {name: "Helium", gasanteil: 0},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 0.04},
        {name: "Stickstoff", gasanteil: 78},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0.93},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0},
        {name: "Ammoniak", gasanteil: 0}];

    var mars = [
        {name: "Sauerstoff", gasanteil: 0.13},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 0},
        {name: "Helium", gasanteil: 0},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 95.3},
        {name: "Stickstoff", gasanteil: 2.7},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 1.6},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0},
        {name: "Ammoniak", gasanteil: 0}];

    var jupiter = [
        {name: "Sauerstoff", gasanteil: 0},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 89.8},
        {name: "Helium", gasanteil: 10.2},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 0},
        {name: "Stickstoff", gasanteil: 0},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0.3},
        {name: "Ammoniak", gasanteil: 0.03}];

    var saturn = [
        {name: "Sauerstoff", gasanteil: 0},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 96.3},
        {name: "Helium", gasanteil: 3.25},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 0},
        {name: "Stickstoff", gasanteil: 0},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 0.45},
        {name: "Ammoniak", gasanteil: 0.03}];

    var uranus = [
        {name: "Sauerstoff", gasanteil: 0},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 80},
        {name: "Helium", gasanteil: 19},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 0},
        {name: "Stickstoff", gasanteil: 0},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 1},
        {name: "Ammoniak", gasanteil: 0}];

    var neptun = [
        {name: "Sauerstoff", gasanteil: 0},
        {name: "Natrium", gasanteil: 0},
        {name: "Wasserstoff", gasanteil: 80},
        {name: "Helium", gasanteil: 18},
        {name: "Kalium", gasanteil: 0},
        {name: "Kohlenstoffdioxid", gasanteil: 0},
        {name: "Stickstoff", gasanteil: 0},
        {name: "Schwefeldioxid", gasanteil: 0},
        {name: "Argon", gasanteil: 0},
        {name: "Neon", gasanteil: 0},
        {name: "Kohlenstoffmonoxid", gasanteil: 0},
        {name: "Wasser", gasanteil: 0},
        {name: "Methan", gasanteil: 2},
        {name: "Ammoniak", gasanteil: 0}];

    console.log(data);

    //Erster Planet
    var data = merkur;

    var width = 450,
        height = 450,
        radius = Math.min(width, height) / 2,
        iRadius = radius - 30;

     var color = d3.scaleOrdinal()
         .range(["#5757FF", "#BBBBFF", "#62A9FF", "#BBDAFF", "#62D0FF", "#CEF0FF", "#06DCFB", "#ACF3FD", "#01FCEF", "#B5FFFC", "#03EBA6", "#A5FEE3", "#23819C", "#A5DBEB"]);

    //var color = d3.scaleOrdinal(d3.schemeCategory20);

    var pie = d3.pie()
        .padAngle(.005)
        .value(function (d) {
            return d.gasanteil;
        })(data);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(iRadius);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var svg = d3.select("#atmosphereContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll("arc")
        .data(pie)
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data.name);
        })
        .each(function (d) {
            this._current = d;
        });

//    g.append("text")
//        .attr("transform", function (d) {
//            return "translate(" + labelArc.centroid(d) + ")";})
//        .text(function (d) {
//            return d.data.name;})
//        .style("fill", "#fff")
//        .each(function (d) {
//            this._current = d;});

    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function (t) {
            return arc(i(t));
        };
    }

//    function labelarcTween(a) {
//        var i = d3.interpolate(this._current, a);
//        this._current = i(0);
//        return function (t) {
//            return "translate(" + labelArc.centroid(i(t)) + ")";
//        };
//    }


    function change() {
        var pie = d3.pie()
            .padAngle(.005)
            .value(function (d) {
                return d.gasanteil;
            })(data);

        var path = d3.select("#atmosphereContainer").selectAll("path").data(pie);
        //path.attr("d", arc);
        path.transition().duration(1000).attrTween("d", arcTween);

//        d3.selectAll("text").data(pie).attr("transform", function (d) {
//            return "translate(" + labelArc.centroid(d) + ")";
//        });

        //d3.selectAll("text").data(pie).transition().duration(500).attrTween("transform", labelarcTween);
    }

    d3.select("#merkurIcon")
        .on("mouseover", function () {
            data = merkur;
            change();
        });

    d3.select("#venusIcon")
        .on("mouseover", function () {
            data = venus;
            change();
        });

    d3.select("#erdeIcon")
        .on("mouseover", function () {
            data = erde;
            change();
        });

    d3.select("#marsIcon")
        .on("mouseover", function () {
            data = mars;
            change();
        });

    d3.select("#jupiterIcon")
        .on("mouseover", function () {
            data = jupiter;
            change();
        });

    d3.select("#saturnIcon")
        .on("mouseover", function () {
            data = saturn;
            change();
        });

    d3.select("#uranusIcon")
        .on("mouseover", function () {
            data = uranus;
            change();
        });

    d3.select("#neptunIcon")
        .on("mouseover", function () {
            data = neptun;
            change();
        });
}
