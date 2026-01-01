const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students build real-world projects with clarity and confidence."
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Guides individuals to discover the right direction based on strengths and goals."
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports technical growth, interviews, and real IT skill development."
  },
  shiv: {
    img: "images/SHIV.jpeg",
    name: "Shiv Hansaliya",
    role: "Travel Mentor",
    bio: "Helps plan meaningful and memorable travel experiences."
  },
  hasti: {
    img: "images/hasti.jpeg",
    name: "Hasti Hirpara",
    role: "Drawing & Painting Artist",
    bio: "A passionate artist guiding creativity through drawing and painting."
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

window.onclick = function(e) {
  if (e.target === document.getElementById("mentorModal")) {
    closeModal();
  }
};
