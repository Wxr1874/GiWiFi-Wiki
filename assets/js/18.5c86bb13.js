(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{572:function(t,v,_){"use strict";_.r(v);var i=_(26),s=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"手机经常掉线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手机经常掉线"}},[t._v("#")]),t._v(" 手机经常掉线")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("此类问题一般情况下，是因为设备开启了随机MAC地址，请参照 "),_("RouterLink",{attrs:{to:"/pages/22640f/#关闭随机mac地址-有效减少换绑次数"}},[t._v("关闭随机MAC地址，有效减少换绑次数")])],1)]),t._v(" "),_("li",[_("p",[t._v("排除随机MAC之后，依旧解决不了，这种情况极少出现在iOS或MIUI设备上，解决方式如下")])])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("苹果手机，默认情况下，WiFi助理处理开启状态。如果你不希望你的iOS设备在WiFi连接信号差时保持与互联网的连接，偶尔会出现断开WiFi连接4G的情况，此时你可以停用WiFi助理。前往“设置” > “蜂窝移动网络” / 或者“设置” > “移动数据” 。然后向下滑动并轻点WiFi助理滑块。选择关闭。")]),t._v(" "),_("li",[t._v("安卓手机也是同样的原理, 你可以直接选择关闭WLAN+或者WLAN助理等名称的功能。")]),t._v(" "),_("li",[t._v("如果多次掉线，并提示绑定其他设备，谨防他人登录，建议更换密码！")])])]),t._v(" "),_("h2",{attrs:{id:"电脑频繁掉线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#电脑频繁掉线"}},[t._v("#")]),t._v(" 电脑频繁掉线")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("ul",[_("li",[t._v("电脑安装客户端进行登陆认证，可有效解决这个问题。")]),t._v(" "),_("li",[t._v("如果驱动程序误用网络适配器电源管理处理睡眠状态的方式，可能就会导致频繁掉线，尤其是使用Intel(R) Wireless-AC系列网卡的电脑，掉线情况很严重。")])])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("手机可以正常使用，电脑频繁掉线，首先检查一下随机MAC是关闭状态")])]),t._v(" "),_("li",[_("p",[t._v("其次"),_("mark",[t._v(" 禁用网络适配器电源管理 ")]),t._v("，就可以完美解决！操作方法看下面👇👇👇👇👇")])])]),t._v(" "),_("h3",{attrs:{id:"禁用网络适配器电源管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#禁用网络适配器电源管理"}},[t._v("#")]),t._v(" 禁用网络适配器电源管理")]),t._v(" "),_("p",[t._v('可以使用设备管理器更改网络适配器的电源管理设置。 若要在设备管理器中禁用此设置，请展开"'),_("strong",[t._v("网络适配器")]),t._v('"，右键单击适配器，选择"'),_("strong",[t._v("属性")]),t._v('"，选择"'),_("strong",[t._v("电源管理")]),t._v('"选项卡，然后清除"'),_("strong",[t._v("允许计算机关闭此设备以节省 电源")]),t._v('"复选框，然后重启设备。')]),t._v(" "),_("br"),t._v(" "),_("div",{staticClass:"center-container"},[_("img",{staticStyle:{width:"80%"},attrs:{src:"https://image.gaoajia.com/2021/10/10/1ed75e699ec04.gif"}}),t._v(" "),_("h4",{attrs:{id:"操作方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作方法"}},[t._v("#")]),t._v(" 操作方法")])]),_("h3",{attrs:{id:"注册表编辑器在单台计算机中禁用网络适配器电源管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注册表编辑器在单台计算机中禁用网络适配器电源管理"}},[t._v("#")]),t._v(" 注册表编辑器在单台计算机中禁用网络适配器电源管理")]),t._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),_("ul",[_("li",[_("p",[t._v('但是在某些电脑（win7）中可能需要使用注册表禁用"允许计算机关闭此设备以节省 电源 网络适配器电源管理"设置。')])]),t._v(" "),_("li",[_("p",[t._v("注册表修改不当可能会出现严重问题，因此，请务必严格按照这些步骤操作。 为了加强保护，应先备份注册表，再进行修改。")])])])]),t._v(" "),_("p",[t._v("若要禁用单台计算机的网络适配器电源管理设置，请按照以下步骤操作：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v('1.选择 "开始"，选择"运行"，在"打开"框中键入 regedit， 然后选择"确定 "。')])]),t._v(" "),_("li",[_("p",[t._v("2.找到并选择以下注册表子项：\n"),_("code",[t._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4D36E972-E325-11CE-BFC1-08002bE10318}\\DeviceNumber")])]),t._v(" "),_("blockquote",[_("p",[t._v("DeviceNumber 是网络适配器编号。 如果计算机上安装了单个网络适配器， 则 DeviceNumber 为 0001。")])])]),t._v(" "),_("li",[_("p",[t._v("3.选择 PnPCapabilities。")])]),t._v(" "),_("li",[_("p",[t._v('4.在"编辑 "菜单 上，选择"修改 "。')])]),t._v(" "),_("li",[_("p",[t._v('5.在"值数据" 框中，键入 24， 然后选择"确定 "。')]),t._v(" "),_("blockquote",[_("p",[t._v("默认情况下，值 0 表示已启用网络适配器的电源管理。 值 24 将阻止 Windows 7 关闭网络适配器或使网络适配器将计算机从待机状态唤醒。")])])]),t._v(" "),_("li",[_("p",[t._v("6.在“文件”菜单上，选择“退出”。")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);