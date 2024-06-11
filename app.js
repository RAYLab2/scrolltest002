var COORDS = [
  [
    "1205,226,1217,267,1292,253,1393,324,1366,348,1368,379,1420,346,1424,301,1410,252,1376,209,1320,189,1270,187,1253,213",
  ],
  [
    "1020,529,1004,588,1015,610,1037,612,1042,588,1064,567,1096,572,1204,523,1228,513,1252,486,1268,459,1266,437,1239,432",
  ],
  ["802,302,805,372,913,340,945,323,910,256"],
  [
    "767,340,764,278,872,199,929,188,1007,167,1004,191,953,210,956,232,807,294,797,323",
  ],
  ["1066,688,1304,575,1341,491,1331,464,1314,426,1171,464,1107,529,1074,572"],
  [
    "1217,313,1231,321,1260,354,1277,362,1301,375,1325,370,1344,378,1357,365,1349,340,1285,286",
  ],
  [
    "1028,699,1066,689,1066,591,1074,575,1061,572,1042,586,1037,608,886,683,875,697,910,697,940,705,993,680,1012,683",
  ],
  ["772,251,611,335,678,311,705,319,724,346,767,335,753,289"],
  ["624,618,651,651,718,626,732,618,724,597,656,618,637,608"],
  [
    "686,386,540,454,508,500,581,618,624,621,635,608,788,540,791,513,756,508,681,424",
  ],
  [
    "949,239,813,316,825,338,834,348,820,363,852,388,952,351,946,338,844,368,846,314,912,273,952,302,964,341,990,339,998,348,939,400,917,446,934,451,915,482,954,510,1071,466,1064,449,961,487,962,414,1029,346,1076,324,1071,436,1091,446,1100,312,1179,292,1190,334,1156,409,1107,433,1112,444,1161,427,1190,409,1220,344,1207,292,1229,299,1290,290,1278,265,1205,257,1149,216,1176,194,1122,184,1105,194,1149,245,1036,291",
  ],
  ["946,221,1026,289,1153,248,1070,177"],
  [
    "709,416,690,435,707,462,761,509,792,513,787,537,688,586,707,598,727,625,800,637,851,577,904,567,910,598,1012,565,1017,525,1151,469,1200,443,1283,426,1315,408,1278,370,1215,326,1183,415,946,501,917,482,915,406,951,394,966,406,954,420,953,486,1058,448,1075,320,1037,332,978,389,1076,365,1097,357,1104,306,1181,289,1192,330,1149,411,1088,435,1110,360",
  ],
  [
    "812,314,705,389,715,431,754,482,817,511,871,463,905,416,892,426,821,497,788,494,749,450,722,404,724,384",
  ],
];

let isPlay = false;

var IsMediaEnd = false;

function slickHover(id) {
  console.log(IsMediaEnd);
  if (IsMediaEnd) showImage(id, false);
}

function slickOut(id) {
  hideImage(id);
}

document.addEventListener("DOMContentLoaded", function () {
  COORDUpdate();
  setInterval(COORDUpdate, 500);
  document.getElementById("click-area").style.pointerEvents = "none";
});

window.addEventListener("resize", function () {
  COORDUpdate();
});

function mediaEnd() {
  document.getElementById("click-area").style.pointerEvents = "auto";
  IsMediaEnd = true;
}

function mediaStart() {
  isPlay = true;
}

function setImageOpacity(id, opacity) {
  const image = document.getElementById(id);
  image.style.opacity = opacity;
}
function getElement(Elements, text) {
  for (var i = 0; i < Elements.length; i++) {
    if (Elements[i].innerHTML == text) {
      return Elements[i];
    }
  }

  return null;
}

function showImage(id, islickmove) {
  var slickstring = "";
  var clonelem = null;
  console.log(id);
  switch (id) {
    case "hoverImage1":
      slickstring = "slick-slide00";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "BumperRaer"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 0, true);
      break;
    case "hoverImage2":
      slickstring = "slick-slide01";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftDoorInner"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 1, true);
      break;
    case "hoverImage3":
      slickstring = "slick-slide02";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightDoorInner"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 2, true);
      break;
    case "hoverImage4":
      slickstring = "slick-slide03";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftDoor"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 3, true);
      break;
    case "hoverImage5":
      slickstring = "slick-slide04";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightDoor"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 4, true);
      break;
    case "hoverImage6":
      slickstring = "slick-slide05";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "ExhaustSystem"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 5, true);
      break;
    case "hoverImage7":
      slickstring = "slick-slide06";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftFrontFender"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 6, true);
      break;
    case "hoverImage8":
      slickstring = "slick-slide07";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightFrontFender"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 7, true);
      break;
    case "hoverImage9":
      slickstring = "slick-slide08";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "FrontTool"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 8, true);
      break;
    case "hoverImage10":
      slickstring = "slick-slide09";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "Hood"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 9, true);
      break;
    case "hoverImage11":
      slickstring = "slick-slide010";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "SHELL"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 10, true);
      break;
    case "hoverImage12":
      slickstring = "slick-slide011";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "SunRoof"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 11, true);
      break;
    case "hoverImage13":
      slickstring = "slick-slide012";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "Underbody"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 12, true);
      break;
    case "hoverImage14":
      slickstring = "slick-slide013";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "WindSheildTrim"
      );
      if (islickmove) $(".slick").slick("slickGoTo", 13, true);
      break;
  }

  if (slickstring != "") {
    console.log("show");
    var elem = document.getElementById(slickstring);
    elem.classList.add("hovered");

    if (clonelem != null) clonelem.classList.add("hovered");
  }

  setImageOpacity(id, 1);
}

function hideImage(id) {
  var slickstring = "";
  var cloneslickstringIndex = -1;

  switch (id) {
    case "hoverImage1":
      slickstring = "slick-slide00";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "BumperRaer"
      );
      break;
    case "hoverImage2":
      slickstring = "slick-slide01";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftDoorInner"
      );
      break;
    case "hoverImage3":
      slickstring = "slick-slide02";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightDoorInner"
      );
      break;
    case "hoverImage4":
      slickstring = "slick-slide03";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftDoor"
      );
      break;
    case "hoverImage5":
      slickstring = "slick-slide04";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightDoor"
      );
      break;
    case "hoverImage6":
      slickstring = "slick-slide05";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "ExhaustSystem"
      );
      break;
    case "hoverImage7":
      slickstring = "slick-slide06";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "LeftFrontFender"
      );
      break;
    case "hoverImage8":
      slickstring = "slick-slide07";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "RightFrontFender"
      );
      break;
    case "hoverImage9":
      slickstring = "slick-slide08";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "FrontTool"
      );
      break;
    case "hoverImage10":
      slickstring = "slick-slide09";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "Hood"
      );
      break;
    case "hoverImage11":
      slickstring = "slick-slide010";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "SHELL"
      );
      break;
    case "hoverImage12":
      slickstring = "slick-slide011";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "SunRoof"
      );
      break;
    case "hoverImage13":
      slickstring = "slick-slide012";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "Underbody"
      );
      break;
    case "hoverImage14":
      slickstring = "slick-slide013";
      clonelem = getElement(
        document.getElementsByClassName("test slick-slide slick-cloned"),
        "WindSheildTrim"
      );
      break;
  }

  if (slickstring != "") {
    var elem = document.getElementById(slickstring);
    elem.classList.remove("hovered");

    if (clonelem != null) clonelem.classList.remove("hovered");
  }

  setImageOpacity(id, 0);
}
function allReleaseHover() {
  for (var i = 1; i <= 14; i++) {
    var text = "hoverImage" + i;
    hideImage(text);
  }
}

function setElementStyle(elementId, width, height, top) {
  const element = document.getElementById(elementId);
  element.style.width = width + "px";
  element.style.height = height + "px";
  element.style.top = top + "px";
}

function COORDUpdate() {
  if (isPlay == false) document.getElementById("media").play();
  var clientW = document.getElementById("media").clientWidth;
  var clientH = document.getElementById("media").clientHeight;
  var windowPageYOffset = window.pageYOffset;

  setElementStyle("click-area", clientW, clientH, windowPageYOffset);

  for (let i = 1; i <= 14; i++) {
    setElementStyle("hoverImage" + i, clientW, clientH, windowPageYOffset);
  }

  var widthRate = clientW / 1920;
  var heightRate = clientH / 883;

  for (var i = 1; i <= COORDS.length; i++) {
    var coords = COORDS[i - 1][0].split(",");
    var updatedCoords = coords.map((coord, index) => {
      return parseInt(
        Number(coord) * (index % 2 === 0 ? widthRate : heightRate)
      );
    });

    document.getElementsByClassName("process" + i)[0].coords =
      updatedCoords.join(",");
  }
}
