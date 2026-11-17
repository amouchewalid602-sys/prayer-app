
(function () {
  "use strict";

  const KEY = "nawar_language";
  let lang = localStorage.getItem(KEY) || "ar";

  const translations = {
    fr: {
      "مواقيت الصلاة": "Horaires de prière",
      "الأذكار": "Invocations",
      "أسماء الله الحسنى": "Les beaux noms d’Allah",
      "حديث اليوم": "Hadith du jour",
      "القبلة": "Qibla",
      "الإعدادات": "Paramètres",
      "اختر الدولة": "Choisir le pays",
      "اختر المدينة": "Choisir la ville",
      "بحث": "Rechercher",
      "حفظ": "Enregistrer",
      "إلغاء": "Annuler",
      "رجوع": "Retour",
      "التالي": "Suivant",
      "السابق": "Précédent",
      "ابحث عن اسم...": "Rechercher un nom...",
      "الأسماء الظاهرة:": "Noms affichés :",
      "لا توجد نتيجة": "Aucun résultat",
      "أذكار الصباح": "Invocations du matin",
      "أذكار المساء": "Invocations du soir",
      "أذكار النوم": "Invocations avant de dormir",
      "أذكار الاستيقاظ": "Invocations au réveil",
      "أذكار بعد الصلاة": "Invocations après la prière",
      "تجربة الأذان": "Tester l’adhan",
      "إيقاف": "Arrêter",
      "تشغيل": "Lire",
      "اللغة": "Langue",
      "العربية": "Arabe",
      "الفرنسية": "Français",
      "الإنجليزية": "Anglais"
    },
    en: {
      "مواقيت الصلاة": "Prayer Times",
      "الأذكار": "Adhkar",
      "أسماء الله الحسنى": "99 Names of Allah",
      "حديث اليوم": "Hadith of the Day",
      "القبلة": "Qibla",
      "الإعدادات": "Settings",
      "اختر الدولة": "Choose Country",
      "اختر المدينة": "Choose City",
      "بحث": "Search",
      "حفظ": "Save",
      "إلغاء": "Cancel",
      "رجوع": "Back",
      "التالي": "Next",
      "السابق": "Previous",
      "ابحث عن اسم...": "Search for a name...",
      "الأسماء الظاهرة:": "Names displayed:",
      "لا توجد نتيجة": "No results",
      "أذكار الصباح": "Morning Adhkar",
      "أذكار المساء": "Evening Adhkar",
      "أذكار النوم": "Bedtime Adhkar",
      "أذكار الاستيقاظ": "Upon Waking Adhkar",
      "أذكار بعد الصلاة": "After Prayer Adhkar",
      "تجربة الأذان": "Test Adhan",
      "إيقاف": "Stop",
      "تشغيل": "Play",
      "اللغة": "Language",
      "العربية": "Arabic",
      "الفرنسية": "French",
      "الإنجليزية": "English"
    }
  };

  const style = document.createElement("style");
  style.textContent = `
    #languageBtn {
      position:fixed; top:12px; right:14px; z-index:9998;
      width:42px;height:42px;border-radius:50%;
      background:var(--card,#fff);color:var(--fg,#333);
      border:1px solid var(--line,#ccc);font-size:23px;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;
    }
    #languagePanel {
      display:none;position:fixed;inset:0;z-index:9999;
      background:#0008;align-items:center;justify-content:center;
      direction:rtl;
    }
    #languagePanel.show {display:flex}
    #languageBox {
      width:85%;max-width:340px;padding:22px;
      background:var(--card,#fff);color:var(--fg,#222);
      border-radius:20px;box-shadow:0 5px 30px #0003;
    }
    #languageBox h3 {margin:0 0 18px}
    .langChoice {
      display:block;width:100%;padding:14px;margin:8px 0;
      border:1px solid var(--line,#ddd);border-radius:12px;
      background:var(--sel,#eee);color:var(--fg,#222);
      font-size:16px;text-align:center;cursor:pointer;
    }
    #languageClose {
      width:100%;padding:12px;margin-top:8px;
      border:0;border-radius:12px;background:var(--pri,#1565c0);
      color:white;font-size:15px;
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.id = "languageBtn";
  btn.type = "button";
  btn.title = "Language";
  btn.textContent = "◎";
  document.body.appendChild(btn);

  const panel = document.createElement("div");
  panel.id = "languagePanel";
  panel.innerHTML = `
    <div id="languageBox">
      <h3 id="languageTitle">اختر اللغة</h3>
      <button class="langChoice" data-lang="ar">العربية</button>
      <button class="langChoice" data-lang="fr">Français</button>
      <button class="langChoice" data-lang="en">English</button>
      <button id="languageClose">إغلاق</button>
    </div>
  `;
  document.body.appendChild(panel);

  function translateText(root, dictionary) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const original = node.nodeValue.trim();
      if (!original) return;
      if (node.parentElement.closest(
        "script,style,textarea,input,select,option"
      )) return;

      const translated = dictionary[original];
      if (translated) {
        if (!node.__originalText) {
          node.__originalText = node.nodeValue;
        }
        node.nodeValue = node.nodeValue.replace(
          original, translated
        );
      } else if (lang === "ar" && node.__originalText) {
        node.nodeValue = node.__originalText;
      }
    });
  }

  function applyLanguage(code) {
    lang = code;
    localStorage.setItem(KEY, code);

    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";

    const dictionary = translations[code] || {};

    document.querySelectorAll(
      "input[placeholder],textarea[placeholder]"
    ).forEach(el => {
      if (!el.dataset.originalPlaceholder) {
        el.dataset.originalPlaceholder = el.placeholder;
      }
      el.placeholder = code === "ar"
        ? el.dataset.originalPlaceholder
        : dictionary[el.dataset.originalPlaceholder] ||
          el.dataset.originalPlaceholder;
    });

    translateText(document.body, dictionary);

    document.getElementById("languageTitle").textContent =
      code === "ar" ? "اختر اللغة" :
      code === "fr" ? "Choisir la langue" : "Choose Language";

    document.getElementById("languageClose").textContent =
      code === "ar" ? "إغلاق" :
      code === "fr" ? "Fermer" : "Close";

    panel.style.direction = code === "ar" ? "rtl" : "ltr";
  }

  btn.addEventListener("click", () => panel.classList.add("show"));
  document.getElementById("languageClose").onclick =
    () => panel.classList.remove("show");

  panel.addEventListener("click", e => {
    if (e.target === panel) panel.classList.remove("show");
  });

  panel.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      panel.classList.remove("show");
    });
  });

  new MutationObserver(() => {
    if (lang !== "ar") {
      translateText(document.body, translations[lang] || {});
    }
  }).observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });

  applyLanguage(lang);
})();
    
