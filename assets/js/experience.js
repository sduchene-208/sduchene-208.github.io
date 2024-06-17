AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Business Analyst",
    cardImage: "assets/images/experience-page/GeoSol_Logo_1C.png",
    place: "Geographic Solutions, Inc.",
    time: "(2022 - present)",
    desp: "<li>Maintained a deep domain understanding in payroll tax filing, collections and deposits of tax payments</li><li>Developed a strong understanding of payroll tax processes, including federal, state and local regulations.</li><li>Evaluated business processes, anticipated requirements, uncovered areas for improvement, and developed/implemented effective solutions. Translated business requirements into concise system requirements for use by the software architects and development teams.</li><li>Lead ongoing reviews of business processes and developed optimization strategies.</li><li>Coordinated and met with clients and business leaders, as well as worked closely with software architects and development teams.</li><li>Utilized a strong knowledge of both project management and the software development lifecycle (SDLC) in large-scale development projects.</li><li>Maintained an extensive understanding of multiple functional areas related to complex projects and software solutions.</li><li>Successfully designed, updated, and implemented the first UI Tax Rate run of the GUS Tax system.</li><li>Participated in market research, identifying opportunities, writing proposals, sales, and delivering presentations and product demonstrations both in person and remotely.</li>",
  },
  {
    title: "Business Analyst / Product Owner",
    cardImage: "assets/images/experience-page/1638466889021.jpg",
    place: "Solid State Operations, Inc.",
    time: "(2021 - 2022)",
    desp: "<li>Served as the lead BA on the Harbor|9 product line; a modular government platform that brings together a diverse group of software vendors in one place for State Agencies to access the best choices in platform features, quality, cost and speed of implementation.</li><li>Specialized in Unemployment Tax services and Appeals/Adjudication functions.</li><li>Evaluated business processes, anticipated requirements, uncovered areas for improvement, and developed/implemented effective solutions.</li><li>Supported the Office of Strategic Partnerships & Project Management in migration and modernization of state Unemployment Insurance agencies.</li>",
  },
  {
    title: "Research Business Analyst",
    cardImage: "assets/images/experience-page/CLVT (1).png",
    place: "Clarivate Analytics",
    time: "(2020 - 2021)",
    desp: "<li>Conducting intellectual property and trademark research and analyses through the use of proprietary software.</li><li>Analyzed and reported trademarks of interest by utilizing proprietary resources and formulating concise research strategies.</li><li>Maintained awareness of current developments in Intellectual Property and Internet trends.</li><li>Ensured a high level of confidentiality with respect to the customers and their trademarks.</li>",
  },
  {
    title: "Probation and Parole Officer, Sr.",
    cardImage: "assets/images/experience-page/IDOC.png",
    place: "Idaho Department of Correction",
    time: "(2015 - 2021)",
    desp: "<li>Employed a balance of principles related to counseling, case management, and law enforcement to ensure the safety of our communities and clients who are on adult felony probation and parole.</li><li>Trained a multitude of new hires in the areas of evidence handling, firearms maintenance, and firearm operations (legal and ethical concepts, shooting).</li>",
  },
  {
    title: "Correctional Field Training Officer",
    cardImage: "assets/images/experience-page/IDOC.png",
    place: "Idaho Department of Correction",
    time: "(2012 - 2015)",
    desp: "<li>Facilitated a protective environment by conducting required safety protocols for a population of over 2000 inmates daily. Trained and educated new and current staff members.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nebraska DOL Modernization",
    cardImage: "assets/images/experience-page/Labor-Dept-Logo.png",
    description:
      "Modernization of legacy Unemployment system to detect and prevent fraud, ensure timely payment of benefits, and promote equitable access.",
  },
  {
    title: "Job Service North Dakota DOL Modernization",
    cardImage: "assets/images/experience-page/JSND.png",
    description:
      "Modernization of legacy Unemployment system to detect and prevent fraud, ensure timely payment of benefits, and promote equitable access.",
  },
  {
    title: "Puerto Rico DOL Modernization",
    cardImage: "assets/images/experience-page/PR-DOL.png",
    description:
      "Modernization of legacy Unemployment system to detect and prevent fraud, ensure timely payment of benefits, and promote equitable access.",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section


