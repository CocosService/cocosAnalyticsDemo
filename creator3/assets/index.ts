
import { _decorator, Component, Node, ScrollView, instantiate, Button, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Index')
export class Index extends Component {
    @property(ScrollView)
    list = null as ScrollView | null;

    @property(Node)
    item = null as Node | null;

    addItem(name: string, callFunc: () => void) {
        if (this.list === null || this.item === null || typeof this.list === 'undefined') return;
        var _node = instantiate(this.item);
        if (_node === null) return;
        var btn = (<Node>_node).getComponent(Button);
        if (btn === null || btn.node.getChildByName("Label") === null) return;
        var label = btn.node.getChildByName('Label')?.getComponent(Label);
        if (typeof label === 'undefined' || label === null) return;
        label.string = name;
        btn.node.on('click', () => callFunc());
        // @ts-ignore
        if (this.list.content === null) return;
        this.list.content.addChild(_node);
    }

    start () {
        console.log('start');
        if (this.list === null || this.list.content === null) return;
        this.list.content.removeAllChildren();
        
        // 初始化 , 注意 在调用其他任何方法之前 必须先初始化一次。
        this.addItem("启用调试信息", () => {
            cocosAnalytics.enableDebug(true);
        })
        // 开始登陆
        this.addItem("开始登陆", () => {
            cocosAnalytics.CAAccount.loginStart({
                channel: '99999',
            });
        })
        // 登陆成功
        this.addItem("登陆成功", () => {
            cocosAnalytics.CAAccount.loginSuccess({
                userID: 'dddddddd',
                age: 1, // 年龄
                sex: 1, // 性别：1为男，2为女，其它表示未知
                channel: '99999',
            });
        })
        // 登陆失败
        this.addItem("登陆失败", () => {
            cocosAnalytics.CAAccount.loginFailed({
                reason: '密码错误',
                channel: '99999',
            });
        })
        // 退出登陆
        this.addItem("退出登陆", () => {
            cocosAnalytics.CAAccount.logout();
        })
        // 设置帐号类型
        this.addItem("设置用户类型", () => {
            cocosAnalytics.CAAccount.setAccountType('Vip1');
        })
        // 创建角色
        //【玩家第一次创建角色时调用】
        this.addItem("创建角色", () => {
            cocosAnalytics.CAAccount.createRole({
                roleID: 'a1005',
                userName: '会搓火球',
                race: '人族',
                class: '法师',
                gameServer: "server 1"
            });
        })
        // 角色等级
        this.addItem("角色等级", () => {
            cocosAnalytics.CAAccount.setLevel(10);
        })
        // 事件开始
        // 参数：事件ID（必填）, 不得超过30个字符
        // 参数：事件内容（必填）
        this.addItem("事件开始", () => {
            cocosAnalytics.CACustomEvent.onStarted("自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件完成
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem("事件完成", () => {
            cocosAnalytics.CACustomEvent.onSuccess("自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件取消
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem("事件取消", () => {
            cocosAnalytics.CACustomEvent.onCancelled("自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            });
        })
        // 事件失败
        // 参数：事件ID（必填）, 不得超过30个字符
        this.addItem("事件失败", () => {
            cocosAnalytics.CACustomEvent.onFailed("自定义事件", {
                name: "突袭",
                player1: 1,
                player2: 1
            }, "战斗异常");
        })
        // 上报玩家付费开始行为
        this.addItem("付费开始", () => {
            cocosAnalytics.CAPayment.payBegin({
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
        this.addItem("付费成功", () => {
            cocosAnalytics.CAPayment.paySuccess({
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
        this.addItem("付费失败", () => {
            cocosAnalytics.CAPayment.payFailed({
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
        this.addItem("付费取消", () => {
            cocosAnalytics.CAPayment.payCanceled({
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
        this.addItem("关卡开始", () => {
            cocosAnalytics.CALevels.begin({
                level: "Level1"
            });
        })
        // 关卡完成
        this.addItem("关卡完成", () => {
            cocosAnalytics.CALevels.complete({
                level: "Level1"
            });
        })
        // 关卡失败
        this.addItem("关卡失败", () => {
            cocosAnalytics.CALevels.failed({
                level: "Level1",
                reason: "主角死亡"
            });
        })
        // 设置虚拟币留存总量
        this.addItem("设置虚拟币留存总量", () => {
            cocosAnalytics.CAVirtual.setVirtualNum({
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 123 //虚拟币数量，long 型
            });
        })
        // 虚拟币获取
        this.addItem("虚拟币获取", () => {
            cocosAnalytics.CAVirtual.get({
                type: "钻石", //虚拟币类型，字符串，"钻石"、"金币"
                count: 112, //购买数量，int 数字,
                reason: "打怪" //获得原因，字符串
            });
        })
        // 虚拟币消耗
        this.addItem("虚拟币消耗", () => {
            cocosAnalytics.CAVirtual.consume({
                type: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                count: 121111, //购买数量，int 数字,
                reason: "购物" //消耗原因，字符串
            })
        })
        // 购买道具
        this.addItem("购买道具", () => {
            cocosAnalytics.CAItem.buy({
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 11, //购买数量，int 数字,
                virtualCoin: 121, //消耗虚拟币数量，int 数字,
                virtualType: "金币", //虚拟币类型，字符串，"钻石"、"金币"
                consumePoint: "20" //消耗点，字符串
            });
        })
        // 获得道具
        this.addItem("获得道具", () => {
            cocosAnalytics.CAItem.get({
                itemID: "魔法瓶",
                itemType: "蓝药",
                itemCount: 12, //购买数量，int 数字,
                reason: "任务奖励" //获得原因，字符串
            });
        })
        // 消耗道具
        this.addItem("消耗道具", () => {
            cocosAnalytics.CAItem.consume({
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
        this.addItem("开始任务", () => {
            cocosAnalytics.CATask.begin({
                taskID: "解救小姑娘",
                type: cocosAnalytics.CATaskType.BranchLine
            });
        })
        // 完成任务
        this.addItem("完成任务", () => {
            cocosAnalytics.CATask.complete({
                taskID: "解救小姑娘"
            });
        })
        // 任务失败
        this.addItem("任务失败", () => {
            cocosAnalytics.CATask.failed({
                taskID: "解救小姑娘",
                reason: "主角死亡"
            });
        })
        // 开始广告
        this.addItem("开始广告", () => {
            cocosAnalytics.CAAdvertising.begin({
                adID: "15分钟广告",
            });
        })
        // 完成任务
        this.addItem("完成广告", () => {
            cocosAnalytics.CAAdvertising.complete({
                adID: "15分钟广告",
                timeLong: 15 * 60,
                profit: "10钻石"
            });
        })
        // 任务失败
        this.addItem("广告失败", () => {
            cocosAnalytics.CAAdvertising.failed({
                adID: "15分钟广告",
                reason: "取消播放"
            });
        })
    }
}
