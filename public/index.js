let btn = document.getElementById("shorten");

btn.addEventListener('click',short);

async function short()
{
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");
    let shortURL2 = document.getElementById("shorturl2");
    console.log(longURL);
   const result= await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);

    const data = await result.json();
    console.log(data);

    shortURL.value = data.result.short_link2;
    console.log(data.result.short_link2);

    shortURL2.value = data.result.short_link;
    console.log(data.result.short_link);
}

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const issue = document.getElementById('issue').value;

  // Construct the email body
  const subject = 'New Issue Submission';
  const body = `
    Name: ${firstName} ${middleName} ${lastName}
    Email: ${email}
    Issue: ${issue}
  `;

  // Send email
  const mailToLink = `mailto:dedipyagoswami001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailToLink;
});

document.getElementById("facebook-icon").addEventListener("click", function() {
  document.getElementById("facebook-popup").style.display = "flex";
});

document.querySelector(".close-icon").addEventListener("click", function() {
  document.getElementById("facebook-popup").style.display = "none";
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
