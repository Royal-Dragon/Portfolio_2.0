import{r as e,u as D,f as H,a as G,P as j,L as O,j as C,b as V,D as W,G as q,T as K,C as N,c as $,d as M,V as B,W as X,e as Y,g as J,S as Q,M as Z,U as ee,h as ne,i as re,k as te,A as ie}from"./index-BHsvYECr.js";function F(){const n=e.useRef(!1);return D(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function ce(){const n=F(),[r,t]=e.useState(0),i=e.useCallback(()=>{n.current&&t(r+1)},[r]);return[e.useCallback(()=>H.postRender(i),[i]),r]}class oe extends e.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function se({children:n,isPresent:r}){const t=e.useId(),i=e.useRef(null),f=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:s,height:c,top:l,left:m}=f.current;if(r||!i.current||!s||!c)return;i.current.dataset.motionPopId=t;const v=document.createElement("style");return document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${c}px !important;
            top: ${l}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[r]),e.createElement(oe,{isPresent:r,childRef:i,sizeRef:f},e.cloneElement(n,{ref:i}))}const S=({children:n,initial:r,isPresent:t,onExitComplete:i,custom:f,presenceAffectsLayout:s,mode:c})=>{const l=G(ae),m=e.useId(),v=e.useMemo(()=>({id:m,initial:r,isPresent:t,custom:f,onExitComplete:u=>{l.set(u,!0);for(const g of l.values())if(!g)return;i&&i()},register:u=>(l.set(u,!1),()=>l.delete(u))}),s?void 0:[t]);return e.useMemo(()=>{l.forEach((u,g)=>l.set(g,!1))},[t]),e.useEffect(()=>{!t&&!l.size&&i&&i()},[t]),c==="popLayout"&&(n=e.createElement(se,{isPresent:t},n)),e.createElement(j.Provider,{value:v},n)};function ae(){return new Map}function ue(n){return e.useEffect(()=>()=>n(),[])}const w=n=>n.key||"";function le(n,r){n.forEach(t=>{const i=w(t);r.set(i,t)})}function fe(n){const r=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&r.push(t)}),r}const ge=({children:n,custom:r,initial:t=!0,onExitComplete:i,exitBeforeEnter:f,presenceAffectsLayout:s=!0,mode:c="sync"})=>{const l=e.useContext(O).forceRender||ce()[0],m=F(),v=fe(n);let u=v;const g=e.useRef(new Map).current,d=e.useRef(u),x=e.useRef(new Map).current,y=e.useRef(!0);if(D(()=>{y.current=!1,le(v,x),d.current=u}),ue(()=>{y.current=!0,x.clear(),g.clear()}),y.current)return e.createElement(e.Fragment,null,u.map(o=>e.createElement(S,{key:w(o),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:s,mode:c},o)));u=[...u];const z=d.current.map(w),_=v.map(w),P=z.length;for(let o=0;o<P;o++){const a=z[o];_.indexOf(a)===-1&&!g.has(a)&&g.set(a,void 0)}return c==="wait"&&g.size&&(u=[]),g.forEach((o,a)=>{if(_.indexOf(a)!==-1)return;const p=x.get(a);if(!p)return;const R=z.indexOf(a);let h=o;if(!h){const A=()=>{g.delete(a);const L=Array.from(x.keys()).filter(b=>!_.includes(b));if(L.forEach(b=>x.delete(b)),d.current=v.filter(b=>{const E=w(b);return E===a||L.includes(E)}),!g.size){if(m.current===!1)return;l(),i&&i()}};h=e.createElement(S,{key:w(p),isPresent:!1,onExitComplete:A,custom:r,presenceAffectsLayout:s,mode:c},p),g.set(a,h)}u.splice(R,0,h)}),u=u.map(o=>{const a=o.key;return g.has(a)?o:e.createElement(S,{key:w(o),isPresent:!0,presenceAffectsLayout:s,mode:c},o)}),e.createElement(e.Fragment,null,g.size?u:u.map(o=>e.cloneElement(o)))},de=({children:n,in:r,unmount:t,initial:i=!0,...f})=>{const s=e.useRef(),c=e.useRef();return e.useEffect(()=>{clearTimeout(r?c.current:s.current)},[r]),C.jsx(ge,{children:(r||!t)&&C.jsx(ve,{enterTimeout:s,exitTimeout:c,in:r,initial:i,...f,children:n})})},ve=({children:n,timeout:r=0,enterTimeout:t,exitTimeout:i,onEnter:f,onEntered:s,onExit:c,onExited:l,initial:m,nodeRef:v,in:u})=>{const[g,d]=e.useState(m?"exited":"entered"),[x,y]=V(),[z,_]=e.useState(!m),P=typeof r=="object",o=e.useRef(null),a=v||o,p=z&&u?x:!1;return e.useEffect(()=>{var h;if(z||!u)return;const R=P?r.enter:r;clearTimeout(t.current),clearTimeout(i.current),_(!0),d("entering"),f==null||f(),(h=a.current)==null||h.offsetHeight,t.current=setTimeout(()=>{d("entered"),s==null||s()},R)},[f,s,r,g,u]),e.useEffect(()=>{var h;if(x&&u)return;const R=P?r.exit:r;clearTimeout(t.current),clearTimeout(i.current),d("exiting"),c==null||c(),(h=a.current)==null||h.offsetHeight,i.current=setTimeout(()=>{d("exited"),y==null||y(),l==null||l()},R)},[x,c,y,r,l,u]),n({visible:p,status:g,nodeRef:a})};function pe(n,r,t={},i=!0){const[f,s]=e.useState(!1),[c,l]=e.useState(!1);return e.useEffect(()=>{if(!(n!=null&&n.current))return;const m=new IntersectionObserver(([v])=>{const{isIntersecting:u,target:g}=v;s(u),u&&r&&(m.unobserve(g),l(!0))},t);return!c&&i&&m.observe(n.current),()=>m.disconnect()},[n,r,t,c,i]),f}function me(){const n=e.useRef(()=>({w:1280,h:800})),r=e.useCallback(()=>{let c=document.createElement("div");c.style.position="fixed",c.style.height="100vh",c.style.width=0,c.style.top=0,document.documentElement.appendChild(c),n.current.w=window.innerWidth,n.current.h=c.offsetHeight,document.documentElement.removeChild(c),c=null},[]),t=e.useCallback(()=>(navigator==null?void 0:navigator.userAgent.match(/iphone|ipod|ipad/i))?(r(),n.current.h):window.innerHeight,[r]),i=e.useCallback(()=>({width:window.innerWidth,height:t()}),[t]),[f,s]=e.useState(n.current);return e.useEffect(()=>{const c=()=>{s(i())};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c)}},[i]),f}const I={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400};function xe(n,r){let t=0;return function(...i){const f=new Date;f-t>=r&&(n(...i),t=f)}}N.enabled=!0;const U=new W,ye=new q;U.setDecoderPath("/draco/");ye.setDRACOLoader(U);new K;const _e=n=>{n==null||n.traverse(r=>{if(r.isMesh)if(r.geometry.dispose(),r.material.isMaterial)k(r.material);else for(const t of r.material)k(t)})},k=n=>{var r,t,i;n.dispose();for(const f of Object.keys(n)){const s=n[f];s&&typeof s=="object"&&"minFilter"in s&&(s.dispose(),(i=(t=(r=s.source)==null?void 0:r.data)==null?void 0:t.close)==null||i.call(t))}},he=n=>{n.dispose(),n=null},ze=n=>{for(const r of n)r.parent.remove(r)},Pe=`#define PHONG\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform vec3 specular;\r
uniform float shininess;\r
uniform float opacity;\r
\r
uniform float time;\r
varying vec2 vUv;\r
varying vec3 newPosition;\r
varying float noise;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <alphahash_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_phong_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\r
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\r
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\r
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r
  vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <alphahash_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
	// accumulation\r
	#include <lights_phong_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	#include <aomap_fragment>\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <opaque_fragment>\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\r
}`,we=`#define PHONG\r
\r
//\r
// GLSL textureless classic 3D noise "cnoise",\r
// with an RSL-style periodic variant "pnoise".\r
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r
// Version: 2011-10-11\r
//\r
// Many thanks to Ian McEwan of Ashima Arts for the\r
// ideas for permutation and gradient selection.\r
//\r
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r
// Distributed under the MIT license. See LICENSE file.\r
// https://github.com/ashima/webgl-noise\r
//\r
vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+1.0)*x);\r
}\r
\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}\r
\r
// Classic Perlin noise\r
float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); // Integer part for indexing\r
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
// Classic Perlin noise, periodic variant\r
float pnoise(vec3 P, vec3 rep)\r
{\r
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
float turbulence(vec3 p) {\r
  float w = 100.0;\r
  float t = -.5;\r
  for (float f = 1.0 ; f <= 10.0 ; f++) {\r
    float power = pow(2.0, f);\r
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\r
  }\r
  return t;\r
}\r
\r
// START\r
uniform float time;\r
varying vec2 vUv;\r
varying float noise;\r
\r
varying vec3 vViewPosition;\r
\r
#include <common>\r
#include <batching_pars_vertex>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
	#include <batching_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
  vUv = uv;\r
\r
  noise = turbulence(0.01 * position + normal + time * 0.8);\r
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\r
}`,Re="_canvas_1oy71_1",be={canvas:Re},T={stiffness:30,damping:20,mass:2},Se=n=>{const{theme:r}="Dark",t=e.useRef(Date.now()),i=e.useRef(),f=e.useRef(),s=e.useRef(),c=e.useRef(),l=e.useRef(),m=e.useRef(),v=e.useRef(),u=e.useRef(),g=e.useRef(),d=e.useRef(),x=$(),y=pe(i),z=me(),_=M(0,T),P=M(0,T);return e.useEffect(()=>{const{innerWidth:o,innerHeight:a}=window;return f.current=new B(.8,.5),s.current=new X({canvas:i.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),s.current.setSize(o,a),s.current.setPixelRatio(1),s.current.outputColorSpace=Y,c.current=new J(54,o/a,.1,100),c.current.position.z=52,l.current=new Q,u.current=new Z,u.current.onBeforeCompile=p=>{v.current=ee.merge([p.uniforms,{time:{type:"f",value:0}}]),p.uniforms=v.current,p.vertexShader=we,p.fragmentShader=Pe},e.startTransition(()=>{g.current=new ne(32,128,128),d.current=new re(g.current,u.current),d.current.position.z=0,d.current.modifier=Math.random(),l.current.add(d.current)}),()=>{_e(l.current),he(s.current)}},[]),e.useEffect(()=>{const o=new te(16777215,2),a=new ie(16777215,.4);return o.position.z=200,o.position.x=100,o.position.y=100,m.current=[o,a],m.current.forEach(p=>l.current.add(p)),()=>{ze(m.current)}},[r]),e.useEffect(()=>{const{width:o,height:a}=z,p=a+a*.3;s.current.setSize(o,p),c.current.aspect=o/p,c.current.updateProjectionMatrix(),x&&s.current.render(l.current,c.current),o<=I.mobile?(d.current.position.x=14,d.current.position.y=10):o<=I.tablet?(d.current.position.x=18,d.current.position.y=14):(d.current.position.x=22,d.current.position.y=16)},[x,z]),e.useEffect(()=>{const o=xe(a=>{const p={x:a.clientX/window.innerWidth,y:a.clientY/window.innerHeight};_.set(p.y/2),P.set(p.x/2)},100);return!x&&y&&window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[y,x,_,P]),e.useEffect(()=>{let o;const a=()=>{o=requestAnimationFrame(a),v.current!==void 0&&(v.current.time.value=5e-5*(Date.now()-t.current)),d.current.rotation.z+=.001,d.current.rotation.x=_.get(),d.current.rotation.y=P.get(),s.current.render(l.current,c.current)};return!x&&y?a():s.current.render(l.current,c.current),()=>{cancelAnimationFrame(o)}},[y,x,_,P]),C.jsx(de,{in:!0,timeout:3e3,nodeRef:i,children:({visible:o,nodeRef:a})=>C.jsx("canvas",{"aria-hidden":!0,className:be.canvas,"data-visible":o,ref:a,...n})})};export{Se as DisplacementSphere};
