// $(function(){
//     $('.page').css({'height':($(document).height())+'px'});
//     $(window).resize(function(){
//         $('.page').css({'height':($(document).height())+'px'});
//     });
// });

AOS.init();


// Counter
var options = {
  useEasing: true,
  useGrouping: true,
  separator: ' ',
  decimal: '.',
};
var count1 = new CountUp('count-500', 0, 500, 0, 1.5, options);
if (!count1.error) {
  count1.start();
}
var count2 = new CountUp('count-1500', 0, 1500, 0, 1.5, options);
if (!count2.error) {
  count2.start();
}
var count3 = new CountUp('count-90000', 0, 90000, 0, 1.5, options);
if (!count3.error) {
  count3.start();
}
var count4 = new CountUp('count-3m', 0, 3000000, 0, 1.5, options);
if (!count4.error) {
  count4.start();
}
