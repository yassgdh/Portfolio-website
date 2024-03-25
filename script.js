document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("icon");

  icon.onclick = function () {
    const body = document.body;
    const header = document.querySelector("header");

    if (body.classList.contains("dark-theme")) {
      body.classList.add("light");
      body.classList.remove("dark-theme");
      icon.src = "images/sun.png";
      header.classList.add("light");
      header.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
      body.classList.remove("light");
      header.classList.add("dark-theme");
      header.classList.remove("light");
      icon.src = "images/moon.png";
    }
  };
});
