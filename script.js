const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Guides students in building strong real-world projects with clarity and confidence."
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Helps individuals find the right direction by understanding strengths, opportunities, and goals."
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports technical growth, interview preparation, and real IT skill building."
  },
  shiv: {
    img: "images/SHIV.jpeg",
    name: "Shiv Hansaliya",
    role: "Travel Mentor",
    bio: "Helps plan meaningful, budget-friendly, and fulfilling travel experiences."
  },
  hasti: {
    img: "images/hasti.jpeg",
    name: "Hasti Hirpara",
    role: "Drawing & Painting Artist",
    bio: "A passionate visual artist guiding creative expression through drawing and painting."
  }
};

function openModal(key) {
  const m = mentorData[key];
  document.getElementById("mentor-img").src = m.img;
  document.getElementById("mentor-name").innerText = m.name;
  document.getElementById("mentor-role").innerText = m.role;
  document.getElementById("mentor-bio").innerText = m.bio;
  document.getElementById("mentorModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("mentorModal").style.display = "none";
}

window.onclick = e => {
  if (e.target === document.getElementById("mentorModal")) closeModal();
};

/* Fade-in CTA */
const cta = document.getElementById("mentorCTA");
if (cta) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.3 });
  observer.observe(cta);
}
