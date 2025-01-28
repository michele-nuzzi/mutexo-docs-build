"use strict";(self.webpackChunkmutexo_docs=self.webpackChunkmutexo_docs||[]).push([[3645],{8491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"client/api/removeEventListener","title":"removeEventListener","description":"The removeEventListener method removes an event listener for a specific event.","source":"@site/docs/client/api/removeEventListener.md","sourceDirName":"client/api","slug":"/client/api/removeEventListener","permalink":"/client/api/removeEventListener","draft":false,"unlisted":false,"editUrl":"https://github.com/HarmonicLabs/mutexo-docs-docs/docs/client/api/removeEventListener.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"removeEventListener"},"sidebar":"tutorialSidebar","previous":{"title":"addEventListener","permalink":"/client/api/addEventListener"},"next":{"title":"removeAllListeners","permalink":"/client/api/removeAllListeners"}}');var r=t(4848),s=t(8453);const o={sidebar_position:6,title:"removeEventListener"},l="removeEventListener",c={},a=[{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Remove an event listener for the &quot;input&quot; event",id:"remove-an-event-listener-for-the-input-event",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"removeeventlistener",children:(0,r.jsx)(n.code,{children:"removeEventListener"})})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"removeEventListener"})," method removes an event listener for a specific event."]}),"\n",(0,r.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async removeEventListener(\n    evt: MutexoEventName,\n    callback: ( data: any ) => void\n): this\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"evt"}),": ",(0,r.jsx)(n.a,{href:"../../messages/type-aliases/MutexoEventName",children:(0,r.jsx)(n.code,{children:"MutexoEventName"})})," - The name of the event to stop listening for."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"callback"}),": (data: any) => void - The function to remove from the event listeners."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"this"}),": The current instance of ",(0,r.jsx)(n.code,{children:"MutexoClient"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"removeEventListener"})," method removes an event listener for a specific event. The listener will no longer be called when the specified event is emitted."]}),"\n",(0,r.jsxs)(n.p,{children:["This method is also available as ",(0,r.jsx)(n.code,{children:"removeListener"})," and ",(0,r.jsx)(n.code,{children:"off"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"remove-an-event-listener-for-the-input-event",children:'Remove an event listener for the "input" event'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const client = new MutexoClient(webSocket);\n\nconst utxoSpentHandler = _evt => {\n    console.log("someone spent something")\n};\n\nclient.addEventListener("input", utxoSpentHandler);\n\n// Later, remove the event listener\nclient.removeEventListener("input", utxoSpentHandler);\n'})})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);