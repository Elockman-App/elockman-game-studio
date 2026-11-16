(()=>{var Cc=0,Fa=1,Ic=2;var Ns=1,eo=2,Qi=3,li=0,Ye=1,sn=2,Mi=0,ji=1,Oa=2,Ba=3,ka=4,Pc=5;var Si=100,Lc=101,Dc=102,Nc=103,Uc=104,Fc=200,Oc=201,Bc=202,kc=203,za=204,Ga=205,zc=206,Gc=207,Hc=208,Vc=209,Wc=210,Xc=211,qc=212,Yc=213,$c=214,br=0,Er=1,Tr=2,Gi=3,wr=4,Ar=5,Rr=6,Cr=7,Ha=0,Zc=1,Jc=2,Cn=0,Va=1,Wa=2,Xa=3,Us=4,qa=5,Ya=6,$a=7;var Za=300,bi=301,ts=302,no=303,io=304,Ir=1e3,bn=1001,Pr=1002,Le=1003,Kc=1004;var Fs=1005;var Xe=1006,so=1007;var Vn=1008;var Ke=1009,Ja=1010,Ka=1011,es=1012,ro=1013,xn=1014,yn=1015,vn=1016,oo=1017,ao=1018,Ei=1020,Qa=35902,ja=35899,tl=1021,el=1022,Mn=1023,zn=1026,Wn=1027,nl=1028,lo=1029,ci=1030,co=1031;var ho=1033,Os=33776,Bs=33777,ks=33778,zs=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,_o=37492,xo=37496,yo=37488,vo=37489,Gs=37490,Mo=37491,So=37808,bo=37809,Eo=37810,To=37811,wo=37812,Ao=37813,Ro=37814,Co=37815,Io=37816,Po=37817,Lo=37818,Do=37819,No=37820,Uo=37821,Fo=36492,Oo=36494,Bo=36495,ko=36283,zo=36284,Hs=36285,Go=36286;var ps=2300,Lr=2301,Mr=2302,Ra=2303,Ca=2400,Ia=2401,Pa=2402;var Qc=3200;var Ho=0,jc=1,Xn="",tn="srgb",ms="srgb-linear",gs="linear",ae="srgb";var Sr=7680;var th=519,eh=512,nh=513,ih=514,il=515,sh=516,rh=517,sl=518,rl=519,oh=35044;var ol="300 es",ln=2e3,Hi=2001;function ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){let i=_s("canvas");return i.style.display="block",i}var ic={},Vi=null;function al(...i){let t="THREE."+i.shift();Vi?Vi("log",t,...i):console.log(t,...i)}function lh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=lh(i);let t="THREE."+i.shift();if(Vi)Vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ft(...i){i=lh(i);let t="THREE."+i.shift();if(Vi)Vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in ic||(ic[t]=!0,Nt(...i))}function ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var hh={[br]:br,[Tr]:Rr,[wr]:wr,[Gi]:Ar,[Er]:Er,[Rr]:Tr,[Cr]:Cr,[Ar]:Gi},Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=1234567,ds=Math.PI/180,Wi=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function ll(i,t){return(i%t+t)%t}function fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pd(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function md(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function gd(i,t=1){return t-Math.abs(ll(i,t*2)-t)}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vd(i,t){return i+Math.random()*(t-i)}function Md(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(sc=i);let t=sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(i){return i*ds}function Ed(i){return i*Wi}function Td(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uh(i,t){if(t.constructor===Float32Array)return i;let e=hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function dh(i,t){if(t.constructor===Float32Array)return i;let e=hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ul={DEG2RAD:ds,RAD2DEG:Wi,generateUUID:ns,clamp:te,euclideanModulo:ll,mapLinear:fd,inverseLerp:pd,lerp:fs,damp:md,pingpong:gd,smoothstep:_d,smootherstep:xd,randInt:yd,randFloat:vd,randFloatSpread:Md,seededRandom:Sd,degToRad:bd,radToDeg:Ed,isPowerOfTwo:Td,ceilPowerOfTwo:wd,floorPowerOfTwo:cl,setQuaternionFromProperEuler:Ad,normalize:dh,denormalize:uh},gl=class gl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;var Vt=gl,wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+M*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+M*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_l=class _l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;var O=_l,la=new O,rc=new wn,xl=class xl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],M=s[0],m=s[3],p=s[6],y=s[1],E=s[4],S=s[7],A=s[2],T=s[5],g=s[8];return r[0]=o*M+a*y+l*A,r[3]=o*m+a*E+l*T,r[6]=o*p+a*S+l*g,r[1]=c*M+h*y+d*A,r[4]=c*m+h*E+d*T,r[7]=c*p+h*S+d*g,r[2]=u*M+f*y+_*A,r[5]=u*m+f*E+_*T,r[8]=u*p+f*S+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ca.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xl.prototype.isMatrix3=!0;var Bt=xl,ca=new Bt,oc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var jt=Rd();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,Dr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=_s("canvas")),Ai.width=t.width,Ai.height=t.height;let s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,Xi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Id=0,ua=new O,Je=class i extends Tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Xe,o=Vn,a=Mn,l=Ke,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ns(),this.name="",this.source=new Xi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Za;Je.DEFAULT_ANISOTROPY=1;var yl=class yl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(f+1)/2,A=(p+1)/2,T=(h+u)/4,g=(d+M)/4,b=(_+m)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=g/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=b/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yl.prototype.isVector4=!0;var me=yl,Nr=class extends Tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Nr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xs=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ur=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var to=class to{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new to().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,_=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-M*c,e[9]=-a*l,e[2]=M-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u+M*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u-M*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,_=a*h,M=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,_=a*l,M=a*c;e[0]=l*h,e[4]=M-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*c,_=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Ld)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),$n.crossVectors(n,Qe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),$n.crossVectors(n,Qe)),$n.normalize(),er.crossVectors(Qe,$n),s[0]=$n.x,s[4]=er.x,s[8]=Qe.x,s[1]=$n.y,s[5]=er.y,s[9]=Qe.y,s[2]=$n.z,s[6]=er.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],M=n[6],m=n[10],p=n[14],y=n[3],E=n[7],S=n[11],A=n[15],T=s[0],g=s[4],b=s[8],P=s[12],R=s[1],D=s[5],U=s[9],G=s[13],I=s[2],V=s[6],Y=s[10],H=s[14],nt=s[3],W=s[7],tt=s[11],et=s[15];return r[0]=o*T+a*R+l*I+c*nt,r[4]=o*g+a*D+l*V+c*W,r[8]=o*b+a*U+l*Y+c*tt,r[12]=o*P+a*G+l*H+c*et,r[1]=h*T+d*R+u*I+f*nt,r[5]=h*g+d*D+u*V+f*W,r[9]=h*b+d*U+u*Y+f*tt,r[13]=h*P+d*G+u*H+f*et,r[2]=_*T+M*R+m*I+p*nt,r[6]=_*g+M*D+m*V+p*W,r[10]=_*b+M*U+m*Y+p*tt,r[14]=_*P+M*G+m*H+p*et,r[3]=y*T+E*R+S*I+A*nt,r[7]=y*g+E*D+S*V+A*W,r[11]=y*b+E*U+S*Y+A*tt,r[15]=y*P+E*G+S*H+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15],y=l*f-c*u,E=a*f-c*d,S=a*u-l*d,A=o*f-c*h,T=o*u-l*h,g=o*d-a*h;return e*(M*y-m*E+p*S)-n*(_*y-m*A+p*T)+s*(_*E-M*A+p*g)-r*(_*S-M*T+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],y=e*a-n*o,E=e*l-s*o,S=e*c-r*o,A=n*l-s*a,T=n*c-r*a,g=s*c-r*l,b=h*M-d*_,P=h*m-u*_,R=h*p-f*_,D=d*m-u*M,U=d*p-f*M,G=u*p-f*m,I=y*G-E*U+S*D+A*R-T*P+g*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(a*G-l*U+c*D)*V,t[1]=(s*U-n*G-r*D)*V,t[2]=(M*g-m*T+p*A)*V,t[3]=(u*T-d*g-f*A)*V,t[4]=(l*R-o*G-c*P)*V,t[5]=(e*G-s*R+r*P)*V,t[6]=(m*S-_*g-p*E)*V,t[7]=(h*g-u*S+f*E)*V,t[8]=(o*U-a*R+c*b)*V,t[9]=(n*R-e*U-r*b)*V,t[10]=(_*T-M*S+p*y)*V,t[11]=(d*S-h*T-f*y)*V,t[12]=(a*P-o*D-l*b)*V,t[13]=(e*D-n*P+s*b)*V,t[14]=(M*E-_*A-m*y)*V,t[15]=(h*A-d*E+u*y)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,M=o*h,m=o*d,p=a*d,y=l*c,E=l*h,S=l*d,A=n.x,T=n.y,g=n.z;return s[0]=(1-(M+p))*A,s[1]=(f+S)*A,s[2]=(_-E)*A,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(_+E)*g,s[9]=(m-y)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fn.copy(this);let c=1/o,h=1/a,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===ln)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Hi)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===ln)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Hi)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};to.prototype.isMatrix4=!0;var pe=to,Ri=new O,fn=new pe,Pd=new O(0,0,0),Ld=new O(1,1,1),$n=new O,er=new O,Qe=new O,lc=new pe,cc=new wn,Gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,hc=new O,Ci=new wn,Nn=new pe,nr=new O,as=new O,Nd=new O,Ud=new wn,uc=new O(1,0,0),dc=new O(0,1,0),fc=new O(0,0,1),pc={type:"added"},Fd={type:"removed"},Ii={type:"childadded",child:null},da={type:"childremoved",child:null},ze=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Gn,n=new wn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Bt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(as,nr,this.up):Nn.lookAt(nr,as,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new O(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ll(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return jt.workingToColorSpace(ke.copy(this),t),Math.round(te(ke.r*255,0,255))*65536+Math.round(te(ke.g*255,0,255))*256+Math.round(te(ke.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=tn){jt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ir);let n=fs(Zn.h,ir.h,e),s=fs(Zn.s,ir.s,e),r=fs(Zn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Ut;Ut.NAMES=fh;var ys=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new O,Un=new O,pa=new O,Fn=new O,Pi=new O,Li=new O,mc=new O,ma=new O,ga=new O,_a=new O,xa=new me,ya=new me,va=new me,jn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Un.subVectors(n,e),pa.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(Un),l=pn.dot(pa),c=Un.dot(Un),h=Un.dot(pa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xa.setScalar(0),ya.setScalar(0),va.setScalar(0),xa.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xa,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(va,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Un.subVectors(t,e),pn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Li.subVectors(r,n),ma.subVectors(t,n);let l=Pi.dot(ma),c=Li.dot(ma);if(l<=0&&c<=0)return e.copy(n);ga.subVectors(t,s);let h=Pi.dot(ga),d=Li.dot(ga);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Pi,o);_a.subVectors(t,r);let f=Pi.dot(_a),_=Li.dot(_a);if(_>=0&&f<=_)return e.copy(r);let M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Li,a);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return mc.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(mc,a);let p=1/(m+M+u);return o=M*p,a=u*p,e.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Di.subVectors(t.a,ls),Ni.subVectors(t.b,ls),Ui.subVectors(t.c,ls),Jn.subVectors(Ni,Di),Kn.subVectors(Ui,Ni),_i.subVectors(Di,Ui);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-_i.y,_i.x,0];return!Ma(e,Di,Ni,Ui,rr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Di,Ni,Ui,rr))?!1:(or.crossVectors(Jn,Kn),e=[or.x,or.y,or.z],Ma(e,Di,Ni,Ui,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new O,new O,new O,new O,new O,new O,new O,new O],mn=new O,sr=new ti,Di=new O,Ni=new O,Ui=new O,Jn=new O,Kn=new O,_i=new O,ls=new O,rr=new O,or=new O,xi=new O;function Ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Te=new O,ar=new Vt,Bd=0,En=class extends Tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=t!==void 0?hl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):dh(t,this.array)}};var vs=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ms=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},kd=new ti,cs=new O,Sa=new O,$i=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Sa)),this.expandByPoint(cs.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zd=0,an=new pe,ba=new ze,Fi=new O,je=new ti,hs=new ti,Pe=new O,qe=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?Ms:vs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(je.min,hs.min),je.expandByPoint(Pe),Pe.addVectors(je.max,hs.max),je.expandByPoint(Pe)):(je.expandByPoint(hs.min),je.expandByPoint(hs.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Pe.add(Fi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;let h=new O,d=new O,u=new O,f=new Vt,_=new Vt,M=new Vt,m=new O,p=new O;function y(P,R,D){c[P]=c[R]=c[D]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),M.fromBufferAttribute(r,D),d.sub(h),u.sub(h),_.sub(f),M.sub(f);let U=1/(_.x*M.y-M.x*_.y);isFinite(U)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(U),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(U),a[P].add(m),a[R].add(m),a[D].add(m),l[P].add(p),l[R].add(p),l[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,R=E.length;P<R;++P){let D=E[P],U=D.start,G=D.count;for(let I=U,V=U+G;I<V;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new O,A=new O,T=new O,g=new O;function b(P){T.fromBufferAttribute(s,P),g.copy(T);let R=a[P];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(g,R);let U=A.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,U)}for(let P=0,R=n.count;P<R;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new En(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=new O,Gd=new O,Hd=new Bt,gn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ea.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ea),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vd=0,ei=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=ji,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Bn=new O,Ta=new O,lr=new O,cr=new O,Ss=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=cr.dot(this.direction),l=-cr.dot(lr),c=cr.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ta).addScaledVector(lr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,_=e.x-o.x,M=e.y-o.y,m=e.z-o.z,p=n.x-o.x,y=n.y-o.y,E=n.z-o.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(h),g,b,P,R,D,U,G,I,V,Y,H,nt;if(S>=A&&S>=T?(P=l,U=d,V=_,nt=p,l>=0?(g=c,b=h,R=u,D=f,G=M,I=m,Y=y,H=E):(g=h,b=c,R=f,D=u,G=m,I=M,Y=E,H=y)):A>=T?(P=c,U=u,V=M,nt=y,c>=0?(g=h,b=l,R=f,D=d,G=m,I=_,Y=E,H=p):(g=l,b=h,R=d,D=f,G=_,I=m,Y=p,H=E)):(P=h,U=f,V=m,nt=E,h>=0?(g=l,b=c,R=d,D=u,G=_,I=M,Y=p,H=y):(g=c,b=l,R=u,D=d,G=M,I=_,Y=y,H=p)),P===0)return null;let W=g/P,tt=b/P,et=1/P,vt=R-W*U,Mt=D-tt*U,q=G-W*V,rt=I-tt*V,gt=Y-W*nt,Ct=H-tt*nt,ft=gt*rt-Ct*q,zt=vt*Ct-Mt*gt,ge=q*Mt-rt*vt;if(s){if(ft<0||zt<0||ge<0)return null}else if((ft<0||zt<0||ge<0)&&(ft>0||zt>0||ge>0))return null;let At=ft+zt+ge;if(At===0)return null;let se=et*(ft*U+zt*V+ge*nt);return(At>0?se<0:se>0)?null:this.at(se/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gc=new pe,yi=new Ss,hr=new $i,_c=new O,ur=new O,dr=new O,fr=new O,wa=new O,pr=new O,xc=new O,mr=new O,F=class extends ze{constructor(t=new qe,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(wa.fromBufferAttribute(d,t),o?pr.addScaledVector(wa,h):pr.addScaledVector(wa.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(hr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(hr,_c)===null||yi.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(gc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=E;S<A;S+=3){let T=a.getX(S),g=a.getX(S+1),b=a.getX(S+2);s=gr(this,p,t,n,c,h,d,T,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let y=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=gr(this,o,t,n,c,h,d,y,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=E;S<A;S+=3){let T=S,g=S+1,b=S+2;s=gr(this,p,t,n,c,h,d,T,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let y=m,E=m+1,S=m+2;s=gr(this,o,t,n,c,h,d,y,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wd(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ur),i.getVertexPosition(l,dr),i.getVertexPosition(c,fr);let h=Wd(i,t,e,n,ur,dr,fr,xc);if(h){let d=new O;jn.getBarycoord(xc,ur,dr,fr,d),s&&(h.uv=jn.getInterpolatedAttribute(s,a,l,c,d,new Vt)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,l,c,d,new Vt)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};jn.getNormal(ur,dr,fr,u.normal),h.face=u,h.barycoord=d}return h}var Fr=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Le,h=Le,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=new $i,Xd=new Vt(.5,.5),_r=new O,ni=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],M=r[9],m=r[10],p=r[11],y=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,p-_,A-y).normalize(),s[1].setComponents(c+o,f+h,p+_,A+y).normalize(),s[2].setComponents(c+a,f+d,p+M,A+E).normalize(),s[3].setComponents(c-a,f-d,p-M,A-E).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,A-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-S).normalize(),e===ln)s[5].setComponents(c+l,f+u,p+m,A+S).normalize();else if(e===Hi)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=Xd.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yc=new pe,Or=class i{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ni),n[s].setFromProjectionMatrix(yc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ni),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var bs=class extends Je{constructor(t=[],e=bi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Hn=class extends Je{constructor(t,e,n=xn,s,r,o,a=Le,l=Le,c,h=zn,d=1){if(h!==zn&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Es=class extends Hn{constructor(t,e=xn,n=bi,s,r,o=Le,a=Le,l,c=zn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ts=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rt=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function _(M,m,p,y,E,S,A,T,g,b,P){let R=S/g,D=A/b,U=S/2,G=A/2,I=T/2,V=g+1,Y=b+1,H=0,nt=0,W=new O;for(let tt=0;tt<Y;tt++){let et=tt*D-G;for(let vt=0;vt<V;vt++){let Mt=vt*R-U;W[M]=Mt*y,W[m]=et*E,W[p]=I,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(vt/g),d.push(1-tt/b),H+=1}}for(let tt=0;tt<b;tt++)for(let et=0;et<g;et++){let vt=u+et+V*tt,Mt=u+et+V*(tt+1),q=u+(et+1)+V*(tt+1),rt=u+(et+1)+V*tt;l.push(vt,Mt,rt),l.push(Mt,q,rt),nt+=6}a.addGroup(f,nt,P),f+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zi=class i extends qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,_=n*2+r,M=s+1,m=new O,p=new O;for(let y=0;y<=_;y++){let E=0,S=0,A=0,T=0;if(y<=n){let P=y/n,R=P*Math.PI/2;S=-h-t*Math.cos(R),A=t*Math.sin(R),T=-t*Math.cos(R),E=P*d}else if(y<=n+r){let P=(y-n)/r;S=-h+P*e,A=t,T=0,E=d+P*u}else{let P=(y-n-r)/n,R=P*Math.PI/2;S=h+t*Math.sin(R),A=t*Math.cos(R),T=t*Math.sin(R),E=d+u+P*d}let g=Math.max(0,Math.min(1,E/f)),b=0;y===0?b=.5/s:y===_&&(b=-.5/s);for(let P=0;P<=s;P++){let R=P/s,D=R*Math.PI*2,U=Math.sin(D),G=Math.cos(D);p.x=-A*G,p.y=S,p.z=A*U,a.push(p.x,p.y,p.z),m.set(-A*G,T,A*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+b,g)}if(y>0){let P=(y-1)*M;for(let R=0;R<s;R++){let D=P+R,U=P+R+1,G=y*M+R,I=y*M+R+1;o.push(D,U,G),o.push(U,I,G)}}}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},An=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new Vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gt=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,M=[],m=n/2,p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function y(){let S=new O,A=new O,T=0,g=(e-t)/n;for(let b=0;b<=r;b++){let P=[],R=b/r,D=R*(e-t)+t;for(let U=0;U<=s;U++){let G=U/s,I=G*l+a,V=Math.sin(I),Y=Math.cos(I);A.x=D*V,A.y=-R*n+m,A.z=D*Y,d.push(A.x,A.y,A.z),S.set(V,g,Y).normalize(),u.push(S.x,S.y,S.z),f.push(G,1-R),P.push(_++)}M.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let R=M[P][b],D=M[P+1][b],U=M[P+1][b+1],G=M[P][b+1];(t>0||P!==0)&&(h.push(R,D,G),T+=3),(e>0||P!==r-1)&&(h.push(D,U,G),T+=3)}c.addGroup(p,T,0),p+=T}function E(S){let A=_,T=new Vt,g=new O,b=0,P=S===!0?t:e,R=S===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),_++;let D=_;for(let U=0;U<=s;U++){let I=U/s*l+a,V=Math.cos(I),Y=Math.sin(I);g.x=P*Y,g.y=m*R,g.z=P*V,d.push(g.x,g.y,g.z),u.push(0,R,0),T.x=V*.5+.5,T.y=Y*.5*R+.5,f.push(T.x,T.y),_++}for(let U=0;U<s;U++){let G=A+U,I=D+U;S===!0?h.push(I,I+1,G):h.push(I+1,I,G),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Me=class i extends Gt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new O,S=new O,A=new O;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],S),f(e[T+2],A),l(E,S,A,y)}function l(y,E,S,A){let T=A+1,g=[];for(let b=0;b<=T;b++){g[b]=[];let P=y.clone().lerp(S,b/T),R=E.clone().lerp(S,b/T),D=T-b;for(let U=0;U<=D;U++)U===0&&b===T?g[b][U]=P:g[b][U]=P.clone().lerp(R,U/D)}for(let b=0;b<T;b++)for(let P=0;P<2*(T-b)-1;P++){let R=Math.floor(P/2);P%2===0?(u(g[b][R+1]),u(g[b+1][R]),u(g[b][R])):(u(g[b][R+1]),u(g[b+1][R+1]),u(g[b+1][R]))}}function c(y){let E=new O;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(y),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let y=new O;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let S=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(S,1-A)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],S=o[y+2],A=o[y+4],T=Math.max(E,S,A),g=Math.min(E,S,A);T>.9&&g<.1&&(E<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){let S=y*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function _(){let y=new O,E=new O,S=new O,A=new O,T=new Vt,g=new Vt,b=new Vt;for(let P=0,R=0;P<r.length;P+=9,R+=6){y.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),S.set(r[P+6],r[P+7],r[P+8]),T.set(o[R+0],o[R+1]),g.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),A.copy(y).add(E).add(S).divideScalar(3);let D=m(A);M(T,R+0,y,D),M(g,R+2,E,D),M(b,R+4,S,D)}}function M(y,E,S,A){A<0&&y.x===1&&(o[E]=y.x-1),S.x===0&&S.z===0&&(o[E]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ws=class i extends Br{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ii=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let E=0;E<c;E++){let S=E*d-r;_.push(S,-y,0),M.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(E,S,T),f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new O,_=new Vt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let y=p+m,E=y,S=y+n+1,A=y+n+2,T=y+1;a.push(E,S,T),a.push(S,A,T)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $t=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,u=new O,f=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){let y=[],E=p/n,S=o+E*a,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A),g=0;p===0&&o===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let P=b/e,R=s+P*r;d.x=-T*Math.cos(R),d.y=A,d.z=T*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(P+g,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let E=h[p][y+1],S=h[p][y],A=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(E,S,T),(p!==n-1||l<Math.PI)&&f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var si=class i extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new O,f=new O,_=new O;for(let M=0;M<=n;M++){let m=o+M/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,E=(s+1)*(M-1)+m,S=(s+1)*M+m;l.push(p,y,S),l.push(y,E,S)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ti(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vc(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ge(i){let t={};for(let e=0;e<i.length;e++){let n=Ti(i[e]);for(let s in n)t[s]=n[s]}return t}function vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var ph={clone:Ti,merge:Ge},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kr=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cn=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var zr=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gr=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ca,endingEnd:Ca}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ia:r=t,a=2*e-n;break;case Pa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ia:o=t,l=2*n-e;break;case Pa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),M=_*_,m=M*_,p=-u*m+2*u*M-u*_,y=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,E=(-1-f)*m+(1.5+f)*M+.5*_,S=f*m-f*M;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+E*o[l+A]+S*o[d+A];return r}},Vr=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Wr=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xr=class extends ri{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),M=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*_;return r}let u=a*2,f=t-1;for(let _=0;_!==a;++_){let M=o[c+_],m=o[l+_],p=f*u+_*2,y=d[p],E=d[p+1],S=t*u+_*2,A=h[S],T=h[S+1],g=Jd(n,e,y,A,s);r[_]=mh(g,M,E,T,m)}return r}};function mh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jd(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=mh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Zd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xr(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case Mr:e=this.InterpolantFactoryMethodSmooth;break;case Ra:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Mr;case this.InterpolantFactoryMethodBezier:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;xr(this.settings)&&(Mc(this.settings.inTangents,t),Mc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xr(this.settings)&&(Sc(this.settings.inTangents,t),Sc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&dd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let M=e[d+_];if(M!==e[u+_]||M!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Sc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Lr;var oi=class extends nn{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=ps;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};qr.prototype.ValueTypeName="color";var Yr=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Yr.prototype.ValueTypeName="number";var $r=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},As=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends nn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=ps;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="vector";var Jr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gh=new Jr,Kr=class{constructor(t){this.manager=t!==void 0?t:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Cs=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Aa=new pe,bc=new O,Ec=new O,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ni,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Aa,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hi||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yr=new O,vr=new wn,Sn=new O,Is=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yr,vr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,vr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yr,vr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,vr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new O,Tc=new Vt,wc=new Vt,We=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,wc),e.subVectors(wc,Tc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ps=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},La=class extends Qr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new La}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Bi=-90,ki=1,Ki=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Bi,ki,t,e);s.layers=this.layers,this.add(s);let r=new We(Bi,ki,t,e);r.layers=this.layers,this.add(r);let o=new We(Bi,ki,t,e);o.layers=this.layers,this.add(o);let a=new We(Bi,ki,t,e);a.layers=this.layers,this.add(a);let l=new We(Bi,ki,t,e);l.layers=this.layers,this.add(l);let c=new We(Bi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},jr=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var fl="\\[\\]\\.:\\/",Kd=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",Qd="[^"+fl.replace("\\.","")+"]",jd=/((?:WC+[\/:])*)/.source.replace("WC",pl),tf=/(WCOD+)?/.source.replace("WCOD",Qd),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),sf=new RegExp("^"+jd+tf+ef+nf+"$"),rf=["material","materials","bones","map"],Da=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let e=sf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Da;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var Ac=new pe,Ds=class{constructor(t,e,n=0,s=1/0){this.ray=new Ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ft("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(t,e=!0,n=[]){return Na(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Na(t[s],this,n,e);return n.sort(Rc),n}};function Rc(i,t){return i.distance-t.distance}function Na(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Na(r[o],t,e,!0)}}var vl=class vl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};vl.prototype.isMatrix2=!0;var Ua=vl;function ml(i,t,e,n){let s=of(n);switch(e){case tl:return i*t;case nl:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case ci:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case el:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case ho:return i*t*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ks:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:case mo:return Math.max(i,16)*Math.max(t,8)/4;case uo:case po:return Math.max(i,8)*Math.max(t,8)/2;case go:case _o:case yo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case Gs:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ko:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hs:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case Ke:case Ja:return{byteLength:1,components:1};case es:case Ka:case vn:return{byteLength:2,components:1};case oo:case ao:return{byteLength:2,components:4};case xn:case ro:case yn:return{byteLength:4,components:1};case Qa:case ja:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],M=d[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
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
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
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
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
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
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
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
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <morphinstance_vertex>
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
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
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
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
	#include <morphinstance_vertex>
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
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
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
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:xf,batching_vertex:yf,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:If,color_pars_vertex:Pf,color_vertex:Lf,common:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:kf,colorspace_pars_fragment:zf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ep,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:$f,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tp,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:ap,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,lightprobes_pars_fragment:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Ip,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:zp,dithering_fragment:Gp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:_m,distance_frag:xm,equirect_vert:ym,equirect_frag:vm,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Im,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:km,shadow_frag:zm,sprite_vert:Gm,sprite_frag:Hm},xt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ge([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ge([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ge([xt.points,xt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ge([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ge([xt.common,xt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ge([xt.sprite,xt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Ge([xt.common,xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Ge([xt.lights,xt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Pn.physical={uniforms:Ge([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Vo={r:0,b:0,g:0},Vm=new pe,kh=new Bt;kh.set(-1,0,0,0,1,0,0,0,1);function Wm(i,t,e,n,s,r){let o=new Ut(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let S=y.backgroundBlurriness>0;E=t.get(E,S)}return E}function _(y){let E=!1,S=f(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,E){let S=f(E);S&&S.isCubeTexture?(c===void 0&&(c=new F(new Rt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ti(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=jt.getTransfer(S.colorSpace)!==ae,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new F(new ii(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ti(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=jt.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(Vo,dl(i)),e.buffers.color.setClear(Vo.r,Vo.g,Vo.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:M,dispose:p}}function Xm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,U,G,I,V){let Y=!1,H=d(D,I,G,U);r!==H&&(r=H,c(r.object)),Y=f(D,I,G,V),Y&&_(D,I,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(D,U,G,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,U,G,I){let V=I.wireframe===!0,Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);let H=D.isInstancedMesh===!0?D.id:0,nt=Y[H];nt===void 0&&(nt={},Y[H]=nt);let W=nt[G.id];W===void 0&&(W={},nt[G.id]=W);let tt=W[V];return tt===void 0&&(tt=u(l()),W[V]=tt),tt}function u(D){let U=[],G=[],I=[];for(let V=0;V<e;V++)U[V]=0,G[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,U,G,I){let V=r.attributes,Y=U.attributes,H=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=V[W],vt=Y[W];if(vt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),et===void 0||et.attribute!==vt||vt&&et.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function _(D,U,G,I){let V={},Y=U.attributes,H=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=Y[W];et===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));let vt={};vt.attribute=et,et&&et.data&&(vt.data=et.data),V[W]=vt,H++}r.attributes=V,r.attributesNum=H,r.index=I}function M(){let D=r.newAttributes;for(let U=0,G=D.length;U<G;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){let G=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;G[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==U&&(i.vertexAttribDivisor(D,U),V[D]=U)}function y(){let D=r.newAttributes,U=r.enabledAttributes;for(let G=0,I=U.length;G<I;G++)U[G]!==D[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function E(D,U,G,I,V,Y,H){H===!0?i.vertexAttribIPointer(D,U,G,V,Y):i.vertexAttribPointer(D,U,G,I,V,Y)}function S(D,U,G,I){M();let V=I.attributes,Y=G.getAttributes(),H=U.defaultAttributeValues;for(let nt in Y){let W=Y[nt];if(W.location>=0){let tt=V[nt];if(tt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){let et=tt.normalized,vt=tt.itemSize,Mt=t.get(tt);if(Mt===void 0)continue;let q=Mt.buffer,rt=Mt.type,gt=Mt.bytesPerElement,Ct=rt===i.INT||rt===i.UNSIGNED_INT||tt.gpuType===ro;if(tt.isInterleavedBufferAttribute){let ft=tt.data,zt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,ge=tt.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)p(W.location+At,ft.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);i.bindBuffer(i.ARRAY_BUFFER,q);for(let At=0;At<W.locationSize;At++)E(W.location+At,vt/W.locationSize,rt,et,zt*gt,(ge+vt/W.locationSize*At)*gt,Ct)}else{if(tt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)p(W.location+ft,tt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ft=0;ft<W.locationSize;ft++)E(W.location+ft,vt/W.locationSize,rt,et,vt*gt,vt/W.locationSize*ft*gt,Ct)}}else if(H!==void 0){let et=H[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}y()}function A(){P();for(let D in n){let U=n[D];for(let G in U){let I=U[G];for(let V in I){let Y=I[V];for(let H in Y)h(Y[H].object),delete Y[H];delete I[V]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let G in U){let I=U[G];for(let V in I){let Y=I[V];for(let H in Y)h(Y[H].object),delete Y[H];delete I[V]}}delete n[D.id]}function g(D){for(let U in n){let G=n[U];for(let I in G){let V=G[I];if(V[D.id]===void 0)continue;let Y=V[D.id];for(let H in Y)h(Y[H].object),delete Y[H];delete V[D.id]}}}function b(D){for(let U in n){let G=n[U],I=D.isInstancedMesh===!0?D.id:0,V=G[I];if(V!==void 0){for(let Y in V){let H=V[Y];for(let nt in H)h(H[nt].object),delete H[nt];delete V[Y]}delete G[I],Object.keys(G).length===0&&delete n[U]}}}function P(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function qm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Mn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let b=g===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Ke&&g!==yn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function $m(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,S=p.clippingState||null;l.value=S,S=h(_,u,E,f);for(let A=0;A!==E;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let p=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==M;++E,S+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Xs=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Mi});r.uniforms.tEquirect.value=e;let o=new F(s,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Xe),new Ki(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_h=256,Zm=3,Jm=20,zh=256,Gh=16,Km=3,Qm=new O,jm=new Ut,Xo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new F(new Rt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qm}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(jm));let m=new Ki(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_h,cl(t))}_fromTexture(t,e){t.mapping===bi||t.mapping===ts?this._setSize(t.image.length===0?_h:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xh(t,!1,!1),n=Math.log2(t)-Zm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===bi||t.mapping===ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tg(),this._integrationMaterial=eg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gh);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Km)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(zh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ng());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function xh(i,t,e){return new Xs(i,{minFilter:Vn,generateMipmaps:t,type:vn,colorSpace:ms,depthBuffer:e})}function qs(i,t,e){return new Rn({name:i,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:Ye,blending:Mi,depthTest:!1,depthWrite:!1})}function tg(){return qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function eg(){return qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ng(){return qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function yh(){return qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vh(){return qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ig(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===no||f===io)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Xs(_.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===no||f===io,M=f===bi||f===ts;if(_||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Xo(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return _&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Xo(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===no?u.mapping=bi:f===io&&(u.mapping=ts),u}function l(u){let f=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function sg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let M=r.get(_);M&&(t.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(_){let M=_.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function d(_){let M=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let y=M!==null?M.array.length:m.array.length/3-1,E=m.count>=65535?Ms:vs,S=new E(Math.ceil(y/3)*6,1),A=S.array;if(M!==null){let g=M.array;p=M.version;for(let b=0,P=0;b<y;b+=3){let R=g[b+0],D=g[b+1],U=g[b+2];A[P++]=R,A[P++]=D,A[P++]=D,A[P++]=U,A[P++]=U,A[P++]=R}}else{p=m.version;for(let g=0,b=0;g<y;g+=3){let P=g+0,R=g+1,D=g+2;A[b++]=P,A[b++]=R,A[b++]=R,A[b++]=D,A[b++]=D,A[b++]=P}}S.version=p;let T=r.get(_);T&&t.remove(T),r.set(_,S)}function u(_){let M=r.get(_);if(M){let m=_.index;m!==null&&M.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function og(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,t,e){let n=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let S=a.attributes.position.count*E,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*A*4*d),g=new xs(T,S,A,d);g.type=yn,g.needsUpdate=!0;let b=E*4;for(let R=0;R<d;R++){let D=m[R],U=p[R],G=y[R],I=S*A*4*R;for(let V=0;V<D.count;V++){let Y=V*b;f===!0&&(s.fromBufferAttribute(D,V),T[I+Y+0]=s.x,T[I+Y+1]=s.y,T[I+Y+2]=s.z,T[I+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,V),T[I+Y+4]=s.x,T[I+Y+5]=s.y,T[I+Y+6]=s.z,T[I+Y+7]=0),M===!0&&(s.fromBufferAttribute(G,V),T[I+Y+8]=s.x,T[I+Y+9]=s.y,T[I+Y+10]=s.z,T[I+Y+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Vt(S,A)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var hg={[Va]:"LINEAR_TONE_MAPPING",[Wa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[Us]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[$a]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function ug(i,t,e,n,s,r){let o=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qe;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let d=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new F(h,d),f=new Ps(-1,1,1,-1,0,1),_=null,M=null,m=!1,p,y=null,E=[],S=!1;this.setSize=function(A,T){o.setSize(A,T),a!==null&&a.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<E.length;g++){let b=E[g];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let T=o.width,g=o.height;E.length>0&&a===null&&(a=new en(T,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new en(T,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Hn(T,g),r===!0&&(c.format=Wn,c.type=Ei)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<E.length;P++){let R=E[P];R.setSize&&R.setSize(T,g),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Cn&&E.length===0)return!1;if(y=T,T!==null){let g=T.width,b=T.height;(o.width!==g||o.height!==b)&&this.setSize(g,b)}return S===!1&&A.setRenderTarget(o),p=A.toneMapping,A.toneMapping=Cn,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=p,m=!0;let g=o,b=a;for(let P=0;P<E.length;P++){let R=E[P];R.enabled!==!1&&(R.render(A,b,g,T),R.needsSwap!==!1&&(g=b,b=b===a?l:a))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,d.defines={},jt.getTransfer(_)===ae&&(d.defines.SRGB_TRANSFER="");let P=hg[M];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(y),A.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Hh=new Je,Vh=new Hn(1,1),Wh=new Es(1),Xh=new xs,qh=new Ur,Yh=new bs,Mh=[],Sh=[],bh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Re(e,n)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),Re(e,n)}}function xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),Re(e,n)}}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function $o(i){return i.version===0&&(i.compareFunction=rl,i.needsUpdate=!0),i}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$o(Vh):r=Hh,e.setTexture2D(t||r,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qh,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$o(Wh):r=Yh,e.setTextureCube(t||r,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xh,s)}function Pg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Lg(i,t){i.uniform1fv(this.addr,t)}function Dg(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Ug(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Og(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function zg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Hg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function qg(i,t){i.uniform4uiv(this.addr,t)}function Yg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=$o(Vh):o=Hh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function $g(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qh,r[o])}function Zg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=$o(Wh):o=Yh;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Jg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xh,r[o])}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return zg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}var bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pg(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function wh(i,t){i.seq.push(t),i.map[t.id]=t}function Qg(i,t,e){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(e,c===void 0?new bl(a,i,t):new El(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Tl(a),wh(e,d)),e=d}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var jg=37297,t0=0;function e0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Rh=new Bt;function n0(i){jt._getMatrix(Rh,jt.workingColorSpace,i);let t=`mat3( ${Rh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+e0(i.getShaderSource(t),a)}else return r}function i0(i,t){let e=n0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var s0={[Va]:"Linear",[Wa]:"Reinhard",[Xa]:"Cineon",[Us]:"ACESFilmic",[Ya]:"AgX",[$a]:"Neutral",[qa]:"Custom"};function r0(i,t){let e=s0[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new O;function o0(){jt.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function l0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function Ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(h0,u0)}function u0(i,t){let e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wl(e)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(d0,f0)}function f0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var p0={[Ns]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function m0(i){return p0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g0={[ts]:"ENVMAP_MODE_REFRACTION"};function _0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x0={[Ha]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Jc]:"ENVMAP_BLENDING_ADD"};function y0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x0[i.combine]||"ENVMAP_BLENDING_NONE"}function v0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=m0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_0(e),d=y0(e),u=a0(e),f=l0(r),_=s.createProgram(),M,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ws).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ws).join(`
`),m.length>0&&(m+=`
`)):(M=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),m=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,i0("linearToOutputTexel",e.outputColorSpace),o0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=wl(o),o=Ih(o,e),o=Ph(o,e),a=wl(a),a=Ih(a,e),a=Ph(a,e),o=Lh(o),a=Lh(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+M+o,E=p+m+a,S=Ah(s,s.VERTEX_SHADER,y),A=Ah(s,s.FRAGMENT_SHADER,E);s.attachShader(_,S),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(A)||"",I=D.trim(),V=U.trim(),Y=G.trim(),H=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,A);else{let W=Ch(s,S,"vertex"),tt=Ch(s,A,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+tt)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(V===""||Y==="")&&(nt=!1);nt&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:V,prefix:M},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(A),g=new is(s,_),b=c0(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,jg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}var M0=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}};function S0(i){return i===ci||i===Gs||i===Hs}function b0(i,t,e,n,s,r){let o=new qi,a=new Al,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,P,R,D,U){let G=R.fog,I=D.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||V,Y),nt=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Nt("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=tt!==void 0?tt.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let Mt,q,rt,gt;if(nt){let _t=Pn[nt];Mt=_t.vertexShader,q=_t.fragmentShader}else{Mt=g.vertexShader,q=g.fragmentShader;let _t=a.getVertexShaderStage(g),le=a.getFragmentShaderStage(g);a.update(g,_t,le),rt=_t.id,gt=le.id}let Ct=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),zt=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,At=!!g.map,se=!!g.matcap,oe=!!H,Yt=oe&&H.isPMREMTexture===!0,Se=!!g.aoMap,ye=!!g.lightMap,De=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,on=!!g.displacementMap,xe=!!g.emissiveMap,He=!!g.metalnessMap,Ue=!!g.roughnessMap,be=g.anisotropy>0,N=g.clearcoat>0,Ze=g.diffuseRoughness>0,ce=g.dispersion>0,ie=g.retroreflectivity>0,pt=g.iridescence>0,ve=g.sheen>0,It=g.transmission>0,Lt=be&&!!g.anisotropyMap,w=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,it=Ze&&!!g.diffuseRoughnessMap,j=pt&&!!g.iridescenceMap,at=pt&&!!g.iridescenceThicknessMap,lt=ve&&!!g.sheenColorMap,Z=ve&&!!g.sheenRoughnessMap,J=!!g.specularMap,ht=!!g.specularColorMap,C=!!g.specularIntensityMap,Q=It&&!!g.transmissionMap,$=It&&!!g.thicknessMap,ut=!!g.gradientMap,ot=!!g.alphaMap,ct=g.alphaTest>0,wt=!!g.alphaHash,Xt=!!g.extensions,st=Cn;g.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(st=i.toneMapping);let Pt=Yt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Wt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Mt,fragmentShader:q,defines:g.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:At,matcap:se,envMap:oe,envMapMode:oe&&H.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?Pt.length-1:null,envMapSize:Yt?Pt[0].width:null,aoMap:Se,lightMap:ye,bumpMap:De,normalMap:ue,displacementMap:on,emissiveMap:xe,normalMapObjectSpace:ue&&g.normalMapType===jc,normalMapTangentSpace:ue&&g.normalMapType===Ho,packedNormalMap:ue&&g.normalMapType===Ho&&S0(g.normalMap.format),metalnessMap:He,roughnessMap:Ue,anisotropy:be,anisotropyMap:Lt,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Ze,diffuseRoughnessMap:it,dispersion:ce,retroreflection:ie,iridescence:pt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:ve,sheenColorMap:lt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ht,specularIntensityMap:C,transmission:It,transmissionMap:Q,thicknessMap:$,gradientMap:ut,opaque:g.transparent===!1&&g.blending===ji&&g.alphaToCoverage===!1,alphaMap:ot,alphaTest:ct,alphaHash:wt,combine:g.combine,mapUv:At&&f(g.map.channel),aoMapUv:Se&&f(g.aoMap.channel),lightMapUv:ye&&f(g.lightMap.channel),bumpMapUv:De&&f(g.bumpMap.channel),normalMapUv:ue&&f(g.normalMap.channel),displacementMapUv:on&&f(g.displacementMap.channel),emissiveMapUv:xe&&f(g.emissiveMap.channel),metalnessMapUv:He&&f(g.metalnessMap.channel),roughnessMapUv:Ue&&f(g.roughnessMap.channel),anisotropyMapUv:Lt&&f(g.anisotropyMap.channel),clearcoatMapUv:w&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(g.sheenRoughnessMap.channel),specularMapUv:J&&f(g.specularMap.channel),specularColorMapUv:ht&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:Q&&f(g.transmissionMap.channel),thicknessMapUv:$&&f(g.thicknessMap.channel),alphaMapUv:ot&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ue||be),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(At||ot),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&g.map.isVideoTexture===!0&&jt.getTransfer(g.map.colorSpace)===ae,decodeVideoTextureEmissive:xe&&g.emissiveMap.isVideoTexture===!0&&jt.getTransfer(g.emissiveMap.colorSpace)===ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===sn,flipSided:g.side===Ye,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Xt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&g.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function M(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)b.push(P),b.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(m(b,g),p(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function p(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){let b=u[g.type],P;if(b){let R=Pn[b];P=ph.clone(R.uniforms)}else P=g.uniforms;return P}function E(g,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new v0(i,b,g,s),c.push(P),h.set(b,P)),P}function S(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function E0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,M,m,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=_,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,f,_,M,m,p,y){y.reversedDepth===!0&&(m=-m);let E=a(u,f,_,M,m,p);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):e.push(E)}function c(u,f,_,M,m,p){let y=a(u,f,_,M,m,p);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||T0),n.length>1&&n.sort(f||Nh),s.length>1&&s.sort(f||Nh)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function w0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Uh,i.set(n,[o])):s>=r.length?(o=new Uh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ut};break;case"SpotLight":e={position:new O,direction:new O,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function R0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C0=0;function I0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P0(i){let t=new A0,e=R0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new pe,o=new pe;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,y=0,E=0,S=0,A=0,T=0,g=0,b=0,P=0,R=0;c.sort(I0);for(let U=0,G=c.length;U<G;U++){let I=c[U],V=I.color,Y=I.intensity,H=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ci?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*Y,d+=V.g*Y,u+=V.b*Y;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],Y);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=et,n.sunShadowMap[_]=nt;let vt=tt.getViewportCount();for(let Mt=0;Mt<vt;Mt++)n.sunShadowMatrix[M+Mt]=tt.getMatrix(Mt),n.sunShadowCascade[M+Mt]=tt._cascadeData[Mt];M+=vt,_++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(Y),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let tt=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,tt.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[y]=tt.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=nt,g++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(V).multiplyScalar(Y),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=W,E++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=I.shadow.matrix,T++}n.point[p]=W,p++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(Y),W.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[S]=W,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==E||D.hemiLength!==S||D.numSunShadows!==_||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==g||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=E,D.hemiLength=S,D.numSunShadows=_,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=g,D.numSpotMaps=b,D.numLightProbes=R,n.version=C0++)}function l(c,h){let d=0,u=0,f=0,_=0,M=0,m=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let S=c[y];if(S.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(S.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Fh(i){let t=new P0(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function L0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Fh(i),t.set(s,[a])):r>=o.length?(a=new Fh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],F0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Oh=new pe,Vs=new O,Sl=new O;function O0(i,t,e){let n=new ni,s=new Vt,r=new Vt,o=new me,a=new zr,l=new Gr,c={},h=e.maxTextureSize,d={[li]:Ye,[Ye]:li,[sn]:sn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:D0,fragmentShader:N0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new qe;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new F(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let p=this.type;this.render=function(T,g,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===eo&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){let Y=T[I],H=Y.shadow;if(H===void 0){Nt("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let nt=H.getFrameExtents();s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qi){if(Y.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(s.x,s.y,{format:ci,type:vn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Hn(s.x,s.y,yn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le}else Y.isPointLight?(H.map=new Xs(s.x),H.map.depthTexture=new Es(s.x,xn)):(H.map=new en(s.x,s.y),H.map.depthTexture=new Hn(s.x,s.y,xn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=zn,this.type===Ns?(H.map.depthTexture.compareFunction=W?sl:il,H.map.depthTexture.minFilter=Xe,H.map.depthTexture.magFilter=Xe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,b);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let vt=0;vt<tt;vt++){let Mt=H.getCamera(vt);if(Y.isPointLight){let q=H.camera,rt=H.matrix,gt=Y.distance||q.far;gt!==q.far&&(q.far=gt,q.updateProjectionMatrix()),Vs.setFromMatrixPosition(Y.matrixWorld),q.position.copy(Vs),Sl.copy(q.position),Sl.add(U0[vt]),q.up.copy(F0[vt]),q.lookAt(Sl),q.updateMatrixWorld(),rt.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Oh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oh,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(H.map),i.clear());let q=H.getViewport(vt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(o)}n=H.getFrustum(vt),S(g,b,Mt,Y,et,this.type)}H.isPointLightShadow!==!0&&this.type===Qi&&y(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,R,D)};function y(T,g){let b=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(s.x,s.y,{format:ci,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,b,u,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,b,f,M,null)}function E(T,g,b,P){let R=null,D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=R.uuid,G=g.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let V=I[G];V===void 0&&(V=R.clone(),I[G]=V,g.addEventListener("dispose",A)),R=V}if(R.visible=g.visible,R.wireframe=g.wireframe,P===Qi?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=b}return R}function S(T,g,b,P,R,D){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Qi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),V=T.material;if(Array.isArray(V)){let Y=I.groups;for(let H=0,nt=Y.length;H<nt;H++){let W=Y[H],tt=V[W.materialIndex];if(tt&&tt.visible){let et=E(T,tt,P,D);T.onBeforeShadow(i,T,g,b,I,et,W),i.renderBufferDirect(b,null,I,et,T,W),T.onAfterShadow(i,T,g,b,I,et,W)}}}else if(V.visible){let Y=E(T,V,P,D);T.onBeforeShadow(i,T,g,b,I,Y,null),i.renderBufferDirect(b,null,I,Y,T,null),T.onAfterShadow(i,T,g,b,I,Y,null)}}let G=T.children;for(let I=0,V=G.length;I<V;I++)S(G[I],g,b,P,R,D)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let P=c[b],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function B0(i,t){function e(){let C=!1,Q=new me,$=null,ut=new me(0,0,0,0);return{setMask:function(ot){$!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){C=ot},setClear:function(ot,ct,wt,Xt,st){st===!0&&(ot*=Xt,ct*=Xt,wt*=Xt),Q.set(ot,ct,wt,Xt),ut.equals(Q)===!1&&(i.clearColor(ot,ct,wt,Xt),ut.copy(Q))},reset:function(){C=!1,$=null,ut.set(-1,0,0,0)}}}function n(){let C=!1,Q=!1,$=null,ut=null,ot=null;return{setReversed:function(ct){if(Q!==ct){let wt=t.get("EXT_clip_control");ct?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Q=ct;let Xt=ot;ot=null,this.setClear(Xt)}},getReversed:function(){return Q},setTest:function(ct){ct?ft(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ct){$!==ct&&!C&&(i.depthMask(ct),$=ct)},setFunc:function(ct){if(Q&&(ct=hh[ct]),ut!==ct){switch(ct){case br:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Rr:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=ct}},setLocked:function(ct){C=ct},setClear:function(ct){ot!==ct&&(ot=ct,Q&&(ct=1-ct),i.clearDepth(ct))},reset:function(){C=!1,$=null,ut=null,ot=null,Q=!1}}}function s(){let C=!1,Q=null,$=null,ut=null,ot=null,ct=null,wt=null,Xt=null,st=null;return{setTest:function(Pt){C||(Pt?ft(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Pt){Q!==Pt&&!C&&(i.stencilMask(Pt),Q=Pt)},setFunc:function(Pt,Wt,_t){($!==Pt||ut!==Wt||ot!==_t)&&(i.stencilFunc(Pt,Wt,_t),$=Pt,ut=Wt,ot=_t)},setOp:function(Pt,Wt,_t){(ct!==Pt||wt!==Wt||Xt!==_t)&&(i.stencilOp(Pt,Wt,_t),ct=Pt,wt=Wt,Xt=_t)},setLocked:function(Pt){C=Pt},setClear:function(Pt){st!==Pt&&(i.clearStencil(Pt),st=Pt)},reset:function(){C=!1,Q=null,$=null,ut=null,ot=null,ct=null,wt=null,Xt=null,st=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,y=null,E=null,S=null,A=null,T=null,g=null,b=new Ut(0,0,0),P=0,R=!1,D=null,U=null,G=null,I=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=nt>=2);let tt=null,et={},vt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),q=new me().fromArray(vt),rt=new me().fromArray(Mt);function gt(C,Q,$,ut){let ot=new Uint8Array(4),ct=i.createTexture();i.bindTexture(C,ct),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<$;wt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(Q+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ct}let Ct={};Ct[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(Gi),De(!1),ue(Fa),ft(i.CULL_FACE),Se(Mi);function ft(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function zt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ge(C,Q){return u[C]!==Q?(i.bindFramebuffer(C,Q),u[C]=Q,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function At(C,Q){let $=_,ut=!1;if(C){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let ot=C.textures;if($.length!==ot.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,wt=ot.length;ct<wt;ct++)$[ct]=i.COLOR_ATTACHMENT0+ct;$.length=ot.length,ut=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ut=!0);ut&&i.drawBuffers($)}function se(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let oe={[Si]:i.FUNC_ADD,[Lc]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};oe[Nc]=i.MIN,oe[Uc]=i.MAX;let Yt={[Fc]:i.ZERO,[Oc]:i.ONE,[Bc]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Wc]:i.SRC_ALPHA_SATURATE,[Hc]:i.DST_COLOR,[zc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Xc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(C,Q,$,ut,ot,ct,wt,Xt,st,Pt){if(C===Mi){m===!0&&(zt(i.BLEND),m=!1);return}if(m===!1&&(ft(i.BLEND),m=!0),C!==Pc){if(C!==p||Pt!==R){if((y!==Si||A!==Si)&&(i.blendEquation(i.FUNC_ADD),y=Si,A=Si),Pt)switch(C){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",C);break}else switch(C){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ba:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",C);break}E=null,S=null,T=null,g=null,b.set(0,0,0),P=0,p=C,R=Pt}return}ot=ot||Q,ct=ct||$,wt=wt||ut,(Q!==y||ot!==A)&&(i.blendEquationSeparate(oe[Q],oe[ot]),y=Q,A=ot),($!==E||ut!==S||ct!==T||wt!==g)&&(i.blendFuncSeparate(Yt[$],Yt[ut],Yt[ct],Yt[wt]),E=$,S=ut,T=ct,g=wt),(Xt.equals(b)===!1||st!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,st),b.copy(Xt),P=st),p=C,R=!1}function ye(C,Q){C.side===sn?zt(i.CULL_FACE):ft(i.CULL_FACE);let $=C.side===Ye;Q&&($=!$),De($),C.blending===ji&&C.transparent===!1?Se(Mi):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ut=C.stencilWrite;a.setTest(ut),ut&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(C){D!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),D=C)}function ue(C){C!==Cc?(ft(i.CULL_FACE),C!==U&&(C===Fa?i.cullFace(i.BACK):C===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),U=C}function on(C){C!==G&&(H&&i.lineWidth(C),G=C)}function xe(C,Q,$){C?(ft(i.POLYGON_OFFSET_FILL),(I!==Q||V!==$)&&(I=Q,V=$,o.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):zt(i.POLYGON_OFFSET_FILL)}function He(C){C?ft(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function Ue(C){C===void 0&&(C=i.TEXTURE0+Y-1),tt!==C&&(i.activeTexture(C),tt=C)}function be(C,Q,$){$===void 0&&(tt===null?$=i.TEXTURE0+Y-1:$=tt);let ut=et[$];ut===void 0&&(ut={type:void 0,texture:void 0},et[$]=ut),(ut.type!==C||ut.texture!==Q)&&(tt!==$&&(i.activeTexture($),tt=$),i.bindTexture(C,Q||Ct[C]),ut.type=C,ut.texture=Q)}function N(){let C=et[tt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function ie(){try{i.texSubImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function pt(){try{i.texSubImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function Lt(){try{i.texStorage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function w(){try{i.texStorage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Ft("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Ft("WebGLState:",C)}}function it(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function j(C,Q){d[C]!==Q&&(i.pixelStorei(C,Q),d[C]=Q)}function at(C){q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function lt(C){rt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),rt.copy(C))}function Z(C,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ut=$.get(C);ut===void 0&&(ut=i.getUniformBlockIndex(Q,C.name),i.uniformBlockBinding(Q,ut,ut),$.set(C,ut))}function J(C,Q,$){let ot=c.get(Q).get(C);l[ot]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,$),l[ot]=$)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,et={},u={},l={},f=new WeakMap,_=[],M=null,m=!1,p=null,y=null,E=null,S=null,A=null,T=null,g=null,b=new Ut(0,0,0),P=0,R=!1,D=null,U=null,G=null,I=null,V=null,q.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:zt,bindFramebuffer:ge,drawBuffers:At,useProgram:se,setBlending:Se,setMaterial:ye,setFlipSided:De,setCullFace:ue,setLineWidth:on,setPolygonOffset:xe,setScissorTest:He,activeTexture:Ue,bindTexture:be,unbindTexture:N,compressedTexImage2D:Ze,compressedTexImage3D:ce,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Lt,texStorage3D:w,texSubImage2D:ie,texSubImage3D:pt,compressedTexSubImage2D:ve,compressedTexSubImage3D:It,scissor:at,viewport:lt,reset:ht}}function k0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,M=new FinalizationRegistry(w=>_.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,x){return m?new OffscreenCanvas(w,x):_s("canvas")}function y(w,x,B){let it=1,j=Lt(w);if((j.width>B||j.height>B)&&(it=B/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let at=Math.floor(it*j.width),lt=Math.floor(it*j.height);u===void 0&&(u=p(at,lt));let Z=x?p(at,lt):u;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(w,0,0,at,lt),Nt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+lt+")."),Z}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,B,it,j,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let lt;it&&(lt=t.get("EXT_texture_norm16"),lt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),B===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),B===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),B===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let J=at?gs:jt.getTransfer(j);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=J===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),B===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(w,x){let B;return w?x===null||x===xn||x===Ei?B=i.DEPTH24_STENCIL8:x===yn?B=i.DEPTH32F_STENCIL8:x===es&&(B=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===Ei?B=i.DEPTH_COMPONENT24:x===yn?B=i.DEPTH_COMPONENT32F:x===es&&(B=i.DEPTH_COMPONENT16),B}function b(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Le&&w.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){let x=new WeakRef(w);n.get(w).__ref=x,_.add(x),M.register(w,x,x)}function R(w){let x=n.get(w).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function D(w){G(w.target)}function U(w){I(w.target)}function G(w){w.removeEventListener("dispose",D),R(w),Y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function I(w){w.removeEventListener("dispose",U),R(w),nt(w)}function V(){for(let w of _){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):G(x))}_.clear(),d.clear()}function Y(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,it=f.get(B);if(it){let j=it[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(w),Object.keys(it).length===0&&f.delete(B)}n.remove(w)}function H(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,it=f.get(B);delete it[x.__cacheKey],o.memory.textures--}function nt(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&G(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let at=0;at<x.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[j][at]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let it=w.textures;for(let j=0,at=it.length;j<at;j++){let lt=n.get(it[j]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(it[j])}n.remove(w)}let W=0;function tt(){W=0}function et(){return W}function vt(w){W=w}function Mt(){let w=W;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function q(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function rt(w,x){let B=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let it=w.image;if(it===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function gt(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ye(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ct(w,x){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ye(B,w,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function ft(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){De(B,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let zt={[Ir]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},ge={[Le]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},At={[eh]:i.NEVER,[rl]:i.ALWAYS,[nh]:i.LESS,[il]:i.LEQUAL,[ih]:i.EQUAL,[sl]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function se(w,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===so||x.magFilter===Fs||x.magFilter===Vn||x.minFilter===Xe||x.minFilter===so||x.minFilter===Fs||x.minFilter===Vn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,zt[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,zt[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,zt[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==Fs&&x.minFilter!==Vn||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",D),P(x));let it=x.source,j=f.get(it);j===void 0&&(j={},f.set(it,j));let at=q(x);if(at!==w.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[at].usedTimes++;let lt=j[w.__cacheKey];lt!==void 0&&(j[w.__cacheKey].usedTimes--,lt.usedTimes===0&&H(x)),w.__cacheKey=at,w.__webglTexture=j[at].texture}return B}function Yt(w,x,B){return Math.floor(Math.floor(w/B)/x)}function Se(w,x,B,it){let at=w.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,it,x.data);else{at.sort((C,Q)=>C.start-Q.start);let lt=0;for(let C=1;C<at.length;C++){let Q=at[lt],$=at[C],ut=Q.start+Q.count,ot=Yt($.start,x.width,4),ct=Yt(Q.start,x.width,4);$.start<=ut+1&&ot===ct&&Yt($.start+$.count-1,x.width,4)===ot?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++lt,at[lt]=$)}at.length=lt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,Q=at.length;C<Q;C++){let $=at[C],ut=Math.floor($.start/4),ot=Math.ceil($.count/4),ct=ut%x.width,wt=Math.floor(ut/x.width),Xt=ot,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,ct,wt,Xt,st,B,it,x.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function ye(w,x,B){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let j=oe(w,x),at=x.source;e.bindTexture(it,w.__webglTexture,i.TEXTURE0+B);let lt=n.get(at);if(at.version!==lt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=jt.getPrimaries(jt.workingColorSpace),Pt=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),Wt=x.colorSpace===Xn||st===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=y(x.image,!1,s.maxTextureSize);J=It(x,J);let ht=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Q=T(x.internalFormat,ht,C,x.normalized,x.colorSpace,x.isVideoTexture);se(it,x);let $,ut=x.mipmaps,ot=x.isVideoTexture!==!0,ct=lt.__version===void 0||j===!0,wt=at.dataReady,Xt=b(x,J);if(x.isDepthTexture)Q=g(x.format===Wn,x.type),ct&&(ot?e.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ht,C,null));else if(x.isDataTexture)if(ut.length>0){ot&&ct&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,ut[0].width,ut[0].height);for(let st=0,Pt=ut.length;st<Pt;st++)$=ut[st],ot?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,ht,C,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,ht,C,$.data);x.generateMipmaps=!1}else ot?(ct&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,J.width,J.height),wt&&Se(x,J,ht,C)):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ht,C,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ot&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Q,ut[0].width,ut[0].height,J.depth);for(let st=0,Pt=ut.length;st<Pt;st++)if($=ut[st],x.format!==Mn)if(ht!==null)if(ot){if(wt)if(x.layerUpdates.size>0){let Wt=ml($.width,$.height,x.format,x.type);for(let _t of x.layerUpdates){let le=$.data.subarray(_t*Wt/$.data.BYTES_PER_ELEMENT,(_t+1)*Wt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,_t,$.width,$.height,1,ht,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,J.depth,ht,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,J.depth,0,$.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,J.depth,ht,C,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,J.depth,0,ht,C,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ot&&ct&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,ut[0].width,ut[0].height);for(let st=0,Pt=ut.length;st<Pt;st++)$=ut[st],x.format!==Mn?ht!==null?ot?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,ht,$.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,$.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,ht,C,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,ht,C,$.data)}else if(x.isDataArrayTexture)if(ot){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Q,J.width,J.height,J.depth),wt)if(x.layerUpdates.size>0){let st=ml(J.width,J.height,x.format,x.type);for(let Pt of x.layerUpdates){let Wt=J.data.subarray(Pt*st/J.data.BYTES_PER_ELEMENT,(Pt+1)*st/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,J.width,J.height,1,ht,C,Wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,C,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ht,C,J.data);else if(x.isData3DTexture)ot?(ct&&e.texStorage3D(i.TEXTURE_3D,Xt,Q,J.width,J.height,J.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,C,J.data)):e.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ht,C,J.data);else if(x.isFramebufferTexture){if(ct)if(ot)e.texStorage2D(i.TEXTURE_2D,Xt,Q,J.width,J.height);else{let st=J.width,Pt=J.height;for(let Wt=0;Wt<Xt;Wt++)e.texImage2D(i.TEXTURE_2D,Wt,Q,st,Pt,0,ht,C,null),st>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),J.parentNode!==st){st.appendChild(J),d.add(x),st.onpaint=Pt=>{let Wt=Pt.changedElements;for(let _t of d)Wt.includes(_t.image)&&(_t.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Wt=i.RGBA,_t=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Wt,_t,le,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ot&&ct){let st=Lt(ut[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Q,st.width,st.height)}for(let st=0,Pt=ut.length;st<Pt;st++)$=ut[st],ot?wt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ht,C,$):e.texImage2D(i.TEXTURE_2D,st,Q,ht,C,$);x.generateMipmaps=!1}else if(ot){if(ct){let st=Lt(J);e.texStorage2D(i.TEXTURE_2D,Xt,Q,st.width,st.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,C,J)}else e.texImage2D(i.TEXTURE_2D,0,Q,ht,C,J);E(x)&&x.mipmapsAutoUpdate===!0&&S(it),lt.__version=at.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function De(w,x,B){if(x.image.length!==6)return;let it=oe(w,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let at=n.get(j);if(j.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+B);let lt=jt.getPrimaries(jt.workingColorSpace),Z=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),J=x.colorSpace===Xn||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let _t=0;_t<6;_t++)!ht&&!C?Q[_t]=y(x.image[_t],!0,s.maxCubemapSize):Q[_t]=C?x.image[_t].image:x.image[_t],Q[_t]=It(x,Q[_t]);let $=Q[0],ut=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),ct=T(x.internalFormat,ut,ot,x.normalized,x.colorSpace),wt=x.isVideoTexture!==!0,Xt=at.__version===void 0||it===!0,st=j.dataReady,Pt=b(x,$);se(i.TEXTURE_CUBE_MAP,x);let Wt;if(x.isDepthTexture){if(ct=g(x.format===Wn,x.type),Xt)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ct,$.width,$.height);else for(let _t=0;_t<6;_t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,$.width,$.height,0,ut,ot,null)}else if(ht){wt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ct,$.width,$.height);for(let _t=0;_t<6;_t++){Wt=Q[_t].mipmaps;for(let le=0;le<Wt.length;le++){let Ce=Wt[le];x.format!==Mn?ut!==null?wt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,0,0,Ce.width,Ce.height,ut,Ce.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,ct,Ce.width,Ce.height,0,Ce.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,0,0,Ce.width,Ce.height,ut,ot,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,ct,Ce.width,Ce.height,0,ut,ot,Ce.data)}}}else{if(Wt=x.mipmaps,wt&&Xt){Wt.length>0&&Pt++;let _t=Lt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ct,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(C){wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Q[_t].width,Q[_t].height,ut,ot,Q[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,Q[_t].width,Q[_t].height,0,ut,ot,Q[_t].data);for(let le=0;le<Wt.length;le++){let qn=Wt[le].image[_t].image;wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,0,0,qn.width,qn.height,ut,ot,qn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,ct,qn.width,qn.height,0,ut,ot,qn.data)}}else{wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ut,ot,Q[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,ut,ot,Q[_t]);for(let le=0;le<Wt.length;le++){let Ce=Wt[le];wt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,0,0,ut,ot,Ce.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,ct,ut,ot,Ce.image[_t])}}}E(x)&&x.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),at.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ue(w,x,B,it,j,at){let lt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=T(B.internalFormat,lt,Z,B.normalized,B.colorSpace),ht=n.get(x),C=n.get(B);if(C.__renderTarget=x,!ht.__hasExternalTextures){let Q=Math.max(1,x.width>>at),$=Math.max(1,x.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,J,Q,$,x.depth,0,lt,Z,null):e.texImage2D(j,at,J,Q,$,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,C.__webglTexture,0,ie(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,j,C.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function on(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let it=x.depthTexture,j=it&&it.isDepthTexture?it.type:null,at=g(x.stencilBuffer,j),lt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),at,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,w)}else{let it=x.textures;for(let j=0;j<it.length;j++){let at=it[j],lt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),J=T(at.internalFormat,lt,Z,at.normalized,at.colorSpace);pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(w,x,B){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);j.__renderTarget=x;let at=it?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),it?ft(x.depthTexture,0):rt(x.depthTexture,0);let lt=j.__webglTexture,Z=ie(x),J=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ht=x.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===zn)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,lt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,lt,0);else if(x.depthTexture.format===Wn)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,lt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let it=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=it}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)xe(x.__webglFramebuffer[it],w,it);else w.texture.mipmaps.length>0?xe(x.__webglFramebuffer[0],w,0):xe(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),on(x.__webglDepthbuffer[it],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),on(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,x,B){let it=n.get(w);x!==void 0&&ue(it.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&He(w)}function be(w){let x=w.texture,B=n.get(w),it=n.get(x);w.addEventListener("dispose",U),P(w);let j=w.textures,at=w.isWebGLCubeRenderTarget===!0,lt=j.length>1;if(lt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,o.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,J=j.length;Z<J;Z++){let ht=n.get(j[Z]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&pt(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let J=j[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ht=r.convert(J.format,J.colorSpace),C=r.convert(J.type),Q=T(J.internalFormat,ht,C,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),$=ie(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),on(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),se(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ue(B.__webglFramebuffer[Z][J],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ue(B.__webglFramebuffer[Z],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(x)?S(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Z=0,J=j.length;Z<J;Z++){let ht=j[Z],C=n.get(ht),Q=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,C.__webglTexture),se(Q,ht),ue(B.__webglFramebuffer,w,ht,i.COLOR_ATTACHMENT0+Z,Q,0),E(ht)&&S(Q)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),se(Z,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ue(B.__webglFramebuffer[J],w,x,i.COLOR_ATTACHMENT0,Z,J);else ue(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Z,0);E(x)?S(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&He(w)}function N(w){let x=w.textures;for(let B=0,it=x.length;B<it;B++){let j=x[B];if(E(j)&&j.mipmapsAutoUpdate===!0){let at=A(w),lt=n.get(j).__webglTexture;e.bindTexture(at,lt),S(at),e.unbindTexture()}}}let Ze=[];function ce(w){if(w.samples>0){if(pt(w)===!1){let x=w.textures,B=w.width,it=w.height,j=i.COLOR_BUFFER_BIT,at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(w),Z=x.length>1;if(Z)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let C=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,it,0,0,B,it,j,i.NEAREST),l===!0&&(Ze.length=0,Ze.push(i.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ze.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let C=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function pt(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function It(w,x){let B=w.colorSpace,it=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ms&&B!==Xn&&(jt.getTransfer(B)===ae?(it!==Mn||j!==Ke)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",B)),x}function Lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=tt,this.getTextureUnits=et,this.setTextureUnits=vt,this.setTexture2D=rt,this.setTexture2DArray=gt,this.setTexture3D=Ct,this.setTextureCube=ft,this.rebindTextures=Ue,this.setupRenderTarget=be,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pt,this.dispose=V}function z0(i,t){function e(n,s=Xn){let r,o=jt.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ja)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ja)return i.BYTE;if(n===Ka)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===tl)return i.ALPHA;if(n===el)return i.RGB;if(n===Mn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===ks||n===zs)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===_o||n===xo||n===yo||n===vo||n===Gs||n===Mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===_o)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gs)return r.COMPRESSED_RG11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===So||n===bo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===zo||n===Hs||n===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ts(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:G0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends Tn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,M=typeof XRWebGLBinding<"u",m=new Cl,p={},y=e.getContextAttributes(),E=null,S=null,A=[],T=[],g=new Vt,b=null,P=null,R=new We;R.viewport=new me;let D=new We;D.viewport=new me;let U=[R,D],G=new jr,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=A[q];return rt===void 0&&(rt=new Yi,A[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=A[q];return rt===void 0&&(rt=new Yi,A[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=A[q];return rt===void 0&&(rt=new Yi,A[q]=rt),rt.getHandSpace()};function Y(q){let rt=T.indexOf(q.inputSource);if(rt===-1)return;let gt=A[rt];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<A.length;q++){let rt=T[q];rt!==null&&(T[q]=null,A[q].disconnect(rt))}I=null,V=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ct=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?Wn:zn,Ct=y.stencil?Ei:xn);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new en(u.textureWidth,u.textureHeight,{format:Mn,type:Ke,depthTexture:new Hn(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new en(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(q){for(let rt=0;rt<q.removed.length;rt++){let gt=q.removed[rt],Ct=T.indexOf(gt);Ct>=0&&(T[Ct]=null,A[Ct].disconnect(gt))}for(let rt=0;rt<q.added.length;rt++){let gt=q.added[rt],Ct=T.indexOf(gt);if(Ct===-1){for(let zt=0;zt<A.length;zt++)if(zt>=T.length){T.push(gt),Ct=zt;break}else if(T[zt]===null){T[zt]=gt,Ct=zt;break}if(Ct===-1)break}let ft=A[Ct];ft&&ft.connect(gt)}}function W(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let rt=q.near,gt=q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),G.near=D.near=R.near=rt,G.far=D.far=R.far=gt,(I!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,V=G.far),G.layers.mask=q.layers.mask|6,R.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Ct=q.parent,ft=G.cameras;W(G,Ct);for(let zt=0;zt<ft.length;zt++)W(ft[zt],Ct);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),tt(q,G,Ct)};function tt(q,rt,gt){gt===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let et=null;function vt(q,rt){if(h=rt.getViewerPose(c||o),_=rt,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ct=!1;gt.length!==G.cameras.length&&(G.cameras.length=0,Ct=!0);for(let At=0;At<gt.length;At++){let se=gt[At],oe=null;if(f!==null)oe=f.getViewport(se);else{let Se=d.getViewSubImage(u,se);oe=Se.viewport,At===0&&(t.setRenderTargetTextures(S,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(S))}let Yt=U[At];Yt===void 0&&(Yt=new We,Yt.layers.enable(At),Yt.viewport=new me,U[At]=Yt),Yt.matrix.fromArray(se.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(se.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(oe.x,oe.y,oe.width,oe.height),At===0&&(G.matrix.copy(Yt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ct===!0&&G.cameras.push(Yt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let At=d.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&m.init(At,s.renderState)}if(ft&&ft.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<gt.length;At++){let se=gt[At].camera;if(se){let oe=p[se];oe||(oe=new Ts,p[se]=oe);let Yt=d.getCameraImage(se);oe.sourceTexture=Yt}}}}for(let gt=0;gt<A.length;gt++){let Ct=T[gt],ft=A[gt];Ct!==null&&ft!==void 0&&ft.update(Ct,rt,c||o)}et&&et(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}let Mt=new Bh;Mt.setAnimationLoop(vt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},V0=new pe,$h=new Bt;$h.set(-1,0,0,0,1,0,0,0,1);function W0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,S=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($h),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X0(i,t,e,n){let s={},r={};function o(y,E){let S=E.program;n.uniformBlockBinding(y,S,s[y.id])}function a(y,E){let S=s[y.id];S===void 0&&(_(y),S=l(y),s[y.id]=S,y.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let E=i.createBuffer(),S=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,g=S.length;T<g;T++){let b=S[T];if(Array.isArray(b))for(let P=0,R=b.length;P<R;P++)h(b[P],T,P,A);else h(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,S,A){if(u(y,E,S,A)===!0){let T=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let P=0;P<g.length;P++){let R=g[P],D=M(R,!0);d(R,y.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function d(y,E,S){typeof y=="number"||typeof y=="boolean"?E[S]=y:y.isMatrix3?(E[S]=y.elements[0],E[S+1]=y.elements[1],E[S+2]=y.elements[2],E[S+3]=0,E[S+4]=y.elements[3],E[S+5]=y.elements[4],E[S+6]=y.elements[5],E[S+7]=0,E[S+8]=y.elements[6],E[S+9]=y.elements[7],E[S+10]=y.elements[8],E[S+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-S),S):y.toArray(E,S)}function u(y,E,S,A){let T=y.value,g=E+"_"+S;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);let b=A[g],P=!1;for(let R=0;R<T.length;R++)f(T[R],b,R)===!0&&(P=!0);return P}return f(T,A,g)}function f(y,E,S){if(E[S]===void 0)return typeof y=="number"||typeof y=="boolean"?E[S]=y:ArrayBuffer.isView(y)?E[S]=y.slice():E[S]=y.clone(),!0;{let A=E[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function _(y){let E=y.uniforms,S=0,A=16;for(let g=0,b=E.length;g<b;g++){let P=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,D=P.length;R<D;R++){let U=P[R],G=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(E[g])||Array.isArray(U.value),V=S;for(let H=0,nt=G.length;H<nt;H++){let W=G[H],tt=M(W,I),et=S%A,vt=et%tt.boundary,Mt=et+vt;S+=vt,Mt!==0&&A-Mt<tt.storage&&(S+=A-Mt),H===0&&(V=S),S+=tt.storage}let Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let T=S%A;return T>0&&(S+=A-T),y.__size=S,y.__cache={},this}function M(y,E){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){let E=y.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:p}}var q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),In=null;function Y0(){return In===null&&(In=new Fr(q0,16,16,ci,vn),In.name="DFG_LUT",In.minFilter=Xe,In.magFilter=Xe,In.wrapS=bn,In.wrapT=bn,In.generateMipmaps=!1,In.needsUpdate=!0),In}var qo=class{constructor(t={}){let{canvas:e=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ke}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=f,m=new Set([ho,co,lo]),p=new Set([Ke,xn,es,Ei,oo,ao]),y=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,T=null,g=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,U=null,G=null,I=null,V=null;this._outputColorSpace=tn;let Y=0,H=0,nt=null,W=-1,tt=null,et=new me,vt=new me,Mt=null,q=new Ut(0),rt=0,gt=e.width,Ct=e.height,ft=1,zt=null,ge=null,At=new me(0,0,gt,Ct),se=new me(0,0,gt,Ct),oe=!1,Yt=new ni,Se=new Or,ye=!1,De=!1,ue=new pe,on=new O,xe=new me,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function be(){return nt===null?ft:1}let N=n;function Ze(v,L){return e.getContext(v,L)}let ce,ie,pt,ve,It,Lt,w,x,B,it,j,at,lt,Z,J,ht,C,Q,$,ut,ot,ct,wt;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),N===null){let L="webgl2";if(N=Ze(L,v),N===null)throw Ze(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(v){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ft("WebGLRenderer: "+v.message),v}function Xt(){ce=new sg(N),ce.init(),ot=new z0(N,ce),ie=new Ym(N,ce,t,ot),pt=new B0(N,ce),ie.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),G=N.createFramebuffer(),I=N.createFramebuffer(),V=N.createFramebuffer(),ve=new ag(N),It=new E0,Lt=new k0(N,ce,pt,It,ie,ot,ve),w=new ig(R),x=new cf(N),ct=new Xm(N,x),B=new rg(N,x,ve,ct),it=new cg(N,B,x,ct,ve),Q=new lg(N,ie,Lt),J=new $m(It),j=new b0(R,w,ce,ie,ct,J),at=new W0(R,It),lt=new w0,Z=new L0(ce),C=new Wm(R,w,pt,it,_,l),ht=new O0(R,it,ie),wt=new X0(N,ve,ie,pt),$=new qm(N,ce,ve),ut=new og(N,ce,ve),ve.programs=j.programs,R.capabilities=ie,R.extensions=ce,R.properties=It,R.renderLists=lt,R.shadowMap=ht,R.state=pt,R.info=ve}M!==Ke&&(P=new ug(M,e.width,e.height,a,s,r));let st=new Il(R,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ce.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ce.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(v){v!==void 0&&(ft=v,this.setSize(gt,Ct,!1))},this.getSize=function(v){return v.set(gt,Ct)},this.setSize=function(v,L,X=!0){if(st.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=v,Ct=L,e.width=Math.floor(v*ft),e.height=Math.floor(L*ft),X===!0&&(e.style.width=v+"px",e.style.height=L+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(gt*ft,Ct*ft).floor()},this.setDrawingBufferSize=function(v,L,X){gt=v,Ct=L,ft=X,e.width=Math.floor(v*X),e.height=Math.floor(L*X),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(M===Ke){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(At)},this.setViewport=function(v,L,X,k){v.isVector4?At.set(v.x,v.y,v.z,v.w):At.set(v,L,X,k),pt.viewport(et.copy(At).multiplyScalar(be()).round())},this.getScissor=function(v){return v.copy(se)},this.setScissor=function(v,L,X,k){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,L,X,k),pt.scissor(vt.copy(se).multiplyScalar(be()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(v){pt.setScissorTest(oe=v)},this.setOpaqueSort=function(v){zt=v},this.setTransparentSort=function(v){ge=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,X=!0){let k=0;if(v){let z=!1;if(nt!==null){let mt=nt.texture.format;z=m.has(mt)}if(z){let mt=nt.texture.type,St=p.has(mt),dt=C.getClearColor(),yt=C.getClearAlpha(),Tt=dt.r,Ht=dt.g,Kt=dt.b;St?(y[0]=Tt,y[1]=Ht,y[2]=Kt,y[3]=yt,N.clearBufferuiv(N.COLOR,0,y)):(E[0]=Tt,E[1]=Ht,E[2]=Kt,E[3]=yt,N.clearBufferiv(N.COLOR,0,E))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),C.dispose(),lt.dispose(),Z.dispose(),Lt.dispose(),It.dispose(),w.dispose(),it.dispose(),B.dispose(),ct.dispose(),wt.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",Yl),st.removeEventListener("sessionend",$l),pi.stop()};function Pt(v){v.preventDefault(),al("WebGLRenderer: Context Lost."),D=!0}function Wt(){al("WebGLRenderer: Context Restored."),D=!1;let v=ve.autoReset,L=ht.enabled,X=ht.autoUpdate,k=ht.needsUpdate,z=ht.type;Xt(),ve.autoReset=v,ht.enabled=L,ht.autoUpdate=X,ht.needsUpdate=k,ht.type=z}function _t(v){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function le(v){let L=v.target;L.removeEventListener("dispose",le),Ce(L)}function Ce(v){qn(v),It.remove(v)}function qn(v){let L=It.get(v).programs;L!==void 0&&(L.forEach(function(X){j.releaseProgram(X)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,X,k,z,mt){L===null&&(L=He);let St=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=ld(v,L,X,k,z);pt.setMaterial(k,St);let yt=X.index,Tt=1;if(k.wireframe===!0){if(yt=B.getWireframeAttribute(X),yt===void 0)return;Tt=2}let Ht=X.drawRange,Kt=X.attributes.position,bt=Ht.start*Tt,Qt=(Ht.start+Ht.count)*Tt;mt!==null&&(bt=Math.max(bt,mt.start*Tt),Qt=Math.min(Qt,(mt.start+mt.count)*Tt)),yt!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,yt.count)):Kt!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Kt.count));let Ee=Qt-bt;if(Ee<0||Ee===1/0)return;ct.setup(z,k,dt,X,yt);let de,he=$;if(yt!==null&&(de=x.get(yt),he=ut,he.setIndex(de)),z.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*be()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(z.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),pt.setLineWidth(Fe*be()),z.isLineSegments?he.setMode(N.LINES):z.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else z.isPoints?he.setMode(N.POINTS):z.isSprite&&he.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))he.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Fe=z._multiDrawStarts,Et=z._multiDrawCounts,Ve=z._multiDrawCount,re=yt?x.get(yt).bytesPerElement:1,mi=It.get(k).currentProgram.getUniforms();for(let Oe=0;Oe<Ve;Oe++)mi.setValue(N,"_gl_DrawID",Oe),he.render(Fe[Oe]/re,Et[Oe])}else if(z.isInstancedMesh)he.renderInstances(bt,Ee,z.count);else if(X.isInstancedBufferGeometry){let Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Fe);he.renderInstances(bt,Ee,Et)}else he.render(bt,Ee)};function ql(v,L,X,k){U!==null&&v.isNodeMaterial&&U.setObject(k,v),ye===!0&&J.setState(v,X,!1),v.transparent===!0&&v.side===sn&&v.forceSinglePass===!1?(v.side=Ye,v.needsUpdate=!0,os(v,L,k),v.side=li,v.needsUpdate=!0,os(v,L,k),v.side=sn):os(v,L,k)}this.compile=function(v,L,X=null){X===null&&(X=v),U!==null&&U.renderStart(v,L,X),T=Z.get(X),T.init(L),b.push(T),X.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),De=this.localClippingEnabled,ye=J.init(this.clippingPlanes,De),ye===!0&&J.setGlobalState(this.clippingPlanes,L),U!==null&&ht.render(T.state.shadowsArray,X,L);let k=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let dt=mt[St];ql(dt,X,L,z),k.add(dt)}else ql(mt,X,L,z),k.add(mt)}),T=b.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(v,L,X=null){let k=this.compile(v,L,X);return new Promise(z=>{function mt(){if(k.forEach(function(St){let yt=It.get(St).currentProgram;(yt===void 0||yt.isReady())&&k.delete(St)}),k.size===0){z(v);return}setTimeout(mt,10)}ce.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let oa=null;function od(v){oa&&oa(v)}function Yl(){pi.stop()}function $l(){pi.start()}let pi=new Bh;pi.setAnimationLoop(od),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(v){oa=v,st.setAnimationLoop(v),v===null?pi.stop():pi.start()},st.addEventListener("sessionstart",Yl),st.addEventListener("sessionend",$l),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(v,L);let X=st.enabled===!0&&st.isPresenting===!0,k=P!==null&&(nt===null||X)&&P.begin(R,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(L),L=st.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,L,nt),T=Z.get(v,b.length),T.init(L),T.state.textureUnits=Lt.getTextureUnits(),b.push(T),ue.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Se.setFromArrayCamera(L):Yt.setFromProjectionMatrix(ue,ln,L.reversedDepth),De=this.localClippingEnabled,ye=J.init(this.clippingPlanes,De),A=lt.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&aa(St,L,-1/0,R.sortObjects)}aa(v,L,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(zt,ge),Ue=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ue&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ye===!0&&J.beginShadows();let z=T.state.shadowsArray;if(ht.render(z,v,L),ye===!0&&J.endShadows(),(k&&P.hasRenderPass())===!1){let St=A.opaque,dt=A.transmissive;if(T.setupLights(),L.isArrayCamera){let yt=L.cameras;if(dt.length>0)for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){let Kt=yt[Tt];Jl(St,dt,v,Kt)}Ue&&C.render(v);for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){let Kt=yt[Tt];Zl(A,v,Kt,Kt.viewport)}}else dt.length>0&&Jl(St,dt,v,L),Ue&&C.render(v),Zl(A,v,L)}nt!==null&&H===0&&(Lt.updateMultisampleRenderTarget(nt),Lt.updateRenderTargetMipmap(nt)),k&&P.end(R),v.isScene===!0&&v.onAfterRender(R,v,L),ct.resetDefaultState(),W=-1,tt=null,b.pop(),b.length>0?(T=b[b.length-1],Lt.setTextureUnits(T.state.textureUnits),ye===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,U!==null&&U.renderEnd()};function aa(v,L,X,k){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let St=L.isArrayCamera?Se:Yt;if(!v.frustumCulled||v.intersectsFrustum(St)){k&&xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ue);let dt=it.update(v),yt=v.material;yt.visible&&A.push(v,dt,yt,X,xe.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let St=L.isArrayCamera?Se:Yt;if(!v.frustumCulled||v.intersectsFrustum(St)){let dt=it.update(v),yt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xe.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),xe.copy(dt.boundingSphere.center)),xe.applyMatrix4(v.matrixWorld).applyMatrix4(ue)),Array.isArray(yt)){let Tt=dt.groups;for(let Ht=0,Kt=Tt.length;Ht<Kt;Ht++){let bt=Tt[Ht],Qt=yt[bt.materialIndex];Qt&&Qt.visible&&A.push(v,dt,Qt,X,xe.z,bt,L)}}else yt.visible&&A.push(v,dt,yt,X,xe.z,null,L)}}}let mt=v.children;for(let St=0,dt=mt.length;St<dt;St++)aa(mt[St],L,X,k)}function Zl(v,L,X,k){let{opaque:z,transmissive:mt,transparent:St}=v;T.setupLightsView(X),ye===!0&&J.setGlobalState(R.clippingPlanes,X),k&&pt.viewport(et.copy(k)),z.length>0&&js(z,L,X),mt.length>0&&js(mt,L,X),St.length>0&&js(St,L,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Jl(v,L,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let bt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new en(1,1,{generateMipmaps:!0,type:bt?vn:Ke,minFilter:Vn,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let mt=T.state.transmissionRenderTarget[k.id],St=k.viewport||et;mt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),yt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(q),rt=R.getClearAlpha(),rt<1&&R.setClearColor(16777215,.5),R.clear(),Ue&&C.render(X);let Ht=R.toneMapping;R.toneMapping=Cn;let Kt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),ye===!0&&J.setGlobalState(R.clippingPlanes,k),js(v,X,k),Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,Ee=L.length;Qt<Ee;Qt++){let de=L[Qt],{object:he,geometry:Fe,material:Et,group:Ve}=de;if(Et.side===sn&&he.layers.test(k.layers)){let re=Et.side;Et.side=Ye,Et.needsUpdate=!0,Kl(he,X,k,Fe,Et,Ve),Et.side=re,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt))}R.setRenderTarget(dt,yt,Tt),R.setClearColor(q,rt),Kt!==void 0&&(k.viewport=Kt),R.toneMapping=Ht}function js(v,L,X){let k=L.isScene===!0?L.overrideMaterial:null;for(let z=0,mt=v.length;z<mt;z++){let St=v[z],{object:dt,geometry:yt,group:Tt}=St,Ht=St.material;Ht.allowOverride===!0&&k!==null&&(Ht=k),dt.layers.test(X.layers)&&Kl(dt,L,X,yt,Ht,Tt)}}function Kl(v,L,X,k,z,mt){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(R,L,X,k,z,mt),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(R,L,X,k,v,mt),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,R.renderBufferDirect(X,L,k,z,v,mt),z.side=li,z.needsUpdate=!0,R.renderBufferDirect(X,L,k,z,v,mt),z.side=sn):R.renderBufferDirect(X,L,k,z,v,mt),v.onAfterRender(R,L,X,k,z,mt)}function Ql(v){let L=0;for(let X of v)X.texture!==null&&L++;return L}function os(v,L,X){L.isScene!==!0&&(L=He);let k=It.get(v),z=T.state.lights,mt=T.state.shadowsArray,St=z.state.version,dt=j.getParameters(v,z.state,mt,L,X,T.state.lightProbeGridArray),yt=j.getProgramCacheKey(dt),Tt=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=w.get(v.envMap||k.environment,Ht),k.envMapRotation=k.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",le),Tt=new Map,k.programs=Tt,k.programVariants=new Map);let Kt=Tt.get(yt);if(Kt!==void 0){if(k.currentProgram===Kt&&k.lightsStateVersion===St)return tc(v,dt),Kt}else dt.uniforms=j.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,X,dt),v.onBeforeCompile(dt,R),Kt=j.acquireProgram(dt,yt),Tt.set(yt,Kt),k.uniforms=dt.uniforms;let bt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=J.uniform),tc(v,dt),k.needsLights=hd(v),k.lightsStateVersion=St,k.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=Ql(T.state.lightProbeGridArray),k.currentProgram=Kt,k.uniformsList=null,Kt}function ad(v,L,X,k,z){let mt=It.get(v),St=mt.currentProgram.id+","+k+","+z,dt=mt.programVariants.get(St);return dt===void 0?(dt=os(v,L,X),mt.programVariants.set(St,dt)):(mt.currentProgram=dt,mt.uniformsList=null,mt.outputColorSpace=k,mt.toneMapping=z),dt}function jl(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=is.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function tc(v,L){let X=It.get(v);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function ld(v,L,X,k,z){L.isScene!==!0&&(L=He),Lt.resetTextureUnits();let mt=L.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,dt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Tt=w.get(k.envMap||St,yt),Ht=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),bt=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,Ee=!!X.morphAttributes.color,de=Cn;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(de=R.toneMapping);let he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Fe=he!==void 0?he.length:0,Et=It.get(k),Ve=T.state.lights;if(ye===!0&&(De===!0||v!==tt)){let _e=v===tt&&k.id===W;J.setState(k,v,_e)}let re=!1,mi=!1;k.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Ve.state.version||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Tt||k.fog===!0&&Et.fog!==mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==Ht||Et.vertexTangents!==Kt||Et.morphTargets!==bt||Et.morphNormals!==Qt||Et.morphColors!==Ee||Et.morphTargetsCount!==Fe||Et.numLightProbeGrids!==Ql(T.state.lightProbeGridArray)?re=!0:(Et.outputColorSpace!==dt||Et.toneMapping!==de)&&(mi=!0):(re=!0,Et.__version=k.version);let Oe=Et.currentProgram;(re===!0||mi===!0)&&(Oe=mi===!0?ad(k,L,z,dt,de):os(k,L,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Oe,Et));let tr=!1,Yn=!1,gi=!1,ee=Oe.getUniforms(),Ne=Et.uniforms;if(pt.useProgram(Oe.program)&&(tr=!0,Yn=!0,gi=!0),k.id!==W&&(W=k.id,Yn=!0),tr||tt!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ee.setValue(N,"projectionMatrix",v.projectionMatrix),ee.setValue(N,"viewMatrix",v.matrixWorldInverse);let Ie=ee.map.cameraPosition;Ie!==void 0&&Ie.setValue(N,on.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&ee.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ee.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,Yn=!0,gi=!0)}if(Et.needsLights&&(Ve.state.sunShadowMap.length>0&&ee.setValue(N,"sunShadowMap",Ve.state.sunShadowMap,Lt),Ve.state.directionalShadowMap.length>0&&ee.setValue(N,"directionalShadowMap",Ve.state.directionalShadowMap,Lt),Ve.state.spotShadowMap.length>0&&ee.setValue(N,"spotShadowMap",Ve.state.spotShadowMap,Lt),Ve.state.pointShadowMap.length>0&&ee.setValue(N,"pointShadowMap",Ve.state.pointShadowMap,Lt)),z.isSkinnedMesh){ee.setOptional(N,z,"bindMatrix"),ee.setOptional(N,z,"bindMatrixInverse");let _e=z.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ee.setValue(N,"boneTexture",_e.boneTexture,Lt))}z.isBatchedMesh&&(ee.setOptional(N,z,"batchingTexture"),ee.setValue(N,"batchingTexture",z._matricesTexture,Lt),ee.setOptional(N,z,"batchingIdTexture"),ee.setValue(N,"batchingIdTexture",z._indirectTexture,Lt),ee.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ee.setValue(N,"batchingColorTexture",z._colorsTexture,Lt));let dn=X.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Q.update(z,X,Oe),(Yn||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,ee.setValue(N,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Ne.envMapIntensity.value=L.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Y0()),Yn){if(ee.setValue(N,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&cd(Ne,gi),mt&&k.fog===!0&&at.refreshFogUniforms(Ne,mt),at.refreshMaterialUniforms(Ne,k,ft,Ct,T.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){let _e=S,Ie=0;for(let Dn of T.state.lightProbeGridArray)Dn.texture!==null&&(_e.textures[Ie]=Dn.texture,_e.min[Ie]=Dn.boundingBox.min,_e.max[Ie]=Dn.boundingBox.max,_e.resolution[Ie]=Dn.resolution,Ie++);for(let Dn in _e)_e[Dn].length=Ie;Ne.probesSH.value=_e.textures,Ne.probesMin.value=_e.min,Ne.probesMax.value=_e.max,Ne.probesResolution.value=_e.resolution}is.upload(N,jl(Et),Ne,Lt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(is.upload(N,jl(Et),Ne,Lt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ee.setValue(N,"center",z.center),ee.setValue(N,"modelViewMatrix",z.modelViewMatrix),ee.setValue(N,"normalMatrix",z.normalMatrix),ee.setValue(N,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let Ie=0,Dn=_e.length;Ie<Dn;Ie++){let nc=_e[Ie];wt.update(nc,Oe),wt.bind(nc,Oe)}}return Oe}function cd(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function hd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,L,X){let k=It.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),It.get(v.texture).__webglTexture=L,It.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let X=It.get(v);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,X=0){nt=v,Y=L,H=X;let k=null,z=!1,mt=!1;if(v){let dt=It.get(v);if(dt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(v.viewport),vt.copy(v.scissor),Mt=v.scissorTest,pt.viewport(et),pt.scissor(vt),pt.setScissorTest(Mt),W=-1;return}else if(dt.__webglFramebuffer===void 0)Lt.setupRenderTarget(v);else if(dt.__hasExternalTextures)Lt.rebindTextures(v,It.get(v.texture).__webglTexture,It.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ht=v.depthTexture;if(dt.__boundDepthTexture!==Ht){if(Ht!==null&&It.has(Ht)&&(v.width!==Ht.image.width||v.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);let Tt=It.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?k=Tt[L][X]:k=Tt[L],z=!0):v.samples>0&&Lt.useMultisampledRTT(v)===!1?k=It.get(v).__webglMultisampledFramebuffer:Array.isArray(Tt)?k=Tt[X]:k=Tt,et.copy(v.viewport),vt.copy(v.scissor),Mt=v.scissorTest}else et.copy(At).multiplyScalar(ft).floor(),vt.copy(se).multiplyScalar(ft).floor(),Mt=oe;if(X!==0&&(k=G),pt.bindFramebuffer(N.FRAMEBUFFER,k)&&pt.drawBuffers(v,k),pt.viewport(et),pt.scissor(vt),pt.setScissorTest(Mt),z){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,X)}else if(mt){let dt=L;for(let yt=0;yt<v.textures.length;yt++){let Tt=It.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,Tt.__webglTexture,X,dt)}}else if(v!==null&&X!==0){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,X)}W=-1};function ec(v){let L=It.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=ie.textureFormatReadable(v.format),L.__typeReadable=ie.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,X,k,z,mt,St,dt=0){if(!(v&&v.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){pt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let Tt=v.textures[dt],Ht=Tt.format,Kt=Tt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=ec(Tt);if(bt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-k&&X>=0&&X<=v.height-z&&N.readPixels(L,X,k,z,ot.convert(Ht),ot.convert(Kt),mt)}finally{let Tt=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,L,X,k,z,mt,St,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(L>=0&&L<=v.width-k&&X>=0&&X<=v.height-z){pt.bindFramebuffer(N.FRAMEBUFFER,yt);let Tt=v.textures[dt],Ht=Tt.format,Kt=Tt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=ec(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(L,X,k,z,ot.convert(Ht),ot.convert(Kt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ee=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Ee);let de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ch(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qt),N.deleteSync(de),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,X=0){let k=Math.pow(2,-X),z=Math.floor(v.image.width*k),mt=Math.floor(v.image.height*k),St=L!==null?L.x:0,dt=L!==null?L.y:0;Lt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,St,dt,z,mt),pt.unbindTexture()},this.copyTextureToTexture=function(v,L,X=null,k=null,z=0,mt=0){let St,dt,yt,Tt,Ht,Kt,bt,Qt,Ee,de=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(X!==null)St=X.max.x-X.min.x,dt=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Ht=X.min.y,Kt=X.isBox3?X.min.z:0;else{let ee=Math.pow(2,-z);St=Math.floor(de.width*ee),dt=Math.floor(de.height*ee),v.isDataArrayTexture?yt=de.depth:v.isData3DTexture?yt=Math.floor(de.depth*ee):yt=1,Tt=0,Ht=0,Kt=0}k!==null?(bt=k.x,Qt=k.y,Ee=k.z):(bt=0,Qt=0,Ee=0);let he=ot.convert(L.format),Fe=ot.convert(L.type),Et;L.isData3DTexture?(Lt.setTexture3D(L,0),Et=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Lt.setTexture2DArray(L,0),Et=N.TEXTURE_2D_ARRAY):(Lt.setTexture2D(L,0),Et=N.TEXTURE_2D),pt.activeTexture(N.TEXTURE0),pt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),pt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),pt.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Ve=pt.getParameter(N.UNPACK_ROW_LENGTH),re=pt.getParameter(N.UNPACK_IMAGE_HEIGHT),mi=pt.getParameter(N.UNPACK_SKIP_PIXELS),Oe=pt.getParameter(N.UNPACK_SKIP_ROWS),tr=pt.getParameter(N.UNPACK_SKIP_IMAGES);pt.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,Kt);let Yn=v.isDataArrayTexture||v.isData3DTexture,gi=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let ee=It.get(v),Ne=It.get(L),dn=It.get(ee.__renderTarget),_e=It.get(Ne.__renderTarget);pt.bindFramebuffer(N.READ_FRAMEBUFFER,dn.__webglFramebuffer),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<yt;Ie++)Yn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(v).__webglTexture,z,Kt+Ie),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(L).__webglTexture,mt,Ee+Ie)),N.blitFramebuffer(Tt,Ht,Tt+St,Ht+dt,bt,Qt,bt+St,Qt+dt,N.DEPTH_BUFFER_BIT,N.NEAREST);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||It.has(v)){let ee=It.get(v),Ne=It.get(L);pt.bindFramebuffer(N.READ_FRAMEBUFFER,I),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let dn=0;dn<yt;dn++)Yn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ee.__webglTexture,z,Kt+dn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ee.__webglTexture,z),gi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,mt,Ee+dn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,mt),z!==0?N.blitFramebuffer(Tt,Ht,Tt+St,Ht+dt,bt,Qt,bt+St,Qt+dt,N.COLOR_BUFFER_BIT,N.NEAREST):gi?N.copyTexSubImage3D(Et,mt,bt,Qt,Ee+dn,Tt,Ht,St,dt):N.copyTexSubImage2D(Et,mt,bt,Qt,Tt,Ht,St,dt);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gi?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,Fe,de.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,de.data):N.texSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,Fe,de):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,bt,Qt,St,dt,he,Fe,de.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,bt,Qt,de.width,de.height,he,de.data):N.texSubImage2D(N.TEXTURE_2D,mt,bt,Qt,St,dt,he,Fe,de);pt.pixelStorei(N.UNPACK_ROW_LENGTH,Ve),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,mi),pt.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,tr),mt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(v){It.get(v).__webglFramebuffer===void 0&&Lt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Lt.setTextureCube(v,0):v.isData3DTexture?Lt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Lt.setTexture2DArray(v,0):Lt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){Y=0,H=0,nt=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Pl={skin:"#f5d5be",hair:"#3a2016",hairStyle:"updo_wavy",eyes:"#3d2516",blush:"#f6a4a4",lips:"#d86272",hatBand:"#d96677",shirtA:"#e86aa8",shirtB:"#8d5bc7",denim:"#355c96",boots:"#6a3d1c",freckles:!1,height:1},Jh={name:"Gofrik",furColor:"#d6a766",bellyColor:"#ebd2a9",earColor:"#b88546",noseColor:"#261c16",bowColor:"#d96677"},Zo={name:"Ezgi",dateText:"27 Kas\u0131m",giftCoins:2711,giftGems:27,badgeTitle:"\xC7iftli\u011Fin Krali\xE7esi Ezgi",message:"\u{1F382} \u0130yi ki Do\u011Fdun Ezgi! Seni \xE7ok seven e\u015Finden sonsuz sevgiyle haz\u0131rlanan \xF6zel \xE7iftli\u011Fin ve Gofrik seni bekliyor! \u{1F388}\u{1F33E}"},Jo={skin:["#fde5d2","#f5d5be","#e2b38f","#c68c5e","#9c6640","#6e4428"],hair:["#1d1310","#3a2016","#592e18","#7b4823","#a0622d","#d3a256","#efd28a"],hairStyle:["updo_wavy","long","ponytail","bob","braids"],eyes:["#2a1a10","#3d2516","#5b3a1a","#6a8c3a","#3a6fa8"],hatBand:["#d96677","#e05a9c","#8d5bc7","#e8463c","#3aa6a0","#f2b33d"]},Kh={updo_wavy:"Zarif Dalgal\u0131",long:"Uzun Dalgal\u0131",ponytail:"At Kuyru\u011Fu",bob:"K\xFCt",braids:"\xD6rg\xFCl\xFC"},Zt={wheat:{name:"Bu\u011Fday",icon:"\u{1F33E}",value:3,kind:"crop"},corn:{name:"M\u0131s\u0131r",icon:"\u{1F33D}",value:7,kind:"crop"},carrot:{name:"Havu\xE7",icon:"\u{1F955}",value:9,kind:"crop"},tomato:{name:"Domates",icon:"\u{1F345}",value:14,kind:"crop"},strawberry:{name:"\xC7ilek",icon:"\u{1F353}",value:18,kind:"crop"},sunflower:{name:"Ay\xE7i\xE7e\u011Fi",icon:"\u{1F33B}",value:22,kind:"crop"},chicken_feed:{name:"Tavuk Yemi",icon:"\u{1F33E}",badge:"\u{1F414}",value:4,kind:"feed"},cow_feed:{name:"\u0130nek Yemi",icon:"\u{1F33E}",badge:"\u{1F42E}",value:7,kind:"feed"},sheep_feed:{name:"Koyun Yemi",icon:"\u{1F33E}",badge:"\u{1F411}",value:8,kind:"feed"},pig_feed:{name:"Domuz Yemi",icon:"\u{1F33E}",badge:"\u{1F437}",value:10,kind:"feed"},egg:{name:"Yumurta",icon:"\u{1F95A}",value:12,kind:"animal"},milk:{name:"S\xFCt",icon:"\u{1F95B}",value:20,kind:"animal"},wool:{name:"Y\xFCn",icon:"\u{1F9F6}",value:30,kind:"animal"},truffle:{name:"Tr\xFCf Mantar\u0131",icon:"\u{1F344}",value:40,kind:"animal"},bread:{name:"Ekmek",icon:"\u{1F35E}",value:15,kind:"goods"},cornbread:{name:"M\u0131s\u0131r Ekme\u011Fi",icon:"\u{1FAD3}",value:30,kind:"goods"},cookie:{name:"Kurabiye",icon:"\u{1F36A}",value:85,kind:"goods"},cake:{name:"\xC7ilekli Pasta",icon:"\u{1F370}",value:140,kind:"goods"},butter:{name:"Tereya\u011F\u0131",icon:"\u{1F9C8}",value:50,kind:"goods"},cheese:{name:"Peynir",icon:"\u{1F9C0}",value:75,kind:"goods"},jam:{name:"\xC7ilek Re\xE7eli",icon:"\u{1F36F}",value:66,kind:"goods"},lollipop:{name:"Lolipop",icon:"\u{1F36D}",value:60,kind:"goods"},helva:{name:"Ay\xE7i\xE7ek Helvas\u0131",icon:"\u{1F96E}",value:110,kind:"goods"},hamsi:{name:"Hamsi",icon:"\u{1F41F}",value:8,kind:"fish"},cipura:{name:"\xC7ipura",icon:"\u{1F420}",value:14,kind:"fish"},sazan:{name:"Sazan",icon:"\u{1F421}",value:20,kind:"fish"},levrek:{name:"Levrek",icon:"\u{1F41F}",value:32,kind:"fish",rare:!0}},we={wheat:{seed:0,time:20,xp:1,level:1,yield:2,color:"#e8c24a",stem:"#9bbf3c"},corn:{seed:2,time:45,xp:2,level:2,yield:2,color:"#f6d33c",stem:"#5fa83a"},carrot:{seed:3,time:90,xp:3,level:3,yield:2,color:"#f08a24",stem:"#4fa83a"},tomato:{seed:5,time:180,xp:4,level:5,yield:2,color:"#e5402f",stem:"#3f9a35"},strawberry:{seed:7,time:300,xp:5,level:7,yield:2,color:"#e8344f",stem:"#3d9a3a"},sunflower:{seed:9,time:480,xp:6,level:9,yield:2,color:"#f7c51e",stem:"#4c9a35"}},Ko=["wheat","corn","carrot","tomato","strawberry","sunflower"],rn={chicken:{name:"Tavuk",icon:"\u{1F414}",feed:"chicken_feed",product:"egg",time:300,xp:2,level:1,price:20,penPrice:0,max:6},cow:{name:"\u0130nek",icon:"\u{1F42E}",feed:"cow_feed",product:"milk",time:600,xp:3,level:3,price:60,penPrice:180,max:5},sheep:{name:"Koyun",icon:"\u{1F411}",feed:"sheep_feed",product:"wool",time:900,xp:4,level:6,price:90,penPrice:350,max:5},pig:{name:"Domuz",icon:"\u{1F437}",feed:"pig_feed",product:"truffle",time:1200,xp:5,level:8,price:120,penPrice:500,max:5}},Ys=["chicken","cow","sheep","pig"];var wi={feedmill:{name:"Yem Fabrikas\u0131",icon:"\u{1F3ED}",level:1,price:0,slots:3},bakery:{name:"F\u0131r\u0131n",icon:"\u{1F956}",level:2,price:120,slots:3},dairy:{name:"Mand\u0131ra",icon:"\u{1F9C0}",level:4,price:350,slots:3},candy:{name:"\u015Eekerci",icon:"\u{1F36C}",level:7,price:600,slots:3}};var hn={chicken_feed:{building:"feedmill",in:{wheat:2,corn:1},out:3,time:60,xp:1,level:1},cow_feed:{building:"feedmill",in:{corn:2,wheat:1},out:3,time:120,xp:1,level:3},sheep_feed:{building:"feedmill",in:{carrot:2,wheat:1},out:3,time:180,xp:2,level:6},pig_feed:{building:"feedmill",in:{tomato:1,carrot:2},out:3,time:240,xp:2,level:8},bread:{building:"bakery",in:{wheat:3},out:1,time:180,xp:3,level:2},cornbread:{building:"bakery",in:{corn:2,egg:1},out:1,time:360,xp:4,level:4},cookie:{building:"bakery",in:{wheat:2,egg:1,butter:1},out:1,time:600,xp:6,level:6},cake:{building:"bakery",in:{wheat:2,egg:2,milk:1,strawberry:2},out:1,time:900,xp:9,level:8},butter:{building:"dairy",in:{milk:2},out:1,time:420,xp:5,level:4},cheese:{building:"dairy",in:{milk:3},out:1,time:600,xp:6,level:5},jam:{building:"candy",in:{strawberry:3},out:1,time:600,xp:6,level:7},lollipop:{building:"candy",in:{strawberry:2,corn:2},out:1,time:480,xp:5,level:7},helva:{building:"candy",in:{sunflower:3,milk:1},out:1,time:900,xp:7,level:9}},hi={fence:{name:"\xC7it",icon:"\u{1FAB5}",price:5,level:1},flowers:{name:"\xC7i\xE7ek",icon:"\u{1F337}",price:8,level:1},path:{name:"Ta\u015F Yol",icon:"\u{1FAA8}",price:3,level:1},bench:{name:"Bank",icon:"\u{1FA91}",price:25,level:2},lamp:{name:"Fener",icon:"\u{1F3EE}",price:30,level:3},bush:{name:"\xC7al\u0131",icon:"\u{1F333}",price:12,level:2},hay:{name:"Saman Balyas\u0131",icon:"\u{1F7E8}",price:10,level:2},well:{name:"Kuyu",icon:"\u{1FAA3}",price:80,level:5},scarecrow:{name:"Korkuluk",icon:"\u{1F383}",price:50,level:4},windmill:{name:"Yel De\u011Firmeni",icon:"\u{1F32C}\uFE0F",price:150,level:6}},Qh=Object.keys(hi),Qo=30;function jo(i){return Math.floor(15*Math.pow(i,1.7))}function jh(i){return 15*i}var Ll=6,Dl=24;var ta=50,tu=25;function eu(i){return Math.round(80*Math.pow(i+1,1.6))}function nu(i,t){return Math.round(rn[i].price*Math.pow(1.35,Math.max(0,t-1)))}var Nl=4,Ul=3,ea=4;function iu(i){return Math.min(6,3+Math.floor((i-1)/2))}var Fl=45;var su=["Ay\u015Fe Teyze","Mehmet Amca","Zeynep","Can","Elif","Hasan Dede","Fatma Nine","Burak","Selin","Emre","Deniz","Kerem","Merve","Ali Usta","Nazl\u0131"],$e={half:22},kt={house:{x:-11,z:-12,w:5,d:5},feedmill:{x:-3,z:-13,w:4,d:4},bakery:{x:3,z:-13,w:4,d:4},dairy:{x:9,z:-13,w:4,d:4},candy:{x:14,z:-6,w:4,d:4},storage:{x:-15.5,z:-5,w:4,d:4},pens:{chicken:{x:-9,z:8,w:6,d:5},cow:{x:-1,z:9,w:7,d:6},sheep:{x:7,z:9,w:7,d:6},pig:{x:14,z:2,w:6,d:5}},board:{x:-15,z:6},truck:{x:-19,z:6},shop:{x:-15,z:1},lake:{x:14,z:16,r:4},dock:{x:9.2,z:16},road:{x:-19,w:3},plots:{x0:-5.25,z0:-6.6,dx:2.1,dz:2.1,cols:6}};function $s(i){let t=kt.plots;return{x:t.x0+i%t.cols*t.dx,z:t.z0+Math.floor(i/t.cols)*t.dz}}var cu=1,$0=2e4;function Zs(i){let t=i.rng=i.rng+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(i,t,e){return t+Math.floor(Zs(i)*(e-t+1))}function Z0(i,t){return t[Math.floor(Zs(i)*t.length)]}function Ol(i=Date.now(),t=(i^1540483477)>>>0){let e={v:cu,createdAt:i,savedAt:i,rng:t>>>0,coins:100,gems:10,birthdayClaimed:!1,xp:0,level:1,items:{wheat:6,corn:2},cap:ta,capLevel:0,plots:[],pens:{},buildings:{},orders:[],truck:{backAt:0},shop:{slots:[]},decor:[],nextId:1,daily:{last:"",streak:0},look:{...Pl},settings:{music:.5,sfx:.8,season:"auto",shake:!0},stats:{harvests:0,orders:0,fish:0,sold:0,petted:0},tutorial:0};for(let n=0;n<Ll;n++)e.plots.push({crop:null,at:0});e.plots[0]={crop:"wheat",at:i-we.wheat.time*1e3},e.plots[1]={crop:"wheat",at:i-we.wheat.time*1e3};for(let n of Ys)e.pens[n]={owned:n==="chicken",animals:[]};e.pens.chicken.animals.push({fedAt:0},{fedAt:0});for(let n of Object.keys(wi))e.buildings[n]={owned:n==="feedmill",queue:[]};for(let n=0;n<ea;n++)e.shop.slots.push(null);return e.decor.push({id:e.nextId++,type:"flowers",x:-8,z:-8,rot:0}),e.decor.push({id:e.nextId++,type:"bench",x:-7,z:-9,rot:0}),bu(e,i),e}function hu(i,t=Date.now()){let e=Ol(t);if(!i||typeof i!="object")return e;let n={...e,...i};n.v=cu;let s=(r,o,a=0,l=1e12)=>Number.isFinite(r)?Math.min(l,Math.max(a,r)):o;if(n.coins=Math.floor(s(i.coins,e.coins)),n.gems=Math.floor(s(i.gems,e.gems)),n.birthdayClaimed=!!i.birthdayClaimed,n.xp=Math.floor(s(i.xp,0)),n.level=Math.floor(s(i.level,1,1,Qo)),n.cap=Math.floor(s(i.cap,ta,ta,1e5)),n.capLevel=Math.floor(s(i.capLevel,0,0,1e3)),n.rng=i.rng>>>0||e.rng,n.items={},i.items&&typeof i.items=="object"){for(let r of Object.keys(i.items))if(Zt[r]){let o=Math.floor(s(i.items[r],0));o>0&&(n.items[r]=o)}}if(n.plots=Array.isArray(i.plots)?i.plots.slice(0,Dl).map(r=>({crop:r&&we[r.crop]?r.crop:null,at:s(r&&r.at,0)})):e.plots,n.plots.length<Ll&&(n.plots=e.plots),n.pens={...e.pens},i.pens)for(let r of Ys){let o=i.pens[r];o&&(n.pens[r]={owned:!!o.owned,animals:Array.isArray(o.animals)?o.animals.slice(0,rn[r].max).map(a=>({fedAt:s(a&&a.fedAt,0)})):[]})}if(n.buildings={...e.buildings},i.buildings)for(let r of Object.keys(wi)){let o=i.buildings[r];o&&(n.buildings[r]={owned:!!o.owned,queue:Array.isArray(o.queue)?o.queue.filter(a=>a&&hn[a.r]&&hn[a.r].building===r).slice(0,wi[r].slots).map(a=>({r:a.r,start:s(a.start,t),end:s(a.end,t)})):[]})}n.orders=Array.isArray(i.orders)?i.orders.filter(r=>r&&(r.wait||Array.isArray(r.items)&&r.items.every(o=>Zt[o.k]))):[],n.truck={backAt:s(i.truck&&i.truck.backAt,0)},n.shop={slots:[]};for(let r=0;r<ea;r++){let o=i.shop&&i.shop.slots&&i.shop.slots[r];n.shop.slots.push(o&&Zt[o.k]?{k:o.k,q:Math.floor(s(o.q,1,1,99)),price:Math.floor(s(o.price,1,1,1e5)),sellAt:s(o.sellAt,t),buyer:String(o.buyer||"")}:null)}return n.decor=Array.isArray(i.decor)?i.decor.filter(r=>r&&hi[r.type]).map(r=>({id:r.id|0,type:r.type,x:Math.round(s(r.x,0,-$e.half,$e.half)),z:Math.round(s(r.z,0,-$e.half,$e.half)),rot:(r.rot|0)&3})):[],n.nextId=Math.max(s(i.nextId,1),...n.decor.map(r=>r.id+1),1),n.daily={last:String(i.daily&&i.daily.last||""),streak:Math.floor(s(i.daily&&i.daily.streak,0,0,1e4))},n.look={...Pl,...i.look||{}},n.settings={...e.settings,...i.settings||{}},n.stats={...e.stats,...i.stats||{}},bu(n,t),n}function Js(i){let t=0;for(let e in i.items)t+=i.items[e];return t}function J0(i){return i.cap-Js(i)}function ui(i,t){return i.items[t]||0}function uu(i,t){for(let e in t)if(ui(i,e)<t[e])return!1;return!0}function na(i,t){return J0(i)>=t}function ia(i,t,e){i.items[t]=(i.items[t]||0)+e}function sa(i,t){for(let e in t)i.items[e]-=t[e],i.items[e]<=0&&delete i.items[e]}function du(i){let t=eu(i.capLevel);return i.coins<t?Jt("Yeterli alt\u0131n yok"):(i.coins-=t,i.capLevel++,i.cap+=tu,{ok:!0,price:t})}function Jt(i){return{ok:!1,err:i}}function di(i,t){let e=[];for(i.xp+=t;i.level<Qo&&i.xp>=jo(i.level);){i.xp-=jo(i.level),i.level++;let n=jh(i.level);i.coins+=n,e.push({level:i.level,coins:n})}return i.level>=Qo&&(i.xp=Math.min(i.xp,jo(i.level))),e}function fu(i,t){return we[t]&&i.level>=we[t].level}function pu(i,t){return hn[t]&&i.level>=hn[t].level}function Ln(i,t,e){let n=i.plots[t];if(!n||!n.crop)return{state:"empty",progress:0,remaining:0};let s=we[n.crop].time*1e3,r=e-n.at;return r>=s?{state:"ready",progress:1,remaining:0,crop:n.crop}:{state:"growing",progress:Math.max(0,r/s),remaining:s-r,crop:n.crop}}function mu(i,t,e,n){let s=i.plots[t];if(!s)return Jt("Tarla yok");if(s.crop)return Jt("Tarla dolu");if(!fu(i,e))return Jt("Bu ekin hen\xFCz kilitli");let r=we[e].seed;return i.coins<r?Jt("Tohum i\xE7in yeterli alt\u0131n yok"):(i.coins-=r,s.crop=e,s.at=n,{ok:!0,cost:r})}function gu(i,t,e){let n=Ln(i,t,e);if(n.state!=="ready")return Jt(n.state==="empty"?"Tarla bo\u015F":"Hen\xFCz olmad\u0131");let s=we[n.crop];if(!na(i,s.yield))return Jt("Ambar dolu!");ia(i,n.crop,s.yield),i.plots[t]={crop:null,at:0},i.stats.harvests++;let r=di(i,s.xp);return{ok:!0,item:n.crop,qty:s.yield,xp:s.xp,ups:r}}function Ks(i,t,e,n){let s=i.pens[t]&&i.pens[t].animals[e];if(!s)return{state:"none"};if(!s.fedAt)return{state:"hungry",progress:0,remaining:0};let r=rn[t].time*1e3,o=n-s.fedAt;return o>=r?{state:"ready",progress:1,remaining:0}:{state:"producing",progress:Math.max(0,o/r),remaining:r-o}}function _u(i,t){let e=i.pens[t];if(!e.owned)return Jt("\xD6nce bar\u0131nak gerekli");if(e.animals.length>=rn[t].max)return Jt("Bar\u0131nak dolu");let n=nu(t,e.animals.length);return i.coins<n?Jt("Yeterli alt\u0131n yok"):(i.coins-=n,e.animals.push({fedAt:0}),{ok:!0,price:n,index:e.animals.length-1})}function xu(i,t,e,n){let s=Ks(i,t,e,n);if(s.state!=="hungry")return Jt(s.state==="ready"?"\xD6nce \xFCr\xFCn\xFC topla":"\u015Eu an tok");let r=rn[t].feed;return ui(i,r)<1?Jt(`${Zt[r].name} yok \u2014 Yem Fabrikas\u0131'nda \xFCret`):(sa(i,{[r]:1}),i.pens[t].animals[e].fedAt=n,{ok:!0,feed:r})}function yu(i,t,e,n){if(Ks(i,t,e,n).state!=="ready")return Jt("Hen\xFCz haz\u0131r de\u011Fil");if(!na(i,1))return Jt("Ambar dolu!");let r=rn[t].product;ia(i,r,1),i.pens[t].animals[e].fedAt=0;let o=di(i,rn[t].xp);return{ok:!0,item:r,qty:1,xp:rn[t].xp,ups:o}}function vu(i,t,e,n){let s=i.buildings[t],r=hn[e];if(!s||!s.owned)return Jt("Bina yok");if(!r||r.building!==t)return Jt("Ge\xE7ersiz tarif");if(!pu(i,e))return Jt(`Seviye ${r.level} gerekli`);if(s.queue.length>=wi[t].slots)return Jt("S\u0131ra dolu");if(!uu(i,r.in))return Jt("Malzeme eksik");sa(i,r.in);let o=s.queue.length?s.queue[s.queue.length-1].end:n,a=Math.max(n,o);return s.queue.push({r:e,start:a,end:a+r.time*1e3}),{ok:!0}}function Mu(i,t,e){let n=i.buildings[t],s=n.queue.filter(o=>o.end<=e).length,r=n.queue.find(o=>o.end>e);return{done:s,queued:n.queue.length,current:r?{r:r.r,progress:Math.min(1,Math.max(0,(e-r.start)/(r.end-r.start))),remaining:r.end-e,started:e>=r.start}:null}}function Su(i,t,e){let n=i.buildings[t],s=[],r=0,o=!1;for(;n.queue.length&&n.queue[0].end<=e;){let l=n.queue[0],c=hn[l.r];if(!na(i,c.out)){o=!0;break}ia(i,l.r,c.out),n.queue.shift(),s.push({item:l.r,qty:c.out}),r+=c.xp}if(!s.length)return Jt(o?"Ambar dolu!":"Haz\u0131r \xFCr\xFCn yok");let a=di(i,r);return{ok:!0,got:s,xp:r,ups:a,blocked:o}}function K0(i){let t=[];for(let e of Ko)fu(i,e)&&t.push(e);for(let e of Ys)i.pens[e].owned&&i.pens[e].animals.length&&t.push(rn[e].product);for(let e of Object.keys(hn)){let n=hn[e];Zt[e].kind==="goods"&&i.buildings[n.building].owned&&pu(i,e)&&t.push(e)}return t}function ou(i){let t=K0(i),e=Math.min(t.length,ru(i,1,i.level>=4?3:2)),n=new Set;for(;n.size<e;){let o=t.map(l=>n.has(l)?0:1/Math.sqrt(Zt[l].value)),a=Zs(i)*o.reduce((l,c)=>l+c,0);for(let l=0;l<t.length;l++)if(a-=o[l],a<=0&&o[l]>0){n.add(t[l]);break}a>0&&n.add(t.find(l=>!n.has(l)))}let s=[...n].map(o=>{let a=Zt[o].value,l=a<=10?6:a<=25?4:a<=60?2:1;return{k:o,q:ru(i,1,Math.max(1,Math.min(l,1+Math.floor(i.level/2))))}}),r=s.reduce((o,a)=>o+Zt[a.k].value*a.q,0);return{items:s,coins:Math.round(r*1.35+4),xp:Math.max(1,Math.round(r/5))}}function bu(i,t){let e=iu(i.level);for(let n=0;n<i.orders.length;n++){let s=i.orders[n];s.wait&&s.wait<=t&&(i.orders[n]=ou(i))}for(;i.orders.length<e;)i.orders.push(ou(i))}function Eu(i,t,e){let n=i.orders[t];if(!n||n.wait)return Jt("Sipari\u015F yok");if(e<i.truck.backAt)return Jt("Kamyon yolda, birazdan d\xF6ner");let s={};for(let o of n.items)s[o.k]=o.q;if(!uu(i,s))return Jt("\xDCr\xFCnler eksik");sa(i,s),i.coins+=n.coins;let r=di(i,n.xp);return i.truck.backAt=e+$0,i.orders[t]={wait:e+Fl*1e3/3},i.stats.orders++,{ok:!0,coins:n.coins,xp:n.xp,ups:r}}function Tu(i,t,e){return!i.orders[t]||i.orders[t].wait?Jt("Sipari\u015F yok"):(i.orders[t]={wait:e+Fl*1e3},{ok:!0})}function au(i,t){return Math.max(1,Math.round(Zt[i].value*t*1.5))}function wu(i,t,e,n,s,r){if(i.level<Ul)return Jt(`Seviye ${Ul} gerekli`);if(t<0||t>=ea)return Jt("Ge\xE7ersiz raf");if(i.shop.slots[t])return Jt("Raf dolu");if(n=Math.floor(n),s=Math.floor(s),!Zt[e]||n<1||n>10)return Jt("Ge\xE7ersiz miktar");if(ui(i,e)<n)return Jt("Ambarda yeterli yok");if(s<1||s>au(e,n))return Jt("Ge\xE7ersiz fiyat");sa(i,{[e]:n});let a=(15+s/au(e,n)*75+Zs(i)*30)*1e3;return i.shop.slots[t]={k:e,q:n,price:s,sellAt:r+a,buyer:Z0(i,su)},{ok:!0,sellAt:r+a}}function Bl(i,t,e){let n=i.shop.slots[t];return n?n.sellAt<=e?{state:"sold",...n}:{state:"listed",remaining:n.sellAt-e,...n}:{state:"empty"}}function Au(i,t,e){let n=Bl(i,t,e);return n.state!=="sold"?Jt("Hen\xFCz sat\u0131lmad\u0131"):(i.coins+=n.price,i.shop.slots[t]=null,i.stats.sold++,{ok:!0,coins:n.price,buyer:n.buyer})}function Ru(i,t,e){if(i.level<Nl)return Jt(`Seviye ${Nl} gerekli`);if(!(t>=.15))return{ok:!0,escaped:!0};if(!na(i,1))return Jt("Ambar dolu!");let n=Zs(i)*.6+t*.5,s=n>.95?"levrek":n>.7?"sazan":n>.4?"cipura":"hamsi";ia(i,s,1),i.stats.fish++;let r=Math.max(1,Math.round(Zt[s].value/8)),o=di(i,r);return{ok:!0,item:s,qty:1,xp:r,ups:o}}function lu(i,t,e,n=0){return Math.abs(t-i.x)<i.w/2+n&&Math.abs(e-i.z)<i.d/2+n}function Q0(){let i=kt,t=[i.house,i.feedmill,i.bakery,i.dairy,i.candy,i.storage,...Object.values(i.pens)];return t.push({x:i.board.x,z:i.board.z,w:2,d:1}),t.push({x:i.shop.x,z:i.shop.z,w:3,d:2}),t.push({x:i.road.x,z:0,w:i.road.w,d:$e.half*2+4}),t}function j0(i){let t=Math.ceil(Dl/kt.plots.cols),e=kt.plots;return{x:e.x0+(e.cols-1)*e.dx/2,z:e.z0+(t-1)*e.dz/2,w:e.cols*e.dx,d:t*e.dz}}function t_(i,t,e=0){let n=kt.lake;return Math.hypot(i-n.x,t-n.z)<n.r+e}function e_(i,t,e,n=-1){let s=$e.half-1;if(Math.abs(t)>s||Math.abs(e)>s)return!1;for(let r of Q0())if(lu(r,t,e,.5))return!1;if(lu(j0(i),t,e,.5)||t_(t,e,1))return!1;for(let r of i.decor)if(r.id!==n&&r.x===t&&r.z===e)return!1;return!0}function Cu(i,t,e,n,s=0){let r=hi[t];if(!r)return Jt("Ge\xE7ersiz");if(i.level<r.level)return Jt(`Seviye ${r.level} gerekli`);if(i.coins<r.price)return Jt("Yeterli alt\u0131n yok");if(e=Math.round(e),n=Math.round(n),!e_(i,e,n))return Jt("Buraya yerle\u015Ftirilemez");i.coins-=r.price;let o={id:i.nextId++,type:t,x:e,z:n,rot:s&3};return i.decor.push(o),{ok:!0,item:o}}function Iu(i){return i.birthdayClaimed?Jt("Do\u011Fum g\xFCn\xFC hediyesi zaten al\u0131nd\u0131!"):(i.birthdayClaimed=!0,i.coins+=2711,i.gems=(i.gems||0)+27,{ok:!0,coins:2711,gems:27,xp:50,ups:di(i,50)})}function fi(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return e?`${e}sa ${n}dk`:n?`${n}:${String(s).padStart(2,"0")}`:`${s}sn`}function Pu(i,t,e){let n=0,s=0,r=0,o=0;i.plots.forEach((a,l)=>{a.crop&&a.at+we[a.crop].time*1e3>t&&Ln(i,l,e).state==="ready"&&n++});for(let a of Ys)i.pens[a].animals.forEach((l,c)=>{l.fedAt&&l.fedAt+rn[a].time*1e3>t&&Ks(i,a,c,e).state==="ready"&&s++});for(let a in i.buildings)r+=i.buildings[a].queue.filter(l=>l.end>t&&l.end<=e).length;return i.shop.slots.forEach(a=>{a&&a.sellAt>t&&a.sellAt<=e&&o++}),{crops:n,animals:s,goods:r,sold:o,away:e-t}}var kl={};function K(i,t={}){let e=`${i}_${t.roughness??.7}_${t.metalness??.1}_${t.emissive??0}`;return kl[e]||(kl[e]=new cn({color:new Ut(i),roughness:t.roughness??.7,metalness:t.metalness??.1,emissive:t.emissive?new Ut(t.emissive):new Ut(0),flatShading:t.flatShading??!0})),kl[e]}function zl(i){let t=new Dt;t.name="Ezgi";let e=K(i.skin||"#f5d5be",{roughness:.6}),n=K(i.hair||"#3a2016",{roughness:.8}),s=K(i.eyes||"#3d2516",{roughness:.2}),r=K(i.lips||"#d86272",{roughness:.4}),o=K(i.blush||"#f6a4a4",{roughness:.9}),a=K(i.shirtA||"#e86aa8",{roughness:.8}),l=K(i.denim||"#355c96",{roughness:.75}),c=K(i.boots||"#6a3d1c",{roughness:.7}),h=K("#e5c276",{roughness:.85}),d=K(i.hatBand||"#d96677",{roughness:.6}),u=new Dt;u.position.y=1.6;let f=new $t(.32,16,14);f.scale(1,1.1,.95);let _=new F(f,e);_.castShadow=!0,u.add(_);let M=new $t(.045,8,8);M.scale(.8,1.2,.5);let m=new F(M,s);m.position.set(-.11,.04,.29);let p=m.clone();p.position.x=.11,u.add(m,p);let y=new $t(.015,6,6),E=K("#ffffff",{roughness:.1}),S=new F(y,E);S.position.set(-.1,.06,.31);let A=S.clone();A.position.x=.12,u.add(S,A);let T=new An(.055,8),g=new F(T,o);g.position.set(-.16,-.05,.28),g.rotation.y=-.3;let b=g.clone();b.position.x=.16,b.rotation.y=.3,u.add(g,b);let P=new si(.05,.015,6,8,Math.PI),R=new F(P,r);R.position.set(0,-.12,.28),R.rotation.z=Math.PI,u.add(R);let D=new Dt,U=new $t(.35,12,10);U.scale(1.05,1.15,1.1);let G=new F(U,n);G.position.set(0,.06,-.06),D.add(G);let I=new Gt(.04,.02,.42,8);I.rotateZ(.2);let V=new F(I,n);V.position.set(-.25,-.12,.15);let Y=V.clone();Y.position.x=.25,Y.rotation.z=-.4,D.add(V,Y);let H=new $t(.18,10,10);H.scale(1.1,.9,.9);let nt=new F(H,n);nt.position.set(0,.12,-.32),D.add(nt),u.add(D);let W=K("#ffffff",{roughness:.5}),tt=new si(.24,.05,8,16);tt.rotateX(Math.PI/2);let et=new F(tt,W);et.position.set(0,-.28,.02),u.add(et);let vt=new Gt(.06,.09,.45,8);vt.rotateZ(-.25),vt.rotateX(.15);let Mt=new F(vt,W);Mt.position.set(-.22,-.46,-.05),u.add(Mt);let q=new Dt;q.position.set(0,.26,.02),q.rotation.x=-.1;let rt=new Gt(.55,.58,.04,16),gt=new F(rt,h);q.add(gt);let Ct=new Gt(.32,.35,.24,16),ft=new F(Ct,h);ft.position.y=.12,q.add(ft);let zt=new Gt(.355,.355,.07,16),ge=new F(zt,d);ge.position.y=.05,q.add(ge),u.add(q),t.add(u);let At=new Dt;At.position.y=1.05;let se=new Gt(.22,.26,.55,10),oe=new F(se,a);oe.castShadow=!0,At.add(oe);let Yt=new Rt(.32,.34,.34),Se=new F(Yt,l);Se.position.set(0,-.08,.02),At.add(Se);let ye=new Rt(.16,.12,.03),De=new F(ye,K("#2b4c7e",{roughness:.8}));De.position.set(0,-.08,.19),At.add(De);let ue=new Gt(.025,.025,.015,8);ue.rotateX(Math.PI/2);let on=K("#f1c40f",{metalness:.8,roughness:.3}),xe=new F(ue,on);xe.position.set(-.1,.06,.18);let He=xe.clone();He.position.x=.1,At.add(xe,He),t.add(At);let Ue=new Gt(.06,.055,.45,8);Ue.translate(0,-.2,0);let be=new Dt;be.position.set(-.28,1.25,0);let N=new F(Ue,a);N.castShadow=!0,be.add(N);let Ze=new $t(.055,8,8),ce=new F(Ze,e);ce.position.set(0,-.42,0),be.add(ce);let ie=new Dt;ie.position.set(.28,1.25,0);let pt=new F(Ue,a);pt.castShadow=!0,ie.add(pt);let ve=ce.clone();ie.add(ve),t.add(be,ie);let It=new Gt(.08,.075,.52,8);It.translate(0,-.24,0);let Lt=new Dt;Lt.position.set(-.12,.72,0);let w=new F(It,l);w.castShadow=!0,Lt.add(w);let x=new Rt(.14,.16,.22);x.translate(0,-.06,.04);let B=new F(x,c);B.position.set(0,-.48,0),Lt.add(B);let it=new Dt;it.position.set(.12,.72,0);let j=new F(It,l);j.castShadow=!0,it.add(j);let at=B.clone();return it.add(at),t.add(Lt,it),t.userData={head:u,leftArm:be,rightArm:ie,leftLeg:Lt,rightLeg:it,walkTime:0,isWalking:!1,update(lt){if(this.isWalking){this.walkTime+=lt*9;let Z=Math.sin(this.walkTime)*.55;Lt.rotation.x=Z,it.rotation.x=-Z,be.rotation.x=-Z*.7,ie.rotation.x=Z*.7,u.position.y=1.6+Math.abs(Math.sin(this.walkTime*2))*.04}else this.walkTime+=lt*2.5,Lt.rotation.x=0,it.rotation.x=0,be.rotation.x=Math.sin(this.walkTime)*.05,ie.rotation.x=-Math.sin(this.walkTime)*.05,u.position.y=1.6+Math.sin(this.walkTime)*.015}},t}function Lu(){let i=new Dt;i.name="Gofrik";let t=Jh,e=K(t.furColor,{roughness:.9}),n=K(t.bellyColor,{roughness:.95}),s=K(t.earColor,{roughness:.95}),r=K(t.noseColor,{roughness:.3}),o=K("#15100c",{roughness:.1}),a=K(t.bowColor,{roughness:.5}),l=new $t(.32,12,10);l.scale(1.2,.95,.85);let c=new F(l,e);c.position.set(0,.42,0),c.castShadow=!0,i.add(c);let h=new $t(.2,8,8),d=new F(h,n);d.position.set(0,.45,.22),i.add(d);let u=new Dt;u.position.set(0,.65,.28);let f=new $t(.24,12,10);f.scale(1.05,1,1.1);let _=new F(f,e);_.castShadow=!0,u.add(_);let M=new $t(.12,10,8);M.scale(1.1,.85,1.3);let m=new F(M,n);m.position.set(0,-.04,.18),u.add(m);let p=new $t(.04,8,8),y=new F(p,r);y.position.set(0,.02,.3),u.add(y);let E=new $t(.035,8,8),S=new F(E,o);S.position.set(-.09,.08,.22);let A=S.clone();A.position.x=.09,u.add(S,A);let T=new Gt(.04,.08,.22,8);T.rotateZ(.4);let g=new F(T,s);g.position.set(-.2,.04,.02);let b=g.clone();b.position.x=.2,b.rotation.z=-.4,u.add(g,b);let P=new $t(.09,8,8);P.scale(1.2,.8,1);let R=new F(P,e);R.position.set(-.16,-.06,.12);let D=R.clone();D.position.x=.16;let U=new F(new $t(.1,8,8),e);U.position.set(0,.22,.04),u.add(R,D,U),i.add(u);let G=new Dt;G.position.set(0,.52,.32);let I=new $t(.035,8,8),V=new F(I,a);G.add(V);let Y=new Me(.08,.12,6);Y.rotateZ(Math.PI/2);let H=new F(Y,a);H.position.set(-.08,0,0);let nt=H.clone();nt.rotation.z=-Math.PI/2,nt.position.x=.08,G.add(H,nt),i.add(G);let W=new Dt;W.position.set(0,.48,-.32);let tt=new Gt(.03,.06,.26,8);tt.translate(0,.12,0),tt.rotateX(-.5);let et=new F(tt,e);W.add(et),i.add(W);let vt=new Gt(.05,.045,.28,8);vt.translate(0,-.12,0);let Mt=new F(vt,e);Mt.position.set(-.14,.26,.18),Mt.castShadow=!0;let q=Mt.clone();q.position.x=.14;let rt=Mt.clone();rt.position.set(-.14,.26,-.18);let gt=Mt.clone();return gt.position.set(.14,.26,-.18),i.add(Mt,q,rt,gt),i.userData={head:u,tail:W,flLeg:Mt,frLeg:q,blLeg:rt,brLeg:gt,trotTime:0,isMoving:!1,update(Ct){if(W.rotation.y=Math.sin(Date.now()*.012)*.45,this.isMoving){this.trotTime+=Ct*14;let ft=Math.sin(this.trotTime)*.6;Mt.rotation.x=ft,gt.rotation.x=ft,q.rotation.x=-ft,rt.rotation.x=-ft,u.position.y=.65+Math.sin(this.trotTime*2)*.03}else Mt.rotation.x=0,q.rotation.x=0,rt.rotation.x=0,gt.rotation.x=0,u.position.y=.65+Math.sin(Date.now()*.003)*.01}},i}function Du(){let i=new Dt;i.name="BirthdayGift";let t=new Rt(.8,.7,.8),e=K("#e84393",{roughness:.4,metalness:.2}),n=new F(t,e);n.position.y=.35,n.castShadow=!0,i.add(n);let s=new Rt(.86,.16,.86),r=new F(s,e);r.position.y=.74,i.add(r);let o=K("#f1c40f",{metalness:.8,roughness:.25}),a=new Rt(.88,.72,.15),l=new F(a,o);l.position.y=.36;let c=new Rt(.15,.72,.88),h=new F(c,o);h.position.y=.36,i.add(l,h);let d=new si(.16,.05,8,12),u=new F(d,o);u.position.set(-.12,.9,0),u.rotation.y=.5;let f=u.clone();f.position.x=.12,f.rotation.y=-.5,i.add(u,f);let _=["#ff7675","#74b9ff","#55efc4","#ffeaa7","#a29bfe"];return _.forEach((M,m)=>{let p=m/_.length*Math.PI*2,y=new Dt;y.position.set(Math.cos(p)*.45,1.8+m*.18,Math.sin(p)*.45);let E=new $t(.22,12,12);E.scale(1,1.25,1);let S=new F(E,K(M,{roughness:.3,metalness:.1}));y.add(S);let A=new Gt(.005,.005,1,4),T=new F(A,K("#ffffff"));T.position.y=-.6,y.add(T),i.add(y)}),i}function Nu(){let i=new Dt;i.name="House";let t=K("#d35400",{roughness:.8}),e=K("#c0392b",{roughness:.6}),n=K("#f5e6ca",{roughness:.85}),s=new Rt(4.2,3.2,3.6),r=new F(s,n);r.position.y=1.6,r.castShadow=!0,r.receiveShadow=!0,i.add(r);let o=new Me(3.3,1.8,4);o.rotateY(Math.PI/4),o.scale(1.3,1,1.1);let a=new F(o,e);a.position.y=4,a.castShadow=!0,i.add(a);let l=new Rt(.6,1.6,.6),c=new F(l,K("#7f8c8d"));c.position.set(1.2,4.4,.5),i.add(c);let h=new Rt(3.6,.2,1.4),d=new F(h,t);d.position.set(0,.1,2.2),i.add(d);let u=new Rt(.9,1.6,.05),f=new F(u,t);f.position.set(0,.9,1.82),i.add(f);let _=K("#f1c40f",{emissive:"#f39c12",roughness:.2}),M=new Rt(.8,.8,.05),m=new F(M,_);m.position.set(-1.2,1.8,1.82);let p=m.clone();return p.position.x=1.2,i.add(m,p),i}function Uu(){let i=new Dt;i.name="Feedmill";let t=new Gt(1.4,1.6,3.4,14),e=new F(t,K("#8d6e63"));e.position.y=1.7,e.castShadow=!0,i.add(e);let n=new Me(1.8,1.4,14),s=new F(n,K("#5d4037"));s.position.y=4.1,i.add(s);let r=new Dt;r.position.set(0,3.2,1.55);let o=new Gt(.2,.2,.2,8);o.rotateX(Math.PI/2);let a=new F(o,K("#f39c12"));r.add(a);let l=K("#efebe9");for(let c=0;c<4;c++){let h=new Rt(.35,1.8,.04);h.translate(0,.9,0);let d=new F(h,l);d.rotation.z=c*Math.PI/2,r.add(d)}return i.add(r),i.userData={blades:r,update(c){r.rotation.z+=c*1.5}},i}function Fu(){let i=new Dt;i.name="Bakery";let t=new Rt(3.4,2.4,3),e=new F(t,K("#e0a96d"));e.position.y=1.2,e.castShadow=!0,i.add(e);let n=new Me(2.6,1.3,4);n.rotateY(Math.PI/4),n.scale(1.2,1,1.1);let s=new F(n,K("#d35400"));s.position.y=2.9,i.add(s);let r=new $t(.7,10,8);r.scale(1,.8,1);let o=new F(r,K("#7f8c8d"));o.position.set(.9,.6,1.5),i.add(o);let a=new An(.22,8),l=new _n({color:16733986}),c=new F(a,l);c.position.set(.9,.55,2.15),i.add(c);let h=new Rt(.5,1.4,.5),d=new F(h,K("#6d4c41"));d.position.set(-.9,3.2,-.4),i.add(d);let u=new Rt(1,.6,.5),f=new F(u,K("#8d6e63"));f.position.set(-.8,.3,1.6),i.add(f);let _=new Zi(.08,.16,6,8);_.rotateZ(Math.PI/2);let M=K("#d4a373"),m=new F(_,M);m.position.set(-.95,.68,1.6);let p=m.clone();return p.position.x=-.65,i.add(m,p),i.userData={fire:c,t:0,update(y){this.t+=y*6;let E=.95+Math.sin(this.t)*.15;c.scale.set(E,E,E)}},i}function Ou(){let i=new Dt;i.name="Dairy";let t=new Rt(3.4,2.2,3),e=new F(t,K("#ffffff"));e.position.y=1.1,e.castShadow=!0,i.add(e);let n=new Me(2.5,1.2,4);n.rotateY(Math.PI/4);let s=new F(n,K("#2980b9"));s.position.y=2.8,i.add(s);let r=K("#bdc3c7",{metalness:.8});for(let o=0;o<3;o++){let a=new Gt(.2,.22,.6,8),l=new F(a,r);l.position.set(-1+o*.4,.3,1.6),i.add(l)}return i}function Bu(){let i=new Dt;i.name="CandyShop";let t=new Rt(3.2,2.2,2.8),e=new F(t,K("#fd79a8"));e.position.y=1.1,e.castShadow=!0,i.add(e);let n=new Me(2.4,1.4,4);n.rotateY(Math.PI/4);let s=new F(n,K("#ffeaa7"));s.position.y=2.8,i.add(s);let r=new Gt(.12,.12,2,8),o=new F(r,K("#ffffff"));o.position.set(-1.4,1,1.4);let a=o.clone();return a.position.x=1.4,i.add(o,a),i}function ku(){let i=new Dt;i.name="Storage";let t=new Rt(3.6,2.8,3.4),e=new F(t,K("#c0392b"));e.position.y=1.4,e.castShadow=!0,i.add(e);let n=new Gt(1.9,1.9,3.6,10,1,!1,0,Math.PI);n.rotateZ(Math.PI/2);let s=new F(n,K("#7f8c8d"));s.position.y=2.8,i.add(s);let r=new Gt(.8,.8,3.8,12),o=new F(r,K("#bdc3c7",{metalness:.6}));o.position.set(2.4,1.9,0),i.add(o);let a=new $t(.82,10,8,0,Math.PI*2,0,Math.PI/2),l=new F(a,K("#95a5a6"));return l.position.set(2.4,3.8,0),i.add(l),i}function zu(){let i=new Dt;i.name="OrderBoard";let t=new Gt(.08,.08,2,6),e=K("#795548"),n=new F(t,e);n.position.set(-.9,1,0);let s=n.clone();s.position.x=.9,i.add(n,s);let r=new Rt(2,1.3,.1),o=new F(r,K("#d7ccc8"));o.position.set(0,1.4,0),o.castShadow=!0,i.add(o);let a=K("#fff9c4");for(let l=0;l<4;l++){let c=new Rt(.38,.45,.02),h=new F(c,a);h.position.set(-.55+l%2*1.1,1.55-Math.floor(l/2)*.55,.06),i.add(h)}return i}function Gu(){let i=new Dt;i.name="DeliveryTruck";let t=K("#e74c3c"),e=K("#2c3e50"),n=new Rt(1.4,1.2,1.2),s=new F(n,t);s.position.set(0,.9,.6),s.castShadow=!0,i.add(s);let r=new Rt(1.2,.55,.1),o=new F(r,K("#74b9ff",{roughness:.2}));o.position.set(0,1.1,1.21),i.add(o);let a=new Rt(1.4,.7,1.8),l=new F(a,K("#d35400"));l.position.set(0,.65,-.8),l.castShadow=!0,i.add(l);let c=new Gt(.32,.32,.25,12);c.rotateZ(Math.PI/2);let h=[];return[[-.75,.32,.6],[.75,.32,.6],[-.75,.32,-.9],[.75,.32,-.9]].forEach(d=>{let u=new F(c,e);u.position.set(...d),i.add(u),h.push(u)}),i.userData={wheels:h,spin(d){h.forEach(u=>u.rotation.x+=d)}},i}function Hu(){let i=new Dt;i.name="Lake";let t=new An(4.2,24);t.rotateX(-Math.PI/2);let e=new cn({color:new Ut("#3498db"),roughness:.1,metalness:.3,transparent:!0,opacity:.88}),n=new F(t,e);n.position.y=.05,i.add(n);let s=new Rt(1.4,.15,2.8),r=new F(s,K("#795548"));r.position.set(-3.2,.18,0),r.castShadow=!0,i.add(r);for(let o=0;o<4;o++){let a=o*1.5+.3,l=1.8+o%2*1.2,c=new An(.35,8);c.rotateX(-Math.PI/2);let h=new F(c,K("#27ae60"));h.position.set(Math.cos(a)*l,.06,Math.sin(a)*l),i.add(h);let d=new $t(.1,6,6),u=new F(d,K("#fd79a8"));u.position.set(h.position.x,.12,h.position.z),i.add(u)}return i}function Vu(){let i=new Dt;i.name="Plot";let t=new Rt(1.9,.12,1.9),e=K("#4e342e",{roughness:.95}),n=new F(t,e);n.position.y=.06,n.receiveShadow=!0,i.add(n);let s=new Rt(2,.16,2),r=K("#8d6e63",{roughness:.8}),o=new F(s,r);o.position.y=.04,i.add(o);let a=new Rt(2.1,2.2,2.1),l=new _n({visible:!1}),c=new F(a,l);return c.position.y=1,i.add(c),i}function Wu(){let i=new Dt;i.name="HarvestBadge";let t=new si(.24,.05,8,12,Math.PI*.9),e=K("#f1c40f",{metalness:.85,roughness:.2,emissive:"#e67e22"}),n=new F(t,e);n.rotation.z=Math.PI/4,i.add(n);let s=new Gt(.03,.03,.28,6),r=K("#795548"),o=new F(s,r);o.position.set(.14,-.16,0),o.rotation.z=-Math.PI/6,i.add(o);let a=new Ji(.32,.38,16),l=K("#ffffff",{emissive:"#f39c12",roughness:.2}),c=new F(a,l);return c.position.z=-.02,i.add(c),i.position.y=1.8,i.userData={time:Math.random()*5,update(h){this.time+=h*3.5,i.position.y=1.8+Math.sin(this.time)*.12,i.rotation.y+=h*2}},i}function Xu(i,t){let e=new Dt,n=we[i]||we.wheat,s=Math.max(.2,t);switch(i){case"wheat":{let r=new Gt(.02,.02,.8*s,5),o=new Me(.07*s,.3*s,6),a=K(t>=1?n.color:n.stem);for(let l=-.5;l<=.5;l+=.5)for(let c=-.5;c<=.5;c+=.5){let h=new F(r,a);h.position.set(l,.4*s,c);let d=new F(o,a);d.position.set(l,.85*s,c),e.add(h,d)}break}case"corn":{let r=new Gt(.04,.06,1.4*s,6),o=new F(r,K(n.stem));if(o.position.y=.7*s,e.add(o),t>=.7){let a=new Gt(.08,.08,.35,6),l=new F(a,K(n.color));l.position.set(.12,.8*s,0),l.rotation.z=.4,e.add(l)}break}case"sunflower":{let r=new Gt(.04,.05,1.5*s,6),o=new F(r,K(n.stem));o.position.y=.75*s,e.add(o);let a=new Gt(.35*s,.35*s,.08,12);a.rotateX(Math.PI/4);let l=new F(a,K(n.color));l.position.set(0,1.5*s,.1);let c=new Gt(.18*s,.18*s,.09,10);c.rotateX(Math.PI/4);let h=new F(c,K("#3e2723"));h.position.copy(l.position),e.add(l,h);break}case"carrot":{let r=new Me(.18*s,.5*s,5),o=new F(r,K(n.stem));if(o.position.y=.3*s,e.add(o),t>=.8){let a=new Me(.12,.25,6);a.rotateX(Math.PI);let l=new F(a,K(n.color));l.position.y=.08,e.add(l)}break}default:{let r=new $t(.4*s,8,8),o=new F(r,K(n.stem));if(o.position.y=.35*s,e.add(o),t>=.75)for(let a=0;a<4;a++){let l=new $t(.09,6,6),c=new F(l,K(n.color)),h=a*1.5;c.position.set(Math.cos(h)*.3*s,.35*s,Math.sin(h)*.3*s),e.add(c)}break}}return e.userData={update(r){e.rotation.z=Math.sin(Date.now()*.003+e.position.x)*.05}},e}function qu(i){let t=new Dt;switch(t.name=`Animal_${i}`,i){case"chicken":{let e=new $t(.24,8,8);e.scale(1,1.1,1.3);let n=new F(e,K("#ffffff"));n.position.y=.32,n.castShadow=!0,t.add(n);let s=new Rt(.05,.12,.16),r=new F(s,K("#e74c3c"));r.position.set(0,.52,.1);let o=new Me(.05,.1,4);o.rotateX(Math.PI/2);let a=new F(o,K("#f1c40f"));a.position.set(0,.36,.35),t.add(r,a);break}case"cow":{let e=new Rt(.9,.85,1.4),n=new F(e,K("#ffffff"));n.position.y=.85,n.castShadow=!0,t.add(n);let s=new Rt(.92,.45,.55),r=new F(s,K("#2c3e50"));r.position.set(0,.85,.1),t.add(r);let o=new Rt(.5,.5,.6),a=new F(o,K("#ffffff"));a.position.set(0,1.25,.8);let l=new Rt(.45,.28,.25),c=new F(l,K("#ffb8b8"));c.position.set(0,1.15,1.12),t.add(a,c);break}case"sheep":{let e=new $t(.55,10,8);e.scale(1.1,1,1.3);let n=new F(e,K("#f5f6fa",{roughness:.9}));n.position.y=.65,n.castShadow=!0,t.add(n);let s=new $t(.2,8,8),r=new F(s,K("#2d3436"));r.position.set(0,.75,.65),t.add(r);break}case"pig":{let e=new $t(.5,10,8);e.scale(1,.95,1.3);let n=new F(e,K("#ff7675"));n.position.y=.55,n.castShadow=!0,t.add(n);let s=new Gt(.12,.12,.1,8);s.rotateX(Math.PI/2);let r=new F(s,K("#d63031"));r.position.set(0,.55,.66),t.add(r);break}}return t.userData={peckTime:Math.random()*5,update(e){this.peckTime+=e,t.rotation.y=Math.sin(this.peckTime*.8)*.25,t.position.y=Math.abs(Math.sin(this.peckTime*2.5))*.04}},t}function Yu(){let i=new Dt;i.name="Shop";let t=new Rt(2.4,1,1.2),e=new F(t,K("#8d6e63"));e.position.y=.5,e.castShadow=!0,i.add(e);let n=new Rt(2.6,.15,1.6);n.rotateX(.2);let s=new F(n,K("#e74c3c"));s.position.set(0,2,.1),i.add(s);let r=new Gt(.04,.04,1.8,6),o=new F(r,K("#ffffff"));o.position.set(-1.1,1,.6);let a=o.clone();return a.position.x=1.1,i.add(o,a),i}function $u(i="apple"){let t=new Dt,e=new Gt(.18,.28,1.8,6),n=new F(e,K("#5d4037"));n.position.y=.9,n.castShadow=!0,t.add(n);let s=K(i==="pine"?"#1b5e20":"#43a047");if(i==="pine")for(let r=0;r<3;r++){let o=new Me(1.4-r*.35,1.4,7),a=new F(o,s);a.position.y=1.8+r*.8,a.castShadow=!0,t.add(a)}else{let r=new $t(1.1,8,7);r.scale(1.2,1,1.2);let o=new F(r,s);o.position.y=2.4,o.castShadow=!0,t.add(o);for(let a=0;a<5;a++){let l=new $t(.1,6,6),c=new F(l,K("#e74c3c")),h=a*1.3;c.position.set(Math.cos(h)*.9,2.2+a%2*.4,Math.sin(h)*.9),t.add(c)}}return t}function Gl(i){let t=new Dt;switch(t.name=`Decor_${i}`,i){case"fence":{let e=new Rt(1,.08,.04),n=new Gt(.06,.06,.8,6),s=K("#8d6e63"),r=new F(n,s);r.position.set(-.45,.4,0);let o=r.clone();o.position.x=.45;let a=new F(e,s);a.position.set(0,.3,0);let l=a.clone();l.position.y=.6,t.add(r,o,a,l);break}case"flowers":{let e=["#e84393","#fdcb6e","#0984e3","#e17055"];for(let n=0;n<4;n++){let s=new Gt(.015,.015,.3,4),r=new F(s,K("#27ae60"));r.position.set(-.2+n%2*.4,.15,-.2+Math.floor(n/2)*.4);let o=new $t(.09,6,6),a=new F(o,K(e[n%e.length]));a.position.set(r.position.x,.3,r.position.z),t.add(r,a)}break}case"lamp":{let e=new Gt(.05,.07,1.8,6),n=new F(e,K("#2c3e50"));n.position.y=.9,t.add(n);let s=new Rt(.3,.4,.3),r=K("#f1c40f",{emissive:"#f39c12",roughness:.2}),o=new F(s,r);o.position.y=1.9,t.add(o);break}case"bench":{let e=new Rt(1.2,.08,.5),n=new Rt(1.2,.4,.06),s=new Rt(.08,.4,.4),r=K("#d35400"),o=new F(e,r);o.position.y=.4;let a=new F(n,r);a.position.set(0,.65,-.22);let l=new F(s,K("#2c3e50"));l.position.set(-.45,.2,0);let c=l.clone();c.position.x=.45,t.add(o,a,l,c);break}case"windmill":{let e=new Gt(.6,.9,2.8,8),n=new F(e,K("#ffffff"));n.position.y=1.4;let s=new Me(.8,.8,8),r=new F(s,K("#c0392b"));r.position.y=3.2;let o=new Dt;o.position.set(0,2.7,.7);for(let a=0;a<4;a++){let l=new Rt(.2,1.4,.02);l.translate(0,.7,0);let c=new F(l,K("#ecf0f1"));c.rotation.z=a*Math.PI/2,o.add(c)}t.add(n,r,o),t.userData={update(a){o.rotation.z+=a*1.8}};break}default:{let e=new Rt(.8,.04,.8),n=new F(e,K("#95a5a6"));n.position.y=.02,t.add(n);break}}return t}function Zu(){let i=new Dt;i.name="DogHouse";let t=new Rt(1.6,1.3,1.8),e=K("#d7ccc8",{roughness:.8}),n=new F(t,e);n.position.y=.65,n.castShadow=!0,i.add(n);let s=new Me(1.4,.8,4);s.rotateY(Math.PI/4),s.scale(1.15,1,1.3);let r=K("#d96677",{roughness:.6}),o=new F(s,r);o.position.y=1.65,o.castShadow=!0,i.add(o);let a=new Rt(.7,.9,.1),l=K("#3e2723"),c=new F(a,l);c.position.set(0,.5,.91),i.add(c);let h=new Rt(.65,.18,.04),d=K("#ffffff"),u=new F(h,d);return u.position.set(0,1.15,.93),i.add(u),i}function Ju(i="Ay\u015Fe Teyze"){let t=new Dt;t.name=`Visitor_${i}`;let e=i.includes("Teyze")||i.includes("Amca")||i.includes("Dede"),n=e?"#81ecec":"#fab1a0",s=e?"#2d3436":"#0984e3",r=new $t(.28,12,10),o=new F(r,K("#f5d5be"));o.position.y=1.45,o.castShadow=!0,t.add(o);let a=new Me(.35,.25,8),l=new F(a,K("#fdcb6e"));l.position.set(0,1.65,0),t.add(l);let c=new Gt(.2,.24,.55,8),h=new F(c,K(n));h.position.y=.98,h.castShadow=!0,t.add(h);let d=new Gt(.07,.06,.5,6);d.translate(0,-.25,0);let u=new F(d,K(s));u.position.set(-.1,.65,0);let f=u.clone();f.position.x=.1,t.add(u,f);let _=new Gt(.05,.045,.4,6);_.translate(0,-.2,0);let M=new F(_,K(n));return M.position.set(.25,1.15,0),t.add(M),t.userData={lLeg:u,rLeg:f,rArm:M,walkTime:0,isWalking:!0,update(m){if(this.isWalking){this.walkTime+=m*8;let p=Math.sin(this.walkTime)*.45;u.rotation.x=p,f.rotation.x=-p,M.rotation.x=-p*.6}else this.walkTime+=m*5,u.rotation.x=0,f.rotation.x=0,M.rotation.z=.8+Math.sin(this.walkTime)*.35}},t}function Ku(i){let t=new Dt,n=(we[i]||we.wheat).color||"#f1c40f",s=new Me(.16,.45,6),r=new F(s,K(n,{emissive:"#d35400",roughness:.3}));return r.rotation.x=Math.PI,t.add(r),t.userData={t:0,update(o){this.t+=o,t.rotation.y+=o*8,t.rotation.z+=o*6}},t}function Qu(){let i=new Dt;i.name="JumpingFish";let t=new Me(.14,.46,7);t.rotateZ(Math.PI/2);let e=K("#e67e22",{roughness:.3,metalness:.2}),n=new F(t,e);i.add(n);let s=new Me(.1,.22,4);s.rotateZ(-Math.PI/2);let r=new F(s,K("#d35400"));return r.position.x=-.28,i.add(r),i.scale.setScalar(.9),i}function ju(){let i=new Ji(.12,.24,16);i.rotateX(-Math.PI/2);let t=new _n({color:16777215,transparent:!0,opacity:.85,side:sn}),e=new F(i,t);return e.position.y=.03,e}function Hl(){let i=new ws(.2,0),t=new cn({color:16119546,transparent:!0,opacity:.6,roughness:1,flatShading:!0});return new F(i,t)}function td(){let i=new $t(.16,12,10),t=K("#c8e632",{roughness:.7}),e=new F(i,t);return e.castShadow=!0,e}function ed(){let i=new Dt;i.name="FluffyCloud";let t=new cn({color:16777215,roughness:.85,metalness:.05,flatShading:!0});return[{r:1.8,x:0,y:0,z:0},{r:1.3,x:-1.6,y:-.2,z:.3},{r:1.4,x:1.5,y:-.1,z:-.2},{r:1.1,x:.4,y:.8,z:.2},{r:.9,x:-.8,y:.7,z:-.3}].forEach(n=>{let s=new $t(n.r,8,7),r=new F(s,t);r.position.set(n.x,n.y,n.z),i.add(r)}),i}function nd(){let i=new Dt;i.name="CobblestonePaths";let t=K("#d7ccc8",{roughness:.9}),e=K("#bcaaa4",{roughness:.95}),n=K("#c7b299",{roughness:.85}),s=[t,e,n];return[[-3.8,-1.8],[-3.2,-1.2],[-2.6,-.6],[-2,0],[-1.4,.6],[-.8,1.2],[-.2,1.8],[.4,2.4],[1,3],[-4.2,-3.2],[-4,-4],[-4.2,-4.8],[-4.6,-5.6],[-1.8,-2.4],[-.8,-2.8],[.2,-3.2],[1.2,-3.4],[2,2],[2.8,1.4],[3.6,.8],[4.4,.2]].forEach(([o,a],l)=>{let c=.35+l%3*.08,h=.28+(l+1)%3*.08,d=new Gt(c,c*1.1,.05,7),u=s[l%s.length],f=new F(d,u);f.position.set(o,.03,a),f.rotation.y=l*.7,f.receiveShadow=!0,i.add(f)}),i}function id(i="daisy"){let t=new Dt;t.name=`FlowerPatch_${i}`;let e=K("#4caf50",{roughness:.8}),n=K("#fbc02d",{roughness:.5}),s=i==="poppy"?K("#e53935",{roughness:.6}):K("#ffffff",{roughness:.5});return[[-.3,-.2],[.2,-.25],[-.1,.2],[.35,.15],[-.35,.3]].forEach(([o,a],l)=>{let c=new Dt;c.position.set(o,0,a);let h=new Gt(.015,.02,.22+l%3*.05,5),d=new F(h,e);d.position.y=.11,c.add(d);let u=new An(.08,6);u.rotateX(-Math.PI/2);let f=new F(u,s);f.position.y=d.position.y*2,c.add(f);let _=new $t(.035,6,6),M=new F(_,n);M.position.y=f.position.y+.01,c.add(M),t.add(c)}),t}function Vl(i=3){let t=new Dt;t.name="FarmFence";let e=K("#fdfbf7",{roughness:.7}),n=1.2,s=Math.max(2,Math.round(i/n));for(let r=0;r<s;r++){let o=new Rt(.12,.7,.12),a=new F(o,e);if(a.position.set(r*n,.35,0),a.castShadow=!0,t.add(a),r<s-1){let l=new Rt(n,.08,.04),c=new F(l,e);c.position.set(r*n+n/2,.52,0);let h=c.clone();h.position.y=.26,t.add(c,h)}}return t}function sd(i="#ffeaa7"){let t=new Dt;t.name="Butterfly";let e=new Zi(.02,.1,4,6),n=K("#2d3436"),s=new F(e,n);s.rotation.x=Math.PI/2,t.add(s);let r=new cn({color:new Ut(i),roughness:.4,side:sn}),o=new An(.12,5);o.scale(1.2,.8,1);let a=new F(o,r);a.position.set(-.1,.02,0),t.add(a);let l=new F(o,r);return l.position.set(.1,.02,0),t.add(l),t.userData={leftWing:a,rightWing:l,time:Math.random()*10,basePos:new O,update(c){this.time+=c;let h=Math.sin(this.time*22)*.9;a.rotation.y=h,l.rotation.y=-h,t.position.x=this.basePos.x+Math.sin(this.time*.8)*1.6,t.position.z=this.basePos.z+Math.cos(this.time*.7)*1.4,t.position.y=this.basePos.y+.8+Math.sin(this.time*2.5)*.25,t.rotation.y=Math.atan2(Math.cos(this.time*.8),-Math.sin(this.time*.7))}},t}var rs=null;function Wl(){if(!rs){let i=window.AudioContext||window.webkitAudioContext;i&&(rs=new i)}return rs&&rs.state==="suspended"&&rs.resume().catch(()=>{}),rs}function un(...i){let t=Wl();if(t)try{let[e=1,n=.05,s=220,r=0,o=0,a=.1,l=0,c=1,h=0,d=0,u=0,f=0,_=0,M=0,m=0,p=0,y=0,E=1,S=0,A=0]=i,T=t.sampleRate,g=h*500*Math.PI/T/T,b=d*2e5*Math.PI/T**3,P=g,R=s*(1+n*(Math.random()*2-1))*2*Math.PI/T,D=r*T|0,U=S*T|0,G=o*T|0,I=a*T|0,V=y*T|0,Y=D+U+G+I+V,H=t.createBuffer(1,Math.max(1,Y),T),nt=H.getChannelData(0),W=0,tt=0,et=0;for(let Mt=0;Mt<Y;Mt++){if(Mt<V){nt[Mt]=0;continue}let q=Mt-V,rt=1;q<D?rt=q/D:q<D+U?rt=1-(1-E)*((q-D)/U):q<D+U+G?rt=E:rt=E*(1-(q-D-U-G)/I),u&&++et>f*T&&(R+=u*2*Math.PI/T,et=0),P+=b,R+=P,W+=R;let gt=l===0?Math.sin(W):l===1?W%(2*Math.PI)<Math.PI?1:-1:l===2?1-2*Math.abs(W/(2*Math.PI)%1-.5):Math.random()*2-1;M&&(gt=gt*(1-M)+(Math.random()*2-1)*M),nt[Mt]=gt*rt*e*.4}let vt=t.createBufferSource();vt.buffer=H,vt.connect(t.destination),vt.start()}catch{}}var rd={};function Qs(i,t=.7){try{let e=rd[i];e||(e=new Audio(`sfx/${i}.mp3`),rd[i]=e),e.volume=Math.max(0,Math.min(1,t)),e.currentTime=0,e.play().catch(()=>{})}catch{}}var Ot={enabled:!0,musicEnabled:!0,bgmNode:null,unlock(){Wl()},vibrate(i=15){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(i)}catch{}},click(){this.enabled&&(this.vibrate(10),un(.4,.02,480,.01,.03,.06,0,1.2,8,0))},plant(){this.enabled&&(this.vibrate(12),un(.5,.05,320,.02,.04,.09,0,1.5,5,-2,0,0,0,.1))},harvest(){this.enabled&&(this.vibrate(18),un(.6,.03,520,.01,.08,.15,0,2,4,-5,120,.04))},coin(){this.enabled&&(this.vibrate([15,30,20]),un(.5,.01,950,.01,.05,.12,0,2,2,0,300,.03))},gofrikBark(){this.enabled&&(this.vibrate([20,40,20]),un(.6,.08,540,.01,.08,.14,1,1.5,-8,2,80,.02,0,.15),setTimeout(()=>{un(.5,.08,620,.01,.06,.12,1,1.5,-9,2,60,.02,0,.12)},110))},fetchPlay(){this.enabled&&(this.vibrate(25),un(.5,.02,440,.02,.1,.18,0,1.5,12,-4))},visitorChime(){this.enabled&&(un(.45,.01,659.25,.01,.08,.25,0,1.5,0,0),setTimeout(()=>{un(.45,.01,880,.01,.12,.35,0,1.5,0,0)},120))},truckHonk(){this.enabled&&un(.5,.05,220,.02,.18,.22,1,1.2,0,0,-40,.08)},splash(){this.enabled&&un(.6,.15,280,.02,.09,.25,3,1.8,-4,0,0,0,0,.4)},fanfare(){if(!this.enabled)return;[523.25,659.25,783.99,1046.5].forEach((t,e)=>{setTimeout(()=>{un(.6,.01,t,.02,.12,.35,0,1.5,0,0)},e*100)})},animal(i){if(this.enabled)switch(i){case"chicken":Qs("hen",.65);break;case"cow":Qs("cow",.7);break;case"sheep":Qs("sheep",.65);break;case"pig":Qs("pig",.6);break;case"cat":Qs("cat",.6);break;default:break}},startBgm(){if(!this.musicEnabled||this.bgmTimer)return;let i=Wl();if(!i)return;let t=[{f:261.63,d:.4},{f:329.63,d:.4},{f:392,d:.6},{f:523.25,d:.6},{f:440,d:.4},{f:392,d:.8},{f:329.63,d:.4},{f:349.23,d:.4},{f:392,d:.6},{f:329.63,d:.6},{f:293.66,d:.4},{f:261.63,d:.8}],e=0,n=()=>{if(!this.musicEnabled)return;let s=t[e];e=(e+1)%t.length;try{let r=i.createOscillator(),o=i.createGain();r.type="triangle",r.frequency.setValueAtTime(s.f,i.currentTime),o.gain.setValueAtTime(.001,i.currentTime),o.gain.linearRampToValueAtTime(.045,i.currentTime+.03),o.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+s.d*1.8),r.connect(o),o.connect(i.destination),r.start(),r.stop(i.currentTime+s.d*1.8)}catch{}this.bgmTimer=setTimeout(n,s.d*1e3)};n()},stopBgm(){this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)},toggleMusic(){return this.musicEnabled=!this.musicEnabled,this.musicEnabled?this.startBgm():this.stopBgm(),this.musicEnabled},toggleSfx(){return this.enabled=!this.enabled,this.enabled}};var ra=class{constructor(t){this.game=t,this.container=document.getElementById("ui-root"),this.activeModal=null,this.seedWheelTarget=null,this.init()}init(){this.renderHUD(),this.bindGlobalEvents()}renderHUD(){let t=this.game.state,e=Js(t),n=t.xp,s=Math.floor(15*Math.pow(t.level,1.7)),r=Math.min(100,Math.round(n/s*100));this.container.innerHTML=`
      <!-- \xDCst Bar -->
      <header class="hud-top">
        <div class="hud-left">
          <!-- Ezgi Avatar\u0131 & Seviye -->
          <button id="btn-avatar" class="avatar-card" title="Ezgi'nin G\xF6r\xFCn\xFC\u015F\xFC">
            <div class="avatar-circle">
              <span class="avatar-emoji">\u{1F469}\u200D\u{1F33E}</span>
              <span class="lvl-badge">${t.level}</span>
            </div>
            <div class="xp-container">
              <div class="xp-name">Ezgi</div>
              <div class="xp-bar-bg">
                <div class="xp-bar-fill" style="width: ${r}%"></div>
              </div>
            </div>
          </button>
        </div>

        <div class="hud-center">
          <!-- 27 KASIM DO\u011EUM G\xDCN\xDC BUTONU -->
          <button id="btn-bday" class="bday-pill ${t.birthdayClaimed?"claimed":"pulse"}">
            <span class="bday-icon">\u{1F382}</span>
            <span class="bday-text">27 Kas\u0131m</span>
          </button>
        </div>

        <div class="hud-right">
          <!-- Alt\u0131n -->
          <div class="currency-chip coin-chip">
            <span class="curr-icon">\u{1FA99}</span>
            <span id="hud-coins" class="curr-val">${t.coins.toLocaleString("tr-TR")}</span>
          </div>

          <!-- M\xFCcevher -->
          <div class="currency-chip gem-chip">
            <span class="curr-icon">\u{1F48E}</span>
            <span id="hud-gems" class="curr-val">${(t.gems||0).toLocaleString("tr-TR")}</span>
          </div>

          <!-- Ambar / Depo Kapasitesi -->
          <button id="btn-storage" class="storage-chip ${e>=t.cap?"storage-full":""}">
            <span class="curr-icon">\u{1F33E}</span>
            <span class="curr-val">${e}/${t.cap}</span>
          </button>

          <!-- Ayarlar -->
          <button id="btn-settings" class="icon-btn" title="Ayarlar">\u2699\uFE0F</button>
        </div>
      </header>

      <!-- Kamera D\xF6nd\xFCrme & Hizalama Kontrolleri -->
      <div class="hud-cam-controls">
        <button id="btn-cam-rot-left" class="cam-btn" title="Sola 45\xB0 D\xF6nd\xFCr">\u27F2</button>
        <button id="btn-cam-center" class="cam-btn" title="\xC7iftli\u011Fi Ortala">\u{1F3AF}</button>
        <button id="btn-cam-rot-right" class="cam-btn" title="Sa\u011Fa 45\xB0 D\xF6nd\xFCr">\u27F3</button>
      </div>

      <!-- Alt H\u0131zl\u0131 Eylemler & Dekor Butonu -->
      <footer class="hud-bottom">
        <div class="hud-bottom-left">
          <button id="btn-pet-gofrik" class="bottom-action-btn gofrik-btn">
            <span class="btn-icon">\u{1F436}</span>
            <span class="btn-label">Gofrik'i Sev</span>
          </button>
        </div>

        <div class="hud-bottom-right">
          <button id="btn-decor-shop" class="bottom-action-btn">
            <span class="btn-icon">\u{1F338}</span>
            <span class="btn-label">Dekorasyon</span>
          </button>
          <button id="btn-orders-quick" class="bottom-action-btn">
            <span class="btn-icon">\u{1F4CB}</span>
            <span class="btn-label">Sipari\u015Fler</span>
          </button>
        </div>
      </footer>

      <!-- Tohum Se\xE7im Halkas\u0131 / Paneli -->
      <div id="seed-wheel" class="seed-wheel hidden"></div>

      <!-- Genel Modal Penceresi -->
      <div id="modal-backdrop" class="modal-backdrop hidden">
        <div id="modal-dialog" class="modal-dialog"></div>
      </div>

      <!-- Kayan Bildirimler (Toasts) -->
      <div id="toast-container" class="toast-container"></div>
    `,this.bindHUDEvents()}updateHUD(){let t=this.game.state,e=document.getElementById("hud-coins"),n=document.getElementById("hud-gems"),s=document.querySelector("#btn-storage .curr-val"),r=document.querySelector(".lvl-badge"),o=document.querySelector(".xp-bar-fill"),a=document.getElementById("btn-bday");e&&(e.textContent=t.coins.toLocaleString("tr-TR")),n&&(n.textContent=(t.gems||0).toLocaleString("tr-TR")),s&&(s.textContent=`${Js(t)}/${t.cap}`),r&&(r.textContent=t.level);let l=Math.floor(15*Math.pow(t.level,1.7));o&&(o.style.width=`${Math.min(100,Math.round(t.xp/l*100))}%`),a&&(t.birthdayClaimed?(a.classList.remove("pulse"),a.classList.add("claimed")):(a.classList.add("pulse"),a.classList.remove("claimed")))}bindHUDEvents(){document.getElementById("btn-avatar")?.addEventListener("click",()=>{Ot.click(),this.openCharacterCustomizer()}),document.getElementById("btn-bday")?.addEventListener("click",()=>{Ot.click(),this.openBirthdayModal()}),document.getElementById("btn-storage")?.addEventListener("click",()=>{Ot.click(),this.openStorageModal()}),document.getElementById("btn-settings")?.addEventListener("click",()=>{Ot.click(),this.openSettingsModal()}),document.getElementById("btn-cam-rot-left")?.addEventListener("click",()=>{Ot.click(),this.game.rotateCamera(-Math.PI/4)}),document.getElementById("btn-cam-rot-right")?.addEventListener("click",()=>{Ot.click(),this.game.rotateCamera(Math.PI/4)}),document.getElementById("btn-cam-center")?.addEventListener("click",()=>{Ot.click(),this.game.centerCamera()}),document.getElementById("btn-pet-gofrik")?.addEventListener("click",()=>{this.game.interactWithGofrik()}),document.getElementById("btn-decor-shop")?.addEventListener("click",()=>{Ot.click(),this.openDecorModal()}),document.getElementById("btn-orders-quick")?.addEventListener("click",()=>{Ot.click(),this.openOrderBoardModal()}),document.getElementById("modal-backdrop")?.addEventListener("click",t=>{t.target.id==="modal-backdrop"&&this.closeModal()})}bindGlobalEvents(){window.addEventListener("keydown",t=>{t.key==="Escape"&&(this.closeModal(),this.hideSeedWheel())})}showToast(t,e="\u2728",n=!1){let s=document.getElementById("toast-container");if(!s)return;let r=document.createElement("div");r.className=`toast ${n?"toast-error":"toast-success"}`,r.innerHTML=`<span class="toast-icon">${e}</span><span class="toast-msg">${t}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("fade-out"),setTimeout(()=>r.remove(),400)},2400)}openBirthdayModal(){let e=this.game.state.birthdayClaimed;this.showModal(`
      <div class="modal-header bday-header">
        <h2>\u{1F382} \u0130yi ki Do\u011Fdun Ezgi! \u{1F388}</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body bday-body">
        <div class="bday-splash">
          <div class="bday-cake">\u{1F382}</div>
          <div class="bday-hearts">\u{1F496} \u{1F436} \u{1F33E} \u{1F48E} \u2728</div>
        </div>
        <p class="bday-msg">${Zo.message}</p>

        <div class="bday-gift-box">
          <div class="gift-row">
            <span class="gift-icon">\u{1FA99}</span>
            <span class="gift-val">+${Zo.giftCoins} Alt\u0131n</span>
          </div>
          <div class="gift-row">
            <span class="gift-icon">\u{1F48E}</span>
            <span class="gift-val">+${Zo.giftGems} M\xFCcevher</span>
          </div>
          <div class="gift-row">
            <span class="gift-icon">\u{1F436}</span>
            <span class="gift-val">Gofrik'in Sonsuz Sevgisi & Sadakati</span>
          </div>
        </div>

        <div class="modal-actions">
          ${e?'<button class="primary-btn claimed-btn" disabled>Hediye Al\u0131nd\u0131 \u{1F496}</button>':'<button id="btn-claim-bday" class="primary-btn pulse">Hediyemi Al! \u{1F381}</button>'}
        </div>
      </div>
    `),document.getElementById("btn-claim-bday")?.addEventListener("click",()=>{this.game.claimBirthday().ok&&(Ot.fanfare(),this.showToast("Do\u011Fum g\xFCn\xFC hediyen ambara eklendi! \u{1F382}\u2728","\u{1F381}"),this.openBirthdayModal(),this.updateHUD())})}showSeedWheel(t,e){let n=this.game.state,s=document.getElementById("seed-wheel");if(!s)return;this.seedWheelTarget=t;let r=`
      <div class="seed-wheel-card">
        <div class="seed-wheel-title">\u{1F33E} Ekin Se\xE7:</div>
        <div class="seed-grid">
    `;Ko.forEach(o=>{let a=we[o],l=Zt[o],c=n.level>=a.level,h=n.coins>=a.seed;r+=`
        <button class="seed-item ${c?"":"locked"} ${h?"":"disabled"}" data-crop="${o}">
          <span class="seed-icon">${l.icon}</span>
          <span class="seed-name">${l.name}</span>
          <div class="seed-meta">
            ${c?`<span>\u{1FA99}${a.seed}</span> <span>\u23F1\uFE0F${fi(a.time*1e3)}</span>`:`<span>\u{1F512} Lv ${a.level}</span>`}
          </div>
        </button>
      `}),r+=`
        </div>
        <button id="btn-close-seed" class="seed-close-btn">Vazge\xE7 \u2715</button>
      </div>
    `,s.innerHTML=r,s.classList.remove("hidden"),s.querySelectorAll(".seed-item").forEach(o=>{o.addEventListener("click",a=>{let l=o.dataset.crop;if(l){let c=this.game.plantCrop(this.seedWheelTarget,l);c.ok?(Ot.plant(),this.showToast(`${Zt[l].name} ekildi!`,Zt[l].icon),this.startPlantingMode(l)):this.showToast(c.err||"Ekilemedi","\u26A0\uFE0F",!0)}this.hideSeedWheel()})}),document.getElementById("btn-close-seed")?.addEventListener("click",()=>{this.hideSeedWheel()})}startPlantingMode(t){this.game.activeSeedTool=t;let e=document.getElementById("seed-tool-banner");e||(e=document.createElement("div"),e.id="seed-tool-banner",e.className="seed-tool-banner",document.body.appendChild(e));let n=Zt[t]||{name:t,icon:"\u{1F33E}"};e.innerHTML=`
      <span class="seed-tool-icon">${n.icon}</span>
      <span class="seed-tool-text">${n.name} Ekiliyor \u2014 Bo\u015F tarlalara dokun/s\xFCr\xFCkle!</span>
      <button id="btn-cancel-seed-tool" class="seed-tool-cancel">Tamamla \u2713</button>
    `,e.classList.remove("hidden"),document.getElementById("btn-cancel-seed-tool")?.addEventListener("click",()=>{this.stopPlantingMode()})}stopPlantingMode(){this.game.activeSeedTool=null;let t=document.getElementById("seed-tool-banner");t&&t.remove()}hideSeedWheel(){let t=document.getElementById("seed-wheel");t&&t.classList.add("hidden"),this.seedWheelTarget=null}showCropProgressModal(t){let e=this.game.state,n=e.plots[t];if(!n||!n.crop)return;let s=Ln(e,t,Date.now()),r=we[n.crop],o=Zt[n.crop],a=Math.round(s.progress*100);this.showModal(`
      <div class="modal-header">
        <h2>${o.icon} ${o.name} Tarlas\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body crop-progress-body">
        <div class="crop-status-icon">${o.icon}</div>
        <div class="crop-status-title">${s.state==="ready"?"Ekin Olgunla\u015Ft\u0131! \u2728":"Ekin B\xFCy\xFCyor..."}</div>
        
        <div class="crop-progress-bar-bg">
          <div class="crop-progress-bar-fill" style="width: ${a}%"></div>
        </div>
        <div class="crop-timer-text">
          ${s.state==="ready"?"T\u0131rpan ile hasat edilmeye haz\u0131r!":`Kalan S\xFCre: \u23F1\uFE0F ${fi(s.remaining)} (%${a})`}
        </div>

        <div class="modal-actions crop-actions">
          ${s.state==="ready"?`
            <button id="btn-modal-harvest" class="primary-btn pulse">\u{1F33E} Ekini Hasat Et!</button>
          `:`
            <button id="btn-modal-speedup" class="primary-btn ${e.gems>=1?"":"disabled"}">
              \u26A1 1 \u{1F48E} ile Hemen Bitir
            </button>
          `}
          <button class="secondary-btn" onclick="window.ui.closeModal()">Kapat</button>
        </div>
      </div>
    `),document.getElementById("btn-modal-harvest")?.addEventListener("click",()=>{this.closeModal(),this.game.harvestPlot(t)}),document.getElementById("btn-modal-speedup")?.addEventListener("click",()=>{(e.gems||0)>=1?(e.gems-=1,n.at=Date.now()-r.time*1e3,Ot.fanfare(),this.showToast(`${o.name} h\u0131zland\u0131r\u0131ld\u0131 ve haz\u0131r! \u{1F33E}`,"\u26A1"),this.closeModal(),this.game.rebuildPlots(),this.updateHUD()):this.showToast("Yeterli m\xFCcevher yok!","\u{1F48E}",!0)})}openOrderBoardModal(){let t=this.game.state,e=Date.now()<t.truck.backAt,n=Math.max(0,t.truck.backAt-Date.now()),s=`
      <div class="modal-header">
        <h2>\u{1F4CB} Kasaba Sipari\u015Fleri</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="truck-status-bar ${e?"truck-away":"truck-ready"}">
          <span class="truck-icon">\u{1F69A}</span>
          <span>${e?`Kamyon yolda... (${fi(n)} kald\u0131)`:"Kamyon \xE7iftlikte y\xFCk bekliyor!"}</span>
        </div>

        <div class="orders-grid">
    `;t.orders.forEach((r,o)=>{if(r.wait){let c=Math.max(0,r.wait-Date.now());s+=`
          <div class="order-card order-waiting">
            <div class="order-waiting-text">Yeni sipari\u015F haz\u0131rlan\u0131yor...</div>
            <div class="order-timer">\u23F1\uFE0F ${fi(c)}</div>
          </div>
        `;return}let a=!0,l="";r.items.forEach(c=>{let h=ui(t,c.k),d=h>=c.q;d||(a=!1),l+=`
          <div class="order-req-item ${d?"item-ok":"item-missing"}">
            <span>${Zt[c.k].icon} ${Zt[c.k].name}</span>
            <span class="req-count">${h}/${c.q}</span>
          </div>
        `}),s+=`
        <div class="order-card">
          <div class="order-items-list">${l}</div>
          <div class="order-rewards">
            <span class="rew-coin">\u{1FA99} +${r.coins}</span>
            <span class="rew-xp">\u2B50 +${r.xp} XP</span>
          </div>
          <div class="order-actions">
            <button class="order-deliver-btn ${a&&!e?"active":"disabled"}" data-idx="${o}">
              ${e?"Kamyon Yolda":a?"Teslim Et \u{1F69A}":"Eksik \xDCr\xFCn"}
            </button>
            <button class="order-discard-btn" data-idx="${o}" title="Sipari\u015Fi \u0130ptal Et">\u{1F5D1}\uFE0F</button>
          </div>
        </div>
      `}),s+=`
        </div>
      </div>
    `,this.showModal(s),this.container.querySelectorAll(".order-deliver-btn").forEach(r=>{r.addEventListener("click",()=>{let o=parseInt(r.dataset.idx,10),a=this.game.deliverOrder(o);a.ok?(Ot.truckHonk(),Ot.coin(),this.showToast(`Sipari\u015F teslim edildi! \u{1FA99} +${a.coins} \u2B50 +${a.xp} XP`,"\u{1F69A}"),this.openOrderBoardModal(),this.updateHUD()):this.showToast(a.err||"Teslim edilemedi","\u26A0\uFE0F",!0)})}),this.container.querySelectorAll(".order-discard-btn").forEach(r=>{r.addEventListener("click",()=>{let o=parseInt(r.dataset.idx,10);this.game.discardOrder(o),Ot.click(),this.showToast("Yeni sipari\u015F aran\u0131yor...","\u{1F4CB}"),this.openOrderBoardModal()})})}openBuildingModal(t){let e=this.game.state,n=wi[t],s=e.buildings[t];if(!s||!s.owned){this.showToast(`${n.name} hen\xFCz in\u015Fa edilmedi`,"\u{1F512}",!0);return}let r=Mu(e,t,Date.now()),o=`
      <div class="modal-header">
        <h2>${n.icon} ${n.name}</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="queue-status-bar">
          <span>Kuyruk: ${r.queued}/${n.slots}</span>
          ${r.done>0?`<button id="btn-collect-bld" class="primary-btn">Haz\u0131r \xDCr\xFCnleri Topla (${r.done}) \u2728</button>`:""}
        </div>

        <div class="recipes-list">
    `;Object.keys(hn).forEach(a=>{let l=hn[a];if(l.building!==t)return;let c=Zt[a],h=e.level>=l.level,d="",u=h;for(let f in l.in){let _=l.in[f],M=ui(e,f);M<_&&(u=!1),d+=`
          <span class="ingr-pill ${M>=_?"ok":"missing"}">
            ${Zt[f].icon} ${M}/${_}
          </span>
        `}o+=`
        <div class="recipe-card ${h?"":"locked"}">
          <div class="recipe-left">
            <span class="recipe-icon">${c.icon}</span>
            <div class="recipe-info">
              <span class="recipe-name">${c.name} (x${l.out})</span>
              <div class="recipe-meta">\u23F1\uFE0F ${fi(l.time*1e3)} \u2022 \u2B50 ${l.xp} XP</div>
              <div class="recipe-ingrs">${d}</div>
            </div>
          </div>
          <div class="recipe-right">
            ${h?`<button class="craft-btn ${u&&r.queued<n.slots?"active":"disabled"}" data-recipe="${a}">\xDCret</button>`:`<span class="lock-label">\u{1F512} Lv ${l.level}</span>`}
          </div>
        </div>
      `}),o+=`
        </div>
      </div>
    `,this.showModal(o),document.getElementById("btn-collect-bld")?.addEventListener("click",()=>{let a=this.game.collectBuilding(t);a.ok?(Ot.harvest(),a.got.forEach(l=>this.showToast(`${Zt[l.item].name} topland\u0131 (x${l.qty})!`,Zt[l.item].icon)),this.openBuildingModal(t),this.updateHUD()):this.showToast(a.err||"Toplanamad\u0131","\u26A0\uFE0F",!0)}),this.container.querySelectorAll(".craft-btn").forEach(a=>{a.addEventListener("click",()=>{let l=a.dataset.recipe,c=this.game.queueRecipe(t,l);c.ok?(Ot.plant(),this.showToast(`${Zt[l].name} \xFCretime al\u0131nd\u0131!`,Zt[l].icon),this.openBuildingModal(t),this.updateHUD()):this.showToast(c.err||"\xDCretilemedi","\u26A0\uFE0F",!0)})})}openPenModal(t){let e=this.game.state,n=e.pens[t],s=rn[t];if(!n||!n.owned){this.showToast(`${s.name} bar\u0131na\u011F\u0131 hen\xFCz al\u0131nmad\u0131`,"\u{1F512}",!0);return}let r=Zt[s.feed],o=Zt[s.product],a=ui(e,s.feed),l=`
      <div class="modal-header">
        <h2>${s.icon} ${s.name} \xC7iftli\u011Fi (${n.animals.length}/${s.max})</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="pen-top-bar">
          <span>Yem Sto\u011Fu: ${r.icon} ${a}</span>
          ${n.animals.length<s.max?`<button id="btn-buy-animal" class="secondary-btn">+ Hayvan Al (${s.price} \u{1FA99})</button>`:""}
        </div>

        <div class="animals-grid">
    `;n.animals.forEach((c,h)=>{let d=Ks(e,t,h,Date.now());l+=`
        <div class="animal-card">
          <div class="animal-icon">${s.icon}</div>
          <div class="animal-state-label">
            ${d.state==="ready"?`<span class="ready-text">\u2728 ${o.name} Haz\u0131r!</span>`:d.state==="producing"?`<span>\u23F1\uFE0F ${fi(d.remaining)}</span>`:'<span class="hungry-text">A\xE7 (Yem Ver)</span>'}
          </div>
          <div class="animal-card-action">
            ${d.state==="ready"?`<button class="collect-animal-btn primary-btn" data-idx="${h}">Topla ${o.icon}</button>`:d.state==="hungry"?`<button class="feed-animal-btn ${a>0?"active":"disabled"}" data-idx="${h}">Yemle ${r.icon}</button>`:'<button class="disabled-btn" disabled>B\xFCy\xFCyor...</button>'}
          </div>
        </div>
      `}),l+=`
        </div>
      </div>
    `,this.showModal(l),document.getElementById("btn-buy-animal")?.addEventListener("click",()=>{let c=this.game.buyAnimal(t);c.ok?(Ot.animal(t),this.showToast(`Yeni ${s.name} \xE7iftli\u011Fe kat\u0131ld\u0131!`,s.icon),this.openPenModal(t),this.updateHUD()):this.showToast(c.err||"Al\u0131namad\u0131","\u26A0\uFE0F",!0)}),this.container.querySelectorAll(".collect-animal-btn").forEach(c=>{c.addEventListener("click",()=>{let h=parseInt(c.dataset.idx,10),d=this.game.collectAnimal(t,h);d.ok?(Ot.harvest(),this.showToast(`${o.name} topland\u0131!`,o.icon),this.openPenModal(t),this.updateHUD()):this.showToast(d.err||"Toplanamad\u0131","\u26A0\uFE0F",!0)})}),this.container.querySelectorAll(".feed-animal-btn").forEach(c=>{c.addEventListener("click",()=>{let h=parseInt(c.dataset.idx,10),d=this.game.feedAnimal(t,h);d.ok?(Ot.animal(t),this.showToast(`${s.name} beslendi!`,r.icon),this.openPenModal(t),this.updateHUD()):this.showToast(d.err||"Yemlenemedi","\u26A0\uFE0F",!0)})})}openShopModal(){let t=this.game.state,e=`
      <div class="modal-header">
        <h2>\u{1F3EA} Ezgi'nin Yol Kenar\u0131 D\xFCkkan\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <p class="shop-desc">\xC7iftlikte \xFCretti\u011Fin \xFCr\xFCnleri tezgaha koy, kom\u015Fular sat\u0131n als\u0131n!</p>
        <div class="shop-slots-grid">
    `;for(let n=0;n<t.shop.slots.length;n++){let s=Bl(t,n,Date.now());s.state==="empty"?e+=`
          <div class="shop-slot empty-slot" data-slot="${n}">
            <span class="slot-add-icon">\u2795</span>
            <span class="slot-label">\xDCr\xFCn Koy</span>
          </div>
        `:s.state==="sold"?e+=`
          <div class="shop-slot sold-slot" data-slot="${n}">
            <span class="sold-badge">SATILDI! \u{1F389}</span>
            <span class="sold-item">${Zt[s.k].icon} x${s.q}</span>
            <span class="sold-buyer">${s.buyer} sat\u0131n ald\u0131</span>
            <button class="collect-shop-btn primary-btn" data-slot="${n}">\u{1FA99} ${s.price} Al</button>
          </div>
        `:e+=`
          <div class="shop-slot listed-slot">
            <span class="slot-item">${Zt[s.k].icon} ${Zt[s.k].name} (x${s.q})</span>
            <span class="slot-price">Fiyat: \u{1FA99} ${s.price}</span>
            <span class="slot-time">M\xFC\u015Fteri bekleniyor (${fi(s.remaining)})</span>
          </div>
        `}e+=`
        </div>
      </div>
    `,this.showModal(e),this.container.querySelectorAll(".collect-shop-btn").forEach(n=>{n.addEventListener("click",()=>{let s=parseInt(n.dataset.slot,10),r=this.game.collectShop(s);r.ok&&(Ot.coin(),this.showToast(`\u{1FA99} +${r.coins} alt\u0131n al\u0131nd\u0131! (${r.buyer})`,"\u{1F3EA}"),this.openShopModal(),this.updateHUD())})}),this.container.querySelectorAll(".empty-slot").forEach(n=>{n.addEventListener("click",()=>{let s=parseInt(n.dataset.slot,10);this.openPutInShopPicker(s)})})}openPutInShopPicker(t){let e=this.game.state,n=`
      <div class="modal-header">
        <h2>Sat\u0131\u015Fa \xDCr\xFCn Se\xE7 (Tezgah #${t+1})</h2>
        <button class="modal-close" onclick="window.ui.openShopModal()">\u2190 Geri</button>
      </div>
      <div class="modal-body">
        <div class="picker-grid">
    `,s=!1;for(let r in e.items)if(e.items[r]>0){s=!0;let o=Zt[r];n+=`
          <button class="picker-item-btn" data-key="${r}">
            <span class="picker-icon">${o.icon}</span>
            <span class="picker-name">${o.name}</span>
            <span class="picker-count">x${e.items[r]}</span>
          </button>
        `}s||(n+='<div class="empty-msg">Ambarda sat\u0131lacak \xFCr\xFCn yok!</div>'),n+=`
        </div>
      </div>
    `,this.showModal(n),this.container.querySelectorAll(".picker-item-btn").forEach(r=>{r.addEventListener("click",()=>{let o=r.dataset.key,a=Math.min(3,e.items[o]),l=Math.round(Zt[o].value*a*1.3);this.game.listInShop(t,o,a,l).ok&&(Ot.plant(),this.showToast(`${Zt[o].name} tezgaha koyuldu!`,"\u{1F3EA}"),this.openShopModal(),this.updateHUD())})})}openFishingModal(){this.showModal(`
      <div class="modal-header">
        <h2>\u{1F3A3} G\xF6let Bal\u0131k\xE7\u0131l\u0131\u011F\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body fishing-body">
        <p>G\xF6l\xFCn berrak sular\u0131nda bal\u0131k yakala!</p>
        <div class="fishing-pond">
          <div id="fish-bobber" class="fish-bobber">\u{1F388}</div>
          <div id="fish-ripples" class="fish-ripples"></div>
        </div>
        <div id="fish-prompt" class="fish-prompt">Oltay\u0131 Suya At!</div>
        <button id="btn-cast-rod" class="primary-btn pulse">Oltay\u0131 At \u{1F3A3}</button>
      </div>
    `);let t=document.getElementById("btn-cast-rod"),e=document.getElementById("fish-prompt"),n=document.getElementById("fish-bobber"),s="ready",r=null;t?.addEventListener("click",()=>{if(s==="ready"){s="waiting",Ot.splash(),t.textContent="Bekle...",t.className="disabled-btn",e.textContent="Bal\u0131k yemi inceliyor... Sakin ol...",n.classList.add("floating");let o=1500+Math.random()*2e3;r=setTimeout(()=>{s="bite",n.classList.add("bobbing-active"),e.textContent="\u015E\u0130MD\u0130 \xC7EK! \u{1F41F}\u{1F4A8}",t.textContent="\xC7EK! \u{1F3A3}",t.className="primary-btn pulse",Ot.click()},o)}else if(s==="bite"){clearTimeout(r);let o=this.game.catchFish(.85);o.ok&&o.item&&(Ot.harvest(),this.showToast(`${Zt[o.item].icon} ${Zt[o.item].name} yakalad\u0131n! \u2B50 +${o.xp} XP`,"\u{1F3A3}"),this.closeModal(),this.updateHUD())}else s==="waiting"&&(clearTimeout(r),this.showToast("Erken \xE7ektin, bal\u0131k ka\xE7t\u0131!","\u{1F30A}",!0),this.closeModal())})}openStorageModal(){let t=this.game.state,n=`
      <div class="modal-header">
        <h2>\u{1F33E} \xC7iftlik Ambar\u0131 (${Js(t)}/${t.cap})</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="storage-upgrade-bar">
          <span>Kapasiteyi Art\u0131r (+25 Kapasite)</span>
          <button id="btn-upgrade-storage" class="secondary-btn">Y\xFCkselt (\u{1FA99} 80)</button>
        </div>

        <div class="storage-items-grid">
    `,s=!1;for(let r in t.items)if(t.items[r]>0){s=!0;let o=Zt[r];n+=`
          <div class="storage-card">
            <span class="storage-card-icon">${o.icon}</span>
            <span class="storage-card-name">${o.name}</span>
            <span class="storage-card-qty">x${t.items[r]}</span>
          </div>
        `}s||(n+='<div class="empty-msg">Ambar \u015Fu anda bo\u015F! Ekin hasat ederek doldurabilirsin.</div>'),n+=`
        </div>
      </div>
    `,this.showModal(n),document.getElementById("btn-upgrade-storage")?.addEventListener("click",()=>{let r=this.game.upgradeStorage();r.ok?(Ot.fanfare(),this.showToast(`Ambar kapasitesi ${this.game.state.cap}'e y\xFCkseltildi!`,"\u{1F33E}"),this.openStorageModal(),this.updateHUD()):this.showToast(r.err||"Y\xFCkseltilemedi","\u26A0\uFE0F",!0)})}openDecorModal(){let t=this.game.state,e=`
      <div class="modal-header">
        <h2>\u{1F338} \xC7iftlik Dekorasyonlar\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="decor-grid">
    `;Qh.forEach(n=>{let s=hi[n],r=t.level>=s.level,o=t.coins>=s.price;e+=`
        <div class="decor-card ${r?"":"locked"}">
          <span class="decor-card-icon">${s.icon}</span>
          <span class="decor-card-name">${s.name}</span>
          <div class="decor-card-meta">
            ${r?`<span>\u{1FA99} ${s.price}</span>`:`<span>\u{1F512} Lv ${s.level}</span>`}
          </div>
          ${r?`<button class="buy-decor-btn ${o?"active":"disabled"}" data-type="${n}">Sat\u0131n Al</button>`:'<button class="disabled-btn" disabled>Kilitli</button>'}
        </div>
      `}),e+=`
        </div>
      </div>
    `,this.showModal(e),this.container.querySelectorAll(".buy-decor-btn").forEach(n=>{n.addEventListener("click",()=>{let s=n.dataset.type,r=this.game.buyDecor(s);r.ok?(Ot.plant(),this.showToast(`${hi[s].name} \xE7iftli\u011Fe yerle\u015Ftirildi!`,hi[s].icon),this.closeModal(),this.updateHUD()):this.showToast(r.err||"Yerle\u015Ftirilemedi","\u26A0\uFE0F",!0)})})}openCharacterCustomizer(){let t=this.game.state.look;this.showModal(`
      <div class="modal-header">
        <h2>\u{1F469}\u200D\u{1F33E} Ezgi'nin G\xF6r\xFCn\xFC\u015F\xFC</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <p class="customizer-desc">Ezgi'nin \xE7iftlik tarz\u0131n\u0131 ve Gofrik ile uyumlu renklerini se\xE7:</p>

        <div class="custom-row">
          <label>Sa\xE7 Modeli:</label>
          <div class="opts-row">
            ${Jo.hairStyle.map(e=>`
              <button class="opt-chip ${t.hairStyle===e?"active":""}" data-type="hairStyle" data-val="${e}">
                ${Kh[e]||e}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="custom-row">
          <label>\u015Eapka Kurdelesi (Gofrik'in Papyonu ile Tak\u0131m):</label>
          <div class="opts-colors">
            ${Jo.hatBand.map(e=>`
              <button class="color-dot ${t.hatBand===e?"active":""}" style="background: ${e}" data-type="hatBand" data-val="${e}"></button>
            `).join("")}
          </div>
        </div>

        <div class="custom-row">
          <label>Sa\xE7 Rengi:</label>
          <div class="opts-colors">
            ${Jo.hair.map(e=>`
              <button class="color-dot ${t.hair===e?"active":""}" style="background: ${e}" data-type="hair" data-val="${e}"></button>
            `).join("")}
          </div>
        </div>

        <div class="modal-actions">
          <button class="primary-btn" onclick="window.ui.closeModal()">Kaydet ve Kapat \u2728</button>
        </div>
      </div>
    `),this.container.querySelectorAll(".opt-chip, .color-dot").forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.type,s=e.dataset.val;this.game.updateLook(n,s),Ot.click(),this.openCharacterCustomizer()})})}openSettingsModal(){this.showModal(`
      <div class="modal-header">
        <h2>\u2699\uFE0F \xC7iftlik Ayarlar\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body settings-body">
        <div class="settings-row">
          <span>\u{1F3B5} Fon M\xFCzi\u011Fi:</span>
          <button id="btn-toggle-music" class="secondary-btn">${Ot.musicEnabled?"A\xE7\u0131k \u{1F50A}":"Kapal\u0131 \u{1F507}"}</button>
        </div>

        <div class="settings-row">
          <span>\u{1F50A} Ses Efektleri:</span>
          <button id="btn-toggle-sfx" class="secondary-btn">${Ot.enabled?"A\xE7\u0131k \u{1F514}":"Kapal\u0131 \u{1F515}"}</button>
        </div>

        <div class="settings-row">
          <span>\u{1F305} G\xFCn / Gece Modu:</span>
          <button id="btn-toggle-daynight" class="secondary-btn">De\u011Fi\u015Ftir \u{1F319}</button>
        </div>

        <div class="settings-info">
          <p>\u2764\uFE0F <strong>Ezgi'nin \xC7iftli\u011Fi</strong> \u2014 Do\u011Fum G\xFCn\xFC \xD6zel S\xFCr\xFCm\xFC</p>
          <p>Karakterler: Ezgi & K\xF6p\xFC\u015F Gofrik (Pembe Papyonlu!)</p>
          <p>Versiyon 1.0.0 \u2022 \xC7evrimd\u0131\u015F\u0131 otomatik kay\u0131t destekli</p>
        </div>
      </div>
    `),document.getElementById("btn-toggle-music")?.addEventListener("click",()=>{let t=Ot.toggleMusic();document.getElementById("btn-toggle-music").textContent=t?"A\xE7\u0131k \u{1F50A}":"Kapal\u0131 \u{1F507}"}),document.getElementById("btn-toggle-sfx")?.addEventListener("click",()=>{let t=Ot.toggleSfx();document.getElementById("btn-toggle-sfx").textContent=t?"A\xE7\u0131k \u{1F514}":"Kapal\u0131 \u{1F515}"}),document.getElementById("btn-toggle-daynight")?.addEventListener("click",()=>{this.game.toggleDayNight()})}openVisitorModal(t){if(!t)return;let e=this.game.state,n=Zt[t.item]||{name:t.item,icon:"\u{1F33E}"},s=ui(e,t.item),r=s>=t.qty;this.showModal(`
      <div class="modal-header">
        <div class="modal-title">${t.avatar||"\u{1F3E1}"} ${t.name}</div>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body visitor-dialog-body">
        <div class="visitor-header">
          <div class="visitor-avatar">${t.avatar||"\u{1F475}"}</div>
          <div class="visitor-info">
            <div class="visitor-name">${t.name}</div>
            <div class="visitor-bubble">"${t.quote}"</div>
          </div>
        </div>

        <div class="visitor-req-card">
          <div class="visitor-item">
            <span class="visitor-item-icon">${n.icon}</span>
            <div class="visitor-item-name">${n.name}</div>
          </div>
          <div class="visitor-count-badge ${r?"ok":"missing"}">
            ${r?`Ambarda Var: ${s} / ${t.qty} \u2713`:`Eksik: ${s} / ${t.qty} \u2715`}
          </div>
        </div>

        <div class="visitor-rewards">
          <span>\u{1FA99} +${t.coins} Alt\u0131n</span>
          <span>\u2B50 +${t.xp} XP</span>
        </div>

        <div class="modal-actions">
          <button id="btn-visitor-sell" class="primary-btn ${r?"pulse":"disabled"}">
            ${r?"\u{1F33E} \xDCr\xFCnleri Ver":"Yetersiz \xDCr\xFCn"}
          </button>
          <button id="btn-visitor-decline" class="secondary-btn">Ba\u015Fka Zaman \u2715</button>
        </div>
      </div>
    `),document.getElementById("btn-visitor-sell")?.addEventListener("click",()=>{r&&(e.storage[t.item]=(e.storage[t.item]||0)-t.qty,e.coins+=t.coins,e.xp+=t.xp,Ot.coin(),Ot.fanfare(),this.showToast(`${t.name} te\u015Fekk\xFCr etti! (+${t.coins} \u{1FA99}, +${t.xp} \u2B50)`,"\u{1F496}"),this.closeModal(),this.updateHUD(),this.game.onVisitorCompleted())}),document.getElementById("btn-visitor-decline")?.addEventListener("click",()=>{this.closeModal(),this.game.onVisitorDeclined()})}openGofrikModal(){this.showModal(`
      <div class="modal-header">
        <div class="modal-title">\u{1F436}\u{1F380} Gofrik'in Kul\xFCbesi</div>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body gofrik-modal-body">
        <div class="gofrik-hero-card">
          <div class="gofrik-hero-icon">\u{1F436}</div>
          <div class="gofrik-hero-text">
            <div class="gofrik-hero-title">Gofrik (Pembe Papyonlu!)</div>
            <div class="gofrik-hero-desc">Ezgi'nin can dostu, \xE7iftli\u011Fin ne\u015Fesi! Top oynamaya ve hazine bulmaya bay\u0131l\u0131r.</div>
          </div>
        </div>

        <div class="gofrik-actions-grid">
          <button id="btn-gofrik-fetch" class="gofrik-act-btn">
            <span class="act-icon">\u{1F3BE}</span>
            <div>
              <div class="act-title">Top F\u0131rlat (Fetch Oyunu)</div>
              <div class="act-sub">Gofrik topun pe\u015Finden ko\u015Far ve topraktan s\xFCrpriz hazine \xE7\u0131kar\u0131r! \u{1F48E}</div>
            </div>
          </button>

          <button id="btn-gofrik-treat" class="gofrik-act-btn">
            <span class="act-icon">\u{1F9B4}</span>
            <div>
              <div class="act-title">\xD6d\xFCl Bisk\xFCvisi Ver</div>
              <div class="act-sub">Gofrik ne\u015Feyle takla atar ve sevin\xE7ten havlar (+25 XP).</div>
            </div>
          </button>

          <button id="btn-gofrik-pet" class="gofrik-act-btn">
            <span class="act-icon">\u{1F496}</span>
            <div>
              <div class="act-title">Gofrik'i Sev & Ok\u015Fa</div>
              <div class="act-sub">Kuyruk sallar, kalpler sa\xE7ar ve sana \u015Fans getirir.</div>
            </div>
          </button>
        </div>

        <div class="modal-actions">
          <button class="secondary-btn" onclick="window.ui.closeModal()">Kapat</button>
        </div>
      </div>
    `),document.getElementById("btn-gofrik-fetch")?.addEventListener("click",()=>{this.closeModal(),this.game.playFetchWithGofrik()}),document.getElementById("btn-gofrik-treat")?.addEventListener("click",()=>{this.closeModal(),this.game.feedGofrikTreat()}),document.getElementById("btn-gofrik-pet")?.addEventListener("click",()=>{this.closeModal(),this.game.interactWithGofrik()})}showModal(t){let e=document.getElementById("modal-dialog"),n=document.getElementById("modal-backdrop");!e||!n||(e.innerHTML=t,n.classList.remove("hidden"),this.activeModal=e)}closeModal(){let t=document.getElementById("modal-backdrop");t&&t.classList.add("hidden"),this.activeModal=null}};var Xl=class{constructor(){this.canvas=document.getElementById("game-canvas"),this.state=this.loadState(),this.ui=new ra(this),window.ui=this.ui,this.scene=null,this.camera=null,this.renderer=null,this.dirLight=null,this.hemiLight=null,this.ezgi=null,this.gofrik=null,this.truck=null,this.feedmill=null,this.bakery=null,this.dogHouse=null,this.visitor=null,this.visitorData=null,this.visitorTimer=22,this.plotMeshes=[],this.cropMeshes=[],this.harvestBadges=[],this.interactables=[],this.animalMeshes=[],this.smokeParticles=[],this.smokeTimer=0,this.lakeFish=null,this.fishTimer=4,this.waterRipples=[],this.fireflies=[],this.flyingItems=[],this.clouds=[],this.butterflies=[],this.activeSeedTool=null,this.isHarvestSwiping=!1,this.isPlantSwiping=!1,this.harvestedPlotsThisDrag=new Set,this.plantedPlotsThisDrag=new Set,this.fetchBall=null,this.fetchState=null,this.isNight=!1,this.lastTime=performance.now(),this.lastPlotCheck=0,this.camTarget=new O(-3.5,0,-2.5),this.camAngle=Math.PI/4,this.targetCamAngle=Math.PI/4,this.camPitch=.74,this.camDistance=24,this.zoomLevel=1,this.isDragging=!1,this.isRotating=!1,this.dragStart={x:0,y:0},this.lastTouchDist=0,this.lastTouchAngle=0,this.initThree(),this.buildWorld(),this.bindInput(),this.startLoop(),setInterval(()=>this.saveState(),3e3),this.checkOfflineProgress()}initThree(){this.scene=new ys,this.scene.background=new Ut("#94d07b");let t=window.innerWidth/window.innerHeight;this.camera=new We(40,t,.1,120),this.updateCameraTransform(),this.renderer=new qo({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});let e=Math.min(1.75,window.devicePixelRatio||1);this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eo,this.renderer.toneMapping=Us,this.renderer.toneMappingExposure=1.15,this.hemiLight=new Cs("#ffffff","#557733",.9),this.scene.add(this.hemiLight),this.dirLight=new Ls("#fff5da",1.35),this.dirLight.position.set(25,40,20),this.dirLight.castShadow=!0,this.dirLight.shadow.bias=-4e-4,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=80;let n=26;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.scene.add(this.dirLight),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}updateCameraTransform(){let t=this.camDistance*this.zoomLevel,e=Math.cos(this.camPitch),n=Math.sin(this.camPitch),s=this.camTarget.x+t*e*Math.sin(this.camAngle),r=this.camTarget.y+t*n,o=this.camTarget.z+t*e*Math.cos(this.camAngle);this.camera.position.set(s,r,o),this.camera.lookAt(this.camTarget)}rotateCamera(t){this.targetCamAngle+=t}centerCamera(){this.camTarget.set(-3.5,0,-2.5),this.targetCamAngle=Math.PI/4,this.zoomLevel=1}buildWorld(){let t=new ii($e.half*2+10,$e.half*2+10);t.rotateX(-Math.PI/2);let e=new cn({color:new Ut("#78b74a"),roughness:.9}),n=new F(t,e);n.receiveShadow=!0,this.scene.add(n);let s=new ii(kt.road.w,$e.half*2+8);s.rotateX(-Math.PI/2);let r=new cn({color:new Ut("#d4a36a"),roughness:.95}),o=new F(s,r);o.position.set(kt.road.x,.02,0),o.receiveShadow=!0,this.scene.add(o),this.scene.add(nd());let a=Vl(5.5);a.position.set(-8.8,0,-6.5),a.rotation.y=Math.PI/2,this.scene.add(a);let l=Vl(5.5);l.position.set(-8.8,0,1.2),l.rotation.y=Math.PI/2,this.scene.add(l),[[-6.5,-.6,"daisy"],[-2.4,-.8,"poppy"],[1.5,3.8,"daisy"],[5.5,-2.5,"poppy"],[-7.2,3.5,"daisy"],[-.5,-5.2,"daisy"]].forEach(([y,E,S])=>{let A=id(S);A.position.set(y,0,E),this.scene.add(A)});let h=Nu();h.position.set(kt.house.x,0,kt.house.z),this.scene.add(h);let d=Du();d.position.set(kt.house.x+3.2,0,kt.house.z+1.2),this.scene.add(d),this.registerInteractable(d,()=>{this.ui.openBirthdayModal()}),this.feedmill=Uu(),this.feedmill.position.set(kt.feedmill.x,0,kt.feedmill.z),this.scene.add(this.feedmill),this.registerInteractable(this.feedmill,()=>this.ui.openBuildingModal("feedmill")),this.bakery=Fu(),this.bakery.position.set(kt.bakery.x,0,kt.bakery.z),this.scene.add(this.bakery),this.registerInteractable(this.bakery,()=>this.ui.openBuildingModal("bakery"));let u=Ou();u.position.set(kt.dairy.x,0,kt.dairy.z),this.scene.add(u),this.registerInteractable(u,()=>this.ui.openBuildingModal("dairy"));let f=Bu();f.position.set(kt.candy.x,0,kt.candy.z),this.scene.add(f),this.registerInteractable(f,()=>this.ui.openBuildingModal("candy"));let _=ku();_.position.set(kt.storage.x,0,kt.storage.z),this.scene.add(_),this.registerInteractable(_,()=>this.ui.openStorageModal());let M=zu();M.position.set(kt.board.x,0,kt.board.z),this.scene.add(M),this.registerInteractable(M,()=>this.ui.openOrderBoardModal()),this.truck=Gu(),this.truck.position.set(kt.truck.x,0,kt.truck.z),this.scene.add(this.truck),this.registerInteractable(this.truck,()=>this.ui.openOrderBoardModal());let m=Yu();m.position.set(kt.shop.x,0,kt.shop.z),this.scene.add(m),this.registerInteractable(m,()=>this.ui.openShopModal());let p=Hu();p.position.set(kt.lake.x,0,kt.lake.z),this.scene.add(p),this.registerInteractable(p,()=>this.ui.openFishingModal()),Object.keys(kt.pens).forEach(y=>{let E=kt.pens[y],S=new Dt;S.position.set(E.x,0,E.z);let A=new Rt(E.w,1.2,E.d),T=new F(A,new _n({visible:!1}));T.position.y=.6,S.add(T);let g=qu(y);S.add(g),this.animalMeshes.push(g),this.scene.add(S),this.registerInteractable(S,()=>this.ui.openPenModal(y))}),this.rebuildPlots(),this.buildNature(),this.spawnCharacters(),this.dogHouse=Zu(),this.dogHouse.position.set(kt.house.x-3.8,0,kt.house.z+.8),this.scene.add(this.dogHouse),this.registerInteractable(this.dogHouse,()=>this.ui.openGofrikModal()),this.initPolishVisuals()}initPolishVisuals(){this.lakeFish=Qu(),this.lakeFish.visible=!1,this.scene.add(this.lakeFish);let t=new $t(.07,6,6),e=new _n({color:13041408});for(let r=0;r<18;r++){let o=new F(t,e);o.position.set((Math.random()-.5)*36,.8+Math.random()*2.2,(Math.random()-.5)*36),o.visible=this.isNight,o.userData={baseX:o.position.x,baseY:o.position.y,baseZ:o.position.z,phase:Math.random()*Math.PI*2,speed:.9+Math.random()*1.1},this.scene.add(o),this.fireflies.push(o)}[{x:-26,y:19,z:-16,s:1.15,spd:.75},{x:-9,y:22,z:9,s:.95,spd:.6},{x:14,y:20,z:-10,s:1.3,spd:.8},{x:29,y:23,z:12,s:.85,spd:.9}].forEach(r=>{let o=ed();o.position.set(r.x,r.y,r.z),o.scale.setScalar(r.s),o.userData={speed:r.spd},this.scene.add(o),this.clouds.push(o)}),[{x:-2,y:.2,z:1.5,color:"#ffeaa7"},{x:2.2,y:.2,z:2.8,color:"#74b9ff"},{x:-5.5,y:.2,z:-1.2,color:"#fd79a8"},{x:-.5,y:.2,z:-4.5,color:"#a29bfe"}].forEach(r=>{let o=sd(r.color);o.position.set(r.x,r.y,r.z),o.userData.basePos.set(r.x,r.y,r.z),this.scene.add(o),this.butterflies.push(o)})}buildNature(){[[-16,-16],[-12,-18],[-6,-18],[0,-18],[6,-18],[12,-18],[18,-14],[18,-8],[18,-2],[18,4],[18,10],[-16,12],[-16,16],[-12,18],[-6,18],[0,18]].forEach(([e,n],s)=>{let r=s%3===0?"pine":"apple",o=$u(r);o.position.set(e,0,n),o.rotation.y=s*.7,this.scene.add(o)}),this.state.decor.forEach(e=>{let n=Gl(e.type);n.position.set(e.x,0,e.z),n.rotation.y=e.rot*(Math.PI/2),this.scene.add(n)})}rebuildPlots(){let t=new Set([...this.plotMeshes,...this.cropMeshes.map(n=>n.mesh),...this.harvestBadges]);t.forEach(n=>this.scene.remove(n)),this.interactables=this.interactables.filter(n=>!t.has(n)),this.plotMeshes=[],this.cropMeshes=[],this.harvestBadges=[];let e=Date.now();this.state.plots.forEach((n,s)=>{let r=$s(s),o=Vu();if(o.position.set(r.x,0,r.z),o.userData.plotIndex=s,this.scene.add(o),this.plotMeshes.push(o),this.registerInteractable(o,()=>this.onPlotClick(s)),n.crop){let a=Ln(this.state,s,e),l=Xu(n.crop,a.progress);if(l.position.set(r.x,.12,r.z),l.userData.plotIndex=s,this.scene.add(l),this.cropMeshes.push({idx:s,mesh:l,crop:n.crop}),this.registerInteractable(l,()=>this.onPlotClick(s)),a.state==="ready"){let c=Wu();c.position.set(r.x,1.6,r.z),c.userData.plotIndex=s,this.scene.add(c),this.harvestBadges.push(c),this.registerInteractable(c,()=>this.onPlotClick(s))}}})}spawnCharacters(){this.ezgi=zl(this.state.look),this.ezgi.position.set(-6,0,-2),this.scene.add(this.ezgi),this.gofrik=Lu(),this.gofrik.position.set(-4.5,0,-1.8),this.scene.add(this.gofrik),this.registerInteractable(this.gofrik,()=>this.ui.openGofrikModal())}bindInput(){let t=this.canvas,e=new Ds,n=new Vt,s=h=>{let d=h.touches?h.touches[0]:h;return{x:d.clientX,y:d.clientY}},r=(h,d)=>Math.atan2(d.clientY-h.clientY,d.clientX-h.clientX),o=h=>{n.x=h.x/window.innerWidth*2-1,n.y=-(h.y/window.innerHeight)*2+1,e.setFromCamera(n,this.camera);let d=[...this.plotMeshes,...this.cropMeshes.map(f=>f.mesh),...this.harvestBadges],u=e.intersectObjects(d,!0);if(u.length>0){let f=u[0].object;for(;f&&f.userData.plotIndex===void 0&&f.parent;)f=f.parent;if(f&&f.userData.plotIndex!==void 0)return f.userData.plotIndex}return null},a=h=>{if(Ot.unlock(),h.touches&&h.touches.length===2){let f=h.touches[0],_=h.touches[1];this.lastTouchDist=Math.hypot(f.clientX-_.clientX,f.clientY-_.clientY),this.lastTouchAngle=r(f,_),this.isDragging=!1,this.isRotating=!0,this.isHarvestSwiping=!1,this.isPlantSwiping=!1,h.cancelable&&h.preventDefault();return}if(h.button===2){this.isRotating=!0,this.isDragging=!1;let f=s(h);this.dragStart=f;return}let d=s(h),u=o(d);if(u!==null){let f=this.state,_=f.plots[u],M=Date.now();if(Ln(f,u,M).state==="ready"){this.isHarvestSwiping=!0,this.isDragging=!1,this.harvestedPlotsThisDrag.clear(),this.harvestedPlotsThisDrag.add(u),this.harvestPlot(u),h.cancelable&&h.preventDefault();return}else if(this.activeSeedTool&&!_.crop){this.isPlantSwiping=!0,this.isDragging=!1,this.plantedPlotsThisDrag.clear(),this.plantedPlotsThisDrag.add(u),this.plantCrop(u,this.activeSeedTool),h.cancelable&&h.preventDefault();return}}this.isDragging=!0,this.isRotating=!1,this.dragStart=d,this.pointerDownPos={...d}},l=h=>{if(h.touches&&h.touches.length===2){let E=h.touches[0],S=h.touches[1],A=Math.hypot(E.clientX-S.clientX,E.clientY-S.clientY),T=r(E,S);if(this.lastTouchDist>0){let b=A/this.lastTouchDist;this.adjustZoom(b>1?-.035:.035)}let g=T-this.lastTouchAngle;Math.abs(g)<1&&(this.targetCamAngle+=g*1.5),this.lastTouchDist=A,this.lastTouchAngle=T,h.cancelable&&h.preventDefault();return}if(this.isRotating){let E=s(h),S=E.x-this.dragStart.x;this.targetCamAngle+=S*.01,this.dragStart=E,h.cancelable&&h.preventDefault();return}let d=s(h);if(this.isHarvestSwiping){let E=o(d);E!==null&&!this.harvestedPlotsThisDrag.has(E)&&Ln(this.state,E,Date.now()).state==="ready"&&(this.harvestedPlotsThisDrag.add(E),this.harvestPlot(E)),h.cancelable&&h.preventDefault();return}if(this.isPlantSwiping&&this.activeSeedTool){let E=o(d);E!==null&&!this.plantedPlotsThisDrag.has(E)&&(this.state.plots[E].crop||(this.plantedPlotsThisDrag.add(E),this.plantCrop(E,this.activeSeedTool))),h.cancelable&&h.preventDefault();return}if(!this.isDragging)return;let u=d.x-this.dragStart.x,f=d.y-this.dragStart.y,_=Math.cos(this.camAngle),M=-Math.sin(this.camAngle),m=-Math.sin(this.camAngle),p=-Math.cos(this.camAngle),y=.035*this.zoomLevel;this.camTarget.x+=(-u*_+f*m)*y,this.camTarget.z+=(-u*M+f*p)*y,this.camTarget.x=Math.max(-$e.half+2,Math.min($e.half-2,this.camTarget.x)),this.camTarget.z=Math.max(-$e.half+2,Math.min($e.half-2,this.camTarget.z)),this.dragStart=d,h.cancelable&&h.preventDefault()},c=h=>{if(this.isHarvestSwiping=!1,this.isPlantSwiping=!1,this.harvestedPlotsThisDrag.clear(),this.plantedPlotsThisDrag.clear(),this.isDragging&&this.pointerDownPos){let d=s(h.changedTouches?h.changedTouches[0]:h);if(Math.hypot(d.x-this.pointerDownPos.x,d.y-this.pointerDownPos.y)<10){n.x=d.x/window.innerWidth*2-1,n.y=-(d.y/window.innerHeight)*2+1,e.setFromCamera(n,this.camera);let f=e.intersectObjects(this.interactables,!0);if(f.length>0){let _=f[0].object;for(;_&&!_.userData.onClick&&_.parent;)_=_.parent;_&&_.userData.onClick&&_.userData.onClick()}else{let _=e.intersectObjects([this.scene.children[0]]);if(_.length>0){let M=_[0].point;this.moveEzgiTo(M.x,M.z)}}}}this.isDragging=!1,this.isRotating=!1,this.lastTouchDist=0};t.addEventListener("mousedown",a),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("touchstart",a,{passive:!1}),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c),t.addEventListener("wheel",h=>{this.adjustZoom(h.deltaY>0?.08:-.08)},{passive:!0})}adjustZoom(t){this.zoomLevel=Math.max(.55,Math.min(1.85,this.zoomLevel+t))}registerInteractable(t,e){t.userData.onClick=e,this.interactables.includes(t)||this.interactables.push(t)}startLoop(){let t=e=>{requestAnimationFrame(t);let n=Math.min(.1,(e-this.lastTime)/1e3);if(this.lastTime=e,this.camAngle=ul.lerp(this.camAngle,this.targetCamAngle,.14),this.updateCameraTransform(),e-this.lastPlotCheck>500&&(this.lastPlotCheck=e,this.checkCropsGrowth()),this.harvestBadges.forEach(s=>s.userData.update?.(n)),this.ezgiTarget){let s=this.ezgiTarget.x-this.ezgi.position.x,r=this.ezgiTarget.z-this.ezgi.position.z,o=Math.hypot(s,r);if(o>.15){let a=4.2*n;this.ezgi.position.x+=s/o*a,this.ezgi.position.z+=r/o*a,this.ezgi.rotation.y=Math.atan2(s,r),this.ezgi.userData.isWalking=!0}else this.ezgiTarget=null,this.ezgi.userData.isWalking=!1}if(this.ezgi?.userData.update?.(n),this.ezgi&&this.gofrik&&!this.fetchState){let s=this.ezgi.position.x-Math.sin(this.ezgi.rotation.y)*1.2,r=this.ezgi.position.z-Math.cos(this.ezgi.rotation.y)*1.2,o=Math.hypot(s-this.gofrik.position.x,r-this.gofrik.position.z);if(o>.4){let a=4*n;this.gofrik.position.x+=(s-this.gofrik.position.x)/o*a,this.gofrik.position.z+=(r-this.gofrik.position.z)/o*a,this.gofrik.rotation.y=Math.atan2(s-this.gofrik.position.x,r-this.gofrik.position.z),this.gofrik.userData.isMoving=!0}else this.gofrik.userData.isMoving=!1}this.gofrik?.userData.update?.(n),this.feedmill?.userData.update?.(n),this.bakery?.userData.update?.(n),this.animalMeshes.forEach(s=>s.userData.update?.(n)),this.cropMeshes.forEach(s=>s.mesh.userData.update?.(n)),this.clouds.forEach(s=>{s.position.x+=s.userData.speed*n,s.position.x>38&&(s.position.x=-38)}),this.butterflies.forEach(s=>s.userData.update?.(n)),this.updateSmoke(n),this.updateLakeFish(n),this.updateFireflies(n),this.updateFlyingItems(n),this.updateTownVisitor(n),this.updateFetchGame(n),this.renderer.render(this.scene,this.camera)};requestAnimationFrame(t)}checkCropsGrowth(){let t=Date.now(),e=!1;this.state.plots.forEach((n,s)=>{n.crop&&Ln(this.state,s,t).state==="ready"&&(this.harvestBadges.some(a=>a.userData.plotIndex===s)||(e=!0))}),e&&this.rebuildPlots()}onPlotClick(t){let e=this.state,n=e.plots[t],s=Date.now(),r=$s(t);if(this.moveEzgiTo(r.x+.8,r.z+.8),n.crop)Ln(e,t,s).state==="ready"?this.harvestPlot(t):(Ot.click(),this.ui.showCropProgressModal(t));else{if(this.activeSeedTool){this.plantCrop(t,this.activeSeedTool);return}Ot.click(),this.ui.showSeedWheel(t,r)}}harvestPlot(t){let e=this.state,n=e.plots[t];if(!n||!n.crop)return;let s=gu(e,t,Date.now());if(s.ok){Ot.harvest();let r=$s(t),o=Ku(s.item);o.position.set(r.x,.4,r.z),this.scene.add(o),this.flyingItems.push({mesh:o,startX:r.x,startY:.4,startZ:r.z,peakY:2.5+Math.random()*.4,t:0,life:.9}),this.ui.showToast(`${we[s.item].name||s.item} topland\u0131! (+${s.qty}) \u{1F33E}\u2728`,"\u{1F9FA}"),this.rebuildPlots(),this.ui.updateHUD()}else this.ui.showToast(s.err||"Ambar dolu olabilir!","\u26A0\uFE0F",!0)}plantCrop(t,e){let n=mu(this.state,t,e,Date.now());return n.ok&&(this.rebuildPlots(),this.ui.updateHUD()),n}deliverOrder(t){return Eu(this.state,t,Date.now())}discardOrder(t){return Tu(this.state,t,Date.now())}queueRecipe(t,e){return vu(this.state,t,e,Date.now())}collectBuilding(t){return Su(this.state,t,Date.now())}buyAnimal(t){return _u(this.state,t)}feedAnimal(t,e){return xu(this.state,t,e,Date.now())}collectAnimal(t,e){return yu(this.state,t,e,Date.now())}listInShop(t,e,n,s){return wu(this.state,t,e,n,s,Date.now())}collectShop(t){return Au(this.state,t,Date.now())}catchFish(t){return Ru(this.state,t,Date.now())}upgradeStorage(){return du(this.state)}buyDecor(t){let e=Cu(this.state,t,this.camTarget.x,this.camTarget.z);if(e.ok){let n=Gl(t);n.position.set(e.item.x,0,e.item.z),this.scene.add(n)}return e}claimBirthday(){return Iu(this.state)}updateLook(t,e){this.state.look[t]=e;let n=this.ezgi.position.clone(),s=this.ezgi.rotation.y;this.scene.remove(this.ezgi),this.ezgi=zl(this.state.look),this.ezgi.position.copy(n),this.ezgi.rotation.y=s,this.scene.add(this.ezgi),this.saveState()}toggleDayNight(){this.isNight=!this.isNight,this.fireflies.forEach(t=>{t.visible=this.isNight}),this.isNight?(this.scene.background=new Ut("#1a2639"),this.hemiLight.color.set("#3a4b68"),this.hemiLight.groundColor.set("#1a2412"),this.dirLight.color.set("#88a0cc"),this.dirLight.intensity=.55,this.ui.showToast("\u0130yi geceler Ezgi! \xC7iftlikte ate\u015F b\xF6cekleri par\u0131ld\u0131yor \u{1F319}\u2728","\u2B50")):(this.scene.background=new Ut("#94d07b"),this.hemiLight.color.set("#ffffff"),this.hemiLight.groundColor.set("#446622"),this.dirLight.color.set("#fff5cc"),this.dirLight.intensity=1.25,this.ui.showToast("G\xFCnayd\u0131n! G\xFCne\u015F \xE7iftli\u011Fi \u0131s\u0131t\u0131yor \u2600\uFE0F\u{1F33E}","\u2600\uFE0F"))}moveEzgiTo(t,e,n=null){this.ezgiTarget={x:t,z:e,onArrived:n}}updateSmoke(t){if(this.smokeTimer+=t,this.smokeTimer>.45){this.smokeTimer=0;let e=Hl();e.position.set(kt.house.x+1.2,4.4,kt.house.z+.5),this.scene.add(e),this.smokeParticles.push({mesh:e,life:0,maxLife:2.2,vy:1.1+Math.random()*.4,driftX:(Math.random()-.5)*.3});let n=Hl();n.position.set(kt.bakery.x+.9,1.8,kt.bakery.z+1.5),this.scene.add(n),this.smokeParticles.push({mesh:n,life:0,maxLife:2,vy:1+Math.random()*.3,driftX:(Math.random()-.5)*.3})}for(let e=this.smokeParticles.length-1;e>=0;e--){let n=this.smokeParticles[e];n.life+=t;let s=n.life/n.maxLife;if(s>=1)this.scene.remove(n.mesh),this.smokeParticles.splice(e,1);else{n.mesh.position.y+=n.vy*t,n.mesh.position.x+=n.driftX*t;let r=1+s*2.2;n.mesh.scale.setScalar(r),n.mesh.material&&(n.mesh.material.opacity=(1-s)*.6)}}}updateLakeFish(t){if(this.lakeFish){if(this.fishJumpState){let e=this.fishJumpState;e.t+=t;let n=Math.min(1,e.t/e.duration);if(this.lakeFish.position.x=e.startX+(e.targetX-e.startX)*n,this.lakeFish.position.z=e.startZ+(e.targetZ-e.startZ)*n,this.lakeFish.position.y=Math.sin(n*Math.PI)*1.5,this.lakeFish.rotation.z=(n-.5)*1.8,n>=1){this.lakeFish.visible=!1,Ot.splash();let s=ju();s.position.set(this.lakeFish.position.x,.02,this.lakeFish.position.z),this.scene.add(s),this.waterRipples.push({mesh:s,t:0,life:1}),this.fishJumpState=null,this.fishTimer=4+Math.random()*4}}else if(this.fishTimer-=t,this.fishTimer<=0){let e=kt.lake.x+(Math.random()-.5)*4.2,n=kt.lake.z+(Math.random()-.5)*4.2;this.lakeFish.position.set(e,0,n),this.lakeFish.visible=!0,this.fishJumpState={startX:e,startZ:n,targetX:e+(Math.random()-.5)*1.5,targetZ:n+(Math.random()-.5)*1.5,t:0,duration:1}}for(let e=this.waterRipples.length-1;e>=0;e--){let n=this.waterRipples[e];n.t+=t;let s=n.t/n.life;if(s>=1)this.scene.remove(n.mesh),this.waterRipples.splice(e,1);else{let r=1+s*3.5;n.mesh.scale.set(r,r,1),n.mesh.material.opacity=(1-s)*.8}}}}updateFireflies(t){if(!this.isNight)return;let e=performance.now()*.001;this.fireflies.forEach(n=>{let s=n.userData;n.position.x=s.baseX+Math.sin(e*s.speed+s.phase)*1.2,n.position.y=s.baseY+Math.sin(e*s.speed*1.5+s.phase)*.6,n.position.z=s.baseZ+Math.cos(e*s.speed+s.phase)*1.2})}updateFlyingItems(t){for(let e=this.flyingItems.length-1;e>=0;e--){let n=this.flyingItems[e];n.t+=t;let s=Math.min(1,n.t/n.life);n.mesh.position.y=n.startY+Math.sin(s*Math.PI)*n.peakY,n.mesh.userData.update?.(t);let r=1-s*.3;n.mesh.scale.setScalar(r),s>=1&&(this.scene.remove(n.mesh),this.flyingItems.splice(e,1))}}updateTownVisitor(t){if(!this.visitor){this.visitorTimer-=t,this.visitorTimer<=0&&this.spawnTownVisitor();return}let e=this.visitor;if(e.userData.update?.(t),e.userData.isDeparting){let s=18-e.position.z;Math.abs(s)>.2?(e.position.z+=Math.sign(s)*t*2.8,e.rotation.y=s>0?0:Math.PI):(this.scene.remove(e),this.interactables=this.interactables.filter(r=>r!==e),this.visitor=null,this.visitorData=null,this.visitorTimer=60+Math.random()*30);return}if(e.userData.isArriving){let n=e.userData.waypoints[e.userData.currentWp];if(n){let s=n.x-e.position.x,r=n.z-e.position.z,o=Math.hypot(s,r);if(o>.2){let a=2.8*t;e.position.x+=s/o*a,e.position.z+=r/o*a,e.rotation.y=Math.atan2(s,r)}else e.userData.currentWp++,e.userData.currentWp>=e.userData.waypoints.length&&(e.userData.isArriving=!1,e.userData.isWalking=!1,e.rotation.y=Math.PI/2,Ot.visitorChime(),this.ui.showToast(`${this.visitorData.name} kap\u0131ya geldi! \u{1F3E1}\u{1F44B}`,"\u{1F4AC}"))}}}spawnTownVisitor(){let t=[{name:"Ay\u015Fe Teyze",avatar:"\u{1F475}",quote:"Ezgi k\u0131z\u0131m iyi ki vars\u0131n! Torunuma taze bu\u011Fday ekme\u011Fi yapaca\u011F\u0131m, bana 3 Bu\u011Fday verir misin?",item:"wheat",qty:3,coins:50,xp:20},{name:"Mehmet Amca",avatar:"\u{1F468}\u200D\u{1F33E}",quote:"Selam Ezgi! Bizim tavuklar i\xE7in 3 M\u0131s\u0131r laz\u0131m oldu, kom\u015Fuluk hatr\u0131na satar m\u0131s\u0131n?",item:"corn",qty:3,coins:80,xp:30},{name:"Bakkal Hasan",avatar:"\u{1F956}",quote:"Ezgi han\u0131m \xE7iftli\u011Fin bereketi kasabaya yay\u0131ld\u0131! D\xFCkkan i\xE7in 2 Havu\xE7 alabilir miyim?",item:"carrot",qty:2,coins:95,xp:35},{name:"\xC7i\xE7ek\xE7i Elif",avatar:"\u{1F338}",quote:"Ezgi abla do\u011Fum g\xFCn\xFCn \u015Fimdiden kutlu olsun! Kutlama i\xE7in 2 \xC7ilek rica edebilir miyim?",item:"strawberry",qty:2,coins:160,xp:55},{name:"De\u011Firmenci Dede",avatar:"\u{1F474}",quote:"Merhaba Ezgi k\u0131z\u0131m! F\u0131r\u0131na un yapmaya 4 Bu\u011Fday laz\u0131m, bana verebilir misin?",item:"wheat",qty:4,coins:70,xp:25}],e=t[Math.floor(Math.random()*t.length)];this.visitorData=e,this.visitor=Ju(e.name),this.visitor.position.set(kt.road.x,0,18),this.visitor.userData.isArriving=!0,this.visitor.userData.isDeparting=!1,this.visitor.userData.currentWp=0,this.visitor.userData.waypoints=[{x:kt.road.x,z:kt.house.z+2.5},{x:kt.house.x+.6,z:kt.house.z+2.5}],this.scene.add(this.visitor),this.registerInteractable(this.visitor,()=>this.ui.openVisitorModal(this.visitorData))}onVisitorCompleted(){this.visitor&&(this.visitor.userData.isDeparting=!0,this.visitor.userData.isWalking=!0)}onVisitorDeclined(){this.visitor&&(this.visitor.userData.isDeparting=!0,this.visitor.userData.isWalking=!0,this.ui.showToast(`${this.visitorData.name}: "Sa\u011Fl\u0131k olsun Ezgi k\u0131z\u0131m, sonra g\xF6r\xFC\u015F\xFCr\xFCz!"`,"\u{1F44B}"))}interactWithGofrik(){this.ui.openGofrikModal()}feedGofrikTreat(){if(Ot.gofrikBark(),this.gofrik){let t=0,e=()=>{t+=.12,this.gofrik.position.y=Math.sin(t*Math.PI)*.8,this.gofrik.rotation.y+=.6,t<1?requestAnimationFrame(e):this.gofrik.position.y=0};e()}di(this.state,25),this.ui.showToast("Gofrik \xF6d\xFCl mamas\u0131n\u0131 afiyetle yedi! (+25 XP)","\u{1F9B4}\u{1F496}"),this.ui.updateHUD()}playFetchWithGofrik(){if(this.fetchState||!this.gofrik)return;Ot.fetchPlay(),this.fetchBall=td();let t=this.ezgi.position.x,e=this.ezgi.position.z,n=t+5.2,s=e+1.8;this.fetchBall.position.set(t,1.2,e),this.scene.add(this.fetchBall),this.fetchState={phase:"throwing",t:0,startX:t,startZ:e,targetX:n,targetZ:s}}updateFetchGame(t){if(!this.fetchState)return;let e=this.fetchState;if(e.t+=t,e.phase==="throwing"){let n=Math.min(1,e.t/.8);this.fetchBall.position.x=e.startX+(e.targetX-e.startX)*n,this.fetchBall.position.z=e.startZ+(e.targetZ-e.startZ)*n,this.fetchBall.position.y=Math.sin(n*Math.PI)*2.2,this.fetchBall.rotation.x+=t*10,n>=1&&(this.fetchBall.position.y=.15,e.phase="chasing",e.t=0)}else if(e.phase==="chasing"){let n=e.targetX-this.gofrik.position.x,s=e.targetZ-this.gofrik.position.z,r=Math.hypot(n,s);if(r>.3){let o=5.5*t;this.gofrik.position.x+=n/r*o,this.gofrik.position.z+=s/r*o,this.gofrik.rotation.y=Math.atan2(n,s),this.gofrik.userData.isMoving=!0}else this.fetchBall.visible=!1,Ot.gofrikBark(),e.phase="returning",e.t=0}else if(e.phase==="returning"){let n=this.ezgi.position.x+1,s=this.ezgi.position.z+.8,r=n-this.gofrik.position.x,o=s-this.gofrik.position.z,a=Math.hypot(r,o);if(a>.4){let l=5.2*t;this.gofrik.position.x+=r/a*l,this.gofrik.position.z+=o/a*l,this.gofrik.rotation.y=Math.atan2(r,o),this.gofrik.userData.isMoving=!0}else this.gofrik.userData.isMoving=!1,e.phase="digging",e.t=0}else if(e.phase==="digging"&&(this.gofrik.rotation.y+=Math.sin(e.t*20)*.1,this.gofrik.position.y=Math.abs(Math.sin(e.t*12))*.2,e.t>1.2)){this.gofrik.position.y=0;let n=Math.random();n<.4?(this.state.gems=(this.state.gems||0)+1,Ot.fanfare(),this.ui.showToast("Gofrik topra\u011F\u0131 kazd\u0131 ve 1 \u{1F48E} Parlayan Elmas buldu!","\u{1F48E}\u2728")):n<.8?(this.state.coins+=75,Ot.coin(),this.ui.showToast("Gofrik topra\u011F\u0131 kazd\u0131 ve g\xF6m\xFCl\xFC alt\u0131n buldu! (+75 \u{1FA99})","\u{1FA99}\u{1F389}")):(this.state.storage.strawberry=(this.state.storage.strawberry||0)+3,Ot.fanfare(),this.ui.showToast("Gofrik sana 3x \xC7ilek buldu! \u{1F353}\u2728","\u{1F353}")),this.fetchBall&&(this.scene.remove(this.fetchBall),this.fetchBall=null),this.fetchState=null,this.ui.updateHUD()}}loadState(){try{let t=localStorage.getItem("ezgi_ciftlik_save");if(t)return hu(JSON.parse(t))}catch{}return Ol()}saveState(){try{this.state.savedAt=Date.now(),localStorage.setItem("ezgi_ciftlik_save",JSON.stringify(this.state))}catch{}}checkOfflineProgress(){let t=Date.now();if(t-(this.state.savedAt||t)>3e4){let n=Pu(this.state,this.state.savedAt,t);(n.crops>0||n.animals>0||n.goods>0||n.sold>0)&&setTimeout(()=>{this.ui.showToast(`Tekrar ho\u015F geldin Ezgi! Sen yokken:
\u{1F33E} ${n.crops} ekin olgunla\u015Ft\u0131, \u{1F95B} ${n.animals} hayvan \xFCr\xFCn\xFC haz\u0131r!`,"\u{1F3E1}")},1200)}}};window.addEventListener("DOMContentLoaded",()=>{window.farmGame=new Xl});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
