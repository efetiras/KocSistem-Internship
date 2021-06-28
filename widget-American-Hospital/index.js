window.onload = function test() {
    var data = {
        row1: {
            companyLogoImg: "img/kocuni.png",
            textRow1: "Sadipscing elitr, sed diam nonumy eirmod tempor sda invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justodolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum"
        },
        row2: {
            screensInfo: [{
                    logoImg: "img/twitter-hospital-logo.png",
                    hospitalName: "Amerikan Hastanesi",
                    hospitalLink: "@AmerikanHastanesi",
                    hospitalImg: "img/americanhospital1.png",
                    text: "#Lionday sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, os et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
                    retweetCount: "120",
                    likeCount: "50",
                    date: "JAN 2020"

                },
                {
                    hospitalImg: "img/americanhospital1.png",
                    facebookImg: "img/facebook-img.png",
                    logoImg: "img/twitter-hospital-logo.png",
                    hospitalName: "Amerikan Hastanesi",
                    date: "January 14 at 1:00 AM",
                    text: "#Lionday sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, os et accusam et justo duo dolores et ea rebum. Stet clita kasd"
                },
                {
                    hospitalImg: "img/americanhospital1.png",
                    instagramImg: "img/instagram-img.png",
                    logoImg: "img/twitter-hospital-logo.png",
                    hospitalName: "Amerikan Hastanesi",
                    hospitalLink: "@Amerikan Hastanesi",
                    text: "#Lionday sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, os et accusam et justo duo dolores et ea rebum. Stet clita kasd"
                }
            ]


        }


    }

    function imgDOM(text, dataFill) {
        var element = document.getElementById(text);
        element.src = dataFill;
    }

    function textDOM(text, dataFill) {
        var element = document.getElementById(text);
        element.innerText = dataFill;
    }

    imgDOM("companyLogoImg", data.row1.companyLogoImg)
    textDOM("textRow1", data.row1.textRow1);
    textDOM("twitterLink", data.row2.screensInfo[0].hospitalLink);
    textDOM("retweetCount", data.row2.screensInfo[0].retweetCount);
    textDOM("likeCount", data.row2.screensInfo[0].likeCount);
    textDOM("twitter-date", data.row2.screensInfo[0].date);
    imgDOM("facebookImg", data.row2.screensInfo[1].facebookImg);
    imgDOM("instagramImg", data.row2.screensInfo[2].instagramImg);
    textDOM("facebook-date", data.row2.screensInfo[1].date);
    textDOM("instagramLink", data.row2.screensInfo[2].hospitalLink);

    //map for hospital name 
    data.row2.screensInfo.map((item, index) => {
        let element = document.getElementById("hospitalName-" + (index + 1));
        element.innerText = item.hospitalName;
    })
    //map for hospital image
    data.row2.screensInfo.map((item, index) => {
        let element = document.getElementById("hospitalImg-" + (index + 1));
        element.src = item.hospitalImg;
    })
    //map for text
    data.row2.screensInfo.map((item, index) => {
        let element = document.getElementById("text-" + (index + 1));
        element.innerText = item.text;
    })
    //map for logo image
    data.row2.screensInfo.map((item, index) => {
        let element = document.getElementById("logoImg-" + (index + 1));
        element.src = item.logoImg;
    })
}