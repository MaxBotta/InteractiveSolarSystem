/**
 * Created by maxbotta on 18.05.17.
 */
function atmosphereChart() {

    var dataMars = [
        {name: "CO2", gasanteil: 95.9},
        {name: "Ar", gasanteil: 2},
        {name: "N2", gasanteil: 1.9},
        {name: "O2", gasanteil: 0.14},
        {name: "CO", gasanteil: 0.06}];

    var dataNeptun = [
        {name: "H2", gasanteil: 80},
        {name: "He", gasanteil: 19},
        {name: "CH4", gasanteil: 1.5}];


    var data = [
        {name: "H2", gasanteil: 1},
        {name: "He", gasanteil: 1},
        {name: "CH4", gasanteil: 1},
        {name: "CO2", gasanteil: 1},
        {name: "Ar", gasanteil: 1},
        {name: "N2", gasanteil: 1},
        {name: "O2", gasanteil: 1},
        {name: "CO", gasanteil: 1}];

    console.log(data);


    var width = 500,
        height = 500,
        radius = Math.min(width, height) / 2,
        iRadius = radius / 2;

    var color = d3.scaleOrdinal()
        .range(["#23819C", "#2FAACE", "#57BCD9", "#8CD1E6", "#B8E2EF", "#DBF0F7", "#2C93E8", "#838690", "#F56C4E"]);

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

    var svg = d3.select("#atmosphereCanvas")
        .attr("id", "planetChart")
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

}

    function change() {
        var pie = d3.pie()
            .value(function (d) {
                return d.gasanteil;
            }) (data);

        var path = d3.select("#pie").selectAll("path").data(pie);
        //path.attr("d", arc);
        path.transition().duration(500).attrTween("d" ,arcTween);

//        d3.selectAll("text").data(pie).attr("transform", function (d) {
//            return "translate(" + labelArc.centroid(d) + ")";
//        });

        //d3.selectAll("text").data(pie).transition().duration(500).attrTween("transform", labelarcTween);
    }

function changeMars() {
    data[0].gasanteil = 0;
    data[1].gasanteil = 0;
    data[2].gasanteil = 0;
    data[3].gasanteil = dataMars[0].gasanteil;
    data[4].gasanteil = dataMars[1].gasanteil;
    data[5].gasanteil = dataMars[2].gasanteil;
    data[6].gasanteil = dataMars[3].gasanteil;
    data[7].gasanteil = dataMars[4].gasanteil;
    change();
}

    // var buttonB = document.getElementById("b");
    //
    // d3.select("button#b")
    //     .on("click", function () {
    //
    //         data[0].gasanteil = dataNeptun[0].gasanteil;
    //         data[1].gasanteil = dataNeptun[1].gasanteil;
    //         data[2].gasanteil = dataNeptun[2].gasanteil;
    //         data[3].gasanteil = 0;
    //         data[4].gasanteil = 0;
    //         data[5].gasanteil = 0;
    //         data[6].gasanteil = 0;
    //         data[7].gasanteil = 0;
    //         change();
    //     })
