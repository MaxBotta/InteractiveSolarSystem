/**
 * Created by maxbotta on 08.05.17.
 */


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



function atmosphereChart() {


    // var atmosphere = document.createElement("div");
    // atmosphere.setAttribute("id", "atmosphere");
    // atmosphere.style.position ="absolute";
    // atmosphere.style.width = "100%";
    // atmosphere.style.height = "auto";
    // atmosphere.style.border = "1px solid white";
    //
    // var atmosphereCanvas = document.getElementById("atmosphereCanvas");
    // atmosphereCanvas.appendChild(atmosphere);

    var data = [
        {name: "CO2", gasanteil: 95.9},
        {name: "Ar", gasanteil: 2},
        {name: "N2", gasanteil: 1.9},
        {name: "O2", gasanteil: 0.14},
        {name: "CO", gasanteil: 0.06}];


    var radius = 250;
    var innerRadius = 220;
    var color = d3.scale.ordinal().range(["#23819C", "#2FAACE", "#57BCD9", "#8CD1E6", "#B8E2EF", "#DBF0F7"]);

    var canvas = d3.select("#atmosphereCanvas")
        .append("svg")
        .attr("id", "planetChart")
        .attr("width", "100%")
        .attr("height", "100%");

    var group = canvas.append("g")
        .attr("transform", "translate(663, 348)");

    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .padAngle(.005)
        .value(function (d) {
            return d.gasanteil
        });

    var theArc = group.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    theArc.append("path")
        .attr("d", arc)
        .attr("fill", function (d) {
            return color(d.data.gasanteil);
        });

}

    //http://www.cagrimmett.com/til/2016/08/24/d3-pie-chart-update.html
    function change() {

        var data = [
            {name: "CO2", gasanteil: 95.9},
            {name: "Ar", gasanteil: 2},
            {name: "N2", gasanteil: 1.9},
            {name: "O2", gasanteil: 0.14},
            {name: "CO", gasanteil: 0.06}];

        var pie = d3.pie()
            .value(function (d) {
                return d.gasanteil;
            })(data);
        theArc = d3.select("#pie").selectAll("path").data(pie); // Compute the new angles
        theArc.attr("d", arc); // redrawing the path
         // recomputing the centroid and translating the text accordingly.
    }
    //
    // d3.select("button#a")
    //     .on("click", function () {
    //          atmosphereChart();
    //      });
    // d3.select("button#b")
    //     .on("click", function () {
    //         change(dataNeptun);
    //     })


    // theArc.append("text")
    //     .attr("transform", function (d) {
    //         return "translate(" + arc.centroid(d) + ")";
    //     })
    //     .attr("dy", "0.15em")
    //     .text(function (d) {
    //         return d.data.name;
    //     });

