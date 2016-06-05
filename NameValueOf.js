const call=(function(e){const o=e.prototype;return o.call.bind(o.bind);})(Function);
const RawObject=call(Object.create,null,null);
//
const setProto=Object.setPrototypeOf;
const RawArray=function(){return setProto([],null);};
//
const KeysOf=Object.keys;
//--------------------------------------------------------------------------------
function NameValueOf(obj,k){
 const o=obj,m=KeysOf(o),l=m.length,r=RawArray(),dict=RawObject;
 let e,p,v,i=0;
 if(k!==false){m.sort();};
 while(i<l){;
	e={};
	p=m[i];
	v=o[p];
	e[p]={configurable:false,value:v};
	r[i]=dict(e);
	i++;
 };
 return r;
};
//
const result=NameValueOf({a:1,b:2});
console.log(result);
