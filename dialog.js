// Cookie 
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((acc, part) => {
    const [key, val] = part.split("=");
    return key === name ? val : acc;
  }, null);
}

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("mydialog");
  const okButton = document.getElementById("okmap");

// if-clause der zum laden der Karte führt  

  if (getCookie("mapConsent")) {
    loadMapContent();
  } else {
    dialog.showModal();
  }

  okButton.addEventListener("click", () => {
    setCookie("mapConsent", "true", 365); // expires in 1 year
    dialog.close();
    loadMapContent();
  });
});