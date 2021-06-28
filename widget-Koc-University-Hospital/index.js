window.onload = function test(){
    var data = {
        companyLogo: "Koc Universitesi",
        logoImg: "img/kocuni.png",
        firstRow: {
            time: "17.15",
            timeImg: "img/group-34.png",
            date: "2.11.2020",
            dateImg: "img/group-35.png",
            city: "İstanbul, Sarıyer",
    
            weatherDayInfo: [{
                    day: "Pzt",
                    date: "2.11.2020",
                    weatherImg: "img/group-10.png",
                    degree: "20 °C"
                },
                {
                    day: "Sal",
                    date: "2.11.2020",
                    weatherImg: "img/group-25.png",
                    degree: "22 °C"
                },
    
                {
                    day: "Çar",
                    date: "2.11.2020",
                    weatherImg: "img/group-18.png",
                    degree: "19 °C"
                }
            ]
        },
        secondRow: {
            text_1: "Yılda 1 Göz Muayenesi",
            text_2: "Olmayı Unutmayın!",
            tablesText: "Yol Durumu",
    
            tablesInfo: [{
                    district: "Levent",
                    distance: "20 km",
                    estimatedTime: "(30 dk)"
    
                },
                {
                    district: "F.S.M Köp",
                    distance: "9 km",
                    estimatedTime: "(10 dk)"
                },
    
                {
                    district: "Kadıköy",
                    distance: "5 km",
                    estimatedTime: "(5 dk)"
                },
    
                {
                    district: "Beşiktaş",
                    distance: "15 km",
                    estimatedTime: "(20 dk)"
                }
            ]
        },
        thirdRow: {
            news: "Haberler",
            company: "Bloomberg",
            newsInfo: "m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.  tempor incididunt  ididunt ut labore et"
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
    
    imgDOM("logoImg", data.logoImg);
    
    imgDOM("timeImg", data.firstRow.timeImg);
    textDOM("time", data.firstRow.time);
    
    imgDOM("dateImg", data.firstRow.dateImg);
    textDOM("date", data.firstRow.date);
    
    textDOM("city", data.firstRow.city);
    
    data.firstRow.weatherDayInfo.map((item, index) => {
        var element = document.getElementById("day-" + (index + 1));
        element.innerText = item.day;
    })
    data.firstRow.weatherDayInfo.map((item, index) => {
        var element = document.getElementById("date-" + (index + 1));
        element.innerText = item.date;
    })
    data.firstRow.weatherDayInfo.map((item, index) => {
        var element = document.getElementById("weatherImg-" + (index + 1));
        element.src = item.weatherImg;
    })
    data.firstRow.weatherDayInfo.map((item, index) => {
        var element = document.getElementById("degree-" + (index + 1));
        element.innerText = item.degree;
    })
    
    textDOM("text-1", data.secondRow.text_1);
    textDOM("text-2", data.secondRow.text_2);
    textDOM("tablesText", data.secondRow.tablesText);
    
    data.secondRow.tablesInfo.map((item, index) => {
        var element = document.getElementById("district-" + (index + 1));
        element.innerText = item.district;
    })
    
    data.secondRow.tablesInfo.map((item, index) => {
        var element = document.getElementById("distance-" + (index + 1));
        element.innerText = item.distance;
    })
    
    data.secondRow.tablesInfo.map((item, index) => {
        var element = document.getElementById("estimatedTime-" + (index + 1));
        element.innerText = item.estimatedTime;
    })
    
    textDOM("news", data.thirdRow.news);
    textDOM("company", data.thirdRow.company);
    textDOM("newsInfo", data.thirdRow.newsInfo);
}
