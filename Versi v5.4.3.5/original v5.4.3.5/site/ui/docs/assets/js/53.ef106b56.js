(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{350:function(e,a,o){"use strict";o.r(a);var n=o(8),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{id:"layouts"}}),e._v(" "),a("h1",{attrs:{id:"como-funcionan-el-diseno-del-video-en-trueconf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#como-funcionan-el-diseno-del-video-en-trueconf"}},[e._v("#")]),e._v(" Cómo funcionan el diseño del vídeo en TrueConf")]),e._v(" "),a("locale-warning",{attrs:{lang:"es"}}),e._v(" "),a("p",[e._v("Puede configurar de manera flexible cómo se colocarán las ventanas de vídeo de los participantes, tanto "),a("RouterLink",{attrs:{to:"/es/user/conference-management/#real-time-management"}},[e._v("durante la conferencia "),a("const",{attrs:{name:"company-name"}})],1),e._v(" como "),a("RouterLink",{attrs:{to:"/es/user/conference-scheduling/#layout-tab"}},[e._v("antes de que comience")]),e._v(". Para ayudarle a elegir la disposición de vídeo más conveniente, analizaremos en detalle cómo se forma y qué tipos de ventanas de vídeo pueden estar presentes en ella.")],1),e._v(" "),a("p",{attrs:{id:"video-window"}}),e._v(" "),a("h2",{attrs:{id:"tipos-de-el-diseno-del-video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-el-diseno-del-video"}},[e._v("#")]),e._v(" Tipos de el diseño del vídeo")]),e._v(" "),a("p",[e._v("En total, puede haber tres tipos de "),a("em",[a("strong",[e._v("el diseño del vídeo")])]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("para todos los participantes;")])]),e._v(" "),a("li",[a("p",[e._v("para dispositivos SIP/H.323 y WebRTC (conexiones desde el navegador);")])]),e._v(" "),a("li",[a("p",[e._v("individual para algún participante.")])])]),e._v(" "),a("p",[e._v("Todos los "),a("em",[a("strong",[e._v("vídeo ventanas (ranuras)")])]),e._v(" en cada diseño del vídeo pueden ser de uno de los siguientes "),a("strong",[e._v("tipos")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[a("interface",{attrs:{ru:"Фиксированный",en:"Fixed"}}),e._v(" — se muestra un participante específico de la conferencia.")],1)]),e._v(" "),a("li",[a("p",[a("interface",{attrs:{ru:"Случайный",en:"Random"}}),e._v(" — en el cuadro se mostrará el primer participante no ocupado en el diseño del vídeo. Este es el tipo predeterminado para todos los diseños, excepto para la reunión inteligente.")],1)]),e._v(" "),a("li",[a("p",[a("interface",{attrs:{ru:"Чередование по времени",en:"Time-based shuffling"}}),e._v(" — los participantes que no están en el diseño se muestran por turno en intervalos específicos.")],1)]),e._v(" "),a("li",[a("p",[a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(": en la ventana de vídeo se muestra al participante que está hablando o presentando contenido. Si varios participantes hablan al mismo tiempo, tendrá prioridad el que hable más fuerte. Estos slots se asignan por defecto a todas las ventanas de vídeo en el modo de reunión inteligente. En este modo, se pueden fijar los presentadores en estos slots para que no cambien cuando dejen de hablar.")],1)]),e._v(" "),a("li",[a("p",[a("interface",{attrs:{ru:"Контент",en:"Content"}}),e._v(" — se muestra el contenido que está siendo transmitido por uno de los participantes tanto en su propia ventana como en un flujo separado. Este slot puede ser único en el diseño del vídeo.")],1)])]),e._v(" "),a("p",{attrs:{id:"unique-window"}}),e._v(" "),a("h2",{attrs:{id:"ventanas-de-video-unicas-y-limitaciones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ventanas-de-video-unicas-y-limitaciones"}},[e._v("#")]),e._v(" Ventanas de video únicas y limitaciones")]),e._v(" "),a("p",[e._v("Cada conferencia tiene un número único de espacios en todos el diseño del vídeo, que no puede exceder el número de podios para el modo seleccionado (por ejemplo, 16 si se selecciona roles moderados con 16 presentadores). Se aplican las siguientes reglas:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Cada slot, excepto el vacío, es único. Por ejemplo, si se especifica en el diseño a un participante en un slot "),a("lang-filter",{attrs:{lang:"ru"}},[a("strong",[e._v("Иванов")])]),a("lang-filter",{attrs:{lang:"en"}},[a("strong",[e._v("Smith")])]),e._v(", este slot será único. Si se selecciona a un nuevo participante "),a("lang-filter",{attrs:{lang:"ru"}},[a("strong",[e._v("Крылов")])]),a("lang-filter",{attrs:{lang:"en"}},[a("strong",[e._v("Jones")])]),e._v(" en otro diseño, también será único ya que no se había especificado anteriormente. Al final obtenemos que se utilizan 2 slots únicos en todos los diseños.")],1)]),e._v(" "),a("li",[a("p",[e._v("El mismo espacio en diferentes diseños se reutilizará, por ejemplo, el espacio de contenido. Esto permite utilizar de manera óptima la capacidad del servidor sin aumentar el número de flujos de medios más allá de lo previsto.")])]),e._v(" "),a("li",[a("p",[e._v("Si una ranura de algún tipo ya se está utilizando en un diseño (por ejemplo, el general) y se especifica en otro, se reutilizará. Entonces, en esa ranura, incluso si no es de tipo fijo, se verá el mismo flujo de vídeo en ambos diseños. Por ejemplo, si se crea una ranura aleatoria en dos diseños, el flujo de vídeo se reutilizará y el mismo participante aparecerá en ambos diseños.")])])]),e._v(" "),a("p",[e._v("A continuación, veremos ejemplos.")]),e._v(" "),a("p",[a("strong",[e._v("Ejemplo 1")])]),e._v(" "),a("p",[e._v('Se planea una conferencia en el modo "todos en pantalla" con 49 ponentes (tribunas) y se espera que haya 49 participantes reales. Esto significa que en total en todos el diseño del vídeo puede haber 49 espacios únicos (diferentes), por ejemplo:')]),e._v(" "),a("ul",[a("li",[e._v("una el diseño del vídeo para todos con 40 espacios fijos (los participantes fueron seleccionados explícitamente de la lista para cada ventana de vídeo), más una ventana con contenido y 8 espacios con rotación de participantes")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("o")])])]),e._v(" "),a("ul",[a("li",[e._v("una disposición común para todos con 20 ranuras fijas y una disposición para SIP/H.323/WebRTC con otras 29 ranuras fijas")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("o")])])]),e._v(" "),a("ul",[a("li",[e._v("una disposición común con una ventana de contenido y dos disposiciones individuales con 24 ranuras fijas diferentes cada una.")])]),e._v(" "),a("p",[a("strong",[e._v("Ejemplo 2")])]),e._v(" "),a("p",[e._v('Se está planificando una conferencia en modo "roles moderados" con 16 ponentes (tribunas) y se han invitado 20 participantes reales. Esto significa que en todos el diseño del vídeo puede haber 16 ranuras únicas (diferentes), por ejemplo:')]),e._v(" "),a("ul",[a("li",[e._v("una el diseño del vídeo común para todos con 10 espacios fijos (los participantes fueron seleccionados explícitamente de la lista para cada ventana de vídeo), además del diseño para el moderador con 6 espacios con rotación de participantes;")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("o")])])]),e._v(" "),a("ul",[a("li",[e._v("una sola el diseño del vídeo para todos con 10 espacios fijos y un diseño para SIP/H.323/WebRTC con otros 6 espacios fijos")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("o")])])]),e._v(" "),a("ul",[a("li",[e._v("una disposición común con una ventana de contenido y una disposición para SIP/H.323/WebRTC con una ventana de contenido y 15 espacios alternos. En este caso, habrá un total de 17 espacios (15 alternos y 2 con contenido), pero 16 únicos ya que la ventana de contenido se reutiliza en la segunda disposición.")])]),e._v(" "),a("p",{attrs:{id:"modes"}}),e._v(" "),a("h2",{attrs:{id:"limitaciones-para-los-modos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitaciones-para-los-modos"}},[e._v("#")]),e._v(" Limitaciones para los modos")]),e._v(" "),a("p",[e._v("Para el modo de "),a("strong",[e._v("reunión inteligente")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("todos los vídeos al crear el diseño de forma predeterminada tienen el tipo "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(";")],1)]),e._v(" "),a("li",[a("p",[e._v("el número máximo de ranuras fijas con el tipo "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(" está limitado y es:")],1)])]),e._v(" "),a("p",[a("code",[e._v("cantidad de asientos en la tribuna - 3")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("mínimo debe haber 2 ranuras del tipo "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(" en cada el diseño del vídeo;")],1)]),e._v(" "),a("li",[a("p",[e._v("Si los espacios "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(" no son más de dos, no habrá posibilidad de cambiar su tipo a otro.")],1)])]),e._v(" "),a("p",[e._v("Para el modo de "),a("strong",[e._v("roles moderados")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("no es posible elegir los tipos "),a("interface",{attrs:{ru:"Чередование по времени",en:"Time-based shuffling"}}),e._v(" y "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(" para la ranura.")],1)]),e._v(" "),a("p",[e._v("En el modo de "),a("strong",[e._v("clase virtual")]),e._v(" no hay acceso a la configuración del diseño del vídeo, ya que se forma automáticamente según una regla fija: el ponente (orador) ve a todos los participantes, y cada participante solo ve al ponente.")]),e._v(" "),a("p",{attrs:{id:"shuffling"}}),e._v(" "),a("h2",{attrs:{id:"configuracion-del-diseno-del-video-con-alternancia-de-participantes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-del-diseno-del-video-con-alternancia-de-participantes"}},[e._v("#")]),e._v(" Configuración del diseño del vídeo con alternancia de participantes")]),e._v(" "),a("p",[e._v("Para las ranuras del tipo "),a("interface",{attrs:{ru:"Чередование по времени",en:"Time-based shuffling"}}),e._v(", es posible cambiar los parámetros de cambio de participantes (configuraciones generales para todas las ranuras y el diseño del vídeo de cada conferencia específica):")],1),e._v(" "),a("ul",[a("li",[a("p",[e._v("orden de alternancia (desde el primer participante disponible en el diseño del vídeo hasta el último o viceversa);")])]),e._v(" "),a("li",[a("p",[e._v("intervalo de tiempo en el que se alternan los participantes en los espacios;")])]),e._v(" "),a("li",[a("p",[e._v("tipo de alternancia:")]),e._v(" "),a("ul",[a("li",[a("p",[a("interface",{attrs:{ru:"Замена",en:"Replace"}}),e._v(" — ocurre un cambio de participante por otro participante fuera del diseño del vídeo;")],1)]),e._v(" "),a("li",[a("p",[a("interface",{attrs:{ru:"Смещение",en:"Move"}}),e._v(" — los participantes se desplazan de su espacio al más cercano del mismo tipo "),a("interface",{attrs:{ru:"Чередование по времени",en:"Time-based shuffling"}}),e._v(".")],1)])])])]),e._v(" "),a("p",{attrs:{id:"slots-changing"}}),e._v(" "),a("h2",{attrs:{id:"cambio-del-tipo-de-slots-al-cambiar-el-modo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cambio-del-tipo-de-slots-al-cambiar-el-modo"}},[e._v("#")]),e._v(" Cambio del tipo de slots al cambiar el modo")]),e._v(" "),a("p",[e._v("Al cambiar el modo de conferencia con diseños ya creados, los tipos de slots que no son adecuados para el nuevo modo se reasignan debido a limitaciones (ver arriba):")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("при переключении на "),a("strong",[e._v("roles moderados")]),e._v(" (с любого режима) происходит замена всех слотов "),a("interface",{attrs:{ru:"Чередование по времени",en:"Time-based shuffling"}}),e._v(" и "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(" на "),a("interface",{attrs:{ru:"Случайный",en:"Random"}}),e._v(";")],1)]),e._v(" "),a("li",[a("p",[e._v("al cambiar a "),a("strong",[e._v("reunión inteligente")]),e._v(" (desde cualquier modo), es decir, debe haber al menos 2 el diseño del vídeo con el hablante activo:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("si en el diseño del vídeo hay ranuras del tipo "),a("interface",{attrs:{ru:"Случайный",en:"Random"}}),e._v(", entonces 2 de ellas cambian el tipo a "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(";")],1)]),e._v(" "),a("li",[a("p",[e._v("Si hay menos de dos ranuras del tipo "),a("interface",{attrs:{ru:"Случайный",en:"Random"}}),e._v(" y no son suficientes para el reemplazo, entonces se seleccionan aleatoriamente otras ranuras para cambiarlas al tipo "),a("interface",{attrs:{ru:"Активноговорящий",en:"Active speaker"}}),e._v(".")],1)])])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);