(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{389:function(e,a,t){"use strict";t.r(a);var s=t(8),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{id:"start-settings"}}),e._v(" "),a("h1",{attrs:{id:"configuracion-inicial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-inicial"}},[e._v("#")]),e._v(" Configuración inicial")]),e._v(" "),a("locale-warning",{attrs:{lang:"es"}}),e._v(" "),a("p",{attrs:{id:"server-administration"}}),e._v(" "),a("h2",{attrs:{id:"configuracion-del-acceso-al-panel-de-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-del-acceso-al-panel-de-control"}},[e._v("#")]),e._v(" Configuración del acceso al panel de control")]),e._v(" "),a("p",[e._v("Por defecto, el servidor se puede administrar desde cualquier computadora de la red local en la que está instalado, lo que significa que el acceso está limitado a los siguientes rangos de direcciones IP: "),a("code",[e._v("10.*")]),e._v(", "),a("code",[e._v("192.168.*")]),e._v(", "),a("code",[e._v("172.16-172.31")]),e._v(", "),a("code",[e._v("127.*")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Los detalles de la configuración de acceso se tratan en la descripción de la "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#web-security"}},[e._v("sección "),a("interface",{attrs:{ru:"{Веб}{Безопасность}",en:"{Web}{Security}"}})],1),e._v(".")],1)]),e._v(" "),a("p",[e._v("El acceso remoto al panel de control de "),a("Const",{attrs:{name:"product-server"}}),e._v(" requiere autenticación con las credenciales de un usuario que pertenezca a uno de los siguientes grupos:")],1),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("Const",{attrs:{name:"admin-server-group"}})],1),e._v(" en Windows ("),a("strong",[a("Const",{attrs:{name:"admin-server-group-linux"}})],1),e._v(" en sistemas operativos de la familia Linux) — para la administración del servidor;")])]),e._v(" "),a("li",[a("p",[a("strong",[a("Const",{attrs:{name:"security-server-group"}})],1),e._v(" en Windows ("),a("strong",[a("Const",{attrs:{name:"security-server-group-linux"}})],1),e._v(" en sistemas operativos de la familia Linux) — para ver informes y grabaciones de reuniones inteligentes.")])])]),e._v(" "),a("p",[e._v("Al instalar el servidor en un sistema operativo Windows, la cuenta de usuario actual se añade al primer grupo. En un sistema operativo Linux, los usuarios se añaden al grupo "),a("strong",[a("Const",{attrs:{name:"admin-server-group-linux"}})],1),e._v(" "),a("RouterLink",{attrs:{to:"/es/admin/server-part/#server-installation-linux"}},[e._v("especificados manualmente durante el proceso de instalación")]),e._v(". Para proporcionar acceso al panel de control a otro usuario, el administrador debe añadir su cuenta a uno de los grupos.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Cómo crear una nueva cuenta en diferentes sistemas operativos y agregarla al grupo adecuado, se muestra detalladamente "),a("RouterLink",{attrs:{to:"/es/admin/security-admin/#add-security-admin"}},[e._v("en el ejemplo del administrador de "),a("Const",{attrs:{name:"security-server-group"}})],1),e._v(".")],1),e._v(" "),a("p",[a("const",{attrs:{name:"product-server"}}),e._v(" no tiene limitaciones en la cantidad de administradores de cada tipo.")],1)]),e._v(" "),a("p",[e._v("Si desea configurar el servidor de forma remota desde otra máquina, asegúrese de que el firewall del servidor permita la conexión a través del puerto seleccionado para acceder al panel de control (por defecto es el puerto "),a("code",[e._v("80")]),e._v("), y que esta capacidad haya sido activada en las "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#web-security"}},[e._v("configuraciones de seguridad del panel de control")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Hemos explicado cómo controlar "),a("Const",{attrs:{name:"product-server"}}),e._v(" desde un ordenador fuera de la red en [el artículo correspondiente de la base de conocimientos]("),a("to-site",{attrs:{alias:"offline-control"}},[e._v("en el artículo correspondiente de la base de conocimientos")]),e._v(").")],1)]),e._v(" "),a("lang-filter",{attrs:{lang:"ru"}},[a("p",[a("strong",[e._v("Problema al iniciar sesión en el panel de control después de cambiar la contraseña")])]),e._v(" "),a("p",[e._v("En RED OS hay características especiales relacionadas con el funcionamiento de las listas de control de acceso avanzado a archivos (ACL, Access Control Lists). Después de cambiar la contraseña de un usuario del SO que pertenece al grupo de administradores de "),a("const",{attrs:{name:"product-server"}}),e._v(" ("),a("strong",[a("const",{attrs:{name:"security-server-group-linux"}})],1),e._v(" o "),a("strong",[a("const",{attrs:{name:"admin-server-group-linux"}})],1),e._v("), así como después de agregar un nuevo usuario a uno de estos grupos, es necesario ejecutar el comando (obligatoriamente en nombre del administrador):")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("setfacl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" u:trueconf:r /etc/shadow\n")])])]),a("p",[e._v("Sin este comando, no podrás acceder al panel de control de "),a("const",{attrs:{name:"product-server"}}),e._v(".")],1)]),e._v(" "),a("p",{attrs:{id:"check-status"}}),e._v(" "),a("h2",{attrs:{id:"estado-del-servidor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estado-del-servidor"}},[e._v("#")]),e._v(" Estado del servidor")]),e._v(" "),a("p",[e._v("El estado actual de "),a("Const",{attrs:{name:"product-server"}}),e._v(" se muestra en la línea "),a("interface",{attrs:{ru:"Статус сервера",en:"Server status"}}),e._v(" como texto "),a("span",{staticStyle:{color:"green"}},[a("strong",[e._v("verde")])]),e._v(" (si está funcionando) o "),a("span",{staticStyle:{color:"red"}},[a("strong",[e._v("rojo")])]),e._v(" (si está detenido) en la esquina superior derecha del panel de control:")],1),e._v(" "),a("StdPic",{attrs:{id:"status"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("¿Qué hacer si el servidor no se inicia?")]),e._v(" "),a("p",[e._v("En la línea "),a("interface",{attrs:{ru:"Статус сервера",en:"Estado del servidor"}}),e._v(" se muestra el texto "),a("interface",{attrs:{ru:"Остановлен",en:"Detenido"}}),e._v(".")],1),e._v(" "),a("p",[e._v("Existen tres posibles razones:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("ausencia de licencia")]),e._v(": póngase en contacto con los proveedores del sistema para obtener una licencia")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("los archivos del servidor están ausentes o dañados")]),e._v(": reinstale el servidor "),a("Const",{attrs:{name:"product-server"}}),e._v(" (consulte la sección "),a("RouterLink",{attrs:{to:"/es/admin/server-part/#server-installation"}},[e._v("Instalación del servidor")]),e._v(")")],1)]),e._v(" "),a("li",[a("p",[a("strong",[e._v("se ha averiado la clave del hardware del servidor")]),e._v(": consulte la "),a("to-site",{attrs:{alias:"fix-check-cert"}},[e._v("instrucción para resolver el problema con la clave")]),e._v(".")],1)])])]),e._v(" "),a("p",{attrs:{id:"server-log-files"}}),e._v(" "),a("h2",{attrs:{id:"registro-del-servidor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registro-del-servidor"}},[e._v("#")]),e._v(" Registro del servidor")]),e._v(" "),a("p",[e._v("En caso de problemas con el servidor, el servicio de soporte técnico de "),a("Const",{attrs:{name:"company-name"}}),e._v(" podrá ayudarle de manera más rápida y eficaz si cuenta con "),a("to-site",{attrs:{alias:"server-logs"}},[e._v("los registros del servidor")]),e._v(". Puede ver el registro principal del servidor en el diario accesible a través del botón "),a("interface",{attrs:{ru:"{Система}{Журнал сервера}",en:"{System}{Server log}"}}),e._v(" situado en la esquina superior derecha.")],1),e._v(" "),a("StdPic",{attrs:{id:"journal_menu_button"}}),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Para que los registros sean lo más informativos posible, la opción "),a("interface",{attrs:{ru:"Включить подробное логирование",en:"Enable detailed logging"}}),e._v(" debe estar activada en la sección "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#settings"}},[a("interface",{attrs:{ru:"{Панель управления}{Настройки}",en:"{Dashboard}{Settings}"}})],1),e._v(". El personal de soporte técnico puede pedirle que haga esto para facilitar el proceso de solución de problemas.")],1)]),e._v(" "),a("p",[e._v("También en el directorio de trabajo de "),a("Const",{attrs:{name:"product-server"}}),e._v(" se guarda una serie de archivos log adicionales, sobre los cuales se puede encontrar información detallada en el "),a("to-site",{attrs:{alias:"server-logs-types"}},[e._v("artículo correspondiente de la base de conocimientos")]),e._v(".")],1),e._v(" "),a("p",{attrs:{id:"preferences"}}),e._v(" "),a("h2",{attrs:{id:"configuracion-de-preferencias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-preferencias"}},[e._v("#")]),e._v(" Configuración de preferencias")]),e._v(" "),a("p",[e._v("Algunas configuraciones pueden establecerse de manera personalizada para cada administrador del servidor: el idioma de la interfaz de control, la zona horaria, las opciones de exportación de informes.")]),e._v(" "),a("StdPic",{attrs:{id:"preferences"}}),e._v(" "),a("ol",[a("li",[a("p",[e._v("Acceda al menú "),a("interface",{attrs:{ru:"{Система}{Предпочтения...}",en:"{System}{Preferences...}"}}),e._v(" en la esquina superior derecha del panel de control.")],1)]),e._v(" "),a("li",[a("p",[e._v("Seleccione el idioma de preferencia para la interfaz de la consola de administración, así como la zona horaria. Este valor afectará la visualización de la hora de los eventos en todos los "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#reports"}},[e._v("registros del servidor")]),e._v(", y también se aplicará automáticamente en el campo correspondiente al "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#general-tab"}},[e._v("programar reuniones")]),e._v(". Puede utilizar la zona horaria de la máquina donde se implementa el servidor marcando la casilla correspondiente.")],1)]),e._v(" "),a("li",[a("p",[e._v("En la sección "),a("interface",{attrs:{ru:"Экспорт CSV",en:"Export to CSV"}}),e._v(" se pueden configurar las opciones de "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#reports"}},[e._v("exportación de informes")]),e._v(" – la codificación y el carácter separador utilizados para representar las filas de la tabla en formato de texto.")],1)])]),e._v(" "),a("p",[e._v("Después de cambiar las preferencias, haga clic en "),a("interface",{attrs:{ru:"Применить",en:"Apply "}}),e._v(" para guardarlas.")],1),e._v(" "),a("p",{attrs:{id:"client-side"}}),e._v(" "),a("h2",{attrs:{id:"conexion-de-usuarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conexion-de-usuarios"}},[e._v("#")]),e._v(" Conexión de usuarios")]),e._v(" "),a("p",{attrs:{id:"guest-page"}}),e._v(" "),a("h3",{attrs:{id:"donde-pueden-los-usuarios-obtener-las-aplicaciones-cliente"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#donde-pueden-los-usuarios-obtener-las-aplicaciones-cliente"}},[e._v("#")]),e._v(" Dónde pueden los usuarios obtener las aplicaciones cliente")]),e._v(" "),a("p",[e._v("Para que los usuarios de su servidor puedan conectarse al sistema de videoconferencias, distribuya entre ellos el enlace a la "),a("destination",{attrs:{source:"web"}},[a("a",{attrs:{href:"../../user/guest-page/",target:"_blank"}},[e._v("página de invitado")])]),a("destination",{attrs:{source:"pdf"}},[a("to-site",{attrs:{alias:"guest-page"}},[e._v("página de invitado")])],1),e._v(", donde se pueden descargar las aplicaciones cliente para todas las plataformas compatibles.")],1),e._v(" "),a("p",[e._v("La página de invitados está disponible en "),a("code",[e._v("http[s]://<server>[:<port>]")]),e._v(", donde:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<server>")]),e._v(" — dirección del ordenador con "),a("Const",{attrs:{name:"product-server"}}),e._v(";")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("<port>")]),e._v(" — es el puerto asignado para el panel de control del administrador (si se utiliza el valor predeterminado — puerto "),a("code",[e._v("80")]),e._v(" — no es necesario especificarlo).")])])]),e._v(" "),a("p",[e._v("Por ejemplo:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("https://videoserver.company.com")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("http://100.120.12.12:7777")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Puede configurar el enlace a la página de invitado en el menú "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#web-settings"}},[a("interface",{attrs:{ru:"{Веб} {Настройки}",en:"{Web} {Settings}"}})],1),e._v(" del panel de control.")],1)]),e._v(" "),a("p",{attrs:{id:"client-application-connection"}}),e._v(" "),a("h3",{attrs:{id:"conexion-de-la-aplicacion-cliente-a-trueconf-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conexion-de-la-aplicacion-cliente-a-trueconf-server"}},[e._v("#")]),e._v(" Conexión de la aplicación cliente a TrueConf Server")]),e._v(" "),a("p",[e._v("Para que la aplicación se conecte a su servidor y el usuario pueda autenticarse en él, es necesario proporcionar a la aplicación la dirección del servidor en la red. Esto se puede hacer manualmente o permitir que la aplicación encuentre el servidor automáticamente a través de DNS.")]),e._v(" "),a("p",[e._v("Después de conectarse al servidor correcto, el usuario deberá autenticarse introduciendo su "),a("RouterLink",{attrs:{to:"/es/admin/web-config/#single-user-profile"}},[e._v("nombre de usuario y contraseña")]),e._v(".")],1),e._v(" "),a("p",{attrs:{id:"configuring-the-client-application"}}),e._v(" "),a("h4",{attrs:{id:"configuracion-manual-de-la-aplicacion-cliente"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-manual-de-la-aplicacion-cliente"}},[e._v("#")]),e._v(" Configuración manual de la aplicación cliente")]),e._v(" "),a("p",[e._v("La configuración manual de la conexión con el servidor implica que el usuario introduzca manualmente en el menú de configuración de red de la aplicación (o durante su primer inicio) la dirección del servidor y el puerto para la conexión. Las instrucciones detalladas para conectarse al servidor de cada aplicación específica están disponibles en la página de inicio de sesión.")]),e._v(" "),a("p",{attrs:{id:"connection-using-auto-discovering"}}),e._v(" "),a("h4",{attrs:{id:"configuracion-de-conexion-automatica"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-conexion-automatica"}},[e._v("#")]),e._v(" Configuración de conexión automática")]),e._v(" "),a("p",[e._v("La aplicación cliente puede encontrar automáticamente "),a("Const",{attrs:{name:"product-server"}}),e._v(" en la red local. Para ello, es necesario especificar la dirección del servidor en el dominio DNS, que es el sufijo de dominio DNS primario ("),a("strong",[e._v("primary DNS suffix")]),e._v(") para el ordenador cliente. En el dominio requerido, es necesario crear un registro SRV del servicio vcs2.tcp e indicar en él la dirección y el puerto del servidor.")],1),e._v(" "),a("p",[e._v("Ejemplo de configuración para la utilidad DNS de Microsoft Windows 2012 Server:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("en el menú del botón derecho del dominio de destino, seleccione "),a("strong",[e._v("Tipo de registro de recurso")]),e._v(";")])]),e._v(" "),a("li",[a("p",[e._v("de la lista seleccionar el tipo "),a("strong",[e._v("Ubicación del servicio (registro SRV)")]),e._v(";")])]),e._v(" "),a("li",[a("p",[e._v("Establezca la configuración de acuerdo con la imagen.")])])]),e._v(" "),a("StdPic",{attrs:{id:"dns"}}),e._v(" "),a("p",[e._v("En este ejemplo, el servidor está disponible en la dirección "),a("strong",[e._v("videoserver.your.domain.com")]),e._v(" y el puerto 4307. Tenga en cuenta que el nombre del protocolo (tcp) no contiene guiones bajos.")]),e._v(" "),a("p",{attrs:{id:"set-pdf-import"}}),e._v(" "),a("h2",{attrs:{id:"configuracion-de-importacion-de-archivos-pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-importacion-de-archivos-pdf"}},[e._v("#")]),e._v(" Configuración de importación de archivos PDF")]),e._v(" "),a("p",[e._v("Al utilizar "),a("Const",{attrs:{name:"product-server"}}),e._v(", incluida su versión gratuita, todos los "),a("RouterLink",{attrs:{to:"/es/admin/introduction/#collaboration-tools-list"}},[e._v("herramientas de colaboración")]),e._v(" están disponibles: compartir escritorio y ventanas de aplicaciones, mostrar presentaciones, controlar escritorios remotos, entre otros. Sin embargo, para mostrar "),a("to-site",{attrs:{alias:"pdf-import"}},[e._v("presentaciones creadas a partir de archivos PDF")]),e._v(" en la aplicación cliente "),a("Const",{attrs:{name:"product-windows-client"}}),e._v(", se requiere configurar software adicional.")],1),e._v(" "),a("p",[e._v("Para crear una presentación a partir de un archivo PDF y ver PDF directamente en "),a("Const",{attrs:{name:"product-windows-client"}}),e._v(", se utiliza la "),a("to-site",{attrs:{alias:"ghostscript"}},[e._v("biblioteca de código abierto "),a("strong",[e._v("Ghostscript")])]),e._v(". Se descargará automáticamente desde "),a("Const",{attrs:{name:"product-server"}}),e._v(" y se instalará en la PC del usuario al importar el primer archivo PDF. Sin embargo, dado que no está integrada en el software de "),a("Const",{attrs:{name:"company-name"}}),e._v(", es necesario configurarla manualmente en el servidor de antemano.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("En las aplicaciones para clientes de "),a("Const",{attrs:{name:"company-name"}}),e._v(" para Linux y macOS se utilizan bibliotecas del sistema para trabajar con archivos PDF, su importación debe estar disponible al conectarse tanto a "),a("Const",{attrs:{name:"product-server"}}),e._v(" para Linux como a "),a("Const",{attrs:{name:"product-server"}}),e._v(" para Windows. En caso de tener problemas o preguntas adicionales sobre esta funcionalidad, contacte a "),a("to-site",{attrs:{alias:"support"}},[e._v("nuestro soporte técnico")]),e._v(".")],1)]),e._v(" "),a("p",{attrs:{id:"set-pdf-import-windows"}}),e._v(" "),a("h3",{attrs:{id:"trueconf-server-para-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trueconf-server-para-windows"}},[e._v("#")]),e._v(" TrueConf Server para Windows")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Diríjase al "),a("to-site",{attrs:{alias:"support"}},[e._v("soporte técnico "),a("Const",{attrs:{name:"company-name"}})],1),e._v(" para solicitar un archivo comprimido con las bibliotecas de Ghostscript ya compiladas. Debe contener 4 archivos: "),a("strong",[e._v("gsdll86.lib, gsdll64.lib, gsdll86.dll, gsdll64.dll")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("En "),a("RouterLink",{attrs:{to:"/es/admin/info/#settings"}},[e._v("la carpeta de trabajo de "),a("Const",{attrs:{name:"product-server"}})],1),e._v(" (por defecto "),a("code",[e._v("C:\\TrueConf\\")]),e._v(") cree el directorio "),a("code",[e._v("third_party_extensions")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Descomprima en él el archivo obtenido en el paso 1.")])]),e._v(" "),a("li",[a("p",[e._v("Abra el registro (por ejemplo, ejecutando el comando "),a("strong",[e._v("regedit")]),e._v(" en la consola).")])]),e._v(" "),a("li",[a("p",[e._v("Navega a la rama del registro")])])]),e._v(" "),a("p",[a("code",[e._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\TrueConf\\Server\\AppProperties")])]),e._v(" "),a("p",[e._v("y cree allí el parámetro de cadena "),a("code",[e._v("pdflibrary_url")]),e._v(" con el valor "),a("code",[e._v("https://[server_address]/third-party-extensions/gsdll.dll")]),e._v(", donde "),a("code",[e._v("[server_address]")]),e._v(" es el FQDN (nombre de dominio) o la dirección IP de "),a("Const",{attrs:{name:"product-server"}}),e._v(", a través del cual está disponible para la conexión desde aplicaciones cliente.")],1),e._v(" "),a("p",[e._v("6. Abra el archivo "),a("code",[e._v("[installation_path]\\httpconf\\opt\\redirects.conf")]),e._v(" en un editor de texto, donde "),a("code",[e._v("[installation_path]")]),e._v(" es la ruta de instalación del servidor, y añada en una nueva línea el siguiente texto (asumiendo que todas las demás líneas están comentadas):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("RewriteEngine On\n\nInclude opt/work_dir.conf\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IfDefine work_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  RewriteCond  %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("REQUEST_URI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("  ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("/third-party-extensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("/gsdll.dll$\n  RewriteCond  %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("QUERY_STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("86")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("))")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("?\n  RewriteRule  ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("$ "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${work_dir}")]),e._v('/third_party_extensions/gsdll%3.dll"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("L,QSA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/IfDefine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IfDefine work_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    AliasMatch  ^/third-party-extensions/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${work_dir}")]),e._v("/third_party_extensions/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("."),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$2")]),e._v('"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/IfDefine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("7. Reinicie los servicios "),a("Const",{attrs:{name:"product-server"}}),e._v(" y "),a("Const",{attrs:{name:"company-name"}}),e._v(" Web Manager. Utilice para ello el Administrador de tareas, ya que el reinicio del servidor desde su panel de control no afecta al servicio "),a("Const",{attrs:{name:"company-name"}}),e._v(" Web Manager.")],1),e._v(" "),a("p",{attrs:{id:"set-pdf-import-linux"}}),e._v(" "),a("h3",{attrs:{id:"trueconf-server-para-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trueconf-server-para-linux"}},[e._v("#")]),e._v(" TrueConf Server para Linux")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),a("p",[e._v("Las siguientes comandos deben ejecutarse con derechos de superusuario o utilizando la utilidad "),a("code",[e._v("sudo")]),e._v(", por ejemplo, "),a("code",[e._v("sudo command")]),e._v(". Tenga en cuenta que, por defecto, "),a("strong",[e._v("sudo")]),e._v(" puede no estar presente en su sistema operativo, puede verificar su existencia con el comando "),a("code",[e._v("sudo -V")]),e._v(".")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Diríjase al "),a("to-site",{attrs:{alias:"support"}},[e._v("soporte técnico "),a("Const",{attrs:{name:"company-name"}})],1),e._v(" para solicitar un archivo comprimido con las bibliotecas de Ghostscript ya compiladas. Debe contener 4 archivos: "),a("strong",[e._v("gsdll86.lib, gsdll64.lib, gsdll86.dll, gsdll64.dll")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Cree un archivo de configuración para la redirección, por ejemplo, usando "),a("strong",[e._v("nano")]),e._v(" en el terminal:")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /opt/trueconf/server/etc/webmanager/opt/redirects.conf\n")])])]),a("p",[e._v("3. Escriba las siguientes líneas en el archivo de configuración y guárdelo:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("RewriteEngine On\nInclude /opt/trueconf/server/etc/webmanager/opt/work_dir.conf\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IfDefine work_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nRewriteCond %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("REQUEST_URI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("/third-party-extensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("/gsdll.dll$\nRewriteCond %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("QUERY_STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("86")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("))")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("?\nRewriteRule ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("$ "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${work_dir}")]),e._v('/third_party_extensions/gsdll%3.dll"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("L,QSA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/IfDefine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IfDefine work_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nAliasMatch ^/third-party-extensions/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${work_dir}")]),e._v("/third_party_extensions/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("."),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$2")]),e._v('"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/IfDefine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("4. Añada el parámetro con el enlace para cargar las bibliotecas necesarias en la aplicación, ejecutando el comando:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("/opt/trueconf/server/bin/vcs/tc_regkey "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AppProperties"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pdflibrary_url"')]),e._v(" str "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://[server_address]/third-party-extensions/gsdll.dll"')]),e._v("\n")])])]),a("p",[e._v("donde "),a("code",[e._v("[server_address]")]),e._v(" es FQDN (nombre de dominio) o dirección IP de "),a("Const",{attrs:{name:"product-server"}}),e._v(", a la cual se puede acceder para la conexión desde aplicaciones cliente.")],1),e._v(" "),a("p",[e._v("5. Cree un directorio para las bibliotecas:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/trueconf/server/var/lib/third_party_extensions\n")])])]),a("p",[e._v("6. Descomprima todos los archivos del archivo obtenido en el paso 1 en el directorio "),a("code",[e._v("third_party_extensions")]),e._v(".")]),e._v(" "),a("p",[e._v("7. Reinicie los servicios del servidor web y el servicio principal "),a("const",{attrs:{name:"product-server"}}),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("systemctl restart trueconf-web\n\nsystemctl restart trueconf\n")])])]),a("toTopButton")],1)}),[],!1,null,null,null);a.default=r.exports}}]);