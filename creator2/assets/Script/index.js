
const paymentInfo = {
  amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
  orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
  payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
  iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
  currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
  virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
  accountID: 'user1001',       // 消费的账号
  partner: '',                 // 账户渠道名称  例如：QQ、微信。
  gameServer: '艾欧尼亚',       // 玩家充值的区服。
  level: 10,                   // 玩家充值时的等级。
  mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。

  reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
};

const eventID = "事件1";        //事件ID（必填）可以任意填写, 不得超过30个字符

const eventFailedReason = "战斗异常"; //战斗失败原因

const eventValue = { //事件内容及标签可灵活自定义。后台根据事件内定义的标签进行相关统计和漏斗分析
  name: "突袭",
  player1: 1,
  player2: 1
};

var cocosAnalyticsID1 = -1;
var cocosAnalyticsID2 = -1;

if (CC_EDITOR) {
  if (!Editor.CocosService_caDemo) {
    Editor.CocosService_caDemo = true;
    Editor.log("这是一个简单的 Cocos Analytics 示例 Demo，通过本 Demo 您可以快速了解如何在客户端调用 Cocos Analytics 统计方法！");
    Editor.log("第一次使用请先在服务面板中开通 Cocos Analytics 服务，并在面板中设置自定义参数 store，点击保存");
    Editor.log("若需要在 Android 或 iOS 发布，请使用真机调试");
  }
}
cc.Class({
  extends: cc.Component,

  properties: {
    btnLoginStart: {
      default: null,
      type: cc.Button
    },
    btnLoginSuccess: {
      default: null,
      type: cc.Button
    },
    btnLoginFailed: {
      default: null,
      type: cc.Button
    },
    btnLogout: {
      default: null,
      type: cc.Button
    },
    btnPayBegin: {
      default: null,
      type: cc.Button
    },
    btnPaySuccess: {
      default: null,
      type: cc.Button
    },
    btnPayFailed: {
      default: null,
      type: cc.Button
    },
    btnPayCanceled: {
      default: null,
      type: cc.Button
    },
    btnEventOnStart: {
      default: null,
      type: cc.Button
    },
    btnEventOnSuccess: {
      default: null,
      type: cc.Button
    },
    btnEventOnCancelled: {
      default: null,
      type: cc.Button
    },
    btnEventOnFailed: {
      default: null,
      type: cc.Button
    },

    btnLoginStart2: {
      default: null,
      type: cc.Button
    },
    btnLoginSuccess2: {
      default: null,
      type: cc.Button
    },
    btnLoginFailed2: {
      default: null,
      type: cc.Button
    },
    btnLogout2: {
      default: null,
      type: cc.Button
    },
    btnPayBegin2: {
      default: null,
      type: cc.Button
    },
    btnPaySuccess2: {
      default: null,
      type: cc.Button
    },
    btnPayFailed2: {
      default: null,
      type: cc.Button
    },
    btnPayCanceled2: {
      default: null,
      type: cc.Button
    },
    btnEventOnStart2: {
      default: null,
      type: cc.Button
    },
    btnEventOnSuccess2: {
      default: null,
      type: cc.Button
    },
    btnEventOnCancelled2: {
      default: null,
      type: cc.Button
    },
    btnEventOnFailed2: {
      default: null,
      type: cc.Button
    },



    logListView: {
      default: null,
      type: cc.ScrollView
    },
    itemTemplate: {
      default: null,
      type: cc.Node
    },

    logs: []
  },

  // use this for initialization
  onLoad: function () {
    console.log("start test ...");
    console.dir(cocosAnalytics);
    // 初始化 , 注意 在调用其他任何方法之前 必须先初始化 SDK 一次。
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '639795912',
            storeID: '100009',
            engine: 'cocos',
            callNumber: '13647620853'
        };
        
        cocosAnalyticsID1 = cocosAnalytics.init(initArgs);
        
        var initArgs2 = {
            appID: '6397959145',
            storeID: '100000',
            engine: 'google',
            callNumber: '13947620853'
        };
        cocosAnalyticsID2 = cocosAnalytics.init(initArgs2);

        console.log("sdk id1: ",cocosAnalyticsID1);
        console.log("sdk id2: ",cocosAnalyticsID2);

        cocosAnalytics.enableDebug(
          {
            id:cocosAnalyticsID1,
            enabled:true
          }); //启用Debug输出模式，调试完成后可删除
          
        cocosAnalytics.enableDebug({
          id:cocosAnalyticsID2,
          enabled:true
        }); //启用Debug输出模式，调试完成后可删除
    }

  },

  // 开始登录
  loginStart: function () {
    this.printLog("btnLoginStart clicked");
    cocosAnalytics.CAAccount.loginStart({
      id: cocosAnalyticsID1,
      channel: '99999',   // 获客渠道，指获取该客户的广告渠道信息   
    });
  },

  // 登录成功
  loginSuccess: function () {
    this.printLog("btnLoginSuccess clicked");
    cocosAnalytics.CAAccount.loginSuccess({
      id: cocosAnalyticsID1,
      userID: 'dddddddd',
      age: 1,             // 年龄
      sex: 1,             // 性别：1为男，2为女，其它表示未知
      channel: '99999',   // 获客渠道，指获取该客户的广告渠道信息   
    });
  },

  // 登录失败
  loginFailed: function () {
    this.printLog("btnLoginFailed clicked");
    cocosAnalytics.CAAccount.loginFailed({
      id: cocosAnalyticsID1,
      reason: '密码错误', // 失败原因
      channel: '99999', 
    })
  },

  // 退出登录 （我们已经考虑和完善处理玩家异常登出操作）
  logout: function () {
    this.printLog("btnLogout clicked");
    cocosAnalytics.CAAccount.logout(cocosAnalyticsID1);
  },

  // 开始支付
  payBegin: function () {
    this.printLog("btnPayBegin clicked");
    cocosAnalytics.CAPayment.payBegin({
      id: cocosAnalyticsID1,
      amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
      orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
      payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
      iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
      currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
      virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
      accountID: 'user1001',       // 消费的账号
      partner: '',                 // 账户渠道名称  例如：QQ、微信。
      gameServer: '艾欧尼亚',       // 玩家充值的区服。
      level: 10,                   // 玩家充值时的等级。
      mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。

      reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
    });
  },

  // 支付成功
  paySuccess: function () {
    this.printLog("btnPaySuccess clicked");
    cocosAnalytics.CAPayment.paySuccess({
      id: cocosAnalyticsID1,
      amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
      orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
      payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
      iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
      currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
      virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
      accountID: 'user1001',       // 消费的账号
      partner: '',                 // 账户渠道名称  例如：QQ、微信。
      gameServer: '艾欧尼亚',       // 玩家充值的区服。
      level: 10,                   // 玩家充值时的等级。
      mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。

      reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
    });
  },

  // 支付失败
  payFailed: function () {
    this.printLog("btnPayFailed clicked");
    cocosAnalytics.CAPayment.payFailed({
      id: cocosAnalyticsID1,
      amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
      orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
      payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
      iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
      currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
      virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
      accountID: 'user1001',       // 消费的账号
      partner: '',                 // 账户渠道名称  例如：QQ、微信。
      gameServer: '艾欧尼亚',       // 玩家充值的区服。
      level: 10,                   // 玩家充值时的等级。
      mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。

      reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
    });
  },

  // 支付取消
  payCanceled: function () {
    this.printLog("btnPayCanceled clicked");
    cocosAnalytics.CAPayment.payCanceled({
      id: cocosAnalyticsID1,
      amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
      orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
      payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
      iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
      currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
      virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
      accountID: 'user1001',       // 消费的账号
      partner: '',                 // 账户渠道名称  例如：QQ、微信。
      gameServer: '艾欧尼亚',       // 玩家充值的区服。
      level: 10,                   // 玩家充值时的等级。
      mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。

      reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
    });
  },

  // 事件开始
  eventOnStarted: function () {
    this.printLog("btnEventOnStarted clicked");
    cocosAnalytics.CACustomEvent.onStarted(cocosAnalyticsID1,eventID, eventValue);
  },

  // 事件完成
  eventOnSuccess: function () {
    this.printLog("btnEventOnSuccess clicked");
    cocosAnalytics.CACustomEvent.onSuccess(cocosAnalyticsID1,eventID, eventValue);
  },

  // 事件取消
  eventOnCancelled: function () {
    this.printLog("btnEventOnCancelled clicked");
    cocosAnalytics.CACustomEvent.onCancelled(cocosAnalyticsID1, eventID, eventValue);
  },

  // 事件失败
  eventOnFailed: function () {
    this.printLog("btnEventOnFailed clicked");
    cocosAnalytics.CACustomEvent.onFailed(cocosAnalyticsID1, eventID, eventValue, eventFailedReason);
  },

    // 开始登录
    loginStart2: function () {
      this.printLog("btnLoginStart clicked");
      cocosAnalytics.CAAccount.loginStart({
        id: cocosAnalyticsID2,
        channel: '99999',   // 获客渠道，指获取该客户的广告渠道信息   
      });
    },
  
    // 登录成功
    loginSuccess2: function () {
      this.printLog("btnLoginSuccess clicked");
      cocosAnalytics.CAAccount.loginSuccess({
        id: cocosAnalyticsID2,
        userID: 'dddddddd',
        age: 1,             // 年龄
        sex: 1,             // 性别：1为男，2为女，其它表示未知
        channel: '99999',   // 获客渠道，指获取该客户的广告渠道信息   
      });
    },
  
    // 登录失败
    loginFailed2: function () {
      this.printLog("btnLoginFailed clicked");
      cocosAnalytics.CAAccount.loginFailed({
        id: cocosAnalyticsID2,
        reason: '密码错误', // 失败原因
        channel: '99999', 
      })
    },
  
    // 退出登录 （我们已经考虑和完善处理玩家异常登出操作）
    logout2: function () {
      this.printLog("btnLogout clicked");
      cocosAnalytics.CAAccount.logout(cocosAnalyticsID2);
    },
  
    // 开始支付
    payBegin2: function () {
      this.printLog("btnPayBegin clicked");
      cocosAnalytics.CAPayment.payBegin({
        id: cocosAnalyticsID2,
        amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
        orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
        payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
        iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
        currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
        virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
        accountID: 'user1001',       // 消费的账号
        partner: '',                 // 账户渠道名称  例如：QQ、微信。
        gameServer: '艾欧尼亚',       // 玩家充值的区服。
        level: 10,                   // 玩家充值时的等级。
        mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。
  
        reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
      });
    },
  
    // 支付成功
    paySuccess2: function () {
      this.printLog("btnPaySuccess clicked");
      cocosAnalytics.CAPayment.paySuccess({
        id: cocosAnalyticsID2,
        amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
        orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
        payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
        iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
        currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
        virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
        accountID: 'user1001',       // 消费的账号
        partner: '',                 // 账户渠道名称  例如：QQ、微信。
        gameServer: '艾欧尼亚',       // 玩家充值的区服。
        level: 10,                   // 玩家充值时的等级。
        mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。
  
        reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
      });
    },
  
    // 支付失败
    payFailed2: function () {
      this.printLog("btnPayFailed clicked");
      cocosAnalytics.CAPayment.payFailed({
        id: cocosAnalyticsID2,
        amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
        orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
        payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
        iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
        currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
        virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
        accountID: 'user1001',       // 消费的账号
        partner: '',                 // 账户渠道名称  例如：QQ、微信。
        gameServer: '艾欧尼亚',       // 玩家充值的区服。
        level: 10,                   // 玩家充值时的等级。
        mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。
  
        reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
      });
    },
  
    // 支付取消
    payCanceled2: function () {
      this.printLog("btnPayCanceled clicked");
      cocosAnalytics.CAPayment.payCanceled({
        id: cocosAnalyticsID2,
        amount: 100,                 // 现金金额或现金等价物的额度。例如1元传入100，100元则传入10000
        orderID: 'od10001000111',    // 订单ID，唯一标识一次交易。
        payType: '支付宝',            // 支付方式。如：支付宝、苹果iap、银联支付、爱贝支付聚合等。
        iapID: '大礼包',              // 商品ID。玩家购买的充值包类型。例如：人民币15元600虚拟币包
        currencyType: 'CNY',         // 请使用ISO 4217中规范的3位字母代码标记货币类型。充值货币类型
        virtualCurrencyAmount: 1000, // 充值获得的虚拟币额度。
        accountID: 'user1001',       // 消费的账号
        partner: '',                 // 账户渠道名称  例如：QQ、微信。
        gameServer: '艾欧尼亚',       // 玩家充值的区服。
        level: 10,                   // 玩家充值时的等级。
        mission: '第10关',            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡。
  
        reason: '英雄死亡'            // 充值失败的原因，仅失败时需要
      });
    },
  
    // 事件开始
    eventOnStarted2: function () {
      this.printLog("btnEventOnStarted clicked");
      cocosAnalytics.CACustomEvent.onStarted(cocosAnalyticsID2,eventID, eventValue);
    },
  
    // 事件完成
    eventOnSuccess2: function () {
      this.printLog("btnEventOnSuccess clicked");
      cocosAnalytics.CACustomEvent.onSuccess(cocosAnalyticsID2,eventID, eventValue);
    },
  
    // 事件取消
    eventOnCancelled2: function () {
      this.printLog("btnEventOnCancelled clicked");
      cocosAnalytics.CACustomEvent.onCancelled(cocosAnalyticsID2, eventID, eventValue);
    },
  
    // 事件失败
    eventOnFailed2: function () {
      this.printLog("btnEventOnFailed clicked");
      cocosAnalytics.CACustomEvent.onFailed(cocosAnalyticsID2, eventID, eventValue, eventFailedReason);
    },

  onDestroy: function () {
  },

  exitBtnClick: function () {
    if (cc.sys.isBrowser) {
      cc.game.restart();
    } else if (cc.sys.isNative) {
      cc.game.end();
    }
  },

  printCode: function (code) {
    this.printLog("   ");
    this.printLog("---------- Sample code start ----------");
    this.printLog(code);
    this.printLog("---------- Sample code end   ----------");
    this.printLog("   ");
  },

  printLog: function (info) {
    if (this.logs.length > 100) {
      this.logs = [];
      this.logListView.content.removeAllChildren(true);
    }
    this.logs.push(info);
    var item = cc.instantiate(this.itemTemplate);
    this.logListView.content.addChild(item);
    item.getComponent('Item').updateItem(info);
    this.logListView.scrollToBottom(0.1);
  },

  // called every frame
  update: function (dt) {

  },
});