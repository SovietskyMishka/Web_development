"use strict"

const COUNT_OF_BLOCKS = 3;
const COUNT_OF_IMAGES_IN_FILE = 6;
const FILES_NAME = "gallery/vid";
const FILES_FORMAT = ".jpg";
const TAG_IMG_NAME = "pict";
var loaded_img = new Image();
var num_right = COUNT_OF_BLOCKS + 1;
var num_left = COUNT_OF_IMAGES_IN_FILE;
var d = document;

window.onload = function() {
    loadPictures();
    loadBigPicture();
}

function loadPictures() {
    for (let i = 1; i <= COUNT_OF_BLOCKS; i++) {
        loaded_img.src = (FILES_NAME + i + FILES_FORMAT);
        d.images[TAG_IMG_NAME+i].src = loaded_img.src;
    }
}

function loadBigPicture() {
    let d = document;
    d.big_pict.src = d.pict2.src;
}

swipe_left.onclick = function() {
    for (let i = COUNT_OF_BLOCKS; i > 1; i--) {
        d.images[TAG_IMG_NAME + i].src = d.images[TAG_IMG_NAME + (i - 1)].src;
    }
    if (num_left < 1) {
        num_left = COUNT_OF_IMAGES_IN_FILE;
    }
    if ((num_left + COUNT_OF_BLOCKS) <= COUNT_OF_IMAGES_IN_FILE) {
        num_right = num_left + COUNT_OF_BLOCKS;
    }
    else {
        num_right = num_left - COUNT_OF_BLOCKS;
    }
    loaded_img.src = (FILES_NAME + num_left + FILES_FORMAT);
    d.images[TAG_IMG_NAME + 1].src = loaded_img.src;
    num_left--;
    loadBigPicture();
}

swipe_right.onclick = function() {
    for (let i = 1; i < COUNT_OF_BLOCKS; i++) {
        d.images[TAG_IMG_NAME + i].src = d.images[TAG_IMG_NAME + (i + 1)].src;
    }
    if (num_right > COUNT_OF_IMAGES_IN_FILE) {
        num_right = 1;
    }
    if ((num_right - COUNT_OF_BLOCKS) > 0) {
        num_left = num_right - COUNT_OF_BLOCKS;
    }
    else {
        num_left = num_right + COUNT_OF_BLOCKS;
    }
    loaded_img.src = (FILES_NAME + num_right + FILES_FORMAT);
    d.images[TAG_IMG_NAME + COUNT_OF_BLOCKS].src = loaded_img.src;
    num_right++;
    loadBigPicture();
}