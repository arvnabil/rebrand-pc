(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{375:function(e,a,r){"use strict";r.r(a);var n=r(8),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{id:"api"}}),e._v(" "),a("h1",{attrs:{id:"trabajando-con-la-api-del-servidor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trabajando-con-la-api-del-servidor"}},[e._v("#")]),e._v(" Trabajando con la API del servidor")]),e._v(" "),a("locale-warning",{attrs:{lang:"es"}}),e._v(" "),a("p",[e._v("Las capacidades de uso de "),a("const",{attrs:{name:"product-server"}}),e._v(" se pueden ampliar mediante la API de RESTful, disponible en todas las versiones, incluyendo la gratuita.")],1),e._v(" "),a("p",{attrs:{id:"oauth2"}}),e._v(" "),a("h2",{attrs:{id:"principios-de-funcionamiento-de-api-y-oauth-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principios-de-funcionamiento-de-api-y-oauth-2-0"}},[e._v("#")]),e._v(" Principios de funcionamiento de API y OAuth 2.0")]),e._v(" "),a("p",[e._v("La sección "),a("interface",{attrs:{all:"{API} {OAuth2}"}}),e._v(" está diseñada para administrar aplicaciones o servicios que trabajan con "),a("Const",{attrs:{name:"product-server"}}),e._v(" API. La gestión del acceso se lleva a cabo de acuerdo con el protocolo de autorización OAuth 2.0, sobre el cual puede leer más en la "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentación oficial del RFC 6749"),a("OutboundLink")],1),e._v(", así como en el recuadro de abajo.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("La idea principal del protocolo OAuth 2.0 consiste en otorgar derechos de acceso al API a aplicaciones individuales (client en la terminología de OAuth) con un rango limitado de visibilidad y derechos. Este enfoque permite deshabilitar el acceso a un recurso del servidor a una aplicación específica o a su usuario en cualquier momento. El protocolo también permite autorizar de forma segura aplicaciones de terceros y realizar acciones en el servidor a través del API en nombre del usuario. En este caso, el usuario no debe proporcionar su nombre de usuario o contraseña a la aplicación de terceros (método Authorization Code).")])]),e._v(" "),a("p",[e._v("Cada aplicación de terceros debe obtener una clave de acceso (access token) como resultado del proceso de autorización en "),a("Const",{attrs:{name:"product-server"}}),e._v(" según el protocolo OAuth 2.0. Las aplicaciones que tienen una clave de acceso válida pueden acceder en cualquier momento a la API de "),a("Const",{attrs:{name:"product-server"}}),e._v(", cuya lista de llamadas está "),a("to-site",{attrs:{alias:"api-tcs"}},[e._v("descrita en la documentación")]),e._v(". A través de esta sección del panel de control, el administrador de "),a("Const",{attrs:{name:"product-server"}}),e._v(" tiene control no solo sobre los accesos de las aplicaciones de terceros, sino también sobre las claves obtenidas a través de estas aplicaciones.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Ejemplos de trabajo con la "),a("to-site",{attrs:{alias:"api-start"}},[e._v(" API de "),a("const",{attrs:{name:"company-name"}})],1),e._v(" se muestran en nuestro blog.")],1)]),e._v(" "),a("p",[e._v("Después de la autorización, la aplicación recibe una clave de acceso "),a("em",[e._v("(access token)")]),e._v(" con una vida útil limitada y con un alcance del servidor o del usuario. Por ejemplo, el alcance del servidor permite obtener datos de cualquier reunión, mientras que el del usuario solo permite obtener información de las reuniones en las que el usuario es participante o propietario. El alcance se determina por el tipo de autorización seleccionado por el desarrollador de la aplicación de terceros, y el conjunto de permisos para acceder a los recursos del servidor es determinado por el administrador del servidor.")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("\n            Método de autorización OAuth 2.0\n        ")]),e._v(" "),a("th",[e._v("\n            Alcance de la clave de acceso\n        ")]),e._v(" "),a("th",[e._v("\n            Resultado de la autorización\n        ")])]),e._v(" "),a("tr",[a("td",[a("b",[e._v("Client Credentials")]),e._v(" "),a("br"),e._v("\n            La aplicación recibe una clave de acceso cuyo alcance no está limitado por los datos de un usuario específico. No se requiere autorización para el usuario. Se recomienda su uso solo para aplicaciones de confianza.\n        ")]),e._v(" "),a("td",[e._v("\n            No limitado.\n        ")]),e._v(" "),a("td",[e._v("\n            Se emite una clave de acceso "),a("i",[e._v("(access token)")]),e._v(" con una vida útil de 1 hora.\n        ")])]),e._v(" "),a("tr",[a("td",[a("b",[e._v("User Credentials")]),e._v(" (también conocido como "),a("i",[e._v("Resource Owner Password Credentials Grant")]),e._v(")\n            "),a("br"),e._v("\n            Para obtener la clave de acceso, es necesario proporcionar el nombre de usuario y la contraseña obtenidos desde la aplicación.\n        ")]),e._v(" "),a("td",[e._v("\n            Limitada al alcance del usuario autorizado.\n        ")]),e._v(" "),a("td",[e._v("\n            Se emite una clave de acceso válida por 1 hora, así como una clave de extensión de acceso "),a("i",[e._v("(refresh token)")]),e._v(" válida por 7 días.\n        ")])]),e._v(" "),a("tr",[a("td",[a("b",[e._v("Authorization Code")]),e._v(" "),a("br"),e._v("\n            La clave de acceso "),a("i",[e._v("(access token)")]),e._v(" se emite después de que el usuario se autorice por sí mismo en "),a("Const",{attrs:{name:"product-server"}}),e._v(". La aplicación no tiene acceso al nombre de usuario y a la contraseña.\n        ")],1),e._v(" "),a("td",[e._v("\n            Limitada al alcance del usuario autorizado.\n        ")]),e._v(" "),a("td",[e._v("\n            Se emite una clave de acceso válida por 1 hora, así como una clave de extensión de acceso válida por 7 días.\n        ")])]),e._v(" "),a("tr",[a("td",[a("b",[e._v("Refresh Token")]),e._v(" "),a("br"),e._v("\n            Este método de autorización permite obtener una nueva clave de acceso (access token) basada en una clave de extensión de acceso existente (refresh token).\n        ")]),e._v(" "),a("td",[e._v("\n            Limitada al alcance del usuario al que se le ha emitido la clave de extensión de acceso.\n        ")]),e._v(" "),a("td",[e._v("\n            Se emite una nueva clave de acceso válida por 1 hora. No es posible renovarla utilizando este método.\n        ")])])]),e._v(" "),a("p",[e._v("Cada solicitud para crear una clave de acceso requiere la especificación de un ID de aplicación (Application ID) y un secreto de aplicación (Secret), los cuales se pueden obtener y actualizar creando o, respectivamente, editando la aplicación en esta sección. El ID de la aplicación se crea automáticamente y no se puede cambiar en el futuro, a diferencia del secreto de la aplicación, que se puede generar nuevamente.")]),e._v(" "),a("p",{attrs:{id:"oauth2-permissions"}}),e._v(" "),a("h2",{attrs:{id:"descripcion-de-los-permisos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descripcion-de-los-permisos"}},[e._v("#")]),e._v(" Descripción de los permisos")]),e._v(" "),a("p",[e._v("Las capacidades de una aplicación de terceros para trabajar con la API dependen de los permisos que se le hayan otorgado.")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("\n            Permiso\n        ")]),e._v(" "),a("th",[e._v("\n            Descripción\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre la conferencia\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar conferencia\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.records:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre las grabaciones de conferencias\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.participants:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de participantes de la conferencia\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.participants:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar participantes de la conferencia\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.invitations\n        ")]),e._v(" "),a("td",[e._v("\n            Leer y editar la lista de invitados a la conferencia\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.sessions:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre una sesión específica (sesión activa de videoconferencia)\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.sessions.participants:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de participantes de la conferencia activa y sus roles\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            conferences.sessions.podiums.participants\n        ")]),e._v(" "),a("td",[e._v("\n            Invitar a un participante de la conferencia activa al podio y eliminarlo del podio \n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            groups:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre el grupo de usuarios\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            groups:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar grupos de usuarios. No disponible en LDAP\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            groups.users:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de usuarios del grupo\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            groups.users:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar usuarios del grupo. No disponible en LDAP\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre los usuarios del servidor\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar usuarios del servidor. No disponible en LDAP\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users.addressbook:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer contactos de las libretas de direcciones de los usuarios\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users.addressbook:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar contactos en la libreta de direcciones de los usuarios\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users.avatar:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre los avatares de los usuarios\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            users.avatar:write\n        ")]),e._v(" "),a("td",[e._v("\n            Agregar y eliminar avatares de los usuarios\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            templates.conferences:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer información sobre las plantillas de conferencias\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            templates.conferences:write\n        ")]),e._v(" "),a("td",[e._v("\n            Crear, editar, eliminar plantillas de conferencias\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            logs.calls:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de conferencias de los registros del servidor \n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            logs.calls.participants:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de participantes de la conferencia de los registros del servidor\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("\n            logs.calls.invites:read\n        ")]),e._v(" "),a("td",[e._v("\n            Leer la lista de usuarios invitados a la conferencia de los registros del servidor\n        ")])])]),e._v(" "),a("p",[e._v("En la documentación para "),a("to-site",{attrs:{alias:"api-tcs"}},[a("Const",{attrs:{name:"product-server"}}),e._v(" API")],1),e._v(", se indica un conjunto de permisos necesarios para cada método para su correcta invocación.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Si una aplicación OAuth necesita tanto acceso de lectura como de escritura a ciertos parámetros, en lugar de especificar los permisos "),a("code",[e._v("<permission>:read")]),e._v(" y "),a("code",[e._v("<permission>:write")]),e._v(", puede establecerse el permiso general "),a("code",[e._v("<permission>")]),e._v(" si está disponible. Por ejemplo, si una aplicación necesita leer y editar las cuentas de usuario del servidor, en lugar de seleccionar ambas casillas "),a("code",[e._v("users:read")]),e._v(" y "),a("code",[e._v("users:write")]),e._v(", solo se puede especificar una: "),a("code",[e._v("users")]),e._v(".")])]),e._v(" "),a("p",{attrs:{id:"create-oauth2-application"}}),e._v(" "),a("h2",{attrs:{id:"formulario-para-la-creacion-de-una-nueva-aplicacion-oauth-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formulario-para-la-creacion-de-una-nueva-aplicacion-oauth-2-0"}},[e._v("#")]),e._v(" Formulario para la creación de una nueva aplicación OAuth 2.0")]),e._v(" "),a("p",[e._v("Para agregar una aplicación OAuth 2.0:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Presione "),a("interface",{attrs:{ru:"Создать новое приложение",en:"Create a new application"}}),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Especifique su identificador en el campo "),a("interface",{attrs:{ru:"Имя",en:"Name"}}),e._v(". Se utiliza solo para la visualización en la lista de aplicaciones.")],1)]),e._v(" "),a("li",[a("p",[e._v("Para la autorización mediante el método "),a("strong",[e._v("Authorization Code")]),e._v(", en el campo "),a("interface",{attrs:{ru:"Переадресация URL",en:"Redirect URL"}}),e._v(" indique la URL a la cual será redirigida la aplicación. Para los demás métodos de autorización, puede indicar la dirección "),a("code",[e._v("https://localhost/")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("En la lista "),a("interface",{attrs:{ru:"Разрешения",en:"Permissions"}}),e._v(", marque los "),a("a",{attrs:{href:"#oauth2-permissions"}},[e._v("derechos")]),e._v(" necesarios para su aplicación.")],1)]),e._v(" "),a("li",[a("p",[e._v("Guarde los cambios con el botón "),a("interface",{attrs:{ru:"Создать",en:"Create"}}),e._v(".")],1)])]),e._v(" "),a("p",{attrs:{id:"edit-oauth2-application"}}),e._v(" "),a("h2",{attrs:{id:"pagina-de-edicion-de-la-aplicacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagina-de-edicion-de-la-aplicacion"}},[e._v("#")]),e._v(" Página de edición de la aplicación")]),e._v(" "),a("p",[e._v("En la página de la aplicación, además de poder editar sus propiedades, también es posible ver la lista de claves de acceso que los usuarios de esta aplicación han obtenido. Puedes eliminar en cualquier momento las claves de acceso para usuarios específicos, lo que les impedirá acceder a los recursos del servidor a través de la API.")]),e._v(" "),a("p",[e._v("También puede "),a("interface",{attrs:{ru:"Перегенерировать",en:"Regenerate"}}),e._v(" el secreto de la aplicación, lo que puede ser útil por razones de seguridad para revocar el acceso al servidor de esta aplicación y a todos sus nuevos usuarios. Tenga en cuenta que las claves de acceso y de renovación de acceso obtenidas usando el antiguo secreto seguirán funcionando hasta el final de su período de validez.")],1),e._v(" "),a("toTopButton")],1)}),[],!1,null,null,null);a.default=s.exports}}]);