(function(t){function e(e){for(var a,s,u=e[0],i=e[1],c=e[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"099b":function(t,e,r){"use strict";r("80a8")},"1e29":function(t,e,r){},"20ea":function(t,e,r){"use strict";r("6c4e")},"2c7b":function(t,e,r){"use strict";r("5312")},"2d96":function(t,e,r){},"377d":function(t,e,r){},"3cf3":function(t,e,r){"use strict";r("89c5")},"3ec5":function(t,e,r){"use strict";r("5248")},"47fe":function(t,e,r){"use strict";r("6c03")},4920:function(t,e,r){"use strict";r("bc81")},5248:function(t,e,r){},5312:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("a9e3");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("the-header"),r("main",[r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1),r("the-footer")],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:r("b9aa"),alt:"Ranek"}})]),t.$store.state.login?a("router-link",{staticClass:"btn",attrs:{to:"/usuario"}},[t._v(" "+t._s(t.nome)+" ")]):a("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v(" Vender / Login ")])],1)])},u=[],i=(r("ac1f"),r("5319"),{name:"TheHeader",computed:{nome:function(){return this.$store.state.usuario.nome.replace(/ .*/,"")}}}),c=i,l=(r("099b"),r("2877")),d=Object(l["a"])(c,s,u,!1,null,"eef2bf6a",null),p=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",[t._v("Ranek. Alguns direitos reservados")])])}],v={name:"TheFooter"},g=v,h=(r("2c7b"),Object(l["a"])(g,m,f,!1,null,"31254627",null)),b=h.exports,_={components:{TheHeader:p,TheFooter:b},created:function(){var t=window.localStorage.getItem("jwt");if(t)try{var e=this.$store.dispatch("logarUsuario",{jwt:t});e&&this.$router.push({name:"usuario"})}catch(r){console.error(r)}}},w=_,x=(r("034f"),Object(l["a"])(w,o,n,!1,null,null,null)),O=x.exports,P=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("👍 Compre ou venda 👎")]),r("produtos-buscar"),r("produtos-lista")],1)},j=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],attrs:{type:"text",name:"busca",id:"busca",placeholder:"Buscar..."},domProps:{value:t.busca},on:{input:function(e){e.target.composing||(t.busca=e.target.value)}}}),r("input",{attrs:{type:"submit",id:"lupa",value:"Buscar"},on:{click:function(e){return e.preventDefault(),t.buscarProdutos.apply(null,arguments)}}})])},C=[],R={name:"ProdutosBuscar",data:function(){return{busca:""}},methods:{buscarProdutos:function(){this.$router.push({query:{q:this.busca,_page:1}})}}},y=R,U=(r("c072"),Object(l["a"])(y,$,C,!1,null,"5e51e912",null)),A=U.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"produtos-container"},[r("transition",{attrs:{mode:"out-in"}},[t.produtos&&t.produtos.length>0?r("div",{key:"produtos",staticClass:"produtos"},[t._l(t.produtos,(function(e){return r("div",{key:e.id,staticClass:"produto"},[r("router-link",{attrs:{to:{name:"produto",params:{id:e.id}}}},[e.fotos[0]?r("img",{attrs:{src:e.fotos[0],alt:e.fotos[0].titulo}}):t._e(),r("h2",{staticClass:"titulo"},[t._v(t._s(e.nome))]),r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(e.preco)))])])],1)})),r("produtos-paginar",{attrs:{produtosTotal:t.produtosTotal,produtosPorPagina:t.produtosPorPagina}})],2):t.produtos&&0===t.produtos.length?r("div",{key:"sem-resultados",staticClass:"sem-resultados"},[r("p",[t._v("Busca sem resultados, tente buscar outro termo.")])]):r("pagina-carregando",{key:"carregando"})],1)],1)},T=[],D=r("1da1"),N=(r("96cf"),r("99af"),r("bc3a")),S=r.n(N),I=S.a.create({baseURL:"https://www.quantic.digital/"}),L={get:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,I.get(t,e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},post:function(t,e,r){return Object(D["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,I.post(t,e,r);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},put:function(t,e,r){return Object(D["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,I.put(t,e,r);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},delete:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,I.delete(t,e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}};function q(t){return z.apply(this,arguments)}function z(){return z=Object(D["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("https://viacep.com.br/ws/".concat(e,"/json/"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.paginasTotal>1?r("ul",[r("router-link",{attrs:{to:{query:t.query(1)}}},[t._v("Inicio")]),t._l(t.paginas,(function(e){return r("li",{key:e},[r("router-link",{attrs:{to:{query:t.query(e)}}},[t._v(t._s(e))])],1)})),r("router-link",{attrs:{to:{query:t.query(t.paginasTotal)}}},[t._v("Final")])],2):t._e()},V=[],B=r("5530"),M=(r("a434"),{name:"ProdutosPaginar",props:{produtosPorPagina:{type:Number,default:1},produtosTotal:{type:Number,default:1}},methods:{query:function(t){return Object(B["a"])(Object(B["a"])({},this.$route.query),{},{_page:t})}},computed:{paginas:function(){for(var t=Number(this.$route.query._page),e=9,r=Math.ceil(e/2),a=this.paginasTotal,o=[],n=1;n<=a;n++)o.push(n);return o.splice(0,t-r),o.splice(e,a),o},paginasTotal:function(){var t=this.produtosTotal/this.produtosPorPagina;return t!==1/0?Math.ceil(t):0}}}),G=M,H=(r("3ec5"),Object(l["a"])(G,F,V,!1,null,"5f97edd0",null)),J=H.exports,K=r("ade3");function Q(t){var e="";for(var r in t)e+="&".concat(r,"=").concat(t[r]);return e}function W(t){for(var e={},r=function(r){var a=[t.fields[r]];e[a]={get:function(){return this.$store.state[t.base][a]},set:function(e){this.$store.commit(t.mutation,Object(K["a"])({},a,e))}}},a=0;a<t.fields.length;a++)r(a);return e}var X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("span"),r("span"),r("span"),r("span")])}],Z={name:"PaginaCarregando"},tt=Z,et=(r("a5d4"),Object(l["a"])(tt,X,Y,!1,null,"ee2a55d0",null)),rt=et.exports,at={name:"ProdutosLista",components:{ProdutosPaginar:J,PaginaCarregando:rt},data:function(){return{produtos:null,produtosPorPagina:9,produtosTotal:0}},methods:{getProdutos:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.produtos=null,r=t.url,e.next=4,L.get(r);case 4:a=e.sent,t.produtosTotal=Number(a.headers["x-total-count"]),t.produtos=a.data;case 7:case"end":return e.stop()}}),e)})))()}},computed:{url:function(){var t=Q(this.$route.query);return"/produto?_limit=".concat(this.produtosPorPagina).concat(t)}},watch:{url:function(){this.getProdutos()}},created:function(){this.getProdutos()}},ot=at,nt=(r("47fe"),Object(l["a"])(ot,E,T,!1,null,"0ef79a5a",null)),st=nt.exports,ut={name:"Home",components:{ProdutosBuscar:A,ProdutosLista:st}},it=ut,ct=(r("b28e"),Object(l["a"])(it,k,j,!1,null,"9164eef8",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.produto?r("div",{staticClass:"produto"},[t.produto.fotos?r("ul",{staticClass:"fotos"},t._l(t.produto.fotos,(function(e,a){return r("li",{key:a},[r("img",{attrs:{src:e.src,alt:t.produto.titulo}})])})),0):t._e(),r("div",{staticClass:"info"},[r("h1",[t._v(t._s(t.produto.nome))]),r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),r("p",{staticClass:"descricao"},[t._v(t._s(t.produto.descricao))]),"false"===t.produto.vendido?r("transition",{attrs:{mode:"out-in"}},[t.finalizar?r("finalizar-compra",{attrs:{mensagem:t.mensagem,produto:t.produto}}):r("button",{staticClass:"btn",on:{click:t.comprar}},[t._v("Comprar")])],1):r("button",{staticClass:"btn",attrs:{disabled:""}},[t._v("Produto Vendido")])],1)]):r("pagina-carregando")],1)},pt=[],mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Endereço de Envio")]),r("usuario-form",[r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.finalizarCompra.apply(null,arguments)}}},[t._v("Finalizar Compra")])])],1)},ft=[],vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[t.mostrarDadosLogin?r("div",{staticClass:"usuario"},[r("label",{attrs:{for:"nome"}},[t._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{type:"text",name:"nome",id:"nome"},domProps:{value:t.nome},on:{input:function(e){e.target.composing||(t.nome=e.target.value)}}}),r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("label",{attrs:{for:"senha"}},[t._v("Senha")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.senha},on:{input:function(e){e.target.composing||(t.senha=e.target.value)}}})]):t._e(),r("label",{attrs:{for:"cep"}},[t._v("Cep")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cep,expression:"cep"}],attrs:{type:"text",name:"cep",id:"cep"},domProps:{value:t.cep},on:{keyup:t.preencherCep,input:function(e){e.target.composing||(t.cep=e.target.value)}}}),r("label",{attrs:{for:"rua"}},[t._v("Rua")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.rua,expression:"rua"}],attrs:{type:"text",name:"rua",id:"rua"},domProps:{value:t.rua},on:{input:function(e){e.target.composing||(t.rua=e.target.value)}}}),r("label",{attrs:{for:"numero"}},[t._v("Numero")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],attrs:{type:"number",name:"numero",id:"numero"},domProps:{value:t.numero},on:{input:function(e){e.target.composing||(t.numero=e.target.value)}}}),r("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bairro,expression:"bairro"}],attrs:{type:"text",name:"bairro",id:"bairro"},domProps:{value:t.bairro},on:{input:function(e){e.target.composing||(t.bairro=e.target.value)}}}),r("label",{attrs:{for:"nome"}},[t._v("Cidade")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cidade,expression:"cidade"}],attrs:{type:"text",name:"cidade",id:"cidade"},domProps:{value:t.cidade},on:{input:function(e){e.target.composing||(t.cidade=e.target.value)}}}),r("label",{attrs:{for:"nome"}},[t._v("Estado")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],attrs:{type:"text",name:"estado",id:"estado"},domProps:{value:t.estado},on:{input:function(e){e.target.composing||(t.estado=e.target.value)}}}),r("div",{staticClass:"button"},[t._t("default")],2)])},gt=[],ht=(r("b0c0"),{name:"UsuarioForm",computed:Object(B["a"])(Object(B["a"])({},W({fields:["id","nome","email","senha","cep","rua","numero","bairro","cidade","estado"],base:"usuario",mutation:"UPDATE_USUARIO"})),{},{mostrarDadosLogin:function(){return!this.$store.state.login||"usuario-editar"===this.$route.name}}),methods:{preencherCep:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.cep.replace(/\D/g,""),8!==r.length){e.next=9;break}return e.next=4,q(r);case 4:a=e.sent,t.rua=a.data.logradouro,t.bairro=a.data.bairro,t.estado=a.data.uf,t.cidade=a.data.localidade;case 9:case"end":return e.stop()}}),e)})))()}}}),bt=ht,_t=(r("aa38"),Object(l["a"])(bt,vt,gt,!1,null,"277b583e",null)),wt=_t.exports,xt=r("2f62"),Ot={name:"FinalizarCompra",components:{UsuarioForm:wt},props:["produto","mensagem"],computed:Object(B["a"])(Object(B["a"])({},Object(xt["c"])(["usuario"])),{},{compra:function(){return{comprador_id:this.usuario.id,vendedor_id:this.produto.usuario_id,produto:this.produto,endereco:{cep:this.usuario.cep,rua:this.usuario.rua,numero:this.usuario.numero,bairro:this.usuario.bairro,cidade:this.usuario.cidade,estado:this.usuario.estado}}}}),methods:{criarTransacao:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.usuario.token,e.next=3,L.post("/transacao",t.compra,Object.assign({},{headers:{"x-access-token":"".concat(r)}}));case 3:return a=e.sent,t.$router.push({name:"compras"}),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},criarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 3:return e.next=5,t.$store.dispatch("getUsuario",t.$store.state.usuario);case 5:return window.localStorage.setItem("jwt",t.usuario.token),e.next=8,t.criarTransacao();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},finalizarCompra:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.login){e.next=5;break}return e.next=3,t.criarTransacao();case 3:e.next=7;break;case 5:return e.next=7,t.criarUsuario();case 7:case"end":return e.stop()}}),e)})))()},redirect:function(t){var e=arguments,r=this;return Object(D["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.length>1&&void 0!==e[1]?e[1]:"_blank",a.next=3,r.finalizarCompra();case 3:window.open(t,o);case 4:case"end":return a.stop()}}),a)})))()}}},Pt=Ot,kt=(r("af59"),Object(l["a"])(Pt,mt,ft,!1,null,"426abdd8",null)),jt=kt.exports,$t={name:"Produto",components:{PaginaCarregando:rt,FinalizarCompra:jt},data:function(){return{id:this.$route.params.id,produto:null,finalizar:!1,mensagem:""}},methods:{getProdutos:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/produto/".concat(t.id));case 2:r=e.sent,t.produto=r.data;case 4:case"end":return e.stop()}}),e)})))()},comprar:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.finalizar=!0,t.mensagem="Ola, gostaria de fazer um pedido:%0A%2A1x%2A ".concat(t.produto.nome," - ").concat(window.location.href,"%0AR$ ").concat(t.produto.preco,"%0A%0A%2ATaxa de entrega:%2A Retirar no local%0A%0A%2ATotal:%2A R$ ").concat(t.produto.preco,"%0A%0A%0A----------%0A%0A%2ADados do comprador:%2A%0A").concat(t.$store.state.usuario.nome,"%0A").concat(t.$store.state.usuario.email,"%0A%0A%2AEndereço:%2A%0A").concat(t.$store.state.usuario.rua,", ").concat(t.$store.state.usuario.numero,", ").concat(t.$store.state.usuario.bairro,", ").concat(t.$store.state.usuario.cidade,", ").concat(t.$store.state.usuario.estado,"%0A").concat(t.$store.state.usuario.cep);case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getProdutos()}},Ct=$t,Rt=(r("acfe"),Object(l["a"])(Ct,dt,pt,!1,null,"682abd17",null)),yt=Rt.exports,Ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[!1!==t.success?r("h1",[t._v("Login")]):r("h1",[t._v("Algo deu errado...")]),r("form",{attrs:{action:""}},[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),r("label",{attrs:{for:"senha"}},[t._v("Senha")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.senha,expression:"login.senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.login.senha},on:{input:function(e){e.target.composing||t.$set(t.login,"senha",e.target.value)}}}),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.logar.apply(null,arguments)}}},[t._v("Logar")])]),t._m(0),r("login-criar")],1)},At=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"perdeu"},[r("a",{attrs:{href:"/",target:"_blank"}},[t._v("perdeu a senha? Clique aqui.")])])}],Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Crie a Sua Conta")]),r("transition",{attrs:{mode:"out-in"}},[t.criar?r("usuario-form",[r("button",{staticClass:"btn btn-form",on:{click:function(e){return e.preventDefault(),t.criarUsuario.apply(null,arguments)}}},[t._v("Criar Usuario")])]):r("button",{staticClass:"btn",on:{click:function(e){t.criar=!0}}},[t._v("Criar Conta")])],1)],1)},Tt=[],Dt={name:"LoginCriar",components:{UsuarioForm:wt},data:function(){return{criar:!1}},methods:{criarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 3:return e.next=5,t.$store.dispatch("getUsuario",t.$store.state.usuario.email);case 5:t.$router.push({name:"usuario"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},Nt=Dt,St=(r("3cf3"),Object(l["a"])(Nt,Et,Tt,!1,null,"5426a84b",null)),It=St.exports,Lt={name:"Login",components:{LoginCriar:It},data:function(){return{login:{email:"",senha:""},success:null}},methods:{logar:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logarUsuario",t.login);case 2:r=e.sent,r?(t.success=!0,t.$router.push({name:"usuario"})):t.success=!1;case 4:case"end":return e.stop()}}),e)})))()}}},qt=Lt,zt=(r("75b0"),Object(l["a"])(qt,Ut,At,!1,null,"9a5294cc",null)),Ft=zt.exports,Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"usuario"},[r("nav",{staticClass:"sidenav"},[r("ul",[r("li",[r("router-link",{attrs:{to:{name:"usuario"}}},[t._v("Produtos")])],1),r("li",[r("router-link",{attrs:{to:{name:"compras"}}},[t._v("Compras")])],1),r("li",[r("router-link",{attrs:{to:{name:"vendas"}}},[t._v("Vendas")])],1),r("li",[r("router-link",{attrs:{to:{name:"usuario-editar"}}},[t._v("Editar Usuario")])],1),r("li",[r("button",{on:{click:t.deslogar}},[t._v("Deslogar")])])])]),r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},Bt=[],Mt={name:"Usuario",methods:{deslogar:function(){this.$store.dispatch("deslogarUsuario"),this.$router.push("/login")}}},Gt=Mt,Ht=(r("f6f3"),Object(l["a"])(Gt,Vt,Bt,!1,null,"7e9ef536",null)),Jt=Ht.exports,Kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Adicionar Produtos")]),r("produtos-adicionar"),r("h2",[t._v("Seus Produtos")]),t.usuario_produtos?r("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.usuario_produtos,(function(e){return r("li",{key:e.id},[r("produtos-item",{attrs:{produto:e}},[r("p",{staticClass:"descricao"},[t._v(t._s(e.descricao))]),r("button",{staticClass:"deletar",on:{click:function(r){return t.deletarProduto(e.id)}}},[t._v("Deletar")])])],1)})),0):t._e()],1)},Qt=[],Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"adicionar-produto"},[r("label",{attrs:{for:"nome"}},[t._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.nome,expression:"produto.nome"}],attrs:{type:"text",name:"nome",id:"nome"},domProps:{value:t.produto.nome},on:{input:function(e){e.target.composing||t.$set(t.produto,"nome",e.target.value)}}}),r("label",{attrs:{for:"preco"}},[t._v("Preço (R$)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.preco,expression:"produto.preco"}],attrs:{type:"number",name:"preco",id:"preco"},domProps:{value:t.produto.preco},on:{input:function(e){e.target.composing||t.$set(t.produto,"preco",e.target.value)}}}),r("label",{attrs:{for:"fotos"}},[t._v("Fotos")]),r("input",{ref:"fotos",attrs:{type:"file",name:"fotos",id:"fotos"}}),r("label",{attrs:{for:"descricao"}},[t._v("Descriçao")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.produto.descricao,expression:"produto.descricao"}],attrs:{name:"descricao",id:"descricao",cols:"30",rows:"10"},domProps:{value:t.produto.descricao},on:{input:function(e){e.target.composing||t.$set(t.produto,"descricao",e.target.value)}}}),r("input",{staticClass:"btn",attrs:{type:"button",value:"Adicionar Produto"},on:{click:function(e){return e.preventDefault(),t.adicionarProduto.apply(null,arguments)}}})])},Xt=[],Yt={name:"ProdutosAdicionar",data:function(){return{produto:{nome:"",preco:"",descricao:"",fotos:null,vendido:"false"}}},methods:{formatarProduto:function(){this.produto.usuario_id=this.$store.state.usuario.id},adicionarProduto:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$store.state.usuario.token,t.formatarProduto(),e.next=4,L.post("/produto",t.produto,Object.assign({},{headers:{"x-access-token":"".concat(r)}}));case 4:t.$store.dispatch("getUsuarioProdutos");case 5:case"end":return e.stop()}}),e)})))()}}},Zt=Yt,te=(r("f088"),Object(l["a"])(Zt,Wt,Xt,!1,null,"0fa3ac3d",null)),ee=te.exports,re=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.produto?r("div",{staticClass:"produto"},[r("router-link",{staticClass:"produto-img",attrs:{to:{name:"produto",params:{id:t.produto.id}}}},[t.produto.fotos.length>0?r("img",{attrs:{src:t.produto.fotos[0].src,alt:t.produto.fotos[0].titulo}}):t._e(),r("p",[t._v("Ver Produto")])]),r("div",{staticClass:"info"},[r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),r("h2",{staticClass:"titulo"},[t._v(t._s(t.produto.nome))]),t._t("default")],2)],1):t._e()},ae=[],oe={name:"ProdutosItem",props:["produto"]},ne=oe,se=(r("b27b"),Object(l["a"])(ne,re,ae,!1,null,"5de232fb",null)),ue=se.exports,ie={name:"UsuarioProdutos",components:{ProdutosAdicionar:ee,ProdutosItem:ue},methods:Object(B["a"])(Object(B["a"])({},Object(xt["b"])(["getUsuarioProdutos"])),{},{deletarProduto:function(t){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,a=e.$store.state.usuario.token,o=window.confirm("Deseja remover este produto?"),!o){r.next=7;break}return r.next=6,L.delete("/produto/".concat(t),Object.assign({},{headers:{"x-access-token":"".concat(a)}}));case 6:e.getUsuarioProdutos();case 7:r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.error(r.t0.message);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}),computed:Object(B["a"])({},Object(xt["c"])(["login","usuario","usuario_produtos"])),watch:{login:function(){this.getUsuarioProdutos()}},created:function(){this.login&&this.getUsuarioProdutos()}},ce=ie,le=(r("20ea"),Object(l["a"])(ce,Kt,Qt,!1,null,"251ef936",null)),de=le.exports,pe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.compras?r("div",[r("h2",[t._v("Compras")]),t._l(t.compras,(function(e,a){return r("div",{key:a,staticClass:"produtos-wrapper"},[e.produto?r("produtos-item",{attrs:{produto:e.produto}},[r("p",{staticClass:"vendedor"},[r("span",[t._v("Vendedor: ")]),t._v(" "+t._s(e.email)+" ")])]):t._e()],1)}))],2):t._e()},me=[],fe={name:"UsuarioCompras",data:function(){return{compras:null}},components:{ProdutosItem:ue},methods:{getCompras:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=String(t.usuario.token),e.next=3,L.get("/transacao?comprador_id=".concat(t.usuario.id),Object.assign({},{headers:Object(K["a"])({},"x-access-token",r)}));case 3:a=e.sent,t.compras=a.data;case 5:case"end":return e.stop()}}),e)})))()}},computed:Object(B["a"])({},Object(xt["c"])(["usuario","login"])),watch:{login:function(){this.getCompras()}},created:function(){this.login&&this.getCompras()}},ve=fe,ge=(r("c1dd"),Object(l["a"])(ve,pe,me,!1,null,"3199ec4f",null)),he=ge.exports,be=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.vendas?r("div",[r("h2",[t._v("Vendas")]),t._l(t.vendas,(function(e,a){return r("div",{key:a,staticClass:"produtos-wrapper"},[e.produto?r("produtos-item",{attrs:{produto:e.produto}},[r("p",{staticClass:"comprador"},[r("span",[t._v("Comprador: ")]),t._v(" "+t._s(e.email)+" ")])]):t._e(),r("div",{staticClass:"entrega"},[r("h3",[t._v("Entrega:")]),e.endereco?r("ul",t._l(e.endereco,(function(e,a){return r("li",{key:a},[t._v(" "+t._s(a)+": "+t._s(e)+" ")])})),0):t._e()])],1)}))],2):t._e()},_e=[],we={name:"UsuarioVendas",data:function(){return{vendas:null}},components:{ProdutosItem:ue},methods:{getVendas:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.usuario.token,e.next=3,L.get("/transacao?vendedor_id=".concat(t.usuario.id),Object.assign({},{headers:{"x-access-token":"".concat(r)}}));case 3:a=e.sent,t.vendas=a.data;case 5:case"end":return e.stop()}}),e)})))()}},computed:Object(B["a"])({},Object(xt["c"])(["usuario","login"])),watch:{login:function(){this.getVendas()}},created:function(){this.login&&this.getVendas()}},xe=we,Oe=(r("b866"),Object(l["a"])(xe,be,_e,!1,null,"6d70ce7d",null)),Pe=Oe.exports,ke=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Editar Usuario")]),r("usuario-form",[r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.atualizarUsuario.apply(null,arguments)}}},[t._v("Atualizar Usuario")])])],1)},je=[],$e={name:"UsuarioEditar",components:{UsuarioForm:wt},methods:{atualizarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$store.state.usuario.token,e.next=4,L.put("/usuario/".concat(t.$store.state.usuario.id),t.$store.state.usuario,Object.assign({},{headers:Object(K["a"])({},"x-access-token",r)}));case 4:return e.next=6,t.$store.dispatch("getUsuario",t.$store.state.usuario);case 6:t.$router.push({name:"usuario"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},Ce=$e,Re=(r("4920"),Object(l["a"])(Ce,ke,je,!1,null,"352d1542",null)),ye=Re.exports;a["a"].use(P["a"]);var Ue=[{path:"/",name:"Home",component:lt},{path:"/produto/:id",name:"produto",component:yt,props:!0},{path:"/login",name:"login",component:Ft},{path:"/usuario",component:Jt,children:[{path:"",name:"usuario",component:de},{path:"compras",name:"compras",component:he},{path:"vendas",name:"vendas",component:Pe},{path:"editar",name:"usuario-editar",component:ye}]}],Ae=new P["a"]({mode:"history",base:"/",routes:Ue,scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})}}),Ee=Ae;a["a"].use(xt["a"]);var Te=new xt["a"].Store({strict:!0,state:{login:!1,usuario:{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:"",token:""},usuario_produtos:null},getters:{},mutations:{UPDATE_LOGIN:function(t,e){t.login=e},UPDATE_USUARIO:function(t,e){t.usuario=Object.assign(t.usuario,e);var r=t.usuario.id;t.usuario.id=e.id?e.email:r},UPDATE_USUARIO_PRODUTOS:function(t,e){t.usuario_produtos=e},ADD_USUARIO_PRODUTOS:function(t,e){t.usuario_produtos.unshift(e)}},actions:{getUsuarioProdutos:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/produto?usuario_id=".concat(t.state.usuario.id),{headers:{"x-access-token":t.state.usuario.token}});case 2:r=e.sent,t.commit("UPDATE_USUARIO_PRODUTOS",r.data);case 4:case"end":return e.stop()}}),e)})))()},getUsuario:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=String(t.state.usuario.token),console.log(a),r.next=4,L.get("/usuario/".concat(e.email),Object.assign({},{headers:Object(K["a"])({},"x-access-token",a)}));case 4:return o=r.sent,t.commit("UPDATE_USUARIO",o.data),t.commit("UPDATE_LOGIN",!0),r.abrupt("return",o);case 8:case"end":return r.stop()}}),r)})))()},logarUsuario:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,L.post("/usuario/logar",e);case 2:if(a=r.sent,!a.data.login){r.next=8;break}return t.commit("UPDATE_USUARIO",a.data.usuario),t.commit("UPDATE_LOGIN",!0),a.data.usuario.token&&window.localStorage.setItem("jwt",a.data.usuario.token),r.abrupt("return",!0);case 8:return r.abrupt("return",!1);case 9:case"end":return r.stop()}}),r)})))()},criarUsuario:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.commit("UPDATE_USUARIO",{id:e.email}),r.next=3,L.post("/usuario",e);case 3:return a=r.sent,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})))()},deslogarUsuario:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:"",token:""},window.localStorage.removeItem("jwt"),t.commit("UPDATE_USUARIO",r),t.commit("UPDATE_LOGIN",!1);case 4:case"end":return e.stop()}}),e)})))()}},modules:{}});a["a"].config.productionTip=!1,a["a"].component("PaginaCarregando",rt),a["a"].filter("numeroPreco",(function(t){return t=Number(t),isNaN(t)?"":t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})})),new a["a"]({router:Ee,store:Te,render:function(t){return t(O)}}).$mount("#app")},"6c03":function(t,e,r){},"6c4e":function(t,e,r){},7217:function(t,e,r){},"75b0":function(t,e,r){"use strict";r("7217")},"7a59":function(t,e,r){},"7cc5":function(t,e,r){},"7f39":function(t,e,r){},"80a8":function(t,e,r){},"82f3":function(t,e,r){},"85ec":function(t,e,r){},"89c5":function(t,e,r){},a5d4:function(t,e,r){"use strict";r("377d")},aa38:function(t,e,r){"use strict";r("bc84")},acfe:function(t,e,r){"use strict";r("7f39")},af59:function(t,e,r){"use strict";r("1e29")},b27b:function(t,e,r){"use strict";r("7cc5")},b28e:function(t,e,r){"use strict";r("e4b3")},b866:function(t,e,r){"use strict";r("d16d")},b9aa:function(t,e,r){t.exports=r.p+"img/ranek.e7a4871b.svg"},bc81:function(t,e,r){},bc84:function(t,e,r){},c072:function(t,e,r){"use strict";r("2d96")},c1dd:function(t,e,r){"use strict";r("d5af")},d16d:function(t,e,r){},d5af:function(t,e,r){},e4b3:function(t,e,r){},f088:function(t,e,r){"use strict";r("82f3")},f6f3:function(t,e,r){"use strict";r("7a59")}});
//# sourceMappingURL=app.fdbdfbbc.js.map