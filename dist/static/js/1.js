webpackJsonp([1],{"4Z3T":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("vhM+");e.default={props:{props:{type:[Object,Array]}},data:function(){return{options:{root:null,rootMargin:"0px",threshold:[.4]}}},mixins:[s.onScroll]}},"6W5s":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("vhM+");e.default={mixins:[s.onScroll],props:{props:{type:[Object,Array]}},data:function(){return{options:{root:null,rootMargin:"0px",threshold:[.4]}}}}},"7Hie":function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-why"},[o("div",{staticClass:"custom-home-why__container"},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"custom-home-why__column--one"},[o("div",{staticClass:"custom-home-why__background"}),o("h1",{staticClass:"custom-home-why__title",class:{"custom-home-why__title--active":t.active},domProps:{innerHTML:t._s(t.props.title)}})]),o("div",{staticClass:"custom-home-why__column--two"},t._l(t.props.column_one,function(e,s){return o("div",{key:"option-"+s,staticClass:"custom-home-why__option custom-home-why__option--one",class:{"custom-home-why__option--one--active":t.active}},[o("div",{staticClass:"custom-home-why__subtitle",domProps:{innerHTML:t._s(e.subtitle)}}),o("div",{staticClass:"custom-home-why__body",domProps:{innerHTML:t._s(e.body)}})])}),0),o("div",{staticClass:"custom-home-why__column--three"},t._l(t.props.column_two,function(e,s){return o("div",{key:"option-"+s,staticClass:"custom-home-why__option custom-home-why__option--two",class:{"custom-home-why__option--two--active":t.active}},[o("div",{staticClass:"custom-home-why__subtitle",domProps:{innerHTML:t._s(e.subtitle)}}),o("div",{staticClass:"custom-home-why__body",domProps:{innerHTML:t._s(e.body)}})])}),0)])])},i=[]},"7ihl":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{props:{type:[Object,Array]}}}},"8HIk":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("vhM+");e.default={props:{props:{type:[Object,Array]}},data:function(){return{options:{root:null,rootMargin:"0px",threshold:[.4]}}},mixins:[s.onScroll]}},"9VZE":function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-patients"},t._l(t.props.patients,function(e,s){return o("router-link",{key:"patient-"+s,staticClass:"custom-home-patients__patient",attrs:{to:e.link}},[o("BaseLazyBg",{staticClass:"custom-home-patients__image",attrs:{src:e.image}}),o("h3",{staticClass:"custom-home-patients__title",domProps:{innerHTML:t._s(e.title)}})],1)}),1)},i=[]},FFkO:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.props?o("div",{staticClass:"pages-home"},[o("HeroHome",{attrs:{props:t.props.hero_home}}),o("CustomHomeWelcome",{attrs:{props:t.props.home_welcome}}),o("CustomHomeWhy",{attrs:{props:t.props.home_why}}),o("CustomHomeTestimonials",{attrs:{props:t.props.home_testimonials}}),o("BlockGradImage",{attrs:{props:t.props.gradient_image}}),o("CustomHomeBanner",{attrs:{props:t.props.home_banner}}),o("CustomHomePatients",{attrs:{props:t.props.home_patients}}),o("CustomHomeLifetime",{attrs:{props:t.props.home_lifetime}})],1):t._e()},i=[]},LwIM:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=m(o("kzLH")),i=m(o("nvA2")),a=m(o("guSg")),n=m(o("h6ml")),r=m(o("hecY")),c=m(o("grE0")),l=m(o("NQx9")),u=m(o("uTyu"));function m(t){return t&&t.__esModule?t:{default:t}}e.default={computed:{props:function(){return this.$store.state.pages.home}},components:{HeroHome:s.default,CustomHomeWelcome:i.default,CustomHomeWhy:a.default,CustomHomeTestimonials:n.default,BlockGradImage:r.default,CustomHomeBanner:c.default,CustomHomePatients:l.default,CustomHomeLifetime:u.default}}},NQx9:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7ihl"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("9VZE"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},OZb2:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.props?o("div",{staticClass:"hero-home"},[o("div",{staticClass:"hero-home__background",style:{backgroundImage:"url("+t.props.image+")"}}),o("div",{staticClass:"hero-home__container"},[o("div",{staticClass:"hero-home__column"},[o("div",{staticClass:"hero-home__title hero-text--home",domProps:{innerHTML:t._s(t.props.title)}}),o("a",{staticClass:"hero-home__button openchair-widget",domProps:{innerHTML:t._s(t.props.button)}}),o("div",{staticClass:"hero-home__card",class:{"hero-home__card--animate":!t.$store.state.loaded}},[o("h4",{staticClass:"hero-home__title-card",domProps:{innerHTML:t._s(t.props.card.title)}}),o("div",{staticClass:"hero-home__body",domProps:{innerHTML:t._s(t.props.card.body)}}),o("div",{staticClass:"hero-home__details",domProps:{innerHTML:t._s(t.props.card.details)}}),o("router-link",{staticClass:"hero-home__button-card",attrs:{to:t.props.card.button_link},domProps:{innerHTML:t._s(t.props.card.button)}})],1)])]),o("div",{staticClass:"hero-home__card-container"},[o("div",{staticClass:"hero-home__card hero-home__card--mobile",class:{"hero-home__card--animate":!t.$store.state.loaded}},[o("h4",{staticClass:"hero-home__title-card",domProps:{innerHTML:t._s(t.props.card.title)}}),o("div",{staticClass:"hero-home__button-container"},[o("BaseIcon",{staticClass:"hero-home__icon",attrs:{name:"chevron_02"}}),o("div",{staticClass:"hero-home__button-details",class:{"hero-home__button-details--hide":t.details},domProps:{innerHTML:t._s(t.details?"Hide Details":"Show Details")},on:{click:t.toggleDetails}})],1),o("div",{staticClass:"hero-home__content",class:{"hero-home__content--active":t.details}},[o("div",{staticClass:"hero-home__body",domProps:{innerHTML:t._s(t.props.card.body)}}),o("div",{staticClass:"hero-home__details",domProps:{innerHTML:t._s(t.props.card.details)}})]),o("router-link",{staticClass:"hero-home__button-card",attrs:{to:t.props.card.button_link},domProps:{innerHTML:t._s(t.props.card.button)}})],1)])]):t._e()},i=[]},YdSA:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"block-grad-image",attrs:{id:t.props.id}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"block-grad-image__container"},[o("div",{staticClass:"block-grad-image__column--left"},[o("h1",{staticClass:"block-grad-image__title",class:{"block-grad-image__title--active":t.active},domProps:{innerHTML:t._s(t.props.title)}}),o("h4",{staticClass:"block-grad-image__subtitle",domProps:{innerHTML:t._s(t.props.subtitle)}}),o("div",{staticClass:"block-grad-image__body",domProps:{innerHTML:t._s(t.props.body)}}),o("router-link",{staticClass:"block-grad-image__button",attrs:{to:t.props.button_link}},[o("BaseIcon",{staticClass:"block-grad-image__icon",attrs:{name:"chevron_02"}}),o("div",{staticClass:"block-grad-image__button-title",domProps:{innerHTML:t._s(t.props.button)}})],1)],1)]),o("BaseLazyBg",{staticClass:"block-grad-image__image",class:{"block-grad-image__image--active":t.active},attrs:{src:t.props.image}})],1)},i=[]},"as/A":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("vhM+");e.default={props:{props:{type:[Object,Array]}},data:function(){return{options:{root:null,rootMargin:"0px",threshold:[.4]}}},mixins:[s.onScroll]}},gGWE:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-welcome"},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"custom-home-welcome__container"},[o("div",{staticClass:"custom-home-welcome__column"},[o("h1",{staticClass:"custom-home-welcome__title",class:{"custom-home-welcome__title--active":t.active},domProps:{innerHTML:t._s(t.props.title)}}),o("div",{staticClass:"custom-home-welcome__body",domProps:{innerHTML:t._s(t.props.body)}}),o("div",{staticClass:"custom-home-welcome__example"},[o("div",{staticClass:"custom-home-welcome__column--one"},[o("div",{staticClass:"custom-home-welcome__group"},[o("BaseIcon",{staticClass:"custom-home-welcome__icon",attrs:{name:t.props.left.icon}}),o("h4",{staticClass:"custom-home-welcome__subtitle",domProps:{innerHTML:t._s(t.props.left.subtitle)}})],1)]),o("div",{staticClass:"custom-home-welcome__column--two"},[o("div",{staticClass:"custom-home-welcome__group"},[o("BaseIcon",{staticClass:"custom-home-welcome__icon",attrs:{name:"plus"}}),o("h4",{staticClass:"custom-home-welcome__and"},[t._v("&")])],1)]),o("div",{staticClass:"custom-home-welcome__column--three"},[o("div",{staticClass:"custom-home-welcome__group"},[o("BaseIcon",{staticClass:"custom-home-welcome__icon",attrs:{name:t.props.right.icon}}),o("h4",{staticClass:"custom-home-welcome__subtitle",domProps:{innerHTML:t._s(t.props.right.subtitle)}})],1)])]),o("div",{staticClass:"custom-home-welcome__example--two"},[t._v("HIGH QUALITY RESULTS")])])])])},i=[]},grE0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("8HIk"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("tb6Q"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},guSg:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("pZTL"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("7Hie"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},h6ml:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("kCp+"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("oC4k"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},hecY:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("6W5s"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("YdSA"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},i5JZ:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-lifetime"},t._l(t.props.options,function(e,s){return o("div",{key:"option-"+s,staticClass:"custom-home-lifetime__option"},[o("BaseLazyBg",{staticClass:"custom-home-lifetime__image",attrs:{src:e.image}}),o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"custom-home-lifetime__container"},[o("h1",{staticClass:"custom-home-lifetime__title",class:{"custom-home-lifetime__title--active":t.active},domProps:{innerHTML:t._s(e.title)}}),o("h4",{staticClass:"custom-home-lifetime__subtitle",domProps:{innerHTML:t._s(e.subtitle)}}),e.button_learn_link?o("div",{staticClass:"custom-home-lifetime__buttons"},[o("router-link",{staticClass:"custom-home-lifetime__button",attrs:{to:e.button_learn_link}},[o("BaseIcon",{staticClass:"custom-home-lifetime__icon",attrs:{name:"chevron_02"}}),o("div",{staticClass:"custom-home-lifetime__button-title"},[t._v("Learn More")])],1)],1):t._e(),o("div",{staticClass:"custom-home-lifetime__buttons"},[o("router-link",{staticClass:"custom-home-lifetime__button-request",attrs:{to:e.button_link},domProps:{innerHTML:t._s(e.button)}})],1)])],1)}),0)},i=[]},"kCp+":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(o("Xxa5")),i=n(o("exGp")),a=o("vhM+");function n(t){return t&&t.__esModule?t:{default:t}}e.default={props:{props:{type:[Object,Array]}},data:function(){return{show:0,options:{root:null,rootMargin:"0px",threshold:[.4]}}},mixins:[a.onScroll],mounted:function(){var t=this;return(0,i.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setInterval(function(){t.show===t.props.testimonials.length-1?t.show=0:t.show++},7500);case 1:case"end":return e.stop()}},e,t)}))()},methods:{moveSlide:function(t){this.show=t},setSlide:function(t){var e=this;this.show=t,setInterval(function(){e.setInterval()},7500)},nextSlide:function(){this.show===this.props.testimonials.length-1?this.show=0:this.show++},prevSlide:function(){0===this.show?this.show=this.props.testimonials.length-1:this.show--}}}},kzLH:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("qUdq"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("OZb2"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},nU8l:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("LwIM"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("FFkO"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},nvA2:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("as/A"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("gGWE"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports},oC4k:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"custom-home-testimonials"},[o("div",{staticClass:"custom-home-testimonials__container"},[o("div",{staticClass:"custom-home-testimonials__column--left"},[o("h1",{staticClass:"custom-home-testimonials__title",class:{"custom-home-testimonials__title--active":t.active},domProps:{innerHTML:t._s(t.props.title)}}),o("BaseIcon",{staticClass:"custom-home-testimonials__quotes",attrs:{name:"quote"}}),o("div",{staticClass:"custom-home-testimonials__testimonial-container"},[o("div",{staticClass:"custom-home-testimonials__chevron--left",on:{click:t.prevSlide}},[o("BaseIcon",{staticClass:"custom-home-testimonials__chevron",attrs:{name:"chevron"}})],1),o("div",{staticClass:"custom-home-testimonials__chevron--right",on:{click:t.nextSlide}},[o("BaseIcon",{staticClass:"custom-home-testimonials__chevron",attrs:{name:"chevron"}})],1),o("div",{staticClass:"custom-home-testimonials__testimonials"},t._l(t.props.testimonials,function(e,s){return o("div",{key:"testimonial-"+s,staticClass:"custom-home-testimonials__testimonial",class:{"custom-home-testimonials__testimonial--active":t.show===s}},[o("div",{staticClass:"custom-home-testimonials__body",domProps:{innerHTML:t._s(e.body)}}),o("br"),o("h5",{staticClass:"custom-home-testimonials__name",domProps:{innerHTML:t._s(e.name)}})])}),0)]),o("div",{staticClass:"custom-home-testimonials__nav-container"},t._l(t.props.testimonials,function(e,s){return o("div",{key:"nav-"+s,staticClass:"custom-home-testimonials__nav",on:{click:function(e){return t.setSlide(s)}}},[o("div",{staticClass:"custom-home-testimonials__circle",class:{"custom-home-testimonials__circle--active":t.show===s}})])}),0)],1),o("div",{staticClass:"custom-home-testimonials__column--right"},[o("h4",{staticClass:"custom-home-testimonials__subtitle",class:{"custom-home-testimonials__subtitle--active":t.active},domProps:{innerHTML:t._s(t.props.subtitle)}}),o("BaseLazyBg",{staticClass:"custom-home-testimonials__image",class:{"custom-home-testimonials__image--active":t.active},attrs:{src:t.props.background}})],1)])])},i=[]},pZTL:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("vhM+");e.default={props:{props:{type:[Object,Array]}},data:function(){return{options:{root:null,rootMargin:"0px",threshold:[.05]}}},mixins:[s.onScroll]}},qUdq:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{props:{type:[Object,Array]}},data:function(){return{details:!1}},methods:{toggleDetails:function(){this.details=!this.details}}}},tb6Q:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i});var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-banner"},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onScroll,options:t.options},expression:"{ active: true, callback: onScroll, options: options }"}],staticClass:"custom-home-banner__container"},[o("div",{staticClass:"custom-home-banner__column--right"},[o("h1",{staticClass:"custom-home-banner__title",class:{"custom-home-banner__title--active":t.active},domProps:{innerHTML:t._s(t.props.title)}}),o("div",{staticClass:"custom-home-banner__button-container"},[t._l(t.props.buttons,function(e,s){return"Schedule Online"!==e.button?o("router-link",{key:"button-"+s,staticClass:"custom-home-banner__button",attrs:{to:e.button_link}},[o("div",{staticClass:"custom-home-banner__button-title",domProps:{innerHTML:t._s(e.button)}}),o("BaseIcon",{staticClass:"custom-home-banner__icon",attrs:{name:"arrow"}})],1):t._e()}),t._l(t.props.buttons,function(e,s){return"Schedule Online"===e.button?o("a",{key:"button-"+s,staticClass:"custom-home-banner__button openchair-widget"},[o("div",{staticClass:"custom-home-banner__button-title",domProps:{innerHTML:t._s(e.button)}}),o("BaseIcon",{staticClass:"custom-home-banner__icon",attrs:{name:"arrow"}})],1):t._e()})],2)])]),o("BaseLazyBg",{staticClass:"custom-home-banner__image",attrs:{src:t.props.image}})],1)},i=[]},uTyu:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("4Z3T"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);var n=o("i5JZ"),r=o("XyMi"),c=Object(r.a)(i.a,n.a,n.b,!1,null,null,null);e.default=c.exports}});