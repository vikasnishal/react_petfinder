(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(1),i=a(2),s=a(4),d=a(3),u=a(5),m=a(6),h=a(7),p=a.n(h),b=r.a.createContext({location:"Seattle WA",animal:"",breed:"",breeds:[],handleAnimalChange:function(){},handleBreedChange:function(){},handleLocationChange:function(){},getBreeds:function(){}}),f=b.Provider,E=b.Consumer,v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.animal,n=e.breed,c=e.media,l=e.location,o=e.id,i=[];c&&c.photos&&c.photos.photo&&(i=c.photos.photo.filter(function(e){return"pn"===e["@size"]}));var s="http://placecorgi.com/300/300";return i[0]&&i[0].value&&(s=i[0].value),r.a.createElement(m.a,{to:"/details/".concat(o),className:"pet"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:t})),r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,t),r.a.createElement("h2",null,"".concat(a," \u2014 ").concat(n," \u2014 ").concat(l))))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e){e.preventDefault(),a.props.search()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E,null,function(t){return r.a.createElement("div",{className:"search-params"},r.a.createElement("form",{onSubmit:e.handleFormSubmit},r.a.createElement("label",{htmlFor:"location"},"Location",r.a.createElement("input",{id:"location",onChange:t.handleLocationChange,value:t.location,placeholder:"Location"})),r.a.createElement("label",{htmlFor:"animal"},"Animal",r.a.createElement("select",{id:"animal",value:t.animal,onChange:t.handleAnimalChange,onBlur:t.handleAnimalChange},r.a.createElement("option",null),h.ANIMALS.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("label",{htmlFor:"breed"},"Breed",r.a.createElement("select",{disabled:!t.breeds.length,id:"breed",value:t.breed,onChange:t.handleBreedChange,onBlur:t.handleBreedChange},r.a.createElement("option",null),t.breeds.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("button",null,"Submit")))})}}]),t}(r.a.Component),O=p()({key:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_KEY,secret:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_SECRET}),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).search=function(){O.pet.find({location:a.props.searchParams.location,animal:a.props.searchParams.animal,breed:a.props.searchParams.breed,output:"full"}).then(function(e){var t;t=e.petfinder.pets&&e.petfinder.pets.pet?Array.isArray(e.petfinder.pets.pet)?e.petfinder.pets.pet:[e.petfinder.pets.pet]:[],a.setState({pets:t})})},a.state={pets:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement(g,{search:this.search}),this.state.pets.map(function(e){var t;return t=Array.isArray(e.breeds.breed)?e.breeds.breed.join(", "):e.breeds.breed,r.a.createElement(v,{animal:e.animal,key:e.id,name:e.name,breed:t,media:e.media,location:"".concat(e.contact.city,", ").concat(e.contact.state),id:e.id})}))}}]),t}(r.a.Component);function C(e){return r.a.createElement(E,null,function(t){return r.a.createElement(j,Object.assign({},e,{searchParams:t}))})}var y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={photos:[],active:0},a.handleIndexClick=function(e){a.setState({active:+e.target.dataset.index})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photos,n=t.active,c="http://placecorgi.com/300/300";return a[n]&&a[n].value&&(c=a[n].value),r.a.createElement("div",{className:"carousel"},r.a.createElement("img",{src:c,alt:"animal"}),r.a.createElement("div",{className:"carousel-smaller"},a.map(function(t,a){return r.a.createElement("img",{onClick:e.handleIndexClick,"data-index":a,key:t.value,src:t.value,className:a===n?"active":"",alt:"animal thumnbail"})})))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.media,a=[];return t&&t.photos&&t.photos.photo&&(a=t.photos.photo.filter(function(e){return"pn"===e["@size"]})),{photos:a}}}]),t}(r.a.Component),k=document.getElementById("modal"),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){k.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){k.removeChild(this.el)}},{key:"render",value:function(){return Object(c.createPortal)(this.props.children,this.el)}}]),t}(r.a.Component),S=p()({key:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_KEY,secret:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_SECRET}),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,showModal:!1},a.toggleModal=function(){a.setState({showModal:!a.state.showModal})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.pet.get({output:"full",id:this.props.id}).then(function(t){var a;a=Array.isArray(t.petfinder.pet.breeds.breed)?t.petfinder.pet.breeds.breed.join(", "):t.petfinder.pet.breeds.breed,e.setState({name:t.petfinder.pet.name,animal:t.petfinder.pet.animal,location:"".concat(t.petfinder.pet.contact.city,", ").concat(t.petfinder.pet.contact.state),description:t.petfinder.pet.description,media:t.petfinder.pet.media,breed:a,loading:!1})}).catch(function(){Object(m.c)("/")})}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement("h1",null,"loading \u2026 ");var e=this.state,t=e.media,a=e.animal,n=e.breed,c=e.location,l=e.description,o=e.name,i=e.showModal;return r.a.createElement("div",{className:"details"},r.a.createElement(y,{media:t}),r.a.createElement("div",null,r.a.createElement("h1",null,o),r.a.createElement("h2",null,"".concat(a," \u2014 ").concat(n," \u2014 ").concat(c)),r.a.createElement("button",{onClick:this.toggleModal},"Adopt ",o),r.a.createElement("p",null,l),i?r.a.createElement(A,null,r.a.createElement("h1",null,"Would you like to adopt ",o),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.toggleModal},"Yes"),r.a.createElement("button",{onClick:this.toggleModal},"Hell Yes"))):null))}}]),t}(r.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSearchSubmit",value:function(){Object(m.c)("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-route"},r.a.createElement(g,{search:this.handleSearchSubmit}))}}]),t}(r.a.Component),B=a(16),L=a(19);function P(){var e=Object(B.a)(["\n  background-color: #333;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n"]);return P=function(){return e},e}var I=Object(L.a)("header")(P()),w=function(){return r.a.createElement(I,null,r.a.createElement(m.a,{to:"/"},"Adopt Me!"),r.a.createElement(m.a,{to:"/search-params"},r.a.createElement("span",{"aria-label":"search",role:"img"},"\ud83d\udd0d")))},M=p()({key:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_KEY,secret:Object({NODE_ENV:"production",PUBLIC_URL:"/react_petfinder"}).API_SECRET}),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleLocationChange=function(e){a.setState({location:e.target.value})},a.handleAnimalChange=function(e){a.setState({animal:e.target.value},a.getBreeds)},a.handleBreedChange=function(e){a.setState({breed:e.target.value})},a.state={location:"Seattle WA",animal:"",breed:"",breeds:[],handleLocationChange:a.handleLocationChange,handleBreedChange:a.handleBreedChange,handleAnimalChange:a.handleAnimalChange,getBreeds:a.getBreeds},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getBreeds",value:function(){var e=this;this.state.animal?M.breed.list({animal:this.state.animal}).then(function(t){t.petfinder&&t.petfinder.breeds&&Array.isArray(t.petfinder.breeds.breed)?e.setState({breeds:t.petfinder.breeds.breed}):e.setState({breeds:[]})}).catch(console.error):this.setState({breeds:[]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(f,{value:this.state},r.a.createElement(m.b,null,r.a.createElement(C,{path:"/"}),r.a.createElement(N,{path:"/details/:id"}),r.a.createElement(_,{path:"/search-params"}))))}}]),t}(r.a.Component);a(38);l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.a9d29ceb.chunk.js.map