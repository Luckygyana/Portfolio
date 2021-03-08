import image1 from "../images/portfolio/image1.jpeg";
import image2 from "../images/portfolio/image2.jpeg";
import image3 from "../images/portfolio/image3.jpeg";
import image4 from "../images/portfolio/image4.jpeg";
import image5 from "../images/portfolio/image5.jpeg";
import image6 from "../images/portfolio/image6.jpeg";
import image7 from "../images/portfolio/image7.jpeg";

export const DATA = Object.freeze({
  main: {
    name: "Gyanendra Das",
    description:
      "I am a Data Science Enthusiast and I work on Machine Learning and Artificial Intelligence Projects. This is a project which is kind of my portfolio page which is done by the use of React.",
    image: "profilepic.jpg",
    bio:
      "Ranked Top 1 % Globally in Kaggle Competitions. Hello Everyone, Here is your Deep Learning and Machine Learning Master. I am working as a Data Scientist and have successfully completed many projects on Data Science.",
    contactmessage1: "Want to get in touch ?",
    contactmessage2:
      "I would love to hear from you !! Please use this form to reach me.",
    email: "gyanendralucky9337@gmail.com",
    phone: "+91-9178158633",
    github: "https://github.com/Luckygyana",
    project: "https://github.com/Luckygyana/Portfolio",
    address: {
      street: "(Nilagiri)",
      city: "(Balesore)",
      state: "(Odisha)",
      zip: "(766001)",
    },
    website: "http://www.timbakerdev.com",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/tim-baker-8420009a/",
        className: "fa fa-linkedin",
      },
      {
        name: "twitter",
        url: "https://www.linkedin.com/in/tim-baker-8420009a/",
        className: "fa fa-twitter",
      },
      {
        name: "twitter",
        url: "https://www.linkedin.com/in/tim-baker-8420009a/",
        className: "fa fa-stack-overflow",
      },
      {
        name: "github",
        url: "https://github.com/Luckygyana",
        className: "fa fa-github",
      },
    ],
  },
  resume: {
    skillmessage:
      "Here you can create a short write-up of your skills to show off to employers",
    education: [
      {
        school: "IIT(ISM), Dhanbad",
        degree: "Integrated Master of Technology in Mathematics and Computing ",
        graduated: "2018-Present",
        description: "CGPA :7.76/10",
      },
    ],
    work: [
      {
        company: "Willow.AI ",
        title: "Deep Leaning Research Intern ",
        years: "August - December 2020",
        description:
          "· Elliot waveform recognition in stock market data. Our goal is to find and identify important Elliott volatility charts, and use this function to predict the target range and the probability of success for the next trader. We propose an end-to-end trainable Deep Learning Neural Network and Recurrent Neural Network. Extensive experiments show that the proposed method consistently outperforms state-of-theart methods. Our method achieves 94.37.",
      },
      {
        company: "Travel Buddy",
        title: "Machine Leaning Intern",
        years: "May - June 2020 ",
        description:
          "Provide two real time working model. One of them is Not safe for Work classification for both image and video. Second one is Toxic text Classification supporting multi languages. Challenge for Text is it has very imbalance data-set Overcome this issue and Transformer Model is used and got ROC accuracy of 94.3. For image Efficient Net is used and For video Efficienet Net with RNN is used.",
      },
      {
        company: "B3 Digital Solution ",
        title: "Data Science Intern",
        years: "October 2019 - March 2020 ",
        description:
          "Analysis of business data and maximize profit. Also work on a project to Detect Breast Cancerous Tissue with image processing and it’s location and shape and provide one real time working model to detect anonymous chat.",
      },
    ],
    achievements: [
      {
        title: "Kaggle Competitions Expert",
        achievement: "Highest Rank 1513 out of 157061 active Kagglers",
      },
      {
        title: "Samsung Innovation Award 2020",
        achievement: "Finished 1st rank among 1k+ teams",
      },
      {
        title: "Flipkart Grid 2.0",
        achievement: "National Finalist",
      },
    ],
    kaggle: [
      {
        competition: "SIIM-ISIC Melanoma Classification",
        medal: "GOLD",
        rank: " 6/3308(Top 1%)",
      },
      {
        competition: "Cassava Leaf Disease Classification",
        medal: "SILVER",
        rank: " 42/3947(Top 2%)",
      },
      {
        competition: "Tweet Sentiment Extraction ",
        medal: "SILVER",
        rank: "  128/2227(Top 5%)",
      },
      {
        competition: "University of Liverpool - Ion Switching",
        medal: "BRONZE",
        rank: "  218/2618(Top 9%)",
      },
      {
        competition: "Riiid Answer Correctness Prediction",
        medal: "BRONZE",
        rank: " 286/3395(Top 9%)",
      },
    ],
    skills: [
      {
        name: "C/C++",
        level: "70%",
      },
      {
        name: "Python",
        level: "90%",
      },
      {
        name: "R",
        level: "70%",
      },
      {
        name: "TensorFlow",
        level: "90%",
      },
      {
        name: "Keras",
        level: "85%",
      },
      {
        name: "Git",
        level: "50%",
      },
      {
        name: "HTML",
        level: "70%",
      },
      {
        name: "CSS",
        level: "60%",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Invo AI - An AI based E-Invoicing Solution",
        category: "Nov 2020",
        image: image1,
        url: "https://github.com/Luckygyana/Invo-AI",
      },
      {
        title: "Brightfield to Fluorescent Microscopy Data ",
        category: "Oct 2020 - Ongoing",
        image: image2,
        url: "",
      },
      {
        title: "SIIM ISIC Melanoma Classifiaction",
        category: "June 2020 - August 2020",
        image: image3,
        url: "https://github.com/Luckygyana/siim-isic-melanoma-classification",
      },
      {
        title: "University of Liverpool - Ion Switching",
        category: "March 2020 - May 2020",
        image: image4,
        url: "",
      },
      {
        title: "Corona-Drug-Discovery",
        category: "May 2020 - June 2020",
        image: image5,
        url: "https://github.com/Luckygyana/Corona-Drug-Discovery",
      },
      {
        title: "Protein-Structure-Prediction",
        category: "May 2020 - July 2020",
        image: image6,
        url: "https://github.com/Luckygyana/Protein-Structure-Prediction",
      },
      {
        title: "Duplicacy - Quora Question Duplicate or Not ",
        category: "Feb 2020 - March 2020",
        image: image7,
        url: "",
      },
    ],
  },
});
