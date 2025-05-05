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
      calendar: 'Academic Calendar',
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
        "..... University is a foundation university established by Our Children with Leukemia Foundation in accordance with the Higher Education Law numbered 2547 and started its education life on November 23, 1998. It is Türkiye's leading foundation university that has been continuing its education and research mission in a wide spectrum such as health, engineering, architecture, sports and art since 1998. Haliç University continues its education life with 8 faculties, 3 colleges, 1 vocational school, conservatory and postgraduate education institute and more than 17 thousand current students. Our university, which places design and creativity at its center; in the light of its mission to raise individuals who can produce solutions by looking at problems from different perspectives, is in international rankings with the impact of 27 thousand students who have graduated to date on Turkey and the world. We will be happy to see you among us in ... . ",
      kvkkPara:
        '.... UNIVERSITY, we attach importance to the security of your personal data. With this awareness, we show great sensitivity to the preservation of all kinds of personal data belonging to you in the best possible way and with the utmost care. With the awareness of this responsibility, we process your personal data within the framework specified below, as the data controller, within the scope of the Law on the Protection of Personal Data No. 6698 (hereinafter referred to as the Law) and the relevant legislation. Within the scope of the Law, data processing refers to all kinds of operations performed on the data, such as obtaining, recording, storing, updating, classifying, sharing with third parties permitted by the legislation, or transferring to them, your personal data, in whole or in part, by automatic means or non-automatic means, provided that it is part of any data recording system.',
      /* signin */
      email: 'E-mail',
      password: 'Password',
      keepMeLoggedIn: 'Keep Me Logged In',
      signIn: 'Sign In',
      /* academic */
      academic: 'Academic',
      faculties: 'Faculties',
      med: 'Faculty of Medicine',
      health: 'Faculty of Health Sciences',
      engineer: 'Faculty of Engineering',
      arc: 'Faculty of Architecture',
      business: 'Business School',
      fineart: 'Faculty of Fine Arts',
      science: 'Faculty of Science and Letters',
      sport: 'Faculty of Sport Sciences',
      college: 'Colleges',
      foreign: 'School of Foreign Languages',
      conservatory: 'Conservatory',
      nursing: 'School of Nursing',
      physical: 'School of Physical Education and Sports',
      vocational: 'Vocational School',
      /* addition */
      copy: 'All Rights Reserved.',
      news: 'News',
      read: 'Read More',
      kultur: 'Culture, Art, Technology',
      seeAll: 'See All',
      academicCalendar: {
        title: 'Academic Calendar',
        headers: {
          date: 'Date',
          event: 'Event',
          description: 'Description',
        },
        rows: [
          {
            date: 'September 16, 2024',
            event: 'School Opening',
            description:
              'The 2024-2025 academic year begins on Monday, September 16. An opening ceremony will be held at 9:00 AM in the schoolyard.',
          },
          {
            date: 'September 23, 2024',
            event: 'Orientation Week',
            description:
              'An orientation program will be organized for new students, including school tours and teacher meetings.',
          },
          {
            date: 'September 30, 2024',
            event: 'Club Fair',
            description:
              'All social clubs will set up booths for students to explore and register according to their interests.',
          },
          {
            date: 'October 4, 2024',
            event: 'Fire Drill',
            description:
              'A school-wide emergency evacuation drill will be conducted under teacher supervision.',
          },
          {
            date: 'October 28, 2024',
            event: 'Republic Day Ceremony',
            description:
              'To celebrate the 101st anniversary of the Republic, students will perform poems and songs. Participation is mandatory.',
          },
          {
            date: 'November 11, 2024',
            event: 'Midterm Exams',
            description:
              'The first term exams will take place between November 11–15. Students must follow the posted exam schedule.',
          },
          {
            date: 'November 25, 2024',
            event: "Teachers' Day Celebration",
            description:
              'A celebration program organized by students will take place in the auditorium at 2:00 PM.',
          },
          {
            date: 'December 2, 2024',
            event: 'Winter Sports Tournament',
            description:
              'Competitions in basketball, volleyball, and table tennis will be held. Student teams will be supervised by teachers.',
          },
          {
            date: 'December 16, 2024',
            event: 'Career Day',
            description:
              'Guest speakers from various professions will share their career experiences with students.',
          },
          {
            date: 'January 6, 2025',
            event: 'Final Exams',
            description:
              'Final exams for the first term will be held from January 6–17. Exam entrance documents will be distributed.',
          },
          {
            date: 'January 20, 2025',
            event: 'End of First Term',
            description:
              'The term ends and report cards with performance evaluations will be handed out.',
          },
          {
            date: 'February 3, 2025',
            event: 'Start of Second Term',
            description:
              'Classes resume, and any classroom or advisor changes will be announced.',
          },
          {
            date: 'February 14, 2025',
            event: 'Winter Festival',
            description:
              'A fun day with warm drinks, music, and games will be organized to celebrate the winter season.',
          },
          {
            date: 'March 3, 2025',
            event: 'Science Fair',
            description:
              'Students will exhibit their yearly projects. Parents are welcome to attend.',
          },
          {
            date: 'April 1, 2025',
            event: 'Spring Picnic',
            description:
              'All students will join a nature walk and picnic event to welcome the spring.',
          },
          {
            date: 'April 23, 2025',
            event: "Children's Day",
            description:
              'Students will perform stage shows to celebrate the national holiday. A detailed program will be posted.',
          },
          {
            date: 'May 26, 2025',
            event: 'Graduation Ceremony',
            description:
              'A cap-throwing ceremony and party will be held for senior students.',
          },
          {
            date: 'June 13, 2025',
            event: 'School Closes',
            description:
              'The 2024-2025 academic year ends. Report cards will be distributed, and summer break begins.',
          },
        ],
      },
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
      calendar: 'Akademik Takvim',
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
        "..... Üniversitesi, 2547 sayılı Yükseköğretim Kanunu uyarınca Bizim Lösemili Çocuklar Vakfı tarafından kurulmuş bir vakıf üniversitesi olup, 23 Kasım 1998 tarihinde eğitim hayatına başlamıştır. Sağlık, mühendislik, mimarlık, spor ve sanat gibigeniş bir spektrumda eğitim ve araştırma misyonuna 1998 yılındanberi devam eden Türkiye'nin öncü vakıf üniversitesidir. HaliçÜniversitesi, bünyesindeki 8 Fakülte, 3 Yüksekokul, 1 MeslekYüksekokulu, Konservatuvar ve Lisansüstü Eğitim Enstitüsü ve 17 ​bini aşkın mevcut öğrencisi ile eğitim hayatına devam etmektedir. Tasarım ve yaratıcılığı merkezine koyan üniversitemiz; problemlere farklı açılardan bakarak çözümler üretebilen bireyler yetiştirme misyonu ışığında, bugüne kadar mezun olan 27 bin öğrencisinin Türkiye ve dünyaya etkisi ile uluslararası sıralamalarda yer almaktadır. Sizleri de ... 'te aramızda görmek bizlere mutluluk verecektir.​​​​​​",
      kvkkPara:
        '.... ÜNİVERSİTESİ olarak, kişisel verilerinizin güvenliği konusuna önem vermekteyiz. Bu bilinçle, sizlere ait her türlü kişisel verinin mümkün olabilen en iyi şekilde ve özenle işlenerek muhafaza edilmesine büyük hassasiyet göstermekteyiz. Bu sorumluluğumuzun bilinci ile 6698 sayılı Kişisel Verilerin Korunması Kanunu (Bundan sonra Kanun olarak belirtilecektir.) ve ilgili mevzuat kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda belirtilen çerçevede işlemekteyiz. Kanun kapsamında, veri işleme, kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla kişisel verilerinizi elde etmemiz, kaydetmemiz, saklamamız, güncellememiz, sınıflandırmamız, mevzuatın izin verdiği üçüncü kişilerle paylaşmamız veya onlara devretmemiz gibi konularda veriler üzerinde gerçekleştirilen hertürlü işlemi ifade etmektedir.​',
      /* signin */
      email: 'E-posta',
      password: 'Şifre',
      keepMeLoggedIn: 'Beni Hatırla',
      signIn: 'Giriş Yap',
      /* academic */
      academic: 'Akademik',
      faculties: 'Fakülteler',
      med: 'Tıp Fakültesi',
      health: 'Sağlık Bilimleri Fakültesi',
      engineer: 'Mühendislik Fakültesi',
      arc: 'Mimarlık Fakültesi',
      business: 'İşletme Fakültesi',
      fineart: 'Güzel Sanatlar Fakültesi',
      science: 'Fen ve Edebiyat Fakültesi',
      sport: 'Spor Bilimleri Fakültesi',
      college: 'Yüksekokullar',
      foreign: 'Yabancı Diller Yüksekokulu',
      conservatory: 'Konservatuvar',
      nursing: 'Hemşirelik Yüksekokulu',
      physical: 'Beden Eğitimi ve Spor Yüksekokulu',
      vocational: 'Meslek Yüksek Okulu',
      /* addition */
      copy: 'Tüm hakları saklıdır.',
      news: 'Haberler',
      read: 'Görüntüle',
      kultur: 'Kültür Sanat Teknoloji',
      seeAll: 'Tümünü Görüntüle',
      academicCalendar: {
        title: 'Akademik Takvim',
        headers: {
          date: 'Tarih',
          event: 'Etkinlik',
          description: 'Açıklama',
        },
        rows: [
          {
            date: '16 Eylül 2024',
            event: 'Okulun Açılışı',
            description:
              '2024-2025 eğitim öğretim yılı 16 Eylül Pazartesi günü başlayacaktır. Açılış töreni saat 09:00’da okul bahçesinde yapılacaktır.',
          },
          {
            date: '23 Eylül 2024',
            event: 'Oryantasyon Programı',
            description:
              'Yeni kayıt olan öğrenciler için sınıf öğretmenleri eşliğinde 1 hafta sürecek tanıtım ve uyum programı başlatılacaktır.',
          },
          {
            date: '30 Eylül 2024',
            event: 'Kulüp Tanıtım Günü',
            description:
              'Tüm sosyal kulüpler stantlarını kuracak, öğrenciler ilgi alanlarına göre kulüplere kayıt olabilecektir.',
          },
          {
            date: '4 Ekim 2024',
            event: 'Yangın Tatbikatı',
            description:
              'Acil durumlara hazırlık amacıyla tatbikat yapılacaktır. Öğrenciler öğretmen rehberliğinde bina tahliyesi gerçekleştirecektir.',
          },
          {
            date: '28 Ekim 2024',
            event: 'Cumhuriyet Bayramı Töreni',
            description:
              'Cumhuriyetimizin 101. yılı kutlanacak, öğrenciler şiir ve müzik dinletisi sunacaktır. Katılım zorunludur.',
          },
          {
            date: '11 Kasım 2024',
            event: '1. Dönem Vize Sınavları',
            description:
              '11-15 Kasım tarihleri arasında yapılacaktır. Öğrenciler sınav programını okul panosundan takip etmelidir.',
          },
          {
            date: '25 Kasım 2024',
            event: 'Öğretmenler Günü Etkinliği',
            description:
              'Öğrenciler tarafından hazırlanan kutlama programı saat 14.00’te konferans salonunda düzenlenecektir.',
          },
          {
            date: '2 Aralık 2024',
            event: 'Kış Sporları Turnuvası',
            description:
              'Basketbol, voleybol ve masa tenisi müsabakaları düzenlenecektir. Takımlar öğretmen denetiminde seçilecektir.',
          },
          {
            date: '16 Aralık 2024',
            event: 'Kariyer Günü',
            description:
              'Farklı meslek gruplarından konuklar öğrencilerle meslek deneyimlerini paylaşacaktır.',
          },
          {
            date: '6 Ocak 2025',
            event: 'Dönem Sonu Sınavları',
            description:
              '6-17 Ocak tarihleri arasında dönem sonu sınavları yapılacaktır. Sınav giriş belgeleri öğrencilere dağıtılacaktır.',
          },
          {
            date: '20 Ocak 2025',
            event: '1. Dönem Kapanışı',
            description:
              'Birinci dönem sona erecek, karne dağıtımı ve performans değerlendirmeleri yapılacaktır.',
          },
          {
            date: '3 Şubat 2025',
            event: '2. Dönem Başlangıcı',
            description:
              'İkinci dönem dersleri başlayacak, sınıf değişiklikleri ve danışman atamaları duyurulacaktır.',
          },
          {
            date: '14 Şubat 2025',
            event: 'Kış Festivali',
            description:
              'Sıcak içecekler, müzik ve eğlenceli aktivitelerin yer alacağı bir festival düzenlenecektir.',
          },
          {
            date: '3 Mart 2025',
            event: 'Bilim Şenliği',
            description:
              'Tüm sınıflar yıl boyunca hazırladıkları projeleri sergileyecek. Veliler de davetlidir.',
          },
          {
            date: '1 Nisan 2025',
            event: 'Bahara Merhaba Pikniği',
            description:
              'Tüm okulun katılımıyla doğa yürüyüşü ve piknik etkinliği yapılacaktır.',
          },
          {
            date: '23 Nisan 2025',
            event: 'Ulusal Egemenlik ve Çocuk Bayramı',
            description:
              'Öğrenciler sahne gösterileri ile bayramı kutlayacak. Etkinlik programı önceden ilan edilecektir.',
          },
          {
            date: '26 Mayıs 2025',
            event: 'Mezuniyet Töreni',
            description:
              '12. sınıf öğrencileri için kep töreni ve mezuniyet eğlencesi düzenlenecektir.',
          },
          {
            date: '13 Haziran 2025',
            event: 'Okulun Kapanışı',
            description:
              '2024-2025 yılı sona erer. Karneler dağıtılacak, yaz tatiline girilecektir.',
          },
        ],
      },
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
