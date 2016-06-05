const call=(function(e){const o=e.prototype;return o.call.bind(o.bind);})(Function);
const RawObject=call(Object.create,null,null);
//
const setProto=Object.setPrototypeOf;
const RawArray=function(){return setProto([],null);};
//
const KeysOf=Object.keys;
//--------------------------------------------------------------------------------
function NameValueOf(obj,handler,sorter){
 const o=obj, f=handler||function(a,b){let o={};o[a]={skip:false,configurable:false,value:b};return o;}, k=KeysOf(o), l=k.length, m=RawArray(), dict=RawObject;
 let e,p,v,i=0;
 if(sorter){k.sort();};
 while(i<l){;
	p=k[i];
	v=o[p];
	e=f(p,v);
	if(e.skip!==false){m[m.length]=dict(e);};
	i++;
 };
 return m;
};
//
const result=NameValueOf({a:1,b:2});
console.log(result);
