(()=>{var Bc=0,Wa=1,kc=2;var Hs=1,lo=2,es=3,ui=0,Je=1,rn=2,bi=0,ns=1,Xa=2,qa=3,$a=4,zc=5;var Ei=100,Gc=101,Hc=102,Vc=103,Wc=104,Xc=200,qc=201,$c=202,Yc=203,Ya=204,Za=205,Zc=206,Jc=207,Kc=208,Qc=209,jc=210,th=211,eh=212,nh=213,ih=214,Pr=0,Lr=1,Dr=2,Vi=3,Nr=4,Ur=5,Fr=6,Or=7,Ja=0,sh=1,rh=2,Ln=0,Ka=1,Qa=2,ja=3,Vs=4,tl=5,el=6,nl=7;var il=300,wi=301,is=302,co=303,ho=304,Wi=1e3,Tn=1001,Br=1002,De=1003,oh=1004;var Ws=1005;var $e=1006,uo=1007;var qn=1008;var je=1009,sl=1010,rl=1011,ss=1012,fo=1013,yn=1014,vn=1015,Mn=1016,po=1017,mo=1018,Ti=1020,ol=35902,al=35899,ll=1021,cl=1022,Sn=1023,Vn=1026,$n=1027,hl=1028,go=1029,di=1030,_o=1031;var xo=1033,Xs=33776,qs=33777,$s=33778,Ys=33779,yo=35840,vo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,wo=37496,To=37488,Ao=37489,Zs=37490,Ro=37491,Co=37808,Io=37809,Po=37810,Lo=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,ko=37818,zo=37819,Go=37820,Ho=37821,Vo=36492,Wo=36494,Xo=36495,qo=36283,$o=36284,Js=36285,Yo=36286;var Ms=2300,kr=2301,Cr=2302,Fa=2303,Oa=2400,Ba=2401,ka=2402;var ah=3200;var Zo=0,lh=1,Yn="",Xe="srgb",Ss="srgb-linear",bs="linear",ae="srgb";var Ir=7680;var ch=519,hh=512,uh=513,dh=514,ul=515,fh=516,ph=517,dl=518,fl=519,mh=35044;var pl="300 es",cn=2e3,Xi=2001;function vd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Md(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){let i=Es("canvas");return i.style.display="block",i}var dc={},qi=null;function ml(...i){let t="THREE."+i.shift();qi?qi("log",t,...i):console.log(t,...i)}function _h(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=_h(i);let t="THREE."+i.shift();if(qi)qi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=_h(i);let t="THREE."+i.shift();if(qi)qi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xs(...i){let t=i.join(" ");t in dc||(dc[t]=!0,Ut(...i))}function xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yh={[Pr]:Pr,[Dr]:Fr,[Nr]:Nr,[Vi]:Ur,[Lr]:Lr,[Fr]:Dr,[Or]:Or,[Ur]:Vi},Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=1234567,ys=Math.PI/180,$i=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function Sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bd(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function Ed(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function wd(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function Td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cd(i,t){return i+Math.random()*(t-i)}function Id(i){return i*(.5-Math.random())}function Pd(i){i!==void 0&&(fc=i);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ld(i){return i*ys}function Dd(i){return i*$i}function Nd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _l(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vh(i,t){if(t.constructor===Float32Array)return i;let e=xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Mh(i,t){if(t.constructor===Float32Array)return i;let e=xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Jo={DEG2RAD:ys,RAD2DEG:$i,generateUUID:rs,clamp:te,euclideanModulo:gl,mapLinear:Sd,inverseLerp:bd,lerp:vs,damp:Ed,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Id,seededRandom:Pd,degToRad:Ld,radToDeg:Dd,isPowerOfTwo:Nd,ceilPowerOfTwo:Ud,floorPowerOfTwo:_l,setQuaternionFromProperEuler:Fd,normalize:Mh,denormalize:vh},bl=class bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bl.prototype.isVector2=!0;var Wt=bl,Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,a=Math.sin(a*y)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+M*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+M*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},El=class El{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;var O=El,ga=new O,pc=new Cn,wl=class wl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],M=s[0],m=s[3],p=s[6],y=s[1],w=s[4],b=s[7],A=s[2],E=s[5],g=s[8];return r[0]=o*M+a*y+l*A,r[3]=o*m+a*w+l*E,r[6]=o*p+a*b+l*g,r[1]=c*M+h*y+d*A,r[4]=c*m+h*w+d*E,r[7]=c*p+h*b+d*g,r[2]=u*M+f*y+_*A,r[5]=u*m+f*w+_*E,r[8]=u*p+f*b+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_a.makeScale(t,e)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;var kt=wl,_a=new kt,mc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:t,whitePoint:n,transfer:bs,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var jt=Od();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Es("canvas")),Ci.width=t.width,Ci.height=t.height;let s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Yi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var kd=0,ya=new O,Ye=class i extends Rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=$e,o=qn,a=Sn,l=je,c=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=rs(),this.name="",this.source=new Yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=il;Ye.DEFAULT_ANISOTROPY=1;var Tl=class Tl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(f+1)/2,A=(p+1)/2,E=(h+u)/4,g=(d+M)/4,S=(_+m)/4;return w>b&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;var me=Tl,Gr=class extends Rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ye({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Gr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ao=class ao{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ao().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,_=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-M*c,e[9]=-a*l,e[2]=M-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u+M*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u-M*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,_=a*h,M=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,_=a*l,M=a*c;e[0]=l*h,e[4]=M-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*c,_=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Gd)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Kn.crossVectors(n,tn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Kn.crossVectors(n,tn)),Kn.normalize(),cr.crossVectors(tn,Kn),s[0]=Kn.x,s[4]=cr.x,s[8]=tn.x,s[1]=Kn.y,s[5]=cr.y,s[9]=tn.y,s[2]=Kn.z,s[6]=cr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],M=n[6],m=n[10],p=n[14],y=n[3],w=n[7],b=n[11],A=n[15],E=s[0],g=s[4],S=s[8],P=s[12],R=s[1],L=s[5],U=s[9],G=s[13],I=s[2],V=s[6],$=s[10],H=s[14],nt=s[3],W=s[7],tt=s[11],et=s[15];return r[0]=o*E+a*R+l*I+c*nt,r[4]=o*g+a*L+l*V+c*W,r[8]=o*S+a*U+l*$+c*tt,r[12]=o*P+a*G+l*H+c*et,r[1]=h*E+d*R+u*I+f*nt,r[5]=h*g+d*L+u*V+f*W,r[9]=h*S+d*U+u*$+f*tt,r[13]=h*P+d*G+u*H+f*et,r[2]=_*E+M*R+m*I+p*nt,r[6]=_*g+M*L+m*V+p*W,r[10]=_*S+M*U+m*$+p*tt,r[14]=_*P+M*G+m*H+p*et,r[3]=y*E+w*R+b*I+A*nt,r[7]=y*g+w*L+b*V+A*W,r[11]=y*S+w*U+b*$+A*tt,r[15]=y*P+w*G+b*H+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15],y=l*f-c*u,w=a*f-c*d,b=a*u-l*d,A=o*f-c*h,E=o*u-l*h,g=o*d-a*h;return e*(M*y-m*w+p*b)-n*(_*y-m*A+p*E)+s*(_*w-M*A+p*g)-r*(_*b-M*E+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],y=e*a-n*o,w=e*l-s*o,b=e*c-r*o,A=n*l-s*a,E=n*c-r*a,g=s*c-r*l,S=h*M-d*_,P=h*m-u*_,R=h*p-f*_,L=d*m-u*M,U=d*p-f*M,G=u*p-f*m,I=y*G-w*U+b*L+A*R-E*P+g*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(a*G-l*U+c*L)*V,t[1]=(s*U-n*G-r*L)*V,t[2]=(M*g-m*E+p*A)*V,t[3]=(u*E-d*g-f*A)*V,t[4]=(l*R-o*G-c*P)*V,t[5]=(e*G-s*R+r*P)*V,t[6]=(m*b-_*g-p*w)*V,t[7]=(h*g-u*b+f*w)*V,t[8]=(o*U-a*R+c*S)*V,t[9]=(n*R-e*U-r*S)*V,t[10]=(_*E-M*b+p*y)*V,t[11]=(d*b-h*E-f*y)*V,t[12]=(a*P-o*L-l*S)*V,t[13]=(e*L-n*P+s*S)*V,t[14]=(M*w-_*A-m*y)*V,t[15]=(h*A-d*w+u*y)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,M=o*h,m=o*d,p=a*d,y=l*c,w=l*h,b=l*d,A=n.x,E=n.y,g=n.z;return s[0]=(1-(M+p))*A,s[1]=(f+b)*A,s[2]=(_-w)*A,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+w)*g,s[9]=(m-y)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ii.set(s[0],s[1],s[2]).length(),a=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(o=-o),pn.copy(this);let c=1/o,h=1/a,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===cn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Xi)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===cn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Xi)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ao.prototype.isMatrix4=!0;var pe=ao,Ii=new O,pn=new pe,zd=new O(0,0,0),Gd=new O(1,1,1),Kn=new O,cr=new O,tn=new O,_c=new pe,xc=new Cn,Wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Zi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,yc=new O,Pi=new Cn,On=new pe,hr=new O,ps=new O,Vd=new O,Wd=new Cn,vc=new O(1,0,0),Mc=new O(0,1,0),Sc=new O(0,0,1),bc={type:"added"},Xd={type:"removed"},Li={type:"childadded",child:null},va={type:"childremoved",child:null},Ge=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Wn,n=new Cn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ps,hr,this.up):On.lookAt(hr,ps,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(On),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Li.child=t,this.dispatchEvent(Li),Li.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new O(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},qd={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=gl(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ma(o,r,t+1/3),this.g=Ma(o,r,t),this.b=Ma(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return jt.workingToColorSpace(ze.copy(this),t),Math.round(te(ze.r*255,0,255))*65536+Math.round(te(ze.g*255,0,255))*256+Math.round(te(ze.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Xe){jt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(ur);let n=vs(Qn.h,ur.h,e),s=vs(Qn.s,ur.s,e),r=vs(Qn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Bt;Bt.NAMES=Sh;var Ts=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new O,Bn=new O,Sa=new O,kn=new O,Di=new O,Ni=new O,Ec=new O,ba=new O,Ea=new O,wa=new O,Ta=new me,Aa=new me,Ra=new me,ni=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Bn.subVectors(n,e),Sa.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Bn),l=mn.dot(Sa),c=Bn.dot(Bn),h=Bn.dot(Sa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Bn.subVectors(t,e),mn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ni.subVectors(r,n),ba.subVectors(t,n);let l=Di.dot(ba),c=Ni.dot(ba);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,s);let h=Di.dot(Ea),d=Ni.dot(Ea);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);wa.subVectors(t,r);let f=Di.dot(wa),_=Ni.dot(wa);if(_>=0&&f<=_)return e.copy(r);let M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ni,a);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Ec.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Ec,a);let p=1/(m+M+u);return o=M*p,a=u*p,e.copy(n).addScaledVector(Di,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),fr.subVectors(this.max,ms),Ui.subVectors(t.a,ms),Fi.subVectors(t.b,ms),Oi.subVectors(t.c,ms),jn.subVectors(Fi,Ui),ti.subVectors(Oi,Fi),yi.subVectors(Ui,Oi);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-yi.z,yi.y,jn.z,0,-jn.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!Ca(e,Ui,Fi,Oi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Ui,Fi,Oi,fr))?!1:(pr.crossVectors(jn,ti),e=[pr.x,pr.y,pr.z],Ca(e,Ui,Fi,Oi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new O,new O,new O,new O,new O,new O,new O,new O],gn=new O,dr=new ii,Ui=new O,Fi=new O,Oi=new O,jn=new O,ti=new O,yi=new O,ms=new O,fr=new O,pr=new O,vi=new O;function Ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);let a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var we=new O,mr=new Wt,$d=0,An=class extends Rn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=t!==void 0?xl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Mh(t,this.array)}};var As=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rs=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=new ii,gs=new O,Ia=new O,Ki=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);let e=gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Ia)),this.expandByPoint(gs.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zd=0,ln=new pe,Pa=new Ge,Bi=new O,en=new ii,_s=new ii,Le=new O,Ze=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?Rs:As)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(en.min,_s.min),en.expandByPoint(Le),Le.addVectors(en.max,_s.max),en.expandByPoint(Le)):(en.expandByPoint(_s.min),en.expandByPoint(_s.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Le.add(Bi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new O,l[P]=new O;let h=new O,d=new O,u=new O,f=new Wt,_=new Wt,M=new Wt,m=new O,p=new O;function y(P,R,L){c[P]=c[R]=c[L]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),M.fromBufferAttribute(r,L),d.sub(h),u.sub(h),_.sub(f),M.sub(f);let U=1/(_.x*M.y-M.x*_.y);isFinite(U)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(U),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(U),a[P].add(m),a[R].add(m),a[L].add(m),l[P].add(p),l[R].add(p),l[L].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,R=w.length;P<R;++P){let L=w[P],U=L.start,G=L.count;for(let I=U,V=U+G;I<V;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new O,A=new O,E=new O,g=new O;function S(P){E.fromBufferAttribute(s,P),g.copy(E);let R=a[P];b.copy(R),b.sub(E.multiplyScalar(E.dot(R))).normalize(),A.crossVectors(g,R);let U=A.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,U)}for(let P=0,R=n.count;P<R;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new An(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var La=new O,Jd=new O,Kd=new kt,_n=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=La.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(La),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qd=0,si=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ns,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Za,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gn=new O,Da=new O,gr=new O,_r=new O,Cs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=_r.dot(this.direction),l=-_r.dot(gr),c=_r.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Da).addScaledVector(gr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,_=e.x-o.x,M=e.y-o.y,m=e.z-o.z,p=n.x-o.x,y=n.y-o.y,w=n.z-o.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(h),g,S,P,R,L,U,G,I,V,$,H,nt;if(b>=A&&b>=E?(P=l,U=d,V=_,nt=p,l>=0?(g=c,S=h,R=u,L=f,G=M,I=m,$=y,H=w):(g=h,S=c,R=f,L=u,G=m,I=M,$=w,H=y)):A>=E?(P=c,U=u,V=M,nt=y,c>=0?(g=h,S=l,R=f,L=d,G=m,I=_,$=w,H=p):(g=l,S=h,R=d,L=f,G=_,I=m,$=p,H=w)):(P=h,U=f,V=m,nt=w,h>=0?(g=l,S=c,R=d,L=u,G=_,I=M,$=p,H=y):(g=c,S=l,R=u,L=d,G=M,I=_,$=y,H=p)),P===0)return null;let W=g/P,tt=S/P,et=1/P,vt=R-W*U,Mt=L-tt*U,q=G-W*V,rt=I-tt*V,gt=$-W*nt,Ct=H-tt*nt,ft=gt*rt-Ct*q,zt=vt*Ct-Mt*gt,ge=q*Mt-rt*vt;if(s){if(ft<0||zt<0||ge<0)return null}else if((ft<0||zt<0||ge<0)&&(ft>0||zt>0||ge>0))return null;let At=ft+zt+ge;if(At===0)return null;let se=et*(ft*U+zt*V+ge*nt);return(At>0?se<0:se>0)?null:this.at(se/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wc=new pe,Mi=new Cs,xr=new Ki,Tc=new O,yr=new O,vr=new O,Mr=new O,Na=new O,Sr=new O,Ac=new O,br=new O,F=class extends Ge{constructor(t=new Ze,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Na.fromBufferAttribute(d,t),o?Sr.addScaledVector(Na,h):Sr.addScaledVector(Na.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(xr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(xr,Tc)===null||Mi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,A=w;b<A;b+=3){let E=a.getX(b),g=a.getX(b+1),S=a.getX(b+2);s=Er(this,p,t,n,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let y=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Er(this,o,t,n,c,h,d,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,A=w;b<A;b+=3){let E=b,g=b+1,S=b+2;s=Er(this,p,t,n,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let y=m,w=m+1,b=m+2;s=Er(this,o,t,n,c,h,d,y,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jd(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,yr),i.getVertexPosition(l,vr),i.getVertexPosition(c,Mr);let h=jd(i,t,e,n,yr,vr,Mr,Ac);if(h){let d=new O;ni.getBarycoord(Ac,yr,vr,Mr,d),s&&(h.uv=ni.getInterpolatedAttribute(s,a,l,c,d,new Wt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,a,l,c,d,new Wt)),o&&(h.normal=ni.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};ni.getNormal(yr,vr,Mr,u.normal),h.face=u,h.barycoord=d}return h}var Vr=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=De,h=De,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new Ki,tf=new Wt(.5,.5),wr=new O,ri=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],M=r[9],m=r[10],p=r[11],y=r[12],w=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,p-_,A-y).normalize(),s[1].setComponents(c+o,f+h,p+_,A+y).normalize(),s[2].setComponents(c+a,f+d,p+M,A+w).normalize(),s[3].setComponents(c-a,f-d,p-M,A-w).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,p-m,A-b).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-b).normalize(),e===cn)s[5].setComponents(c+l,f+u,p+m,A+b).normalize();else if(e===Xi)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);let e=tf.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rc=new pe,Wr=class i{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Rc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(Rc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Is=class extends Ye{constructor(t=[],e=wi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ps=class extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Ye{constructor(t,e,n=yn,s,r,o,a=De,l=De,c,h=Vn,d=1){if(h!==Vn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ls=class extends Xn{constructor(t,e=yn,n=wi,s,r,o=De,a=De,l,c=Vn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ds=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rt=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function _(M,m,p,y,w,b,A,E,g,S,P){let R=b/g,L=A/S,U=b/2,G=A/2,I=E/2,V=g+1,$=S+1,H=0,nt=0,W=new O;for(let tt=0;tt<$;tt++){let et=tt*L-G;for(let vt=0;vt<V;vt++){let Mt=vt*R-U;W[M]=Mt*y,W[m]=et*w,W[p]=I,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(vt/g),d.push(1-tt/S),H+=1}}for(let tt=0;tt<S;tt++)for(let et=0;et<g;et++){let vt=u+et+V*tt,Mt=u+et+V*(tt+1),q=u+(et+1)+V*(tt+1),rt=u+(et+1)+V*tt;l.push(vt,Mt,rt),l.push(Mt,q,rt),nt+=6}a.addGroup(f,nt,P),f+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qi=class i extends Ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,_=n*2+r,M=s+1,m=new O,p=new O;for(let y=0;y<=_;y++){let w=0,b=0,A=0,E=0;if(y<=n){let P=y/n,R=P*Math.PI/2;b=-h-t*Math.cos(R),A=t*Math.sin(R),E=-t*Math.cos(R),w=P*d}else if(y<=n+r){let P=(y-n)/r;b=-h+P*e,A=t,E=0,w=d+P*u}else{let P=(y-n-r)/n,R=P*Math.PI/2;b=h+t*Math.sin(R),A=t*Math.cos(R),E=t*Math.sin(R),w=d+u+P*d}let g=Math.max(0,Math.min(1,w/f)),S=0;y===0?S=.5/s:y===_&&(S=-.5/s);for(let P=0;P<=s;P++){let R=P/s,L=R*Math.PI*2,U=Math.sin(L),G=Math.cos(L);p.x=-A*G,p.y=b,p.z=A*U,a.push(p.x,p.y,p.z),m.set(-A*G,E,A*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,g)}if(y>0){let P=(y-1)*M;for(let R=0;R<s;R++){let L=P+R,U=P+R+1,G=y*M+R,I=y*M+R+1;o.push(L,U,G),o.push(U,I,G)}}}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},In=class i extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new Wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gt=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,M=[],m=n/2,p=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function y(){let b=new O,A=new O,E=0,g=(e-t)/n;for(let S=0;S<=r;S++){let P=[],R=S/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let G=U/s,I=G*l+a,V=Math.sin(I),$=Math.cos(I);A.x=L*V,A.y=-R*n+m,A.z=L*$,d.push(A.x,A.y,A.z),b.set(V,g,$).normalize(),u.push(b.x,b.y,b.z),f.push(G,1-R),P.push(_++)}M.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let R=M[P][S],L=M[P+1][S],U=M[P+1][S+1],G=M[P][S+1];(t>0||P!==0)&&(h.push(R,L,G),E+=3),(e>0||P!==r-1)&&(h.push(L,U,G),E+=3)}c.addGroup(p,E,0),p+=E}function w(b){let A=_,E=new Wt,g=new O,S=0,P=b===!0?t:e,R=b===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),_++;let L=_;for(let U=0;U<=s;U++){let I=U/s*l+a,V=Math.cos(I),$=Math.sin(I);g.x=P*$,g.y=m*R,g.z=P*V,d.push(g.x,g.y,g.z),u.push(0,R,0),E.x=V*.5+.5,E.y=$*.5*R+.5,f.push(E.x,E.y),_++}for(let U=0;U<s;U++){let G=A+U,I=L+U;b===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Me=class i extends Gt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xr=class i extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new O,b=new O,A=new O;for(let E=0;E<e.length;E+=3)f(e[E+0],w),f(e[E+1],b),f(e[E+2],A),l(w,b,A,y)}function l(y,w,b,A){let E=A+1,g=[];for(let S=0;S<=E;S++){g[S]=[];let P=y.clone().lerp(b,S/E),R=w.clone().lerp(b,S/E),L=E-S;for(let U=0;U<=L;U++)U===0&&S===E?g[S][U]=P:g[S][U]=P.clone().lerp(R,U/L)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let R=Math.floor(P/2);P%2===0?(u(g[S][R+1]),u(g[S+1][R]),u(g[S][R])):(u(g[S][R+1]),u(g[S+1][R+1]),u(g[S+1][R]))}}function c(y){let w=new O;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(y),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){let y=new O;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let b=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(b,1-A)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],b=o[y+2],A=o[y+4],E=Math.max(w,b,A),g=Math.min(w,b,A);E>.9&&g<.1&&(w<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let b=y*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function _(){let y=new O,w=new O,b=new O,A=new O,E=new Wt,g=new Wt,S=new Wt;for(let P=0,R=0;P<r.length;P+=9,R+=6){y.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),E.set(o[R+0],o[R+1]),g.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),A.copy(y).add(w).add(b).divideScalar(3);let L=m(A);M(E,R+0,y,L),M(g,R+2,w,L),M(S,R+4,b,L)}}function M(y,w,b,A){A<0&&y.x===1&&(o[w]=y.x-1),b.x===0&&b.z===0&&(o[w]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ns=class i extends Xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var oi=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let w=0;w<c;w++){let b=w*d-r;_.push(b,-y,0),M.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let w=y+c*p,b=y+c*(p+1),A=y+1+c*(p+1),E=y+1+c*p;f.push(w,b,E),f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ji=class i extends Ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new O,_=new Wt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let y=p+m,w=y,b=y+n+1,A=y+n+2,E=y+1;a.push(w,b,E),a.push(b,A,E)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zt=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,u=new O,f=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){let y=[],w=p/n,b=o+w*a,A=t*Math.cos(b),E=Math.sqrt(t*t-A*A),g=0;p===0&&o===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let P=S/e,R=s+P*r;d.x=-E*Math.cos(R),d.y=A,d.z=E*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(P+g,1-w),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let w=h[p][y+1],b=h[p][y],A=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(w,b,E),(p!==n-1||l<Math.PI)&&f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ai=class i extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new O,f=new O,_=new O;for(let M=0;M<=n;M++){let m=o+M/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,w=(s+1)*(M-1)+m,b=(s+1)*M+m;l.push(p,y,b),l.push(y,w,b)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Cc(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Cc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ai(i[e]);for(let s in n)t[s]=n[s]}return t}function Cc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ef(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var bh={clone:Ai,merge:He},nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qr=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hn=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $r=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yr=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ki(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zr=class extends li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oa,endingEnd:Oa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ba:r=t,a=2*e-n;break;case ka:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ba:o=t,l=2*n-e;break;case ka:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),M=_*_,m=M*_,p=-u*m+2*u*M-u*_,y=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,w=(-1-f)*m+(1.5+f)*M+.5*_,b=f*m-f*M;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+w*o[l+A]+b*o[d+A];return r}},Jr=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Kr=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qr=class extends li{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),M=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*_;return r}let u=a*2,f=t-1;for(let _=0;_!==a;++_){let M=o[c+_],m=o[l+_],p=f*u+_*2,y=d[p],w=d[p+1],b=t*u+_*2,A=h[b],E=h[b+1],g=of(n,e,y,A,s);r[_]=Eh(g,M,w,E,m)}return r}};function Eh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function of(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Eh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=rf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ki(e,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ki(t.times,Array),values:ki(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Tr(t.settings)&&(n.settings={inTangents:ki(t.settings.inTangents,Array),outTangents:ki(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case Fa:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Tr(this.settings)&&(Ic(this.settings.inTangents,t),Ic(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Tr(this.settings)&&(Pc(this.settings.inTangents,t),Pc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ot("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Md(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let M=e[d+_];if(M!==e[u+_]||M!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ic(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Pc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=kr;var ci=class extends sn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ms;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};jr.prototype.ValueTypeName="color";var to=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};to.prototype.ValueTypeName="number";var eo=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Us=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends sn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ms;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="vector";var io=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wh=new io,so=class{constructor(t){this.manager=t!==void 0?t:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};so.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ua=new pe,Lc=new O,Dc=new O,ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ua,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xi||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ar=new O,Rr=new Cn,wn=new O,Bs=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,Rr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ar,Rr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ei=new O,Nc=new Wt,Uc=new Wt,qe=class extends Bs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Uc),e.subVectors(Uc,Nc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ks=class extends Bs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},za=class extends ro{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new za}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zi=-90,Gi=1,ts=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(zi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new qe(zi,Gi,t,e);r.layers=this.layers,this.add(r);let o=new qe(zi,Gi,t,e);o.layers=this.layers,this.add(o);let a=new qe(zi,Gi,t,e);a.layers=this.layers,this.add(a);let l=new qe(zi,Gi,t,e);l.layers=this.layers,this.add(l);let c=new qe(zi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},oo=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var vl="\\[\\]\\.:\\/",af=new RegExp("["+vl+"]","g"),Ml="[^"+vl+"]",lf="[^"+vl.replace("\\.","")+"]",cf=/((?:WC+[\/:])*)/.source.replace("WC",Ml),hf=/(WCOD+)?/.source.replace("WCOD",lf),uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),ff=new RegExp("^"+cf+hf+uf+df+"$"),pf=["material","materials","bones","map"],Ga=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(af,"")}static parseTrackName(t){let e=ff.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Ga;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f_=new Float32Array(1);var Fc=new pe,Gs=class{constructor(t,e,n=0,s=1/0){this.ray=new Cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ot("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return Ha(t,this,n,e),n.sort(Oc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ha(t[s],this,n,e);return n.sort(Oc),n}};function Oc(i,t){return i.distance-t.distance}function Ha(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ha(r[o],t,e,!0)}}var Al=class Al{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Al.prototype.isMatrix2=!0;var Va=Al;function Sl(i,t,e,n){let s=mf(n);switch(e){case ll:return i*t;case hl:return i*t/s.components*s.byteLength;case go:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case _o:return i*t*2/s.components*s.byteLength;case cl:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case xo:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case So:return Math.max(i,16)*Math.max(t,8)/4;case yo:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case Eo:case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Zs:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mf(i){switch(i){case je:case sl:return{byteLength:1,components:1};case ss:case rl:case Mn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case yn:case fo:case vn:return{byteLength:4,components:1};case ol:case al:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $h(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],M=d[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`uniform sampler2D dfgLUT;
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
}`,_p=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform float backgroundBlurriness;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:yf,alphahash_pars_fragment:vf,alphamap_fragment:Mf,alphamap_pars_fragment:Sf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:If,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Gf,common:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:$f,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:op,lights_lambert_fragment:ap,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:xp,lights_fragment_end:yp,lightprobes_pars_fragment:vp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Ep,map_fragment:wp,map_pars_fragment:Tp,map_particle_fragment:Ap,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:kp,normal_vertex:zp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:$p,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Kp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:xm,background_frag:ym,backgroundCube_vert:vm,backgroundCube_frag:Mm,cube_vert:Sm,cube_frag:bm,depth_vert:Em,depth_frag:wm,distance_vert:Tm,distance_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Im,linedashed_frag:Pm,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Gm,meshphysical_vert:Hm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:$m,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Km},xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Nn={basic:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:He([xt.common,xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:He([xt.lights,xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Nn.physical={uniforms:He([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Ko={r:0,b:0,g:0},Qm=new pe,Yh=new kt;Yh.set(-1,0,0,0,1,0,0,0,1);function jm(i,t,e,n,s,r){let o=new Bt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=t.get(w,b)}return w}function _(y){let w=!1,b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new F(new Rt(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ai(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yh),c.material.toneMapped=jt.getTransfer(b.colorSpace)!==ae,(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new F(new oi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ai(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=jt.getTransfer(b.colorSpace)!==ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Ko,yl(i)),e.buffers.color.setClear(Ko.r,Ko.g,Ko.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:M,dispose:p}}function tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,U,G,I,V){let $=!1,H=d(L,I,G,U);r!==H&&(r=H,c(r.object)),$=f(L,I,G,V),$&&_(L,I,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(L,U,G,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,U,G,I){let V=I.wireframe===!0,$=n[U.id];$===void 0&&($={},n[U.id]=$);let H=L.isInstancedMesh===!0?L.id:0,nt=$[H];nt===void 0&&(nt={},$[H]=nt);let W=nt[G.id];W===void 0&&(W={},nt[G.id]=W);let tt=W[V];return tt===void 0&&(tt=u(l()),W[V]=tt),tt}function u(L){let U=[],G=[],I=[];for(let V=0;V<e;V++)U[V]=0,G[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,U,G,I){let V=r.attributes,$=U.attributes,H=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=V[W],vt=$[W];if(vt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),et===void 0||et.attribute!==vt||vt&&et.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function _(L,U,G,I){let V={},$=U.attributes,H=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=$[W];et===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let vt={};vt.attribute=et,et&&et.data&&(vt.data=et.data),V[W]=vt,H++}r.attributes=V,r.attributesNum=H,r.index=I}function M(){let L=r.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){let G=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;G[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),V[L]!==U&&(i.vertexAttribDivisor(L,U),V[L]=U)}function y(){let L=r.newAttributes,U=r.enabledAttributes;for(let G=0,I=U.length;G<I;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function w(L,U,G,I,V,$,H){H===!0?i.vertexAttribIPointer(L,U,G,V,$):i.vertexAttribPointer(L,U,G,I,V,$)}function b(L,U,G,I){M();let V=I.attributes,$=G.getAttributes(),H=U.defaultAttributeValues;for(let nt in $){let W=$[nt];if(W.location>=0){let tt=V[nt];if(tt===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let et=tt.normalized,vt=tt.itemSize,Mt=t.get(tt);if(Mt===void 0)continue;let q=Mt.buffer,rt=Mt.type,gt=Mt.bytesPerElement,Ct=rt===i.INT||rt===i.UNSIGNED_INT||tt.gpuType===fo;if(tt.isInterleavedBufferAttribute){let ft=tt.data,zt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,ge=tt.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)p(W.location+At,ft.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);i.bindBuffer(i.ARRAY_BUFFER,q);for(let At=0;At<W.locationSize;At++)w(W.location+At,vt/W.locationSize,rt,et,zt*gt,(ge+vt/W.locationSize*At)*gt,Ct)}else{if(tt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)p(W.location+ft,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ft=0;ft<W.locationSize;ft++)w(W.location+ft,vt/W.locationSize,rt,et,vt*gt,vt/W.locationSize*ft*gt,Ct)}}else if(H!==void 0){let et=H[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}y()}function A(){P();for(let L in n){let U=n[L];for(let G in U){let I=U[G];for(let V in I){let $=I[V];for(let H in $)h($[H].object),delete $[H];delete I[V]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let G in U){let I=U[G];for(let V in I){let $=I[V];for(let H in $)h($[H].object),delete $[H];delete I[V]}}delete n[L.id]}function g(L){for(let U in n){let G=n[U];for(let I in G){let V=G[I];if(V[L.id]===void 0)continue;let $=V[L.id];for(let H in $)h($[H].object),delete $[H];delete V[L.id]}}}function S(L){for(let U in n){let G=n[U],I=L.isInstancedMesh===!0?L.id:0,V=G[I];if(V!==void 0){for(let $ in V){let H=V[$];for(let nt in H)h(H[nt].object),delete H[nt];delete V[$]}delete G[I],Object.keys(G).length===0&&delete n[U]}}}function P(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Sn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let S=g===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==je&&g!==vn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:E}}function ig(i){let t=this,e=null,n=0,s=!1,r=!1,o=new _n,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,b=p.clippingState||null;l.value=b,b=h(_,u,w,f);for(let A=0;A!==w;++A)b[A]=e[A];p.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let p=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==M;++w,b+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var js=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:bi});r.uniforms.tEquirect.value=e;let o=new F(s,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=$e),new ts(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Th=256,sg=3,rg=20,Zh=256,Jh=16,og=3,ag=new O,lg=new Bt,jo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ts(1,10,null),this._boxMesh=new F(new Rt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ag}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(lg));let m=new ts(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Th,_l(t))}_fromTexture(t,e){t.mapping===wi||t.mapping===is?this._setSize(t.image.length===0?Th:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ah(t,!1,!1),n=Math.log2(t)-sg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ah(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===wi||t.mapping===is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=cg(),this._integrationMaterial=hg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Jh);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-og)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Zh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ug());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ah(i,t,e){return new js(i,{minFilter:qn,generateMipmaps:t,type:Mn,colorSpace:Ss,depthBuffer:e})}function tr(i,t,e){return new Pn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Je,blending:bi,depthTest:!1,depthWrite:!1})}function cg(){return tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zh}u

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
	`)}function hg(){return tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jh}},`

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
	`)}function ug(){return tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rg}
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
	`)}function Rh(){return tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ch(){return tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===co||f===ho)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new js(_.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===co||f===ho,M=f===wi||f===is;if(_||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new jo(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return _&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new jo(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===co?u.mapping=wi:f===ho&&(u.mapping=is),u}function l(u){let f=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let M=r.get(_);M&&(t.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(_){let M=_.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function d(_){let M=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let y=M!==null?M.array.length:m.array.length/3-1,w=m.count>=65535?Rs:As,b=new w(Math.ceil(y/3)*6,1),A=b.array;if(M!==null){let g=M.array;p=M.version;for(let S=0,P=0;S<y;S+=3){let R=g[S+0],L=g[S+1],U=g[S+2];A[P++]=R,A[P++]=L,A[P++]=L,A[P++]=U,A[P++]=U,A[P++]=R}}else{p=m.version;for(let g=0,S=0;g<y;g+=3){let P=g+0,R=g+1,L=g+2;A[S++]=P,A[S++]=R,A[S++]=R,A[S++]=L,A[S++]=L,A[S++]=P}}b.version=p;let E=r.get(_);E&&t.remove(E),r.set(_,b)}function u(_){let M=r.get(_);if(M){let m=_.index;m!==null&&M.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function mg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){let n=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),_===!0&&(w=2),M===!0&&(w=3);let b=a.attributes.position.count*w,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*A*4*d),g=new ws(E,b,A,d);g.type=vn,g.needsUpdate=!0;let S=w*4;for(let R=0;R<d;R++){let L=m[R],U=p[R],G=y[R],I=b*A*4*R;for(let V=0;V<L.count;V++){let $=V*S;f===!0&&(s.fromBufferAttribute(L,V),E[I+$+0]=s.x,E[I+$+1]=s.y,E[I+$+2]=s.z,E[I+$+3]=0),_===!0&&(s.fromBufferAttribute(U,V),E[I+$+4]=s.x,E[I+$+5]=s.y,E[I+$+6]=s.z,E[I+$+7]=0),M===!0&&(s.fromBufferAttribute(G,V),E[I+$+8]=s.x,E[I+$+9]=s.y,E[I+$+10]=s.z,E[I+$+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Wt(b,A)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var yg={[Ka]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[ja]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[el]:"AGX_TONE_MAPPING",[nl]:"NEUTRAL_TONE_MAPPING",[tl]:"CUSTOM_TONE_MAPPING"};function vg(i,t,e,n,s,r){let o=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ze;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let d=new qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new F(h,d),f=new ks(-1,1,1,-1,0,1),_=null,M=null,m=!1,p,y=null,w=[],b=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let g=0;g<w.length;g++){let S=w[g];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){w=A,b=w.length>0&&w[0].isRenderPass===!0;let E=o.width,g=o.height;w.length>0&&a===null&&(a=new nn(E,g,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(E,g,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Xn(E,g),r===!0&&(c.format=$n,c.type=Ti)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<w.length;P++){let R=w[P];R.setSize&&R.setSize(E,g),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,E){if(m||A.toneMapping===Ln&&w.length===0)return!1;if(y=E,E!==null){let g=E.width,S=E.height;(o.width!==g||o.height!==S)&&this.setSize(g,S)}return b===!1&&A.setRenderTarget(o),p=A.toneMapping,A.toneMapping=Ln,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=p,m=!0;let g=o,S=a;for(let P=0;P<w.length;P++){let R=w[P];R.enabled!==!1&&(R.render(A,S,g,E),R.needsSwap!==!1&&(g=S,S=S===a?l:a))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,d.defines={},jt.getTransfer(_)===ae&&(d.defines.SRGB_TRANSFER="");let P=yg[M];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(y),A.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Kh=new Ye,Qh=new Xn(1,1),jh=new Ls(1),tu=new ws,eu=new Hr,nu=new Is,Ih=[],Ph=[],Lh=new Float32Array(16),Dh=new Float32Array(9),Nh=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Re(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Re(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Re(e,n)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function na(i){return i.version===0&&(i.compareFunction=fl,i.needsUpdate=!0),i}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=na(Qh):r=Kh,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=na(jh):r=nu,e.setTextureCube(t||r,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function zg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Ig;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Hg(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Vg(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $g(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=na(Qh):o=Kh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||eu,r[o])}function s0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=na(jh):o=nu;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function r0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tu,r[o])}function o0(i){switch(i){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return $g;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return Qg;case 36294:return jg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}},Ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function a0(i,t,e){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),o=Rl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uh(e,c===void 0?new Il(a,i,t):new Pl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ll(a),Uh(e,d)),e=d}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);a0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l0=37297,c0=0;function h0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Oh=new kt;function u0(i){jt._getMatrix(Oh,jt.workingColorSpace,i);let t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+h0(i.getShaderSource(t),a)}else return r}function d0(i,t){let e=u0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var f0={[Ka]:"Linear",[Qa]:"Reinhard",[ja]:"Cineon",[Vs]:"ACESFilmic",[el]:"AgX",[nl]:"Neutral",[tl]:"Custom"};function p0(i,t){let e=f0[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qo=new O;function m0(){jt.getLuminanceCoefficients(Qo);let i=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function _0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(y0,v0)}function v0(i,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Dl(e)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(M0,S0)}function S0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var b0={[Hs]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function E0(i){return b0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w0={[is]:"ENVMAP_MODE_REFRACTION"};function T0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":w0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A0={[Ja]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function R0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A0[i.combine]||"ENVMAP_BLENDING_NONE"}function C0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=E0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=T0(e),d=R0(e),u=g0(e),f=_0(r),_=s.createProgram(),M,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qs).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(M=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ln?p0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),m0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Dl(o),o=kh(o,e),o=zh(o,e),a=Dl(a),a=kh(a,e),a=zh(a,e),o=Gh(o),a=Gh(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+M+o,w=p+m+a,b=Fh(s,s.VERTEX_SHADER,y),A=Fh(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",G=s.getShaderInfoLog(A)||"",I=L.trim(),V=U.trim(),$=G.trim(),H=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,A);else{let W=Bh(s,b,"vertex"),tt=Bh(s,A,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+tt)}else I!==""?Ut("WebGLProgram: Program Info Log:",I):(V===""||$==="")&&(nt=!1);nt&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:V,prefix:M},fragmentShader:{log:$,prefix:m}})}s.deleteShader(b),s.deleteShader(A),g=new os(s,_),S=x0(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,l0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var I0=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ul(t),e.set(t,n)),n}},Ul=class{constructor(t){this.id=I0++,this.code=t,this.usedTimes=0}};function P0(i){return i===di||i===Zs||i===Js}function L0(i,t,e,n,s,r){let o=new Zi,a=new Nl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,P,R,L,U){let G=R.fog,I=L.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||V,$),nt=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Ut("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=tt!==void 0?tt.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let Mt,q,rt,gt;if(nt){let _t=Nn[nt];Mt=_t.vertexShader,q=_t.fragmentShader}else{Mt=g.vertexShader,q=g.fragmentShader;let _t=a.getVertexShaderStage(g),le=a.getFragmentShaderStage(g);a.update(g,_t,le),rt=_t.id,gt=le.id}let Ct=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,At=!!g.map,se=!!g.matcap,oe=!!H,Yt=oe&&H.isPMREMTexture===!0,Se=!!g.aoMap,ye=!!g.lightMap,Ne=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,an=!!g.displacementMap,xe=!!g.emissiveMap,Ve=!!g.metalnessMap,Fe=!!g.roughnessMap,be=g.anisotropy>0,N=g.clearcoat>0,Qe=g.diffuseRoughness>0,ce=g.dispersion>0,ie=g.retroreflectivity>0,pt=g.iridescence>0,ve=g.sheen>0,It=g.transmission>0,Lt=be&&!!g.anisotropyMap,T=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,it=Qe&&!!g.diffuseRoughnessMap,j=pt&&!!g.iridescenceMap,at=pt&&!!g.iridescenceThicknessMap,lt=ve&&!!g.sheenColorMap,Z=ve&&!!g.sheenRoughnessMap,J=!!g.specularMap,ht=!!g.specularColorMap,C=!!g.specularIntensityMap,Q=It&&!!g.transmissionMap,Y=It&&!!g.thicknessMap,ut=!!g.gradientMap,ot=!!g.alphaMap,ct=g.alphaTest>0,Tt=!!g.alphaHash,qt=!!g.extensions,st=Ln;g.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(st=i.toneMapping);let Pt=Yt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Xt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Mt,fragmentShader:q,defines:g.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:At,matcap:se,envMap:oe,envMapMode:oe&&H.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?Pt.length-1:null,envMapSize:Yt?Pt[0].width:null,aoMap:Se,lightMap:ye,bumpMap:Ne,normalMap:ue,displacementMap:an,emissiveMap:xe,normalMapObjectSpace:ue&&g.normalMapType===lh,normalMapTangentSpace:ue&&g.normalMapType===Zo,packedNormalMap:ue&&g.normalMapType===Zo&&P0(g.normalMap.format),metalnessMap:Ve,roughnessMap:Fe,anisotropy:be,anisotropyMap:Lt,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Qe,diffuseRoughnessMap:it,dispersion:ce,retroreflection:ie,iridescence:pt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:ve,sheenColorMap:lt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ht,specularIntensityMap:C,transmission:It,transmissionMap:Q,thicknessMap:Y,gradientMap:ut,opaque:g.transparent===!1&&g.blending===ns&&g.alphaToCoverage===!1,alphaMap:ot,alphaTest:ct,alphaHash:Tt,combine:g.combine,mapUv:At&&f(g.map.channel),aoMapUv:Se&&f(g.aoMap.channel),lightMapUv:ye&&f(g.lightMap.channel),bumpMapUv:Ne&&f(g.bumpMap.channel),normalMapUv:ue&&f(g.normalMap.channel),displacementMapUv:an&&f(g.displacementMap.channel),emissiveMapUv:xe&&f(g.emissiveMap.channel),metalnessMapUv:Ve&&f(g.metalnessMap.channel),roughnessMapUv:Fe&&f(g.roughnessMap.channel),anisotropyMapUv:Lt&&f(g.anisotropyMap.channel),clearcoatMapUv:T&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(g.sheenRoughnessMap.channel),specularMapUv:J&&f(g.specularMap.channel),specularColorMapUv:ht&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:Q&&f(g.transmissionMap.channel),thicknessMapUv:Y&&f(g.thicknessMap.channel),alphaMapUv:ot&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ue||be),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(At||ot),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&g.map.isVideoTexture===!0&&jt.getTransfer(g.map.colorSpace)===ae,decodeVideoTextureEmissive:xe&&g.emissiveMap.isVideoTexture===!0&&jt.getTransfer(g.emissiveMap.colorSpace)===ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===rn,flipSided:g.side===Je,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&g.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function M(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)S.push(P),S.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(m(S,g),p(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){let S=u[g.type],P;if(S){let R=Nn[S];P=bh.clone(R.uniforms)}else P=g.uniforms;return P}function w(g,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new C0(i,S,g,s),c.push(P),h.set(S,P)),P}function b(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function D0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function N0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,M,m,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=_,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,f,_,M,m,p,y){y.reversedDepth===!0&&(m=-m);let w=a(u,f,_,M,m,p);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function c(u,f,_,M,m,p){let y=a(u,f,_,M,m,p);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||N0),n.length>1&&n.sort(f||Vh),s.length>1&&s.sort(f||Vh)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function U0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wh,i.set(n,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function F0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Bt};break;case"SpotLight":e={position:new O,direction:new O,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function O0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var B0=0;function k0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z0(i){let t=new F0,e=O0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new pe,o=new pe;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,y=0,w=0,b=0,A=0,E=0,g=0,S=0,P=0,R=0;c.sort(k0);for(let U=0,G=c.length;U<G;U++){let I=c[U],V=I.color,$=I.intensity,H=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===di?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*$,d+=V.g*$,u+=V.b*$;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],$);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=et,n.sunShadowMap[_]=nt;let vt=tt.getViewportCount();for(let Mt=0;Mt<vt;Mt++)n.sunShadowMatrix[M+Mt]=tt.getMatrix(Mt),n.sunShadowCascade[M+Mt]=tt._cascadeData[Mt];M+=vt,_++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar($),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let tt=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,tt.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[y]=tt.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=nt,g++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(V).multiplyScalar($),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=W,p++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar($),W.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[b]=W,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==b||L.numSunShadows!==_||L.numDirectionalShadows!==A||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==S||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=b,L.numSunShadows=_,L.numDirectionalShadows=A,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=S,L.numLightProbes=R,n.version=B0++)}function l(c,h){let d=0,u=0,f=0,_=0,M=0,m=0,p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(b.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(b.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Xh(i){let t=new z0(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function G0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xh(i),t.set(s,[a])):r>=o.length?(a=new Xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`,W0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],X0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],qh=new pe,Ks=new O,Cl=new O;function q0(i,t,e){let n=new ri,s=new Wt,r=new Wt,o=new me,a=new $r,l=new Yr,c={},h=e.maxTextureSize,d={[ui]:Je,[Je]:ui,[rn]:rn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new F(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let p=this.type;this.render=function(E,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===lo&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=E.length;I<V;I++){let $=E[I],H=$.shadow;if(H===void 0){Ut("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let nt=H.getFrameExtents();s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===es){if($.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:di,type:Mn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Xn(s.x,s.y,vn),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De}else $.isPointLight?(H.map=new js(s.x),H.map.depthTexture=new Ls(s.x,yn)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new Xn(s.x,s.y,yn)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===Hs?(H.map.depthTexture.compareFunction=W?dl:ul,H.map.depthTexture.minFilter=$e,H.map.depthTexture.magFilter=$e):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,S);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let vt=0;vt<tt;vt++){let Mt=H.getCamera(vt);if($.isPointLight){let q=H.camera,rt=H.matrix,gt=$.distance||q.far;gt!==q.far&&(q.far=gt,q.updateProjectionMatrix()),Ks.setFromMatrixPosition($.matrixWorld),q.position.copy(Ks),Cl.copy(q.position),Cl.add(W0[vt]),q.up.copy(X0[vt]),q.lookAt(Cl),q.updateMatrixWorld(),rt.makeTranslation(-Ks.x,-Ks.y,-Ks.z),qh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qh,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(H.map),i.clear());let q=H.getViewport(vt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(o)}n=H.getFrustum(vt),b(g,S,Mt,$,et,this.type)}H.isPointLightShadow!==!0&&this.type===es&&y(H,S),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,R,L)};function y(E,g){let S=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new nn(s.x,s.y,{format:di,type:Mn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,S,f,M,null)}function w(E,g,S,P){let R=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=S.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=R.uuid,G=g.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let V=I[G];V===void 0&&(V=R.clone(),I[G]=V,g.addEventListener("dispose",A)),R=V}if(R.visible=g.visible,R.wireframe=g.wireframe,P===es?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=S}return R}function b(E,g,S,P,R,L){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),V=E.material;if(Array.isArray(V)){let $=I.groups;for(let H=0,nt=$.length;H<nt;H++){let W=$[H],tt=V[W.materialIndex];if(tt&&tt.visible){let et=w(E,tt,P,L);E.onBeforeShadow(i,E,g,S,I,et,W),i.renderBufferDirect(S,null,I,et,E,W),E.onAfterShadow(i,E,g,S,I,et,W)}}}else if(V.visible){let $=w(E,V,P,L);E.onBeforeShadow(i,E,g,S,I,$,null),i.renderBufferDirect(S,null,I,$,E,null),E.onAfterShadow(i,E,g,S,I,$,null)}}let G=E.children;for(let I=0,V=G.length;I<V;I++)b(G[I],g,S,P,R,L)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let P=c[S],R=E.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function $0(i,t){function e(){let C=!1,Q=new me,Y=null,ut=new me(0,0,0,0);return{setMask:function(ot){Y!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){C=ot},setClear:function(ot,ct,Tt,qt,st){st===!0&&(ot*=qt,ct*=qt,Tt*=qt),Q.set(ot,ct,Tt,qt),ut.equals(Q)===!1&&(i.clearColor(ot,ct,Tt,qt),ut.copy(Q))},reset:function(){C=!1,Y=null,ut.set(-1,0,0,0)}}}function n(){let C=!1,Q=!1,Y=null,ut=null,ot=null;return{setReversed:function(ct){if(Q!==ct){let Tt=t.get("EXT_clip_control");ct?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),Q=ct;let qt=ot;ot=null,this.setClear(qt)}},getReversed:function(){return Q},setTest:function(ct){ct?ft(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!C&&(i.depthMask(ct),Y=ct)},setFunc:function(ct){if(Q&&(ct=yh[ct]),ut!==ct){switch(ct){case Pr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Dr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=ct}},setLocked:function(ct){C=ct},setClear:function(ct){ot!==ct&&(ot=ct,Q&&(ct=1-ct),i.clearDepth(ct))},reset:function(){C=!1,Y=null,ut=null,ot=null,Q=!1}}}function s(){let C=!1,Q=null,Y=null,ut=null,ot=null,ct=null,Tt=null,qt=null,st=null;return{setTest:function(Pt){C||(Pt?ft(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Pt){Q!==Pt&&!C&&(i.stencilMask(Pt),Q=Pt)},setFunc:function(Pt,Xt,_t){(Y!==Pt||ut!==Xt||ot!==_t)&&(i.stencilFunc(Pt,Xt,_t),Y=Pt,ut=Xt,ot=_t)},setOp:function(Pt,Xt,_t){(ct!==Pt||Tt!==Xt||qt!==_t)&&(i.stencilOp(Pt,Xt,_t),ct=Pt,Tt=Xt,qt=_t)},setLocked:function(Pt){C=Pt},setClear:function(Pt){st!==Pt&&(i.clearStencil(Pt),st=Pt)},reset:function(){C=!1,Q=null,Y=null,ut=null,ot=null,ct=null,Tt=null,qt=null,st=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,y=null,w=null,b=null,A=null,E=null,g=null,S=new Bt(0,0,0),P=0,R=!1,L=null,U=null,G=null,I=null,V=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=nt>=2);let tt=null,et={},vt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),q=new me().fromArray(vt),rt=new me().fromArray(Mt);function gt(C,Q,Y,ut){let ot=new Uint8Array(4),ct=i.createTexture();i.bindTexture(C,ct),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<Y;Tt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(Q+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ct}let Ct={};Ct[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(Vi),Ne(!1),ue(Wa),ft(i.CULL_FACE),Se(bi);function ft(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function zt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ge(C,Q){return u[C]!==Q?(i.bindFramebuffer(C,Q),u[C]=Q,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function At(C,Q){let Y=_,ut=!1;if(C){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let ot=C.textures;if(Y.length!==ot.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Tt=ot.length;ct<Tt;ct++)Y[ct]=i.COLOR_ATTACHMENT0+ct;Y.length=ot.length,ut=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Y)}function se(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let oe={[Ei]:i.FUNC_ADD,[Gc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};oe[Vc]=i.MIN,oe[Wc]=i.MAX;let Yt={[Xc]:i.ZERO,[qc]:i.ONE,[$c]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[jc]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Qc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[th]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[nh]:i.CONSTANT_ALPHA,[ih]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(C,Q,Y,ut,ot,ct,Tt,qt,st,Pt){if(C===bi){m===!0&&(zt(i.BLEND),m=!1);return}if(m===!1&&(ft(i.BLEND),m=!0),C!==zc){if(C!==p||Pt!==R){if((y!==Ei||A!==Ei)&&(i.blendEquation(i.FUNC_ADD),y=Ei,A=Ei),Pt)switch(C){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",C);break}else switch(C){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qa:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",C);break}w=null,b=null,E=null,g=null,S.set(0,0,0),P=0,p=C,R=Pt}return}ot=ot||Q,ct=ct||Y,Tt=Tt||ut,(Q!==y||ot!==A)&&(i.blendEquationSeparate(oe[Q],oe[ot]),y=Q,A=ot),(Y!==w||ut!==b||ct!==E||Tt!==g)&&(i.blendFuncSeparate(Yt[Y],Yt[ut],Yt[ct],Yt[Tt]),w=Y,b=ut,E=ct,g=Tt),(qt.equals(S)===!1||st!==P)&&(i.blendColor(qt.r,qt.g,qt.b,st),S.copy(qt),P=st),p=C,R=!1}function ye(C,Q){C.side===rn?zt(i.CULL_FACE):ft(i.CULL_FACE);let Y=C.side===Je;Q&&(Y=!Y),Ne(Y),C.blending===ns&&C.transparent===!1?Se(bi):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ut=C.stencilWrite;a.setTest(ut),ut&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function ue(C){C!==Bc?(ft(i.CULL_FACE),C!==U&&(C===Wa?i.cullFace(i.BACK):C===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),U=C}function an(C){C!==G&&(H&&i.lineWidth(C),G=C)}function xe(C,Q,Y){C?(ft(i.POLYGON_OFFSET_FILL),(I!==Q||V!==Y)&&(I=Q,V=Y,o.getReversed()&&(Q=-Q,Y=-Y),i.polygonOffset(Q,Y))):zt(i.POLYGON_OFFSET_FILL)}function Ve(C){C?ft(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function Fe(C){C===void 0&&(C=i.TEXTURE0+$-1),tt!==C&&(i.activeTexture(C),tt=C)}function be(C,Q,Y){Y===void 0&&(tt===null?Y=i.TEXTURE0+$-1:Y=tt);let ut=et[Y];ut===void 0&&(ut={type:void 0,texture:void 0},et[Y]=ut),(ut.type!==C||ut.texture!==Q)&&(tt!==Y&&(i.activeTexture(Y),tt=Y),i.bindTexture(C,Q||Ct[C]),ut.type=C,ut.texture=Q)}function N(){let C=et[tt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ie(){try{i.texSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function pt(){try{i.texSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Lt(){try{i.texStorage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function it(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function j(C,Q){d[C]!==Q&&(i.pixelStorei(C,Q),d[C]=Q)}function at(C){q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function lt(C){rt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),rt.copy(C))}function Z(C,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let ut=Y.get(C);ut===void 0&&(ut=i.getUniformBlockIndex(Q,C.name),i.uniformBlockBinding(Q,ut,ut),Y.set(C,ut))}function J(C,Q,Y){let ot=c.get(Q).get(C);l[ot]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,Y),l[ot]=Y)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,et={},u={},l={},f=new WeakMap,_=[],M=null,m=!1,p=null,y=null,w=null,b=null,A=null,E=null,g=null,S=new Bt(0,0,0),P=0,R=!1,L=null,U=null,G=null,I=null,V=null,q.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:zt,bindFramebuffer:ge,drawBuffers:At,useProgram:se,setBlending:Se,setMaterial:ye,setFlipSided:Ne,setCullFace:ue,setLineWidth:an,setPolygonOffset:xe,setScissorTest:Ve,activeTexture:Fe,bindTexture:be,unbindTexture:N,compressedTexImage2D:Qe,compressedTexImage3D:ce,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Lt,texStorage3D:T,texSubImage2D:ie,texSubImage3D:pt,compressedTexSubImage2D:ve,compressedTexSubImage3D:It,scissor:at,viewport:lt,reset:ht}}function Y0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,M=new FinalizationRegistry(T=>_.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,x){return m?new OffscreenCanvas(T,x):Es("canvas")}function y(T,x,B){let it=1,j=Lt(T);if((j.width>B||j.height>B)&&(it=B/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(it*j.width),lt=Math.floor(it*j.height);u===void 0&&(u=p(at,lt));let Z=x?p(at,lt):u;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(T,0,0,at,lt),Ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+lt+")."),Z}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,B,it,j,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let lt;it&&(lt=t.get("EXT_texture_norm16"),lt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),B===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),B===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),B===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let J=at?bs:jt.getTransfer(j);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=J===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),B===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(T,x){let B;return T?x===null||x===yn||x===Ti?B=i.DEPTH24_STENCIL8:x===vn?B=i.DEPTH32F_STENCIL8:x===ss&&(B=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yn||x===Ti?B=i.DEPTH_COMPONENT24:x===vn?B=i.DEPTH_COMPONENT32F:x===ss&&(B=i.DEPTH_COMPONENT16),B}function S(T,x){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){let x=new WeakRef(T);n.get(T).__ref=x,_.add(x),M.register(T,x,x)}function R(T){let x=n.get(T).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function L(T){G(T.target)}function U(T){I(T.target)}function G(T){T.removeEventListener("dispose",L),R(T),$(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",U),R(T),nt(T)}function V(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):G(x))}_.clear(),d.clear()}function $(T){let x=n.get(T);if(x.__webglInit===void 0)return;let B=T.source,it=f.get(B);if(it){let j=it[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(T),Object.keys(it).length===0&&f.delete(B)}n.remove(T)}function H(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let B=T.source,it=f.get(B);delete it[x.__cacheKey],o.memory.textures--}function nt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&G(B),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let at=0;at<x.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[j][at]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let it=T.textures;for(let j=0,at=it.length;j<at;j++){let lt=n.get(it[j]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(it[j])}n.remove(T)}let W=0;function tt(){W=0}function et(){return W}function vt(T){W=T}function Mt(){let T=W;return T>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function q(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function rt(T,x){let B=n.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let it=T.image;if(it===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function gt(T,x){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ct(T,x){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function ft(T,x){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Ne(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let zt={[Wi]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ge={[De]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},At={[hh]:i.NEVER,[fl]:i.ALWAYS,[uh]:i.LESS,[ul]:i.LEQUAL,[dh]:i.EQUAL,[dl]:i.GEQUAL,[fh]:i.GREATER,[ph]:i.NOTEQUAL};function se(T,x){if(x.type===vn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===uo||x.magFilter===Ws||x.magFilter===qn||x.minFilter===$e||x.minFilter===uo||x.minFilter===Ws||x.minFilter===qn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,zt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,zt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,zt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Ws&&x.minFilter!==qn||x.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L),P(x));let it=x.source,j=f.get(it);j===void 0&&(j={},f.set(it,j));let at=q(x);if(at!==T.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[at].usedTimes++;let lt=j[T.__cacheKey];lt!==void 0&&(j[T.__cacheKey].usedTimes--,lt.usedTimes===0&&H(x)),T.__cacheKey=at,T.__webglTexture=j[at].texture}return B}function Yt(T,x,B){return Math.floor(Math.floor(T/B)/x)}function Se(T,x,B,it){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,it,x.data);else{at.sort((C,Q)=>C.start-Q.start);let lt=0;for(let C=1;C<at.length;C++){let Q=at[lt],Y=at[C],ut=Q.start+Q.count,ot=Yt(Y.start,x.width,4),ct=Yt(Q.start,x.width,4);Y.start<=ut+1&&ot===ct&&Yt(Y.start+Y.count-1,x.width,4)===ot?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++lt,at[lt]=Y)}at.length=lt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,Q=at.length;C<Q;C++){let Y=at[C],ut=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),ct=ut%x.width,Tt=Math.floor(ut/x.width),qt=ot,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(i.TEXTURE_2D,0,ct,Tt,qt,st,B,it,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function ye(T,x,B){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let j=oe(T,x),at=x.source;e.bindTexture(it,T.__webglTexture,i.TEXTURE0+B);let lt=n.get(at);if(at.version!==lt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=jt.getPrimaries(jt.workingColorSpace),Pt=x.colorSpace===Yn?null:jt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Yn||st===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=y(x.image,!1,s.maxTextureSize);J=It(x,J);let ht=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Q=E(x.internalFormat,ht,C,x.normalized,x.colorSpace,x.isVideoTexture);se(it,x);let Y,ut=x.mipmaps,ot=x.isVideoTexture!==!0,ct=lt.__version===void 0||j===!0,Tt=at.dataReady,qt=S(x,J);if(x.isDepthTexture)Q=g(x.format===$n,x.type),ct&&(ot?e.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ht,C,null));else if(x.isDataTexture)if(ut.length>0){ot&&ct&&e.texStorage2D(i.TEXTURE_2D,qt,Q,ut[0].width,ut[0].height);for(let st=0,Pt=ut.length;st<Pt;st++)Y=ut[st],ot?Tt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,ht,C,Y.data):e.texImage2D(i.TEXTURE_2D,st,Q,Y.width,Y.height,0,ht,C,Y.data);x.generateMipmaps=!1}else ot?(ct&&e.texStorage2D(i.TEXTURE_2D,qt,Q,J.width,J.height),Tt&&Se(x,J,ht,C)):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ht,C,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ot&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Q,ut[0].width,ut[0].height,J.depth);for(let st=0,Pt=ut.length;st<Pt;st++)if(Y=ut[st],x.format!==Sn)if(ht!==null)if(ot){if(Tt)if(x.layerUpdates.size>0){let Xt=Sl(Y.width,Y.height,x.format,x.type);for(let _t of x.layerUpdates){let le=Y.data.subarray(_t*Xt/Y.data.BYTES_PER_ELEMENT,(_t+1)*Xt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,_t,Y.width,Y.height,1,ht,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,J.depth,ht,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,J.depth,ht,C,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,Y.width,Y.height,J.depth,0,ht,C,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ot&&ct&&e.texStorage2D(i.TEXTURE_2D,qt,Q,ut[0].width,ut[0].height);for(let st=0,Pt=ut.length;st<Pt;st++)Y=ut[st],x.format!==Sn?ht!==null?ot?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,ht,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,Y.width,Y.height,0,Y.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Tt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Y.width,Y.height,ht,C,Y.data):e.texImage2D(i.TEXTURE_2D,st,Q,Y.width,Y.height,0,ht,C,Y.data)}else if(x.isDataArrayTexture)if(ot){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Q,J.width,J.height,J.depth),Tt)if(x.layerUpdates.size>0){let st=Sl(J.width,J.height,x.format,x.type);for(let Pt of x.layerUpdates){let Xt=J.data.subarray(Pt*st/J.data.BYTES_PER_ELEMENT,(Pt+1)*st/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,J.width,J.height,1,ht,C,Xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,C,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ht,C,J.data);else if(x.isData3DTexture)ot?(ct&&e.texStorage3D(i.TEXTURE_3D,qt,Q,J.width,J.height,J.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,C,J.data)):e.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ht,C,J.data);else if(x.isFramebufferTexture){if(ct)if(ot)e.texStorage2D(i.TEXTURE_2D,qt,Q,J.width,J.height);else{let st=J.width,Pt=J.height;for(let Xt=0;Xt<qt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,Q,st,Pt,0,ht,C,null),st>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),J.parentNode!==st){st.appendChild(J),d.add(x),st.onpaint=Pt=>{let Xt=Pt.changedElements;for(let _t of d)Xt.includes(_t.image)&&(_t.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Xt=i.RGBA,_t=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,_t,le,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ot&&ct){let st=Lt(ut[0]);e.texStorage2D(i.TEXTURE_2D,qt,Q,st.width,st.height)}for(let st=0,Pt=ut.length;st<Pt;st++)Y=ut[st],ot?Tt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ht,C,Y):e.texImage2D(i.TEXTURE_2D,st,Q,ht,C,Y);x.generateMipmaps=!1}else if(ot){if(ct){let st=Lt(J);e.texStorage2D(i.TEXTURE_2D,qt,Q,st.width,st.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,C,J)}else e.texImage2D(i.TEXTURE_2D,0,Q,ht,C,J);w(x)&&x.mipmapsAutoUpdate===!0&&b(it),lt.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ne(T,x,B){if(x.image.length!==6)return;let it=oe(T,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let at=n.get(j);if(j.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+B);let lt=jt.getPrimaries(jt.workingColorSpace),Z=x.colorSpace===Yn?null:jt.getPrimaries(x.colorSpace),J=x.colorSpace===Yn||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let _t=0;_t<6;_t++)!ht&&!C?Q[_t]=y(x.image[_t],!0,s.maxCubemapSize):Q[_t]=C?x.image[_t].image:x.image[_t],Q[_t]=It(x,Q[_t]);let Y=Q[0],ut=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),ct=E(x.internalFormat,ut,ot,x.normalized,x.colorSpace),Tt=x.isVideoTexture!==!0,qt=at.__version===void 0||it===!0,st=j.dataReady,Pt=S(x,Y);se(i.TEXTURE_CUBE_MAP,x);let Xt;if(x.isDepthTexture){if(ct=g(x.format===$n,x.type),qt)if(Tt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ct,Y.width,Y.height);else for(let _t=0;_t<6;_t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,Y.width,Y.height,0,ut,ot,null)}else if(ht){Tt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ct,Y.width,Y.height);for(let _t=0;_t<6;_t++){Xt=Q[_t].mipmaps;for(let le=0;le<Xt.length;le++){let Ie=Xt[le];x.format!==Sn?ut!==null?Tt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,0,0,Ie.width,Ie.height,ut,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,ct,Ie.width,Ie.height,0,Ie.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,0,0,Ie.width,Ie.height,ut,ot,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le,ct,Ie.width,Ie.height,0,ut,ot,Ie.data)}}}else{if(Xt=x.mipmaps,Tt&&qt){Xt.length>0&&Pt++;let _t=Lt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ct,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(C){Tt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Q[_t].width,Q[_t].height,ut,ot,Q[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,Q[_t].width,Q[_t].height,0,ut,ot,Q[_t].data);for(let le=0;le<Xt.length;le++){let Zn=Xt[le].image[_t].image;Tt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,0,0,Zn.width,Zn.height,ut,ot,Zn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,ct,Zn.width,Zn.height,0,ut,ot,Zn.data)}}else{Tt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ut,ot,Q[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,ut,ot,Q[_t]);for(let le=0;le<Xt.length;le++){let Ie=Xt[le];Tt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,0,0,ut,ot,Ie.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,le+1,ct,ut,ot,Ie.image[_t])}}}w(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),at.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ue(T,x,B,it,j,at){let lt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=E(B.internalFormat,lt,Z,B.normalized,B.colorSpace),ht=n.get(x),C=n.get(B);if(C.__renderTarget=x,!ht.__hasExternalTextures){let Q=Math.max(1,x.width>>at),Y=Math.max(1,x.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,J,Q,Y,x.depth,0,lt,Z,null):e.texImage2D(j,at,J,Q,Y,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,C.__webglTexture,0,ie(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,j,C.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function an(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let it=x.depthTexture,j=it&&it.isDepthTexture?it.type:null,at=g(x.stencilBuffer,j),lt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),at,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,T)}else{let it=x.textures;for(let j=0;j<it.length;j++){let at=it[j],lt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),J=E(at.internalFormat,lt,Z,at.normalized,at.colorSpace);pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(x),J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(T,x,B){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);j.__renderTarget=x;let at=it?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),it?ft(x.depthTexture,0):rt(x.depthTexture,0);let lt=j.__webglTexture,Z=ie(x),J=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ht=x.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vn)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,lt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,lt,0);else if(x.depthTexture.format===$n)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,lt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(T){let x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let it=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=it}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)xe(x.__webglFramebuffer[it],T,it);else T.texture.mipmaps.length>0?xe(x.__webglFramebuffer[0],T,0):xe(x.__webglFramebuffer,T,0);else if(B){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),an(x.__webglDepthbuffer[it],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),an(x.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,x,B){let it=n.get(T);x!==void 0&&ue(it.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ve(T)}function be(T){let x=T.texture,B=n.get(T),it=n.get(x);T.addEventListener("dispose",U),P(T);let j=T.textures,at=T.isWebGLCubeRenderTarget===!0,lt=j.length>1;if(lt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,o.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,J=j.length;Z<J;Z++){let ht=n.get(j[Z]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&pt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let J=j[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ht=r.convert(J.format,J.colorSpace),C=r.convert(J.type),Q=E(J.internalFormat,ht,C,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),Y=ie(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),an(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),se(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ue(B.__webglFramebuffer[Z][J],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ue(B.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Z=0,J=j.length;Z<J;Z++){let ht=j[Z],C=n.get(ht),Q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,C.__webglTexture),se(Q,ht),ue(B.__webglFramebuffer,T,ht,i.COLOR_ATTACHMENT0+Z,Q,0),w(ht)&&b(Q)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),se(Z,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ue(B.__webglFramebuffer[J],T,x,i.COLOR_ATTACHMENT0,Z,J);else ue(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);w(x)?b(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Ve(T)}function N(T){let x=T.textures;for(let B=0,it=x.length;B<it;B++){let j=x[B];if(w(j)&&j.mipmapsAutoUpdate===!0){let at=A(T),lt=n.get(j).__webglTexture;e.bindTexture(at,lt),b(at),e.unbindTexture()}}}let Qe=[];function ce(T){if(T.samples>0){if(pt(T)===!1){let x=T.textures,B=T.width,it=T.height,j=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(T),Z=x.length>1;if(Z)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let C=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,it,0,0,B,it,j,i.NEAREST),l===!0&&(Qe.length=0,Qe.push(i.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Qe.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let C=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ie(T){return Math.min(s.maxSamples,T.samples)}function pt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function It(T,x){let B=T.colorSpace,it=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ss&&B!==Yn&&(jt.getTransfer(B)===ae?(it!==Sn||j!==je)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",B)),x}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=tt,this.getTextureUnits=et,this.setTextureUnits=vt,this.setTexture2D=rt,this.setTexture2DArray=gt,this.setTexture3D=Ct,this.setTextureCube=ft,this.rebindTextures=Fe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pt,this.dispose=V}function Z0(i,t){function e(n,s=Yn){let r,o=jt.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===cl)return i.RGB;if(n===Sn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===go)return i.RED_INTEGER;if(n===di)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===$s||n===Ys)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===vo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===wo||n===To||n===Ao||n===Zs||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===Eo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zs)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===$o||n===Js||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ds(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:J0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends Rn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,M=typeof XRWebGLBinding<"u",m=new Fl,p={},y=e.getContextAttributes(),w=null,b=null,A=[],E=[],g=new Wt,S=null,P=null,R=new qe;R.viewport=new me;let L=new qe;L.viewport=new me;let U=[R,L],G=new oo,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=A[q];return rt===void 0&&(rt=new Ji,A[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=A[q];return rt===void 0&&(rt=new Ji,A[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=A[q];return rt===void 0&&(rt=new Ji,A[q]=rt),rt.getHandSpace()};function $(q){let rt=E.indexOf(q.inputSource);if(rt===-1)return;let gt=A[rt];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<A.length;q++){let rt=E[q];rt!==null&&(E[q]=null,A[q].disconnect(rt))}I=null,V=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,b=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",H),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ct=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?$n:Vn,Ct=y.stencil?Ti:yn);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new nn(u.textureWidth,u.textureHeight,{format:Sn,type:je,depthTexture:new Xn(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new nn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(q){for(let rt=0;rt<q.removed.length;rt++){let gt=q.removed[rt],Ct=E.indexOf(gt);Ct>=0&&(E[Ct]=null,A[Ct].disconnect(gt))}for(let rt=0;rt<q.added.length;rt++){let gt=q.added[rt],Ct=E.indexOf(gt);if(Ct===-1){for(let zt=0;zt<A.length;zt++)if(zt>=E.length){E.push(gt),Ct=zt;break}else if(E[zt]===null){E[zt]=gt,Ct=zt;break}if(Ct===-1)break}let ft=A[Ct];ft&&ft.connect(gt)}}function W(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let rt=q.near,gt=q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),G.near=L.near=R.near=rt,G.far=L.far=R.far=gt,(I!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,V=G.far),G.layers.mask=q.layers.mask|6,R.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let Ct=q.parent,ft=G.cameras;W(G,Ct);for(let zt=0;zt<ft.length;zt++)W(ft[zt],Ct);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),tt(q,G,Ct)};function tt(q,rt,gt){gt===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$i*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let et=null;function vt(q,rt){if(h=rt.getViewerPose(c||o),_=rt,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Ct=!1;gt.length!==G.cameras.length&&(G.cameras.length=0,Ct=!0);for(let At=0;At<gt.length;At++){let se=gt[At],oe=null;if(f!==null)oe=f.getViewport(se);else{let Se=d.getViewSubImage(u,se);oe=Se.viewport,At===0&&(t.setRenderTargetTextures(b,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(b))}let Yt=U[At];Yt===void 0&&(Yt=new qe,Yt.layers.enable(At),Yt.viewport=new me,U[At]=Yt),Yt.matrix.fromArray(se.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(se.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(oe.x,oe.y,oe.width,oe.height),At===0&&(G.matrix.copy(Yt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ct===!0&&G.cameras.push(Yt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let At=d.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&m.init(At,s.renderState)}if(ft&&ft.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<gt.length;At++){let se=gt[At].camera;if(se){let oe=p[se];oe||(oe=new Ds,p[se]=oe);let Yt=d.getCameraImage(se);oe.sourceTexture=Yt}}}}for(let gt=0;gt<A.length;gt++){let Ct=E[gt],ft=A[gt];Ct!==null&&ft!==void 0&&ft.update(Ct,rt,c||o)}et&&et(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}let Mt=new $h;Mt.setAnimationLoop(vt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},Q0=new pe,iu=new kt;iu.set(-1,0,0,0,1,0,0,0,1);function j0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(iu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t_(i,t,e,n){let s={},r={};function o(y,w){let b=w.program;n.uniformBlockBinding(y,b,s[y.id])}function a(y,w){let b=s[y.id];b===void 0&&(_(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let A=w.program;n.updateUBOMapping(y,A);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=i.createBuffer(),b=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],b=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=b.length;E<g;E++){let S=b[E];if(Array.isArray(S))for(let P=0,R=S.length;P<R;P++)h(S[P],E,P,A);else h(S,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,b,A){if(u(y,w,b,A)===!0){let E=y.__offset,g=y.value;if(Array.isArray(g)){let S=0;for(let P=0;P<g.length;P++){let R=g[P],L=M(R,!0);d(R,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function d(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function u(y,w,b,A){let E=y.value,g=w+"_"+b;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let S=A[g],P=!1;for(let R=0;R<E.length;R++)f(E[R],S,R)===!0&&(P=!0);return P}return f(E,A,g)}function f(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let A=w[b];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function _(y){let w=y.uniforms,b=0,A=16;for(let g=0,S=w.length;g<S;g++){let P=Array.isArray(w[g])?w[g]:[w[g]];for(let R=0,L=P.length;R<L;R++){let U=P[R],G=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(w[g])||Array.isArray(U.value),V=b;for(let H=0,nt=G.length;H<nt;H++){let W=G[H],tt=M(W,I),et=b%A,vt=et%tt.boundary,Mt=et+vt;b+=vt,Mt!==0&&A-Mt<tt.storage&&(b+=A-Mt),H===0&&(V=b),b+=tt.storage}let $=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new $((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function M(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:p}}var e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function n_(){return Dn===null&&(Dn=new Vr(e_,16,16,di,Mn),Dn.name="DFG_LUT",Dn.minFilter=$e,Dn.magFilter=$e,Dn.wrapS=Tn,Dn.wrapT=Tn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var ta=class{constructor(t={}){let{canvas:e=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=f,m=new Set([xo,_o,go]),p=new Set([je,yn,ss,Ti,po,mo]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,G=null,I=null,V=null;this._outputColorSpace=Xe;let $=0,H=0,nt=null,W=-1,tt=null,et=new me,vt=new me,Mt=null,q=new Bt(0),rt=0,gt=e.width,Ct=e.height,ft=1,zt=null,ge=null,At=new me(0,0,gt,Ct),se=new me(0,0,gt,Ct),oe=!1,Yt=new ri,Se=new Wr,ye=!1,Ne=!1,ue=new pe,an=new O,xe=new me,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function be(){return nt===null?ft:1}let N=n;function Qe(v,D){return e.getContext(v,D)}let ce,ie,pt,ve,It,Lt,T,x,B,it,j,at,lt,Z,J,ht,C,Q,Y,ut,ot,ct,Tt;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),N===null){let D="webgl2";if(N=Qe(D,v),N===null)throw Qe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(v){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ot("WebGLRenderer: "+v.message),v}function qt(){ce=new fg(N),ce.init(),ot=new Z0(N,ce),ie=new ng(N,ce,t,ot),pt=new $0(N,ce),ie.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),G=N.createFramebuffer(),I=N.createFramebuffer(),V=N.createFramebuffer(),ve=new gg(N),It=new D0,Lt=new Y0(N,ce,pt,It,ie,ot,ve),T=new dg(R),x=new xf(N),ct=new tg(N,x),B=new pg(N,x,ve,ct),it=new xg(N,B,x,ct,ve),Q=new _g(N,ie,Lt),J=new ig(It),j=new L0(R,T,ce,ie,ct,J),at=new j0(R,It),lt=new U0,Z=new G0(ce),C=new jm(R,T,pt,it,_,l),ht=new q0(R,it,ie),Tt=new t_(N,ve,ie,pt),Y=new eg(N,ce,ve),ut=new mg(N,ce,ve),ve.programs=j.programs,R.capabilities=ie,R.extensions=ce,R.properties=It,R.renderLists=lt,R.shadowMap=ht,R.state=pt,R.info=ve}M!==je&&(P=new vg(M,e.width,e.height,a,s,r));let st=new Ol(R,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ce.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ce.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(v){v!==void 0&&(ft=v,this.setSize(gt,Ct,!1))},this.getSize=function(v){return v.set(gt,Ct)},this.setSize=function(v,D,X=!0){if(st.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=v,Ct=D,e.width=Math.floor(v*ft),e.height=Math.floor(D*ft),X===!0&&(e.style.width=v+"px",e.style.height=D+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(gt*ft,Ct*ft).floor()},this.setDrawingBufferSize=function(v,D,X){gt=v,Ct=D,ft=X,e.width=Math.floor(v*X),e.height=Math.floor(D*X),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(M===je){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(At)},this.setViewport=function(v,D,X,k){v.isVector4?At.set(v.x,v.y,v.z,v.w):At.set(v,D,X,k),pt.viewport(et.copy(At).multiplyScalar(be()).round())},this.getScissor=function(v){return v.copy(se)},this.setScissor=function(v,D,X,k){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,D,X,k),pt.scissor(vt.copy(se).multiplyScalar(be()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(v){pt.setScissorTest(oe=v)},this.setOpaqueSort=function(v){zt=v},this.setTransparentSort=function(v){ge=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,X=!0){let k=0;if(v){let z=!1;if(nt!==null){let mt=nt.texture.format;z=m.has(mt)}if(z){let mt=nt.texture.type,St=p.has(mt),dt=C.getClearColor(),yt=C.getClearAlpha(),wt=dt.r,Ht=dt.g,Kt=dt.b;St?(y[0]=wt,y[1]=Ht,y[2]=Kt,y[3]=yt,N.clearBufferuiv(N.COLOR,0,y)):(w[0]=wt,w[1]=Ht,w[2]=Kt,w[3]=yt,N.clearBufferiv(N.COLOR,0,w))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),C.dispose(),lt.dispose(),Z.dispose(),Lt.dispose(),It.dispose(),T.dispose(),it.dispose(),B.dispose(),ct.dispose(),Tt.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",nc),st.removeEventListener("sessionend",ic),gi.stop()};function Pt(v){v.preventDefault(),ml("WebGLRenderer: Context Lost."),L=!0}function Xt(){ml("WebGLRenderer: Context Restored."),L=!1;let v=ve.autoReset,D=ht.enabled,X=ht.autoUpdate,k=ht.needsUpdate,z=ht.type;qt(),ve.autoReset=v,ht.enabled=D,ht.autoUpdate=X,ht.needsUpdate=k,ht.type=z}function _t(v){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function le(v){let D=v.target;D.removeEventListener("dispose",le),Ie(D)}function Ie(v){Zn(v),It.remove(v)}function Zn(v){let D=It.get(v).programs;D!==void 0&&(D.forEach(function(X){j.releaseProgram(X)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,X,k,z,mt){D===null&&(D=Ve);let St=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=_d(v,D,X,k,z);pt.setMaterial(k,St);let yt=X.index,wt=1;if(k.wireframe===!0){if(yt=B.getWireframeAttribute(X),yt===void 0)return;wt=2}let Ht=X.drawRange,Kt=X.attributes.position,bt=Ht.start*wt,Qt=(Ht.start+Ht.count)*wt;mt!==null&&(bt=Math.max(bt,mt.start*wt),Qt=Math.min(Qt,(mt.start+mt.count)*wt)),yt!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,yt.count)):Kt!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Kt.count));let Ee=Qt-bt;if(Ee<0||Ee===1/0)return;ct.setup(z,k,dt,X,yt);let de,he=Y;if(yt!==null&&(de=x.get(yt),he=ut,he.setIndex(de)),z.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*be()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(z.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),pt.setLineWidth(Oe*be()),z.isLineSegments?he.setMode(N.LINES):z.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else z.isPoints?he.setMode(N.POINTS):z.isSprite&&he.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))he.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Oe=z._multiDrawStarts,Et=z._multiDrawCounts,We=z._multiDrawCount,re=yt?x.get(yt).bytesPerElement:1,_i=It.get(k).currentProgram.getUniforms();for(let Be=0;Be<We;Be++)_i.setValue(N,"_gl_DrawID",Be),he.render(Oe[Be]/re,Et[Be])}else if(z.isInstancedMesh)he.renderInstances(bt,Ee,z.count);else if(X.isInstancedBufferGeometry){let Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Oe);he.renderInstances(bt,Ee,Et)}else he.render(bt,Ee)};function ec(v,D,X,k){U!==null&&v.isNodeMaterial&&U.setObject(k,v),ye===!0&&J.setState(v,X,!1),v.transparent===!0&&v.side===rn&&v.forceSinglePass===!1?(v.side=Je,v.needsUpdate=!0,fs(v,D,k),v.side=ui,v.needsUpdate=!0,fs(v,D,k),v.side=rn):fs(v,D,k)}this.compile=function(v,D,X=null){X===null&&(X=v),U!==null&&U.renderStart(v,D,X),E=Z.get(X),E.init(D),S.push(E),X.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Ne=this.localClippingEnabled,ye=J.init(this.clippingPlanes,Ne),ye===!0&&J.setGlobalState(this.clippingPlanes,D),U!==null&&ht.render(E.state.shadowsArray,X,D);let k=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let dt=mt[St];ec(dt,X,D,z),k.add(dt)}else ec(mt,X,D,z),k.add(mt)}),E=S.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(v,D,X=null){let k=this.compile(v,D,X);return new Promise(z=>{function mt(){if(k.forEach(function(St){let yt=It.get(St).currentProgram;(yt===void 0||yt.isReady())&&k.delete(St)}),k.size===0){z(v);return}setTimeout(mt,10)}ce.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let pa=null;function md(v){pa&&pa(v)}function nc(){gi.stop()}function ic(){gi.start()}let gi=new $h;gi.setAnimationLoop(md),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(v){pa=v,st.setAnimationLoop(v),v===null?gi.stop():gi.start()},st.addEventListener("sessionstart",nc),st.addEventListener("sessionend",ic),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(v,D);let X=st.enabled===!0&&st.isPresenting===!0,k=P!==null&&(nt===null||X)&&P.begin(R,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,D,nt),E=Z.get(v,S.length),E.init(D),E.state.textureUnits=Lt.getTextureUnits(),S.push(E),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Se.setFromArrayCamera(D):Yt.setFromProjectionMatrix(ue,cn,D.reversedDepth),Ne=this.localClippingEnabled,ye=J.init(this.clippingPlanes,Ne),A=lt.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&ma(St,D,-1/0,R.sortObjects)}ma(v,D,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&A.sort(zt,ge),Fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Fe&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ye===!0&&J.beginShadows();let z=E.state.shadowsArray;if(ht.render(z,v,D),ye===!0&&J.endShadows(),(k&&P.hasRenderPass())===!1){let St=A.opaque,dt=A.transmissive;if(E.setupLights(),D.isArrayCamera){let yt=D.cameras;if(dt.length>0)for(let wt=0,Ht=yt.length;wt<Ht;wt++){let Kt=yt[wt];rc(St,dt,v,Kt)}Fe&&C.render(v);for(let wt=0,Ht=yt.length;wt<Ht;wt++){let Kt=yt[wt];sc(A,v,Kt,Kt.viewport)}}else dt.length>0&&rc(St,dt,v,D),Fe&&C.render(v),sc(A,v,D)}nt!==null&&H===0&&(Lt.updateMultisampleRenderTarget(nt),Lt.updateRenderTargetMipmap(nt)),k&&P.end(R),v.isScene===!0&&v.onAfterRender(R,v,D),ct.resetDefaultState(),W=-1,tt=null,S.pop(),S.length>0?(E=S[S.length-1],Lt.setTextureUnits(E.state.textureUnits),ye===!0&&J.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,U!==null&&U.renderEnd()};function ma(v,D,X,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let St=D.isArrayCamera?Se:Yt;if(!v.frustumCulled||v.intersectsFrustum(St)){k&&xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ue);let dt=it.update(v),yt=v.material;yt.visible&&A.push(v,dt,yt,X,xe.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let St=D.isArrayCamera?Se:Yt;if(!v.frustumCulled||v.intersectsFrustum(St)){let dt=it.update(v),yt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xe.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),xe.copy(dt.boundingSphere.center)),xe.applyMatrix4(v.matrixWorld).applyMatrix4(ue)),Array.isArray(yt)){let wt=dt.groups;for(let Ht=0,Kt=wt.length;Ht<Kt;Ht++){let bt=wt[Ht],Qt=yt[bt.materialIndex];Qt&&Qt.visible&&A.push(v,dt,Qt,X,xe.z,bt,D)}}else yt.visible&&A.push(v,dt,yt,X,xe.z,null,D)}}}let mt=v.children;for(let St=0,dt=mt.length;St<dt;St++)ma(mt[St],D,X,k)}function sc(v,D,X,k){let{opaque:z,transmissive:mt,transparent:St}=v;E.setupLightsView(X),ye===!0&&J.setGlobalState(R.clippingPlanes,X),k&&pt.viewport(et.copy(k)),z.length>0&&ar(z,D,X),mt.length>0&&ar(mt,D,X),St.length>0&&ar(St,D,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function rc(v,D,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let bt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new nn(1,1,{generateMipmaps:!0,type:bt?Mn:je,minFilter:qn,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let mt=E.state.transmissionRenderTarget[k.id],St=k.viewport||et;mt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),yt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(q),rt=R.getClearAlpha(),rt<1&&R.setClearColor(16777215,.5),R.clear(),Fe&&C.render(X);let Ht=R.toneMapping;R.toneMapping=Ln;let Kt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ye===!0&&J.setGlobalState(R.clippingPlanes,k),ar(v,X,k),Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,Ee=D.length;Qt<Ee;Qt++){let de=D[Qt],{object:he,geometry:Oe,material:Et,group:We}=de;if(Et.side===rn&&he.layers.test(k.layers)){let re=Et.side;Et.side=Je,Et.needsUpdate=!0,oc(he,X,k,Oe,Et,We),Et.side=re,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt))}R.setRenderTarget(dt,yt,wt),R.setClearColor(q,rt),Kt!==void 0&&(k.viewport=Kt),R.toneMapping=Ht}function ar(v,D,X){let k=D.isScene===!0?D.overrideMaterial:null;for(let z=0,mt=v.length;z<mt;z++){let St=v[z],{object:dt,geometry:yt,group:wt}=St,Ht=St.material;Ht.allowOverride===!0&&k!==null&&(Ht=k),dt.layers.test(X.layers)&&oc(dt,D,X,yt,Ht,wt)}}function oc(v,D,X,k,z,mt){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(R,D,X,k,z,mt),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(R,D,X,k,v,mt),z.transparent===!0&&z.side===rn&&z.forceSinglePass===!1?(z.side=Je,z.needsUpdate=!0,R.renderBufferDirect(X,D,k,z,v,mt),z.side=ui,z.needsUpdate=!0,R.renderBufferDirect(X,D,k,z,v,mt),z.side=rn):R.renderBufferDirect(X,D,k,z,v,mt),v.onAfterRender(R,D,X,k,z,mt)}function ac(v){let D=0;for(let X of v)X.texture!==null&&D++;return D}function fs(v,D,X){D.isScene!==!0&&(D=Ve);let k=It.get(v),z=E.state.lights,mt=E.state.shadowsArray,St=z.state.version,dt=j.getParameters(v,z.state,mt,D,X,E.state.lightProbeGridArray),yt=j.getProgramCacheKey(dt),wt=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=T.get(v.envMap||k.environment,Ht),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",le),wt=new Map,k.programs=wt,k.programVariants=new Map);let Kt=wt.get(yt);if(Kt!==void 0){if(k.currentProgram===Kt&&k.lightsStateVersion===St)return cc(v,dt),Kt}else dt.uniforms=j.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,X,dt),v.onBeforeCompile(dt,R),Kt=j.acquireProgram(dt,yt),wt.set(yt,Kt),k.uniforms=dt.uniforms;let bt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=J.uniform),cc(v,dt),k.needsLights=yd(v),k.lightsStateVersion=St,k.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=ac(E.state.lightProbeGridArray),k.currentProgram=Kt,k.uniformsList=null,Kt}function gd(v,D,X,k,z){let mt=It.get(v),St=mt.currentProgram.id+","+k+","+z,dt=mt.programVariants.get(St);return dt===void 0?(dt=fs(v,D,X),mt.programVariants.set(St,dt)):(mt.currentProgram=dt,mt.uniformsList=null,mt.outputColorSpace=k,mt.toneMapping=z),dt}function lc(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=os.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function cc(v,D){let X=It.get(v);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function _d(v,D,X,k,z){D.isScene!==!0&&(D=Ve),Lt.resetTextureUnits();let mt=D.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,dt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,wt=T.get(k.envMap||St,yt),Ht=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),bt=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,Ee=!!X.morphAttributes.color,de=Ln;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(de=R.toneMapping);let he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Oe=he!==void 0?he.length:0,Et=It.get(k),We=E.state.lights;if(ye===!0&&(Ne===!0||v!==tt)){let _e=v===tt&&k.id===W;J.setState(k,v,_e)}let re=!1,_i=!1;k.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==We.state.version||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==wt||k.fog===!0&&Et.fog!==mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==Ht||Et.vertexTangents!==Kt||Et.morphTargets!==bt||Et.morphNormals!==Qt||Et.morphColors!==Ee||Et.morphTargetsCount!==Oe||Et.numLightProbeGrids!==ac(E.state.lightProbeGridArray)?re=!0:(Et.outputColorSpace!==dt||Et.toneMapping!==de)&&(_i=!0):(re=!0,Et.__version=k.version);let Be=Et.currentProgram;(re===!0||_i===!0)&&(Be=_i===!0?gd(k,D,z,dt,de):fs(k,D,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Be,Et));let lr=!1,Jn=!1,xi=!1,ee=Be.getUniforms(),Ue=Et.uniforms;if(pt.useProgram(Be.program)&&(lr=!0,Jn=!0,xi=!0),k.id!==W&&(W=k.id,Jn=!0),lr||tt!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ee.setValue(N,"projectionMatrix",v.projectionMatrix),ee.setValue(N,"viewMatrix",v.matrixWorldInverse);let Pe=ee.map.cameraPosition;Pe!==void 0&&Pe.setValue(N,an.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&ee.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ee.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,Jn=!0,xi=!0)}if(Et.needsLights&&(We.state.sunShadowMap.length>0&&ee.setValue(N,"sunShadowMap",We.state.sunShadowMap,Lt),We.state.directionalShadowMap.length>0&&ee.setValue(N,"directionalShadowMap",We.state.directionalShadowMap,Lt),We.state.spotShadowMap.length>0&&ee.setValue(N,"spotShadowMap",We.state.spotShadowMap,Lt),We.state.pointShadowMap.length>0&&ee.setValue(N,"pointShadowMap",We.state.pointShadowMap,Lt)),z.isSkinnedMesh){ee.setOptional(N,z,"bindMatrix"),ee.setOptional(N,z,"bindMatrixInverse");let _e=z.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ee.setValue(N,"boneTexture",_e.boneTexture,Lt))}z.isBatchedMesh&&(ee.setOptional(N,z,"batchingTexture"),ee.setValue(N,"batchingTexture",z._matricesTexture,Lt),ee.setOptional(N,z,"batchingIdTexture"),ee.setValue(N,"batchingIdTexture",z._indirectTexture,Lt),ee.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ee.setValue(N,"batchingColorTexture",z._colorsTexture,Lt));let fn=X.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Q.update(z,X,Be),(Jn||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,ee.setValue(N,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(Ue.envMapIntensity.value=D.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=n_()),Jn){if(ee.setValue(N,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&xd(Ue,xi),mt&&k.fog===!0&&at.refreshFogUniforms(Ue,mt),at.refreshMaterialUniforms(Ue,k,ft,Ct,E.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){let _e=b,Pe=0;for(let Fn of E.state.lightProbeGridArray)Fn.texture!==null&&(_e.textures[Pe]=Fn.texture,_e.min[Pe]=Fn.boundingBox.min,_e.max[Pe]=Fn.boundingBox.max,_e.resolution[Pe]=Fn.resolution,Pe++);for(let Fn in _e)_e[Fn].length=Pe;Ue.probesSH.value=_e.textures,Ue.probesMin.value=_e.min,Ue.probesMax.value=_e.max,Ue.probesResolution.value=_e.resolution}os.upload(N,lc(Et),Ue,Lt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(os.upload(N,lc(Et),Ue,Lt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ee.setValue(N,"center",z.center),ee.setValue(N,"modelViewMatrix",z.modelViewMatrix),ee.setValue(N,"normalMatrix",z.normalMatrix),ee.setValue(N,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let Pe=0,Fn=_e.length;Pe<Fn;Pe++){let uc=_e[Pe];Tt.update(uc,Be),Tt.bind(uc,Be)}}return Be}function xd(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function yd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,D,X){let k=It.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),It.get(v.texture).__webglTexture=D,It.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let X=It.get(v);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,X=0){nt=v,$=D,H=X;let k=null,z=!1,mt=!1;if(v){let dt=It.get(v);if(dt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(v.viewport),vt.copy(v.scissor),Mt=v.scissorTest,pt.viewport(et),pt.scissor(vt),pt.setScissorTest(Mt),W=-1;return}else if(dt.__webglFramebuffer===void 0)Lt.setupRenderTarget(v);else if(dt.__hasExternalTextures)Lt.rebindTextures(v,It.get(v.texture).__webglTexture,It.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ht=v.depthTexture;if(dt.__boundDepthTexture!==Ht){if(Ht!==null&&It.has(Ht)&&(v.width!==Ht.image.width||v.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);let wt=It.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?k=wt[D][X]:k=wt[D],z=!0):v.samples>0&&Lt.useMultisampledRTT(v)===!1?k=It.get(v).__webglMultisampledFramebuffer:Array.isArray(wt)?k=wt[X]:k=wt,et.copy(v.viewport),vt.copy(v.scissor),Mt=v.scissorTest}else et.copy(At).multiplyScalar(ft).floor(),vt.copy(se).multiplyScalar(ft).floor(),Mt=oe;if(X!==0&&(k=G),pt.bindFramebuffer(N.FRAMEBUFFER,k)&&pt.drawBuffers(v,k),pt.viewport(et),pt.scissor(vt),pt.setScissorTest(Mt),z){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,X)}else if(mt){let dt=D;for(let yt=0;yt<v.textures.length;yt++){let wt=It.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,wt.__webglTexture,X,dt)}}else if(v!==null&&X!==0){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,X)}W=-1};function hc(v){let D=It.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=ie.textureFormatReadable(v.format),D.__typeReadable=ie.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,X,k,z,mt,St,dt=0){if(!(v&&v.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){pt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let wt=v.textures[dt],Ht=wt.format,Kt=wt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=hc(wt);if(bt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&X>=0&&X<=v.height-z&&N.readPixels(D,X,k,z,ot.convert(Ht),ot.convert(Kt),mt)}finally{let wt=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(v,D,X,k,z,mt,St,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(D>=0&&D<=v.width-k&&X>=0&&X<=v.height-z){pt.bindFramebuffer(N.FRAMEBUFFER,yt);let wt=v.textures[dt],Ht=wt.format,Kt=wt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=hc(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(D,X,k,z,ot.convert(Ht),ot.convert(Kt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ee=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Ee);let de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await xh(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qt),N.deleteSync(de),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,X=0){let k=Math.pow(2,-X),z=Math.floor(v.image.width*k),mt=Math.floor(v.image.height*k),St=D!==null?D.x:0,dt=D!==null?D.y:0;Lt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,St,dt,z,mt),pt.unbindTexture()},this.copyTextureToTexture=function(v,D,X=null,k=null,z=0,mt=0){let St,dt,yt,wt,Ht,Kt,bt,Qt,Ee,de=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(X!==null)St=X.max.x-X.min.x,dt=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Ht=X.min.y,Kt=X.isBox3?X.min.z:0;else{let ee=Math.pow(2,-z);St=Math.floor(de.width*ee),dt=Math.floor(de.height*ee),v.isDataArrayTexture?yt=de.depth:v.isData3DTexture?yt=Math.floor(de.depth*ee):yt=1,wt=0,Ht=0,Kt=0}k!==null?(bt=k.x,Qt=k.y,Ee=k.z):(bt=0,Qt=0,Ee=0);let he=ot.convert(D.format),Oe=ot.convert(D.type),Et;D.isData3DTexture?(Lt.setTexture3D(D,0),Et=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Lt.setTexture2DArray(D,0),Et=N.TEXTURE_2D_ARRAY):(Lt.setTexture2D(D,0),Et=N.TEXTURE_2D),pt.activeTexture(N.TEXTURE0),pt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),pt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pt.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let We=pt.getParameter(N.UNPACK_ROW_LENGTH),re=pt.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=pt.getParameter(N.UNPACK_SKIP_PIXELS),Be=pt.getParameter(N.UNPACK_SKIP_ROWS),lr=pt.getParameter(N.UNPACK_SKIP_IMAGES);pt.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),pt.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,Kt);let Jn=v.isDataArrayTexture||v.isData3DTexture,xi=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let ee=It.get(v),Ue=It.get(D),fn=It.get(ee.__renderTarget),_e=It.get(Ue.__renderTarget);pt.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<yt;Pe++)Jn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(v).__webglTexture,z,Kt+Pe),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(D).__webglTexture,mt,Ee+Pe)),N.blitFramebuffer(wt,Ht,wt+St,Ht+dt,bt,Qt,bt+St,Qt+dt,N.DEPTH_BUFFER_BIT,N.NEAREST);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||It.has(v)){let ee=It.get(v),Ue=It.get(D);pt.bindFramebuffer(N.READ_FRAMEBUFFER,I),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let fn=0;fn<yt;fn++)Jn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ee.__webglTexture,z,Kt+fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ee.__webglTexture,z),xi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,mt,Ee+fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,mt),z!==0?N.blitFramebuffer(wt,Ht,wt+St,Ht+dt,bt,Qt,bt+St,Qt+dt,N.COLOR_BUFFER_BIT,N.NEAREST):xi?N.copyTexSubImage3D(Et,mt,bt,Qt,Ee+fn,wt,Ht,St,dt):N.copyTexSubImage2D(Et,mt,bt,Qt,wt,Ht,St,dt);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xi?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,Oe,de.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,de.data):N.texSubImage3D(Et,mt,bt,Qt,Ee,St,dt,yt,he,Oe,de):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,bt,Qt,St,dt,he,Oe,de.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,bt,Qt,de.width,de.height,he,de.data):N.texSubImage2D(N.TEXTURE_2D,mt,bt,Qt,St,dt,he,Oe,de);pt.pixelStorei(N.UNPACK_ROW_LENGTH,We),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),pt.pixelStorei(N.UNPACK_SKIP_ROWS,Be),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,lr),mt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(v){It.get(v).__webglFramebuffer===void 0&&Lt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Lt.setTextureCube(v,0):v.isData3DTexture?Lt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Lt.setTexture2DArray(v,0):Lt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){$=0,H=0,nt=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Bl={skin:"#f5d5be",hair:"#3a2016",hairStyle:"updo_wavy",eyes:"#3d2516",blush:"#f6a4a4",lips:"#d86272",hatBand:"#d96677",shirtA:"#e86aa8",shirtB:"#8d5bc7",denim:"#355c96",boots:"#6a3d1c",freckles:!1,height:1},ru={name:"Gofrik",furColor:"#d6a766",bellyColor:"#ebd2a9",earColor:"#b88546",noseColor:"#261c16",bowColor:"#d96677"},ia={name:"Ezgi",dateText:"27 Kas\u0131m",giftCoins:2711,giftGems:27,badgeTitle:"\xC7iftli\u011Fin Krali\xE7esi Ezgi",message:"\u{1F382} \u0130yi ki Do\u011Fdun Ezgi! Seni \xE7ok seven e\u015Finden sonsuz sevgiyle haz\u0131rlanan \xF6zel \xE7iftli\u011Fin ve Gofrik seni bekliyor! \u{1F388}\u{1F33E}"},sa={skin:["#fde5d2","#f5d5be","#e2b38f","#c68c5e","#9c6640","#6e4428"],hair:["#1d1310","#3a2016","#592e18","#7b4823","#a0622d","#d3a256","#efd28a"],hairStyle:["updo_wavy","long","ponytail","bob","braids"],eyes:["#2a1a10","#3d2516","#5b3a1a","#6a8c3a","#3a6fa8"],hatBand:["#d96677","#e05a9c","#8d5bc7","#e8463c","#3aa6a0","#f2b33d"]},ou={updo_wavy:"Zarif Dalgal\u0131",long:"Uzun Dalgal\u0131",ponytail:"At Kuyru\u011Fu",bob:"K\xFCt",braids:"\xD6rg\xFCl\xFC"},Jt={wheat:{name:"Bu\u011Fday",icon:"\u{1F33E}",value:3,kind:"crop"},corn:{name:"M\u0131s\u0131r",icon:"\u{1F33D}",value:7,kind:"crop"},carrot:{name:"Havu\xE7",icon:"\u{1F955}",value:9,kind:"crop"},tomato:{name:"Domates",icon:"\u{1F345}",value:14,kind:"crop"},strawberry:{name:"\xC7ilek",icon:"\u{1F353}",value:18,kind:"crop"},sunflower:{name:"Ay\xE7i\xE7e\u011Fi",icon:"\u{1F33B}",value:22,kind:"crop"},chicken_feed:{name:"Tavuk Yemi",icon:"\u{1F33E}",badge:"\u{1F414}",value:4,kind:"feed"},cow_feed:{name:"\u0130nek Yemi",icon:"\u{1F33E}",badge:"\u{1F42E}",value:7,kind:"feed"},sheep_feed:{name:"Koyun Yemi",icon:"\u{1F33E}",badge:"\u{1F411}",value:8,kind:"feed"},pig_feed:{name:"Domuz Yemi",icon:"\u{1F33E}",badge:"\u{1F437}",value:10,kind:"feed"},egg:{name:"Yumurta",icon:"\u{1F95A}",value:12,kind:"animal"},milk:{name:"S\xFCt",icon:"\u{1F95B}",value:20,kind:"animal"},wool:{name:"Y\xFCn",icon:"\u{1F9F6}",value:30,kind:"animal"},truffle:{name:"Tr\xFCf Mantar\u0131",icon:"\u{1F344}",value:40,kind:"animal"},bread:{name:"Ekmek",icon:"\u{1F35E}",value:15,kind:"goods"},cornbread:{name:"M\u0131s\u0131r Ekme\u011Fi",icon:"\u{1FAD3}",value:30,kind:"goods"},cookie:{name:"Kurabiye",icon:"\u{1F36A}",value:85,kind:"goods"},cake:{name:"\xC7ilekli Pasta",icon:"\u{1F370}",value:140,kind:"goods"},butter:{name:"Tereya\u011F\u0131",icon:"\u{1F9C8}",value:50,kind:"goods"},cheese:{name:"Peynir",icon:"\u{1F9C0}",value:75,kind:"goods"},jam:{name:"\xC7ilek Re\xE7eli",icon:"\u{1F36F}",value:66,kind:"goods"},lollipop:{name:"Lolipop",icon:"\u{1F36D}",value:60,kind:"goods"},helva:{name:"Ay\xE7i\xE7ek Helvas\u0131",icon:"\u{1F96E}",value:110,kind:"goods"},hamsi:{name:"Hamsi",icon:"\u{1F41F}",value:8,kind:"fish"},cipura:{name:"\xC7ipura",icon:"\u{1F420}",value:14,kind:"fish"},sazan:{name:"Sazan",icon:"\u{1F421}",value:20,kind:"fish"},levrek:{name:"Levrek",icon:"\u{1F41F}",value:32,kind:"fish",rare:!0}},Te={wheat:{seed:0,time:20,xp:1,level:1,yield:2,color:"#e8c24a",stem:"#9bbf3c"},corn:{seed:2,time:45,xp:2,level:2,yield:2,color:"#f6d33c",stem:"#5fa83a"},carrot:{seed:3,time:90,xp:3,level:3,yield:2,color:"#f08a24",stem:"#4fa83a"},tomato:{seed:5,time:180,xp:4,level:5,yield:2,color:"#e5402f",stem:"#3f9a35"},strawberry:{seed:7,time:300,xp:5,level:7,yield:2,color:"#e8344f",stem:"#3d9a3a"},sunflower:{seed:9,time:480,xp:6,level:9,yield:2,color:"#f7c51e",stem:"#4c9a35"}},ra=["wheat","corn","carrot","tomato","strawberry","sunflower"],Ce={chicken:{name:"Tavuk",icon:"\u{1F414}",feed:"chicken_feed",product:"egg",time:300,xp:2,level:1,price:20,penPrice:0,max:6},cow:{name:"\u0130nek",icon:"\u{1F42E}",feed:"cow_feed",product:"milk",time:600,xp:3,level:3,price:60,penPrice:180,max:5},sheep:{name:"Koyun",icon:"\u{1F411}",feed:"sheep_feed",product:"wool",time:900,xp:4,level:6,price:90,penPrice:350,max:5},pig:{name:"Domuz",icon:"\u{1F437}",feed:"pig_feed",product:"truffle",time:1200,xp:5,level:8,price:120,penPrice:500,max:5}},Ri=["chicken","cow","sheep","pig"];var on={feedmill:{name:"Yem Fabrikas\u0131",icon:"\u{1F3ED}",level:1,price:0,slots:3},bakery:{name:"F\u0131r\u0131n",icon:"\u{1F956}",level:2,price:120,slots:3},dairy:{name:"Mand\u0131ra",icon:"\u{1F9C0}",level:4,price:350,slots:3},candy:{name:"\u015Eekerci",icon:"\u{1F36C}",level:7,price:600,slots:3}};var un={chicken_feed:{building:"feedmill",in:{wheat:2,corn:1},out:3,time:60,xp:1,level:1},cow_feed:{building:"feedmill",in:{corn:2,wheat:1},out:3,time:120,xp:1,level:3},sheep_feed:{building:"feedmill",in:{carrot:2,wheat:1},out:3,time:180,xp:2,level:6},pig_feed:{building:"feedmill",in:{tomato:1,carrot:2},out:3,time:240,xp:2,level:8},bread:{building:"bakery",in:{wheat:3},out:1,time:180,xp:3,level:2},cornbread:{building:"bakery",in:{corn:2,egg:1},out:1,time:360,xp:4,level:4},cookie:{building:"bakery",in:{wheat:2,egg:1,butter:1},out:1,time:600,xp:6,level:6},cake:{building:"bakery",in:{wheat:2,egg:2,milk:1,strawberry:2},out:1,time:900,xp:9,level:8},butter:{building:"dairy",in:{milk:2},out:1,time:420,xp:5,level:4},cheese:{building:"dairy",in:{milk:3},out:1,time:600,xp:6,level:5},jam:{building:"candy",in:{strawberry:3},out:1,time:600,xp:6,level:7},lollipop:{building:"candy",in:{strawberry:2,corn:2},out:1,time:480,xp:5,level:7},helva:{building:"candy",in:{sunflower:3,milk:1},out:1,time:900,xp:7,level:9}},fi={fence:{name:"\xC7it",icon:"\u{1FAB5}",price:5,level:1},flowers:{name:"\xC7i\xE7ek",icon:"\u{1F337}",price:8,level:1},path:{name:"Ta\u015F Yol",icon:"\u{1FAA8}",price:3,level:1},bench:{name:"Bank",icon:"\u{1FA91}",price:25,level:2},lamp:{name:"Fener",icon:"\u{1F3EE}",price:30,level:3},bush:{name:"\xC7al\u0131",icon:"\u{1F333}",price:12,level:2},hay:{name:"Saman Balyas\u0131",icon:"\u{1F7E8}",price:10,level:2},well:{name:"Kuyu",icon:"\u{1FAA3}",price:80,level:5},scarecrow:{name:"Korkuluk",icon:"\u{1F383}",price:50,level:4},windmill:{name:"Yel De\u011Firmeni",icon:"\u{1F32C}\uFE0F",price:150,level:6}},au=Object.keys(fi),oa=30;function aa(i){return Math.floor(15*Math.pow(i,1.7))}function lu(i){return 15*i}var kl=6,zl=24;var la=50,cu=25;function hu(i){return Math.round(80*Math.pow(i+1,1.6))}function uu(i,t){return Math.round(Ce[i].price*Math.pow(1.35,Math.max(0,t-1)))}var Gl=4,Hl=3,ca=4;function du(i){return Math.min(6,3+Math.floor((i-1)/2))}var Vl=45;var bn=[{id:"harvest",action:"harvest",title:"Reng\xE2renk Hasat",description:"4 tarladaki ekinleri topla.",icon:"\u{1F33E}",target:4,coins:45,xp:10},{id:"animal",action:"animal",title:"\xC7iftlik Dostlar\u0131",description:"Hayvanlardan 2 \xFCr\xFCn topla.",icon:"\u{1F414}",target:2,coins:55,xp:15},{id:"produce",action:"produce",title:"Usta \xDCretici",description:"Bir makineden haz\u0131r \xFCr\xFCn al.",icon:"\u{1F95B}",target:1,coins:60,xp:15},{id:"delivery",action:"delivery",title:"Kamyon Yola \xC7\u0131ks\u0131n",description:"Bir kasaba sipari\u015Fini teslim et.",icon:"\u{1F69A}",target:1,coins:75,xp:20}],fu=["Ay\u015Fe Teyze","Mehmet Amca","Zeynep","Can","Elif","Hasan Dede","Fatma Nine","Burak","Selin","Emre","Deniz","Kerem","Merve","Ali Usta","Nazl\u0131"],Ke={half:22},Ft={house:{x:-11,z:-12,w:5,d:5},feedmill:{x:-3,z:-13,w:4,d:4},bakery:{x:3,z:-13,w:4,d:4},dairy:{x:9,z:-13,w:4,d:4},candy:{x:14,z:-6,w:4,d:4},storage:{x:-15.5,z:-5,w:4,d:4},pens:{chicken:{x:-9,z:8,w:6,d:5},cow:{x:-1,z:9,w:7,d:6},sheep:{x:7,z:9,w:7,d:6},pig:{x:14,z:2,w:6,d:5}},board:{x:-15,z:6},truck:{x:-19,z:6},shop:{x:-15,z:1},lake:{x:14,z:16,r:4},dock:{x:9.2,z:16},road:{x:-19,w:3},plots:{x0:-5.25,z0:-6.6,dx:2.1,dz:2.1,cols:6}};function er(i){let t=Ft.plots;return{x:t.x0+i%t.cols*t.dx,z:t.z0+Math.floor(i/t.cols)*t.dz}}var ha=3,ua=2e4;function nr(i){let t=i.rng=i.rng+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pu(i,t,e){return t+Math.floor(nr(i)*(e-t+1))}function i_(i,t){return t[Math.floor(nr(i)*t.length)]}function Wl(i=Date.now()){return{day:$l(i),progress:Object.fromEntries(bn.map(t=>[t.id,0])),completed:[]}}function ls(i,t=Date.now()){let e=$l(t);(!i.dailyMissions||i.dailyMissions.day!==e)&&(i.dailyMissions=Wl(t)),(!i.dailyMissions.progress||typeof i.dailyMissions.progress!="object")&&(i.dailyMissions.progress={}),Array.isArray(i.dailyMissions.completed)||(i.dailyMissions.completed=[]);for(let n of bn){let s=Number(i.dailyMissions.progress[n.id]);i.dailyMissions.progress[n.id]=Number.isFinite(s)?Math.min(n.target,Math.max(0,Math.floor(s))):0}return i.dailyMissions.completed=i.dailyMissions.completed.filter(n=>bn.some(s=>s.id===n)),i.dailyMissions}function da(i,t,e=1,n=Date.now()){let s=ls(i,n),r=[];for(let o of bn)o.action!==t||s.completed.includes(o.id)||(s.progress[o.id]=Math.min(o.target,s.progress[o.id]+Math.max(0,Math.floor(e))),!(s.progress[o.id]<o.target)&&(s.completed.push(o.id),i.coins+=o.coins,r.push({...o,ups:En(i,o.xp)})));return r}function Xl(i=Date.now(),t=(i^1540483477)>>>0){let e={v:ha,createdAt:i,savedAt:i,rng:t>>>0,coins:100,gems:10,birthdayClaimed:!1,xp:0,level:1,items:{wheat:6,corn:2},cap:la,capLevel:0,plots:[],pens:{},buildings:{},orders:[],truck:{backAt:0},shop:{slots:[]},decor:[],nextId:1,daily:{last:"",streak:0},dailyMissions:Wl(i),look:{...Bl},settings:{music:.5,sfx:.8,season:"auto",shake:!0},stats:{harvests:0,orders:0,fish:0,sold:0,petted:0},tutorial:0};for(let n=0;n<kl;n++)e.plots.push({crop:null,at:0});e.plots[0]={crop:"wheat",at:i-Te.wheat.time*1e3},e.plots[1]={crop:"wheat",at:i-Te.wheat.time*1e3};for(let n of Ri)e.pens[n]={owned:n==="chicken",animals:[]};e.pens.chicken.animals.push({fedAt:0},{fedAt:0});for(let n of Object.keys(on))e.buildings[n]={owned:n==="feedmill",queue:[]};for(let n=0;n<ca;n++)e.shop.slots.push(null);return e.decor.push({id:e.nextId++,type:"flowers",x:-8,z:-8,rot:0}),e.decor.push({id:e.nextId++,type:"bench",x:-7,z:-9,rot:0}),rr(e,i),e}function xu(i,t=Date.now()){let e=Xl(t);if(!i||typeof i!="object")return e;let n={...e,...i};n.v=ha;let s=(a,l,c=0,h=1e12)=>Number.isFinite(a)?Math.min(h,Math.max(c,a)):l;n.coins=Math.floor(s(i.coins,e.coins)),n.gems=Math.floor(s(i.gems,e.gems)),n.birthdayClaimed=!!i.birthdayClaimed,n.xp=Math.floor(s(i.xp,0)),n.level=Math.floor(s(i.level,1,1,oa)),n.cap=Math.floor(s(i.cap,la,la,1e5)),n.capLevel=Math.floor(s(i.capLevel,0,0,1e3)),n.rng=i.rng>>>0||e.rng,n.items={};let r=i.items&&typeof i.items=="object"?i.items:null,o=i.storage&&typeof i.storage=="object"?i.storage:null;for(let a of[r,o])if(a)for(let l of Object.keys(a)){if(!Jt[l]||a===o&&r&&Object.prototype.hasOwnProperty.call(r,l))continue;let c=Math.floor(s(a[l],0));c>0&&(n.items[l]=c)}if(n.plots=Array.isArray(i.plots)?i.plots.slice(0,zl).map(a=>({crop:a&&Te[a.crop]?a.crop:null,at:s(a&&a.at,0)})):e.plots,n.plots.length<kl&&(n.plots=e.plots),n.pens={...e.pens},i.pens)for(let a of Ri){let l=i.pens[a];l&&(n.pens[a]={owned:!!l.owned,animals:Array.isArray(l.animals)?l.animals.slice(0,Ce[a].max).map(c=>({fedAt:s(c&&c.fedAt,0)})):[]})}if(n.buildings={...e.buildings},i.buildings)for(let a of Object.keys(on)){let l=i.buildings[a];l&&(n.buildings[a]={owned:!!l.owned,queue:Array.isArray(l.queue)?l.queue.filter(c=>c&&un[c.r]&&un[c.r].building===a).slice(0,on[a].slots).map(c=>({r:c.r,start:s(c.start,t),end:s(c.end,t)})):[]})}n.orders=Array.isArray(i.orders)?i.orders.filter(a=>a&&(a.wait||Array.isArray(a.items)&&a.items.every(l=>Jt[l.k]))):[],n.truck={backAt:s(i.truck&&i.truck.backAt,0)},n.shop={slots:[]};for(let a=0;a<ca;a++){let l=i.shop&&i.shop.slots&&i.shop.slots[a];n.shop.slots.push(l&&Jt[l.k]?{k:l.k,q:Math.floor(s(l.q,1,1,99)),price:Math.floor(s(l.price,1,1,1e5)),sellAt:s(l.sellAt,t),buyer:String(l.buyer||"")}:null)}return n.decor=Array.isArray(i.decor)?i.decor.filter(a=>a&&fi[a.type]).map(a=>({id:a.id|0,type:a.type,x:Math.round(s(a.x,0,-Ke.half,Ke.half)),z:Math.round(s(a.z,0,-Ke.half,Ke.half)),rot:(a.rot|0)&3})):[],n.nextId=Math.max(s(i.nextId,1),...n.decor.map(a=>a.id+1),1),n.daily={last:String(i.daily&&i.daily.last||""),streak:Math.floor(s(i.daily&&i.daily.streak,0,0,1e4))},i.dailyMissions&&i.dailyMissions.day===$l(t)?(n.dailyMissions={day:i.dailyMissions.day,progress:{...i.dailyMissions.progress||{}},completed:Array.isArray(i.dailyMissions.completed)?[...i.dailyMissions.completed]:[]},ls(n,t)):n.dailyMissions=Wl(t),n.look={...Bl,...i.look||{}},n.settings={...e.settings,...i.settings||{}},n.stats={...e.stats,...i.stats||{}},rr(n,t),n}function ir(i){let t=0;for(let e in i.items)t+=i.items[e];return t}function s_(i){return i.cap-ir(i)}function pi(i,t){return i.items[t]||0}function yu(i,t){for(let e in t)if(pi(i,e)<t[e])return!1;return!0}function cs(i,t){return s_(i)>=t}function hs(i,t,e){i.items[t]=(i.items[t]||0)+e}function us(i,t){for(let e in t)i.items[e]-=t[e],i.items[e]<=0&&delete i.items[e]}function vu(i){let t=hu(i.capLevel);return i.coins<t?Vt("Yeterli alt\u0131n yok"):(i.coins-=t,i.capLevel++,i.cap+=cu,{ok:!0,price:t})}function Vt(i){return{ok:!1,err:i}}function En(i,t){let e=[];for(i.xp+=t;i.level<oa&&i.xp>=aa(i.level);){i.xp-=aa(i.level),i.level++;let n=lu(i.level);i.coins+=n,e.push({level:i.level,coins:n})}return i.level>=oa&&(i.xp=Math.min(i.xp,aa(i.level))),e}function Mu(i,t){return Te[t]&&i.level>=Te[t].level}function Su(i,t){return un[t]&&i.level>=un[t].level}function r_(i,t){return i.level>=Ce[t].level}function o_(i,t){return i.level>=on[t].level}function Un(i,t,e){let n=i.plots[t];if(!n||!n.crop)return{state:"empty",progress:0,remaining:0};let s=Te[n.crop].time*1e3,r=e-n.at;return r>=s?{state:"ready",progress:1,remaining:0,crop:n.crop}:{state:"growing",progress:Math.max(0,r/s),remaining:s-r,crop:n.crop}}function bu(i,t,e,n){let s=i.plots[t];if(!s)return Vt("Tarla yok");if(s.crop)return Vt("Tarla dolu");if(!Mu(i,e))return Vt("Bu ekin hen\xFCz kilitli");let r=Te[e].seed;return i.coins<r?Vt("Tohum i\xE7in yeterli alt\u0131n yok"):(i.coins-=r,s.crop=e,s.at=n,{ok:!0,cost:r})}function Eu(i,t,e){let n=Un(i,t,e);if(n.state!=="ready")return Vt(n.state==="empty"?"Tarla bo\u015F":"Hen\xFCz olmad\u0131");let s=Te[n.crop];if(!cs(i,s.yield))return Vt("Ambar dolu!");hs(i,n.crop,s.yield),i.plots[t]={crop:null,at:0},i.stats.harvests++;let r=En(i,s.xp),o=da(i,"harvest",1,e);return{ok:!0,item:n.crop,qty:s.yield,xp:s.xp,ups:[...r,...o.flatMap(a=>a.ups)],missions:o}}function sr(i,t,e,n){let s=i.pens[t]&&i.pens[t].animals[e];if(!s)return{state:"none"};if(!s.fedAt)return{state:"hungry",progress:0,remaining:0};let r=Ce[t].time*1e3,o=n-s.fedAt;return o>=r?{state:"ready",progress:1,remaining:0}:{state:"producing",progress:Math.max(0,o/r),remaining:r-o}}function wu(i,t){let e=i.pens[t];return e.owned?Vt("Zaten var"):r_(i,t)?i.coins<Ce[t].penPrice?Vt("Yeterli alt\u0131n yok"):(i.coins-=Ce[t].penPrice,e.owned=!0,{ok:!0}):Vt(`Seviye ${Ce[t].level} gerekli`)}function Tu(i,t){let e=i.pens[t];if(!e.owned)return Vt("\xD6nce bar\u0131nak gerekli");if(e.animals.length>=Ce[t].max)return Vt("Bar\u0131nak dolu");let n=uu(t,e.animals.length);return i.coins<n?Vt("Yeterli alt\u0131n yok"):(i.coins-=n,e.animals.push({fedAt:0}),{ok:!0,price:n,index:e.animals.length-1})}function Au(i,t,e,n){let s=sr(i,t,e,n);if(s.state!=="hungry")return Vt(s.state==="ready"?"\xD6nce \xFCr\xFCn\xFC topla":"\u015Eu an tok");let r=Ce[t].feed;return pi(i,r)<1?Vt(`${Jt[r].name} yok \u2014 Yem Fabrikas\u0131'nda \xFCret`):(us(i,{[r]:1}),i.pens[t].animals[e].fedAt=n,{ok:!0,feed:r})}function Ru(i,t,e,n){if(sr(i,t,e,n).state!=="ready")return Vt("Hen\xFCz haz\u0131r de\u011Fil");if(!cs(i,1))return Vt("Ambar dolu!");let r=Ce[t].product;hs(i,r,1),i.pens[t].animals[e].fedAt=0;let o=En(i,Ce[t].xp),a=da(i,"animal",1,n);return{ok:!0,item:r,qty:1,xp:Ce[t].xp,ups:[...o,...a.flatMap(l=>l.ups)],missions:a}}function Cu(i,t){let e=i.buildings[t];return e.owned?Vt("Zaten var"):o_(i,t)?i.coins<on[t].price?Vt("Yeterli alt\u0131n yok"):(i.coins-=on[t].price,e.owned=!0,{ok:!0}):Vt(`Seviye ${on[t].level} gerekli`)}function Iu(i,t,e,n){let s=i.buildings[t],r=un[e];if(!s||!s.owned)return Vt("Bina yok");if(!r||r.building!==t)return Vt("Ge\xE7ersiz tarif");if(!Su(i,e))return Vt(`Seviye ${r.level} gerekli`);if(s.queue.length>=on[t].slots)return Vt("S\u0131ra dolu");if(!yu(i,r.in))return Vt("Malzeme eksik");us(i,r.in);let o=s.queue.length?s.queue[s.queue.length-1].end:n,a=Math.max(n,o);return s.queue.push({r:e,start:a,end:a+r.time*1e3}),{ok:!0}}function Pu(i,t,e){let n=i.buildings[t],s=n.queue.filter(o=>o.end<=e).length,r=n.queue.find(o=>o.end>e);return{done:s,queued:n.queue.length,current:r?{r:r.r,progress:Math.min(1,Math.max(0,(e-r.start)/(r.end-r.start))),remaining:r.end-e,started:e>=r.start}:null}}function Lu(i,t,e){let n=i.buildings[t],s=[],r=0,o=!1;for(;n.queue.length&&n.queue[0].end<=e;){let h=n.queue[0],d=un[h.r];if(!cs(i,d.out)){o=!0;break}hs(i,h.r,d.out),n.queue.shift(),s.push({item:h.r,qty:d.out}),r+=d.xp}if(!s.length)return Vt(o?"Ambar dolu!":"Haz\u0131r \xFCr\xFCn yok");let a=En(i,r),l=s.reduce((h,d)=>h+d.qty,0),c=da(i,"produce",l,e);return{ok:!0,got:s,xp:r,ups:[...a,...c.flatMap(h=>h.ups)],missions:c,blocked:o}}function a_(i){let t=[];for(let e of ra)Mu(i,e)&&t.push(e);for(let e of Ri)i.pens[e].owned&&i.pens[e].animals.length&&t.push(Ce[e].product);for(let e of Object.keys(un)){let n=un[e];Jt[e].kind==="goods"&&i.buildings[n.building].owned&&Su(i,e)&&t.push(e)}return t}function mu(i){let t=a_(i),e=Math.min(t.length,pu(i,1,i.level>=4?3:2)),n=new Set;for(;n.size<e;){let o=t.map(l=>n.has(l)?0:1/Math.sqrt(Jt[l].value)),a=nr(i)*o.reduce((l,c)=>l+c,0);for(let l=0;l<t.length;l++)if(a-=o[l],a<=0&&o[l]>0){n.add(t[l]);break}a>0&&n.add(t.find(l=>!n.has(l)))}let s=[...n].map(o=>{let a=Jt[o].value,l=a<=10?6:a<=25?4:a<=60?2:1;return{k:o,q:pu(i,1,Math.max(1,Math.min(l,1+Math.floor(i.level/2))))}}),r=s.reduce((o,a)=>o+Jt[a.k].value*a.q,0);return{items:s,coins:Math.round(r*1.35+4),xp:Math.max(1,Math.round(r/5))}}function rr(i,t){let e=du(i.level);for(let n=0;n<i.orders.length;n++){let s=i.orders[n];s.wait&&s.wait<=t&&(i.orders[n]=mu(i))}for(;i.orders.length<e;)i.orders.push(mu(i))}function Du(i,t,e){let n=i.orders[t];if(!n||n.wait)return Vt("Sipari\u015F yok");if(e<i.truck.backAt)return Vt("Kamyon yolda, birazdan d\xF6ner");let s={};for(let a of n.items)s[a.k]=a.q;if(!yu(i,s))return Vt("\xDCr\xFCnler eksik");us(i,s),i.coins+=n.coins;let r=En(i,n.xp);i.truck.backAt=e+ua,i.orders[t]={wait:e+Vl*1e3/3},i.stats.orders++;let o=da(i,"delivery",1,e);return{ok:!0,coins:n.coins,xp:n.xp,ups:[...r,...o.flatMap(a=>a.ups)],missions:o}}function Nu(i,t,e){return!i.orders[t]||i.orders[t].wait?Vt("Sipari\u015F yok"):(i.orders[t]={wait:e+Vl*1e3},{ok:!0})}function gu(i,t){return Math.max(1,Math.round(Jt[i].value*t*1.5))}function Uu(i,t,e,n,s,r){if(i.level<Hl)return Vt(`Seviye ${Hl} gerekli`);if(t<0||t>=ca)return Vt("Ge\xE7ersiz raf");if(i.shop.slots[t])return Vt("Raf dolu");if(n=Math.floor(n),s=Math.floor(s),!Jt[e]||n<1||n>10)return Vt("Ge\xE7ersiz miktar");if(pi(i,e)<n)return Vt("Ambarda yeterli yok");if(s<1||s>gu(e,n))return Vt("Ge\xE7ersiz fiyat");us(i,{[e]:n});let a=(15+s/gu(e,n)*75+nr(i)*30)*1e3;return i.shop.slots[t]={k:e,q:n,price:s,sellAt:r+a,buyer:i_(i,fu)},{ok:!0,sellAt:r+a}}function ql(i,t,e){let n=i.shop.slots[t];return n?n.sellAt<=e?{state:"sold",...n}:{state:"listed",remaining:n.sellAt-e,...n}:{state:"empty"}}function Fu(i,t,e){let n=ql(i,t,e);return n.state!=="sold"?Vt("Hen\xFCz sat\u0131lmad\u0131"):(i.coins+=n.price,i.shop.slots[t]=null,i.stats.sold++,{ok:!0,coins:n.price,buyer:n.buyer})}function Ou(i,t,e){if(i.level<Gl)return Vt(`Seviye ${Gl} gerekli`);if(!(t>=.15))return{ok:!0,escaped:!0};if(!cs(i,1))return Vt("Ambar dolu!");let n=nr(i)*.6+t*.5,s=n>.95?"levrek":n>.7?"sazan":n>.4?"cipura":"hamsi";hs(i,s,1),i.stats.fish++;let r=Math.max(1,Math.round(Jt[s].value/8)),o=En(i,r);return{ok:!0,item:s,qty:1,xp:r,ups:o}}function $l(i){let t=new Date(i);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function _u(i,t,e,n=0){return Math.abs(t-i.x)<i.w/2+n&&Math.abs(e-i.z)<i.d/2+n}function l_(){let i=Ft,t=[i.house,i.feedmill,i.bakery,i.dairy,i.candy,i.storage,...Object.values(i.pens)];return t.push({x:i.board.x,z:i.board.z,w:2,d:1}),t.push({x:i.shop.x,z:i.shop.z,w:3,d:2}),t.push({x:i.road.x,z:0,w:i.road.w,d:Ke.half*2+4}),t}function c_(i){let t=Math.ceil(zl/Ft.plots.cols),e=Ft.plots;return{x:e.x0+(e.cols-1)*e.dx/2,z:e.z0+(t-1)*e.dz/2,w:e.cols*e.dx,d:t*e.dz}}function h_(i,t,e=0){let n=Ft.lake;return Math.hypot(i-n.x,t-n.z)<n.r+e}function u_(i,t,e,n=-1){let s=Ke.half-1;if(Math.abs(t)>s||Math.abs(e)>s)return!1;for(let r of l_())if(_u(r,t,e,.5))return!1;if(_u(c_(i),t,e,.5)||h_(t,e,1))return!1;for(let r of i.decor)if(r.id!==n&&r.x===t&&r.z===e)return!1;return!0}function Bu(i,t,e,n,s=0){let r=fi[t];if(!r)return Vt("Ge\xE7ersiz");if(i.level<r.level)return Vt(`Seviye ${r.level} gerekli`);if(i.coins<r.price)return Vt("Yeterli alt\u0131n yok");if(e=Math.round(e),n=Math.round(n),!u_(i,e,n))return Vt("Buraya yerle\u015Ftirilemez");i.coins-=r.price;let o={id:i.nextId++,type:t,x:e,z:n,rot:s&3};return i.decor.push(o),{ok:!0,item:o}}function ku(i){return i.birthdayClaimed?Vt("Do\u011Fum g\xFCn\xFC hediyesi zaten al\u0131nd\u0131!"):(i.birthdayClaimed=!0,i.coins+=2711,i.gems=(i.gems||0)+27,{ok:!0,coins:2711,gems:27,xp:50,ups:En(i,50)})}function mi(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return e?`${e}sa ${n}dk`:n?`${n}:${String(s).padStart(2,"0")}`:`${s}sn`}function zu(i,t,e){let n=0,s=0,r=0,o=0;i.plots.forEach((a,l)=>{a.crop&&a.at+Te[a.crop].time*1e3>t&&Un(i,l,e).state==="ready"&&n++});for(let a of Ri)i.pens[a].animals.forEach((l,c)=>{l.fedAt&&l.fedAt+Ce[a].time*1e3>t&&sr(i,a,c,e).state==="ready"&&s++});for(let a in i.buildings)r+=i.buildings[a].queue.filter(l=>l.end>t&&l.end<=e).length;return i.shop.slots.forEach(a=>{a&&a.sellAt>t&&a.sellAt<=e&&o++}),{crops:n,animals:s,goods:r,sold:o,away:e-t}}var Yl={};function K(i,t={}){let e=`${i}_${t.roughness??.7}_${t.metalness??.1}_${t.emissive??0}`;return Yl[e]||(Yl[e]=new hn({color:new Bt(i),roughness:t.roughness??.7,metalness:t.metalness??.1,emissive:t.emissive?new Bt(t.emissive):new Bt(0),flatShading:t.flatShading??!0})),Yl[e]}function Zl(i){let t=new Dt;t.name="Ezgi";let e=K(i.skin||"#f5d5be",{roughness:.6}),n=K(i.hair||"#3a2016",{roughness:.8}),s=K(i.eyes||"#3d2516",{roughness:.2}),r=K(i.lips||"#d86272",{roughness:.4}),o=K(i.blush||"#f6a4a4",{roughness:.9}),a=K(i.shirtA||"#e86aa8",{roughness:.8}),l=K(i.denim||"#355c96",{roughness:.75}),c=K(i.boots||"#6a3d1c",{roughness:.7}),h=K("#e5c276",{roughness:.85}),d=K(i.hatBand||"#d96677",{roughness:.6}),u=new Dt;u.position.y=1.6;let f=new Zt(.32,16,14);f.scale(1,1.1,.95);let _=new F(f,e);_.castShadow=!0,u.add(_);let M=new Zt(.045,8,8);M.scale(.8,1.2,.5);let m=new F(M,s);m.position.set(-.11,.04,.29);let p=m.clone();p.position.x=.11,u.add(m,p);let y=new Zt(.015,6,6),w=K("#ffffff",{roughness:.1}),b=new F(y,w);b.position.set(-.1,.06,.31);let A=b.clone();A.position.x=.12,u.add(b,A);let E=new In(.055,8),g=new F(E,o);g.position.set(-.16,-.05,.28),g.rotation.y=-.3;let S=g.clone();S.position.x=.16,S.rotation.y=.3,u.add(g,S);let P=new ai(.05,.015,6,8,Math.PI),R=new F(P,r);R.position.set(0,-.12,.28),R.rotation.z=Math.PI,u.add(R);let L=new Dt,U=new Zt(.35,12,10);U.scale(1.05,1.15,1.1);let G=new F(U,n);G.position.set(0,.06,-.06),L.add(G);let I=new Gt(.04,.02,.42,8);I.rotateZ(.2);let V=new F(I,n);V.position.set(-.25,-.12,.15);let $=V.clone();$.position.x=.25,$.rotation.z=-.4,L.add(V,$);let H=new Zt(.18,10,10);H.scale(1.1,.9,.9);let nt=new F(H,n);nt.position.set(0,.12,-.32),L.add(nt),u.add(L);let W=K("#ffffff",{roughness:.5}),tt=new ai(.24,.05,8,16);tt.rotateX(Math.PI/2);let et=new F(tt,W);et.position.set(0,-.28,.02),u.add(et);let vt=new Gt(.06,.09,.45,8);vt.rotateZ(-.25),vt.rotateX(.15);let Mt=new F(vt,W);Mt.position.set(-.22,-.46,-.05),u.add(Mt);let q=new Dt;q.position.set(0,.26,.02),q.rotation.x=-.1;let rt=new Gt(.55,.58,.04,16),gt=new F(rt,h);q.add(gt);let Ct=new Gt(.32,.35,.24,16),ft=new F(Ct,h);ft.position.y=.12,q.add(ft);let zt=new Gt(.355,.355,.07,16),ge=new F(zt,d);ge.position.y=.05,q.add(ge),u.add(q),t.add(u);let At=new Dt;At.position.y=1.05;let se=new Gt(.22,.26,.55,10),oe=new F(se,a);oe.castShadow=!0,At.add(oe);let Yt=new Rt(.32,.34,.34),Se=new F(Yt,l);Se.position.set(0,-.08,.02),At.add(Se);let ye=new Rt(.16,.12,.03),Ne=new F(ye,K("#2b4c7e",{roughness:.8}));Ne.position.set(0,-.08,.19),At.add(Ne);let ue=new Gt(.025,.025,.015,8);ue.rotateX(Math.PI/2);let an=K("#f1c40f",{metalness:.8,roughness:.3}),xe=new F(ue,an);xe.position.set(-.1,.06,.18);let Ve=xe.clone();Ve.position.x=.1,At.add(xe,Ve),t.add(At);let Fe=new Gt(.06,.055,.45,8);Fe.translate(0,-.2,0);let be=new Dt;be.position.set(-.28,1.25,0);let N=new F(Fe,a);N.castShadow=!0,be.add(N);let Qe=new Zt(.055,8,8),ce=new F(Qe,e);ce.position.set(0,-.42,0),be.add(ce);let ie=new Dt;ie.position.set(.28,1.25,0);let pt=new F(Fe,a);pt.castShadow=!0,ie.add(pt);let ve=ce.clone();ie.add(ve),t.add(be,ie);let It=new Gt(.08,.075,.52,8);It.translate(0,-.24,0);let Lt=new Dt;Lt.position.set(-.12,.72,0);let T=new F(It,l);T.castShadow=!0,Lt.add(T);let x=new Rt(.14,.16,.22);x.translate(0,-.06,.04);let B=new F(x,c);B.position.set(0,-.48,0),Lt.add(B);let it=new Dt;it.position.set(.12,.72,0);let j=new F(It,l);j.castShadow=!0,it.add(j);let at=B.clone();return it.add(at),t.add(Lt,it),t.userData={head:u,leftArm:be,rightArm:ie,leftLeg:Lt,rightLeg:it,walkTime:0,isWalking:!1,update(lt){if(this.isWalking){this.walkTime+=lt*9;let Z=Math.sin(this.walkTime)*.55;Lt.rotation.x=Z,it.rotation.x=-Z,be.rotation.x=-Z*.7,ie.rotation.x=Z*.7,u.position.y=1.6+Math.abs(Math.sin(this.walkTime*2))*.04}else this.walkTime+=lt*2.5,Lt.rotation.x=0,it.rotation.x=0,be.rotation.x=Math.sin(this.walkTime)*.05,ie.rotation.x=-Math.sin(this.walkTime)*.05,u.position.y=1.6+Math.sin(this.walkTime)*.015}},t}function Gu(){let i=new Dt;i.name="Gofrik";let t=ru,e=K(t.furColor,{roughness:.9}),n=K(t.bellyColor,{roughness:.95}),s=K(t.earColor,{roughness:.95}),r=K(t.noseColor,{roughness:.3}),o=K("#15100c",{roughness:.1}),a=K(t.bowColor,{roughness:.5}),l=new Zt(.32,12,10);l.scale(1.2,.95,.85);let c=new F(l,e);c.position.set(0,.42,0),c.castShadow=!0,i.add(c);let h=new Zt(.2,8,8),d=new F(h,n);d.position.set(0,.45,.22),i.add(d);let u=new Dt;u.position.set(0,.65,.28);let f=new Zt(.24,12,10);f.scale(1.05,1,1.1);let _=new F(f,e);_.castShadow=!0,u.add(_);let M=new Zt(.12,10,8);M.scale(1.1,.85,1.3);let m=new F(M,n);m.position.set(0,-.04,.18),u.add(m);let p=new Zt(.04,8,8),y=new F(p,r);y.position.set(0,.02,.3),u.add(y);let w=new Zt(.035,8,8),b=new F(w,o);b.position.set(-.09,.08,.22);let A=b.clone();A.position.x=.09,u.add(b,A);let E=new Gt(.04,.08,.22,8);E.rotateZ(.4);let g=new F(E,s);g.position.set(-.2,.04,.02);let S=g.clone();S.position.x=.2,S.rotation.z=-.4,u.add(g,S);let P=new Zt(.09,8,8);P.scale(1.2,.8,1);let R=new F(P,e);R.position.set(-.16,-.06,.12);let L=R.clone();L.position.x=.16;let U=new F(new Zt(.1,8,8),e);U.position.set(0,.22,.04),u.add(R,L,U),i.add(u);let G=new Dt;G.position.set(0,.52,.32);let I=new Zt(.035,8,8),V=new F(I,a);G.add(V);let $=new Me(.08,.12,6);$.rotateZ(Math.PI/2);let H=new F($,a);H.position.set(-.08,0,0);let nt=H.clone();nt.rotation.z=-Math.PI/2,nt.position.x=.08,G.add(H,nt),i.add(G);let W=new Dt;W.position.set(0,.48,-.32);let tt=new Gt(.03,.06,.26,8);tt.translate(0,.12,0),tt.rotateX(-.5);let et=new F(tt,e);W.add(et),i.add(W);let vt=new Gt(.05,.045,.28,8);vt.translate(0,-.12,0);let Mt=new F(vt,e);Mt.position.set(-.14,.26,.18),Mt.castShadow=!0;let q=Mt.clone();q.position.x=.14;let rt=Mt.clone();rt.position.set(-.14,.26,-.18);let gt=Mt.clone();return gt.position.set(.14,.26,-.18),i.add(Mt,q,rt,gt),i.userData={head:u,tail:W,flLeg:Mt,frLeg:q,blLeg:rt,brLeg:gt,trotTime:0,isMoving:!1,update(Ct){if(W.rotation.y=Math.sin(Date.now()*.012)*.45,this.isMoving){this.trotTime+=Ct*14;let ft=Math.sin(this.trotTime)*.6;Mt.rotation.x=ft,gt.rotation.x=ft,q.rotation.x=-ft,rt.rotation.x=-ft,u.position.y=.65+Math.sin(this.trotTime*2)*.03}else Mt.rotation.x=0,q.rotation.x=0,rt.rotation.x=0,gt.rotation.x=0,u.position.y=.65+Math.sin(Date.now()*.003)*.01}},i}function Hu(){let i=new Dt;i.name="BirthdayGift";let t=new Rt(.8,.7,.8),e=K("#e84393",{roughness:.4,metalness:.2}),n=new F(t,e);n.position.y=.35,n.castShadow=!0,i.add(n);let s=new Rt(.86,.16,.86),r=new F(s,e);r.position.y=.74,i.add(r);let o=K("#f1c40f",{metalness:.8,roughness:.25}),a=new Rt(.88,.72,.15),l=new F(a,o);l.position.y=.36;let c=new Rt(.15,.72,.88),h=new F(c,o);h.position.y=.36,i.add(l,h);let d=new ai(.16,.05,8,12),u=new F(d,o);u.position.set(-.12,.9,0),u.rotation.y=.5;let f=u.clone();f.position.x=.12,f.rotation.y=-.5,i.add(u,f);let _=["#ff7675","#74b9ff","#55efc4","#ffeaa7","#a29bfe"];return _.forEach((M,m)=>{let p=m/_.length*Math.PI*2,y=new Dt;y.position.set(Math.cos(p)*.45,1.8+m*.18,Math.sin(p)*.45);let w=new Zt(.22,12,12);w.scale(1,1.25,1);let b=new F(w,K(M,{roughness:.3,metalness:.1}));y.add(b);let A=new Gt(.005,.005,1,4),E=new F(A,K("#ffffff"));E.position.y=-.6,y.add(E),i.add(y)}),i}function Vu(){let i=new Dt;i.name="House";let t=K("#d35400",{roughness:.8}),e=K("#c0392b",{roughness:.6}),n=K("#f5e6ca",{roughness:.85}),s=new Rt(4.2,3.2,3.6),r=new F(s,n);r.position.y=1.6,r.castShadow=!0,r.receiveShadow=!0,i.add(r);let o=new Me(3.3,1.8,4);o.rotateY(Math.PI/4),o.scale(1.3,1,1.1);let a=new F(o,e);a.position.y=4,a.castShadow=!0,i.add(a);let l=new Rt(.6,1.6,.6),c=new F(l,K("#7f8c8d"));c.position.set(1.2,4.4,.5),i.add(c);let h=new Rt(3.6,.2,1.4),d=new F(h,t);d.position.set(0,.1,2.2),i.add(d);let u=new Rt(.9,1.6,.05),f=new F(u,t);f.position.set(0,.9,1.82),i.add(f);let _=K("#f1c40f",{emissive:"#f39c12",roughness:.2}),M=new Rt(.8,.8,.05),m=new F(M,_);m.position.set(-1.2,1.8,1.82);let p=m.clone();return p.position.x=1.2,i.add(m,p),i}function Wu(){let i=new Dt;i.name="Feedmill";let t=new Gt(1.4,1.6,3.4,14),e=new F(t,K("#8d6e63"));e.position.y=1.7,e.castShadow=!0,i.add(e);let n=new Me(1.8,1.4,14),s=new F(n,K("#5d4037"));s.position.y=4.1,i.add(s);let r=new Dt;r.position.set(0,3.2,1.55);let o=new Gt(.2,.2,.2,8);o.rotateX(Math.PI/2);let a=new F(o,K("#f39c12"));r.add(a);let l=K("#efebe9");for(let c=0;c<4;c++){let h=new Rt(.35,1.8,.04);h.translate(0,.9,0);let d=new F(h,l);d.rotation.z=c*Math.PI/2,r.add(d)}return i.add(r),i.userData={blades:r,update(c){r.rotation.z+=c*1.5}},i}function Xu(){let i=new Dt;i.name="Bakery";let t=new Rt(3.4,2.4,3),e=new F(t,K("#e0a96d"));e.position.y=1.2,e.castShadow=!0,i.add(e);let n=new Me(2.6,1.3,4);n.rotateY(Math.PI/4),n.scale(1.2,1,1.1);let s=new F(n,K("#d35400"));s.position.y=2.9,i.add(s);let r=new Zt(.7,10,8);r.scale(1,.8,1);let o=new F(r,K("#7f8c8d"));o.position.set(.9,.6,1.5),i.add(o);let a=new In(.22,8),l=new xn({color:16733986}),c=new F(a,l);c.position.set(.9,.55,2.15),i.add(c);let h=new Rt(.5,1.4,.5),d=new F(h,K("#6d4c41"));d.position.set(-.9,3.2,-.4),i.add(d);let u=new Rt(1,.6,.5),f=new F(u,K("#8d6e63"));f.position.set(-.8,.3,1.6),i.add(f);let _=new Qi(.08,.16,6,8);_.rotateZ(Math.PI/2);let M=K("#d4a373"),m=new F(_,M);m.position.set(-.95,.68,1.6);let p=m.clone();return p.position.x=-.65,i.add(m,p),i.userData={fire:c,t:0,update(y){this.t+=y*6;let w=.95+Math.sin(this.t)*.15;c.scale.set(w,w,w)}},i}function qu(){let i=new Dt;i.name="Dairy";let t=new Rt(3.4,2.2,3),e=new F(t,K("#ffffff"));e.position.y=1.1,e.castShadow=!0,i.add(e);let n=new Me(2.5,1.2,4);n.rotateY(Math.PI/4);let s=new F(n,K("#2980b9"));s.position.y=2.8,i.add(s);let r=K("#bdc3c7",{metalness:.8});for(let o=0;o<3;o++){let a=new Gt(.2,.22,.6,8),l=new F(a,r);l.position.set(-1+o*.4,.3,1.6),i.add(l)}return i}function $u(){let i=new Dt;i.name="CandyShop";let t=new Rt(3.2,2.2,2.8),e=new F(t,K("#fd79a8"));e.position.y=1.1,e.castShadow=!0,i.add(e);let n=new Me(2.4,1.4,4);n.rotateY(Math.PI/4);let s=new F(n,K("#ffeaa7"));s.position.y=2.8,i.add(s);let r=new Gt(.12,.12,2,8),o=new F(r,K("#ffffff"));o.position.set(-1.4,1,1.4);let a=o.clone();return a.position.x=1.4,i.add(o,a),i}function Yu(){let i=new Dt;i.name="Storage";let t=new Rt(3.6,2.8,3.4),e=new F(t,K("#c0392b"));e.position.y=1.4,e.castShadow=!0,i.add(e);let n=new Gt(1.9,1.9,3.6,10,1,!1,0,Math.PI);n.rotateZ(Math.PI/2);let s=new F(n,K("#7f8c8d"));s.position.y=2.8,i.add(s);let r=new Gt(.8,.8,3.8,12),o=new F(r,K("#bdc3c7",{metalness:.6}));o.position.set(2.4,1.9,0),i.add(o);let a=new Zt(.82,10,8,0,Math.PI*2,0,Math.PI/2),l=new F(a,K("#95a5a6"));return l.position.set(2.4,3.8,0),i.add(l),i}function Zu(){let i=new Dt;i.name="OrderBoard";let t=new Gt(.08,.08,2,6),e=K("#795548"),n=new F(t,e);n.position.set(-.9,1,0);let s=n.clone();s.position.x=.9,i.add(n,s);let r=new Rt(2,1.3,.1),o=new F(r,K("#d7ccc8"));o.position.set(0,1.4,0),o.castShadow=!0,i.add(o);let a=K("#fff9c4");for(let l=0;l<4;l++){let c=new Rt(.38,.45,.02),h=new F(c,a);h.position.set(-.55+l%2*1.1,1.55-Math.floor(l/2)*.55,.06),i.add(h)}return i}function Ju(){let i=new Dt;i.name="DeliveryTruck";let t=K("#e74c3c"),e=K("#2c3e50"),n=new Rt(1.4,1.2,1.2),s=new F(n,t);s.position.set(0,.9,.6),s.castShadow=!0,i.add(s);let r=new Rt(1.2,.55,.1),o=new F(r,K("#74b9ff",{roughness:.2}));o.position.set(0,1.1,1.21),i.add(o);let a=new Rt(1.4,.7,1.8),l=new F(a,K("#d35400"));l.position.set(0,.65,-.8),l.castShadow=!0,i.add(l);let c=new Gt(.32,.32,.25,12);c.rotateZ(Math.PI/2);let h=[];return[[-.75,.32,.6],[.75,.32,.6],[-.75,.32,-.9],[.75,.32,-.9]].forEach(d=>{let u=new F(c,e);u.position.set(...d),i.add(u),h.push(u)}),i.userData={wheels:h,spin(d){h.forEach(u=>u.rotation.x+=d)}},i}function Ku(){let i=new Dt;i.name="Lake";let t=new In(4.2,24);t.rotateX(-Math.PI/2);let e=new hn({color:new Bt("#3498db"),roughness:.1,metalness:.3,transparent:!0,opacity:.88}),n=new F(t,e);n.position.y=.05,i.add(n);let s=new Rt(1.4,.15,2.8),r=new F(s,K("#795548"));r.position.set(-3.2,.18,0),r.castShadow=!0,i.add(r);for(let o=0;o<4;o++){let a=o*1.5+.3,l=1.8+o%2*1.2,c=new In(.35,8);c.rotateX(-Math.PI/2);let h=new F(c,K("#27ae60"));h.position.set(Math.cos(a)*l,.06,Math.sin(a)*l),i.add(h);let d=new Zt(.1,6,6),u=new F(d,K("#fd79a8"));u.position.set(h.position.x,.12,h.position.z),i.add(u)}return i}function Qu(){let i=new Dt;i.name="Plot";let t=new Rt(1.9,.12,1.9),e=K("#4e342e",{roughness:.95}),n=new F(t,e);n.position.y=.06,n.receiveShadow=!0,i.add(n);let s=new Rt(2,.16,2),r=K("#8d6e63",{roughness:.8}),o=new F(s,r);o.position.y=.04,i.add(o);let a=new Rt(2.1,2.2,2.1),l=new xn({visible:!1}),c=new F(a,l);return c.position.y=1,i.add(c),i}function ju(){let i=new Dt;i.name="HarvestBadge";let t=new ai(.24,.05,8,12,Math.PI*.9),e=K("#f1c40f",{metalness:.85,roughness:.2,emissive:"#e67e22"}),n=new F(t,e);n.rotation.z=Math.PI/4,i.add(n);let s=new Gt(.03,.03,.28,6),r=K("#795548"),o=new F(s,r);o.position.set(.14,-.16,0),o.rotation.z=-Math.PI/6,i.add(o);let a=new ji(.32,.38,16),l=K("#ffffff",{emissive:"#f39c12",roughness:.2}),c=new F(a,l);return c.position.z=-.02,i.add(c),i.position.y=1.8,i.userData={time:Math.random()*5,update(h){this.time+=h*3.5,i.position.y=1.8+Math.sin(this.time)*.12,i.rotation.y+=h*2}},i}function td(i,t){let e=new Dt,n=Te[i]||Te.wheat,s=Math.max(.2,t);switch(i){case"wheat":{let r=new Gt(.02,.02,.8*s,5),o=new Me(.07*s,.3*s,6),a=K(t>=1?n.color:n.stem);for(let l=-.5;l<=.5;l+=.5)for(let c=-.5;c<=.5;c+=.5){let h=new F(r,a);h.position.set(l,.4*s,c);let d=new F(o,a);d.position.set(l,.85*s,c),e.add(h,d)}break}case"corn":{let r=new Gt(.04,.06,1.4*s,6),o=new F(r,K(n.stem));if(o.position.y=.7*s,e.add(o),t>=.7){let a=new Gt(.08,.08,.35,6),l=new F(a,K(n.color));l.position.set(.12,.8*s,0),l.rotation.z=.4,e.add(l)}break}case"sunflower":{let r=new Gt(.04,.05,1.5*s,6),o=new F(r,K(n.stem));o.position.y=.75*s,e.add(o);let a=new Gt(.35*s,.35*s,.08,12);a.rotateX(Math.PI/4);let l=new F(a,K(n.color));l.position.set(0,1.5*s,.1);let c=new Gt(.18*s,.18*s,.09,10);c.rotateX(Math.PI/4);let h=new F(c,K("#3e2723"));h.position.copy(l.position),e.add(l,h);break}case"carrot":{let r=new Me(.18*s,.5*s,5),o=new F(r,K(n.stem));if(o.position.y=.3*s,e.add(o),t>=.8){let a=new Me(.12,.25,6);a.rotateX(Math.PI);let l=new F(a,K(n.color));l.position.y=.08,e.add(l)}break}default:{let r=new Zt(.4*s,8,8),o=new F(r,K(n.stem));if(o.position.y=.35*s,e.add(o),t>=.75)for(let a=0;a<4;a++){let l=new Zt(.09,6,6),c=new F(l,K(n.color)),h=a*1.5;c.position.set(Math.cos(h)*.3*s,.35*s,Math.sin(h)*.3*s),e.add(c)}break}}return e.userData={update(r){e.rotation.z=Math.sin(Date.now()*.003+e.position.x)*.05}},e}function ed(i){let t=new Dt;switch(t.name=`Animal_${i}`,i){case"chicken":{let e=new Zt(.24,8,8);e.scale(1,1.1,1.3);let n=new F(e,K("#ffffff"));n.position.y=.32,n.castShadow=!0,t.add(n);let s=new Rt(.05,.12,.16),r=new F(s,K("#e74c3c"));r.position.set(0,.52,.1);let o=new Me(.05,.1,4);o.rotateX(Math.PI/2);let a=new F(o,K("#f1c40f"));a.position.set(0,.36,.35),t.add(r,a);break}case"cow":{let e=new Rt(.9,.85,1.4),n=new F(e,K("#ffffff"));n.position.y=.85,n.castShadow=!0,t.add(n);let s=new Rt(.92,.45,.55),r=new F(s,K("#2c3e50"));r.position.set(0,.85,.1),t.add(r);let o=new Rt(.5,.5,.6),a=new F(o,K("#ffffff"));a.position.set(0,1.25,.8);let l=new Rt(.45,.28,.25),c=new F(l,K("#ffb8b8"));c.position.set(0,1.15,1.12),t.add(a,c);break}case"sheep":{let e=new Zt(.55,10,8);e.scale(1.1,1,1.3);let n=new F(e,K("#f5f6fa",{roughness:.9}));n.position.y=.65,n.castShadow=!0,t.add(n);let s=new Zt(.2,8,8),r=new F(s,K("#2d3436"));r.position.set(0,.75,.65),t.add(r);break}case"pig":{let e=new Zt(.5,10,8);e.scale(1,.95,1.3);let n=new F(e,K("#ff7675"));n.position.y=.55,n.castShadow=!0,t.add(n);let s=new Gt(.12,.12,.1,8);s.rotateX(Math.PI/2);let r=new F(s,K("#d63031"));r.position.set(0,.55,.66),t.add(r);break}}return t.userData={peckTime:Math.random()*5,update(e){this.peckTime+=e,t.rotation.y=Math.sin(this.peckTime*.8)*.25,t.position.y=Math.abs(Math.sin(this.peckTime*2.5))*.04}},t}function nd(){let i=new Dt;i.name="Shop";let t=new Rt(2.4,1,1.2),e=new F(t,K("#8d6e63"));e.position.y=.5,e.castShadow=!0,i.add(e);let n=new Rt(2.6,.15,1.6);n.rotateX(.2);let s=new F(n,K("#e74c3c"));s.position.set(0,2,.1),i.add(s);let r=new Gt(.04,.04,1.8,6),o=new F(r,K("#ffffff"));o.position.set(-1.1,1,.6);let a=o.clone();return a.position.x=1.1,i.add(o,a),i}function id(i="apple"){let t=new Dt,e=new Gt(.18,.28,1.8,6),n=new F(e,K("#5d4037"));n.position.y=.9,n.castShadow=!0,t.add(n);let s=K(i==="pine"?"#1b5e20":"#43a047");if(i==="pine")for(let r=0;r<3;r++){let o=new Me(1.4-r*.35,1.4,7),a=new F(o,s);a.position.y=1.8+r*.8,a.castShadow=!0,t.add(a)}else{let r=new Zt(1.1,8,7);r.scale(1.2,1,1.2);let o=new F(r,s);o.position.y=2.4,o.castShadow=!0,t.add(o);for(let a=0;a<5;a++){let l=new Zt(.1,6,6),c=new F(l,K("#e74c3c")),h=a*1.3;c.position.set(Math.cos(h)*.9,2.2+a%2*.4,Math.sin(h)*.9),t.add(c)}}return t}function Jl(i){let t=new Dt;switch(t.name=`Decor_${i}`,i){case"fence":{let e=new Rt(1,.08,.04),n=new Gt(.06,.06,.8,6),s=K("#8d6e63"),r=new F(n,s);r.position.set(-.45,.4,0);let o=r.clone();o.position.x=.45;let a=new F(e,s);a.position.set(0,.3,0);let l=a.clone();l.position.y=.6,t.add(r,o,a,l);break}case"flowers":{let e=["#e84393","#fdcb6e","#0984e3","#e17055"];for(let n=0;n<4;n++){let s=new Gt(.015,.015,.3,4),r=new F(s,K("#27ae60"));r.position.set(-.2+n%2*.4,.15,-.2+Math.floor(n/2)*.4);let o=new Zt(.09,6,6),a=new F(o,K(e[n%e.length]));a.position.set(r.position.x,.3,r.position.z),t.add(r,a)}break}case"lamp":{let e=new Gt(.05,.07,1.8,6),n=new F(e,K("#2c3e50"));n.position.y=.9,t.add(n);let s=new Rt(.3,.4,.3),r=K("#f1c40f",{emissive:"#f39c12",roughness:.2}),o=new F(s,r);o.position.y=1.9,t.add(o);break}case"bench":{let e=new Rt(1.2,.08,.5),n=new Rt(1.2,.4,.06),s=new Rt(.08,.4,.4),r=K("#d35400"),o=new F(e,r);o.position.y=.4;let a=new F(n,r);a.position.set(0,.65,-.22);let l=new F(s,K("#2c3e50"));l.position.set(-.45,.2,0);let c=l.clone();c.position.x=.45,t.add(o,a,l,c);break}case"windmill":{let e=new Gt(.6,.9,2.8,8),n=new F(e,K("#ffffff"));n.position.y=1.4;let s=new Me(.8,.8,8),r=new F(s,K("#c0392b"));r.position.y=3.2;let o=new Dt;o.position.set(0,2.7,.7);for(let a=0;a<4;a++){let l=new Rt(.2,1.4,.02);l.translate(0,.7,0);let c=new F(l,K("#ecf0f1"));c.rotation.z=a*Math.PI/2,o.add(c)}t.add(n,r,o),t.userData={update(a){o.rotation.z+=a*1.8}};break}default:{let e=new Rt(.8,.04,.8),n=new F(e,K("#95a5a6"));n.position.y=.02,t.add(n);break}}return t}function sd(){let i=new Dt;i.name="DogHouse";let t=new Rt(1.6,1.3,1.8),e=K("#d7ccc8",{roughness:.8}),n=new F(t,e);n.position.y=.65,n.castShadow=!0,i.add(n);let s=new Me(1.4,.8,4);s.rotateY(Math.PI/4),s.scale(1.15,1,1.3);let r=K("#d96677",{roughness:.6}),o=new F(s,r);o.position.y=1.65,o.castShadow=!0,i.add(o);let a=new Rt(.7,.9,.1),l=K("#3e2723"),c=new F(a,l);c.position.set(0,.5,.91),i.add(c);let h=new Rt(.65,.18,.04),d=K("#ffffff"),u=new F(h,d);return u.position.set(0,1.15,.93),i.add(u),i}function rd(i="Ay\u015Fe Teyze"){let t=new Dt;t.name=`Visitor_${i}`;let e=i.includes("Teyze")||i.includes("Amca")||i.includes("Dede"),n=e?"#81ecec":"#fab1a0",s=e?"#2d3436":"#0984e3",r=new Zt(.28,12,10),o=new F(r,K("#f5d5be"));o.position.y=1.45,o.castShadow=!0,t.add(o);let a=new Me(.35,.25,8),l=new F(a,K("#fdcb6e"));l.position.set(0,1.65,0),t.add(l);let c=new Gt(.2,.24,.55,8),h=new F(c,K(n));h.position.y=.98,h.castShadow=!0,t.add(h);let d=new Gt(.07,.06,.5,6);d.translate(0,-.25,0);let u=new F(d,K(s));u.position.set(-.1,.65,0);let f=u.clone();f.position.x=.1,t.add(u,f);let _=new Gt(.05,.045,.4,6);_.translate(0,-.2,0);let M=new F(_,K(n));return M.position.set(.25,1.15,0),t.add(M),t.userData={lLeg:u,rLeg:f,rArm:M,walkTime:0,isWalking:!0,update(m){if(this.isWalking){this.walkTime+=m*8;let p=Math.sin(this.walkTime)*.45;u.rotation.x=p,f.rotation.x=-p,M.rotation.x=-p*.6}else this.walkTime+=m*5,u.rotation.x=0,f.rotation.x=0,M.rotation.z=.8+Math.sin(this.walkTime)*.35}},t}function od(i){let t=new Dt,n=(Te[i]||Te.wheat).color||"#f1c40f",s=new Me(.16,.45,6),r=new F(s,K(n,{emissive:"#d35400",roughness:.3}));return r.rotation.x=Math.PI,t.add(r),t.userData={t:0,update(o){this.t+=o,t.rotation.y+=o*8,t.rotation.z+=o*6}},t}function ad(){let i=new Dt;i.name="JumpingFish";let t=new Me(.14,.46,7);t.rotateZ(Math.PI/2);let e=K("#e67e22",{roughness:.3,metalness:.2}),n=new F(t,e);i.add(n);let s=new Me(.1,.22,4);s.rotateZ(-Math.PI/2);let r=new F(s,K("#d35400"));return r.position.x=-.28,i.add(r),i.scale.setScalar(.9),i}function ld(){let i=new ji(.12,.24,16);i.rotateX(-Math.PI/2);let t=new xn({color:16777215,transparent:!0,opacity:.85,side:rn}),e=new F(i,t);return e.position.y=.03,e}function Kl(){let i=new Ns(.2,0),t=new hn({color:16119546,transparent:!0,opacity:.6,roughness:1,flatShading:!0});return new F(i,t)}function cd(){let i=new Zt(.16,12,10),t=K("#c8e632",{roughness:.7}),e=new F(i,t);return e.castShadow=!0,e}function hd(){let i=new Dt;i.name="FluffyCloud";let t=new hn({color:16777215,roughness:.85,metalness:.05,flatShading:!0});return[{r:1.8,x:0,y:0,z:0},{r:1.3,x:-1.6,y:-.2,z:.3},{r:1.4,x:1.5,y:-.1,z:-.2},{r:1.1,x:.4,y:.8,z:.2},{r:.9,x:-.8,y:.7,z:-.3}].forEach(n=>{let s=new Zt(n.r,8,7),r=new F(s,t);r.position.set(n.x,n.y,n.z),i.add(r)}),i}function ud(){let i=new Dt;i.name="CobblestonePaths";let t=K("#d7ccc8",{roughness:.9}),e=K("#bcaaa4",{roughness:.95}),n=K("#c7b299",{roughness:.85}),s=[t,e,n];return[[-3.8,-1.8],[-3.2,-1.2],[-2.6,-.6],[-2,0],[-1.4,.6],[-.8,1.2],[-.2,1.8],[.4,2.4],[1,3],[-4.2,-3.2],[-4,-4],[-4.2,-4.8],[-4.6,-5.6],[-1.8,-2.4],[-.8,-2.8],[.2,-3.2],[1.2,-3.4],[2,2],[2.8,1.4],[3.6,.8],[4.4,.2]].forEach(([o,a],l)=>{let c=.35+l%3*.08,h=.28+(l+1)%3*.08,d=new Gt(c,c*1.1,.05,7),u=s[l%s.length],f=new F(d,u);f.position.set(o,.03,a),f.rotation.y=l*.7,f.receiveShadow=!0,i.add(f)}),i}function dd(i="daisy"){let t=new Dt;t.name=`FlowerPatch_${i}`;let e=K("#4caf50",{roughness:.8}),n=K("#fbc02d",{roughness:.5}),s=i==="poppy"?K("#e53935",{roughness:.6}):K("#ffffff",{roughness:.5});return[[-.3,-.2],[.2,-.25],[-.1,.2],[.35,.15],[-.35,.3]].forEach(([o,a],l)=>{let c=new Dt;c.position.set(o,0,a);let h=new Gt(.015,.02,.22+l%3*.05,5),d=new F(h,e);d.position.y=.11,c.add(d);let u=new In(.08,6);u.rotateX(-Math.PI/2);let f=new F(u,s);f.position.y=d.position.y*2,c.add(f);let _=new Zt(.035,6,6),M=new F(_,n);M.position.y=f.position.y+.01,c.add(M),t.add(c)}),t}function Ql(i=3){let t=new Dt;t.name="FarmFence";let e=K("#fdfbf7",{roughness:.7}),n=1.2,s=Math.max(2,Math.round(i/n));for(let r=0;r<s;r++){let o=new Rt(.12,.7,.12),a=new F(o,e);if(a.position.set(r*n,.35,0),a.castShadow=!0,t.add(a),r<s-1){let l=new Rt(n,.08,.04),c=new F(l,e);c.position.set(r*n+n/2,.52,0);let h=c.clone();h.position.y=.26,t.add(c,h)}}return t}function fd(i="#ffeaa7"){let t=new Dt;t.name="Butterfly";let e=new Qi(.02,.1,4,6),n=K("#2d3436"),s=new F(e,n);s.rotation.x=Math.PI/2,t.add(s);let r=new hn({color:new Bt(i),roughness:.4,side:rn}),o=new In(.12,5);o.scale(1.2,.8,1);let a=new F(o,r);a.position.set(-.1,.02,0),t.add(a);let l=new F(o,r);return l.position.set(.1,.02,0),t.add(l),t.userData={leftWing:a,rightWing:l,time:Math.random()*10,basePos:new O,update(c){this.time+=c;let h=Math.sin(this.time*22)*.9;a.rotation.y=h,l.rotation.y=-h,t.position.x=this.basePos.x+Math.sin(this.time*.8)*1.6,t.position.z=this.basePos.z+Math.cos(this.time*.7)*1.4,t.position.y=this.basePos.y+.8+Math.sin(this.time*2.5)*.25,t.rotation.y=Math.atan2(Math.cos(this.time*.8),-Math.sin(this.time*.7))}},t}var ds=null;function jl(){if(!ds){let i=window.AudioContext||window.webkitAudioContext;i&&(ds=new i)}return ds&&ds.state==="suspended"&&ds.resume().catch(()=>{}),ds}function dn(...i){let t=jl();if(t)try{let[e=1,n=.05,s=220,r=0,o=0,a=.1,l=0,c=1,h=0,d=0,u=0,f=0,_=0,M=0,m=0,p=0,y=0,w=1,b=0,A=0]=i,E=t.sampleRate,g=h*500*Math.PI/E/E,S=d*2e5*Math.PI/E**3,P=g,R=s*(1+n*(Math.random()*2-1))*2*Math.PI/E,L=r*E|0,U=b*E|0,G=o*E|0,I=a*E|0,V=y*E|0,$=L+U+G+I+V,H=t.createBuffer(1,Math.max(1,$),E),nt=H.getChannelData(0),W=0,tt=0,et=0;for(let Mt=0;Mt<$;Mt++){if(Mt<V){nt[Mt]=0;continue}let q=Mt-V,rt=1;q<L?rt=q/L:q<L+U?rt=1-(1-w)*((q-L)/U):q<L+U+G?rt=w:rt=w*(1-(q-L-U-G)/I),u&&++et>f*E&&(R+=u*2*Math.PI/E,et=0),P+=S,R+=P,W+=R;let gt=l===0?Math.sin(W):l===1?W%(2*Math.PI)<Math.PI?1:-1:l===2?1-2*Math.abs(W/(2*Math.PI)%1-.5):Math.random()*2-1;M&&(gt=gt*(1-M)+(Math.random()*2-1)*M),nt[Mt]=gt*rt*e*.4}let vt=t.createBufferSource();vt.buffer=H,vt.connect(t.destination),vt.start()}catch{}}var pd={};function or(i,t=.7){try{let e=pd[i];e||(e=new Audio(`sfx/${i}.mp3`),pd[i]=e),e.volume=Math.max(0,Math.min(1,t)),e.currentTime=0,e.play().catch(()=>{})}catch{}}var Nt={enabled:!0,musicEnabled:!0,bgmNode:null,_voiceCache:{},_activeVoice:null,_lastVoiceAt:0,_welcomed:!1,playVoice(i,t=.85){if(!this.enabled)return;let e=Date.now();if(!(e-this._lastVoiceAt<5e3)){this._lastVoiceAt=e;try{this._activeVoice&&(this._activeVoice.pause(),this._activeVoice.currentTime=0);let n=this._voiceCache[i];n||(n=new Audio(`sfx/${i}.wav`),this._voiceCache[i]=n),n.volume=Math.max(0,Math.min(1,t)),n.currentTime=0,this._activeVoice=n,n.play().catch(()=>{})}catch{}}},unlock(){jl(),this._welcomed||(this._welcomed=!0,setTimeout(()=>this.playVoice("voice_ezgi_welcome",.85),600))},vibrate(i=15){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(i)}catch{}},click(){this.enabled&&(this.vibrate(10),dn(.4,.02,480,.01,.03,.06,0,1.2,8,0))},plant(){this.enabled&&(this.vibrate(12),dn(.5,.05,320,.02,.04,.09,0,1.5,5,-2,0,0,0,.1))},harvest(){this.enabled&&(this.vibrate(18),dn(.6,.03,520,.01,.08,.15,0,2,4,-5,120,.04),Math.random()<.14&&this.playVoice("voice_ezgi_harvest",.78))},coin(){this.enabled&&(this.vibrate([15,30,20]),dn(.5,.01,950,.01,.05,.12,0,2,2,0,300,.03))},gofrikBark(){this.enabled&&(this.vibrate([20,40,20]),dn(.6,.08,540,.01,.08,.14,1,1.5,-8,2,80,.02,0,.15),setTimeout(()=>{dn(.5,.08,620,.01,.06,.12,1,1.5,-9,2,60,.02,0,.12)},110),Math.random()<.35&&setTimeout(()=>this.playVoice("voice_ezgi_gofrik",.82),350))},fetchPlay(){this.enabled&&(this.vibrate(25),dn(.5,.02,440,.02,.1,.18,0,1.5,12,-4))},visitorChime(){this.enabled&&(dn(.45,.01,659.25,.01,.08,.25,0,1.5,0,0),setTimeout(()=>{dn(.45,.01,880,.01,.12,.35,0,1.5,0,0)},120))},truckHonk(){this.enabled&&(dn(.5,.05,220,.02,.18,.22,1,1.2,0,0,-40,.08),setTimeout(()=>this.playVoice("voice_ezgi_order",.85),320))},splash(){this.enabled&&dn(.6,.15,280,.02,.09,.25,3,1.8,-4,0,0,0,0,.4)},fanfare(){if(!this.enabled)return;[523.25,659.25,783.99,1046.5].forEach((t,e)=>{setTimeout(()=>{dn(.6,.01,t,.02,.12,.35,0,1.5,0,0)},e*100)}),setTimeout(()=>this.playVoice("voice_ezgi_levelup",.88),480)},animal(i){if(this.enabled)switch(i){case"chicken":or("hen",.65);break;case"cow":or("cow",.7);break;case"sheep":or("sheep",.65);break;case"pig":or("pig",.6);break;case"cat":or("cat",.6);break;default:break}},startBgm(){if(!this.musicEnabled||this.bgmTimer)return;let i=jl();if(!i)return;let t=[{f:261.63,d:.4},{f:329.63,d:.4},{f:392,d:.6},{f:523.25,d:.6},{f:440,d:.4},{f:392,d:.8},{f:329.63,d:.4},{f:349.23,d:.4},{f:392,d:.6},{f:329.63,d:.6},{f:293.66,d:.4},{f:261.63,d:.8}],e=0,n=()=>{if(!this.musicEnabled)return;let s=t[e];e=(e+1)%t.length;try{let r=i.createOscillator(),o=i.createGain();r.type="triangle",r.frequency.setValueAtTime(s.f,i.currentTime),o.gain.setValueAtTime(.001,i.currentTime),o.gain.linearRampToValueAtTime(.045,i.currentTime+.03),o.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+s.d*1.8),r.connect(o),o.connect(i.destination),r.start(),r.stop(i.currentTime+s.d*1.8)}catch{}this.bgmTimer=setTimeout(n,s.d*1e3)};n()},stopBgm(){this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)},toggleMusic(){return this.musicEnabled=!this.musicEnabled,this.musicEnabled?this.startBgm():this.stopBgm(),this.musicEnabled},toggleSfx(){return this.enabled=!this.enabled,this.enabled}};var fa=class{constructor(t){this.game=t,this.container=document.getElementById("ui-root"),this.activeModal=null,this.seedWheelTarget=null,this.init()}init(){this.renderHUD(),this.bindGlobalEvents()}renderHUD(){let t=this.game.state,e=ir(t),n=t.xp,s=Math.floor(15*Math.pow(t.level,1.7)),r=Math.min(100,Math.round(n/s*100)),o=ls(t,Date.now()),a=bn.length,l=o.completed.length,c=Math.round(l/a*100);this.container.innerHTML=`
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
      <button id="btn-daily-missions" class="mission-widget" aria-label="G\xFCnl\xFCk \xE7iftlik hedeflerini a\xE7">
        <span class="mission-widget-badge">\u{1F3C6}</span>
        <span class="mission-widget-copy">
          <span class="mission-widget-kicker">BUG\xDCN \xC7\u0130FTL\u0130KTE</span>
          <span class="mission-widget-title"><strong id="mission-count">${l}/${a}</strong> hedef tamamland\u0131</span>
          <span class="mission-widget-track"><span id="mission-progress" style="width:${c}%"></span></span>
        </span>
        <span class="mission-widget-arrow">\u203A</span>
      </button>

      <!-- Alt H\u0131zl\u0131 Eylemler & Dekor Butonu -->
      <footer class="hud-bottom">
        <div class="hud-bottom-left">
          <button id="btn-pet-gofrik" class="bottom-action-btn gofrik-btn">
            <span class="btn-icon">\u{1F436}</span>
            <span class="btn-label">Gofrik'i Sev</span>
          </button>
        </div>

        <div class="hud-bottom-right">
          <button id="btn-construction" class="bottom-action-btn">
            <span class="btn-icon">\u{1F3D7}\uFE0F</span>
            <span class="btn-label">\u0130n\u015Faat</span>
          </button>
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
    `,this.bindHUDEvents()}updateHUD(){let t=this.game.state,e=document.getElementById("hud-coins"),n=document.getElementById("hud-gems"),s=document.querySelector("#btn-storage .curr-val"),r=document.querySelector(".lvl-badge"),o=document.querySelector(".xp-bar-fill"),a=document.getElementById("btn-bday"),l=ls(t,Date.now()),c=bn.length,h=l.completed.length,d=document.getElementById("mission-count"),u=document.getElementById("mission-progress");e&&(e.textContent=t.coins.toLocaleString("tr-TR")),n&&(n.textContent=(t.gems||0).toLocaleString("tr-TR")),s&&(s.textContent=`${ir(t)}/${t.cap}`),r&&(r.textContent=t.level),d&&(d.textContent=`${h}/${c}`),u&&(u.style.width=`${Math.round(h/c*100)}%`);let f=Math.floor(15*Math.pow(t.level,1.7));o&&(o.style.width=`${Math.min(100,Math.round(t.xp/f*100))}%`),a&&(t.birthdayClaimed?(a.classList.remove("pulse"),a.classList.add("claimed")):(a.classList.add("pulse"),a.classList.remove("claimed")))}bindHUDEvents(){document.getElementById("btn-avatar")?.addEventListener("click",()=>{Nt.click(),this.openCharacterCustomizer()}),document.getElementById("btn-bday")?.addEventListener("click",()=>{Nt.click(),this.openBirthdayModal()}),document.getElementById("btn-storage")?.addEventListener("click",()=>{Nt.click(),this.openStorageModal()}),document.getElementById("btn-settings")?.addEventListener("click",()=>{Nt.click(),this.openSettingsModal()}),document.getElementById("btn-cam-rot-left")?.addEventListener("click",()=>{Nt.click(),this.game.rotateCamera(-Math.PI/4)}),document.getElementById("btn-cam-rot-right")?.addEventListener("click",()=>{Nt.click(),this.game.rotateCamera(Math.PI/4)}),document.getElementById("btn-cam-center")?.addEventListener("click",()=>{Nt.click(),this.game.centerCamera()}),document.getElementById("btn-daily-missions")?.addEventListener("click",()=>{Nt.click(),this.openDailyMissionsModal()}),document.getElementById("btn-pet-gofrik")?.addEventListener("click",()=>{this.game.interactWithGofrik()}),document.getElementById("btn-decor-shop")?.addEventListener("click",()=>{Nt.click(),this.openDecorModal()}),document.getElementById("btn-construction")?.addEventListener("click",()=>{Nt.click(),this.openConstructionModal()}),document.getElementById("btn-orders-quick")?.addEventListener("click",()=>{Nt.click(),this.openOrderBoardModal()}),document.getElementById("modal-backdrop")?.addEventListener("click",t=>{t.target.id==="modal-backdrop"&&this.closeModal()})}bindGlobalEvents(){window.addEventListener("keydown",t=>{t.key==="Escape"&&(this.closeModal(),this.hideSeedWheel())})}showToast(t,e="\u2728",n=!1){let s=document.getElementById("toast-container");if(!s)return;let r=document.createElement("div");r.className=`toast ${n?"toast-error":"toast-success"}`,r.innerHTML=`<span class="toast-icon">${e}</span><span class="toast-msg">${t}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("fade-out"),setTimeout(()=>r.remove(),400)},2400)}announceMissionRewards(t=[]){t.forEach(e=>{Nt.fanfare(),this.showToast(`${e.icon} ${e.title} tamamland\u0131! +${e.coins} \u{1FA99} \xB7 +${e.xp} XP`,"\u{1F3C6}")})}openDailyMissionsModal(){let t=this.game.state,e=ls(t,Date.now()),n=bn.map(s=>{let r=e.progress[s.id]||0,o=e.completed.includes(s.id),a=Math.min(100,Math.round(r/s.target*100));return`
        <article class="daily-mission-card ${o?"is-complete":""}">
          <div class="daily-mission-icon">${o?"\u2713":s.icon}</div>
          <div class="daily-mission-main">
            <div class="daily-mission-heading"><strong>${s.title}</strong><span>${r}/${s.target}</span></div>
            <p>${s.description}</p>
            <div class="daily-mission-track"><span style="width:${a}%"></span></div>
            <div class="daily-mission-reward"><span>\u{1FA99} +${s.coins}</span><span>\u2B50 +${s.xp} XP</span><b>${o?"\xD6D\xDCL ALINDI":"TAMAMLA"}</b></div>
          </div>
        </article>
      `}).join("");this.showModal(`
      <div class="modal-header daily-missions-header">
        <div><span class="daily-missions-eyebrow">EZG\u0130'N\u0130N \xC7\u0130FTL\u0130\u011E\u0130</span><h2>Bug\xFCn\xFCn hedefleri \u2728</h2></div>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body daily-missions-body">
        <div class="daily-missions-intro"><span>\u{1F33B}</span><p>\xC7iftli\u011Fine biraz zaman ay\u0131r; her hedefin \xF6d\xFCl\xFCn\xFC tamamlay\u0131nca kazan!</p></div>
        <div class="daily-mission-list">${n}</div>
        <div class="daily-missions-footer">${e.completed.length===bn.length?"Harika i\u015F \xE7\u0131kard\u0131n, Ezgi! Bug\xFCnl\xFCk t\xFCm hedefler tamamland\u0131. \u{1F49B}":`${bn.length-e.completed.length} hedef daha seni bekliyor.`}</div>
      </div>
    `)}openBirthdayModal(){let e=this.game.state.birthdayClaimed;this.showModal(`
      <div class="modal-header bday-header">
        <h2>\u{1F382} \u0130yi ki Do\u011Fdun Ezgi! \u{1F388}</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body bday-body">
        <div class="bday-splash">
          <div class="bday-cake">\u{1F382}</div>
          <div class="bday-hearts">\u{1F496} \u{1F436} \u{1F33E} \u{1F48E} \u2728</div>
        </div>
        <p class="bday-msg">${ia.message}</p>

        <div class="bday-gift-box">
          <div class="gift-row">
            <span class="gift-icon">\u{1FA99}</span>
            <span class="gift-val">+${ia.giftCoins} Alt\u0131n</span>
          </div>
          <div class="gift-row">
            <span class="gift-icon">\u{1F48E}</span>
            <span class="gift-val">+${ia.giftGems} M\xFCcevher</span>
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
    `),document.getElementById("btn-claim-bday")?.addEventListener("click",()=>{this.game.claimBirthday().ok&&(Nt.fanfare(),this.showToast("Do\u011Fum g\xFCn\xFC hediyen ambara eklendi! \u{1F382}\u2728","\u{1F381}"),this.openBirthdayModal(),this.updateHUD())})}showSeedWheel(t,e){let n=this.game.state,s=document.getElementById("seed-wheel");if(!s)return;this.seedWheelTarget=t;let r=`
      <div class="seed-wheel-card">
        <div class="seed-wheel-title">\u{1F33E} Ekin Se\xE7:</div>
        <div class="seed-grid">
    `;ra.forEach(o=>{let a=Te[o],l=Jt[o],c=n.level>=a.level,h=n.coins>=a.seed;r+=`
        <button class="seed-item ${c?"":"locked"} ${h?"":"disabled"}" data-crop="${o}">
          <span class="seed-icon">${l.icon}</span>
          <span class="seed-name">${l.name}</span>
          <div class="seed-meta">
            ${c?`<span>\u{1FA99}${a.seed}</span> <span>\u23F1\uFE0F${mi(a.time*1e3)}</span>`:`<span>\u{1F512} Lv ${a.level}</span>`}
          </div>
        </button>
      `}),r+=`
        </div>
        <button id="btn-close-seed" class="seed-close-btn">Vazge\xE7 \u2715</button>
      </div>
    `,s.innerHTML=r,s.classList.remove("hidden"),s.querySelectorAll(".seed-item").forEach(o=>{o.addEventListener("click",a=>{let l=o.dataset.crop;if(l){let c=this.game.plantCrop(this.seedWheelTarget,l);c.ok?(Nt.plant(),this.showToast(`${Jt[l].name} ekildi!`,Jt[l].icon),this.startPlantingMode(l)):this.showToast(c.err||"Ekilemedi","\u26A0\uFE0F",!0)}this.hideSeedWheel()})}),document.getElementById("btn-close-seed")?.addEventListener("click",()=>{this.hideSeedWheel()})}startPlantingMode(t){this.game.activeSeedTool=t;let e=document.getElementById("seed-tool-banner");e||(e=document.createElement("div"),e.id="seed-tool-banner",e.className="seed-tool-banner",document.body.appendChild(e));let n=Jt[t]||{name:t,icon:"\u{1F33E}"};e.innerHTML=`
      <span class="seed-tool-icon">${n.icon}</span>
      <span class="seed-tool-text">${n.name} Ekiliyor \u2014 Bo\u015F tarlalara dokun/s\xFCr\xFCkle!</span>
      <button id="btn-cancel-seed-tool" class="seed-tool-cancel">Tamamla \u2713</button>
    `,e.classList.remove("hidden"),document.getElementById("btn-cancel-seed-tool")?.addEventListener("click",()=>{this.stopPlantingMode()})}stopPlantingMode(){this.game.activeSeedTool=null;let t=document.getElementById("seed-tool-banner");t&&t.remove()}hideSeedWheel(){let t=document.getElementById("seed-wheel");t&&t.classList.add("hidden"),this.seedWheelTarget=null}showCropProgressModal(t){let e=this.game.state,n=e.plots[t];if(!n||!n.crop)return;let s=Un(e,t,Date.now()),r=Te[n.crop],o=Jt[n.crop],a=Math.round(s.progress*100);this.showModal(`
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
          ${s.state==="ready"?"T\u0131rpan ile hasat edilmeye haz\u0131r!":`Kalan S\xFCre: \u23F1\uFE0F ${mi(s.remaining)} (%${a})`}
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
    `),document.getElementById("btn-modal-harvest")?.addEventListener("click",()=>{this.closeModal(),this.game.harvestPlot(t)}),document.getElementById("btn-modal-speedup")?.addEventListener("click",()=>{(e.gems||0)>=1?(e.gems-=1,n.at=Date.now()-r.time*1e3,Nt.fanfare(),this.showToast(`${o.name} h\u0131zland\u0131r\u0131ld\u0131 ve haz\u0131r! \u{1F33E}`,"\u26A1"),this.closeModal(),this.game.rebuildPlots(),this.updateHUD()):this.showToast("Yeterli m\xFCcevher yok!","\u{1F48E}",!0)})}openOrderBoardModal(){let t=Date.now();this.game.ensureOrders(t);let e=this.game.state,n=t<e.truck.backAt,s=Math.max(0,e.truck.backAt-t),r=`
      <div class="modal-header">
        <h2>\u{1F4CB} Kasaba Sipari\u015Fleri</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="truck-status-bar ${n?"truck-away":"truck-ready"}">
          <span class="truck-icon">\u{1F69A}</span>
          <span>${n?`Kamyon yolda... (${mi(s)} kald\u0131)`:"Kamyon \xE7iftlikte y\xFCk bekliyor!"}</span>
        </div>

        <div class="orders-grid">
    `;e.orders.forEach((o,a)=>{if(o.wait){let h=Math.max(0,o.wait-Date.now());r+=`
          <div class="order-card order-waiting">
            <div class="order-waiting-text">Yeni sipari\u015F haz\u0131rlan\u0131yor...</div>
            <div class="order-timer">\u23F1\uFE0F ${mi(h)}</div>
          </div>
        `;return}let l=!0,c="";o.items.forEach(h=>{let d=pi(e,h.k),u=d>=h.q;u||(l=!1),c+=`
          <div class="order-req-item ${u?"item-ok":"item-missing"}">
            <span>${Jt[h.k].icon} ${Jt[h.k].name}</span>
            <span class="req-count">${d}/${h.q}</span>
          </div>
        `}),r+=`
        <div class="order-card">
          <div class="order-items-list">${c}</div>
          <div class="order-rewards">
            <span class="rew-coin">\u{1FA99} +${o.coins}</span>
            <span class="rew-xp">\u2B50 +${o.xp} XP</span>
          </div>
          <div class="order-actions">
            <button class="order-deliver-btn ${l&&!n?"active":"disabled"}" data-idx="${a}">
              ${n?"Kamyon Yolda":l?"Teslim Et \u{1F69A}":"Eksik \xDCr\xFCn"}
            </button>
            <button class="order-discard-btn" data-idx="${a}" title="Sipari\u015Fi \u0130ptal Et">\u{1F5D1}\uFE0F</button>
          </div>
        </div>
      `}),r+=`
        </div>
      </div>
    `,this.showModal(r),this.container.querySelectorAll(".order-deliver-btn").forEach(o=>{o.addEventListener("click",()=>{let a=parseInt(o.dataset.idx,10),l=this.game.deliverOrder(a);l.ok?(Nt.truckHonk(),Nt.coin(),this.showToast(`Sipari\u015F teslim edildi! \u{1FA99} +${l.coins} \u2B50 +${l.xp} XP`,"\u{1F69A}"),this.openOrderBoardModal(),this.updateHUD(),this.announceMissionRewards(l.missions)):this.showToast(l.err||"Teslim edilemedi","\u26A0\uFE0F",!0)})}),this.container.querySelectorAll(".order-discard-btn").forEach(o=>{o.addEventListener("click",()=>{let a=parseInt(o.dataset.idx,10);this.game.discardOrder(a),Nt.click(),this.showToast("Yeni sipari\u015F aran\u0131yor...","\u{1F4CB}"),this.openOrderBoardModal()})})}openConstructionModal(){let t=this.game.state,n=[...Object.entries(on).map(([s,r])=>({key:s,cfg:r,kind:"building"})),...Ri.map(s=>({key:s,cfg:Ce[s],kind:"pen"}))].map(({key:s,cfg:r,kind:o})=>{let a=o==="building"?t.buildings[s].owned:t.pens[s].owned,l=o==="building"?r.price:r.penPrice,c=r.level,h=t.level>=c,d={chicken:"K\xFCmesi",cow:"Ah\u0131r\u0131",sheep:"A\u011F\u0131l\u0131",pig:"A\u011F\u0131l\u0131"}[s],u=o==="building"?r.name:`${r.name} ${d}`,f=a?"\xC7iftlikte var":h?`Kur \xB7 \u{1FA99} ${l}`:`\u{1F512} ${c}. seviye`;return`<article class="construction-card ${a?"construction-owned":""}">
        <span class="construction-icon">${r.icon}</span><div class="construction-copy"><strong>${u}</strong><small>${o==="building"?"\xDCretim binas\u0131":"Hayvan bar\u0131na\u011F\u0131"} \xB7 ${c}. seviye</small></div>
        <button class="construction-buy ${a||!h||t.coins<l?"disabled":"active"}" data-kind="${o}" data-key="${s}" ${a||!h||t.coins<l?"disabled":""}>${f}</button>
      </article>`}).join("");this.showModal(`<div class="modal-header"><h2>\u{1F3D7}\uFE0F \xC7iftlik \u0130n\u015Faat\u0131</h2><button class="modal-close" onclick="window.ui.closeModal()">\u2715</button></div>
      <div class="modal-body construction-body"><p class="construction-intro">Yeni \xFCretim binalar\u0131 ve hayvan bar\u0131naklar\u0131 kurarak \xE7iftli\u011Fini b\xFCy\xFCt.</p><div class="construction-list">${n}</div></div>`),this.container.querySelectorAll(".construction-buy").forEach(s=>s.addEventListener("click",()=>{let{key:r,kind:o}=s.dataset,a=o==="building"?this.game.buyBuilding(r):this.game.buyPen(r);a.ok?(this.showToast(`${o==="building"?on[r].name:Ce[r].name+" bar\u0131na\u011F\u0131"} kuruldu!`,"\u{1F3D7}\uFE0F"),this.updateHUD(),this.openConstructionModal()):this.showToast(a.err||"\u0130n\u015Faat yap\u0131lamad\u0131","\u26A0\uFE0F",!0)}))}openBuildingModal(t){let e=this.game.state,n=on[t],s=e.buildings[t];if(!s||!s.owned){this.showToast(`${n.name} hen\xFCz in\u015Fa edilmedi`,"\u{1F512}",!0);return}let r=Pu(e,t,Date.now()),o=`
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
    `;Object.keys(un).forEach(a=>{let l=un[a];if(l.building!==t)return;let c=Jt[a],h=e.level>=l.level,d="",u=h;for(let f in l.in){let _=l.in[f],M=pi(e,f);M<_&&(u=!1),d+=`
          <span class="ingr-pill ${M>=_?"ok":"missing"}">
            ${Jt[f].icon} ${M}/${_}
          </span>
        `}o+=`
        <div class="recipe-card ${h?"":"locked"}">
          <div class="recipe-left">
            <span class="recipe-icon">${c.icon}</span>
            <div class="recipe-info">
              <span class="recipe-name">${c.name} (x${l.out})</span>
              <div class="recipe-meta">\u23F1\uFE0F ${mi(l.time*1e3)} \u2022 \u2B50 ${l.xp} XP</div>
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
    `,this.showModal(o),document.getElementById("btn-collect-bld")?.addEventListener("click",()=>{let a=this.game.collectBuilding(t);a.ok?(Nt.harvest(),a.got.forEach(l=>this.showToast(`${Jt[l.item].name} topland\u0131 (x${l.qty})!`,Jt[l.item].icon)),this.openBuildingModal(t),this.updateHUD(),this.announceMissionRewards(a.missions)):this.showToast(a.err||"Toplanamad\u0131","\u26A0\uFE0F",!0)}),this.container.querySelectorAll(".craft-btn").forEach(a=>{a.addEventListener("click",()=>{let l=a.dataset.recipe,c=this.game.queueRecipe(t,l);c.ok?(Nt.plant(),this.showToast(`${Jt[l].name} \xFCretime al\u0131nd\u0131!`,Jt[l].icon),this.openBuildingModal(t),this.updateHUD()):this.showToast(c.err||"\xDCretilemedi","\u26A0\uFE0F",!0)})})}openPenModal(t){let e=this.game.state,n=e.pens[t],s=Ce[t];if(!n||!n.owned){this.openConstructionModal();return}let r=Jt[s.feed],o=Jt[s.product],a=pi(e,s.feed),l=`
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
    `;n.animals.forEach((c,h)=>{let d=sr(e,t,h,Date.now());l+=`
        <div class="animal-card">
          <div class="animal-icon">${s.icon}</div>
          <div class="animal-state-label">
            ${d.state==="ready"?`<span class="ready-text">\u2728 ${o.name} Haz\u0131r!</span>`:d.state==="producing"?`<span>\u23F1\uFE0F ${mi(d.remaining)}</span>`:'<span class="hungry-text">A\xE7 (Yem Ver)</span>'}
          </div>
          <div class="animal-card-action">
            ${d.state==="ready"?`<button class="collect-animal-btn primary-btn" data-idx="${h}">Topla ${o.icon}</button>`:d.state==="hungry"?`<button class="feed-animal-btn ${a>0?"active":"disabled"}" data-idx="${h}">Yemle ${r.icon}</button>`:'<button class="disabled-btn" disabled>B\xFCy\xFCyor...</button>'}
          </div>
        </div>
      `}),l+=`
        </div>
      </div>
    `,this.showModal(l),document.getElementById("btn-buy-animal")?.addEventListener("click",()=>{let c=this.game.buyAnimal(t);c.ok?(Nt.animal(t),this.showToast(`Yeni ${s.name} \xE7iftli\u011Fe kat\u0131ld\u0131!`,s.icon),this.openPenModal(t),this.updateHUD(),this.announceMissionRewards(c.missions)):this.showToast(c.err||"Al\u0131namad\u0131","\u26A0\uFE0F",!0)}),this.container.querySelectorAll(".collect-animal-btn").forEach(c=>{c.addEventListener("click",()=>{let h=parseInt(c.dataset.idx,10),d=this.game.collectAnimal(t,h);d.ok?(Nt.harvest(),this.showToast(`${o.name} topland\u0131!`,o.icon),this.openPenModal(t),this.updateHUD()):this.showToast(d.err||"Toplanamad\u0131","\u26A0\uFE0F",!0)})}),this.container.querySelectorAll(".feed-animal-btn").forEach(c=>{c.addEventListener("click",()=>{let h=parseInt(c.dataset.idx,10),d=this.game.feedAnimal(t,h);d.ok?(Nt.animal(t),this.showToast(`${s.name} beslendi!`,r.icon),this.openPenModal(t),this.updateHUD()):this.showToast(d.err||"Yemlenemedi","\u26A0\uFE0F",!0)})})}openShopModal(){let t=this.game.state,e=`
      <div class="modal-header">
        <h2>\u{1F3EA} Ezgi'nin Yol Kenar\u0131 D\xFCkkan\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <p class="shop-desc">\xC7iftlikte \xFCretti\u011Fin \xFCr\xFCnleri tezgaha koy, kom\u015Fular sat\u0131n als\u0131n!</p>
        <div class="shop-slots-grid">
    `;for(let n=0;n<t.shop.slots.length;n++){let s=ql(t,n,Date.now());s.state==="empty"?e+=`
          <div class="shop-slot empty-slot" data-slot="${n}">
            <span class="slot-add-icon">\u2795</span>
            <span class="slot-label">\xDCr\xFCn Koy</span>
          </div>
        `:s.state==="sold"?e+=`
          <div class="shop-slot sold-slot" data-slot="${n}">
            <span class="sold-badge">SATILDI! \u{1F389}</span>
            <span class="sold-item">${Jt[s.k].icon} x${s.q}</span>
            <span class="sold-buyer">${s.buyer} sat\u0131n ald\u0131</span>
            <button class="collect-shop-btn primary-btn" data-slot="${n}">\u{1FA99} ${s.price} Al</button>
          </div>
        `:e+=`
          <div class="shop-slot listed-slot">
            <span class="slot-item">${Jt[s.k].icon} ${Jt[s.k].name} (x${s.q})</span>
            <span class="slot-price">Fiyat: \u{1FA99} ${s.price}</span>
            <span class="slot-time">M\xFC\u015Fteri bekleniyor (${mi(s.remaining)})</span>
          </div>
        `}e+=`
        </div>
      </div>
    `,this.showModal(e),this.container.querySelectorAll(".collect-shop-btn").forEach(n=>{n.addEventListener("click",()=>{let s=parseInt(n.dataset.slot,10),r=this.game.collectShop(s);r.ok&&(Nt.coin(),this.showToast(`\u{1FA99} +${r.coins} alt\u0131n al\u0131nd\u0131! (${r.buyer})`,"\u{1F3EA}"),this.openShopModal(),this.updateHUD())})}),this.container.querySelectorAll(".empty-slot").forEach(n=>{n.addEventListener("click",()=>{let s=parseInt(n.dataset.slot,10);this.openPutInShopPicker(s)})})}openPutInShopPicker(t){let e=this.game.state,n=`
      <div class="modal-header">
        <h2>Sat\u0131\u015Fa \xDCr\xFCn Se\xE7 (Tezgah #${t+1})</h2>
        <button class="modal-close" onclick="window.ui.openShopModal()">\u2190 Geri</button>
      </div>
      <div class="modal-body">
        <div class="picker-grid">
    `,s=!1;for(let r in e.items)if(e.items[r]>0){s=!0;let o=Jt[r];n+=`
          <button class="picker-item-btn" data-key="${r}">
            <span class="picker-icon">${o.icon}</span>
            <span class="picker-name">${o.name}</span>
            <span class="picker-count">x${e.items[r]}</span>
          </button>
        `}s||(n+='<div class="empty-msg">Ambarda sat\u0131lacak \xFCr\xFCn yok!</div>'),n+=`
        </div>
      </div>
    `,this.showModal(n),this.container.querySelectorAll(".picker-item-btn").forEach(r=>{r.addEventListener("click",()=>{let o=r.dataset.key,a=Math.min(3,e.items[o]),l=Math.round(Jt[o].value*a*1.3);this.game.listInShop(t,o,a,l).ok&&(Nt.plant(),this.showToast(`${Jt[o].name} tezgaha koyuldu!`,"\u{1F3EA}"),this.openShopModal(),this.updateHUD())})})}openFishingModal(){this.showModal(`
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
    `);let t=document.getElementById("btn-cast-rod"),e=document.getElementById("fish-prompt"),n=document.getElementById("fish-bobber"),s="ready",r=null;t?.addEventListener("click",()=>{if(s==="ready"){s="waiting",Nt.splash(),t.textContent="Bekle...",t.className="disabled-btn",e.textContent="Bal\u0131k yemi inceliyor... Sakin ol...",n.classList.add("floating");let o=1500+Math.random()*2e3;r=setTimeout(()=>{s="bite",n.classList.add("bobbing-active"),e.textContent="\u015E\u0130MD\u0130 \xC7EK! \u{1F41F}\u{1F4A8}",t.textContent="\xC7EK! \u{1F3A3}",t.className="primary-btn pulse",Nt.click()},o)}else if(s==="bite"){clearTimeout(r);let o=this.game.catchFish(.85);o.ok&&o.item&&(Nt.harvest(),this.showToast(`${Jt[o.item].icon} ${Jt[o.item].name} yakalad\u0131n! \u2B50 +${o.xp} XP`,"\u{1F3A3}"),this.closeModal(),this.updateHUD())}else s==="waiting"&&(clearTimeout(r),this.showToast("Erken \xE7ektin, bal\u0131k ka\xE7t\u0131!","\u{1F30A}",!0),this.closeModal())})}openStorageModal(){let t=this.game.state,n=`
      <div class="modal-header">
        <h2>\u{1F33E} \xC7iftlik Ambar\u0131 (${ir(t)}/${t.cap})</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="storage-upgrade-bar">
          <span>Kapasiteyi Art\u0131r (+25 Kapasite)</span>
          <button id="btn-upgrade-storage" class="secondary-btn">Y\xFCkselt (\u{1FA99} 80)</button>
        </div>

        <div class="storage-items-grid">
    `,s=!1;for(let r in t.items)if(t.items[r]>0){s=!0;let o=Jt[r];n+=`
          <div class="storage-card">
            <span class="storage-card-icon">${o.icon}</span>
            <span class="storage-card-name">${o.name}</span>
            <span class="storage-card-qty">x${t.items[r]}</span>
          </div>
        `}s||(n+='<div class="empty-msg">Ambar \u015Fu anda bo\u015F! Ekin hasat ederek doldurabilirsin.</div>'),n+=`
        </div>
      </div>
    `,this.showModal(n),document.getElementById("btn-upgrade-storage")?.addEventListener("click",()=>{let r=this.game.upgradeStorage();r.ok?(Nt.fanfare(),this.showToast(`Ambar kapasitesi ${this.game.state.cap}'e y\xFCkseltildi!`,"\u{1F33E}"),this.openStorageModal(),this.updateHUD()):this.showToast(r.err||"Y\xFCkseltilemedi","\u26A0\uFE0F",!0)})}openDecorModal(){let t=this.game.state,e=`
      <div class="modal-header">
        <h2>\u{1F338} \xC7iftlik Dekorasyonlar\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <div class="decor-grid">
    `;au.forEach(n=>{let s=fi[n],r=t.level>=s.level,o=t.coins>=s.price;e+=`
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
    `,this.showModal(e),this.container.querySelectorAll(".buy-decor-btn").forEach(n=>{n.addEventListener("click",()=>{let s=n.dataset.type,r=this.game.buyDecor(s);r.ok?(Nt.plant(),this.showToast(`${fi[s].name} \xE7iftli\u011Fe yerle\u015Ftirildi!`,fi[s].icon),this.closeModal(),this.updateHUD()):this.showToast(r.err||"Yerle\u015Ftirilemedi","\u26A0\uFE0F",!0)})})}openCharacterCustomizer(){let t=this.game.state.look;this.showModal(`
      <div class="modal-header">
        <h2>\u{1F469}\u200D\u{1F33E} Ezgi'nin G\xF6r\xFCn\xFC\u015F\xFC</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body">
        <p class="customizer-desc">Ezgi'nin \xE7iftlik tarz\u0131n\u0131 ve Gofrik ile uyumlu renklerini se\xE7:</p>

        <div class="custom-row">
          <label>Sa\xE7 Modeli:</label>
          <div class="opts-row">
            ${sa.hairStyle.map(e=>`
              <button class="opt-chip ${t.hairStyle===e?"active":""}" data-type="hairStyle" data-val="${e}">
                ${ou[e]||e}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="custom-row">
          <label>\u015Eapka Kurdelesi (Gofrik'in Papyonu ile Tak\u0131m):</label>
          <div class="opts-colors">
            ${sa.hatBand.map(e=>`
              <button class="color-dot ${t.hatBand===e?"active":""}" style="background: ${e}" data-type="hatBand" data-val="${e}"></button>
            `).join("")}
          </div>
        </div>

        <div class="custom-row">
          <label>Sa\xE7 Rengi:</label>
          <div class="opts-colors">
            ${sa.hair.map(e=>`
              <button class="color-dot ${t.hair===e?"active":""}" style="background: ${e}" data-type="hair" data-val="${e}"></button>
            `).join("")}
          </div>
        </div>

        <div class="modal-actions">
          <button class="primary-btn" onclick="window.ui.closeModal()">Kaydet ve Kapat \u2728</button>
        </div>
      </div>
    `),this.container.querySelectorAll(".opt-chip, .color-dot").forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.type,s=e.dataset.val;this.game.updateLook(n,s),Nt.click(),this.openCharacterCustomizer()})})}openSettingsModal(){this.showModal(`
      <div class="modal-header">
        <h2>\u2699\uFE0F \xC7iftlik Ayarlar\u0131</h2>
        <button class="modal-close" onclick="window.ui.closeModal()">\u2715</button>
      </div>
      <div class="modal-body settings-body">
        <div class="settings-row">
          <span>\u{1F3B5} Fon M\xFCzi\u011Fi:</span>
          <button id="btn-toggle-music" class="secondary-btn">${Nt.musicEnabled?"A\xE7\u0131k \u{1F50A}":"Kapal\u0131 \u{1F507}"}</button>
        </div>

        <div class="settings-row">
          <span>\u{1F50A} Ses Efektleri:</span>
          <button id="btn-toggle-sfx" class="secondary-btn">${Nt.enabled?"A\xE7\u0131k \u{1F514}":"Kapal\u0131 \u{1F515}"}</button>
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
    `),document.getElementById("btn-toggle-music")?.addEventListener("click",()=>{let t=Nt.toggleMusic();document.getElementById("btn-toggle-music").textContent=t?"A\xE7\u0131k \u{1F50A}":"Kapal\u0131 \u{1F507}"}),document.getElementById("btn-toggle-sfx")?.addEventListener("click",()=>{let t=Nt.toggleSfx();document.getElementById("btn-toggle-sfx").textContent=t?"A\xE7\u0131k \u{1F514}":"Kapal\u0131 \u{1F515}"}),document.getElementById("btn-toggle-daynight")?.addEventListener("click",()=>{this.game.toggleDayNight()})}openVisitorModal(t){if(!t)return;let e=this.game.state,n=Jt[t.item]||{name:t.item,icon:"\u{1F33E}"},s=pi(e,t.item),r=s>=t.qty;this.showModal(`
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
    `),document.getElementById("btn-visitor-sell")?.addEventListener("click",()=>{if(!r)return;us(e,{[t.item]:t.qty}),e.coins+=t.coins;let o=En(e,t.xp);Nt.coin(),Nt.fanfare(),this.showToast(`${t.name} te\u015Fekk\xFCr etti! (+${t.coins} \u{1FA99}, +${t.xp} \u2B50)`,"\u{1F496}"),this.closeModal(),this.updateHUD(),o.length&&this.showToast(`Tebrikler! Seviye ${o[o.length-1].level} oldun!`,"\u{1F389}"),this.game.saveState(),this.game.onVisitorCompleted()}),document.getElementById("btn-visitor-decline")?.addEventListener("click",()=>{this.closeModal(),this.game.onVisitorDeclined()})}openGofrikModal(){this.showModal(`
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
    `),document.getElementById("btn-gofrik-fetch")?.addEventListener("click",()=>{this.closeModal(),this.game.playFetchWithGofrik()}),document.getElementById("btn-gofrik-treat")?.addEventListener("click",()=>{this.closeModal(),this.game.feedGofrikTreat()}),document.getElementById("btn-gofrik-pet")?.addEventListener("click",()=>{this.closeModal(),this.game.interactWithGofrik()})}showModal(t){let e=document.getElementById("modal-dialog"),n=document.getElementById("modal-backdrop");!e||!n||(e.innerHTML=t,n.classList.remove("hidden"),this.activeModal=e)}closeModal(){let t=document.getElementById("modal-backdrop");t&&t.classList.add("hidden"),this.activeModal=null}};var tc=class{constructor(){this.canvas=document.getElementById("game-canvas"),this.state=this.loadState(),this.ui=new fa(this),window.ui=this.ui,this.scene=null,this.camera=null,this.renderer=null,this.dirLight=null,this.hemiLight=null,this.ezgi=null,this.gofrik=null,this.truck=null,this.feedmill=null,this.bakery=null,this.dogHouse=null,this.visitor=null,this.visitorData=null,this.visitorTimer=22,this.plotMeshes=[],this.cropMeshes=[],this.penGroups={},this.harvestBadges=[],this.interactables=[],this.animalMeshes=[],this.smokeParticles=[],this.smokeTimer=0,this.lakeFish=null,this.fishTimer=4,this.waterRipples=[],this.fireflies=[],this.flyingItems=[],this.clouds=[],this.butterflies=[],this.activeSeedTool=null,this.isHarvestSwiping=!1,this.isPlantSwiping=!1,this.harvestedPlotsThisDrag=new Set,this.plantedPlotsThisDrag=new Set,this.fetchBall=null,this.fetchState=null,this.isNight=!1,this.lastTime=performance.now(),this.lastPlotCheck=0,this.camTarget=new O(-3.5,0,-2.5),this.camAngle=Math.PI/4,this.targetCamAngle=Math.PI/4,this.camPitch=.82,this.camDistance=window.innerWidth/window.innerHeight<.72?28.5:25,this.zoomLevel=1,this.isDragging=!1,this.isRotating=!1,this.dragStart={x:0,y:0},this.lastTouchDist=0,this.lastTouchAngle=0,this.initThree(),this.buildWorld(),this.bindInput(),this.startLoop(),setInterval(()=>this.saveState(),3e3),setInterval(()=>{rr(this.state,Date.now()),this.ui.activeModal?.querySelector(".truck-status-bar")&&this.ui.openOrderBoardModal()},1e3),this.checkOfflineProgress()}initThree(){this.scene=new Ts,this.scene.background=new Bt("#a8dff2");let t=window.innerWidth/window.innerHeight;this.camera=new qe(40,t,.1,120),this.updateCameraTransform(),this.renderer=new ta({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});let e=Math.min(1.75,window.devicePixelRatio||1);this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lo,this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.15,this.hemiLight=new Os("#ffffff","#557733",.9),this.scene.add(this.hemiLight),this.dirLight=new zs("#fff5da",1.35),this.dirLight.position.set(25,40,20),this.dirLight.castShadow=!0,this.dirLight.shadow.bias=-4e-4,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=80;let n=26;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.scene.add(this.dirLight),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}updateCameraTransform(){let t=this.camDistance*this.zoomLevel,e=Math.cos(this.camPitch),n=Math.sin(this.camPitch),s=this.camTarget.x+t*e*Math.sin(this.camAngle),r=this.camTarget.y+t*n,o=this.camTarget.z+t*e*Math.cos(this.camAngle);this.camera.position.set(s,r,o),this.camera.lookAt(this.camTarget)}rotateCamera(t){this.targetCamAngle+=t}centerCamera(){this.camTarget.set(-3.5,0,-2.5),this.targetCamAngle=Math.PI/4,this.zoomLevel=1}buildWorld(){let t=new oi(Ke.half*2+10,Ke.half*2+10);t.rotateX(-Math.PI/2);let e=document.createElement("canvas");e.width=512,e.height=512;let n=e.getContext("2d");n.fillStyle="#a2cd70",n.fillRect(0,0,512,512);let s=24517;for(let E=0;E<5200;E++){s=s*1664525+1013904223>>>0;let g=s%512;s=s*1664525+1013904223>>>0;let S=s%512;n.fillStyle=s&1?"rgba(255,255,220,.16)":"rgba(54,112,43,.12)",n.fillRect(g,S,2,3)}let r=new Ps(e);r.colorSpace=Xe,r.wrapS=r.wrapT=Wi,r.repeat.set(8,8);let o=new hn({map:r,color:"#ffffff",roughness:.96}),a=new F(t,o);a.receiveShadow=!0,this.scene.add(a);let l=new oi(Ft.road.w,Ke.half*2+8);l.rotateX(-Math.PI/2);let c=new hn({color:new Bt("#d4a36a"),roughness:.95}),h=new F(l,c);h.position.set(Ft.road.x,.02,0),h.receiveShadow=!0,this.scene.add(h),this.scene.add(ud());let d=Ql(5.5);d.position.set(-8.8,0,-6.5),d.rotation.y=Math.PI/2,this.scene.add(d);let u=Ql(5.5);u.position.set(-8.8,0,1.2),u.rotation.y=Math.PI/2,this.scene.add(u),[[-6.5,-.6,"daisy"],[-2.4,-.8,"poppy"],[1.5,3.8,"daisy"],[5.5,-2.5,"poppy"],[-7.2,3.5,"daisy"],[-.5,-5.2,"daisy"]].forEach(([E,g,S])=>{let P=dd(S);P.position.set(E,0,g),this.scene.add(P)});let _=Vu();_.position.set(Ft.house.x,0,Ft.house.z),this.scene.add(_);let M=Hu();M.position.set(Ft.house.x+3.2,0,Ft.house.z+1.2),this.scene.add(M),this.registerInteractable(M,()=>{this.ui.openBirthdayModal()}),this.feedmill=Wu(),this.feedmill.position.set(Ft.feedmill.x,0,Ft.feedmill.z),this.scene.add(this.feedmill),this.registerInteractable(this.feedmill,()=>this.ui.openBuildingModal("feedmill")),this.bakery=Xu(),this.bakery.position.set(Ft.bakery.x,0,Ft.bakery.z),this.scene.add(this.bakery),this.registerInteractable(this.bakery,()=>this.ui.openBuildingModal("bakery"));let m=qu();m.position.set(Ft.dairy.x,0,Ft.dairy.z),this.scene.add(m),this.registerInteractable(m,()=>this.ui.openBuildingModal("dairy"));let p=$u();p.position.set(Ft.candy.x,0,Ft.candy.z),this.scene.add(p),this.registerInteractable(p,()=>this.ui.openBuildingModal("candy"));let y=Yu();y.position.set(Ft.storage.x,0,Ft.storage.z),this.scene.add(y),this.registerInteractable(y,()=>this.ui.openStorageModal());let w=Zu();w.position.set(Ft.board.x,0,Ft.board.z),this.scene.add(w),this.registerInteractable(w,()=>this.ui.openOrderBoardModal()),this.truck=Ju(),this.truck.position.set(Ft.truck.x,0,Ft.truck.z),this.scene.add(this.truck),this.registerInteractable(this.truck,()=>this.ui.openOrderBoardModal());let b=nd();b.position.set(Ft.shop.x,0,Ft.shop.z),this.scene.add(b),this.registerInteractable(b,()=>this.ui.openShopModal());let A=Ku();A.position.set(Ft.lake.x,0,Ft.lake.z),this.scene.add(A),this.registerInteractable(A,()=>this.ui.openFishingModal()),Object.keys(Ft.pens).forEach(E=>{let g=Ft.pens[E],S=new Dt;S.position.set(g.x,0,g.z),S.visible=!!this.state.pens[E]?.owned,this.penGroups[E]=S;let P=new Rt(g.w,1.2,g.d),R=new F(P,new xn({visible:!1}));R.position.y=.6,S.add(R);let L=ed(E);S.add(L),this.animalMeshes.push(L),this.scene.add(S),this.registerInteractable(S,()=>this.ui.openPenModal(E))}),this.rebuildPlots(),this.buildNature(),this.spawnCharacters(),this.dogHouse=sd(),this.dogHouse.position.set(Ft.house.x-3.8,0,Ft.house.z+.8),this.scene.add(this.dogHouse),this.registerInteractable(this.dogHouse,()=>this.ui.openGofrikModal()),this.initPolishVisuals()}initPolishVisuals(){this.lakeFish=ad(),this.lakeFish.visible=!1,this.scene.add(this.lakeFish);let t=new Zt(.07,6,6),e=new xn({color:13041408});for(let r=0;r<18;r++){let o=new F(t,e);o.position.set((Math.random()-.5)*36,.8+Math.random()*2.2,(Math.random()-.5)*36),o.visible=this.isNight,o.userData={baseX:o.position.x,baseY:o.position.y,baseZ:o.position.z,phase:Math.random()*Math.PI*2,speed:.9+Math.random()*1.1},this.scene.add(o),this.fireflies.push(o)}[{x:-26,y:19,z:-16,s:1.15,spd:.75},{x:-9,y:22,z:9,s:.95,spd:.6},{x:14,y:20,z:-10,s:1.3,spd:.8},{x:29,y:23,z:12,s:.85,spd:.9}].forEach(r=>{let o=hd();o.position.set(r.x,r.y,r.z),o.scale.setScalar(r.s),o.userData={speed:r.spd},this.scene.add(o),this.clouds.push(o)}),[{x:-2,y:.2,z:1.5,color:"#ffeaa7"},{x:2.2,y:.2,z:2.8,color:"#74b9ff"},{x:-5.5,y:.2,z:-1.2,color:"#fd79a8"},{x:-.5,y:.2,z:-4.5,color:"#a29bfe"}].forEach(r=>{let o=fd(r.color);o.position.set(r.x,r.y,r.z),o.userData.basePos.set(r.x,r.y,r.z),this.scene.add(o),this.butterflies.push(o)})}buildNature(){[[-16,-16],[-12,-18],[-6,-18],[0,-18],[6,-18],[12,-18],[18,-14],[18,-8],[18,-2],[18,4],[18,10],[-16,12],[-16,16],[-12,18],[-6,18],[0,18]].forEach(([e,n],s)=>{let r=s%3===0?"pine":"apple",o=id(r);o.position.set(e,0,n),o.rotation.y=s*.7,this.scene.add(o)}),this.state.decor.forEach(e=>{let n=Jl(e.type);n.position.set(e.x,0,e.z),n.rotation.y=e.rot*(Math.PI/2),this.scene.add(n)})}rebuildPlots(){let t=new Set([...this.plotMeshes,...this.cropMeshes.map(n=>n.mesh),...this.harvestBadges]);t.forEach(n=>this.scene.remove(n)),this.interactables=this.interactables.filter(n=>!t.has(n)),this.plotMeshes=[],this.cropMeshes=[],this.harvestBadges=[];let e=Date.now();this.state.plots.forEach((n,s)=>{let r=er(s),o=Qu();if(o.position.set(r.x,0,r.z),o.userData.plotIndex=s,this.scene.add(o),this.plotMeshes.push(o),this.registerInteractable(o,()=>this.onPlotClick(s)),n.crop){let a=Un(this.state,s,e),l=td(n.crop,a.progress);if(l.position.set(r.x,.12,r.z),l.userData.plotIndex=s,this.scene.add(l),this.cropMeshes.push({idx:s,mesh:l,crop:n.crop}),this.registerInteractable(l,()=>this.onPlotClick(s)),a.state==="ready"){let c=ju();c.position.set(r.x,1.6,r.z),c.userData.plotIndex=s,this.scene.add(c),this.harvestBadges.push(c),this.registerInteractable(c,()=>this.onPlotClick(s))}}})}spawnCharacters(){this.ezgi=Zl(this.state.look),this.ezgi.position.set(-6,0,-2),this.scene.add(this.ezgi),this.gofrik=Gu(),this.gofrik.position.set(-4.5,0,-1.8),this.scene.add(this.gofrik),this.registerInteractable(this.gofrik,()=>this.ui.openGofrikModal())}bindInput(){let t=this.canvas,e=new Gs,n=new Wt,s=h=>{let d=h.touches?h.touches[0]:h;return{x:d.clientX,y:d.clientY}},r=(h,d)=>Math.atan2(d.clientY-h.clientY,d.clientX-h.clientX),o=h=>{n.x=h.x/window.innerWidth*2-1,n.y=-(h.y/window.innerHeight)*2+1,e.setFromCamera(n,this.camera);let d=[...this.plotMeshes,...this.cropMeshes.map(f=>f.mesh),...this.harvestBadges],u=e.intersectObjects(d,!0);if(u.length>0){let f=u[0].object;for(;f&&f.userData.plotIndex===void 0&&f.parent;)f=f.parent;if(f&&f.userData.plotIndex!==void 0)return f.userData.plotIndex}return null},a=h=>{if(Nt.unlock(),h.touches&&h.touches.length===2){let f=h.touches[0],_=h.touches[1];this.lastTouchDist=Math.hypot(f.clientX-_.clientX,f.clientY-_.clientY),this.lastTouchAngle=r(f,_),this.isDragging=!1,this.isRotating=!0,this.isHarvestSwiping=!1,this.isPlantSwiping=!1,h.cancelable&&h.preventDefault();return}if(h.button===2){this.isRotating=!0,this.isDragging=!1;let f=s(h);this.dragStart=f;return}let d=s(h),u=o(d);if(u!==null){let f=this.state,_=f.plots[u],M=Date.now();if(Un(f,u,M).state==="ready"){this.isHarvestSwiping=!0,this.isDragging=!1,this.harvestedPlotsThisDrag.clear(),this.harvestedPlotsThisDrag.add(u),this.harvestPlot(u),h.cancelable&&h.preventDefault();return}else if(this.activeSeedTool&&!_.crop){this.isPlantSwiping=!0,this.isDragging=!1,this.plantedPlotsThisDrag.clear(),this.plantedPlotsThisDrag.add(u),this.plantCrop(u,this.activeSeedTool),h.cancelable&&h.preventDefault();return}}this.isDragging=!0,this.isRotating=!1,this.dragStart=d,this.pointerDownPos={...d}},l=h=>{if(h.touches&&h.touches.length===2){let w=h.touches[0],b=h.touches[1],A=Math.hypot(w.clientX-b.clientX,w.clientY-b.clientY),E=r(w,b);if(this.lastTouchDist>0){let S=A/this.lastTouchDist;this.adjustZoom(S>1?-.035:.035)}let g=E-this.lastTouchAngle;Math.abs(g)<1&&(this.targetCamAngle+=g*1.5),this.lastTouchDist=A,this.lastTouchAngle=E,h.cancelable&&h.preventDefault();return}if(this.isRotating){let w=s(h),b=w.x-this.dragStart.x;this.targetCamAngle+=b*.01,this.dragStart=w,h.cancelable&&h.preventDefault();return}let d=s(h);if(this.isHarvestSwiping){let w=o(d);w!==null&&!this.harvestedPlotsThisDrag.has(w)&&Un(this.state,w,Date.now()).state==="ready"&&(this.harvestedPlotsThisDrag.add(w),this.harvestPlot(w)),h.cancelable&&h.preventDefault();return}if(this.isPlantSwiping&&this.activeSeedTool){let w=o(d);w!==null&&!this.plantedPlotsThisDrag.has(w)&&(this.state.plots[w].crop||(this.plantedPlotsThisDrag.add(w),this.plantCrop(w,this.activeSeedTool))),h.cancelable&&h.preventDefault();return}if(!this.isDragging)return;let u=d.x-this.dragStart.x,f=d.y-this.dragStart.y,_=Math.cos(this.camAngle),M=-Math.sin(this.camAngle),m=-Math.sin(this.camAngle),p=-Math.cos(this.camAngle),y=.035*this.zoomLevel;this.camTarget.x+=(-u*_+f*m)*y,this.camTarget.z+=(-u*M+f*p)*y,this.camTarget.x=Math.max(-Ke.half+2,Math.min(Ke.half-2,this.camTarget.x)),this.camTarget.z=Math.max(-Ke.half+2,Math.min(Ke.half-2,this.camTarget.z)),this.dragStart=d,h.cancelable&&h.preventDefault()},c=h=>{if(this.isHarvestSwiping=!1,this.isPlantSwiping=!1,this.harvestedPlotsThisDrag.clear(),this.plantedPlotsThisDrag.clear(),this.isDragging&&this.pointerDownPos){let d=s(h.changedTouches?h.changedTouches[0]:h);if(Math.hypot(d.x-this.pointerDownPos.x,d.y-this.pointerDownPos.y)<10){n.x=d.x/window.innerWidth*2-1,n.y=-(d.y/window.innerHeight)*2+1,e.setFromCamera(n,this.camera);let f=e.intersectObjects(this.interactables,!0);if(f.length>0){let _=f[0].object;for(;_&&!_.userData.onClick&&_.parent;)_=_.parent;_&&_.userData.onClick&&_.userData.onClick()}else{let _=e.intersectObjects([this.scene.children[0]]);if(_.length>0){let M=_[0].point;this.moveEzgiTo(M.x,M.z)}}}}this.isDragging=!1,this.isRotating=!1,this.lastTouchDist=0};t.addEventListener("mousedown",a),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("touchstart",a,{passive:!1}),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c),t.addEventListener("wheel",h=>{this.adjustZoom(h.deltaY>0?.08:-.08)},{passive:!0})}adjustZoom(t){this.zoomLevel=Math.max(.55,Math.min(1.85,this.zoomLevel+t))}registerInteractable(t,e){t.userData.onClick=e,this.interactables.includes(t)||this.interactables.push(t)}startLoop(){let t=e=>{requestAnimationFrame(t);let n=Math.min(.1,(e-this.lastTime)/1e3);if(this.lastTime=e,this.camAngle=Jo.lerp(this.camAngle,this.targetCamAngle,.14),this.updateCameraTransform(),e-this.lastPlotCheck>500&&(this.lastPlotCheck=e,this.checkCropsGrowth()),this.harvestBadges.forEach(s=>s.userData.update?.(n)),this.ezgiTarget){let s=this.ezgiTarget.x-this.ezgi.position.x,r=this.ezgiTarget.z-this.ezgi.position.z,o=Math.hypot(s,r);if(o>.15){let a=4.2*n;this.ezgi.position.x+=s/o*a,this.ezgi.position.z+=r/o*a,this.ezgi.rotation.y=Math.atan2(s,r),this.ezgi.userData.isWalking=!0}else this.ezgiTarget=null,this.ezgi.userData.isWalking=!1}if(this.ezgi?.userData.update?.(n),this.ezgi&&this.gofrik&&!this.fetchState){let s=this.ezgi.position.x-Math.sin(this.ezgi.rotation.y)*1.2,r=this.ezgi.position.z-Math.cos(this.ezgi.rotation.y)*1.2,o=Math.hypot(s-this.gofrik.position.x,r-this.gofrik.position.z);if(o>.4){let a=4*n;this.gofrik.position.x+=(s-this.gofrik.position.x)/o*a,this.gofrik.position.z+=(r-this.gofrik.position.z)/o*a,this.gofrik.rotation.y=Math.atan2(s-this.gofrik.position.x,r-this.gofrik.position.z),this.gofrik.userData.isMoving=!0}else this.gofrik.userData.isMoving=!1}this.gofrik?.userData.update?.(n),this.feedmill?.userData.update?.(n),this.bakery?.userData.update?.(n),this.animalMeshes.forEach(s=>s.userData.update?.(n)),this.cropMeshes.forEach(s=>s.mesh.userData.update?.(n)),this.clouds.forEach(s=>{s.position.x+=s.userData.speed*n,s.position.x>38&&(s.position.x=-38)}),this.butterflies.forEach(s=>s.userData.update?.(n)),this.updateSmoke(n),this.updateLakeFish(n),this.updateFireflies(n),this.updateFlyingItems(n),this.updateTownVisitor(n),this.updateDeliveryTruck(),this.updateFetchGame(n),this.renderer.render(this.scene,this.camera)};requestAnimationFrame(t)}updateDeliveryTruck(){if(!this.truck)return;let t=Date.now(),e=this.state.truck.backAt-ua;if(!(this.state.truck.backAt>t)){this.truck.visible=!0,this.truck.position.set(Ft.truck.x,0,Ft.truck.z);return}this.truck.visible=!0;let s=Jo.clamp((t-e)/ua,0,1),r=s<.5?s*2:(1-s)*2,o=r*r*(3-2*r);this.truck.position.set(Ft.truck.x,0,Ft.truck.z+o*15)}checkCropsGrowth(){let t=Date.now(),e=!1;this.state.plots.forEach((n,s)=>{n.crop&&Un(this.state,s,t).state==="ready"&&(this.harvestBadges.some(a=>a.userData.plotIndex===s)||(e=!0))}),e&&this.rebuildPlots()}onPlotClick(t){let e=this.state,n=e.plots[t],s=Date.now(),r=er(t);if(this.moveEzgiTo(r.x+.8,r.z+.8),n.crop)Un(e,t,s).state==="ready"?this.harvestPlot(t):(Nt.click(),this.ui.showCropProgressModal(t));else{if(this.activeSeedTool){this.plantCrop(t,this.activeSeedTool);return}Nt.click(),this.ui.showSeedWheel(t,r)}}harvestPlot(t){let e=this.state,n=e.plots[t];if(!n||!n.crop)return;let s=Eu(e,t,Date.now());if(s.ok){Nt.harvest();let r=er(t),o=od(s.item);o.position.set(r.x,.4,r.z),this.scene.add(o),this.flyingItems.push({mesh:o,startX:r.x,startY:.4,startZ:r.z,peakY:2.5+Math.random()*.4,t:0,life:.9}),this.ui.showToast(`${Te[s.item].name||s.item} topland\u0131! (+${s.qty}) \u{1F33E}\u2728`,"\u{1F9FA}"),this.rebuildPlots(),this.ui.updateHUD(),this.ui.announceMissionRewards(s.missions)}else this.ui.showToast(s.err||"Ambar dolu olabilir!","\u26A0\uFE0F",!0)}plantCrop(t,e){let n=bu(this.state,t,e,Date.now());return n.ok&&(this.rebuildPlots(),this.ui.updateHUD()),n}deliverOrder(t){return Du(this.state,t,Date.now())}discardOrder(t){return Nu(this.state,t,Date.now())}queueRecipe(t,e){return Iu(this.state,t,e,Date.now())}collectBuilding(t){return Lu(this.state,t,Date.now())}buyAnimal(t){return Tu(this.state,t)}buyPen(t){let e=wu(this.state,t);return e.ok&&this.penGroups[t]&&(this.penGroups[t].visible=!0),e}buyBuilding(t){return Cu(this.state,t)}ensureOrders(t=Date.now()){return rr(this.state,t)}feedAnimal(t,e){return Au(this.state,t,e,Date.now())}collectAnimal(t,e){return Ru(this.state,t,e,Date.now())}listInShop(t,e,n,s){return Uu(this.state,t,e,n,s,Date.now())}collectShop(t){return Fu(this.state,t,Date.now())}catchFish(t){return Ou(this.state,t,Date.now())}upgradeStorage(){return vu(this.state)}buyDecor(t){let e=Bu(this.state,t,this.camTarget.x,this.camTarget.z);if(e.ok){let n=Jl(t);n.position.set(e.item.x,0,e.item.z),this.scene.add(n)}return e}claimBirthday(){return ku(this.state)}updateLook(t,e){this.state.look[t]=e;let n=this.ezgi.position.clone(),s=this.ezgi.rotation.y;this.scene.remove(this.ezgi),this.ezgi=Zl(this.state.look),this.ezgi.position.copy(n),this.ezgi.rotation.y=s,this.scene.add(this.ezgi),this.saveState()}toggleDayNight(){this.isNight=!this.isNight,this.fireflies.forEach(t=>{t.visible=this.isNight}),this.isNight?(this.scene.background=new Bt("#1a2639"),this.hemiLight.color.set("#3a4b68"),this.hemiLight.groundColor.set("#1a2412"),this.dirLight.color.set("#88a0cc"),this.dirLight.intensity=.55,this.ui.showToast("\u0130yi geceler Ezgi! \xC7iftlikte ate\u015F b\xF6cekleri par\u0131ld\u0131yor \u{1F319}\u2728","\u2B50")):(this.scene.background=new Bt("#a8dff2"),this.hemiLight.color.set("#ffffff"),this.hemiLight.groundColor.set("#446622"),this.dirLight.color.set("#fff5cc"),this.dirLight.intensity=1.25,this.ui.showToast("G\xFCnayd\u0131n! G\xFCne\u015F \xE7iftli\u011Fi \u0131s\u0131t\u0131yor \u2600\uFE0F\u{1F33E}","\u2600\uFE0F"))}moveEzgiTo(t,e,n=null){this.ezgiTarget={x:t,z:e,onArrived:n}}updateSmoke(t){if(this.smokeTimer+=t,this.smokeTimer>.45){this.smokeTimer=0;let e=Kl();e.position.set(Ft.house.x+1.2,4.4,Ft.house.z+.5),this.scene.add(e),this.smokeParticles.push({mesh:e,life:0,maxLife:2.2,vy:1.1+Math.random()*.4,driftX:(Math.random()-.5)*.3});let n=Kl();n.position.set(Ft.bakery.x+.9,1.8,Ft.bakery.z+1.5),this.scene.add(n),this.smokeParticles.push({mesh:n,life:0,maxLife:2,vy:1+Math.random()*.3,driftX:(Math.random()-.5)*.3})}for(let e=this.smokeParticles.length-1;e>=0;e--){let n=this.smokeParticles[e];n.life+=t;let s=n.life/n.maxLife;if(s>=1)this.scene.remove(n.mesh),this.smokeParticles.splice(e,1);else{n.mesh.position.y+=n.vy*t,n.mesh.position.x+=n.driftX*t;let r=1+s*2.2;n.mesh.scale.setScalar(r),n.mesh.material&&(n.mesh.material.opacity=(1-s)*.6)}}}updateLakeFish(t){if(this.lakeFish){if(this.fishJumpState){let e=this.fishJumpState;e.t+=t;let n=Math.min(1,e.t/e.duration);if(this.lakeFish.position.x=e.startX+(e.targetX-e.startX)*n,this.lakeFish.position.z=e.startZ+(e.targetZ-e.startZ)*n,this.lakeFish.position.y=Math.sin(n*Math.PI)*1.5,this.lakeFish.rotation.z=(n-.5)*1.8,n>=1){this.lakeFish.visible=!1,Nt.splash();let s=ld();s.position.set(this.lakeFish.position.x,.02,this.lakeFish.position.z),this.scene.add(s),this.waterRipples.push({mesh:s,t:0,life:1}),this.fishJumpState=null,this.fishTimer=4+Math.random()*4}}else if(this.fishTimer-=t,this.fishTimer<=0){let e=Ft.lake.x+(Math.random()-.5)*4.2,n=Ft.lake.z+(Math.random()-.5)*4.2;this.lakeFish.position.set(e,0,n),this.lakeFish.visible=!0,this.fishJumpState={startX:e,startZ:n,targetX:e+(Math.random()-.5)*1.5,targetZ:n+(Math.random()-.5)*1.5,t:0,duration:1}}for(let e=this.waterRipples.length-1;e>=0;e--){let n=this.waterRipples[e];n.t+=t;let s=n.t/n.life;if(s>=1)this.scene.remove(n.mesh),this.waterRipples.splice(e,1);else{let r=1+s*3.5;n.mesh.scale.set(r,r,1),n.mesh.material.opacity=(1-s)*.8}}}}updateFireflies(t){if(!this.isNight)return;let e=performance.now()*.001;this.fireflies.forEach(n=>{let s=n.userData;n.position.x=s.baseX+Math.sin(e*s.speed+s.phase)*1.2,n.position.y=s.baseY+Math.sin(e*s.speed*1.5+s.phase)*.6,n.position.z=s.baseZ+Math.cos(e*s.speed+s.phase)*1.2})}updateFlyingItems(t){for(let e=this.flyingItems.length-1;e>=0;e--){let n=this.flyingItems[e];n.t+=t;let s=Math.min(1,n.t/n.life);n.mesh.position.y=n.startY+Math.sin(s*Math.PI)*n.peakY,n.mesh.userData.update?.(t);let r=1-s*.3;n.mesh.scale.setScalar(r),s>=1&&(this.scene.remove(n.mesh),this.flyingItems.splice(e,1))}}updateTownVisitor(t){if(!this.visitor){this.visitorTimer-=t,this.visitorTimer<=0&&this.spawnTownVisitor();return}let e=this.visitor;if(e.userData.update?.(t),e.userData.isDeparting){let s=18-e.position.z;Math.abs(s)>.2?(e.position.z+=Math.sign(s)*t*2.8,e.rotation.y=s>0?0:Math.PI):(this.scene.remove(e),this.interactables=this.interactables.filter(r=>r!==e),this.visitor=null,this.visitorData=null,this.visitorTimer=60+Math.random()*30);return}if(e.userData.isArriving){let n=e.userData.waypoints[e.userData.currentWp];if(n){let s=n.x-e.position.x,r=n.z-e.position.z,o=Math.hypot(s,r);if(o>.2){let a=2.8*t;e.position.x+=s/o*a,e.position.z+=r/o*a,e.rotation.y=Math.atan2(s,r)}else e.userData.currentWp++,e.userData.currentWp>=e.userData.waypoints.length&&(e.userData.isArriving=!1,e.userData.isWalking=!1,e.rotation.y=Math.PI/2,Nt.visitorChime(),this.ui.showToast(`${this.visitorData.name} kap\u0131ya geldi! \u{1F3E1}\u{1F44B}`,"\u{1F4AC}"))}}}spawnTownVisitor(){let t=[{name:"Ay\u015Fe Teyze",avatar:"\u{1F475}",quote:"Ezgi k\u0131z\u0131m iyi ki vars\u0131n! Torunuma taze bu\u011Fday ekme\u011Fi yapaca\u011F\u0131m, bana 3 Bu\u011Fday verir misin?",item:"wheat",qty:3,coins:50,xp:20},{name:"Mehmet Amca",avatar:"\u{1F468}\u200D\u{1F33E}",quote:"Selam Ezgi! Bizim tavuklar i\xE7in 3 M\u0131s\u0131r laz\u0131m oldu, kom\u015Fuluk hatr\u0131na satar m\u0131s\u0131n?",item:"corn",qty:3,coins:80,xp:30},{name:"Bakkal Hasan",avatar:"\u{1F956}",quote:"Ezgi han\u0131m \xE7iftli\u011Fin bereketi kasabaya yay\u0131ld\u0131! D\xFCkkan i\xE7in 2 Havu\xE7 alabilir miyim?",item:"carrot",qty:2,coins:95,xp:35},{name:"\xC7i\xE7ek\xE7i Elif",avatar:"\u{1F338}",quote:"Ezgi abla do\u011Fum g\xFCn\xFCn \u015Fimdiden kutlu olsun! Kutlama i\xE7in 2 \xC7ilek rica edebilir miyim?",item:"strawberry",qty:2,coins:160,xp:55},{name:"De\u011Firmenci Dede",avatar:"\u{1F474}",quote:"Merhaba Ezgi k\u0131z\u0131m! F\u0131r\u0131na un yapmaya 4 Bu\u011Fday laz\u0131m, bana verebilir misin?",item:"wheat",qty:4,coins:70,xp:25}],e=t[Math.floor(Math.random()*t.length)];this.visitorData=e,this.visitor=rd(e.name),this.visitor.position.set(Ft.road.x,0,18),this.visitor.userData.isArriving=!0,this.visitor.userData.isDeparting=!1,this.visitor.userData.currentWp=0,this.visitor.userData.waypoints=[{x:Ft.road.x,z:Ft.house.z+2.5},{x:Ft.house.x+.6,z:Ft.house.z+2.5}],this.scene.add(this.visitor),this.registerInteractable(this.visitor,()=>this.ui.openVisitorModal(this.visitorData))}onVisitorCompleted(){this.visitor&&(this.visitor.userData.isDeparting=!0,this.visitor.userData.isWalking=!0)}onVisitorDeclined(){this.visitor&&(this.visitor.userData.isDeparting=!0,this.visitor.userData.isWalking=!0,this.ui.showToast(`${this.visitorData.name}: "Sa\u011Fl\u0131k olsun Ezgi k\u0131z\u0131m, sonra g\xF6r\xFC\u015F\xFCr\xFCz!"`,"\u{1F44B}"))}interactWithGofrik(){this.ui.openGofrikModal()}feedGofrikTreat(){if(Nt.gofrikBark(),this.gofrik){let t=0,e=()=>{t+=.12,this.gofrik.position.y=Math.sin(t*Math.PI)*.8,this.gofrik.rotation.y+=.6,t<1?requestAnimationFrame(e):this.gofrik.position.y=0};e()}En(this.state,25),this.ui.showToast("Gofrik \xF6d\xFCl mamas\u0131n\u0131 afiyetle yedi! (+25 XP)","\u{1F9B4}\u{1F496}"),this.ui.updateHUD()}playFetchWithGofrik(){if(this.fetchState||!this.gofrik)return;Nt.fetchPlay(),this.fetchBall=cd();let t=this.ezgi.position.x,e=this.ezgi.position.z,n=t+5.2,s=e+1.8;this.fetchBall.position.set(t,1.2,e),this.scene.add(this.fetchBall),this.fetchState={phase:"throwing",t:0,startX:t,startZ:e,targetX:n,targetZ:s}}updateFetchGame(t){if(!this.fetchState)return;let e=this.fetchState;if(e.t+=t,e.phase==="throwing"){let n=Math.min(1,e.t/.8);this.fetchBall.position.x=e.startX+(e.targetX-e.startX)*n,this.fetchBall.position.z=e.startZ+(e.targetZ-e.startZ)*n,this.fetchBall.position.y=Math.sin(n*Math.PI)*2.2,this.fetchBall.rotation.x+=t*10,n>=1&&(this.fetchBall.position.y=.15,e.phase="chasing",e.t=0)}else if(e.phase==="chasing"){let n=e.targetX-this.gofrik.position.x,s=e.targetZ-this.gofrik.position.z,r=Math.hypot(n,s);if(r>.3){let o=5.5*t;this.gofrik.position.x+=n/r*o,this.gofrik.position.z+=s/r*o,this.gofrik.rotation.y=Math.atan2(n,s),this.gofrik.userData.isMoving=!0}else this.fetchBall.visible=!1,Nt.gofrikBark(),e.phase="returning",e.t=0}else if(e.phase==="returning"){let n=this.ezgi.position.x+1,s=this.ezgi.position.z+.8,r=n-this.gofrik.position.x,o=s-this.gofrik.position.z,a=Math.hypot(r,o);if(a>.4){let l=5.2*t;this.gofrik.position.x+=r/a*l,this.gofrik.position.z+=o/a*l,this.gofrik.rotation.y=Math.atan2(r,o),this.gofrik.userData.isMoving=!0}else this.gofrik.userData.isMoving=!1,e.phase="digging",e.t=0}else if(e.phase==="digging"&&(this.gofrik.rotation.y+=Math.sin(e.t*20)*.1,this.gofrik.position.y=Math.abs(Math.sin(e.t*12))*.2,e.t>1.2)){this.gofrik.position.y=0;let n=Math.random();n<.4?(this.state.gems=(this.state.gems||0)+1,Nt.fanfare(),this.ui.showToast("Gofrik topra\u011F\u0131 kazd\u0131 ve 1 \u{1F48E} Parlayan Elmas buldu!","\u{1F48E}\u2728")):n<.8?(this.state.coins+=75,Nt.coin(),this.ui.showToast("Gofrik topra\u011F\u0131 kazd\u0131 ve g\xF6m\xFCl\xFC alt\u0131n buldu! (+75 \u{1FA99})","\u{1FA99}\u{1F389}")):cs(this.state,3)?(hs(this.state,"strawberry",3),Nt.fanfare(),this.ui.showToast("Gofrik sana 3x \xC7ilek buldu! \u{1F353}\u2728","\u{1F353}")):(this.state.coins+=75,Nt.coin(),this.ui.showToast("Ambar dolu! Gofrik 75 alt\u0131n buldu. \u{1FA99}","\u{1FA99}")),this.fetchBall&&(this.scene.remove(this.fetchBall),this.fetchBall=null),this.fetchState=null,this.ui.updateHUD()}}loadState(){try{let t=localStorage.getItem("ezgi_ciftlik_save");if(t){let e=JSON.parse(t),n=xu(e);return(Number(e.v)||0)<ha&&!localStorage.getItem("ezgi_ciftlik_save_backup_v1")&&localStorage.setItem("ezgi_ciftlik_save_backup_v1",t),n}}catch{}return Xl()}saveState(){try{this.state.savedAt=Date.now(),localStorage.setItem("ezgi_ciftlik_save",JSON.stringify(this.state))}catch{}}checkOfflineProgress(){let t=Date.now();if(t-(this.state.savedAt||t)>3e4){let n=zu(this.state,this.state.savedAt,t);(n.crops>0||n.animals>0||n.goods>0||n.sold>0)&&setTimeout(()=>{this.ui.showToast(`Tekrar ho\u015F geldin Ezgi! Sen yokken:
\u{1F33E} ${n.crops} ekin olgunla\u015Ft\u0131, \u{1F95B} ${n.animals} hayvan \xFCr\xFCn\xFC haz\u0131r!`,"\u{1F3E1}")},1200)}}};window.addEventListener("DOMContentLoaded",()=>{window.farmGame=new tc});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
