(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{344:function(e,a,r){"use strict";r.r(a);var o=r(8),n=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{id:"call-from-endpoint"}}),e._v(" "),a("h1",{attrs:{id:"llamadas-por-sip-h-323-en-trueconf-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llamadas-por-sip-h-323-en-trueconf-server"}},[e._v("#")]),e._v(" Llamadas por SIP/H.323 en TrueConf Server")]),e._v(" "),a("locale-warning",{attrs:{lang:"es"}}),e._v(" "),a("p",{attrs:{id:"connect-to-conference"}}),e._v(" "),a("h2",{attrs:{id:"conexion-a-la-conferencia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conexion-a-la-conferencia"}},[e._v("#")]),e._v(" Conexión a la conferencia")]),e._v(" "),a("p",[e._v("Para llamar desde un terminal SIP/H.323 de hardware o software (incluidos "),a("const",{attrs:{name:"product-group"}}),e._v(" o "),a("const",{attrs:{name:"product-videobar"}}),e._v(") a una conferencia realizada en "),a("const",{attrs:{name:"product-server"}}),e._v(", utilice la cadena de llamada en uno de los siguientes formatos:")],1),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("00<Conference_ID>@<server>")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("00<Conference_ID>@<server>:<port>")])])])]),e._v(" "),a("p",[e._v("donde:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<Conference_ID>")]),e._v(" — "),a("destination",{attrs:{source:"web"}},[a("a",{attrs:{href:"../../admin/calls/#conference-id",target:"_blank"}},[e._v("ID de la conferencia")])]),a("destination",{attrs:{source:"pdf"}},[a("to-site",{attrs:{alias:"trueconf-id"}},[e._v("ID de la conferencia")])],1),e._v(";")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<server>")]),e._v(" — dirección IP o nombre del servidor;")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<port>")]),e._v(" — puerto de conexión (en caso de que sea diferente de los estándar "),a("code",[e._v("5060")]),e._v(" para SIP y "),a("code",[e._v("1720")]),e._v(" para H.323).")])])]),e._v(" "),a("p",[e._v("Por ejemplo:")]),e._v(" "),a("p",[a("code",[e._v("001949195144@video.company.com")])]),e._v(" "),a("p",[a("code",[e._v("001949195144@video.company.com:1730")])]),e._v(" "),a("p",[e._v("Para conectarse desde un terminal SIP/H.323 a un "),a("strong",[e._v("evento protegido con PIN")]),e._v(", es necesario añadir el PIN después del ID de la conferencia en la línea de llamada, separado por una coma:")]),e._v(" "),a("p",[a("code",[e._v("00<conf_id>,pin@<trueconf_server>:<port>")])]),e._v(" "),a("p",{attrs:{id:"call-user"}}),e._v(" "),a("h2",{attrs:{id:"llamada-al-usuario-de-trueconf-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llamada-al-usuario-de-trueconf-server"}},[e._v("#")]),e._v(" Llamada al usuario de TrueConf Server")]),e._v(" "),a("p",[e._v("Para llamar desde el terminal a un usuario registrado en "),a("const",{attrs:{name:"product-server"}}),e._v(", use uno de los siguientes formatos:")],1),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<TrueConf_ID>@<server>")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<TrueConf_ID>@<server>:<port>")])])])]),e._v(" "),a("p",[e._v("donde:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<TrueConf_ID>")]),e._v(" — "),a("destination",{attrs:{source:"web"}},[a("a",{attrs:{href:"../../admin/users/#user-id",target:"_blank"}},[a("const",{attrs:{name:"user-id"}})],1)]),a("destination",{attrs:{source:"pdf"}},[a("to-site",{attrs:{alias:"trueconf-id"}},[a("const",{attrs:{name:"user-id"}})],1)],1),e._v(" del usuario;")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<server>")]),e._v(" — la dirección IP o el nombre del servidor al que se debe dirigir la llamada;")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<port>")]),e._v(" — puerto de conexión (en caso de que sea diferente de los estándar "),a("code",[e._v("5060")]),e._v(" para SIP y "),a("code",[e._v("1720")]),e._v(" para H.323).")])])]),e._v(" "),a("p",[e._v("Por ejemplo:")]),e._v(" "),a("p",[a("code",[e._v("james78@video.company.com")])]),e._v(" "),a("p",[a("code",[e._v("james78@video.company.com:5070")])]),e._v(" "),a("p",{attrs:{id:"additional"}}),e._v(" "),a("h2",{attrs:{id:"funciones-adicionales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funciones-adicionales"}},[e._v("#")]),e._v(" Funciones adicionales")]),e._v(" "),a("p",[e._v("Adicionalmente, para la llamada por el protocolo SIP, puede especificar explícitamente el nombre del protocolo; de forma predeterminada se utiliza UDP:")]),e._v(" "),a("p",[a("code",[e._v("00<conf_id>,pin@<trueconf_server>:<port>;transport=<protocol>")])]),e._v(" "),a("p",[e._v("Algunos terminales H.323, como Cisco, también admiten el formato de cadena de llamada con dos almohadillas "),a("code",[e._v("##")]),e._v(". Entonces, los usuarios y en la conferencia de "),a("const",{attrs:{name:"company-name"}}),e._v(" pueden llamar de la siguiente manera:")],1),e._v(" "),a("p",[a("code",[e._v("<trueconf_server>##00<user>")])]),e._v(" "),a("p",[a("code",[e._v("<trueconf_server>##00<conf_id>")])]),e._v(" "),a("toTopButton")],1)}),[],!1,null,null,null);a.default=n.exports}}]);