(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),s=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"All About ",e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#resume"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return l.a.createElement("div",{key:a,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{id:"skills",className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("ul",{className:"skills"},e.skills.map(function(e,a){return l.a.createElement("li",{key:a,className:"skills"},e.skillname)})))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e,a){return l.a.createElement("div",{key:a,className:"columns portfolio-item"},l.a.createElement("a",{href:e.repo,target:"_blank"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),E={name:"Tim",fullName:"Tim Nguyen",role:"Full-Stack Developer",linkedinId:"https://www.linkedin.com/in/timng93/",phone:"604-362-9472",email:"timgabrielnguyen@gmail.com",skypeid:"timng93",roleDescription:" I am a values driven developer that is motivated by complex problems and new knowledge of the web. Although I am relatively new to the world of code, my confidence grows daily as I take on increasingly challenging projects. My dedication, hard work, and ability to learn quickly are what make me a great asset to any team.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/timng93/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/timng93",className:"fa fa-github"}],aboutme:"I had graduated with a Bachelor in Biology from UBC. However, in the summer of 2018, I explored coding and it created a spark of interest. This interest in coding led to a career switch which included enrolling at RED Academy for the Full-Stack Developer Program.",address:"Vancouver Area",education:[{UniversityName:"Harvard University - Distance Education",specialization:"React Native Certificate",MonthOfPassing:"Currently Pursuing"},{UniversityName:"Red Academy - Vancouver BC",specialization:"Full Stack Diploma",MonthOfPassing:"Oct 2018 - Mar 2019"},{UniversityName:"Brain Station- Vancouver BC",specialization:"Certificate UX Design",MonthOfPassing:"Jun 2018 - Aug 2018"},{UniversityName:"University of British Columbia - Vancouver BC",specialization:"Bachelor of Science in Biology",MonthOfPassing:"Sep 2011 - May 2015"}],work:[{CompanyName:"BC Sustainable Energy Association",specialization:"App Developer",MonthOfLeaving:"Mar",YearOfLeaving:"2019",Achievements:"Worked in a team of four to build an iOS app that helps students track environmental footprints, in under 3 weeks. Technologies involved: GraphQL, Apollo, React Native, Node. Queried data with GraphQL and built ReactNative interface."},{CompanyName:"UME Academy",specialization:"Web Developer",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Worked in a team of four to build a WordPress arcade that showcases students games, in under 3 weeks. Technologies involved: WordPress, PHP, JavaScript, CSS. Programmed with PHP to display WordPress Content and styled CSS content."},{CompanyName:"Sunny Academy",specialization:"Private Tutor",MonthOfLeaving:"Feb 2016 - Sep 2018",Achievements:"Planned sessions and taught high school students Math and Science subjects. Provide ddetailed explanations and challenged students to go beyond the curriculum."}],skills:[{skillname:"React/ React Native"},{skillname:"HTML5 & CSS3"},{skillname:"Javascript"},{skillname:"Node"},{skillname:"SQL"},{skillname:"MongoDB"},{skillname:"GraphQL"},{skillname:"Meteor"},{skillname:"WordPress"},{skillname:"PHP"}],portfolio:[{name:"Inhabitent",description:"Wordpress Site built with PHP and SASS",imgurl:"images/home-hero.jpg",repo:"https://github.com/timng93/Inhabitent"},{name:"Quotes on Dev",description:"Responsive Wordpress Site built with PHP and SASS",imgurl:"images/desktop.png",repo:"https://github.com/timng93/Project-5-Quotes-on-Dev"},,{name:"CoolIt",description:"iOs React Native App",imgurl:"images/coolIt.png",repo:"https://github.com/timng93/coolIt-winter-2019"},{name:"UME",description:"WordPress responsive site built with PHP",imgurl:"images/ume.png",repo:"https://github.com/timng93/ume-fall-2018"}]},f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:E}),l.a.createElement(h,{resumeData:E}),l.a.createElement(p,{resumeData:E}),l.a.createElement(v,{resumeData:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.33b4abfe.chunk.js.map