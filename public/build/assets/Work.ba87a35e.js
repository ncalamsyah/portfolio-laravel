import{j as a,F as r,a as e,H as s}from"./app.5710433c.js";import{w as c}from"./Data.57b64bb6.js";import{N as n,m}from"./Navbar.ab9a8866.js";const h=l=>a(r,{children:[e(s,{title:l.title}),e(n,{}),e(m.div,{name:"work",className:"w-full md:h-screen text-dark bg-light",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a("div",{className:"max-w-[1000px] mx-auto px-4 pt-24 lg:pt-2 flex flex-col justify-center w-full h-full overflow-hidden",children:[a("div",{className:"pb-8",children:[e("p",{className:"text-4xl font-bold inline border-b-4 border-primary",children:"Work"}),e("p",{className:"pt-6",children:"These are projects i've worked on."})]}),e("div",{className:"relative grid sm:grid-cols-2 md:grid-cols-3 gap-4",children:c.map(({sample:t,img:o},i)=>e(r,{children:a("div",{className:"relative max-w-[400px] max-h-[200px]  flex flex-col justify-center items-center group bg-slate-400 bg-opacity-10 rounded-full p-5 m-auto hover:bg-transparent duration-300",children:[e("img",{src:o,alt:"",className:"w-1/2 h-full object-cover group-hover:scale-[1.40] duration-300"}),e("img",{src:t,alt:"",className:"pointer-none absolute w-full h-full object-cover object-center duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"})]},i)}))})]})})]});export{h as default};