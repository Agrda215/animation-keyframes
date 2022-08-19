var more = 1000

document.getElementById("myWhek").onclick = function() {
  more -= 1
}

document.getElementById("bord").style.display = "none"

setInterval(() => {
  document.getElementById("number").innerText = more;
  if (more == 0) {
    document.getElementById("bord").style.display = "block"
  }
}, 40)