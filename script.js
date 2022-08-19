/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var i = 0
var c = ""

console.log("%cHello, world!","font-size:30px;font-family:Droid Sans;");

console.log(
  `%cSOURCES
%c<link %crel=%c"stylesheet" %chref=%c"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"%c />
%cFONT AWESOME 4.7.0!`,
  "font-size:23px;",
  "font-size:18px;color:orange;",
  "font-size:18px;color:yellow;",
  "font-size:18px;color:darkgreen;",
  "font-size:18px;color:yellow;",
  "font-size:18px;color:darkgreen;",
  "font-size:18px;color:orange;",
  "font-size:20px;text-shadow:2px 2px 4px yellow;color:yellow;",
)

while (i < 4444) {
  c += String(new Date().getFullYear())
  i += 1
}

console.log(c)
console.warn(c)
console.error(c)
console.log(c.length)