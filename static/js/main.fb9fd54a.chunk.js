(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(20),i=a.n(c),n=(a(29),a(8)),o=a(9),r=a(11),A=a(10),l=(a(30),a(21)),d=a(1),j=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.project,t=this.props.data.github,a=this.props.data.name,s=this.props.data.description;return Object(d.jsxs)("header",{id:"home",children:[Object(d.jsx)(l.a,{type:"circle",bg:!0}),Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsx)("h1",{className:"responsive-headline",children:a}),Object(d.jsxs)("h3",{children:[s,"."]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{className:"social",children:[Object(d.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(d.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(d.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(d.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(s.Component),h=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})},e.name)}));return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("ul",{className:"social-links",children:e}),Object(d.jsx)("ul",{className:"copyright",children:Object(d.jsx)("li",{children:"\xa9 Copyright 2021 Gyanendra Das"})})]}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(s.Component),m=a.p+"static/media/profilepic.15071cac.jpg",b=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.bio,a=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,i=this.props.data.address.zip,n=this.props.data.phone,o=this.props.data.email;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:m,alt:"Nordic Giant Profile Pic"})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:t}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[a,Object(d.jsx)("br",{}),s," ",c,", ",i]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:o})]})]}),Object(d.jsx)("div",{className:"columns download",children:Object(d.jsx)("p",{children:Object(d.jsxs)("a",{href:"Gyanendra_CV.pdf",download:!0,className:"button",children:[Object(d.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),a}(s.Component),p=a(59),u=a(62),O=a(63),g=a(57),x=a(60),f=a(61),v=a(58),w=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(this.props.data)var t=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.school}),Object(d.jsxs)("p",{className:"info",children:[e.degree," ",Object(d.jsx)("span",{children:"\u2022"}),Object(d.jsx)("em",{className:"date",children:e.graduated})]}),Object(d.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.company}),Object(d.jsxs)("p",{className:"info",children:[e.title,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsx)("em",{className:"date",children:e.years})]}),Object(d.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.achievements.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("p",{className:"info",children:e.achievement})]},e.title)})),i=this.props.data.skills.map((function(t){var a="bar-expand "+t.name.toLowerCase();return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{style:{width:t.level,backgroundColor:e.getRandomColor()},className:a}),Object(d.jsx)("em",{children:t.name})]},t.name)}));return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:Object(d.jsx)("div",{className:"row item",children:Object(d.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Achievement"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:c})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"kaggle"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(g.a,{component:v.a,style:{width:"100%"},children:Object(d.jsxs)(p.a,{size:"small","aria-label":"a dense table",children:[Object(d.jsx)(x.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(O.a,{children:Object(d.jsx)("h3",{children:"Competition"})}),Object(d.jsx)(O.a,{align:"right",children:Object(d.jsx)("h3",{children:"Medal"})}),Object(d.jsx)(O.a,{align:"right",children:Object(d.jsx)("h3",{children:"Rank"})})]})}),Object(d.jsx)(u.a,{children:this.props.data.kaggle.map((function(e){return Object(d.jsxs)(f.a,{children:[Object(d.jsx)(O.a,{component:"th",scope:"row",children:Object(d.jsx)("p",{className:"info",children:e.competition})}),Object(d.jsx)(O.a,{align:"right",children:Object(d.jsx)("p",{className:"info date",children:e.medal})}),Object(d.jsx)(O.a,{align:"right",children:Object(d.jsx)("p",{className:"info date",children:e.rank})})]},e.competition)}))})]})})})})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:i})})]})]})]})}}]),a}(s.Component),N=a(16),C=a(23),y=a.n(C);var E=function(e){var t=Object(s.useState)(""),a=Object(N.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(""),o=Object(N.a)(n,2),r=o[0],A=o[1],l=Object(s.useState)(""),j=Object(N.a)(l,2),h=j[0],m=j[1],b=Object(s.useState)(""),p=Object(N.a)(b,2),u=p[0],O=p[1],g=Object(s.useState)(""),x=Object(N.a)(g,2),f=x[0],v=x[1],w=e.data.name,C=e.data.address.street,E=e.data.address.city,I=e.data.address.state,k=e.data.address.zip,Q=e.data.phone,B=e.data.contactmessage1,R=e.data.contactmessage2;return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsxs)("div",{className:"row section-head",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Get In Touch."})})}),Object(d.jsxs)("div",{className:"ten columns",children:[Object(d.jsx)("p",{className:"lead",children:B}),Object(d.jsx)("p",{className:"lead",children:R})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"eight columns",children:Object(d.jsx)("form",{id:"contactForm",name:"contact-form",onSubmit:function(e){e.preventDefault(),i("Loading"),y.a.sendForm("service_2f4ds94","template_t2e99xl",e.target,"user_x9s8y8NVhDOQ1WpFJwUwE").then((function(e){i("Success"),A(""),m(""),v(""),O("")}),(function(e){i("Failed")}))},children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",size:"35",id:"contactName",name:"user_name",value:r,onChange:function(e){return A(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",size:"35",id:"contactEmail",name:"user_email",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(d.jsx)("input",{type:"text",size:"35",id:"contactSubject",name:"subject",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message",value:u,onChange:function(e){return O(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"submit",children:"Submit"}),"Loading"===c?Object(d.jsx)("span",{id:"image-loader",children:Object(d.jsx)("img",{alt:"",src:"data:image/gif;base64,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"})}):"Success"===c?Object(d.jsxs)("span",{id:"message-success",children:[Object(d.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!"]}):"Failed"===c?Object(d.jsxs)("span",{id:"message-warning",children:[Object(d.jsx)("i",{className:"fa fa-times"})," Error ! Try Again"]}):void 0]})]})})}),Object(d.jsx)("aside",{className:"four columns footer-widgets",children:Object(d.jsxs)("div",{className:"widget widget_contact",children:[Object(d.jsx)("h4",{children:"Address and Phone"}),Object(d.jsxs)("p",{className:"address",children:[w,Object(d.jsx)("br",{}),C," ",Object(d.jsx)("br",{}),E,", ",I," ",k,Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:Q})]})]})})]})]})},I=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:e.url,title:e.title,children:[Object(d.jsx)("img",{alt:e.title,src:e.image}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.category})]})})]})})},e.title)}));return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),a}(s.Component),k=a.p+"static/media/image1.a3455a3b.jpg",Q=a.p+"static/media/image2.a3455a3b.jpg",B=a.p+"static/media/image3.a3455a3b.jpg",R=a.p+"static/media/image4.a3455a3b.jpg",D=a.p+"static/media/image5.a3455a3b.jpg",F=a.p+"static/media/image6.a3455a3b.jpg",M=a.p+"static/media/image7.a3455a3b.jpg",S=Object.freeze({main:{name:"Gyanendra Das",description:"I am a Data Science Enthusiast and I work on Machine Learning and Artificial Intelligence Projects. This is a project which is kind of my portfolio page which is done by the use of React.",image:"profilepic.jpg",bio:"Ranked Top 1 % Globally in Kaggle Competitions. Hello Everyone, Here is your Deep Learning and Machine Learning Master. I am working as a Data Scientist and have successfully completed many projects on Data Science.",contactmessage1:"Want to get in touch ?",contactmessage2:"I would love to hear from you !! Please use this form to reach me.",email:"youremailhere@gmail.com",phone:"+91-9178158633",github:"https://github.com/nordicgiant2/react-nice-resume",project:"https://github.com/nordicgiant2/react-nice-resume",address:{street:"(Nilagiri)",city:"(Balesore)",state:"(Odisha)",zip:"(766001)"},website:"http://www.timbakerdev.com",social:[{name:"linkedin",url:"https://www.linkedin.com/in/tim-baker-8420009a/",className:"fa fa-linkedin"},{name:"twitter",url:"https://www.linkedin.com/in/tim-baker-8420009a/",className:"fa fa-twitter"},{name:"twitter",url:"https://www.linkedin.com/in/tim-baker-8420009a/",className:"fa fa-stack-overflow"},{name:"github",url:"https://github.com/Luckygyana",className:"fa fa-github"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"IIT(ISM), Dhanbad",degree:"Integrated Master of Technology in Mathematics and Computing ",graduated:"2018-Present",description:"CGPA :7.76/10"}],work:[{company:"Willow.AI ",title:"Deep Leaning Research Intern ",years:"August - December 2020",description:"\xb7 Elliot waveform recognition in stock market data. Our goal is to find and identify important Elliott volatility charts, and use this function to predict the target range and the probability of success for the next trader. We propose an end-to-end trainable Deep Learning Neural Network and Recurrent Neural Network. Extensive experiments show that the proposed method consistently outperforms state-of-theart methods. Our method achieves 94.37."},{company:"Travel Buddy",title:"Machine Leaning Intern",years:"May - June 2020 ",description:"Provide two real time working model. One of them is Not safe for Work classification for both image and video. Second one is Toxic text Classification supporting multi languages. Challenge for Text is it has very imbalance data-set Overcome this issue and Transformer Model is used and got ROC accuracy of 94.3. For image Efficient Net is used and For video Efficienet Net with RNN is used."},{company:"B3 Digital Solution ",title:"Data Science Intern",years:"October 2019 - March 2020 ",description:"Analysis of business data and maximize profit. Also work on a project to Detect Breast Cancerous Tissue with image processing and it\u2019s location and shape and provide one real time working model to detect anonymous chat."}],achievements:[{title:"Kaggle Competitions Expert",achievement:"Highest Rank 1513 out of 157061 active Kagglers"},{title:"Samsung Innovation Award 2020",achievement:"Finished 1st rank among 1k+ teams"},{title:"Flipkart Grid 2.0",achievement:"National Finalist"}],kaggle:[{competition:"SIIM-ISIC Melanoma Classification",medal:"GOLD",rank:" 6/3308(Top 1%)"},{competition:"Cassava Leaf Disease Classification",medal:"SILVER",rank:" 42/3947(Top 2%)"},{competition:"Tweet Sentiment Extraction ",medal:"SILVER",rank:"  128/2227(Top 5%)"},{competition:"University of Liverpool - Ion Switching",medal:"BRONZE",rank:"  218/2618(Top 9%)"},{competition:"Riiid Answer Correctness Prediction",medal:"BRONZE",rank:" 286/3395(Top 9%)"}],skills:[{name:"C/C++",level:"70%"},{name:"Python",level:"90%"},{name:"R",level:"70%"},{name:"TensorFlow",level:"90%"},{name:"Keras",level:"85%"},{name:"Git",level:"50%"},{name:"HTML",level:"70%"},{name:"CSS",level:"60%"}]},portfolio:{projects:[{title:"Invo AI - An AI based E-Invoicing Solution",category:"Nov 2020",image:k,url:"https://github.com/Luckygyana/Invo-AI"},{title:"Brightfield to Fluorescent Microscopy Data ",category:"Oct 2020 - Ongoing",image:Q,url:""},{title:"SIIM ISIC Melanoma Classifiaction",category:"June 2020 - August 2020",image:B,url:"https://github.com/Luckygyana/siim-isic-melanoma-classification"},{title:"University of Liverpool - Ion Switching",category:"March 2020 - May 2020",image:R,url:""},{title:"Corona-Drug-Discovery",category:"May 2020 - June 2020",image:D,url:"https://github.com/Luckygyana/Corona-Drug-Discovery"},{title:"Protein-Structure-Prediction",category:"May 2020 - July 2020",image:F,url:"https://github.com/Luckygyana/Protein-Structure-Prediction"},{title:"Duplicacy - Quora Question Duplicate or Not ",category:"Feb 2020 - March 2020",image:M,url:""}]}}),U=function(e){Object(r.a)(a,e);var t=Object(A.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{data:S.main}),Object(d.jsx)(b,{data:S.main}),Object(d.jsx)(w,{data:S.resume}),Object(d.jsx)(I,{data:S.portfolio}),Object(d.jsx)(E,{data:S.main}),Object(d.jsx)(h,{data:S.main})]})}}]),a}(s.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(d.jsx)(U,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Portfolio","/service-worker.js");J?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Y(e)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.fb9fd54a.chunk.js.map