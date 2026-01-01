const mentorData = {
  vasu:{img:"images/vasu.jpg",name:"Vasu Chauhan",role:"Project Expert",bio:"Guides students with real-world project experience."},
  nitya:{img:"images/nitya.jpeg",name:"Nitya Bhambhani",role:"Career Strategist",bio:"Helps individuals find direction and clarity."},
  jayvina:{img:"images/jayvina.JPG",name:"Jayvina Dhedhi",role:"IT Mentor",bio:"Supports technical growth."},
  shiv:{img:"images/SHIV.jpeg",name:"Shiv Hansaliya",role:"Travel Mentor",bio:"Guides meaningful travel experiences."},
  hasti:{img:"images/hasti.jpeg",name:"Hasti Hirpara",role:"Drawing & Painting Artist",bio:"Guides creative expression through art."}
};

function openModal(k){
  const m = mentorData[k];
  mentor-img.src = m.img;
  mentor-name.innerText = m.name;
  mentor-role.innerText = m.role;
  mentor-bio.innerText = m.bio;
  mentorModal.style.display = "flex";
}

function closeModal(){
  mentorModal.style.display = "none";
}

window.onclick = e => {
  if(e.target === mentorModal) closeModal();
};
