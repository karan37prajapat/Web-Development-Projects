const checkbox = document.querySelector('#darkmod-toggle');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
});
function stopScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.onscroll = function() {
    window.scrollTo(0, scrollTop);
  };
}
function resumeScroll() {
  window.onscroll = null;
  window.scrollTo(0, scrollTop);
}

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home");
  formContainer= document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHidden = document.querySelectorAll(".pw_hide");

  formOpenBtn.addEventListener("click",() =>{
    home.classList.add("show");
    stopScroll() ;
  } );
  formCloseBtn.addEventListener("click",() => {
    home.classList.remove("show");
    resumeScroll();
  });
  

  pwShowHidden.forEach(icon =>{
    icon.addEventListener("click",()=>{
      let getPwInput = icon.parentElement.querySelector("input");
      if(getPwInput.type === "password"){
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash","fa-eye");
      }
      else{
        getPwInput.type = "password";
        icon.classList.replace("fa-eye","fa-eye-slash");
      }
    })
  });
  
  signupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
  })
  loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
  })

 
    
