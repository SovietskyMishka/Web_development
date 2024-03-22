"use strict"

var d1, d2;
var stor, stor_h, rig_h, f_square, ex_square, plin_h, bear_square, finish_square;
var perimeter, walls, square, total_square, roof_square, inside_square,  plin_square;
var plin_flag = false, mans_flag = false;


dimension1.onchange = function() {
    d1 = parseFloat(dimension1.value);
    calcPerim(d1, d2);
    calcSquare(d1, d2);
    calcWalls(stor);
    calcTotalSquare(square, stor);
    calcRoofSquare();
    calcFrontonSquare(d1, d2, rig_h);
    calcExternalWalls(d1, d2, stor, stor_h);
    calcBearingWalls(d1, d2, stor, stor_h);
    calcInsideWalls(d1, d2, stor, stor_h);
    calcFinishInsideWalls(d1, d2, stor, stor_h);
    calcUnderPlinth(d1, d2);
}

dimension2.onchange = function() {
    d2 = parseFloat(dimension2.value);
    calcPerim(d1, d2);
    calcSquare(d1, d2);
    calcWalls(stor);
    calcTotalSquare(square, stor);
    calcRoofSquare();
    calcFrontonSquare(d1, d2, rig_h);
    calcExternalWalls(d1, d2, stor, stor_h);
    calcBearingWalls(d1, d2, stor, stor_h);
    calcInsideWalls(d1, d2, stor, stor_h);
    calcFinishInsideWalls(d1, d2, stor, stor_h);
    calcUnderPlinth(d1, d2);
}

storey.onchange = function() {
    stor = parseInt(storey.value);
    calcWalls(stor);
    calcTotalSquare(square, stor);
    calcExternalWalls(d1, d2, stor, stor_h);
    calcBearingWalls(d1, d2, stor, stor_h);
    calcInsideWalls(d1, d2, stor, stor_h);
    calcFinishInsideWalls(d1, d2, stor, stor_h);
}

plinth_h.onchange = function() {
    if (plin_flag) {
        plin_h = plinth_h.value;
        calcBearingWalls(d1, d2, stor, stor_h);
        calcInsideWalls(d1, d2, stor, stor_h);
        calcFinishInsideWalls(d1, d2, stor, stor_h);
    }
    else { 
        plin_h = 0;
    }
}

storey_h.onchange = function() {
    stor_h = parseFloat(storey_h.value);
    calcExternalWalls(d1, d2, stor, stor_h);
    calcBearingWalls(d1, d2, stor, stor_h);
    calcInsideWalls(d1, d2, stor, stor_h);
    calcFinishInsideWalls(d1, d2, stor, stor_h);
}

ridge_h.onchange = function() {
    rig_h = parseFloat(ridge_h.value);
    calcRoofSquare();
    calcFrontonSquare(d1, d2, rig_h);
}

mans.onchange = function() {
    if(mans.checked) {
        mans_flag = true;
        calcRoofSquare();
    }
    else {
        mans_flag = false;
        calcRoofSquare();
    }
}

plin.onchange = function() {
    if(plin.checked) {
        plin_flag = true;
        calcUnderPlinth(d1, d2);
        calcTotalSquare(square, stor);
    }
    else {
        plin_flag = false;
        calcUnderPlinth(d1, d2);
        calcTotalSquare(square, stor);
        calcBearingWalls(d1, d2, stor, stor_h);
        calcInsideWalls(d1, d2, stor, stor_h);
        calcFinishInsideWalls(d1, d2, stor, stor_h);
    }
}

function calcUnderPlinth(dim1, dim2) {
    if (dim1 > 0 && dim2 > 0 && plin_flag) {
        plin_square = dim1 * dim2;
        tOutput("plin-square", plin_square);
    }
    else {
        plin_square = 0;
        tOutput("plin-square", "")
    }
}

function calcFinishInsideWalls(dim1, dim2, str, str_h) {
    if (dim1 > 0 && dim2 > 0 && str_h && str > 0 && walls > 0) {
        finish_square = (((dim1 * str_h) * 2) + ((dim2 * str_h) * 2) * str) - (walls / str)  / 1.7;
        if (plin_flag && plin_h > 0) {
            finish_square += ((dim1 * plin_h) * 2) + ((dim2 * plin_h) * 2);
        }
        tOutput("finish-inside-walls", finish_square.toFixed(2));
    }
    else {
        inside_square = 0;
        tOutput("finish-inside-walls", "");
    }
}

function calcInsideWalls(dim1, dim2, str, str_h) {
    if (dim1 > 0 && dim2 > 0 && str_h && str > 0 && walls > 0) {
        inside_square = (((dim1 * str_h) * 2) + ((dim2 * str_h) * 2) * str) - (walls / str);
        if (plin_flag && plin_h > 0) {
            inside_square += (((dim1 * plin_h) * 2) + ((dim2 * plin_h) * 2) * str);
        }
        tOutput("inside-walls",  inside_square.toFixed(2));
    }
    else {
        inside_square = 0;
        tOutput("inside-walls", "");
    }
}

function calcBearingWalls(dim1, dim2, str, str_h) {
    if (dim1 > 0 && dim2 > 0 && str_h && str > 0) {
        bear_square = ((dim1 * str_h) * 2) + ((dim2 * str_h) * 2) * str;
        if (plin_flag && plin_h > 0) {
            bear_square += ((dim1 * plin_h) * 2) + ((dim2 * plin_h) * 2);
        }
        tOutput("bearing-walls", bear_square);
    }
    else {
        bear_square = 0;
        tOutput("bearing-walls", "");
    }
}

function calcExternalWalls(dim1, dim2, str, str_h) {
    if (dim1 > 0 && dim2 > 0 && str_h && str > 0) {
        ex_square = (((dim1 * str_h) * 2) + ((dim2 * str_h) * 2) * str) / 1.1;
        tOutput("external-walls", ex_square.toFixed(2));
    }
    else {
        ex_square = 0;
        tOutput("external-walls", "");
    }
}

function calcPerim(dim1, dim2) {
    if (dim1 > 0 && dim2 > 0) {
        perimeter = dim1 * 2 + dim2 * 2;
        tOutput("perimeter", perimeter);
    }
    else {
        perimeter = 0;
        tOutput("perimeter", "")
    }
}

function calcSquare(dim1, dim2) {
    if (dim1 > 0 && dim2 > 0) {
        square = dim1 * dim2;
        tOutput("square", square);
    }
    else {
        square = 0;
        tOutput("square", "")
    }
}

function calcWalls(str) {
    if (str > 0 && perimeter > 0) {
        walls = (str / perimeter) * 140;
        tOutput("walls", walls.toFixed(2));
    }
    else {
        walls = 0;
        tOutput("walls", "")
    }
}

function calcTotalSquare(sqr, str) {
    if (sqr > 0 && str > 0) {
        total_square = sqr * str;
        if (plin_flag) {
            total_square += sqr;
        }
        tOutput("total-square", total_square);
    }
    else {
        total_square = 0;
        tOutput("total-square", "")
    }
}

function calcRoofSquare() {
    if (d1 > 0 && d2 > 0 && rig_h > 0) {
        roof_square = (Math.pow(rig_h, 2) + Math.pow((d1 / 2), 2)) * d2;
        if (mans_flag) {
            roof_square += Math.pow(rig_h, 2) + Math.pow((d2 / 2), 2);           
        }
        tOutput("roof-square", roof_square);
    }
    else {
        roof_square = 0;
        tOutput("roof-square", "");
    }
}

function calcFrontonSquare(dim1, dim2) {
    if (dim1 > 0 && dim2 > 0 && rig_h > 0) {
        f_square = ((Math.pow(rig_h, 2) + Math.pow((dim1 / 2), 2)) * rig_h) * 0.5;
        tOutput("f_square", f_square);
    }
    else {
        f_square = 0;
        tOutput("f_square", "");
    }
}

function tOutput(id_name, val) {
    let out = document.getElementById(id_name);
    out.innerText = val;
}

var bear_price, external_price, foundation_price;

bear1.onchange = function() {
    if (bear1.checked && bear_square > 0) {
        bear_price = bear_square * 1324;
        tOutput("bearing-price", bear_price.toFixed(0) + " руб.");
    }
}

bear2.onchange = function() {
    if (bear2.checked && bear_square > 0) {
        bear_price = bear_square * 1723;
        tOutput("bearing-price", bear_price.toFixed(0) + " руб.");
    }
}

bear3.onchange = function() {
    if (bear3.checked && bear_square > 0) {
        bear_price = bear_square * 1332;
        tOutput("bearing-price", bear_price.toFixed(0) + " руб.");
    }
}

bear4.onchange = function() {
    if (bear4.checked && bear_square > 0) {
        bear_price = bear_square * 830;
        tOutput("bearing-price", bear_price.toFixed(0) + " руб.");
    }
}

bear5.onchange = function() {
    if (bear5.checked && bear_square > 0) {
        bear_price = bear_square * 1121;
        tOutput("bearing-price", bear_price.toFixed(0) + " руб.");
    }
}

extern1.onchange = function() {
    if (extern1.checked && ex_square > 0) {
        external_price = ex_square * 1423;
        tOutput("external-price", external_price.toFixed(0) + " руб.");
    }
}

extern2.onchange = function() {
    if (extern2.checked && ex_square > 0) {
        external_price = ex_square * 533;
        tOutput("external-price", external_price.toFixed(0) + " руб.");
    }
}

extern3.onchange = function() {
    if (extern3.checked && ex_square > 0) {
        external_price = ex_square * 792;
        tOutput("external-price", external_price.toFixed(0) + " руб.");
    }
}

extern4.onchange = function() {
    if (extern4.checked && ex_square > 0) {
        external_price = ex_square * 605;
        tOutput("external-price", external_price.toFixed(0) + " руб.");
    }
}

extern5.onchange = function() {
    if (extern5.checked && ex_square > 0) {
        external_price = ex_square * 729;
        tOutput("external-price", external_price.toFixed(0) + " руб.");
    }
}

fund1.onchange = function() {
    if (fund1.checked && square > 0) {
        foundation_price = square * 6113;
        tOutput("fund-price", foundation_price.toFixed(0) + " руб.");
    }
}


fund2.onchange = function() {
    if (fund2.checked && square > 0) {
        foundation_price = square * 4523;
        tOutput("fund-price", foundation_price.toFixed(0) + " руб.");
    }
}

fund3.onchange = function() {
    if (fund3.checked && square > 0) {
        foundation_price = square * 5754;
        tOutput("fund-price", foundation_price.toFixed(0) + " руб.");
    }
}

fund4.onchange = function() {
    if (fund4.checked && square > 0) {
        foundation_price = square * 3714;
        tOutput("fund-price", foundation_price.toFixed(0) + " руб.");
    }
}