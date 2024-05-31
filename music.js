function toggleContent() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("toggle-btn");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Show Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }


  document.getElementById("loginButton").addEventListener("click", openLoginPopup);

  function openLoginPopup() {
    let logindata = document.getElementById("usernamdetail");
    let passdata = document.getElementById("passworddetail");
    const loginPopup = document.getElementById('loginPopup');

    if (!logindata.value || !passdata.value) {
      alert("Fill in all the necessary information first");
    } else {
      loginPopup.style.display = 'block';
    }
  }
  
  function closeLoginPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
    alert("You have been successfully logged in");
  }
  function closeLogin() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
   
  }
  
  function redirectToMerch() {
    window.open("music2.html#merchs", "_blank");
  }
  
  function redirectToAlbums() {
    window.open("music2.html#album", "_blank");
  }
  
  