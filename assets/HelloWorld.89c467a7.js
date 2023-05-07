import{r as p}from"./index.ed373d49.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=p,_=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,i){var r,o={},s=null,a=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)c.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:_,type:t,key:s,ref:a,props:o,_owner:m.current}}n.Fragment=d;n.jsx=u;n.jsxs=u;f.exports=n;var l=f.exports;function b(){const[t,e]=p.useState("Hello World");return l.jsxs("div",{children:[l.jsx("p",{children:t}),l.jsx("button",{className:"p-4 bg-slate-600",onClick:()=>e("Texto Actualizado"),children:"Cambia el texto de arriba"})]})}export{b as default};
