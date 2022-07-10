const APIKey = "AIzaSyB_8I7DWJBvJtor3h-4CPm0W2U48mdaCm0";
const ChannelId = "UCBX2_DgBEj_1OFTHZyYgGiw";
const subscriberCount = document.getElementById("subscriberCount");
const channeltittle = document.getElementById("channeltittle");

let getdata = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ChannelId}&key=${APIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((currentSub) => {
      var hidsub = currentSub["items"][0].statistics.hiddenSubscriberCount;
      if (hidsub === true) {
        subscriberCount.innerHTML = " ";
      } else {
        subscriberCount.innerHTML =
          currentSub["items"][0].statistics.subscriberCount + " subscribers";
      }
    });

  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=20`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      channeltittle.innerHTML = data["items"][0].snippet.channelTitle;
      var link = document.getElementById("link");
      link.addEventListener("click", myFunction);

      function myFunction() {
        var min = 0;
        var max = data["items"].length;
        var video_id =
          data["items"][Math.floor(Math.random() * (max - min)) + min].id
            .videoId;
        if (video_id !== undefined) {
          window.open("https://youtu.be/" + video_id);
        } else {
          window.open("https://youtu.be/mWhI46ll0BQ");
        }
      }
    });
};
getdata();

const instgram = "https://www.instagram.com/webcreator.in/";
const facebook = "https://www.facebook.com/webcreator.in/";
const github = "https://github.com/webcreator12";
const codepen = "https://codepen.io/webcreator12";
const patreon = "https://www.patreon.com/webcreator_in";

function secondfunction(a) {
  window.open(a);
}
