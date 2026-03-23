const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const firstFold = window.innerHeight;

  if (scrollY > firstFold) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// breadcrumbs
const items = [
  { label: "Products", url: "/products" },
  { label: "Two For One Twister" }
];

const breadCrumbsContainer = document.getElementById("breadcrumb");

items.forEach((item, index) => {
  if (index !== 0) {
    breadCrumbsContainer.innerHTML += `<span class="separator"><img src=""/></span>`;
  }

  if (item.url) {
    breadCrumbsContainer.innerHTML += `<a href="${item.url}">${item.label}</a>`;
  } else {
    breadCrumbsContainer.innerHTML += `<span class="active">${item.label}</span>`;
  }
});

const badges = [
  { icon: "./assets/img/bis.png", title: "BIS Certified" },
  { icon: "./assets/img/Isi.png", title: "ISO Certified" },
  { icon: "./assets/img/Ce.png", title: "CE Certified" }
];

const features = ['Leak-Proof Fusion Joints', 'Chemical Resistance', '50+ Year Service Life', 'Flexible Installation', 'UV Resistance'];

// badges
const badgeContainer = document.querySelector(".badges");
badges.forEach(badge => {
  const li = document.createElement("li");
  li.className = "badge";

  const img = document.createElement("img");
  img.src = badge.icon;
  img.alt = badge.title;
  img.loading = "lazy";
  img.classList.add("badge-icon");
  const text = document.createTextNode(badge.title);

  li.appendChild(img);
  li.appendChild(text);

  badgeContainer.appendChild(li);
});

// features
const featuresList = document.querySelector(".features");
features.forEach(feature => {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="feature">${feature}</span>
  `;

  featuresList.appendChild(li);
});

// pricing
const details = [
  { label: "Price Range", value: "₹4,80,000 - 7,90,000", type: "highlight" },
  { label: "Shipping", value: "6-12 days", type: "badge" },
  { label: "Returns", value: "If returned within 7 days", type: "badge" },
  { label: "Certifications", value: "ISO Certified, BIS Certified", type: "muted" }
];
function renderPricing(details) {
  const container = document.querySelector(".price-card");
  if (!container) return;

  container.innerHTML = "";

  const priceRange = details.find(d => d.label === "Price Range");
  const shipping = details.find(d => d.label === "Shipping");
  const returns = details.find(d => d.label === "Returns");
  const certifications = details.find(d => d.label === "Certifications");
  const priceDetails = document.createElement('div');
  priceDetails.className = "price-details";
  // Price
  const title = document.createElement("p");
  title.className = "price-label";
  title.textContent = priceRange.label;

  const price = document.createElement("h2");
  price.className = "price-value";
  price.textContent = priceRange.value;
  priceDetails.append(title, price);
  // Badges row
  const badgeRow = document.createElement("div");
  badgeRow.className = "badge-row";

  [shipping, returns].forEach(item => {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = `${item.label}: ${item.value}`;
    badgeRow.appendChild(badge);
  });

  // Certifications
  const cert = document.createElement("div");
  cert.className = "certifications";
  cert.textContent = `${certifications.label}: ${certifications.value}`;

  container.append(priceDetails, badgeRow, cert);
}

renderPricing(details);

// actions 
const ctaButtons = [
  { label: "Get Custom Quote", type: "primary" },
  { label: "View Technical Specs", type: "secondary", icon: "./assets/icons/right-arrow.svg" }
];
const actions = document.querySelector(".cta-buttons");
ctaButtons.forEach(({ label, type, icon }) => {
  const btn = document.createElement("button");
  btn.className = `cta-button ${type}`;
  btn.textContent = label;

  if (icon) {
    const img = document.createElement("img");
    img.src = icon;
    img.alt = "";
    img.loading = "lazy";
    btn.appendChild(img);
  }

  actions.appendChild(btn);
});

// company logos
const companyLogos = ['./assets/img/euro.png', './assets/img/euro.png', './assets/img/euro.png', './assets/img/euro.png', './assets/img/euro.png', './assets/img/euro.png']
const companyLogosContainer = document.querySelector(".company-logos");
companyLogos.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Company Logo";
  img.loading = "lazy";
  companyLogosContainer.appendChild(img);
});

// specifications
const specifications = {
  title: 'Technical Specifications at a Glance',
  subTitle: 'Comprehensive performance data demonstrating our commitment to quality and engineering excellence.',
  data: [
    { label: "Pipe Diameter Range", value: "20mm to 1600mm (3/4” to 63”)" },
    { label: "Pressure Ratings", value: "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16" },
    { label: "Standard Dimension Ratio", value: "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11" },
    { label: "Operating Temperature", value: "-40°C to +80°C (-40°F to +176°F)" },
    { label: "Service Life", value: "50+ Years (at 20°C, PN 10)" },
    { label: "Material Density", value: "0.95 - 0.96 g/cm³" },
    { label: "Certification Standards", value: "IS 5984, ISO 4427, ASTM D3035" },
    { label: "Joint Type", value: "Butt Fusion, Electrofusion, Mechanical" },
    { label: "Coil Lengths", value: "Up to 500mm (for smaller diameters)" },
    { label: "Country of Origin", value: "India" }
  ],
  cta: { label: "Download Full Technical Datasheet", icon: './assets/icons/download.svg' }
};

const handleDownloadSheet = () => {
  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = `
  <div class="download-modal-container"></div>`
}
const specsContainerWrapper = document.querySelector(".specifications-container");
const specsContainer = document.createElement("div");
specsContainer.className = "specifications container";
const specsTitle = document.createElement("h2");
specsTitle.textContent = specifications.title;
const specsSubTitle = document.createElement("p");
specsSubTitle.textContent = specifications.subTitle;
specsContainer.appendChild(specsTitle);
specsContainer.appendChild(specsSubTitle);
const specsList = document.createElement("table");

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>Parameter</th>
    <th>Specification</th>
  </tr>
`;

const tbody = document.createElement("tbody");

specifications.data.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="label">${item.label}</td>
    <td class="value">${item.value}</td>
  `;
  tbody.appendChild(row);
});
const cta = document.createElement("button");
cta.className = "download-cta";
cta.textContent = specifications.cta.label;
cta.addEventListener("click", () => {
  createModal({
    title: "Let us email the entire catalogue to you",
    content: `
      <input type="email" placeholder="Your Email" style="width:100%;padding:10px;margin:10px 0;">
      <input type="number" placeholder="Your Contact Number (Optional)" style="width:100%;padding:10px;margin:10px 0;">
    `,
    footer: `<button style="padding:10px 20px;">Download Brochure</button>`
  });
});

const ctaIcon = document.createElement("img");
ctaIcon.src = specifications.cta.icon;
ctaIcon.alt = "";
ctaIcon.loading = "lazy";
cta.prepend(ctaIcon);
specsList.appendChild(thead);
specsList.appendChild(tbody);
specsContainer.appendChild(specsList);
specsContainer.appendChild(cta);
specsContainerWrapper.appendChild(specsContainer);


// cards 
const cardsData = {
  title: 'Built to Last. Engineered to Perform.',
  subTittle: 'From bulk bags to technical threads, Meera delivers precision solutions for every stage of your packaging process.',
  data: [
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      title: 'Superior Chemical Resistance',
      content: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won/t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    }
  ],
  cta: { label: "Request a Quote", type: "primary" }
}
const cardsContainerWrapper = document.querySelector(".features-cards");
const cardsContainer = document.createElement("div");
cardsContainer.className = "cards container";
const cardDetails = document.createElement("div");
cardDetails.className = 'card-details';
const cardsTitle = document.createElement("h3");
cardsTitle.textContent = cardsData.title;
const cardsSubTitle = document.createElement("p");
cardsSubTitle.textContent = cardsData.subTittle;
cardDetails.append(cardsTitle, cardsSubTitle);
cardsContainer.appendChild(cardDetails);
const ctaButton = document.createElement("button");
const cardsList = document.createElement("div");
cardsList.className = "card-container";
cardsData.data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <p>${item.title}</p>
    <p>${item.content}</p>
  `;
  cardsList.appendChild(card);
});

cardsContainer.appendChild(cardsList);
ctaButton.className = `request-demo ${cardsData.cta.type}`;
ctaButton.textContent = cardsData.cta.label;
ctaButton.addEventListener("click", () => {
  createModal({
    title: "Request a call back",
    content: `
      <input placeholder="Full Name" style="width:100%;padding:10px;margin:10px 0;">
      <input placeholder="Company Name" style="width:100%;padding:10px;margin:10px 0;">
      <input type="email" placeholder="Email Address" style="width:100%;padding:10px;margin:10px 0;">
      <input type="number" placeholder="Contact Number" style="width:100%;padding:10px;margin:10px 0;">
    `,
    footer: `<button style="padding:10px 20px;">Submit Form</button>`
  });
});
cardsContainer.appendChild(ctaButton);
cardsContainerWrapper.appendChild(cardsContainer);


// faq
const faqData = {
  title: "Frequently Asked Questions",
  data: [
    { id: 1, label: "What is the purpose of a laser cutter for sheet metal? ", value: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes." },
    { id: 2, label: "What are the benefits of using aluminum tubing in manufacturing? ", value: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes. t is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes" },
    { id: 3, label: "How is aluminum tubing produced?", value: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes." },
    { id: 4, label: "What are the common applications of aluminum tubing?", value: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes." }
  ]
};

const faqContainerWrapper = document.querySelector(".faq");

// Main Wrapper
const faqSection = document.createElement("div");
faqSection.className = "faq-section";



/* =========================
   1️⃣ FAQ CONTAINER
========================= */

const faqContainer = document.createElement("div");
faqContainer.className = "faq-container container";

// Title
const faqTitle = document.createElement("h2");
faqTitle.className = "faq-title";

const words = faqData.title.split(" ");
faqTitle.innerHTML = `
  <span class="highlight">${words.shift()}</span> ${words.join(" ")}
`;

faqContainer.appendChild(faqTitle);


// Accordion
faqData.data.forEach(item => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";

  const question = document.createElement("div");
  question.className = "faq-question";
  const questionText = document.createElement("span");
  questionText.textContent = item.label;

  const arrow = document.createElement("img");
  arrow.className = "faq-arrow";
  arrow.src = "./assets/icons/chevron-down.svg";   

  question.append(questionText, arrow);

  const answer = document.createElement("div");
  answer.className = "faq-answer";
  answer.textContent = item.value;

  question.addEventListener("click", () => {
    arrow.classList.toggle("active");
    answer.classList.toggle("active");
  });

  faqItem.append(question, answer);
  faqContainer.appendChild(faqItem);
});



/* =========================
   2️⃣ EMAIL CONTAINER
========================= */

const emailContainer = document.createElement("div");
emailContainer.className = "email-container";

emailContainer.innerHTML = `
  <div class="email-content">
    <h3>Want us to email the entire catalogue?</h3>
    <p>Enter your email and an expert will share the catalogue with you.</p>
  </div>
  <div class="email-form">
    <input type="email" placeholder="Email Address" />
    <button>Request Catalogue</button>
  </div>
`;



/* =========================
   3️⃣ APPEND EVERYTHING
========================= */

faqSection.append(faqContainer, emailContainer);

document.querySelector(".faq").appendChild(faqSection);


// verstaile app 
const appData = {
  title: 'Versatile Applications Across Industries',
  content: 'From technical textiles to packaging materials, our precision-engineered machinery delivers superior performance across diverse applications.',
  data: [
    {
      title: 'Fishnet Manufacturing',
      content: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
      img: './assets/img/worker.png'
    },
    {
      title: 'Fishnet Manufacturing',
      content: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
      img: './assets/img/worker.png'
    },
    {
      title: 'Fishnet Manufacturing',
      content: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
      img: './assets/img/worker.png'
    },
    {
      title: 'Fishnet Manufacturing',
      content: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
      img: './assets/img/worker.png'
    },
    {
      title: 'Fishnet Manufacturing',
      content: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
      img: './assets/img/worker.png'
    }
  ]
}
const appContainerWrapper = document.querySelector(".applications");

// main container
const appContainer = document.createElement("div");
appContainer.className = "app-container";

// ---------- HEADER ----------
const appsHeader = document.createElement("div");
appsHeader.className = "app-header-container";

const appsContent = document.createElement("div");
appsContent.className = "apps-content";

const title = document.createElement("h3");
title.textContent = appData.title;

const content = document.createElement("p");
content.textContent = appData.content;

appsContent.append(title, content);

// arrows
const arrowContainer = document.createElement("div");
arrowContainer.className = "arrow-container";

const arrowPrevBtn = document.createElement("button");
arrowPrevBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

const arrowNextBtn = document.createElement("button");
arrowNextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

arrowContainer.append(arrowPrevBtn, arrowNextBtn);

appsHeader.append(appsContent, arrowContainer);
appContainer.appendChild(appsHeader);

// ---------- CARD LIST ----------
const appList = document.createElement("div");
appList.className = "app-list";

appData.data.forEach(item => {

  const appItem = document.createElement("div");
  appItem.className = "app-item";

  const img = document.createElement("img");
  img.src = item.img;
  img.loading = "lazy";
  img.className = "app-images";

  const contentBox = document.createElement("div");
  contentBox.className = "carousal-content";

  const itemTitle = document.createElement("h4");
  itemTitle.textContent = item.title;

  const itemText = document.createElement("p");
  itemText.textContent = item.content;

  contentBox.append(itemTitle, itemText);
  appItem.append(img, contentBox);

  appList.appendChild(appItem);
});

appContainer.appendChild(appList);
appContainerWrapper.appendChild(appContainer);


// ---------- SLIDER FUNCTION ----------
arrowNextBtn.addEventListener("click", () => {
  const cardWidth = appList.querySelector(".app-item").offsetWidth + 20;
  appList.scrollBy({ left: cardWidth, behavior: "smooth" });
});

arrowPrevBtn.addEventListener("click", () => {
  const cardWidth = appList.querySelector(".app-item").offsetWidth + 20;
  appList.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

// process 
const processData = {
  title: "Advanced HDPE Pipe Manufacturing Process",
  description:
    "Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.",

  steps: [
    {
      name: "Raw Material",
      heading: "High-Grade Raw Material Selection",
      content:
        "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
      features: [
        "PE100 grade material",
        "Optimal molecular weight distribution"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Extrusion",
      heading: "Extrusion Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Cooling",
      heading: "Cooling Extrusion Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Sizing",
      heading: "Sizing Extrusion Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Quality Control",
      heading: "Quality Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Marking",
      heading: "Marking Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Cutting",
      heading: "Cutting Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    },
    {
      name: "Packaging",
      heading: "Packaging Process",
      content:
        "Controlled melting and extrusion ensure uniform pipe structure and durability.",
      features: [
        "High-output extrusion lines",
        "Consistent wall thickness"
      ],
      image: "./assets/img/workers.png"
    }
  ]
};

const wrapper = document.querySelector(".process");

// ===== MAIN SECTION =====
const section = document.createElement("section");
section.className = "process-section";

// ===== HEADER =====
const header = document.createElement("div");
header.className = "process-header";
header.innerHTML = `
  <h2>${processData.title}</h2>
  <p>${processData.description}</p>
`;
section.appendChild(header);

// ===== CARD =====
const card = document.createElement("div");
card.className = "process-card";

// ===== TABS =====
const tabsContainer = document.createElement("div");
tabsContainer.className = "process-tabs";

// ===== CONTENT AREA =====
const contentContainer = document.createElement("div");
contentContainer.className = "process-content";

processData.steps.forEach((step, index) => {

  // ----- Create Tab Button -----
  const tab = document.createElement("button");
  tab.className = "tab";
  tab.textContent = step.name;

  if (index === 0) tab.classList.add("active");

  tabsContainer.appendChild(tab);

  // ----- Create Content Block -----
  const contentBlock = document.createElement("div");
  contentBlock.className = "process-block";

  if (index !== 0) contentBlock.style.display = "none";

  contentBlock.innerHTML = `
    <div class="content-left">
      <h3>${step.heading}</h3>
      <p>${step.content}</p>
      <ul>
        ${step.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>
    <div class="content-right">
      <img src="${step.image}" alt="${step.name}" loading="lazy"/>
    </div>
  `;

  contentContainer.appendChild(contentBlock);

  // ----- Tab Click Logic -----
  tab.addEventListener("click", () => {

    // Remove active from all tabs
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Hide all content blocks
    document.querySelectorAll(".process-block").forEach(block => {
      block.style.display = "none";
    });

    contentBlock.style.display = "grid";
  });
});

card.appendChild(tabsContainer);
card.appendChild(contentContainer);

section.appendChild(card);
wrapper.appendChild(section);

// testimonials
const testimonialData = {
  title: "Trusted Performance. Proven Results",
  description:
    "From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.",
  reviews: [
    {
      text: "Excellent support for specialized applications.",
      content:
        "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
      name: "Carlos Mendoza",
      role: "Operations Manager"
    },
    {
      text: "Provides the exact specifications we need!",
      content:
        "For our technical textile applications, Meera's specialized machinery provides the exact specifications we need.",
      name: "Rajesh Kumar",
      role: "Manufacturing Head"
    },
    {
      text: "Revolutionized our production efficiency!",
      content:
        "Their precision engineering delivers consistent yarn strength critical for our bulk applications.",
      name: "Johann Mueller",
      role: "Production Director"
    },
    {
      text: "Revolutionized our production efficiency!",
      content:
        "Their precision engineering delivers consistent yarn strength critical for our bulk applications.",
      name: "Johann Mueller",
      role: "Production Director"
    }
  ]
};

const testimonialsWrapper = document.querySelector(".testimonials");

// ===== SECTION =====
const testimonialSection = document.createElement("section");
testimonialSection.className = "testimonial-section";

// ===== HEADER =====
const testimonialHeader = document.createElement("div");
testimonialHeader.className = "testimonial-header";
testimonialHeader.innerHTML = `
  <h2>${testimonialData.title}</h2>
  <p>${testimonialData.description}</p>
`;
testimonialSection.appendChild(testimonialHeader);

// ===== CARD CONTAINER =====
const cardContainer = document.createElement("div");
cardContainer.className = "testimonial-cards";

testimonialData.reviews.forEach(item => {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  card.innerHTML = `
    <div>
    <div class="quote">"</div>
    <div class="testimonial-details">
    <h4>${item.text}</h4>
    <p>${item.content}</p>
    </div>
    </div>
    <div class="author">
      <div class="avatar"></div>
      <div class="author-content">
        <strong>${item.name}</strong>
        <span class="author-role">${item.role}</span>
      </div>
    </div>
  `;

  cardContainer.appendChild(card);
});

testimonialSection.appendChild(cardContainer);
testimonialsWrapper.appendChild(testimonialSection);

// portfolio 
const portfolioData = {
  title: "Complete Piping Solutions Portfolio",
  subtitle:
    "From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.",
  cards: [
    {
      title: "HDPE Fittings & Accessories",
      desc: "Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.",
      img: "./assets/img/man.png"
    },
    {
      title: "Professional Installation Services",
      desc: "Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.",
      img: "./assets/img/worker.png"
    },
    {
      title: "PE-RT Heating Pipes",
      desc: "Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.",
      img: "./assets/img/man.png"
    }
  ]
};

const container = document.querySelector(".portfolio");

// Wrapper
const portfolioWrapper = document.createElement("div");
portfolioWrapper.className = "portfolio-wrapper";

// Title
const portfolioTitle = document.createElement("h2");
portfolioTitle.textContent = portfolioData.title;

// Subtitle
const portfolioSubtitle = document.createElement("p");
portfolioSubtitle.textContent = portfolioData.subtitle;

// Cards container
const portfolioCardsContainer = document.createElement("div");
portfolioCardsContainer.className = "cards";

// Loop Cards
portfolioData.cards.forEach(card => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  cardEl.innerHTML = `
   <div class="portfolio-header">
    <h3>${card.title}</h3>
    <p>${card.desc}</p>
    </div>
    <div>
    <img src="${card.img}" alt="${card.title}" loading="lazy" />
    <button>Learn More</button>
    </div>
  `;

  portfolioCardsContainer.appendChild(cardEl);
});

// CTA Section
const portfolioCta = document.createElement("div");
portfolioCta.className = "cta";
portfolioCta.innerHTML = `
  <div class="expert-container">
    <h4>Didn't find what you're looking for?</h4>
    <p>Talk to our experts for custom solutions and tailored guidance.</p>
  </div>
  <button class="expert-btn"><i class="fa-solid fa-phone"></i> Talk to an Expert</button>
`;

// Append everything
portfolioWrapper.appendChild(portfolioTitle);
portfolioWrapper.appendChild(portfolioSubtitle);
portfolioWrapper.appendChild(portfolioCardsContainer);
portfolioWrapper.appendChild(portfolioCta);

container.appendChild(portfolioWrapper);


// resources 

const resourcesData = {
  title: "Resources & Downloads",
  subtitle:
    "Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.",
  files: [
    { name: "HDPE Pipe Installation Manual (PDF)" },
    { name: "Maintenance & Inspection Handbook (PDF)" },
    { name: "Engineering Specifications Sheet (PDF)" }
  ]
};

const resourcesContainer = document.querySelector(".resources");

// Wrapper
const resourcesWrapper = document.createElement("div");
resourcesWrapper.className = "resources-wrapper";

// Title
const resourcesTitle = document.createElement("h2");
resourcesTitle.textContent = resourcesData.title;

// Subtitle
const resourcesSubtitle = document.createElement("p");
resourcesSubtitle.textContent = resourcesData.subtitle;

// Download Box
const downloadBox = document.createElement("div");
downloadBox.className = "download-box";

// Loop Files
resourcesData.files.forEach(file => {
  const row = document.createElement("div");
  row.className = "download-row";

  row.innerHTML = `
    <span class="file-name">${file.name}</span>
    <button class="download-btn">
      Download PDF
      <span class="icon"><i class="fas fa-download"></i></span>
    </button>
  `;

  downloadBox.appendChild(row);
});

// Append Everything
resourcesWrapper.appendChild(resourcesTitle);
resourcesWrapper.appendChild(resourcesSubtitle);
resourcesWrapper.appendChild(downloadBox);
resourcesContainer.appendChild(resourcesWrapper);

// contact-us 

const ctaData = {
  title: "Ready to Transform Your Textile Manufacturing?",
  description:
    "Get a personalized consultation and quote for machinery solutions tailored to your specific production requirements.",
  phone: "+91-XXX-XXX-XXXX",
  email: "info@meerind.com"
};

const contactContainer = document.querySelector(".contact-us");

// Wrapper
const ContactWrapper = document.createElement("div");
ContactWrapper.className = "cta-wrapper";

// Left Content
const left = document.createElement("div");
left.className = "cta-left";
left.innerHTML = `
  <h2>${ctaData.title}</h2>
  <p class="cta-desc">${ctaData.description}</p>
  <hr />
  <p class="cta-contact">
    For immediate assistance, feel free to give us a direct call us at <strong>${ctaData.phone}</strong><br/>. You can also send us a quick email at <a href="mailto:${ctaData.email}">${ctaData.email}</a>
  </p>
`;

// Right Form
const right = document.createElement("div");
right.className = "cta-form";

right.innerHTML = `
  <h3>Contact Us Today</h3>
  <input type="text" placeholder="Full Name" />
  <input type="text" placeholder="Company Name" />
  <input type="email" placeholder="Email Address" />
  
  <div class="phone-group">
    <select>
      <option>+91</option>
      <option>+1</option>
      <option>+44</option>
    </select>
    <input type="tel" placeholder="Phone Number"  />
  </div>

  <button>Request Custom Quote</button>
`;

// Append
ContactWrapper.appendChild(left);
ContactWrapper.appendChild(right);
contactContainer.appendChild(ContactWrapper);

// bottom-footer

const footerData = {
  brand: {
    logo: "./assets/img/logo.jpg",
    tagline: "Premium {HDPE Pipes & Fittings Manufacturer} in South India"
  },
  columns: [
    {
      title: "About Us",
      links: ["About Us"]
    },
    {
      title: "Categories",
      links: [
        "Packaging Industry Solutions",
        "Fishnet Manufacturing",
        "PPMF/Tapes and Twines",
        "FIBC and Woven Sack",
        "Carpet and Rugs Industry",
        "Technical Textiles"
      ]
    },
    {
      title: "Products",
      links: [
        "Two For One Twister",
        "TPRS Twister Machine",
        "Ring Twisting Machines",
        "Covering Machines",
        "Heat Setting Equipment",
        "Servo Controlled Winders"
      ]
    }
  ],
  contact: {
    address: "2126, Road No. 2, GIDC Sachin, Surat - 394 230 Gujarat, India",
    phone: "+91-XXX-XXX-XXXX",
    email: "info@meerind.com",
    support: "support@meerind.com"
  }
};

const footer = document.querySelector(".footer");

/* ---------- MAIN WRAPPER ---------- */

const footerWrapper = document.createElement("div");
footerWrapper.className = "footer-wrapper";

/* ---------- BRAND CARD ---------- */

const brandCard = document.createElement("div");
brandCard.className = "brand-card";
const formattedTagline = footerData.brand.tagline.replace(
  /\{(.*?)\}/g,
  `<span class="highlight-text">$1</span>`
);

brandCard.innerHTML = `
  <img class="brand-name" src="${footerData.brand.logo}" />
  <div class="brand-tagline">${formattedTagline}</div>
`;

footerWrapper.appendChild(brandCard);

/* ---------- GRID SECTION ---------- */

const grid = document.createElement("div");
grid.className = "footer-grid";

/* Dynamic Columns */

footerData.columns.forEach(col => {
  const column = document.createElement("div");
  column.className = "footer-column";

  const title = document.createElement("h4");
  title.textContent = col.title;

  column.appendChild(title);

  col.links.forEach(link => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = link;
    column.appendChild(a);
  });

  grid.appendChild(column);
});

/* ---------- CONTACT COLUMN ---------- */

const contactCol = document.createElement("div");
contactCol.className = "footer-column";

contactCol.innerHTML = `
  <h4>Contact</h4>
  <p><i class="fas fa-map-marker-alt"></i> ${footerData.contact.address}</p>
  <p><i class="fas fa-phone"></i> ${footerData.contact.phone}</p>
  <p><i class="fas fa-envelope"></i> ${footerData.contact.email}</p>
  <p><i class="fas fa-headset"></i> ${footerData.contact.support}</p>
  <div class="socials">
    <span><i class="fab fa-linkedin-in"></i></span>
    <span><i class="fab fa-twitter"></i></span>
    <span><i class="fab fa-instagram"></i></span>
  </div>
`;

grid.appendChild(contactCol);
footerWrapper.appendChild(grid);

/* ---------- BOTTOM BAR ---------- */

const bottomBar = document.createElement("div");
bottomBar.className = "footer-bottom";

bottomBar.innerHTML = `
  <div class="footer-content">
  <div>Copyright © 2026 Meera Industries Limited | All Rights Reserved</div>
  <div class="bottom-links">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>
    <a href="#">Sitemap</a>
  </div>
 </div> 
`;

footerWrapper.appendChild(bottomBar);
footer.appendChild(footerWrapper);

// carousal
const carousalContainer = document.querySelector(".carousal");

const images = [
  "./assets/img/man.png",
  "./assets/img/worker.png",
  "./assets/img/man.png",
  "./assets/img/worker.png"
];

let currentIndex = 0;

/* -----------------------------
   Create Elements
----------------------------- */

const carousel = document.createElement("div");
carousel.className = "carousel";
const zoomLens = document.createElement("div");
zoomLens.className = "zoom-lens";

const mainImageWrapper = document.createElement("div");
mainImageWrapper.className = "main-image";
mainImageWrapper.appendChild(zoomLens);

const mainImage = document.createElement("img");
mainImage.src = images[0];
mainImage.id = "currentImage";

const zoomPreview = document.createElement("div");
zoomPreview.className = "zoom-preview";

const prevBtn = document.createElement("button");
const prevBtnIcon = document.createElement("img");
prevBtn.className = "nav prev";
prevBtnIcon.src = "./assets/icons/arrow-left.svg";
prevBtn.appendChild(prevBtnIcon)

const nextBtn = document.createElement("button");
nextBtn.className = "nav next";
const nextBtnIcon = document.createElement("img");
nextBtnIcon.src = "./assets/icons/arrow-right.svg";
nextBtn.appendChild(nextBtnIcon)
mainImage.addEventListener("mouseenter", () => {
  zoomPreview.style.display = "block";
  zoomLens.style.display = "block";
  zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
});

mainImage.addEventListener("mouseleave", () => {
  zoomPreview.style.display = "none";
  zoomLens.style.display = "none";
});

mainImage.addEventListener("mousemove", (e) => {
  const rect = mainImage.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const lensWidth = zoomLens.offsetWidth;
  const lensHeight = zoomLens.offsetHeight;

  // Keep lens inside image
  let lensX = x - lensWidth / 2;
  let lensY = y - lensHeight / 2;

  if (lensX < 0) lensX = 0;
  if (lensY < 0) lensY = 0;
  if (lensX > rect.width - lensWidth)
    lensX = rect.width - lensWidth;
  if (lensY > rect.height - lensHeight)
    lensY = rect.height - lensHeight;

  zoomLens.style.left = lensX + "px";
  zoomLens.style.top = lensY + "px";

  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;

  zoomPreview.style.backgroundPosition = `${percentX}% ${percentY}%`;
});

mainImageWrapper.appendChild(mainImage);
mainImageWrapper.appendChild(zoomPreview);
mainImageWrapper.appendChild(prevBtn);
mainImageWrapper.appendChild(nextBtn);

/* -----------------------------
   Thumbnails
----------------------------- */

const thumbnailsWrapper = document.createElement("div");
thumbnailsWrapper.className = "thumbnails";

images.forEach((src, index) => {
  const thumb = document.createElement("img");
  thumb.src = src;
  thumb.className = "thumb";
  if (index === 0) thumb.classList.add("active");

  thumb.addEventListener("click", () => {
    setImage(index);
  });

  thumbnailsWrapper.appendChild(thumb);
});

/* -----------------------------
   Append Everything
----------------------------- */

carousel.appendChild(mainImageWrapper);
carousel.appendChild(thumbnailsWrapper);
carousalContainer.appendChild(carousel);

/* -----------------------------
   Functions
----------------------------- */

function setImage(index) {
  currentIndex = index;
  mainImage.src = images[index];

  document.querySelectorAll(".thumb").forEach(t =>
    t.classList.remove("active")
  );
  document.querySelectorAll(".thumb")[index].classList.add("active");
}

/* Next / Prev */

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  setImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  setImage(currentIndex);
});

/* -----------------------------
   Zoom Effect
----------------------------- */

mainImage.addEventListener("mouseenter", () => {
  zoomPreview.style.display = "block";
  zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
});

mainImage.addEventListener("mouseleave", () => {
  zoomPreview.style.display = "none";
});

mainImage.addEventListener("mousemove", (e) => {
  const rect = mainImage.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  zoomPreview.style.backgroundPosition = `${x}% ${y}%`;
});

function createModal({ title = "", content = "", footer = "" }) {

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  // Modal box
  const modal = document.createElement("div");
  modal.className = "modal";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.className = "modal-close";
  closeBtn.innerHTML = "&times;";

  // Title
  const heading = document.createElement("h2");
  heading.textContent = title;
  heading.className = "modal-header"

  // Content
  const body = document.createElement("div");
  body.innerHTML = content;
  body.className = "modal-content";
  // Footer
  const modalfooter = document.createElement("div");
  modalfooter.innerHTML = footer;
  modalfooter.className = "modal-footer";

  // Append
  modal.appendChild(closeBtn);
  modal.appendChild(heading);
  modal.appendChild(body);
  modal.appendChild(modalfooter);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Open animation
  setTimeout(() => overlay.classList.add("active"), 10);

  // Close logic
  function closeModal() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 300);
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  return overlay;
}
