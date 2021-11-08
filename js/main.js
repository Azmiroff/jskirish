var travelCountry= prompt("Qaysi davlatga borishni hohlaysiz?");

var travelSize=prompt( travelCountry+"ga" + " borish uchun qancha pulingiz bor?", 0 );

var flightTicketUSD=500;
var hotelCostUsd=250;
var museumEURO=120;

var USD = 9433.34;
var EURO = 10354.03;

var travelSize1=(( flightTicketUSD + hotelCostUsd ) * USD) + (museumEURO * EURO);
console.log(travelSize);

if (travelSize1<=travelSize){
    console.log("Tabriklimiz sayohatga ketolasiz!");
    alert("Tabriklimiz sayohatga ketolasiz!");
} else{
    console.log("Pul yig'ing bu pul bilan UZBdan chiqolmisiz") ;
    alert("Pul yig'ing bu pul bilan UZBdan chiqolmisiz" )
}

