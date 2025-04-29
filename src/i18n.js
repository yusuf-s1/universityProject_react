import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      /* header */
      'Welcome to React': 'Welcome to React and react-i18next',
      homepage: 'Home Page',
      university: 'University',
      academic: 'Academic',
      student: 'Student',
      search: 'Search',
      /* university */
      mutevelli: 'Board of Trustees',
      tarihce: 'History',
      kvkk: 'PDPA',
      isim: 'Full Name',
      gorev: 'Mission',
      baskan: 'President',
      baskan2: 'Vice President',
      uye: 'Member',
      rektor: 'Chancellor',
      tarihcePara:
        "..... University is a foundation university established by Our Children with Leukemia Foundation in accordance with the Higher Education Law numbered 2547 and started its education life on November 23, 1998. It is Türkiye's leading foundation university that has been continuing its education and research mission in a wide spectrum such as health, engineering, architecture, sports and art since 1998. Haliç University continues its education life with 8 faculties, 3 colleges, 1 vocational school, conservatory and postgraduate education institute and more than 17 thousand current students. Our university, which places design and creativity at its center; in the light of its mission to raise individuals who can produce solutions by looking at problems from different perspectives, is in international rankings with the impact of 27 thousand students who have graduated to date on Turkey and the world. We will be happy to see you among us in Haliç. ",
      kvkkPara:
        '.... UNIVERSITY, we attach importance to the security of your personal data. With this awareness, we show great sensitivity to the preservation of all kinds of personal data belonging to you in the best possible way and with the utmost care. With the awareness of this responsibility, we process your personal data within the framework specified below, as the data controller, within the scope of the Law on the Protection of Personal Data No. 6698 (hereinafter referred to as the Law) and the relevant legislation. Within the scope of the Law, data processing refers to all kinds of operations performed on the data, such as obtaining, recording, storing, updating, classifying, sharing with third parties permitted by the legislation, or transferring to them, your personal data, in whole or in part, by automatic means or non-automatic means, provided that it is part of any data recording system.',
      /* signin */
      email: 'E-mail',
      password: 'Password',
      keepMeLoggedIn: 'Keep Me Logged In',
      signIn: 'Sign In',
      /* academic */
      calendar: 'Academic Calendar',
    },
  },
  tr: {
    translation: {
      /* header */
      'Welcome to React': 'React e hoş geldiniz',
      homepage: 'Ana Sayfa',
      university: 'Üniversitemiz',
      academic: 'Akademik',
      student: 'Öğrencimiz',
      search: 'Ara',
      /* university */
      mutevelli: 'Mütevelli Heyeti',
      tarihce: 'Tarihçe',
      kvkk: 'KVKK',
      isim: 'Adı Soyadı',
      gorev: 'Görev',
      baskan: 'Başkan',
      baskan2: 'Başkan Vekili',
      uye: 'Üye',
      rektor: 'Rektör',
      tarihcePara:
        "..... Üniversitesi, 2547 sayılı Yükseköğretim Kanunu uyarınca Bizim Lösemili Çocuklar Vakfı tarafından kurulmuş bir vakıf üniversitesi olup, 23 Kasım 1998 tarihinde eğitim hayatına başlamıştır. Sağlık, mühendislik, mimarlık, spor ve sanat gibigeniş bir spektrumda eğitim ve araştırma misyonuna 1998 yılındanberi devam eden Türkiye'nin öncü vakıf üniversitesidir. HaliçÜniversitesi, bünyesindeki 8 Fakülte, 3 Yüksekokul, 1 MeslekYüksekokulu, Konservatuvar ve Lisansüstü Eğitim Enstitüsü ve 17 ​bini aşkın mevcut öğrencisi ile eğitim hayatına devam etmektedir. Tasarım ve yaratıcılığı merkezine koyan üniversitemiz; problemlere farklı açılardan bakarak çözümler üretebilen bireyler yetiştirme misyonu ışığında, bugüne kadar mezun olan 27 bin öğrencisinin Türkiye ve dünyaya etkisi ile uluslararası sıralamalarda yer almaktadır. Sizleri de Haliç 'te aramızda görmek bizlere mutluluk verecektir.​​​​​​",
      kvkkPara:
        '.... ÜNİVERSİTESİ olarak, kişisel verilerinizin güvenliği konusuna önem vermekteyiz. Bu bilinçle, sizlere ait her türlü kişisel verinin mümkün olabilen en iyi şekilde ve özenle işlenerek muhafaza edilmesine büyük hassasiyet göstermekteyiz. Bu sorumluluğumuzun bilinci ile 6698 sayılı Kişisel Verilerin Korunması Kanunu (Bundan sonra Kanun olarak belirtilecektir.) ve ilgili mevzuat kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda belirtilen çerçevede işlemekteyiz. Kanun kapsamında, veri işleme, kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla kişisel verilerinizi elde etmemiz, kaydetmemiz, saklamamız, güncellememiz, sınıflandırmamız, mevzuatın izin verdiği üçüncü kişilerle paylaşmamız veya onlara devretmemiz gibi konularda veriler üzerinde gerçekleştirilen hertürlü işlemi ifade etmektedir.​',
      /* signin */
      email: 'E-posta',
      password: 'Şifre',
      keepMeLoggedIn: 'Beni Hatırla',
      signIn: 'Giriş Yap',
      /* academic */
      calendar: 'Akademik Takvim',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
