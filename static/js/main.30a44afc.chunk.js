(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(77)},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getTotalAudioTime",function(){return He}),a.d(n,"updateCurrentAudioTime",function(){return ze}),a.d(n,"handleSeek",function(){return Ke});var r={};a.r(r),a.d(r,"handlePlay",function(){return Be}),a.d(r,"handlePause",function(){return Qe}),a.d(r,"playAudio",function(){return We}),a.d(r,"pauseAudio",function(){return Xe});var o={};a.r(o),a.d(o,"handleVolume",function(){return Je}),a.d(o,"handleMute",function(){return Ze}),a.d(o,"handleUnmute",function(){return $e}),a.d(o,"updateVolume",function(){return et});var l={};a.r(l),a.d(l,"toggleShuffle",function(){return tt}),a.d(l,"toggleLoop",function(){return at});var i=a(0),s=a.n(i),u=a(34),c=a.n(u),d=a(12),m=a(35),h=a.n(m),p=a(36),f=a(3),g=a(15),E=a.n(g),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return E.a.get("https://zing-lite-rails-api.herokuapp.com/api/songs/?off_set=".concat(e))}(e).then(function(e){return t(function(e){return{type:"RECEIVE_SONGS",payload:e}}(e))})}},v=function(e){return{type:"RECEIVE_USER_PLAYLIST",payload:e}},y=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists/?user_id=".concat(e),method:"get",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},withCredentials:!0})}(e).then(function(e){return t(function(e){return{type:"RECEIVE_USER_PLAYLISTS",payload:e}}(e))})}},O=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:e,withCredentials:!0})}(e).then(function(e){return t(v(e))})}},S=function(e,t){return function(a){return function(e,t){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/playlists/".concat(e),method:"patch",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:t,withCredentials:!0})}(e,t).then(function(e){return a(v(e))})}},I=function(e){return function(t){return function(e){return E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/searches/?query=".concat(e),method:"get"})}(e).then(function(e){return t(function(e){return{type:"RECEIVE_QUERY_DATA",payload:e}}(e))})}},j={2:{id:2,title:"Ha Trang",url:"https://www.dropbox.com/s/ezijh6nzgutwah9/HaTrang.mp3?dl=1",artistId:7,albumId:12}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.songs);default:return e}},R={7:{id:7,name:"Quang Dung",avatarUrl:"https://www.dropbox.com/s/vcb2rfo9ohzzd62/QuangDung.jpg?dl=1"}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.artists);default:return e}},N={12:{id:12,name:"Goi Giac Mo Xua",coverImageUrl:"https://www.dropbox.com/s/8qz1syuymksj5kt/GoiGiacMoXua.jpg?dl=1"}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SONGS":case"RECEIVE_USER_PLAYLISTS":case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,t.payload.data.albums);default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_PLAYLISTS":return Object(f.a)({},e,t.payload.data.playlists);case"RECEIVE_USER_PLAYLIST":return Object(f.a)({},e,t.payload.data);case"REMOVE_USER_PLAYLIST":var a=Object(f.a)({},e);return delete a[t.playlistId],a;default:return e}},w={songIds:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUERY_DATA":return Object(f.a)({},e,{songIds:t.payload.data.searchResults.songIds});case"CLEAR_SEARCH_RESULTS":return w;default:return e}},L=Object(d.c)({songs:_,artists:C,albums:P,userPlaylists:k,searchResults:A}),T=a(17),U=function(e){return{type:"USER_CLICK_PLAY",songId:e}},V=a(40),F=function(e,t,a){var n=Object(T.a)(e);return e.includes(t)||(n=[].concat(Object(T.a)(e),[t])),n.length===a.length&&(n=[]),n},x=function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}},D=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},M=function(e){var t={userId:e.data.id,username:e.data.username};return sessionStorage.setItem("CSRF-TOKEN",e.data.csrfToken),sessionStorage.setItem("username",t.username),sessionStorage.setItem("userId",t.userId),t},G=function(e){return function(t){return(a=e,E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/session",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:a,withCredentials:!0})).then(function(e){return t(x(M(e)))}).catch(function(e){return t(D(e.response.data))});var a}},Y=function(e){return function(t){return(a=e,E.a.request({url:"https://zing-lite-rails-api.herokuapp.com/api/users",method:"post",headers:{"X-CSRF-Token":sessionStorage.getItem("CSRF-TOKEN")},data:a,withCredentials:!0})).then(function(e){return t(x(M(e)))}).catch(function(e){return t(D(e.response.data))});var a}},q={playingSongIndex:0,songIds:[2],prevSongIndex:0,playedSongIndices:[],currentPlaylist:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORWARD":return function(e){var t=e.songIds,a=e.playingSongIndex,n=e.playedSongIndices,r=a+1;r>t.length-1&&(r=0);var o=F(n,a,t);return Object(f.a)({},e,{playingSongIndex:r,prevSongIndex:a,playedSongIndices:o})}(e);case"BACKWARD":return function(e){var t=e.songIds,a=e.playingSongIndex,n=e.playedSongIndices,r=e.prevSongIndex,o=r-1;o<0&&(o=t.length-1);var l=F(n,a,t);return Object(f.a)({},e,{playingSongIndex:r,prevSongIndex:o,playedSongIndices:l})}(e);case"SHUFFLE":return function(e){var t,a=e.songIds,n=e.playedSongIndices,r=e.playingSongIndex,o=[].concat(Object(T.a)(n),[r]),l=a.map(function(e,t){return t}).filter(function(e){return!o.includes(e)});t=0===l.length?Math.floor(Math.random()*a.length):1===l.length?Object(V.a)(l,1)[0]:l[Math.floor(Math.random()*l.length)];var i=F(n,r,a);return Object(f.a)({},e,{playingSongIndex:t,prevSongIndex:r,playedSongIndices:i})}(e);case"USER_CLICK_PLAY":var a=e.songIds,n=e.playingSongIndex,r=a.slice();return r=r.filter(function(e){return e!==t.songId}),r=[].concat(Object(T.a)(r.slice(0,n+1)),[t.songId],Object(T.a)(r.slice(n+2,r.length))),Object(f.a)({},e,{songIds:r});case"CHANGE_SONG":return Object(f.a)({},e,{playingSongIndex:e.songIds.indexOf(t.songId)});case"REMOVE_SONG":return function(e,t){var a=e.songIds,n=e.playingSongIndex,r=e.playedSongIndices;if(1===a.length)return e;var o,l=a.indexOf(t.songId),i=a.filter(function(e){return e!==t.songId}),s=r.filter(function(e){return e!==n});return l>n?o=n:l<=n&&(o=n-1)<0&&(o=i.length-1),Object(f.a)({},e,{songIds:i,playedSongIndices:s,playingSongIndex:o})}(e,t);case"START_PLAYLIST":return Object(f.a)({},q,{songIds:t.songIds,currentPlaylist:t.playlistId});case"RECEIVE_USER_PLAYLIST":return Object(f.a)({},e,{currentPlaylist:parseInt(Object.keys(t.payload.data)[0],10)});case"RECEIVE_USER_LOGOUT":return q;default:return e}},z={id:null,username:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_CURRENT_USER":return t.currentUser;case"RECEIVE_USER_LOGOUT":return z;default:return e}},B=Object(d.c)({audioPlayer:H,user:K}),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SESSION_ERRORS":return t.errors;case"CLEAR_SESSION_ERRORS":case"RECEIVE_CURRENT_USER":return[];default:return e}},W=Object(d.c)({session:Q}),X={homePage:!0,profilePage:!0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;switch((arguments.length>1?arguments[1]:void 0).type){case"RECEIVE_SONGS":return Object(f.a)({},e,{homePage:!1});case"RECEIVE_USER_PLAYLISTS":return Object(f.a)({},e,{profilePage:!1});default:return e}},Z=Object(d.c)({loading:J}),$=Object(d.c)({entities:L,session:B,errors:W,ui:Z}),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.d)($,e,Object(d.a)(p.a,h.a))},te=a(4),ae=a(80),ne=a(81),re=a(70),oe=a(79),le=a(82),ie=a(41),se=function(e){var t=e.session;return Boolean(t.user.userId)},ue=function(e){return{loggedIn:se(e)}},ce=Object(le.a)(Object(te.b)(ue,null)(function(e){var t=e.component,a=e.path,n=e.loggedIn,r=e.exact;return s.a.createElement(re.a,{path:a,exact:r,render:function(e){return n?s.a.createElement(oe.a,{to:"/profile"}):s.a.createElement(t,e)}})})),de=Object(le.a)(Object(te.b)(ue,null)(function(e){e.toPath;var t=e.component,a=e.loggedIn,n=Object(ie.a)(e,["toPath","component","loggedIn"]);return s.a.createElement(re.a,Object.assign({},n,{render:function(e){return a?s.a.createElement(t,e):s.a.createElement(oe.a,{to:"/profile/login"})}}))})),me=a(5),he=a(6),pe=a(8),fe=a(7),ge=a(9),Ee=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={hasFetchedPlaylist:!1},e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchSomeSongs,a=e.fetchUserPlaylists,n=e.userId,r=this.state.hasFetchedPlaylist;t(0),n&&!r&&(a(n),this.setState({hasFetchedPlaylist:!0}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.fetchUserPlaylists,a=e.userId,n=this.state.hasFetchedPlaylist;a&&!n&&(t(a),this.setState({hasFetchedPlaylist:!0}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null)}}]),t}(s.a.Component);Ee.defaultProps={userId:null};var be=Ee,ve=Object(te.b)(function(e){return{userId:e.session.user.userId}},function(e){return{fetchSomeSongs:function(t){return e(b(t))},fetchUserPlaylists:function(t){return e(y(t))}}})(be),ye=a(2),Oe=a(78),Se={textDecoration:"underline",backgroundColor:"rgba(192, 108, 132, 1)"},Ie=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).handleLogout=e.handleLogout.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handleLogout",value:function(){(0,this.props.logout)(),window.location.hash="/home"}},{key:"render",value:function(){var e=this.props.isLoggedIn;return s.a.createElement(s.a.Fragment,null,s.a.createElement(Oe.a,{to:"/home",className:"Nav-Home",activeStyle:Se},"Home"),s.a.createElement(Oe.a,{to:"/playlist/",className:"Nav-Playlist",activeStyle:Se},"Playlist"),s.a.createElement(Oe.a,{to:"/about",className:"Nav-About",activeStyle:Se},"About"),s.a.createElement(Oe.a,{to:"/search",className:"Nav-Search",activeStyle:Se},"Search"),s.a.createElement(Oe.a,{to:"/profile",className:"Nav-Profile",activeStyle:Se},"Profile"),s.a.createElement("button",{className:"Nav-Logout ".concat(!e&&"Nav-Logout-loggedOut"),type:"button",onClick:this.handleLogout},"Logout"))}}]),t}(s.a.Component),je=Object(le.a)(Object(te.b)(function(e){var t=e.session;return{isLoggedIn:Boolean(t.user.userId)}},function(e){return{logout:function(){return e(function(e){sessionStorage.removeItem("CSRF-TOKEN"),sessionStorage.removeItem("username"),sessionStorage.removeItem("userId"),e({type:"RECEIVE_USER_LOGOUT"})})}}})(Ie)),_e=function(e,t,a){if(!e)return{};var n=t[e.artistId],r=a[e.albumId];return{id:e.id,title:e.title,url:e.url,artist:n.name,artistAvatar:n.avatarUrl,album:r.name,coverImage:r.coverImageUrl}},Re=function(e){var t=e.entities,a=t.songs,n=t.artists,r=t.albums;return Object.values(a).map(function(e){return _e(e,n,r)})},Ce=function(e){var t=e.entities,a=e.session.audioPlayer,n=t.songs,r=t.artists,o=t.albums;return a.songIds.map(function(e){return _e(n[e],r,o)})},Ne=function(e){var t=e.session.audioPlayer;return t.songIds[t.playingSongIndex]},Pe=function(e){var t=e.title,a=e.artist,n=e.album;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",null,t),s.a.createElement("h5",null,"".concat(a," - ").concat(n)))},ke=a(39),we=function(e){function t(e){var a;return Object(me.a)(this,t),(a=Object(pe.a)(this,Object(fe.a)(t).call(this,e))).state={query:""},a.handleChange=a.handleChange.bind(Object(ye.a)(Object(ye.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(ye.a)(Object(ye.a)(a))),a.debounceSearch=Object(ke.debounce)(function(t){return e.fetchQueryData(t)},500),a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.debounceSearch.flush(),this.setState({query:""})}},{key:"handleChange",value:function(e){this.setState({query:e.target.value});var t=this.props.clearSearchResults,a=e.target.value;a&&""!==a?this.debounceSearch(a):(this.debounceSearch.clear(),t())}},{key:"render",value:function(){var e=this.state.query;return s.a.createElement("form",{className:"Input-Form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"Input-Form__Input",type:"text",placeholder:"Search for songs here...",value:e,onChange:this.handleChange}),s.a.createElement("div",{className:"Input-Form__Buttons"},s.a.createElement("button",{type:"button",onClick:this.handleSubmit},s.a.createElement("h6",null,"Search"))))}}]),t}(s.a.Component),Ae=Object(te.b)(null,function(e){return{fetchQueryData:function(t){return e(I(t))},clearSearchResults:function(){return e({type:"CLEAR_SEARCH_RESULTS"})}}})(we),Le=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handlePlay",value:function(e){var t=this.props,a=t.userClickPlay,n=t.forward;return function(){a(e),n()}}},{key:"render",value:function(){var e=this,t=this.props.songs;return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ae,null),s.a.createElement("ul",{className:"Col-List"},t.map(function(t){return s.a.createElement("li",{className:"Col-List__Item",key:t.id,role:"presentation",onClick:e.handlePlay(t.id)},s.a.createElement(Pe,t))})))}}]),t}(s.a.Component),Te=Object(te.b)(function(e){var t=e.entities,a=t.songs,n=t.artists,r=t.albums;return{songs:t.searchResults.songIds.map(function(e){return _e(a[e],n,r)})}},function(e){return{forward:function(){return e({type:"FORWARD"})},userClickPlay:function(t){return e(U(t))}}})(Le),Ue=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handlePlay",value:function(){var e=this.props,t=e.id,a=e.userClickPlay,n=e.forward;a(t),n()}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.artist,n=e.coverImage;return s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("figure",null,s.a.createElement("img",{src:n,alt:t}),s.a.createElement("button",{type:"button",onClick:this.handlePlay},s.a.createElement("i",{className:"far fa-play-circle fade"}))),s.a.createElement("h5",null,t),s.a.createElement("h5",{className:"image-wrapper__artist"},a))}}]),t}(s.a.Component),Ve=function(e){return e.loading?s.a.createElement("div",{className:"load-icon"}):null},Fe=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={offSet:20},e.handleScroll=e.handleScroll.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handleScroll",value:function(e){var t=this.state.offSet;if(!(t>35)){var a=this.props.fetchSomeSongs,n=e.target;n.scrollHeight-n.scrollTop<=n.clientHeight+1&&(a(t),this.setState(function(e){return{offSet:e.offSet+20}}))}}},{key:"render",value:function(){var e=this.props,t=e.songs,a=e.forward,n=e.userClickPlay,r=e.loading;return r?s.a.createElement(Ve,{loading:r}):s.a.createElement("ul",{className:"Row-List",onScroll:this.handleScroll},t.map(function(e){return s.a.createElement("li",{className:"Row-List__Item",key:e.id},s.a.createElement(Ue,Object.assign({},e,{userClickPlay:n,forward:a})))}))}}]),t}(s.a.Component),xe=Object(te.b)(function(e){return{songs:Re(e),loading:e.ui.loading.homePage}},function(e){return{fetchSomeSongs:function(t){return e(b(t))},forward:function(){return e({type:"FORWARD"})},userClickPlay:function(t){return e(U(t))}}})(Fe),De=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={loaded:!1},e.loaded=e.loaded.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"loaded",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.coverImageUrl,n=e.handlePlay,r=e.songIds,o=e.id,l=this.state.loaded;return s.a.createElement("div",{className:"image-wrapper"},s.a.createElement("figure",null,s.a.createElement("img",{className:"profile__playlist__image".concat(l?"--loaded":""),src:a,onLoad:this.loaded,alt:t}),s.a.createElement("button",{type:"button",onClick:n(r,o)},s.a.createElement("i",{className:"far fa-play-circle"}))),s.a.createElement("h5",{className:"profile__playlist__name"},t))}}]),t}(s.a.Component),Me=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).handlePlay=e.handlePlay.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handlePlay",value:function(e,t){var a=this.props.play;return function(){a(e,t),window.location.hash="/playlist"}}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.userPlaylists,r=t.loading;return r?s.a.createElement(Ve,{loading:r}):s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",{className:"profile__playlist__header"},s.a.createElement("span",null,"Hi, ".concat(a.username,"! Below are your personal playlists"))),s.a.createElement("ul",{className:"Row-List profile__playlist"},n.map(function(t){return s.a.createElement("li",{className:"Row-List__Item",key:t.id},s.a.createElement(De,Object.assign({},t,{userId:a.userId,handlePlay:e.handlePlay,loading:!0})))})))}}]),t}(s.a.Component),Ge=Object(te.b)(function(e){var t=e.entities,a=e.session,n=e.ui;return{userPlaylists:Object.values(t.userPlaylists).reverse(),user:a.user,loading:n.loading.profilePage}},function(e){return{play:function(t,a){return e(function(e,t){return{type:"START_PLAYLIST",songIds:e,playlistId:t}}(t,a))}}})(Me),Ye=function(e){var t=e.session.audioPlayer,a=t.songIds,n=t.playedSongIndices;return a.length-1===n.length},qe=function(e){var t=Math.floor(e/60),a=Math.floor(e-60*t);return a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)};function He(){var e=this.audioRef.current.duration;this.setState({totalAudioTime:qe(e)})}function ze(){var e,t=this.audioRef.current,a=t.duration,n=t.currentTime;e=a?n/a*100:0,this.setState({currentAudioTime:qe(n),seekValue:e})}function Ke(e){var t=this.audioRef.current.duration*(e.target.value/100);this.audioRef.current.currentTime=t}function Be(){this.setState({isPlaying:!0})}function Qe(){this.setState({isPlaying:!1})}function We(){this.audioRef.current.play()}function Xe(){this.audioRef.current.pause()}function Je(e){var t=e.target.value/100;this.audioRef.current.volume=t}function Ze(){var e=this.audioRef.current.volume;this.setState({preMuteVolume:100*e}),this.audioRef.current.volume=0}function $e(e){var t=this;return function(){t.audioRef.current.volume=e/100}}function et(){var e=this.audioRef.current.volume;this.setState({volume:100*e})}function tt(e){var t=this;return function(){t.setState({isOnShuffle:!e})}}function at(e){var t=this;return function(){t.setState({isOnLoop:!e})}}var nt=Object(f.a)({},n,r,o,l),rt=function(e){var t=e.audioRef,a=e.url,n=e.isEndOfLoop,r=e.isOnLoop,o=e.isOnShuffle,l=e.forward,i=e.shuffle,u=e.getTotalAudioTime,c=e.updateCurrentAudioTime,d=e.updateVolume,m=e.handlePause,h=e.handlePlay,p=e.playAudio;return s.a.createElement("audio",{src:a,ref:t,onLoadedMetadata:u,onDurationChange:p,onTimeUpdate:c,onVolumeChange:d,onPause:m,onPlay:h,onEnded:function(){n&&!r||(o?i():l(),window.setTimeout(function(){p()},0))}})},ot=function(e){var t=e.album,a=e.coverImage;return s.a.createElement("figure",{className:"SpinningDisc"},s.a.createElement("img",{src:a,alt:t}))},lt=function(e){var t=e.title,a=e.artist,n=e.artistAvatar;return s.a.createElement("div",{className:"Marquee"},s.a.createElement("p",null,s.a.createElement("img",{src:n,alt:a}),s.a.createElement("span",null,"".concat(t," - ").concat(a))))},it=function(e){var t=e.isPlaying,a=e.playAudio,n=e.pauseAudio;return t?s.a.createElement("button",{type:"button",onClick:n},s.a.createElement("i",{className:"far fa-pause-circle active"})):s.a.createElement("button",{type:"button",onClick:a},s.a.createElement("i",{className:"far fa-play-circle"}))},st=function(e){var t=e.forward,a=e.playAudio;return s.a.createElement("button",{type:"button",onClick:function(){t(),window.setTimeout(function(){a()},0)}},s.a.createElement("i",{className:"fas fa-step-forward"}))},ut=function(e){var t=e.isOnShuffle,a=e.toggleShuffle;return s.a.createElement("button",{type:"button",onClick:a(t)},s.a.createElement("i",{className:"fas fa-random ".concat(t&&"active")}))},ct=function(e){var t=e.backward,a=e.playAudio;return s.a.createElement("button",{type:"button",onClick:function(){t(),window.setTimeout(function(){a()},0)}},s.a.createElement("i",{className:"fas fa-step-backward"}))},dt=function(e){var t=e.seekValue,a=e.handleSeek,n=e.currentAudioTime,r=e.totalAudioTime;return s.a.createElement("div",{className:"SeekSlider"},s.a.createElement("input",{type:"range",min:"0",max:"100",step:"1",value:t,onChange:a}),s.a.createElement("p",null,"".concat(n,"/").concat(r)))},mt=function(e){var t,a=e.volume,n=e.preMuteVolume,r=e.handleMute,o=e.handleUnmute;e.handleVolume;return t=0===a?s.a.createElement("button",{type:"button",className:"volume-button",onClick:o(n)},s.a.createElement("i",{className:"fas fa-volume-mute"})):s.a.createElement("button",{type:"button",className:"volume-button",onClick:r},s.a.createElement("i",{className:"fas fa-volume-up active"})),s.a.createElement(s.a.Fragment,null,t)},ht=function(e){var t=e.isOnLoop,a=e.toggleLoop;return s.a.createElement("button",{type:"button",onClick:a(t)},s.a.createElement("i",{className:"fas fa-redo-alt ".concat(t&&"active")}))},pt=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={isPlaying:!1,isOnLoop:!1,isOnShuffle:!1,seekValue:0,totalAudioTime:"0:00",currentAudioTime:"0:00",volume:50,preMuteVolume:50},e.audioRef=s.a.createRef(),e.getTotalAudioTime=nt.getTotalAudioTime.bind(Object(ye.a)(Object(ye.a)(e))),e.updateCurrentAudioTime=nt.updateCurrentAudioTime.bind(Object(ye.a)(Object(ye.a)(e))),e.handleSeek=nt.handleSeek.bind(Object(ye.a)(Object(ye.a)(e))),e.handlePlay=nt.handlePlay.bind(Object(ye.a)(Object(ye.a)(e))),e.handlePause=nt.handlePause.bind(Object(ye.a)(Object(ye.a)(e))),e.playAudio=nt.playAudio.bind(Object(ye.a)(Object(ye.a)(e))),e.pauseAudio=nt.pauseAudio.bind(Object(ye.a)(Object(ye.a)(e))),e.handleVolume=nt.handleVolume.bind(Object(ye.a)(Object(ye.a)(e))),e.handleMute=nt.handleMute.bind(Object(ye.a)(Object(ye.a)(e))),e.handleUnmute=nt.handleUnmute.bind(Object(ye.a)(Object(ye.a)(e))),e.updateVolume=nt.updateVolume.bind(Object(ye.a)(Object(ye.a)(e))),e.toggleShuffle=nt.toggleShuffle.bind(Object(ye.a)(Object(ye.a)(e))),e.toggleLoop=nt.toggleLoop.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.url,n=e.artist,r=e.artistAvatar,o=e.album,l=e.coverImage,i=e.isEndOfLoop,u=e.forward,c=e.backward,d=e.shuffle,m=this.state,h=m.isPlaying,p=m.isOnLoop,f=m.isOnShuffle,g=m.volume,E=m.preMuteVolume,b=m.seekValue,v=m.currentAudioTime,y=m.totalAudioTime;return s.a.createElement(s.a.Fragment,null,s.a.createElement(rt,{audioRef:this.audioRef,url:a,forward:u,shuffle:d,isEndOfLoop:i,isOnLoop:p,isOnShuffle:f,getTotalAudioTime:this.getTotalAudioTime,updateCurrentAudioTime:this.updateCurrentAudioTime,updateVolume:this.updateVolume,handlePause:this.handlePause,handlePlay:this.handlePlay,playAudio:this.playAudio}),s.a.createElement("div",{className:"AudioPlayerContainer"},s.a.createElement(ot,{album:o,coverImage:l}),s.a.createElement(lt,{title:t,artist:n,artistAvatar:r}),s.a.createElement("div",{className:"Controls1"},s.a.createElement(ct,{backward:c,playAudio:this.playAudio}),s.a.createElement(it,{isPlaying:h,playAudio:this.playAudio,pauseAudio:this.pauseAudio}),s.a.createElement(st,{forward:u,playAudio:this.playAudio})),s.a.createElement("div",{className:"Controls2"},s.a.createElement(ut,{isOnShuffle:f,toggleShuffle:this.toggleShuffle}),s.a.createElement(ht,{isEndOfLoop:i,isOnLoop:p,toggleLoop:this.toggleLoop}),s.a.createElement(mt,{volume:g,preMuteVolume:E,handleMute:this.handleMute,handleUnmute:this.handleUnmute,handleVolume:this.handleVolume})),s.a.createElement(dt,{seekValue:b,currentAudioTime:v,totalAudioTime:y,handleSeek:this.handleSeek})))}}]),t}(s.a.Component),ft=Object(te.b)(function(e){return Object(f.a)({},function(e){var t=e.entities,a=e.session,n=t.songs,r=t.artists,o=t.albums,l=a.audioPlayer,i=n[l.songIds[l.playingSongIndex]];return _e(i,r,o)}(e),{isEndOfLoop:Ye(e)})},function(e){return{forward:function(){return e({type:"FORWARD"})},backward:function(){return e({type:"BACKWARD"})},shuffle:function(){return e({type:"SHUFFLE"})}}})(pt),gt=function(){return s.a.createElement("span",{className:"playlist-item__sound-wave"},s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}),s.a.createElement("span",{className:"sound-wave__wave"}))},Et=function(e){var t=e.id,a=e.title,n=e.artist,r=e.album,o=e.isPlaying,l=e.handleRemoveSong;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"playlist-item__inner-wrapper"},o?s.a.createElement(gt,null):null,s.a.createElement("span",null,s.a.createElement("h4",{className:"playlist-item__title"},a)),s.a.createElement("button",{className:"playlist-item__X",type:"button",onClick:l(t)},s.a.createElement("h6",null,"remove"))),s.a.createElement("h5",null,"".concat(n," - ").concat(r)))},bt=function(e){function t(e){var a;return Object(me.a)(this,t),(a=Object(pe.a)(this,Object(fe.a)(t).call(this,e))).state={newName:"".concat(e.playlistName||"")},a.handleNew=a.handleNew.bind(Object(ye.a)(Object(ye.a)(a))),a.handleEdit=a.handleEdit.bind(Object(ye.a)(Object(ye.a)(a))),a.handleChange=a.handleChange.bind(Object(ye.a)(Object(ye.a)(a))),a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.playlistName;this.setState({newName:"".concat(t||"")})}},{key:"makePlaylistData",value:function(){var e=this.state.newName,t=this.props;return{playlist:{name:e,user_id:t.userId,song_ids:t.songIds}}}},{key:"handleNew",value:function(){(0,this.props.createPlaylist)(this.makePlaylistData())}},{key:"handleEdit",value:function(){var e=this.props,t=e.playlistId;(0,e.editPlaylist)(t,this.makePlaylistData())}},{key:"handleChange",value:function(e){this.setState({newName:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.playlistName,a=e.userId,n=this.state.newName;return a?s.a.createElement("form",{className:"Input-Form",onSubmit:function(e){return e.preventDefault()}},s.a.createElement("input",{className:"Input-Form__Input",type:"text",placeholder:"Name this playlist...",value:n,onChange:this.handleChange}),s.a.createElement("div",{className:"Input-Form__Buttons"},t?s.a.createElement("button",{type:"button",onClick:this.handleEdit},s.a.createElement("h6",null,"Save/Edit")):null,s.a.createElement("button",{type:"button",onClick:this.handleNew},s.a.createElement("h6",null,"Create New")))):null}}]),t}(s.a.Component);bt.defaultProps={userId:null,playlistId:void 0,playlistName:void 0};var vt=bt,yt=Object(te.b)(function(e){var t=e.session.audioPlayer.currentPlaylist,a=function(e,t){var a,n=e.entities;try{a=n.userPlaylists[t].name}catch(r){a=void 0}return a}(e,t);return{userId:e.session.user.userId,playlistId:t,playlistName:a}},function(e){return{createPlaylist:function(t){return e(O(t))},editPlaylist:function(t,a){return e(S(t,a))}}})(vt),Ot=function(e){function t(e){var a;return Object(me.a)(this,t),(a=Object(pe.a)(this,Object(fe.a)(t).call(this,e))).handleChangeSong=a.handleChangeSong.bind(Object(ye.a)(Object(ye.a)(a))),a.handleRemoveSong=a.handleRemoveSong.bind(Object(ye.a)(Object(ye.a)(a))),a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"handleChangeSong",value:function(e){var t=this.props.changeSong;return function(a){a.stopPropagation(),t(e)}}},{key:"handleRemoveSong",value:function(e){var t=this.props.removeSong;return function(a){a.stopPropagation(),t(e)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.songs,n=t.playingSongId;return s.a.createElement(s.a.Fragment,null,s.a.createElement(yt,{songIds:a.map(function(e){return e.id})}),s.a.createElement("ul",{className:"Col-List"},a.map(function(t){return s.a.createElement("li",{className:"\n              Col-List__Item playlist-item \n              ".concat(t.id===n?"playlist-item--playing":"","\n            "),key:t.id,role:"presentation",onClick:e.handleChangeSong(t.id)},s.a.createElement(Et,Object.assign({},t,{isPlaying:t.id===n,handleRemoveSong:e.handleRemoveSong})))})))}}]),t}(s.a.Component),St=Object(te.b)(function(e){return{songs:Ce(e),playingSongId:Ne(e)}},function(e){return{changeSong:function(t){return e(function(e){return{type:"CHANGE_SONG",songId:e}}(t))},removeSong:function(t){return e(function(e){return{type:"REMOVE_SONG",songId:e}}(t))}}})(Ot),It=a(19),jt=a(72),_t=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={username:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(ye.a)(Object(ye.a)(e))),e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.clearSessionErrors;0!==e.errors.length&&t()}},{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(It.a)({},e,a.target.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.processForm,a=this.state;t({user:{username:a.username,password:a.password}}),this.setState({username:"",password:""})}},{key:"render",value:function(){var e=this.props,t=e.formType,a=e.errors,n=this.state,r=n.username,o=n.password;return s.a.createElement("form",{className:"session-form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"session-form__input",type:"text",placeholder:"Username",value:r,onChange:this.update("username")}),s.a.createElement("br",null),s.a.createElement("input",{className:"session-form__input",type:"password",placeholder:"Password",value:o,onChange:this.update("password")}),s.a.createElement("ul",{className:"session-form__errors"},a.map(function(e,t){return s.a.createElement("li",{key:t},e)})),s.a.createElement("br",null),s.a.createElement("button",{className:"session-form__button",type:"submit"},t),s.a.createElement("button",{className:"session-form__button",type:"submit"},"DEMO"),"LOG IN"===t?s.a.createElement("p",{className:"session-form__text"},"Don't have an account? ",s.a.createElement(jt.a,{className:"session-form__link",to:"/profile/signup"},"Signup")):s.a.createElement("p",null,"Already have an account? ",s.a.createElement(jt.a,{className:"session-form__link",to:"/profile/login"},"Login")))}}]),t}(s.a.Component),Rt=Object(te.b)(function(e){return{errors:e.errors.session,formType:"LOG IN"}},function(e){return{processForm:function(t){return e(G(t))},clearSessionErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(_t),Ct=Object(te.b)(function(e){return{errors:e.errors.session,formType:"SIGN UP"}},function(e){return{processForm:function(t){return e(Y(t))},clearSessionErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(_t),Nt=function(){return s.a.createElement(Ve,{loading:!0})},Pt=Object(le.a)(Object(te.b)(function(e){var t=e.session;return{isLoggedIn:Boolean(t.user.userId)}},null)(function(e){var t=e.isLoggedIn;return s.a.createElement("div",{className:"Site ".concat(t&&"Site-LoggedIn")},s.a.createElement(je,null),s.a.createElement("div",{className:"Main"},s.a.createElement(ne.a,null,s.a.createElement(de,{path:"/playlist/:playlistId",component:St}),s.a.createElement(re.a,{path:"/playlist",component:St}),s.a.createElement(re.a,{path:"/home",component:xe}),s.a.createElement(re.a,{path:"/search",component:Te}),s.a.createElement(re.a,{path:"/about",component:Nt}),s.a.createElement(ce,{path:"/profile/login",component:Rt}),s.a.createElement(ce,{path:"/profile/signup",component:Ct}),s.a.createElement(de,{path:"/profile",component:Ge}),s.a.createElement(oe.a,{to:"/home"}))),s.a.createElement("aside",{className:"Aside"},s.a.createElement(re.a,{path:"/",component:ve}),s.a.createElement(re.a,{path:"/",component:ft})))})),kt=function(e){function t(){var e;return Object(me.a)(this,t),(e=Object(pe.a)(this,Object(fe.a)(t).call(this))).state={hasError:!1},e}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?s.a.createElement(oe.a,{to:"/home"}):this.props.children}}]),t}(s.a.Component),wt=function(e){var t=e.store;return s.a.createElement(te.a,{store:t},s.a.createElement(ae.a,null,s.a.createElement(kt,null,s.a.createElement(Pt,null))))};a(73),a(75);document.addEventListener("DOMContentLoaded",function(){var e,t=document.getElementById("root");if(sessionStorage.getItem("userId")){var a={session:{user:{userId:parseInt(sessionStorage.getItem("userId"),10),username:sessionStorage.getItem("username")}}};e=ee(a)}else e=ee();c.a.render(s.a.createElement(wt,{store:e}),t)})}},[[42,2,1]]]);
//# sourceMappingURL=main.30a44afc.chunk.js.map