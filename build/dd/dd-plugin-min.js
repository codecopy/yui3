YUI.add("dd-plugin",function(B){var A=function(C){C.node=((B.Widget&&C.host instanceof B.Widget)?C.host.get("boundingBox"):C.host);A.superclass.constructor.call(this,C);};A.NAME="dd-plugin";A.NS="dd";B.extend(A,B.DD.Drag);B.namespace("Plugin");B.Plugin.Drag=A;},"@VERSION@",{requires:["dd-drag"],skinnable:false,optional:["dd-constrain","dd-proxy"]});