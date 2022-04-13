"use strict";(self["webpackChunkcreative_project_4"]=self["webpackChunkcreative_project_4"]||[]).push([[443],{3768:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SavedImagesComponent",{attrs:{currentFavorites:e.currentFavorites}})},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[this.$root.$data.isLoggedIn?e._e():a("div",{attrs:{id:"login-prompt"}},[a("p",[e._v("You are not logged in yet. Please log in to browse.")])]),this.$root.$data.isLoggedIn?a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.dateWasSelected,expression:"!dateWasSelected"}],attrs:{id:"saved-images-page"}},[a("p",[e._v("These are the dates of your favorite images")]),a("ol",{attrs:{id:"saved-items"}},e._l(e.currentFavorites,(function(t,n){return a("li",{key:n,attrs:{id:"saved-item"}},[a("button",{on:{click:function(a){return a.preventDefault(),e.fetchMedia(t)}}},[e._v(" "+e._s(t)+" ")]),a("button",{on:{click:function(a){return a.preventDefault(),e.unsave(t,n)}}},[e._v("Unsave")])])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dateWasSelected,expression:"dateWasSelected"}],attrs:{id:"result"}},[a("h3",{attrs:{id:"result-header"}},[e._v(" Astronomy image of "+e._s(this.$root.$data.currentDate)+" "),a("button",{attrs:{id:"back-button"},on:{click:function(t){return t.preventDefault(),e.goBack.apply(null,arguments)}}},[e._v("<Back")]),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isSaved,expression:"!isSaved"}],attrs:{id:"save-button"},on:{click:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[e._v(" Save ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isSaved,expression:"isSaved"}],attrs:{id:"unsave-button"},on:{click:function(t){return t.preventDefault(),e.unsave.apply(null,arguments)}}},[e._v(" Unsave ")])]),a("h4",{attrs:{id:"media-title"}},[e._v(e._s(e.mediaTitle))]),a("div",{attrs:{id:"result-container"}},[a("div",{attrs:{id:"media-container"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"image"===e.mediaType,expression:"mediaType === 'image'"}],attrs:{id:"image"}},[a("img",{attrs:{src:e.mediaURL}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:"video"===e.mediaType,expression:"mediaType === 'video'"}],attrs:{id:"video"}},[a("iframe",{attrs:{src:e.mediaURL}})])]),a("div",{attrs:{id:"explanation-container"}},[a("p",[e._v(" "+e._s(e.explanation)+" ")])])])])]):e._e()])},s=[],o=a(6198),d=(a(5666),a(561),a(2222),a(1539),a(9826),a(9669)),u=a.n(d),c={name:"SavedImagesComponent",created:function(){},props:{currentFavorites:Array,dateWasSelected:Boolean,mediaType:String,mediaTitle:String,mediaURL:String,explanation:String},data:function(){return{apiKey:"5NqF6jh9w3uVhB9rwEeUJfSIwBgcavPvzYEO7lH3"}},methods:{unsave:function(e,t){var a=this;return(0,o.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().put("/api/images/unsave",{username:a.$root.$data.currentUser,toBeRemoved:e});case 3:a.$props.currentFavorites.splice(t,1),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},fetchMedia:function(e){var t=this,a="https://api.nasa.gov/planetary/apod?api_key=".concat(this.$data.apiKey,"&date=").concat(e);fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),t.$props.dateWasSelected=!0,t.$props.mediaType=e.media_type,t.$props.mediaTitle=e.title,t.$props.mediaURL=e.url,t.$props.explanation=e.explanation}))},goBack:function(){this.$props.dateWasSelected=!1}},computed:{isSaved:function(){var e=this;return void 0!==this.$root.$data.currentFavorites.find((function(t){return t===e.$root.$data.currentDate}))}}},v=c,l=a(1001),p=(0,l.Z)(v,i,s,!1,null,"0b75cdf2",null),m=p.exports,h={name:"SavedImagesView",components:{SavedImagesComponent:m},computed:{currentFavorites:function(){return this.$root.$data.currentFavorites}}},f=h,g=(0,l.Z)(f,n,r,!1,null,"aa27fe0e",null),w=g.exports}}]);
//# sourceMappingURL=about-legacy.b6509c30.js.map