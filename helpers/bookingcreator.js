var dateFormat = require('dateformat');

//import {counter, getCounter} from '../models/booking'

var counter = require("../models/booking");
const json = require("./bookings.json");

// var randomiseDate = function(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// };
//
// var randomiseNumber = function(from, to){
//     return Math.floor(Math.random() * (to - from + 1) + from);
// };
//
// var randomiseFirstName = function(){
//   var name = ["Mark","Mary","Sally","Jim","Eric","Susan"]
//
//   return name[randomiseNumber(0,name.length - 1)];
// };
//
// var randomiseLastName = function(){
//   var surname = ["Jones","Wilson","Jackson","Brown","Smith","Ericsson"]
//
//   return surname[randomiseNumber(0,surname.length - 1)];
// };
//
// var randomiseBool = function(){
//   var bool = [true,false]
//
//   return bool[randomiseNumber(0,bool.length - 1)];
// };
//
// if(randomiseBool()){
//   booking.additionalneeds = "Breakfast";
// }

exports.createBooking = function(){
  // var checkInDate = randomiseDate(new Date(2015, 1, 1), new Date())
  // var latestDate = new Date()
  // latestDate.setDate(latestDate.getDate() + 3)

  // static data seed modification
  const json = require('./bookings.json');
  let booking = json[counter.getCounter()];
  // ******************************

  return booking;
}