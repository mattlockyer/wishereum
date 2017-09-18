!function e(t,n,a){function s(r,o){if(!n[r]){if(!t[r]){var u="function"==typeof require&&require;if(!o&&u)return u(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[r]={exports:{}};t[r][0].call(f.exports,function(e){var n=t[r][1][e];return s(n||e)},f,f.exports,e,t,n,a)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)s(a[r]);return s}({1:[function(e,t,n){t.exports={contract_name:"Wish",abi:[{constant:!1,inputs:[{name:"wish",type:"string"}],name:"makeWish",outputs:[{name:"",type:"bool"}],payable:!0,type:"function"},{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"dest",type:"address"}],name:"sendBalance",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"wishes",outputs:[{name:"wish",type:"string"},{name:"amount",type:"uint256"},{name:"wisher",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"getIndicies",outputs:[{name:"",type:"uint256[]"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalWishes",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,type:"function"},{inputs:[],payable:!1,type:"constructor"},{payable:!0,type:"fallback"}],unlinked_binary:"0x6060604052341561000f57600080fd5b5b60038054600160a060020a03191633600160a060020a03161790555b5b61070c8061003c6000396000f300606060405236156100805763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630859a8bc811461008c57806312065fe0146100e65780635292af1f1461010b5780638820e4661461012c578063a0d199e4146101e2578063a7e43c7414610249578063f2fde38b1461026e575b5b60028054340190555b005b6100d260046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061028f95505050505050565b604051901515815260200160405180910390f35b34156100f157600080fd5b6100f961039a565b60405190815260200160405180910390f35b341561011657600080fd5b61008a600160a060020a03600435166103c1565b005b341561013757600080fd5b61014260043561041b565b60405160208101839052600160a060020a0382166040820152606080825284546002600019610100600184161502019091160490820181905281906080820190869080156101d15780601f106101a6576101008083540402835291602001916101d1565b820191906000526020600020905b8154815290600101906020018083116101b457829003601f168201915b505094505050505060405180910390f35b34156101ed57600080fd5b6101f5610455565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156102355780820151818401525b60200161021c565b505050509050019250505060405180910390f35b341561025457600080fd5b6100f96104d7565b60405190815260200160405180910390f35b341561027957600080fd5b61008a600160a060020a03600435166104dd565b005b600066038d7ea4c680003410156102a557600080fd5b6002805434019055600160a060020a03331660009081526004602052604090208054600181016102d5838261053a565b916000526020600020900160005b5060008054918290559150600181016102fc8382610564565b916000526020600020906003020160005b60606040519081016040908152868252346020830152600160a060020a03331690820152919050815181908051610348929160200190610596565b50602082015181600101556040820151600291909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555050600054600190815590505b919050565b60035460009033600160a060020a039081169116146103b857600080fd5b506002545b5b90565b60035433600160a060020a039081169116146103dc57600080fd5b80600160a060020a03166108fc6002549081150290604051600060405180830381858888f19350505050151561041157600080fd5b60006002555b5b50565b600080548290811061042957fe5b906000526020600020906003020160005b506001810154600282015491925090600160a060020a031683565b61045d610615565b6004600033600160a060020a0316600160a060020a031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156104cc57602002820191906000526020600020905b8154815260200190600101908083116104b8575b505050505090505b90565b60015481565b60035433600160a060020a039081169116146104f857600080fd5b600160a060020a038116151561050d57600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b81548183558181151161055e5760008381526020902061055e918101908301610627565b5b505050565b81548183558181151161055e5760030281600302836000526020600020918201910161055e9190610648565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105d757805160ff1916838001178555610604565b82800160010185558215610604579182015b828111156106045782518255916020019190600101906105e9565b5b50610611929150610627565b5090565b60206040519081016040526000815290565b6103bd91905b80821115610611576000815560010161062d565b5090565b90565b6103bd91905b808211156106115760006106628282610698565b506000600182015560028101805473ffffffffffffffffffffffffffffffffffffffff1916905560030161064e565b5090565b90565b50805460018160011615610100020316600290046000825580601f106106be5750610417565b601f0160209004906000526020600020908101906104179190610627565b5b505600a165627a7a723058207c227c6222c3315bce127f418d2f4aa1cc34cd75fd9b3932d8bc0c9fc7f811d40029",networks:{1502120763399:{events:{},links:{},address:"0x1b7f0808e6e59eb9099fb288ab731deca5725f8b",updated_at:1502121599428},1502763306938:{events:{},links:{},address:"0xd49c9dd2ab4de83b71d75614af2cfeefcd550905",updated_at:1502764545015},1505064849844:{events:{},links:{},address:"0xc74deb04b1b591edd858cfddb2b7a9f719bb430f",updated_at:1505065000318},1505069080727:{events:{},links:{},address:"0x5f6de6be7145b5bafe1d8536c2830662f3fdfbd4",updated_at:1505089495107}},schema_version:"0.0.5",updated_at:1505446936764}},{}],2:[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(s,i){try{var r=t[s](i),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}var i=a(e("./router")),r=a(e("./theme")),o=a(e("./web3-utils")),u=a(e("../../build/contracts/Wish.json")),c=a(e("./tests/deploy-wish"));Vue.use(VueRouter),Vue.use(VueMaterial),r.default.init();var f=window.APP={connectedNetwork:null,messages:{connect:"Please connect to the Rinkeby network using MetaMask, Parity, Mist or another DApp browser."},network:{id:4,name:"rinkeby",url:"https://rinkeby.infura.io/"},contractAddress:"0x66F5495e8e26Bb525A8CdAe9099d076326b966C3"};new Vue({el:"#app",router:i.default,data:{router:i.default,menu:i.default.options.routes,snackbarMessage:"message"},watch:{$route:function(){this.update()}},created:function(){var e=this;setTimeout(function(){return e.init()},500)},mounted:function(){this.$refs.loader.classList.add("hidden"),this.$refs.content.classList.remove("hidden")},methods:{init:function(){var e=s(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("init"),t=fetch("https://coinmarketcap-nexuist.rhcloud.com/api/eth").then(function(e){return e.json()}),o.default.getWeb3(f.network.url),e.next=5,o.default.getNetwork();case 5:return 4!==(n=f.connectedNetwork=e.sent).id&&(console.log("MetaMask: wrong network"),o.default.setWeb3(f.network.url),this.noAccount()),e.prev=7,e.next=10,o.default.getAccounts();case 10:f.accounts=e.sent,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(7),f.accounts=["0x"],this.noAccount();case 17:return window.deployWish=function(){return c.default.deploy(u.default,f.accounts[0],4e6)},e.next=20,localforage.getItem("wishereum-user");case 20:if((a=f.user=e.sent)===f.accounts[0]){e.next=28;break}return console.log("user changed"),a=f.user=f.accounts[0],e.next=26,localforage.setItem("wishereum-user",a);case 26:return e.next=28,localforage.setItem("wishereum-userwishes",{});case 28:return e.next=30,o.default.getContract(u.default,f.contractAddress);case 30:return f.contract=e.sent,this.$emit("update"),e.next=34,t;case 34:f.ethusd=e.sent.price.usd,this.$emit("updateCost"),f.initialized=!0;case 37:case"end":return e.stop()}},e,this,[[7,13]])}));return function(){return e.apply(this,arguments)}}(),snackMessage:function(e){this.snackbarMessage=e,this.$refs.snackbar.active||this.$refs.snackbar.open()},noAccount:function(){f.offchain=!0,console.log("OFF CHAIN"),this.menu.find(function(e){return"/wish"===e.path}).visible=!1,this.menu.find(function(e){return"/userwishes"===e.path}).visible=!1,this.snackMessage(f.messages.connect)},update:function(){this.$emit("update"),this.$emit("updateCost")},updateRoute:function(){var e=this;this.update(),setTimeout(function(){return e.$refs.leftSidenav.close()},150),f.offchain&&this.snackMessage(f.messages.connect)},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()}}})},{"../../build/contracts/Wish.json":1,"./router":3,"./tests/deploy-wish":11,"./theme":12,"./web3-utils":13}],3:[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=a(e("./routes/home.js")),i=a(e("./routes/about.js")),r=a(e("./routes/main.js")),o=a(e("./routes/wish.js")),u=a(e("./routes/wishes.js")),c=a(e("./routes/userwishes.js")),f=[{path:"/",component:s.default,label:"Home",visible:!1},{path:"/about",component:i.default,label:"About",visible:!0},{path:"/wish",component:r.default,label:"Make a Wish",visible:!0},{path:"/userwishes",component:c.default,label:"My Wishes",visible:!0},{path:"/wishes",component:u.default,label:"Recent Wishes",visible:!0},{path:"/wish/:id",component:o.default,label:"Wish",visible:!1}],d=new VueRouter({routes:f});n.default=d},{"./routes/about.js":4,"./routes/home.js":5,"./routes/main.js":6,"./routes/userwishes.js":7,"./routes/wish.js":8,"./routes/wishes.js":9}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{offchain:!1,loaded:!1}},watch:{"$route.params.id":function(){this.load()}},created:function(){APP.initialized?this.load():(this.$parent.$off("update"),this.$parent.$on("update",this.load))},methods:{load:function(){this.offchain=APP.offchain,this.loaded=!0}},template:'\n    <div class="page">\n      <md-layout md-align="center" :md-gutter="true">\n        <md-layout md-flex="35" md-flex-xsmall="80" md-align="center">\n            \n          <h2>An Ethereum Wishing Well</h2>\n          \n          <div>\n            <img src="img/well.jpg" />\n          </div>\n          \n          <p>Wishereum allows anyone to make a <strong>permanent</strong> wish on the Ethereum Blockchain</p>\n          \n          <h4>Getting Started</h4>\n          \n          <div v-if="offchain">\n          \n            <p>1. Please install <a href="https://metamask.io/">MetaMask</a> or visit Wishereum using your favorite DApp browser.\n            \n            <p>2. Connect to the <a href="https://rinkeby.etherscan.io/">Rinkeby</a> network in order to make a wish.</p>\n            \n          </div>\n        \n        </md-layout>\n      </md-layout>\n    </div>\n  '}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{offchain:!1,loaded:!1}},watch:{"$route.params.id":function(){this.load()}},created:function(){APP.initialized?this.load():(this.$parent.$off("update"),this.$parent.$on("update",this.load))},methods:{load:function(){this.offchain=APP.offchain,this.loaded=!0}},template:'\n    <div class="page">\n      <md-layout md-align="center" :md-gutter="true">\n        <md-layout md-flex="35" md-flex-xsmall="80" md-align="center">\n          \n          <div>\n            <img src="img/well.jpg" />\n          </div>\n          \n          <h2>The Ethereum Wishing Well</h2>\n          \n          <p>Make a <strong>permanent</strong> wish on the Ethereum Blockchain</p>\n          \n          <md-layout v-if="loaded && !offchain" md-flex="100" md-align="center">\n            <router-link to="/wish" exact>\n              <md-button class="md-raised">Make a Wish</md-button>\n            </router-link>\n          </md-layout>\n          \n          <md-layout md-flex="100" md-align="center">\n            <router-link to="/wishes" exact>\n              <md-button class="md-raised">Recent Wishes</md-button>\n            </router-link>\n          </md-layout>\n          \n          <md-layout md-flex="100" md-align="center">\n            <router-link to="/about" exact>\n              <md-button class="md-raised">About</md-button>\n            </router-link>\n          </md-layout>\n\n        </md-layout>\n      </md-layout>\n    </div>\n  '}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{wish:"",amount:.001,estimate:0,costETH:0,costUSD:0}},created:function(){var e=this;APP.initialized?this.updateCost(""):(this.$parent.$off("updateCost"),this.$parent.$on("updateCost",function(){return e.updateCost("")}))},methods:{updateCost:function(e){var t=this;setTimeout(function(){var n=parseFloat(t.$refs.amount.value);t.estimate=15e4+64*e.length+2e4*Math.floor(e.length/32);var a=n+21*web3.fromWei(t.estimate,"gwei");t.costETH=a.toFixed(3),t.costUSD=(a*APP.ethusd).toFixed(2)},50)},submit:function(){var e=this;APP.wishPromise=APP.contract.makeWish(this.wish,{from:APP.accounts[0],value:web3.toWei(this.amount,"ether"),gas:25e4}),APP.wishPromise.catch(function(t){console.log("user rejected or error",t),APP.wishPromise=null,e.$parent.router.push("/")}),this.$parent.router.push("wish/pending")}},template:'\n    <div class="page">\n      <md-layout md-align="center" :md-gutter="true">\n      \n        <md-layout md-flex="35" md-flex-xsmall="80" md-align="center">\n        \n          <div>\n            <img src="img/well.jpg" />\n          </div>\n        \n          <form novalidate @submit.stop.prevent="submit" class="width-100 center">\n          \n            <md-input-container md-theme="second">\n              <label>Wish</label>\n              <md-textarea v-model="wish" v-on:change="updateCost" type="text" placeholder="Wish"></md-textarea>\n            </md-input-container>\n            \n            <md-input-container md-theme="second">\n              <label>Amount (ETH)</label>\n              <md-input ref="amount" v-model="amount" v-on:change="updateCost"\n                type="number" step="0.001" placeholder="0.001" min="0.001"\n              ></md-input>\n            </md-input-container>\n            \n            <md-button v-on:click="submit" class="md-raised">Make Wish</md-button>\n            \n            <md-layout md-align="center">\n              <md-layout md-flex="25">\n                <div class="amount">Ξ{{ costETH }} ETH</div>\n              </md-layout>\n              <md-layout md-flex="25">\n                <div class="amount">${{ costUSD }} USD</div>\n              </md-layout>\n              <md-layout md-flex="50">\n                <div class="amount">{{ estimate }} * 21 gwei</div>\n              </md-layout>\n            </md-layout>\n            \n            \n          </form>\n          \n        </md-layout>\n        \n      </md-layout>\n    </div>\n  '}},{}],7:[function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(s,i){try{var r=t[s](i),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(e("../templates/wish-template.js"));n.default={data:function(){return{wishes:{}}},created:function(){APP.initialized?this.load():(this.$parent.$off("update"),this.$parent.$on("update",this.load))},methods:{load:function(){var e=this;localforage.getItem("wishereum-userwishes").then(function(t){e.wishes=t||{},e.update()})},refresh:function(){this.$forceUpdate()},update:function(){var e=a(regeneratorRuntime.mark(function e(){var t,n,a,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.wishes,e.next=3,APP.contract.getIndicies.call();case 3:n=e.sent,e.t0=regeneratorRuntime.keys(n);case 5:if((e.t1=e.t0()).done){e.next=21;break}if(a=e.t1.value,s=n[a].toNumber(),void 0!==this.wishes[s]){e.next=18;break}return console.log("fetching wish",s),e.next=12,APP.contract.wishes.call(s);case 12:(i=e.sent)[1]=web3.fromWei(i[1],"ether").toNumber(),this.wishes[s]=i,this.refresh(),e.next=19;break;case 18:console.log("local wish",s);case 19:e.next=5;break;case 21:localforage.setItem("wishereum-userwishes",this.wishes).then(function(){console.log("stored wishes locally")}),this.refresh();case 23:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},template:s.default}},{"../templates/wish-template.js":10}],8:[function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(s,i){try{var r=t[s](i),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(e("../templates/wish-template.js"));n.default={data:function(){return{wishes:{}}},watch:{"$route.params.id":function(){this.load()}},created:function(){APP.initialized?this.load():(this.$parent.$off("update"),this.$parent.$on("update",this.load))},methods:{load:function(){var e=this;localforage.getItem("wishereum-wishes").then(function(t){e.wishes=t||{},e.update()})},update:function(){var e=s(regeneratorRuntime.mark(function e(){var t,n,s,i,r,o,u=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.$route.params.id){e.next=3;break}return e.abrupt("return");case 3:if("pending"!==t){e.next=22;break}if(APP.wishPromise){e.next=7;break}return this.$parent.router.push("/"),e.abrupt("return");case 7:return this.wishes={pending:["Wish Pending","pending",APP.accounts[0]]},this.$forceUpdate(),e.next=11,APP.wishPromise;case 11:return n=e.sent,console.log(n),APP.wishPromise=null,e.next=16,APP.contract.totalWishes.call();case 16:return s=e.sent.toNumber(),i=n.receipt.blockNumber,console.log("transaction block",i),(r=function e(){web3.eth.getBlockNumber(function(t,n){console.log("latest block",n),n>i?u.$parent.router.push("/wish/"+(s-1)):setTimeout(e,5e3)})})(),e.abrupt("return");case 22:if(void 0!==this.wishes[t]){e.next=31;break}return console.log("fetching wish",t),e.next=26,APP.contract.wishes.call(t);case 26:(o=e.sent)[1]=web3.fromWei(o[1],"ether").toNumber(),this.wishes[t]=o,e.next=32;break;case 31:console.log("local wish",t);case 32:localforage.setItem("wishereum-wishes",this.wishes).then(function(){console.log("stored wishes locally")}),this.wishes=a({},t,this.wishes[t]),this.$forceUpdate();case 35:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},template:i.default}},{"../templates/wish-template.js":10}],9:[function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(s,i){try{var r=t[s](i),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(e("../templates/wish-template.js"));n.default={data:function(){return{wishesObject:{},wishes:[]}},created:function(){APP.initialized?this.load():(this.$parent.$off("update"),this.$parent.$on("update",this.load))},methods:{load:function(){var e=this;localforage.getItem("wishereum-wishes").then(function(t){e.wishesObject=t||{},e.update()})},refresh:function(){this.$forceUpdate()},update:function(){var e=a(regeneratorRuntime.mark(function e(){var t,n,a,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,APP.contract.totalWishes.call();case 2:t=e.sent.toNumber(),n=0;case 4:if(!(n<t)){e.next=18;break}if(void 0!==this.wishesObject[n]){e.next=15;break}return console.log("fetching wish",n),e.next=9,APP.contract.wishes.call(n);case 9:(a=e.sent)[1]=web3.fromWei(a[1],"ether").toNumber(),this.wishesObject[n]=a,this.refresh(),e.next=15;break;case 15:n++,e.next=4;break;case 18:localforage.setItem("wishereum-wishes",this.wishesObject).then(function(){console.log("stored wishes locally")}),this.wishes=Object.keys(this.wishesObject).map(function(e){return s.wishesObject[e]}).sort(function(e,t){return e[1]<t[1]}),this.refresh();case 21:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},template:s.default}},{"../templates/wish-template.js":10}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default='\n  <div class="page">\n    <md-layout md-align="center" :md-gutter="true">\n    \n      <md-layout md-flex="35" md-flex-xsmall="80" md-align="center">\n      \n        <div class="well-badge">\n          <img src="img/well.png" />\n        </div>\n    \n        <router-link v-for="(wish, key) in wishes" :to="\'/wish/\' + key" exact>\n          <md-whiteframe md-elevation="1" class="wish">\n            <div class="text">{{ wish[0] }}</div>\n            <div class="amount" v-if="wish[1] !== \'pending\'">{{ wish[1] }} ETH</div>\n            <div class="address">From: {{ wish[2] }}</div>\n          </md-whiteframe>\n        </router-link>\n        \n      </md-layout>\n    </md-layout>\n  </div>\n'},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={deploy:function(e,t,n){var a=TruffleContract(e);console.log(a),a.setProvider(web3.currentProvider),a.new(null,{from:t,gas:n})}}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={init:function(){Vue.material.registerTheme("default",{primary:"white",accent:"blue",warn:"orange",background:"white"}),Vue.material.registerTheme("second",{primary:"blue",accent:"blue",warn:"orange",background:"white"})}}},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={getWeb3:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost:8545",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.web3;return t=void 0!==t?new Web3(t.currentProvider):new Web3(new Web3.providers.HttpProvider(e)),window.web3=t,t},setWeb3:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost:8545";return web3=new Web3(new Web3.providers.HttpProvider(e)),window.web3=web3,web3},getNetwork:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.web3;return new Promise(function(t,n){if(e){var a=void 0,s=void 0;e.version.getNetwork(function(e,i){if(e)n(e);else{switch(a=parseInt(i)){case 1:s="mainnet";break;case 2:s="morden";break;case 3:s="ropsten";break;case 4:s="rinkeby";break;default:s="localhost"}console.log("The network is:",s,a),t({id:a,name:s})}})}else console.log("No web3 instance provided")})},getAccounts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.web3;return new Promise(function(t,n){e||n("No web3 instance provided");var a=void 0,s=0;!function i(){if((a=e.eth.accounts).length>0)t(a);else{if(5==++s)return void n("accounts could not be found on web3 provider");setTimeout(i,200)}}()})},getContract:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.web3,a=TruffleContract(e);return a.setProvider(n.currentProvider),t?a.at(t):a.deployed()}}},{}]},{},[2]);
//# sourceMappingURL=app.js.map
