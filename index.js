const translations = {
    km: {
        sidebar1: "របៀបដំឡើង",
        sidebar2: "របៀបចូលប្រើ",
        sidebar3: "របៀបផ្ញើ និងឆ្លើយអ៊ីមែល",
        sidebar4: "របៀបប្រើប្រតិទិន",
        sidebar5: "របៀបបន្ថែមទំនាក់ទំនង",
        title: "របៀបដំឡើង និងការប្រើប្រាស់ប្រើ Microsoft Outlook",
        download1: "1. Outlook ត្រូវបានភ្ជាប់ជាមួយ Microsoft Office ឬ Microsoft 365។ ប៉ុន្តែបើអ្នកចង់ដំឡើងវាឡើងវិញ សូមចូលទៅកាន់ Microsoft Store ហើយទាញយកវា។",
        download2: "2. បើកម៉ឺនុយ Start ឬរូបតំណាងលើផ្ទៃdesktopរបស់អ្នក។",
        signin1: "1. នៅពេលអ្នកបើកកម្មវិធី Outlook ជាលើកដំបូង វានឹងស្នើឲ្យអ្នកបន្ថែមគណនី។ ជាដំណាក់កាលដំបូង សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលអ្នកចង់ប្រើ (អាចជាអ៊ីមែលផ្ទាល់ខ្លួន អ៊ីមែលសាលា ឬអ៊ីមែលការងារ)។",
        signin2: "2. បន្ទាប់ពីអ្នកបានបញ្ចូលអ៊ីមែលរួច អ្នកត្រូវបញ្ចូលពាក្យសម្ងាត់ផងដែរ។",
        signin3: "3. Outlook នឹងកំណត់ការកំណត់ស្វ័យប្រវត្តិសម្រាប់អ្នកផ្ដល់សេវាផ្សេងៗច្រើន (ឧ. Gmail, Office 365, Yahoo)។",
        SandR1: "1. ប្រសិនបើអ្នកចង់ផ្ញើអ៊ីមែល ទៅឲ្យនរណាម្នាក់ សូមចុច 'New Email'។",
        SandR2: "2. វានឹងបង្ហាញសំណុំបែបបទមួយ ដែលអ្នកអាចបំពេញបាន។ សំណុំបែបបទនោះរួមមាន 'From, To, CC (ស្រេចចិត្ត), Subject, និង Body' ដែលអ្នកអាចវាយអត្ថបទបាន។ ចុងក្រោយ ចុច 'Send' ដើម្បីផ្ញើ។",
        SandR3: "3. ប្រសិនបើអ្នកចង់ឆ្លើយអ៊ីមែល សូមបើកអ៊ីមែលនោះ ហើយប្រើ 'Reply', 'Reply All' ឬ 'Forward' ពីផ្ទាំង។",
        C1: "1. ចុចលើរូបតំណាងប្រតិទិន។",
        C2: "2. អ្នកអាចកំណត់ការជួប ឬព្រឹត្តិការណ៍ដោយចុចលើ 'New event'។",
        C3: "3. ពេលចុច 'New event' អ្នកនឹងឃើញសំណុំបែបបទមួយ ដែលអាចកំណត់ចំណងជើង ថ្ងៃ ខែ ម៉ោង ទីតាំង និងអញ្ជើញអ្នកចូលរួមតាមអ៊ីមែល។",
        People1: "1. ស្វែងរករូបតំណាង 'People' ហើយចុចលើវា។",
        People2: "2. ចុច 'New Contact'។",
        People3: "3. អ្នកនឹងឃើញសំណុំបែបបទមួយ ដែលអាចបញ្ចូលឈ្មោះ អ៊ីមែល លេខទូរស័ព្ទ និងព័ត៌មានផ្សេងៗ។ ចុច 'Save' រួច​ចុច 'Close' ដើម្បីរក្សាទុក។",
    },
    en: {
      sidebar1: "How to Install",
      sidebar2: "How to Sign in",
      sidebar3: "How to Sending & Relpy Email",
      sidebar4: "How to Use Calender",
      sidebar5: "HOw to Add Contacts",
      title: "How to Install and Use Microsoft Outlook",
      download1: "1. Outlook comes with Microsoft Office or Microsoft 365. But if you want to install Outlook, go to the Microsoft Store and then download it.",
      download2: "2. Launch it from the Start menu or desktop icon",
      signin1:"1. You wil be prompted to add an account on the first launch. And first enter the Email address that you want ( Can be a personal email, a school Email, work Email)",
      signin2:"2. When you have already entered your email, you will have to enter your password too.",
      signin3:"3. Outlook will auto-configure settings for most providers (e.g., Gmail, Office 365, Yahoo).",
      SandR1: "1. If you want to send an email to someone, just click on “New Email”",
      SandR2: "2. You will see the pop-up Form that you can fill in. For the popup, they have “From, To, CC (optional), Subject, and Body that you can type what you want. And lastly, just click Send.",
      SandR3: "3. And if you want to reply to an email, open an email and use Reply, Reply All, or Forward from the ribbon.",
      C1: "1. Click the Calendar icon.",
      C2: "2. You can schedule a meeting or event by clicking New event.",
      C3: "3. When you click New event, you will see a pop-up form where you can set the title, date, time, location, and invite attendees via email.",
      People1: "1. Go Find  People icon and click on it. ",
      People2: "2. Click New Contact",
      People3: "3. You will see a popup from where you can enter name, email, phone, etc. Click Save & Close",
    },
  };
  
    document.getElementById("switchlang").addEventListener("change", function () {
      const selectedLang = this.value;
      sessionStorage.setItem("selectedLang", selectedLang);
      switchLang(selectedLang);
    });
    function switchLang(lang) {
      document.querySelectorAll("[data-translate]").forEach((ele) => {
        const key = ele.getAttribute("data-translate");
        const translatedText = translations[lang][key];
    
        const textSpan = ele.querySelector(".translation-text");
        if (textSpan) {
          textSpan.textContent = translatedText;
        } else {
          ele.textContent = translatedText;
        }
      });
    }
    // switchLang("km");
    document.addEventListener("DOMContentLoaded", function () {
      const savedLang = sessionStorage.getItem("selectedLang") || "km";
      document.getElementById("switchlang").value = savedLang;
      switchLang(savedLang);
    });
    var activePage = window.location.pathname;
    if (activePage.toString() == "/index.html") {
      document.getElementById("download").classList.add("active");
      document.getElementById("download-text").classList.add("test");
    } else if (activePage.toString() == "/pages/AddEmail.html") {
      document.getElementById("addemail").classList.add("active");
      document.getElementById("AddEmail-text").classList.add("test");
    } else if (activePage.toString() == "/pages/SandR.html") {
      document.getElementById("sandr").classList.add("active");
      document.getElementById("sandr-text").classList.add("test");
    } else if (activePage.toString() == "/pages/Calender.html") {
      document.getElementById("calender").classList.add("active");
      document.getElementById("calender-text").classList.add("test");
    } else if (activePage.toString() == "/pages/Contact.html") {
        document.getElementById("contact").classList.add("active");
        document.getElementById("contact-text").classList.add("test");
    } 
    