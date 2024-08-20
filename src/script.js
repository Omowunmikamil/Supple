const menuIcon = document.querySelector('ion-icon[name="menu"]');
const navLinks = document.querySelector(".nav-links");
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function onToggleMenu(e) {
  if (e.name === "menu") {
    e.name = "close";
    navLinks.classList.add("top-[9%]");
    navLinks.classList.remove("top-[-100%]");
  } else {
    e.name = "menu";
    navLinks.classList.add("top-[-100%]");
    navLinks.classList.remove("top-[9%]");
  }
}

// Close the menu when any link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    if (menuIcon.name === "close") {
      onToggleMenu(menuIcon);
    }
  });
});

function opentab(tabname, event) {
  // Remove 'active-link' from all tab links
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  // Hide all tab contents by adding the 'hidden' class
  for (let tabcontent of tabcontents) {
    tabcontent.classList.add("hidden");
  }

  // Add 'active-link' class to the clicked tab link
  event.currentTarget.classList.add("active-link");

  // Show the selected tab content by removing the 'hidden' class
  document.getElementById(tabname).classList.remove("hidden");
}
