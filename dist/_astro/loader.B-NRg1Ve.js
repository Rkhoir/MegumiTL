import{t as e}from"./jsx-runtime.Bcxxf2w9.js";var t=e(),n=[`50%`,`75%`,`100%`,`75%`,`50%`];function r({className:e,...r}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(`style`,{children:`
        @keyframes loading-ui-wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.6); }
        }
      `}),(0,t.jsxs)(`span`,{role:`status`,className:`inline-flex items-center gap-[2.5%] text-pink-800 ${e||``}`,...r,children:[n.map((e,n)=>(0,t.jsx)(`span`,{"aria-hidden":`true`,className:`inline-block rounded-full bg-current`,style:{width:`12.5%`,height:e,animation:`loading-ui-wave var(--duration, 1s) ease-in-out infinite`,animationDelay:`calc(var(--delay, 100ms) * ${n})`}},n)),(0,t.jsx)(`span`,{className:`sr-only`,children:`Loading`})]})]})}export{r as Wave};