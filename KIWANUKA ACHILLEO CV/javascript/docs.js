<!DOCTYPE html>
<html>
<style>
#myContainer {
  width: 400px;
  height: 400px;
  position: relative;
  background: blue;
}
#myAnimation {
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: black;
}
</style>
<body>

<p>
<button onclick="myMove()">Click Me</button> 
</p>

<div id ="myContainer">
<div id ="myAnimation"></div>
</div>

<script>
var id = null;
function myMove() {
  var elem = document.getElementById("c:\Users\BLUE SKY\Desktop\KIWANUKA ACHILLEO CV\IMG-20241127-WA0048.jpg");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
</script>

</body>
</html>
