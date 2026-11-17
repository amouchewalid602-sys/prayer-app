(function(){
try{
var H=[
 {t:"إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى",r:"عمر بن الخطاب رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"قبول الأعمال وصحتها مرتبطان بالنية، فمن أخلص نيته لله نال الأجر، ولكل إنسان ثواب ما قصده بعمله."},
 {t:"من حسن إسلام المرء تركه ما لا يعنيه",r:"أبو هريرة رضي الله عنه",s:"سنن الترمذي",e:"من كمال إيمان المسلم أن يترك الأقوال والأفعال التي لا فائدة له فيها، ويشتغل بما ينفعه في دينه ودنياه."},
 {t:"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",r:"أنس بن مالك رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"من كمال الإيمان أن تتمنى لإخوانك المسلمين من الخير ما تتمناه لنفسك، وتكره لهم ما تكرهه لنفسك."},
 {t:"من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت",r:"أبو هريرة رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"على المسلم أن يحفظ لسانه فلا يتكلم إلا بما فيه خير، وإذا لم يكن في الكلام خير فالصمت أسلم."},
 {t:"الدين النصيحة",r:"تميم الداري رضي الله عنه",s:"صحيح مسلم",e:"النصيحة هي الإخلاص والصدق في الدين، وإرادة الخير لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم."},
 {t:"خيركم من تعلم القرآن وعلمه",r:"عثمان بن عفان رضي الله عنه",s:"صحيح البخاري",e:"أفضل الناس من تعلّم القرآن وعمل به وعلّمه غيره، ففي ذلك نفع له ولمن حوله."},
 {t:"الطهور شطر الإيمان",r:"أبو مالك الأشعري رضي الله عنه",s:"صحيح مسلم",e:"الطهارة جزء عظيم من الإيمان، وهي شرط لصحة الصلاة، وتشمل طهارة البدن وطهارة القلب."},
 {t:"أحب الأعمال إلى الله أدومها وإن قل",r:"عائشة رضي الله عنها",s:"صحيح البخاري وصحيح مسلم",e:"العمل القليل الدائم أحب إلى الله من الكثير المنقطع، فالمداومة على الطاعة أفضل."},
 {t:"كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم",r:"أبو هريرة رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"ذكر قليل في النطق لكنه عظيم الأجر في الميزان يوم القيامة، فاحرص على قولهما."},
 {t:"ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب",r:"أبو هريرة رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"القوة الحقيقية في ضبط النفس عند الغضب، لا في قوة الجسد ولا في الغلبة على الناس."},
 {t:"من سلك طريقًا يلتمس فيه علمًا سهّل الله له به طريقًا إلى الجنة",r:"أبو هريرة رضي الله عنه",s:"صحيح مسلم",e:"طلب العلم النافع سبب لدخول الجنة، ومن سعى فيه يسّر الله له أسباب الهداية."},
 {t:"لا تغضب",r:"أبو هريرة رضي الله عنه",s:"صحيح البخاري",e:"وصية نبوية مختصرة، فالغضب يجر إلى الشر، فعلى المسلم أن يتجنب أسبابه ويكظم غيظه."},
 {t:"المسلم من سلم المسلمون من لسانه ويده",r:"عبد الله بن عمرو رضي الله عنهما",s:"صحيح البخاري وصحيح مسلم",e:"المسلم الحق هو من لا يؤذي الناس بقول ولا فعل، فيأمنون شره."},
 {t:"الكلمة الطيبة صدقة",r:"أبو هريرة رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"الكلام الطيب يدخل السرور على القلوب، ويؤجر عليه صاحبه كما يؤجر المتصدق."},
 {t:"اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن",r:"أبو ذر الغفاري ومعاذ بن جبل رضي الله عنهما",s:"سنن الترمذي",e:"استشعر مراقبة الله في السر والعلن، وإذا أخطأت فأتبع الذنب بعمل صالح يمحوه، وعامل الناس بحسن الخلق."},
 {t:"من دل على خير فله مثل أجر فاعله",r:"أبو مسعود الأنصاري رضي الله عنه",s:"صحيح مسلم",e:"من أرشد غيره إلى فعل خير نال مثل ثواب من عمل به، دون أن ينقص من أجر العامل شيء."},
 {t:"إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم",r:"أبو هريرة رضي الله عنه",s:"صحيح مسلم",e:"ميزان الله في الأعمال هو القلب والعمل الصالح، لا المظاهر ولا كثرة المال."},
 {t:"تبسمك في وجه أخيك لك صدقة",r:"أبو ذر الغفاري رضي الله عنه",s:"سنن الترمذي",e:"الابتسامة الصادقة في وجه الآخرين عمل خير يؤجر عليه المسلم."},
 {t:"من لا يرحم الناس لا يرحمه الله",r:"جرير بن عبد الله رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"من قسا قلبه على الخلق ولم يرحمهم حُرم من رحمة الله، فالرحمة بالناس سبب لرحمة الله."},
 {t:"من صلى الصبح فهو في ذمة الله",r:"جندب بن عبد الله رضي الله عنه",s:"صحيح مسلم",e:"من حافظ على صلاة الفجر كان في حفظ الله ورعايته طوال يومه."},
 {t:"الصلوات الخمس، والجمعة إلى الجمعة، ورمضان إلى رمضان، مكفرات ما بينهن إذا اجتنب الكبائر",r:"أبو هريرة رضي الله عنه",s:"صحيح مسلم",e:"المحافظة على الفرائض تمحو الله بها الصغائر ما دام العبد مجتنبًا للكبائر."},
 {t:"اتقوا النار ولو بشق تمرة",r:"عدي بن حاتم رضي الله عنه",s:"صحيح البخاري وصحيح مسلم",e:"لا تحتقر الصدقة القليلة، فقد تكون سببًا لنجاتك من النار."},
 {t:"البر حسن الخلق، والإثم ما حاك في صدرك وكرهت أن يطلع عليه الناس",r:"النواس بن سمعان رضي الله عنه",s:"صحيح مسلم",e:"أعظم أبواب الخير حسن الخلق، والإثم ما تردد في القلب وكرهت أن يعرفه الناس."},
 {t:"ما نقصت صدقة من مال، وما زاد الله عبدًا بعفو إلا عزًا، وما تواضع أحد لله إلا رفعه الله",r:"أبو هريرة رضي الله عنه",s:"صحيح مسلم",e:"الصدقة لا تنقص المال بل تباركه، والعفو يرفع صاحبه، والتواضع لله سبب للرفعة."},
 {t:"الحياء من الإيمان",r:"عبد الله بن عمر رضي الله عنهما",s:"صحيح البخاري وصحيح مسلم",e:"الحياء خلق يمنع صاحبه من القبيح ويدعوه إلى الجميل، وهو شعبة من شعب الإيمان."}
];

var host=document.getElementById("t4");
if(!host){return;}

var css=".hw{padding:6px 15px 24px}"
+".ht{margin:16px 0 4px;font-size:1.9rem;color:var(--link)}"
+".hs{color:var(--sub);margin-bottom:18px}"
+".hc{background:var(--card);border-radius:26px;padding:22px 16px;box-shadow:0 1px 8px var(--shadow)}"
+".hl{color:var(--link);font-size:1rem;margin-bottom:14px}"
+".htxt{font-size:1.45rem;line-height:2.1;margin:8px 0 22px}"
+".hbox{background:var(--sel);border-radius:18px;padding:16px;line-height:2;margin-bottom:20px}"
+".hsh{text-align:right;font-weight:bold;margin:8px 0 10px}"
+".hex{text-align:right;line-height:2.1;margin-bottom:22px}"
+".hbtns{display:flex;flex-wrap:wrap;justify-content:center;gap:12px}"
+".hbtns button{border:0;background:var(--pri);color:#fff;border-radius:16px;padding:16px 22px;font-size:1rem}"
+".hmsg{min-height:1.4em;margin-top:14px;color:var(--sub);font-size:.9rem}";
var st=document.createElement("style");
st.textContent=css;
document.head.appendChild(st);

host.innerHTML='<div class="hw">'
+'<h2 class="ht">حديث اليوم</h2>'
+'<div class="hs">من هدي النبي محمد ﷺ</div>'
+'<div class="hc">'
+'<div class="hl">الحديث النبوي الشريف</div>'
+'<div class="htxt" id="hx"></div>'
+'<div class="hbox"><div id="hr"></div><div id="hsrc"></div></div>'
+'<div class="hsh">شرح الحديث:</div>'
+'<div class="hex" id="he"></div>'
+'<div class="hbtns">'
+'<button onclick="copyHadith()">نسخ الحديث</button>'
+'<button onclick="shareHadith()">مشاركة الحديث</button>'
+'<button onclick="nextHadith()">حديث آخر</button>'
+'</div>'
+'<div class="hmsg" id="hmsg"></div>'
+'</div></div>';

var d=new Date();
var dayNum=Math.floor((d-new Date(d.getFullYear(),0,0))/86400000);
var idx=dayNum%H.length;
var tm=null;

function msg(t){
  var m=document.getElementById("hmsg");
  m.textContent=t;
  clearTimeout(tm);
  tm=setTimeout(function(){m.textContent="";},3000);
}
function draw(){
  var h=H[idx];
  document.getElementById("hx").textContent=h.t;
  document.getElementById("hr").innerHTML="<b>الراوي:</b> "+h.r;
  document.getElementById("hsrc").innerHTML="<b>المصدر:</b> "+h.s;
  document.getElementById("he").textContent=h.e;
}
function full(){
  var h=H[idx];
  return "قال رسول الله ﷺ:\n«"+h.t+"»\n\nالراوي: "+h.r+"\nالمصدر: "+h.s+"\n\nشرح الحديث: "+h.e;
}
function fallbackCopy(s,ok){
  var ta=document.createElement("textarea");
  ta.value=s;
  ta.style.position="fixed";
  ta.style.opacity="0";
  document.body.appendChild(ta);
  ta.select();
  var done=false;
  try{done=document.execCommand("copy");}catch(e){}
  document.body.removeChild(ta);
  if(done){ok();}else{msg("تعذّر النسخ على هذا المتصفح");}
}
function copyText(s,ok){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(s).then(ok,function(){fallbackCopy(s,ok);});
  }else{
    fallbackCopy(s,ok);
  }
}
window.copyHadith=function(){
  copyText(full(),function(){msg("تم نسخ الحديث ✓");});
};
window.shareHadith=function(){
  var s=full();
  if(navigator.share){
    navigator.share({text:s}).catch(function(e){
      if(e&&e.name==="AbortError"){return;}
      copyText(s,function(){msg("تم نسخ الحديث، الصقه في أي تطبيق");});
    });
  }else{
    copyText(s,function(){msg("المشاركة غير مدعومة هنا، تم نسخ الحديث لتلصقه في أي تطبيق");});
  }
};
window.nextHadith=function(){
  idx=(idx+1)%H.length;
  draw();
};
draw();
}catch(e){}
})();

/* ===== بوصلة القبلة ===== */
(function(){
try{
var nav=document.querySelector("nav");
if(!nav){return;}

var KLAT=21.4225,KLON=39.8262;
var qb=null,hs=null,running=false,gotEv=false,tmr=null,alignedPrev=false;

var css=".qw{padding:6px 15px 24px}"
+".qt{margin:16px 0 6px;font-size:1.8rem;color:var(--link)}"
+".qst{min-height:3em;color:var(--sub);font-size:1rem;line-height:1.7}"
+".qst b{color:var(--link)}"
+".qok{color:#1b8a3a;font-weight:bold;font-size:1.1rem}"
+".qbox{width:min(86vw,330px);margin:8px auto}"
+".qbox svg{display:block;width:100%;height:auto}"
+".qinfo{background:var(--card);border-radius:18px;padding:14px;margin:12px 0;box-shadow:0 1px 5px var(--shadow);line-height:2;text-align:right}"
+".qbtn{border:0;background:var(--pri);color:#fff;border-radius:16px;padding:14px 26px;font-size:1rem}"
+".qtip{margin-top:14px;color:var(--sub);font-size:.85rem;line-height:1.8}";
var st=document.createElement("style");
st.textContent=css;
document.head.appendChild(st);

function dial(){
  var s='<svg viewBox="0 0 300 310" xmlns="http://www.w3.org/2000/svg">';
  s+='<path d="M150 4 L136 32 L164 32 Z" style="fill:var(--pri)"/>';
  s+='<g id="qg">';
  s+='<circle cx="150" cy="165" r="130" style="fill:var(--card);stroke:var(--line)" stroke-width="3"/>';
  for(var i=0;i<36;i++){
    var a=i*10;
    var len=(a%90===0)?20:(a%30===0?14:7);
    var w=(a%90===0)?3:(a%30===0?2.5:1.2);
    s+='<line x1="150" y1="35" x2="150" y2="'+(35+len)+'" transform="rotate('+a+' 150 165)" style="stroke:var(--sub)" stroke-width="'+w+'"/>';
  }
  var L=[["ش",0,"#d33"],["ق",90,""],["ج",180,""],["غ",270,""]];
  for(var j=0;j<L.length;j++){
    s+='<text x="150" y="104" text-anchor="middle" font-size="22" font-weight="bold" transform="rotate('+L[j][1]+' 150 165)" style="fill:'+(L[j][2]||'var(--fg)')+'">'+L[j][0]+'</text>';
  }
  s+='<g id="qk" visibility="hidden" transform="rotate(0 150 165)">';
  s+='<line x1="150" y1="160" x2="150" y2="86" style="stroke:#d4a02a" stroke-width="3" stroke-dasharray="6 5"/>';
  s+='<circle cx="150" cy="64" r="21" style="fill:#d4a02a"/>';
  s+='<text x="150" y="72" text-anchor="middle" font-size="22">🕋</text>';
  s+='</g>';
  s+='<circle cx="150" cy="165" r="7" style="fill:var(--pri)"/>';
  s+='</g></svg>';
  return s;
}

var btn=document.createElement("button");
btn.textContent="القبلة";
btn.onclick=function(){show(5,this);};
nav.appendChild(btn);

var tab=document.createElement("div");
tab.id="t5";
tab.className="tab";
nav.parentNode.insertBefore(tab,nav);
tab.innerHTML='<div class="qw">'
+'<h2 class="qt">بوصلة القبلة</h2>'
+'<div class="qst" id="qst">اضغط تشغيل البوصلة للبدء</div>'
+'<div class="qbox">'+dial()+'</div>'
+'<div class="qinfo" id="qinfo"></div>'
+'<button class="qbtn" onclick="startQ()">🧭 إعادة تشغيل البوصلة</button>'
+'<div class="qtip">أمسك جوالك أفقيًا ومستويًا، وابتعد عن المعادن والمغناطيس. ولمعايرة البوصلة حرّك الجوال على شكل رقم 8.</div>'
+'</div>';

function setSt(t){document.getElementById("qst").innerHTML=t;}

function bearing(lat,lon){
  var K=KLAT*Math.PI/180,L=KLON*Math.PI/180;
  var p=lat*Math.PI/180,l=lon*Math.PI/180;
  var dl=L-l;
  var y=Math.sin(dl)*Math.cos(K);
  var x=Math.cos(p)*Math.sin(K)-Math.sin(p)*Math.cos(K)*Math.cos(dl);
  return (Math.atan2(y,x)*180/Math.PI+360)%360;
}
function distKm(lat,lon){
  var R=6371,r=Math.PI/180;
  var dLat=(KLAT-lat)*r,dLon=(KLON-lon)*r;
  var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat*r)*Math.cos(KLAT*r)*Math.sin(dLon/2)*Math.sin(dLon/2);
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

var dkm=null;
function update(h){
  var info="";
  if(qb!==null){
    info+='اتجاه القبلة: <b>'+Math.round(qb)+'°</b> من الشمال<br>';
    if(dkm!==null){info+='المسافة إلى الكعبة: <b>'+Math.round(dkm)+' كم</b><br>';}
  }
  if(h!==null){info+='اتجاه جوالك الآن: <b>'+Math.round(h)+'°</b>';}
  document.getElementById("qinfo").innerHTML=info||"جارٍ التحضير...";
  if(qb===null||h===null){return;}
  var diff=((qb-h+540)%360)-180;
  var ok=Math.abs(diff)<=4;
  if(ok){
    setSt('<span class="qok">✅ أنت متجه نحو القبلة</span>');
    if(!alignedPrev&&typeof S!=="undefined"&&S.vib&&navigator.vibrate){navigator.vibrate(80);}
  }else{
    setSt('دوّر جوالك <b>'+(diff>0?'يمينًا':'يسارًا')+'</b> حوالي <b>'+Math.abs(Math.round(diff))+'°</b> حتى يصير 🕋 تحت السهم');
  }
  alignedPrev=ok;
}

function applyCoords(lat,lon){
  qb=bearing(lat,lon);
  dkm=distKm(lat,lon);
  var k=document.getElementById("qk");
  if(k){
    k.setAttribute("transform","rotate("+qb.toFixed(1)+" 150 165)");
    k.setAttribute("visibility","visible");
  }
  update(hs);
}

function getCoords(){
  var used=false;
  function byCity(){
    if(used){return;}
    used=true;
    var c="",k="";
    try{c=localStorage.getItem("salat_city")||"";k=localStorage.getItem("salat_country")||"";}catch(e){}
    if(!c||!k){
      setSt("ما قدرت أحدد موقعك. اسمح للمتصفح بالموقع، أو اختر مدينتك من تبويب المواقيت ثم ارجع هنا.");
      return;
    }
    fetch("https://api.aladhan.com/v1/timingsByCity?city="+encodeURIComponent(c)+"&country="+encodeURIComponent(k)+"&method=4")
    .then(function(r){return r.json();})
    .then(function(d){applyCoords(Number(d.data.meta.latitude),Number(d.data.meta.longitude));})
    .catch(function(){setSt("تعذّر تحديد موقعك، تأكد من الإنترنت");});
  }
  if(!navigator.geolocation){byCity();return;}
  navigator.geolocation.getCurrentPosition(
    function(p){
      if(used){return;}
      used=true;
      applyCoords(p.coords.latitude,p.coords.longitude);
    },
    function(){byCity();},
    {timeout:8000,maximumAge:600000}
  );
}

function onOri(e){
  var h=null;
  if(typeof e.webkitCompassHeading==="number"&&!isNaN(e.webkitCompassHeading)){
    h=e.webkitCompassHeading;
  }else if(e.alpha!==null&&e.alpha!==undefined&&(e.absolute===true||e.type==="deviceorientationabsolute")){
    h=(360-e.alpha)%360;
  }
  if(h===null){return;}
  gotEv=true;
  if(hs===null){hs=h;}
  else{
    var d=((h-hs+540)%360)-180;
    hs=(hs+d*0.25+360)%360;
  }
  var g=document.getElementById("qg");
  if(g){g.setAttribute("transform","rotate("+(-hs).toFixed(1)+" 150 165)");}
  update(hs);
}

function listen(){
  running=true;
  if("ondeviceorientationabsolute" in window){
    window.addEventListener("deviceorientationabsolute",onOri,true);
  }else{
    window.addEventListener("deviceorientation",onOri,true);
  }
  clearTimeout(tmr);
  tmr=setTimeout(function(){
    if(running&&!gotEv){
      setSt("ما وصلت قراءات من البوصلة. تأكد أن جوالك فيه حساس بوصلة، وأن المتصفح يسمح بحساسات الحركة (إعدادات الموقع).");
    }
  },4000);
}
function stopQ(){
  running=false;
  clearTimeout(tmr);
  window.removeEventListener("deviceorientationabsolute",onOri,true);
  window.removeEventListener("deviceorientation",onOri,true);
}
function askSensor(){
  try{
    if(typeof DeviceOrientationEvent!=="undefined"&&typeof DeviceOrientationEvent.requestPermission==="function"){
      DeviceOrientationEvent.requestPermission().then(function(r){
        if(r==="granted"){listen();}else{setSt("لم تسمح بالوصول لحساس الحركة");}
      }).catch(function(){setSt("تعذّر الوصول لحساس الحركة");});
    }else{
      listen();
    }
  }catch(e){listen();}
}

window.startQ=function(){
  stopQ();
  hs=null;gotEv=false;alignedPrev=false;
  setSt("جارٍ تحديد موقعك وقراءة البوصلة...");
  askSensor();
  getCoords();
};

var prevShow=show;
show=function(n,b){
  prevShow(n,b);
  if(n===5){window.startQ();}else{stopQ();}
};
}catch(e){}
})();
