let showJS = false;
if (showJS){
    function MenuItem(n,k,g,l,p,s,pic){
        this.name = n;
        this.kCal = k;
        this.gluten = g;
        this.lactose = l;
        this.price = p;
        this.stock = s;
        this.image = pic;
        this.presentation = function() {
           return this.name + ' contains ' + this.kCal + ' kCal';
        };
    }
    var Burg = [];

    Burg.push(new MenuItem('Greasy Burger','865', true, false, 89, 13, "img/greasyburger.jpg"));
    Burg.push(new MenuItem('Vegan Burger','543', true, false, 74, 10, "img/veganburger.jpeg"));
    Burg.push(new MenuItem('Boring Burger','265', false, false, 65, 8, "img/boringburger.jpg"));
    Burg.push(new MenuItem('Disgusting Burger','545', true, true, 45, 23, "img/disgustingburger.jpg"));
    Burg.push(new MenuItem('Cartoon Burger', '0', false, false, 65, 7, "img/cartoonburger.jpg"));

    var textAppend = document.getElementById("menu");

    let BurgerSection = document.getElementsByClassName("BWrapper");

    let BurgerWrapper = document.createElement("section");
    BurgerWrapper.setAttribute("id","BurgerGrid");
    BurgerSection[0].appendChild(BurgerWrapper);

    let BurgerHead = document.createElement("div");
    BurgerHead.setAttribute("class", "BurgerHead");
    BurgerWrapper.appendChild(BurgerHead);

    let Headline = document.createElement("h1");
    Headline.innerHTML = "Select Burger";
    BurgerHead.appendChild(Headline);

    let i = 0;
    for (let item in Burg) {
        let box = document.createElement("div");
        box.setAttribute("class","Burger" + String.fromCharCode((49 + i)));
        let BurgerPic = document.createElement("img");
        BurgerPic.setAttribute("src", "item.image", "title", "item.image");
        i++;
        let Header = document.createElement("div");
        Header.setAttribute("src", "item.name", "title", "item.name");
        BurgerWrapper.appendChild(box);
        BurgerWrapper.appendChild(BurgerPic);
        BurgerWrapper.appendChild(Header);
    }
}

function getBoxValues() {
    let selectBurger;
    let burgerRadio = document.getElementsByName("burgerSelect");
    for (let i in burgerRadio){
        if (burgerSelect[i].checked){
            selectBurger = burgerSelect[i].value;
            break;
        }
    if (selectBurger === undefined){
        selectBurger = "no Burger :("
    }
    }
    let customerName = document.getElementById("firstname").value + document.getElementById("lastname").value;
    let eMail = document.getElementById("email").value;
    let payMeth = document.getElementById("paymentMethod".value);
    let selectGender;
    let genderRadio = document.getElementsByName("GenderSelect");
    for (let i in genderRadio){
        if (GenderSelect[i].checked){
            selectGender = GenderSelect[i].value;
            break;
        }
    }
    if (selectGender === undefined){
        selectGender = "no Gender :O"
    }

    objektet = {name: customerName,
        email: eMail,
        payMethod: payMeth,
        gender: selectGender,
        burgers: selectBurger
    };
    console.log(objektet);
    return objektet;
}



