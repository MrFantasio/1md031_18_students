/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */

let showVue = true;

var socket = io();


var vnn = new Vue({
    el: "#burgerWrapper",
    data: {
        burgers: burgers
    }
    }
);



/*var vmm = new Vue({
    el: "#orderButton",
    data: {
        orderings: {},
        activeOrder: false,
        dotCoord: {}

    },

    created: function() {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods:{
        orderInformation: function() {
            this.orderText = this.burgers + this.fullName + this.email;
        },

        getBoxValues: function() {
                let selectBurger = [];
                let burgerRadio = document.getElementsByName("burgerSelect");
                for (let i in burgerRadio){
                    if (burgerRadio[i].checked){
                        selectBurger.push(burgerRadio[i].value);
                    }
                    if (selectBurger === undefined){
                        selectBurger = "no Burger :("
                    }
                }
                let customerName = document.getElementById("firstname").value + document.getElementById("lastname").value;
                let eMail = document.getElementById("email").value;
                let payMeth = document.getElementById("paymentMethod").value;
                let selectGender;
                let genderRadio = document.getElementsByName("GenderSelect");
                for (let i in genderRadio){
                    if (genderRadio[i].checked){
                        selectGender = genderRadio[i].value;
                        break;
                    }
                }
                if (selectGender === undefined){
                    selectGender = "no Gender :O"
                }

                this.orderings = {fullName: customerName,
                    email: eMail,
                    payMethod: payMeth,
                    gender: selectGender,
                    burgers: selectBurger
                };
                this.activeOrder = true;

                console.log(this.orderings);
                console.log(this.activeOrder);

                return;
        }
    }

});
*/




