(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{464:function(t,s,e){"use strict";e.r(s);var a=e(49),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"show-priv-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-priv-key"}},[t._v("#")]),t._v(" show_priv_key")]),t._v(" "),e("p",[e("strong",[t._v("show_priv_key coin")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("show_priv_key")]),t._v(" method returns the private key of the specified "),e("code",[t._v("coin")]),t._v(" in a format compatible with "),e("code",[t._v("coin")]),t._v(" wallets.\nThe output can be used for the "),e("code",[t._v("importprivkey")]),t._v(" method (UTXO coins) or as a private key for MyEtherWallet (ETH/ERC20).")]),t._v(" "),e("h4",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("coin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the name of the coin of the private key to show")])])])]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("coin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the name of the coin")])]),t._v(" "),e("tr",[e("td",[t._v("priv_key")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the private key of the coin")])])])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h4",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("show_priv_key"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("HELLOWORLD"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-utxo-wif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-utxo-wif"}},[t._v("#")]),t._v(" Response (UTXO WIF)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HELLOWORLD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"priv_key"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UvCjJf4dKSs2vFGVtCnUTAhR5FTZGdg43DDRa9s7s5DV1sSDX14g"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-0x-prefixed-eth-private-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-0x-prefixed-eth-private-key"}},[t._v("#")]),t._v(" Response (0x-prefixed ETH private key)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETH"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"priv_key"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xb8c774f071de08c7fd8f62b97f1a5726f6ce9f1bcf141b70b86689254ed6714e"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);