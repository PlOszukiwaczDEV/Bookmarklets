if (document.getElementById("video-ads")[0].innerHTML !== ""){
    var banner = false;
    for (var i = 0; i< document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++){
        document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click(); banner = true;
    }
    if (banner == false){
        document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
        document.getElementsByClassName("ytp-ad-skip-button")[0].click();
    }
}