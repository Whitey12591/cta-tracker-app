(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,a){t.exports=a(49)},27:function(t,e,a){},46:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(13),i=a.n(o),s=(a(27),a(3)),l=a.n(s),c=a(14),m=a(15),d=a(16),u=a(19),p=a(17),f=a(20),v=a(18),D=a.n(v),h=(a(46),a(2)),w=a.n(h),N=function(t){var e=t.eta,a=e.arrT,r=e.prdt,o=e.destNm,i=w.a.utc(r).format("DD/MM/YYYY HH:mm:ss"),s=w.a.utc(a).format("DD/MM/YYYY HH:mm:ss");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"destination"},o),n.a.createElement("div",{className:"time-until"},w.a.utc(w()(s,"DD/MM/YYYY HH:mm:ss").diff(w()(i,"DD/MM/YYYY HH:mm:ss"))).format("m")+" min"),n.a.createElement("div",null,w.a.utc(a).format("h:mm a"))))},b=(a(48),{ctatt:{tmst:new Date,errCd:"0",errNm:null,eta:[{staId:"40360",stpId:"30070",staNm:"Southport",stpDe:"Service toward Kimball",rn:"426",rt:"Brn",destSt:"30249",destNm:"Kimball",trDr:"1",prdt:new Date,arrT:new Date,isApp:"0",isSch:"0",isDly:"0",isFlt:"0",flags:null,lat:"41.93276",lon:"-87.65313",heading:"359"},{staId:"40360",stpId:"30071",staNm:"Southport",stpDe:"Service toward Loop",rn:"422",rt:"Brn",destSt:"30249",destNm:"Loop",trDr:"5",prdt:new Date,arrT:new Date,isApp:"0",isSch:"0",isDly:"0",isFlt:"0",flags:null,lat:"41.96175",lon:"-87.67517",heading:"179"},{staId:"40360",stpId:"30071",staNm:"Southport",stpDe:"Service toward Loop",rn:"423",rt:"Brn",destSt:"30249",destNm:"Loop",trDr:"5",prdt:new Date,arrT:new Date,isApp:"0",isSch:"0",isDly:"0",isFlt:"0",flags:null,lat:"41.96609",lon:"-87.70882",heading:"89"},{staId:"40360",stpId:"30070",staNm:"Southport",stpDe:"Service toward Kimball",rn:"433",rt:"Brn",destSt:"30249",destNm:"Kimball",trDr:"1",prdt:new Date,arrT:new Date,isApp:"0",isSch:"0",isDly:"0",isFlt:"0",flags:null,lat:"41.91041",lon:"-87.63886",heading:"269"}]}}),S=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).loadData=Object(c.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D.a.get("https://cors-anywhere.herokuapp.com/".concat("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=d4102257b59c4a0a82809fec190a2140&outputType=JSON&mapid=40360")).then(function(t){var e=t.data.ctatt.eta,r=e.filter(function(t,e){return"Loop"===t.destNm}),n=e.filter(function(t,e){return"Kimball"===t.destNm});a.setState({isLoaded:!0,loopArrivals:r,kimballArrivals:n})});case 1:case"end":return t.stop()}},t)})),a.loadMockData=function(){var t=b.ctatt.eta,e=t.filter(function(t,e){return"Loop"===t.destNm}),r=t.filter(function(t,e){return"Kimball"===t.destNm});a.setState({isLoaded:!0,loopArrivals:e,kimballArrivals:r})},a.state={error:!1,isLoaded:!1,loopArrivals:[],kimballArrivals:[],time:new Date},a}return Object(f.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.loadData(),setInterval(this.loadData,1e4)}},{key:"render",value:function(){var t=this.state,e=t.error,a=t.isLoaded,r=t.loopArrivals,o=t.kimballArrivals;return e?n.a.createElement("div",null,"Error: "):a?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"app-container"},r.map(function(t,e){return n.a.createElement(N,{key:e,eta:t})})),n.a.createElement("div",{className:"app-container"},o.map(function(t,e){return n.a.createElement(N,{key:e,eta:t})}))):n.a.createElement("div",null,"Loading...")}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.14321a82.chunk.js.map