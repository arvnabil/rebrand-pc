(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{359:function(t,a,e){"use strict";e.r(a);var _=e(8),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{id:"using-conference"}}),t._v(" "),a("h1",{attrs:{id:"управление-конференциеи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#управление-конференциеи"}},[t._v("#")]),t._v(" Управление конференцией")]),t._v(" "),a("locale-warning",{attrs:{lang:"es"}}),t._v(" "),a("p",{attrs:{id:"card-actions"}}),t._v(" "),a("h2",{attrs:{id:"управление-мероприятием-из-его-карточки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#управление-мероприятием-из-его-карточки"}},[t._v("#")]),t._v(" Управление мероприятием из его карточки")]),t._v(" "),a("p",[t._v("До начала конференции в "),a("RouterLink",{attrs:{to:"/user/personal-area/#conference-list"}},[t._v("её карточке")]),t._v(" вам будет доступен ряд возможностей (если вы являетесь её владельцем):")],1),t._v(" "),a("StdPic",{attrs:{id:"card_actions"}}),t._v(" "),a("ol",[a("li",[a("p",[t._v("Переход в "),a("RouterLink",{attrs:{to:"/user/analytics/#conference-analytics"}},[t._v("аналитику конференции")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Запуск мероприятия.")])]),t._v(" "),a("li",[a("p",[t._v("Подключение к конференции через "),a("RouterLink",{attrs:{to:"/user/conference-page/"}},[t._v("её страницу")]),t._v(" (для виртуальной комнаты) или добавление в календарь (для запланированной конференции).")],1)]),t._v(" "),a("li",[a("p",[t._v("Переход к "),a("RouterLink",{attrs:{to:"/user/conference-scheduling/"}},[t._v("редактированию конференции")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Удаление мероприятия.")])])]),t._v(" "),a("p",[t._v("Всем остальным участникам (в том числе ведущим) доступно только подключение к мероприятию (для виртуальной комнаты) или добавление в календарь (для запланированной конференции).")]),t._v(" "),a("p",[t._v("После начала конференции список возможностей изменится, и владелец сможет "),a("RouterLink",{attrs:{to:"/user/analytics/#conference-analytics"}},[t._v("просмотреть аналитику")]),t._v(", "),a("a",{attrs:{href:"#real-time-management"}},[t._v("перейти в расширенное управление")]),t._v(", "),a("a",{attrs:{href:"#change-pin-id"}},[t._v("задать или изменить PIN-код")]),t._v(".")],1),t._v(" "),a("p",{attrs:{id:"real-time-management"}}),t._v(" "),a("h2",{attrs:{id:"расширенное-управление-конференциеи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#расширенное-управление-конференциеи"}},[t._v("#")]),t._v(" Расширенное управление конференцией")]),t._v(" "),a("p",[t._v("Для запущенной конференции вы сможете "),a("a",{attrs:{href:"#remote-layout-management"}},[t._v("менять раскладку")]),t._v(" и "),a("a",{attrs:{href:"#remote-meeting-management"}},[t._v("управлять устройствами участников")]),t._v(" из личного кабинета прямо во время её проведения. Для этого используется специальный инструмент "),a("strong",[t._v("расширенного управления конференцией")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Эта возможность доступна в одном из следующих случаев:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("вы являетесь "),a("destination",{attrs:{source:"web"}},[a("a",{attrs:{href:"../../admin/users/#conference-roles",target:"_blank"}},[t._v("владельцем конференции")])]),a("destination",{attrs:{source:"pdf"}},[a("to-site",{attrs:{alias:"conference-roles"}},[t._v("владельцем конференции")])],1),t._v(";")],1)]),t._v(" "),a("li",[a("p",[t._v("вы являетесь ведущим конференции;")])]),t._v(" "),a("li",[a("p",[t._v("вы обладаете полномочиями оператора и как следствие автоматически стали ведущим конференции.")])])]),t._v(" "),a("p",[t._v("При этом для последних двух случаев вы должны быть подключены к ней в браузере (по WebRTC) или в клиентском приложении, и добавлены в список приглашённых участников до начала мероприятия, иначе вы не увидите конференцию в своём личном кабинете.")])]),t._v(" "),a("p",[t._v("Для перехода в расширенное управление конференцией выберите её в разделе "),a("interface",{attrs:{ru:"Запланированные",en:"Meetings"}}),t._v(" или "),a("interface",{attrs:{ru:"Виртуальные комнаты",en:"Virtual rooms"}}),t._v(" и в появившейся справа панели нажмите "),a("interface",{attrs:{ru:"Управление конференцией",en:"Conference manager"}}),t._v(".")],1),t._v(" "),a("p",[t._v("В новой вкладке откроется расширенное управление конференцией на "),a("a",{attrs:{href:"#remote-layout-management"}},[t._v("странице управления раскладками")]),t._v(". В правом верхнем углу страницы вы увидите название мероприятия и его длительность. По кнопке "),a("StdPic",{attrs:{id:"menu-button",gui:"true"}}),t._v(" доступно меню перехода к списку участников, а по кнопке "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(" — дополнительное меню (управление PIN, ID и пр.).")],1),t._v(" "),a("StdPic",{attrs:{id:"rtm-main"}}),t._v(" "),a("p",{attrs:{id:"remote-layout-management"}}),t._v(" "),a("h3",{attrs:{id:"настроика-раскладки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#настроика-раскладки"}},[t._v("#")]),t._v(" Настройка раскладки")]),t._v(" "),a("p",[t._v('Порядок отображения видеоокон для всех участников, которые должны попасть в раскладку (все для режима "все на экране" и докладчики для автоселектора или управляемого селектора) по умолчанию определяется следующим образом: видеоокна располагаются в порядке подключения слева направо сверху вниз начиная с левого верхнего угла.')]),t._v(" "),a("p",[t._v("В случае автоселектора управлять раскладками нет возможности (состав докладчиков "),a("to-site",{attrs:{alias:"smart-meeting-logic"}},[t._v("определяется автоматически")]),t._v("), потому вы сразу увидите список участников с кнопками для "),a("a",{attrs:{href:"#remote-meeting-management"}},[t._v("управления их устройствами")]),t._v(".")],1),t._v(" "),a("p",[t._v("Если раскладки ещё не настроены, то после перехода в расширенное управление конференцией вы увидите список для их добавления. Укажите режим раскладки, который вы хотите применить:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("для всех участников;")])]),t._v(" "),a("li",[a("p",[t._v("для SIP/H.323 участников и WebRTC;")])]),t._v(" "),a("li",[a("p",[t._v("индивидуальная раскладка — для конкретного участника конференции.")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Управление раскладками недоступно для режимов "),a("RouterLink",{attrs:{to:"/user/rights/#about-conference"}},[t._v("видеоурока и автоселектора")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("После этого вы перейдёте к панели управления раскладкой.")]),t._v(" "),a("StdPic",{attrs:{id:"rtm-layout-setting"}}),t._v(" "),a("ol",[a("li",[a("p",[t._v("Нажмите на каждое видеоокно и "),a("RouterLink",{attrs:{to:"/user/layouts/"}},[t._v("выберите его тип")]),t._v(" в появившемся справа меню, а для фиксированных окон укажите там конкретного участника для отображения. Вы можете переместить любое видеоокно с помощью мыши, а также выбрать его в качестве приоритетного с помощью двойного клика по нему.")],1)]),t._v(" "),a("li",[a("p",[t._v("В нижней части окна выберите тип раскладки, то есть расположение видеоокон.")])]),t._v(" "),a("li",[a("p",[t._v("Укажите количество видеоокон в раскладке.")])]),t._v(" "),a("li",[a("p",[t._v("Выберите расположение имён участников видеоконференции в их видеоокнах: вверху, внизу или не отображать.")])]),t._v(" "),a("li",[a("p",[t._v("Нажмите "),a("StdPic",{attrs:{id:"additional_layout_settings_button",gui:"true"}}),t._v(" для перехода в дополнительные настройки:")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("установка запрета изменений раскладки пользователями;")])]),t._v(" "),a("li",[a("p",[t._v("заполнение раскладки автоматически;")])]),t._v(" "),a("li",[a("p",[t._v("очистка раскладки, при этом количество и расположение видеоокон не изменятся;")])]),t._v(" "),a("li",[a("p",[t._v("удаление раскладки.")])])])])]),t._v(" "),a("p",[t._v("После установки и смены расположения видеоокон участников в раскладке нажмите "),a("interface",{attrs:{ru:"Применить",en:"Apply"}}),t._v(". В случае "),a("em",[a("strong",[t._v("управляемого селектора")])]),t._v(" добавленные в раскладку слушатели автоматически будут вызваны на трибуну.")],1),t._v(" "),a("p",[t._v("В верхней панели будет отображаться число оставшихся свободных трибун во всех раскладках, подробнее об этом читайте в "),a("RouterLink",{attrs:{to:"/user/layouts/#unique-window"}},[t._v("правилах переиспользования уникальных слотов")]),t._v(".")],1),t._v(" "),a("p",[t._v("Чтобы переключаться между всеми раскладками или добавить новую, в панели управления нажмите на кнопку "),a("interface",{attrs:{ru:"Раскладка",en:"Layout"}}),t._v(":")],1),t._v(" "),a("StdPic",{attrs:{id:"rtm-change-layout"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Участники конференции смогут "),a("to-site",{attrs:{alias:"discard-layout"}},[t._v("отклонить установленную вами раскладку")]),t._v(" и самостоятельно настроить её себе, если при установке раскладки в дополнительных настройках вы выберете "),a("interface",{attrs:{ru:"Разрешить пользователям изменять раскладку",en:"Enable users to change layout"}}),t._v(".")],1)]),t._v(" "),a("p",{attrs:{id:"rename-participant"}}),t._v(" "),a("h3",{attrs:{id:"как-переименовать-участника"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#как-переименовать-участника"}},[t._v("#")]),t._v(" Как переименовать участника")]),t._v(" "),a("p",[t._v("Для любого участника вы можете поменять отображаемую в видеоокне подпись. Она сохранится только для данной раскладки и не повлияет на имя пользователя в адресной книге.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("В видеоокне нужного участника нажмите на кнопку "),a("StdPic",{attrs:{id:"more-button",gui:"true"}}),t._v(" для перехода в "),a("a",{attrs:{href:"#remote-meeting-management"}},[t._v("дополнительное меню")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Выберите пункт "),a("interface",{attrs:{ru:"Изменить отображаемое имя",en:"Change display name"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Укажите новое имя в появившемся окне и нажмите "),a("interface",{attrs:{ru:"Сохранить",en:"Save"}}),t._v(".")],1)])]),t._v(" "),a("p",[t._v("Переименование также доступно при замене участника в видеоокне.")]),t._v(" "),a("p",{attrs:{id:"add-content-window"}}),t._v(" "),a("h3",{attrs:{id:"как-добавить-окно-для-контента"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#как-добавить-окно-для-контента"}},[t._v("#")]),t._v(" Как добавить окно для контента")]),t._v(" "),a("p",[t._v("Чтобы добавить в раскладку дополнительное видеоокно, где будет отображаться "),a("to-site",{attrs:{alias:"desktop-sharing"}},[t._v("демонстрируемый контент")]),t._v(" или "),a("to-site",{attrs:{alias:"content-sharing"}},[t._v("презентация")]),t._v(", просто выберите нужный слот и укажите ему тип "),a("interface",{attrs:{ru:"Контент",en:"Content"}}),t._v(".")],1),t._v(" "),a("p",{attrs:{id:"remote-meeting-management"}}),t._v(" "),a("h3",{attrs:{id:"управление-аудио-и-видеоустроиствами-участников"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#управление-аудио-и-видеоустроиствами-участников"}},[t._v("#")]),t._v(" Управление аудио и видеоустройствами участников")]),t._v(" "),a("p",[t._v("Управлять устройствами участников вы можете непосредственно после их "),a("a",{attrs:{href:"#remote-layout-management"}},[t._v("добавления в раскладку")]),t._v(", используя такие кнопки:")]),t._v(" "),a("p",[a("StdPic",{attrs:{id:"camera-button",gui:"true"}}),t._v(" — включить/отключить камеру")],1),t._v(" "),a("p",[a("StdPic",{attrs:{id:"microphone-button",gui:"true"}}),t._v(" — включить/отключить микрофон")],1),t._v(" "),a("p",[a("StdPic",{attrs:{id:"volume-control-button",gui:"true"}}),t._v(" — увеличить/уменьшить чувствительность микрофона (отображается по нажатию стрелки справа от него)")],1),t._v(" "),a("p",[a("StdPic",{attrs:{id:"more-button",gui:"true"}}),t._v(" — вызвать дополнительное меню, где можно:")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("удалить участника с трибуны или пригласить его выступить (только в управляемом селекторе);")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#rename-participant"}},[t._v("переименовать")]),t._v(" участника в раскладке;")])]),t._v(" "),a("li",[a("p",[t._v("заменить участника на другого в данном видеоокне;")])]),t._v(" "),a("li",[a("p",[t._v("перейти к настройке оборудования (камеры, устройств захвата и вывода звука, и уровня чувствительности микрофона);")])]),t._v(" "),a("li",[a("p",[t._v("назначить участника ведущим;")])]),t._v(" "),a("li",[a("p",[t._v("перейти к настройке индивидуальной раскладки для него;")])]),t._v(" "),a("li",[a("p",[t._v("увеличить или уменьшить его изображение (в раскладке с приоритетным видеоокном);")])]),t._v(" "),a("li",[a("p",[t._v("очистить видеоокно.")])])]),t._v(" "),a("p",[t._v("Для выбора нескольких участников вам потребуется применить раскладку и отметить каждого из них флажком в правом верхнем углу видеоокна. После этого в нижней части окна появится панель инструментов, где вы сможете отключить для них передачу видео и звука в конференцию, а также удалить их из неё. В режиме "),a("em",[a("strong",[t._v("управляемого селектора")])]),t._v(" дополнительно будет присутствовать кнопка для удаления с трибуны.")]),t._v(" "),a("StdPic",{attrs:{id:"rtm-select-participants"}}),t._v(" "),a("p",[t._v("Нажмите "),a("StdPic",{attrs:{id:"settings-layouts-button",gui:"true"}}),t._v(" рядом с названием конференции, если требуется скрыть кнопки управления участниками или отобразить список пользователей, ещё не добавленных в раскладку. При этом будут доступны такие же возможности управления каждым участником из списка:")],1),t._v(" "),a("StdPic",{attrs:{id:"rtm-no-layout"}}),t._v(" "),a("p",{attrs:{id:"participants-list"}}),t._v(" "),a("h3",{attrs:{id:"список-участников-конференции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#список-участников-конференции"}},[t._v("#")]),t._v(" Список участников конференции")]),t._v(" "),a("p",[t._v("Также вы можете перейти в полный список участников, нажав кнопку "),a("StdPic",{attrs:{id:"menu-button",gui:"true"}}),t._v(" и выбрав пункт "),a("interface",{attrs:{ru:"Список участников",en:"Participant List"}}),t._v(". В нём вы сможете удалять кого-то из конференции, "),a("a",{attrs:{href:"#add-user"}},[t._v("приглашать новых участников")]),t._v(" и "),a("a",{attrs:{href:"#remote-meeting-management"}},[t._v("управлять их устройствами")]),t._v(".")],1),t._v(" "),a("p",[t._v("Для возврата в управление раскладками нажмите кнопку "),a("StdPic",{attrs:{id:"menu-button",gui:"true"}}),t._v(" и выберите пункт "),a("interface",{attrs:{ru:"Раскладки",en:"Layouts"}}),t._v(". В режиме "),a("em",[a("strong",[t._v("управляемого селектора")])]),t._v(" дополнительно будут присутствовать кнопки для приглашения на трибуну "),a("StdPic",{attrs:{id:"invite_podium_button",gui:"true"}}),t._v(" и для удаления с неё "),a("StdPic",{attrs:{id:"leave_podium_button",gui:"true"}}),t._v(".")],1),t._v(" "),a("StdPic",{attrs:{id:"rtm-device-management-via-menu"}}),t._v(" "),a("p",[t._v("По кнопке "),a("StdPic",{attrs:{id:"settings-layouts-button",gui:"true"}}),t._v(" доступно изменение вывода в виде списка или плиток.")],1),t._v(" "),a("p",{attrs:{id:"add-user"}}),t._v(" "),a("h3",{attrs:{id:"добавление-участников-на-лету"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#добавление-участников-на-лету"}},[t._v("#")]),t._v(' Добавление участников "на лету"')]),t._v(" "),a("p",[t._v("Вы можете пригласить пользователей в уже идущую конференцию. Для этого перейдите в "),a("a",{attrs:{href:"#participants-list"}},[t._v("список участников")]),t._v(" и нажмите кнопку "),a("StdPic",{attrs:{id:"add_users",gui:"true"}}),t._v(" справа от строки поиска.")],1),t._v(" "),a("p",[t._v("Откроется окно добавления пользователей, где вы можете выбрать их точно так же, как и "),a("a",{attrs:{href:"#participants-tab"}},[t._v("при создании конференции")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Пригласить пользователей в конференцию можно также из окна управления раскладкой, если выбрано отображение списка участников, не добавленных в раскладку.")])]),t._v(" "),a("p",{attrs:{id:"conference-prolongation"}}),t._v(" "),a("h3",{attrs:{id:"продление-конференции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#продление-конференции"}},[t._v("#")]),t._v(" Продление конференции")]),t._v(" "),a("p",[t._v("Если при "),a("RouterLink",{attrs:{to:"/user/conference-scheduling/#main-tab"}},[t._v("создании "),a("strong",[t._v("запланированной")]),t._v(" конференции")]),t._v(" была активирована возможность её продления, то все ведущие смогут увеличить длительность мероприятия. Это можно будет сделать в расширенном управлении конференцией двумя способами:")],1),t._v(" "),a("StdPic",{attrs:{id:"conference_prolongation"}}),t._v(" "),a("ol",[a("li",[a("p",[t._v("В правом верхнем углу нажать кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(" и выбрать пункт "),a("interface",{attrs:{ru:"Продлить конференцию",en:"Extend conference time"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Если был активирован ещё флажок для уведомления о скором окончании мероприятия, то в нижней части окна управления будет отображено оповещение с кнопкой "),a("interface",{attrs:{ru:"Продлить",en:"Extend"}}),t._v(".")],1)])]),t._v(" "),a("p",{attrs:{id:"conference-info"}}),t._v(" "),a("h2",{attrs:{id:"информация-о-конференции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#информация-о-конференции"}},[t._v("#")]),t._v(" Информация о конференции")]),t._v(" "),a("p",[t._v("В разделе "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенного управления конференцией")]),t._v(" вы можете просмотреть данные о ней, нажав кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(" и выбрав пункт "),a("interface",{attrs:{ru:"Информация о конференции",en:"Conference details"}}),t._v(". Откроется окно с детальной информацией о мероприятии и кнопкой его завершения:")],1),t._v(" "),a("StdPic",{attrs:{id:"conference_info"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Адреса UDP Multicast и RTSP трансляции отображаются только если были настроены соответствующие параметры при создании конференции администратором в панели управления сервером. Для публичных конференций дополнительно отображается HTML-код виджета для его встраивания на свой сайт.")])]),t._v(" "),a("p",{attrs:{id:"change-pin-id"}}),t._v(" "),a("h2",{attrs:{id:"смена-pin-и-id-конференции-на-лету"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#смена-pin-и-id-конференции-на-лету"}},[t._v("#")]),t._v(' Смена PIN и ID конференции "на лету"')]),t._v(" "),a("p",[t._v("Для конференции прямо во время её проведения можно менять её PIN для входа и ID (уникальный идентификатор). Например, чтобы после входа приглашённых участников дополнительно защитить мероприятие от сторонних подключений. Данная возможность доступна в тех же случаях, что и переход в "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенное управление конференцией")]),t._v(".")]),t._v(" "),a("p",[t._v("Для смены PIN или ID:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Перейдите в "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенное управление конференцией")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Нажмите на кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Выберите нужный пункт и укажите новое значение PIN-кода или ID. При этом PIN-код можно сгенерировать автоматически и задать новый если он не был настроен.")])])]),t._v(" "),a("StdPic",{attrs:{id:"rtm-pin"}}),t._v(" "),a("p",[t._v("Владелец может задать PIN код также из "),a("a",{attrs:{href:"#card-actions"}},[t._v("карточки конференции")]),t._v(" в списке запланированных мероприятий или виртуальных комнат.")]),t._v(" "),a("p",{attrs:{id:"lock"}}),t._v(" "),a("h2",{attrs:{id:"запрет-входа-в-конференцию"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запрет-входа-в-конференцию"}},[t._v("#")]),t._v(" Запрет входа в конференцию")]),t._v(" "),a("p",[t._v("Ведущий конференции может временно или до её окончания запретить вход в неё новым участникам в любой момент её проведения. Для этого используйте один из способов:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("выберите идущую конференцию в списке в личном кабинете и нажмите в её карточке "),a("interface",{attrs:{ru:"Запретить вход",en:"Lock conference"}}),t._v(";")],1)]),t._v(" "),a("li",[a("p",[t._v("перейдите в "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенное управление конференцией")]),t._v(", нажмите на кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(" и выберите "),a("interface",{attrs:{ru:"Запретить вход",en:"Lock conference"}}),t._v(".")],1)])]),t._v(" "),a("p",[t._v("После активации запрета на вход в конференцию к ней")]),t._v(" "),a("ul",[a("li",[a("p",[a("em",[a("strong",[t._v("смогут")])]),t._v(" подключиться:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ведущие (в том числе владелец);")])]),t._v(" "),a("li",[a("p",[t._v("пользователи, которых явно добавит в мероприятие ведущий (в том числе из списка ранее приглашённых, но не подключившихся).")])])])]),t._v(" "),a("li",[a("p",[a("em",[a("strong",[t._v("не смогут")])]),t._v(" подключиться:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("авторизованные пользователи сервера, которых явно не пригласил ведущий после запрета входа;")])]),t._v(" "),a("li",[a("p",[t._v("пользователи, которые были добавлены в список приглашённых до начала конференции, но не успели подключиться до запрета входа;")])]),t._v(" "),a("li",[a("p",[t._v("гости (в случае публичной конференции).")])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("После каждого завершения конференции запрет на подключение сбрасывается на значение по умолчанию "),a("strong",[t._v("доступ разрешён")]),t._v(".")])]),t._v(" "),a("p",[t._v("Возврат возможности подключения осуществляется там же, где и запрет: с помощью пункта "),a("interface",{attrs:{ru:"Разрешить вход",en:"Unlock conference"}}),t._v(" в карточке конференции или в расширенном управлении ею.")],1),t._v(" "),a("p",{attrs:{id:"waiting-room"}}),t._v(" "),a("h2",{attrs:{id:"управление-комнатои-ожидания"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#управление-комнатои-ожидания"}},[t._v("#")]),t._v(" Управление комнатой ожидания")]),t._v(" "),a("p",[t._v("Ведущий конференции во время её проведения может управлять комнатой ожидания: включать её и отключать. Для этого:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Перейдите в "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенное управление конференцией")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Нажмите на кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("В зависимости от текущего состояния выберите пункт "),a("interface",{attrs:{ru:"Включить комнату ожидания",en:"Enable waiting room"}}),t._v(" или "),a("interface",{attrs:{ru:"Отключить комнату ожидания",en:"Disable waiting room"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("При отключении комнаты ожидания вы увидите окно, где потребуется выбрать действие для участников из неё: пригласить их в конференцию или отключить.")])])]),t._v(" "),a("StdPic",{attrs:{id:"rtm-waiting-room"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("После каждого завершения конференции состояние комнаты ожидания сбрасывается на значение, которое было указано на вкладке "),a("interface",{attrs:{ru:"Дополнительно",en:"Advanced"}}),t._v(" до старта конференции.")],1)]),t._v(" "),a("p",{attrs:{id:"recording"}}),t._v(" "),a("h2",{attrs:{id:"запись-конференции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запись-конференции"}},[t._v("#")]),t._v(" Запись конференции")]),t._v(" "),a("p",[t._v("Будучи владельцем конференции, вы можете активировать запись не только при её создании или редактировании, но и прямо во время её проведения. Для этого:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Перейдите в "),a("a",{attrs:{href:"#real-time-management"}},[t._v("расширенное управление конференцией")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Нажмите на кнопку "),a("StdPic",{attrs:{id:"info_button",gui:"true"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Выберите пункт "),a("interface",{attrs:{ru:"Запись конференции",en:"Recording"}}),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("В открывшемся окне активируйте процесс записи, или остановите ранее запущенный.")])]),t._v(" "),a("li",[a("p",[t._v("В случае если запись уже идёт, используйте кнопку "),a("StdPic",{attrs:{id:"recording_button",gui:"true"}}),t._v(" рядом с таймером длительности конференции.")],1)])]),t._v(" "),a("StdPic",{attrs:{id:"rtm-recording"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("Const",{attrs:{name:"empty-title"}})],1),t._v(" "),a("p",[t._v("Возможность записать конференцию будет доступна только если администратор вашего "),a("const",{attrs:{name:"product-server"}}),t._v(" настроил там соответствующий параметр.")],1)]),t._v(" "),a("toTopButton")],1)}),[],!1,null,null,null);a.default=v.exports}}]);