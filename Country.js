class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

 

    ChangeProperties(){
        document.getElementById('Color1').style.backgroundColor = this.colors[0]
        document.getElementById('Color2').style.backgroundColor = this.colors[1]
        document.getElementById('Color3').style.backgroundColor = (this.colors[2] != null) ? this.colors[2] : this.colors[1]
        document.getElementById('CountryName').innerHTML = this.name;
        document.getElementById('Language').innerHTML = this.lang;
        document.getElementById('HelloWorld').innerHTML = this.greeting;
        document.getElementById("Flag").src = this.flag;
   

        
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://www.worldometers.info/img/flags/us-flag.gif");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["green", "red", "white"], "https://www.worldometers.info/img/flags/mx-flag.gif");
let romania = new Country("Romania", "Romanian", "Salut Lume", ["blue", "red", "yellow"] ,"https://www.worldometers.info/img/flags/ro-flag.gif");
let vietnam = new Country("Vietnam", "Vietnamese", "Chao the gioi", ["red", "yellow"],"https://www.worldometers.info/img/flags/vm-flag.gif");
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai", ["white", "red"],"https://www.worldometers.info/img/flags/ja-flag.gif");



 

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Romania") {
        country = romania;
    }
    else if (input === "Vietnam") {
        country = vietnam;
    }
    else if (input === "Japan") {
        country = japan;
    }
    country.ChangeProperties();
}








