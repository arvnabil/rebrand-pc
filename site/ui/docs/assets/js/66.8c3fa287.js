(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{367:function(e,t,n){"use strict";n.r(t);var r=n(8),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",{attrs:{id:"reports"}}),e._v(" "),t("h1",{attrs:{id:"server-logs-reports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-logs-reports"}},[e._v("#")]),e._v(" Server logs (reports)")]),e._v(" "),t("locale-warning",{attrs:{lang:"es"}}),e._v(" "),t("p",[e._v("The "),t("interface",{attrs:{ru:"Отчеты",en:"Reports"}}),e._v(" section stores all information about user connections, calls, messages, and video conference recordings. Data can be filtered according to various parameters and downloaded in "),t("to-site",{attrs:{alias:"csv-page"}},[e._v("CSV format")]),e._v(". In the tables, time is displayed according to the time zone selected in the "),t("RouterLink",{attrs:{to:"/en/admin/start-settings/#preferences"}},[e._v("preferences menu")]),e._v(".")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[t("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),t("p",[e._v("Please note that the main log of "),t("const",{attrs:{name:"product-server"}}),e._v(" can be "),t("RouterLink",{attrs:{to:"/en/admin/start-settings/#server-log-files"}},[e._v("viewed")]),e._v(" in the "),t("interface",{attrs:{ru:"{Система}{Журнал сервера}",en:"{System}{Server log}"}}),e._v(" menu in the top right corner of the control panel.")],1)]),e._v(" "),t("p",[e._v("On the right side of some tables you can find a dashboard containing detailed information about any event that is selected in the table.")]),e._v(" "),t("p",{attrs:{id:"reports-table"}}),e._v(" "),t("p",[e._v("The table reports have common functions:")]),e._v(" "),t("StdPic",{attrs:{id:"report_table_hat"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("Filter entries.")])]),e._v(" "),t("li",[t("p",[e._v("Save a table in the CSV format (the export format can be selected in the "),t("RouterLink",{attrs:{to:"/en/admin/start-settings/#preferences"}},[e._v("preferences section")]),e._v(").Please note that in this case, you will save the selection obtained after applying filters and clicking on the "),t("interface",{attrs:{ru:"Поиск",en:"Search"}}),e._v(" button.")],1)]),e._v(" "),t("li",[t("p",[e._v("Deleting the user accounts selected through filtering. Please note that you will only delete the accounts that have been selected in the input fields, but not the ones that are currently displayed.")])]),e._v(" "),t("li",[t("p",[e._v("Sort entries by field values (click on any column name to change sorting order).")])])]),e._v(" "),t("p",{attrs:{id:"events-history-tab"}}),e._v(" "),t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("p",[e._v("The event log includes consecutive records of:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("All changes in the user status (authorization, offline, and others) and changes in the server state (start, shutdown, connection to AD/LDAP)")])]),e._v(" "),t("li",[t("p",[e._v("Revocation of a user`s PRO licenses due to one of these reasons:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("No PRO licenses were available when a user tried to join a group conference.")])]),e._v(" "),t("li",[t("p",[e._v("Revocation of a user’s PRO license (either permanent or temporary) as a result of "),t("RouterLink",{attrs:{to:"/en/admin/license/#pro-licenses-rules"}},[e._v("license redistribution after server restart or automatic revocation by timeout")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[e._v("A user`s temporary PRO license was revoked by the administrator (in the "),t("RouterLink",{attrs:{to:"/en/admin/info/#pro-licenses"}},[t("interface",{attrs:{ru:"{Панель управления}{ПРО-лицензии}",en:"{Dashboard}{PRO Licenses}"}}),e._v(" section")],1),e._v(").")],1)])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#conference-recordings-list-tab"}},[e._v("Deletion of video recordings")]),e._v(" by clicking on the "),t("StdPic",{attrs:{id:"gui/delete_record",gui:"true"}}),e._v(" button in the control panel")],1)]),e._v(" "),t("li",[t("p",[e._v("Deletion of entries from the logs in the "),t("interface",{attrs:{ru:"Отчёты",en:"Reports"}}),e._v(" section; in this case the event type in the "),t("interface",{attrs:{ru:"Событие",en:"Event"}}),e._v(" column will point to the corresponding subsection (check the "),t("a",{attrs:{href:"#events-types"}},[e._v("description below")]),e._v(").")],1)])]),e._v(" "),t("p",[e._v("If you click on an event in the table, you will be able to check several details, for example, what client application or IP was used to authorize. Besides, you can track changes in the user status.")]),e._v(" "),t("StdPic",{attrs:{id:"events_history"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General UI for working with the table ("),t("a",{attrs:{href:"#reports-table"}},[e._v("check the description above")]),e._v("). The "),t("interface",{attrs:{ru:"Событие",en:"Event"}}),e._v(" drop-down list can be used to select one or multiple event types for more flexible search and analysis.")],1)]),e._v(" "),t("li",[t("p",[e._v("Link to an active "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#users-tab"}},[e._v("user profile")]),e._v(".")],1),e._v(" "),t("p",{attrs:{id:"event-details"}})]),e._v(" "),t("li",[t("p",[e._v("Event details. Contains detailed information required for the "),t("to-site",{attrs:{alias:"required-logs"}},[e._v("technical support department")]),e._v(" to solve possible issues you may face. The most common event details:")],1),e._v(" "),t("ul",[t("li",[t("p",[t("interface",{attrs:{ru:"Пользователи:",en:"Users:"}}),e._v(" the list of users’ "),t("RouterLink",{attrs:{to:"/en/admin/users/#user-id"}},[t("Const",{attrs:{name:"user-id"}}),e._v("s")],1),e._v(" (displayed in multiple cases, e.g., if some users could not get a PRO license after these licenses were redistributed)")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"IP-адрес:",en:"IP address:"}}),e._v(" the IP address of the connected user")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Введенный логин:",en:"Entered login:"}}),e._v(" specified during an authorization attempt of a "),t("RouterLink",{attrs:{to:"/en/admin/users/#user-id"}},[t("Const",{attrs:{name:"user-id"}})],1),e._v(" user (if authorization fails, this information helps to determine that the user made a mistake in the login)")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Настоящий ID пользователя:",en:"Real user ID:"}}),e._v("an existing "),t("RouterLink",{attrs:{to:"/en/admin/users/#user-id"}},[t("Const",{attrs:{name:"user-id"}})],1),e._v(" involved in user authorization or another event")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"ID подключения:",en:"Endpoint ID:"}}),e._v(" the unique identifier of a connection, for more information follow the link which leads to the "),t("a",{attrs:{href:"#endpoints-tab"}},[t("interface",{attrs:{ru:"Подключения",en:"Endpoints"}}),e._v(" section")],1)],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Название приложения:",en:"Application name:"}}),e._v(" the name of the application that was used to log in to "),t("Const",{attrs:{name:"product-server"}})],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Способ аутентификации:",en:"Authentication method:"}}),e._v(" authentication method, such as username and password "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#registry-mode"}},[e._v("in Registry mode")]),e._v(", or the corresponding method for "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#auth-sso"}},[e._v("SSO login (NTLM, Kerberos)")]),e._v(" will be displayed")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Права пользователя:",en:"User rights:"}}),e._v(" a binary sequence for user's rights encryption")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Отображаемое имя:",en:"Display name:"}}),e._v(" displayed username")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Предыдущий статус:",en:"Previous status:"}}),e._v(" status of the user before the transition to the new value, takes one of the values: "),t("strong",[t("code",[e._v("-2")])]),e._v(" - inactive, "),t("strong",[t("code",[e._v("0")])]),e._v(" - offline, "),t("strong",[t("code",[e._v("1")])]),e._v(" - online, "),t("strong",[t("code",[e._v("2")])]),e._v(" - (busy) participating in a conference or video call, "),t("strong",[t("code",[e._v("5")])]),e._v(" - connected to the conference as its owner")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Новый статус:",en:"New status:"}}),e._v(" the status to which the user transitioned as a result of the event (has the same values as "),t("interface",{attrs:{ru:"Предыдущий статус:",en:"Previous status:"}}),e._v(").")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Описание:",en:"Description:"}}),e._v(" a detailed description of the event")],1)]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{ru:"Тип администратора:",en:"Administrator type:"}}),e._v(" the administrator's access level when an action is performed on his/her behalf, it may be either "),t("strong",[e._v("sysadmin")]),e._v(" (full access to the control panel) or "),t("strong",[e._v("security")]),e._v(" (limited access, check the "),t("RouterLink",{attrs:{to:"/en/admin/security-admin/"}},[e._v("description of "),t("Const",{attrs:{name:"security-server-group"}})],1),e._v(")")],1)]),e._v(" "),t("li",[t("p",[e._v("When an administrator deletes entries from report tables, additional fields will be displayed showing the number of deleted entries and additional details about the deleted rows (depending on the table type).")])]),e._v(" "),t("li",[t("p",[t("interface",{attrs:{all:"User agent:"}}),e._v(" the part of the HTTP request that includes information about the web application and the OS of the device which is being used to connect to the server.")],1)])])])]),e._v(" "),t("p",{attrs:{id:"events-types"}}),e._v(" "),t("h3",{attrs:{id:"description-of-event-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-of-event-types"}},[e._v("#")]),e._v(" Description of event types")]),e._v(" "),t("p",[e._v("Below you can find the list of all event types logged by "),t("const",{attrs:{name:"product-server"}}),e._v(" (some events can be either successful or unsuccessful, for example, authorization "),t("interface",{attrs:{all:"login"}}),e._v("):")],1),e._v(" "),t("table",[t("tr",[t("th",[e._v("Event Type")]),e._v(" "),t("th",[e._v("Description")])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"authorize"}})],1),e._v(" "),t("td",[e._v("\n            User authorization on "),t("const",{attrs:{name:"product-server"}}),e._v(" via SSO provider\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"login"}})],1),e._v(" "),t("td",[e._v("\n            Authorization of:\n            "),t("ul",[t("li",[e._v("a user by login and password in the client application or personal area in the browser")]),e._v(" "),t("li",[e._v("a "),t("const",{attrs:{name:"product-server"}}),e._v("administrator in the control panel")],1)])])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"logout"}})],1),e._v(" "),t("td",[e._v("\n            De-authorization (logout) of a user or server administrator\n        ")])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"lock"}})],1),e._v(" "),t("td",[e._v("\n            Locking a user account when an incorrect password is entered (see "),t("a",{attrs:{href:"../accounts/#block-settings"}},[e._v("account blocking settings")]),e._v(")\n        ")])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"unlock"}})],1),e._v(" "),t("td",[e._v("\n            Unlocking a user account by an administrator or after the timeout specified in "),t("a",{attrs:{href:"../accounts/#block-settings"}},[e._v("locking settings")])])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"activation"}})],1),e._v(" "),t("td",[e._v("\n            Activation of a user account (see the "),t("interface",{attrs:{ru:"Активный",en:"Active"}}),e._v(" checkbox in the "),t("a",{attrs:{href:"../accounts/#single-user-profile"}},[e._v("profile description")]),e._v(")\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"deactivation"}})],1),e._v(" "),t("td",[e._v("\n            Deactivation of a user account (see the "),t("interface",{attrs:{ru:"Активный",en:"Active"}}),e._v(" checkbox in the "),t("a",{attrs:{href:"../accounts/#single-user-profile"}},[e._v("profile description")]),e._v(")\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"status"}})],1),e._v(" "),t("td",[e._v("\n            User status change (online/offline, busy, owner, check the numeric values in the details description above in the "),t("a",{attrs:{href:"#events-history-tab"}},[e._v("events history tab")]),e._v(")\n        ")])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"connect"}})],1),e._v(" "),t("td",[e._v("\n            Connection of your "),t("const",{attrs:{name:"product-server"}}),e._v(" to an "),t("a",{attrs:{href:"../accounts/#ldap-mode"}},[e._v("LDAP server")])],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"disconnect"}})],1),e._v(" "),t("td",[e._v("\n            Loss of connection between your "),t("const",{attrs:{name:"product-server"}}),e._v(" with an "),t("a",{attrs:{href:"../accounts/#ldap-mode"}},[e._v("LDAP server")])],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_chat_messages"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#chat-history-tab"}},[t("interface",{attrs:{ru:"Сообщения чата",en:"Chat Messages"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_chat_messages_cascade"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#chat-history-tab"}},[t("interface",{attrs:{ru:"Сообщения чата",en:"Chat Messages"}}),e._v(" table")],1),e._v(" in case when the conference is deleted from "),t("a",{attrs:{href:"#call-history-tab"}},[e._v("call history")])])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_conferences"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#call-history-tab"}},[t("interface",{attrs:{ru:"История звонков",en:"Call History"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_connections"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#endpoints-tab"}},[t("interface",{attrs:{ru:"Подключения",en:"Endpoints"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_events"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#events-history-tab"}},[t("interface",{attrs:{ru:"Журнал событий",en:"Events"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_logs"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#settings-changing-history-tab"}},[t("interface",{attrs:{ru:"Изменения настроек",en:"Configuration Changes"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_video_recording"}})],1),e._v(" "),t("td",[e._v("\n            Deletion of records from the "),t("a",{attrs:{href:"#conference-recordings-list-tab"}},[t("interface",{attrs:{ru:"Записи конференций",en:"Conference Recordings"}}),e._v(" table")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"delete_video_recordings"}})],1),e._v(" "),t("td",[e._v("\n            Automated deletion of recordings from the "),t("a",{attrs:{href:"#conference-recordings-list-tab"}},[t("interface",{attrs:{ru:"Записи конференций",en:"Conference Recordings"}}),e._v(" table")],1),e._v(" after a timeout, set in the "),t("a",{attrs:{href:"../conferences/#conference-settings"}},[t("interface",{attrs:{ru:"{Групповые конференции} {Настройки}",en:"{Group Conferences} {Settings}"}}),e._v(" section")],1)])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"start"}})],1),e._v(" "),t("td",[t("const",{attrs:{name:"product-server"}}),e._v(" start\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"stop"}})],1),e._v(" "),t("td",[t("const",{attrs:{name:"product-server"}}),e._v(" stop\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"restart"}})],1),e._v(" "),t("td",[t("const",{attrs:{name:"product-server"}}),e._v(" restart\n        ")],1)]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"pro_license_limit"}})],1),e._v(" "),t("td",[e._v("\n            Revocation of a PRO license from a user due to one of these reasons:\n            "),t("ul",[t("li",[e._v("there was not enough PRO licenses when a user tried to join a group conference")]),e._v(" "),t("li",[e._v("user lost a PRO license (permanent or temporary) as a result of "),t("a",{attrs:{href:"../license/#pro-licenses-rules"}},[e._v("license redistribution after server restart or automatic revocation after a timeout")])])])])]),e._v(" "),t("tr",[t("td",[t("interface",{attrs:{all:"pro_license_revocation"}})],1),e._v(" "),t("td",[e._v("\n            Revocation of a temporary PRO license from a user by an administrator (in the "),t("a",{attrs:{href:"../info/#pro-licenses"}},[t("interface",{attrs:{ru:"{Панель управления}{ПРО-лицензии}",en:"{Dashboard}{PRO Licenses}"}}),e._v(" section")],1),e._v(")\n        ")])])]),e._v(" "),t("p",{attrs:{id:"call-history-tab"}}),e._v(" "),t("h2",{attrs:{id:"call-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-history"}},[e._v("#")]),e._v(" Call History")]),e._v(" "),t("p",[e._v("This section contains history of video calls and conferences hold on the server.")]),e._v(" "),t("p",[e._v("Please note that each time you start the same conference, a new conferencing session with its own identifier is initiated. This is relevant for scheduled recurring events or for virtual rooms. For this reason, there will be several entries in the call history table with details of each independent conferencing session.")]),e._v(" "),t("p",{attrs:{id:"call-history-main-list"}}),e._v(" "),t("h3",{attrs:{id:"call-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-list"}},[e._v("#")]),e._v(" Call list")]),e._v(" "),t("p",[e._v("On the main page of the section you can see the table where you can select a particular meeting. Besides the call history, the list also contains information about active sessions. The "),t("interface",{attrs:{ru:"Окончание",en:"End"}}),e._v(" field remains blank for current conferences.")],1),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[t("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),t("p",[e._v("When deleting data, the following records will be ignored and remain in the table:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("sessions that have not yet ended;")])]),e._v(" "),t("li",[t("p",[e._v("sessions that have "),t("a",{attrs:{href:"#conference-recordings-list-tab"}},[e._v("server-side recordings")]),e._v(".")])])]),e._v(" "),t("p",[e._v("Other rows will be successfully deleted from the table. In addition, messages for each conference in the "),t("a",{attrs:{href:"#chat-history-tab"}},[t("interface",{attrs:{ru:"Сообщения чата",en:"Chat Messages"}})],1),e._v(" section will also be deleted.")])]),e._v(" "),t("StdPic",{attrs:{id:"call_history_main"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General table interface ("),t("a",{attrs:{href:"#reports-table"}},[e._v("see the description above")]),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Link to the "),t("a",{attrs:{href:"#call-history-single-conference"}},[e._v("page with detailed information")]),e._v(" about a session.")])]),e._v(" "),t("li",[t("p",[e._v("Link to a "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#users-tab"}},[e._v("profile")]),e._v(" of the conference or call owner.")],1)]),e._v(" "),t("li",[t("p",[e._v("If this session has a parent server-side conference (not created ad hoc in the client application), you can find it in the "),t("RouterLink",{attrs:{to:"/en/admin/conferences/#conferences-list-tab"}},[e._v("general list")]),e._v(".")],1)])]),e._v(" "),t("p",{attrs:{id:"call-history-single-conference"}}),e._v(" "),t("h3",{attrs:{id:"session-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-information"}},[e._v("#")]),e._v(" Session information")]),e._v(" "),t("p",[e._v("Click on the session ID in the general table to view information about the selected conferencing session, including:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("information about time and owner of the conference")])]),e._v(" "),t("li",[t("p",[e._v("list of what time the participant was attending the conference")])]),e._v(" "),t("li",[t("p",[e._v("general media streams quality technical data")])]),e._v(" "),t("li",[t("p",[e._v("history of conference invitations and accepted/rejected video calls")])]),e._v(" "),t("li",[t("p",[e._v("Sending files.")])])]),e._v(" "),t("StdPic",{attrs:{id:"single_conference_info"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General table interface ("),t("a",{attrs:{href:"#reports-table"}},[e._v("see the description above")]),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Conference "),t("a",{attrs:{href:"#chat-history-tab"}},[e._v("chat")]),e._v(" button.")])]),e._v(" "),t("li",[t("p",[e._v("Link to "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#users-tab"}},[e._v("user profiles")]),e._v(" of participants and invited users.")],1)]),e._v(" "),t("li",[t("p",[e._v("If this session has a parent server-side conference (not created ad hoc in the client application), you can find it in the "),t("RouterLink",{attrs:{to:"/en/admin/conferences/#conferences-list-tab"}},[e._v("general list")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[e._v("Link to the pages with each conference participant "),t("a",{attrs:{href:"#call-history-single-connection"}},[e._v("connection details")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("The list of files sent to the conference chat. When any of the files is clicked, the download page will open.")])]),e._v(" "),t("li",[t("p",[e._v("The button for deleting a file from the server.")])])]),e._v(" "),t("p",[e._v("The number in the "),t("interface",{attrs:{ru:"Участники",en:"Participants"}}),e._v(" column of the first table indicates the number of different participants (including those ones connected from different devices). In its turn, the number in the "),t("interface",{attrs:{ru:"Список участников",en:"Participant List"}}),e._v(" table (check the line "),t("interface",{attrs:{ru:"Всего",en:"Total"}}),e._v(") and the list itself correspond to all "),t("strong",[e._v("connection")]),e._v(" events during the conference. Moreover, these numbers may differ. In the example above, we see that at least one user "),t("interface",{attrs:{ru:"Николай Томилин",en:"Carla Devine"}}),e._v(" joined twice.")],1),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[t("Const",{attrs:{name:"empty-title"}})],1),e._v(" "),t("p",[e._v("Please note that the use of "),t("RouterLink",{attrs:{to:"/en/admin/extensions/#udp-multicast"}},[e._v("UDP Multicast")]),e._v(" in this session can be specified in brackets in the "),t("interface",{attrs:{ru:"Режим",en:"Mode"}}),e._v(" column (not used in the example above).")],1)]),e._v(" "),t("p",[e._v("A server address can be specified as a user in the rows of the "),t("interface",{attrs:{ru:"Список приглашенных",en:"Invite List"}}),e._v(" table. This means that in these rows, the call to the users from the "),t("interface",{attrs:{ru:"Получатель",en:"Participants"}}),e._v(" column was initiated by the server at the conference start. If a "),t("const",{attrs:{name:"server-name"}}),e._v(" user is indicated as the inviting party, it means that this person invited the participant when the conference had already started. If any of the participants joined the conference on their own, there will be no inviting user (the corresponding table row will not be included).")],1),e._v(" "),t("p",{attrs:{id:"call-history-single-connection"}}),e._v(" "),t("h3",{attrs:{id:"connection-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection-properties"}},[e._v("#")]),e._v(" Connection properties")]),e._v(" "),t("p",[e._v("Here you can view all connection details to a given conferencing session for each user (e.g., the client application version, operating system and CPU). The example below shows some of these parts:")]),e._v(" "),t("StdPic",{attrs:{id:"single_call_connection_properties"}}),e._v(" "),t("p",{attrs:{id:"chat-history-tab"}}),e._v(" "),t("h2",{attrs:{id:"chat-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chat-messages"}},[e._v("#")]),e._v(" Chat Messages")]),e._v(" "),t("p",[t("interface",{attrs:{ru:"Сообщения чата",en:"Chat Messages"}}),e._v(" section features all messages sent by "),t("Const",{attrs:{name:"product-server"}}),e._v(" users both in personal chats and group conference chats. Please note that the table contains time sorted messages from all users at once (you can change sorting features in the table header). To view messages in personal or group chat, you can filter them by "),t("interface",{attrs:{ru:"Отправитель",en:"Sender"}}),e._v(", "),t("interface",{attrs:{ru:"Получатель",en:"Recipient"}}),e._v(", "),t("interface",{attrs:{ru:"ID сессии",en:"Session ID"}}),e._v(", and message date.")],1),e._v(" "),t("StdPic",{attrs:{id:"chat_history"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General table interface ("),t("a",{attrs:{href:"#reports-table"}},[e._v("see the description above")]),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Links to "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#users-tab"}},[e._v("user profiles")]),e._v(" of the sender and recipient of a private message.")],1)]),e._v(" "),t("li",[t("p",[e._v("Link to a "),t("a",{attrs:{href:"#call-history-single-conference"}},[e._v("page with detailed information")]),e._v(" about the session to the common chat of which a message was sent.")])])]),e._v(" "),t("p",{attrs:{id:"settings-changing-history-tab"}}),e._v(" "),t("h2",{attrs:{id:"configuration-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-changes"}},[e._v("#")]),e._v(" Configuration Changes")]),e._v(" "),t("p",[e._v("In this section, one can view the log of the following changes:")]),e._v(" "),t("ul",[t("li",[t("p",[t("const",{attrs:{name:"product-server"}}),e._v(" settings")],1)]),e._v(" "),t("li",[t("p",[e._v("List of conferences stored on the server")])]),e._v(" "),t("li",[t("p",[e._v("Changes in the parameters from the "),t("RouterLink",{attrs:{to:"/en/admin/info/#pro-licenses"}},[t("interface",{attrs:{ru:"{Панель управления}{ПРО-лицензии}",en:"{Dashboard}{PRO Licenses}"}})],1),e._v(" section, including the cases when PRO licenses were manually redistributed by the administrator")],1)]),e._v(" "),t("li",[t("p",[e._v("Settings of user groups and separate user accounts (available only in "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#regisry-mode"}},[e._v("Registry storage mode")]),e._v(").")],1)])]),e._v(" "),t("p",[e._v("Every entry in the table corresponds to a certain change. If you click on an entry, the panel on the right will display the server settings before and after this change.")]),e._v(" "),t("StdPic",{attrs:{id:"changing_settings_history"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General table interface ("),t("a",{attrs:{href:"#reports-table"}},[e._v("see the description above")]),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Name of the modified parameter.")])]),e._v(" "),t("li",[t("p",[e._v("Parameter values: "),t("span",{staticStyle:{color:"red"}},[t("strong",[e._v("previous")])]),e._v(" (before change) -> "),t("span",{staticStyle:{color:"green"}},[t("strong",[e._v("new")])]),e._v(" (after change).")])])]),e._v(" "),t("p",[e._v("For example, the picture above illustrates an event involving some changes in the conference settings. The following parameters were changed:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Name ("),t("code",[e._v("topic")]),e._v(" parameter )")])]),e._v(" "),t("li",[t("p",[e._v("Schedule settings ("),t("code",[e._v("schedule")]),e._v(" parameter)")])]),e._v(" "),t("li",[t("p",[e._v("Conference registration settings ("),t("code",[e._v("registration")]),e._v(" parameter).")])])]),e._v(" "),t("p",{attrs:{id:"conference-recordings-list-tab"}}),e._v(" "),t("h2",{attrs:{id:"conference-recordings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conference-recordings"}},[e._v("#")]),e._v(" Conference Recordings")]),e._v(" "),t("p",[e._v("This section contains a list of recorded conferences. Here you can playback, download or delete their records.")]),e._v(" "),t("p",[e._v("The parameters for storing conference recordings are set in a "),t("RouterLink",{attrs:{to:"/en/admin/info/#recording-tab"}},[e._v("different section, "),t("interface",{attrs:{ru:"Записи",en:"Recordings"}})],1),e._v(".")],1),e._v(" "),t("StdPic",{attrs:{id:"recordings_list"}}),e._v(" "),t("ol",[t("li",[t("p",[e._v("General table interface ("),t("a",{attrs:{href:"#reports-table"}},[e._v("see the description above")]),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Link to the "),t("a",{attrs:{href:"#call-history-single-conference"}},[e._v("page with detailed information")]),e._v(" about a session.")])]),e._v(" "),t("li",[t("p",[e._v("Go to the conference card in the "),t("RouterLink",{attrs:{to:"/en/admin/conferences/#conferences-list-tab"}},[e._v("general list")])],1)]),e._v(" "),t("li",[t("p",[e._v("Playback button")])]),e._v(" "),t("li",[t("p",[e._v("Recording download button")])]),e._v(" "),t("li",[t("p",[e._v("Delete button.")])])]),e._v(" "),t("p",[e._v("Point-to-point video calls will be named "),t("interface",{attrs:{ru:"(без названия)",en:"(no title)"}}),e._v(".")],1),e._v(" "),t("p",[e._v("You can use the "),t("StdPic",{attrs:{id:"gui/play_btn",gui:"true"}}),e._v(" button to playback recorded conferences with chat synchronization (for group conferences only):")],1),e._v(" "),t("StdPic",{attrs:{id:"recording_playback"}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Can the video recorded with "),t("Const",{attrs:{name:"product-server"}}),e._v(" be played using third-party programs?")],1),e._v(" "),t("p",[e._v("Yes, it can. In order to do it you will need to download and install a media player with VP8 video codec support, e.g. "),t("a",{attrs:{href:"https://www.videolan.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VLC"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can also upload any of your recordings to YouTube to share with your colleagues.")])]),e._v(" "),t("p",{attrs:{id:"endpoints-tab"}}),e._v(" "),t("h2",{attrs:{id:"endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[e._v("#")]),e._v(" Endpoints")]),e._v(" "),t("p",[e._v("This section provides information about user endpoints. This information can be useful for "),t("strong",[e._v("real time")]),e._v(" technical support.")]),e._v(" "),t("StdPic",{attrs:{id:"connections"}}),e._v(" "),t("p",[e._v("Use the quick search field to filter records by any of the parameters. The search is case-insensitive and can be performed for all fields (the table is filtered and you can see only those records that have at least one field with the entered string). It is possible to combine multiple searches. For example, to display only guest connections from the browser, search for "),t("em",[t("strong",[e._v("webclient guest")])]),e._v(".")]),e._v(" "),t("p",[e._v("If you click on an entry in the "),t("interface",{attrs:{ru:"Подключение",en:"Endpoint"}}),e._v(" column, you will see the page "),t("a",{attrs:{href:"#call-history-single-connection"}},[e._v("providing detailed information about the connection of the selected user")]),e._v(" (we have discussed this page previously). In turn, by clicking on the field in the "),t("interface",{attrs:{ru:"Авторизованный пользователь",en:"Logged User"}}),e._v(" column that contains "),t("const",{attrs:{name:"user-id"}}),e._v(" of the selected "),t("const",{attrs:{name:"product-server"}}),e._v(" user, you will open the corresponding "),t("RouterLink",{attrs:{to:"/en/admin/accounts/#single-user-profile"}},[e._v("profile page")]),e._v(".")],1),e._v(" "),t("p",[e._v("The absence of data about the authenticated user in the connection string indicates that this user has already left the meeting (e.g., if a guest participated in the conference from a browser and then closed the conference page).")]),e._v(" "),t("p",[e._v("It is possible to delete recordings made earlier than the selected date. To do it, click on the "),t("StdPic",{attrs:{id:"gui/delete_record",gui:"true"}}),e._v(" button and specify the number of days for storing information (180 days by default):")],1),e._v(" "),t("StdPic",{attrs:{id:"connections_delete"}}),e._v(" "),t("p",{attrs:{id:"events-leading"}}),e._v(" "),t("h3",{attrs:{id:"events-that-update-device-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events-that-update-device-information"}},[e._v("#")]),e._v(" Events that update device information")]),e._v(" "),t("table",[t("tr",[t("th",[e._v("\n            Event\n        ")]),e._v(" "),t("th",{attrs:{width:"30%"}},[e._v("\n            Variable Fields\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            Connecting or reconnecting device to the server\n        ")]),e._v(" "),t("td",[t("ul",[t("li",[e._v("Network Info Type")]),e._v(" "),t("li",[e._v("Audio Capture")]),e._v(" "),t("li",[e._v("Audio Render")]),e._v(" "),t("li",[e._v("Video Capture")]),e._v(" "),t("li",[e._v("Direct X")]),e._v(" "),t("li",[e._v("Hardware Config")])])])]),e._v(" "),t("tr",[t("td",[e._v("\n            Conference end\n        ")]),e._v(" "),t("td",[e._v("\n            Last Conf Name\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            Taking network test (by clicking a corresponding button in the client application)\n        ")]),e._v(" "),t("td",[e._v("\n            Network Test\n        ")])]),e._v(" "),t("tr",[t("td",[e._v("\n            Authorization on the server\n        ")]),e._v(" "),t("td",[e._v("\n            System information\n        ")])])]),e._v(" "),t("toTopButton")],1)}),[],!1,null,null,null);t.default=a.exports}}]);