"use strict";(self.webpackChunkdecode=self.webpackChunkdecode||[]).push([[562],{9758:function(e,n,o){o.d(n,{Z:function(){return s}});var r=o(2791),t=o(9439),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"200px",o=(0,r.useState)(!1),i=(0,t.Z)(o,2),a=i[0],s=i[1];return(0,r.useEffect)((function(){var o=new IntersectionObserver((function(e){var n=(0,t.Z)(e,1)[0];s(n.isIntersecting)}),{rootMargin:n});return e.current&&o.observe(e.current),function(){e.current&&o.unobserve(e.current)}}),[]),a},a=o(184),s=function(e){var n=(0,r.useRef)(),o=i(n);return(0,a.jsx)("div",{ref:n,className:o?"zoom-in ":"zoom-out ",children:e.children})}},6196:function(e,n,o){o(2791);var r=o(9758),t=o(184);n.Z=function(e){var n=e.url,o=(e.alt,e.mediatype,e.description);return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)("div",{className:"preview",style:{backgroundImage:"url(".concat(n,")")}}),o?(0,t.jsx)("p",{className:"image-description",children:o}):(0,t.jsx)("p",{className:"image-description",children:"\xa0"})]})}},7647:function(e,n,o){var r=o(9439),t=o(2791),i=o(1087),a=(o(6196),o(184));n.Z=function(e){var n=e.id,o=e.title,s=e.client,l=(e.completeddate,e.background),d=e.theme,u=e.keywords,g=e.hover,c=(e.media,"/work/"+o.toLowerCase().replace(/ /g,"_")),p=(0,t.useState)(!1),h=(0,r.Z)(p,2),f=h[0],m=h[1];return(0,a.jsxs)("li",{className:"project-card",onMouseEnter:function(e){e.target.dataset.background;m(!0)},onMouseLeave:function(e){m(!1)},children:[(0,a.jsx)("div",{className:f?"zoom-in":"zoom-out",children:(0,a.jsx)("div",{className:"background-image",style:{backgroundColor:d&&d.background?d.background:"white",backgroundImage:"url(".concat(g,")")}})}),(0,a.jsxs)(i.rU,{to:c,children:[(0,a.jsxs)("p",{children:[" ",s]}),(0,a.jsx)("h2",{style:{color:l||(d&&d.primary?d.primary:"white")},children:o}),(0,a.jsx)("ul",{className:"pills",children:u?u.map((function(e,n){return(0,a.jsx)("li",{children:e},n)})):""})]})]},n)}},8562:function(e,n,o){o.r(n);var r=o(1413),t=o(9439),i=o(2791),a=o(7647),s=o(9758),l=o(5146),d=o(184);n.default=function(){var e=(0,l.mW)(),n=(0,i.useState)(e),o=(0,t.Z)(n,2),u=o[0],g=o[1],c=(0,i.useState)(""),p=(0,t.Z)(c,2),h=(p[0],p[1]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"project-list-hero",children:(0,d.jsx)("div",{className:"section-inner",children:(0,d.jsx)("div",{className:"section-middle",children:(0,d.jsx)(s.Z,{children:(0,d.jsx)("h1",{children:"Work"})})})})}),(0,d.jsx)("section",{className:"project-list-listings",children:(0,d.jsxs)("div",{className:"section-inner",children:[(0,d.jsx)("div",{className:"search-wrapper",children:(0,d.jsx)("input",{type:"search",onChange:function(e){var n=e.target.value.toLowerCase();if(n.length>=2||""==n){var o=(0,l.No)(n);g(o)}h(n)},placeholder:"search",className:"search-projects"})}),(0,d.jsx)("ul",{className:"project-list",children:u&&u.map((function(e,n){return(0,i.createElement)(a.Z,(0,r.Z)((0,r.Z)({},e),{},{key:n}))}))})]})})]})}},5146:function(e,n,o){o.d(n,{e5:function(){return a},mW:function(){return t},No:function(){return i}});var r=JSON.parse('{"a":[{"id":"0001","title":"Open Outdoor Identity","focus":"true","client":"Open Outdoor","introduction":"Logo and Identity for an out of home media company","description":"## This is a test  \\n Hello world how are you? \\n > Quote text over a couple of lines \\n Second line of quote.","completeddate":"1666782","theme":{"background":"#688A92","primary":"#fc6f03"},"logo":"/open/logo-white-01.svg","hero":"/open/hero-background.jpg","hover":"/open/hero-background.jpg","herodetail":"/open/background-detail-01.svg","media":[{"url":"/open/hero-background.jpg","alt":"Background","description":"Background for Open Outdoor work"},{"url":"/open/open.png","alt":"Open stationery","description":"Stationery"},{"url":"/open/logo-02-01.svg","alt":"Logo","description":"Logo"},{"url":"/open/openBrochure.png","alt":"Direct Marketing foldout","description":"Direct Marketing foldout"}],"keywords":["Identity","Logo","open"]},{"id":"0002","title":"Hastings Fat Tuesday Music Festival","focus":"true","client":"Hastings Fat Tuesday","introduction":"Identity and promotional material for the UK\'s largest Mardi Gras festival","description":"## This is a test  \\n Hello world how are you? \\n > Quote text over a couple of lines \\n Second line of quote.","completeddate":"1666782","theme":{"background":"#0E0F2A","primary":"#FD24FB"},"logo":"/fattuesday/FT2_badge_Reversed.svg","hero":"/fattuesday/background.jpeg","hover":"/fattuesday/background.jpeg","herodetail":"","media":[{"url":"/fattuesday/logo.svg","description":"Logo roundel","alt":"Logo roundel"},{"url":"/fattuesday/logotype.svg","description":"Logotype","alt":"Logotype"},{"url":"/fattuesday/imagePlaneFT_12pp.jpg","description":"12pp foldout brochure","alt":"12pp foldout brochure"},{"url":"/fattuesday/IMG_0099.jpg","description":"4 sheet theatre poster","alt":"4 sheet theatre poster"},{"url":"/fattuesday/IMG_0102.jpeg","description":"Theatre banner","alt":"Theatre banner"},{"url":"/fattuesday/IMG_0096.jpeg","description":"8 sheet combination poster","alt":"8 sheet combination poster"}],"keywords":["Identity","Logo","Hastings"]},{"id":"0003","title":"My Favourite Musical Moment","client":"Vodafone","introduction":"In-store animations","description":"## Brief \\n To create animated POS displays to support Vodofone\'s \'My Favourite Musical Moment\' campaign in-store","focus":"true","theme":{"background":"#DD000E","primary":"black"},"logo":"/Vodofone/vodafone-reverse.svg","hero":"/vodofone/hero-01.svg","hover":"/vodofone/hero-01.svg","media":[{"url":"/vodofone/K_Pietersen.jpg","source":"https://vimeo.com/771165710","mediatype":"video","poster":"/vodofone/K_Pietersen.jpg","description":"Kevin Pietersen: Bon Jovi","alt":"Kevin Pietersen: Bon Jovi"},{"url":"/vodofone/Kinks_1.jpg","source":"https://vimeo.com/771165629","mediatype":"video","poster":"/vodofone/Kinks_1.jpg","description":"Me: The Kinks","alt":"Me: The Kinks"},{"url":"/vodofone/L_Hamilton.jpg","source":"https://vimeo.com/771165578","mediatype":"video","poster":"/vodofone/L_Hamilton.jpg","description":"Lewis Hamilton: Bob Marley","alt":"Lewis Hamilton: Bob Marley"},{"url":"/vodofone/M_Vaughan.jpg","source":"https://vimeo.com/771165449","mediatype":"video","poster":"/vodofone/M_Vaughan.jpg","description":"Michael Vaughan: Oasis","alt":"Michael Vaughan: Oasis"}],"keywords":["Animation","Typeography","Vodofone"]},{"id":"0004","client":"Wonder Online","title":"Identity and packaging","introduction":"Logo and identity design","description":"","focus":"true","logo":"/wonder/wordmark_leaf_Reversed_Reversed.svg","hero":"/wonder/hero-01.svg","hover":"/wonder/hero-01.svg","theme":{"background":"#0C171A","primary":"#D93F1A"},"media":[{"url":"/wonder/logo.svg","alt":"Placeholder Image"},{"url":"/wonder/stationery.png","alt":"Placeholder Image"},{"url":"/wonder/exterior.opensoon.png","alt":"Placeholder Image"},{"url":"/wonder/bag.JPG","alt":"Placeholder Image"}],"keywords":["Typeography","Wonder"]},{"id":"0004","client":"NLCS","title":"North London Collegiate School","introduction":"Publications","description":"## Testimonial \\n >Wishing to update the format of our school alumnae magazine we approached several designers for their ideas. Jay\u2019s design was the exact fresh, modern yet classic style we wanted. Jay redesigned our publication and we worked on the production of it every year to an excellent standard. He is extremely easy to work with and would gladly spend long periods of time going through every small detail with me. \\n\\n Carolina Jayson \\n\\n Alumnae & Development Officer NLCS ","logo":"/nlcs/nlcs_logo.svg","hero":"/nlcs/hover.png","hover":"/nlcs/hover.png","herodetail":"/nlcs/balloon.png","theme":{"background":"#0C171A","primary":"#4C1218"},"media":[{"url":"/nlcs/online.21.cover.2.png","alt":"Cover of issue 21 Online Magazine ","description":"Cover of issue 21 Online Magazine "},{"url":"/nlcs/online.21.2.png","alt":"Spread in issue 21 Online Magazine","description":"Spread in issue 21 Online Magazine"},{"url":"/nlcs/online.22.cover.2.png","alt":"Cover of issue 22 Online Magazine ","description":"Cover of issue 22 Online Magazine "},{"url":"/nlcs/online.22.2.png","alt":"Spread in issue 22 Online Magazine","description":"Spread in issue 22 Online Magazine"},{"url":"/nlcs/online.23.cover.2.png","alt":"Cover of issue 23 Online Magazine ","description":"Cover of issue 23 Online Magazine "},{"url":"/nlcs/online.23.2.png","alt":"Spread in issue 23 Online Magazine","description":"Spread in issue 23 Online Magazine"},{"url":"/nlcs/online.24.cover.2.png","alt":"Cover of issue 24 Online Magazine ","description":"Cover of issue 24 Online Magazine "},{"url":"/nlcs/online.24.2.png","alt":"Spread in issue 24 Online Magazine","description":"Spread in issue 24 Online Magazine"},{"url":"/nlcs/AnnualFundA5.3.png","alt":"8 page leaflet for the Annual Fund","description":"8 page leaflet for the Annual Fund"}],"keywords":["NLCS","Publications"]},{"id":"0004","client":"Hastings Fat Tuesday","title":"The Stinger","introduction":"Local Independent Music Magazine","description":"","logo":"/stinger/stinger_logo.svg","hero":"/stinger/hero.png","hover":"/stinger/hero.png","herodetail":"","theme":{"background":"#FFDE2E","primary":"#285595"},"media":[{"url":"/stinger/stinger.1.cover.png","alt":"Issue 1 cover"},{"url":"/stinger/stinger.1.spread.png","alt":"Issue 1 cover"},{"url":"/stinger/stinger.2.cover.png","alt":"Issue 2 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.2.spread.png","alt":"Issue 2 spread"},{"url":"/stinger/stinger.3.cover.png","alt":"Issue 3 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.3.spread.png","alt":"Issue 3 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.4.cover.png","alt":"Issue 4 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.4.spread.png","alt":"Issue 4 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.5.cover.png","alt":"Issue 5 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.5.spread.png","alt":"Issue 5 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.6.cover.png","alt":"Issue 6 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.6.spread.png","alt":"Issue 6 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.7.cover.png","alt":"Issue 7 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.7.spread.png","alt":"Issue 7 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.8.cover.png","alt":"Issue 8 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.8.spread.png","alt":"Issue 8 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.9.cover.png","alt":"Issue 9 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.9.spread.png","alt":"Issue 9 spread","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.10.cover.png","alt":"Issue 10 cover","description":"8 page leaflet for the Annual Fund"},{"url":"/stinger/stinger.10.spread.png","alt":"Issue 10 spread","description":"8 page leaflet for the Annual Fund"}],"keywords":["Stinger","Hastings","Publications"]},{"id":"0004","client":"TeelaRoe","title":"TeelaRoe","introduction":"Launcing an Independent Estate Agency","description":"","logo":"/teelaroe/tr.logo.svg","hero":"/teelaroe/hero.png","hover":"/teelaroe/hero.png","herodetail":"","theme":{"background":"#00958B","primary":"#ffffff"},"media":[{"url":"/teelaroe/logo.svg","alt":"TeelaRoe Logo"},{"url":"/teelaroe/illuminatedLogo.png","alt":"Illuminated Sign"},{"url":"/teelaroe/stationery.png","alt":"Stationery"},{"url":"/teelaroe/lettings4.png","alt":"Listings ad"},{"url":"/teelaroe/listing.png","alt":"Lettings leaflet"},{"url":"/teelaroe/thaw4pp.png","alt":"Thaw leaflet"},{"url":"/teelaroe/salesign.2.png","alt":"Agent\'s sign"}],"keywords":["identity","logo","estate agent","branding","Publications"]},{"id":"0004","client":"Peninsula Land","title":"Peninsula Identity","introduction":"A Redesign for a development company","description":"","logo":"/peninsula/peninsula_logo.svg","hero":"","hover":"","herodetail":"/peninsula/peninsula_logo.svg","theme":{"background":"#B3A373","primary":"#ffffff"},"media":[{"url":"/peninsula/logo.svg","alt":"Peninsula Logo"},{"url":"/peninsula/stationery.png","alt":"Stationery"}],"keywords":["identity","logo","estate agent","branding","Publications"]},{"id":"0004","client":"NMoC","title":"National Museum of Comedy","introduction":"Ongoing proposal for a National Museum dedicated to comedy","description":"","logo":"/museum_comedy/nmoc_logo.svg","hero":"/museum_comedy/hero.svg","hover":"/museum_comedy/hero.svg","herodetail":"","theme":{"background":"#191926","primary":"#ffffff"},"media":[{"url":"/museum_comedy/logo.svg","alt":"NMoC Logo"},{"url":"/museum_comedy/logo_colour.svg","alt":"NMoC Logo"},{"url":"/museum_comedy/stationery.png","alt":"Stationery"}],"keywords":["identity","logo","estate agent","branding","Publications"]}]}');function t(){return r.a}function i(e){return r.a.filter((function(n){return(n.keywords||[]).toString().toLowerCase().includes(e)}))}function a(e){return r.a.filter((function(n){var o=n.title.toLowerCase().replace(/ /g,"_");return e==o}))[0]}}}]);
//# sourceMappingURL=562.e484c225.chunk.js.map