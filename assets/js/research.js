/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Regression Analysis and Prediction of Hospital Capacity in Idaho and Oregon",
    authors:
      "Steven Duchene",
    conferences:
      "Colorado State University Business Analytics and Information Systems Capstone",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/2023-10-01_12-33-41.jpg",
    citation: {
      vancouver:
        "Duchene, Steven. Regression Analysis and Prediction of Hospital Capacity in Idaho and Oregon. Colorado State University Business Analytics and Information Systems Capstone 2021",
    },
    abstract:
      "The COVID-19 pandemic continues to spread virtually uncontrolled, resulting in hospitals and health systems becoming inundated with critically ill patients. Given that healthcare systems are ill prepared, the consequences of being ill equipped including healthcare systems becoming overwhelmed are of critical importance. This study seeks to improve the predictive capabilities for the 2021-22 through a critical analysis of Hospital Coverage for the years 2020-21, beginning with the discovery dates of SARS-CoV-2 in the states of Idaho and Oregon. The results of this study indicate that the state of Idaho exhibits both beta and Weibull-like distributions while Oregon seems to exhibit a Poisson-type distribution. Although overall, the models appeared to exhibit moderately strong predictive capabilities, further research is necessary in the realm of predictive analytics; specifically, the creation for forecasting models such as stochastic theory mathematical models and data science/machine learning techniques.",
    absbox: "absPopup1",
  },

  {
    title: "House Price Prediction using Linear Regression and Prediction Techniques",
    authors:
      "Steven Duchene",
    conferences:
      "Colorado State University Data Science Foundation Portfolio Project",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/R_logo.svg.png",
    citation: {
      vancouver:
        "Duchene, Steven. House Price Prediction using Linear Regression and Prediction Techniques. Colorado State University Data Science Foundation Portfolio Project 2020.",
    },
    abstract:
      "The ability to predict housing prices is a complicated process that includes many different types of variables; ranging from height to age and everything in between. In real estate, predicting the actions of the housing market is crucial. Regression analysis offers a scientific approach for the valuation and prediction of real estate properties. Linear regression and prediction techniques offer a more quantitative approach to the real estate valuation process; one that can then be supplemented with the realtor's qualitative analyses and local market knowledge. The goal of this report is to utilize 24 quantitative, explanatory variables which describe residential homes in Ames, IA. The training dataset is used to train an algorithm and produce predictive results. The testing dataset is utilized to determine how well the training algorithm is able to predict for any given response variable. The R-squared value for the linear regression model was calculated to be 0.8423 or 84.23%.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
