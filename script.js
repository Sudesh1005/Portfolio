fetch('head.html')
.then(response => response.text())
.then(data => {
  document.getElementById('head').innerHTML = data;
});

fetch('nav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});

fetch('aside.html')
.then(response => response.text())
.then(data => {
  document.getElementById('service-aside').innerHTML = data;
});


let links = document.querySelectorAll(".aside-li a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.parentElement.classList.add("active");
    link.parentElement.style.backgroundColor = "#0dcaf0";
    link.classList.add("text-white");
  }
});


function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phoneNumber = "919715157034"; // Replace with your number

  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, '_blank'); // This opens WhatsApp with the message
}


