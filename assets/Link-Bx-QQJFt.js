import{x as $,k as j,aC as y,Y as M,v as _,y as N,G as h,_ as a,r as x,w as P,b as U,aD as z,Z as W,j as E,d as H,h as w}from"./index-CM6eTcte.js";function G(o){return j("MuiLink",o)}const I=$("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=o=>C[o]||o,Y=({theme:o,ownerState:e})=>{const n=O(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return w(t,G,e)},J=_(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Y({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${I.focusVisible}`]:{outline:"auto"}})),Q=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:l}=s,V=U(s,Z),{isFocusVisibleRef:f,onBlur:v,onFocus:D,ref:F}=z(),[L,b]=x.useState(!1),R=W(n,F),A=i=>{v(i),f.current===!1&&b(!1),u&&u(i)},B=i=>{D(i),f.current===!0&&b(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:L,underline:k,variant:p}),T=q(m);return E.jsx(J,a({color:t,className:H(T.root,r),classes:g,component:c,onBlur:A,onFocus:B,ref:R,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},V))});export{Q as L};
