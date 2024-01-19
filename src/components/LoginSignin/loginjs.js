function openLoginPopup() {
  let loginPopup = document.getElementById('loginPopup');
  let signinPopup = document.getElementById('signinPopup');

  if (loginPopup && signinPopup) {
    loginPopup.style.visibility = 'visible';
    loginPopup.style.transform = 'translate(-50%, -50%) scale(1)';

    signinPopup.style.visibility = 'hidden';
    signinPopup.style.transform = 'translate(-50%, -50%) scale(0.1)';
  } else {
    console.error("One or both popups not found.");
  }
}

export default openLoginPopup;
