(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(77)},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getTotalAudioTime",function(){return Be}),n.d(a,"updateCurrentAudioTime",function(){return ze}),n.d(a,"handleSeek",function(){return Qe});var r={};n.r(r),n.d(r,"handlePlay",function(){return Je}),n.d(r,"handlePause",function(){return Ze}),n.d(r,"playAudio",function(){return $e}),n.d(r,"pauseAudio",function(){return et});var o={};n.r(o),n.d(o,"handleVolume",function(){return tt}),n.d(o,"handleMute",function(){return nt}),n.d(o,"handleUnmute",function(){return at}),n.d(o,"updateVolume",function(){return rt});var i={};n.r(i),n.d(i,"toggleShuffle",function(){return ot}),n.d(i,"toggleLoop",function(){return it});var l=n(0),s=n.n(l),u=n(34),c=n.n(u),d=n(12),m=n(35),h=n.n(m),p=n(36),f=n(3),g=n(15),E=n.n(g),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return E.a.get("https://zing-lite-rails-api.herokuapp.com/api/songs/?off_set=".concat(e))}(e).then(function(e){return t(function(e){return{type:"RECEIVE_SONGS",payload:e}}(e))}).catch(function(e){return console.warn(e)})}},v=function(e){return{type:"OPEN_MODAL",modal:e}},y=function(e){return{type:"RECEIVE_USER_PLAYLIST",payload:e}},O=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists/?user_id=".concat(e),method:"get",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},withCredentials:!0})}(e).then(function(e){return t(function(e){return{type:"RECEIVE_USER_PLAYLISTS",payload:e}}(e))}).catch(function(e){return console.warn(e)})}},S=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:e,withCredentials:!0})}(e).then(function(e){return Promise.all([t(y(e)),t(v({type:"TEXT_ALERT",content:"New playlist created!"}))])}).catch(function(e){return console.warn(e)})}},j=function(e,t){return function(n){return function(e,t){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists/".concat(e),method:"patch",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:t,withCredentials:!0})}(e,t).then(function(e){return Promise.all([n(y(e)),n(v({type:"TEXT_ALERT",content:"Playlist saved!"}))])}).catch(function(e){return console.warn(e)})}},I=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/searches/?query=".concat(e),method:"get"})}(e).then(function(e){return t(function(e){return{type:"RECEIVE_QUERY_DATA",payload:e}}(e))}).catch(function(e){return console.warn(e)})}},_={2:{id:2,title:"Roi Xa De Truong Thanh",url:"https://www.dropbox.com/s/h1cthpxik696m43/RoiXaDeTruongThanh.mp3?dl=1",artistId:13,albumId:18}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.songs);default:return e}},C={13:{id:13,name:"Duy Zuno",avatarUrl:"https://www.dropbox.com/s/239urccuwvke063/DuyZuno.jpg?dl=1"}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.artists);default:return e}},k={18:{id:18,name:"Roi Xa De Truong Thanh",coverImageUrl:"https://www.dropbox.com/s/kjd0m5db5al73wx/RoiXaDeTruongThanh.jpg?dl=1"}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.albums);default:return e}},T=function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}},A=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},w=function(e){var t={userId:e.data.id,username:e.data.username};return sessionStorage.setItem("CSRF-TOKEN",e.data.csrfToken),sessionStorage.setItem("username",t.username),sessionStorage.setItem("userId",t.userId),t},L=function(e){return function(t){return(n=e,E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/session",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:n,withCredentials:!0})).then(function(e){return t(T(w(e)))}).catch(function(e){return t(A(e.response.data))});var n}},U=function(e){return function(t){return(n=e,E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/users",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:n,withCredentials:!0})).then(function(e){return t(T(w(e)))}).catch(function(e){return t(A(e.response.data))});var n}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_PLAYLISTS":return Object(f.a)({},e,t.payload.data.playlists);case"RECEIVE_USER_PLAYLIST":return Object(f.a)({},e,t.payload.data);case"REMOVE_USER_PLAYLIST":var n=Object(f.a)({},e);return delete n[t.playlistId],n;case"RECEIVE_USER_LOGOUT":return{};default:return e}},D={songIds:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,{songIds:t.payload.data.searchResults.songIds});case"CLEAR_SEARCH_RESULTS":return D;default:return e}},M=Object(d.c)({songs:R,artists:N,albums:P,userPlaylists:V,searchResults:F}),x=n(17),G=function(e){return{type:"USER_CLICK_PLAY",songId:e}},Y=n(40),X=function(e,t,n){var a=Object(x.a)(e);return e.includes(t)||(a=[].concat(Object(x.a)(e),[t])),a.length===n.length&&(a=[]),a},W={playingSongIndex:0,songIds:[2],prevSongIndex:0,playedSongIndices:[],currentPlaylist:0},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORWARD":return function(e){var t=e.songIds,n=e.playingSongIndex,a=e.playedSongIndices,r=n+1;r>t.length-1&&(r=0);var o=X(a,n,t);return Object(f.a)({},e,{playingSongIndex:r,prevSongIndex:n,playedSongIndices:o})}(e);case"BACKWARD":return function(e){var t=e.songIds,n=e.playingSongIndex,a=e.playedSongIndices,r=e.prevSongIndex,o=r-1;o<0&&(o=t.length-1);var i=X(a,n,t);return Object(f.a)({},e,{playingSongIndex:r,prevSongIndex:o,playedSongIndices:i})}(e);case"SHUFFLE":return function(e){var t,n=e.songIds,a=e.playedSongIndices,r=e.playingSongIndex,o=[].concat(Object(x.a)(a),[r]),i=n.map(function(e,t){return t}).filter(function(e){return!o.includes(e)});t=0===i.length?Math.floor(Math.random()*n.length):1===i.length?Object(Y.a)(i,1)[0]:i[Math.floor(Math.random()*i.length)];var l=X(a,r,n);return Object(f.a)({},e,{playingSongIndex:t,prevSongIndex:r,playedSongIndices:l})}(e);case"USER_CLICK_PLAY":var n=e.songIds,a=e.playingSongIndex,r=n.slice();return r=r.filter(function(e){return e!==t.songId}),r=[].concat(Object(x.a)(r.slice(0,a+1)),[t.songId],Object(x.a)(r.slice(a+2,r.length))),Object(f.a)({},e,{songIds:r});case"ADD_SONG":return Object(f.a)({},e,{songIds:[].concat(Object(x.a)(e.songIds),[t.songId])});case"CHANGE_SONG":return Object(f.a)({},e,{playingSongIndex:e.songIds.indexOf(t.songId)});case"REMOVE_SONG":return function(e,t){var n=e.songIds,a=e.playingSongIndex,r=e.playedSongIndices;if(1===n.length)return e;var o,i=n.indexOf(t.songId),l=n.filter(function(e){return e!==t.songId}),s=r.filter(function(e){return e!==a});return i>a?o=a:i<=a&&(o=a-1)<0&&(o=0),Object(f.a)({},e,{songIds:l,playedSongIndices:s,playingSongIndex:o})}(e,t);case"START_PLAYLIST":return Object(f.a)({},W,{songIds:t.songIds,currentPlaylist:t.playlistId});case"RECEIVE_USER_PLAYLIST":return Object(f.a)({},e,{currentPlaylist:parseInt(Object.keys(t.payload.data)[0],10)});case"RECEIVE_USER_LOGOUT":return W;default:return e}},K={id:null,username:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_CURRENT_USER":return t.currentUser;case"RECEIVE_USER_LOGOUT":return K;default:return e}},B=Object(d.c)({audioPlayer:q,user:H}),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SESSION_ERRORS":return t.errors;case"CLEAR_SESSION_ERRORS":case"RECEIVE_CURRENT_USER":return[];default:return e}},Q=Object(d.c)({session:z}),J={homePage:!0,profilePage:!0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;switch((arguments.length>1?arguments[1]:void 0).type){case"RECEIVE_SONGS":return Object(f.a)({},e,{homePage:!1});case"RECEIVE_USER_PLAYLISTS":return Object(f.a)({},e,{profilePage:!1});default:return e}},$={type:"hidden",content:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return t.modal;case"CLOSE_MODAL":return $;default:return e}},te=Object(d.c)({loading:Z,modal:ee}),ne=Object(d.c)({entities:M,session:B,errors:Q,ui:te}),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.d)(ne,e,Object(d.a)(p.a,h.a))},re=n(4),oe=n(79),ie=n(82),le=n(70),se=n(80),ue=n(81),ce=n(41),de=function(e){var t=e.session;return Boolean(t.user.userId)},me=function(e){return{loggedIn:de(e)}},he=Object(ue.a)(Object(re.b)(me,null)(function(e){var t=e.component,n=e.path,a=e.loggedIn,r=e.exact;return s.a.createElement(le.a,{path:n,exact:r,render:function(e){return a?s.a.createElement(se.a,{to:"/profile"}):s.a.createElement(t,e)}})})),pe=Object(ue.a)(Object(re.b)(me,null)(function(e){e.toPath;var t=e.component,n=e.loggedIn,a=Object(ce.a)(e,["toPath","component","loggedIn"]);return s.a.createElement(le.a,Object.assign({},a,{render:function(e){return n?s.a.createElement(t,e):s.a.createElement(se.a,{to:"/profile/login"})}}))})),fe=n(5),ge=n(6),Ee=n(8),be=n(7),ve=n(9),ye=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={hasFetchedPlaylist:!1},e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchSomeSongs,n=e.fetchUserPlaylists,a=e.userId,r=this.state.hasFetchedPlaylist;t(0),a&&!r&&(n(a),this.setState({hasFetchedPlaylist:!0}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.fetchUserPlaylists,n=e.userId,a=this.state.hasFetchedPlaylist;n||this.setState({hasFetchedPlaylist:!1}),n&&!a&&(t(n),this.setState({hasFetchedPlaylist:!0}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null)}}]),t}(s.a.Component);ye.defaultProps={userId:null};var Oe=ye,Se=Object(re.b)(function(e){return{userId:e.session.user.userId}},function(e){return{fetchSomeSongs:function(t){return e(b(t))},fetchUserPlaylists:function(t){return e(O(t))}}})(Oe),je=n(2),Ie=n(78),_e={textDecoration:"underline",backgroundColor:"rgba(192, 108, 132, 1)"},Re=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).handleLogout=e.handleLogout.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handleLogout",value:function(){(0,this.props.logout)(),window.location.hash="/home"}},{key:"render",value:function(){var e=this.props.isLoggedIn;return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ie.a,{to:"/home",className:"Nav-Home",activeStyle:_e},"Home"),s.a.createElement(Ie.a,{to:"/playlist/",className:"Nav-Playlist",activeStyle:_e},"Playlist"),s.a.createElement(Ie.a,{to:"/about",className:"Nav-About",activeStyle:_e},"About"),s.a.createElement(Ie.a,{to:"/search",className:"Nav-Search",activeStyle:_e},"Search"),s.a.createElement(Ie.a,{to:"/profile",className:"Nav-Profile",activeStyle:_e},"Profile"),s.a.createElement("button",{className:"Nav-Logout ".concat(!e&&"Nav-Logout-loggedOut"),type:"button",onClick:this.handleLogout},"Logout"))}}]),t}(s.a.Component),Ce=Object(ue.a)(Object(re.b)(function(e){var t=e.session;return{isLoggedIn:Boolean(t.user.userId)}},function(e){return{logout:function(){return e(function(e){sessionStorage.removeItem("CSRF-TOKEN"),sessionStorage.removeItem("username"),sessionStorage.removeItem("userId"),e({type:"RECEIVE_USER_LOGOUT"})})}}})(Re)),Ne=function(e,t,n){if(!e)return{};var a=t[e.artistId],r=n[e.albumId];return{id:e.id,title:e.title,url:e.url,artist:a.name,artistAvatar:a.avatarUrl,album:r.name,coverImage:r.coverImageUrl}},ke=function(e){var t=e.entities,n=t.songs,a=t.artists,r=t.albums;return Object.values(n).map(function(e){return Ne(e,a,r)})},Pe=function(e){var t=e.entities,n=e.session.audioPlayer,a=t.songs,r=t.artists,o=t.albums;return n.songIds.map(function(e){return Ne(a[e],r,o)})},Te=function(e){var t=e.session.audioPlayer;return t.songIds[t.playingSongIndex]},Ae=function(e){var t=e.title,n=e.artist,a=e.album;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",null,t),s.a.createElement("h5",null,"".concat(n," - ").concat(a)))},we=n(39),Le=function(e){function t(e){var n;return Object(fe.a)(this,t),(n=Object(Ee.a)(this,Object(be.a)(t).call(this,e))).state={query:""},n.handleChange=n.handleChange.bind(Object(je.a)(Object(je.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(je.a)(Object(je.a)(n))),n.debounceSearch=Object(we.debounce)(function(t){return e.fetchQueryData(t)},500),n}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.debounceSearch.flush(),this.setState({query:""})}},{key:"handleChange",value:function(e){this.setState({query:e.target.value});var t=this.props.clearSearchResults,n=e.target.value;n&&""!==n?this.debounceSearch(n):(this.debounceSearch.clear(),t())}},{key:"render",value:function(){var e=this.state.query;return s.a.createElement("form",{className:"Input-Form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"Input-Form__Input",type:"text",placeholder:"Search for songs here...",value:e,onChange:this.handleChange}),s.a.createElement("div",{className:"Input-Form__Buttons"},s.a.createElement("button",{type:"button",onClick:this.handleSubmit},s.a.createElement("h6",null,"Search"))))}}]),t}(s.a.Component),Ue=Object(re.b)(null,function(e){return{fetchQueryData:function(t){return e(I(t))},clearSearchResults:function(){return e({type:"CLEAR_SEARCH_RESULTS"})}}})(Le),Ve=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handlePlay",value:function(e){var t=this.props,n=t.userClickPlay,a=t.forward;return function(){n(e),a()}}},{key:"render",value:function(){var e=this,t=this.props.songs;return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ue,null),s.a.createElement("ul",{className:"Col-List"},t.map(function(t){return s.a.createElement("li",{className:"Col-List__Item",key:t.id,role:"presentation",onClick:e.handlePlay(t.id)},s.a.createElement(Ae,t))})))}}]),t}(s.a.Component),De=Object(re.b)(function(e){var t=e.entities,n=t.songs,a=t.artists,r=t.albums;return{songs:t.searchResults.songIds.map(function(e){return Ne(n[e],a,r)})}},function(e){return{forward:function(){return e({type:"FORWARD"})},userClickPlay:function(t){return e(G(t))}}})(Ve),Fe=function(e){return e.loading?s.a.createElement("div",{className:"load-icon"}):null},Me=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(je.a)(Object(je.a)(e))),e.handleAddSong=e.handleAddSong.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handlePlay",value:function(){var e=this.props,t=e.id,n=e.userClickPlay,a=e.forward;n(t),a()}},{key:"handleAddSong",value:function(){var e=this.props,t=e.id,n=e.playlistSongIds,a=e.addSong,r=e.openModal;n.includes(t)?r({type:"TEXT_ALERT",content:"Song already in playlist!"}):(a(t),r({type:"TEXT_ALERT",content:"Song added to current playlist!"}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.artist,a=e.coverImage;return s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("figure",null,s.a.createElement("img",{src:a,alt:t}),s.a.createElement("button",{type:"button",onClick:this.handlePlay},s.a.createElement("i",{className:"far fa-play-circle fade"}))),s.a.createElement("h5",{className:"image-wrapper__title",title:"Add song to current playlist",role:"presentation",onClick:this.handleAddSong},t),s.a.createElement("h5",{className:"image-wrapper__artist"},n))}}]),t}(s.a.Component),xe=Object(re.b)(function(e){return{playlistSongIds:e.session.audioPlayer.songIds}},function(e){return{forward:function(){return e({type:"FORWARD"})},addSong:function(t){return e(function(e){return{type:"ADD_SONG",songId:e}}(t))},userClickPlay:function(t){return e(G(t))},openModal:function(t){return e(v(t))}}})(Me),Ge=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={offSet:20},e.handleScroll=e.handleScroll.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handleScroll",value:function(e){var t=this.state.offSet;if(!(t>35)){var n=this.props.fetchSomeSongs,a=e.target;a.scrollHeight-a.scrollTop<=a.clientHeight+1&&(n(t),this.setState(function(e){return{offSet:e.offSet+20}}))}}},{key:"render",value:function(){var e=this.props,t=e.songs,n=e.loading;return n?s.a.createElement(Fe,{loading:n}):s.a.createElement("ul",{className:"Row-List",onScroll:this.handleScroll},t.map(function(e){return s.a.createElement("li",{className:"Row-List__Item song-index-item",key:e.id},s.a.createElement(xe,e))}))}}]),t}(s.a.Component),Ye=Object(re.b)(function(e){return{songs:ke(e),loading:e.ui.loading.homePage}},function(e){return{fetchSomeSongs:function(t){return e(b(t))},forward:function(){return e({type:"FORWARD"})},userClickPlay:function(t){return e(G(t))}}})(Ge),Xe=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={loaded:!1},e.loaded=e.loaded.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"loaded",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.coverImageUrl,a=e.handlePlay,r=e.songIds,o=e.id,i=this.state.loaded;return s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("figure",null,s.a.createElement("img",{className:"profile__playlist__image".concat(i?"--loaded":""),src:n,onLoad:this.loaded,alt:t}),s.a.createElement("button",{type:"button",onClick:a(r,o)},s.a.createElement("i",{className:"far fa-play-circle"}))),s.a.createElement("h5",{className:"profile__playlist__name"},t))}}]),t}(s.a.Component),We=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handlePlay",value:function(e,t){var n=this.props.play;return function(){n(e,t),window.location.hash="/playlist"}}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.userPlaylists,r=t.loading;return r?s.a.createElement(Fe,{loading:r}):s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",{className:"profile__playlist__header"},s.a.createElement("span",null,"Welcome, ".concat(n.username,"! What are you in the mood for today?"))),s.a.createElement("ul",{className:"Row-List profile__playlist"},a.map(function(t){return s.a.createElement("li",{className:"Row-List__Item",key:t.id},s.a.createElement(Xe,Object.assign({},t,{userId:n.userId,handlePlay:e.handlePlay,loading:!0})))})))}}]),t}(s.a.Component),qe=Object(re.b)(function(e){var t=e.entities,n=e.session,a=e.ui;return{userPlaylists:Object.values(t.userPlaylists).reverse(),user:n.user,loading:a.loading.profilePage}},function(e){return{play:function(t,n){return e(function(e,t){return{type:"START_PLAYLIST",songIds:e,playlistId:t}}(t,n))}}})(We),Ke=function(e){var t=e.session.audioPlayer,n=t.songIds,a=t.playedSongIndices;return n.length-1===a.length},He=function(e){var t=Math.floor(e/60),n=Math.floor(e-60*t);return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)};function Be(){var e=this.audioRef.current.duration;this.setState({totalAudioTime:He(e)})}function ze(){var e,t=this.audioRef.current,n=t.duration,a=t.currentTime;e=n?a/n*100:0,this.setState({currentAudioTime:He(a),seekValue:e})}function Qe(e){var t=this.audioRef.current.duration*(e.target.value/100);this.audioRef.current.currentTime=t}function Je(){this.setState({isPlaying:!0})}function Ze(){this.setState({isPlaying:!1})}function $e(){this.state.hasMount?this.audioRef.current.play().catch(function(e){return console.warn(e)}):this.setState({hasMount:!0})}function et(){this.audioRef.current.pause()}function tt(e){var t=e.target.value/100;this.audioRef.current.volume=t}function nt(){var e=this.audioRef.current.volume;this.setState({preMuteVolume:100*e}),this.audioRef.current.volume=0}function at(e){var t=this;return function(){t.audioRef.current.volume=e/100}}function rt(){var e=this.audioRef.current.volume;this.setState({volume:100*e})}function ot(e){var t=this;return function(){t.setState({isOnShuffle:!e})}}function it(e){var t=this;return function(){t.setState({isOnLoop:!e})}}var lt=Object(f.a)({},a,r,o,i),st=function(e){var t=e.audioRef,n=e.url,a=e.isEndOfLoop,r=e.isOnLoop,o=e.isOnShuffle,i=e.forward,l=e.shuffle,u=e.getTotalAudioTime,c=e.updateCurrentAudioTime,d=e.updateVolume,m=e.handlePause,h=e.handlePlay,p=e.playAudio;return s.a.createElement("audio",{src:n,ref:t,onLoadedMetadata:u,onDurationChange:p,onTimeUpdate:c,onVolumeChange:d,onPause:m,onPlay:h,onEnded:function(){a&&!r||(o?l():i())}})},ut=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={isSpinning:!1},e.handleClick=e.handleClick.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handleClick",value:function(){var e=this.state.isSpinning;this.setState({isSpinning:!e})}},{key:"render",value:function(){var e=this.props,t=e.album,n=e.coverImage,a=this.state.isSpinning;return s.a.createElement("figure",{className:"SpinningDisc SpinningDisc--".concat(a&&"spin"),role:"presentation",onClick:this.handleClick},s.a.createElement("img",{src:n,alt:t}))}}]),t}(s.a.Component),ct=function(e){var t=e.title,n=e.artist,a=e.artistAvatar;return s.a.createElement("div",{className:"Marquee"},s.a.createElement("p",null,s.a.createElement("img",{src:a,alt:n}),s.a.createElement("span",null,"".concat(t," - ").concat(n))))},dt=function(e){var t=e.isPlaying,n=e.playAudio,a=e.pauseAudio;return t?s.a.createElement("button",{type:"button",onClick:a},s.a.createElement("i",{className:"far fa-pause-circle active"})):s.a.createElement("button",{type:"button",onClick:n},s.a.createElement("i",{className:"far fa-play-circle"}))},mt=function(e){var t=e.forward;return s.a.createElement("button",{type:"button",onClick:t},s.a.createElement("i",{className:"fas fa-step-forward"}))},ht=function(e){var t=e.isOnShuffle,n=e.toggleShuffle;return s.a.createElement("button",{type:"button",onClick:n(t)},s.a.createElement("i",{className:"fas fa-random ".concat(t&&"active")}))},pt=function(e){var t=e.backward;return s.a.createElement("button",{type:"button",onClick:t},s.a.createElement("i",{className:"fas fa-step-backward"}))},ft=function(e){var t=e.seekValue,n=e.handleSeek,a=e.currentAudioTime,r=e.totalAudioTime;return s.a.createElement("div",{className:"SeekSlider"},s.a.createElement("input",{type:"range",min:"0",max:"100",step:"1",value:t,onChange:n}),s.a.createElement("p",null,"".concat(a,"/").concat(r)))},gt=function(e){var t,n=e.volume,a=e.preMuteVolume,r=e.handleMute,o=e.handleUnmute;return t=0===n?s.a.createElement("button",{type:"button",className:"volume-button",onClick:o(a)},s.a.createElement("i",{className:"fas fa-volume-mute"})):s.a.createElement("button",{type:"button",className:"volume-button",onClick:r},s.a.createElement("i",{className:"fas fa-volume-up active"})),s.a.createElement(s.a.Fragment,null,t)},Et=function(e){var t=e.isOnLoop,n=e.toggleLoop;return s.a.createElement("button",{type:"button",onClick:n(t)},s.a.createElement("i",{className:"fas fa-redo-alt ".concat(t&&"active")}))},bt=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={isPlaying:!1,isOnLoop:!1,isOnShuffle:!1,seekValue:0,totalAudioTime:"0:00",currentAudioTime:"0:00",volume:50,preMuteVolume:50},e.audioRef=s.a.createRef(),e.getTotalAudioTime=lt.getTotalAudioTime.bind(Object(je.a)(Object(je.a)(e))),e.updateCurrentAudioTime=lt.updateCurrentAudioTime.bind(Object(je.a)(Object(je.a)(e))),e.handleSeek=lt.handleSeek.bind(Object(je.a)(Object(je.a)(e))),e.handlePlay=lt.handlePlay.bind(Object(je.a)(Object(je.a)(e))),e.handlePause=lt.handlePause.bind(Object(je.a)(Object(je.a)(e))),e.playAudio=lt.playAudio.bind(Object(je.a)(Object(je.a)(e))),e.pauseAudio=lt.pauseAudio.bind(Object(je.a)(Object(je.a)(e))),e.handleVolume=lt.handleVolume.bind(Object(je.a)(Object(je.a)(e))),e.handleMute=lt.handleMute.bind(Object(je.a)(Object(je.a)(e))),e.handleUnmute=lt.handleUnmute.bind(Object(je.a)(Object(je.a)(e))),e.updateVolume=lt.updateVolume.bind(Object(je.a)(Object(je.a)(e))),e.toggleShuffle=lt.toggleShuffle.bind(Object(je.a)(Object(je.a)(e))),e.toggleLoop=lt.toggleLoop.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.url,a=e.artist,r=e.artistAvatar,o=e.album,i=e.coverImage,l=e.isEndOfLoop,u=e.forward,c=e.backward,d=e.shuffle,m=this.state,h=m.isPlaying,p=m.isOnLoop,f=m.isOnShuffle,g=m.volume,E=m.preMuteVolume,b=m.seekValue,v=m.currentAudioTime,y=m.totalAudioTime;return s.a.createElement(s.a.Fragment,null,s.a.createElement(st,{audioRef:this.audioRef,url:n,forward:u,shuffle:d,isPlaying:h,isEndOfLoop:l,isOnLoop:p,isOnShuffle:f,getTotalAudioTime:this.getTotalAudioTime,updateCurrentAudioTime:this.updateCurrentAudioTime,updateVolume:this.updateVolume,handlePause:this.handlePause,handlePlay:this.handlePlay,playAudio:this.playAudio}),s.a.createElement("div",{className:"AudioPlayerContainer"},s.a.createElement(ut,{album:o,coverImage:i}),s.a.createElement(ct,{title:t,artist:a,artistAvatar:r}),s.a.createElement("div",{className:"Controls1"},s.a.createElement(pt,{backward:c,playAudio:this.playAudio}),s.a.createElement(dt,{isPlaying:h,playAudio:this.playAudio,pauseAudio:this.pauseAudio}),s.a.createElement(mt,{forward:u,playAudio:this.playAudio})),s.a.createElement("div",{className:"Controls2"},s.a.createElement(ht,{isOnShuffle:f,toggleShuffle:this.toggleShuffle}),s.a.createElement(Et,{isEndOfLoop:l,isOnLoop:p,toggleLoop:this.toggleLoop}),s.a.createElement(gt,{volume:g,preMuteVolume:E,handleMute:this.handleMute,handleUnmute:this.handleUnmute,handleVolume:this.handleVolume})),s.a.createElement(ft,{seekValue:b,currentAudioTime:v,totalAudioTime:y,handleSeek:this.handleSeek})))}}]),t}(s.a.Component),vt=Object(re.b)(function(e){return Object(f.a)({},function(e){var t=e.entities,n=e.session,a=t.songs,r=t.artists,o=t.albums,i=n.audioPlayer,l=a[i.songIds[i.playingSongIndex]];return Ne(l,r,o)}(e),{isEndOfLoop:Ke(e)})},function(e){return{forward:function(){return e({type:"FORWARD"})},backward:function(){return e({type:"BACKWARD"})},shuffle:function(){return e({type:"SHUFFLE"})}}})(bt),yt=function(){return s.a.createElement("span",{className:"playlist-item__sound-wave"},s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}))},Ot=function(e){var t=e.id,n=e.title,a=e.artist,r=e.album,o=e.isPlaying,i=e.handleRemoveSong;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"playlist-item__inner-wrapper"},o?s.a.createElement(yt,null):null,s.a.createElement("span",null,s.a.createElement("h4",{className:"playlist-item__title"},n)),s.a.createElement("button",{className:"playlist-item__X",type:"button",onClick:i(t)},s.a.createElement("h6",null,"remove"))),s.a.createElement("h5",null,"".concat(a," - ").concat(r)))},St=function(e){function t(e){var n;return Object(fe.a)(this,t),(n=Object(Ee.a)(this,Object(be.a)(t).call(this,e))).state={newName:"".concat(e.playlistName||"")},n.handleNew=n.handleNew.bind(Object(je.a)(Object(je.a)(n))),n.handleEdit=n.handleEdit.bind(Object(je.a)(Object(je.a)(n))),n.handleChange=n.handleChange.bind(Object(je.a)(Object(je.a)(n))),n}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.playlistName;this.setState({newName:"".concat(t||"")})}},{key:"makePlaylistData",value:function(){var e=this.state.newName,t=this.props,n=t.userId,a=t.songIds;return{playlist:{name:e||(new Date).toLocaleString(),user_id:n,song_ids:a}}}},{key:"handleNew",value:function(){(0,this.props.createPlaylist)(this.makePlaylistData())}},{key:"handleEdit",value:function(){var e=this.props,t=e.playlistId;(0,e.editPlaylist)(t,this.makePlaylistData())}},{key:"handleChange",value:function(e){this.setState({newName:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.playlistName,n=e.userId,a=this.state.newName;return n?s.a.createElement("form",{className:"Input-Form",onSubmit:function(e){return e.preventDefault()}},s.a.createElement("input",{className:"Input-Form__Input",type:"text",placeholder:"Name this playlist...",value:a,onChange:this.handleChange}),s.a.createElement("div",{className:"Input-Form__Buttons"},t?s.a.createElement("button",{type:"button",onClick:this.handleEdit},s.a.createElement("h6",null,"Save")):null,s.a.createElement("button",{type:"button",onClick:this.handleNew},s.a.createElement("h6",null,"Create New")))):null}}]),t}(s.a.Component);St.defaultProps={userId:null,playlistId:void 0,playlistName:void 0};var jt=St,It=Object(re.b)(function(e){var t=e.session.audioPlayer.currentPlaylist,n=function(e,t){var n,a=e.entities;try{n=a.userPlaylists[t].name}catch(r){n=void 0}return n}(e,t);return{userId:e.session.user.userId,playlistId:t,playlistName:n}},function(e){return{createPlaylist:function(t){return e(S(t))},editPlaylist:function(t,n){return e(j(t,n))}}})(jt),_t=function(e){function t(e){var n;return Object(fe.a)(this,t),(n=Object(Ee.a)(this,Object(be.a)(t).call(this,e))).handleChangeSong=n.handleChangeSong.bind(Object(je.a)(Object(je.a)(n))),n.handleRemoveSong=n.handleRemoveSong.bind(Object(je.a)(Object(je.a)(n))),n}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"handleChangeSong",value:function(e){var t=this.props.changeSong;return function(n){n.stopPropagation(),t(e)}}},{key:"handleRemoveSong",value:function(e){var t=this.props.removeSong;return function(n){n.stopPropagation(),t(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.songs,a=t.playingSongId;return s.a.createElement(s.a.Fragment,null,s.a.createElement(It,{songIds:n.map(function(e){return e.id})}),s.a.createElement("ul",{className:"Col-List"},n.map(function(t){return s.a.createElement("li",{className:"\n              Col-List__Item playlist-item \n              ".concat(t.id===a?"playlist-item--playing":"","\n            "),key:t.id,role:"presentation",onClick:e.handleChangeSong(t.id)},s.a.createElement(Ot,Object.assign({},t,{isPlaying:t.id===a,handleRemoveSong:e.handleRemoveSong})))})))}}]),t}(s.a.Component),Rt=Object(re.b)(function(e){return{songs:Pe(e),playingSongId:Te(e)}},function(e){return{changeSong:function(t){return e(function(e){return{type:"CHANGE_SONG",songId:e}}(t))},removeSong:function(t){return e(function(e){return{type:"REMOVE_SONG",songId:e}}(t))}}})(_t),Ct=n(19),Nt=n(72),kt=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={username:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(je.a)(Object(je.a)(e))),e.handleDemoLogin=e.handleDemoLogin.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.clearSessionErrors;0!==e.errors.length&&t()}},{key:"update",value:function(e){var t=this;return function(n){t.setState(Object(Ct.a)({},e,n.target.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.processForm,n=this.state;t({user:{username:n.username,password:n.password}}),this.setState({username:"",password:""})}},{key:"handleDemoLogin",value:function(e){e.preventDefault(),(0,this.props.processForm)({user:{username:"guest",password:"password"}})}},{key:"render",value:function(){var e=this.props,t=e.formType,n=e.errors,a=this.state,r=a.username,o=a.password;return s.a.createElement("form",{className:"session-form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"session-form__input",type:"text",placeholder:"Username",value:r,onChange:this.update("username")}),s.a.createElement("br",null),s.a.createElement("input",{className:"session-form__input",type:"password",placeholder:"Password",value:o,onChange:this.update("password")}),s.a.createElement("ul",{className:"session-form__errors"},n.map(function(e,t){return s.a.createElement("li",{key:t},e)})),s.a.createElement("br",null),s.a.createElement("button",{className:"session-form__button",type:"submit"},t),s.a.createElement("button",{className:"session-form__button",type:"submit",onClick:this.handleDemoLogin},"DEMO"),"LOG IN"===t?s.a.createElement("p",{className:"session-form__text"},"Don't have an account? ",s.a.createElement(Nt.a,{className:"session-form__link",to:"/profile/signup"},"Signup")):s.a.createElement("p",{className:"session-form__text"},"Already have an account? ",s.a.createElement(Nt.a,{className:"session-form__link",to:"/profile/login"},"Login")))}}]),t}(s.a.Component),Pt=Object(re.b)(function(e){return{errors:e.errors.session,formType:"LOG IN"}},function(e){return{processForm:function(t){return e(L(t))},clearSessionErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(kt),Tt=Object(re.b)(function(e){return{errors:e.errors.session,formType:"SIGN UP"}},function(e){return{processForm:function(t){return e(U(t))},clearSessionErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(kt),At=function(){return s.a.createElement(Fe,{loading:!0})},wt=function(e){var t=e.text;return s.a.createElement("h4",{className:"modal__child__text"},t)},Lt=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).handleClick=e.handleClick.bind(Object(je.a)(Object(je.a)(e))),e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.modal,n=e.closeModal;this.closeModalTimeout&&clearTimeout(this.closeModalTimeout),"hidden"!==t.type&&(this.closeModalTimeout=setTimeout(function(){return n()},2e3))}},{key:"componentWillUnmount",value:function(){this.closeModalTimeout&&clearTimeout(this.closeModalTimeout)}},{key:"handleClick",value:function(){var e=this.props.closeModal;this.closeModalTimeout&&clearTimeout(this.closeModalTimeout),e()}},{key:"renderComponent",value:function(){var e=this.props.modal;switch(e.type){case"TEXT_ALERT":return s.a.createElement(wt,{text:e.content});default:return null}}},{key:"render",value:function(){var e=this.props.modal;return s.a.createElement("div",{className:"Main modal__background",role:"presentation"},s.a.createElement("div",{className:"modal__child modal__child--".concat(e.type),role:"presentation",onClick:this.handleClick},this.renderComponent()))}}]),t}(s.a.Component),Ut=Object(re.b)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}})(Lt),Vt=Object(ue.a)(Object(re.b)(function(e){var t=e.session;return{isLoggedIn:Boolean(t.user.userId)}},null)(function(e){var t=e.isLoggedIn;return s.a.createElement("div",{className:"Site ".concat(t&&"Site-LoggedIn")},s.a.createElement(Ce,null),s.a.createElement(Ut,null),s.a.createElement("div",{className:"Main"},s.a.createElement(ie.a,null,s.a.createElement(pe,{path:"/playlist/:playlistId",component:Rt}),s.a.createElement(le.a,{path:"/playlist",component:Rt}),s.a.createElement(le.a,{path:"/home",component:Ye}),s.a.createElement(le.a,{path:"/search",component:De}),s.a.createElement(le.a,{path:"/about",component:At}),s.a.createElement(he,{path:"/profile/login",component:Pt}),s.a.createElement(he,{path:"/profile/signup",component:Tt}),s.a.createElement(pe,{path:"/profile",component:qe}),s.a.createElement(se.a,{to:"/home"}))),s.a.createElement("aside",{className:"Aside"},s.a.createElement(le.a,{path:"/",component:Se}),s.a.createElement(le.a,{path:"/",component:vt})))})),Dt=function(e){function t(){var e;return Object(fe.a)(this,t),(e=Object(Ee.a)(this,Object(be.a)(t).call(this))).state={hasError:!1},e}return Object(ve.a)(t,e),Object(ge.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?s.a.createElement(se.a,{to:"/home"}):this.props.children}}]),t}(s.a.Component),Ft=function(e){var t=e.store;return s.a.createElement(re.a,{store:t},s.a.createElement(oe.a,null,s.a.createElement(Dt,null,s.a.createElement(Vt,null))))};n(73),n(75);document.addEventListener("DOMContentLoaded",function(){var e,t=document.getElementById("root");if(sessionStorage.getItem("userId")){var n={session:{user:{userId:parseInt(sessionStorage.getItem("userId"),10),username:sessionStorage.getItem("username")}}};e=ae(n)}else e=ae();c.a.render(s.a.createElement(Ft,{store:e}),t)})}},[[42,2,1]]]);
//# sourceMappingURL=main.fc7c7824.chunk.js.map