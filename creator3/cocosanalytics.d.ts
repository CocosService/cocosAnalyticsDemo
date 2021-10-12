declare const cocosAnalyticsID1: number;

declare namespace cocosAnalytics {
	function init(info: {
		appID: string,
		storeID: string,
		engine: string,
		callNumber: string,
	}): number;

	function isInited(id: number): boolean;
	function enableDebug(info: {
		id: number,
		enabled: boolean}): void;

	namespace CAAccount {
		function loginStart(info: {
			id: number,
			channel: string
		}): void;
		function loginSuccess(info: {
			id: number,
			userID: string,
			age: number,
			sex: number,
			channel: string,
		}): void;
		function loginFailed(info: {
			id: number,
			reason: string,
			channel: string,
		}): void;
		function logout(id: number): void;

		function setAccountType(info: {
			id: number,
			type: string}): void;
		function setAge(info: {
			id: number,
			age: number}): void;
		function setGender(info: {
			id: number,
			gender: number}): void;
		function setLevel(info: {
			id: number,
			level: number}): void;
		function createRole(info: {
			id: number,
			roleID: string,
			userName: string,
			race: string,
			class: string,
			gameServer: string
		}): void;
	}

	namespace CAPayment {
		function payBegin(info: {
			id: number,
			amount: number,
			currencyType: string,
			payType: string,
			iapID: string,
			orderID: string
		}): void;
		function paySuccess(info: {
			id: number,
			amount: number,
			currencyType: string,
			payType: string,
			iapID: string,
			orderID: string
		}): void;
		function payFailed(info: {
			id: number,
			amount: number,
			currencyType: string,
			payType: string,
			iapID: string,
			orderID: string
		}): void;
		function payCanceled(info: {
			id: number,
			amount: number,
			currencyType: string,
			payType: string,
			iapID: string,
			orderID: string
		}): void;
	}

	namespace CALevels {
		function begin(info: {
			id: number,
			level: string
		}): void;
		function complete(info: {
			id: number,
			level: string
		}): void;
		function failed(info: {
			id: number,
			level: string,
			reason: string
		}): void;
	}

	enum CATaskType {
		GuideLine = 0,
		MainLine = 1,
		BranchLine = 2,
		Daily = 3,
		Activity = 4,
		Other = 5
	}

	namespace CATask {
		function begin(info: {
			id: number,
			taskID: string,
			type: CATaskType
		}): void;
		function complete(info: {
			id: number,
			taskID: string,
		}): void;
		function failed(info: {
			id: number,
			taskID: string,
			reason: string
		}): void;
	}

	namespace CAItem {
		function buy(info: {
			id: number,
			itemID: string,
			itemType: string,
			itemCount: number,
			virtualCoin: number,
			virtualType: string,
			consumePoint: string
		}): void;
		function get(info: {
			id: number,
			itemID: string,
			itemType: string,
			itemCount: number,
			reason: string
		}): void;
		function consume(info: {
			id: number,
			itemID: string,
			itemType: string,
			itemCount: number,
			reason: string
		}): void;
	}

	namespace CAVirtual {
		function setVirtualNum(info: {
			id: number,
			type: string,
			count: number
		}): void;
		function get(info: {
			id: number,
			type: string,
			count: number,
			reason: string
		}): void;
		function consume(info: {
			id: number,
			type: string,
			count: number,
			reason: string
		}): void;
	}

	namespace CAAdvertising {
		function begin(info: {
			id: number,
			adID: string,
		}): void;
		function complete(info: {
			id: number,
			adID: string,
			timeLong: number,
			profit: string
		}): void;
		function failed(info: {
			id: number,
			adID: string,
			reason: string
		}): void;
	}

	namespace CACustomEvent {
		function onStarted(id: number, name: string, info: {
			name: string
		} | any): void;
		function onSuccess(id: number, name: string, info: {
			name: string
		} | any): void;
		function onCancelled(id: number, name: string, info: {
			name: string
		} | any): void;
		function onFailed(id: number, name: string, info: {
			name: string
		} | any, result: string): void;
	}
}
