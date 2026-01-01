const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students build and complete real-world projects."
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Guides people to choose the right career path."
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports technical learning and interview preparation."
  },
  shiv: {
    img: "images/SHIV.jpeg",
    name: "Shiv Hansaliya",
    role: "Travel Mentor",
    bio: "Helps plan meaningful travel experiences."
  },
  hasti: {
    img: "images/hasti.jpeg",
    name: "Hasti Hirpara",
    role: "Drawing & Painting Artist",
    bio: "Passionate artist guiding creativity through art."
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
