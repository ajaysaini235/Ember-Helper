# Ember-Helper
This Ember Helper help to compute the value of statement In which has any one operator apply on any two arguments or operand .

step 1 : git clone https://github.com/ajaysaini235/Ember-Helper.git

step 2 : After clone Ember-Helper copy op.js file and add this file into your Ember Project  > helpers folder

step 3 : Add in your .hbs file following code   {{op "operator" operand1 operand2}}" 

Examples :  


1 :  class="col-sm-6 {{if (op "===" 5 6) 'enabled' 'disabled'}}" 

2 :  class="col-sm-6 {{if (op "==" "aa" "bb") 'enabled' 'disabled'}}" ></div

3 :  class="col-sm-6 {{if (op "||" (op "<" 2 4) (op "==" 4 4)) 'enabled' 'disabled'}}" 

4 : class="col-sm-6 {{if (op "&&" (op "<" 2 4) (op "==" 4 4)) 'enabled' 'disabled'}}"

5 : {{op "+" 3  10}}

etc .....
