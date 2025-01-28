"use strict";(self.webpackChunkmutexo_docs=self.webpackChunkmutexo_docs||[]).push([[3387],{591:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"client/api/unsub","title":"unsub","description":"The unsub method primary purpose is to notify the server that we are no longer interested in receiving some events.","source":"@site/docs/client/api/unsub.md","sourceDirName":"client/api","slug":"/client/api/unsub","permalink":"/client/api/unsub","draft":false,"unlisted":false,"editUrl":"https://github.com/HarmonicLabs/mutexo-docs-docs/docs/client/api/unsub.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"unsub"},"sidebar":"tutorialSidebar","previous":{"title":"sub","permalink":"/client/api/sub"},"next":{"title":"lock","permalink":"/client/api/lock"}}');var i=s(4848),r=s(8453);const u={sidebar_position:1,title:"unsub"},c="unsub",o={},l=[{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"subscribe and unsubscribe",id:"subscribe-and-unsubscribe",level:3},{value:"Unsubscribe from <code>&quot;input&quot;</code> events of a single address",id:"unsubscribe-from-input-events-of-a-single-address",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"unsub",children:(0,i.jsx)(n.code,{children:"unsub"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"unsub"})," method primary purpose is to notify the server that we are no longer interested in receiving some events."]}),"\n",(0,i.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"async unsub(\n    eventName: MutexoChainEventName,\n    filters?: IFilter[]\n): Promise<SubSuccess | SubFailure>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eventName"}),": ",(0,i.jsx)(n.a,{href:"../../messages/type-aliases/MutexoChainEventName",children:(0,i.jsx)(n.code,{children:"MutexoChainEventName"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"filters"})," (optional): ",(0,i.jsx)(n.a,{href:"../../messages/type-aliases/IFilter",children:(0,i.jsx)(n.code,{children:"Filter"})}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves to one of the following messages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SubSuccess"}),": Indicates that the unsubscription was successful."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SubFailure"}),": Indicates that the unsubscription failed."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"unsub"})," method sends an unsubscription request to the server and waits for a response indicating whether the unsubscription was successful or not."]}),"\n",(0,i.jsxs)(n.p,{children:["After a successful unsubscription, the server will stop sending events corresponding to the ",(0,i.jsx)(n.a,{href:"../../messages/type-aliases/MutexoChainEventName",children:(0,i.jsx)(n.code,{children:"MutexoChainEventName"})})," and filters specified;\nif no filters were specified, the client is unsubscribed entirely by the event."]}),"\n",(0,i.jsx)(n.p,{children:"The method throws an error if the message sent to the server was ill-formed, but not if the unsubscription was well-formed and fails."}),"\n",(0,i.jsxs)(n.p,{children:["Instead, if the unsubscription fails, the result will be an instance of ",(0,i.jsx)(n.code,{children:"SubFailure"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the unsubscription is successful, a ",(0,i.jsx)(n.code,{children:"SubSuccess"})," is returned."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"subscribe-and-unsubscribe",children:"subscribe and unsubscribe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const client = new MutexoClient(webSocket);\n\nconst utxoSpentHandler = _evt => {\n    console.log("someone spent something")\n};\n\nclient.addEventListener("input", utxoSpentHandler);\n\nconst subResult = await client.sub("input");\n\nif (subResult instanceof SubSuccess) {\n    const unsubResult = await client.unsub("input");\n\n    if (unsubResult instanceof SubSuccess) {\n        client.removeEventListener("input", utxoSpentHandler);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"unsubscribe-from-input-events-of-a-single-address",children:["Unsubscribe from ",(0,i.jsx)(n.code,{children:'"input"'})," events of a single address"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const client = new MutexoClient(webSocket);\n\nconst myFavoriteAddress = "addr1...";\nconst filters = [\n    { addr: myFavoriteAddress }\n];\n\n// only unsubscribe `myFavoriteAddress` "input" events\n// keeps all other subscriptions to the "input" event (if any)\nconst unsubResult = await client.unsub("input", filters);\n\nif( unsubResult instanceof SubSuccess ) {\n    // remove event listeners no longer needed here\n} else { // unsubResult instanceof SubFailure\n    console.warn("something went wrong during unsubcription; maybe you were not subscribed")\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>u,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function u(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);