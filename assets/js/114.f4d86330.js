(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{410:function(t,n,a){"use strict";a.r(n);var s=a(49),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-compile-atomicdex-api-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-compile-atomicdex-api-from-source"}},[t._v("#")]),t._v(" How To Compile AtomicDEX API from Source")]),t._v(" "),a("p",[t._v("The following tutorial introduces the reader to a simple method to build the AtomicDEX API from source.")]),t._v(" "),a("h2",{attrs:{id:"installing-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[t._v("#")]),t._v(" Installing Dependencies")]),t._v(" "),a("h4",{attrs:{id:"step-1-os-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-os-packages"}},[t._v("#")]),t._v(" Step 1: OS Packages")]),t._v(" "),a("h5",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" jq llvm-3.9-dev libclang-3.9-dev clang-3.9 cmake libssl-dev pkg-config\n")])])]),a("p",[t._v("If you are using Ubuntu 20.04, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" jq llvm-dev libclang-dev clang cmake libssl-dev pkg-config\n")])])]),a("h4",{attrs:{id:"step-2-install-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-install-rust"}},[t._v("#")]),t._v(" Step 2: Install Rust")]),t._v(" "),a("h5",{attrs:{id:"command-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://sh.rustup.rs -sSf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),a("p",[t._v("When asked to select an installation type, select the following.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2) Customize installation\n")])])]),a("p",[t._v("Choose default host triple and toolchain, then select minimal profile.")]),t._v(" "),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl https://sh.rustup.rs -sSf | sh\ninfo: downloading installer\n\nWelcome to Rust!\n\nThis will download and install the official compiler for the Rust programming\nlanguage, and its package manager, Cargo.\n\nIt will add the cargo, rustc, rustup and other commands to Cargo's bin\ndirectory, located at:\n\n  /home/mylo/.cargo/bin\n\nThis path will then be added to your PATH environment variable by modifying the\nprofile file located at:\n\n  /home/mylo/.profile\n\nYou can uninstall at any time with rustup self uninstall and these changes will\nbe reverted.\n\nCurrent installation options:\n\n   default host triple: x86_64-unknown-linux-gnu\n     default toolchain: stable\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n>2\n\nI'm going to ask you the value of each of these installation options.\nYou may simply press the Enter key to leave unchanged.\n\nDefault host triple?\n\n\nDefault toolchain? (stable/beta/nightly/none)\n\n\nProfile (which tools and data to install)? (minimal/default/complete)\nminimal\n\ninfo: syncing channel updates for 'stable-x86_64-unknown-linux-gnu'\ninfo: latest update on 2019-07-04, rust version 1.36.0 (a53f9df32 2019-07-03)\ninfo: downloading component 'rustc'\ninfo: downloading component 'rust-std'\ninfo: downloading component 'cargo'\n...\n...\ninfo: downloading component 'rust-docs'\ninfo: installing component 'rustc'\n 91.1 MiB /  91.1 MiB (100 %)  17.7 MiB/s in  5s ETA:  0s\ninfo: installing component 'rust-std'\n....\n...\n stable installed - rustc 1.36.0 (a53f9df32 2019-07-03)\n\n\nRust is installed now. Great!\n\nTo get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH\nenvironment variable. Next time you log in this will be done automatically.\n\nTo configure your current shell run source $HOME/.cargo/env\n\n")])])])]),t._v(" "),a("p",[t._v("Once the installation is complete, enter "),a("code",[t._v("Logout")]),t._v(" and then "),a("code",[t._v("Login")]),t._v(" again.")]),t._v(" "),a("p",[t._v("Alternatively, you may execute the following command in each active shell until you reach the "),a("code",[t._v("Login")]),t._v(" again.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.cargo/env\n")])])]),a("h4",{attrs:{id:"step-3-install-rust-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-install-rust-components"}},[t._v("#")]),t._v(" Step 3: Install Rust components")]),t._v(" "),a("h5",{attrs:{id:"command-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-3"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rustup "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nightly-2020-10-25\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup install nightly-2020-10-25\ninfo: syncing channel updates for 'nightly-2020-10-25-x86_64-unknown-linux-gnu'\n696.1 KiB / 696.1 KiB (100 %) 567.6 KiB/s in  2s ETA:  0s\ninfo: latest update on 2020-10-25, rust version 1.49.0-nightly (ffa2e7ae8 2020-10-24)\ninfo: downloading component 'cargo'\n  5.3 MiB /   5.3 MiB (100 %) 426.6 KiB/s in  3s ETA:  0s\ninfo: downloading component 'clippy'\n  2.4 MiB /   2.4 MiB (100 %) 527.6 KiB/s in  2s ETA:  0s\ninfo: downloading component 'rust-docs'\n 13.6 MiB /  13.6 MiB (100 %)   4.3 MiB/s in  3s ETA:  0s\ninfo: downloading component 'rust-std'\n 22.3 MiB /  22.3 MiB (100 %)   7.1 MiB/s in  4s ETA:  0s\ninfo: downloading component 'rustc'\n 55.1 MiB /  55.1 MiB (100 %)  10.7 MiB/s in  7s ETA:  0s\ninfo: downloading component 'rustfmt'\n  3.6 MiB /   3.6 MiB (100 %) 289.6 KiB/s in  2s ETA:  0s\ninfo: installing component 'cargo'\ninfo: Defaulting to 500.0 MiB unpack ram\n  5.3 MiB /   5.3 MiB (100 %)   4.4 MiB/s in  1s ETA:  0s\ninfo: installing component 'clippy'\ninfo: installing component 'rust-docs'\n 13.6 MiB /  13.6 MiB (100 %)   3.8 MiB/s in  3s ETA:  0s\ninfo: installing component 'rust-std'\n 22.3 MiB /  22.3 MiB (100 %)   4.0 MiB/s in  5s ETA:  0s\ninfo: installing component 'rustc'\n 55.1 MiB /  55.1 MiB (100 %)   4.6 MiB/s in 12s ETA:  0s\ninfo: installing component 'rustfmt'\n\n  nightly-2020-10-25-x86_64-unknown-linux-gnu installed - rustc 1.49.0-nightly (ffa2e7ae8 2020-10-24)\n\ninfo: checking for self-updates\ninfo: downloading self-update\n\n")])])])]),t._v(" "),a("h5",{attrs:{id:"command-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-4"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rustup default nightly-2020-10-25\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup default nightly-2020-10-25\ninfo: using existing install for 'nightly-2020-10-25-x86_64-unknown-linux-gnu'\ninfo: default toolchain set to 'nightly-2020-10-25-x86_64-unknown-linux-gnu'\n\n  nightly-2020-10-25-x86_64-unknown-linux-gnu unchanged - rustc 1.49.0-nightly (ffa2e7ae8 2020-10-24)\n")])])])]),t._v(" "),a("h5",{attrs:{id:"command-optional-skip-this-step-if-it-fails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-optional-skip-this-step-if-it-fails"}},[t._v("#")]),t._v(" Command (Optional, skip this step if it fails)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rustup component "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" rustfmt-preview\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup component add rustfmt-preview\ninfo: downloading component 'rustfmt'\n  2.9 MiB /   2.9 MiB (100 %) 928.6 KiB/s in  1s ETA:  0s\ninfo: installing component 'rustfmt'\n")])])])]),t._v(" "),a("h2",{attrs:{id:"install-the-atomicdex-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-atomicdex-api"}},[t._v("#")]),t._v(" Install the AtomicDEX API")]),t._v(" "),a("h4",{attrs:{id:"step-1-download-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-download-source-code"}},[t._v("#")]),t._v(" Step 1: Download source code")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/KomodoPlatform/atomicDEX-API --branch mm2.1 --single-branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" atomicDEX-API\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$cd ~ ; git clone https://github.com/KomodoPlatform/atomicDEX-API --branch mm2.1 --single-branch && cd atomicDEX-API\nCloning into 'atomicDEX-API'...\nremote: Enumerating objects: 34, done.\nremote: Counting objects: 100% (34/34), done.\nremote: Compressing objects: 100% (23/23), done.\nremote: Total 107436 (delta 14), reused 21 (delta 11), pack-reused 107402\nReceiving objects: 100% (107436/107436), 194.19 MiB | 9.59 MiB/s, done.\nResolving deltas: 100% (84045/84045), done.\n")])])])]),t._v(" "),a("h4",{attrs:{id:"step-2-compile-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-compile-source-code"}},[t._v("#")]),t._v(" Step 2: Compile Source Code")]),t._v(" "),a("h5",{attrs:{id:"command-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-5"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cargo build --features native -vv\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Sample Output"}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("…\n…\n    Finished dev [optimized + debuginfo] target(s) in 6m 40s\n")])])])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);