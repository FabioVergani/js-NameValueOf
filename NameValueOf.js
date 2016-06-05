function toJSON(o,f=null,s='\t'){return JSONfy(o,f,s);}
//
const KeysOf=Object.keys;
const setProto=Object.setPrototypeOf;
const RawArray=function(n){return setProto(Array.apply(null,arguments),null);};
//
const call=(function(e){const o=e.prototype;return o.call.bind(o.bind);})(Function);
const log=(function(e){const o=e.console,f=call,x=f(o.log,o);['dirxml','dir','info','table','clear','group','groupEnd'].map(function(i){const m=o;x[i]=f(m[i],m);});return x;})(window);
//
const JSONfy=call(JSON.stringify,null);
const RawObject=call(Object.create,null,null);
//

//---------------------------------------------------------------------------------------------------------------------------------
function NameValueOf(obj,sorter,handler){
 const o=obj, f=handler||function(p,v){let o={};o[p]={value:v,use:true};return o;}, k=KeysOf(o), l=k.length, m=RawArray(), dict=RawObject;
 let e,p,v,i=0;
 if(sorter){k.sort();};
 while(i<l){;
	p=k[i];
	v=o[p];
	e=f(p,v);
	if(e[p].use){m[m.length]=Object.seal(dict(e));};
	i++;
 };
 return m;
};
//---------------------------------------------------------------------------------------------------------------------------------
//Test:
let data,result;


log.group('#1');
log(toJSON(data={b:1,a:2,a3:[{nest:3}],c:44,z:{nest:[{nest:{nest:666}}]}}));
log.info('unsort:%O',result=NameValueOf(data));
log.info('sorted:%O',result=NameValueOf(data,true));
log.info('filer:%O',result=NameValueOf(data));




log.groupEnd();
//
log.group('#2');
log(toJSON(data=['word', 'Word', '1 Word', '2 Words']));

log.groupEnd();
//
log.group('#3');
log(toJSON(data=[1,21,2,3,-1,-20]));
log.groupEnd();






