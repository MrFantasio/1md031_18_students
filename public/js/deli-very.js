/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orderButton',
  data: {
    orders: {},
    orderings: {},
    activeOrder: false,
    dotCoord: {}

    },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getBoxValues: function(event) {
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
      let Adress = document.getElementById("adress").value;
      let payMeth = document.getElementById("paymentMethod").value;
      let selectGender;
      let genderRadio = document.getElementsByName("gender");
      for (let i = 0; i< genderRadio.length; i++){
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
        burgers: selectBurger,
        adress: Adress
      };

      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                     y: event.currentTarget.getBoundingClientRect().top};

      socket.emit("addOrder", { orderId: this.orderings.fullName,
                                details: this.dotCoord,
                                orderItems: this.orderings.burgers,
                                orderGender: this.orderings.gender
      });


      this.activeOrder = true;

      return;
    },

    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      console.log("hejhej");
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.orderings.fullName,
                                details: this.dotCoord,
                                orderItems: this.orderings.burgers
                              });
    },

    displayOrder: function (event) {
      console.log("i displayorder");
       let offset = {x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top};
       this.orders = { orderId: this.getNext(),
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y
      };
      this.dotCoord = { x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y };
      console.log(this.dotCoord);
    }
  }
});
