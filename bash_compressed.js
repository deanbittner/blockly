// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.bash=new Blockly.Generator("bash");Blockly.bash.addReservedWords("__halt_compiler,abstract,and,array,as,break,callable,case,catch,class,clone,const,continue,declare,default,die,do,echo,else,elseif,empty,enddeclare,endfor,endforeach,endif,endswitch,endwhile,eval,exit,extends,final,for,foreach,function,global,goto,if,implements,include,include_once,instanceof,insteadof,interface,isset,list,namespace,new,or,print,private,protected,public,require,require_once,return,static,switch,throw,trait,try,unset,use,var,while,xor,PHP_VERSION,PHP_MAJOR_VERSION,PHP_MINOR_VERSION,PHP_RELEASE_VERSION,PHP_VERSION_ID,PHP_EXTRA_VERSION,PHP_ZTS,PHP_DEBUG,PHP_MAXPATHLEN,PHP_OS,PHP_SAPI,PHP_EOL,PHP_INT_MAX,PHP_INT_SIZE,DEFAULT_INCLUDE_PATH,PEAR_INSTALL_DIR,PEAR_EXTENSION_DIR,PHP_EXTENSION_DIR,PHP_PREFIX,PHP_BINDIR,PHP_BINARY,PHP_MANDIR,PHP_LIBDIR,PHP_DATADIR,PHP_SYSCONFDIR,PHP_LOCALSTATEDIR,PHP_CONFIG_FILE_PATH,PHP_CONFIG_FILE_SCAN_DIR,PHP_SHLIB_SUFFIX,E_ERROR,E_WARNING,E_PARSE,E_NOTICE,E_CORE_ERROR,E_CORE_WARNING,E_COMPILE_ERROR,E_COMPILE_WARNING,E_USER_ERROR,E_USER_WARNING,E_USER_NOTICE,E_DEPRECATED,E_USER_DEPRECATED,E_ALL,E_STRICT,__COMPILER_HALT_OFFSET__,TRUE,FALSE,NULL,__CLASS__,__DIR__,__FILE__,__FUNCTION__,__LINE__,__METHOD__,__NAMESPACE__,__TRAIT__");
Blockly.bash.ORDER_ATOMIC=0;Blockly.bash.ORDER_CLONE=1;Blockly.bash.ORDER_NEW=1;Blockly.bash.ORDER_MEMBER=2.1;Blockly.bash.ORDER_FUNCTION_CALL=2.2;Blockly.bash.ORDER_POWER=3;Blockly.bash.ORDER_INCREMENT=4;Blockly.bash.ORDER_DECREMENT=4;Blockly.bash.ORDER_BITWISE_NOT=4;Blockly.bash.ORDER_CAST=4;Blockly.bash.ORDER_SUPPRESS_ERROR=4;Blockly.bash.ORDER_INSTANCEOF=5;Blockly.bash.ORDER_LOGICAL_NOT=6;Blockly.bash.ORDER_UNARY_PLUS=7.1;Blockly.bash.ORDER_UNARY_NEGATION=7.2;
Blockly.bash.ORDER_MULTIPLICATION=8.1;Blockly.bash.ORDER_DIVISION=8.2;Blockly.bash.ORDER_MODULUS=8.3;Blockly.bash.ORDER_ADDITION=9.1;Blockly.bash.ORDER_SUBTRACTION=9.2;Blockly.bash.ORDER_STRING_CONCAT=9.3;Blockly.bash.ORDER_BITWISE_SHIFT=10;Blockly.bash.ORDER_RELATIONAL=11;Blockly.bash.ORDER_EQUALITY=12;Blockly.bash.ORDER_REFERENCE=13;Blockly.bash.ORDER_BITWISE_AND=13;Blockly.bash.ORDER_BITWISE_XOR=14;Blockly.bash.ORDER_BITWISE_OR=15;Blockly.bash.ORDER_LOGICAL_AND=16;
Blockly.bash.ORDER_LOGICAL_OR=17;Blockly.bash.ORDER_IF_NULL=18;Blockly.bash.ORDER_CONDITIONAL=19;Blockly.bash.ORDER_ASSIGNMENT=20;Blockly.bash.ORDER_LOGICAL_AND_WEAK=21;Blockly.bash.ORDER_LOGICAL_XOR=22;Blockly.bash.ORDER_LOGICAL_OR_WEAK=23;Blockly.bash.ORDER_COMMA=24;Blockly.bash.ORDER_NONE=99;
Blockly.bash.ORDER_OVERRIDES=[[Blockly.bash.ORDER_MEMBER,Blockly.bash.ORDER_FUNCTION_CALL],[Blockly.bash.ORDER_MEMBER,Blockly.bash.ORDER_MEMBER],[Blockly.bash.ORDER_LOGICAL_NOT,Blockly.bash.ORDER_LOGICAL_NOT],[Blockly.bash.ORDER_MULTIPLICATION,Blockly.bash.ORDER_MULTIPLICATION],[Blockly.bash.ORDER_ADDITION,Blockly.bash.ORDER_ADDITION],[Blockly.bash.ORDER_LOGICAL_AND,Blockly.bash.ORDER_LOGICAL_AND],[Blockly.bash.ORDER_LOGICAL_OR,Blockly.bash.ORDER_LOGICAL_OR]];
Blockly.bash.init=function(a){Blockly.bash.definitions_=Object.create(null);Blockly.bash.functionNames_=Object.create(null);Blockly.bash.variableDB_?Blockly.bash.variableDB_.reset():Blockly.bash.variableDB_=new Blockly.Names(Blockly.bash.RESERVED_WORDS_)};
Blockly.bash.finish=function(a){var c=[],b;for(b in Blockly.bash.definitions_)c.push(Blockly.bash.definitions_[b]);delete Blockly.bash.definitions_;delete Blockly.bash.functionNames_;Blockly.bash.variableDB_.reset();return c.join("\n\n")+"\n\n\n"+a};Blockly.bash.scrubNakedValue=function(a){return a+"\n"};Blockly.bash.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.bash.scrub_=function(a,c){var b="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.bash.COMMENT_WRAP-3))&&(b+=Blockly.bash.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.bash.allNestedComments(d))&&(b+=Blockly.bash.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.bash.blockToCode(e);
return b+c+e};
Blockly.bash.getAdjusted=function(a,c,b,d,e){b=b||0;e=e||Blockly.bash.ORDER_NONE;a.workspace.options.oneBasedIndex&&b--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=0<b?Blockly.bash.valueToCode(a,c,Blockly.bash.ORDER_ADDITION)||g:0>b?Blockly.bash.valueToCode(a,c,Blockly.bash.ORDER_SUBTRACTION)||g:d?Blockly.bash.valueToCode(a,c,Blockly.bash.ORDER_UNARY_NEGATION)||g:Blockly.bash.valueToCode(a,c,e)||g;if(Blockly.isNumber(a))a=parseFloat(a)+b,d&&(a=-a);else{if(0<b){a=a+" + "+b;var f=Blockly.bash.ORDER_ADDITION}else 0>
b&&(a=a+" - "+-b,f=Blockly.bash.ORDER_SUBTRACTION);d&&(a=b?"-("+a+")":"-"+a,f=Blockly.bash.ORDER_UNARY_NEGATION);f=Math.floor(f);e=Math.floor(e);f&&e>=f&&(a="("+a+")")}return a};Blockly.bash.strip$=function(a){if("string"!=typeof a)return a;-1<a.indexOf("${")&&(a=a.slice(2,-1));return a};Blockly.bash.colour={};Blockly.bash.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.colour_random=function(a){return["cat /dev/urandom | tr -dc 'A-F0-9' | fold -w 6 | head -n 1",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.colour_rgb=function(a){var c=Blockly.bash.valueToCode(a,"RED",Blockly.bash.ORDER_COMMA)||0,b=Blockly.bash.valueToCode(a,"GREEN",Blockly.bash.ORDER_COMMA)||0;a=Blockly.bash.valueToCode(a,"BLUE",Blockly.bash.ORDER_COMMA)||0;return[Blockly.bash.provideFunction_("colour_rgb",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","  r=`mathContrain $1 0 100`","  g=`mathContrain $2 0 100`","  b=`mathContrain $3 0 100`",'  r=`echo "$r * 2.55" | bc `','  g=`echo "$g * 2.55" | bc `','  b=`echo "$b * 2.55" | bc `',
'  r=`printf "%02x\\n" ${r/.*}`','  g=`printf "%02x\\n" ${g/.*}`','  b=`printf "%02x\\n" ${b/.*}`','  echo "#${r}${g}${b}"',"}"])+"("+c+", "+b+", "+a+")",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.colour_blend=function(a){var c=Blockly.bash.valueToCode(a,"COLOUR1",Blockly.bash.ORDER_COMMA)||"'#000000'",b=Blockly.bash.valueToCode(a,"COLOUR2",Blockly.bash.ORDER_COMMA)||"'#000000'";a=Blockly.bash.valueToCode(a,"RATIO",Blockly.bash.ORDER_COMMA)||.5;return[Blockly.bash.provideFunction_("colour_blend",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","  ratio=max(min($ratio, 1), 0);","  r1 = hexdec(substr($c1, 1, 2));","  g1 = hexdec(substr($c1, 3, 2));","  b1 = hexdec(substr($c1, 5, 2));",
"  r2 = hexdec(substr($c2, 1, 2));","  g2 = hexdec(substr($c2, 3, 2));","  b2 = hexdec(substr($c2, 5, 2));","  r = round($r1 * (1 - $ratio) + $r2 * $ratio);","  g = round($g1 * (1 - $ratio) + $g2 * $ratio);","  b = round($b1 * (1 - $ratio) + $b2 * $ratio);","  hex = '#';","  hex .= str_pad(dechex($r), 2, '0', STR_PAD_LEFT);","  hex .= str_pad(dechex($g), 2, '0', STR_PAD_LEFT);","  hex .= str_pad(dechex($b), 2, '0', STR_PAD_LEFT);","  return hex;","}"])+"("+c+", "+b+", "+a+")",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.lists={};Blockly.bash.lists_create_empty=function(a){return["()",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.lists_create_with=function(a){for(var c=Array(a.itemCount_),b=0;b<a.itemCount_;b++)c[b]=Blockly.bash.valueToCode(a,"ADD"+b,Blockly.bash.ORDER_COMMA)||"";c="("+c.join(" ")+")";return[c,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.lists_repeat=function(a){var c=Blockly.bash.provideFunction_("lists_repeat",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","  array=();","  for ((i=0; i<$2; i++)) ; do",'    array=("${array[@]}" $1)',"  done",'  echo "${array[@]}"',"}"]),b=Blockly.bash.valueToCode(a,"ITEM",Blockly.bash.ORDER_COMMA)||"null";a=Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_COMMA)||"0";return["(`"+c+" "+b+" "+a+"`)",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.lists_length=function(a){a=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"''";a=Blockly.bash.strip$(a);return['"${#'+a+'[@]}"',Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.lists_isEmpty=function(a){a=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_FUNCTION_CALL)||"()";a=Blockly.bash.strip$(a);return['`[ "${#'+a+'[@]}" -eq 0 ]`',Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.lists_indexOf=function(a){var c=Blockly.bash.valueToCode(a,"FIND",Blockly.bash.ORDER_NONE)||"''",b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_MEMBER)||"[]";if(a.workspace.options.oneBasedIndex)var d="0",e=" + 1";else d=" - 1",e="";a="FIRST"==a.getFieldValue("END")?Blockly.bash.provideFunction_("indexOf",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local haystack=("${!1}")',"  local needle=${2}",'  for i in "${!haystack[@]}"; do','    if [ "${haystack[$i]}" = "${needle}" ]; then',
"      echo $((i"+e+"))","      exit 0","    fi","  done","  echo "+d,"}"]):Blockly.bash.provideFunction_("lastIndexOf",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local haystack=("${!1}")','  local needle="${2}"',"  last="+d,'  for i in "${!haystack[@]}"; do','    if [ "${haystack[$i]}" = "${needle}" ]; then',"      last=$((i"+e+"))","    fi","  done","  echo $last","}"]);b=Blockly.bash.strip$(b);return["`"+a+" "+b+"[@] "+c+"`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.lists_getIndex=function(a){var c=a.getFieldValue("MODE")||"GET";switch(a.getFieldValue("WHERE")||"FROM_START"){case "FIRST":if("GET"==c){var b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_MEMBER)||"()",b=Blockly.bash.strip$(b);return['"${'+b+'[0]}"',Blockly.bash.ORDER_MEMBER]}if("GET_REMOVE"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()",b=Blockly.bash.strip$(b),['"${'+b+'[0]};" '+b+'=("${'+b+'[@]:1}")',Blockly.bash.ORDER_FUNCTION_CALL];if("REMOVE"==
c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()",b=Blockly.bash.strip$(b),b+'=("${'+b+'[@]:1}")\n';break;case "LAST":if("GET"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()",b=Blockly.bash.strip$(b),['"${'+b+"[${#"+b+'[@]}-1]}"',Blockly.bash.ORDER_FUNCTION_CALL];if("GET_REMOVE"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()",b=Blockly.bash.strip$(b),['"${'+b+"[${#"+b+'[@]}-1]}"; unset '+b+"[${#"+b+"[@]}-1]; "+
b+'=("${'+b+'[@]:1}")',Blockly.bash.ORDER_FUNCTION_CALL];if("REMOVE"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()",b=Blockly.bash.strip$(b),"unset "+b+"[${#"+b+"[@]}-1]";break;case "FROM_START":var d=Blockly.bash.getAdjusted(a,"AT");if("GET"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_MEMBER)||"()",b=Blockly.bash.strip$(b),['"${'+b+"["+d+']}"',Blockly.bash.ORDER_MEMBER];if("GET_REMOVE"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_COMMA)||
"()",b=Blockly.bash.strip$(b),['"${'+b+"["+d+']}"; unset '+b+"["+d+"]; "+b+'=("${'+b+'[@]}")',Blockly.bash.ORDER_FUNCTION_CALL];if("REMOVE"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_COMMA)||"array()",b=Blockly.bash.strip$(b),"unset "+b+"["+d+"]; "+b+'=("${'+b+'[@]}")\n';break;case "FROM_END":if("GET"==c)return b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_COMMA)||"()",d=Blockly.bash.getAdjusted(a,"AT",1,!0),b=Blockly.bash.strip$(b),['"${'+b+"[${#"+b+"[@]}"+d+']}"',
Blockly.bash.ORDER_FUNCTION_CALL];if("GET_REMOVE"==c||"REMOVE"==c){b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"()";d=Blockly.bash.getAdjusted(a,"AT",1,!1,Blockly.bash.ORDER_SUBTRACTION);b=Blockly.bash.strip$(b);if("GET_REMOVE"==c)return['"${'+b+"[${#"+b+"[@]}-"+d+']}"; unset '+b+"[${#"+b+"[@]}"+d+"]; "+b+'=("${'+b+'[@]}")\n',Blockly.bash.ORDER_FUNCTION_CALL];if("REMOVE"==c)return"unset "+b+"[${#"+b+"[@]}"+d+"]; "+b+'=("${'+b+'[@]}")\n'}break;case "RANDOM":b=Blockly.bash.valueToCode(a,
"VALUE",Blockly.bash.ORDER_NONE)||"()";b=Blockly.bash.strip$(b);if("GET"==c)return a=Blockly.bash.provideFunction_("lists_get_random_item",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local _name="$1[@]"','  local _l=("${!_name}")',"  local i=$(($RANDOM % ${#_l[@]}))",'  echo "${_l[$i]}"','  eval "$1=(\\"\\${_l[@]}\\")"',"}"]),["`"+a+" "+b+"`",Blockly.bash.ORDER_FUNCTION_CALL];if("GET_REMOVE"==c)return a=Blockly.bash.provideFunction_("lists_get_remove_random_item",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+
" {",'  local _name="$1[@]"','  local _l=("${!_name}")',"  local i=$(($RANDOM % ${#_l[@]}))",'  echo "${_l[$i]}"',"  unset _l[$i]",'  eval "$1=(\\"\\${_l[@]}\\")"',"}"]),["`"+a+" "+b+"`",Blockly.bash.ORDER_FUNCTION_CALL];if("REMOVE"==c)return a=Blockly.bash.provideFunction_("lists_remove_random_item",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","  local _name=$1[@]",'  local _l=("${!_name}")',"  local i=$(($RANDOM % ${#_l[@]}))","  unset _l[$i] ",'  eval "$1=(\\"\\${_l[@]}\\")"',"}"]),
"`"+a+" "+b+"`\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.bash.lists_setIndex=function(a){var c=a.getFieldValue("MODE")||"GET",b=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_ASSIGNMENT)||"null";switch(b){case "FIRST":b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_MEMBER)||"()";b=Blockly.bash.strip$(b);if("SET"==c)return b+"[0]="+d+"\n";if("INSERT"==c)return b=Blockly.bash.strip$(b),b+"=("+d+' "${'+b+'[@]}")\n';break;case "LAST":b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_COMMA)||"()";
b=Blockly.bash.strip$(b);if("SET"==c)return b+"[${#"+b+"[@]} - 1]="+d+"\n";if("INSERT"==c)return b+'=("${'+b+'[@]}" '+d+")\n";break;case "FROM_START":var e=Blockly.bash.getAdjusted(a,"AT"),b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_MEMBER)||"()",b=Blockly.bash.strip$(b);if("SET"==c)return b+"["+e+"]="+d+"\n";if("INSERT"==c)return b+'=("${'+b+"[@]:0:"+e+'}" '+d+' "${'+b+"[@]:"+e+":${#"+b+'[@]}}")\n';break;case "FROM_END":b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_COMMA)||"()";
b=Blockly.bash.strip$(b);e=Blockly.bash.getAdjusted(a,"AT",1);if("SET"==c)return b+"[${#"+b+"[@]} - "+e+"]="+d+"\n";if("INSERT"==c)return b+'=("${'+b+"[@]:0:${#"+b+"[@]} - "+e+'}" '+d+' "${'+b+"[@]:${#"+b+"[@]} -"+e+":${#"+b+'[@]}}")\n';break;case "RANDOM":b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_REFERENCE)||"()";b=Blockly.bash.strip$(b);if("SET"==c)return b+"[$(($RANDOM % ${#"+b+"[@]}))]="+d+"\n";if("INSERT"==c)return a=Blockly.bash.provideFunction_("lists_insert_random_item",["function "+
Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local _name="$1[@]"','  local _l=("${!_name}")',"  local value=$2","  local i=$(($RANDOM % ${#_l[@]}))",'  _l=("${_l[@]:0:$i}" $value "${_l[@]:$i:${#'+b+'[@]}}")\n','  echo "${_l[@]}"','  eval "$1=(\\"\\${_l[@]}\\")"',"}"]),b+"=(`"+a+" "+b+" "+d+"`)\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.bash.lists_getSublist=function(a){var c=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_MEMBER)||"[]",b=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");switch(b){case "FROM_START":b=Blockly.bash.getAdjusted(a,"AT1");break;case "FROM_END":b=Blockly.bash.getAdjusted(a,"AT1",1,!0);b='"${#'+c+'}" '+b;break;case "FIRST":b=0;break;default:throw"Unhandled option (lists_getSublist)";}switch(d){case "FROM_START":a=Blockly.bash.getAdjusted(a,"AT2",1);break;case "FROM_END":Blockly.bash.getAdjusted(a,
"AT2",0,!0);case "LAST":a='"${#'+c+'}"';break;default:throw"Unhandled option (lists_getSublist)";}return['("${'+c+"[@]:"+b+" : "+a+'}")',Blockly.bash.ORDER_MEMBER]};
Blockly.bash.lists_sort=function(a){var c=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_COMMA)||"()",c=Blockly.bash.strip$(c),b=a.getFieldValue("DIRECTION");a=a.getFieldValue("TYPE");var d=" ";"1"!==b&&(d+="-r ");"NUMERIC"===a?d+="-n ":"IGNORE_CASE"===a&&(d+="-f ");return['`echo "${'+c+'[@]}" | tr " " "\\n" | sort '+d+' | tr "\\n" " "`',Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.lists_split=function(a){var c=Blockly.bash.valueToCode(a,"INPUT",Blockly.bash.ORDER_COMMA),b=Blockly.bash.valueToCode(a,"DELIM",Blockly.bash.ORDER_COMMA)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)return c||(c="''"),['("${'+c+"//"+b+'/ }")',Blockly.bash.ORDER_FUNCTION_CALL];if("JOIN"==a)return c||(c="()"),['`printf "%s" "${'+c+"[@]/#/"+b+'}"`',Blockly.bash.ORDER_FUNCTION_CALL];throw"Unknown mode: "+a;};Blockly.bash.logic={};
Blockly.bash.controls_if=function(a){var c=0,b=Blockly.bash.valueToCode(a,"IF"+c,Blockly.bash.ORDER_NONE)||"";if(-1===b.indexOf("[")||-1===b.indexOf("]"))b="[ "+b+" ]";for(var d=Blockly.bash.statementToCode(a,"DO"+c),e="if "+b+" ; then \n"+d,c=1;c<=a.elseifCount_;c++)b=Blockly.bash.valueToCode(a,"IF"+c,Blockly.bash.ORDER_NONE)||"",d=Blockly.bash.statementToCode(a,"DO"+c),e+=" elif "+b+" ; then\n"+d;a.elseCount_&&(d=Blockly.bash.statementToCode(a,"ELSE"),e+=" else \n"+d);return e+"fi\n"};
Blockly.bash.logic_compare=function(a){var c=Blockly.bash.valueToCode(a,"A",e)||"0",b=Blockly.bash.valueToCode(a,"B",e)||"0",c=isNaN(Number(c))?c:Number(c),b=isNaN(Number(b))?b:Number(b);if("string"==typeof c&&"$"==c.charAt(0)&&"string"==typeof b&&"$"==b.charAt(0))var d={EQ:"==",NEQ:"!=",LT:"-lt",LTE:"-le",GT:"-gt",GTE:"-ge"};else"string"==typeof c&&"$"!=c.charAt(0)||"string"==typeof b&&"$"!=b.charAt(0)?d={EQ:"==",NEQ:"!=",LT:"\\<",LTE:"\\<=",GT:"\\>",GTE:"\\>="}:isNaN(c)&&isNaN(b)||(d={EQ:"-eq",
NEQ:"-ne",LT:"-lt",LTE:"-le",GT:"-gt",GTE:"-ge"});a=d[a.getFieldValue("OP")];var e=a==d.EQ||a==d.NEQ?Blockly.bash.ORDER_EQUALITY:Blockly.bash.ORDER_RELATIONAL;return["[ "+c+" "+a+" "+b+" ]",e]};
Blockly.bash.logic_operation=function(a){var c="AND"==a.getFieldValue("OP")?"&&":"||",b="&&"==c?Blockly.bash.ORDER_LOGICAL_AND:Blockly.bash.ORDER_LOGICAL_OR,d=Blockly.bash.valueToCode(a,"A",b);a=Blockly.bash.valueToCode(a,"B",b);if(d||a){var e="&&"==c?"1":"";d||(d=e);a||(a=e)}else a=d="";return[d+" "+c+" "+a,b]};Blockly.bash.logic_negate=function(a){var c=Blockly.bash.ORDER_LOGICAL_NOT;return["!"+(Blockly.bash.valueToCode(a,"BOOL",c)||"1"),c]};
Blockly.bash.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"1":"",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.logic_null=function(a){return['""',Blockly.bash.ORDER_ATOMIC]};Blockly.bash.logic_ternary=function(a){var c=Blockly.bash.valueToCode(a,"IF",Blockly.bash.ORDER_CONDITIONAL)||"",b=Blockly.bash.valueToCode(a,"THEN",Blockly.bash.ORDER_CONDITIONAL)||'""';a=Blockly.bash.valueToCode(a,"ELSE",Blockly.bash.ORDER_CONDITIONAL)||'""';return["`[ "+c+" ] && echo "+b+" || echo "+a+"`",Blockly.bash.ORDER_CONDITIONAL]};Blockly.bash.loops={};
Blockly.bash.controls_repeat_ext=function(a){var c=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.bash.valueToCode(a,"TIMES",Blockly.bash.ORDER_ASSIGNMENT)||"0",b=Blockly.bash.statementToCode(a,"DO"),b=Blockly.bash.addLoopTrap(b,a.id);a="";var d=Blockly.bash.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=c;c.match(/^\w+$/)||Blockly.isNumber(c)||(e=Blockly.bash.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+=e+" = "+c+";\n");return a+
("for (("+d+"=0; "+d+"<"+e+"; "+d+"++)) ; do\n"+b+"done\n")};Blockly.bash.controls_repeat=Blockly.bash.controls_repeat_ext;Blockly.bash.controls_whileUntil=function(a){var c="UNTIL"==a.getFieldValue("MODE"),b=Blockly.bash.valueToCode(a,"BOOL",c?Blockly.bash.ORDER_LOGICAL_NOT:Blockly.bash.ORDER_NONE)||"false",d=Blockly.bash.statementToCode(a,"DO"),d=Blockly.bash.addLoopTrap(d,a.id);c&&(b="!"+b);return"while [ "+b+" ] ; do\n"+d+"done\n"};
Blockly.bash.controls_for=function(a){var c=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.bash.valueToCode(a,"FROM",Blockly.bash.ORDER_ASSIGNMENT)||"0",d=Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_ASSIGNMENT)||"0",e=Blockly.bash.valueToCode(a,"BY",Blockly.bash.ORDER_ASSIGNMENT)||"1",g=Blockly.bash.statementToCode(a,"DO"),g=Blockly.bash.addLoopTrap(g,a.id);if(Blockly.isNumber(b)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var f=parseFloat(b)<=
parseFloat(d);a="for (("+c+"="+b+"; "+c+(f?"<=":">=")+d+"; "+c;c=Math.abs(parseFloat(e));a=(1==c?a+(f?"++":"--"):a+((f?"+=":"-=")+c))+(")) ; do\n"+g+"done\n")}else a="",f=b,b.match(/^\w+$/)||Blockly.isNumber(b)||(f=Blockly.bash.variableDB_.getDistinctName(c+"_start",Blockly.Variables.NAME_TYPE),a+=f+"="+b+";\n"),b=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(b="$"+Blockly.bash.variableDB_.getDistinctName(c+"_end",Blockly.Variables.NAME_TYPE),a+=b+"="+d+"\n"),d=Blockly.bash.variableDB_.getDistinctName(c+
"_inc",Blockly.Variables.NAME_TYPE),a+=d+"=",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("abs("+e+");\n"),a=a+("if [ $"+f+" -gt "+b+" ]; then\n")+(Blockly.bash.INDENT+d+"=-$"+d+"\n"),a+="fi\n",a+="for (("+c+"=$"+f+"; $([ $"+d+" -gt 0 ] && echo $(("+c+"<="+b+")) || echo $(("+c+">="+b+")) ); "+c+" += "+d+")); do\n"+g+"done\n";return a};
Blockly.bash.controls_forEach=function(a){var c=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_ASSIGNMENT)||"()",d=Blockly.bash.statementToCode(a,"DO"),d=Blockly.bash.addLoopTrap(d,a.id),b=0==b.indexOf("(")?b.slice(1,-1):"${"+b.slice(1)+"[@]}";return""+("for "+c+" in "+b+"; do\n"+d+"done\n")};
Blockly.bash.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return"continue\n"}throw"Unknown flow statement.";};Blockly.bash.math={};Blockly.bash.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));Infinity==a?a="INF":-Infinity==a&&(a="-INF");return[a,Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.math_arithmetic=function(a){var c={ADD:[" + ",Blockly.bash.ORDER_ADDITION],MINUS:[" - ",Blockly.bash.ORDER_SUBTRACTION],MULTIPLY:[" * ",Blockly.bash.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.bash.ORDER_DIVISION],POWER:[" ** ",Blockly.bash.ORDER_POWER]}[a.getFieldValue("OP")],b=c[0],c=c[1],d=Blockly.bash.valueToCode(a,"A",c)||"0";a=Blockly.bash.valueToCode(a,"B",c)||"0";return["$(("+d+b+a+"))",c]};
Blockly.bash.math_single=function(a){var c=a.getFieldValue("OP"),b;if("NEG"==c)return a=Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_UNARY_NEGATION)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.bash.ORDER_UNARY_NEGATION];a="SIN"==c||"COS"==c||"TAN"==c?Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_DIVISION)||"0":Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_NONE)||"0";switch(c){case "ABS":b="`"+Blockly.bash.provideFunction_("math_abs",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+
" {","[ $1 -lt 0 ] && echo $((- $1)) || echo $1","}"])+" "+a+"`";break;case "ROOT":b='`echo "sqrt('+a+')" | bc -l`';break;case "LN":b='`echo "l('+a+')" | bc -l`';break;case "EXP":b='`echo "e('+a+')" | bc -l`';break;case "POW10":b='` echo "10^'+a+'" | bc -l`';break;case "ROUND":b='`printf -v int %.0f "'+a+'"`';break;case "ROUNDUP":a=Blockly.bash.strip$(a);b="${"+a+"/.*}";break;case "ROUNDDOWN":a=Blockly.bash.strip$(a);b="$((${"+a+"/.*} + 1)) ";break;case "SIN":b='`echo "s('+a+')" | bc -l`';break;case "COS":b=
'`echo "c('+a+')" | bc -l`';break;case "TAN":b='`echo "s('+a+")/c("+a+')" | bc -l`'}if(b)return[b,Blockly.bash.ORDER_FUNCTION_CALL];switch(c){case "LOG10":b='`echo "l('+a+') / l(10)" | bc -l`';break;case "ASIN":b="`"+Blockly.bash.provideFunction_("math_asin",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'if (( $(echo "$1 == 1" | bc -l) ));then','      echo "90"','   elif (( $(echo "$1 < 1" | bc -l) ));then','      echo "scale=3;a(sqrt((1/(1-($1^2)))-1))" | bc -l','   elif (( $(echo "$1 > 1" | bc -l) ));then',
'      echo "error"',"   fi","}"])+" "+a+"`";break;case "ACOS":b="`"+Blockly.bash.provideFunction_("math_acos",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'if (( $(echo "$1 == 0" | bc -l) ));then','      echo "90"','   elif (( $(echo "$1 <= 1" | bc -l) ));then','      echo "scale=3;a(sqrt((1/($1^2))-1))" | bc -l','   elif (( $(echo "$1 > 1" | bc -l) ));then','      echo "error"',"fi","}"])+" "+a+"`";break;case "ATAN":b='`echo "a('+a+')" | bc -l`';break;default:throw"Unknown math operator: "+
c;}return[b,Blockly.bash.ORDER_DIVISION]};Blockly.bash.math_constant=function(a){return{PI:['`echo "4*a(1)" | bc -l`',Blockly.bash.ORDER_ATOMIC],E:['`echo "e(1)" | bc -l`',Blockly.bash.ORDER_ATOMIC],GOLDEN_RATIO:['`echo "(1 + sqrt(5)) / 2" | bc -l`',Blockly.bash.ORDER_DIVISION],SQRT2:['`echo "sqrt(2)" | bc -l`',Blockly.bash.ORDER_ATOMIC],SQRT1_2:['`echo "1/sqrt(2)" | bc -l`',Blockly.bash.ORDER_ATOMIC],INFINITY:["INF",Blockly.bash.ORDER_ATOMIC]}[a.getFieldValue("CONSTANT")]};
Blockly.bash.math_number_property=function(a){var c=Blockly.bash.valueToCode(a,"NUMBER_TO_CHECK",Blockly.bash.ORDER_MODULUS)||"0",b=a.getFieldValue("PROPERTY"),d;if("PRIME"==b)return["`"+Blockly.bash.provideFunction_("math_isPrime",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"{",'  if [ "$1" -eq "2" ] ||[ "$1" -eq "3" ] ',"  then","    echo 1","    exit 1","  fi",'  if [ "$1" =~ ^[0-9]+$ ] || [ "$1" -le "1" ] ||  [ "$1" % "1" -ne "0" ] || "$1" % "2" -eq "0" || "$1" % "3" -eq "0"]',"  then",
"    echo 0","    exit 1","  fi",'  for (($x=6; "$x"<=`echo "sqrt($1)" | bc -q` + 1; $x+=6)); do',"    if [ $1 % ($x - 1) -eq  0 ] || [ $1 % ($x + 1) -eq 0 ]; then","      echo 0","      exit 1","    fi","  done","  echo 0","}"])+" "+c+"`",Blockly.JavaScript.ORDER_FUNCTION_CALL];switch(b){case "EVEN":d=c+" % 2 == 0";break;case "ODD":d=c+" % 2 == 1";break;case "WHOLE":d="is_int("+c+")";break;case "POSITIVE":d=c+" > 0";break;case "NEGATIVE":d=c+" < 0";break;case "DIVISIBLE_BY":a=Blockly.bash.valueToCode(a,
"DIVISOR",Blockly.bash.ORDER_MODULUS)||"0",d=c+" % "+a+" == 0"}return["["+d+"]",Blockly.bash.ORDER_EQUALITY]};Blockly.bash.math_change=function(a){var c=Blockly.bash.valueToCode(a,"DELTA",Blockly.bash.ORDER_ADDITION)||"0";return"("+Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" += "+c+")\n"};Blockly.bash.math_round=Blockly.bash.math_single;Blockly.bash.math_trig=Blockly.bash.math_single;
Blockly.bash.math_on_list=function(a){var c=a.getFieldValue("OP");switch(c){case "SUM":a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_FUNCTION_CALL)||"()";a=Blockly.smash.strip$(a);a="`"+Blockly.bash.provideFunction_("math_sum_list",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'local _name="$1[@]"','local _l=("${!_name}")',"local a=0","for i in ${_l[@]}; do","   ((a+=i))","done","echo $a","}"])+" "+a+"`";break;case "MIN":a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_FUNCTION_CALL)||
"()";a=Blockly.smash.strip$(a);a="`"+Blockly.bash.provideFunction_("math_min_list",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'local _name="$1[@]"','local _l=("${!_name}")',"local min=${_l[0]}","for i in ${_l[@]}; do","   if [[ $i -lt $min ]]; then","        min=$i","   fi","done","echo ${min}","}"])+" "+a+"`";break;case "MAX":a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_FUNCTION_CALL)||"()";a=Blockly.smash.strip$(a);Blockly.bash.provideFunction_("math_max_list",["function "+
Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'local _name="$1[@]"','local _l=("${!_name}")',"local max=${_l[0]}","for i in ${_l[@]}; do","   if [[ $i -lg $max ]]; then","        max=$i","   fi","done","echo ${max}","}"]);a="`"+math_max_list+" "+a+"`";break;case "AVERAGE":c=Blockly.bash.provideFunction_("math_mean",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local _name="$1[@]"','  local _l=("${!_name}")',"  local sum=`array_sum $_name`",'  echo  `echo "$sum / ${#_l[@]}" | bc -l`',
"}"]);a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_NONE)||"()";a="`"+c+" "+a+"`";break;case "MEDIAN":c=Blockly.bash.provideFunction_("math_median",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"}"]);a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_NONE)||"[]";a=c+" "+a;break;case "MODE":c=Blockly.bash.provideFunction_("math_modes",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","}"]);a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_NONE)||"[]";a=c+" "+a;break;
case "STD_DEV":c=Blockly.bash.provideFunction_("math_standard_deviation",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","}"]);a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_NONE)||"[]";a=c+"("+a+")";break;case "RANDOM":c=Blockly.bash.provideFunction_("math_random_list",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local _name="$1[@]"','  local _l=("${!_name}")',"  local i=$(($RANDOM % ${#_l[@]}))",'  echo "${_l[$i]}"','  eval "$1=(\\"\\${_l[@]}\\")"',"}"]);a=Blockly.bash.valueToCode(a,
"LIST",Blockly.bash.ORDER_NONE)||"()";a=c+" "+a;break;default:throw"Unknown operator: "+c;}return[a,Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.math_modulo=function(a){var c=Blockly.bash.valueToCode(a,"DIVIDEND",Blockly.bash.ORDER_MODULUS)||"0";a=Blockly.bash.valueToCode(a,"DIVISOR",Blockly.bash.ORDER_MODULUS)||"0";return["$(("+c+" % "+a+"))",Blockly.bash.ORDER_MODULUS]};
Blockly.bash.math_constrain=function(a){var c=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_COMMA)||"0",b=Blockly.bash.valueToCode(a,"LOW",Blockly.bash.ORDER_COMMA)||"0";a=Blockly.bash.valueToCode(a,"HIGH",Blockly.bash.ORDER_COMMA)||"Infinity";return["`"+Blockly.bash.provideFunction_("mathContrain",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {","  max=$((${1}>${2}?${1}:${2}))","  val=$(($max<${3}?$max:${3}))","  echo $val","}"])+" "+c+" "+b+" "+a+"`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.math_random_int=function(a){var c=Blockly.bash.valueToCode(a,"FROM",Blockly.bash.ORDER_COMMA)||"0";a=Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_COMMA)||"0";return["$((("+c+" + $RANDOM) % "+a+"))",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.math_random_float=function(a){return['`awk -v "seed=$RANDOM"  \'BEGIN { srand(seed); printf("%.5f\n", rand()) }\'`',Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.procedures={};
Blockly.bash.procedures_defreturn=function(a){var c=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=Blockly.bash.statementToCode(a,"STACK");Blockly.bash.STATEMENT_PREFIX&&(b=Blockly.bash.prefixLines(Blockly.bash.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.bash.INDENT)+b);Blockly.bash.INFINITE_LOOP_TRAP&&(b=Blockly.bash.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+b);var d=Blockly.bash.valueToCode(a,"RETURN",Blockly.bash.ORDER_NONE)||"";d&&(d="  echo "+
d+";\n");for(var e=0;e<a.arguments_.length;e++)Blockly.bash.variableDB_.getName(a.arguments_[e],Blockly.Variables.NAME_TYPE);a=Blockly.bash.scrub_(a,"function "+c+" {\n"+b+d+"}");Blockly.bash.definitions_["%"+c]=a;return null};Blockly.bash.procedures_defnoreturn=Blockly.bash.procedures_defreturn;
Blockly.bash.procedures_callreturn=function(a){for(var c=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],d=0;d<a.arguments_.length;d++)b[d]=Blockly.bash.valueToCode(a,"ARG"+d,Blockly.bash.ORDER_COMMA)||"null";return["`"+c+" "+b.join(" ")+"`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.procedures_callnoreturn=function(a){for(var c=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],d=0;d<a.arguments_.length;d++)b[d]=Blockly.bash.valueToCode(a,"ARG"+d,Blockly.bash.ORDER_COMMA)||"";return c+" "+b.join(" ")+"\n"};
Blockly.bash.procedures_ifreturn=function(a){var c="if [ "+(Blockly.bash.valueToCode(a,"CONDITION",Blockly.bash.ORDER_NONE)||"false")+" ]; then\n";a.hasReturnValue_?(a=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"",c=c+("  echo "+a+"\n")+"  exit 0 \n"):c+="  exit 0 \n";return c+"fi\n"};Blockly.bash.texts={};Blockly.bash.text=function(a){a=Blockly.bash.quote_(a.getFieldValue("TEXT"));a=a.replace("!","\\!");a=a.replace("$","\\$");a=a.replace("#","\\#");return[a,Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.text_join=function(a){if(0==a.itemCount_)return['""',Blockly.bash.ORDER_ATOMIC];if(1==a.itemCount_)return[Blockly.bash.valueToCode(a,"ADD0",Blockly.bash.ORDER_NONE)||'""',Blockly.bash.ORDER_FUNCTION_CALL];if(2==a.itemCount_){var c=Blockly.bash.valueToCode(a,"ADD0",Blockly.bash.ORDER_NONE)||'""';a=Blockly.bash.valueToCode(a,"ADD1",Blockly.bash.ORDER_NONE)||'""';return['"'+c+a+'"',Blockly.bash.ORDER_ADDITION]}for(var c=Array(a.itemCount_),b=0;b<a.itemCount_;b++)c[b]=Blockly.bash.valueToCode(a,
"ADD"+b,Blockly.bash.ORDER_COMMA)||'""';a=c.join("");return[a,Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_append=function(a){var c=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_ASSIGNMENT)||'""';return c+'="${'+c+'}"'+a+"\n"};Blockly.bash.text_length=function(a){return["`echo "+(Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||'""')+" | awk '{print length}'`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_isEmpty=function(a){return["`[[ !  -z  "+(Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||'""')+" ]] && echo 0 || echo 1`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_indexOf=function(a){var c=Blockly.bash.valueToCode(a,"FIND",Blockly.bash.ORDER_NONE)||'""',b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||'""',d="FIRST"==a.getFieldValue("END")?'${text%%"${search}"*}':'${text##"${search}"*}';return["`"+Blockly.bash.provideFunction_("FIRST"==a.getFieldValue("END")?"text_indexOf":"text_lastIndexOf",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  text="${1}"','  search="${2}"',"  pfix="+d,"  pos=${#pfix}","  echo $pos",
"}"])+' "'+b+'" '+c+"`",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_charAt=function(a){var c=a.getFieldValue("WHERE")||"FROM_START",b=Blockly.bash.valueToCode(a,"VALUE","RANDOM"==c?Blockly.bash.ORDER_NONE:Blockly.bash.ORDER_COMMA)||"''",b=Blockly.bash.strip$(b);switch(c){case "FIRST":return["${"+b+":0:1}",Blockly.bash.ORDER_FUNCTION_CALL];case "LAST":return["${"+b+":(-1):1}",Blockly.bash.ORDER_FUNCTION_CALL];case "FROM_START":return a=Blockly.bash.getAdjusted(a,"AT"),["${"+b+":"+a+":1}",Blockly.bash.ORDER_FUNCTION_CALL];case "FROM_END":return a=
Blockly.bash.getAdjusted(a,"AT",1,!0),["${"+b+":("+a+"):1}",Blockly.bash.ORDER_FUNCTION_CALL];case "RANDOM":return["`"+Blockly.bash.provideFunction_("text_random_letter",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  local _t="${1}"',"  local i=$(($RANDOM % ${#_t}))","  echo ${text:$i:1};","}"])+" "+b+"`",Blockly.bash.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.bash.text_getSubstring=function(a){var c=Blockly.bash.valueToCode(a,"STRING",Blockly.bash.ORDER_FUNCTION_CALL)||"''",b=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"!=b||"LAST"!=d){var e=Blockly.bash.getAdjusted(a,"AT1");a=Blockly.bash.getAdjusted(a,"AT2");c="`"+Blockly.bash.provideFunction_("text_get_substring",["function "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+" {",'  text="${1}"','  where1="${2}"','  at1="${3}"','  where2="${4}"','  at2="${5}"',"  if [ $where1 == FROM_END ]; then",
"    at1=$((${#text} - 1 - $at1))","  elif [ $where1 == FIRST ]; then","    at1=0","  elif [ $where1 != FROM_START ]; then","    exit 1","  fi","  length=0","  if [ $where2 == FROM_START ]; then","    length=$(($at2 - $at1 + 1))","  elif [ $where2 == FROM_END ]; then","    length=$((${#text} - $at1 - $at2))","  elif [ $where2 == LAST ]; then","    length=$((${#text} - $at1))","  else","    exit 1","  fi","  echo ${text:$at1:$length}","}"])+" "+c+' "'+b+'" '+e+' "'+d+'" '+a+"`"}return[c,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_changeCase=function(a){var c=Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''";if("UPPERCASE"==a.getFieldValue("CASE"))var b="`echo "+c+" | tr '[:lower:]'  '[:upper:]'`";else"LOWERCASE"==a.getFieldValue("CASE")?b="`echo "+c+" | tr '[:upper:]' '[:lower:]'`":"TITLECASE"==a.getFieldValue("CASE")&&(b="`echo "+c+" | awk '{for(j=1;j<=NF;j++){ $j=toupper(substr($j,1,1)) tolower(substr($j,2)) }}1'`");return[b,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_trim=function(a){var c={LEFT:" | sed -e 's/^[ \\t]*//'",RIGHT:" | sed 's/[ \\t]*$//'",BOTH:" | sed 's/^[ \\t]*//;s/[ \\t]*$//'"}[a.getFieldValue("MODE")];return["`echo "+(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''")+c+"`",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_print=function(a){return"echo "+(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''")+"\n"};
Blockly.bash.text_prompt_ext=function(a){a.getField("TEXT")?Blockly.bash.quote_(a.getFieldValue("TEXT")):Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE);return["`read temp; echo $temp`",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_prompt=Blockly.bash.text_prompt_ext;Blockly.bash.variables={};Blockly.bash.variables_get=function(a){return["${"+Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"}",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.variables_set=function(a){var c=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_ASSIGNMENT)||'""';return Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"="+c+"\n"};