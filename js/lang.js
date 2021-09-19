var arrLang = {
  "radio-one": {
    "HOME": "Home",
    "ABOUT": "About Us",
    "CONTACT": "Contact Us",
    "title":"Canadian Hub Immigration Consultation - CHIC",
    "Practice-Area":"Practice-Area",
    "slider": "CHIC is a Canadian immigration consultation and services firm, CHIC has two branches in East Canada- Mississauga, and West Canada in Nanaimo. Established by Regulated Canandian Immigration Consultant (RCIC) Feras Saedam - a member of ICCRC in good stand.We are proudly being a part of the successful journey of who seeking to make Canada their home.",
    "Investors":"Investors / entrepreneur Immigration",
    "Investors-des":"Canada is one of the most desired destination for starting businesses and investment in the world, the political and economic stable system put Canada in a well reputation country, in addition to the magnificent social fabric where the multiculturalism is an official policy of the state. The laws and rules in Canada create a secure environment for investing and a quality life level. CHIC has a medley of the professionalism in immigration law and business, that gives CHIC a gigantic ability to advise, represent, and achieves the goals for its clients in their economic immigration applications and their businesses in Canada.For more information, please  "+` contact CHIC `,
"Family":"Family Class Immigration",
"Family-des":"CHIC has the Knowledge and the experience with the IRCC Spousal Sponsorship, and it is the key to success, we can proudly say that we have both. If you’re looking to reunite with your spouse, common-law partner, or conjugal partner, we will be happy to offer our expert services. We will help you through the whole process, starting from determining your eligibility, to handling all your sponsorship and permanent residency paperwork.Contact CHIC for more details about the program and how we can be of assistance",
  },
  "radio-two": {
    "HOME": "القائمة",
    "ABOUT": "من نحنا",
    "CONTACT": "تواصل معنا",
    "title":"المركز الكندي لاستشارات وخدمات الهجرة",
   "Practice-Area":"منطقة التدريب",
   "slider":"المركز الكندي لاستشارات وخدمات الهجرة (تشك) تأسست من قبل مستشار الهجرة فراس صيدم، بفرعيها في شرق كند في مقاطعة أونتاريو بالقرب من تورنتو وبفرعها في غرب كندا في جزيرة فانكوفر أيلاند الخلابة تقدم خدماتها في جميع أنحاء كندا.نحن نفتخر بأن نكون شريك في قصة نجاح الين يرودون الهجرة إلى كندا وجعلها وطنهم الدائم.",
   "Investors":"هجرة الاستثمار وريادة الأعمال",
   "Investors-des":"تعد كندا من أكثر الوجهات رغبة في العالم للبدء بمشاريع الاستثمار والهجرة من خلالها لاستقرارها السياسي، وازدهارها الاقتصادي، ولبنيتها الاجتماعية التي تضم من كل جنسيات وأعراق العالم. وتتميز كندا بالتسامح وبالقوانين التي تحترم هوية الأقليات وتضمن لهم ممارسة عاداتهم وتقاليدهم ضمن سياسية التعدد الثقافي التي تعتمدها كندا كسياسية رسمية للدولة.تقدم (تشك) خبرتها الواسعة والناجحة لرواد الأعمال والمستثمرين الراغبين بالهجرة إلى كندا وفق براج هجرة المستثمرين، حيث ندمج الخبرة في عالم الأعمال مع الخبرة بقانون الهجرة الكندي لتقديم أفضل النصائح لعملائها وتمثيلهم بشكل قانوني ومعترف به من الدولة الكندية.",
   "Family":"طلبات لم الشمل العائلية (الكفالات العائلية)",
   "Family-des":"تتضمن هذه الخدمات كفالة الزوج أو الزوجة والأطفال تحت سن 22 سنة، وكفالة الوالدين والأجداد ضمن شروط محددة للانتقال والعيش في كندا كمقيم دائم ثم كمواطن كندي.لدى المركز الكندي للهجرة الخبرة والدراية مع وزارة الهجرة الكندية فيما يخص هذه الملفات. نحن نقدم لكم  خدماتنا كاملة خلال كل الخطوات اللازمة بدءاً من الاستشارة وانتهاءً بالموافقة على طلب الإقامة الدائمة",
  }
};

$(document).ready(function() {
  // The default language is English
  var lang = "radio-one";
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});


//card
