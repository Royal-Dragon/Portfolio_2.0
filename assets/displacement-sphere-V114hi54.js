import{r as n,j as w,b as T,G as M,T as A,d as D,V as k,W as H,L as j,P as F,S as G,M as U,U as E,e as O,f as V,h as W,A as q}from"./three-vendor-fNon49Yt.js";import{A as N,b as B,u as X,a as S}from"./motion-vendor-CpNC0FBB.js";const Y=({children:r,in:e,unmount:c,initial:a=!0,...u})=>{const i=n.useRef(),t=n.useRef();return n.useEffect(()=>{clearTimeout(e?t.current:i.current)},[e]),w.jsx(N,{children:(e||!c)&&w.jsx(J,{enterTimeout:i,exitTimeout:t,in:e,initial:a,...u,children:r})})},J=({children:r,timeout:e=0,enterTimeout:c,exitTimeout:a,onEnter:u,onEntered:i,onExit:t,onExited:l,initial:v,nodeRef:x,in:d})=>{const[_,g]=n.useState(v?"exited":"entered"),[m,p]=B(),[h,z]=n.useState(!v),y=typeof e=="object",o=n.useRef(null),s=x||o,f=h&&d?m:!1;return n.useEffect(()=>{var P;if(h||!d)return;const b=y?e.enter:e;clearTimeout(c.current),clearTimeout(a.current),z(!0),g("entering"),u==null||u(),(P=s.current)==null||P.offsetHeight,c.current=setTimeout(()=>{g("entered"),i==null||i()},b)},[u,i,e,_,d]),n.useEffect(()=>{var P;if(m&&d)return;const b=y?e.exit:e;clearTimeout(c.current),clearTimeout(a.current),g("exiting"),t==null||t(),(P=s.current)==null||P.offsetHeight,a.current=setTimeout(()=>{g("exited"),p==null||p(),l==null||l()},b)},[m,t,p,e,l,d]),r({visible:f,status:_,nodeRef:s})},K={};function Q(r,e,c=K,a=!0){const[u,i]=n.useState(!1),[t,l]=n.useState(!1);return n.useEffect(()=>{if(!(r!=null&&r.current))return;const v=new IntersectionObserver(([x])=>{const{isIntersecting:d,target:_}=x;i(d),d&&e&&(v.unobserve(_),l(!0))},c);return!t&&a&&v.observe(r.current),()=>v.disconnect()},[r,e,c,t,a]),u}function Z(){const r=n.useRef(()=>({w:1280,h:800})),e=n.useCallback(()=>{let t=document.createElement("div");t.style.position="fixed",t.style.height="100vh",t.style.width=0,t.style.top=0,document.documentElement.appendChild(t),r.current.w=window.innerWidth,r.current.h=t.offsetHeight,document.documentElement.removeChild(t),t=null},[]),c=n.useCallback(()=>(navigator==null?void 0:navigator.userAgent.match(/iphone|ipod|ipad/i))?(e(),r.current.h):window.innerHeight,[e]),a=n.useCallback(()=>({width:window.innerWidth,height:c()}),[c]),[u,i]=n.useState(r.current);return n.useEffect(()=>{const t=()=>{i(a())};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[a]),u}const L={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400};function $(r,e){let c=0;return function(...a){const u=new Date;u-c>=e&&(r(...a),c=u)}}D.enabled=!0;const I=new T,ee=new M;I.setDecoderPath("/draco/");ee.setDRACOLoader(I);new A;const ne=r=>{r==null||r.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)R(e.material);else for(const c of e.material)R(c)})},R=r=>{var e,c,a;r.dispose();for(const u of Object.keys(r)){const i=r[u];i&&typeof i=="object"&&"minFilter"in i&&(i.dispose(),(a=(c=(e=i.source)==null?void 0:e.data)==null?void 0:c.close)==null||a.call(c))}},te=r=>{r.dispose(),r=null},re=r=>{for(const e of r)e.parent.remove(e)},ie=`#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}`,ce=`#define PHONG

//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float turbulence(vec3 p) {
  float w = 100.0;
  float t = -.5;
  for (float f = 1.0 ; f <= 10.0 ; f++) {
    float power = pow(2.0, f);
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
  }
  return t;
}

// START
uniform float time;
varying vec2 vUv;
varying float noise;

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

  vUv = uv;

  noise = turbulence(0.01 * position + normal + time * 0.8);
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);
}`,oe="_canvas_1yxsf_1",ae={canvas:oe},C={stiffness:30,damping:20,mass:2},ue=r=>{const{theme:e}="Dark",c=n.useRef(Date.now()),a=n.useRef(),u=n.useRef(),i=n.useRef(),t=n.useRef(),l=n.useRef(),v=n.useRef(),x=n.useRef(),d=n.useRef(),_=n.useRef(),g=n.useRef(),m=X(),p=Q(a),h=Z(),z=S(0,C),y=S(0,C);return n.useEffect(()=>{const{innerWidth:o,innerHeight:s}=window;return u.current=new k(.8,.5),i.current=new H({canvas:a.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),i.current.setSize(o,s),i.current.setPixelRatio(1),i.current.outputColorSpace=j,t.current=new F(54,o/s,.1,100),t.current.position.z=52,l.current=new G,d.current=new U,d.current.onBeforeCompile=f=>{x.current=E.merge([f.uniforms,{time:{type:"f",value:0}}]),f.uniforms=x.current,f.vertexShader=ce,f.fragmentShader=ie},n.startTransition(()=>{_.current=new O(32,128,128),g.current=new V(_.current,d.current),g.current.position.z=0,g.current.modifier=Math.random(),l.current.add(g.current)}),()=>{ne(l.current),te(i.current)}},[]),n.useEffect(()=>{const o=new W(16777215,2),s=new q(16777215,.4);return o.position.z=200,o.position.x=100,o.position.y=100,v.current=[o,s],v.current.forEach(f=>l.current.add(f)),()=>{re(v.current)}},[e]),n.useEffect(()=>{const{width:o,height:s}=h,f=s+s*.3;i.current.setSize(o,f),t.current.aspect=o/f,t.current.updateProjectionMatrix(),m&&i.current.render(l.current,t.current),o<=L.mobile?(g.current.position.x=14,g.current.position.y=10):o<=L.tablet?(g.current.position.x=18,g.current.position.y=14):(g.current.position.x=22,g.current.position.y=16)},[m,h]),n.useEffect(()=>{const o=$(s=>{const f={x:s.clientX/window.innerWidth,y:s.clientY/window.innerHeight};z.set(f.y/2),y.set(f.x/2)},100);return!m&&p&&window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[p,m,z,y]),n.useEffect(()=>{let o;const s=()=>{o=requestAnimationFrame(s),x.current!==void 0&&(x.current.time.value=5e-5*(Date.now()-c.current)),g.current.rotation.z+=.001,g.current.rotation.x=z.get(),g.current.rotation.y=y.get(),i.current.render(l.current,t.current)};return!m&&p?s():i.current.render(l.current,t.current),()=>{cancelAnimationFrame(o)}},[p,m,z,y]),w.jsx(Y,{in:!0,timeout:3e3,nodeRef:a,children:({visible:o,nodeRef:s})=>w.jsx("canvas",{"aria-hidden":!0,className:ae.canvas,"data-visible":o,ref:s,...r})})};export{ue as DisplacementSphere};
