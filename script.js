const mentorData = {
  vasu:{img:"images/vasu.jpg",name:"Vasu Chauhan",role:"Project Expert",bio:"Guides students in building strong real-world projects."},
  nitya:{img:"images/nitya.jpeg",name:"Nitya Bhambhani",role:"Career Strategist",bio:"Helps people find direction based on strengths and goals."},
  jayvina:{img:"images/jayvina.JPG",name:"Jayvina Dhedhi",role:"IT Mentor",bio:"Supports technical growth and interview preparation."},
  shiv:{img:"images/SHIV.jpeg",name:"Shiv Hansaliya",role:"Travel Mentor",bio:"Helps plan meaningful and budget-friendly travel experiences."},
  hasti:{img:"images/hasti.jpeg",name:"Hasti Hirpara",role:"Drawing & Painting Artist",bio:"A passionate visual artist guiding creative expression."}
};

function openModal(k){
  let m=mentorData[k];
  mentor-img.src=m.img;
  mentor-name.innerText=m.name;
  mentor-role.innerText=m.role;
  mentor-bio.innerText=m.bio;
  mentorModal.style.display="flex";
}
function closeModal(){mentorModal.style.display="none";}
window.onclick=e=>{if(e.target==mentorModal)closeModal();}

/* CONTACT FORM */
if(document.getElementById("contactForm")){
document.getElementById("contactForm").onsubmit=e=>{
e.preventDefault();
formStatus.innerText="Message sent 🌸";
e.target.reset();
};}

/* MENTOR FORM */
if(document.getElementById("mentorForm")){
mentorForm.onsubmit=e=>{
e.preventDefault();
mentorFormStatus.innerText="Application submitted ⭐";
e.target.reset();
};}
