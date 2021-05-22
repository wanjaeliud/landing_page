
//Nav global variable
const navigation = document.getElementById("navbar__list");

//section global variable
const sections = document.querySelectorAll("section");

//build the nav
const navBuilder = () => {
  let navUI = "";

  //loop over sections
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navUI =
      navUI +
      `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });

  //append all elements to navigation
  navigation.innerHTML = navUI;
};
//call the function
navBuilder();

// Add class 'active' to section when near top of viewport

//Return the size and elemet's position of an element
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//Remove the active class
const removeActive = (section) => {
  section.classList.remove("active");
  section.style.cssText = "color: black;";
};

//Add active class
const addActive = (condition, section) => {
  if (condition) {
    section.classList.add("active");
    section.style.cssText = "color: #ff6600;";
  }
};

//Implementing the actual function
const sectionActivation = () => {
  sections.forEach((section) => {
    const elementOffset = offset(section);

    let inviewport = () => elementOffset < 200 && elementOffset >= -200;

    removeActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event
const scrolling = () => {
  const links = document.querySelectorAll(".navbar__menu a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      for (let i = 0; i < sections; i++) {
        section[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
};

//call the function
scrolling();
