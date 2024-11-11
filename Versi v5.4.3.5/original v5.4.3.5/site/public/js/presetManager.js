(function ($) {

    var presetManagerPlugin = function () {
    };

    presetManagerPlugin.prototype.init = function (items) {
        if (items !== undefined && typeof items === 'object' && items !== null) {
            $.extend(true, std_obj, items);
        }
    };

    presetManagerPlugin.prototype.bind = function (params, container) {
        return container.presetManagerPlugin(params);
    };

    presetManagerPlugin.prototype.setConferencePlugin = function (conferencePlugin) {
        obj.plugins.conferencePlugin = conferencePlugin;
    };

    $.presetManagerPlugin = new presetManagerPlugin();

    var std_obj = {

            dialogContainer: null,
            prefix: 'prst',
            popupHeight: $(window).height() - $(window).height() * 40 / 100,
            confPage: false,
            adminEmail: null,
            region: 'ru',
            presetList: {},

            logo: {
                cdnvideo: '/images/cdnvideo.jpg',
                wowza: '/images/wowza.png',
                youtube: '/images/youtube.png'
            },

            wowzaInstructionLink: null,
            youtubeInstructionLink: null,

            rtsp: {
                status: false,
                allowed: true,
                announce: false,
                inactiveReceiverTimeout: 60,
                rtpOverTcp: 0,
                defaultVideoCodec: 'H264',
                defaultAudioCodec: 'MP3',
                retires: 0,
                retryDelay: 10,
                preset: null,
                announceURL: null,

                videoCodecList: {
                    H264: 'H264',
                    VP8: 'VP8'
                },

                audioCodecList: {
                    MP3: 'MP3',
                    PCM: 'L16',
                    G711U: 'G711Ulaw64k',
                    G711A: 'G711Alaw64k',
                    AAC: 'AAC'
                }
            },

            locale: {
                publishFromCDNvideoTitle: 'Вещание через облако CDNVideo',
                publishFromCDNvideoDesc: 'Ведущий отечественный сервис по доставке контента и организации трансляций. Мы автоматически создадим для вас учётную запись и всё настроим. Обратите внимание, что услуга трансляции предоставляется согласно условиям использования и тарифам сервиса CDNvideo.',
                otherServiceTitle: 'Вещание через сторонние сервисы и продукты',
                otherServiceDesc: 'Мы подготовили несколько шаблонов настроек для организации трансляции через другие популярные решения. Выберите подходящий для вас вариант и следуйте инструкциям.',
                manualSettingsTitle: 'Ручная настройка',
                manualSettingsDesc: 'Если вы не боитесь аббревиатур RTSP Push или RTSP Pull, то вам сюда. Весь процесс настройки вещания в ваших руках.',
                autoSetting: 'Настроить автоматически',
                createCDNvideoAccount: 'Создать новую учетную запись автоматически',
                existCDNvideoAccount: 'У меня уже есть аккаунт',
                login: 'Логин',
                password: 'Пароль',
                publishUrl: 'URL Publish',
                hostServer: 'Host Server',
                primaryServer: 'Primary Server',
                hostPort: 'Host Port',
                application: 'Application',
                streamName: 'Stream Name',
                textTune: 'Настроить',
                textAddConfig: 'Добавить конфигурацию',
                textShowAddSettings: 'Показать дополнительные настройки',
                textHideAddSettings: 'Скрыть дополнительные настройки',
                btnCreate: 'Создать',
                btnSave: 'Сохранить',
                btnDelete: 'Удалить',
                btnCancel: 'Отмена',
                btnBack: '&#8592;&nbsp;Назад',
                btnAddPreset: 'Добавить шаблон',
                textServiceStream: 'Сервис вещания:',
                textInstruction: 'Следуйте нашей инструкции',
                textOnlyInConfPage: 'Вещание данным способом необходимо настраивать индивидуально для каждой видеоконференции.',
                textPullOnlyInConfPage: 'Вещание данным способом необходимо настраивать индивидуально для каждой видеоконференции. Здесь вы можете задать дополнительные настройки.',
                textCopyLink: 'Скопируйте ссылку на трансляцию:',
                textConfiguration: 'Конфигурация',
                entryHostServer: 'Введите Host-Server',
                entryHostPort: 'Введите Host-Port',
                entryApplication: 'Введите Application',
                entryStreamName: 'Введите Stream-Name',
                entryLogin: 'Введите логин',
                entryPassword: 'Введите пароль',
                entryPublishUrl: 'Введите URL Publish',
                manualPush: 'Ручная настройка - Publish',
                manualPull: 'Ручная настройка - Pull',
                videoCodec: 'Видеокодек',
                audioCodec: 'Аудиокодек',
                rtpOverTcp: 'Отправить исходящие RTP потоки через TCP',
                inactiveReceiverTimeout: 'Время ожидания ответа от сервера:',
                retries: 'Количество повторных попыток',
                retryDelay: 'Задержка повторных попыток',
                streaming: 'Вещание',
                presetList: 'Список шаблонов',
                emailEntryCDN: 'На данный e-mail будет заведена запись в сервисе CDN:',
                textCDNvideoAgree: 'Нажимая кнопку "Создать", я принимаю <a href="http://cdnvideo.ru/docs/Dogovor_oferta_CDNvideo.pdf" target="_blank">правила пользования сервисом</a>',
                errorField: 'Неверный формат поля <b>%s</b>',
                titleCreateNewConfig: 'Создать новую конфигурацию',
                titleSelectConfig: 'Выбрать конфигурацию для вещания',
                textStreamingConfiguration: 'Конфигурация для вещания:',
                textConfigurationAlreadyExists: 'Данная конфигурация уже существует',
                selectedPreset: 'Выбран шаблон',
                btnApply: 'Применить',
                btnDisable: 'Отключить вещание',
                btnClose: 'Закрыть',
                textConfigStream: 'Конфигурация для вещания:',
                addNewConfig: 'Добавить новую конфигурацию',
                outsideBroadcasting: 'Вещать на внешней странице конференции',
                usePlayerCode: 'Вы можете использовать код плеера для вещания на вашем сайте.',
                CDNvideoPlayerBlock: 'HTML-код плеера',
                CDNvideoIframe: 'HTML для встраивания',
                textTurnOn: 'Включить',
                textChangeCnf: 'Изменить настройки конфигурации',
                textCopyStreamLink: 'Скопируйте ссылку на трансляцию:',
                authentication: 'Аутентификация',
                templateName: 'Название шаблона',
                textWowzaServerHelp: 'Название трансляции в панели управления Wowza будет соответствовать ID конференции',
                textWowzaCloudHelp: 'Данный шаблон трансляции может быть использован только в одной из одновременно запущенных конференций',
                textNotAvailablePlayerCode: 'HTML-код плеера станет доступен после создания конференции',
                question: 'Вопрос',
                presetWillBeDeleted: 'Шаблон будет <b>удалён</b>. Вы уверены?',
                serverUrl: 'URL-адрес сервера',
                streamKey: 'Название/ключ трансляции'
            },

            handlers: {
                savePreset: '/admin/conferences/savePreset',
                deletePreset: '/admin/conferences/deletePreset',
                createCDNvideoAccount: '/admin/conferences/createCDNvideoAccount',
                getPresetList: '/admin/conferences/getPresetList',
                prepareCDNvideoPresetsState: '/admin/conferences/prepareCDNvideoPresetsState',
                checkCDNvideoAccountExist: '/admin/conferences/checkCDNvideoAccountExist',
                getCDNvideoIframe: '/admin/handler/getCDNvideoIframe'
            },

            plugins: {
                conferencePlugin: null
            },

            init: function (onInit, onFailInit) {
                obj = this;

                this.presetTools.getPresetList(onInit, onFailInit);
            },

            main: function () {

                return obj.containers.get();
            },

            containers: {
                _rendered: null,

                /**
                 * Возвращает основной контейнер плагина
                 */
                get: function () {
                    if (obj.containers._rendered === null) {
                        obj.containers._rendered = obj.containers._render();
                    }

                    return obj.containers._rendered;
                },

                _render: function () {
                    var container = $('<div id="presetManager"></div>');

                    obj.containers.streamingDialog.get();

                    if (!obj.confPage) {
                        var presetList = obj.presetTools.renderPresetList();
                        container.append(presetList);
                    } else {
                        obj.rtsp.preset = obj.plugins.conferencePlugin.rtsp.preset;
                        container.append(obj.containers.presetBroadcast.get());
                    }

                    return container;
                },

                // <editor-fold defaultstate="collapsed" desc="streamingDialogForm">
                streamingDialog: {
                    _dialogContainer: null,
                    _rendered: null,

                    get: function () {
                        if (obj.containers.streamingDialog._rendered === null) {
                            obj.containers.streamingDialog._rendered = obj.containers.streamingDialog._render();
                        }

                        return obj.containers.streamingDialog._rendered;
                    },

                    _render: function () {
                        obj.containers.streamingDialog._dialogContainer = $('<div>');
                        obj.containers.streamingDialog._dialogContainer.append(obj.containers.streamingDialog.main());
                        obj.containers.streamingDialog._dialogContainer.dialog({
                            title: obj.locale.streaming,
                            autoOpen: false,
                            modal: false,
                            draggable: true,
                            resizable: false,
                            dialogClass: "presetManager",
                            width: 750,
                            height: 550
                        });

                        return obj.containers.streamingDialog._dialogContainer;
                    },

                    main: function () {
                        var container = $('<div>');

                        container.append(obj.containers.initCDNvideoBlock());
                        container.append(obj.containers.initOtherServiceBlock());
                        container.append(obj.containers.initManualBlock());

                        return container;
                    },

                    close: function () {
                        obj.containers.streamingDialog._dialogContainer.dialog("close");
                    },

                    open: function () {
                        obj.containers.streamingDialog._dialogContainer.dialog("open");
                    }
                },

                initCDNvideoBlock: function () {
                    var container = $('<div>', {id: 'cdnvideo-stream-form', 'class': 'stream-block'});
                    var title = $('<h2>').text(obj.locale.publishFromCDNvideoTitle);

                    var table = $('<table>');
                    var tr = $('<tr>');

                    tr.append(
                        $('<td>', {'style': 'width:90px'})
                            .append($('<img>', {src: obj.logo.cdnvideo, 'class': 'CDNvideoLogo'}))
                    );

                    tr.append(
                        $('<td>').text(obj.locale.publishFromCDNvideoDesc)
                    );

                    var btn = $('<input>', {type: "button", value: obj.locale.autoSetting}).addClass('btn cdnvideo');
                    var a = $('<a>', {href: '#'}).text(obj.locale.existCDNvideoAccount);

                    tr.append($('<td>').append(btn)
                        .append($('<div>', {'class': 'cdn-already-exist'}).append(a)));

                    a.click(function () {
                        obj.containers.CDNvideoAuthForm.init().dialog('open');
                    });

                    btn.click(function () {
                        obj.containers.CDNvideoRegForm.init().dialog('open');
                    });

                    table.append(tr);

                    container.append(title)
                        .append(table);

                    return container;
                },

                initOtherServiceBlock: function () {
                    var container = $('<div>', {id: 'other-stream-form', 'class': 'stream-block'});
                    var title = $('<h2>').text(obj.locale.otherServiceTitle);

                    var table = $('<table>');
                    var tr = $('<tr>');

                    var td_logo = $('<td>', {'class': 'logo'}).append($('<img>', {src: obj.logo.wowza, width: 90}))
                        .append($('<img>', {src: obj.logo.youtube, width: 90}));

                    tr.append(td_logo);

                    tr.append($('<td>', {'class': 'desc'}).text(obj.locale.otherServiceDesc));

                    var btn = $('<input>', {type: 'button', value: obj.locale.textAddConfig, 'class': 'btn'});
                    tr.append($('<td>').append(btn));

                    btn.click(function () {
                        obj.containers.wowzaServerForm.init().dialog('open');
                    });

                    table.append(tr);

                    container.append(title)
                        .append(table);

                    return container;
                },

                initManualBlock: function () {
                    var container = $('<div>', {id: 'manual-stream-form', 'class': 'stream-block'});
                    var title = $('<h2>').text(obj.locale.manualSettingsTitle);

                    var table = $('<table>');
                    var tr = $('<tr>');
                    tr.append('<td>', {colspan: 2, 'class': 'desc'}).text(obj.locale.manualSettingsDesc);

                    var btn = $('<input>', {type: 'button', value: obj.locale.textTune, 'class': 'btn'});
                    tr.append($('<td>').append(btn));

                    table.append(tr);

                    container.append(title);
                    container.append(table);

                    btn.click(function () {
                        obj.containers.manualPushForm.init().dialog('open');
                    });

                    return container;
                },
                // </editor-fold>

                // <editor-fold defaultstate="collapsed" desc="Broadcast on conference page">
                presetBroadcast: {
                    _button: null,
                    _rendered: null,

                    get: function () {
                        if (obj.containers.presetBroadcast._rendered === null) {
                            obj.containers.presetBroadcast._rendered = obj.containers.presetBroadcast.init();
                        }

                        return obj.containers.presetBroadcast._rendered;
                    },

                    init: function () {
                        var content = $('<div>');
                        var button = $('<a>', {href: '#', id: 'selectPreset'});
                        var playerCodeBlock = obj.containers.presetBroadcast.playerCode.get();
                        obj.containers.presetBroadcast.playerCode.hide();

                        if (obj.rtsp.preset && obj.presetList[obj.rtsp.preset]) {
                            var presetTitle = obj.presetTools.getPresetTitle(obj.rtsp.preset);
                            button.text(obj.locale.selectedPreset + ' ' + presetTitle);

                            button.click(function () {
                                obj.containers.presetSelect.init().dialog('open');
                            });

                            if (obj.presetList[obj.rtsp.preset].provider_type === obj.containers.CDNvideoAuthForm._provider) {
                                obj.containers.presetBroadcast.playerCode.show();
                            }
                        } else {
                            button.text(obj.locale.textTurnOn);

                            button.click(function () {
                                if ($.isEmptyObject(obj.presetList)) {
                                    obj.containers.streamingDialog.open();
                                } else {
                                    obj.containers.presetSelect.init().dialog('open');
                                }
                            });
                        }

                        obj.containers.presetBroadcast._button = button;

                        content.append(button)
                            .append(playerCodeBlock);

                        return content;
                    },

                    playerCode: {
                        _rendered: null,
                        _link: null,
                        _container: null,

                        get: function () {
                            if (obj.containers.presetBroadcast.playerCode._rendered === null) {
                                obj.containers.presetBroadcast.playerCode._rendered = obj.containers.presetBroadcast.playerCode.init();
                            }

                            return obj.containers.presetBroadcast.playerCode._rendered;
                        },

                        init: function () {
                            var content = $('<div>', {style: 'margin-top:10px;'});
                            content.append($('<p>').text(obj.locale.usePlayerCode));

                            var playerCodeLink = $('<a>', {id: obj.prefix + 'getCode', href: '#'});

                            var cdnvideoIframe = obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe.get();

                            playerCodeLink.click(function () {
                                var playerContainer = obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer.get();
                                playerContainer.append(cdnvideoIframe).dialog('open');
                            });

                            obj.containers.presetBroadcast.playerCode._link = playerCodeLink;

                            content.append(playerCodeLink.text(obj.locale.CDNvideoPlayerBlock));

                            obj.containers.presetBroadcast.playerCode._container = content;


                            return content;
                        },

                        disable: function () {
                            obj.containers.presetBroadcast.playerCode._link
                                .attr('title', obj.locale.textNotAvailablePlayerCode).unbind('click')
                                .addClass('disabled')
                                .click(function () {
                                    var cdnvideoIframe = $('<div id="dialog" title="' + obj.locale.modalTitle + '"><p>' + obj.locale.textNotAvailablePlayerCode + '</p></div>');
                                    cdnvideoIframe.dialog({
                                        modal: true,
                                        draggable: true,
                                        resizable: false,
                                        buttons: {
                                            Ok: function () {
                                                $(this).dialog("close");
                                            }
                                        }
                                    });
                                });
                        },

                        hide: function () {
                            obj.containers.presetBroadcast.playerCode._container.hide();
                        },

                        show: function () {
                            obj.containers.presetBroadcast.playerCode._container.show();
                        }
                    }
                },

                presetSelect: {
                    _dialogContainer: null,
                    _select: null,
                    _youtubeBlock: null,
                    _editPresetBlock: null,

                    init: function () {
                        var content = $('<div>');
                        content.append($('<p>').addClass('validateTips'));

                        obj.containers.presetSelect._dialogContainer = obj.containers.popup.presetSelectForm.get();

                        var wowzaStreamNameInfo = obj.containers.presetSelect.wowzaStreamNameInfo.get();
                        var announceUrl = obj.containers.presetSelect.announceUrl.get();
                        var selectService = obj.containers.presetSelect.selectService();

                        content.append(selectService)
                            .append(announceUrl)
                            .append(wowzaStreamNameInfo);

                        obj.containers.presetSelect._dialogContainer.html(content);

                        if (!obj.rtsp.preset) {
                            obj.containers.popup.presetSelectForm.hideButton();
                        }

                        return obj.containers.presetSelect._dialogContainer;
                    },

                    close: function () {
                        obj.containers.presetSelect._dialogContainer.dialog('close');
                    },

                    selectService: function () {
                        var table = $('<table>', {id: obj.prefix + 'selectedPreset'});
                        var label = $('<h2>').text(obj.locale.textStreamConfig);
                        table.append(label);

                        var tr = $('<tr>');
                        var select = $('<select>');
                        var selected = false;

                        $.each(obj.presetList, function (id, preset) {
                            var presetTitle = obj.presetTools.getPresetTitle(preset.id);
                            var option = $('<option>', {
                                value: id,
                                'data-provider': preset.provider_type
                            }).text(presetTitle);

                            if (!$.isEmptyObject(obj.presetList) && obj.presetList[obj.rtsp.preset] && id === obj.presetList[obj.rtsp.preset].id) {
                                option.attr({selected: true});
                                selected = true;
                            }

                            select.append(option);
                        });


                        select.append($('<option>', {value: '', 'data-provider': 0}).text(obj.locale.addNewConfig));

                        select.change(function () {
                            var selectedPreset = $("option:selected", this).val();
                            if (selectedPreset) {
                                obj.containers.presetSelect.prepareSelectedPreset(selectedPreset);
                            } else {
                                obj.containers.presetSelect.close();
                                obj.containers.streamingDialog.open();
                            }
                        });

                        obj.containers.presetSelect._select = select;

                        var editPresetBlock = $('<div>', {id: obj.prefix + 'editPresetBlock'});

                        var changeCnfLink = $('<a>', {href: '#'}).text(obj.locale.textChangeCnf);

                        changeCnfLink.on('click', function () {
                            obj.containers.presetSelect._dialogContainer.dialog('close');
                            obj.presetTools.editPreset(select.val());
                        });

                        editPresetBlock.append(changeCnfLink);
                        obj.containers.presetSelect._editPresetBlock = editPresetBlock;

                        var youtubeBlock = $('<div>', {id: obj.prefix + 'youtubeBlock', 'class': 'none'});
                        var youtubeLogo = $('<img>', {src: obj.logo.youtube, 'class': 'youtubeLogo'});
                        var youtubeLink = $('<a>', {
                            href: obj.youtubeInstructionLink,
                            target: '_blank',
                            'class': 'youtubeLink'
                        }).text(obj.locale.textInstruction);

                        youtubeBlock.append(youtubeLogo)
                            .append(youtubeLink);

                        obj.containers.presetSelect._youtubeBlock = youtubeBlock;

                        if (!selected) {
                            var selectedPreset = select.find(':selected').val();
                            if (selectedPreset) {
                                obj.containers.presetSelect.prepareSelectedPreset(selectedPreset);
                            }
                        }

                        tr.append(
                            $('<td>').append(select)
                        ).append(
                            $('<td>').append(editPresetBlock)
                                .append(youtubeBlock)
                        );

                        table.append(tr);

                        return table;
                    },

                    prepareSelectedPreset: function (preset) {
                        var preset = obj.presetList[preset];
                        var providerSelected = preset.provider_type;

                        /*if(providerSelected === obj.containers.youtubeForm._provider){
                        *   obj.containers.presetSelect.showYoutubeLink();
                        * }
                        * */
                        obj.containers.presetSelect.showEditLink();

                        if (providerSelected === obj.containers.manualPullForm._provider) {
                            obj.containers.presetSelect.announceUrl.show();
                        } else {
                            obj.containers.presetSelect.announceUrl.hide();
                        }

                        if (providerSelected === obj.containers.wowzaServerForm._provider) {
                            obj.containers.presetSelect.wowzaStreamNameInfo.show();
                        } else {
                            obj.containers.presetSelect.wowzaStreamNameInfo.hide();
                        }
                    },

                    showYoutubeLink: function () {
                        obj.containers.presetSelect._editPresetBlock.hide();
                        obj.containers.presetSelect._youtubeBlock.show();
                    },

                    showEditLink: function () {
                        obj.containers.presetSelect._youtubeBlock.hide();
                        obj.containers.presetSelect._editPresetBlock.show();
                    },

                    announceUrl: {
                        _container: null,

                        get: function () {
                            var table = $('<table>', {id: obj.prefix + 'announceUrlBlock', 'class': 'none'});
                            var tr = $('<tr>');

                            var url = obj.presetTools.getAnnounceUrl();

                            var announceUrl = $('<input>',
                                {
                                    id: obj.prefix + 'announceUrl',
                                    type: 'text',
                                    'class': 'announceUrl disabled',
                                    value: url,
                                    readonly: true,
                                    onclick: "this.select()"
                                });

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.textCopyStreamLink))
                                    .append(announceUrl)
                            );

                            table.append(tr);

                            obj.containers.presetSelect.announceUrl._container = table;

                            return table;
                        },

                        show: function () {
                            obj.containers.presetSelect.announceUrl._container.show();
                        },

                        hide: function () {
                            obj.containers.presetSelect.announceUrl._container.hide();
                        }
                    },

                    wowzaStreamNameInfo: {
                        _container: null,

                        get: function () {
                            var table = $('<table>', {id: obj.prefix + 'wowzaStreamNameInfoBlock', 'class': 'none'});
                            var tr = $('<tr>');

                            tr.append(
                                $('<td>')
                                    .append($('<p>').html(obj.locale.textWowzaServerHelp + ': <b>' + obj.plugins.conferencePlugin.cid.real + '</b>'))
                            );

                            table.append(tr);

                            obj.containers.presetSelect.wowzaStreamNameInfo._container = table;

                            return table;
                        },

                        show: function () {
                            obj.containers.presetSelect.wowzaStreamNameInfo._container.show();
                        },

                        hide: function () {
                            obj.containers.presetSelect.wowzaStreamNameInfo._container.hide();
                        }
                    },

                    CDNvideoPlayerBlock: {
                        _container: null,

                        get: function () {
                            var table = $('<table>', {id: obj.prefix + 'CDNvideoPlayerBlock', 'class': ''});

                            var checkbox = $('<input>', {id: obj.prefix + 'rtpOverTcp', type: 'checkbox', checked: true});

                            checkbox.on('click', function () {
                                if (this.checked) {

                                } else {

                                }
                            });

                            var label = $('<label>').append(checkbox).append(obj.locale.outsideBroadcasting);

                            table.append(
                                $('<tr>').append(
                                    $('<td>').append(label)
                                )
                            );

                            table.append(
                                $('<tr>').append(
                                    $('<td>').append(
                                        $('<div>').text(obj.locale.usePlayerCode)
                                    )
                                )
                            );

                            var playerCodeLink = $('<a>', {id: obj.prefix + 'getCode', href: '#'});

                            var cdnvideoIframe = obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe.get();

                            playerCodeLink.click(function () {
                                var playerContainer = obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer.get();
                                playerContainer.append(cdnvideoIframe).dialog('open');
                            });

                            table.append(
                                $('<tr>').append(
                                    $('<td>').append(
                                        playerCodeLink.text(obj.locale.CDNvideoPlayerBlock)
                                    )
                                )
                            );

                            obj.containers.presetSelect.CDNvideoPlayerBlock._container = table;

                            return table;
                        },

                        show: function () {
                            if (obj.containers.presetSelect.CDNvideoPlayerBlock._container) {
                                obj.containers.presetSelect.CDNvideoPlayerBlock._container.show();
                            }
                        },

                        hide: function () {
                            if (obj.containers.presetSelect.CDNvideoPlayerBlock._container) {
                                obj.containers.presetSelect.CDNvideoPlayerBlock._container.hide();
                            }
                        },

                        htmlPlayer: {
                            _dialogContainer: null,
                            _rendered: null,

                            get: function () {
                                if (obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._rendered === null) {
                                    obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._rendered = obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._render();
                                }

                                return obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._rendered;
                            },

                            _render: function () {

                                obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._dialogContainer = $('<div>', {id: 'presetSelect'});

                                obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._dialogContainer.dialog({
                                    title: obj.locale.CDNvideoPlayerBlock,
                                    autoOpen: false,
                                    modal: false,
                                    draggable: true,
                                    resizable: false,
                                    dialogClass: "playerCode",
                                    width: 450,
                                    height: 350,
                                    buttons: {
                                        'close': {
                                            text: obj.locale.btnClose,
                                            id: obj.prefix + "btnClose",
                                            click: function () {
                                                $(this).dialog('close');
                                            }
                                        }
                                    }
                                });

                                return obj.containers.presetSelect.CDNvideoPlayerBlock.htmlPlayer._dialogContainer;
                            }
                        },

                        cdnvideoIframe: {
                            _rendered: null,

                            get: function () {
                                if (obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe._rendered === null) {
                                    obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe._rendered = obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe._render();
                                }

                                return obj.containers.presetSelect.CDNvideoPlayerBlock.cdnvideoIframe._rendered;
                            },

                            _render: function () {
                                var container = $('<tr>');

                                var iframeContainer = $('<td>');
                                var cdnvideoIframe = $('<textarea id="' + obj.prefix + 'cdnvideoIframe" class="fullBlock grayBlock stbtn" onclick="this.select()" readonly="readonly" style="width:420px;height:225px;border:1px solid grey;"></textarea>');

                                var preset = obj.presetList[obj.rtsp.preset];

                                if (preset && preset.provider_type == obj.containers.CDNvideoAuthForm._provider) {
                                    $.ajax({
                                        url: obj.handlers.getCDNvideoIframe,
                                        type: 'POST',
                                        dataType: 'json',
                                        data: {
                                            cid: obj.plugins.conferencePlugin.cid.real,
                                            login: preset.username,
                                            password: preset.password
                                        },
                                        beforeSend: function () {
                                            cdnvideoIframe.text('processing..');
                                        }
                                    })
                                        .then(function (data, textStatus, jqXHR) {
                                            var filter = $.Deferred();

                                            if (data.error) {
                                                return filter.reject(data, textStatus, jqXHR);
                                            }

                                            return filter.resolve(data, textStatus, jqXHR);
                                        })
                                        .done(function (data) {
                                            if (data.success) {
                                                cdnvideoIframe.val(data.success);
                                            }
                                        })
                                        .fail(function (data) {
                                            obj.presetTools.sendMessage(data.error, true);
                                        });
                                }

                                iframeContainer.html(cdnvideoIframe);
                                container.append(iframeContainer);

                                return container;
                            }
                        }
                    }
                },

                // </editor-fold>

                // <editor-fold defaultstate="collapsed" desc="PresetForms">
                CDNvideoAuthForm: {
                    _dialogContainer: null,
                    _login: null,
                    _password: null,
                    _provider: 'cdnvideo',
                    _providerTitle: 'CDNvideo',
                    _applyButton: null,

                    init: function (edit) {
                        var content = $('<div>', {'class': 'CDNvideoAuthForm'});
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.CDNvideoAuthForm._dialogContainer = obj.containers.popup.presetForm.get();
                            content.append(obj.containers.CDNvideoAuthForm.selectService.get());
                        } else {
                            obj.containers.CDNvideoAuthForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.CDNvideoAuthForm.body.get());

                        obj.containers.additionalSettings.get();
//                    obj.containers.additionalSettings.enableRtpOverTcp(0);
//                    obj.containers.additionalSettings.codecs.audioCodec.set('AAC');

                        obj.containers.CDNvideoAuthForm._dialogContainer.html(content);

                        var buttons = obj.containers.CDNvideoAuthForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            obj.presetTools.disableApplyButton(edit);

                            var valid = obj.containers.CDNvideoAuthForm.validate();

                            if (valid) {
                                obj.presetTools.saveCDNvideoPreset(obj.presetObject._login.val(), obj.presetObject._password.val(), edit);
                            } else {
                                obj.presetTools.enableApplyButton(edit);
                            }
                        };

                        obj.containers.CDNvideoAuthForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.CDNvideoAuthForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="10%">');
                            table.append(colw);

                            var label = $('<h2>').text(obj.locale.textServiceStream);

                            var tr = $('<tr>');
                            var select = $('<select>', {disabled: true}).append($('<option>').text(obj.containers.CDNvideoAuthForm._providerTitle));
                            var a = $('<a>', {href: '#'}).text(obj.locale.createCDNvideoAccount);

                            tr.append($('<td>').append(select));

                            a.click(function () {
                                obj.containers.CDNvideoRegForm.init().dialog('open');
                            });

                            tr.append(
                                $('<td>', {'style': "width:90px"}).append(
                                    $('<img>', {src: obj.logo.cdnvideo, 'class': 'CDNvideoLogo'})
                                ))
                                .append(
                                    $('<td>').append(
                                        $('<span>', {'class': 'createCDN'}).append(a)
                                    )
                                );

                            table.append(tr);

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="60%">');

                            table.append(colw);

                            var tr = $('<tr>');

                            var login = $('<input>',
                                {
                                    id: obj.prefix + 'login',
                                    type: 'text',
                                    value: obj.adminEmail
                                });

                            obj.containers.CDNvideoAuthForm._login = login;

                            var password = $('<input>',
                                {
                                    id: obj.prefix + 'password',
                                    type: 'password',
                                    value: '',
                                    placeholder: ''//obj.locale.entryPassword
                                });

                            obj.containers.CDNvideoAuthForm._password = password;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.login + ':'))
                                    .append(login)
                            )
                                .append(
                                    $('<td>', {colspan: 2})
                                        .append($('<p>').text(obj.locale.password + ':'))
                                        .append(password)
                                );

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        var valid = true;

                        obj.presetObject._login = obj.containers.CDNvideoAuthForm._login;
                        obj.presetObject._password = obj.containers.CDNvideoAuthForm._password;
                        obj.presetObject._provider = obj.containers.CDNvideoAuthForm._provider;

                        obj.presetObject._name = obj.containers.CDNvideoAuthForm._providerTitle + ' (' + obj.presetObject._login.val() + ')';

                        var allFields = $([]).add(obj.presetObject._login).add(obj.presetObject._password);
                        allFields.removeClass("ui-state-error");

                        valid = obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.presetObject._name);

                        valid = valid && checkLength(obj.presetObject._login, obj.locale.login, 1, 255);
                        valid = valid && checkRegexp(obj.presetObject._login, obj.presetTools._emailRegex, obj.locale.errorField.replace('%s', obj.locale.login));
                        valid = valid && checkLength(obj.presetObject._password, obj.locale.password, 1, 255);

                        if (!valid) {
                            (obj.presetObject._login).focus(function () {
                                $(this).removeClass("ui-state-error");
                            });
                            (obj.presetObject._password).focus(function () {
                                $(this).removeClass("ui-state-error");
                            });
                        }

                        return valid;
                    }
                },

                CDNvideoRegForm: {
                    _dialogContainer: null,
                    _login: null,
                    _password: null,
                    _provider: 'cdnvideo',
                    _providerTitle: 'CDNvideo',

                    init: function () {
                        obj.containers.CDNvideoRegForm._dialogContainer = obj.containers.popup.presetForm.get();

                        var content = $('<div>', {'class': 'CDNvideoRegForm'});
                        content.append($('<p>').addClass('validateTips'))
                            .append(obj.containers.CDNvideoRegForm.selectService.get())
                            .append(obj.containers.CDNvideoRegForm.body.get());

                        //obj.containers.additionalSettings.enableRtpOverTcp(0);

                        // obj.containers.additionalSettings.codecs.audioCodec.set('AAC');

                        var buttons = obj.containers.CDNvideoRegForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            obj.presetTools.disableApplyButton();

                            var valid = obj.containers.CDNvideoRegForm.validate();

                            if (valid) {
                                obj.presetTools.createCDNvideoAccount();
                            }
                            else {
                                obj.presetTools.enableApplyButton();
                            }
                        };

                        obj.containers.CDNvideoRegForm._dialogContainer.html(content);

                        obj.containers.CDNvideoRegForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(false);

                        return obj.containers.CDNvideoRegForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="10%">');
                            table.append(colw);

                            var label = $('<h2>').text(obj.locale.textServiceStream);

                            var tr = $('<tr>');
                            var select = $('<select>', {disabled: true}).append($('<option>').text(obj.containers.CDNvideoAuthForm._providerTitle));
                            var a = $('<a>', {href: '#'}).text(obj.locale.existCDNvideoAccount);

                            tr.append($('<td>').append(select));

                            a.click(function () {
                                obj.containers.CDNvideoAuthForm.init().dialog('open');
                            });

                            tr.append($('<td>', {'style': 'width:100%'}).append($('<img>', {
                                src: obj.logo.cdnvideo,
                                'class': 'CDNvideoLogo'
                            })))
                                .append($('<td>').append($('<span>', {'class': 'createCDN'}).append(a)));

                            table.append(tr);

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="60%">');

                            table.append(colw);

                            var tr = $('<tr>');

                            var login = $('<input>',
                                {
                                    id: obj.prefix + 'login',
                                    type: 'text',
                                    value: obj.adminEmail
                                });

                            obj.containers.CDNvideoRegForm._login = login;

                            var checkbox = $('<input>',
                                {
                                    type: 'checkbox',
                                    id: 'agree',
                                    value: '',
                                    checked: true
                                });

                            checkbox.click(function () {
                                if (!this.checked) {
                                    $('.btnCreate').attr("disabled", true);
                                } else {
                                    $('.btnCreate').removeAttr("disabled");
                                }
                            });

                            var label = $('<label>');
                            label.append(checkbox)
                                .append(obj.locale.textCDNvideoAgree);

                            tr.append($('<td>', {colspan: 3})
                                .append($('<p>').text(obj.locale.emailEntryCDN))
                                .append(login)
                                .append($('<p>').append(label))
                            );

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        var valid = true;

                        obj.presetObject._provider = obj.containers.CDNvideoRegForm._provider;
                        obj.presetObject._login = obj.containers.CDNvideoRegForm._login;
                        obj.presetObject._name = obj.containers.CDNvideoRegForm._providerTitle + ' (' + obj.presetObject._login.val() + ')';

                        valid = checkRegexp(obj.presetObject._login, obj.presetTools._emailRegex, obj.locale.errorField.replace('%s', obj.locale.login));
                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.CDNvideoRegForm._login.val());

                        return valid;
                    }
                },

                manualPushForm: {
                    _dialogContainer: null,
                    _provider: 'manualPush',
                    _providerTitle: 'manualPush',
                    _name: null,
                    _login: null,
                    _password: null,
                    _announceUrl: null,

                    init: function (edit) {
                        var content = $('<div>', {'class': 'manualPushForm'});
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.manualPushForm._dialogContainer = obj.containers.popup.presetForm.get();

                            var select = obj.containers.manualPushForm.selectService.get();
                            select.change(function () {
                                obj.containers.manualPullForm.init().dialog('open');
                            });

                            content.append(select);
                        } else {
                            obj.containers.manualPushForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.manualPushForm.body.get())
                            .append(obj.containers.authentication.get())
                            .append(obj.containers.additionalSettings.get());

                        obj.containers.manualPushForm._dialogContainer.html(content);

                        var buttons = obj.containers.manualPushForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            var valid = obj.containers.manualPushForm.validate();

                            if (valid) {
                                obj.presetTools.savePreset(edit);
                            }
                        };

                        obj.containers.manualPushForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.manualPushForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');
                            var table = $('<table>');
                            var label = $('<h2>').text(obj.locale.textServiceStream);
                            table.append(label);

                            var tr = $('<tr>');
                            var select = $('<select>');

                            select.append($('<option>', {selected: true}).text(obj.locale.manualPush))
                                .append($('<option>').text(obj.locale.manualPull));

                            tr.append($('<td>').append(select));

                            table.append(tr);

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="60%">');

                            table.append(colw);

                            var tr = $('<tr>');

                            var templateName = $('<input>',
                                {
                                    id: obj.prefix + 'templateName',
                                    type: 'text',
                                    value: ''
                                });

                            obj.containers.manualPushForm._name = templateName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.templateName + ':'))
                                    .append(templateName)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            var announceUrl = $('<input>',
                                {
                                    id: obj.prefix + 'announceUrl',
                                    name: 'url',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryPublishUrl
                                }).addClass('announceUrl');

                            obj.containers.manualPushForm._announceUrl = announceUrl;

                            tr.append(
                                $('<td>', {colspan: '2'})
                                    .append($('<p>').text(obj.locale.publishUrl + ':'))
                                    .append(announceUrl)
                            );

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        var valid = true;

                        obj.presetObject._name = obj.containers.manualPushForm._name.val();
                        obj.presetObject._announceUrl = obj.containers.manualPushForm._announceUrl;
                        obj.presetObject._provider = obj.containers.manualPushForm._provider;

                        var allFields = $([]).add(obj.containers.manualPushForm._name).add(obj.presetObject._login).add(obj.presetObject._password).add(obj.presetObject._announceUrl);
                        allFields.removeClass("ui-state-error");

                        valid = checkLength(obj.containers.manualPushForm._name, obj.locale.templateName, 1, 255);

                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.manualPushForm._name.val());
                        valid = valid && obj.presetTools.validateAnnounceUrl(obj.presetObject._announceUrl, obj.locale.publishUrl);

                        if (obj.containers.authentication._field.prop('checked')) {
                            valid = valid && checkLength(obj.presetObject._login, obj.locale.login, 1, 255);
                            valid = valid && checkLength(obj.presetObject._password, obj.locale.password, 1, 255);
                        }

                        return valid;
                    }
                },

                manualPullForm: {
                    _dialogContainer: null,
                    _name: null,
                    _provider: 'manualPull',
                    _providerTitle: 'manualPull',
                    _announceUrl: null,

                    init: function (edit) {
                        var content = $('<div>');
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.manualPullForm._dialogContainer = obj.containers.popup.presetForm.get();

                            var select = obj.containers.manualPullForm.selectService.get();
                            select.change(function () {
                                obj.containers.manualPushForm.init().dialog('open');
                            });

                            content.append(select);
                        } else {
                            obj.containers.manualPullForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.manualPullForm.body.get())
                            .append(obj.containers.additionalSettings.get(true));

                        obj.containers.manualPullForm._dialogContainer.html(content);

                        var buttons = obj.containers.manualPullForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            var valid = obj.containers.manualPullForm.validate();

                            if (valid) {
                                obj.presetTools.savePreset(edit);
                            }
                        };

                        obj.containers.manualPullForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.manualPullForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');
                            var table = $('<table>');
                            var label = $('<h2>').text(obj.locale.textServiceStream);
                            table.append(label);

                            var tr = $('<tr>');
                            var select = $('<select>');

                            select.append($('<option>').text(obj.locale.manualPush))
                                .append($('<option>', {selected: true}).text(obj.locale.manualPull));

                            tr.append($('<td>').append(select));

                            if (!obj.confPage) {
                                tr.append($('<td>').append($('<p>').text(obj.locale.textPullOnlyInConfPage)));
                            }

                            table.append(tr);

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%"><col width="60%">');
                            table.append(colw);

                            var tr = $('<tr>');

                            var templateName = $('<input>',
                                {
                                    id: obj.prefix + 'templateName',
                                    type: 'text',
                                    value: ''
                                });

                            obj.containers.manualPullForm._name = templateName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.templateName + ':'))
                                    .append(templateName)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            if (obj.confPage) {
                                obj.containers.manualPullForm._announceUrl = obj.presetTools.getAnnounceUrl();

                                var announceUrl = $('<input>',
                                    {
                                        id: obj.prefix + 'announceUrl',
                                        type: 'text',
                                        'class': 'announceUrl disabled',
                                        value: obj.containers.manualPullForm._announceUrl,
                                        readonly: true,
                                        onclick: "this.select()"
                                    });

                                obj.presetObject._announceUrl = announceUrl;

                                tr.append(
                                    $('<td>')
                                        .append($('<p>').text(obj.locale.textCopyLink))
                                        .append(announceUrl)
                                );
                            }
                            /* else {
                            tr.append(
                                    $('<td>').append($('<p>').text(obj.locale.textPullOnlyInConfPage))
                                );
                        }*/

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        var valid = true;
                        obj.presetObject._name = obj.containers.manualPullForm._name.val();
                        obj.presetObject._provider = obj.containers.manualPullForm._provider;

                        valid = checkLength(obj.containers.manualPullForm._name, obj.locale.templateName, 1, 255);
                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.manualPullForm._name.val());

                        return valid;
                    }
                },

                wowzaServerForm: {
                    _dialogContainer: null,
                    _name: null,
                    _login: null,
                    _password: null,
                    _host: null,
                    _port: null,
                    _application: null,
                    //_stream: null,
                    _provider: 'wowzaServer',
                    _providerTitle: 'Wowza Streaming Engine',
                    _announceUrl: null,

                    init: function (edit) {
                        var content = $('<div>', {'class': 'wowzaServerForm'});
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.wowzaServerForm._dialogContainer = obj.containers.popup.presetForm.get();
                            content.append(obj.containers.wowzaServerForm.selectService.get());
                            //content.append(obj.containers.wowzaServerForm.infoMsg.get());
                        } else {
                            obj.containers.wowzaServerForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.wowzaServerForm.body.get())
                            .append(obj.containers.authentication.get())
                            .append(obj.containers.additionalSettings.get());

                        obj.containers.additionalSettings.enableRtpOverTcp(0);

                        obj.containers.additionalSettings.codecs.audioCodec.set('AAC');

                        obj.containers.wowzaServerForm._dialogContainer.html(content);

                        var buttons = obj.containers.wowzaServerForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            var valid = obj.containers.wowzaServerForm.validate();

                            if (valid) {
                                obj.presetTools.savePreset(edit);
                            }
                        };

                        obj.containers.wowzaServerForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.wowzaServerForm._dialogContainer;
                    },

                    infoMsg: {
                        get: function () {
                            var table = $('<table>');
                            table.append($('<tr>').append($('<td>').text(obj.locale.textWowzaServerHelp)));

                            return table;
                        }
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');

                            var label = $('<h2>').text(obj.locale.textServiceStream);
                            var table = $('<table>', {'class': 'selectService'});
                            var tr = $('<tr>');
                            var select = $('<select>');

                            var services = {
                                wowzaServer: obj.containers.wowzaServerForm._providerTitle,
                                wowzaCloud: obj.containers.wowzaCloudForm._providerTitle,
                                youtube: obj.containers.youtubeForm._providerTitle
                            };

                            $.each(services, function (item, value) {
                                var option = $('<option>');

                                if (item === obj.containers.wowzaServerForm._provider) {
                                    option.attr('selected', true)
                                }

                                select.append(option.text(value));
                            });


                            tr.append($('<td>').append(select));

                            select.change(function () {
                                if ($(this).val() === obj.containers.youtubeForm._providerTitle) {
                                    obj.containers.youtubeForm.init().dialog('open');
                                } else {
                                    obj.containers.wowzaCloudForm.init().dialog('open');
                                }
                            });

                            table.append(tr)
                                .append(
                                    $('<tr>').append(
                                        $('<td>').text(obj.locale.textWowzaServerHelp)
                                    ));

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%">');
                            table.append(colw);

                            var tr = $('<tr>');

                            var templateName = $('<input>',
                                {
                                    id: obj.prefix + 'templateName',
                                    type: 'text',
                                    value: ''
                                });

                            obj.containers.wowzaServerForm._name = templateName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.templateName + ':'))
                                    .append(templateName)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            var hostServer = $('<input>',
                                {
                                    id: obj.prefix + 'hostServer',
                                    type: 'text',
                                    value: '',
                                    placeholder: '',//obj.locale.entryHostServer
                                    'class': 'announceUrl'
                                }
                            );

                            hostServer.blur(function () {
                                var safeVal = obj.presetTools.safeInputClearSpaces($(this).val());
                                $(this).val(safeVal);
                            });

                            obj.containers.wowzaServerForm._host = hostServer;

                            tr.append(
                                $('<td>', {colspan: 2})
                                    .append($('<p>').text(obj.locale.hostServer + ':'))
                                    .append(hostServer)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            var hostPort = $('<input>',
                                {
                                    id: obj.prefix + 'hostPort',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryHostPort
                                }
                            );

                            obj.containers.wowzaServerForm._port = hostPort;

                            hostPort.on('keyup blur', function () {
                                var safeVal = obj.presetTools.safeIntInput(hostPort.val());
                                hostPort.val(safeVal);
                            });

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.hostPort + ':'))
                                    .append(hostPort)
                            );

                            var application = $('<input>',
                                {
                                    id: obj.prefix + 'application',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryApplication
                                }
                            );

                            application.blur(function () {
                                var safeVal = obj.presetTools.safeInputClearSpaces($(this).val());
                                $(this).val(safeVal);
                            });

                            obj.containers.wowzaServerForm._application = application;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.application + ':'))
                                    .append(application)
                            );

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        var valid = true,
                            protocol = 'rtsp://',
                            host = obj.containers.wowzaServerForm._host,
                            port = obj.containers.wowzaServerForm._port,
                            application = obj.containers.wowzaServerForm._application,
                            stream = '%stream%';

                        obj.presetObject._name = obj.containers.wowzaServerForm._name.val();
                        obj.presetObject._provider = obj.containers.wowzaServerForm._provider;

                        var allFields = $([]).add(obj.presetObject._name)
                                .add(obj.presetObject._login)
                                .add(obj.presetObject._password)
                                .add(host)
                                .add(port)
                                .add(application)
                            /*.add(stream)*/;
                        allFields.removeClass("ui-state-error");

                        valid = checkLength(obj.containers.wowzaServerForm._name, obj.locale.templateName, 1, 255);
                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.wowzaServerForm._name.val());
                        valid = valid && obj.presetTools.validServerHost(host, obj.locale.hostServer);

                        valid = valid && checkLength(port, obj.locale.hostPort, 1, 5);
                        valid = valid && checkRegexp(port, /^\d+$/, obj.locale.errorField.replace('%s', obj.locale.hostPort));
                        valid = valid && checkInt(port, obj.locale.hostPort, 1, 65536);
                        valid = valid && checkLength(application, obj.locale.application, 1, 255);
                        //valid = valid && checkLength(stream, obj.locale.streamName, 1, 255);
                        //valid = valid && checkRegexp(stream, /^[-._a-zA-Z0-9]+$/, obj.locale.errorField.replace('%s',obj.locale.streamName));

                        if (obj.containers.authentication._field.prop('checked')) {
                            valid = valid && checkLength(obj.presetObject._login, obj.locale.login, 1, 255);
                            valid = valid && checkLength(obj.presetObject._password, obj.locale.password, 1, 255);
                        }

                        var announceUrl = $('<input>').val(protocol + host.val() + ':' + port.val() + '/' + application.val() + '/' + stream);
                        obj.presetObject._announceUrl = announceUrl;

                        return valid;
                    }
                },

                wowzaCloudForm: {
                    _dialogContainer: null,
                    _name: null,
                    _login: null,
                    _password: null,
                    _host: null,
                    _port: null,
                    //_application: null,
                    _stream: null,
                    _provider: 'wowzaCloud',
                    _providerTitle: 'Wowza Streaming Cloud',
                    _announceUrl: null,

                    init: function (edit) {
                        var content = $('<div>', {'class': 'wowzaCloudForm'});
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.wowzaCloudForm._dialogContainer = obj.containers.popup.presetForm.get();
                            content.append(obj.containers.wowzaCloudForm.selectService.get());
                        } else {
                            obj.containers.wowzaCloudForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.wowzaCloudForm.body.get())
                            .append(obj.containers.authentication.get())
                            .append(obj.containers.additionalSettings.get());

                        obj.containers.additionalSettings.enableRtpOverTcp(0);

                        obj.containers.additionalSettings.codecs.audioCodec.set('AAC');

                        obj.containers.wowzaCloudForm._dialogContainer.html(content);

                        var buttons = obj.containers.wowzaCloudForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            var valid = obj.containers.wowzaCloudForm.validate();

                            if (valid) {
                                obj.presetTools.savePreset(edit);
                            }
                        };

                        obj.containers.wowzaCloudForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.wowzaCloudForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');

                            var label = $('<h2>').text(obj.locale.textServiceStream);
                            var table = $('<table>', {'class': 'selectService'});
                            var colw = $('<col width="40%"><col width="3%">');
                            table.append(colw);

                            var tr = $('<tr>');

                            var select = $('<select>');

                            var services = {
                                wowzaServer: obj.containers.wowzaServerForm._providerTitle,
                                wowzaCloud: obj.containers.wowzaCloudForm._providerTitle,
                                youtube: obj.containers.youtubeForm._providerTitle
                            };

                            $.each(services, function (item, value) {
                                var option = $('<option>');

                                if (item === obj.containers.wowzaCloudForm._provider) {
                                    option.attr('selected', true)
                                }

                                select.append(option.text(value));
                            });

                            tr.append($('<td>').append(select))
                                .append($('<td>').append($('<img>', {src: obj.logo.wowza, width: 80})));

                            var link = $('<a>', {
                                href: obj.wowzaInstructionLink,
                                target: '_blank'
                            }).text(obj.locale.textInstruction);
                            tr.append($('<td>').append(link));

                            select.change(function () {
                                if ($(this).val() === obj.containers.youtubeForm._providerTitle) {
                                    obj.containers.youtubeForm.init().dialog('open');
                                } else {
                                    obj.containers.wowzaServerForm.init().dialog('open');
                                }
                            });

                            table.append(tr)
                                .append(
                                    $('<tr>').append(
                                        $('<td>', {colspan: 3}).text(obj.locale.textWowzaCloudHelp)
                                    ));

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            var colw = $('<col width="40%">');
                            table.append(colw);

                            var tr = $('<tr>');

                            var templateName = $('<input>',
                                {
                                    id: obj.prefix + 'templateName',
                                    type: 'text',
                                    value: ''
                                });

                            obj.containers.wowzaCloudForm._name = templateName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.templateName + ':'))
                                    .append(templateName)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            var primaryServer = $('<input>',
                                {
                                    id: obj.prefix + 'primaryServer',
                                    type: 'text',
                                    value: '',
                                    placeholder: '',//obj.locale.entryHostServer
                                    'class': 'announceUrl'
                                }
                            );

                            primaryServer.blur(function () {
                                var safeVal = obj.presetTools.safeInputClearSpaces($(this).val());
                                $(this).val(safeVal);
                            });

                            obj.containers.wowzaCloudForm._host = primaryServer;

                            tr.append(
                                $('<td>', {colspan: 2})
                                    .append($('<p>').text(obj.locale.primaryServer + ':'))
                                    .append(primaryServer)
                            );

                            table.append(tr);

                            tr = $('<tr>');

                            var hostPort = $('<input>',
                                {
                                    id: obj.prefix + 'hostPort',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryHostPort
                                }
                            );

                            obj.containers.wowzaCloudForm._port = hostPort;

                            hostPort.on('keyup blur', function () {
                                var safeVal = obj.presetTools.safeIntInput($(this).val());
                                $(this).val(safeVal);
                            });

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.hostPort + ':'))
                                    .append(hostPort)
                            );

                            var streamName = $('<input>',
                                {
                                    id: obj.prefix + 'streamName',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryStreamName
                                }
                            );

                            streamName.blur(function () {
                                var safeVal = obj.presetTools.safeInputClearSpaces($(this).val());
                                $(this).val(safeVal);
                            });

                            obj.containers.wowzaCloudForm._stream = streamName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.streamName + ':'))
                                    .append(streamName)
                            );

                            table.append(tr);

                            return table;
                        }
                    },

                    splitUrl: function () {
                        var pattern = new RegExp("(.+:\/\/)([^:\/?]*)\/(.[^\/]+)");
                        var parsedUrl = obj.containers.wowzaCloudForm._host.val().match(pattern);

                        var url = [];

                        if (parsedUrl) {
                            url['scheme'] = parsedUrl[1];
                            url['host'] = parsedUrl[2];
                            url['application'] = parsedUrl[3];
                        }

                        return url;
                    },

                    validate: function (edit) {
                        var valid = true,
                            host = obj.containers.wowzaCloudForm._host,
                            port = obj.containers.wowzaCloudForm._port,
                            //application = obj.containers.wowzaCloudForm._application,
                            stream = obj.containers.wowzaCloudForm._stream;
                        obj.presetObject._name = obj.containers.wowzaCloudForm._name.val();
                        obj.presetObject._provider = obj.containers.wowzaCloudForm._provider;

                        var allFields = $([]).add(obj.presetObject._name)
                            .add(obj.presetObject._login)
                            .add(obj.presetObject._password)
                            .add(host)
                            .add(port)
                            //.add(application)
                            .add(stream);
                        allFields.removeClass("ui-state-error");

                        valid = checkLength(obj.containers.wowzaCloudForm._name, obj.locale.templateName, 1, 255);
                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.wowzaCloudForm._name.val());
                        valid = valid && obj.presetTools.validPrimaryServer(host, obj.locale.primaryServer);
                        valid = valid && checkLength(port, obj.locale.hostPort, 1, 5);
                        valid = valid && checkRegexp(port, /^\d+$/, obj.locale.errorField.replace('%s', obj.locale.hostPort));
                        valid = valid && checkInt(port, obj.locale.hostPort, 1, 65536);
                        //valid = valid && checkLength(application, obj.locale.application, 1, 255);
                        valid = valid && checkLength(stream, obj.locale.streamName, 1, 255);
                        valid = valid && checkRegexp(stream, /^[^\s]+$/, obj.locale.errorField.replace('%s', obj.locale.streamName));

                        var parsedUrl = obj.containers.wowzaCloudForm.splitUrl(host.val());

                        var url = parsedUrl['scheme'] + parsedUrl['host'] + ':' + port.val() + '/' + parsedUrl['application'] + '/' + stream.val();

                        obj.containers.wowzaCloudForm._announceUrl = $('<input>').val(url);
                        obj.presetObject._announceUrl = obj.containers.wowzaCloudForm._announceUrl;

                        if (obj.containers.authentication._field.prop('checked')) {
                            valid = valid && checkLength(obj.presetObject._login, obj.locale.login, 1, 255);
                            valid = valid && checkLength(obj.presetObject._password, obj.locale.password, 1, 255);
                        }

                        return valid;
                    }
                },

                youtubeForm: {
                    _dialogContainer: null,
                    _provider: 'youtube',
                    _providerTitle: 'Youtube',
                    _name: null,
                    _announceUrl: null,
                    _server_url: null,
                    _stream_key: null,

                    init: function (edit) {
                        var content = $('<div>');
                        content.append($('<p>').addClass('validateTips'));

                        if (!edit) {
                            obj.containers.youtubeForm._dialogContainer = obj.containers.popup.presetForm.get();
                            content.append(obj.containers.youtubeForm.selectService.get());
                        } else {
                            obj.containers.youtubeForm._dialogContainer = obj.containers.popup.presetEditForm.get();
                        }

                        content.append(obj.containers.youtubeForm.body.get())
                            .append(obj.containers.additionalSettings.get(true));

                        obj.containers.youtubeForm._dialogContainer.html(content);

                        var buttons = obj.containers.youtubeForm._dialogContainer.dialog("option", "buttons");

                        buttons['save'].click = function () {
                            var valid = obj.containers.youtubeForm.validate();

                            if (valid) {
                                obj.presetTools.savePreset(edit);
                            }
                        };

                        obj.containers.youtubeForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetForm.prepareButtons(edit);

                        return obj.containers.youtubeForm._dialogContainer;
                    },

                    selectService: {
                        get: function () {
                            var content = $('<div>');

                            var label = $('<h2>').text(obj.locale.textServiceStream);
                            var table = $('<table>', {'class': 'selectService'});
                            var colw = $('<col width="40%"><col width="3%">');
                            table.append(colw);

                            var tr = $('<tr>');
                            var select = $('<select>');

                            var services = {
                                wowzaServer: obj.containers.wowzaServerForm._providerTitle,
                                wowzaCloud: obj.containers.wowzaCloudForm._providerTitle,
                                youtube: obj.containers.youtubeForm._providerTitle
                            };

                            $.each(services, function (item, value) {
                                var option = $('<option>');

                                if (item === obj.containers.youtubeForm._provider) {
                                    option.attr('selected', true)
                                }

                                select.append(option.text(value));
                            });

                            tr.append($('<td>').append(select))
                                .append($('<td>').append($('<img>', {src: obj.logo.youtube, width: 60})))
                                .append($('<td>').append($('<a>', {
                                    href: obj.youtubeInstructionLink,
                                    target: '_blank'
                                }).text(obj.locale.textInstruction)));

                            select.change(function () {
                                if ($(this).val() === obj.containers.wowzaCloudForm._providerTitle) {
                                    obj.containers.wowzaCloudForm.init().dialog('open');
                                } else {
                                    obj.containers.wowzaServerForm.init().dialog('open');
                                }
                            });

                            table.append(tr);

                            content.append(label)
                                .append(table);

                            return content;
                        }
                    },

                    body: {
                        get: function () {
                            var table = $('<table>');
                            // if (!obj.confPage) {
                            //     var tr = $('<tr>');
                            //     tr.append(
                            //         $('<td>', {colspan: 3}).append($('<p>').text(obj.locale.textOnlyInConfPage))
                            //     );
                            //     table.append(tr);
                            // }

                            var tr = $('<tr>');
                            var templateName = $('<input>',
                                {
                                    id: obj.prefix + 'templateName',
                                    type: 'text',
                                    value: ''
                                });

                            obj.containers.youtubeForm._name = templateName;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.templateName + ':'))
                                    .append(templateName)
                            );
                            table.append(tr);

                            var tr = $('<tr>');
                            /**
                             * Bug 48269
                             * https://bug-tracking.trueconf.com/show_bug.cgi?id=48269
                             * @type {*|HTMLElement}
                             */
                            var serverUrl = $('<input>',
                                {
                                    id: obj.prefix + 'serverUrl',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''
                                }
                            );

                            obj.containers.youtubeForm._server_url = serverUrl;
                            tr.append(
                                $('<td>', {colspan: 2})
                                    .append($('<p>').text(obj.locale.serverUrl + ':'))
                                    .append(serverUrl)
                            );

                            /**
                             * Bug 48269
                             * https://bug-tracking.trueconf.com/show_bug.cgi?id=48269
                             * @type {*|HTMLElement}
                             */
                            var streamKey = $('<input>',
                                {
                                    id: obj.prefix + 'streamKey',
                                    type: 'password',
                                    value: '',
                                    placeholder: ''
                                }
                            );
                            obj.containers.youtubeForm._stream_key = streamKey;
                            tr.append(
                                $('<td>', {colspan: 2})
                                    .append($('<p>').text(obj.locale.streamKey + ':'))
                                    .append(streamKey)
                            );

                            table.append(tr);

                            return table;
                        }
                    },

                    validate: function () {
                        obj.presetObject._name = obj.containers.youtubeForm._name.val();
                        obj.presetObject._provider = obj.containers.youtubeForm._provider;

                        var valid = checkLength(obj.containers.youtubeForm._name, obj.locale.templateName, 1, 255);
                        valid = valid && obj.presetTools.checkPresetExist(obj.presetObject._provider, obj.containers.youtubeForm._name.val());

                        var server_url = obj.containers.youtubeForm._server_url,
                            stream_key = obj.containers.youtubeForm._stream_key;

                        var announceUrl = $('<input>').val(server_url.val().trim('/') + '/' + stream_key.val());
                        obj.presetObject._announceUrl = announceUrl;

                        return valid;
                    }
                },

                additionalSettings: {
                    _showLink: null,
                    _table: null,

                    get: function (is_pull) {
                        var content = $('<div>');

                        var table = $('<table>', {id: 'addSettings'});
                        obj.containers.additionalSettings._table = table;
                        var colw = $('<col width="30%"><col width="70%">');
                        table.append(colw);

                        obj.containers.additionalSettings._showLink = $('<a>', {
                            href: "#",
                            'class': "add-settings show-settings"
                        }).text(obj.locale.textShowAddSettings);

                        obj.containers.additionalSettings._showLink.click(function () {
                            if ($(this).hasClass('show-settings')) {
                                obj.containers.additionalSettings.show();
                            } else {
                                obj.containers.additionalSettings.hide();
                            }
                        });

                        table.append(obj.containers.additionalSettings.codecs.get());
                        if (is_pull === undefined) {
                            table.append(obj.containers.additionalSettings.rtpOverTcp.get())
                                .append(obj.containers.additionalSettings.inactiveReceiverTimeout.get())
                                .append(obj.containers.additionalSettings.retries.get())
                                .append(obj.containers.additionalSettings.retryDelay.get());
                            obj.containers.additionalSettings.rtpOverTcp.disable();
                        }


                        content.append(obj.containers.additionalSettings._showLink)
                            .append(table);


                        obj.containers.additionalSettings.hide();

                        return content;
                    },

                    codecs: {
                        get: function () {
                            var tr = $('<tr>');
                            tr.append(obj.containers.additionalSettings.codecs.videoCodec.get())
                                .append(obj.containers.additionalSettings.codecs.audioCodec.get());

                            return tr;
                        },

                        videoCodec: {
                            _field: null,

                            get: function () {
                                var td = $('<td>');

                                var videoCodecSelect = $('<select>', {name: 'videoCodec', id: 'videoCodec'});

                                $.each(obj.rtsp.videoCodecList, function (i, item) {
                                    videoCodecSelect.append($('<option>', {value: item}).text(i));
                                });

                                obj.containers.additionalSettings.codecs.videoCodec._field = videoCodecSelect;
                                obj.presetObject._videoCodec = videoCodecSelect;

                                td.append($('<p>').text(obj.locale.videoCodec))
                                    .append(videoCodecSelect);

                                return td;
                            }
                        },

                        audioCodec: {
                            _field: null,

                            get: function () {
                                var td = $('<td>');

                                var audioCodecSelect = $('<select>', {name: 'audioCodec', id: 'audioCodec'});

                                $.each(obj.rtsp.audioCodecList, function (i, item) {
                                    audioCodecSelect.append($('<option>', {value: item}).text(i));
                                });

                                obj.containers.additionalSettings.codecs.audioCodec._field = audioCodecSelect;
                                obj.presetObject._audioCodec = audioCodecSelect;

                                td.append($('<p>').text(obj.locale.audioCodec))
                                    .append(audioCodecSelect);

                                return td;
                            },

                            set: function (codec) {
                                obj.containers.additionalSettings.codecs.audioCodec._field.val(codec);
                            }
                        }
                    },

                    rtpOverTcp: {
                        _field: null,

                        get: function () {
                            var container = $('<tr>');
                            var td = $('<td>', {colspan: '3'});

                            var checkbox = $('<input>', {id: obj.prefix + 'rtpOverTcp', type: 'checkbox', checked: false});

                            obj.containers.additionalSettings.rtpOverTcp._field = checkbox;
                            obj.presetObject._rtpOverTcp = checkbox;

                            checkbox.on('click', function () {
                                if (this.checked) {
                                    obj.containers.additionalSettings.inactiveReceiverTimeout.enable();
                                } else {
                                    obj.containers.additionalSettings.inactiveReceiverTimeout.disable();
                                }
                            });

                            var label = $('<label>').append(checkbox).append(obj.locale.rtpOverTcp);

                            td.append(label);

                            container.append(td);

                            return container;
                        },

                        disable: function () {
                            obj.containers.additionalSettings.rtpOverTcp._field.prop('checked', false);
                            obj.containers.additionalSettings.inactiveReceiverTimeout.disable();
                        },

                        enable: function () {
                            obj.containers.additionalSettings.rtpOverTcp._field.prop('checked', true);
                            obj.containers.additionalSettings.inactiveReceiverTimeout.enable();
                        }
                    },

                    inactiveReceiverTimeout: {
                        _field: null,

                        get: function () {
                            var tr = $('<tr>');

                            var td = $('<td>').text(obj.locale.inactiveReceiverTimeout);

                            tr.append(td);

                            var timeout = $('<input>', {
                                id: obj.prefix + 'inactiveReceiverTimeout',
                                type: 'text',
                                value: obj.rtsp.inactiveReceiverTimeout
                            });

                            timeout.keyup(function () {
                                var safeVal = obj.presetTools.safeIntInput(timeout.val());
                                timeout.val(safeVal);
                            });

                            obj.containers.additionalSettings.inactiveReceiverTimeout._field = timeout;
                            obj.presetObject._inactiveReceiverTimeout = timeout;

                            tr.append($('<td>').append(timeout));

                            return tr;
                        },

                        disable: function () {
                            obj.containers.additionalSettings.inactiveReceiverTimeout._field.prop('disabled', true);
                        },

                        enable: function () {
                            obj.containers.additionalSettings.inactiveReceiverTimeout._field.removeProp('disabled');
                        }
                    },

                    retries: {
                        _field: null,

                        get: function () {
                            var tr = $('<tr>');

                            var td = $('<td>').text(obj.locale.retries);

                            tr.append(td);

                            var retries = $('<input>', {id: obj.prefix + 'retries', type: 'text', value: 0});

                            retries.keyup(function () {
                                var safeVal = obj.presetTools.safeIntInput(retries.val());
                                retries.val(safeVal);
                            });

                            obj.containers.additionalSettings.retries._field = retries;
                            obj.presetObject._retries = retries;

                            tr.append($('<td>').append(retries));

                            return tr;
                        }
                    },

                    retryDelay: {
                        _field: null,

                        get: function () {
                            var tr = $('<tr>');

                            var td = $('<td>').text(obj.locale.retryDelay);

                            tr.append(td);

                            var retryDelay = $('<input>', {id: obj.prefix + 'retryDelay', type: 'text', value: 10});

                            retryDelay.keyup(function () {
                                var safeVal = obj.presetTools.safeIntInput(retryDelay.val());
                                retryDelay.val(safeVal);
                            });

                            obj.containers.additionalSettings.retryDelay._field = retryDelay;
                            obj.presetObject._retryDelay = retryDelay;

                            tr.append($('<td>').append(retryDelay));

                            return tr;
                        }
                    },

                    enableRtpOverTcp: function (value) {
                        obj.containers.additionalSettings.rtpOverTcp.enable();
                        obj.containers.additionalSettings.inactiveReceiverTimeout._field.val(value);
                    },

                    show: function () {
                        obj.containers.additionalSettings._showLink.text(obj.locale.textHideAddSettings).removeClass('show-settings').addClass('hide-settings');
                        obj.containers.additionalSettings._table.show();
                    },

                    hide: function () {
                        obj.containers.additionalSettings._showLink.text(obj.locale.textShowAddSettings).removeClass('hide-settings').addClass('show-settings');
                        obj.containers.additionalSettings._table.hide();
                    }
                },

                authentication: {
                    _field: null,

                    get: function () {
                        var content = $('<div>');

                        var table = $('<table>');
                        var colw = $('<col width="40%"><col width="60%">');
                        table.append(colw);

                        var tr = $('<tr>');

                        var checkbox = $('<input>', {id: obj.prefix + 'authentication', type: 'checkbox', checked: false});
                        obj.containers.authentication._field = checkbox;

                        checkbox.on('click', function () {
                            if (this.checked) {
                                obj.containers.authentication.authFields.show();
                            } else {
                                obj.containers.authentication.authFields.hide();
                            }
                        });

                        var label = $('<label>').append(checkbox).append(obj.locale.authentication);

                        tr.append($('<td>').append(label));

                        table.append(tr)
                            .append(obj.containers.authentication.authFields.get());

                        content.append(table);

                        return content;
                    },

                    authFields: {
                        _login: null,
                        _password: null,
                        _container: null,

                        get: function () {
                            var tr = $('<tr>', {'class': 'none'});

                            var login = $('<input>',
                                {
                                    id: obj.prefix + 'login',
                                    name: 'login',
                                    type: 'text',
                                    value: '',
                                    placeholder: ''//obj.locale.entryLogin
                                });

                            obj.containers.authentication.authFields._login = login;
                            obj.presetObject._login = login;

                            var password = $('<input>',
                                {
                                    id: obj.prefix + 'password',
                                    name: 'password',
                                    type: 'password',
                                    value: '',
                                    placeholder: ''//obj.locale.entryPassword
                                });

                            obj.containers.authentication.authFields._password = password;
                            obj.presetObject._password = password;

                            tr.append(
                                $('<td>')
                                    .append($('<p>').text(obj.locale.login + ':'))
                                    .append(login)
                            )
                                .append(
                                    $('<td>')
                                        .append($('<p>').text(obj.locale.password + ':'))
                                        .append(password)
                                );

                            obj.containers.authentication.authFields._container = tr;

                            return tr;
                        },

                        show: function () {
                            obj.containers.authentication.authFields._container.show();
                        },

                        hide: function () {
                            obj.containers.authentication.authFields._container.hide();
                        }
                    }
                },

                // </editor-fold>

                // <editor-fold defaultstate="collapsed" desc="initPopup">
                popup: {
                    presetForm: {
                        _dialogContainer: null,
                        _rendered: null,

                        get: function () {
                            if (obj.containers.popup.presetForm._rendered === null) {
                                obj.containers.popup.presetForm._rendered = obj.containers.popup.presetForm.init();
                            }

                            return obj.containers.popup.presetForm._rendered;
                        },

                        init: function () {
                            obj.containers.popup.presetForm._dialogContainer = $('<div>', {id: 'presetForm'});

                            obj.containers.popup.presetForm._dialogContainer.dialog({
                                title: obj.locale.titleCreateNewConfig,
                                autoOpen: false,
                                modal: false,
                                draggable: true,
                                resizable: false,
                                dialogClass: "presetForm",
                                width: 750,
                                minHeight: 400,
                                buttons: {
                                    'save': {
                                        text: obj.locale.btnCreate,
                                        id: obj.prefix + "btnCreate",
                                        'class': 'btnCreate',
                                        click: function () {
                                        }
                                    }
                                },
                                create: function () {
                                    $(this).css("maxHeight", obj.popupHeight);
                                },
                                open: function () {
                                    obj.containers.streamingDialog.close();
                                }
                            });

                            return obj.containers.popup.presetForm._dialogContainer;
                        },

                        prepareButtons: function (edit) {
                            if (!edit) {
                                obj.containers.popup.presetForm._dialogContainer.parent().find('.ui-dialog-buttonset').css('float', 'right');
                                obj.containers.popup.presetForm.addBtnBack();
                            } else {
                                obj.containers.popup.presetEditForm._dialogContainer.parent().find('.ui-dialog-buttonset').css('float', 'none');
                            }
                        },

                        addBtnBack: function () {
                            var btnBack = $('<span>', {
                                id: 'btnBack',
                                'class': 'btnBack',
                                html: obj.locale.btnBack
                            });

                            var buttonpane = obj.containers.popup.presetForm._dialogContainer.parent().find(".ui-dialog-buttonpane");
                            buttonpane.find('.btnBackBlock').remove();
                            buttonpane.prepend($('<span class="btnBackBlock">').append(btnBack));

                            btnBack.click(function () {
                                obj.containers.popup.presetForm.close();
                            });
                        },

                        fixButtonsStyle: function () {
                            obj.containers.popup.presetForm._dialogContainer.parent().find('.ui-dialog-buttonset').css('float', 'right');
                        },

                        close: function () {
                            obj.containers.popup.presetForm._dialogContainer.dialog('close');
                            obj.containers.streamingDialog.open();
                        }
                    },

                    presetEditForm: {
                        _dialogContainer: null,
                        _rendered: null,

                        get: function () {
                            if (obj.containers.popup.presetEditForm._rendered === null) {
                                obj.containers.popup.presetEditForm._rendered = obj.containers.popup.presetEditForm.init();
                            }

                            return obj.containers.popup.presetEditForm._rendered;
                        },

                        init: function () {
                            obj.containers.popup.presetEditForm._dialogContainer = $('<div>', {id: 'presetEditForm'});

                            obj.containers.popup.presetEditForm._dialogContainer.dialog({
                                autoOpen: false,
                                modal: false,
                                draggable: true,
                                resizable: false,
                                dialogClass: "presetForm",
                                width: 750,
                                minHeight: 350,
                                buttons: {
                                    'delete': {
                                        text: obj.locale.btnDelete,
                                        id: obj.prefix + "btnDelete",
                                        'class': 'btnDelete',
                                        click: function () {
                                        }
                                    },
                                    'cancel': {
                                        text: obj.locale.btnCancel,
                                        id: obj.prefix + "btnCancel",
                                        'class': 'btnCancel',
                                        click: function () {
                                            $(this).dialog('close');
                                        }
                                    },
                                    'save': {
                                        text: obj.locale.btnSave,
                                        id: obj.prefix + "btnSave",
                                        'class': 'btnSave',
                                        click: function () {
                                        }
                                    }
                                },
                                create: function () {
                                    $(this).css("maxHeight", obj.popupHeight);
                                },
                                close: function () {
                                    obj.presetObject._id = null;
                                    obj.presetObject._name = null;
                                    obj.presetObject._login = null;
                                    obj.presetObject._password = null;
                                    obj.presetObject._announceUrl = null;
                                    obj.presetObject._provider = null;
                                    obj.presetObject._rtpOverTcp = null;
                                    obj.presetObject._inactiveReceiverTimeout = null;
                                    obj.presetObject._videoCodec = null;
                                    obj.presetObject._audioCodec = null;
                                }
                            });

                            obj.containers.popup.presetEditForm.fixButtonsStyle();

                            return obj.containers.popup.presetEditForm._dialogContainer;
                        },

                        fixButtonsStyle: function () {
                            obj.containers.popup.presetEditForm._dialogContainer.parent().find('.ui-dialog-buttonset').css('float', 'none');
                        }
                    },

                    presetSelectForm: {
                        _dialogContainer: null,
                        _rendered: null,

                        get: function () {
                            if (obj.containers.popup.presetSelectForm._rendered === null) {
                                obj.containers.popup.presetSelectForm._rendered = obj.containers.popup.presetSelectForm.init();
                            }

                            return obj.containers.popup.presetSelectForm._rendered;
                        },

                        init: function () {
                            obj.containers.popup.presetSelectForm._dialogContainer = $('<div>', {id: 'presetSelect'});

                            obj.containers.popup.presetSelectForm._dialogContainer.dialog({
                                title: obj.locale.titleSelectConfig,
                                autoOpen: false,
                                modal: false,
                                draggable: true,
                                resizable: false,
                                dialogClass: "presetForm",
                                width: 750,
                                minHeight: 350,
                                buttons: {
                                    'disable': {
                                        text: obj.locale.btnDisable,
                                        id: obj.prefix + "btnDisable",
                                        'class': 'btnDisable',
                                        click: function () {
                                            $(this).dialog('close');
                                            obj.onBroadcastDisable();
                                            obj.presetTools.disableBroadcast();
                                        }
                                    },
                                    'apply': {
                                        text: obj.locale.btnApply,
                                        id: obj.prefix + "btnApply",
                                        'class': 'btnApply',
                                        click: function () {
                                            $(this).dialog('close');
                                            var selectedPreset = obj.containers.presetSelect._select.val();
                                            obj.presetTools.selectPreset(selectedPreset);
                                        }
                                    }
                                }
                            });

                            obj.containers.popup.presetSelectForm.fixButtonsStyle();

                            return obj.containers.popup.presetSelectForm._dialogContainer;
                        },

                        hideButton: function () {
                            obj.containers.popup.presetSelectForm._dialogContainer.parent().find('.ui-dialog-buttonset .btnDisable').hide();
                        },

                        showButton: function () {
                            if (obj.containers.popup.presetSelectForm._dialogContainer === null) {
                                return;
                            }

                            obj.containers.popup.presetSelectForm._dialogContainer.parent().find('.ui-dialog-buttonset .btnDisable').show();
                        },

                        fixButtonsStyle: function () {
                            obj.containers.popup.presetSelectForm._dialogContainer.parent().find('.ui-dialog-buttonset').css('float', 'none');
                        }
                    },

                    removeDialog: {
                        _rendered: null,

                        get: function () {
                            if (obj.containers.popup.removeDialog._rendered === null) {
                                obj.containers.popup.removeDialog._rendered = obj.containers.popup.removeDialog.init();
                            }

                            return obj.containers.popup.removeDialog._rendered;
                        },
                        init: function () {
                            var container = $('<div>');
                            container.append($('<span>').html(obj.locale.presetWillBeDeleted));

                            container.dialog({
                                title: obj.locale.question,
                                autoOpen: false,
                                position: ['center', 'center'],
                                modal: true,
                                resizable: false,
                                dialogClass: 'dialog-question-form',
                                width: 300,
                                height: 150,
                                buttons: {
                                    'delete': {
                                        text: obj.locale.btnDelete,
                                        click: function () {
                                        }
                                    },
                                    'cancel': {
                                        text: obj.locale.btnCancel,
                                        click: function () {
                                            $(this).dialog("close");
                                        }
                                    }
                                }
                            });

                            return container;
                        },

                        show: function (callback) {
                            var container = obj.containers.popup.removeDialog.get();
                            container.dialog("open");

                            var buttons = container.dialog("option", "buttons");
                            buttons["delete"].click = function () {
                                callback(container);
                            };

                            container.dialog("option", "buttons", buttons);
                        }
                    }
                }
                // </editor-fold>
            },

            presetObject: {
                _id: null,
                _name: null,
                _login: null,
                _password: null,
                _announceUrl: null,
                _provider: null,
                _rtpOverTcp: null,
                _inactiveReceiverTimeout: null,
                _videoCodec: null,
                _audioCodec: null,
                _retries: null,
                _retryDelay: null
            },

            // <editor-fold defaultstate="collapsed" desc="presetTools">
            presetTools: {
                getPresetList: function (resolve, reject) {
                    $.ajax({
                        url: obj.handlers.getPresetList,
                        type: 'GET',
                        dataType: 'json'
                    }).done(function (data) {
                        if (data.preset_list) {
                            obj.presetList = data.preset_list;
                        }
                        resolve();
                    }).fail(function (e) {
                        reject(e);
                    });
                },

                checkPresetExist: function (provider, login) {
                    var check = true;

                    $.each(obj.presetList, function (i, preset) {
                        if (provider === preset.provider_type) {
                            if (login === undefined || login === preset.name) {
                                check = false;

                                return false;
                            }
                        }
                    });

                    if (!check && obj.presetObject._id) {
                        check = true;
                    }

                    if (!check) {
                        obj.presetTools.updateTips(obj.locale.textConfigurationAlreadyExists);
                    }

                    return check;
                },

                getCDNvideoPresetState: function (preset_list) {
                    $.ajax({
                        url: obj.handlers.prepareCDNvideoPresetsState,
                        type: 'POST',
                        dataType: 'json',
                        data: {preset_list: preset_list},
                        success: function (result) {
                            if (!result.error) {
                                preset_list = result.success;
                                $.each(preset_list, function (i, preset) {
                                    if (preset.state) {
                                        var preset_item = $('#preset-' + preset.id);
                                        preset_item.html(preset.state);
                                        preset_item.css('color', preset.allowed ? 'green' : 'red');
                                    }
                                });
                            }
                        },
                        error: function () {
                            obj.presetTools.sendMessage(obj.locale.error, true);
                        }
                    });
                },

                createCDNvideoAccount: function () {
                    $.ajax({
                        url: obj.handlers.createCDNvideoAccount,
                        type: 'POST',
                        dataType: 'json',
                        data: {'login': obj.containers.CDNvideoRegForm._login.val()}
                    })
                        .then(function (data, textStatus, jqXHR) {
                            obj.presetTools.enableApplyButton();

                            var filter = $.Deferred();

                            if (data.error) {
                                return filter.reject(data, textStatus, jqXHR);
                            }
                            return filter.resolve(data, textStatus, jqXHR);
                        })
                        .done(function (data) {
                            if (data.success) {
                                obj.presetObject._password = $('<input>').val(data.success.password);
                                obj.presetTools.savePreset();
                                // obj.containers.CDNvideoAuthForm.init().dialog('open');
                                // obj.containers.CDNvideoAuthForm._login.val(data.success.login);
                                // obj.containers.CDNvideoAuthForm._password.val(data.success.password);
                            }
                        })
                        .fail(function (data) {
                            obj.presetTools.updateTips(data.error);
                        });

                },

                saveCDNvideoPreset: function (login, password, edit) {
                    $.ajax({
                        url: obj.handlers.checkCDNvideoAccountExist,
                        type: 'POST',
                        dataType: 'json',
                        data: {login: login, password: password}
                    })
                        .then(function (data, textStatus, jqXHR) {
                            obj.presetTools.enableApplyButton(edit);

                            var filter = $.Deferred();

                            if (data.error) {
                                return filter.reject(data, textStatus, jqXHR);
                            }

                            return filter.resolve(data, textStatus, jqXHR);
                        })
                        .done(function (data) {
                            if (data.success) {
                                obj.presetTools.savePreset(edit);
                            }
                        })
                        .fail(function (data) {
                            obj.presetTools.updateTips(data.error);
                        });
                },

                safeIntInput: function (value) {

                    return value.replace(/\D/ig, '');
                },

                safeInputClearSpaces: function (value) {

                    return value.replace(/\s/ig, '');
                },

                validateAnnounceUrl: function (announceUrl, item) {
                    var valid = true;

                    var matchIp = /^((https?|rtsp):\/\/)?(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(:[0-9]+)?(\/[\w\.\-?=]*)*\/?$/;
                    var matchDomain = /^((https?|rtsp):\/\/)?([\w\.-]+)\.([a-z]{2,6}\.?)(:[0-9]+)?(\/[\w\.\-?=]*)*\/?$/;

                    var matchAnnounceUrl;

                    if (matchIp.test(announceUrl.val())) {
                        matchAnnounceUrl = matchIp;
                    } else {
                        matchAnnounceUrl = matchDomain;
                    }

                    valid = valid && (checkLength(announceUrl, item, 1, 255));
                    valid = valid && (checkRegexp(announceUrl, matchAnnounceUrl, obj.locale.errorField.replace('%s', item), punycode.toASCII));

                    return valid;
                },

                validServerHost: function (serverHost, label) {
                    var valid = true;

                    serverHost.val(serverHost.val().replace(/^rtsp:\/\//, '').replace(/:\d+$/, ''));

                    var matchIp = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
                    var matchDomain = /^([\w\.-]+)\.([a-z]{2,6}\.?)$/;

                    var matchAnnounceUrl;

                    if (matchIp.test(serverHost.val())) {
                        matchAnnounceUrl = matchIp;
                    } else {
                        matchAnnounceUrl = matchDomain;
                    }

                    valid = valid && (checkLength(serverHost, label, 1, 255));
                    valid = valid && (checkRegexp(serverHost, matchAnnounceUrl, obj.locale.errorField.replace('%s', label), punycode.toASCII));

                    return valid;
                },

                validPrimaryServer: function (primary_server, label) {
                    var valid = true;

                    var matchIp = /^rtsp:\/\/(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(\/[\w\.-]*)*\/?$/;
                    var matchDomain = /^rtsp:\/\/([\w\.-]+)\.([a-z]{2,6}\.?)(\/[\w\.-]*)*\/?$/;

                    var matchAnnounceUrl;

                    if (matchIp.test(primary_server.val())) {
                        matchAnnounceUrl = matchIp;
                    } else {
                        matchAnnounceUrl = matchDomain;
                    }

                    valid = valid && (checkLength(primary_server, label, 1, 255));
                    valid = valid && (checkRegexp(primary_server, matchAnnounceUrl, obj.locale.errorField.replace('%s', label), punycode.toASCII));

                    return valid;
                },

                getAnnounceUrl: function () {
                    var announceUrl = '';

                    if (obj.plugins.conferencePlugin.outsideUrl && obj.plugins.conferencePlugin.cid.value) {
                        announceUrl = 'rtsp://' + obj.plugins.conferencePlugin.outsideUrl + obj.plugins.conferencePlugin.cid.value.replace(/\\/g, "/");
                    }

                    return announceUrl;
                },

                renderPresetList: function () {
                    var content = $('<div>', {id: 'broadcast'});
                    var fieldset = $('<fieldset>', {id: 'fieldset-preset-list'});
                    var legend = $('<legend>').text(obj.locale.presetList);
                    var table = $('<table>', {'class': 'table-body'});

                    obj.presetTools.renderPresetTableLines(table);

                    fieldset.append(legend)
                        .append(table);

                    content.append(fieldset);

                    var btnAddPreset = $('<a>', {'class': 'button'});
                    btnAddPreset.text(obj.locale.btnAddPreset);

                    btnAddPreset.click(function () {
                        obj.containers.streamingDialog.open();
                    });

                    fieldset.append(btnAddPreset);

                    return content;
                },

                renderPresetTableLines: function (table) {
                    table.empty();

                    if (Object.keys(obj.presetList).length > 0) {
                        for (var preset in obj.presetList) {

                            var presetTitle = obj.presetTools.getPresetTitle(preset);

                            var presetObj = obj.presetList[preset];

                            var a = $('<a>', {
                                href: '#',
                                id: presetObj.id,
                                'data-provider': presetObj.provider_type
                            }).text(presetTitle);

                            a.bind('click', function () {
                                obj.presetTools.editPreset($(this).attr('id'));
                            });

                            var presetLine = $('<span>').append(a);
                            var presetState = $('<span>', {id: 'preset-' + presetObj.id}).text(presetObj.state);

                            var tr = $('<tr>');
                            tr.append($('<td>').append(presetLine).append(presetState));
                            table.append(tr);
                        }
                        obj.presetTools.getCDNvideoPresetState(obj.presetList);
                    } else {
                        var text_empty = $('<span>').text(obj.locale.textEmptyList);
                        var tr = $('<tr>', {'class': 'empty-tr'});
                        tr.append($('<td>').append(text_empty));
                        table.append(tr);
                    }
                },

                savePreset: function (edit) {
                    var login = (obj.presetObject._login ? obj.presetObject._login.val() : '');
                    var password = obj.presetObject._password ? obj.presetObject._password.val() : '';
                    var announceUrl = obj.presetObject._announceUrl ? obj.presetObject._announceUrl.val() : '';
                    var rtpOverTcp = obj.presetObject._rtpOverTcp && obj.presetObject._rtpOverTcp.prop('checked') ? 1 : 0;
                    var videoCodec = obj.presetObject._videoCodec && obj.presetObject._videoCodec.val() ? obj.presetObject._videoCodec.val() : obj.rtsp.defaultVideoCodec;
                    var audioCodec = obj.presetObject._audioCodec && obj.presetObject._audioCodec.val() ? obj.presetObject._audioCodec.val() : obj.rtsp.defaultAudioCodec;
                    var timeout = rtpOverTcp ? obj.presetObject._inactiveReceiverTimeout.val() : obj.rtsp.inactiveReceiverTimeout;
                    var retries = obj.presetObject._retries ? obj.presetObject._retries.val() : obj.rtsp.retries;
                    var retryDelay = obj.presetObject._retryDelay ? obj.presetObject._retryDelay.val() : obj.rtsp.retryDelay;

                    var preset = {
                        identifier: obj.presetObject._id,
                        name: obj.presetObject._name,
                        login: login,
                        password: password,
                        url: announceUrl,
                        provider: obj.presetObject._provider,
                        videoCodec: videoCodec,
                        audioCodec: audioCodec,
                        rtpOverTcp: rtpOverTcp,
                        inactiveReceiverTimeout: timeout,
                        retries: retries,
                        retryDelay: retryDelay
                    };

                    $.ajax({
                        url: obj.handlers.savePreset,
                        type: "POST",
                        dataType: 'json',
                        data: preset,
                        beforeSend: function () {
                            obj.presetTools.disableApplyButton(edit);
                        }
                    })
                        .then(function (data, textStatus, jqXHR) {
                            obj.presetTools.enableApplyButton(edit);

                            var filter = $.Deferred();

                            if (data.error) {
                                return filter.reject(data, textStatus, jqXHR);
                            }

                            return filter.resolve(data, textStatus, jqXHR);
                        })
                        .done(function (data) {
                            if (edit === undefined) {
                                obj.containers.popup.presetForm._dialogContainer.dialog('close');
                            } else {
                                obj.containers.popup.presetEditForm._dialogContainer.dialog('close');
                            }

                            obj.presetList = data.preset_list;

                            if (!obj.confPage) {
                                var table = $('.table-body');
                                obj.presetTools.renderPresetTableLines(table);
                                obj.rtsp.preset = data.preset_id;
                            } else {
                                obj.presetTools.selectPreset(data.preset_id);
                                obj.containers.presetBroadcast._button.unbind().bind('click', function () {
                                    obj.containers.presetSelect.init().dialog('open');
                                });
                            }

                            obj.presetTools.sendMessage(data.success);
                        })
                        .fail(function (data) {
                            obj.presetTools.updateTips(data.error);
                            obj.presetTools.disableApplyButton(edit);
                        });
                },

                deletePreset: function (preset_id) {
                    if (obj.presetList[preset_id] !== 'undefined') {
                        $.ajax({
                            url: obj.handlers.deletePreset,
                            type: 'POST',
                            dataType: 'json',
                            data: {'preset_id': preset_id},
                            success: function (result) {
                                if (result.success) {
                                    delete obj.presetList[preset_id];

                                    obj.containers.popup.presetEditForm._dialogContainer.dialog('close');
                                    obj.presetTools.sendMessage(result.success);

                                    if (!obj.confPage) {
                                        var table = $('.table-body');
                                        obj.presetTools.renderPresetTableLines(table);
                                    } else {
                                        if (obj.rtsp.preset == preset_id) {
                                            obj.onPresetDelete(obj.rtsp.preset);
                                            obj.presetTools.disableBroadcast();
                                        }
                                    }
                                } else {
                                    obj.presetTools.sendMessage(result.error, true);
                                }
                            },
                            error: function () {
                                obj.presetTools.sendMessage(obj.local.error, true);
                            }
                        });
                    }
                },

                editPreset: function (preset_id) {
                    if (obj.presetList[preset_id] !== 'undefined') {
                        obj.presetObject._id = preset_id;

                        var preset = obj.presetList[preset_id];

                        if (preset.provider_type === obj.containers.manualPushForm._provider) {
                            obj.containers.manualPushForm.init(true).dialog('open');
                            obj.containers.manualPushForm._name.val(preset.name);
                            obj.containers.manualPushForm._announceUrl.val(preset.url);
                        } else if (preset.provider_type === obj.containers.manualPullForm._provider) {
                            obj.containers.manualPullForm.init(true).dialog('open');
                            obj.containers.manualPullForm._name.val(preset.name);
                        } else if (preset.provider_type === obj.containers.CDNvideoAuthForm._provider) {
                            obj.containers.CDNvideoAuthForm.init(true).dialog('open');
                            obj.containers.CDNvideoAuthForm._login.val(preset.username);
                            obj.containers.CDNvideoAuthForm._password.val(preset.password);
                        } else if (preset.provider_type === obj.containers.wowzaServerForm._provider) {
                            obj.containers.wowzaServerForm.init(true).dialog('open');
                            obj.containers.wowzaServerForm._name.val(preset.name);

                            var parsedUrl = obj.presetTools.parseUrl(preset.url);

                            if (parsedUrl) {
                                obj.containers.wowzaServerForm._host.val(parsedUrl['host']);
                                obj.containers.wowzaServerForm._port.val(parsedUrl['port']);
                                obj.containers.wowzaServerForm._application.val(parsedUrl['application']);
                            }
                        } else if (preset.provider_type === obj.containers.wowzaCloudForm._provider) {
                            obj.containers.wowzaCloudForm.init(true).dialog('open');
                            obj.containers.wowzaCloudForm._name.val(preset.name);

                            var parsedUrl = obj.presetTools.parseUrl(preset.url);

                            if (parsedUrl) {
                                obj.containers.wowzaCloudForm._host.val(parsedUrl['scheme'] + parsedUrl['host'] + '/' + parsedUrl['application']);
                                obj.containers.wowzaCloudForm._port.val(parsedUrl['port']);
                                obj.containers.wowzaCloudForm._stream.val(parsedUrl['stream']);
                            }
                        } else if (preset.provider_type === obj.containers.youtubeForm._provider) {
                            obj.containers.youtubeForm.init(true).dialog('open');
                            obj.containers.youtubeForm._name.val(preset.name);

                            var parsedUrl = preset.url.split('/');
                            var partsCount = parsedUrl.length;
                            if (partsCount > 0) {
                                obj.containers.youtubeForm._stream_key.val(parsedUrl.pop());
                                obj.containers.youtubeForm._server_url.val(parsedUrl.join('/'));
                            }
                        }

                        var buttons = obj.containers.popup.presetEditForm._dialogContainer.dialog("option", "buttons");

                        buttons['delete'].click = function () {
                            obj.containers.popup.removeDialog.show(function (container) {
                                container.dialog("close");
                                obj.presetTools.deletePreset(preset_id);
                            });
                        };

                        if (preset.provider_type !== obj.containers.CDNvideoAuthForm._provider) {
                            var codecs = preset.enabled_codecs.split(' ');

                            if (codecs.length) {
                                var videoCodec = codecs[0];
                                var audioCodec = codecs[1];
                            }

                            obj.containers.additionalSettings.codecs.videoCodec._field.val(videoCodec ? videoCodec : obj.rtsp.defaultVideoCodec);
                            obj.containers.additionalSettings.codecs.audioCodec._field.val(audioCodec ? audioCodec : obj.rtsp.defaultAudioCodec);

                            if (preset.provider_type !== obj.containers.manualPullForm._provider && preset.provider_type !== obj.containers.youtubeForm._provider) {
                                var checked = preset.rtp_over_tcp === '1' ? true : false;
                                obj.containers.additionalSettings.rtpOverTcp._field.prop('checked', checked);
                                obj.containers.additionalSettings.inactiveReceiverTimeout._field.val(preset.inactive_receiver_timeout);

                                if (preset.rtp_over_tcp !== '0') {
                                    obj.containers.additionalSettings.rtpOverTcp.enable();
                                } else {
                                    obj.containers.additionalSettings.rtpOverTcp.disable();
                                }

                                obj.containers.additionalSettings.retries._field.val(preset.retries);
                                obj.containers.additionalSettings.retryDelay._field.val(preset.retry_delay);
                            }

                            // auth
                            if (preset.username && preset.password) {
                                obj.containers.authentication._field.prop('checked', true);
                                obj.containers.authentication.authFields.show();
                                obj.containers.authentication.authFields._login.val(preset.username);
                                obj.containers.authentication.authFields._password.val(preset.password);
                            }
                        }

                        var presetTitle = obj.presetTools.getPresetTitle(preset.id);

                        obj.containers.popup.presetEditForm._dialogContainer.dialog("option", "buttons", buttons);
                        obj.containers.popup.presetEditForm._dialogContainer.dialog("option", "title", obj.locale.textConfiguration + ' ' + presetTitle);
                    }
                },

                selectPreset: function (preset) {
                    obj.rtsp.preset = preset;

                    var presetTitle = obj.presetTools.getPresetTitle(obj.rtsp.preset);
                    obj.containers.presetBroadcast._button.text(obj.locale.selectedPreset + ' ' + presetTitle);

                    if (obj.presetList[obj.rtsp.preset].provider_type === obj.containers.CDNvideoAuthForm._provider) {
                        obj.containers.presetBroadcast.playerCode.show();
                        obj.containers.presetBroadcast.playerCode.disable();
                    } else {
                        obj.containers.presetBroadcast.playerCode.hide();
                    }

                    obj.containers.popup.presetSelectForm.showButton();

                    obj.onPresetSave(obj.rtsp.preset);
                },

                disableBroadcast: function () {
                    obj.rtsp.preset = null;

                    obj.containers.presetBroadcast._button.text(obj.locale.textTurnOn);
                    obj.containers.presetBroadcast.playerCode.hide();
                    obj.containers.presetBroadcast._button.unbind().bind('click', function () {
                        if ($.isEmptyObject(obj.presetList)) {
                            obj.containers.streamingDialog.open();
                        } else {
                            obj.containers.presetSelect.init().dialog('open');
                        }
                    });
                    obj.containers.popup.presetSelectForm.hideButton();
                },

                getPresetTitle: function (preset) {
                    var title = '';
                    var presetObj = obj.presetList[preset];

                    if (presetObj.provider_type === obj.containers.manualPushForm._provider) {
                        title = obj.locale.manualPush + ' (' + presetObj.name + ')';
                    } else if (presetObj.provider_type === obj.containers.manualPullForm._provider) {
                        title = obj.locale.manualPull + ' (' + presetObj.name + ')';
                    } else if (presetObj.provider_type === obj.containers.CDNvideoAuthForm._provider
                        || presetObj.provider_type === obj.containers.youtubeForm._provider) {
                        title = presetObj.name;
                    } else if (presetObj.provider_type === obj.containers.wowzaServerForm._provider) {
                        title = obj.containers.wowzaServerForm._providerTitle + ' (' + presetObj.name + ')';
                    } else if (presetObj.provider_type === obj.containers.wowzaCloudForm._provider) {
                        title = obj.containers.wowzaCloudForm._providerTitle + ' (' + presetObj.name + ')';
                    }

                    return title;
                },

                parseUrl: function (url) {
                    var pattern = new RegExp("(.+:\/\/)([^:\/?]*)(?:\:([0-9]+))?\/(.[^\/]+)\/(.[^\/]+)?");
                    var parsedUrl = url.match(pattern);
                    var url = [];

                    if (parsedUrl) {
                        url['scheme'] = parsedUrl[1];
                        url['host'] = parsedUrl[2];
                        url['port'] = parsedUrl[3];
                        url['application'] = parsedUrl[4];
                        url['stream'] = parsedUrl[5];
                    }

                    return url;
                },

                sendMessage: function (msg, error) {
                    if (error) {
                        $(document).trigger('display-header-error', {message: msg});
                    } else {
                        $(document).trigger('display-header-messages', {message: msg});
                    }
                },

                updateTips: function (msg) {
                    updateTips(msg);
                },

                getApplyButton: function (edit) {
                    if (edit) {
                        var buttons = obj.containers.popup.presetEditForm._dialogContainer.parent().find(".ui-dialog-buttonpane");
                        var button = buttons.find('.btnSave');
                    } else {
                        var buttons = obj.containers.popup.presetForm._dialogContainer.parent().find(".ui-dialog-buttonpane");
                        var button = buttons.find('.btnCreate');
                    }

                    return button;
                },

                disableApplyButton: function (edit) {
                    var button = obj.presetTools.getApplyButton(edit);
                    button.attr('disabled', true);
                    $(".validateTips").empty();
                },

                enableApplyButton: function (edit) {
                    var button = obj.presetTools.getApplyButton(edit);
                    button.removeAttr('disabled');
                },

                /**
                 * Регулярка для проверки почты пользователя (Chromium)
                 */
                _emailRegex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            },
            // </editor-fold>

            onPresetSave: function () {
            },

            onPresetDelete: function () {
            },

            onBroadcastDisable: function () {
            }
        },
        obj;

    $.fn.presetManagerPlugin = function (params) {
        var plugin = this.data('presetManagerPlugin');

        if (plugin === undefined || plugin === false) {
            var plugin = $.extend(true, {}, std_obj);

            $.extend(true, plugin, params);

            plugin.prefix = generateUniqueId(plugin.prefix) + "_";

            var instance = this;
            plugin.init(
                function () {
                    instance.append(plugin.main());
                    instance.data('presetManagerPlugin', plugin);
                },
                function (e) {
                    console.error(e.error);
                }
            );
        }

        return plugin;
    };

})(jQuery);            