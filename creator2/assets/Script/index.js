
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
    console.log("start test cocosAnalyticsID：", cocosAnalyticsID1);
    cocosAnalytics.enableDebug(
    {
      id:cocosAnalyticsID1,
      enabled:true
    }); //启用Debug输出模式，调试完成后可删除
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
      reason: '密码错误' // 失败原因
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