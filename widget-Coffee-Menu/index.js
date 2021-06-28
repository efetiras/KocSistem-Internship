var data = {
    companyLogo: "LOGO",
    topLine : "img/topLine.png",
    leftLine: "img/leftLine.png",
    rightLine: "img/rightLine.png",
    bottomLine: "img/bottomLine.png",
    transitionLine: "img/transitionLine.png",
            options: [{
                    optionName: "ESPRESSO",
                    price: "14",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                    img: "img/espresso.png"

                },
                {
                    optionName: "XESPRESSOX",
                    price: "14",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                    img: "img/espresso-1.png"
                },
                {
                    optionName: "BLACK",
                    price: "10",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo",
                    img: "img/black.png"
                },
                {
                    optionName: "LATTE",
                    price: "15",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo",
                    img: "img/latte.png"
                },
                {
                    optionName: "LATTE",
                    price: "10",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo",
                    img: "img/latte-1.png"
                },
                {
                    optionName: "COLD BREW",
                    price: "20",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolor.",
                    img: "img/coldBrew.png"
                }
            ],

            takeOptions: [{
                    takeOptionName: "TAKE AWAY",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
                    img: "img/coffeeL.png",
                    price: "20"

                },
                {
                    takeOptionName: "TAKE AWAY",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
                    img: "img/coffeeM.png",
                    price: "18"
                },
                {
                    takeOptionName: "TAKE AWAY",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
                    img: "img/coffeeS.png",
                    price: "16"
                }
            ]
        

    
}
function idDOM(text,dataFill){
    var element = document.getElementById(text);
    element.src = dataFill;
}
//lines
idDOM("topLine",data.topLine);
idDOM("leftLine",data.leftLine);
idDOM("rightLine",data.rightLine);
idDOM("bottomLine",data.bottomLine);
idDOM("transitionLine",data.transitionLine)

//logo
var element = document.getElementById("logo");
element.innerText = data.companyLogo;

//map for header
data.options.map((item,index)=>{
    var element = document.getElementById("header-"+(index+1));
    element.innerText = item.optionName;
} )
//map for description
data.options.map((item,index)=>{
    var element = document.getElementById("text-"+(index+1));
    element.innerText = item.description;
} )
//map for img

data.options.map((item,index)=>{
    var element = document.getElementById("img-"+(index+1));
    element.src = item.img;
} )
//map for price row-1
data.options.map((item,index)=>{
    var element = document.getElementById("price-"+(index+1));
    element.innerText = item.price;
} )
//map for option name
data.takeOptions.map((item,index)=>{
    var element = document.getElementById("optionName-"+(index+1));
    element.innerText = item.takeOptionName;
} )
//map for description row-2
data.takeOptions.map((item,index)=>{
    var element = document.getElementById("description-"+(index+1));
    element.innerText = item.description;
} )
//map for img row-2

data.takeOptions.map((item,index)=>{
    var element = document.getElementById("image-"+(index+1));
    element.src = item.img;
} )
//map for price row-2
data.takeOptions.map((item,index)=>{
    var element = document.getElementById("price-row2-"+(index+1));
    element.innerText = item.price;
} )



