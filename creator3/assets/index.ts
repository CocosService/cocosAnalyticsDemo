
import { _decorator, Component, Node, ScrollView, instantiate, Button, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Index')
export class Index extends Component {
    @property(ScrollView)
    list = null as ScrollView | null;

    @property(ScrollView)
    list2 = null as ScrollView | null;

    @property(Node)
    item = null as Node | null;

    @property(Node)
    item2 = null as Node | null;

    cocosAnalyticsID1 = -1;
    cocosAnalyticsID2 = -1;

    addItem(list: ScrollView | null, item: Node | null, name: string, callFunc: () => void) {
        if (list === null || item === null || typeof list === 'undefined') return;
        var _node = instantiate(item);
        if (_node === null) return;
        var btn = (<Node>_node).getComponent(Button);
        if (btn === null || btn.node.getChildByName("Label") === null) return;
        var label = btn.node.getChildByName('Label')?.getComponent(Label);
        if (typeof label === 'undefined' || label === null) return;
        label.string = name;
        btn.node.on('click', () => callFunc());
        // @ts-ignore
        if (list.content === null) return;
        list.content.addChild(_node);
    }

    startList1() {
        if (this.list === null || this.list.content === null) return;
        this.list.content.removeAllChildren();
        
        // 启用调试信息
        this.addItem(this.list, this.item, "启用调试信息", () => {
            console.log("this.cocosAnalyticsID1");
            console.log(this.cocosAnalyticsID1);

            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }

            var info = {
                id: this.cocosAnalyticsID1,
                enabled: true
            };
            cocosAnalytics.enableDebug(info);
        })

        // 开始登陆
        this.addItem(this.list, this.item, "开始登陆", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginStart({
                id: this.cocosAnalyticsID1,
                channel: '99999',
            });
        })
        // 登陆成功
        this.addItem(this.list, this.item, "登陆成功", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginSuccess({
                id: this.cocosAnalyticsID1,
                userID: 'dddddddd',
                age: 1, // 年龄
                sex: 1, // 性别：1为男，2为女，其它表示未知
                channel: '99999',
            });
        })
        // 登陆失败
        this.addItem(this.list, this.item, "登陆失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginFailed({
                id: this.cocosAnalyticsID1,
                reason: '密码错误',
                channel: '99999',
            });
        })
        // 退出登陆
        this.addItem(this.list, this.item, "退出登陆", () => {
            console.log("退出登陆 logout");
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.logout(this.cocosAnalyticsID1);
        })
        // 设置帐号类型
        this.addItem(this.list, this.item, "设置用户类型", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            var info = {
                id: this.cocosAnalyticsID1,
                type: 'Vip1'
            };
            cocosAnalytics.CAAccount.setAccountType(info);
        })
        // 创建角色
        //【玩家第一次创建角色时调用】
        this.addItem(this.list, this.item, "创建角色", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.createRole({
                id: this.cocosAnalyticsID1,
                roleID: 'a1005',
                userName: '会搓火球',
                race: '人族',
                class: '法师',
                gameServer: "server 1"
            });
        })
        // 角色等级
        this.addItem(this.list, this.item, "角色等级", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            var info = {
                id: this.cocosAnalyticsID1,
                level: 22
            };
            cocosAnalytics.CAAccount.setLevel(info);
        })
        // 事件开始
        // 参数：事件ID（必填）, 不得超过30个字符
        // 参数：事件内容（必填）
        this.addItem(this.list, this.item, "事件开始", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onStarted(this.cocosAnalyticsID1, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件完成
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list, this.item, "事件完成", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onSuccess(this.cocosAnalyticsID1, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件取消
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list, this.item, "事件取消", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onCancelled(this.cocosAnalyticsID1, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件失败
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list, this.item, "事件失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onFailed(this.cocosAnalyticsID1, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            }, "战斗异常");
        })
        // 上报玩家付费开始行为
        this.addItem(this.list, this.item, "付费开始", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payBegin({
                id: this.cocosAnalyticsID1,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费成功行为
        this.addItem(this.list, this.item, "付费成功", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.paySuccess({
                id: this.cocosAnalyticsID1,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费失败行为
        this.addItem(this.list, this.item, "付费失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payFailed({
                id: this.cocosAnalyticsID1,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费取消行为
        this.addItem(this.list, this.item, "付费取消", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payCanceled({
                id: this.cocosAnalyticsID1,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 关卡开始
        this.addItem(this.list, this.item, "关卡开始", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.begin({
                id: this.cocosAnalyticsID1,
                level: "Level1"
            });
        })
        // 关卡完成
        this.addItem(this.list, this.item, "关卡完成", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.complete({
                id: this.cocosAnalyticsID1,
                level: "Level1"
            });
        })
        // 关卡失败
        this.addItem(this.list, this.item, "关卡失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.failed({
                id: this.cocosAnalyticsID1,
                level: "Level1",
                reason: "主角死亡"
            });
        })
        // 设置虚拟币留存总量
        this.addItem(this.list, this.item, "设置虚拟币留存总量", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.setVirtualNum({
                id: this.cocosAnalyticsID1,
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 123 //虚拟币数量，long 型
            });
        })
        // 虚拟币获取
        this.addItem(this.list, this.item, "虚拟币获取", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.get({
                id: this.cocosAnalyticsID1,
                type: "钻石", //虚拟币类型，字符串，"钻石"、"金币"
                count: 112, //购买数量，int 数字,
                reason: "打怪" //获得原因，字符串
            });
        })
        // 虚拟币消耗
        this.addItem(this.list, this.item, "虚拟币消耗", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.consume({
                id: this.cocosAnalyticsID1,
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 121111, //购买数量，int 数字,
                reason: "购物" //消耗原因，字符串
            })
        })
        // 购买道具
        this.addItem(this.list, this.item, "购买道具", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.buy({
                id: this.cocosAnalyticsID1,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 11, //购买数量，int 数字,
                virtualCoin: 121, //消耗虚拟币数量，int 数字,
                virtualType: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                consumePoint: "20" //消耗点，字符串
            });
        })
        // 获得道具
        this.addItem(this.list, this.item, "获得道具", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.get({
                id: this.cocosAnalyticsID1,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 12, //购买数量，int 数字,
                reason: "任务奖励" //获得原因，字符串
            });
        })
        // 消耗道具
        this.addItem(this.list, this.item, "消耗道具", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.consume({
                id: this.cocosAnalyticsID1,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 11, //购买数量，int 数字,
                reason: "pk" //消耗原因，字符串
            });
        })
        // 定义以下任务类型：
        // CATaskType.GuideLine 新手任务
        // CATaskType.MainLine 主线任务
        // CATaskType.BranchLine 分支任务
        // CATaskType.Daily 日常任务
        // CATaskType.Activity 活动任务
        // CATaskType.Other 其他任务,默认值
        // 开始任务
        this.addItem(this.list, this.item, "开始任务", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.begin({
                id: this.cocosAnalyticsID1,
                taskID: "解救小姑娘",
                type: cocosAnalytics.CATaskType.BranchLine
            });
        })
        // 完成任务
        this.addItem(this.list, this.item, "完成任务", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.complete({
                id: this.cocosAnalyticsID1,
                taskID: "解救小姑娘"
            });
        })
        // 任务失败
        this.addItem(this.list, this.item, "任务失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.failed({
                id: this.cocosAnalyticsID1,
                taskID: "解救小姑娘",
                reason: "主角死亡"
            });
        })
        // 开始广告
        this.addItem(this.list, this.item, "开始广告", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.begin({
                id: this.cocosAnalyticsID1,
                adID: "15分钟广告",
            });
        })
        // 完成任务
        this.addItem(this.list, this.item, "完成广告", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.complete({
                id: this.cocosAnalyticsID1,
                adID: "15分钟广告",
                timeLong: 15 * 60,
                profit: "10钻石"
            });
        })
        // 任务失败
        this.addItem(this.list, this.item, "广告失败", () => {
            if (-1 === this.cocosAnalyticsID1) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.failed({
                id: this.cocosAnalyticsID1,
                adID: "15分钟广告",
                reason: "取消播放"
            });
        })
    }

    startList2() {
        if (this.list2 === null || this.list2.content === null) return;
        this.list2.content.removeAllChildren();
        
        // 启用调试信息
        this.addItem(this.list2, this.item2, "启用调试信息", () => {
            debugger;
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }

            var info = {
                id: this.cocosAnalyticsID2,
                enabled: true
            };
            cocosAnalytics.enableDebug(info);
        })

        // 开始登陆
        this.addItem(this.list2, this.item2, "开始登陆", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginStart({
                id: this.cocosAnalyticsID2,
                channel: '99999',
            });
        })
        // 登陆成功
        this.addItem(this.list2, this.item2, "登陆成功", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginSuccess({
                id: this.cocosAnalyticsID2,
                userID: 'dddddddd',
                age: 1, // 年龄
                sex: 1, // 性别：1为男，2为女，其它表示未知
                channel: '99999',
            });
        })
        // 登陆失败
        this.addItem(this.list2, this.item2, "登陆失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.loginFailed({
                id: this.cocosAnalyticsID2,
                reason: '密码错误',
                channel: '99999',
            });
        })
        // 退出登陆
        this.addItem(this.list2, this.item2, "退出登陆", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.logout(this.cocosAnalyticsID2);
        })
        // 设置帐号类型
        this.addItem(this.list2, this.item2, "设置用户类型", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            var info = {
                id: this.cocosAnalyticsID2,
                type: 'Vip1'
            };
            cocosAnalytics.CAAccount.setAccountType(info);
        })
        // 创建角色
        //【玩家第一次创建角色时调用】
        this.addItem(this.list2, this.item2, "创建角色", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAccount.createRole({
                id: this.cocosAnalyticsID2,
                roleID: 'a1005',
                userName: '会搓火球',
                race: '人族',
                class: '法师',
                gameServer: "server 1"
            });
        })
        // 角色等级
        this.addItem(this.list2, this.item2, "角色等级", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            var info = {
                id: this.cocosAnalyticsID2,
                level: 22
            };
            cocosAnalytics.CAAccount.setLevel(info);
        })
        // 事件开始
        // 参数：事件ID（必填）, 不得超过30个字符
        // 参数：事件内容（必填）
        this.addItem(this.list2, this.item2, "事件开始", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onStarted(this.cocosAnalyticsID2, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件完成
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list2, this.item2, "事件完成", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onSuccess(this.cocosAnalyticsID2, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件取消
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list2, this.item2, "事件取消", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onCancelled(this.cocosAnalyticsID2, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件失败
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem(this.list2, this.item2, "事件失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CACustomEvent.onFailed(this.cocosAnalyticsID2, "自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            }, "战斗异常");
        })
        // 上报玩家付费开始行为
        this.addItem(this.list2, this.item2, "付费开始", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payBegin({
                id: this.cocosAnalyticsID2,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费成功行为
        this.addItem(this.list2, this.item2, "付费成功", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.paySuccess({
                id: this.cocosAnalyticsID2,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费失败行为
        this.addItem(this.list2, this.item2, "付费失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payFailed({
                id: this.cocosAnalyticsID2,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 上报玩家付费取消行为
        this.addItem(this.list2, this.item2, "付费取消", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAPayment.payCanceled({
                id: this.cocosAnalyticsID2,
                // amount 付费金额，必填
                amount: 100,
                // currencyType 货币类型，可选。默认CNY
                currencyType: 'CNY',
                // payType 支付方式，可选。默认为空
                payType: '信用卡',
                // iapID 付费点，可选。默认为空
                iapID: '关卡1',
                // orderID 订单编号，可选。默认为空
                orderID: 'od10001000111'
            });
        })
        // 关卡开始
        this.addItem(this.list2, this.item2, "关卡开始", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.begin({
                id: this.cocosAnalyticsID2,
                level: "Level1"
            });
        })
        // 关卡完成
        this.addItem(this.list2, this.item2, "关卡完成", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.complete({
                id: this.cocosAnalyticsID2,
                level: "Level1"
            });
        })
        // 关卡失败
        this.addItem(this.list2, this.item2, "关卡失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CALevels.failed({
                id: this.cocosAnalyticsID2,
                level: "Level1",
                reason: "主角死亡"
            });
        })
        // 设置虚拟币留存总量
        this.addItem(this.list2, this.item2, "设置虚拟币留存总量", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.setVirtualNum({
                id: this.cocosAnalyticsID2,
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 123 //虚拟币数量，long 型
            });
        })
        // 虚拟币获取
        this.addItem(this.list2, this.item2, "虚拟币获取", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.get({
                id: this.cocosAnalyticsID2,
                type: "钻石", //虚拟币类型，字符串，"钻石"、"金币"
                count: 112, //购买数量，int 数字,
                reason: "打怪" //获得原因，字符串
            });
        })
        // 虚拟币消耗
        this.addItem(this.list2, this.item2, "虚拟币消耗", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAVirtual.consume({
                id: this.cocosAnalyticsID2,
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 121111, //购买数量，int 数字,
                reason: "购物" //消耗原因，字符串
            })
        })
        // 购买道具
        this.addItem(this.list2, this.item2, "购买道具", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.buy({
                id: this.cocosAnalyticsID2,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 11, //购买数量，int 数字,
                virtualCoin: 121, //消耗虚拟币数量，int 数字,
                virtualType: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                consumePoint: "20" //消耗点，字符串
            });
        })
        // 获得道具
        this.addItem(this.list2, this.item2, "获得道具", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.get({
                id: this.cocosAnalyticsID2,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 12, //购买数量，int 数字,
                reason: "任务奖励" //获得原因，字符串
            });
        })
        // 消耗道具
        this.addItem(this.list2, this.item2, "消耗道具", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAItem.consume({
                id: this.cocosAnalyticsID2,
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 11, //购买数量，int 数字,
                reason: "pk" //消耗原因，字符串
            });
        })
        // 定义以下任务类型：
        // CATaskType.GuideLine 新手任务
        // CATaskType.MainLine 主线任务
        // CATaskType.BranchLine 分支任务
        // CATaskType.Daily 日常任务
        // CATaskType.Activity 活动任务
        // CATaskType.Other 其他任务,默认值
        // 开始任务
        this.addItem(this.list2, this.item2, "开始任务", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.begin({
                id: this.cocosAnalyticsID2,
                taskID: "解救小姑娘",
                type: cocosAnalytics.CATaskType.BranchLine
            });
        })
        // 完成任务
        this.addItem(this.list2, this.item2, "完成任务", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.complete({
                id: this.cocosAnalyticsID2,
                taskID: "解救小姑娘"
            });
        })
        // 任务失败
        this.addItem(this.list2, this.item2, "任务失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CATask.failed({
                id: this.cocosAnalyticsID2,
                taskID: "解救小姑娘",
                reason: "主角死亡"
            });
        })
        // 开始广告
        this.addItem(this.list2, this.item2, "开始广告", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.begin({
                id: this.cocosAnalyticsID2,
                adID: "15分钟广告",
            });
        })
        // 完成任务
        this.addItem(this.list2, this.item2, "完成广告", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.complete({
                id: this.cocosAnalyticsID2,
                adID: "15分钟广告",
                timeLong: 15 * 60,
                profit: "10钻石"
            });
        })
        // 任务失败
        this.addItem(this.list2, this.item2, "广告失败", () => {
            if (-1 === this.cocosAnalyticsID2) {
                console.error("cocosAnalytics sdk not init yet !");
                return;
            }
            
            cocosAnalytics.CAAdvertising.failed({
                id: this.cocosAnalyticsID2,
                adID: "15分钟广告",
                reason: "取消播放"
            });
        })
    }

    start () {
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
            
            this.cocosAnalyticsID1 = cocosAnalytics.init(initArgs);
            
            var initArgs2 = {
                appID: '6397959145',
                storeID: '100000',
                engine: 'google',
                callNumber: '13947620853'
            };
            this.cocosAnalyticsID2 = cocosAnalytics.init(initArgs2);

            console.log("sdk id1: ",this.cocosAnalyticsID1);
            console.log("sdk id2: ",this.cocosAnalyticsID2);
        }

        this.startList1();
        this.startList2();
    }
}
