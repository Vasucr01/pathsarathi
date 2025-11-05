// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students plan, develop and complete projects with clarity and real-world application.",
    whatsapp: "https://wa.me/919726274598"
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Guides individuals in finding the right direction by understanding strengths, opportunities and goals.",
    whatsapp: "https://wa.me/919726274598"
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports students in technical growth, interview preparation, and real IT skill building.",
    whatsapp: "https://wa.me/919726274598"
  }
};

function openModal(key) {
  const data = mentorData[key];
  document.getElementById('mentor-img').src = data.img;
  document.getElementById('mentor-name').innerText = data.name;
  document.getElementById('mentor-role').innerText = data.role;
  document.getElementById('mentor-bio').innerText = data.bio;
  document.getElementById('mentor-whatsapp').href = data.whatsapp;
  document.getElementById('mentorModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('mentorModal').style.display = "none";
}

window.onclick = function(e) {
  if (e.target == document.getElementById('mentorModal')) closeModal();
}
