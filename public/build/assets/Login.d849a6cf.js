import{a as e,b,r as h,j as r,H as f,L as x}from"./app.5710433c.js";import{G as N,P as w}from"./PrimaryButton.f67e4ae7.js";import{T as i,I as d}from"./TextInput.3d636628.js";import{I as c}from"./InputLabel.6fe78b93.js";import"./ApplicationLogo.e3e5a8b1.js";function k({name:t,value:o,handleChange:s}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:m=>s(m)})}function E({status:t,canResetPassword:o}){const{data:s,setData:m,post:u,processing:p,errors:l,reset:g}=b({email:"",password:"",remember:""});h.exports.useEffect(()=>()=>{g("password")},[]);const n=a=>{m(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(N,{children:[e(f,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-dark",children:t}),e("div",{className:"form-login",children:r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(c,{className:"text-dark mb-2",forInput:"email",value:"Email"}),e(i,{type:"text",name:"email",value:s.email,className:"mt-1 block w-full rounded-md border-none bg-zinc-50",autoComplete:"username",isFocused:!0,handleChange:n}),e(d,{message:l.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(c,{className:"text-dark mb-2",forInput:"password",value:"Password"}),e(i,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full rounded-md border-none bg-zinc-50",autoComplete:"current-password",handleChange:n}),e(d,{message:l.password,className:"mt-1"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(k,{name:"remember",value:s.remember,handleChange:n}),e("span",{className:"ml-2 text-sm text-dark",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[o&&e(x,{href:route("password.request"),className:"underline text-sm text-dark hover:text-primary",children:"Forgot your password?"}),e(w,{className:"ml-4 bg-transparent border-primary hover:bg-primary",processing:p,children:"Log in"})]})]})})]})}export{E as default};
