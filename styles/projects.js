let projects = [
  {
    class: "pcard1",
    imgALT: "Contact Form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    githubURL: "https://github.com/Jason-Cee/Contact-Form",
    liveProjectURL: "https://agitated-noyce-d3b0b8.netlify.app/",
    target: "_blank",
  },
  {
    class: "pcard2",
    imgALT: "Lotto Challenge",
    title: "Lotto Challenge",
    techStack: "Python",
    githubURL: "https://github.com/Jason-Cee/Lotto-Challenge-Python",
    liveProjectURL: "https://replit.com/@JasonCee/Lotto-Challenge-Python",
    target: "_blank",
  },

  {
    class: "pcard3",
    imgALT: "Testimonial Slider",
    title: "Testimonial Slider",
    techStack: "HTML/CSS",
    githubURL: "https://github.com/Jason-Cee/Testimonials",
    liveProjectURL: "https://affectionate-noether-060e4f.netlify.app/",
    target: "_blank",
  },
  {
    class: "pcard4",
    imgALT: "Tkinter Intro",
    title: "Intro To Tkinter",
    techStack: "Python",
    githubURL: "https://github.com/Jason-Cee/Tkinter-Textbox",
    liveProjectURL: "https://replit.com/@JasonCee/Tkinter-textbox#main.py",
    target: "_blank",
  },
  {
    class: "pcard5",
    imgALT: "Sneaker Site",
    title: "Sneaker Site",
    techStack: "HTML/CSS",
    githubURL: "https://github.com/Jason-Cee/sneaker-store",
    liveProjectURL: "https://naughty-yonath-d13c74.netlify.app/",
    target: "_blank",
  },
  {
    class: "pcard6",
    imgALT: "BMI Calculator",
    title: "BMI Calculator",
    techStack: "Python",
    githubURL: "https://github.com/Jason-Cee/BMI-calculator",
    liveProjectURL: "https://replit.com/@JasonCee/BMI-Calculator",
    target: "_blank",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card ${card.class}" techStack=${card.techStack} >
        <div class="card-content">
        <h2>${card.title}<h2>
        <a href="${card.githubURL}" target="${card.target}"><i class="fab fa-github-square"></i></a>
        <a href="${card.liveProjectURL}" target="${card.target}"><i class="fas fa-tv"></i></a>

        </div>
      </div>
    `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
