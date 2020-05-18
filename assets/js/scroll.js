var ScrollOut=function(){"use strict"
function S(e,t,n){return e<t?t:n<e?n:e}function w(e){return+(0<e)-+(e<0)}var t={}
function A(e){return t[e]||(t[e]=e.replace(/([A-Z])/g,n))}function n(e){return"-"+e[0].toLowerCase()}var D=window,E=document.documentElement
function H(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||E).querySelectorAll(e)):[]}var L,P=function(e,t){for(var n in t)e.setAttribute("data-"+A(n),t[n])},b=[]
function x(){b.slice().forEach(function(e){return e()}),L=b.length?requestAnimationFrame(x):0}function O(){}var W="scroll",y="resize",_="addEventListener",N="removeEventListener",T=0
return function(h){var o,c,l,i,g,p,t,s=(h=h||{}).onChange||O,f=h.onHidden||O,u=h.onShown||O,a=h.cssProps?(o=h.cssProps,function(e,t){for(var n in t)(!0===o||o[n])&&e.style.setProperty("--"+A(n),(r=t[n],Math.round(1e4*r)/1e4))
var r}):O,e=h.scrollingElement,m=e?H(e)[0]:D,X=e?H(e)[0]:E,r=++T,v=function(e,t,n){return e[t+r]!==(e[t+r]=JSON.stringify(n))},n=function(){i=!0},d=function(){i&&(i=!1,l=H(h.targets||"[data-scroll]",H(h.scope||X)[0]).map(function(e){return{$:e,ctx:{}}}))
var v=X.clientWidth,d=X.clientHeight,e=w(-g+(g=X.scrollLeft||D.pageXOffset)),t=w(-p+(p=X.scrollTop||D.pageYOffset)),n=X.scrollLeft/(X.scrollWidth-v||1),r=X.scrollTop/(X.scrollHeight-d||1)
c={scrollDirX:e,scrollDirY:t,scrollPercentX:n,scrollPercentY:r},l.forEach(function(e){for(var t=e.$,n=t,r=0,o=0;r+=n.offsetLeft,o+=n.offsetTop,(n=n.offsetParent)&&n!==m;);var i=t.clientWidth||t.offsetWidth||0,c=t.clientHeight||t.offsetHeight||0,l=(S(r+i,g,g+v)-S(r,g,g+v))/i,s=(S(o+c,p,p+d)-S(o,p,p+d))/c,f=S((g-(i/2+r-v/2))/(v/2),-1,1),u=S((p-(c/2+o-d/2))/(d/2),-1,1),a=+(h.offset?h.offset<=p:(h.threshold||0)<l*s)
e.ctx={elementHeight:c,elementWidth:i,intersectX:1===l?0:w(r-g),intersectY:1===s?0:w(o-p),offsetX:r,offsetY:o,viewportX:f,viewportY:u,visible:a,visibleX:l,visibleY:s}})},Y=(t=function(){if(l){var e={scrollDirX:c.scrollDirX,scrollDirY:c.scrollDirY}
v(X,"_SA",e)&&P(X,e),v(X,"_S",c)&&a(X,c)
for(var t=l.length-1;-1<t;t--){var n=l[t],r=n.$,o=n.ctx,i=o.visible
v(r,"_SO",o)&&a(r,o),v(r,"_SV",i)&&(P(r,{scroll:i?"in":"out"}),o.index=t,s(r,o,X),(i?u:f)(r,o,X)),i&&h.once&&l.splice(t,1)}}},b.push(t),L||x(),function(){!(b=b.filter(function(e){return e!==t})).length&&L&&(L=0,cancelAnimationFrame(L))})
return n(),d(),D[_](y,d),m[_](W,d),{index:n,teardown:function(){Y(),D[N](y,d),m[N](W,d)},update:d}}}()