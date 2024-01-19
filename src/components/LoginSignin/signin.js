function openSigninPopup() {
    let loginPopup = document.getElementById('loginPopup');
    let signinPopup = document.getElementById('signinPopup');

    loginPopup.style.visibility = 'hidden';
    loginPopup.style.transform = 'translate(-50%, -50%) scale(0.1)';

    signinPopup.style.visibility = 'visible';
    signinPopup.style.transform = 'translate(-50%, -50%) scale(1)';

  
}

export default openSigninPopup;