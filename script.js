const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students plan, build, and complete real-world projects with clarity and confidence."
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Guides individuals to discover the right career path based on strengths, interests, and goals."
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports technical growth, interview preparation, and practical IT skill development."
  },
  shiv: {
    img: "images/SHIV.jpeg",
    name: "Shiv Hansaliya",
    role: "Travel Mentor",
    bio: "Helps people plan meaningful, budget-friendly, and memorable travel experiences."
  },
  hasti: {
    img: "images/hasti.jpeg",
    name: "Hasti Hirpara",
    role: "Drawing & Painting Artist",
    bio: "A passionate visual artist guiding creativity through sketching, painting, and artistic expression."
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

window.onclick = function (e) {
  if (e.target === document.getElementById("mentorModal")) {
    closeModal();
  }
};
