(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(98)),a={id:"detectors",title:"Detectors"},i={unversionedId:"configuration/detectors",id:"configuration/detectors",isDocsHomePage:!1,title:"Detectors",description:"The default config will look for a USB Coral device. If you do not have a Coral, you will need to configure a CPU detector. If you have PCI or multiple Coral devices, you need to configure your detector devices in the config file. When using multiple detectors, they run in dedicated processes, but pull from a common queue of requested detections across all cameras.",source:"@site/docs/configuration/detectors.md",slug:"/configuration/detectors",permalink:"/frigate/configuration/detectors",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/configuration/detectors.md",version:"current",sidebar:"docs",previous:{title:"Optimizing performance",permalink:"/frigate/configuration/optimizing"},next:{title:"Reducing false positives",permalink:"/frigate/configuration/false_positives"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The default config will look for a USB Coral device. If you do not have a Coral, you will need to configure a CPU detector. If you have PCI or multiple Coral devices, you need to configure your detector devices in the config file. When using multiple detectors, they run in dedicated processes, but pull from a common queue of requested detections across all cameras."),Object(c.b)("p",null,"Frigate supports ",Object(c.b)("inlineCode",{parentName:"p"},"edgetpu")," and ",Object(c.b)("inlineCode",{parentName:"p"},"cpu")," as detector types. The device value should be specified according to the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://coral.ai/docs/edgetpu/multiple-edgetpu/#using-the-tensorflow-lite-python-api"}),"Documentation for the TensorFlow Lite Python API"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": There is no support for Nvidia GPUs to perform object detection with tensorflow. It can be used for ffmpeg decoding, but not object detection."),Object(c.b)("p",null,"Single USB Coral:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"detectors:\n  coral:\n    type: edgetpu\n    device: usb\n")),Object(c.b)("p",null,"Multiple USB Corals:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"detectors:\n  coral1:\n    type: edgetpu\n    device: usb:0\n  coral2:\n    type: edgetpu\n    device: usb:1\n")),Object(c.b)("p",null,"Mixing Corals:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"detectors:\n  coral_usb:\n    type: edgetpu\n    device: usb\n  coral_pci:\n    type: edgetpu\n    device: pci\n")),Object(c.b)("p",null,"CPU Detectors (not recommended):"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"detectors:\n  cpu1:\n    type: cpu\n  cpu2:\n    type: cpu\n")))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||c;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);