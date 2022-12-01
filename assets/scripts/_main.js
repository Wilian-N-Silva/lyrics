// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'UiSB2Fbw9gs',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setInterval(() => {
      const tempoAtual = player.getCurrentTime()
      const legenda = captions.filter(caption => caption.start <= tempoAtual && caption.finish >= tempoAtual)

      document.querySelector(".video__caption").innerHTML = legenda.length > 0 ? legenda[0].verse : ''
    }, 100);

  }
}
function stopVideo() {
  player.stopVideo();
}

const captionLyrics = document.querySelector(".caption .lyrics")
const captionTimestamp = document.querySelector(".caption .timestamp")

const infoLyrics = document.querySelector("#lyrics-input")
const infoPreviewJson = document.querySelector(".preview-json")

let whenPressed = 0
let whenUnpressed = 0

let captions = [

]


let highlighted;
let highlightedTimestamp;

function highlightLine(event) {
  const cleanHighlighted = document.querySelectorAll(".highlight")
  cleanHighlighted.forEach(highlitedEl => {
    highlitedEl.classList.toggle("highlight")
  })

  highlighted = event.target
  highlighted.classList.toggle("highlight")
}


function jsonPreview(event) {
  const value = event.target.value

  let lyrics = value.split("\n")

  // lyrics.forEach((paragraph, index) => {
  //   lyrics[index] = paragraph.split("\n")
  // });

  infoPreviewJson.innerHTML = JSON.stringify(lyrics, undefined, 2)

  // lyrics.forEach((paragraph, pIndex) => {
  //   paragraph.forEach((line, lIndex) => {
  //     const lineEl = document.createElement('span');
  //     lineEl.classList.add("lyric-line")
  //     lineEl.setAttribute("data-paragraph", pIndex)
  //     lineEl.setAttribute("data-line", lIndex)
  //     lineEl.innerText = line

  //     lineEl.addEventListener("click", highlightLine);

  //     captionLyrics.appendChild(lineEl)
  //   })
  //   captionLyrics.appendChild(document.createElement('br'))
  // })

  lyrics.forEach((line, lIndex) => {
    const lineEl = document.createElement('span');
    lineEl.classList.add("lyric-line")
    // lineEl.setAttribute("data-paragraph", pIndex)
    lineEl.setAttribute("data-line", lIndex)
    lineEl.innerText = line

    lineEl.addEventListener("click", highlightLine);

    captionLyrics.appendChild(lineEl)
  })

}

infoLyrics.addEventListener("input", jsonPreview)


document.addEventListener("keypress", (event) => {
  if (event.code == "Space") {
    event.preventDefault()

    if (whenPressed === 0) {
      whenPressed = player.getCurrentTime()
      const timestampItem = document.createElement("li")
      timestampItem.classList.add("timestamp-item")

      const timestampItemInfo = document.createElement("div")
      timestampItemInfo.classList.add("timestamp-item-info")

      const timestampItemInfoTime = document.createElement("div")
      timestampItemInfoTime.classList.add("timestamp-item-info--time")

      const timestampItemInfoTimeStart = document.createElement("input")
      timestampItemInfoTimeStart.classList.add("timestamp-item-info--time--start")
      timestampItemInfoTimeStart.value = new Date(whenPressed * 1000).toISOString().slice(14, 23)
      // timestampItemInfoTimeStart.value = whenPressed
      timestampItemInfoTime.appendChild(timestampItemInfoTimeStart)

      const timestampItemInfoTimeFinish = document.createElement("input")
      timestampItemInfoTimeFinish.classList.add("timestamp-item-info--time--finish")
      timestampItemInfoTimeFinish.value = new Date(whenPressed * 1000).toISOString().slice(14, 23)
      // timestampItemInfoTimeFinish.value = whenUnpressed
      timestampItemInfoTime.appendChild(timestampItemInfoTimeFinish)

      timestampItemInfo.append(timestampItemInfoTime)

      const timeStampItemInfoText = document.createElement("span")
      timeStampItemInfoText.innerText = highlighted.innerText
      timestampItemInfo.appendChild(timeStampItemInfoText)

      const deletebutton = document.createElement("button")

      timestampItem.appendChild(timestampItemInfo)
      timestampItem.appendChild(deletebutton)

      captionTimestamp.appendChild(timestampItem)

      highlightedTimestamp = timestampItem
    } else {
      whenUnpressed = player.getCurrentTime()
      highlightedTimestamp.querySelector(".timestamp-item-info--time--finish").value = new Date(whenUnpressed * 1000).toISOString().slice(14, 23)
      // highlightedTimestamp.querySelector(".timestamp-item-info--time--finish").value = whenUnpressed
    }
  }
})

document.addEventListener("keyup", (event) => {
  if (event.code == "Space") {
    event.preventDefault()
    console.log(highlighted.innerText, new Date(whenPressed * 1000).toISOString(), new Date(whenUnpressed * 1000).toISOString());
    console.log(highlighted.innerText, new Date(whenPressed * 1000).toISOString().slice(14, 23), new Date(whenUnpressed * 1000).toISOString().slice(14, 23));

    const caption = {
      'start': whenPressed,
      'finish': whenUnpressed,
      'verse': highlighted.innerText
    }

    captions.push(caption)


    whenPressed = 0
    whenUnpressed = 0
  }

})

// timer()