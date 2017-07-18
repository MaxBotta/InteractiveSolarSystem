/**
 * Created by maxbotta on 10.07.17.
 */

function temperature() {
    var interface = document.getElementById("interface");

    var popup = document.createElement("div");
    popup.setAttribute("id", "popupTemp");
    popup.style.width = "300px";
    popup.style.height = "auto";
    popup.style.position = "absolute";
    //popup.style.backgroundColor = "white";
    popup.style.boxShadow = "0px 0px 1px white";
    popup.style.top = "5%";
    popup.style.left = "77%";
    popup.style.marginLeft = "-150px";
    popup.style.borderRadius = "5px";
    popup.style.opacity = "1";
    popup.style.border = "1px solid white";
    popup.style.zIndex = "1000";
    interface.appendChild(popup);

    var header = document.createElement("div");
    header.setAttribute("id", "popupHeader");
    header.style.position = "absolute";
    header.style.width = "300px";
    header.style.height = "30px";
    //header.style.backgroundColor = "#2d4a69";
    header.style.BorderTopLeftRadius = "5px";
    header.style.BorderTopRightRadius = "5px";
    header.style.borderBottom = "1px solid white";
    popup.appendChild(header);

    var title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = "Temperatur in C";
    title.style.float = "left";
    title.style.position = "absolute";
    title.style.color = "white";
    title.style.marginLeft = "5px";
    title.style.marginTop = "6px";
    title.style.font = "14px sans-serif";
    header.appendChild(title);


    var close = document.createElement("div");
    close.style.position = "absolute";
    close.style.width = "30px";
    close.style.height = "30px";
    close.style.marginLeft = "270px";
    close.style.float = "right";
    close.style.borderLeft = "1px solid white";

    header.appendChild(close);

    var x = document.createElement("p");
    x.setAttribute("id", "x");
    x.innerHTML = "&#10005";
    x.style.marginTop = "5px";
    x.style.marginLeft = "0px";
    x.style.fontSize = "19px";
    x.style.color = "white";
    x.onmouseover = function () {
        var x = document.getElementById("x");
        x.style.opacity = "0.5";
    };
    close.onmouseout = function () {
        var x = document.getElementById("x");
        x.style.opacity = "1";
    };
    close.onclick = function () {
        popup.parentNode.removeChild(popup);
    };
    close.appendChild(x);


    var fold = document.createElement("div");
    fold.style.position = "absolute";
    fold.style.height = "30px";
    fold.style.width = "30px";
    fold.style.marginLeft = "240px";
    fold.style.position = "absolute";
    fold.style.borderLeft = "1px solid white";
    fold.style.float = "right";
    header.appendChild(fold);

    var up = document.createElement("p");
    up.setAttribute("id", "up");
    up.innerHTML = "&#9651";
    up.style.marginTop = "1px";
    up.style.marginLeft = "0px";
    up.style.fontSize = "19px";
    up.style.color = "white";
    up.onmouseover = function () {
        var up = document.getElementById("up");
        up.style.opacity = "0.5";
    };
    up.onmouseout = function () {
        var up = document.getElementById("up");
        up.style.opacity = "1";
    };
    var isUp = false;
    $(up).click(function(){
        if(isUp == false) {
            isUp = true;
            $(content).animate({
                height: '0px',
                opacity: '0'
            }, {
                duration: 500  // 2 seconds
            });
            up.innerHTML = "&#9661";
            setTimeout(function () {
                header.style.borderBottom = "none";
            }, 500);

        } else {
            isUp = false;
            $(content).animate({
                height: '170px',
                opacity: '1'
            }, {
                duration: 500  // 2 seconds
            });
            header.style.borderBottom = "1px solid white";
            up.innerHTML = "&#9651";

        }
    });
    fold.appendChild(up);


    //Content des Popup
    var content = document.createElement("div");
    content.setAttribute("id", "tempContent");
    content.style.width = "300px";
    content.style.height = "170px";
    content.style.marginTop = "30px";
    //content.style.border = "1px solid red";
    content.style.borderBottomLeftRadius = "5px";
    content.style.borderBottomRightRadius = "5px";
    //content.style.opacity = "0.2";
    //content.style.backgroundColor = "#2d4a69";
    popup.appendChild(content);



    var data = [-20, 10, 50];


    var margin = { top: 20, right: 20, bottom: 30, left: 20 };
    var height = content.clientHeight - margin.top - margin.bottom;
    var width = content.clientWidth - margin.left - margin.right;


    var svg = d3.select('#tempContent')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // svg.append('text')
    //     .attr("id", "tempTitle")
    //     .attr("x", 0)
    //     .attr("y",  margin.top / 2)
    //     .attr("text-anchor", "left")
    //     .text('Temperatur in C');

    var x = d3.scaleLinear()
        .range([0, width]);
    var y = d3.scaleBand()
        .rangeRound([height, 0]);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y)
        .tickSize(6, 0);


    d3.tsv('temperature.tsv', type, function (error, data) {
        x.domain(d3.extent(data, function (d) {return d.value;})).nice();
        y.domain(data.map(function (d) {return d.name;}));

        svg.selectAll('.bar')
            .data(data).
        enter().append('rect')
            .attr('class', function (d) {
            return "bar bar--" + (d.value < 0 ? "negative" : "positive");
        }).
        attr('x', function (d) {return x(Math.min(0, d.value));})
            .attr('y', function (d) {return y(d.name);})
            .attr('width', function (d) {return Math.abs(x(d.value) - x(0));})
            .attr('height', 20);

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        var tickNegative = svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + x(0) + ',0)')
            .call(yAxis)
            .selectAll('.tick')
            .filter(function (d, i) {return data[i].value < 0;});

        tickNegative.select('line')
            .attr('x2', 6)
            .style("shape-rendering", "crispEdges");

        tickNegative.select('text')
            .attr('x', 9)
            .style('text-anchor', 'start');
    });

    function type(d) {
        d.value = +d.value;
        return d;
    }


    // function moveDiv(div) {
    //     var isDown = false;
    //     header.addEventListener('mousedown', function (e) {
    //         isDown = true;
    //         offset = [
    //             div.offsetLeft - e.clientX,
    //             div.offsetTop - e.clientY
    //         ];
    //     }, true);
    //
    //     document.addEventListener('mouseup', function () {
    //         isDown = false;
    //     }, true);
    //
    //     document.addEventListener('mousemove', function (event) {
    //         event.preventDefault();
    //         if (isDown) {
    //             mousePosition = {
    //
    //                 x: event.clientX,
    //                 y: event.clientY
    //
    //             };
    //             div.style.left = (mousePosition.x + offset[0]) + 'px';
    //             div.style.top = (mousePosition.y + offset[1]) + 'px';
    //         }
    //     }, true);
    // }
    //
    // moveDiv(popup);






}