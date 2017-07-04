/**
 * Created by maxbotta on 08.05.17.
 */

    //https://spin.atomicobject.com/2015/06/12/objects-around-svg-circle-d3-js/
function tools() {
    var toolsContainer = document.createElement("div");
    toolsContainer.setAttribute("id", "toolsContainer");
//toolsContainer.style.border = "1px solid black";
    toolsContainer.style.width = "160px";
    toolsContainer.style.height = "160px";
    toolsContainer.style.position = "relative";
//toolsContainer.style.borderRadius = "100%";
    var interface = document.getElementById("interface");
    interface.appendChild(toolsContainer);

    var svg = d3.select("#toolsContainer").append("svg")
        .attr("id", "svg")
        .attr("width", 160)
        .attr("height", 160);


//var svg = d3.select('svg');
    var originX = 80;
    var originY = 80;
    var innerCircleRadius = 30;
    var outerCircleRadius = 80;

//    var outerCircle = svg.append("circle")
//        .attr("id", "outerCircle")
//        .attr({
//            cx: originX,
//            cy: originY,
//            opacity: 0.5,
//            r: outerCircleRadius,
//            fill: "dimgrey",
//            stroke: "black"
//        });

    var innerCircle = svg.append("circle")
        .attr("id", "innerCircle")
        .attr({
            cx: originX,
            cy: originY,
            r: innerCircleRadius,
            fill: "blue",
            stroke: "none"
        });

    var group = svg.append("g");


    var chairOriginX = originX + ((60) * Math.sin(0));
    var chairOriginY = originY - ((60) * Math.cos(0));

    function toolsHover (tool) {
        var tool1 = document.getElementById("circle1");
        tool1.style.border = "1px solid white";
    }

    var pointOnOuterCircle = svg.append("circle")
        .attr("id", "circle1")
        .attr({
            cx: chairOriginX,
            cy: chairOriginY,
            opacity: 0,
            r: 20,
            fill: "steelblue"})
        .on("mouseover", function(){return pointOnOuterCircle.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle.style("opacity", "0.6");});

    var pointOnOuterCircle2 = svg.append("circle")
        .attr("id", "circle2")
        .attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle2.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle2.style("opacity", "0.6");});

    var pointOnOuterCircle3 = svg.append("circle")
        .attr("id", "circle3")
        .attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle3.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle3.style("opacity", "0.6");});

    var pointOnOuterCircle4 = svg.append("circle").attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle4.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle4.style("opacity", "0.6");});

    var pointOnOuterCircle5 = svg.append("circle").attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle5.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle5.style("opacity", "0.6");});

    var pointOnOuterCircle6 = svg.append("circle").attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle6.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle6.style("opacity", "0.6");});

    var pointOnOuterCircle7 = svg.append("circle").attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle7.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle7.style("opacity", "0.6");});

    var pointOnOuterCircle8 = svg.append("circle").attr({
        cx: chairOriginX,
        cy: chairOriginY,
        opacity: 0,
        r: 20,
        fill: "steelblue",
        stroke: "none"})
        .on("mouseover", function(){return pointOnOuterCircle8.style("opacity", "1");})
        .on("mouseout", function(){return pointOnOuterCircle8.style("opacity", "0.6");});

    function openTools() {

        // ANIMATIONS
        // drawing point on outer circle
        pointOnOuterCircle.style("opacity", 0.6);
        pointOnOuterCircle2.style("opacity", 0.6);
        pointOnOuterCircle3.style("opacity", 0.6);
        pointOnOuterCircle4.style("opacity", 0.6);
        pointOnOuterCircle5.style("opacity", 0.6);
        pointOnOuterCircle6.style("opacity", 0.6);
        pointOnOuterCircle7.style("opacity", 0.6);
        pointOnOuterCircle8.style("opacity", 0.6);

        // rotating the outer circles
        var tween = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle.transition().duration(500).attrTween("transform", tween);

        var tween2 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(45, 80, 80)");
        }

        pointOnOuterCircle2.transition().duration(500).attrTween("transform", tween2);

        var tween3 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(90, 80, 80)");
        }

        pointOnOuterCircle3.transition().duration(500).attrTween("transform", tween3);

        var tween4 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(135, 80, 80)");
        }

        pointOnOuterCircle4.transition().duration(500).attrTween("transform", tween4);

        var tween5 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(180, 80, 80)");
        }

        pointOnOuterCircle5.transition().duration(500).attrTween("transform", tween5);

        var tween6 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(225, 80, 80)");
        }

        pointOnOuterCircle6.transition().duration(500).attrTween("transform", tween6);

        var tween7 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(270, 80, 80)");
        }

        pointOnOuterCircle7.transition().duration(500).attrTween("transform", tween7);

        var tween8 = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(315, 80, 80)");
        }

        pointOnOuterCircle8.transition().duration(500).attrTween("transform", tween8);
    }


    function closeTools() {

        var tween = function (d, i, a) {
            return d3.interpolateString("rotate(0, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle.transition().duration(500).attrTween("transform", tween);

        var tween2 = function (d, i, a) {
            return d3.interpolateString("rotate(45, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle2.transition().duration(500).attrTween("transform", tween2);

        var tween3 = function (d, i, a) {
            return d3.interpolateString("rotate(90, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle3.transition().duration(500).attrTween("transform", tween3);

        var tween4 = function (d, i, a) {
            return d3.interpolateString("rotate(135, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle4.transition().duration(500).attrTween("transform", tween4);

        var tween5 = function (d, i, a) {
            return d3.interpolateString("rotate(180, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle5.transition().duration(500).attrTween("transform", tween5);

        var tween6 = function (d, i, a) {
            return d3.interpolateString("rotate(225, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle6.transition().duration(500).attrTween("transform", tween6);

        var tween7 = function (d, i, a) {
            return d3.interpolateString("rotate(270, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle7.transition().duration(500).attrTween("transform", tween7);

        var tween8 = function (d, i, a) {
            return d3.interpolateString("rotate(315, 80, 80)", "rotate(0, 80, 80)");
        }

        pointOnOuterCircle8.transition().duration(500).attrTween("transform", tween8);


        pointOnOuterCircle.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle2.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle3.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle4.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle5.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle6.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle7.transition().delay(500).style("opacity", 0);
        pointOnOuterCircle8.transition().delay(500).style("opacity", 0);
    }


//    // fading out the intermediate objects
//    pointOnOuterCircle.transition().delay(4000).duration(500).style("opacity", 0);
//    outerCircle.transition().delay(4000).duration(500).style("opacity", 0);


//Lässt die Tools bewegen, in dem man auf den inneren Kreis klickt
    function moveDiv() {
        var isDown = false;
        var div = document.getElementById("toolsContainer");
        var iCircle = document.getElementById("innerCircle");

        iCircle.addEventListener('mousedown', function (e) {
            isDown = true;
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true);

        document.addEventListener('mouseup', function () {
            isDown = false;
        }, true);

        document.addEventListener('mousemove', function (event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {

                    x: event.clientX,
                    y: event.clientY

                };
                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
    }

    moveDiv();

    var iCircle = document.getElementById("innerCircle");
    iCircle.addEventListener("mouseover", openTools);

    var oCircle = document.getElementById("toolsContainer");
    oCircle.addEventListener("mouseleave", closeTools);
}