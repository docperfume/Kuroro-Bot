function _0x2bc5(_0x2a79d5,_0xa3a5f4){const _0x3b0a15=_0x3b0a();return _0x2bc5=function(_0x2bc50e,_0x558e4e){_0x2bc50e=_0x2bc50e-0x67;let _0x4f2f60=_0x3b0a15[_0x2bc50e];return _0x4f2f60;},_0x2bc5(_0x2a79d5,_0xa3a5f4);}const _0x1fa0c6=_0x2bc5;(function(_0x50c4b8,_0x4d48c2){const _0x5dce6f=_0x2bc5,_0x25bf7d=_0x50c4b8();while(!![]){try{const _0x59490e=parseInt(_0x5dce6f(0xa4))/0x1*(parseInt(_0x5dce6f(0x86))/0x2)+parseInt(_0x5dce6f(0x85))/0x3+-parseInt(_0x5dce6f(0x7f))/0x4+-parseInt(_0x5dce6f(0x9f))/0x5+-parseInt(_0x5dce6f(0x91))/0x6*(parseInt(_0x5dce6f(0x68))/0x7)+-parseInt(_0x5dce6f(0x7d))/0x8+parseInt(_0x5dce6f(0x90))/0x9;if(_0x59490e===_0x4d48c2)break;else _0x25bf7d['push'](_0x25bf7d['shift']());}catch(_0x2d5534){_0x25bf7d['push'](_0x25bf7d['shift']());}}}(_0x3b0a,0xc5e19));const axios=require(_0x1fa0c6(0x99)),fs=require('fs'),path=require('path'),{HttpsProxyAgent}=require(_0x1fa0c6(0xa2)),readline=require('readline'),colors=require(_0x1fa0c6(0x80)),queryFilePath=path[_0x1fa0c6(0xa6)](__dirname,_0x1fa0c6(0xa9)),proxyFilePath=path[_0x1fa0c6(0xa6)](__dirname,_0x1fa0c6(0x7c)),queryData=fs['readFileSync'](queryFilePath,_0x1fa0c6(0x88))['trim']()[_0x1fa0c6(0x95)]('\x0a'),proxyData=fs[_0x1fa0c6(0x8a)](proxyFilePath,_0x1fa0c6(0x88))[_0x1fa0c6(0x96)]()[_0x1fa0c6(0x95)]('\x0a');queryData[_0x1fa0c6(0xae)]!==proxyData[_0x1fa0c6(0xae)]&&(console['error']('Query\x20and\x20proxy\x20data\x20lengths\x20do\x20not\x20match'['red']),process[_0x1fa0c6(0xac)](0x1));const animatedLoading=async _0x3191f2=>{const _0x287348=['|','/','-','\x5c'],_0x4d002b=0xfa;let _0x2d593c=0x0;return new Promise(_0x4cf819=>{const _0x4742e5=setInterval(()=>{const _0x3fecb6=_0x2bc5,_0x8c4a9f=Math['max'](0x0,Math[_0x3fecb6(0x9e)]((_0x3191f2-_0x2d593c)/0x3e8)),_0x553ff0=_0x287348[Math[_0x3fecb6(0x9e)](_0x2d593c/_0x4d002b)%_0x287348['length']];process[_0x3fecb6(0x9b)]['write'](_0x3fecb6(0x82)+_0x553ff0+_0x3fecb6(0xa0)+_0x8c4a9f+_0x3fecb6(0x6a)),_0x2d593c+=_0x4d002b,_0x2d593c>=_0x3191f2&&(clearInterval(_0x4742e5),process[_0x3fecb6(0x9b)][_0x3fecb6(0x6d)]('\x0dWaiting\x20for\x20next\x20request\x20succeeded.\x0a'),_0x4cf819());},_0x4d002b);});},checkProxyIP=async _0x25cd56=>{const _0x2902f3=_0x1fa0c6;try{const _0x5be992=new HttpsProxyAgent(_0x25cd56),_0xe06a1e=await axios['get']('https://api.ipify.org?format=json',{'httpsAgent':_0x5be992});_0xe06a1e['status']===0xc8?console['log'](_0x2902f3(0x78)[_0x2902f3(0x89)],_0xe06a1e[_0x2902f3(0x72)]['ip']):console['error'](_0x2902f3(0x93)['red'],_0xe06a1e['status']);}catch(_0x451110){console[_0x2902f3(0x76)](_0x2902f3(0xab)['red'],_0x451110);}},upgrade=async(_0x4c36f1,_0x1fef61,_0x1c5a8b)=>{const _0x5b31a4=_0x1fa0c6,_0x4dc973={'accept':'*/*','accept-language':'en-US,en;q=0.9,vi;q=0.8','authorization':_0x5b31a4(0xa8)+_0x1c5a8b,'cache-control':_0x5b31a4(0x87),'content-type':_0x5b31a4(0x8c),'pragma':_0x5b31a4(0x87),'priority':_0x5b31a4(0xa5),'sec-ch-ua':_0x5b31a4(0x94),'sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x5b31a4(0x69),'sec-fetch-dest':_0x5b31a4(0x84),'sec-fetch-mode':_0x5b31a4(0x81),'sec-fetch-site':_0x5b31a4(0x6e),'Referer':_0x5b31a4(0x97),'Referrer-Policy':_0x5b31a4(0xa3)},_0x486bfa={'upgradeId':_0x1fef61},_0x1bdd72=new HttpsProxyAgent(_0x4c36f1),_0x4b9273={'url':_0x5b31a4(0xaa),'headers':_0x4dc973,'data':_0x486bfa,'method':_0x5b31a4(0xa7),'httpsAgent':_0x1bdd72};try{const _0x2ce5bf=await axios(_0x4b9273),_0x2d5d44=_0x2ce5bf[_0x5b31a4(0x72)][_0x5b31a4(0x79)];console[_0x5b31a4(0x75)]((_0x5b31a4(0x9d)+_0x1fef61+_0x5b31a4(0x98)+_0x2d5d44)[_0x5b31a4(0x89)]);}catch(_0x5e30e8){console['log']((_0x5b31a4(0x71)+_0x1fef61)[_0x5b31a4(0x7e)]);}},dailyClaim=async(_0x5c7ad8,_0x20d066,_0x190bc8)=>{const _0x561721=_0x1fa0c6,_0x3963c6=_0x20d066[_0x561721(0x70)](/\r/g,''),_0x80d715={'accept':_0x561721(0x8f),'accept-language':_0x561721(0x77),'authorization':'Bearer\x20'+_0x3963c6,'cache-control':_0x561721(0x87),'content-type':'application/json','pragma':_0x561721(0x87),'priority':_0x561721(0xa5),'sec-ch-ua':'\x22Not/A)Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22126\x22,\x20\x22Microsoft\x20Edge\x22;v=\x22126\x22','sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x561721(0x69),'sec-fetch-dest':_0x561721(0x84),'sec-fetch-mode':_0x561721(0x81),'sec-fetch-site':'same-site','Referer':'https://ranch.kuroro.com/','Referrer-Policy':'strict-origin-when-cross-origin','User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x206.0;\x20Nexus\x205\x20Build/MRA58N)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/124.0.0.0\x20Mobile\x20Safari/537.36'},_0xedbb8c=new HttpsProxyAgent(_0x5c7ad8),_0x8a1023={'url':_0x561721(0x6c),'headers':_0x80d715,'method':_0x561721(0xa7),'httpsAgent':_0xedbb8c};try{const _0x3c244d=await axios(_0x8a1023);console[_0x561721(0x75)](('=================\x20Account\x20'+_0x190bc8+_0x561721(0x9c))[_0x561721(0x73)]),console[_0x561721(0x75)]('[\x20Claim\x20daily\x20success!!\x20]'[_0x561721(0x89)]);}catch(_0x5c2b81){console[_0x561721(0x75)](_0x561721(0x7a)[_0x561721(0x67)]);}},upgradeList=async(_0x57c283,_0x95fd84,_0x5eb4e5)=>{const _0x560566=_0x1fa0c6,_0x4315b1=_0x95fd84['replace'](/\r/g,''),_0x8e7ee3={'accept':_0x560566(0x8f),'accept-language':_0x560566(0x77),'authorization':_0x560566(0xa8)+_0x4315b1,'cache-control':_0x560566(0x87),'content-type':'application/json','pragma':_0x560566(0x87),'priority':_0x560566(0xa5),'sec-ch-ua':'\x22Not/A)Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22126\x22,\x20\x22Microsoft\x20Edge\x22;v=\x22126\x22','sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x560566(0x69),'sec-fetch-dest':_0x560566(0x84),'sec-fetch-mode':_0x560566(0x81),'sec-fetch-site':'same-site','Referer':_0x560566(0x97),'Referrer-Policy':_0x560566(0xa3),'User-Agent':_0x560566(0xaf)},_0x5dff1a=new HttpsProxyAgent(_0x57c283),_0x5eb12d={'url':_0x560566(0x7b),'headers':_0x8e7ee3,'method':_0x560566(0x9a),'httpsAgent':_0x5dff1a},_0x109ab5={'url':_0x560566(0x74),'headers':_0x8e7ee3,'data':{'mineAmount':0x64,'feedAmount':0x64},'method':_0x560566(0xa7),'httpsAgent':_0x5dff1a};try{const _0x1614ab=await axios(_0x5eb12d);for(let _0x4c70f4=0x0;_0x4c70f4<_0x1614ab[_0x560566(0x72)]['length'];_0x4c70f4++){const {upgradeId:_0x52b50b,cost:_0x551b69,earnIncrement:_0x1377b1}=_0x1614ab[_0x560566(0x72)][_0x4c70f4];_0x551b69/_0x1377b1<_0x5eb4e5&&await upgrade(_0x57c283,_0x52b50b,_0x4315b1);}}catch(_0x234411){console['log']('Error:'[_0x560566(0x67)],_0x234411);}try{const _0x43f5b8=await axios(_0x109ab5);if(_0x43f5b8[_0x560566(0x6f)]===0xc8)console[_0x560566(0x75)](_0x560566(0x8d)[_0x560566(0x89)]);else _0x43f5b8[_0x560566(0x6f)]===0x1f4?console[_0x560566(0x75)]('Not\x20enough\x20quards\x20for\x20pet'[_0x560566(0x7e)]):console[_0x560566(0x75)](_0x560566(0x6b)[_0x560566(0x7e)]);}catch(_0x52d627){_0x52d627[_0x560566(0x8e)]==='Request\x20failed\x20with\x20status\x20code\x20500'&&console['log'](_0x560566(0xb0)[_0x560566(0x73)]);}},processUpgrades=async(_0x53a978,_0x4caabe,_0x44920e,_0x3b09e4)=>{await checkProxyIP(_0x4caabe),await dailyClaim(_0x4caabe,_0x53a978,_0x3b09e4),await upgradeList(_0x4caabe,_0x53a978,_0x44920e);},chunkArray=(_0x2e4ac8,_0x2c3b69)=>{const _0x5d3f50=_0x1fa0c6,_0x14eaf7=[];for(let _0x8ac4dd=0x0;_0x8ac4dd<_0x2e4ac8[_0x5d3f50(0xae)];_0x8ac4dd+=_0x2c3b69){_0x14eaf7[_0x5d3f50(0xa1)](_0x2e4ac8[_0x5d3f50(0x92)](_0x8ac4dd,_0x8ac4dd+_0x2c3b69));}return _0x14eaf7;},run=async()=>{const _0x445443=_0x1fa0c6,_0x2573cd=readline['createInterface']({'input':process['stdin'],'output':process[_0x445443(0x9b)]});_0x2573cd['question'](_0x445443(0x83)[_0x445443(0x73)],async _0x3c24ba=>{const _0x14c089=_0x445443;_0x2573cd[_0x14c089(0xad)]();const _0x72db6c=chunkArray(queryData,0xa),_0x3cba6a=chunkArray(proxyData,0xa);while(!![]){for(let _0xe76fec=0x0;_0xe76fec<_0x72db6c['length'];_0xe76fec++){let _0x3dd78f=0x1;const _0x89914f=[];for(let _0x4615e8=0x0;_0x4615e8<_0x72db6c[_0xe76fec][_0x14c089(0xae)];_0x4615e8++){_0x89914f[_0x14c089(0xa1)](processUpgrades(_0x72db6c[_0xe76fec][_0x4615e8],_0x3cba6a[_0xe76fec][_0x4615e8],_0x3c24ba,_0x3dd78f)),_0x3dd78f++;}await Promise[_0x14c089(0x8b)](_0x89914f),await animatedLoading(0xa*0x3e8);}}});};run();function _0x3b0a(){const _0xdfdc90=['6SBWxka','slice','Cannot\x20check\x20your\x20IP.\x20Status\x20code:\x20','\x22Not/A)Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22126\x22,\x20\x22Microsoft\x20Edge\x22;v=\x22126\x22','split','trim','https://ranch.kuroro.com/','\x20success\x20to\x20level\x20','axios','GET','stdout','\x20===================','Purchase\x20','floor','5272325IpMDCP','\x20-\x20Remaining\x20','push','https-proxy-agent','strict-origin-when-cross-origin','741BwMvWM','u=1,\x20i','join','POST','Bearer\x20','query.txt','https://ranch-api.kuroro.com/api/Upgrades/BuyUpgrade','Error\x20while\x20checking\x20your\x20IP:\x20','exit','close','length','Mozilla/5.0\x20(Linux;\x20Android\x206.0;\x20Nexus\x205\x20Build/MRA58N)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/124.0.0.0\x20Mobile\x20Safari/537.36','Not\x20enough\x20quards\x20to\x20mine\x20and\x20feed','red','5641657RGsQSJ','\x22Android\x22','\x20seconds...','Mine\x20and\x20farm\x20success\x20but\x20no\x20response\x20','https://ranch-api.kuroro.com/api/DailyStreak/ClaimDailyBonus','write','same-site','status','replace','Not\x20enough\x20money\x20for\x20purchasing\x20','data','cyan','https://ranch-api.kuroro.com/api/Clicks/MiningAndFeeding','log','error','en-US,en;q=0.9,vi;q=0.8','\x0aYour\x20IP\x20address:\x20','level','Cannot\x20claim\x20daily','https://ranch-api.kuroro.com/api/Upgrades/GetPurchasableUpgrades','proxy.txt','1879000fYmePK','yellow','3752368apRkdz','colors','cors','\x0dWaiting\x20for\x20next\x20request\x20','How\x20much\x20time\x20do\x20you\x20want\x20to\x20payback\x20your\x20money?\x20\x20','empty','1689963dzJNXl','1874QdGCal','no-cache','utf8','green','readFileSync','all','application/json','Mine\x20and\x20Farm\x20success','message','*/*','23276394zoBScR'];_0x3b0a=function(){return _0xdfdc90;};return _0x3b0a();}