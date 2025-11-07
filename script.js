const mentorData = {
  vasu: {
    img: "images/vasu.jpg",
    name: "Vasu Chauhan",
    role: "Project Expert",
    bio: "Helps students plan, develop and complete projects with clarity and real-world application."
  },
  nitya: {
    img: "images/nitya.jpeg",
    name: "Nitya Bhambhani",
    role: "Career Strategist",
    bio: "Guides individuals in finding the right direction by understanding strengths, opportunities and goals."
  },
  jayvina: {
    img: "images/jayvina.JPG",
    name: "Jayvina Dhedhi",
    role: "IT Mentor",
    bio: "Supports students in technical growth, interview preparation, and real IT skill building."
  },
  SHIV: {
    img: "images/SHIV.jpeg",
    name: "SHIV HANSALIYA",
    role: "Travel Mentor",
    bio: "guids you to prepare your amazing travel experince."
  },
  
  hasti: {
    img: "images/hasti.jpeg",
    name: "HASTI HIRAPARA",
    role: "Drawing & Painting Artist",
    bio: "passionate visual artist specializing in traditional sketching, modern acrylic painting, and theme-based artwork."
  }



  
};

function openModal(key) {
  const m = mentorData[key];
  document.getElementById('mentor-img').src = m.img;
  document.getElementById('mentor-name').innerText = m.name;
  document.getElementById('mentor-role').innerText = m.role;
  document.getElementById('mentor-bio').innerText = m.bio;
  document.getElementById('mentorModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('mentorModal').style.display = "none";
}

window.onclick = function(e) {
  if (e.target == document.getElementById('mentorModal')) closeModal();
}





