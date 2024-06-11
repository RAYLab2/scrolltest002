// function animateOnScroll(canvasID, videoInfo) {
//   const canvas = document.getElementById(canvasID);
//   const ctx = canvas.getContext("2d");

//   canvas.height = screen.height;
//   canvas.width = screen.width;

//   loadImage();

//   function loadImage() {
//     for (let i = 1; i < videoInfo.totalFrames; i++) {
//       const img = new Image();
//       img.src = videoInfo.imagePrefix + i.toString().padStart(3, "0") + videoInfo.imageSuffix;
//       videoInfo.images.push(img);
//     }
//   }

//   gsap.to(videoInfo, {
//     currentFrame: videoInfo.totalFrames,
//     snap: "currentFrame",
//     scrollTrigger: {
//       trigger: canvas,
//       start: "top",
//       end: `bottom+=${videoInfo.totalFrames * videoInfo.totalTime}`,
//       scrub: true,
//       pin: true,
//     },
//     onUpdate: render,
//   });

//   videoInfo.images[0].onload = render;

//   function render() {
//     if (videoInfo.images[videoInfo.currentFrame]) {
//       // 캔버스를 클리어하여 이전 이미지를 지웁니다.
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // 현재 프레임을 그립니다.
//       ctx.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
//     }
//   }
// }

const $avataImgSqc = new Array();
const controller = new ScrollMagic.Controller();

// 이미지 경로 배열 생성
for (let i = 1; i < 47; i++) {
  if (i < 10) $avataImgSqc.push(`layer/Layer00${i}.png`);
  else $avataImgSqc.push(`layer/Layer0${i}.png`);
}

// 이미지 프리로드 함수
function preloading(preImgs) {
  let imgTotal = preImgs.length;
  for (let i = 0; i < imgTotal; i++) {
    let img = new Image();
    img.src = preImgs[i];
  }
}

// 프리로드할 이미지 시퀀스
const $img = { crntImg: 0 },
  $imgTag = document.querySelector(".Layer");

// TweenMax 설정
let $tween_avata = TweenMax.to($img, 1, {
  crntImg: $avataImgSqc.length - 1,
  roundProps: "crntImg",
  immediateRender: true,
  onUpdate: function () {
    $imgTag.setAttribute("src", $avataImgSqc[$img.crntImg]);
  },
});

// ScrollMagic Scene 설정
var smscene = new ScrollMagic.Scene({
  duration: 2400,
  triggerElement: "#trigger",
  triggerHook: 0,
})
  .setTween($tween_avata)
  .setPin(".pinned")
  .addTo(controller);

// 스크롤 엔드 이벤트 핸들러에서 이미지 프리로드 호출 및 이미지 표시
smscene.on("end", () => {
  console.log("scroll end");
  preloading($avataImgSqc);
  showHoverImages();
});

// hoverImage 요소를 표시하는 함수
function showHoverImages() {
  const hoverImages = document.querySelectorAll(".test1");
  hoverImages.forEach((img) => {
    img.style.display = "block";
  });
}

smscene.on("progress", function (event) {
  console.log($imgTag.currentSrc);
  var text = $imgTag.currentSrc.split("/");
  if (text[text.length - 1] == "Layer046.png") {
    document.getElementById("click-area").style.pointerEvents = "auto";
    COORDUpdate();
    // console.log("auto");
  } else {
    document.getElementById("click-area").style.pointerEvents = "none";
    // console.log("none");
  }
});


