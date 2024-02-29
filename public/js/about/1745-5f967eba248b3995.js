(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1745],{4689:function(e,t,r){"use strict";r.d(t,{Z:function(){return CodeTabs}});var a=r(11527),n=r(82187),o=r.n(n),i=r(8039),s=r.n(i);function CodeTabs(e){let{tabs:t,onChange:r,value:n,className:i}=e,l=t.indexOf(n||t[0]);return(0,a.jsx)("div",{className:o()(s().container,i),children:(0,a.jsxs)("div",{className:s().tabs,children:[t.map((e,n)=>(0,a.jsx)("button",{className:o()(s().tab,l===n&&s().active,l+1===n&&s().afterActive,l-1===n&&s().beforeActive,0===n&&0!==l&&s().firstActive),onClick:()=>r&&r(t[n]),children:e},e)),(0,a.jsx)("div",{className:o()(s().filler,l===t.length-1&&s().fillerAfterActive)})]})})}},50055:function(e,t,r){"use strict";r.d(t,{Z:function(){return Cta}});var a=r(11527),n=r(7230),o=r(21389),i=r.n(o),s=r(85969),l=r(50959),c=r(47886);function Cta(e){let{heading:t,subheading:r,primaryCta:o="Request a demo",secondaryCta:d="Try for free",hideSecondaryCta:p=!1,maxWidth:m=600}=e,{openSalesForm:u}=(0,l.useContext)(c.G);return(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("div",{className:i().gradientWrapper,children:(0,a.jsx)("div",{className:i().maxWidthWrapper,children:(0,a.jsxs)("div",{className:i().textWrapper,style:{"--max-width":m},children:[(0,a.jsx)(s.Z,{as:"h2",children:t}),(0,a.jsx)("p",{children:r}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,{size:"large",onClick:()=>u({context:"CTA — General",title:o}),children:o}),!p&&(0,a.jsx)(n.Z,{type:"transparent",size:"large",href:"https://app.evervault.com/register",as:"a",target:"_blank",children:d})]})]})})})})}},62410:function(e,t,r){"use strict";r.d(t,{Z:function(){return Features}});var a=r(11527),n=r(51449),o=r.n(n),i=r(54286),s=r.n(i),l=r(82187),c=r.n(l),d=r(85969);let p=o()(()=>r.e(6495).then(r.bind(r,76495)),{loadableGenerated:{webpack:()=>[76495]},ssr:!1});function Features(e){let{heading:t,size:r,subheading:n,config:o,className:i}=e;return(0,a.jsx)("div",{className:c()(s().container,i),children:(0,a.jsxs)("div",{className:s().maxWidthWrapper,children:[(0,a.jsxs)("div",{className:s().heading,"data-size":r,children:[(0,a.jsx)(d.Z,{as:"h2",width:"70%",interactive:!0,children:t}),n&&(0,a.jsx)("p",{className:s().subHeading,children:n})]}),(0,a.jsx)("div",{className:s().grid,children:o.map((e,t)=>{let{title:r,features:n}=e;return(0,a.jsxs)("div",{children:[r&&(0,a.jsx)("div",{className:s().titleContainer,children:(0,a.jsx)(p,{children:r})}),(0,a.jsx)("div",{className:s().divider}),(0,a.jsx)("div",{className:s().features,children:n.map(e=>{let{icon:t,title:r,description:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:s().featureTitle,children:[t,(0,a.jsx)("h5",{children:r})]}),(0,a.jsx)("p",{children:n})]},r)})})]},r||t)})})]})})}},85969:function(e,t,r){"use strict";r.d(t,{Z:function(){return GradientText}});var a=r(11527),n=r(50959),o=r(93834),i=r.n(o);function clamp(e,t,r){return Math.min(Math.max(r,e),t)}function GradientText(e){let{as:t,className:r,interactive:o,width:s,...l}=e,c=(0,n.useRef)(),d=t||"span",p=[i().text,r].filter(Boolean).join(" ");return(0,n.useEffect)(()=>{if(!o)return;let handleMouseMove=e=>{let t=c.current,r=t.getBoundingClientRect(),a=e.clientX-r.left,n=e.clientY-r.top,o=clamp(0,100,a/r.width*100),i=clamp(0,100,n/r.height*100);t.style.setProperty("--x","".concat(o,"%")),t.style.setProperty("--y","".concat(i,"%"))};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[o]),(0,a.jsx)(d,{ref:c,style:{"--width":s},className:p,...l})}},21326:function(e,t,r){"use strict";r.d(t,{Z:function(){return Layout}});var a=r(11527),n=r(95458),o=r.n(n),i=r(47048),s=r.n(i),l=JSON.parse('{"@context":"https://schema.org","@type":"Organization","name":"Evervault","legalName":"Evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}'),c=r(98131),d=r.n(c),p=r(47920),m=r.n(p);function Layout(e){let{children:t,preview:r,title:n="Evervault — Developer building blocks for data security and compliance",description:i="Evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",socialImage:c="https://evervault.com/social/og.jpg",head:p,...u}=e;return(0,a.jsxs)("div",{className:d().layout,...u,children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"description",content:i}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),(0,a.jsx)("meta",{name:"theme-color",content:"#63e"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"/logo192.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.jsx)("meta",{property:"og:title",content:n}),(0,a.jsx)("meta",{property:"og:description",content:i}),(0,a.jsx)("meta",{property:"og:image",content:c}),(0,a.jsx)("meta",{property:"og:site_name",content:"Evervault"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@Evervault"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@Evervault"}),(0,a.jsx)("meta",{name:"twitter:title",content:n}),(0,a.jsx)("meta",{name:"twitter:description",content:i}),(0,a.jsx)("meta",{name:"twitter:image",content:c}),(0,a.jsx)("meta",{name:"twitter:image:alt",content:n}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l)}}),(0,a.jsx)(s(),{src:"https://jobs.ashbyhq.com/evervault/embed"}),p]}),r&&(0,a.jsxs)("div",{className:d().preview,children:[(0,a.jsx)("p",{children:"You are in preview mode"}),(0,a.jsx)(m(),{href:"/api/exit-preview",children:"Exit Preview"})]}),(0,a.jsx)("main",{className:d().main,children:t})]})}},9441:function(e,t){"use strict";t.Z=void 0,t.Z={'code[class*="language-"]':{color:"var(--grey-30)",background:"none",textShadow:"none",fontFamily:"var(--font-family-monospace), Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:".8em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.4",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"var(--grey-20)",background:"var(--grey-100)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"var(--font-family-monospace), Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:".95em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.4",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#272822",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"var(--grey-60)"},prolog:{color:"var(--grey-60)"},doctype:{color:"var(--grey-60)"},cdata:{color:"var(--grey-60)"},namespace:{Opacity:".7"},property:{color:"#f92672"},tag:{color:"#f92672"},constant:{color:"#f92672"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},boolean:{color:"#7546F9"},number:{color:"#f8f8f2"},selector:{color:"#a6e22e"},"attr-name":{color:"#f8f8f2"},string:{color:"var(--grey-50)"},char:{color:"#a6e22e"},builtin:{color:"#a6e22e"},inserted:{color:"#a6e22e"},operator:{color:"var(--grey-30)"},entity:{color:"#7546F9",cursor:"help"},url:{color:"#7546F9"},".language-css .token.string":{color:"#7546F9"},".style .token.string":{color:"#7546F9"},variable:{color:"#7546F9"},atrule:{color:"var(--primary-light)"},"attr-value":{color:"var(--primary-light)"},function:{color:"var(--primary-light)"},"class-name":{color:"var(--primary-light)"},keyword:{color:"#f92672"},regex:{color:"#fd971f"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},"script-punctuation":{color:"#fff"},punctuation:{color:"var(--grey-50)"},"property-access":{color:"var(--primary-light)"}}},8039:function(e){e.exports={container:"CodeTabs_container___fKbI",tabs:"CodeTabs_tabs__JW7qa",filler:"CodeTabs_filler__Dwp7Z",tab:"CodeTabs_tab__LO7L_",active:"CodeTabs_active__JXkR1",afterActive:"CodeTabs_afterActive__tesWW",beforeActive:"CodeTabs_beforeActive___mviz",fillerAfterActive:"CodeTabs_fillerAfterActive__vFWtt",firstActive:"CodeTabs_firstActive__pEGBw"}},21389:function(e){e.exports={container:"Cta_container__pNx4T",gradientWrapper:"Cta_gradientWrapper__lGHRR",maxWidthWrapper:"Cta_maxWidthWrapper__su_4C",textWrapper:"Cta_textWrapper__d5r6y"}},54286:function(e){e.exports={container:"Features_container__Cb2SR",maxWidthWrapper:"Features_maxWidthWrapper__hDSPE",heading:"Features_heading__0Kk_5",subHeading:"Features_subHeading__N7HnS",title:"Features_title__rPQTe",slide:"Features_slide__2BwyB",divider:"Features_divider__1WGjU",features:"Features_features__aEjtw",featureTitle:"Features_featureTitle__oyjT_",titleContainer:"Features_titleContainer__p9cmI"}},93834:function(e){e.exports={text:"styles_text__Fvsk7"}},98131:function(e){e.exports={layout:"Layout_layout__6J70X",main:"Layout_main__k2ohw",section:"Layout_section__n31V6",card:"Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",cardSm:"Layout_cardSm__wzRPG Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",containedSection:"Layout_containedSection__F3yCP mx-n24 mx-sm-n48 mx-md-n56 mx-lg-n64 mb-32 p-24 p-sm-48 p-sm-56 p-lg-64",postList:"Layout_postList__ngm8u",teamList:"Layout_teamList__Zp6Sg",glow:"Layout_glow__5fr_J",preview:"Layout_preview__dBvbE"}}}]);