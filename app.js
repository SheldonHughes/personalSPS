import { renderNavbar } from "./components/navbar.js";
import { renderAbout } from "./components/about.js";
import { renderHomePage } from "./home.js";

document.getElementById("navbar").innerHTML = renderNavbar();

window.onload = () => {
  navigate(window.location.pathname);
};

window.onpopstate = () => {
  navigate(window.location.pathname);
};

function navigate(path) {
  switch (path) {
    case "/":
      document.getElementById("content").innerHTML = renderHomePage();
      break;
    case "/about":
      document.getElementById("content").innerHTML = renderAbout();
      break;
    default:
      document.getElementById("content").innerHTML =
        "<h1>404 Not Found</h1><p>The page you are looking has gone missing. Was it Felicity?</p>";
  }
}

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState(null, "", "/");
  navigate("/");
});

document.getElementById("about").addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState(null, "", "/about");
  navigate("/about");
});
