/*! For license information please see bundle-5.4.3.10.js.LICENSE.txt */ ! function() {
	var e, t, i, c, n, o = {
        9336: function(e, t, i) {
            "use strict";

            function c(e) {
                return "true" === e || "false" !== e && Boolean(e)
            }
            i.d(t, {
                A: function() {
                    return c
                }
            })
        },
        86281: function(e, t, i) {
            "use strict";
            i.d(t, {
                c: function() {
                    return G
                }
            });
            i(44114), i(9678), i(57145), i(71658), i(11558), i(69479), i(42043), i(67438), i(37467), i(44732), i(79577), i(64979), i(59848), i(71678), i(2222), i(14603), i(47566), i(98721);
            var c = i(39296),
                n = i.n(c),
                o = i(95353),
                r = i(56214),
                a = i.n(r),
                d = i(58723),
                l = (i(92245), {
                    bind(e) {
                        setTimeout((() => window.componentHandler.upgradeElement(e)))
                    }
                });
            var s = {
                    bind(e) {
                        e._blurHandler = function() {
                            var t, i, c;
                            t = document, i = "pointerup", c = () => {
                                e.blur()
                            }, t.addEventListener(i, (function e(n) {
                                t.removeEventListener(i, e), c(n)
                            }))
                        }, e.addEventListener("pointerdown", e._blurHandler)
                    },
                    unbind(e) {
                        e.removeEventListener("pointerdown", e._blurHandler), delete e._blurHandler
                    }
                },
                m = i(36545),
                p = i.n(m),
                u = {
                    bind(e) {
                        e._pointerdownHandler = () => {
                            e.classList.remove("tab-focus"), document.addEventListener("keyup", e._keyupHandler, !0), document.removeEventListener("pointerdown", e._pointerdownHandler, !0)
                        }, e._keyupHandler = t => {
                            p()("tab") === t.keyCode && (e.classList.add("tab-focus"), document.addEventListener("pointerdown", e._pointerdownHandler, !0), document.removeEventListener("keyup", e._keyupHandler, !0))
                        }, document.addEventListener("keyup", e._keyupHandler, !0)
                    },
                    unbind(e) {
                        document.removeEventListener("keyup", e._keyupHandler, !0), document.removeEventListener("pointerdown", e._pointerdownHandler, !0)
                    }
                },
                f = (i(84449), i(34818)),
                b = i(50530),
                h = i.n(b),
                g = i(55486);
            const {
                TCMediaDevicePermissionsManager: x,
                TC_MEDIA_DEVICE_PERMISSION_STATE: _,
                TC_MEDIA_DEVICE_PERMISSION_ERROR: v,
                TCMediaPermissionsType: k
            } = g.A;
            var w = {
                    state: {
                        deviceList: null,
                        playerMute: !1,
                        microphoneMute: !1,
                        captureStop: !1,
                        audioEcho: !1,
                        audioAru: !1,
                        AvailableFlagVideo: !1,
                        AvailableFlagAudio: !1,
                        AvailableFlagAudioOutput: !1,
                        showVideo: "",
                        showVideoSettings: "",
                        permissionsManager: null,
                        devicesPermission: {
                            [k[1].toLowerCase()]: _[_.DENIED],
                            [k[2].toLowerCase()]: _[_.DENIED],
                            [k[3].toLowerCase()]: _[_.DENIED]
                        },
                        listsDevice: {
                            listCameras: null,
                            listMicrophones: null,
                            listSpeakers: null
                        },
                        selectedDevice: {
                            camera: null,
                            microphone: null,
                            speaker: null
                        },
                        selectedDeviceSettings: {
                            camera: null,
                            microphone: null,
                            speaker: null
                        },
                        flagChangedCamera: !1,
                        flagChangedMicrophone: !1
                    },
                    getters: {
                        getSelectedDevice(e) {
                            return e.selectedDevice
                        },
                        getSelectedDeviceSettings(e) {
                            return e.selectedDeviceSettings
                        },
                        getDeviceList(e) {
                            return e.deviceList
                        },
                        getPlayerMute(e) {
                            return e.playerMute
                        },
                        getMicrophoneMute(e) {
                            return e.microphoneMute
                        },
                        getCaptureStop(e) {
                            return e.captureStop
                        },
                        getCamerasList(e) {
                            return e.listsDevice.listCameras
                        },
                        getMicrophoneList(e) {
                            return e.listsDevice.listMicrophones
                        },
                        getSpeakersList(e) {
                            return e.listsDevice.listSpeakers
                        },
                        getAvailableFlagVideo(e) {
                            return e.AvailableFlagVideo
                        },
                        getAvailableFlagAudio(e) {
                            return e.AvailableFlagAudio
                        },
                        getAvailableFlagAudioOutput(e) {
                            return e.AvailableFlagAudioOutput
                        },
                        getCurrentCameraId(e) {
                            return !!e.selectedDevice.camera && e.selectedDevice.camera.id
                        },
                        getCurrentMicrophoneId(e) {
                            return !!e.selectedDevice.microphone && e.selectedDevice.microphone.id
                        },
                        getCurrentSpeakerId(e) {
                            return !!e.selectedDevice.speaker && e.selectedDevice.speaker.id
                        },
                        getAudioEcho(e) {
                            return e.audioEcho
                        },
                        getAudioAru(e) {
                            return e.audioAru
                        },
                        getShowVideo(e) {
                            return e.showVideo
                        },
                        getShowVideoSettings(e) {
                            return e.showVideoSettings
                        },
                        getFlagChangedCamera(e) {
                            return e.flagChangedCamera
                        },
                        getFlagChangedMicrophone(e) {
                            return e.flagChangedMicrophone
                        },
                        getPermissionsManager(e) {
                            return e.permissionsManager
                        },
                        getDevicesPermission(e) {
                            return e.devicesPermission
                        }
                    },
                    mutations: {
                        setPlayerMute(e, t) {
                            e.playerMute = t
                        },
                        setMicrophoneMute(e, t) {
                            e.microphoneMute = t
                        },
                        setCaptureStop(e, t) {
                            e.captureStop = t
                        },
                        setAudioEcho(e, t) {
                            e.audioEcho = t
                        },
                        setAudioAru(e, t) {
                            e.audioAru = t
                        },
                        setAvailableFlagVideo(e, t) {
                            e.AvailableFlagVideo = t
                        },
                        setAvailableFlagAudio(e, t) {
                            e.AvailableFlagAudio = t
                        },
                        setShowVideo(e, t) {
                            e.showVideo = t
                        },
                        setShowVideoSettings(e, t) {
                            e.showVideoSettings = t
                        },
                        setSelectedDevice(e, {
                            type: t,
                            device: i
                        }) {
                            e.selectedDevice[t] = i
                        },
                        setSelectedMicrophoneSettings(e, t) {
                            e.selectedDeviceSettings.microphone = e.deviceList.getDeviceById(t) ? e.deviceList.getDeviceById(t) : null
                        },
                        setSelectedCameraSettings(e, t) {
                            e.selectedDeviceSettings.camera = e.deviceList.getDeviceById(t) ? e.deviceList.getDeviceById(t) : null
                        },
                        setSelectedSpeakerSettings(e, t) {
                            e.selectedDeviceSettings.speaker = e.deviceList.getDeviceById(t) ? e.deviceList.getDeviceById(t) : "default"
                        },
                        setFlagChangedCamera(e, t) {
                            e.flagChangedCamera = t
                        },
                        setFlagChangedMicrophone(e, t) {
                            e.flagChangedMicrophone = t
                        },
                        setPermissionsManager(e, t) {
                            e.permissionsManager = t
                        },
                        setDevicePermissionState(e, {
                            type: t,
                            value: i
                        }) {
                            n().set(e.devicesPermission, t, i)
                        }
                    },
                    actions: {
                        updatePermissionsManager({
                            getters: e,
                            dispatch: t,
                            commit: i
                        }) {
                            return e.getPermissionsManager ? Promise.resolve(e.getPermissionsManager) : x.getInstance().then((e => (i("setPermissionsManager", e), t("addDevicePermissionsListeners"), Promise.resolve(e))))
                        },
                        addDevicePermissionsListeners({
                            commit: e,
                            getters: t
                        }, i = {}) {
                            const c = i.permissionsManager ? i.permissionsManager : t.getPermissionsManager;
                            if (!c) throw new Error("Permissions manager is not setup");
                            const n = t => (t.addEventListener("stateChange", (({
                                deviceType: t,
                                state: i
                            }) => {
                                e("setDevicePermissionState", {
                                    type: k[t].toLowerCase(),
                                    value: _[i]
                                })
                            })), n);
                            n(c.getCamera())(c.getMicrophone())(c.getSpeakers())
                        },
                        checkDevicePermissions({
                            commit: e,
                            getters: t
                        }, i = {}) {
                            const {
                                recheck: c,
                                deviceType: n
                            } = i, o = i.permissionsManager ? i.permissionsManager : t.getPermissionsManager, r = {
                                1: "getCamera",
                                2: "getMicrophone",
                                3: "getSpeakers"
                            } [n];
                            if (!o) return Promise.reject(new Error("Permissions manager is not setup"));
                            if (!n || !k[n]) return Promise.reject(new Error("Incorrect or not recived device type"));
                            const a = o[r]();
                            return a.getState() === _.NOT_REQUESTED || c ? a.request().then((() => (e("setDevicePermissionState", {
                                type: k[n].toLowerCase(),
                                value: _[_.GRANTED]
                            }), Promise.resolve(_[_.GRANTED])))).catch((t => (console.warn("err.errorCode", t.errorCode, v[t.errorCode]), e("setDevicePermissionState", {
                                type: k[n].toLowerCase(),
                                value: _[_.DENIED]
                            }), Promise.resolve(_[_.DENIED])))) : Promise.resolve(t.getDevicesPermission[k[n].toLowerCase()])
                        },
                        updateDeviceList({
                            state: e
                        }) {
                            return h().TCMediaDeviceList.getInstance().then((t => (e.deviceList = t, e.listsDevice.listCameras = t.getCamerasList(), e.listsDevice.listMicrophones = t.getMicrophonesList(), e.listsDevice.listSpeakers = t.getSpeakersList(), e.AvailableFlagVideo = t.deviceListWorker.isDeviceLabelAvailableFlags.videoinput, e.AvailableFlagAudio = t.deviceListWorker.isDeviceLabelAvailableFlags.audioinput, e.AvailableFlagAudioOutput = t.deviceListWorker.isDeviceLabelAvailableFlags.audiooutput, t))).catch((e => {
                                throw e
                            }))
                        },
                        initSettingsDevice({
                            state: e
                        }) {
                            e.selectedDeviceSettings = {
                                ...e.selectedDevice
                            }, e.showVideoSettings = e.showVideo
                        },
                        saveSettingsDevice({
                            state: e
                        }) {
                            e.selectedDevice = {
                                ...e.selectedDeviceSettings
                            }
                        },
                        captureOneCamera({
                            state: e
                        }, t) {
                            e.selectedDevice.camera = t.device, e.showVideo = !0;
                            const i = t.device.getTracks().values().next().value.createPlayer();
                            return i.play(), i
                        },
                        captureOneMicrophone({
                            state: e
                        }, t) {
                            return e.selectedDevice.microphone = t.device, t.device.id
                        },
                        captureCamera({
                            state: e,
                            dispatch: t
                        }, i = null) {
                            let c = 0,
                                n = [...e.listsDevice.listCameras];
                            const o = n.find((e => e.id === i.amount));
                            return o && (n = n.filter((e => e.id !== i.amount)), n.unshift(o)), new Promise(((e, i) => {
                                0 === n.length && i(), h().TCMediaCapture.getInstance().createCaptureQueue(n, (i => (e(t("captureOneCamera", {
                                    device: i
                                })), !1)), ((e, o) => (++c, c === n.length && (t("stopCaptureAllCameras"), i(e)), console.warn(`Ошибка захвата устройства ${e.id}`, o), !0)))
                            })).then((e => Promise.resolve(e)))
                        },
                        captureCameraSettingsPopup({
                            state: e
                        }, t) {
                            return h().TCMediaCapture.getInstance().capture(e.deviceList.getDeviceById(t.amount)).then((i => {
                                e.selectedDeviceSettings.camera = e.deviceList.getDeviceById(t.amount);
                                const c = i.createPlayer();
                                return c.play(), Promise.resolve(c)
                            })).catch((e => Promise.reject(e)))
                        },
                        captureMicrophoneSettingsPopup({
                            state: e
                        }, t) {
                            return h().TCMediaCapture.getInstance().capture(e.deviceList.getDeviceById(t)).then((() => {
                                e.selectedDeviceSettings.microphone = e.deviceList.getDeviceById(t)
                            }))
                        },
                        captureMicrophoneById({
                            state: e,
                            dispatch: t
                        }, i = null) {
                            let c = [...e.listsDevice.listMicrophones],
                                n = 0;
                            const o = c.find((e => e.id === i.amount));
                            return o && o.numTracks > 0 ? Promise.resolve(o.id) : (o && (c = c.filter((e => e.id !== i.amount)), c.unshift(o)), new Promise(((e, i) => {
                                0 === c.length && i(), h().TCMediaCapture.getInstance().createCaptureQueue(c, (i => (e(t("captureOneMicrophone", {
                                    device: i
                                })), !1)), ((e, t) => (++n, n === c.length && i(), console.warn(`Ошибка захвата устройства ${e.id}`, t), !0)))
                            })).then((e => Promise.resolve(e))))
                        },
                        clearCameraTrackList({
                            state: e
                        }) {
                            const t = [...e.listsDevice.listCameras];
                            for (let i = 0; i < t.length; ++i) {
                                const c = e.selectedDevice.camera ? e.selectedDevice.camera : {};
                                if (t[i].id !== c.id) {
                                    const e = [...t[i].getTracks()];
                                    for (let t = 0; t < e.length; ++t) e[t].stop()
                                }
                            }
                        },
                        stopCaptureAllCameras({
                            state: e
                        }) {
                            const t = e.listsDevice.listCameras,
                                i = [];
                            return t.forEach((e => {
                                e.getTracks().forEach((e => {
                                    i.push(e.stop())
                                }))
                            })), Promise.all(i).then((() => Promise.resolve()))
                        },
                        stopCaptureMicrophone({
                            state: e
                        }, t = !1) {
                            try {
                                const i = t ? "selectedDeviceSettings" : "selectedDevice";
                                if (e[i].microphone && e[i].microphone.getTracks().size > 0) {
                                    return e[i].microphone.getTracks().values().next().value.stop()
                                }
                                return Promise.resolve()
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        },
                        playerMute({
                            state: e
                        }) {
                            if (e.playerMute = !0, e.selectedDevice.camera.getTracks().size > 0) {
                                e.selectedDevice.camera.getTracks().values().next().value.disable()
                            }
                        },
                        playerPlay({
                            state: e
                        }) {
                            if (e.playerMute = !1, e.selectedDevice.camera.getTracks().size > 0) {
                                e.selectedDevice.camera.getTracks().values().next().value.enable()
                            }
                        },
                        muteMicrophone({
                            state: e
                        }) {
                            if (e.microphoneMute = !0, e.selectedDevice.microphone.getTracks().size > 0) {
                                const t = e.selectedDevice.microphone.getTracks().values(),
                                    {
                                        value: i
                                    } = t.next();
                                i.disable()
                            }
                        },
                        unmuteMicrophone({
                            state: e
                        }) {
                            if (e.microphoneMute = !1, e.selectedDevice.microphone.getTracks().size > 0) {
                                e.selectedDevice.microphone.getTracks().values().next().value.enable()
                            }
                        },
                        setEchoCancellationEnabled({
                            state: e
                        }) {
                            if (e.selectedDevice.microphone && e.selectedDevice.microphone.getTracks().size > 0) {
                                e.selectedDevice.microphone.getTracks().values().next().value.setEchoCancellationEnabled(e.audioEcho)
                            }
                        },
                        setAGCEnabledhoMode({
                            state: e
                        }) {
                            if (e.selectedDevice.microphone && e.selectedDevice.microphone.getTracks().size > 0) {
                                e.selectedDevice.microphone.getTracks().values().next().value.setAGCEnabled(e.audioAru)
                            }
                        },
                        listenerConnectDevice({
                            state: e
                        }) {
                            e.deviceList.addEventListener("deviceConnected", (t => {
                                t.device.isCamera() && (e.listsDevice.listCameras = e.deviceList.getCamerasList(), e.AvailableFlagVideo = e.deviceList.deviceListWorker.isDeviceLabelAvailableFlags.videoinput), t.device.isMicrophone() && (e.listsDevice.listMicrophones = e.deviceList.getMicrophonesList(), e.AvailableFlagAudio = e.deviceList.deviceListWorker.isDeviceLabelAvailableFlags.audioinput), t.device.isSpeakers() && (e.listsDevice.listSpeakers = e.deviceList.getSpeakersList())
                            }))
                        },
                        listenerDisconnectDevice({
                            state: e
                        }) {
                            e.deviceList.addEventListener("deviceDisconnected", (t => {
                                t.device.isCamera() && (e.listsDevice.listCameras = e.deviceList.getCamerasList(), e.selectedDevice.camera.id === t.device.id && (e.selectedDevice.camera = null, e.showVideoSettings = !1), null === e.selectedDevice.camera || e.playerMute ? e.showVideo = !1 : e.showVideo = !0), t.device.isMicrophone() && (e.listsDevice.listMicrophones = e.deviceList.getMicrophonesList(), e.selectedDevice.microphone.id === t.device.id && (e.selectedDevice.microphone = null)), t.device.isSpeakers() && (e.listsDevice.listSpeakers = e.deviceList.getSpeakersList())
                            }))
                        }
                    }
                },
                y = i(4519),
                C = i(87893),
                z = i.n(C),
                M = i(26876),
                T = {
                    modules: {
                        device: (0, y.device)(),
                        mediadevice: w,
                        chatManager: z()(M.ChatCore)
                    }
                },
                E = function() {
                    var e = this,
                        t = e._self._c;
                    return e.browser && e.browser.webRTCSupported ? t("section", {
                        staticClass: "router-container",
                        class: {
                            "router-container--no-drop": e.cursorState.dragging,
                            "webrtc-background": !e.$route.name,
                            "router-container--ripple-disabled": e.rippleDisabled
                        }
                    }, [e.$route.name ? e._e() : t("login-loader", {
                        staticClass: "router-container__logo"
                    }), e._v(" "), t("router-view"), e._v(" "), e.canShowNotifications ? t("div", {
                        directives: [{
                            name: "mdl",
                            rawName: "v-mdl"
                        }],
                        ref: "notification",
                        staticClass: "mdl-snackbar mdl-js-snackbar router-container__notifications",
                        class: {
                            "router-container__notifications--offseted": e.notificationsAreOffseted
                        },
                        attrs: {
                            "aria-live": "assertive",
                            "aria-atomic": "true",
                            "aria-relevant": "text"
                        }
                    }, [t("div", {
                        staticClass: "mdl-snackbar__text"
                    }), e._v(" "), t("button", {
                        staticClass: "mdl-snackbar__action",
                        attrs: {
                            type: "button"
                        }
                    })]) : e._e(), e._v(" "), t("TcSnackbar", {
                        ref: "tcSnackbar",
                        staticClass: "router-container__snackbar",
                        on: {
                            initialized: function(t) {
                                return e.initializeNotifications()
                            }
                        }
                    })], 1) : t("not-supported")
                };
            E._withStripped = !0;
            var R = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "not-supported webrtc-background"
                }, [t("div", {
                    staticClass: "not-supported__header-logo",
                    attrs: {
                        "aria-hidden": ""
                    },
                    domProps: {
                        innerHTML: e._s(e.logoWhiteIcon)
                    }
                }), e._v(" "), t("section", {
                    staticClass: "not-supported__center-block"
                }, [t("p", {
                    staticClass: "not-supported__center-block__header"
                }, [e._v("\n      " + e._s(e.gettext("Your browser is not supported")) + "\n    ")]), e._v(" "), t("p", {
                    staticClass: "not-supported__center-block__header-desc"
                }, [e._v("\n      " + e._s(e.gettext("Please update your browser")) + "\n    ")]), e._v(" "), t("section", {
                    staticClass: "not-supported__center-block__links"
                }, e._l(e.listOfBrowsers, (function(i, c) {
                    return t("a", {
                        key: c,
                        staticClass: "not-supported__center-block__link",
                        attrs: {
                            href: i.link,
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t("div", {
                        staticClass: "vertical-align"
                    }, [t("div", {
                        staticClass: "not-supported__center-block__link-logo",
                        attrs: {
                            "aria-hidden": ""
                        },
                        domProps: {
                            innerHTML: e._s(i.icon)
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "not-supported__center-block__link-header"
                    }, [e._v(e._s(i.name))])]), e._v(" "), t("p", {
                        staticClass: "not-supported__center-block__link-desc"
                    }, [e._v(e._s(e.gettext("Minimal version")) + ": " + e._s(i.minVersion))])])
                })), 0)])])
            };
            R._withStripped = !0;
            var A = "73",
                D = "19",
                L = "66",
                I = "59",
                S = i(64301),
                P = i(99761),
                F = {
                    name: "NotSupported",
                    created() {
                        (0, S.A)({
                            type: "notSupported"
                        })
                    },
                    computed: {
                        listOfBrowsers() {
                            return this.system?.linux ? P.filter(this.browsers, (e => "Opera" !== e.name)) : this.browsers
                        }
                    },
                    data: () => ({
                        logoWhiteIcon: '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 19.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 942 257.8" style="enable-background:new 0 0 942 257.8;" xml:space="preserve">\n<g style="fill: white">\n\t<path d="M754.3,102.2c6,0,12.4,3.8,12.4,11.1c0,27.4,0,54.3,0,81.7c0,8.1-6.4,12.4-12.4,12.4v21.8\n\t\tc5.1,0,9.8-0.9,14.5-2.6c4.3-2.1,8.1-4.7,11.5-8.1s6-7.3,8.1-11.5c1.7-4.7,3-9.4,3-14.5v-76.5c0-5.1-1.3-9.8-3-14.5\n\t\tc-2.1-4.7-4.7-8.6-8.1-12c-3.4-3.4-7.3-6.4-11.5-8.1c-4.7-2.1-9.4-3-14.5-3V102.2z M741.9,113.3c0-7.3,6-11.1,12.4-11.1V78.2l0,0\n\t\tc-5.6,0-10.3,0.9-14.5,3c-4.7,1.7-8.6,4.7-11.5,8.1c-3.4,3.4-6,7.3-8.1,12c-1.7,4.7-2.6,9.4-2.6,14.5v76.5c0,5.1,0.9,9.8,2.6,14.5\n\t\tc2.1,4.3,4.7,8.1,8.1,11.5c3,3.4,6.8,6,11.5,8.1c4.3,1.7,9,2.6,14.5,2.6l0,0v-21.8c-6.4,0-12.4-4.3-12.4-12.4\n\t\tC741.9,162,741.9,146.2,741.9,113.3z"/>\n\t<path d="M706,66.3c0-21.4-12.8-37.6-36.8-37.6c-21.4,0.4-34.6,17.1-34.6,37.6v126.1c0,23.9,15,37.2,34.6,36.8\n\t\tc23.1,0,36.8-10.7,36.8-36.8v-38.5h-24.4c0,17.5,0,23.1,0,41c0,14.5-22.7,14.5-22.7,0c0-47,0-83.8,0-131.2\n\t\tc0.4-13.7,22.2-14.1,22.7,0v40.6H706V66.3z"/>\n\t<path d="M585.4,101.3c6.4-0.4,12.4,3.4,12.4,11.1c0,8.1,0,26.9,0,35.1h-12.4v21.8h37.2v-53.4c0-5.1-0.9-10.3-3-15\n\t\tc-1.7-4.7-4.3-8.6-7.7-12c-3.4-3.4-7.3-6-12-7.7c-4.3-2.1-9.4-3-14.5-3V101.3L585.4,101.3z M585.4,229.2v-23.1\n\t\tc6.4,0,12.4-3.8,12.4-12.4c0-8.1,0-1.3,0-9.4h24.8v8.1c0,5.1-0.9,9.8-3,14.5c-1.7,4.3-4.3,8.1-7.7,11.5c-3.4,3.4-7.3,6-12,8.1\n\t\tC595.7,228.3,590.6,229.2,585.4,229.2z M573.5,112.4c-0.4-7.7,6-11.1,12-11.1V78.2l0,0c-5.1,0-9.8,0.9-14.5,3\n\t\tc-4.3,1.7-8.1,4.7-11.5,8.1c-3.4,3.4-6,7.3-7.7,12s-3,9.4-3,14.5v76.5c0,5.1,1.3,9.8,3,14.5c1.7,4.3,4.3,8.1,7.7,11.5\n\t\ts7.3,6,11.5,8.1c4.7,1.7,9.4,2.6,14.5,2.6l0,0v-23.1c-6,0-12-4.3-12-12.4v-24.4h12v-21.8h-12C573.5,139.4,573.5,120.6,573.5,112.4z\n\t\t"/>\n\t<path d="M535.9,227.9V79.9h-24.4v123.6c-1.3,0-2.6,0-3.8,0c-2.6,0-6.8,0-9,0c-9.8-0.9-11.5-8.1-12-19.7V79.9h-24.8\n\t\tv111.2c0,5.1,0.9,9.8,3,14.1c2.1,4.3,4.7,8.6,8.1,12c3.4,3.4,7.3,6,12,7.7c4.3,2.1,9,3,14.1,3H535.9z"/>\n\t<path d="M803.1,79.9v147.9h24.4V104.7c20.9-1.3,23.9,2.1,23.9,18.4v104.7h25.2V117.1c0-20.9-15.4-37.2-37.2-37.2H803.1\n\t\tz"/>\n\t<path d="M402.5,117.1v110.7h24.4v-103c0-17.1,6.4-20.5,24.8-20.1V79.9h-12.4c-4.7,0-9.8,1.3-14.1,3\n\t\tc-4.7,2.1-8.6,4.7-11.5,8.1c-3,3.4-6,7.3-8.1,11.5C403.7,107.3,402.5,112,402.5,117.1z"/>\n\t<polygon points="384.5,227.9 384.5,53.9 413.6,53.9 413.6,29.5 330.6,29.5 330.6,53.9 359.7,53.9 359.7,227.9 \t"/>\n\t<path d="M917.6,227.9V103.5h16.2V79.1h-16.2V68c0-10.7,4.3-12.8,14.1-13.7H942V29.5h-12.4c-5.1,0-9.8,0.9-14.5,3\n\t\tc-4.3,1.7-8.1,4.7-11.5,7.7c-3.4,3.4-6,7.3-7.7,12s-3,9.4-3,14.1v12.8h-12v24.4h12v124.4H917.6z"/>\n\t<path d="M292.2,130c-9-5.1-21.8-12.8-25.2-16.7c5.6-15,10.3-29.9,10.3-44.9c0-30.4-17.5-39.8-36.3-39.8\n\t\tc-18.8,0-35.9,9-35.9,39.8c0,15,5.1,34.2,9.4,44.9c-2.6,2.6-5.1,4.7-8.6,6.4c-10.3-6.8-19.7-13.7-28.2-21.8c6.4-17.1,12-35.1,12-53\n\t\tC189.6,6,163.9,0,148.9,0c-15,0-40.6,6-40.6,44.9c0,17.5,4.7,35.9,12,53c-9,8.1-18.4,15.4-28.2,21.8c-3-1.3-6-3.8-8.6-6.4\n\t\tc5.6-14.1,9.8-34.2,9.8-44.9C93.4,39.8,78,28.6,57,28.6c-20.5,0-35.9,10.7-36.3,39.8c0,12,4.3,27.4,10.3,44.9\n\t\tC22.4,121,10.9,126.5,5.7,130c-1.7,0.9-3.8,2.1-4.7,3.4c-1.3,2.1-1.3,5.6-0.4,8.6c21.4,71,77,115.9,148.4,115.9\n\t\tc35.5,0,68.4-11.1,94.5-32.5c24.8-19.7,43.2-48.7,53.9-83.4C299,133.8,296.4,132.5,292.2,130z M66.9,118c0.9,1.7,1.7,3.4,10.7,10.7\n\t\tc-3,2.1-6,3.8-9,5.6c-2.6,1.7-4.3,4.3-4.3,7.7c0,23.5,0,47.5,0,71c-23.5-19.2-37.2-42.8-47.5-71c4.7-3,14.5-9,19.7-12.8\n\t\tc7.7-6,10.3-9.8,11.1-11.1c0.4-0.9,0.9-3,0-5.1c-5.6-13.3-11.1-29.5-11.1-44.5c0-8.6,0-24.4,20.5-24.4C78,44,78,60.3,78,68.4\n\t\tc-0.4,15.8-5.6,30.8-11.1,44.5C65.6,115.4,66.4,117.1,66.9,118z M218.2,225.3c-22.7,13.3-46.6,17.1-69.3,17.1\n\t\tc-23.5,0.4-45.3-3.4-68.8-17.1c0-26.5,0-52.6,0-79.1c19.7-12.8,39.8-26.1,56.9-42.8c1.3-1.3,0.4-4.3,0-5.6\n\t\tc-7.3-16.2-12.8-34.2-12.8-53c0-9.8,0-29.1,24.8-29.5c25.2,0,25.2,19.7,25.2,29.5c0,18.8-7.3,35.9-12.8,53c-0.9,1.3-1.3,4.3,0,5.6\n\t\tc16.2,18,37.2,29.5,56.9,42.8C218.2,172.7,218.2,198.8,218.2,225.3z M233.6,212.9c0-23.5,0-47.5,0-71c0-3.4-1.3-6-4.3-7.7\n\t\tc-3-1.7-6-3.4-9-5.6c9.4-7.3,9.8-9,11.1-10.7c0.4-0.9,0.9-2.6,0-5.1c-6-13.7-11.1-28.6-11.1-44.5c0-8.1,0-24.4,20.5-24.4\n\t\ts20.5,15.8,20.5,24.4c0,15-5.1,31.2-11.1,44.5c-0.9,2.1-0.4,4.3,0,5.1c1.3,1.3,3.4,5.1,11.1,11.1c5.6,3.8,15,9.8,19.7,12.8\n\t\tC271.2,170.2,257.5,193.7,233.6,212.9z"/>\n</g>\n</svg>\n',
                        browsers: [{
                            name: "Google Chrome",
                            minVersion: A,
                            icon: '<?xml version="1.0" encoding="iso-8859-1"?>\n\x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">\n<path style="fill:#E16B5A;" d="M255.333,0.048c0,0,150.936-6.78,230.932,144.636c-42.26,0-243.764,0-243.764,0\n\ts-46.036-1.512-85.28,54.244c-11.32,23.352-23.392,47.46-9.808,94.916C127.793,260.704,43.265,113.8,43.265,113.8\n\tS102.889,6.072,255.333,0.048z"/>\n<path style="fill:#CC6152;" d="M255.333,0.048c-2.604,0.104-5.116,0.308-7.668,0.468c40.752,2.968,150.852,22.468,215.148,144.168\n\tc9.928,0,18.016,0,23.444,0C406.265-6.736,255.333,0.048,255.333,0.048z"/>\n<path style="fill:#FFD464;" d="M478.409,384.488c0,0-69.6,133.852-240.968,127.268c21.14-36.524,121.912-210.704,121.912-210.704\n\ts24.328-39.044-4.4-100.844c-14.604-21.464-58.844-43.96-106.812-55.952c38.576-0.384,237.644,0.024,237.644,0.024\n\tS549.417,249.7,478.409,384.488z"/>\n<path style="fill:#F2C95F;" d="M485.781,144.284c0,0-101.54-0.208-173.636-0.184c69.164,0.016,152.012,0.184,152.012,0.184\n\ts63.636,105.416-7.372,240.204c0,0-63.776,122.416-219.348,127.268l0,0c171.368,6.584,240.972-127.268,240.972-127.268\n\tC549.417,249.7,485.781,144.284,485.781,144.284z"/>\n<path style="fill:#74B340;" d="M33.333,385.504c0,0-81.324-127.104,10.08-271.952c21.124,36.54,121.84,210.752,121.84,210.752\n\ts21.696,40.552,89.684,46.616c25.916-1.888,52.876-3.492,87.264-38.952c-18.96,33.532-104.172,180.028-104.172,180.028\n\tS114.757,514.292,33.333,385.504z"/>\n<circle style="fill:#FFFFFF;" cx="254.721" cy="258.08" r="116"/>\n<circle style="fill:#2995CC;" cx="254.681" cy="258.08" r="92"/>\n<path style="fill:#268CBF;" d="M254.705,166.1c-1.832,0-3.644,0.068-5.444,0.172c48.272,2.82,86.552,42.848,86.552,91.824\n\tc0,48.984-38.28,89.016-86.552,91.836c1.804,0.1,3.616,0.172,5.444,0.172c50.804,0,92-41.196,92-92.008\n\tC346.705,207.292,305.509,166.1,254.705,166.1z"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n',
                            link: "https://www.google.com/chrome/"
                        }, {
                            name: "Opera",
                            minVersion: I,
                            icon: '<?xml version="1.0" encoding="iso-8859-1"?>\n\x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n<path style="fill:#E16B5A;" d="M497.996,253.792C497.996,415.06,398.152,512,251.188,512c-137.384,0-237.184-97.628-237.184-252.304\n\tC14.004,113.196,115.152,0,258.024,0C400.204,0,497.996,103.544,497.996,253.792z M253.208,79.392\n\tc-67.92,0-104.388,67.696-104.388,166c0,71.828,23.748,187.216,113.796,187.216c72.36,0,100.564-75.344,100.564-170.72\n\tC363.18,161.24,321.72,79.392,253.208,79.392z"/>\n<g>\n\t<path style="fill:#BF5B4D;" d="M244.908,79.784c-2.532-0.236-5.084-0.392-7.7-0.392c-67.92,0-104.388,67.696-104.388,166\n\t\tc0,71.828,23.748,187.216,113.796,187.216c2.656,0,5.236-0.128,7.764-0.328c-83.272-6.82-105.568-117.3-105.568-186.888\n\t\tC148.82,151.18,182.328,85.124,244.908,79.784z"/>\n\t<path style="fill:#BF5B4D;" d="M258.024,0c-2.584,0-5.116,0.116-7.672,0.188c137.64,3.984,231.644,106.316,231.644,253.604\n\t\tc0,158.208-96.12,254.432-238.52,258.036c2.568,0.072,5.116,0.172,7.712,0.172c146.964,0,246.808-96.936,246.808-258.208\n\t\tC497.996,103.544,400.204,0,258.024,0z"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n',
                            link: "http://opera.com"
                        }, {
                            name: "Mozilla Firefox",
                            minVersion: L,
                            icon: '<?xml version="1.0" encoding="iso-8859-1"?>\n\x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 511.719 511.719" style="enable-background:new 0 0 511.719 511.719;" xml:space="preserve">\n<path style="fill:#2179A6;" d="M255.044,503.909c135.492,0,245.332-112.728,245.332-251.768\n\tc0-139.028-109.844-251.76-245.332-251.76c-135.508,0-245.352,112.732-245.352,251.76\n\tC9.688,391.181,119.548,503.909,255.044,503.909z"/>\n<path style="fill:#195D80;" d="M498.216,285.105c-1.28,0.976-2.58,1.944-3.984,2.836c2.172-5.876,4.14-13.444,5.772-22.156\n\tc0.236-4.52,0.376-9.068,0.376-13.652c0-52.572-15.732-101.364-42.584-141.744c-24.308-28.752-57.408-53.424-101.264-65.828\n\tc47.196,31.912,64.828,59.024,75.984,83.148c-12.624-13.236-34.228-27.044-48.812-28.192c21.876,16.684,58.484,66.18,54.588,141.168\n\tc-5.612-12.08-15.88-30.988-23.172-37.604c7.852,73.648,0.976,89.46-3.792,109.024c-1.048-8.992-4.204-15.744-6.024-19.848\n\tc0,0-0.84,23.016-15.42,55.808c-11.048,24.836-22.448,32.508-27.492,31.64c-1.376-0.092-2.108-0.696-2.096-0.752\n\tc0.36-3.216,0.684-6.584-0.148-8.732c0,0-4.66,1.648-7.668,5.984c-1.212,1.748-2.78,3.452-4.84,5.056\n\tc-0.352,0.28,3.328-4.836,3.052-4.6c-1.812,1.516-3.752,3.28-5.708,5.36c-7.152,7.612-13.596,16.056-16.956,13.664\n\tc3.128-0.976,5.624-5.06,6.3-9.06c-2.808,2.012-9.94,7.48-25.94,9.916c-6.544,1-34.38,6.188-71.4-12.796\n\tc5.4-0.632,13.476-2.584,19.632,1.148c-6.156-6.892-21.032-5.46-31.696-8.916c-9.292-3.016-21.42-16.388-28.388-23.14\n\tc28.492,7.156,58.748,1.992,76.24-10.272c17.676-12.4,28.148-21.452,37.544-19.308c9.38,2.144,15.632-7.508,8.324-16.088\n\tc-7.28-8.584-24.944-20.124-48.98-13.944c-18.4,4.728-34.084,19.876-59.928,9.344c-1.564-0.632-3.176-1.368-4.832-2.204\n\tc-1.652-0.844,5.404,1,3.664-0.048c-4.968-1.88-14-6.124-16.24-7.736c-0.364-0.28,3.74,0.764,3.312,0.492\n\tc-24.532-14.884-22.924-26.788-22.924-34.16c0-5.896,3.492-13.868,10.044-17.604c3.536,1.292,5.732,2.476,5.732,2.476\n\ts-1.632-2.576-2.668-3.824c0.24-0.088,0.488-0.156,0.736-0.228c2.888,1.004,13.16,5.316,18.644,9.804\n\tc6.516-12.488,1.644-33.168,0.976-34.448c0-0.024,0.016-0.028,0.016-0.06c1.38-6.348,38.272-26.176,41.032-28.268\n\tc3.82-2.9,7.712-7.372,10.148-12.52c1.768-3.288,3.04-7.968,2.696-14.712c-0.252-4.868-3.072-7.844-42.416-7.504\n\tc-10.752,0.084-17.752-6.332-21.984-12.448c-0.852-1.332-1.616-2.596-2.296-3.74c-0.928-1.7-1.556-3.212-2.032-4.432\n\tc4.7-17.492,20.368-42.356,34.52-49.936c-26.144-8.424-58.144,15.576-67.24,28.46c-0.028,0.044-0.064,0.08-0.088,0.116\n\tc-22.996-5.86-42.512-4.44-58.832,0.924c-12.116-6.016-19.804-18.668-24.16-30.376c-11.108,12.236-21.064,25.584-29.64,39.904\n\tc-0.992,8.112-1.52,17.692-0.752,28.752c-0.012,1.428,0.208,2.812,0.164,4.092c-6.188,8.74-10.224,16.26-11.796,19.968\n\tc-7.548,15.096-15.28,38.308-21.52,74.36c0,0,4.192-13.588,12.572-28.976c-6,18.824-10.708,47.84-8.38,90.908\n\tc0.14,0.612,0.272,1.24,0.416,1.848c0.488-4.148,1.84-13.936,4.492-26.32c1.6,30.064,8.56,67.024,31.396,107.1\n\tc2.128,3.744,4.692,8.092,7.748,12.892c44.844,60.032,115.404,98.78,194.804,98.78C379.636,503.909,482.468,408.557,498.216,285.105\n\tz"/>\n<path style="fill:#E78244;" d="M440.992,401.377c14.088-27.196,33.208-43.12,43.56-61.928c13.736-25.02,39.688-95.364,20.12-152.1\n\tc8.968,35.524,6.168,71.616-22.44,89.744c9.252-25.028,15.052-79.94,5.516-129.412c-6.204-32.148-25.82-60.952-38.608-69.932\n\tc11.772,9.056,21.244,41.488,20.98,56.372c-24.632-42.544-64.828-83.22-125.588-100.404c47.196,31.912,64.828,59.024,75.984,83.148\n\tc-12.616-13.236-34.224-27.044-48.812-28.192c21.876,16.684,58.492,66.18,54.592,141.168c-5.608-12.08-15.884-30.988-23.172-37.604\n\tc7.852,73.652,0.976,89.464-3.792,109.024c-1.048-8.992-4.204-15.744-6.024-19.848c0,0-0.84,23.016-15.424,55.808\n\tc-11.044,24.836-22.444,32.508-27.492,31.64c-1.368-0.092-2.104-0.696-2.092-0.752c0.36-3.216,0.684-6.584-0.148-8.732\n\tc0,0-4.66,1.648-7.668,5.984c-1.212,1.748-2.776,3.452-4.84,5.056c-0.352,0.28,3.328-4.836,3.056-4.6\n\tc-1.82,1.516-3.752,3.28-5.712,5.36c-7.152,7.612-13.6,16.056-16.952,13.664c3.124-0.976,5.62-5.06,6.296-9.06\n\tc-2.812,2.012-9.944,7.48-25.936,9.916c-6.548,1-34.384,6.188-71.404-12.796c5.4-0.632,13.476-2.584,19.632,1.148\n\tc-6.156-6.892-21.032-5.46-31.696-8.916c-9.292-3.016-21.42-16.388-28.388-23.14c28.492,7.156,58.748,1.992,76.24-10.272\n\tc17.676-12.4,28.152-21.452,37.544-19.308c9.376,2.144,15.632-7.512,8.324-16.088c-7.276-8.584-24.94-20.124-48.98-13.944\n\tc-18.4,4.728-34.084,19.876-59.928,9.344c-1.564-0.632-3.176-1.368-4.832-2.204c-1.652-0.844,5.404,1,3.664-0.052\n\tc-4.968-1.876-14-6.12-16.24-7.732c-0.364-0.28,3.74,0.764,3.312,0.492c-24.532-14.884-22.924-26.788-22.924-34.164\n\tc0-5.896,3.492-13.868,10.044-17.604c3.536,1.292,5.732,2.476,5.732,2.476s-1.632-2.576-2.668-3.824\n\tc0.24-0.088,0.488-0.156,0.736-0.228c2.888,1.004,13.16,5.316,18.644,9.804c6.516-12.488,1.644-33.168,0.976-34.448\n\tc0-0.024,0.016-0.028,0.016-0.06c1.38-6.348,38.272-26.176,41.032-28.268c3.82-2.9,7.712-7.372,10.148-12.52\n\tc1.768-3.288,3.04-7.968,2.696-14.712c-0.252-4.868-3.068-7.844-42.412-7.504c-10.752,0.084-17.752-6.332-21.984-12.448\n\tc-0.852-1.332-1.616-2.596-2.296-3.74c-0.928-1.7-1.556-3.212-2.032-4.432c4.7-17.492,20.368-42.356,34.52-49.936\n\tc-26.148-8.428-58.148,15.572-67.244,28.452c-0.028,0.044-0.064,0.084-0.088,0.116c-22.996-5.86-42.512-4.44-58.832,0.924\n\tc-19.984-9.92-27.984-37.92-28.724-49.9c-11.26,7.98-21.632,40.168-23,46.588c-2,10.148-4.052,24.004-2.832,41.596\n\tc-0.012,1.428,0.208,2.812,0.164,4.092c-6.188,8.74-10.224,16.26-11.796,19.968C13.972,177.553,6.24,200.765,0,236.817\n\tc0,0,4.192-13.588,12.572-28.976c-6.18,19.384-11.008,49.532-8.172,94.752c0.112-1.492,1.404-12.916,4.7-28.312\n\tc1.6,30.064,8.56,67.024,31.396,107.1c17.4,30.568,63.26,101.576,178.328,128.148c-12.632-3.736-20.484-11.22-20.484-11.22\n\ts42.976,14.164,74.344,12.956c-9.82-1.74-11.78-6.612-11.78-6.612s111.516,6.468,150.076-47.476\n\tc-13.18,15.812-46.56,20.276-59.188,20.416c19.22-18.112,61.708-17.688,107.732-64.14c25.248-25.488,27.972-44.876,30.728-63\n\tC486.028,374.189,463.996,388.425,440.992,401.377z"/>\n<path style="fill:#144F66;" d="M248.94,160.637c1.78-4.464,3.804-14.952-2.028-17.152c-4.864-1.196-8.988-2.06-16.916-1.88\n\tc2.612,0.668,10.112,2.184,12.06,5.772c3.716,6.864-5.064,23.312-6.34,26.812C239.716,174.193,247.188,165.029,248.94,160.637z"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n',
                            link: "https://www.mozilla.org/ru/firefox/new"
                        }, {
                            name: "Yandex Browser",
                            minVersion: D,
                            icon: '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="-199 221 60 60" style="enable-background:new -199 221 60 60;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:#FFFFFF;}\n\t.st2{fill:#EC1C24;}\n</style>\n<g>\n\t\n\t\t<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-169" y1="283" x2="-169" y2="223" gradientTransform="matrix(1 0 0 -1 0 504)">\n\t\t<stop  offset="0" style="stop-color:#F5F5F6"/>\n\t\t<stop  offset="1" style="stop-color:#EDEDEE"/>\n\t</linearGradient>\n\t<circle class="st0" cx="-169" cy="251" r="30"/>\n\t<circle class="st1" cx="-169" cy="251" r="28.6"/>\n\t<path class="st2" d="M-149.7,238.6l-15.3,15.7v19.5c0,0.4-2.3,0.6-4,0.7l0,0c-1.6,0-4-0.3-4-0.7v-19.5l-15.3-15.7\n\t\tc-0.2-0.2,0.6-1.5,1.8-2.8c1.3-1.3,2.5-2.1,2.8-1.8l14.7,14.3l14.7-14.4c0.2-0.2,1.5,0.6,2.8,1.8\n\t\tC-150.2,237-149.4,238.4-149.7,238.6z"/>\n</g>\n</svg>\n',
                            link: "https://browser.yandex.ru"
                        }]
                    })
                },
                V = (i(41310), i(14486)),
                N = (0, V.A)(F, R, [], !1, null, null, null).exports,
                O = i(6732),
                j = i(66505),
                Y = i(50429),
                X = {
                    name: "RouterContainer",
                    components: {
                        NotSupported: N,
                        LoginLoader: j.A
                    },
                    mounted() {
                        setTimeout((() => {
                            this.canShowNotifications = !0
                        }), 1e3);
                        let e = null;
                        document.body.addEventListener("touchstart", (t => {
                            if (e) return;
                            const i = t.composedPath();
                            e = setTimeout((() => {
                                for (const e of i) e.dispatchEvent && e.dispatchEvent(new MouseEvent("contextmenu", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    clientX: t.touches[0].clientX,
                                    clientY: t.touches[0].clientY
                                }))
                            }), 400)
                        })), document.body.addEventListener("touchend", (() => {
                            e && clearTimeout(e), e = null
                        }), {
                            passive: !0
                        }), document.body.addEventListener("touchmove", (() => {
                            e && clearTimeout(e), e = null
                        }), {
                            passive: !0
                        })
                    },
                    methods: {
                        initializeNotifications() {
                            this.$root.$refs.tcSnackbar = this.$refs.tcSnackbar
                        }
                    },
                    computed: {
                        notificationsAreOffseted() {
                            return "conference" === this.$route.name
                        },
                        rippleDisabled() {
                            return this.system.ios && this.system.majorVersion >= 13 || this.system.mac && this.platform.touch
                        }
                    },
                    data: () => ({
                        canShowNotifications: !1,
                        cursorState: O.A,
                        webrtcState: Y.A
                    })
                },
                B = (i(13648), (0, V.A)(X, E, [], !1, null, null, null).exports),
                q = i(3047),
                U = i.n(q),
                W = i(40252);
            n().use(a()), n().use(o.Ay), n().use(U());
            const G = new o.Ay.Store(T);
            G.state.chatManager.messagesStateMutation = !1, G.state.chatManager.supportedMessageTypes = [M.ChatCore.Messages.TextMessage, M.ChatCore.Messages.ReplyMessage, M.ChatCore.Messages.ForwardMessage, M.ChatCore.Messages.AddParticipantMessage, M.ChatCore.Messages.RemovedParticipantMessage, M.ChatCore.Messages.ParticipantLeaveMessage, M.ChatCore.Messages.AttachmentMessage], (0, d.O)(G, f.A), n().mixin({
                created() {
                    this.console = window.console
                },
                methods: {
                    notify({
                        text: e = "",
                        actionText: t = null,
                        time: i = 6e3,
                        actionHandler: c = null
                    } = {}) {
                        this.$root.$refs.tcSnackbar.notify({
                            text: e,
                            actionText: t,
                            time: i,
                            actionHandler: c
                        })
                    },
                    gettext(...e) {
                        return this.gettextState.gettext(...e)
                    },
                    pgettext(...e) {
                        return this.gettextState.pgettext(...e)
                    }
                },
                computed: {
                    ...(0, o.L8)({
                        platform: "device/getPlatform",
                        system: "device/getSystem",
                        browser: "device/getBrowser"
                    }),
                    isIOS() {
                        return this.system.ios || this.platform.iPhone || this.platform.iPad || this.system.mac && this.platform.touch
                    }
                },
                data: () => ({
                    gettextState: W.A
                })
            }), n().directive("mdl", l), n().directive("pointer-auto-blur", s), n().directive("tab-focus", u);
            new(n())({
                el: "#root",
                store: G,
                router: f.A,
                render: e => e(B)
            })
        },
        34818: function(e, t, i) {
            "use strict";
            i.d(t, {
                A: function() {
                    return D
                }
            });
            var c = i(56214),
                n = i.n(c),
                o = function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "not-found webrtc-background"
                    }, [t("div", {
                        staticClass: "not-found__box"
                    }, [t("p", {
                        staticClass: "not-found__box__header"
                    }, [e._v("\n      " + e._s(e.gettext("Page not found")) + "\n    ")])])])
                };
            o._withStripped = !0;
            var r = {
                    name: "NotFound"
                },
                a = (i(64001), (0, i(14486).A)(r, o, [], !1, null, null, null).exports);
            var d = i(86281),
                l = i(50429),
                s = i(9336),
                m = i(55373),
                p = i.n(m),
                u = i(33611),
                f = i(99761);
            const b = {
                login: String,
                password: String,
                token: String,
                host: String,
                port: String,
                path: String,
                secure: Boolean,
                noAutologin: Boolean,
                lang: String,
                disabled: String,
                forbid: String,
                storageDisabled: Boolean,
                version: String
            };

            function h(e) {
                const t = p().parse(e);
                return f(t).pick(f.keys(b)).toPairs().map((([e, t]) => {
                    let i = function(e) {
                        try {
                            return "Boolean" === e.name ? e => (0, s.A)(e) : t => e(t)
                        } catch (e) {
                            return null
                        }
                    }(b[e])(t);
                    return "disabled" === e && (l.A.disabledModules = i.split(",")), "forbid" === e && (l.A.forbiddenModules = i.split(",")), "storageDisabled" === e && (l.A.disabledStorage = i), "lang" === e && -1 === l.A.supportedLanguages.indexOf(i) && (i = (0, u.getPriorityLanguage)("trueconfServerLang")), "lang" === e && -1 === l.A.supportedLanguages.indexOf(i) && (i = (0, u.getPriorityLanguage)("trueconfServerLang")), [e, i]
                })).fromPairs().value()
            }

            function g(e) {
                return f.assign(f(b).mapValues((() => null)).value(), h(e))
            }
            var x = i(40252),
                _ = i(99761);
            let v = !1;

            function k() {
                v || (_.assign(l.A.hashParams, function() {
                    window.location.hash;
                    const e = window.location.hash.slice(1);
                    return e ? g(e) : {}
                }()), x.A.setLocale(l.A.hashParams.lang || "en"), v = !0)
            }
            let w = !1;

            function y() {
                return e => w ? Promise.resolve() : (w = !0, e())
            }
            var C = i(55486),
                z = i(99761);
            const {
                TCConferenceManager: M
            } = C.A;

            function T({
                to: e,
                from: t,
                next: c
            }) {
                Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 13396)).then((({
                    atomicWidgetJoinMiddleware: i,
                    noDataMiddleware: n
                }) => y()((() => i({
                    to: e,
                    from: t,
                    next: c
                }))).then((() => n({
                    to: e,
                    from: t,
                    next: c
                }))).then((() => {
                    1 === l.A.participantsState.list.length && l.A.participantsState.list[0].isInWaitingRoom && e.query.participants ? c({
                        name: "conference",
                        params: e.params,
                        query: (({
                            chat: e,
                            participants: t,
                            ...i
                        }) => i)(e.query)
                    }) : !e.query.chat || e.query.chatSelect || d.c.state.chatManager.selectedChat ? c() : c({
                        name: "conference",
                        params: e.params,
                        query: {
                            ...e.query,
                            chatSelect: !0
                        }
                    })
                })).catch((() => {})))).catch(((...e) => {
                    console.warn("Dynamic import error", ...e)
                }))
            }

            function E({
                to: e,
                from: t,
                next: c
            }) {
                e.name, Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 13396)).then((({
                    atomicWidgetJoinMiddleware: i
                }) => y()((() => i({
                    to: e,
                    from: t,
                    next: c
                }))).then((t => {
                    M.REJECT_CAUSE.CONFERENCE_PASSWORD_REQUIRED !== t ? c() : c({
                        name: "pin",
                        params: e.params
                    })
                })).catch((() => {})))).catch(((...e) => {
                    console.warn("Dynamic import error", ...e)
                }))
            }
            const R = [{
                path: "/webrtc/not-found",
                component: a
            }, {
                name: "root",
                path: "/webrtc/:id",
                component: () => Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 39070)),
                beforeEnter(e, t, i) {
                    E({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                name: "equipment",
                path: "/webrtc/:id/equipment",
                component: () => Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 81404)),
                beforeEnter(e, t, i) {
                    t ? "conference" !== t.name ? E({
                        to: e,
                        from: t,
                        next: i
                    }) : A.go(-1) : i({
                        name: "conference",
                        params: e.params
                    })
                }
            }, {
                name: "pin",
                path: "/webrtc/:id/pin",
                component: () => Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 42310)),
                beforeEnter(e, t, i) {
                    l.A.callState.error === M.REJECT_CAUSE.CONFERENCE_PASSWORD_REQUIRED ? i() : A.go(-1)
                }
            }, {
                name: "conference",
                path: "/webrtc/:id/conference",
                component: () => Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 61327)),
                beforeEnter(e, t, i) {
                    T({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                name: "mobile-chat",
                path: "/webrtc/:id/conference/chat",
                component: () => Promise.all([i.e(96), i.e(116), i.e(936)]).then(i.bind(i, 73674)),
                beforeEnter(e, t, i) {
                    T({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                name: "mobile-chat-select",
                path: "/webrtc/:id/conference/chat/select",
                component: () => Promise.all([i.e(96), i.e(116), i.e(936)]).then(i.bind(i, 7914)),
                beforeEnter(e, t, i) {
                    T({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                name: "mobile-participants",
                path: "/webrtc/:id/conference/participants",
                component: () => Promise.all([i.e(96), i.e(116), i.e(813)]).then(i.bind(i, 37312)),
                beforeEnter(e, t, i) {
                    T({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                name: "mobile-settings",
                path: "/webrtc/:id/conference/settings",
                component: () => Promise.all([i.e(96), i.e(116), i.e(859)]).then(i.bind(i, 68637)),
                beforeEnter(e, t, i) {
                    T({
                        to: e,
                        from: t,
                        next: i
                    })
                }
            }, {
                path: "/webrtc/:id/*",
                redirect(e) {
                    return `/webrtc/${e.params.id}`
                }
            }, {
                path: "*",
                redirect: "/webrtc/not-found"
            }];
            R.push({
                path: "*",
                redirect: "c/not-found"
            });
            const A = new(n())({
                mode: "history",
                fallback: !1,
                routes: R,
                parseQuery(e) {
                    const t = p().parse(e);
                    return z(t).pick(["settings", "participants", "chat", "chatSelect"]).mapValues((e => (0, s.A)(e))).pickBy().value()
                },
                stringifyQuery(e) {
                    const t = z.pickBy(e, s.A);
                    return z.keys(t).length ? "?" + p().stringify(t) : ""
                }
            });
            A.beforeEach((async (e, t, i) => {
                A.app.system && A.app.platform && A.app.browser || await d.c.dispatch("device/updateInfo"), A.app.browser?.webRTCSupported && (k(), i())
            }));
            var D = A
        },
        55486: function(e, t, i) {
            "use strict";
            var c = i(22774),
                n = i(53044),
                o = i(49387),
                r = i(11363),
                a = i(7607),
                d = i(35782),
                l = i(71583),
                s = i(62258),
                m = i(96303),
                p = i(74343),
                u = i(27062),
                f = i(96315),
                b = i(96638),
                h = i(81871),
                g = i(79363),
                x = i(89767),
                _ = i(21985),
                v = i(45678),
                k = i(96082),
                w = i(25740);
            const y = {
                TCMediaCapture: c.A,
                TCCapturedDeviceListener: n.A,
                TCMediaDevices: o.A,
                TCMediaDevicesListener: r.A,
                TCConferenceListener: a.A,
                TCMediaListener: d.A,
                TCConferenceManager: l.A,
                TCConferenceParticipant: s.A,
                TCWebClientListener: m.A,
                TCWebClientBuilder: p.A,
                TCServerConnectionParams: u.A,
                TCConference: f.A,
                TCUser: b.A,
                TCDevice: h.A,
                TCMultiplexedVideoTrackLayoutListener: g.A,
                PIN_MESSAGE_ANSWER_RESULT: x.$,
                TCMediaDevicePermissionsManager: _.A,
                TC_MEDIA_DEVICE_PERMISSION_STATE: v.W,
                TC_MEDIA_DEVICE_PERMISSION_ERROR: k.f,
                TCMediaPermissionsType: w.I
            };
            t.A = y
        },
        50429: function(e, t, i) {
            "use strict";
            var c = i(26793),
                n = i(64301);

            function o(e, t, i) {
                return "speakerIsMuted" === t && (0, n.A)(JSON.stringify({
                    method: c.A.deviceMuteStatusChanged,
                    payload: {
                        deviceType: "speaker",
                        status: i
                    }
                })), "conference" === t && (0, n.A)(JSON.stringify({
                    method: c.A.conferenceStatusChanged,
                    payload: i
                })), e[t] = i, !0
            }
            const r = {
                customHost: null,
                client: null,
                clientRights: null,
                hashParams: {},
                disabledModules: [],
                forbiddenModules: [],
                disabledStorage: !1,
                userVideosData: {
                    videoPlayer: null,
                    canManageLayout: !1,
                    userVideos: [],
                    updating: !1
                },
                video: null,
                audio: null,
                checkAutoplayVideo: !1,
                checkAutoplayAudio: !1,
                connectionState: {
                    wasNotConnected: !1,
                    wasDisconnected: !1
                },
                loginState: {
                    wasNotLogged: !1
                },
                callState: new Proxy({
                    defaultConferenceId: "\\c\\1",
                    conference: null,
                    timeShift: null,
                    conferenceTimer: null,
                    conferenceDuration: 0,
                    error: null
                }, {
                    set: o
                }),
                allChats: {},
                chatState: {
                    enableMessagesUnload: !1,
                    enableScrollPreservation: !1,
                    showAllSystemMessages: !1,
                    deleteModalOpen: !1,
                    messages: [],
                    nonDetachedMessages: null,
                    newMessageText: "",
                    selectedMessages: [],
                    contextMenuMessageId: null,
                    interactionType: null,
                    forwardingMessages: null,
                    highlightMessageId: null,
                    skipChatReseting: !1,
                    chatWasOpened: !1,
                    enableChatButton: !0,
                    isShown: !1,
                    hasConferenceChat: null,
                    loadedFiles: [],
                    stubUploadedFiles: [],
                    viewedPicture: null
                },
                chatsListInit: !1,
                participantsState: {
                    participants: null,
                    broadcastersNumber: 0,
                    list: []
                },
                userRequests: [],
                notifications: [],
                awaitForPodiumRequestAnswer: !1,
                speakerIsMuted: !1,
                deviceWasMuted: {
                    camera: !1,
                    microphone: !1
                },
                disableSelfYou: !0,
                headerAndFooterOverlay: !1,
                supportedLanguages: ["en", "ru", "zh", "zht", "fa", "fr", "de", "it", "ja", "pl", "pt", "es", "uk", "vi", "he", "ko", "cs"],
                mediaDevicesEnabled: void 0 !== navigator.mediaDevices,
                reconnectScreen: !1,
                isVADEnabled: null,
                recordingState: null
            };
            t.A = new Proxy(r, {
                set: o
            })
        },
        50530: function(e) {
            var t;
            window, t = function() {
                return function(e) {
                    var t = {};

                    function i(c) {
                        if (t[c]) return t[c].exports;
                        var n = t[c] = {
                            i: c,
                            l: !1,
                            exports: {}
                        };
                        return e[c].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                    }
                    return i.m = e, i.c = t, i.d = function(e, t, c) {
                        i.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: c
                        })
                    }, i.r = function(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, i.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return i.d(t, "a", t), t
                    }, i.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, i.p = "", i(i.s = "./index.js")
                }({
                    "../Event/TCEventTarget.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Logging/TCLogger.ts");
                        class n {
                            constructor(e) {
                                r.set(this, {
                                    listeners: {}
                                }), void 0 !== e && (e.fireEvent = (e, t) => this.fireEvent(e, t), e.addFireCallback = (e, t) => this.addFireCallback(e, t), e.removeFireCallback = (e, t) => {
                                    this.removeFireCallback(e, t)
                                }, e.fireCallbackList = (e, t, i) => {
                                    this.fireCallbackList(e, t, i)
                                })
                            }
                            addEventListener(e, t, i) {
                                if (!(t instanceof Function)) throw new Error("Invalid argument");
                                let c = a(this).listeners;
                                c.hasOwnProperty(e) || (c[e] = []);
                                let n = {
                                    mode: 0,
                                    priority: 0
                                };
                                i && (void 0 !== i.mode && (n.mode = i.mode), void 0 !== i.priority && (n.priority = i.priority));
                                let r = {
                                    callback: t,
                                    configuration: n
                                };
                                return c[e].push(r), c[e].sort(o), this
                            }
                            removeEventListener(e, t) {
                                let i = a(this).listeners;
                                if (!i.hasOwnProperty(e)) return !1;
                                let c = i[e];
                                if (0 === c.length) return !1;
                                let n = 0;
                                for (; n < c.length && c[n].callback !== t;) n++;
                                return n !== c.length && (c.splice(n, 1), !0)
                            }
                            clearEventListeners() {
                                return a(this).listeners = {}, !0
                            }
                            countListeners(e) {
                                return Object.keys(a(this).listeners).length
                            }
                            addFireCallback(e, t) {
                                let i = a(this);
                                i.fireCallbackList || (i.fireCallbackList = new Map);
                                let c = i.fireCallbackList.get(e);
                                c || (c = new Set, i.fireCallbackList.set(e, c)), c.add(t)
                            }
                            removeFireCallback(e, t) {
                                let i = a(this);
                                if (!i.fireCallbackList) return;
                                let c = i.fireCallbackList.get(e);
                                c && (c.delete(t), 0 == c.size && i.fireCallbackList.delete(e), 0 === i.fireCallbackList.size && delete i.fireCallbackList)
                            }
                            fireCallbackList(e, t, i) {
                                let c = a(this);
                                if (!c.fireCallbackList) return;
                                let n = c.fireCallbackList.get(e);
                                if (n)
                                    for (let e of n) e(t, i)
                            }
                            fireEvent(e, t) {
                                c.default.getLogger("Event", "TCEventTarget").info("event:", e, t);
                                let i = a(this);
                                i.listeners[e] && function(e, t, i) {
                                    for (let c of t) 1 & c.configuration.mode ? c.callback.call(e, i) : window.setTimeout((() => c.callback.call(e, i)), 0)
                                }(this, i.listeners[e], t)
                            }
                        }

                        function o(e, t) {
                            return (2 & e.configuration.mode) > (2 & t.configuration.mode) ? -1 : (2 & e.configuration.mode) < (2 & t.configuration.mode) ? 1 : e.configuration.priority === t.configuration.priority ? 0 : e.configuration.priority > t.configuration.priority ? -1 : 1
                        }
                        const r = new WeakMap;

                        function a(e) {
                            let t = r.get(e);
                            if (!t) throw new TypeError("Illegal invocation");
                            return t
                        }
                    },
                    "../Event/TCEventTargetInterface.ts": function(e, t) {},
                    "../Exception/TCDuplicateInstanceException.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Exception/TCException.ts");
                        class n extends c.default {
                            constructor(e) {
                                super("TCDuplicateInstanceException", e)
                            }
                        }
                    },
                    "../Exception/TCException.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c extends Error {
                            constructor(e, t, i = null) {
                                super(t), this.name = e, this.throwable = i
                            }
                            get cause() {
                                return this.throwable
                            }
                        }
                    },
                    "../Logging/TCLogger.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return o
                        }));
                        var c = i("../Logging/TCNativeLogger.ts");
                        let n;
                        class o {
                            static get TYPE() {
                                return r
                            }
                            constructor() {
                                throw "Not implemented yet!"
                            }
                            static getLogger(e, t, i = r.NATIVE) {
                                if (i !== r.NATIVE) throw "Not implemented yet!";
                                n || (n = new Map);
                                let o = n.get(i);
                                o || (o = new Map, n.set(i, o));
                                let a = e + "/" + t,
                                    d = o.get(a);
                                return d || (d = new c.default(e, t), o.set(a, d)), d
                            }
                        }
                        var r;
                        ! function(e) {
                            e[e.NATIVE = 0] = "NATIVE"
                        }(r || (r = {}))
                    },
                    "../Logging/TCLoggerInterface.ts": function(e, t, i) {
                        "use strict";
                        var c;
                        i.r(t), i.d(t, "TCLoggerLevel", (function() {
                                return c
                            })),
                            function(e) {
                                e[e.INFO = 0] = "INFO", e[e.EVENT = 1] = "EVENT", e[e.WARNING = 2] = "WARNING", e[e.ERROR = 3] = "ERROR"
                            }(c || (c = {}))
                    },
                    "../Logging/TCNativeLogger.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return l
                        }));
                        var c = i("../Logging/TCLoggerInterface.ts"),
                            n = i("../Util/Color/Color.ts"),
                            o = i("../Util/Random/Random.ts");
                        const r = {
                                [c.TCLoggerLevel.INFO]: [
                                    [130, 55, 79],
                                    [130, 65, 50],
                                    [130, 45, 78]
                                ],
                                [c.TCLoggerLevel.EVENT]: [
                                    [240, 23, 78],
                                    [240, 79, 50],
                                    [240, 29, 78]
                                ],
                                [c.TCLoggerLevel.WARNING]: [
                                    [45, 79, 53],
                                    [45, 79, 70],
                                    [47, 79, 55]
                                ],
                                [c.TCLoggerLevel.ERROR]: [
                                    [0, 80, 45],
                                    [0, 80, 65],
                                    [0, 50, 67]
                                ]
                            },
                            a = {
                                "%background%": 0,
                                "%font%": 1,
                                "%border%": 2
                            },
                            d = {
                                [c.TCLoggerLevel.INFO]: console.info,
                                [c.TCLoggerLevel.EVENT]: console.info,
                                [c.TCLoggerLevel.WARNING]: console.warn,
                                [c.TCLoggerLevel.ERROR]: console.error
                            };
                        class l {
                            constructor(e, t) {
                                this.name = t, this.group = e, this.loggerId = "%c" + e + "%c" + t;
                                let i = o.default.getInt(0, 40) - 20;
                                this.groupNameStyles = s("padding : 2px 10px 2px; background-color : %background%; color: #FFF; border : 1px solid %border%; ", i, i), this.logNameStyles = s("padding : 2px 5px; color: %font%; border-right : 1px solid %border%;", i, i)
                            }
                            log(e, t, i) {
                                if (localStorage.getItem("loggerEnabled"))
                                    if (i) {
                                        let c = [this.loggerId, this.groupNameStyles[e], this.logNameStyles[e], t, ...i];
                                        d[e].apply(console, c)
                                    } else d[e].call(console, this.loggerId, this.groupNameStyles[e], this.logNameStyles[e], t)
                            }
                            info(e, ...t) {
                                this.log(c.TCLoggerLevel.INFO, e, t)
                            }
                            warning(e, ...t) {
                                this.log(c.TCLoggerLevel.WARNING, e, t)
                            }
                            error(e, ...t) {
                                this.log(c.TCLoggerLevel.ERROR, e, t)
                            }
                            logGroup(e, t, ...i) {
                                if (console.groupCollapsed(this.loggerId, this.groupNameStyles[e], this.logNameStyles[e], t), i)
                                    for (let t of i) d[e].call(console, t);
                                console.groupEnd()
                            }
                        }

                        function s(e, t, i) {
                            let c = {};
                            for (let o in r) {
                                let d = r[o];
                                c[o] = e.replace(/%[a-zA-Z]+%/g, (e => {
                                    let c = a[e];
                                    if (void 0 === c) return "#000000";
                                    let o = d[c];
                                    if (!o) return "#000000";
                                    let r = [o[0] / 360, (o[1] - t) / 100, (o[2] - i) / 100],
                                        l = [];
                                    n.default.HSBtoRGB(r, 0, l, 0);
                                    let s = (l[0] << 16 | l[1] << 8 || l[2]).toString(16);
                                    return s.length < 6 && (s = "0" + s), "#" + s
                                }))
                            }
                            return c
                        }
                    },
                    "../Media/Audio/Processor/AbstractAudioProcessor.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Util/Observable.ts");
                        class n extends c.default {
                            constructor(e, t) {
                                if (super(), "audio" !== t.kind) throw "Only audio track supported!";
                                this.context = e, this.track = t
                            }
                        }
                    },
                    "../Media/Audio/Processor/FrequencyObserver/TCFrequencyObserver.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Media/Audio/Processor/AbstractAudioProcessor.ts");
                        class n extends c.default {
                            constructor(e, t, i = 50) {
                                super(e, t), this.delay = i, this.active = !1, this.analyserIntervalId = null, this.context = e;
                                let c = new MediaStream;
                                c.addTrack(t), this.sourceNode = this.context.createMediaStreamSource(c), this.analyserNode = this.context.createAnalyser(), this.analyserNode.fftSize = 256, this.data = new Uint8Array(this.analyserNode.frequencyBinCount)
                            }
                            start() {
                                this.active || (this.active = !0, this.sourceNode.connect(this.analyserNode), this.analyserNode.connect(this.context.destination), this.analyserIntervalId = window.setInterval((() => this.refresh()), this.delay))
                            }
                            stop() {
                                this.active && (this.analyserIntervalId && (window.clearInterval(this.analyserIntervalId), this.analyserIntervalId = null), this.active = !1, this.sourceNode.disconnect(this.analyserNode), this.analyserNode.disconnect(this.context.destination))
                            }
                            refresh() {
                                this.analyserNode.getByteFrequencyData(this.data), this.notifyObservers(this.data)
                            }
                        }
                    },
                    "../Media/Audio/Processor/TCAudioMediaTrackInfo.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {}
                    },
                    "../Media/Audio/Processor/VUMeter/TCProcessVUMeter.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return o
                        }));
                        var c = i("../Media/Audio/Processor/VUMeter/TCVUMeter.ts"),
                            n = i("../Media/Audio/Processor/VUMeter/TCVUCalculator.ts");
                        class o extends c.default {
                            constructor(e, t) {
                                super(e, t);
                                let i = new MediaStream;
                                i.addTrack(t), this.sourceNode = this.context.createMediaStreamSource(i), this.scriptNode = this.context.createScriptProcessor(0, this.sourceNode.channelCount, 1), this.vuCalculator = new n.default(this.context.sampleRate, this.sourceNode.channelCount, (e => this.onVolumeLevel(e))), this.scriptNode.onaudioprocess = e => this.onAudioProcess(e.inputBuffer)
                            }
                            start() {
                                return this.active || (this.active = !0, this.sourceNode.connect(this.scriptNode), this.scriptNode.connect(this.context.destination), this.vuCalculator.start()), Promise.resolve()
                            }
                            stop() {
                                this.active && (this.active = !1, this.sourceNode.disconnect(this.scriptNode), this.scriptNode.disconnect(this.context.destination), this.vuCalculator.stop())
                            }
                            onAudioProcess(e) {
                                let t = [];
                                for (let i = 0; i < e.numberOfChannels; i++) t[i] = e.getChannelData(i);
                                this.vuCalculator.addSamples(t)
                            }
                        }
                    },
                    "../Media/Audio/Processor/VUMeter/TCVUCalculator.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor(e, t, i, c = 200) {
                                this.started = !1, this.volumeLevelBalancer = 0, this.currentNumSamplesProcessed = 0, this.currentSamplesSum = 0, this.volumeLevel = 0, this.sampleRate = e, this.observerDelay = c, this.samplesPerDelay = e / 1e3 * c * t, this.volumeCallback = i
                            }
                            start() {
                                this.started = !0, this.setDefaults()
                            }
                            stop() {
                                this.started = !1, this.setDefaults()
                            }
                            isStarted() {
                                return this.started
                            }
                            addSamples(e) {
                                if (this.started) {
                                    for (let t of e) {
                                        for (let e = 0; e < t.length; e++) this.currentSamplesSum += t[e] * t[e];
                                        this.currentNumSamplesProcessed += t.length
                                    }
                                    this.currentNumSamplesProcessed >= this.samplesPerDelay && this.refreshVolumeLevel()
                                }
                            }
                            setDefaults() {
                                this.currentSamplesSum = 0, this.currentNumSamplesProcessed = 0, this.volumeLevel = 0
                            }
                            refreshVolumeLevel() {
                                let e = Math.sqrt(this.currentSamplesSum / this.currentNumSamplesProcessed);
                                this.volumeLevelBalancer = (this.volumeLevelBalancer + e) / 2, e = 20 * Math.log10(this.volumeLevelBalancer + 1.52 * 1e-5) + 61, e < 0 && (e = 0), this.setDefaults(), this.volumeLevel = e * (100 / 61), this.volumeCallback(this.volumeLevel)
                            }
                        }
                    },
                    "../Media/Audio/Processor/VUMeter/TCVUMeter.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Media/Audio/Processor/AbstractAudioProcessor.ts");
                        class n extends c.default {
                            constructor(e, t) {
                                super(e, t), this.context = e, this.track = t, this.active = !1
                            }
                            isActive() {
                                return this.active
                            }
                            onVolumeLevel(e) {
                                this.notifyObservers(e)
                            }
                        }
                    },
                    "../Media/Audio/Processor/VUMeter/TCVUMeterFactory.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        })), i("../Media/Audio/Processor/VUMeter/TCWorkletVUMeter.ts");
                        var c = i("../Media/Audio/Processor/VUMeter/TCProcessVUMeter.ts");
                        class n {
                            static createVUMeter(e, t) {
                                return AudioWorkletNode, new c.default(e, t)
                            }
                        }
                    },
                    "../Media/Audio/Processor/VUMeter/TCWorkletVUMeter.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Media/Audio/Processor/VUMeter/TCVUMeter.ts");
                        class n extends c.default {
                            constructor(e, t) {
                                super(e, t);
                                let i = new MediaStream;
                                i.addTrack(t), this.sourceNode = this.context.createMediaStreamSource(i), this.isWorkletLoaded = !1, this.audioWorkletNode = null
                            }
                            start() {
                                return this.active ? Promise.resolve() : (this.active = !0, this.loadWorklet().then((() => {
                                    let e = this.initAudioWorkletNode();
                                    this.sourceNode.connect(e), e.connect(this.context.destination)
                                })).catch((e => (this.active = !1, Promise.reject(e)))))
                            }
                            stop() {
                                this.active && (this.active = !1, this.audioWorkletNode && (this.sourceNode.disconnect(this.audioWorkletNode), this.audioWorkletNode.disconnect(this.context.destination)))
                            }
                            loadWorklet() {
                                return this.isWorkletLoaded ? Promise.resolve() : this.context.audioWorklet.addModule("/lib/src/Util/Audio/VUMeter/TCVUWorkletProcessor.js").then((() => {
                                    this.isWorkletLoaded = !0
                                }))
                            }
                            initAudioWorkletNode() {
                                return this.audioWorkletNode || (this.audioWorkletNode = new AudioWorkletNode(this.context, "VUWorkletProcessor", {
                                    numberOfInputs: 1,
                                    numberOfOutputs: 1,
                                    channelCount: this.sourceNode.channelCount
                                }), this.audioWorkletNode.port.onmessage = e => this.onVolumeLevel(e.data)), this.audioWorkletNode
                            }
                        }
                    },
                    "../Media/Audio/TCAudioMediaTrack.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return l
                        }));
                        var c = i("../Media/TCMediaTrack.ts"),
                            n = i("../Media/Audio/Processor/VUMeter/TCVUMeterFactory.ts"),
                            o = i("../Media/Audio/Processor/FrequencyObserver/TCFrequencyObserver.ts"),
                            r = i("../Media/Audio/Processor/TCAudioMediaTrackInfo.ts"),
                            a = i("./src/TCMediaCapture.ts");
                        let d;
                        class l extends c.default {
                            constructor(e, t = null, i) {
                                super(e, c.default.MEDIA_TYPE.AUDIO, t, i), this.vuMeter = null, this.frequencyObserver = null
                            }
                            getVolumeObserver() {
                                return this.vuMeter || (this.vuMeter = n.default.createVUMeter(s(), this.track)), this.vuMeter
                            }
                            getFrequencyObserver() {
                                return this.frequencyObserver || (this.frequencyObserver = new o.default(s(), this.track)), this.frequencyObserver
                            }
                            get info() {
                                return new r.default
                            }
                            setAGCEnabled(e) {
                                return a.default.getInstance().audioCapabilities.isAGCSupported() ? this.setTrackConstrain("autoGainControl", e) : Promise.resolve(!1)
                            }
                            setEchoCancellationEnabled(e) {
                                return a.default.getInstance().audioCapabilities.iseEhoCancellationSupported() ? this.setTrackConstrain("echoCancellation", e) : Promise.resolve(!1)
                            }
                            isAGCEnabled() {
                                return !!this.track.getSettings().autoGainControl
                            }
                            isEchoCancellationEnabled() {
                                return !!this.track.getSettings().echoCancellation
                            }
                            setTrackConstrain(e, t) {
                                return null === this.constraints ? Promise.resolve(!1) : this.constraints[e] === t ? Promise.resolve(!0) : (this.constraints[e] = t, this.track.applyConstraints(this.constraints).then((() => !0)).catch((() => !1)))
                            }
                        }

                        function s() {
                            return d || (d = new AudioContext), d
                        }
                    },
                    "../Media/TCMediaTrack.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return r
                        }));
                        var c = i("../Event/TCEventTarget.ts"),
                            n = i("../Media/TCMediaTrackType.ts"),
                            o = i("../Media/TCMediaTrackDOMPlayerBuilder.ts");
                        class r extends c.default {
                            constructor(e, t, i, c = Object(o.getTCMediaTrackDOMPlayerBuilderStaticInstance)()) {
                                super(), this.track = e, this.constraints = i, this.trackPlayerBuilder = c, this.type = t, this.stopPromiseCallbackList = null, this.releaseTimeoutId = null, e.addEventListener("mute", (() => this.onMute())), e.addEventListener("unmute", (() => this.onUnmute()))
                            }
                            static get MEDIA_TYPE() {
                                return n.TCMediaTrackTypeEnum
                            }
                            isActive() {
                                return "ended" !== this.track.readyState
                            }
                            isEnabled() {
                                return this.track.enabled
                            }
                            isVideoTrack() {
                                return this.type === n.TCMediaTrackTypeEnum.VIDEO
                            }
                            isAudioTrack() {
                                return this.type === n.TCMediaTrackTypeEnum.AUDIO
                            }
                            enable() {
                                return !this.track.enabled && "ended" !== this.track.readyState && (this.track.enabled = !0, this.fireEvent("enable", {
                                    track: this
                                }), !0)
                            }
                            disable() {
                                return !(!this.track.enabled || "ended" === this.track.readyState || (this.track.enabled = !1, this.fireEvent("disable", {
                                    track: this
                                }), 0))
                            }
                            stop() {
                                return "ended" === this.track.readyState ? Promise.resolve() : new Promise((e => {
                                    null !== this.releaseTimeoutId && window.clearTimeout(this.releaseTimeoutId), this.releaseTimeoutId = setTimeout((() => this.checkTrackEnded()), 1e3), this.stopPromiseCallbackList || (this.stopPromiseCallbackList = new Set), this.stopPromiseCallbackList.add(e), this.track.stop()
                                }))
                            }
                            getDeviceId() {
                                let e = void 0 !== this.track.getSettings ? this.track.getSettings() : null;
                                return null === e ? null === (t = this.constraints) || void 0 === t.deviceId ? null : "string" == typeof t.deviceId ? t.deviceId : Array.isArray(t.deviceId) ? null : "string" == typeof t.deviceId.exact ? t.deviceId.exact : null : void 0 === e.deviceId ? null : e.deviceId;
                                var t
                            }
                            createPlayer() {
                                return this.trackPlayerBuilder.createPlayer(this.track)
                            }
                            checkTrackEnded() {
                                "ended" === this.track.readyState ? this.onTrackEnded() : this.releaseTimeoutId = setTimeout(this.checkTrackEnded, 1e3)
                            }
                            onTrackEnded() {
                                if (null !== this.releaseTimeoutId && window.clearTimeout(this.releaseTimeoutId), null !== this.stopPromiseCallbackList) {
                                    for (let e of this.stopPromiseCallbackList) e();
                                    this.stopPromiseCallbackList = null
                                }
                                this.fireEvent("ended", {
                                    track: this
                                })
                            }
                            onMute() {
                                this.fireEvent("mute", {
                                    track: this
                                })
                            }
                            onUnmute() {
                                this.fireEvent("unmute", {
                                    track: this
                                })
                            }
                        }
                    },
                    "../Media/TCMediaTrackDOMPlayer.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("../Media/TCMediaTrackPlayer.ts");
                        class n extends c.default {
                            constructor(e, t) {
                                super(e), this.domElement = document.createElement(t);
                                let i = new MediaStream;
                                i.addTrack(this.track), this.domElement.srcObject = i
                            }
                            getDOMElement() {
                                return this.domElement
                            }
                            pause() {
                                return this.domElement.pause(), this.muted = !0, Promise.resolve()
                            }
                            play() {
                                return this.domElement.play().then((() => {
                                    this.muted = !1
                                }))
                            }
                        }
                    },
                    "../Media/TCMediaTrackDOMPlayerBuilder.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        })), i.d(t, "getTCMediaTrackDOMPlayerBuilderStaticInstance", (function() {
                            return r
                        }));
                        var c = i("../Media/TCMediaTrackDOMPlayer.ts");
                        class n {
                            createPlayer(e) {
                                if ("video" !== e.kind && "audio" !== e.kind) throw "Unsupported track type!";
                                return new c.default(e, e.kind)
                            }
                        }
                        let o;

                        function r() {
                            return o || (o = new n), o
                        }
                    },
                    "../Media/TCMediaTrackPlayer.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor(e) {
                                this.track = e, this.muted = e.muted
                            }
                            isMuted() {
                                return this.muted
                            }
                        }
                    },
                    "../Media/TCMediaTrackType.ts": function(e, t, i) {
                        "use strict";
                        var c;
                        i.r(t), i.d(t, "TCMediaTrackTypeEnum", (function() {
                                return c
                            })),
                            function(e) {
                                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.AUDIO = 1] = "AUDIO", e[e.VIDEO = 2] = "VIDEO"
                            }(c || (c = {}))
                    },
                    "../Media/Video/ImageCapture/TCAbstractImageCapture.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor(e) {
                                this.track = e
                            }
                        }
                    },
                    "../Media/Video/ImageCapture/TCNativeImageCapture.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return o
                        }));
                        var c = i("../Media/Video/ImageCapture/TCAbstractImageCapture.ts"),
                            n = i("../Media/Video/ImageCapture/TCVideoFrame.ts");
                        class o extends c.default {
                            constructor(e) {
                                super(e), this.imageCapture = new window.ImageCapture(this.track), this.grabFrameRequestList = null
                            }
                            grabFrame() {
                                return new Promise((e => {
                                    this.grabFrameRequestList || (this.grabFrameRequestList = []), this.grabFrameRequestList.push(e), 1 === this.grabFrameRequestList.length && this.runGrabFrameTask()
                                }))
                            }
                            runGrabFrameTask() {
                                this.imageCapture.grabFrame().then((e => this.onGrabFrame(e))).catch((e => this.onGrabFrameError(e)))
                            }
                            onGrabFrame(e) {
                                if (this.grabFrameRequestList) {
                                    for (let t of this.grabFrameRequestList) {
                                        let i = document.createElement("canvas");
                                        i.width = e.width, i.height = e.height;
                                        let c = i.getContext("2d");
                                        c ? (c.drawImage(e, 0, 0), t(new n.default(i))) : t(Promise.reject("Error during initialization 2d context!"))
                                    }
                                    this.grabFrameRequestList = null
                                }
                            }
                            onGrabFrameError(e) {
                                if (this.grabFrameRequestList) {
                                    for (let t of this.grabFrameRequestList) t(Promise.reject(e));
                                    this.grabFrameRequestList = null
                                }
                            }
                        }
                    },
                    "../Media/Video/ImageCapture/TCVideoFrame.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        })), i.d(t, "TCImageFormat", (function() {
                            return n
                        }));
                        class c {
                            static get IMAGE_FORMAT() {
                                return n
                            }
                            static getImageMimeType(e) {
                                switch (e) {
                                    case n.PNG:
                                        return "image/png";
                                    case n.JPEG:
                                        return "image/jpeg";
                                    default:
                                        throw "Unsupported image format!"
                                }
                            }
                            constructor(e) {
                                this.canvas = e
                            }
                            get width() {
                                return this.canvas.width
                            }
                            get height() {
                                return this.canvas.height
                            }
                            toCanvas(e) {
                                return Promise.resolve(this.copyCanvas(e))
                            }
                            toBlob(e, t = n.PNG, i = 100) {
                                let o = c.getImageMimeType(t),
                                    r = e ? this.copyCanvas(e) : this.canvas;
                                return r.toBlob ? new Promise(((e, t) => r.toBlob((i => i ? e(i) : t()), o, i))) : function(e, t, i = 100) {
                                    let c = e.toDataURL(t, i),
                                        n = c.indexOf(",");
                                    if (-1 === n) return Promise.reject();
                                    n += 1;
                                    let o = window.atob(c.substr(n)),
                                        r = new ArrayBuffer(o.length),
                                        a = new Uint8Array(r);
                                    for (let e = 0; e < o.length; e += 1) a[e] = o.charCodeAt(e);
                                    return Promise.resolve(new Blob([a]))
                                }(r, o, i)
                            }
                            clone() {
                                return new c(this.copyCanvas())
                            }
                            copyCanvas(e) {
                                let t = document.createElement("canvas"),
                                    i = t.getContext("2d");
                                if (!i) throw -1;
                                return e ? this.copyCanvasWithParams(t, i, e) : this.copyCanvasAsOriginal(t, i), t
                            }
                            copyCanvasAsOriginal(e, t) {
                                e.width = this.canvas.width, e.height = this.canvas.height, t.drawImage(this.canvas, 0, 0)
                            }
                            copyCanvasWithParams(e, t, i) {
                                let c = this.getImageParameters(i),
                                    n = c.crop,
                                    o = c.position;
                                e.width = c.width, e.height = c.height, t.drawImage(this.canvas, n.x, n.y, n.width, n.height, o.x, o.y, o.width, o.height)
                            }
                            getImageParameters(e) {
                                if (e) {
                                    let t = {
                                        width: e.width ? e.width : this.canvas.width,
                                        height: e.height ? e.height : this.canvas.height,
                                        position: this.getRectangleParameter(e.position),
                                        crop: this.getRectangleParameter(e.crop),
                                        keepAspectRatio: void 0 === e.keepAspectRatio || e.keepAspectRatio,
                                        center: void 0 === e.center || e.center
                                    };
                                    return this.prepareParametersAspectRatio(t), t
                                }
                                return {
                                    width: this.canvas.width,
                                    height: this.canvas.height,
                                    position: this.getRectangleParameter(),
                                    crop: this.getRectangleParameter(),
                                    keepAspectRatio: !0,
                                    center: !0
                                }
                            }
                            getRectangleParameter(e) {
                                return e ? {
                                    x: e.x ? e.x : 0,
                                    y: e.y ? e.y : 0,
                                    width: e.width ? e.width : this.canvas.width,
                                    height: e.height ? e.height : this.canvas.height
                                } : {
                                    x: 0,
                                    y: 0,
                                    width: this.canvas.width,
                                    height: this.canvas.height
                                }
                            }
                            prepareParametersAspectRatio(e) {
                                if (!e.keepAspectRatio) return void this.prepareCenterParameter(e);
                                let t = e.crop,
                                    i = e.position,
                                    c = t.width > i.width ? t.width / i.width : i.width / t.width,
                                    n = t.height > i.height ? t.height / i.height : i.height / t.height;
                                n > c ? (i.width = t.width / n, i.height = t.height / n) : (i.width = t.width / c, i.height = t.height / c), this.prepareCenterParameter(e)
                            }
                            prepareCenterParameter(e) {
                                if (!e.center) return;
                                let t = e.position;
                                e.center && (e.width != t.width && (t.x = (e.width - t.width) / 2), e.height != t.height && (t.y = (e.height - t.height) / 2))
                            }
                        }
                        var n;
                        ! function(e) {
                            e[e.PNG = 0] = "PNG", e[e.JPEG = 1] = "JPEG"
                        }(n || (n = {}))
                    },
                    "../Media/Video/TCVideoMediaTrack.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return r
                        }));
                        var c = i("../Media/TCMediaTrack.ts"),
                            n = i("../Media/Video/TCVideoMediaTrackInfo.ts"),
                            o = i("../Media/Video/ImageCapture/TCNativeImageCapture.ts");
                        class r extends c.default {
                            constructor(e, t = null, i) {
                                super(e, c.default.MEDIA_TYPE.VIDEO, t, i), this.imageCapture = null
                            }
                            getImageCapture() {
                                return this.imageCapture || (this.imageCapture = new o.default(this.track)), this.imageCapture
                            }
                            get info() {
                                return new n.default
                            }
                        }
                    },
                    "../Media/Video/TCVideoMediaTrackInfo.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {}
                    },
                    "../Util/Color/Color.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            static HSBtoRGB(e, t, i, c) {
                                let n = e[t],
                                    o = e[t + 1],
                                    r = e[t + 2],
                                    a = 0,
                                    d = 0,
                                    l = 0;
                                if (0 === o) a = d = l = Math.floor(255 * r + .5);
                                else {
                                    let e = 6 * (n - Math.floor(n)),
                                        t = e - Math.floor(e),
                                        i = r * (1 - o),
                                        c = r * (1 - o * t),
                                        s = r * (1 - o * (1 - t));
                                    switch (Math.trunc(e)) {
                                        case 0:
                                            a = 255 * r + .5, d = 255 * s + .5, l = 255 * i + .5;
                                            break;
                                        case 1:
                                            a = 255 * c + .5, d = 255 * r + .5, l = 255 * i + .5;
                                            break;
                                        case 2:
                                            a = 255 * i + .5, d = 255 * r + .5, l = 255 * s + .5;
                                            break;
                                        case 3:
                                            a = 255 * i + .5, d = 255 * c + .5, l = 255 * r + .5;
                                            break;
                                        case 4:
                                            a = 255 * s + .5, d = 255 * i + .5, l = 255 * r + .5;
                                            break;
                                        case 5:
                                            a = 255 * r + .5, d = 255 * i + .5, l = 255 * c + .5
                                    }
                                }
                                i[c] = Math.trunc(a), i[c + 1] = Math.trunc(d), i[c + 2] = Math.trunc(l)
                            }
                            static RGBtoHSB(e, t, i, c) {
                                let n, o, r, a = e[t],
                                    d = e[t + 1],
                                    l = e[t + 2],
                                    s = Math.max(a, d, l),
                                    m = Math.min(a, d, l);
                                if (r = s / 255, o = 0 != s ? (s - m) / s : 0, 0 == o) n = 0;
                                else {
                                    let e = (s - a) / (s - m),
                                        t = (s - d) / (s - m),
                                        i = (s - l) / (s - m);
                                    n = a == s ? i - t : d == s ? 2 + e - i : 4 + t - e, n /= 6, n < 0 && (n += 1)
                                }
                                i[c] = n, i[c + 1] = o, i[c + 2] = r
                            }
                        }
                    },
                    "../Util/Observable.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor() {
                                this.observerList = new Set
                            }
                            get numObservers() {
                                return this.observerList.size
                            }
                            addObserver(e) {
                                this.observerList.add(e)
                            }
                            removeObserver(e) {
                                this.observerList.delete(e)
                            }
                            hasObserver(e) {
                                return this.observerList.has(e)
                            }
                            notifyObservers(e) {
                                for (let t of this.observerList) t.call(this, e)
                            }
                        }
                    },
                    "../Util/Random/Random.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            static getInt(e = 0, t = Number.MAX_SAFE_INTEGER) {
                                return Math.floor(Math.random() * (t - e)) + e
                            }
                        }
                    },
                    "./index.js": function(e, t, i) {
                        "use strict";
                        i.r(t);
                        var c = i("./src/TCMediaCapture.ts"),
                            n = i("./src/TCMediaDevice.ts"),
                            o = i("./src/Configuration/TCVideoCaptureConfiguration.ts"),
                            r = i("./src/Configuration/TCAudioCaptureConfiguration.ts"),
                            a = i("./src/Exception/TCMediaDeviceCaptureException.ts"),
                            d = i("./src/TCMediaDeviceList.ts"),
                            l = i("./src/Configuration/TCVideoCaptureResolutionConfiguration.ts"),
                            s = i("../Media/TCMediaTrack.ts"),
                            m = i("../Media/TCMediaTrackDOMPlayer.ts"),
                            p = i("./src/Configuration/TCVideoCaptureFrameRateConfiguration.ts"),
                            u = i("../Media/Audio/TCAudioMediaTrack.ts"),
                            f = i("../Media/Video/TCVideoMediaTrack.ts"),
                            b = i("../Media/Video/ImageCapture/TCVideoFrame.ts"),
                            h = i("../Media/Video/TCVideoMediaTrackInfo.ts"),
                            g = i("./src/Capabilities/TCVideoCaptureCapabilities.ts"),
                            x = i("../Media/Audio/Processor/VUMeter/TCVUMeter.ts"),
                            _ = i("../Media/TCMediaTrackPlayer.ts"),
                            v = i("../Event/TCEventTargetInterface.ts"),
                            k = i("../Media/TCMediaTrackType.ts"),
                            w = i("../Media/Audio/Processor/AbstractAudioProcessor.ts"),
                            y = i("../Util/Observable.ts"),
                            C = i("../Media/Video/ImageCapture/TCAbstractImageCapture.ts"),
                            z = i("./src/Capabilities/TCAudioCaptureCapabilities.ts"),
                            M = i("../Media/Audio/Processor/TCAudioMediaTrackInfo.ts"),
                            T = i("./src/Configuration/TCCaptureRangeConfiguration.ts"),
                            E = i("../Exception/TCDuplicateInstanceException.ts"),
                            R = i("../Event/TCEventTarget.ts"),
                            A = i("../Exception/TCException.ts"),
                            D = i("../Media/Audio/Processor/FrequencyObserver/TCFrequencyObserver.ts"),
                            L = i("./src/Capabilities/TCMediaCaptureCapabilities.ts"),
                            I = i("./src/Configuration/TCMediaCaptureConfiguration.ts");
                        t.default = {
                            TCDeviceCaptureErrorCode: a.TCDeviceCaptureErrorCode,
                            TCEventListenerMode: v.TCEventListenerMode,
                            TCImageFormat: b.TCImageFormat,
                            TCMediaDeviceType: n.TCMediaDeviceType,
                            TCMediaTrackTypeEnum: k.TCMediaTrackTypeEnum,
                            TCVideoCaptureFacingMode: o.TCVideoCaptureFacingMode,
                            AbstractAudioProcessor: w.default,
                            Observable: y.default,
                            TCAbstractImageCapture: C.default,
                            TCAudioCaptureCapabilities: z.default,
                            TCAudioCaptureConfiguration: r.default,
                            TCAudioMediaTrack: u.default,
                            TCAudioMediaTrackInfo: M.default,
                            TCCaptureRangeConfiguration: T.default,
                            TCDuplicateInstanceException: E.default,
                            TCEventTarget: R.default,
                            TCException: A.default,
                            TCFrequencyObserver: D.default,
                            TCMediaCapture: c.default,
                            TCMediaCaptureCapabilities: L.default,
                            TCMediaCaptureConfiguration: I.default,
                            TCMediaDevice: n.default,
                            TCMediaDeviceCaptureException: a.default,
                            TCMediaDeviceList: d.default,
                            TCMediaTrack: s.default,
                            TCMediaTrackDOMPlayer: m.default,
                            TCMediaTrackPlayer: _.default,
                            TCVUMeter: x.default,
                            TCVideoCaptureCapabilities: g.default,
                            TCVideoCaptureConfiguration: o.default,
                            TCVideoCaptureFrameRateConfiguration: p.default,
                            TCVideoCaptureResolutionConfiguration: l.default,
                            TCVideoFrame: b.default,
                            TCVideoMediaTrack: f.default,
                            TCVideoMediaTrackInfo: h.default
                        }
                    },
                    "./src/Capabilities/TCAudioCaptureCapabilities.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/Capabilities/TCMediaCaptureCapabilities.ts");
                        class n extends c.default {
                            isAGCSupported() {
                                return 1 == this.getSupportedConstraints().autoGainControl
                            }
                            iseEhoCancellationSupported() {
                                return 1 == this.getSupportedConstraints().echoCancellation
                            }
                        }
                    },
                    "./src/Capabilities/TCMediaCaptureCapabilities.ts": function(e, t, i) {
                        "use strict";
                        let c;
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        class n {
                            constructor() {
                                void 0 === c && (c = navigator.mediaDevices.getSupportedConstraints())
                            }
                            getSupportedConstraints() {
                                return c
                            }
                        }
                    },
                    "./src/Capabilities/TCVideoCaptureCapabilities.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/Capabilities/TCMediaCaptureCapabilities.ts");
                        class n extends c.default {
                            isFrameRateSupported() {
                                return 1 == this.getSupportedConstraints().frameRate
                            }
                            isAspectRatioSupported() {
                                return !0 === this.getSupportedConstraints().aspectRatio
                            }
                        }
                    },
                    "./src/Configuration/TCAudioCaptureConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/Configuration/TCMediaCaptureConfiguration.ts");
                        class n extends c.default {
                            constructor() {
                                super()
                            }
                            clone() {
                                return new n
                            }
                        }
                    },
                    "./src/Configuration/TCCaptureRangeConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            getValueOrRange(e) {
                                return null === e || "number" == typeof e ? e : function(e) {
                                    return {
                                        min: n(e.min),
                                        max: n(e.max),
                                        ideal: n(e.ideal)
                                    }
                                }(e)
                            }
                            cloneRequiredRange(e) {
                                return this.createRequiredRange(e.min, e.max, e.ideal)
                            }
                            isRange(e) {
                                return null != e && "number" != typeof e
                            }
                            isEqualsValues(e, t) {
                                return e === t || !(!this.isRange(e) || !this.isRange(t)) && e.max === t.max && e.min === t.min && e.ideal === t.ideal
                            }
                            createRequiredRange(e = null, t = null, i = null) {
                                return {
                                    min: e,
                                    max: t,
                                    ideal: i
                                }
                            }
                        }

                        function n(e) {
                            return null == e ? null : Number.isFinite(e) ? e : null
                        }
                    },
                    "./src/Configuration/TCMediaCaptureConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor() {}
                        }
                    },
                    "./src/Configuration/TCVideoCaptureConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return o
                        })), i.d(t, "TCVideoCaptureFacingMode", (function() {
                            return c
                        }));
                        var c, n = i("./src/Configuration/TCMediaCaptureConfiguration.ts");
                        class o extends n.default {
                            constructor() {
                                super(), this.resolution = null, this.frameRate = null, this.facingMode = null
                            }
                            setResolution(e) {
                                this.resolution = e
                            }
                            getResolution() {
                                return this.resolution
                            }
                            hasResolution() {
                                return null !== this.resolution
                            }
                            setFrameRate(e) {
                                this.frameRate = e
                            }
                            getFrameRate() {
                                return this.frameRate
                            }
                            hasFrameRate() {
                                return null !== this.frameRate
                            }
                            setFacingMode(e) {
                                this.facingMode = e
                            }
                            getFacingMode() {
                                return this.facingMode
                            }
                            hasFacingMode() {
                                return null !== this.facingMode
                            }
                            clone() {
                                let e = new o;
                                return null !== this.resolution && (e.resolution = r(this.resolution)), null !== this.frameRate && (e.frameRate = r(this.frameRate)), null !== this.facingMode && (e.facingMode = function(e) {
                                    if (!Array.isArray(e)) return e;
                                    let t = [];
                                    for (let i of e) t.push(i);
                                    return t
                                }(this.facingMode)), e
                            }
                        }

                        function r(e) {
                            if (!Array.isArray(e)) return e.clone();
                            let t = [];
                            for (let i of e) t.push(i.clone());
                            return t
                        }! function(e) {
                            e[e.USER = 0] = "USER", e[e.ENVIRONMENT = 1] = "ENVIRONMENT", e[e.LEFT = 2] = "LEFT", e[e.RIGHT = 3] = "RIGHT"
                        }(c || (c = {}))
                    },
                    "./src/Configuration/TCVideoCaptureFrameRateConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/Configuration/TCCaptureRangeConfiguration.ts");
                        class n extends c.default {
                            constructor(e = null) {
                                super(), this.frameRate = this.getValueOrRange(e)
                            }
                            getFrameRate() {
                                return this.frameRate
                            }
                            setFrameRate(e) {
                                this.frameRate = this.getValueOrRange(e)
                            }
                            setMinFrameRate(e) {
                                this.isRange(this.frameRate) ? this.frameRate.min = e : this.frameRate = this.createRequiredRange(e)
                            }
                            setMaxFrameRate(e) {
                                this.isRange(this.frameRate) ? this.frameRate.max = e : this.frameRate = this.createRequiredRange(null, e)
                            }
                            setIdealFrameRate(e) {
                                this.isRange(this.frameRate) ? this.frameRate.ideal = e : this.frameRate = this.createRequiredRange(null, null, e)
                            }
                            getMinFrameRate() {
                                return this.isRange(this.frameRate) ? this.frameRate.min : this.frameRate
                            }
                            getMaxFrameRate() {
                                return this.isRange(this.frameRate) ? this.frameRate.max : this.frameRate
                            }
                            getIdealFrameRate() {
                                return this.isRange(this.frameRate) ? this.frameRate.ideal : this.frameRate
                            }
                            clone() {
                                return new n(this.frameRate)
                            }
                            equals(e) {
                                return this === e || this.isEqualsValues(this.frameRate, e.frameRate)
                            }
                        }
                    },
                    "./src/Configuration/TCVideoCaptureResolutionConfiguration.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/Configuration/TCCaptureRangeConfiguration.ts");
                        class n extends c.default {
                            constructor(e = null, t = null) {
                                super(), this.width = this.getValueOrRange(e), this.height = this.getValueOrRange(t)
                            }
                            setWidth(e) {
                                this.width = this.getValueOrRange(e)
                            }
                            setHeight(e) {
                                this.height = this.getValueOrRange(e)
                            }
                            getWidth() {
                                return this.isRange(this.width) ? this.cloneRequiredRange(this.width) : this.width
                            }
                            getHeight() {
                                return this.isRange(this.height) ? this.cloneRequiredRange(this.height) : this.height
                            }
                            setMinWidth(e) {
                                this.isRange(this.width) ? this.width.min = e : this.width = this.createRequiredRange(e)
                            }
                            setMaxWidth(e) {
                                this.isRange(this.width) ? this.width.max = e : this.width = this.createRequiredRange(null, e)
                            }
                            setIdealWidth(e) {
                                this.isRange(this.width) ? this.width.ideal = e : this.width = this.createRequiredRange(null, null, e)
                            }
                            setMinHeight(e) {
                                this.isRange(this.height) ? this.height.min = e : this.height = this.createRequiredRange(e)
                            }
                            setMaxHeight(e) {
                                this.isRange(this.height) ? this.height.max = e : this.height = this.createRequiredRange(null, e)
                            }
                            setIdealHeight(e) {
                                this.isRange(this.height) ? this.height.ideal = e : this.height = this.createRequiredRange(null, null, e)
                            }
                            getMinWidth() {
                                return this.isRange(this.width) ? this.width.min : this.width
                            }
                            getMaxWidth() {
                                return this.isRange(this.width) ? this.width.max : this.width
                            }
                            getIdealWidth() {
                                return this.isRange(this.width) ? this.width.ideal : this.width
                            }
                            getMinHeight() {
                                return this.isRange(this.height) ? this.height.min : this.height
                            }
                            getMaxHeight() {
                                return this.isRange(this.height) ? this.height.max : this.height
                            }
                            getIdealHeight() {
                                return this.isRange(this.height) ? this.height.ideal : this.height
                            }
                            hasRangeWidth() {
                                return this.isRange(this.height)
                            }
                            hasRangeHeight() {
                                return this.isRange(this.height)
                            }
                            clone() {
                                return new n(this.width, this.height)
                            }
                            equals(e) {
                                return this === e || this.isEqualsValues(this.width, e.width) && this.isEqualsValues(this.height, e.height)
                            }
                        }
                    },
                    "./src/Exception/TCMediaDeviceCaptureException.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        })), i.d(t, "TCDeviceCaptureErrorCode", (function() {
                            return n
                        }));
                        class c extends Error {
                            static get ERROR() {
                                return n
                            }
                            constructor(e, t, i = null) {
                                super(t), this.name = "TCDeviceCaptureException", this.errorCode = e, this.throwable = i
                            }
                            get cause() {
                                return this.throwable
                            }
                            static fromDOMError(e) {
                                let t = c.ERROR.UNKNOWN_ERROR;
                                if (void 0 === e) return new c(t);
                                switch (e.name) {
                                    case "NotAllowedError":
                                    case "SecurityError":
                                        t = c.ERROR.PERMISSION_DENIED;
                                        break;
                                    case "NotReadableError":
                                    case "AbortError":
                                    case "NotFoundError":
                                        t = c.ERROR.NOT_AVAILABLE;
                                        break;
                                    case "OverconstrainedError":
                                    case "ConstraintNotSatisfiedError":
                                        t = c.ERROR.INVALID_CAPTURE_CONFIGURATION
                                }
                                return new c(t, e.message, e)
                            }
                        }
                        var n;
                        ! function(e) {
                            e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.INVALID_DEVICE = 1] = "INVALID_DEVICE", e[e.INVALID_CAPTURE_CONFIGURATION = 2] = "INVALID_CAPTURE_CONFIGURATION", e[e.NOT_AVAILABLE = 3] = "NOT_AVAILABLE", e[e.PERMISSION_DENIED = 4] = "PERMISSION_DENIED"
                        }(n || (n = {}))
                    },
                    "./src/TCAudioConstraintsBuilder.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return n
                        }));
                        var c = i("./src/TCMediaConstraintsBuilder.ts");
                        class n extends c.default {
                            constructor(e, t = null) {
                                super(e, t), this.constraints = function(e, t) {
                                    let i = {};
                                    return function(e, t) {
                                        null !== t && (e.deviceId = {
                                            exact: t.id
                                        })
                                    }(i, t), {
                                        audio: i
                                    }
                                }(0, t)
                            }
                            getCurrentConstraints() {
                                return this.constraints
                            }
                            getNextFallbackConstraints(e) {
                                return null
                            }
                        }
                    },
                    "./src/TCMediaCapture.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return x
                        }));
                        var c = i("../Media/Audio/TCAudioMediaTrack.ts"),
                            n = i("./src/TCMediaDevice.ts"),
                            o = i("../Media/Video/TCVideoMediaTrack.ts"),
                            r = i("../Event/TCEventTarget.ts"),
                            a = i("./src/Exception/TCMediaDeviceCaptureException.ts"),
                            d = i("./src/Capabilities/TCVideoCaptureCapabilities.ts"),
                            l = i("./src/Capabilities/TCAudioCaptureCapabilities.ts"),
                            s = i("./src/Configuration/TCVideoCaptureConfiguration.ts"),
                            m = i("./src/Configuration/TCAudioCaptureConfiguration.ts"),
                            p = i("./src/Configuration/TCVideoCaptureResolutionConfiguration.ts"),
                            u = i("./src/TCMediaDeviceCaptureRequest.ts"),
                            f = i("./src/TCMediaDeviceList.ts");
                        const b = [{
                                width: 640,
                                height: 360,
                                frameRate: 15
                            }, {
                                width: 640,
                                height: 480,
                                frameRate: 15
                            }, {
                                width: 960,
                                height: 540,
                                frameRate: 15
                            }, {
                                width: 1280,
                                height: 720,
                                frameRate: 15
                            }],
                            h = [];
                        let g;
                        class x extends r.default {
                            constructor() {
                                if (super(), g) throw -1;
                                g = this, this.waitCaptureResult = !1, this.captureObserverList = new Map, this.videoCapabilities = new d.default, this.audioCapabilities = new l.default
                            }
                            static getInstance() {
                                return g || new x
                            }
                            capture(e, t = null) {
                                if (!v(e)) return Promise.reject(new a.default(a.default.ERROR.INVALID_DEVICE));
                                if (! function(e, t) {
                                        if (null !== e) {
                                            let i = y(e) ? e.type : e;
                                            return (i === n.TCMediaDeviceType.CAMERA || i === n.TCMediaDeviceType.MICROPHONE) && (null === t || k(i, t))
                                        }
                                        return null !== t && function(e) {
                                            e = e instanceof Array ? e : [e];
                                            for (let t of e)
                                                if (!(t instanceof s.default || t instanceof m.default)) return !1;
                                            return !0
                                        }(t)
                                    }(e, t)) return Promise.reject(new a.default(a.default.ERROR.INVALID_CAPTURE_CONFIGURATION));
                                t = w(e, t);
                                let i = function(e) {
                                    return y(e) ? e : null
                                }(e);
                                return this.createPromiseCaptureRequest(i, t)
                            }
                            createCaptureQueue(e, t, i) {
                                if (! function(e) {
                                        if (!Array.isArray(e)) return !1;
                                        for (let t of e)
                                            if (t instanceof n.default) {
                                                if (!v(t)) return !1
                                            } else {
                                                if (!v(t.device)) return !1;
                                                if (null !== t.config && void 0 !== t.config && !k(t.device.type, t.config)) return !1
                                            } return !0
                                    }(e)) throw new a.default(a.default.ERROR.INVALID_CAPTURE_CONFIGURATION);
                                this.createCustomCaptureQueue(function(e) {
                                    let t = [];
                                    for (let i of e)
                                        if (i instanceof n.default) {
                                            let e = w(i, null);
                                            t.push({
                                                config: e,
                                                device: i
                                            })
                                        } else t.push({
                                            device: i.device,
                                            config: w(i.device, void 0 === i.config ? null : i.config)
                                        });
                                    return t
                                }(e), t, i)
                            }
                            addDeviceCaptureObserver(e, t) {
                                let i = this.captureObserverList.get(e);
                                i || (i = new Set, this.captureObserverList.set(e, i)), i.add(t)
                            }
                            removeDeviceCaptureObserver(e, t) {
                                let i = this.captureObserverList.get(e);
                                i && (i.delete(t), 0 === i.size && this.captureObserverList.delete(e))
                            }
                            createPromiseCaptureRequest(e, t) {
                                return new Promise(((i, c) => {
                                    let n = this.executeCaptureRequest.bind(this),
                                        o = new u.default(t, n, e);
                                    h.push({
                                        request: o,
                                        resolve: i,
                                        reject: c,
                                        groupId: Symbol(),
                                        isCallable: !1
                                    }), this.runCaptureRequest()
                                }))
                            }
                            createCustomCaptureQueue(e, t, i) {
                                let c = this.executeCaptureRequest.bind(this),
                                    n = Symbol();
                                for (let {
                                        device: o,
                                        config: r
                                    }
                                    of e) {
                                    let e = new u.default(r, c, o);
                                    h.push({
                                        groupId: n,
                                        request: e,
                                        resolve: t,
                                        reject: i,
                                        isCallable: !0
                                    })
                                }
                                this.runCaptureRequest()
                            }
                            runCaptureRequest() {
                                if (!0 === this.waitCaptureResult) return;
                                const e = h.shift();
                                void 0 === e ? this.waitCaptureResult = !1 : (this.waitCaptureResult = !0, e.request.execute().then((t => this.onCaptureSuccess(e, t))).catch((t => this.onCaptureFail(e, t))))
                            }
                            executeCaptureRequest(e, t) {
                                return navigator.mediaDevices.getUserMedia(t).then((async e => {
                                    if (await new Promise(((e, t) => {
                                            let i = setTimeout((() => {
                                                clearTimeout(i), e()
                                            }), 500)
                                        })), ! function(e) {
                                            let t = e.getTracks();
                                            return 1 == t.length && ("video" === t[0].kind || "audio" === t[0].kind)
                                        }(e)) {
                                        let t = e.getTracks();
                                        for (let e of t) e.stop();
                                        return null
                                    }
                                    return e
                                }))
                            }
                            onCaptureSuccess(e, t) {
                                let i = function(e, t) {
                                    let i = e.getTracks();
                                    if (1 !== i.length) throw new a.default(a.default.ERROR.INVALID_DEVICE);
                                    let n = i[0];
                                    if ("video" === n.kind) return new o.default(n, _(t, "video"));
                                    if ("audio" === n.kind) return new c.default(n, _(t, "audio"));
                                    throw new a.default(a.default.ERROR.INVALID_DEVICE)
                                }(t.mediaStream, t.constraints);
                                (function(e, t) {
                                    return null !== e.request.device ? Promise.resolve(e.request.device) : f.default.getInstance().then((e => {
                                        let i = t.getDeviceId();
                                        return null === i ? null : e.getDeviceById(i)
                                    })).catch((() => null))
                                })(e, i).then((c => {
                                    this.waitCaptureResult = !1, setTimeout((() => this.runCaptureRequest()), 0), null !== c && this.runDeviceCaptureObserver(c, i), this.fireEvent("successCapture", {
                                        device: c,
                                        track: i,
                                        configuration: t.configuration
                                    }), e.isCallable ? e.resolve(c, i, t.configuration) || this.removeCaptureRequestWithGroup(e.groupId) : e.resolve(i)
                                }))
                            }
                            runDeviceCaptureObserver(e, t) {
                                let i = this.captureObserverList.get(e);
                                if (i)
                                    for (let c of i) c(e, t)
                            }
                            onCaptureFail(e, t) {
                                this.waitCaptureResult = !1, setTimeout((() => this.runCaptureRequest()), 0), this.fireEvent("failCapture", {
                                    device: e.request.device,
                                    error: t
                                }), e.isCallable ? e.reject(e.request.device, t) || this.removeCaptureRequestWithGroup(e.groupId) : e.reject(t)
                            }
                            removeCaptureRequestWithGroup(e) {
                                for (let t = h.length - 1; t >= 0; t--) h[t].groupId === e && h.splice(t, 1)
                            }
                        }

                        function _(e, t) {
                            let i = e[t];
                            return void 0 === i || !1 === i || !0 === i ? null : i
                        }

                        function v(e) {
                            return null === e || ("number" == typeof e ? e === n.TCMediaDeviceType.CAMERA || e === n.TCMediaDeviceType.MICROPHONE : !(!e.isCamera() && !e.isMicrophone() || !e.isConnected()))
                        }

                        function k(e, t) {
                            t = t instanceof Array ? t : [t];
                            for (let i of t)
                                if (e === n.TCMediaDeviceType.CAMERA && !(i instanceof s.default) || e === n.TCMediaDeviceType.MICROPHONE && !(i instanceof m.default)) return !1;
                            return !0
                        }

                        function w(e, t) {
                            if (null !== t && 0 != (t = function(e) {
                                    e instanceof Array || (e = [e]);
                                    let t = [];
                                    for (let i of e) t.push(i);
                                    return t
                                }(t)).length) return t;
                            if (null === e) throw new a.default(a.default.ERROR.INVALID_DEVICE);
                            let i = y(e) ? e.type : e;
                            if (i === n.TCMediaDeviceType.CAMERA) return [C()];
                            if (i === n.TCMediaDeviceType.MICROPHONE) return [new m.default];
                            throw new a.default(a.default.ERROR.INVALID_DEVICE)
                        }

                        function y(e) {
                            return e instanceof n.default
                        }

                        function C() {
                            let e = new s.default,
                                t = [];
                            for (let e of b) t.push(new p.default(e.width, e.height));
                            return e.setResolution(t), e
                        }
                    },
                    "./src/TCMediaConstraintsBuilder.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return c
                        }));
                        class c {
                            constructor(e, t = null) {
                                this.config = e, this.device = t
                            }
                        }
                    },
                    "./src/TCMediaDevice.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return r
                        })), i.d(t, "TCMediaDeviceType", (function() {
                            return c
                        }));
                        var c, n = i("../Event/TCEventTarget.ts"),
                            o = i("./src/TCMediaCapture.ts");
                        class r extends n.default {
                            static get TYPE() {
                                return c
                            }
                            constructor(e, t) {
                                super(), this.deviceEntity = e, this.trackList = new Set, this.connected = !0, o.default.getInstance().addDeviceCaptureObserver(this, ((e, t) => this.onDeviceCaptured(t))), t.setLabelChangeObserver(this, (() => this.onDeviceLabelChange())), t.setDisconnectedObserver(this, (() => this.onDeviceDisconnected()))
                            }
                            get type() {
                                return this.deviceEntity.type
                            }
                            get id() {
                                return this.deviceEntity.id
                            }
                            get label() {
                                return this.deviceEntity.label
                            }
                            get numTracks() {
                                return this.trackList.size
                            }
                            isConnected() {
                                return this.connected
                            }
                            hasTracks() {
                                return this.trackList.size > 0
                            }
                            getTracks() {
                                return new Set(this.trackList)
                            }
                            isCamera() {
                                return this.deviceEntity.type === c.CAMERA
                            }
                            isMicrophone() {
                                return this.deviceEntity.type === c.MICROPHONE
                            }
                            isSpeakers() {
                                return this.deviceEntity.type === c.SPEAKERS
                            }
                            isScreen() {
                                return this.deviceEntity.type === c.SCREEN
                            }
                            capture(e) {
                                return o.default.getInstance().capture(this, e)
                            }
                            onDeviceLabelChange() {
                                this.fireEvent("labelChange", {
                                    device: this
                                })
                            }
                            onDeviceCaptured(e) {
                                this.trackList.add(e), e.addEventListener("ended", (() => {
                                    this.trackList.delete(e), this.fireEvent("captureEnd", {
                                        device: this,
                                        track: e
                                    })
                                })), this.fireEvent("captureStart", {
                                    device: this,
                                    track: e
                                })
                            }
                            onDeviceDisconnected() {
                                this.connected = !1, this.fireEvent("disconnected", {
                                    device: this
                                })
                            }
                        }! function(e) {
                            e[e.UNKNOWN = 0] = "UNKNOWN", e[e.CAMERA = 1] = "CAMERA", e[e.MICROPHONE = 2] = "MICROPHONE", e[e.SCREEN = 3] = "SCREEN", e[e.SPEAKERS = 4] = "SPEAKERS"
                        }(c || (c = {}))
                    },
                    "./src/TCMediaDeviceCaptureRequest.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return l
                        })), i.d(t, "TCMediaDeviceCaptureRequestReadyState", (function() {
                            return c
                        }));
                        var c, n = i("./src/Exception/TCMediaDeviceCaptureException.ts"),
                            o = i("./src/Configuration/TCVideoCaptureConfiguration.ts"),
                            r = i("./src/TCVideoConstraintsBuilder.ts"),
                            a = i("./src/Configuration/TCAudioCaptureConfiguration.ts"),
                            d = i("./src/TCAudioConstraintsBuilder.ts");
                        class l {
                            constructor(e, t, i = null) {
                                this.constraintsBuilderList = function(e, t = null) {
                                    let i = [];
                                    for (let c of e) {
                                        let e = s(c, t);
                                        null !== e && i.push(e)
                                    }
                                    return i
                                }(e, i), this.requestExecutor = t, this.device = i, this.currentConfigIndex = 0, this.readyState = c.READY
                            }
                            execute() {
                                return this.readyState !== c.READY ? Promise.reject(new n.default(n.default.ERROR.UNKNOWN_ERROR)) : (this.readyState = c.RUN, this.executeWithConstraints(this.constraintsBuilderList[0].getCurrentConstraints()))
                            }
                            executeWithConstraints(e) {
                                return null === e ? Promise.reject(new n.default(n.default.ERROR.INVALID_CAPTURE_CONFIGURATION)) : this.requestExecutor(this, e).then((t => null === t ? this.executeWithConstraints(this.getNextBuilderConstraints()) : {
                                    mediaStream: t,
                                    constraints: e,
                                    configuration: this.getCurrentConstraintsBuilder().config
                                })).catch((e => this.isConstraintsError(e) ? this.executeWithConstraints(this.getFallbackConstraints(e)) : Promise.reject(n.default.fromDOMError(e))))
                            }
                            getCurrentConstraintsBuilder() {
                                return this.constraintsBuilderList[this.currentConfigIndex]
                            }
                            getNextBuilderConstraints() {
                                let e = this.constraintsBuilderList[++this.currentConfigIndex];
                                return void 0 === e ? null : e.getCurrentConstraints()
                            }
                            getFallbackConstraints(e) {
                                let t = this.constraintsBuilderList[this.currentConfigIndex];
                                if (void 0 === t) return null;
                                let i = t.getNextFallbackConstraints(e);
                                return null === i ? this.getNextBuilderConstraints() : i
                            }
                            isConstraintsError(e) {
                                return void 0 !== e && ("OverconstrainedError" === e.name || "ConstraintNotSatisfiedError" == e.name || "OverconstrainedError" === e.constructor.name)
                            }
                        }

                        function s(e, t = null) {
                            return e instanceof o.default ? new r.default(e, t) : e instanceof a.default ? new d.default(e, t) : null
                        }! function(e) {
                            e[e.READY = 0] = "READY", e[e.RUN = 1] = "RUN", e[e.DONE = 2] = "DONE"
                        }(c || (c = {}))
                    },
                    "./src/TCMediaDeviceList.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return m
                        }));
                        var c = i("./src/TCMediaDevice.ts"),
                            n = i("../Event/TCEventTarget.ts"),
                            o = i("../Exception/TCDuplicateInstanceException.ts");
                        const r = /\s\([0-9a-fA-F]{4}:[0-9a-fA-F]{4}\)$/,
                            a = navigator.mediaDevices && "ondevicechange" in navigator.mediaDevices && "addEventListener" in navigator.mediaDevices;
                        let d, l, s = null;
                        class m extends n.default {
                            constructor(e) {
                                if (l = {}, super(l), d) throw new o.default;
                                d = this, this.deviceListWorker = e
                            }
                            static getInstance() {
                                return d ? Promise.resolve(d) : new Promise((e => {
                                    if (null === s && (s = []), s.push(e), 1 !== s.length) return;
                                    let t = new p;
                                    t.updateDeviceList().then((() => {
                                        let e = new m(t);
                                        if (null !== s) {
                                            for (let t of s) t(e);
                                            s = null
                                        }
                                    }))
                                }))
                            }
                            get numDevices() {
                                return this.deviceListWorker.deviceList.size
                            }
                            get numCameras() {
                                return this.deviceListWorker.countDevicesByType("videoinput")
                            }
                            get numMicrophones() {
                                return this.deviceListWorker.countDevicesByType("audioinput")
                            }
                            get numSpeakers() {
                                return this.deviceListWorker.countDevicesByType("audiooutput")
                            }
                            countDevicesByType(e) {
                                return this.deviceListWorker.countDevicesByType(function(e) {
                                    let t = h[e];
                                    if (void 0 === t) throw "Invalid device!";
                                    return t
                                }(e))
                            }
                            getDeviceList() {
                                return new Set(this.deviceListWorker.deviceList)
                            }
                            getCamerasList() {
                                return this.deviceListWorker.makeListByType("videoinput")
                            }
                            getMicrophonesList() {
                                return this.deviceListWorker.makeListByType("audioinput")
                            }
                            getSpeakersList() {
                                return this.deviceListWorker.makeListByType("audiooutput")
                            }
                            getDeviceById(e) {
                                return this.deviceListWorker.findDeviceById(e)
                            }
                        }
                        class p {
                            constructor() {
                                this.typedDeviceList = new Map, this.deviceList = new Set, this.deviceListRefreshCallbackList = new Set, this.deviceObservable = new g, this.isDeviceLabelAvailableFlags = {
                                    videoinput: !1,
                                    audioinput: !1,
                                    audiooutput: !1
                                }, a ? navigator.mediaDevices.addEventListener("devicechange", (() => this.updateDeviceList())) : this.startCacheRefresh(1e4)
                            }
                            updateDeviceList() {
                                return navigator.mediaDevices.enumerateDevices().then((e => this.onDeviceList(e)))
                            }
                            countDevicesByType(e) {
                                let t = this.typedDeviceList.get(e);
                                return t ? t.size : 0
                            }
                            makeListByType(e) {
                                let t = new Set,
                                    i = this.typedDeviceList.get(e);
                                if (!i) return t;
                                for (let e of i.values()) t.add(e.deviceInstance);
                                return t
                            }
                            findDeviceById(e) {
                                for (let t of this.deviceList)
                                    if (t.id === e) return t;
                                return null
                            }
                            startCacheRefresh(e) {
                                const t = () => {
                                    this.updateDeviceList().then((() => setTimeout(t, e)))
                                };
                                setTimeout(t, e)
                            }
                            onDeviceList(e) {
                                let t = new Map,
                                    i = this.addDeviceList(e, t),
                                    c = this.checkDisconnectedDevices(t);
                                (i || c) && l && l.fireEvent("deviceListUpdate", {
                                    list: new Set(this.deviceList)
                                });
                                for (let e of this.deviceListRefreshCallbackList) e();
                                this.deviceListRefreshCallbackList.clear()
                            }
                            addDeviceList(e, t) {
                                let i = {},
                                    c = !1,
                                    n = new Set;
                                for (let o of e) {
                                    let e = t.get(o.kind);
                                    e || (e = new Set, t.set(o.kind, e)), e.add(o.deviceId), "communications" !== o.deviceId && ("default" !== o.deviceId ? this.addDevice(o, i) && (c = !0) : n.add(o))
                                }
                                this.setDefaultDeviceList(n, i) && (c = !0);
                                for (let e in i) this.isDeviceLabelAvailableFlags[e] = i[e];
                                return c
                            }
                            addDevice(e, t) {
                                let i = this.typedDeviceList.get(e.kind);
                                i || (i = new Map, this.typedDeviceList.set(e.kind, i));
                                let c = i.get(e.deviceId);
                                return c ? (!this.isDeviceLabelAvailableFlags[e.kind] && this.checkDeviceLabel(e, c) && (t[e.kind] = !0), !1) : (c = this.createDeviceEntry(e), i.set(e.deviceId, c), this.deviceList.add(c.deviceInstance), l && l.fireEvent("deviceConnected", {
                                    device: c.deviceInstance
                                }), 0 !== e.label.length && (t[e.kind] = !0), !0)
                            }
                            checkDeviceLabel(e, t) {
                                return 0 !== e.label.length && (t.entity.label = f(e), this.deviceObservable.notifyLabelChange(t.deviceInstance), l && l.fireEvent("deviceLabelChange", {
                                    device: t.deviceInstance
                                }), !0)
                            }
                            setDefaultDeviceList(e, t) {
                                let i = !1;
                                for (let c of e) {
                                    let e = this.typedDeviceList.get(c.kind);
                                    e && e.size > 0 || this.addDevice(c, t) && (i = !0)
                                }
                                return i
                            }
                            checkDisconnectedDevices(e) {
                                let t = !1;
                                for (let [i, c] of this.typedDeviceList) {
                                    let n = e.get(i);
                                    this.checkDisconnectedDevicesByType(c, n) && (t = !0)
                                }
                                return t
                            }
                            checkDisconnectedDevicesByType(e, t) {
                                let i = !1;
                                if (!t) return i = e.size > 0, this.removeDeviceList(e), i;
                                for (let [c, n] of e) t.has(c) || (this.removeDevice(e, n), i = !0);
                                return i
                            }
                            removeDeviceList(e) {
                                for (let t of e.values()) this.removeDevice(e, t)
                            }
                            removeDevice(e, t) {
                                e.delete(t.entity.id), this.deviceList.delete(t.deviceInstance), this.deviceObservable.notifyDisconnected(t.deviceInstance), l && l.fireEvent("deviceDisconnected", {
                                    device: t.deviceInstance
                                })
                            }
                            createDeviceEntry(e) {
                                let t = {
                                    id: e.deviceId,
                                    label: f(e),
                                    type: u(e)
                                };
                                return {
                                    entity: t,
                                    deviceInstance: new c.default(t, this.deviceObservable)
                                }
                            }
                        }

                        function u(e) {
                            let t = b[e.kind];
                            if (void 0 === t) throw "Invalid device!";
                            return t
                        }

                        function f(e) {
                            return 0 === e.label.length || "videoinput" !== e.kind ? e.label : e.label.replace(r, "")
                        }
                        const b = {
                                videoinput: c.default.TYPE.CAMERA,
                                audioinput: c.default.TYPE.MICROPHONE,
                                audiooutput: c.default.TYPE.SPEAKERS
                            },
                            h = {
                                [c.default.TYPE.CAMERA]: "videoinput",
                                [c.default.TYPE.MICROPHONE]: "audioinput",
                                [c.default.TYPE.SPEAKERS]: "audiooutput"
                            };
                        class g {
                            constructor() {
                                this.disconnectedObserverList = new Map, this.labelChangeObserverList = new Map
                            }
                            setDisconnectedObserver(e, t) {
                                this.disconnectedObserverList.set(e, t)
                            }
                            setLabelChangeObserver(e, t) {
                                this.labelChangeObserverList.set(e, t)
                            }
                            notifyDisconnected(e) {
                                let t = this.disconnectedObserverList.get(e);
                                t && t(e), this.disconnectedObserverList.delete(e)
                            }
                            notifyLabelChange(e) {
                                let t = this.labelChangeObserverList.get(e);
                                t && t(e)
                            }
                        }
                    },
                    "./src/TCVideoConstraintsBuilder.ts": function(e, t, i) {
                        "use strict";
                        i.r(t), i.d(t, "default", (function() {
                            return o
                        }));
                        var c = i("./src/TCMediaConstraintsBuilder.ts"),
                            n = i("./src/Configuration/TCVideoCaptureConfiguration.ts");
                        class o extends c.default {
                            constructor(e, t = null) {
                                super(e, t), this.currentResolutionIndex = 0, this.currentFrameRateIndex = 0, this.currentFacingModeIndex = 0, this.constraints = function(e, t = null) {
                                    let i = {};
                                    return function(e, t) {
                                        r(e, "deviceId", null === t ? t : t.id)
                                    }(i, t), {
                                        video: i
                                    }
                                }(0, t), this.setNextConstraintsResolution(), this.setNextConstraintsFrameRate(), this.setNextConstraintsFacingMode()
                            }
                            getCurrentConstraints() {
                                return this.constraints
                            }
                            getNextFallbackConstraints(e) {
                                let t = !1;
                                switch (e.constraint) {
                                    case "width":
                                    case "height":
                                    case "":
                                        t = this.setNextConstraintsResolution();
                                        break;
                                    case "frameRate":
                                        t = this.setNextConstraintsFrameRate();
                                        break;
                                    case "facingMode":
                                        t = this.setNextConstraintsFacingMode()
                                }
                                return t ? this.constraints : null
                            }
                            setNextConstraintsResolution() {
                                return this.getConfigValue(this.config.getResolution(), this.currentResolutionIndex, (e => {
                                    a(this.constraints.video, "width", e.getWidth()), a(this.constraints.video, "height", e.getHeight()), this.currentResolutionIndex++
                                }))
                            }
                            setNextConstraintsFrameRate() {
                                return this.getConfigValue(this.config.getFrameRate(), this.currentFrameRateIndex, (e => {
                                    a(this.constraints.video, "frameRate", e.getFrameRate()), this.currentFrameRateIndex++
                                }))
                            }
                            setNextConstraintsFacingMode() {
                                return this.getConfigValue(this.config.getFacingMode(), this.currentFacingModeIndex, (e => {
                                    ! function(e, t) {
                                        let i = null;
                                        if (null !== t) switch (t) {
                                            case n.TCVideoCaptureFacingMode.USER:
                                                i = "user";
                                                break;
                                            case n.TCVideoCaptureFacingMode.ENVIRONMENT:
                                                i = "environment";
                                                break;
                                            case n.TCVideoCaptureFacingMode.LEFT:
                                                i = "left";
                                                break;
                                            case n.TCVideoCaptureFacingMode.RIGHT:
                                                i = "right"
                                        }
                                        r(e, "facingMode", i)
                                    }(this.constraints.video, e), this.currentFacingModeIndex++
                                }))
                            }
                            getConfigValue(e, t, i) {
                                let c = function(e, t) {
                                    if (null === e) return null;
                                    if (Array.isArray(e)) {
                                        if (e.length > t) return e[t]
                                    } else if (0 === t) return e;
                                    return null
                                }(e, t);
                                return null !== c && (i(c), !0)
                            }
                        }

                        function r(e, t, i) {
                            let c = null;
                            null !== i && (c = {
                                exact: i
                            }), d(e, t, c)
                        }

                        function a(e, t, i) {
                            let c = null;
                            "number" == typeof i ? c = {
                                exact: i
                            } : null !== i && (c = function(e) {
                                if (null == e.min && null === e.max && null === e.ideal) return null;
                                let t = {};
                                return null !== e.min && (t.min = e.min), null !== e.max && (t.max = e.max), null !== e.ideal && (t.ideal = e.ideal), t
                            }(i)), d(e, t, c)
                        }

                        function d(e, t, i) {
                            null == i ? delete e[t] : e[t] = i
                        }
                    }
                })
            }, e.exports = t()
        },
        64301: function(e, t, i) {
            "use strict";

            function c(e, t = null) {
                const i = JSON.parse(JSON.stringify(e));
                window.parent !== window && window.parent.postMessage(i, t || "*")
            }
            i.d(t, {
                A: function() {
                    return c
                }
            })
        },
        26793: function(e, t) {
            "use strict";
            t.A = {
                fullscreenStatusChanged: "fullscreenStatusChanged",
                chatModuleStatusChanged: "chatModuleStatusChanged",
                participantModuleStatusChanged: "participantModuleStatusChanged",
                deviceSettingsModuleStatusChanged: "deviceSettingsModuleStatusChanged",
                deviceAvailableStatusChanged: "deviceAvailableStatusChanged",
                deviceMuteStatusChanged: "deviceMuteStatusChanged",
                desktopSharingStatusChanged: "desktopSharingStatusChanged",
                conferenceStatusChanged: "conferenceStatusChanged"
            }
        },
        6732: function(e, t) {
            "use strict";
            t.A = {
                dragging: !1
            }
        },
        40252: function(e, t, i) {
            "use strict";
            var c = i(69407),
                n = i.n(c),
                o = i(39296),
                r = i.n(o);
            t.A = new(r())({
                methods: {
                    gettext(e) {
                        return this.jed ? this.jed.gettext(e) : e
                    },
                    pgettext(e, t) {
                        return this.jed ? this.jed.pgettext(e, t) : t
                    },
                    npgettext(e, t, i, c) {
                        return this.jed ? this.jed.npgettext(e, t, i, c) : i
                    },
                    importLocale(e) {
                        const t = {
                            be: () => i.e(939).then(i.t.bind(i, 69734, 19)),
                            de: () => i.e(977).then(i.t.bind(i, 61382, 19)),
                            en: () => i.e(337).then(i.t.bind(i, 53513, 19)),
                            es: () => i.e(76).then(i.t.bind(i, 79752, 19)),
                            fa: () => i.e(147).then(i.t.bind(i, 86384, 19)),
                            fr: () => i.e(384).then(i.t.bind(i, 3920, 19)),
                            it: () => i.e(991).then(i.t.bind(i, 12290, 19)),
                            ja: () => i.e(783).then(i.t.bind(i, 63933, 19)),
                            pl: () => i.e(340).then(i.t.bind(i, 34628, 19)),
                            pt: () => i.e(804).then(i.t.bind(i, 75732, 19)),
                            ru: () => i.e(523).then(i.t.bind(i, 74242, 19)),
                            uk: () => i.e(980).then(i.t.bind(i, 25938, 19)),
                            vi: () => i.e(91).then(i.t.bind(i, 39071, 19)),
                            zh: () => i.e(478).then(i.t.bind(i, 46911, 19)),
                            zht: () => i.e(678).then(i.t.bind(i, 14351, 19)),
                            he: () => i.e(861).then(i.t.bind(i, 62916, 19)),
                            ko: () => i.e(918).then(i.t.bind(i, 13711, 19)),
                            tr: () => i.e(558).then(i.t.bind(i, 21156, 19)),
                            cs: () => i.e(578).then(i.t.bind(i, 22835, 19))
                        };
                        return t[e] ? t[e]() : t.en()
                    },
                    addLang(e) {
                        return this.importLocale(e).then((t => {
                            const i = new(n())(t);
                            this.jeds[e] = i
                        }))
                    },
                    setLocale(e) {
                        e !== this.lang && (this.jeds[e] ? this.lang = e : this.addLang(e).then((() => {
                            this.lang = e
                        })))
                    }
                },
                computed: {
                    jed() {
                        return this.jeds[this.lang]
                    }
                },
                data: () => ({
                    lang: null,
                    jeds: {}
                })
            })
        },
        38174: function(e, t, i) {
            var c = i(31601),
                n = i(76314),
                o = i(61895),
                r = i(4417),
                a = i(35075),
                d = i(2075),
                l = i(25798),
                s = i(86178),
                m = i(85974),
                p = i(11219),
                u = i(98763),
                f = i(99951),
                b = i(85975),
                h = i(65783),
                g = i(81167),
                x = i(16031),
                _ = i(92057),
                v = i(53505),
                k = n(c);
            k.i(o);
            var w = r(a),
                y = r(d),
                C = r(l),
                z = r(s),
                M = r(m),
                T = r(p),
                E = r(u),
                R = r(f),
                A = r(b),
                D = r(h),
                L = r(g),
                I = r(x),
                S = r(_),
                P = r(v);
            k.push([e.id, '@font-face{font-family:"Roboto";font-weight:100;src:url(' + w + ')}@font-face{font-family:"Roboto";font-style:italic;font-weight:100;src:url(' + y + ')}@font-face{font-family:"Roboto";font-weight:300;src:url(' + C + ')}@font-face{font-family:"Roboto";font-style:italic;font-weight:300;src:url(' + z + ')}@font-face{font-family:"Roboto";font-weight:400;src:url(' + M + ')}@font-face{font-family:"Roboto";font-weight:500;src:url(' + T + ')}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;src:url(' + E + ')}@font-face{font-family:"Roboto";font-weight:700;src:url(' + R + ')}@font-face{font-family:"Roboto";font-style:italic;font-weight:700;src:url(' + A + ')}@font-face{font-family:"Roboto";font-weight:900;src:url(' + D + ')}@font-face{font-family:"Roboto";font-style:italic;font-weight:900;src:url(' + L + ')}@font-face{font-family:"Roboto Mono";font-weight:400;src:url(' + I + ')}@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(' + S + ') format("woff")}.material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}*[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…lsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K");background-color:#009688}.tc-list,.tc-modal__content,.tc-modal-wrapper,.tc-menu{overflow:auto;-webkit-overflow-scrolling:touch}.tc-list::-webkit-scrollbar,.tc-modal__content::-webkit-scrollbar,.tc-modal-wrapper::-webkit-scrollbar,.tc-menu::-webkit-scrollbar{width:8px;background:rgba(0,0,0,.15);margin:0}.tc-list::-webkit-scrollbar-button:vertical:decrement,.tc-modal__content::-webkit-scrollbar-button:vertical:decrement,.tc-modal-wrapper::-webkit-scrollbar-button:vertical:decrement,.tc-menu::-webkit-scrollbar-button:vertical:decrement{background:rgba(0,0,0,0);height:8px}.tc-list::-webkit-scrollbar-button:vertical:increment,.tc-modal__content::-webkit-scrollbar-button:vertical:increment,.tc-modal-wrapper::-webkit-scrollbar-button:vertical:increment,.tc-menu::-webkit-scrollbar-button:vertical:increment{background:rgba(0,0,0,0);height:8px}.tc-list::-webkit-scrollbar-thumb,.tc-modal__content::-webkit-scrollbar-thumb,.tc-modal-wrapper::-webkit-scrollbar-thumb,.tc-menu::-webkit-scrollbar-thumb{min-height:32px;background:#999;border-radius:2px;background-clip:content-box}.mobile-header__button,.conference-card-header__button{border:0;padding:0;cursor:pointer;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mobile-layout{position:fixed;height:100%;width:100%;left:0;top:0;min-width:320px;overflow:hidden}.pulse-animation-enter-active{animation-duration:350ms;animation-name:pulse-animation}body{font-size:14px;font-family:"Roboto","Helvetica","Arial",sans-serif;-webkit-tap-highlight-color:transparent}*{font-family:"Roboto","Helvetica","Arial",sans-serif}.one-line{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.header-title{align-self:stretch;display:flex;flex-flow:row nowrap;align-items:center;color:#fff;font-weight:500;font-size:20px;line-height:26px}.ripple-container{position:relative;overflow:hidden;transition:box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer !important;outline:0;background-color:transparent}.ripple-container.ripple-container--selected{background-color:rgba(158,158,158,.2) !important}.ripple-container:hover,.ripple-container:focus{background-color:rgba(158,158,158,.2) !important}.ripple-container:active{background-color:rgba(158,158,158,.4) !important}.ripple-container .mdl-ripple{background-color:rgba(158,158,158,.6)}.ripple-container--dark.ripple-container--selected{background-color:rgba(0,0,0,.2) !important}.ripple-container--dark.ripple-container--selected:hover,.ripple-container--dark.ripple-container--selected:focus{background-color:rgba(0,0,0,.28) !important}.ripple-container--dark:hover,.ripple-container--dark:focus{background-color:rgba(0,0,0,.12) !important}.ripple-container--dark:active{background-color:rgba(0,0,0,.24) !important}.ripple-container--dark .mdl-ripple{background-color:rgba(0,0,0,.32)}.ripple-container--webrtc:hover,.ripple-container--webrtc:focus{background-color:#007882 !important}.ripple-container--webrtc:active{background-color:#006169 !important}.ripple-container--webrtc .mdl-ripple{background-color:#00525a}.ripple-container--red-reject:hover,.ripple-container--red-reject:focus{background-color:rgba(184,40,24,.9) !important}.ripple-container--red-reject:active{background-color:#b82818 !important}.ripple-container--red-reject .mdl-ripple{background-color:#5e140c}.webrtc-background{background-image:url(' + P + ');background-position:center center;background-repeat:no-repeat;background-size:cover;background-color:#282828}.webrtc-background-wrap{position:relative;overflow:hidden}.webrtc-background-wrap__image{position:absolute;display:block;left:-10000px;top:-10000px;right:-10000px;bottom:-10000px;margin:auto;min-height:100%;background-position:center center;background-repeat:no-repeat;background-size:cover}.conference-card-header{background-color:#666;color:#fff;font-size:14px;font-weight:500;height:44px;padding-left:16px;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between}.conference-card-header.conference-card-header--modal{padding-left:24px}.conference-card-header.conference-card-header--reset-padding{padding-left:0px}.conference-card-header__button{flex-shrink:0;height:44px;width:44px;border-radius:2px;font-size:24px;color:#fff}.header-profile-name{color:#fff;font-size:14px;font-weight:500}.placeholder{text-align:center;font-size:14px;height:14px;color:rgba(0,0,0,.38);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}.placeholder--light{color:rgba(255,255,255,.7)}.placeholder--no-search-result{display:flex;justify-content:center;align-items:center;height:48px}.mobile-layout{display:flex;flex-flow:column nowrap;align-items:stretch}.mobile-layout__header{flex-shrink:0;height:48px}.mobile-layout__content{overflow-y:auto;flex:1 1 0%;background-color:#fff}.mobile-header{background-color:#666;height:48px;position:relative}.mobile-header__title{color:#fff;font-size:20px;font-weight:500;text-align:center;position:absolute;left:48px;right:48px;top:0;line-height:48px}.mobile-header__button{height:48px;width:48px;border-radius:2px;color:#fff;font-size:24px}.mobile-header__button.mobile-header__button--left{position:absolute;left:0;top:0}.mobile-header__button.mobile-header__button--right{position:absolute;right:0;top:0}.conference-card-layout{background-color:#fff;display:flex;flex-flow:column nowrap;align-items:stretch}.conference-card-layout__header{flex-shrink:0}.conference-card-layout__content{flex:1 1 0%;min-height:0%}.flip-list-transition-move{transition:transform 350ms ease}@keyframes pulse-animation{from{transform:scale3d(0.9, 0.9, 0.9);opacity:.5}50%{transform:scale3d(1.1, 1.1, 1.1);opacity:.9}to{transform:scale3d(1, 1, 1);opacity:1}}.disappearing-animation{animation-name:disappearing-blink;animation-duration:.5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}.disappearing-animation:hover,.disappearing-animation:focus{animation-name:none}@keyframes disappearing-blink{0%{opacity:.5}50%{opacity:1}100%{opacity:.5}}.modal-transition-enter,.modal-transition-leave-active{opacity:0;visibility:visible !important;transform:scale(1.1)}.modal-transition-enter-active,.modal-transition-leave-active{will-change:transform,opacity;transition:opacity 200ms ease,transform 200ms ease}.tc-list,.tc-modal__content,.tc-modal-wrapper,.tc-menu{overflow:auto;-webkit-overflow-scrolling:touch}.tc-list::-webkit-scrollbar,.tc-modal__content::-webkit-scrollbar,.tc-modal-wrapper::-webkit-scrollbar,.tc-menu::-webkit-scrollbar{width:8px;background:rgba(0,0,0,.15);margin:0}.tc-list::-webkit-scrollbar-button:vertical:decrement,.tc-modal__content::-webkit-scrollbar-button:vertical:decrement,.tc-modal-wrapper::-webkit-scrollbar-button:vertical:decrement,.tc-menu::-webkit-scrollbar-button:vertical:decrement{background:rgba(0,0,0,0);height:8px}.tc-list::-webkit-scrollbar-button:vertical:increment,.tc-modal__content::-webkit-scrollbar-button:vertical:increment,.tc-modal-wrapper::-webkit-scrollbar-button:vertical:increment,.tc-menu::-webkit-scrollbar-button:vertical:increment{background:rgba(0,0,0,0);height:8px}.tc-list::-webkit-scrollbar-thumb,.tc-modal__content::-webkit-scrollbar-thumb,.tc-modal-wrapper::-webkit-scrollbar-thumb,.tc-menu::-webkit-scrollbar-thumb{min-height:32px;background:#999;border-radius:2px;background-clip:content-box}.mdc-touch-target-wrapper{display:inline}.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#0097a7;color:var(--mdc-theme-primary, #0097A7)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#0097a7}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #0097A7)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#0097a7}@supports not (-ms-ime-align: auto){.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:var(--mdc-theme-primary, #0097A7)}}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-button{height:36px}.tc-button-container{display:flex;flex-flow:row nowrap;align-items:flex-start;flex-shrink:0;box-sizing:border-box;min-width:36px;min-height:36px;height:36px}.tc-button-container .tc-button{min-width:36px}.tc-button-container .tc-button{min-height:36px}.tc-button-container .tc-button{height:36px}.tc-button-container .tc-button{border-radius:2px}.tc-button-container .tc-button .mdc-button__ripple{border-radius:2px}.tc-button-container .tc-button .mdc-button__ripple{border-radius:2px}.tc-button-container .tc-button{text-transform:uppercase;font-size:13px;letter-spacing:.5px}.tc-button-container .tc-button__badge .tc-badge{background-color:#aa7f2e}.tc-button-container .tc-button__badge .tc-badge{color:#fff}.tc-button-container .tc-button__badge .tc-badge svg{fill:#fff}.tc-button-container .tc-button__badge .tc-badge .tc-badge__value{font-size:14px}.tc-button-container .tc-button__badge .tc-badge svg{width:14px}.tc-button-container .tc-button__badge .tc-badge{min-width:18px;height:18px;line-height:normal;border-radius:9px}.tc-button-container .tc-button__badge .tc-badge--icon{width:18px}.tc-button-container .tc-button .mdc-button__ripple{display:block}.tc-button-container--primary .mdc-button--text:not(:disabled) .mdc-button__icon,.tc-button-container--primary .mdc-button--outlined:not(:disabled) .mdc-button__icon{color:#0097a7}.tc-button-container--primary .mdc-button--text:not(:disabled),.tc-button-container--primary .mdc-button--outlined:not(:disabled){color:#0097a7}.tc-button-container--primary .mdc-button--text:not(:disabled),.tc-button-container--primary .mdc-button--outlined:not(:disabled){border-color:#0097a7}.tc-button-container--primary .mdc-button--text .mdc-button__ripple:before,.tc-button-container--primary .mdc-button--text .mdc-button__ripple:after,.tc-button-container--primary .mdc-button--outlined .mdc-button__ripple:before,.tc-button-container--primary .mdc-button--outlined .mdc-button__ripple:after{background-color:#0097a7}.tc-button-container--primary .mdc-button--text .mdc-button__icon svg,.tc-button-container--primary .mdc-button--outlined .mdc-button__icon svg{fill:#0097a7}.tc-button-container--primary .mdc-button--text .tc-button__loader svg,.tc-button-container--primary .mdc-button--outlined .tc-button__loader svg{stroke:#0097a7}.tc-button-container--primary .mdc-button--raised:not(:disabled),.tc-button-container--primary .mdc-button--unelevated:not(:disabled){background-color:#0097a7}.tc-button-container--primary .mdc-button--raised:not(:disabled),.tc-button-container--primary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.tc-button-container--primary .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--primary .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.tc-button-container--primary .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--primary .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-text-primary-on-dark, white)}}.tc-button-container--primary .mdc-button--raised:hover .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.tc-button-container--primary .mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--primary .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.tc-button-container--primary .mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.tc-button-container--primary .mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.tc-button-container--primary .mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.tc-button-container--primary .mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.tc-button-container--primary .mdc-button--raised.mdc-ripple-upgraded,.tc-button-container--primary .mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.tc-button-container--primary .mdc-button--raised .tc-button__loader svg,.tc-button-container--primary .mdc-button--unelevated .tc-button__loader svg{stroke:#fff}.tc-button-container--secondary .mdc-button--text:not(:disabled) .mdc-button__icon,.tc-button-container--secondary .mdc-button--outlined:not(:disabled) .mdc-button__icon{color:#aa7f2e}.tc-button-container--secondary .mdc-button--text:not(:disabled),.tc-button-container--secondary .mdc-button--outlined:not(:disabled){color:#aa7f2e}.tc-button-container--secondary .mdc-button--text:not(:disabled),.tc-button-container--secondary .mdc-button--outlined:not(:disabled){border-color:#aa7f2e}.tc-button-container--secondary .mdc-button--text .mdc-button__ripple:before,.tc-button-container--secondary .mdc-button--text .mdc-button__ripple:after,.tc-button-container--secondary .mdc-button--outlined .mdc-button__ripple:before,.tc-button-container--secondary .mdc-button--outlined .mdc-button__ripple:after{background-color:#aa7f2e}.tc-button-container--secondary .mdc-button--text .mdc-button__icon svg,.tc-button-container--secondary .mdc-button--outlined .mdc-button__icon svg{fill:#aa7f2e}.tc-button-container--secondary .mdc-button--text .tc-button__loader svg,.tc-button-container--secondary .mdc-button--outlined .tc-button__loader svg{stroke:#aa7f2e}.tc-button-container--secondary .mdc-button--raised:not(:disabled),.tc-button-container--secondary .mdc-button--unelevated:not(:disabled){background-color:#aa7f2e}.tc-button-container--secondary .mdc-button--raised:not(:disabled),.tc-button-container--secondary .mdc-button--unelevated:not(:disabled){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87))}.tc-button-container--secondary .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--secondary .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:rgba(0,0,0,.87)}@supports not (-ms-ime-align: auto){.tc-button-container--secondary .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--secondary .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87))}}.tc-button-container--secondary .mdc-button--raised:hover .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.04}.tc-button-container--secondary .mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--secondary .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.tc-button-container--secondary .mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.tc-button-container--secondary .mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.tc-button-container--secondary .mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.tc-button-container--secondary .mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.tc-button-container--secondary .mdc-button--raised.mdc-ripple-upgraded,.tc-button-container--secondary .mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-button-container--secondary .mdc-button--raised:not(:disabled) .mdc-button__icon,.tc-button-container--secondary .mdc-button--unelevated:not(:disabled) .mdc-button__icon{color:#fff}.tc-button-container--secondary .mdc-button--raised:not(:disabled),.tc-button-container--secondary .mdc-button--unelevated:not(:disabled){color:#fff}.tc-button-container--secondary .mdc-button--raised .tc-button__loader svg,.tc-button-container--secondary .mdc-button--unelevated .tc-button__loader svg{stroke:#fff}.tc-button-container--danger .mdc-button--text:not(:disabled) .mdc-button__icon,.tc-button-container--danger .mdc-button--outlined:not(:disabled) .mdc-button__icon{color:#e85d4e}.tc-button-container--danger .mdc-button--text:not(:disabled),.tc-button-container--danger .mdc-button--outlined:not(:disabled){color:#e85d4e}.tc-button-container--danger .mdc-button--text:not(:disabled),.tc-button-container--danger .mdc-button--outlined:not(:disabled){border-color:#e85d4e}.tc-button-container--danger .mdc-button--text .mdc-button__ripple:before,.tc-button-container--danger .mdc-button--text .mdc-button__ripple:after,.tc-button-container--danger .mdc-button--outlined .mdc-button__ripple:before,.tc-button-container--danger .mdc-button--outlined .mdc-button__ripple:after{background-color:#e85d4e}.tc-button-container--danger .mdc-button--text .mdc-button__icon svg,.tc-button-container--danger .mdc-button--outlined .mdc-button__icon svg{fill:#e85d4e}.tc-button-container--danger .mdc-button--text .tc-button__loader svg,.tc-button-container--danger .mdc-button--outlined .tc-button__loader svg{stroke:#e85d4e}.tc-button-container--danger .mdc-button--raised:not(:disabled),.tc-button-container--danger .mdc-button--unelevated:not(:disabled){background-color:#e85d4e}.tc-button-container--danger .mdc-button--raised:not(:disabled),.tc-button-container--danger .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.tc-button-container--danger .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--danger .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.tc-button-container--danger .mdc-button--raised .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--raised .mdc-button__ripple::after,.tc-button-container--danger .mdc-button--unelevated .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-text-primary-on-dark, white)}}.tc-button-container--danger .mdc-button--raised:hover .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.tc-button-container--danger .mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.tc-button-container--danger .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.tc-button-container--danger .mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.tc-button-container--danger .mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.tc-button-container--danger .mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.tc-button-container--danger .mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.tc-button-container--danger .mdc-button--raised.mdc-ripple-upgraded,.tc-button-container--danger .mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.tc-button-container--danger .mdc-button--raised .tc-button__loader svg,.tc-button-container--danger .mdc-button--unelevated .tc-button__loader svg{stroke:#fff}.tc-button{box-sizing:border-box;flex-shrink:0;margin:0}.tc-button .tc-button__loader{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0}.tc-button .tc-button__loader svg{width:24px}.tc-button .tc-button__icon svg{width:18px;height:18px;font-size:18px}.tc-button__content{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;transition:all .3s}.tc-button--icon{padding:0 0px}.tc-button--icon .mdc-button__icon{display:flex;flex-direction:column;justify-content:center;align-items:center;width:24px;height:24px;font-size:24px;margin:0px}.tc-button--icon .mdc-button__icon svg{fill:#0097a7;width:24px;height:24px}.tc-button--hidden{visibility:hidden;opacity:0;transform:scale(0.1, 0.1)}.tc-button--loading{cursor:default}.tc-button--loading:hover{cursor:default}.tc-button__badge{position:absolute;top:0;right:0;transform:scale(1) translate(50%, -50%);transform-origin:150% -50%;text-align:center;letter-spacing:0}.tc-button-loader-animation-enter-active,.tc-button-loader-animation-leave-active{transition:all .3s}.tc-button-loader-animation-enter,.tc-button-loader-animation-leave-to{opacity:0;transform:scale(0.1, 0.1)}.mdc-form-field{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.08}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.24}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.24}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e);background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}@keyframes mdc-checkbox-fade-in-background-ujwwduf{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e);background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}}@keyframes mdc-checkbox-fade-out-background-ujwwduf{0%,80%{border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e);background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-ujwwduf}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-ujwwduf}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox__background .mdc-checkbox__background::before{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}.tc-checkbox-container{display:flex !important;flex-flow:row nowrap;flex-shrink:0;letter-spacing:normal;overflow:hidden;max-width:100%;align-items:flex-start}.tc-checkbox-container .tc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.tc-checkbox-container .tc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.tc-checkbox-container .tc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#0097a7;background-color:#0097a7}@keyframes mdc-checkbox-fade-in-background-ujwwdvb{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#0097a7;background-color:#0097a7}}@keyframes mdc-checkbox-fade-out-background-ujwwdvb{0%,80%{border-color:#0097a7;background-color:#0097a7}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.tc-checkbox-container .tc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.tc-checkbox-container .tc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-ujwwdvb}.tc-checkbox-container .tc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.tc-checkbox-container .tc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-ujwwdvb}.tc-checkbox-container .tc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.tc-checkbox-container .tc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#0097a7}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#0097a7}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.tc-checkbox-container .tc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-checkbox-container .tc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.tc-checkbox-container .tc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#0097a7}.tc-checkbox-container .tc-checkbox .tc-checkbox__loader svg{stroke:#0097a7}.tc-checkbox-container .tc-checkbox__text-container .tc-checkbox__text{max-width:100%}.tc-checkbox-container .tc-checkbox__text-container .tc-checkbox__desc{max-width:100%}.tc-checkbox-container .tc-checkbox__text-container .tc-checkbox__text{font-size:14px}.tc-checkbox-container .tc-checkbox__text-container .tc-checkbox__desc{font-size:12px}.tc-checkbox-container .tc-checkbox .mdc-checkbox__ripple{display:none}.tc-checkbox .mdc-checkbox__ripple:before,.tc-checkbox .mdc-checkbox__ripple:after{border-radius:2px !important;top:11px !important;left:11px !important;width:18px !important;height:18px !important}.tc-checkbox .tc-checkbox__loader{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.tc-checkbox .tc-checkbox__loader svg{width:100%;transition:.3s}.tc-checkbox__text-container{display:flex;flex-flow:column nowrap;flex-grow:1;overflow:hidden;box-sizing:border-box;padding:10px 4px 10px 4px}.tc-checkbox__text-container .tc-checkbox__text{width:-moz-fit-content;width:fit-content;line-height:20px;cursor:pointer}.tc-checkbox__text-container .tc-checkbox__desc{width:-moz-fit-content;width:fit-content;color:rgba(0,0,0,.64);cursor:pointer}.tc-checkbox-container--disabled .tc-checkbox__text,.tc-checkbox-container--disabled .tc-checkbox__desc{color:rgba(0,0,0,.48);cursor:default}.tc-checkbox-container--loading .tc-checkbox__text,.tc-checkbox-container--loading .tc-checkbox__desc{cursor:default}.tc-checkbox-loader-animation-enter-active,.tc-checkbox-loader-animation-leave-active{transition:all .3s}.tc-checkbox-loader-animation-enter,.tc-checkbox-loader-animation-leave-to{opacity:0;transform:scale(0.1, 0.1)}.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e);border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e);border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.tc-switch-container{display:flex !important;flex-flow:row nowrap;flex-shrink:0;letter-spacing:normal;overflow:hidden;max-width:100%;align-items:flex-start}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__track{background-color:#0097a7;border-color:#0097a7}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#0097a7;border-color:#0097a7}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay::before,.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay::after{background-color:#0097a7}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:hover::before{opacity:.04}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.tc-switch-container .tc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#000}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.04}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.tc-switch-container .tc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-switch-container .tc-switch__text-container .tc-switch__text{max-width:100%}.tc-switch-container .tc-switch__text-container .tc-switch__desc{max-width:100%}.tc-switch-container .tc-switch__text-container .tc-switch__text{font-size:14px}.tc-switch-container .tc-switch__text-container .tc-switch__desc{font-size:12px}.tc-switch-container .tc-switch .mdc-switch__thumb-underlay:before,.tc-switch-container .tc-switch .mdc-switch__thumb-underlay:after{display:none}.tc-switch{flex-shrink:0;margin:12px 11px}.tc-switch .mdc-switch__thumb-underlay:before,.tc-switch .mdc-switch__thumb-underlay:after{width:18px;height:18px;top:15px;left:15px}.tc-switch__text-container{display:flex;flex-flow:column nowrap;flex-grow:1;overflow:hidden;box-sizing:border-box;padding:10px 4px 10px 4px}.tc-switch__text-container .tc-switch__text{width:-moz-fit-content;width:fit-content;line-height:20px;cursor:pointer}.tc-switch__text-container .tc-switch__desc{width:-moz-fit-content;width:fit-content;color:rgba(0,0,0,.64);cursor:pointer}.tc-switch-container--disabled .tc-switch__text,.tc-switch-container--disabled .tc-switch__desc{color:rgba(0,0,0,.48);cursor:default}.mdc-radio{padding:10px;display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#aa7f2e;border-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,0,0,.26)}.mdc-radio .mdc-radio__background::before{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-radio .mdc-radio__background::before{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-radio .mdc-radio__background::before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-radio:hover .mdc-radio__ripple::before{opacity:.08}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:.24}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:.24}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.tc-radio-container{display:flex !important;flex-flow:row nowrap;align-items:flex-start;flex-shrink:0;letter-spacing:normal;overflow:hidden;max-width:100%;align-items:flex-start}.tc-radio-container .tc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.tc-radio-container .tc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#0097a7}.tc-radio-container .tc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#0097a7}.tc-radio-container .tc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.tc-radio-container .tc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.tc-radio-container .tc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.tc-radio-container .tc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,151,167,.26)}.tc-radio-container .tc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.tc-radio-container .tc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,151,167,.26)}.tc-radio-container .tc-radio .mdc-radio__ripple:before,.tc-radio-container .tc-radio .mdc-radio__ripple:after{background-color:#0097a7}.tc-radio-container .tc-radio__text-container .tc-radio__text{max-width:100%}.tc-radio-container .tc-radio__text-container .tc-radio__desc{max-width:100%}.tc-radio-container .tc-radio__text-container .tc-radio__text{font-size:14px}.tc-radio-container .tc-radio__text-container .tc-radio__desc{font-size:12px}.tc-radio-container .tc-radio .mdc-radio__ripple{display:none}.tc-radio .mdc-radio__ripple:before,.tc-radio .mdc-radio__ripple:after{top:11px !important;left:11px !important;width:18px !important;height:18px !important}.tc-radio__text-container{display:flex;flex-flow:column nowrap;flex-grow:1;overflow:hidden;box-sizing:border-box;padding:10px 4px 10px 4px}.tc-radio__text-container .tc-radio__text{width:-moz-fit-content;width:fit-content;line-height:20px;cursor:pointer}.tc-radio__text-container .tc-radio__desc{width:-moz-fit-content;width:fit-content;color:rgba(0,0,0,.64);cursor:pointer}.tc-radio-container--disabled .tc-radio__text,.tc-radio-container--disabled .tc-radio__desc{color:rgba(0,0,0,.48);cursor:default}@keyframes mdc-select-float-native-control{0%{transform:translateY(8px);opacity:0}100%{transform:translateY(0);opacity:1}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-floating-label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-select-helper-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;will-change:opacity}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-select{position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select .mdc-select__anchor{border-radius:4px 4px 0 0}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#0097a7;background-color:var(--mdc-theme-primary, #0097A7)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(0,151,167,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label{left:16px;right:initial;top:21px;pointer-events:none}[dir=rtl] .mdc-select .mdc-floating-label,.mdc-select .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:initial;top:17px}[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label,.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{left:initial;right:36px}.mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;left:auto;right:8px;position:absolute;bottom:16px;width:24px;height:24px;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{left:8px;right:auto}.mdc-select--focused .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230097A7%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg) translateY(-5px);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-select__anchor::before,.mdc-select__anchor::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor::before,.mdc-select__anchor::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor::before,.mdc-select__anchor::after{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover::before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-70%) scale(0.75)}.mdc-select__anchor.mdc-select--focused .mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select__anchor+.mdc-select-helper-text{margin-right:12px;margin-left:12px}.mdc-select--outlined .mdc-select__anchor+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused .mdc-select__anchor+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{padding-left:16px;padding-right:52px;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;box-sizing:border-box;width:100%;min-width:200px;height:56px;padding-top:20px;padding-bottom:4px;border:none;border-bottom:1px solid;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}@-moz-document url-prefix(""){.mdc-select__selected-text{text-indent:-2px}}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.2)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor::before,.mdc-select--outlined .mdc-select__anchor::after{content:none}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__selected-text{padding-left:16px;padding-right:52px;display:flex;padding-top:14px;padding-bottom:12px;border:none;background-color:transparent;z-index:1}[dir=rtl] .mdc-select--outlined .mdc-select__selected-text,.mdc-select--outlined .mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;pointer-events:auto}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#b00020;background-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid .mdc-select__anchor+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23b00020%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label::after{content:"*"}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.37%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--disabled .mdc-line-ripple{display:none}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.37);border-bottom-style:dotted;pointer-events:none}.mdc-select--disabled.mdc-select--outlined .mdc-select__anchor{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--disabled.mdc-select--outlined .mdc-select__selected-text{border-bottom-style:none}.mdc-select--no-label:not(.mdc-select--outlined) .mdc-select__anchor .mdc-select__selected-text{padding-top:14px}.mdc-select--with-leading-icon .mdc-select__icon{left:16px;right:initial}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{left:initial;right:16px}.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:48px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text,.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl]{padding-left:32px;padding-right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-130%) translateX(32px) scale(0.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake,.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl]{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected::before,.mdc-select__menu .mdc-list .mdc-list-item--selected::after{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-select__menu .mdc-list .mdc-list-item--selected::before,.mdc-select__menu .mdc-list .mdc-list-item--selected::after{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover::before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}}.tc-select-container{display:flex;align-items:flex-start;flex-shrink:1;width:288px;min-width:240px;max-width:100%;flex-direction:column}.tc-select-container .tc-select__selected-text,.tc-select-container .tc-select__anchor{height:40px}.tc-select-container .tc-select__selected-text{line-height:40px}.tc-select-container .tc-select-item .tc-list-item{height:40px}.tc-select-container .tc-select-helper-text{color:rgba(0,0,0,.6)}.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#0097a7}.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.tc-select-container .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#0097a7}.tc-select-container .tc-notched-outline__leading,.tc-select-container .tc-notched-outline__notch,.tc-select-container .tc-notched-outline__trailing{background-color:transparent}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled) .mdc-floating-label{color:#e85d4e}.tc-select-container.tc-select-container--error .tc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#e85d4e}.tc-select-container.tc-select-container--error .tc-select-helper-text--error{color:#e85d4e}.tc-select-container .tc-select.tc-select--with-icon .tc-select__icon{color:rgba(0,0,0,.54)}.tc-select-container .tc-select.tc-select--with-icon .tc-select__icon svg{fill:rgba(0,0,0,.54)}.tc-select-container .tc-select.mdc-select--disabled.tc-select--with-icon .tc-select__icon{color:rgba(0,0,0,.37)}.tc-select-container .tc-select.mdc-select--disabled.tc-select--with-icon .tc-select__icon svg{fill:rgba(0,0,0,.37)}.tc-select-container .mdc-select__dropdown-icon .tc-icon__icon{color:rgba(0,0,0,.2)}.tc-select-container .mdc-select__dropdown-icon .tc-icon__icon svg{fill:rgba(0,0,0,.2)}.tc-select-container .mdc-select--activated .mdc-select__dropdown-icon .tc-icon__icon,.tc-select-container .mdc-select--focused .mdc-select__dropdown-icon .tc-icon__icon{color:#0097a7}.tc-select-container .mdc-select--activated .mdc-select__dropdown-icon .tc-icon__icon svg,.tc-select-container .mdc-select--focused .mdc-select__dropdown-icon .tc-icon__icon svg{fill:#0097a7}.tc-select-container .mdc-select--disabled .mdc-select__dropdown-icon .tc-icon__icon{color:rgba(0,0,0,.1)}.tc-select-container .mdc-select--disabled .mdc-select__dropdown-icon .tc-icon__icon svg{fill:rgba(0,0,0,.1)}.tc-select-container .tc-select .tc-select__selected-text{font-size:14px}.tc-select-container .tc-select .tc-floating-label{font-size:14px;top:calc(50% - 7px)}.tc-select-container .mdc-floating-label--float-above{font-size:12px !important;top:-6px !important}.tc-select-container .tc-select__anchor{margin-top:6px}.tc-select-container .tc-select__anchor--without-label{margin-top:0}.tc-select-container .tc-select-helper-text{font-size:12px}.tc-select-container .tc-select__icon,.tc-select-container .tc-select__dropdown-icon{width:18px;height:18px;font-size:18px}.tc-select-container .tc-select__icon,.tc-select-container .tc-select__dropdown-icon{top:calc(50% - 18px / 2)}.tc-select-container .tc-select.tc-select--with-icon .tc-floating-label{left:27px}.tc-select-container .tc-select.tc-select--with-icon .tc-select__selected-text{padding-left:23px}.tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:2px 0 0 2px}[dir=rtl] .tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 2px 2px 0}.tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 2px 2px 0}[dir=rtl] .tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.tc-select-container .tc-select.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:2px 0 0 2px}.tc-select-container .tc-select.mdc-select--outlined .mdc-select__selected-text{border-radius:2px}.tc-select-container .tc-menu-surface__container .tc-list-item:not(.tc-list-item--disabled) .tc-list__ripple{display:block}.tc-select-container .tc-select-helper-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tc-select-container .tc-select-hint-line{display:block}.tc-select-container .tc-select-hint-animation-enter,.tc-select-container .tc-select-hint-animation-leave-to{transform:translateY(-100%)}.tc-select-container .tc-select-hint-animation-enter-active,.tc-select-container .tc-select-hint-animation-leave-active{transition:transform 300ms}.tc-select-container .tc-menu-surface__container .tc-menu{width:100%}.tc-select-container .tc-menu-surface__container .mdc-list-item,.tc-select-container .tc-menu-surface__container .tc-list-item{height:40px}.tc-select-container .tc-menu-surface__container .tc-list{font-size:14px}.tc-select-container .tc-menu-surface__container .mdc-list-item__graphic{width:18px;height:18px;font-size:18px}.tc-select-container .tc-menu-surface__container .tc-list-item .mdc-list-item__graphic{margin:3px 8px 3px 0}.tc-select-container .tc-menu-surface__container .tc-list-item .tc-list-item__text{flex-grow:0}.tc-select-container .tc-menu-surface__container .tc-list-item .tc-list-item__infoIcon{margin-left:4px}.tc-select-container .tc-menu-surface__container .tc-menu{border-radius:2px}.tc-select__field{height:100%}.tc-select-container--disabled{pointer-events:none}.tc-select-container--disabled .tc-select-helper-text{color:rgba(0,0,0,.37)}.tc-select__context-menu{width:100%}.tc-select__anchor{width:100%;will-change:opacity,color,top,left,bottom}.tc-select-hint-line{overflow:hidden;width:100%;min-height:19px}.tc-select-helper-text{box-sizing:border-box;width:100%;padding:0 16px;color:rgba(0,0,0,.6)}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg)}.mdc-notched-outline__notch{max-width:calc(100% - 40px)}.tc-select{display:flex;overflow:hidden}.tc-select.mdc-select--disabled .tc-floating-label{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-select.mdc-select--outlined .tc-floating-label{line-height:100%;padding-right:8px;min-height:-moz-fit-content;min-height:fit-content;transition:top 150ms cubic-bezier(0.4, 0, 0.2, 1),left 150ms cubic-bezier(0.4, 0, 0.2, 1),font-size 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-select.mdc-select--outlined .mdc-floating-label--float-above{transform:none !important;line-height:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tc-select.mdc-select--outlined .tc-select__field{padding-top:0px;padding-right:25px}.tc-select.mdc-select--outlined .tc-select__selected-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:100px;margin-right:0;margin-left:-2px;padding-left:2px}.tc-select.mdc-select--outlined .tc-select__selected-text--label{color:rgba(0,0,0,.64)}.tc-select.mdc-select--outlined .tc-select__icon{position:absolute;opacity:1;left:12px}.tc-select.mdc-select--outlined .tc-notched-outline__notch{padding-right:0px}.tc-select.tc-select--with-icon .mdc-notched-outline__notch .mdc-floating-label--float-above{left:4px;max-width:100%}.tc-select.mdc-select--focused:not(.mdc-select--disabled).mdc-select--outlined .tc-select__anchor .tc-notched-outline .tc-notched-outline__leading,.tc-select.mdc-select--focused:not(.mdc-select--disabled).mdc-select--outlined .tc-select__anchor .tc-notched-outline .tc-notched-outline__notch,.tc-select.mdc-select--focused:not(.mdc-select--disabled).mdc-select--outlined .tc-select__anchor .tc-notched-outline .tc-notched-outline__trailing{border-width:1px}.mdc-text-field-helper-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;will-change:opacity}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);height:56px;border-radius:4px 4px 0 0;display:inline-flex;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field::before,.mdc-text-field::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field::before,.mdc-text-field::after{background-color:rgba(0,0,0,.87)}.mdc-text-field:hover::before{opacity:.04}.mdc-text-field.mdc-ripple-upgraded--background-focused::before,.mdc-text-field:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-text-field::before,.mdc-text-field::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,.87)}.mdc-text-field .mdc-text-field__input{caret-color:#0097a7;caret-color:var(--mdc-theme-primary, #0097A7)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-text-field .mdc-line-ripple{background-color:#0097a7;background-color:var(--mdc-theme-primary, #0097A7)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field .mdc-floating-label{left:16px;right:initial;top:50%;transform:translateY(-50%);pointer-events:none}[dir=rtl] .mdc-text-field .mdc-floating-label,.mdc-text-field .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--textarea .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label,.mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:40px;right:initial}[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above,.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{left:initial;right:40px}.mdc-text-field__input{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;align-self:flex-end;box-sizing:border-box;width:100%;height:100%;padding:20px 16px 6px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);border:none;border-bottom:1px solid;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.mdc-text-field__input::-moz-placeholder{-moz-transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;color:rgba(0,0,0,.54)}.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;color:rgba(0,0,0,.54)}.mdc-text-field--fullwidth .mdc-text-field__input::-moz-placeholder, .mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field--fullwidth .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill{z-index:auto !important}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{padding-top:16px;padding-bottom:16px}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-50%) scale(0.75);cursor:auto}.mdc-text-field--outlined{border:none;overflow:visible}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.2)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined::before,.mdc-text-field--outlined::after{content:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px 16px 14px;border:none !important;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled{background-color:transparent}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) scale(1)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) scale(0.8)}.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{top:14px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:16px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl]{left:initial;right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl]{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label,.mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl]{left:initial;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl]{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(-21px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-134%) translateX(21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(-21px) scale(0.8)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-120%) translateX(21px) scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:32px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl]{left:initial;right:32px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:12px}[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl]{left:12px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl]{padding-left:48px;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:initial;right:16px}[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl]{left:16px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl]{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:16px;right:auto}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl]{left:auto;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl]{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl]{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl]{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl]{padding-left:16px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:44px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl]{left:initial;right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl]{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl]{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl]{left:auto;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl]{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl]{padding-left:44px;padding-right:44px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(0.8)}.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-dense 250ms 1}.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.813rem}.mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{margin-left:1px;content:"*"}.mdc-text-field--textarea{display:inline-flex;width:auto;height:auto;transition:none;overflow:visible}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.2)}.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-text-field--textarea::before,.mdc-text-field--textarea::after{content:none}.mdc-text-field--textarea:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-text-field--textarea .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(0.75)}.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea .mdc-text-field-character-counter{left:initial;right:16px;position:absolute;bottom:13px}[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter,.mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl]{left:16px;right:initial}.mdc-text-field--textarea .mdc-text-field__input{align-self:auto;box-sizing:border-box;height:auto;margin:8px 1px 1px 0;padding:0 16px 16px;border:none;line-height:1.75rem}.mdc-text-field--textarea .mdc-text-field-character-counter+.mdc-text-field__input{margin-bottom:28px;padding-bottom:0}.mdc-text-field--textarea .mdc-floating-label{top:17px;width:auto;pointer-events:none}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before,.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after{content:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{padding:0}.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field--dense+.mdc-text-field-helper-line{margin-bottom:4px}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,151,167,.87)}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#b00020;background-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon~.mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none;pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.06)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{background-color:transparent;background-color:#f9f9f9}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}@keyframes mdc-floating-label-shake-float-above-text-field-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(0.8)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-70%) scale(0.8)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8)}100%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(0.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-120%) scale(0.8)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-120%) scale(0.8)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8)}100%{transform:translateX(calc(0 - 0%)) translateY(-120%) scale(0.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(0.8)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 21px)) translateY(-120%) scale(0.8)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8)}100%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(0.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(0.8)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -21px)) translateY(-120%) scale(0.8)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8)}100%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(0.8)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(0.75)}}.tc-text-field-container{display:flex;flex-shrink:0;position:relative;letter-spacing:normal;overflow:hidden;width:288px;min-width:240px;max-width:100%;flex-direction:column}.tc-text-field-container .mdc-text-field--outlined{height:40px}.tc-text-field-container .mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-29.25px) scale(1)}.tc-text-field-container .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.tc-text-field-container .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-26.75px) scale(0.75)}.tc-text-field-container .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-40px{0%{transform:translateX(calc(0 - 0%)) translateY(-26.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-26.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-26.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-26.75px) scale(0.75)}}.tc-text-field-container .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-40px 250ms 1}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.tc-text-field-container .mdc-text-field--outlined .mdc-text-field__input{line-height:13px}}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon{height:40px}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-29.25px) translateX(-32px) scale(1)}[dir=rtl] .tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-29.25px) translateX(32px) scale(1)}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-26.75px) translateX(-32px) scale(0.75)}[dir=rtl] .tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-26.75px) translateX(32px) scale(0.75)}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-with-leading-icon-40px{0%{transform:translateX(calc(0 - 0)) translateY(-26.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0)) translateY(-26.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0)) translateY(-26.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0)) translateY(-26.75px) scale(0.75)}}.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-with-leading-icon-40px 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-with-leading-icon-40px-rtl{0%{transform:translateX(calc(0 - 0)) translateY(-26.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0)) translateY(-26.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0)) translateY(-26.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0)) translateY(-26.75px) scale(0.75)}}[dir=rtl] .tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon .mdc-floating-label--shake,.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-with-leading-icon-40px 250ms 1}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.tc-text-field-container .mdc-text-field--outlined.mdc-text-field--with-leading-icon .mdc-text-field__input{line-height:13px}}.tc-text-field-container .tc-text-field--textarea{min-height:40px}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#0097a7}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#0000008A}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:#0097a7}.tc-text-field-container .tc-text-field{background-color:transparent}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error .mdc-text-field__input{caret-color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled) .mdc-floating-label{color:#e85d4e}.tc-text-field-container .tc-text-field.tc-text-field--error:not(.mdc-text-field--disabled).mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:#e85d4e}.tc-text-field-container .tc-text-field-error-line .tc-text-field-helper-text.tc-text-field-helper-text--error{color:#e85d4e}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--with-leading-icon .tc-text-field__icon{color:rgba(0,0,0,.54)}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--with-leading-icon .tc-text-field__icon svg{fill:rgba(0,0,0,.54)}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--with-trailing-icon .tc-text-field__icon{color:rgba(0,0,0,.54)}.tc-text-field-container .tc-text-field:not(.mdc-text-field--disabled).mdc-text-field--with-trailing-icon .tc-text-field__icon svg{fill:rgba(0,0,0,.54)}.tc-text-field-container .tc-text-field.mdc-text-field--with-leading-icon .tc-text-field__input{padding-left:39px}.tc-text-field-container .tc-text-field.mdc-text-field--with-trailing-icon .tc-text-field__input{padding-right:39px}.tc-text-field-container .tc-text-field .tc-text-field__icon{width:18px;height:18px;font-size:18px}.tc-text-field-container .mdc-notched-outline .mdc-notched-outline__leading{border-radius:2px 0 0 2px}[dir=rtl] .tc-text-field-container .mdc-notched-outline .mdc-notched-outline__leading,.tc-text-field-container .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 2px 2px 0}.tc-text-field-container .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 2px 2px 0}[dir=rtl] .tc-text-field-container .mdc-notched-outline .mdc-notched-outline__trailing,.tc-text-field-container .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:2px 0 0 2px}.tc-text-field-container .mdc-text-field{border-radius:2px}.tc-text-field-container .tc-text-field .tc-floating-label,.tc-text-field-container .tc-text-field .tc-text-field__input{font-size:14px}.tc-text-field-container .tc-text-field .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:14px}.tc-text-field-container .tc-text-field .tc-notched-outline .tc-notched-outline__notch .tc-floating-label.mdc-floating-label--float-above{font-size:12px !important}.tc-text-field-container .tc-text-field-helper-text{font-size:12px}.tc-text-field-container .tc-text-field-helper-text:not(.tc-text-field-text--hint-positinon-top){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tc-text-field-container .tc-text-field-helper-line{display:flex}.tc-text-field-container .tc-text-field-hint-animation-enter,.tc-text-field-container .tc-text-field-hint-animation-leave-to{transform:translateY(-100%)}.tc-text-field-container .tc-text-field-hint-animation-enter-active,.tc-text-field-container .tc-text-field-hint-animation-leave-active{transition:transform 300ms}.tc-text-field-container .tc-text-field-character-counter{display:none}.tc-text-field-container .tc-text-field{width:100%}.tc-text-field-container .tc-text-field.mdc-text-field--outlined.mdc-text-field--focused .tc-notched-outline__leading,.tc-text-field-container .tc-text-field.mdc-text-field--outlined.mdc-text-field--focused .tc-notched-outline__notch,.tc-text-field-container .tc-text-field.mdc-text-field--outlined.mdc-text-field--focused .tc-notched-outline__trailing{border-width:1px}.tc-text-field-container .tc-text-field.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px;max-width:calc(100% - 40px)}.tc-text-field-container .tc-text-field .tc-notched-outline{top:0}.tc-text-field-container .tc-text-field .mdc-notched-outline.mdc-notched-outline--upgraded .mdc-floating-label{transform:none !important;top:calc(50% - 9px);transition:top 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1),left 150ms cubic-bezier(0.4, 0, 0.2, 1),font-size 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-text-field-container .tc-text-field .mdc-notched-outline.mdc-notched-outline--upgraded .mdc-floating-label--float-above{top:-10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.tc-text-field-container .tc-text-field .mdc-notched-outline__notch{position:relative;max-width:calc(100% - 45px);width:auto !important;transition:border 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-text-field-container .tc-text-field.tc-text-field--hint-positinon-top{margin-top:14px}.tc-text-field-container .tc-text-field.mdc-text-field--textarea{height:auto;display:flex;flex-flow:row nowrap;align-items:center;padding:4px 0}.tc-text-field-container .tc-text-field.mdc-text-field--disabled .tc-text-field__input::-moz-placeholder{color:rgba(0,0,0,.37)}.tc-text-field-container .tc-text-field.mdc-text-field--disabled .tc-text-field__input::placeholder{color:rgba(0,0,0,.37)}.tc-text-field-container .tc-text-field.mdc-text-field--disabled .tc-text-field__icon--disable{pointer-events:none;color:rgba(0,0,0,.3)}.tc-text-field-container .tc-text-field.mdc-text-field--disabled .tc-text-field__icon--disable svg{fill:rgba(0,0,0,.3)}.tc-text-field-container .tc-text-field.mdc-text-field--with-leading-icon .tc-text-field__leading-icon{left:12px;pointer-events:none}.tc-text-field-container .tc-text-field.mdc-text-field--with-leading-icon .mdc-floating-label{left:27px}.tc-text-field-container .tc-text-field.mdc-text-field--with-leading-icon .mdc-notched-outline.mdc-notched-outline--upgraded .mdc-floating-label--float-above{top:-10px;left:4px}.tc-text-field-container .tc-text-field.mdc-text-field--with-trailing-icon .tc-text-field__trailing-icon{right:12px}.tc-text-field-container .tc-text-field__icon{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-text-field--outlined:not(.tc-text-field--no-label){margin-top:6px}.tc-text-field-helper-line{min-height:19px;overflow:hidden}.tc-text-field-helper-text--top{width:100%;position:absolute;top:0;left:16px;width:calc(100% - 32px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tc-text-field-helper-text--top:before{vertical-align:top}.tc-text-field--textarea.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .tc-text-field__input{padding-right:12px;margin-right:48px}.tc-text-field--textarea .tc-text-field__icon--textarea{top:20px}.tc-text-field--textarea .tc-text-field__input{resize:none;overflow:hidden;overflow-y:auto;margin-top:0;margin-bottom:0;padding-bottom:0px;max-height:140.5px}.tc-text-field--textarea .tc-text-field__input::-webkit-scrollbar{width:4px;border-radius:2px}.tc-text-field--textarea .tc-text-field__input::-webkit-scrollbar-track{border-radius:4px;background-color:rgba(0,0,0,.06)}.tc-text-field--textarea .tc-text-field__input::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.2)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#0097a7}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #0097A7)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#aa7f2e}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #aa7f2e)}}.mdc-ripple-surface--accent:hover::before{opacity:.08}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-list{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-list:focus{outline:none}.mdc-list-item,.tc-list-item{height:48px}.mdc-list-item__secondary-text{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic{background-color:transparent}.mdc-list-item__graphic{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-list-item--disabled .mdc-list-item__text{opacity:.38}.mdc-list-item--disabled .mdc-list-item__text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item,.tc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden}.mdc-list-item:focus,.tc-list-item:focus{outline:none}.mdc-list-item--selected,.mdc-list-item--activated{color:#0097a7;color:var(--mdc-theme-primary, #0097A7)}.mdc-list-item--selected .mdc-list-item__graphic,.mdc-list-item--activated .mdc-list-item__graphic{color:#0097a7;color:var(--mdc-theme-primary, #0097A7)}.mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px;flex-shrink:0;align-items:center;justify-content:center;fill:currentColor}.mdc-list-item[dir=rtl] .mdc-list-item__graphic,[dir=rtl].tc-list-item .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list-item__graphic,[dir=rtl] .tc-list-item .mdc-list-item__graphic{margin-left:32px;margin-right:0}.mdc-list .mdc-list-item__graphic{display:inline-flex}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item__meta:not(.material-icons){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-list-item[dir=rtl] .mdc-list-item__meta,[dir=rtl].tc-list-item .mdc-list-item__meta,[dir=rtl] .mdc-list-item .mdc-list-item__meta,[dir=rtl] .tc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list--dense .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense .mdc-list-item__primary-text::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item,.mdc-list--dense .tc-list-item{height:40px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:36px;width:20px;height:20px}.mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__graphic,[dir=rtl].tc-list-item .mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .tc-list-item .mdc-list--dense .mdc-list-item__graphic{margin-left:36px;margin-right:0}.mdc-list--avatar-list .mdc-list-item,.mdc-list--avatar-list .tc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}.mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl].tc-list-item .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl] .tc-list-item .mdc-list--avatar-list .mdc-list-item__graphic{margin-left:16px;margin-right:0}.mdc-list--two-line .mdc-list-item__text{align-self:flex-start}.mdc-list--two-line .mdc-list-item,.mdc-list--two-line .tc-list-item{height:72px}.mdc-list--two-line.mdc-list--dense .mdc-list-item,.mdc-list--two-line.mdc-list--dense .tc-list-item,.mdc-list--avatar-list.mdc-list--dense .mdc-list-item,.mdc-list--avatar-list.mdc-list--dense .tc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:20px;width:36px;height:36px}.mdc-list-item[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl].tc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .tc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:20px;margin-right:0}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled){cursor:pointer}a.mdc-list-item,a.tc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-list-divider{border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-group[dir=rtl] .mdc-list-divider--inset,[dir=rtl] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 72px - 16px)}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;margin:.75rem 16px}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled){--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled)::after{background-color:#000}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:hover::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled):hover::before{opacity:.04}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus::before,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled):not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded)::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled):not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active::after,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled):not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded,:not(.mdc-list--non-interactive)>.tc-list-item:not(.mdc-list-item--disabled).mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated::before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated::after{background-color:#0097a7}@supports not (-ms-ime-align: auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated::after{background-color:var(--mdc-theme-primary, #0097A7)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:hover::before{opacity:.16}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected::before{opacity:.08}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected::after{background-color:#0097a7}@supports not (-ms-ime-align: auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected::after{background-color:var(--mdc-theme-primary, #0097A7)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:hover::before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.2}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::after{background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.tc-menu-surface__container .tc-menu{width:auto}.tc-menu-surface__container .mdc-list-item,.tc-menu-surface__container .tc-list-item{height:40px}.tc-menu-surface__container .tc-list{font-size:14px}.tc-menu-surface__container .tc-list .tc-list-item__text-description{font-size:13px}.tc-menu-surface__container .mdc-list-item__graphic{width:18px;height:18px;font-size:18px}.tc-menu-surface__container .tc-list-item .mdc-list-item__graphic{margin:3px 8px 3px 0}.tc-menu-surface__container .tc-list-item .tc-list-item__text{flex-grow:0}.tc-menu-surface__container .tc-list-item .tc-list-item__infoIcon{margin-left:4px}.tc-menu-surface__container .tc-menu{border-radius:2px}.tc-menu-surface__container .tc-list-item:not(.tc-list-item--disabled) .tc-list__ripple{display:none}.tc-menu-surface__container .tc-menu :not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).tc-list-item--selected::before,.tc-menu-surface__container .tc-menu :not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).tc-list-item--selected::after{background-color:#0097a7}.tc-menu-surface__container .tc-menu .tc-list-item--selected .tc-list-item__text{color:#0097a7}.tc-menu-surface__container .tc-list-item__text-description{color:rgba(0,0,0,.72)}.tc-menu-surface__container .tc-list-item__infoIcon{color:#0097a7}.tc-menu-surface__container .tc-list-item__infoIcon svg{fill:#0097a7}.tc-menu-surface__container .tc-list-item__infoIcon:hover{color:#00c5da}.tc-menu-surface__container .tc-list-item__infoIcon:hover svg{fill:#00c5da}.tc-menu-surface__container .tc-list-item__infoIcon:active{color:#006974}.tc-menu-surface__container .tc-list-item__infoIcon:active svg{fill:#006974}.tc-menu-surface__container .tc-list-item__infoIcon{background-color:transparent}.tc-menu-surface__container .tc-list-item__infoIcon{width:18px;height:18px;font-size:18px}.tc-menu{box-shadow:0 3px 6px rgba(0,0,0,.16)}.tc-list-item{justify-content:flex-start;padding:0 16px}.tc-list-item.tc-list-item--disabled .tc-list__ripple{display:none}.tc-list-item--with-description{height:auto !important;min-height:100px;align-items:flex-start;padding-top:10px;padding-bottom:10px}.tc-list-item--with-description{height:auto;min-height:100px;align-items:flex-start}.tc-list__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden;left:0;top:0}.mdc-list-item__graphic svg{width:100%;height:100%}.tc-list-item__text-container{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center}.mdc-list-item__text{flex-grow:1;line-height:normal}.tc-list-item__text{width:100%}.tc-list-item__text-description{width:100%}.tc-list-item__text--bold{font-weight:500}.tc-list-item__text-description{font-size:13px}.tc-list-item__description{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;white-space:normal}.tc-list-item__infoIcon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:color 150ms;border-radius:50%;z-index:9}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled::after{background-color:inherit}.tc-list-divider{position:relative;height:1px;margin:4px}.tc-list-item--header{font-weight:bold}@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(245,127,23,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#aa7f2e;fill:var(--mdc-theme-secondary, #aa7f2e);stroke:#aa7f2e;stroke:var(--mdc-theme-secondary, #aa7f2e)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#aa7f2e;background-color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87))}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154,154,154,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}.tc-slider-container{display:flex;flex-flow:row nowrap;align-items:center}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#0097a7}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(0,151,167,.26)}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#0097a7}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#0097a7;stroke:#0097a7}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#0097a7}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#0097a7}.tc-slider-container .tc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.tc-slider-container .tc-slider__input-field:focus{border-color:#0097a7}.tc-slider-container .tc-slider .mdc-slider__focus-ring{display:none}.tc-slider-container .tc-slider__icon{color:rgba(0,0,0,.64)}.tc-slider-container .tc-slider__icon svg{fill:rgba(0,0,0,.64)}.tc-slider-container .tc-slider__icon{width:24px;height:24px;font-size:24px}.tc-slider-container .tc-slider__input-field{width:36px}.tc-slider-container .tc-slider__input-field{height:24px}.tc-slider-container .tc-slider__input-field{font-size:14px}.tc-slider-container .tc-slider__input-label{font-size:12px}.tc-slider__icon{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0;margin-right:12px}.tc-slider__input{display:flex;flex-flow:row nowrap;align-items:center;margin-left:12px}.tc-slider__input .tc-slider__input-field{margin-right:6px;text-align:center;padding:4px 8px;outline:none;box-shadow:none;border:1px solid rgba(0,0,0,.2);border-radius:2px}.tc-slider__input .tc-slider__input-field:hover:not(:focus){border:1px solid rgba(0,0,0,.54)}.tc-slider__input .tc-slider__input-field::-webkit-outer-spin-button,.tc-slider__input .tc-slider__input-field::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.tc-slider__input .tc-slider__input-field[type=number]{-moz-appearance:textfield}.tc-slider-container--disabled .tc-slider__icon{color:rgba(0,0,0,.48)}.tc-slider-container--disabled .tc-slider__icon svg{fill:rgba(0,0,0,.48)}.tc-slider-container--disabled .tc-slider__input-field{border-color:rgba(0,0,0,.16) !important}.tc-icon-container{position:relative;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0;width:24px;height:24px;font-size:24px}.tc-icon-container .tc-icon__icon{color:rgba(0,0,0,.54)}.tc-icon-container .tc-icon__icon svg{fill:rgba(0,0,0,.54)}.tc-icon-container .tc-icon__icon--loading svg{stroke:rgba(0,0,0,.54)}.tc-icon-container .tc-icon__icon{width:24px;height:24px;font-size:24px}.tc-icon__icon{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0;cursor:default}.tc-icon__icon--clickable{cursor:pointer}.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#aa7f2e;color:var(--mdc-theme-secondary, #aa7f2e)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mdc-tab{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding-right:24px;padding-left:24px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0,0,0,.6)}.mdc-tab .mdc-tab__icon{color:rgba(0,0,0,.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#0097a7;color:var(--mdc-theme-primary, #0097A7)}.mdc-tab--active .mdc-tab__icon{color:#0097a7;color:var(--mdc-theme-primary, #0097A7);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab__ripple{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#0097a7}@supports not (-ms-ime-align: auto){.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:var(--mdc-theme-primary, #0097A7)}}.mdc-tab__ripple:hover::before{opacity:.04}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-tabs{box-shadow:inset 0 -1px 0 0 #dfdfdf;box-sizing:border-box;flex-shrink:0;width:100%;background-color:transparent}.tc-tabs .mdc-tab--active .mdc-tab__text-label{color:#0097a7}.tc-tabs .mdc-tab--active .mdc-tab__icon{color:#0097a7;fill:currentColor}.tc-tabs .tc-tab .tc-tab-indicator__content{border-color:#0097a7}.tc-tabs .tc-tab .mdc-tab__ripple::before,.tc-tabs .tc-tab .mdc-tab__ripple::after{background-color:#0097a7}.tc-tabs .tc-tab .mdc-tab__ripple:hover::before{opacity:.04}.tc-tabs .tc-tab .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.tc-tabs .tc-tab .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.tc-tabs .tc-tab .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.tc-tabs .tc-tab .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.tc-tabs .tc-tab .mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-tabs .tc-tab{height:48px}.tc-tabs .tc-tabs-scroller{padding-left:0px;padding-right:0px}.tc-tabs .tc-tab{min-width:90px}.tc-tabs .tc-tab{max-width:240px}.tc-tabs .tc-tab .tc-tab__content{flex-flow:row nowrap}.tc-tabs .tc-tab .tc-tab__icon+.tc-tab__text{margin-top:0;margin-left:8px}.tc-tabs .tc-tab__icon{width:18px;height:18px;font-size:18px}.tc-tabs .tc-tab{text-transform:uppercase;font-size:13px;letter-spacing:.5px}.tc-tabs .tc-tab__badge .tc-badge{background-color:#aa7f2e}.tc-tabs .tc-tab__badge .tc-badge{color:#fff}.tc-tabs .tc-tab__badge .tc-badge svg{fill:#fff}.tc-tabs .tc-tab__badge .tc-badge .tc-badge__value{font-size:10px}.tc-tabs .tc-tab__badge .tc-badge svg{width:10px}.tc-tabs .tc-tab__badge .tc-badge{min-width:14px;height:14px;line-height:normal;border-radius:7px}.tc-tabs .tc-tab__badge .tc-badge--icon{width:14px}.tc-tabs .tc-tab .mdc-tab__ripple{display:block}.tc-tabs .tc-tab .tc-tab-indicator__content{border-color:#0097a7}.tc-tabs .tc-tab .tc-tab-indicator__content{border-top-width:2px}.tc-tab{flex-grow:0;box-sizing:border-box;padding:0px 24px;overflow:visible}.tc-tab .tc-tab__content{overflow:visible;max-width:100%;width:100%}.tc-tab .tc-tab__content .tc-tab__text{width:100%;text-align:center;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0px !important}.tc-tab .tc-tab__content .tc-tab__icon{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0}.tc-tab--disabled{opacity:.4}.tc-tab--disabled:hover{cursor:default}.tc-tab--disabled .mdc-tab__ripple{display:none}.tc-tab__badge{position:absolute;top:0;right:0;transform:scale(1) translate(100%, 50%);transform-origin:200% 100%;text-align:center;letter-spacing:0;z-index:1}.tc-chip-container .tc-chip{background-color:#e0e0e0}.tc-chip-container .tc-chip .tc-chip__icon{color:rgba(0,0,0,.64)}.tc-chip-container .tc-chip .tc-chip__icon svg{fill:rgba(0,0,0,.64)}.tc-chip-container .tc-chip .tc-chip__text{font-size:14px;line-height:14px}.tc-chip-container .tc-chip .tc-chip__icon{width:18px;height:18px;font-size:18px}.tc-chip-container .tc-chip .tc-chip__icon svg{width:18px;height:18px;font-size:18px}.tc-chip-container .tc-chip,.tc-chip-container .tc-chip__icon-container{border-radius:16px}.tc-chip-container .tc-chip{height:32px}.tc-chip-container .tc-chip .tc-chip__icon-container{width:32px}.tc-chip-container .tc-chip .tc-chip__text{line-height:32px}.tc-chip-container .tc-chip{flex-direction:row-reverse}.tc-chip-container .tc-chip .tc-chip__icon--custom{margin-left:4px;margin-right:12px}.tc-chip-container .tc-chip:not(.tc-chip--without-icon) .tc-chip__text{padding-left:12px;padding-right:4px}.tc-chip-container .tc-chip.mdc-ripple-upgraded::before,.tc-chip-container .tc-chip.mdc-ripple-upgraded::after{display:block}.tc-chip-container .tc-chip{border-width:0px}.tc-chip-container .tc-chip{border-color:#e0e0e0}.tc-chip{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:0px solid}.tc-chip.tc-chip--default .tc-chip__icon{cursor:pointer}.tc-chip.tc-chip--disabled{opacity:.37;cursor:default;pointer-events:none}.tc-chip.tc-chip--clickable{cursor:pointer}.tc-chip.tc-chip--without-icon .tc-chip__text{padding-right:12px;padding-left:12px}.tc-chip__icon-container{height:100%;display:flex;justify-content:center;align-items:center}.tc-chip__icon{flex-shrink:0;padding-left:0;padding-right:0}.tc-chip__text{flex-grow:1;flex-shrink:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0}.tc-avatar-container{position:relative}.tc-avatar-container .tc-avatar{width:40px;height:40px}.tc-avatar-container .tc-avatar__image--icon{line-height:40px}.tc-avatar-container .tc-avatar__name{font-size:16px}.tc-avatar-container .tc-avatar__name{color:#fff}.tc-avatar-container .tc-avatar{border-width:0px}.tc-avatar-container .tc-avatar{border-radius:50%}.tc-avatar-container .tc-avatar__image{border-radius:50%}.tc-avatar-container .tc-avatar__overlay{border-radius:50%}.tc-avatar-container .tc-avatar{border-color:#fff}.tc-avatar-container .tc-avatar__status.tc-avatar__status--bottom{width:12px;height:12px}.tc-avatar-container .tc-avatar__checkmark{font-size:10px}.tc-avatar-container .tc-avatar__status.tc-avatar__status--bottom{border-width:1px}.tc-avatar-container .tc-avatar__status.tc-avatar__status--bottom{border-radius:50%}.tc-avatar-container .tc-avatar__status.tc-avatar__status--bottom{border-color:#fff}.tc-avatar-container .tc-avatar__status--top{color:#0097a7}.tc-avatar-container .tc-avatar__status--top .tc-avatar__icon svg{fill:#0097a7}.tc-avatar-container .tc-avatar__status--top{background-color:#fff}.tc-avatar-container .tc-avatar__status.tc-avatar__status--top{width:12px;height:12px}.tc-avatar-container .tc-avatar__status.tc-avatar__status--top .tc-avatar__icon{font-size:10px}.tc-avatar-container .tc-avatar__status--top{border-width:1px}.tc-avatar-container .tc-avatar__status--top{border-radius:50%}.tc-avatar-container .tc-avatar__status--top{border-color:#fff}.tc-avatar-container .tc-avatar.tc-avatar--selected .tc-avatar__overlay{border-color:#0097a7}.tc-avatar-container .tc-avatar.tc-avatar--selected .tc-avatar__status--bottom{background-color:#0097a7}.tc-avatar-container .tc-avatar--selectable:not(.tc-avatar--selected):hover .tc-avatar__overlay{border-color:#80cbd3}.tc-avatar-container .tc-avatar--selectable:not(.tc-avatar--selected):hover .tc-avatar__status--bottom{background-color:#80cbd3}.tc-avatar-container .tc-avatar--selected .tc-avatar__overlay{border-width:2px}.tc-avatar-container .tc-avatar--selectable:not(.tc-avatar--selected):hover .tc-avatar__overlay{border-width:2px}.tc-avatar-container .tc-avatar__name-icon{font-size:24px}.tc-avatar-container .tc-avatar__name-icon svg{width:24px;height:24px}.tc-avatar-container .tc-avatar__name-icon{color:#fff}.tc-avatar-container .tc-avatar__name-icon svg{fill:#fff}.tc-avatar{box-sizing:border-box;border-style:solid;display:flex;flex-flow:row;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:border-width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-avatar.tc-avatar-status--online .tc-avatar__status--bottom{background-color:#00ce00}.tc-avatar.tc-avatar-status--busy .tc-avatar__status--bottom{background-color:#fcb31a}.tc-avatar.tc-avatar-status--offline .tc-avatar__status--bottom{background-color:#e65563}.tc-avatar.tc-avatar-status--dont-disturb .tc-avatar__status--bottom{background-color:#e65563}.tc-avatar.tc-avatar-status--dont-disturb .tc-avatar__status--bottom:before{content:"";position:absolute;width:60%;height:20%;background-color:#fff;top:40%;right:20%;border-radius:2px;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-avatar.tc-avatar-status--dont-disturb:hover .tc-avatar__status--bottom:before{display:none}.tc-avatar.tc-avatar-status--unset .tc-avatar__status--bottom{background-color:#aaa}.tc-avatar.tc-avatar--selected .tc-avatar__status--bottom:before{width:0}.tc-avatar.tc-avatar--selected .tc-avatar__checkmark{width:100%}.tc-avatar.tc-avatar--selectable{cursor:pointer}.tc-avatar.tc-avatar--selectable:hover .tc-avatar__overlay{background-color:rgba(0,0,0,.4);border-style:solid}.tc-avatar.tc-avatar--loading{background:#ccc}.tc-avatar.tc-avatar--loading .tc-avatar__overlay{background-color:rgba(255,255,255,.8);animation:background-loading 1s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate}.tc-avatar.tc-avatar--disabled{cursor:default;pointer-events:none}.tc-avatar.tc-avatar--disabled .tc-avatar__overlay{background-color:rgba(255,255,255,.5)}.tc-avatar.tc-avatar--disabled .tc-avatar__status:before{content:"";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.5);border-radius:50%}.tc-avatar__overlay{box-sizing:border-box;position:absolute;border-style:solid;border-color:#80cbd3;content:"";width:100%;height:100%;left:0;top:0;background-color:transparent;transition:150ms}.tc-avatar__image{width:100%;height:100%;border-radius:50%;overflow:hidden;-o-object-fit:cover;object-fit:cover}.tc-avatar__image svg{width:100%;height:100%}.tc-avatar__image--icon{text-align:center}.tc-avatar__name{font-weight:bold;text-transform:uppercase}.tc-avatar__status{display:flex;align-items:center;box-sizing:border-box;position:absolute;right:0;border-style:solid;border-color:#fff;background-color:#fff;z-index:1;transition:border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),width 150ms cubic-bezier(0.4, 0, 0.2, 1),background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.tc-avatar__status.tc-avatar__status--bottom{bottom:0}.tc-avatar__status.tc-avatar__status--top{top:0}.tc-avatar__status.tc-avatar__status--top .tc-avatar__icon{display:flex;justify-content:center}.tc-avatar__status.tc-avatar__status--top svg{width:100%}.tc-avatar__icon{width:100%}.tc-avatar__checkmark{overflow:hidden;width:0;height:100%;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1);color:#fff}@keyframes background-loading{0%{opacity:0}100%{opacity:1}}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.tc-modal-block{display:flex;flex-flow:column nowrap;position:fixed;left:0;right:0;top:0;bottom:0;z-index:9;overflow:hidden}.tc-modal-block .tc-modal{width:auto}.tc-modal-block .tc-modal{min-width:320px}.tc-modal-block .tc-modal{max-width:980px}.tc-modal-block .tc-modal{height:auto}.tc-modal-block .tc-modal-container{height:auto}.tc-modal-block .tc-modal{background-color:#fff}.tc-modal-block .tc-modal-container,.tc-modal-block .tc-modal-preloader{padding:16px}.tc-modal-block .tc-modal .tc-modal__header{padding-left:24px;padding-right:24px;padding-top:24px}.tc-modal-block .tc-modal .tc-modal__content{padding-left:24px;padding-right:24px}.tc-modal-block .tc-modal .tc-modal__footer{padding-left:24px;padding-right:24px;padding-bottom:24px}.tc-modal-block .tc-modal{border-radius:2px}.tc-modal-block .tc-modal .tc-modal__content{margin-top:16px;margin-bottom:24px}.tc-modal-block .tc-modal .tc-modal__content{overflow:hidden}.tc-modal-block .tc-modal-container{flex-shrink:0}.tc-modal-block .tc-modal-preloader{width:64px}.tc-modal-block .tc-modal-preloader .tc-preloader--circle{width:64px;height:64px}.tc-modal-block .tc-modal-preloader .tc-preloader--cube{width:64px;height:64px}.tc-modal-block .tc-modal-preloader .tc-preloader--fountain{width:64px;height:calc(64px - 87%)}.tc-modal-block .tc-modal-preloader .tc-fountain-ie{width:2.56px;height:2.56px}@keyframes fountain-preloader{0%,100%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}10%{box-shadow:-28.8px 0 0 .3em #0097a7,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}20%{box-shadow:-28.8px 0 0 .1em #0097a7,-22.4px 0 0 .2em #0097a7,-16px 0 0 .3em #0097a7,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}30%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em #0097a7,-16px 0 0 .2em #0097a7,-9.6px 0 0 .3em #0097a7,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}40%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em #0097a7,-9.6px 0 0 .2em #0097a7,-3.2px 0 0 .3em #0097a7,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}50%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em #0097a7,-3.2px 0 0 .2em #0097a7,3.2px 0 0 .3em #0097a7,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}60%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em #0097a7,3.2px 0 0 .2em #0097a7,9.6px 0 0 .3em #0097a7,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .1em}70%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em #0097a7,16px 0 0 .2em #0097a7,22.4px 0 0 .3em #0097a7,28.8px 0 0 .1em}80%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em #0097a7,22.4px 0 0 .2em #0097a7,28.8px 0 0 .3em #0097a7}90%{box-shadow:-28.8px 0 0 .1em,-22.4px 0 0 .1em,-16px 0 0 .1em,-9.6px 0 0 .1em,-3.2px 0 0 .1em,3.2px 0 0 .1em,9.6px 0 0 .1em,16px 0 0 .1em,22.4px 0 0 .1em,28.8px 0 0 .2em #0097a7}}.tc-modal-block .tc-modal-preloader .tc-preloader--circle svg{stroke:#fff}.tc-modal-block .tc-modal-preloader .tc-preloader--cube .tc-cube:before{background-color:#fff}.tc-modal-block .tc-modal-preloader .tc-preloader--fountain svg .colored,.tc-modal-block .tc-modal-preloader .tc-preloader--fountain svg .colored--active{fill:#fff}.tc-modal-block .tc-modal-wrapper-enter-active,.tc-modal-block .tc-modal-wrapper-leave-active{transition:all .25s}.tc-modal-block .tc-modal-wrapper-enter,.tc-modal-block .tc-modal-wrapper-leave-to{opacity:0}.tc-modal-block .tc-modal-enter-active,.tc-modal-block .tc-modal-leave-active{transition:all .25s}.tc-modal-block .tc-modal-enter,.tc-modal-block .tc-modal-leave-to{transform:scale(0.6);opacity:0}.tc-modal-block .tc-modal__header__desc{font-size:16px}.tc-modal-block .tc-modal__header__button .mdc-button__icon{width:24px;height:24px;font-size:24px}.tc-modal-block--without-footer .tc-modal .tc-modal__content{margin-top:16px;margin-bottom:0px}.tc-modal-wrapper{display:flex;flex-flow:column nowrap;flex-grow:1;height:100%;background-color:rgba(0,0,0,.32);overflow-x:hidden;overflow-y:auto}.tc-modal-preloader,.tc-modal-container{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-grow:1;flex-shrink:0;height:auto;box-sizing:border-box}.tc-modal-preloader{align-self:center}.tc-modal{display:flex;flex-flow:column nowrap;box-sizing:border-box}.tc-modal__header{display:flex;flex-flow:row nowrap;align-items:center;flex-shrink:0;box-sizing:border-box}.tc-modal__header__button{min-width:36px;min-height:36px;height:auto;border-radius:2px;padding:0}.tc-modal__header__button .mdc-button__ripple:before,.tc-modal__header__button .mdc-button__ripple:after{background-color:rgba(0,0,0,.54)}.tc-modal__header__button .mdc-button__ripple{border-radius:2px}.tc-modal__header__button .mdc-button__icon{display:flex;flex-direction:column;justify-content:center;align-items:center;color:rgba(0,0,0,.54);margin:0}.tc-modal__header__desc{flex-grow:1;margin-right:16px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tc-modal__content{flex-grow:1;height:100%;word-break:break-word}.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}[dir=rtl] .mdc-snackbar__actions,.mdc-snackbar__actions[dir=rtl]{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.tc-snackbar{margin:8px;z-index:8}.tc-snackbar .mdc-button{letter-spacing:.5px}.tc-snackbar .mdc-icon-button::before,.tc-snackbar .mdc-icon-button::after{border-radius:2px}.tc-snackbar .mdc-snackbar__label{width:100%;word-break:break-word}.tc-snackbar .mdc-snackbar__surface{background-color:#333}.tc-snackbar .mdc-snackbar__label{color:rgba(255,255,255,.84)}.tc-snackbar .mdc-snackbar__actions .mdc-button:not(:disabled){color:#aa7f2e}.tc-snackbar .mdc-snackbar__surface{min-width:320px}@media(max-width: 320px),(max-width: 320px){.tc-snackbar .mdc-snackbar__surface{min-width:100%}}.tc-snackbar .mdc-snackbar__surface{max-width:768px}.tc-snackbar .mdc-snackbar__surface{border-radius:4px}.tc-preloader-container{position:relative;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0;width:40px}.tc-preloader-container .tc-preloader--circle svg{stroke:#0097a7}.tc-preloader-container .tc-preloader--cube .tc-cube:before{background-color:#0097a7}.tc-preloader-container .tc-preloader--fountain svg .colored,.tc-preloader-container .tc-preloader--fountain svg .colored--active{fill:#0097a7}.tc-preloader-container .tc-preloader--circle{width:40px;height:40px}.tc-preloader-container .tc-preloader--cube{width:40px;height:40px}.tc-preloader-container .tc-preloader--fountain{width:40px;height:calc(40px - 87%)}.tc-preloader-container .tc-fountain-ie{width:1.6px;height:1.6px}@keyframes fountain-preloader{0%,100%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}10%{box-shadow:-18px 0 0 .3em #0097a7,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}20%{box-shadow:-18px 0 0 .1em #0097a7,-14px 0 0 .2em #0097a7,-10px 0 0 .3em #0097a7,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}30%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em #0097a7,-10px 0 0 .2em #0097a7,-6px 0 0 .3em #0097a7,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}40%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em #0097a7,-6px 0 0 .2em #0097a7,-2px 0 0 .3em #0097a7,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}50%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em #0097a7,-2px 0 0 .2em #0097a7,2px 0 0 .3em #0097a7,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}60%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em #0097a7,2px 0 0 .2em #0097a7,6px 0 0 .3em #0097a7,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .1em}70%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em #0097a7,10px 0 0 .2em #0097a7,14px 0 0 .3em #0097a7,18px 0 0 .1em}80%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em #0097a7,14px 0 0 .2em #0097a7,18px 0 0 .3em #0097a7}90%{box-shadow:-18px 0 0 .1em,-14px 0 0 .1em,-10px 0 0 .1em,-6px 0 0 .1em,-2px 0 0 .1em,2px 0 0 .1em,6px 0 0 .1em,10px 0 0 .1em,14px 0 0 .1em,18px 0 0 .2em #0097a7}}.tc-preloader{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;flex-shrink:0;cursor:default}.tc-preloader--cube{position:relative;transform:rotateZ(45deg);box-sizing:border-box;padding:16.6%}.tc-preloader--cube .tc-cube{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.tc-preloader--cube .tc-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;animation:tc-foldCubeAngle 2.4s infinite linear both;transform-origin:100% 100%}.tc-preloader--cube .tc-cube2{transform:scale(1.1) rotateZ(90deg)}.tc-preloader--cube .tc-cube3{transform:scale(1.1) rotateZ(270deg)}.tc-preloader--cube .tc-cube4{transform:scale(1.1) rotateZ(180deg)}.tc-preloader--cube .tc-cube2:before{animation-delay:.3s}.tc-preloader--cube .tc-cube3:before{animation-delay:.9s}.tc-preloader--cube .tc-cube4:before{animation-delay:.6s}@keyframes tc-foldCubeAngle{0%,10%{transform:perspective(360px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(360px) rotateX(0deg);opacity:1}90%,100%{transform:perspective(360px) rotateY(180deg);opacity:0}}.tc-fountain-ie{color:rgba(0,151,167,.42);font-size:20px;border-radius:50%;position:relative;text-indent:-9999em;animation:fountain-preloader 1170ms infinite linear;transform:translateZ(0)}.tc-preloader--circle-ie{animation:rotate-circle .8s linear infinite}@keyframes rotate-circle{100%{transform:rotate(360deg)}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{to{transform:translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;background-repeat:repeat-x;background-size:10px 4px;animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#0097a7;border-color:var(--mdc-theme-primary, #0097A7)}.mdc-linear-progress__buffering-dots{background-image:url("data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress__bar-inner{border-color:#0097a7}.tc-linear-progress__text{color:#999}.tc-linear-progress__text--after{color:#fff}.tc-linear-progress__text{font-size:14px}.tc-progress-bar{border-radius:2px;box-sizing:border-box}.tc-linear-progress__buffering-dots{background-position-y:center}.tc-linear-progress__text{position:absolute;z-index:9;display:flex;justify-content:center;align-items:center;width:100%;height:100%;transition:color ease-in-out 150ms}.tc-list-container{position:relative;display:flex;flex-flow:column nowrap;flex:1 1 auto;overflow-y:hidden}.tc-list{display:flex;flex-flow:column nowrap;flex:1 1 80px}.tc-list__header{position:absolute;left:0;right:0;top:0;display:flex;flex-flow:row nowrap;flex-shrink:0}.tc-date-picker{display:flex;flex-direction:column;width:280px;padding:0px}.tc-date-picker .tc-date-picker__controls,.tc-date-picker .tc-date-picker__weekdays,.tc-date-picker .tc-date-picker__transition-group{width:280px}.tc-date-picker .tc-date-picker__grid-container{height:240px}.tc-date-picker .tc-date-picker__grid{min-height:240px}.tc-date-picker .tc-date-picker__cell{width:40px;height:40px}.tc-date-picker .tc-date-picker__button{min-width:36px;min-height:36px;max-width:36px;max-height:36px}.tc-date-picker .tc-date-picker__button .tc-button{min-width:36px}.tc-date-picker .tc-date-picker__button .tc-button{min-height:36px}.tc-date-picker .tc-date-picker__button .tc-button{max-width:36px}.tc-date-picker .tc-date-picker__button .tc-button{max-height:36px}.tc-date-picker .tc-date-picker__month-container{height:36px}.tc-date-picker .tc-date-picker__month-name{height:36px;line-height:36px}.tc-date-picker .tc-date-picker__month-name{font-size:14px}.tc-date-picker .tc-date-picker__cell{font-size:14px}.tc-date-picker .tc-date-picker__cell{border-radius:2px}.tc-date-picker .tc-date-picker__cell--today{background-color:rgba(0,151,167,.1);color:#0097a7}.tc-date-picker .tc-date-picker__cell--selected-area{background-color:#fdebdb;border-radius:0}.tc-date-picker .tc-date-picker__cell--selected{background-color:#aa7f2e}.tc-date-picker .tc-date-picker__cell--badge .tc-date-picker__badge{background-color:#fabf8b}.tc-date-picker .tc-date-picker__cell--badge .tc-date-picker__badge{width:8px;height:8px}.tc-date-picker .tc-date-picker__cell--badge .tc-date-picker__badge{top:4px;right:4px}.tc-date-picker__month-container{display:flex;overflow:hidden;flex-grow:1;justify-content:center}.tc-date-picker__month-name{color:rgba(0,0,0,.87);text-align:left;min-width:100%;padding-left:10px}.tc-date-picker__controls{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;font-weight:bold}.tc-date-picker__weekdays{font-weight:bold;color:rgba(0,0,0,.54)}.tc-date-picker__weekdays,.tc-date-picker__grid{display:flex;flex-wrap:wrap;min-width:280px;align-content:flex-start}.tc-date-picker__cell{position:relative;display:flex;justify-content:center;align-items:center;border-radius:2px;border:1px solid transparent;box-sizing:border-box;text-align:center}.tc-date-picker__grid-container{overflow:hidden}.tc-date-picker__grid .tc-date-picker__cell{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.tc-date-picker__grid .tc-date-picker__cell:hover{border:1px solid rgba(0,151,167,.7)}.tc-date-picker__grid .tc-date-picker__cell--today{font-weight:bold}.tc-date-picker__grid .tc-date-picker__cell--unavailable{color:rgba(0,0,0,.54)}.tc-date-picker__grid .tc-date-picker__cell--selected{color:#fff;font-weight:bold}.tc-date-picker__grid .tc-date-picker__cell--disabled{color:rgba(0,0,0,.38);cursor:default}.tc-date-picker__grid .tc-date-picker__cell--badge .tc-date-picker__badge{border-radius:50%;position:absolute}.tc-date-picker__time{display:flex;flex-flow:row nowrap;margin-top:16px}.tc-date-picker__input{flex-basis:100%}.tc-date-picker__input .tc-menu{width:100%}.tc-date-picker__input .tc-date-picker__text-field{width:100%;min-width:100px}.tc-date-picker__input .tc-date-picker__text-field .tc-text-field-helper-line{display:none}.tc-date-picker__input--end-time{margin-left:16px}.tc-date-picker__transition-group{display:flex;flex-flow:column;overflow:hidden}.tc-date-picker-scroll-top-enter-active,.tc-date-picker-scroll-top-leave-active,.tc-date-picker-scroll-down-leave-active,.tc-date-picker-scroll-down-enter-active{transition:all 300ms cubic-bezier(0.35, 0.8, 0.4, 1)}.tc-date-picker-scroll-top-enter{transform:translateY(0%)}.tc-date-picker-scroll-down-enter{transform:translateY(-200%)}.tc-date-picker-scroll-top-leave-to,.tc-date-picker-scroll-top-enter-to,.tc-date-picker-scroll-down-enter-to{transform:translateY(-100%)}.tc-date-picker-scroll-top-leave-to,.tc-date-picker-scroll-down-leave-to{opacity:0}.tc-date-picker-scroll-down-leave-to{transform:translateY(100%)}.tc-date-picker__text-field input[type=time]::-webkit-inner-spin-button{-webkit-appearance:none}.tc-date-picker__text-field input[type=time]::-webkit-clear-button{-webkit-appearance:none}.tc-badge-container{z-index:1}.tc-badge-container .tc-badge{min-width:18px;height:18px;line-height:normal;border-radius:9px}.tc-badge-container .tc-badge--icon{width:18px}.tc-badge-container .tc-badge .tc-badge__value{font-size:11px}.tc-badge-container .tc-badge svg{width:11px}.tc-badge-container .tc-badge{background-color:#aa7f2e}.tc-badge-container .tc-badge{color:#fff}.tc-badge-container .tc-badge svg{fill:#fff}.tc-badge{display:flex;justify-content:center;align-items:center;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;padding:0px 3px}.tc-badge__value{display:flex;justify-content:center;align-items:center;text-align:center;font-weight:bold}.tc-badge__value svg{width:100%;height:100%}.tc-badge-enter-active,.tc-badge-leave-active{transition:all 150ms}.tc-badge-enter,.tc-badge-leave-to{opacity:0;transform:scale(0.1, 0.1)}.tc-steps{display:flex;flex-flow:row nowrap}.tc-steps .tc-steps__tail{display:none}.tc-steps .tc-steps__item--done .tc-steps__icon{color:#0097a7}.tc-steps .tc-steps__item--done .tc-steps__icon svg{fill:#0097a7}.tc-steps .tc-steps__item--done .tc-steps__tail:after{background-color:#0097a7}.tc-steps .tc-steps__item--done .tc-steps__title:after{background-color:#0097a7}.tc-steps .tc-steps__item--active:not(.tc-steps__item--error) .tc-steps__icon{background-color:#0097a7}.tc-steps .tc-steps__icon{border-color:#0097a7}.tc-steps .tc-steps__icon--refresh{color:#0097a7}.tc-steps .tc-steps__item--active .tc-steps__title:after,.tc-steps .tc-steps__item--loading .tc-steps__title:after,.tc-steps .tc-steps__item--error .tc-steps__title:after,.tc-steps .tc-steps__item--wait .tc-steps__title:after{background-color:#e8e8e8}.tc-steps .tc-steps__item--wait .tc-steps__icon{border-color:#e8e8e8}.tc-steps .tc-steps__item--error .tc-steps__icon{color:#e85d4e;border-color:#e85d4e}.tc-steps .tc-steps__item--error .tc-steps__title{color:#e85d4e}.tc-steps .tc-steps__item--error .tc-steps__description{color:#e85d4e}.tc-steps .tc-steps__item--disabled .tc-steps__icon{border-color:#ccc}.tc-steps .tc-steps__item--disabled .tc-steps__title:after{background-color:#ccc}.tc-steps .tc-steps__item--disabled .tc-steps__icon{color:#ccc}.tc-steps .tc-steps__item--disabled .tc-steps__icon svg{fill:#ccc}.tc-steps .tc-steps__item--disabled .tc-steps__title,.tc-steps .tc-steps__item--disabled .tc-steps__description{color:#ccc}.tc-steps .tc-steps__tail:after{background-color:#ccc}.tc-steps .tc-steps__item{max-width:100%}.tc-steps .tc-steps__icon,.tc-steps .tc-steps__icon--refresh{width:32px;height:32px;line-height:32px;font-size:16px}.tc-steps .tc-steps__icon svg,.tc-steps .tc-steps__icon--refresh svg{width:16px}.tc-steps .tc-steps__icon--refresh{font-size:28px}.tc-steps .tc-steps__item--loading .tc-steps__preloader{width:34px;width:34px}.tc-steps .tc-steps__item--loading .tc-steps__preloader .tc-preloader--circle{width:34px;height:34px}.tc-steps .tc-steps__item--loading .tc-steps__preloader .tc-preloader--cube{width:34px;height:34px}.tc-steps .tc-steps__item--loading .tc-steps__preloader .tc-preloader--fountain{width:34px;height:calc(34px - 87%)}.tc-steps .tc-steps__item--loading .tc-steps__preloader .tc-fountain-ie{width:1.36px;height:1.36px}@keyframes fountain-preloader{0%,100%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}10%{box-shadow:-15.3px 0 0 .3em #0097a7,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}20%{box-shadow:-15.3px 0 0 .1em #0097a7,-11.9px 0 0 .2em #0097a7,-8.5px 0 0 .3em #0097a7,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}30%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em #0097a7,-8.5px 0 0 .2em #0097a7,-5.1px 0 0 .3em #0097a7,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}40%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em #0097a7,-5.1px 0 0 .2em #0097a7,-1.7px 0 0 .3em #0097a7,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}50%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em #0097a7,-1.7px 0 0 .2em #0097a7,1.7px 0 0 .3em #0097a7,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}60%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em #0097a7,1.7px 0 0 .2em #0097a7,5.1px 0 0 .3em #0097a7,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .1em}70%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em #0097a7,8.5px 0 0 .2em #0097a7,11.9px 0 0 .3em #0097a7,15.3px 0 0 .1em}80%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em #0097a7,11.9px 0 0 .2em #0097a7,15.3px 0 0 .3em #0097a7}90%{box-shadow:-15.3px 0 0 .1em,-11.9px 0 0 .1em,-8.5px 0 0 .1em,-5.1px 0 0 .1em,-1.7px 0 0 .1em,1.7px 0 0 .1em,5.1px 0 0 .1em,8.5px 0 0 .1em,11.9px 0 0 .1em,15.3px 0 0 .2em #0097a7}}.tc-steps .tc-steps__title{line-height:34px}.tc-steps .tc-steps__title:after{top:16px}.tc-steps .tc-steps__tail{left:16px}.tc-steps .tc-steps__tail{width:1px}.tc-steps .tc-steps__tail:after{width:1px}.tc-steps .tc-steps__title:after{height:1px}.tc-steps .tc-steps__item--clickable:not(.tc-steps__item--active):not(.tc-steps__item--disabled):not(.tc-steps__item--loading):hover .tc-steps__title,.tc-steps .tc-steps__item--clickable:not(.tc-steps__item--active):not(.tc-steps__item--disabled):not(.tc-steps__item--loading):hover .tc-steps__description{color:#0097a7}.tc-steps .tc-steps__item--clickable:not(.tc-steps__item--active):not(.tc-steps__item--disabled):not(.tc-steps__item--loading):hover .tc-steps__icon{color:#0097a7;border-color:#0097a7}.tc-steps .tc-steps__item--clickable:not(.tc-steps__item--active):not(.tc-steps__item--disabled):not(.tc-steps__item--loading):hover .tc-steps__icon svg{fill:#0097a7}.tc-steps__item{display:flex;flex-flow:row nowrap;flex-grow:1;flex-shrink:1;flex-basis:100%;overflow:hidden;margin-right:16px;position:relative;transition:all 150ms ease-in-out}.tc-steps__item:last-child{flex-grow:0}.tc-steps__item:last-child .tc-steps__title:after{display:none}.tc-steps__item--active .tc-steps__icon{color:#fff}.tc-steps__item--active .tc-steps__icon svg{fill:#fff}.tc-steps__item--loading{align-items:flex-start}.tc-steps__item--loading .tc-steps__preloader{margin-right:8px}.tc-steps__item--error .tc-steps__icon{background-color:transparent}.tc-steps__item--clickable{cursor:pointer}.tc-steps__item--refreshable:hover .tc-steps__icon--refresh{display:block}.tc-steps__item--refreshable:hover .tc-steps__icon{display:none}.tc-steps__item--wait,.tc-steps__item--disabled{cursor:default;color:rgba(0,0,0,.48)}.tc-steps__item--wait .tc-steps__icon,.tc-steps__item--disabled .tc-steps__icon{color:rgba(0,0,0,.48)}.tc-steps__item--wait .tc-steps__icon svg,.tc-steps__item--disabled .tc-steps__icon svg{fill:rgba(0,0,0,.48)}.tc-steps__item--wait .tc-steps__description,.tc-steps__item--disabled .tc-steps__description{color:rgba(0,0,0,.48)}.tc-steps__content{display:flex;flex-direction:column;align-items:flex-start;min-height:58px;width:100%}.tc-steps__title{display:inline-flex;font-size:14px;padding-right:16px;position:relative;white-space:nowrap;max-width:100%}.tc-steps__title:after{content:"";position:absolute;display:inline-flex;width:9999px;left:100%;top:16px;transition:all 150ms ease-in-out;border-radius:2px}.tc-steps__description{font-size:12px;color:rgba(0,0,0,.64);padding-bottom:12px;width:100%}.tc-steps__icon{flex-shrink:0;margin-right:8px;background-color:transparent;border:1px solid transparent;border-radius:50%;text-align:center;transition:all 150ms ease-in-out}.tc-steps__icon--refresh{display:none;color:red;margin-right:8px;flex-shrink:0;border:1px solid transparent;border-radius:50%;text-align:center}.tc-steps__tail{position:absolute;box-sizing:border-box;top:0;height:100%;padding:38px 0 8px 0}.tc-steps__tail:after{content:"";display:flex;height:100%;border-radius:2px}html{-moz-user-select:none;user-select:none;-webkit-user-select:none}', ""]), e.exports = k
        },
        33816: function(e, t, i) {
            var c = i(31601),
                n = i(76314)(c);
            n.push([e.id, '.login-loader{display:flex;align-items:center}.login-loader__logo{height:42px;width:140px;margin-bottom:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 auto;margin-bottom:30px}.login-loader__text{margin-left:44px;color:#fff;font-size:20px}.sk-folding-cube{margin:20px auto;width:40px;height:40px;position:relative;transform:rotateZ(45deg)}.sk-folding-cube .sk-cube{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.sk-folding-cube .sk-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;animation:sk-foldCubeAngle 2.4s infinite linear both;transform-origin:100% 100%}.sk-folding-cube .sk-cube2{transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube .sk-cube3{transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube .sk-cube4{transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube .sk-cube2:before{animation-delay:.3s}.sk-folding-cube .sk-cube3:before{animation-delay:.6s}.sk-folding-cube .sk-cube4:before{animation-delay:.9s}@keyframes sk-foldCubeAngle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0deg);opacity:1}90%,100%{transform:perspective(140px) rotateY(180deg);opacity:0}}', ""]), e.exports = n
        },
        55790: function(e, t, i) {
            var c = i(31601),
                n = i(76314)(c);
            n.push([e.id, '.mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…lsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K");background-color:#009688}.not-found{position:fixed;height:100%;width:100%;left:0;top:0;min-width:320px;overflow:hidden}.pulse-animation-enter-active{animation-duration:350ms;animation-name:pulse-animation}.not-found{display:flex;align-items:center;justify-content:center}.not-found__box{width:85%;min-height:40%;max-height:90%;margin:auto;overflow:auto;display:table;text-align:center;color:#fff;background:rgba(0,0,0,.12);border-radius:2px}@media only screen and (min-width: 0px)and (max-width: 639px){.not-found__box{width:95%}}.not-found__box>:not(:last-child){margin-bottom:40px}.not-found__box__header{font-size:43px;text-align:center;font-weight:bold;display:table-cell;vertical-align:middle}', ""]), e.exports = n
        },
        3633: function(e, t, i) {
            var c = i(31601),
                n = i(76314)(c);
            n.push([e.id, '.mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…lsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K");background-color:#009688}.not-supported{position:fixed;height:100%;width:100%;left:0;top:0;min-width:320px;overflow:hidden}.pulse-animation-enter-active{animation-duration:350ms;animation-name:pulse-animation}.not-supported__header-logo{float:left;clear:left;position:absolute;height:36px;width:140px;margin:8px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.not-supported__center-block{width:822px;height:478px;border-radius:2px;color:#fff;background:rgba(0,0,0,.12);overflow:auto;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}@media only screen and (min-width: 450px)and (max-width: 821px){.not-supported__center-block{width:450px;height:620px}}@media only screen and (min-width: 0px)and (max-width: 449px){.not-supported__center-block{width:306px;height:620px}}.not-supported__center-block__header{text-align:center;font-size:30px;margin-left:16px;margin-right:16px;margin-top:93px;margin-bottom:12px}.not-supported__center-block__header-desc{text-align:center;font-size:22px;margin-left:16px;margin-right:16px;margin-bottom:32px}.not-supported__center-block__links{display:block;text-align:center;font-size:0;margin-left:16px;margin-right:16px;margin-bottom:72px}.not-supported__center-block__link{position:relative;display:inline-block;width:223px;height:61px;border-radius:2px;background-color:#fff;text-decoration:none;margin-left:25px;margin-right:25px;margin-top:20px;margin-bottom:20px}.not-supported__center-block__link:hover,.not-supported__center-block__link:focus{box-shadow:0 3px 6px rgba(0,0,0,.24)}.not-supported__center-block__link-header{float:left;font-size:18px;text-align:center;line-height:22px;color:rgba(0,0,0,.87)}.not-supported__center-block__link-desc{font-size:12px;text-align:center;line-height:14px;color:rgba(0,0,0,.54);margin-bottom:10px}.not-supported__center-block__link-logo{height:20px;width:20px;float:left;display:block;text-align:center;line-height:22px;margin-right:8px}.vertical-align{height:22px;display:inline-block;margin:10px;margin-bottom:5px}', ""]), e.exports = n
        },
        1605: function(e, t, i) {
            var c = i(31601),
                n = i(76314)(c);
            n.push([e.id, '.mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…lsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K");background-color:#009688}.router-container{position:fixed;height:100%;width:100%;left:0;top:0;min-width:320px;overflow:hidden}.pulse-animation-enter-active{animation-duration:350ms;animation-name:pulse-animation}.router-container{display:flex}.router-container__logo{margin:auto}.router-container--no-drop,.router-container--no-drop *{cursor:no-drop !important;-webkit-user-select:none;-moz-user-select:none;user-select:none}.router-container__notifications{position:fixed;bottom:0}.router-container__notifications.router-container__notifications--offseted{bottom:48px}.mdl-snackbar{min-height:0 !important}.router-container--ripple-disabled .mdl-button__ripple-container{display:none}.main-screen{width:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;overflow:auto}.main-screen::-webkit-scrollbar{width:8px;background:rgba(0,0,0,.15);margin:0px 0px 0px 0px}.main-screen::-webkit-scrollbar-button:vertical:decrement{background:rgba(0,0,0,0);height:8px}.main-screen::-webkit-scrollbar-button:vertical:increment{background:rgba(0,0,0,0);height:8px}.main-screen::-webkit-scrollbar-thumb{min-height:32px;background:#999;border-radius:2px;background-clip:content-box}.router-container__snackbar .mdc-snackbar__surface{background-color:#f03a46}', ""]), e.exports = n
        },
        66505: function(e, t, i) {
            "use strict";
            i.d(t, {
                A: function() {
                    return r
                }
            });
            var c = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "login-loader",
                    attrs: {
                        id: "login-loader"
                    }
                }, [e._m(0), e._v(" "), t("p", {
                    staticClass: "login-loader__text"
                }, [e._v("\n    " + e._s(e.gettext("Connecting...")) + "\n  ")])])
            };
            c._withStripped = !0;
            var n = i(50678),
                o = {
                    name: "LoginLoader",
                    data: () => ({
                        logoWhiteIcon: n
                    })
                },
                r = (i(53943), (0, i(14486).A)(o, c, [function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "sk-folding-cube"
                    }, [t("div", {
                        staticClass: "sk-cube1 sk-cube"
                    }), e._v(" "), t("div", {
                        staticClass: "sk-cube2 sk-cube"
                    }), e._v(" "), t("div", {
                        staticClass: "sk-cube4 sk-cube"
                    }), e._v(" "), t("div", {
                        staticClass: "sk-cube3 sk-cube"
                    })])
                }], !1, null, null, null).exports)
        },
        84449: function(e, t, i) {
            var c = i(38174);
            c.__esModule && (c = c.default), "string" == typeof c && (c = [
                [e.id, c, ""]
            ]), c.locals && (e.exports = c.locals);
            (0, i(70534).A)("f7a19578", c, !1, {})
        },
        53943: function(e, t, i) {
            var c = i(33816);
            c.__esModule && (c = c.default), "string" == typeof c && (c = [
                [e.id, c, ""]
            ]), c.locals && (e.exports = c.locals);
            (0, i(70534).A)("91ec28ac", c, !1, {})
        },
        64001: function(e, t, i) {
            var c = i(55790);
            c.__esModule && (c = c.default), "string" == typeof c && (c = [
                [e.id, c, ""]
            ]), c.locals && (e.exports = c.locals);
            (0, i(70534).A)("512274a2", c, !1, {})
        },
        41310: function(e, t, i) {
            var c = i(3633);
            c.__esModule && (c = c.default), "string" == typeof c && (c = [
                [e.id, c, ""]
            ]), c.locals && (e.exports = c.locals);
            (0, i(70534).A)("7fde4c2c", c, !1, {})
        },
        13648: function(e, t, i) {
            var c = i(1605);
            c.__esModule && (c = c.default), "string" == typeof c && (c = [
                [e.id, c, ""]
            ]), c.locals && (e.exports = c.locals);
            (0, i(70534).A)("6d665b7d", c, !1, {})
        },
        92057: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/83bebaf37c09c7e1c3ee.woff"
        },
        65783: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/988a1a31c4f20d1a34a9.ttf"
        },
        81167: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/adf8927712ad9553f482.ttf"
        },
        99951: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/17451a4c1cd55e33ac57.ttf"
        },
        85975: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/f10c8b462e89a98a712c.ttf"
        },
        25798: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/ce61b8b68994802f2e55.ttf"
        },
        86178: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/2eeb30ebc5bee9ac3d42.ttf"
        },
        11219: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/0fcd45fbfc419c42c8b9.ttf"
        },
        98763: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/102943405e853bda70b7.ttf"
        },
        85974: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/6bede58e856278b0f8f1.ttf"
        },
        35075: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/2745c061dfc318ec57da.ttf"
        },
        2075: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/e08c15f16efebd23d007.ttf"
        },
        16031: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/fonts/a8a1f3b102509358ac36.ttf"
        },
        50678: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2051 2327 140 41.268"><defs><style>.a,.b{fill:#fff;}.a{fill-rule:evenodd;}</style></defs><g transform="translate(2049.152 2325.81)"><g transform="translate(1.848 1.19)"><path class="a" d="M14.788,36.8V24.417a54.075,54.075,0,0,0,8.919-6.589c.2-.2.066-.732,0-.932a20.352,20.352,0,0,1-2-8.254c0-1.53,0-4.526,3.859-4.526V1.19c-2.331,0-6.855.938-6.855,7.451a22.448,22.448,0,0,0,1.794,8.126c-1.192,1.063-2.524,2-3.79,2.921a2.83,2.83,0,0,1-.73-.527,23.118,23.118,0,0,0,1.461-6.8c0-1.128,0-6.785-6.184-6.785s-6.194,5.324-6.194,6.785a19.834,19.834,0,0,0,1.461,6.8c-.86.86-3.994,2.459-4.252,2.727a1.9,1.9,0,0,0-.333,1.868c3.326,11.84,12.836,18.7,23.623,18.7v-3A21.02,21.02,0,0,1,14.788,36.8Zm-2-16.774c.133.266.2.533,1.664,1.731-.466.266-.932.6-1.4.866a1.237,1.237,0,0,0-.666,1.132V34.868A24.647,24.647,0,0,1,5,23.752c.732-.466,2.2-1.331,3.062-2A5.345,5.345,0,0,0,9.8,20.024a.92.92,0,0,0,0-.732A18.287,18.287,0,0,1,8.065,12.37c0-1.4,0-3.794,3.195-3.794,3.262,0,3.262,2.529,3.262,3.794a20,20,0,0,1-1.731,6.922A.7.7,0,0,0,12.791,20.024Z" transform="translate(-1.848 -1.19)"/><path class="a" d="M34.392,39.46v3c10.786,0,20.3-6.861,23.624-18.7a1.9,1.9,0,0,0-.333-1.868c-.258-.268-3.393-1.868-4.252-2.727a19.831,19.831,0,0,0,1.461-6.8c0-1.461,0-6.785-6.194-6.785s-6.184,5.657-6.184,6.785a23.1,23.1,0,0,0,1.461,6.8,2.842,2.842,0,0,1-.73.527c-1.267-.925-2.6-1.858-3.79-2.921a22.463,22.463,0,0,0,1.794-8.126c0-6.513-4.523-7.45-6.855-7.451V4.116c3.859,0,3.859,3,3.859,4.526a20.353,20.353,0,0,1-2,8.254c-.066.2-.2.732,0,.932a54.156,54.156,0,0,0,8.919,6.589V36.8A21.04,21.04,0,0,1,34.392,39.46ZM47.17,19.292a20,20,0,0,1-1.731-6.922c0-1.265,0-3.794,3.262-3.794,3.195,0,3.195,2.4,3.195,3.794a18.3,18.3,0,0,1-1.731,6.922.92.92,0,0,0,0,.732A5.354,5.354,0,0,0,51.9,21.755c.865.666,2.33,1.532,3.062,2A24.654,24.654,0,0,1,47.57,34.868V23.752a1.237,1.237,0,0,0-.666-1.132c-.466-.266-.932-.6-1.4-.866,1.464-1.2,1.531-1.464,1.664-1.731A.7.7,0,0,0,47.17,19.292Z" transform="translate(-11.282 -1.19)"/></g><path class="b" d="M158.795,23.841a1.668,1.668,0,0,1,1.785,1.6V37.134a1.672,1.672,0,0,1-1.785,1.785v3.2a5.392,5.392,0,0,0,3.754-1.539,5.681,5.681,0,0,0,1.17-1.723,5.76,5.76,0,0,0,.431-2.091V25.81a6.385,6.385,0,0,0-.431-2.154,6.55,6.55,0,0,0-1.17-1.723,6.241,6.241,0,0,0-1.661-1.17,5.992,5.992,0,0,0-2.093-.369Zm-1.785,1.6a1.634,1.634,0,0,1,1.785-1.6V20.395h0a5.51,5.51,0,0,0-2.091.369,4.747,4.747,0,0,0-1.662,1.17,6.586,6.586,0,0,0-1.17,1.723,6.348,6.348,0,0,0-.369,2.154V36.765a5.754,5.754,0,0,0,.369,2.091,5.7,5.7,0,0,0,1.17,1.723,3.969,3.969,0,0,0,1.662,1.108,4.546,4.546,0,0,0,2.091.43h0v-3.2a1.71,1.71,0,0,1-1.785-1.785Z" transform="translate(-43.963 -5.567)"/><path class="b" d="M146.969,15.758c0-3.077-1.846-5.477-5.292-5.416-3.078.062-4.984,2.462-4.984,5.416V33.85c0,3.507,2.154,5.354,4.984,5.354,3.323,0,5.292-1.539,5.292-5.354V28.311h-3.508V34.28c0,2.091-3.261,2.03-3.261,0V15.388a1.634,1.634,0,0,1,3.261,0v5.785h3.508Z" transform="translate(-39.089 -2.653)"/><path class="b" d="M124.565,23.656a1.634,1.634,0,0,1,1.785,1.6v5.108h-1.785V33.44h5.354V25.81a5,5,0,0,0-.43-2.154,4.6,4.6,0,0,0-1.108-1.723,5.66,5.66,0,0,0-1.723-1.17,5.744,5.744,0,0,0-2.093-.369v3.262Zm0,18.462V38.733a1.643,1.643,0,0,0,1.785-1.785V35.594h3.569v1.17a4.721,4.721,0,0,1-.43,2.091,4.827,4.827,0,0,1-2.831,2.831A4.724,4.724,0,0,1,124.565,42.118Zm-1.723-16.862a1.582,1.582,0,0,1,1.723-1.6V20.395h0a5.984,5.984,0,0,0-2.092.369,6.226,6.226,0,0,0-1.662,1.17,5.164,5.164,0,0,0-1.107,1.723,6.367,6.367,0,0,0-.43,2.154V36.765a5.757,5.757,0,0,0,.43,2.091,4.609,4.609,0,0,0,1.107,1.723,5.4,5.4,0,0,0,3.754,1.539h0V38.733a1.7,1.7,0,0,1-1.723-1.785V33.441h1.723V30.365h-1.723Z" transform="translate(-34.04 -5.567)"/><path class="b" d="M112.327,42.033V20.741h-3.508V38.464h-.553a9,9,0,0,1-1.292,0c-1.416-.062-1.662-1.169-1.723-2.769V20.741h-3.57v16a4.82,4.82,0,0,0,.431,2.031,6.234,6.234,0,0,0,1.17,1.662A4.752,4.752,0,0,0,105,41.6a4.451,4.451,0,0,0,2.031.43Z" transform="translate(-28.94 -5.668)"/><path class="b" d="M170.836,20.741V42.033h3.507V24.249c3.016-.123,3.446.369,3.446,2.708V42.033h3.631v-16a5.158,5.158,0,0,0-5.354-5.292Z" transform="translate(-48.987 -5.668)"/><path class="b" d="M89.635,26.1V42.033h3.508V27.141c0-2.4.923-2.954,3.569-2.831v-3.57H94.927a5.4,5.4,0,0,0-3.693,1.538A7.05,7.05,0,0,0,90.065,24,6.066,6.066,0,0,0,89.635,26.1Z" transform="translate(-25.448 -5.668)"/><path class="b" d="M82.83,39.044V14h4.184V10.429H75.076V14h4.185V39.044Z" transform="translate(-21.228 -2.678)"/><path class="b" d="M191.9,39.069V21.162h2.338V17.593H191.9V16.054c0-1.538.615-1.907,2.031-2.031h1.476V10.515h-1.785a5.4,5.4,0,0,0-3.754,1.539,4.618,4.618,0,0,0-1.108,1.723,5.445,5.445,0,0,0-.43,2.031v1.785h-1.723v3.569h1.723V39.069Z" transform="translate(-53.559 -2.703)"/></g></svg>'
        },
        53505: function(e, t, i) {
            "use strict";
            e.exports = i.p + "assets/images/21406ff3acd5097fe07b.png"
        },
        42634: function() {}
    },
    r = {};

function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = r[e] = {
        id: e,
        loaded: !1,
        exports: {}
    };
    return o[e].call(i.exports, i, i.exports, a), i.loaded = !0, i.exports
}
a.m = o, e = [], a.O = function(t, i, c, n) {
        if (!i) {
            var o = 1 / 0;
            for (s = 0; s < e.length; s++) {
                i = e[s][0], c = e[s][1], n = e[s][2];
                for (var r = !0, d = 0; d < i.length; d++)(!1 & n || o >= n) && Object.keys(a.O).every((function(e) {
                    return a.O[e](i[d])
                })) ? i.splice(d--, 1) : (r = !1, n < o && (o = n));
                if (r) {
                    e.splice(s--, 1);
                    var l = c();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        n = n || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > n; s--) e[s] = e[s - 1];
        e[s] = [i, c, n]
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, {
            a: t
        }), t
    }, i = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, a.t = function(e, c) {
        if (1 & c && (e = this(e)), 8 & c) return e;
        if ("object" == typeof e && e) {
            if (4 & c && e.__esModule) return e;
            if (16 & c && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        a.r(n);
        var o = {};
        t = t || [null, i({}), i([]), i(i)];
        for (var r = 2 & c && e;
            "object" == typeof r && !~t.indexOf(r); r = i(r)) Object.getOwnPropertyNames(r).forEach((function(t) {
            o[t] = function() {
                return e[t]
            }
        }));
        return o.default = function() {
            return e
        }, a.d(n, o), n
    }, a.d = function(e, t) {
        for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, a.f = {}, a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, i) {
            return a.f[i](e, t), t
        }), []))
    }, a.u = function(e) {
        return "chunks/" + ({
            76: "locale/es",
            91: "locale/vi",
            147: "locale/fa",
            337: "locale/en",
            340: "locale/pl",
            384: "locale/fr",
            478: "locale/zh",
            523: "locale/ru",
            558: "locale/tr",
            578: "locale/cs",
            678: "locale/zht",
            783: "locale/ja",
            804: "locale/pt",
            813: "participants",
            859: "supported",
            861: "locale/he",
            918: "locale/ko",
            936: "chats",
            939: "locale/be",
            977: "locale/de",
            980: "locale/uk",
            991: "locale/it"
        } [e] || e) + ".bundle-5.4.3.10.js"
    }, a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c = {}, n = "@tc-server/webrtc-client:", a.l = function(e, t, i, o) {
        if (c[e]) c[e].push(t);
        else {
            var r, d;
            if (void 0 !== i)
                for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                    var m = l[s];
                    if (m.getAttribute("src") == e || m.getAttribute("data-webpack") == n + i) {
                        r = m;
                        break
                    }
                }
            r || (d = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, a.nc && r.setAttribute("nonce", a.nc), r.setAttribute("data-webpack", n + i), r.src = e), c[e] = [t];
            var p = function(t, i) {
                    r.onerror = r.onload = null, clearTimeout(u);
                    var n = c[e];
                    if (delete c[e], r.parentNode && r.parentNode.removeChild(r), n && n.forEach((function(e) {
                            return e(i)
                        })), t) return t(i)
                },
                u = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
            r.onerror = p.bind(null, r.onerror), r.onload = p.bind(null, r.onload), d && document.head.appendChild(r)
        }
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = function(e) {
        return e.paths = [], e.children || (e.children = []), e
    }, a.p = "/webrtc/",
    function() {
        a.b = document.baseURI || self.location.href;
        var e = {
            792: 0
        };
        a.f.j = function(t, i) {
            var c = a.o(e, t) ? e[t] : void 0;
            if (0 !== c)
                if (c) i.push(c[2]);
                else {
                    var n = new Promise((function(i, n) {
                        c = e[t] = [i, n]
                    }));
                    i.push(c[2] = n);
                    var o = a.p + a.u(t),
                        r = new Error;
                    a.l(o, (function(i) {
                        if (a.o(e, t) && (0 !== (c = e[t]) && (e[t] = void 0), c)) {
                            var n = i && ("load" === i.type ? "missing" : i.type),
                                o = i && i.target && i.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", r.name = "ChunkLoadError", r.type = n, r.request = o, c[1](r)
                        }
                    }), "chunk-" + t, t)
                }
        }, a.O.j = function(t) {
            return 0 === e[t]
        };
        var t = function(t, i) {
                var c, n, o = i[0],
                    r = i[1],
                    d = i[2],
                    l = 0;
                if (o.some((function(t) {
                        return 0 !== e[t]
                    }))) {
                    for (c in r) a.o(r, c) && (a.m[c] = r[c]);
                    if (d) var s = d(a)
                }
                for (t && t(i); l < o.length; l++) n = o[l], a.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                return a.O(s)
            },
            i = self.webpackChunk_tc_server_webrtc_client = self.webpackChunk_tc_server_webrtc_client || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
    }();
var d = a.O(void 0, [896, 96], (function() {
    return a(86281)
}));
d = a.O(d)
}();