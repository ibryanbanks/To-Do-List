

exports.getDate = function() {

  const date = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date();
  const currentDate = today.toLocaleDateString("en-US", options);

  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  // console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

  return currentDate;

}
