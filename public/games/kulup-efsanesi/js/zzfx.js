/**
 * ==============================================================================
 * © 2026 ELOCKMAN GAME STUDIO. ALL RIGHTS RESERVED.
 * Developer ID: 6034929488947548242 | Product: Kulüp Efsanesi (com.elockman.kulupefsanesi)
 * Unauthorized reverse-engineering, decompilation or code duplication prohibited.
 * Hash: EGS-KE-6034929488947548242-2026-SECURE
 * ==============================================================================
 */
/*

ZzFX - Zuper Zmall Zound Zynth v1.4.0 by Frank Force
https://github.com/KilledByAPixel/ZzFX

  ZzFX MIT License

  Copyright (c) 2019 - Frank Force

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

Adapted for Kulup Efsanesi (classic script + bus routing + lazy AudioContext).
*/
!function(t){"use strict";const n={volume:.3,sampleRate:44100,audioContext:null,destinationNode:null,setContext:function(t,n){this.audioContext=t||null,this.destinationNode=n||null,t&&t.sampleRate&&(this.sampleRate=t.sampleRate)},ensureContext:function(){if(!this.audioContext){const n=t.AudioContext||t.webkitAudioContext;n&&(this.audioContext=new n,this.audioContext.sampleRate&&(this.sampleRate=this.audioContext.sampleRate))}return this.audioContext},play:function(...t){return this.playSamples([this.buildSamples(...t)])},playTo:function(t,n,...e){const a=n||{},o=this.buildSamples(...e);return this.playSamples([o],void 0!==a.volumeScale?a.volumeScale:1,void 0!==a.rate?a.rate:1,void 0!==a.pan?a.pan:0,!!a.loop,t)},playSamples:function(n,e=1,a=1,o=0,s=!1,i=null){const l=this.ensureContext();if(!l)return null;const u=n.length,c=n[0]?n[0].length:0;if(!u||!c)return null;const r=l.createBuffer(u,c,this.sampleRate),h=l.createBufferSource();for(let t=0;t<u;t++)r.getChannelData(t).set(n[t]);h.buffer=r,h.playbackRate.value=Math.max(.25,Math.min(4,a)),h.loop=s;const d=l.createGain();d.gain.value=Math.max(0,this.volume*e);const p=i||this.destinationNode||l.destination;d.connect(p),h.gainNode=d;let m=null;return"function"==typeof t.StereoPannerNode?(m=new t.StereoPannerNode(l,{pan:Math.max(-1,Math.min(1,o))}),h.connect(m).connect(d)):h.connect(d),h.onended=function(){try{h.disconnect()}catch(t){}if(m)try{m.disconnect()}catch(t){}try{d.disconnect()}catch(t){}},h.start(),h},buildSamples:function(t=1,n=.05,e=220,a=0,o=0,s=.1,i=0,l=1,u=0,c=0,r=0,h=0,d=0,p=0,m=0,f=0,M=0,x=1,y=0,S=0,C=0){let v,R,b,w=this.sampleRate,g=2*Math.PI,N=Math.abs,z=t=>t<0?-1:1,Z=u*=500*g/w/w,A=e*=(1+2*n*Math.random()-n)*g/w,F=0,P=0,k=0,B=1,T=0,X=0,D=0,G=g*N(C)*2/w,I=Math.cos(G),j=Math.sin(G)/2/2,q=1+j,E=-2*I/q,H=(1-j)/q,J=(1+z(C)*I)/2/q,K=-(z(C)+I)/q,L=J,O=0,Q=0,U=0,V=0;for(c*=500*g/w**3,m*=g/w,r*=g/w,h*=w,d=d*w|0,v=(a=a*w||9)+(y*=w)+(o*=w)+(s*=w)+(M*=w)|0,R=new Float32Array(v>0?v:0);X<v;R[X++]=D*t)++k%(100*f|0)||(D=i?i>1?i>2?i>3?i>4?T/g%1<l/2?1:-1:Math.sin(T**3):Math.max(Math.min(Math.tan(T),1),-1):1-(2*T/g%2+2)%2:1-4*N(Math.round(T/g)-T/g):Math.sin(T),D=(d?1-S+S*Math.sin(g*X/d):1)*(i>4?D:z(D)*N(D)**l)*(X<a?X/a:X<a+y?1-(X-a)/y*(1-x):X<a+y+o?x:X<v-M?(v-X-M)/s*x:0),D=M?D/2+(M>X?0:(X<v-M?1:(v-X)/M)*(R[X-M|0]/2/(t||1))):D,C&&(D=V=L*O+K*(O=Q)+J*(Q=D)-H*U-E*(U=V))),b=(e+=u+=c)*Math.cos(m*F++),T+=b+b*p*(X*X*g%2-1),B&&++B>h&&(e+=r,A+=r,B=0),!d||++P%d||(e=A,u=Z,B||=1);return R},getNote:function(t=0,n=440){return n*2**(t/12)}};t.ZZFX=n,t.ZZFXSound=class{constructor(t=[]){const e=t.slice();this.randomness=void 0!==e[1]?e[1]:.05,e[1]=0,this.zzfxSound=e,this.samples=n.buildSamples(...e)}play(t=1,e=1,a=1,o=0,s=!1,i=null){if(!this.samples)return null;const l=e+e*this.randomness*a*(2*Math.random()-1);return this.source=n.playSamples([this.samples],t,l,o,s,i),this.source}},t.zzfx=function(...t){return n.play(...t)}}("undefined"!=typeof window?window:globalThis);