(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{22:function(t,e,r){t.exports=r(57)},299:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return c});var n=r(0),o=r.n(n),i=o.a.createContext(null);function a(t){var e=t.client,r=t.children;return o.a.createElement(i.Provider,{value:e},r)}function c(t){var e=Object(n.useContext)(i);if(t)return t;if(!e)throw new Error('Could not find "client" in the context or passed in as a prop. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via props.');return e}},303:function(t,e,r){var n=r(476).Symbol;t.exports=n},333:function(t,e,r){var n=r(475),o=r(480),i=r(482),a="[object Object]",c=Function.prototype,u=Object.prototype,l=c.toString,s=u.hasOwnProperty,f=l.call(Object);t.exports=function(t){if(!i(t)||n(t)!=a)return!1;var e=o(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==f}},474:function(t,e,r){__NEXT_REGISTER_PAGE("/item",function(){return t.exports=r(514),{page:t.exports.default}})},475:function(t,e,r){var n=r(303),o=r(478),i=r(479),a="[object Null]",c="[object Undefined]",u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:a:u&&u in Object(t)?o(t):i(t)}},476:function(t,e,r){var n=r(477),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},477:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(28))},478:function(t,e,r){var n=r(303),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[c]=r:delete t[c]),o}},479:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},480:function(t,e,r){var n=r(481)(Object.getPrototypeOf,Object);t.exports=n},481:function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},482:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},514:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(6),a=r.n(i),c=r(22),u=r.n(c),l=r(41),s=r(299);var f=Object(n.createContext)(null);var d=r(67),p=r(333),v=r.n(p);function b(t){if(!v()(t))return t;var e=Object.keys(t).sort().reduce(function(e,r){return e[r]=b(t[r]),e},{});return JSON.stringify(e)}var g=new WeakMap;function m(t){var e=g.get(t);return null==e&&(e=new Map,g.set(t,e)),e}function h(t){var e=t.query,r=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["query"]);return Object(d.a)(e)+"@@"+b(r)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function O(t,e){var r=void 0===e?{}:e,o=r.ssr,i=void 0===o||o,a=r.skip,c=void 0!==a&&a,u=r.suspend,d=void 0!==u&&u,p=r.pollInterval,v=r.notifyOnNetworkStatusChange,g=void 0!==v&&v,O=r.client,j=r.context,w=r.metadata,x=r.variables,E=r.fetchPolicy,S=r.errorPolicy,P=r.fetchResults,k=Object(s.b)(O),I=Object(n.useContext)(f),C=i&&I,N=c||null!=I&&!i,M=!C||"network-only"!==E&&"cache-and-network"!==E?E:"cache-first",_=Object(n.useMemo)(function(){return e={context:j,errorPolicy:S,fetchPolicy:M,fetchResults:P,metadata:w,notifyOnNetworkStatusChange:g,pollInterval:p,query:t,variables:x},Object.keys(e).reduce(function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t},{});var e},[t,p,g,j&&b(j),w&&b(w),x&&b(x),M,S,P]),R=Object(n.useMemo)(function(){return function(t,e){var r=m(t),n=h(e),o=r.get(n);return null==o&&(o=t.watchQuery(e),r.set(n,o)),o}(k,_)},[k,_]),q=Object(n.useState)(0),F=q[0],Q=q[1],T=Object(n.useMemo)(function(){var t={fetchMore:R.fetchMore.bind(R),refetch:R.refetch.bind(R),startPolling:R.startPolling.bind(R),stopPolling:R.stopPolling.bind(R),updateQuery:R.updateQuery.bind(R)},e=R.currentResult(),r=e.data;return(e.error||e.errors)&&(r=y({},e.data,(R.getLastResult()||{}).data)),y({},t,N?{data:void 0,error:void 0,loading:!1,networkStatus:void 0}:{data:r,error:e.errors&&e.errors.length>0?new l.a({graphQLErrors:e.errors}):e.error,errors:e.errors,loading:e.loading,networkStatus:d?void 0:e.networkStatus,partial:e.partial})},[N,F,R]);if(Object(n.useEffect)(function(){if(!N){var t=function(){(function(){Q(function(t){return t+1})})()},e=R.subscribe(t,t);return function(t,e){var r=m(t),n=h(e);r.delete(n)}(k,_),function(){e.unsubscribe()}}},[N,R]),function(t,e){if(t&&e&&"cache-first"!==e)throw new Error("Fetch policy "+e+" is not supported without 'suspend: false'")}(d,M),T.partial){if(d)throw R.result();C&&I.register(R.result())}return T}var j=r(4),w=r(15);function x(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);return x=function(){return t},t}var E=j.default.div.withConfig({displayName:"SingleItem__SingleItemStyles",componentId:"mflgtv-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"],function(t){return t.theme.bs}),S=a()(x()),P=function(t){var e=O(S,{variables:{id:t.id}}),r=e.error,n=e.loading,i=e.data;if(r)return o.a.createElement(w.a,{error:r});if(n)return o.a.createElement("p",null,"Loading...");if(!i.item)return o.a.createElement("p",null,"No Item Found for ",t.id);var a=i.item;return console.log(a),console.log(!0),o.a.createElement(E,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Sick Fits | ",a.title)),o.a.createElement("img",{src:a.largeImage,alt:a.title}),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,"Viewing ",a.title),o.a.createElement("p",null,a.description)))};e.default=function(t){return o.a.createElement("div",null,o.a.createElement(P,{id:t.query.id}))}}},[[474,1,0]]]);