import Ember from 'ember';

export function relOperator([op,arg1,arg2]) {
	function checkVal(a){
		if(a || a === false){
           if(typeof(a) == 'string'){
           	a =  a.toString();
           	a = "'"+a+"'";
           }
	 	}else{
	 		a = new Date().getTime();
	 	}
	 	return a;
	}
	arg1 = checkVal(arg1);
	arg2 = checkVal(arg2);
	let str = arg1+op+arg2;
	let result = eval(str);
  return result;
}

export default Ember.Helper.helper(relOperator);
