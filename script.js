const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students build and complete real-world projects."
  },

  },
  shiv: {
    img: "images/SHIV.jpeg",
    name: "Shiv Hansaliya",
    role: "Travel Mentor",
    bio: "Guides meaningful travel experiences."
  },

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

