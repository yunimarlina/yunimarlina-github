function result(){

  function BTS(sw) {
    var pic;
    if (sw === true) {
      console.log("Right this is BTS")
    } else {
      pic = "pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }

}