(function () {

    var sys = cc.sys;
    var platform = sys.platform;

    // Only android and iOS support cocos analytics
    if (platform === sys.ANDROID) {
        if (!JavascriptJavaBridge) return;
        let jsBridge = new JavascriptJavaBridge();
        cocosAnalytics = {};

        // var cls_CAAccount = "com/cocos/analytics/CAAccount";
        // var cls_CAAgent = "com/cocos/analytics/CAAgent";
        // var cls_CAEvent = "com/cocos/analytics/CAEvent";
        // var cls_CAItem = "com/cocos/analytics/CAItem";
        // var cls_CALevels = "com/cocos/analytics/CALevels";
        // var cls_CAPayment = "com/cocos/analytics/CAPayment";
        // var cls_CATask = "com/cocos/analytics/CATask";
        // var cls_CAVirtual = "com/cocos/analytics/CAVirtual";
        // var cls_CACustomEvent = "com/cocos/analytics/CACustomEvent";
        // var cls_CAAdvertising = "com/cocos/analytics/CAAdvertising";
        var cls_ServiceAnalytics = "com/cocos/service/ServiceAnalytics";

        cocosAnalytics.init = function (info) {
            if (info && info.appID) {
                return jsBridge.callStaticMethod(
                    cls_ServiceAnalytics,
                    "initAnalytics",
                    "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J",
                    info.appID,
                    info.storeID,
                    info.engine,
                    info.callNumber
                );
            } else {
                console.error("The arguments passed to cocosAnalytics.init are wrong!");
                return -1;
            }
        };
        cocosAnalytics.isInited = function (id) {
            if (id) {
                return jsBridge.callStaticMethod(cls_ServiceAnalytics, "isInited","(J)Z", id);
            } else {
                console.error(
                    "The arguments passed to cocosAnalytics.isInited are wrong!"
                );
            }
        };

        cocosAnalytics.enableDebug = function (info) {
            console.log(info);
            console.log(info.id);
            console.log(info.enabled);
            if (info && info.id && info.enabled) {
                jsBridge.callStaticMethod(
                    cls_ServiceAnalytics,
                    "enableDebug",
                    "(JZ)V",
                    info.id,
                    info.enabled
                );
            } else {
                console.error(
                    "The arguments passed to cocosAnalytics.enableDebug are wrong!"
                );
            }
            
        };

        cocosAnalytics.CAAccount = {
            loginStart: function (info) {
                if (info && info.id && info.channel) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "loginStart",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.channel);
                } else if (typeof(info) == "number") {
                    jsBridge.callStaticMethod(cls_ServiceAnalytics, "loginStart", info, "(J)V");
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.loginStart are wrong!"
                    );
                }
            },

            loginSuccess: function (info) {
                if (info && info.id && info.userID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "loginSuccess",
                        "(JLjava/lang/String;IILjava/lang/String;)V",
                        info.id,
                        info.userID,
                        info.age || 0,
                        info.sex || 0,
                        info.channel || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.loginSuccess are wrong!"
                    );
                }
            },

            loginFailed: function (info) {
                if (info && info.id) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "loginFailed",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.reason || "",
                        info.channel || "",
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.loginFailed are wrong!"
                    );
                }
            },

            logout: function (id) {
                console.log("call logout = ", id);
                if (typeof(id) == "number") {
                    jsBridge.callStaticMethod(cls_ServiceAnalytics, "logout", "(J)V", id);
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.logout are wrong!"
                    );
                }
            },

            setAccountType: function (info) {
                if (info && info.id && info.type) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "setAccountType",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.type
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.setAccountType are wrong!"
                    );
                }
            },

            setAge: function (info) {
                if (info && info.id && info.age) {
                    jsBridge.callStaticMethod(cls_ServiceAnalytics, "setAge", "(JI)V",info.id, age);
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setAge is wrong!"
                    );
                }
            },

            setGender: function (info) {
                if (info && info.id && info.gender) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "setGender",
                        "(JI)V",
                        info.id,
                        info.gender
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setGender is wrong!"
                    );
                }
            },

            setLevel: function (info) {
                if (info && info.id && info.level) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "setLevel",
                        "(JI)V",
                        info.id,
                        info.level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setLevel is wrong!"
                    );
                }
            },

            createRole: function (info) {
                if (
                    info &&
                    info.id &&
                    info.roleID &&
                    info.userName &&
                    info.race &&
                    info["class"] &&
                    info.gameServer
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "createRole",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.roleID,
                        info.userName,
                        info.race,
                        info["class"],
                        info.gameServer
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.createRole are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAEvent = {
            onEvent: function (info) {
                if (info && info.id && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onEvent",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEvent is wrong!"
                    );
                }
            },

            onEventStart: function (info) {
                if (info && info.id && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onEventStart",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEventStart is wrong!"
                    );
                }
            },

            onEventEnd: function (info) {
                if (info && info.id && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onEventEnd",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEventEnd is wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAPayment = {
            payBegin: function (info) {
                if (
                    info &&
                    info.id &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "payBegin",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payBegin are wrong!"
                    );
                }
            },

            paySuccess: function (info) {
                if (
                    info &&
                    info.id,
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "paySuccess",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.paySuccess are wrong!"
                    );
                }
            },

            payFailed: function (info) {
                if (
                    info &&
                    info.id &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "payFailed",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || "",
                        info.reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payFailed are wrong!"
                    );
                }
            },

            payCanceled: function (info) {
                if (
                    info &&
                    info.id &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "payCanceled",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payCanceled are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CALevels = {
            begin: function (info) {
                if (info && info.id && info.level) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "begin",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CALevels.begin is wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.level) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "levelComplete",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CALevels.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.id && info.level) {
                    info.reason = info.reason || "";
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "levelFailed",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.level,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CALevels.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CATaskType = {
            GuideLine: 1,
            MainLine: 2,
            BranchLine: 3,
            Daily: 4,
            Activity: 5,
            Other: 100
        };

        cocosAnalytics.CATask = {
            begin: function (info) {
                if (info && info.id && info.taskID && info.type) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "begin",
                        "(JLjava/lang/String;I)V",
                        info.id,
                        info.taskID,
                        info.type
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CATask.begin are wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.id && info.taskID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "taskComplete",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.taskID
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CATask.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.id && info.taskID) {
                    info.reason = info.reason || "";
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "taskFailed",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.taskID,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CATask.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAItem = {
            buy: function (info) {
                if (
                    info &&
                    info.id &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.virtualCoin &&
                    info.virtualType &&
                    info.consumePoint
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "buy",
                        "(JLjava/lang/String;Ljava/lang/String;IILjava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.virtualCoin,
                        info.virtualType,
                        info.consumePoint
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.buy are wrong!"
                    );
                }
            },

            get: function (info) {
                if (
                    info &&
                    info.id &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.reason
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "getItem",
                        "(JLjava/lang/String;Ljava/lang/String;ILjava/lang/String;)V",
                        info.id,
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.get are wrong!"
                    );
                }
            },

            consume: function (info) {
                if (
                    info &&
                    info.id &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.reason
                ) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "consumeItem",
                        "(JLjava/lang/String;Ljava/lang/String;ILjava/lang/String;)V",
                        info.id,
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.consume are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAVirtual = {
            setVirtualNum: function (info) {
                if (info && info.id && info.type && info.count) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "setVirtualNum",
                        "(JLjava/lang/String;J)V",
                        info.id,
                        info.type,
                        info.count
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.setVirtualNum are wrong!"
                    );
                }
            },

            get: function (info) {
                if (info && info.id && info.type && info.count && info.reason) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "getVirtual",
                        "(JLjava/lang/String;JLjava/lang/String;)V",
                        info.id,
                        info.type,
                        info.count,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.get are wrong!"
                    );
                }
            },

            consume: function (info) {
                if (info && info.id && info.type && info.count && info.reason) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "consumeVirtual",
                        "(JLjava/lang/String;JLjava/lang/String;)V",
                        info.id,
                        info.type,
                        info.count,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.consume are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAAdvertising = {
            begin: function (info) {
                if (info && info.id && info.adID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "beginAdvertising",
                        "(JLjava/lang/String;)V",
                        info.id,
                        info.adID
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAdvertising.begin are wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.id && info.adID && info.timeLong && info.profit) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "completeAdvertising",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.adID,
                        info.timeLong,
                        info.profit
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAdvertising.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.id && info.adID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "failedAdvertising",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        info.id,
                        info.adID,
                        info.reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAdvertising.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CACustomEvent = {
            onStarted: function (id, eventID, eventData) {
                if (id && eventID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onStarted",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        id,
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                    console.log(JSON.stringify(eventData || {}))
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onStarted are wrong!"
                    );
                }
            },

            onSuccess: function (id, eventID, eventData) {
                if (id && eventID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onSuccess",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        id,
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CACustomEvent.onSuccess is wrong!"
                    );
                }
            },

            onCancelled: function (id, eventID, eventData) {
                if (id && eventID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onCancelled",
                        "(JLjava/lang/String;Ljava/lang/String;)V",
                        id,
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onCancelled are wrong!"
                    );
                }
            },

            onFailed: function (id, eventID, eventData, reason) {
                if (id && eventID) {
                    jsBridge.callStaticMethod(
                        cls_ServiceAnalytics,
                        "onFailed",
                        "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
                        id,
                        eventID,
                        JSON.stringify(eventData || {}),
                        reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onFailed are wrong!"
                    );
                }
            }
        };
    } else if (platform === sys.IPAD || platform === sys.IPHONE) {
        if (!JavaScriptObjCBridge) return;
        let jsBridge = new JavaScriptObjCBridge();
        cocosAnalytics = {};

        var cls_CAAccount = "CAAccount";
        var cls_CAAgent = "CAAgent";
        var cls_CAEvent = "CAEvent";
        var cls_CAItem = "CAItem";
        var cls_CALevels = "CALevels";
        var cls_CAPayment = "CAPeiment";
        var cls_CATask = "CATask";
        var cls_CAVirtual = "CAVirtual";
        var cls_CAVirtual = "CAVirtual";
        var cls_CACustomEvent = "CACustomEvent";
        var cls_CAAdvertising = "CAAdvertising";

        cocosAnalytics.init = function (info) {
            if (info && info.appID) {
                jsBridge.callStaticMethod(
                    cls_CAAgent,
                    "init:storeID:engine:callNumber:",
                    info.appID,
                    info.storeID || "",
                    info.engine || "",
                    info.callNumber || ""
                );
            } else {
                console.error("The arguments passed to cocosAnalytics.init are wrong!");
            }
        };

        cocosAnalytics.isInited = function () {
            return jsBridge.callStaticMethod(
                cls_CAAgent,
                "isInited"
            );
        };
        cocosAnalytics.enableDebug = function (enabled) {
            jsBridge.callStaticMethod(
                cls_CAAgent,
                "enableDebug:",
                enabled
            );
        };

        cocosAnalytics.CAAccount = {
            loginStart: function (info) {
                if (info && info.channel) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "loginStart:",
                        info.channel
                    );
                } else {
                    jsBridge.callStaticMethod(cls_CAAccount, "loginStart");
                }
            },

            loginSuccess: function (info) {
                if (info && info.userID) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "loginSuccess:age:sex:channel:",
                        info.userID,
                        info.age || 0,
                        info.sex || 0,
                        info.channel || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.loginSuccess are wrong!"
                    );
                }
            },

            loginFailed: function (info) {
                var reason = info;
                var channel = "";

                if (info && typeof (reason) != "string") {
                    var reason = info.reason;
                    var channel = info.channel;
                }

                jsBridge.callStaticMethod(
                    cls_CAAccount,
                    "loginFailed:channel:",
                    reason || "",
                    channel || ""
                );
            },

            logout: function () {
                jsBridge.callStaticMethod(
                    cls_CAAccount,
                    "logout"
                );
            },

            setAccountType: function (type) {
                if (type) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "setAccountType:",
                        type
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.setAccountType are wrong!"
                    );
                }
            },

            setAge: function (age) {
                if (age) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "setAge:",
                        age
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setAge is wrong!"
                    );
                }
            },

            setGender: function (gender) {
                if (gender) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "setGender:",
                        gender
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setGender is wrong!"
                    );
                }
            },

            setLevel: function (level) {
                if (level) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "setLevel:",
                        level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAccount.setLevel is wrong!"
                    );
                }
            },

            createRole: function (info) {
                if (
                    info &&
                    info.roleID &&
                    info.userName &&
                    info.race &&
                    info["class"] &&
                    info.gameServer
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAAccount,
                        "createRole:userName:race:roleClass:gameServer:",
                        info.roleID,
                        info.userName,
                        info.race,
                        info["class"],
                        info.gameServer
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAccount.createRole are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAEvent = {
            onEvent: function (info) {
                if (info && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_CAEvent,
                        "onEvent:",
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEvent is wrong!"
                    );
                }
            },

            onEventStart: function (info) {
                if (info && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_CAEvent,
                        "onEventStart:",
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEventStart is wrong!"
                    );
                }
            },

            onEventEnd: function (info) {
                if (info && info.eventName) {
                    jsBridge.callStaticMethod(
                        cls_CAEvent,
                        "onEventEnd:",
                        info.eventName
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAEvent.onEventEnd is wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAPayment = {
            payBegin: function (info) {
                if (
                    info &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAPayment,
                        "payBegin:orderID:payType:subjectID:currencyType:virtualCurrencyAmount:accountID:partner:gameServer:level:mission:",
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payBegin are wrong!"
                    );
                }
            },

            paySuccess: function (info) {
                if (
                    info &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAPayment,
                        "paySuccess:orderID:payType:subjectID:currencyType:virtualCurrencyAmount:accountID:partner:gameServer:level:mission:",
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.paySuccess are wrong!"
                    );
                }
            },

            payFailed: function (info) {
                if (
                    info &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAPayment,
                        "payFailed:orderID:payType:subjectID:currencyType:virtualCurrencyAmount:accountID:partner:gameServer:level:mission:reason:",
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || "",
                        info.reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payFailed are wrong!"
                    );
                }
            },

            payCanceled: function (info) {
                if (
                    info &&
                    info.amount &&
                    info.orderID &&
                    info.payType &&
                    info.iapID &&
                    info.currencyType
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAPayment,
                        "payCanceled:orderID:payType:subjectID:currencyType:virtualCurrencyAmount:accountID:partner:gameServer:level:mission:",
                        info.amount,
                        info.orderID,
                        info.payType,
                        info.iapID,
                        info.currencyType,
                        info.virtualCurrencyAmount || "0",
                        info.accountID || "",
                        info.partner || "",
                        info.gameServer || "",
                        info.level || "0",
                        info.mission || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAPayment.payCanceled are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CALevels = {
            begin: function (info) {
                if (info && info.level) {
                    jsBridge.callStaticMethod(
                        cls_CALevels,
                        "begin:",
                        info.level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CALevels.begin is wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.level) {
                    jsBridge.callStaticMethod(
                        cls_CALevels,
                        "complete:",
                        info.level
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CALevels.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.level) {
                    info.reason = info.reason || "";
                    jsBridge.callStaticMethod(
                        cls_CALevels,
                        "failed:reason:",
                        info.level,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CALevels.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CATaskType = {
            GuideLine: 1,
            MainLine: 2,
            BranchLine: 3,
            Daily: 4,
            Activity: 5,
            Other: 100
        };

        cocosAnalytics.CATask = {
            begin: function (info) {
                if (info && info.taskID && info.type) {
                    jsBridge.callStaticMethod(
                        cls_CATask,
                        "begin:taskType:",
                        info.taskID,
                        info.type
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CATask.begin are wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.taskID) {
                    jsBridge.callStaticMethod(
                        cls_CATask,
                        "complete:",
                        info.taskID
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CATask.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.taskID) {
                    info.reason = info.reason || "";
                    jsBridge.callStaticMethod(
                        cls_CATask,
                        "failed:reason:",
                        info.taskID,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CATask.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAItem = {
            buy: function (info) {
                if (
                    info &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.virtualCoin &&
                    info.virtualType &&
                    info.consumePoint
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAItem,
                        "buy:type:count:virtualCoin:virtualType:consumePoint:",
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.virtualCoin,
                        info.virtualType,
                        info.consumePoint
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.buy are wrong!"
                    );
                }
            },

            get: function (info) {
                if (
                    info &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.reason
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAItem,
                        "get:type:count:reason:",
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.get are wrong!"
                    );
                }
            },

            consume: function (info) {
                if (
                    info &&
                    info.itemID &&
                    info.itemType &&
                    info.itemCount &&
                    info.reason
                ) {
                    jsBridge.callStaticMethod(
                        cls_CAItem,
                        "consume:type:count:reason:",
                        info.itemID,
                        info.itemType,
                        info.itemCount,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAItem.consume are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAVirtual = {
            setVirtualNum: function (info) {
                if (info && info.type && info.count) {
                    jsBridge.callStaticMethod(
                        cls_CAVirtual,
                        "setVirtualNum:count:",
                        info.type,
                        info.count
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.setVirtualNum are wrong!"
                    );
                }
            },

            get: function (info) {
                if (info && info.type && info.count && info.reason) {
                    jsBridge.callStaticMethod(
                        cls_CAVirtual,
                        "get:count:reason:",
                        info.type,
                        info.count,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.get are wrong!"
                    );
                }
            },

            consume: function (info) {
                if (info && info.type && info.count && info.reason) {
                    jsBridge.callStaticMethod(
                        cls_CAVirtual,
                        "consume:count:reason:",
                        info.type,
                        info.count,
                        info.reason
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAVirtual.consume are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CAAdvertising = {
            begin: function (info) {
                if (info && info.adID) {
                    jsBridge.callStaticMethod(
                        cls_CAAdvertising,
                        "begin:",
                        info.adID
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAdvertising.begin are wrong!"
                    );
                }
            },

            complete: function (info) {
                if (info && info.adID && info.timeLong && info.profit) {
                    jsBridge.callStaticMethod(
                        cls_CAAdvertising,
                        "complete:timeLong:profit:",
                        info.adID,
                        info.timeLong,
                        info.profit
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CAAdvertising.complete is wrong!"
                    );
                }
            },

            failed: function (info) {
                if (info && info.adID) {
                    jsBridge.callStaticMethod(
                        cls_CAAdvertising,
                        "failed:reason:",
                        info.adID,
                        info.reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CAAdvertising.failed are wrong!"
                    );
                }
            }
        };

        cocosAnalytics.CACustomEvent = {
            onStarted: function (eventID, eventData) {
                if (eventID) {
                    jsBridge.callStaticMethod(
                        cls_CACustomEvent,
                        "onStarted:eventBody:",
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onStarted are wrong!"
                    );
                }
            },

            onSuccess: function (eventID, eventData) {
                if (eventID) {
                    jsBridge.callStaticMethod(
                        cls_CACustomEvent,
                        "onSuccess:eventBody:",
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                } else {
                    console.error(
                        "The argument passed to cocosAnalytics.CACustomEvent.onSuccess is wrong!"
                    );
                }
            },

            onCancelled: function (eventID, eventData) {
                if (eventID) {
                    jsBridge.callStaticMethod(
                        cls_CACustomEvent,
                        "onCancelled:eventBody:",
                        eventID,
                        JSON.stringify(eventData || {})
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onCancelled are wrong!"
                    );
                }
            },

            onFailed: function (eventID, eventData, reason) {
                if (eventID) {
                    jsBridge.callStaticMethod(
                        cls_CACustomEvent,
                        "onFailed:eventBody:reason:",
                        eventID,
                        JSON.stringify(eventData || {}),
                        reason || ""
                    );
                } else {
                    console.error(
                        "The arguments passed to cocosAnalytics.CACustomEvent.onFailed are wrong!"
                    );
                }
            }
        };
    } else {
        // Empty implementation for other platforms
        cocosAnalytics = {};

        cocosAnalytics.init = function (info) {
            console.log("Cocos Analytics module isn't available on this platform!");
        };

        cocosAnalytics.isInited = function () {
            return false;
        };
        cocosAnalytics.enableDebug = function (enabled) {};

        cocosAnalytics.CAAccount = {
            loginStart: function () {},
            loginSuccess: function (info) {},
            loginFailed: function () {},
            logout: function (info) {},
            setAccountType: function (type) {},
            setAge: function (age) {},
            setGender: function (gender) {},
            setLevel: function (level) {},
            createRole: function (info) {}
        };

        cocosAnalytics.CAEvent = {
            onEvent: function (info) {},
            onEventStart: function (info) {},
            onEventEnd: function (info) {}
        };

        cocosAnalytics.CAPayment = {
            payBegin: function (info) {},
            paySuccess: function (info) {},
            payFailed: function (info) {},
            payCanceled: function (info) {}
        };

        cocosAnalytics.CALevels = {
            begin: function (info) {},
            complete: function (info) {},
            failed: function (info) {}
        };

        cocosAnalytics.CATaskType = {
            GuideLine: 1,
            MainLine: 2,
            BranchLine: 3,
            Daily: 4,
            Activity: 5,
            Other: 100
        };

        cocosAnalytics.CATask = {
            begin: function (info) {},
            complete: function (info) {},
            failed: function (info) {}
        };

        cocosAnalytics.CAItem = {
            buy: function (info) {},
            get: function (info) {},
            consume: function (info) {}
        };

        cocosAnalytics.CAVirtual = {
            setVirtualNum: function (info) {},
            get: function (info) {},
            consume: function (info) {}
        };

        cocosAnalytics.CAAdvertising = {
            begin: function (info) {},
            complete: function (info) {},
            failed: function (info) {}
        };

        cocosAnalytics.CACustomEvent = {
            onStarted: function (info) {},
            onSuccess: function (info) {},
            onCancelled: function (info) {},
            onFailed: function (info) {}
        };
    }
})();