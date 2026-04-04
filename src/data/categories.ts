export interface WritingItem {
  id: string;
  title: string;
  content?: string;
  date?: string;
  image?: string;
  audioFile?: string;
  englishTranslation?: string;
  englishAudioFile?: string;
}

export interface SubCategory {
  id: string;
  title: string;
  description?: string;
  image?: string;
  items: WritingItem[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  icon: string;
  description: string;
  subCategories?: SubCategory[];
  items?: WritingItem[];
}

export const categories: Category[] = [
  {
    id: "his-poems",
    number: "1",
    title: "அவரின் கவிதைகள்",
    icon: "✍️",
    description: "அவர் எழுதிய ஆழமான அழகான கவிதைகள்",
    subCategories: [
      {
        id: "his-vaazhthu",
        title: "வாழ்த்து மடல்கள்",
        items: [
          {
            id: "hv4", title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.இராமலிங்கம், நாயகி: திருமதி.கௌரி இராமலிங்கம்]",
            date: "07 ஏப்ரல் 1996",
            audioFile: "/madras thaatha - 60.m4a",
            image: "/vazhthu-2.jpg",
            englishTranslation: `Dear ones!
Our ideal couple!

We lie curled up like snails inside our shells. But your 'shell' (home) is so spacious, just like your hearts...
Your preference is always the company of relatives. The excitement and joy that arise when meeting you, and the exhaustion and sadness felt when parting from you... what are these if not events that proclaim the greatness of your affection?

Do you seek out lively places? Or does a place become lively because you are there? In an age where everyone prefers to withdraw into the privacy of a separate room, how is it possible that you alone always desire to converse and be with everyone?

"Wherever we go, we go together with everyone"—who else could possess such a mindset but you?

We, who are used to determining everything only through cold calculations, find ourselves unable to fully understand you; we simply gaze in constant wonder.

You are an unparalleled couple capable of withstanding even a swirling hurricane. The reason you, who are so gentle, possess the mental strength to face anything is surely because you act as each other's driving force!

Gathered around you, we listen without blinking as your words weave magic—your skill in conversation that keeps us sitting still for hours... Oh, what a sweet experience!

You are the very literature for the grammar of "Made for each other." Economic status has never defined your love. Indeed, you are an exception to Karl Marx's theories. Did compassion arise from your mutual understanding? Or did this understanding bloom from the compassion that exists between you?

We can only celebrate you; we cannot fully grasp the depth of it! On this Diamond Jubilee, which is the true victory celebration of your domestic life, we greet and salute you with great joy and deep humility! We bow and offer our wishes.

In your ever-expanding circle of love, we only ask for a permanent place for ourselves. That is enough; that is our only desire and our prayer.

Forever with love,
Pon. Muthukumar

Seeking blessings with reverence:
M. Velammal Muthukumar
M. Sathish
M. Arasi`,
            content: `மணி விழா வாழ்த்து
அன்பானவர்களே!
எங்களின் ஆதர்ச தம்பதிகளே!

நத்தையாய் கூட்டுக்குள் சுருண்டு கிடக்கிறோம் நாங்கள். ஆனால் உங்கள் கூடுதான் எத்தனை விசாலமானது, உங்கள் இதயத்தைப் போல...
உறவினர்களின் உடனிருப்புதான் உங்களுக்கு உசிதமானது தங்களைச் சந்திக்கும் போது எழும் உற்சாகம் குதூகலம், தங்களிடம் விடைபெறும் போது ஏற்படும் சோர்வு, வருத்தம்...

உங்கள் பாசத்தில் மேன்மையை பிரகடனப்படுத்தும் நிகழ்வுகள் அன்றி வேறு என்ன? கலகலப்பாய் இருக்கும் இடங்களில் நீங்கள் இருக்கிறீர்களா? அல்லது நீங்கள் இருக்கும் இடம் கலகலப்பாக இருக்கிறதா? எல்லோரும் தனி அறை (Privacy) என ஒதுங்கிக் கொள்ளவே பிரியப்படும் போது, நீங்கள் மட்டும் எல்லோருடனும் சேர்ந்து உரையாடவே பிரியப்படுவது எப்படி சாத்தியப்படுகிறது உங்களுக்கு?

'எங்கு சென்றாலும் எல்லோரும்' இந்த மனப்பாங்கு உங்களையன்றி வேறு யாருக்கு வரும்?

கணக்குகளால் மட்டுமே எல்லாவற்றையும் தீர்மானிக்க இயலுகிற எங்களால் உங்களை விளங்கிக் கொள்ள முடியாமல், வியந்து, வியந்து போகிறோம்.

சுற்றிச் சுழன்றடிக்கும் சூறாவளிக்கும் ஈடு கொடுக்கும் இணையற்ற தம்பதிகள் நீங்கள். மென்மையான நீங்கள், மன உரத்தோடு எதையும் சந்திக்கும் ஆற்றல் பெற்றிட காரணம் பரஸ்பரம் ஒருவருக்கொருவர் உந்து சக்தியாக இருப்பதால்தானே!

உங்களைச் சுற்றி நாங்கள் கண் இமைக்காமல் பாய்ந்து வரும் உங்கள் வார்த்தை ஜாலங்கள் - மணிக்கணக்காய் அசையாமல் உட்கார வைக்கும் உங்கள் சம்பாஷணை சாமர்த்தியம் அடடா எத்தனை இனிய அனுபவம்?

'Made for each other' என்ற இலக்கணத்திற்கு நீங்கள் தானே இலக்கியம். 'பொருளாதார நிலை என்றுமே' உங்கள் அன்பை நிர்ணயித்ததே இல்லை. ஆம் காரல் மார்க்ஸின் விதிக்கு நீங்கள் ஒரு விதி விலக்கு. பரஸ்பர புரிதலால் உங்களிடம் பரிவுணர்வு வந்ததா? அல்லது உங்களிடையே நிலவும் பரிவுணர்வால் வந்ததா இந்த புரிதல்?

எங்களால் சிலாகிக்க மட்டுமே முடிகிறது, எதையும் கிரகிக்க முடியவில்லை! உங்கள் இல்லற வாழ்வின் மெய்யான வெற்றி விழாவான இந்த மணி விழாவில் உங்களை மெத்த மகிழ்வோடும், மெத்தப் பணிவோடும் நாங்கள் வாழ்த்தி வணங்குகிறோம்! வணங்கி வாழ்த்துகிறோம்.

பல்கிப் பெருகி பரவும் உங்கள் அன்பு வட்டத்தில் எங்களுக்கு என்றும் ஒரு நிரந்தர இடம் வேண்டும் அது போதும், அதுவே எங்கள் ஆசை அதற்காகவே எங்கள் பிரார்த்தனை.

என்றென்றும் அன்புடன்,
பொன் முத்துக்குமார்

வணங்கி ஆசி கோரும்:
M. வேலம்மாள் முத்துக்குமார்
M. சதீஷ்
M. அரசி`
          },
          {
            id: "hv7", title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.M.இராமலிங்கம் B.Com., H.D.C., CAIIB., நாயகி: திருமதி. கோமதி இராமலிங்கம்]",
            date: "09 நவம்பர் 1997",
            audioFile: "/Perumalpuram_Thatha_60th_Marriage.mp3",
            image: "/chinna_thaatha-pik.jpg",
            englishTranslation: `Dear ones!
My memories blooming during your Diamond Jubilee

You were my childhood idols. All the practice letters my primary school teachers made me write—'Invitation for Birthday,' 'Thanks for the Gift,' 'Requesting money for a tour'—were all addressed to you. Whenever you visited our town, what joy we felt in showing you our exam papers!

We used to wait longingly just for your appreciation. How hard you tried to make me an engineer... Today, I may not have blossomed as a great achiever, but the main reason I have blossomed as a good human being in society is the impact of your personalities.

To hear the 'Story of the Banana Lazybones' and 'O. Henry' stories in your own words... Ah! Your unique talent for storytelling without getting tired brings a surge of excitement within us every single time, as if we are hearing it for the first time.

You are a repository of information on any topic. Your ability to speak interestingly about politics, literature, society, spirituality, or cinema songs... how proud we are of your wisdom!

You are the first-born son of our mother’s house. Similarly, am I not the first-born of your house? No matter how many times your high positions or rightful places were denied to you, your majesty never faded.

You felt sympathy for those gasping for breath in the rush of competition. That is why you suffered without getting a 'Promotion Ticket.' It wasn’t that your superiors didn’t utilize you; it was that you chose not to "utilize" them to get a promotion.

How is it that... helping you seemed to be another full-time job in itself! You have such refined tastes—ground spices, ginger-infused hot water, oil-soaked chilies, and murukku. Your praise is the ultimate victory; to receive it is like a Nobel Prize. Un-soured dosa batter and curry without tamarind—these things represent your love. Enjoying everything you discuss and praising everything you taste are your special traits, aren't they?

When you threw away your job without making any alternative arrangements, what words are enough to praise and appreciate dear Anni, who stood by you like a mountain, brave and supportive, to face the challenges of life? How magnificent was the cooperation Anni gave in managing the family while you were immersed in office work!

The 'Monetary Discipline' that is talked about so grandly by Finance Ministers today shone in Anni's family budget long ago! Planned spending and a strength of character that doesn't succumb to luxuries—aren't these common traits of you both?

O, ones worthy of unchanging affection! Ones who are always filled in our hearts! Diamond Jubilee Love Birds! You are the literary evidence for the grammar that "A family is a University!" I bow and greet you, and greet and bow to you—may you live with prosperity and good health.

Forever with love, the child of your house,
Pon. Muthukumar`,
            content: `அன்புக்குரியவர்களே!
உங்கள் மணிவிழாவின் போது மலரும் என் நினைவுகள்

என் சின்னவயது ஆதர்சமே நீங்கள்தான். என் ஆரம்பப் பள்ளி ஆசிரியர்கள் எழுதச் சொன்ன 'பிறந்த நாளுக்கு அழைப்பு', 'பிறந்த நாள் பரிசுக்கு நன்றி', 'இன்பச் சுற்றுலா செல்ல பணம் வேண்டுதல்' போன்ற என்னால் எழுதப்பட்ட அனைத்துக் கடிதங்களும் உங்களுக்கே எழுதப்பட்டன. நீங்கள் ஊருக்கு வரும்போதெல்லாம், எங்கள் பரீட்சை பேப்பர்களை உங்களுக்கு காட்டுவதில் தான் எங்களுக்கு எத்தனை மகிழ்ச்சி!

உங்கள் பாராட்டுக்களுக்காகவே எதிர்பார்த்துக் காத்து கிடப்போம் நாங்கள். என்னை ஒரு இன்ஜினியர் ஆக்கிவிடத்தான் எவ்வளவு முயன்றீர்கள்... இன்று நான் ஒரு சாதனையாளனாக மலரவில்லைதான். ஆனால், சமூகத்தில் நல்ல மனிதனாக மலர, உங்கள் ஆளுமையின் தாக்கம் தானே முக்கிய காரணம்.

உங்களுடைய 'வாழைப்பழ சோம்பேறி கதையும்', 'ஓ! ஹென்றி' கதையும் உங்கள் வார்த்தைகளில் கேட்க... கேட்க... அடடா... அலுக்காமல் கதை சொல்லும் உங்கள் தனித்திறம் ஒவ்வொரு முறையும் புதிதாய் கேட்பது போல் எங்களுக்குள் பொங்கி எழும் உற்சாகம்.

எது குறித்தும் உரையாடும் நீங்கள் ஒரு தகவல் களஞ்சியம். அரசியல் - இலக்கியம் - சமூகம் - ஆன்மீகம் - சினிமா பாடல்கள் எதுகுறித்தும் சுவாரஸ்யமாக பேசக்கூடிய உங்கள் திறன்... எங்களுக்குத் தான் உங்கள் ஞானம் குறித்து எத்தனை பெருமை!

எங்கள் அன்னை இல்லத்தின் தலைப்பிள்ளை நீங்கள். அதுபோல் உங்கள் இல்லத்தில் நான் தானே தலைப்பிள்ளை! உங்களது உயரிய இடங்கள் என்ன, உரிய இடங்கள் கூட மறுக்கப்பட்ட போதும் உங்கள் கம்பீரம் மட்டும் மறைந்து விடவில்லை.

போட்டி நெரிசலில் மூச்சுத் திணறுவோருக்கு நீங்கள் அனுதாபப்பட்டீர்கள். எனவே தான் நீங்கள் Promotion Ticket கிடைக்காது அவதிப்பட்டீர்கள். உங்களை மேலதிகாரிகள் பயன்படுத்திக வேலை வாங்கினார்கள், நீங்கள் தான் அவர்களைப் பயன்படுத்தி பதவி உயர்வு வாங்கவில்லை.

அதெப்படி.... உங்களுக்கு மட்டும் உதவிய மாத்திரத்தில் இன்னொரு உத்தியோகம்! உங்களுக்குத்தான் எத்தனை மென்மையான ரசனைகள் - இடித்தபொடி, சுக்கு வென்னீர், எண்ணெய் மிளகாய், முறுக்கு. உங்கள் பாராட்டுக்கள் தானே வாகை அத்தைக்கு நோபல் பரிசுகள் புளிக்காத மா தோசை, புளியில்லா குழம்பு இவை உங்களிடம் நேசம் கொள்ளும். எதையும் ரசித்து பேசுவதும், ருசித்து பாராட்டுவது உங்கள் சிறப்பு அம்சங்கள் அல்லவா?

மாற்று ஏற்பாடு எதுவும் செய்யாமலேயே, வேலையைத் தூக்கி எறிந்த போது எழுந்த வாழ்க்கைச் சவாலை சந்திக்க, மலையென உங்களுக்குத் துணையாக, துணிவாக நின்ற அன்புக்குரிய அண்ணியை புகழ்ந்து பாராட்ட வார்த்தைகள் ஏது? அலுவலக வேலைகளில் மூழ்கிப் போன உங்களுக்கு குடும்ப நிர்வாகத்தில் அண்ணி அளித்த ஒத்துழைப்பு தான் எத்தனை மகத்தானது!

இன்று நிதி அமைச்சரால் பிரமாதமாகப் பேசப்படும் 'Monetary Discipline' அண்ணியின் குடும்ப பட்ஜெட்டில் அன்றே பளிச்சிட்டதே! திட்டமிட்டு செலவிடலும், ஆடம்பரங்களுக்கு மயங்காத திண்மையும் உங்கள் இருவரின் பொதுக் குணங்கள் அல்லவா?

மாறா நேசத்திற்கு உரியவர்களே! என்றும் எம் நெஞ்சில் நிறைந்தவர்களே! மணிவிழா ஜோடிப் புறாக்களே! குடும்பம் ஒரு பல்கலைக்கழகம் என்ற இலக்கணத்திற்கு இலக்கிய சாட்சிகளே! வாழ்க வளமுடன், வாழ்க நலமுடன் என வணங்கி வாழ்த்துகிறேன்; வாழ்த்தி வணங்குகிறேன்.

என்றென்றும் அன்புடன், உங்கள் வீட்டுப் பிள்ளை,
பொன். முத்துக்குமார்`
          },
          {
            id: "hv2",
            title: "மணி விழா வாழ்த்து - மேலாண்மை இயக்குநர் மற்றும் தலைவர் - திரிவேணி, சேலம்",
            date: "29 அக்டோபர் 2006",
            audioFile: "",
            englishTranslation: `O, Diamond Jubilee Couple!
We greet and salute you!
We salute and greet you!
The secret to the success of your domestic life
is compassion and understanding.
Did this understanding come from compassion?
Or did compassion come from understanding?
We stand in wonder; we stand in reverence.

O, Hero of the Jubilee!
Is it not because you are a good head of the family
that you are able to shine as a great administrator?
Pointing out flaws without hesitation
and praising merits with an open heart
is your style; and that is the first ladder to your success!
You are one who understands the fundamental principles of management,
and you designed your approach based on them.
You learned through experience!
With those learned experiences, you touched the peaks!
Even while touching the peaks, you remembered your foundations,
and that is why you triumphed in life.
It was hard work that raised you high;
exhaustion and boredom never touched you.
You are a man of affection who spreads love
both at home and in the office!
A noble man who helps at the right time!
Embracing everyone and moving forward is your nature,
and that plays a huge part in your success.

We pray to the Almighty
that you may witness many more celebrations like Sathabhishekam (80th Birthday)
and that eternal happiness may always follow you.
Hearts that greet, salute, and seek your blessings:
On behalf of Tiriveni Office Colleagues

 - Pon Muthukumar,
   Panagudi`,
            content: `மணிவிழா தம்பதியரே!
வாழ்த்தி வணங்குகிறோம்!
வணங்கி வாழ்த்துகிறோம்!
உங்கள் இல்லற வாழ்வின் வெற்றிக்கு காரணம்
பரிவும், புரிதலும் தான்.
பரிவுணர்வால் வந்ததா இந்த புரிதல்?
புரிதலால் வந்ததா இந்த பரிவுணர்வு?
வியந்து போகிறோம்; வணங்கி நிற்கிறோம்;

மணிவிழா நாயகரே!
நல்ல குடும்பத் தலைவராக இருப்பதால் தானே
நல்ல நிர்வாகியாக ஜொலிக்க முடிகிறது.
குறைகளை நாசுக்காக சுட்டிக் காட்டுவதும்
நிறைகளை மனந்திறந்து பாராட்டுவதும்
உங்கள் பாணி; அதுதானே உங்கள் வெற்றிக்கு முதல் ஏணி!
நிர்வாக அடிப்படை கோட்பாட்டை அறிந்தவர் நீங்கள்
அதன் அடிப்படையில் அணுகுமுறையை அமைத்தவர் நீங்கள்
அனுபவங்களை கொண்டே கற்றீர்கள்!
கற்ற அனுபவங்களால் சிகரங்களைத் தொட்டீர்கள்!
சிகரங்களைத் தொட்டாலும் அடித்தளங்களை நினைத்தீர்கள்
அதனாலேயே வாழ்வில் ஜெயித்தீர்கள்.
உங்களை உயர வைத்தது கடின உழைப்பு
என்றும் தீண்டியதில்லை அலுப்பு, சலிப்பு
இல்லத்திலும், அலுவலகத்திலும் பாசத்தை
கொண்டு சேர்க்கும் நேச மனிதர்!
உரிய நேரத்தில் உதவுவதில் உயர்ந்த மனிதர்!
அனைவரையும் அரவணைத்து செல்வது உங்கள் பாங்கு
உங்கள் வெற்றியில் அதற்குண்டு பெரும் பங்கு

சதாபிஷேகம் போன்ற விழா பல காணவும்
சதா சந்தோஷம் உங்களை தொடரவும்
சகல வல்லமையுள்ள இறைவனை வேண்டி நிற்கிறோம்.

வாழ்த்தி வணங்கி ஆசியை வேண்டும் நெஞ்சங்கள்
திரிவேணி அலுவலக பந்தங்கள் சார்பாக,

          பொன்.முத்துக்குமார்,
          பணகுடி.` },
          {
            id: "hv6", title: "சதாபிஷேக வாழ்த்து - [நாயகன்: திருமிகு இரா. வேதநாயகம், நாயகி: திருமதி.நவநீத கிருஷ்ணம்மாள்]",
            date: "28 மார்ச் 2007",
            audioFile: "/sadha.mp3",
            image: "/Vethanayagam_thaatha.jpg",
            englishTranslation: `
            If domestic life possesses love and virtue, that itself is its character and its reward.
    
    O, Hero of the Sathabhishekam!
    We bow and greet you!
    The emotional ecstasy that flows in your voice when you speak!
    Your elegant conversational skill—magnetic speech that attracts everyone!
    We go with joy; we stand in awe!
    Even when addressing grown-up children with deep affection, your approach is filled with 
    immense delight—calling out "Kittakka, Kittanni, Kittu Periamma, Kittu Athai."
    Is it not Anni’s heart that shows undiscriminating love to everyone she calls with such compassion?
    
    Hot water for guests to bathe,
    Anni’s tireless effort at the griddle making hot dosas for each person,
    What great elegance there is in your hospitality!
    What joy shines on her face!
    A melting affection devoid of pretension!
    Ah... what deep emotion there is in Anni’s care!
    
    The dear Anni who looked after you with compassion and understanding back then—the way 
    you look after her today with the same compassion and understanding—both of you 
    are competing with each other to proclaim the excellence of domestic life.
    
    You are a couple truly worthy of celebrating this Sathabhishekam!
    
    Your perspective and approach are unique and very interesting.
    While you sought recommendations for others without worrying about your own dignity, 
    honors came seeking you. 
    You are the first to step forward to help. 
    You are the one who compels those in a position to help to actually do so. 
    Whether it be the Sub-Collector, the Tahsildar, or the Panchayat Director, 
    you place requests without hesitation and ensure action is taken. 
    "We will do what we say; does it cost gold or money? 
    If it works out, we get the mango; if not, we only lose a stone"—that wonderful philosophy is an art 
    you have mastered.
    
    It is your habit that the money you give as a gift, saying "just keep it," is always of the highest amount.
    
    You are a man of principle who finds joy in giving.
    
    Though you speak firmly or rebukes the local youths who swarm around you calling you "Atthan, Atthan," 
    you have actually imprisoned them within the circle of your love.
    You are opposed to the practice of making today miserable for the sake of tomorrow's happiness.
    If you had only saved everything you earned... (you might have had wealth).
    But instead, you have earned and "saved" these wonderful relationships!
    From the bottom of our hearts, we place our sweet greetings at your feet and seek your blessings.
    
    Forever with love,
    Pon. Muthukumar - Mu. Velammal, Panagudi.`,
            content: `
            அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
            பண்பும் பயனும் அது.
    
    சதாபிஷேக நாயகரே!
    வணங்கி வாழ்த்துகிறோம்!
    உரையாடும் போது உங்கள் குரலில் வந்து போகும் உணர்ச்சி பரவசம்!
    நேர்த்தியான உரையாடல் திறன் - எல்லோரையும் கவர்ந்து இழுக்கும் காந்தப் பேச்சு!
    மகிழ்ந்து போவோம், வியந்து நிற்போம்!
    வளர்ந்து விட்ட பிள்ளைகளை கூட வாஞ்சையோடு அழைக்கும் பாங்கு பேச்சில்
    குதித்தோடும் குதூகலமும் கலந்தோடும் அணுகுமுறை - கிட்டக்கா 
    கிட்டண்ணி, கிட்டு பெரியம்மா, கிட்டு அத்தை, என பரிவோடு அழைக்கும் அனைவருக்கும் 
    பேதமில்லா நேசம் காட்டும் நெஞ்சம் அண்ணியினுடையதல்லவா...!
    
    விருந்தினருக்கு குளிக்க வெந்நீர்
    சூடான தோசைக்காக அலுக்காமல் அண்ணி ஆளுக்கொருக்காய் போடும் தோசைக்கல்
    உபசரிப்பிலே தான் எத்தனை நேர்த்தி!
    அவள் முகத்தில் தான் எத்தனை மகிழ்ச்சி!
    பாசாங்கற்ற பாச நெகிழ்ச்சி!
    அடடா... அண்ணியின் கவனிப்பில் தான் எத்தனை உணர்ச்சி!
    
    அன்று பரிவோடும், புரிதலோடும் தங்களை கவனித்த அன்பிற்குரிய அண்ணியை 
    இன்று பரிவோடும் புரிதலோடும் நீங்கள் கவனிக்கும் பாங்கு - இருவரும் போட்டி போட்டு 
    இல்லற வாழ்வில் மேன்மையை பிரகடனப்படுத்துகிறீர்கள்.
    
    சதாபிஷேகம் கொண்டாடும் தகுதிக்குரிய தம்பதிகள் நீங்கள்!
    
    உங்கள் பார்வை அணுகுமுறை வித்தியாசமானது மிகவும் சுவாரஸ்யமானது.

    சிபாரிசுகள் கௌரவம் பார்க்காமல் பெற்றுத் தரும் உங்களை கௌரவங்கள் தேடி வந்தன. 
    உதவுவதற்கு முந்துபவர்கள் நீங்கள். 
    உதவும் நிலையில் இருப்பவர்கள் உதவ வேண்டும் என நிர்பந்திப்பவர் நீங்கள். 
    சப் கலெக்டர் என்றாலும் சரி, தாசில்தார் என்றாலும் சரி, ஊராட்சி இயக்குநர் என்றாலும் சரி,
    தயங்காமல் கோரிக்கை வைப்பது நீங்கள் 
    நடவடிக்கை எடுக்க வைப்பதும் நீங்கள். 
    சொல்வதை செய்வோம் அதற்கு காசா? பணமா? 
    கிடைத்தால் மாங்காய் போனால் கல் அற்புதமாக அணுகுமுறை
    அது உங்களுக்கு கைவந்த கலை.
    
    சும்மா வச்சுக்கோங்க என நீங்கள் அன்பளிப்பாய் கொடுக்கும் பணம் 
    உச்சபட்சமாக இருப்பது தான் வாடிக்கை.
    
    கொடுப்பதில் மகிழ்கிற கொள்கைக்காரர் நீங்கள்
    
    அத்தான் அத்தான் என சுற்றி வருகிற உள்ளூர் இளைஞர்களை அதட்டி, உருட்டி பேசினாலும்
    தாங்கள் அன்பு வளையத்திற்குள்ளேயே சிறைபிடித்தவர் நீங்கள்.

    நாளைய சந்தோஷத்திற்காக இன்றைய தினத்தை சோகமாக்கும் 
    நடைமுறைக்கு எதிரானவர் நீங்கள்.
    சம்பாதித்ததை எல்லாம் பத்திரப்படுத்தி இருந்தால்.....
    ஆனால் அருமையான உறவுகளை பெற்று பத்திரப்படுத்தி இருக்கிறீர்களே!
    
    இதயத்தின் அடி ஆழத்தில் இருந்து வரும் 
    எங்கள் இனிய வாழ்த்துகளை
    உங்கள் காலடியில் வைத்து ஆசிகோருகிறோம்.
    
    என்றும் அன்புடன்
    பொன். முத்துக்குமார் - மு. வேலம்மாள், பணகுடி.`
          },
          {
            id: "hv5",
            title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.A.S பிச்சையா, நாயகி: திருமதி.P.சங்கர வடிவு]",
            date: "01 செப்டம்பர் 2007",
            image: "/sankara_athai-img.jpg",
            audioFile: "/sankara_athai.opus",
            englishTranslation: `If domestic life possesses love and virtue,
that itself is its character and its reward." (Couplet from Thirukkural)

O, Diamond Jubilee Love Birds!

This Diamond Jubilee is a sweet moment in your domestic life.
We are delighted; our hearts are full.
We bow and greet you; we greet you and bow.
Is it really your Diamond Jubilee age?
The youthful radiance of your appearance
leaves us in wonder.
However, your maturity and mental wisdom
confirm your worthiness for this Diamond Jubilee.
Our 'visits to Chennai' never feel fulfilling
if we return without meeting you.
Your soulful inquiries about the well-being
of every single loved one back in our hometown—
how unique, deep, and wonderful they are!

O, Hero of the Jubilee!

A majestic appearance; a child-like heart.
This further polishes the greatness of your personality.
You are a noble man—in heart as well.
Living in harmony and unity
is the specialty and success of domestic life.
Understanding and sharing are the foundations for that.
You possess them in abundance.
To live in good health and witness your Sathabhishekam (80th birthday),
at this moment when we heartfully greet you—
and to soak in the rain of your love even on that happy day—
we bow to you and seek your blessings,
that 'all goodness may befall us.'

  Forever with love,
    Pon. Muthukumar,
    Muthu Velammal.`,
            content: `அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
பண்பும் பயனும் அது.

மணி விழா ஜோடிப் புறாக்களே!

உங்கள் இல்லற வாழ்வின் இனிய தருணம் இந்த மணி விழா.
மகிழ்ந்து போகிறோம்; மனம் நிறைந்து போகிறோம்.
வணங்கி வாழ்த்துகிறோம்; வாழ்த்தி வணங்குகிறோம்.
மணி விழா வயது உங்களுக்கா?
உங்கள் இளமைத் தோற்றப் பொலிவு
எங்களை வியக்க வைக்கிறது.
ஆனால், உங்கள் பரிபக்குவம், மன முதிர்ச்சி
உங்கள் மணி விழா தகுதியை உறுதிப்படுத்துகிறது.
உங்களைச் சந்திக்காமல் திரும்பும்
'எங்கள் சென்னை விஜயங்கள்' மன நிறைவைத் தருவதே இல்லை.
ஊரில் இருக்கும் அன்புக்குரியவர்கள் ஒவ்வொருவரின்
நலன் குறித்த உங்கள் ஆத்மார்த்தமான விசாரிப்புகள்தான்
எத்தனை அலாதியானவை; ஆழமானவை; அற்புதமானவை?
மணி விழா நாயகரே!

கம்பீரமான தோற்றம்; குழந்தை உள்ளம்.
உங்கள் ஆளுமையின் மேன்மையை இன்னும் மெருகூட்டும்.
நீங்கள் உயர்ந்த மனிதர் - உள்ளத்தாலும்
இசைந்தும் இணைந்தும் வாழ்வது தானே
இல் வாழ்க்கையின் சிறப்பு; வெற்றி.
புரிதலும், பகிர்தலும் தானே அதற்கு ஆதாரம்.
உங்களிடம் அவை உண்டு ஏராளம்.
நலமோடு வாழ்ந்து சதாபிஷேகம் காண,
நெஞ்சார வாழ்த்தும் இத்தருணத்தில்
சதாபிஷேக சந்தோஷ தினத்திலும் உங்கள் அன்பு மழையில் நனைய
'எல்லா நலமும் எமக்குக்கிட்ட'
உங்களை வணங்கி ஆசி கோருகிறோம்.

  என்றென்றும் அன்புடன்,
    பொன். முத்துக்குமார்,
    முத்து. வேலம்மாள்.`
          },
          ,
          {
            id: "item_1775268451495",
            title: "மணி விழா மலர் நாள் : , வெள்ளிக்கிழமை [நாயகன்: திரு. சோமசுந்திரம் அவர்கள் நாயகி: திருமதி. தனலெட்சுமி]",
            date: "21 நவம்பர் 2008",
            image: "/maranthai.jpg",
            audioFile: "/item_1775268451495_maranthai_mama_manivizha.m4a",
            content: `மணி விழா மலர்
நாள் : 21-11-2008, வெள்ளிக்கிழமை

நாயகன்: திரு. சோமசுந்திரம் அவர்கள்
நாயகி: திருமதி. தனலெட்சுமி

பிரஸ்டீஜ், ஈகோ, பந்தா என்னும் சிறைக்குள் மாட்டாத எங்கள் அன்புக்குரிய அத்தான்

தம்பிகளின் வளர்ச்சியில், நலனில் “பொன்னியின் செல்வன்” காவிய நாயகி குந்தவையை மிஞ்சும் எங்கள் அன்புக்குரிய அக்கா

இவர்களின்

மணி விழா சிறக்கவும்
மணி விழா மலர் மணக்கவும்
வாழ்த்துகிறோம்;

மணி விழா ஜோடிகளை வணங்கி வாழ்த்துகிறோம்.

என்றென்றும் அன்புடன்,
பொன். முத்துக்குமார் - வேலம்மாள்
பொன். சிதம்பர கணேசன் - கோமதி
பொன். கந்தசாமி - அனுராதா

மண்ணை விட்டு மறைந்தாலும் எங்கள் நெஞ்சை விட்டு அகலாத பாசமலர்களாம்
மாராந்தை M.K. கோமதிநாயக முதலியார் அவர்கள்
பணகுடி பொன். சுந்தரி அண்ணி அவர்கள்
மலரடிகளுக்கு இம் மலர் சமர்ப்பணம்

மாமனார் மெச்சும் மருமகன்:
எனது மருமகன் S. சோம சுந்தரம் பணிவும், கனிவும் ஒருங்கே அமையப் பெற்றவர். கடுமையான விமர்சனத்தை புன்னகை மாறாமல் ஏற்றுக் கொள்ளும் பக்குவம் பெற்றவர். எல்லோரிடத்திலும் அன்பாகப் பழகக் கூடியவர். இனிய சொற்களைத் தேர்ந்தெடுத்து பேசக் கூடியவர். மணி விழா காணும் இந்த நேரத்தில் என் இனிய வாழ்த்துக்களை தெரிவித்துக் கொள்கிறேன்.
M. பொன்னப்ப முதலியார், பணகுடி.

மாமியார் மெச்சும் மருமகள்:
எனது மருமகள் S. தனலெட்சுமி அறிவும், ஆற்றலும் மிக்கவர். சிறந்த நிர்வாகி. தொடர்ந்து அவளை படிக்க அனுமதித்து இருந்தால் மிகச் சிறந்த பதவிகளுக்கு வந்திருப்பாள். எந்த ஒரு விஷயத்திலும் அதிக அனைத்து பரிமாணங்களையும் பார்த்து செயல்படக் கூடியவர்.
 பிள்ளைகளைச் சிறப்பான நிலைக்கு கொண்டு வர அவள் எடுத்துக் கொண்ட முயற்சிகள்தான் எத்தனை..... எத்தனை? மணி விழா காணும் அவளுக்கு என் இதயப் பூர்வமான வாழ்த்துக்கள்.
மாராந்தை. சாரதா அண்ணி, பணகுடி.`,
            englishTranslation: `Diamond Jubilee Souvenir (Specifically for a 60th Birthday Celebration).
Date: 21-11-2008, Friday.

Leading Gentleman (Hero): Mr. Somasundaram
Leading Lady (Heroine): Mrs. Dhanalakshmi

To our dear Brother-in-law (Atthaan), who is not trapped in the prisons of prestige, ego, or showoff... and to our dear Elder Sister (Akka), who surpasses the epic heroine Kundhavai (from Ponniyin Selvan) in her care for the growth and well-being of her younger brothers...

We wish for this 60th Birthday Celebration (Mani Vizha) to be grand,
We wish for this Souvenir (Malar) to spread its fragrance,
We offer our greetings;

We bow to and bless the Diamond Jubilee couple.

With eternal love,

Pon. Muthukumar - Velammal
Pon. Chidambara Ganesan - Gomathi
Pon. Kandhasamy - Anuradha

Even though they have left this earth, they never leave our hearts—the "Flowers of Affection" (Pasamalar):
	Shri M.K. Gomathinayaka Mudaliar of Maranthai
	Smt. Pon. Sundari Anni (Sister-in-law) of Panagudi`,
          },
          {
            id: "hv1",
            title: "மணிவிழா வாழ்த்து - [நாயகன்: மீ.ஆறுமுகம், நாயகி: ஆ.நீலா]",
            date: "5 செப்டம்பர் 2025",
            image: "/vazhthu-1.jpg",
            audioFile: "",
            englishTranslation: `O, one who rose high through hard work!
One who touched hearts with shown compassion!
Hero of this Manivizha!
A warrior of duty, a man of mercy,
A connoisseur with a great sense of art,
A lover of perfection, a father full of affection,
A head of the family who shows immense care—
How many facets do you have!
And every one of those faces captivates everyone.
You are an expert in doing everything with meticulous care!
You leave a unique mark in everything you do!
Whether it is a big task or a small one,
You perform it with dedication, involvement, and elegance!
That is why fame and glory sought you!
You are one who drove the vehicle steadily even on roads full of ups and downs!
One who hoisted the flag of victory even in a swirling hurricane!
One who showed that great heights can be reached through true hard work!
One with a heart that enjoys the innocent speech of children!
One who found the way to win through love!
Is the success of your domestic life due to mutual understanding?
Or the maturity of sharing?
O Moon, who rises in the direction shown by your husband!
Our dear Moon (Neela)! We greet you with emotion and joy!!!
May the Diamond Jubilee couple live for many more years...

- Pon Muthukumar,
  Panagudi`,
            content: `உழைப்பால் உயர்ந்தவரே!
காட்டும் பரிவால் இதயம் தொட்டவரே!
மணிவிழா நாயகரே!
கடமை வீரராக, கருணை மனிதராக,
கலை உணர்வு மிக்க ரசிகனாக,
நேர்த்தியை நேசிக்கும் நேசனாக, நேசம் மிக்க தந்தையாக,
அக்கறை காட்டும் குடும்ப தலைவராக,
உங்களுக்குத்தான் எத்தனை முகங்கள்!
அத்தனையும் எல்லோரையும் வசீகரிக்கும் வதனங்கள்!
எதையும் பார்த்து பார்த்து செய்வதில் சமர்த்தர்!
செய்யும் எதிலும் தனி முத்திரை பதிப்பர்!
பெரிய வேலையானாலும் சரி, சிறிய வேலையானாலும் சரி,
அர்ப்பணிப்பு மற்றும் ஈடுபாட்டோடு செய்யும் நேர்த்தி!
அதனால் தானே உங்களுக்கு கிட்டியது கீர்த்தி!
மேடு பள்ளம் நிரம்பிய பாதையிலும் சீராக வாகனம் ஓட்டியவர்!
சுழன்றடிக்கும் சூறாவளியிலும் வெற்றிக்கொடி நாட்டியவர்!
உண்மையான உழைப்பால் உயரம் தொடலாம் என காட்டியவர்!
மழலையர் மொழியினை ரசித்திடும் மனம் கொண்டவர்!
அன்பினால் வென்றிடும் வழியினை கண்டவர்!
இல்லற வெற்றிக்குக் காரணம் புரிந்துணர்வா!
பகிர்ந்து கொள்ளும் பக்குவமா!
கணவர் காட்டும் திசையில் உதிக்கும் நிலாவே!
எங்கள் நிலாவே! நெகிழ்ந்தும் மகிழ்ந்தும் வாழ்த்துகிறோம்!!!
மணிவிழா மணமக்களே வாழ்க பல்லாண்டு...
    - பொன். முத்துக்குமார்,
      பணகுடி`
          }
        ],
      },
      {
        id: "his-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          {
            id: "hi-poem-2",
            title: "அம்மா - திருமதி சுந்தரி அவர்கள்",
            date: "20 ஏப்ரல் 2001",
            image: "/poem-2.jpeg",
            audioFile: "/poem-2-audio.m4a",
            englishTranslation: `Everyone cares only for themselves,
But you cared only for us.
You never ignored a hungry stomach.
You were able to achieve anything,
Because you never asked for anything for yourself.
You were not highly educated—
Yet, there were so many lessons to be learned from you.

You criticized, you debated,
But above all, you loved.
Under the impact of your love, even a stone would melt;
Even withered trees would sprout new leaves.
Because your heart was always open,
It remained full;
It shone with excellence.

Yours was a true face that wore no mask.
Many find joy in receiving,
But you were a queen who found joy in giving.
Even Father never displayed his joys (like a shop),
But you were an open book.
The secret to the success of your married life
Was compassion and understanding.
Did this understanding come from compassion?
Or did compassion come from understanding?
Though you were different (Black and White),
You lived inseparable, like a nail and its flesh!
How proud we felt within our circle of relatives
To be introduced as 'Sundari’s son.'

You never rejected any of our loving invitations,
Even when we rejected yours at times.
Even a Kashmiri apple cannot equal
A papaya touched by your hands.
To us, you had the 'busyness of an ant,'
To Father, you were 'restless in everything'—
Did that speed... carry over even to death?
How many things you gave up for Father, and Father for you!
Whether in charity or during festivals,
When the whole family stood together,
What immense joy was on your face!
What a blooming smile!
Without seeking pride, you had the strength
To reach out and speak to anyone.
You are a virtuous soul who cannot be ignored!
You are an angel without an ego!

You were the one who boasted to everyone
Even about our smallest achievements...
You ignored the path of mere logic
And walked the path of love.
You rose high by 'giving in' (sacrificing),
And your blessings are the sole reason
For the spring in our lives.`,
            content: `எல்லோரும் தம்மைக் குறித்தே அக்கறைப்படுவார்கள்
ஆனால்
நீயோ எம்மைக் குறித்தே அக்கறைப்பட்டாய்
பசித்த வயிறுகள் எதையும் நீ புறக்கணித்ததில்லை
எதையும் சாதிக்க உன்னால் முடிந்தது
காரணம் எதையும் நீ உனக்காக கேட்காததுதான்
அதிகம் படிக்காதவள் நீ -
உன்னிடம் படிக்க வேண்டிய பாடங்கள் தான் எத்தனை எத்தனை

விமர்சித்தாய், விவாதித்தாய்
ஆனால் எல்லாவற்றுக்கும் மேல் நேசித்தாய்
உன் நேசத்தின் தாக்கத்தில் கல்லும் கரைந்து போய்விடும்
பட்ட மரங்கள் கூட துளிர்த்து விடும்
உன்னுடைய இதயம் திறந்தே இருந்ததால்
அது நிறைந்தே இருந்தது;
சிறந்தே விளங்கியது

முகத்திரை அணியாத உண்மை முகம் உன்னுடையது
வாங்கிக் கொள்வதால் மகிழ்பவர்கள் ஏராளம்
நீயோ கொடுப்பதால் மகிழும் மகராசி
அப்பா சந்தோஷங்களைக்கூட கடை பரத்தியதில்லை,
நீயோ திறந்த புத்தகம்
உங்கள் இல்லற வாழ்வின் வெற்றிக்கு காரணம்
பரிவுணர்வும், புரிதலும் தான்
பரிவுணர்வால் வந்ததா இந்த புரிதல்?
புரிதலால் வந்ததா இந்த பரிவுணர்வு?
கருப்பும், சிகப்புமாய் நீங்கள் இருந்தீர்கள்
ஆனால் நகமும், சதையுமாய் அல்லவா வாழ்ந்தீர்கள்!
'சுந்தரி மகன்' என்று உறவினர் வட்டத்தில்
அறிமுகம் ஆகும் போது எத்தனை பெருமிதம் எங்களுக்கு

எங்கள் அன்பான அழைப்பு எதையுமே நீ நிராகரித்ததில்லை
நாங்கள் சில நேரங்களில் நிராகரித்த போதிலும்
உன் கைப்பட்ட பப்பாளி பழத்துக்கு காஷ்மீரத்து
ஆப்பிள் கூட ஈடாகாது
உனக்கு
'எறும்பின் சுறுசுறுப்பு' எங்கள் பார்வையில்
'எதிலும் படபடப்பு' அப்பாவின் பார்வையில்
வேகம் . . . சாவிலுமா?
அப்பாவுக்காக நீயும், உனக்காக அப்பாவும்
பரஸ்பரம் விட்டுக் கொடுத்த விஷயங்கள் எத்தனை! எத்தனை!
கொடையிலும் சரி, பண்டிகையிலும் சரி
மொத்த குடும்பமும் இணைந்து நிற்கும் போது
உன் முகத்தில் தான் எத்தனை மகிழ்ச்சி
எத்தனை மலர்ச்சி
பெருமை பாராட்டாது யாரிடமும் வலிந்து போய்
பேசும் வல்லமை உனக்கு உண்டு
புறக்கணிக்க முடியாத புண்ணியவதி நீ!
ஈகோ இல்லாத தேவதை நீ!

எங்கள் சின்ன வளர்ச்சியைக் கூட
எல்லோரிடமும் சிலாகித்து மகிழ்பவள் நீ...
அறிவு வழியை புறக்கணித்து
அன்பு வழியில் நடைபோட்டவள் நீ
'விட்டுக் கொடுத்து' உயர்ந்தவள் நீ
எங்கள் வசந்த வாழ்க்கைக்கு
உன் வாழ்த்துத் தானே காரணம்

   - பொன். முத்துக்குமார்
   - பொன். சிதம்பர கணேசன்
   - பொன். கந்தசாமி
     பணகுடி`
          },
          {
            id: "hi-poem-6",
            title: "அத்தை - தெய்வத்திரு முத்தம்மாள் அண்ணி",
            date: "06 ஜனவரி 2007",
            image: "/kannadi_paati_img.png",
            audioFile: "/kannadi_paati.m4a",
            englishTranslation: `In memory of the divine soul, Mrs. Muthammal Anni, who left this earth on 06-01-2007 but remains forever in our hearts.

Our Dearest Aunt!

Anything touched by your hands was sweet.
The reason was the boundless love mixed into it.
Whether it was the fermented rice water you prepared,
the dry-ginger hot water you gave us at the right time,
the urad dal porridge, ginger pudding, or coriander coffee—
or the language of affection you spoke while sitting beside us—what could possibly equal them?
Vagaikulam was our ultimate vacation destination, wasn't it?
The Poori-Potato and Masala Peas from Kalaivanar Hotel,
the Halwa from Ambasamudram...
The books you got for us from Panchayat Muthaiah,
the palm nectar (Pathaneer) you got from Gopalan...
These remain fixed in our hearts, forever sweet.
How intensely your love would manifest
in the playful arguments you had with Uncle for our sake!
The Manokalam (sweet) you prepared in the early hours of dawn—how delightful it was!
"Your younger brother and his children are everything to you"—
didn't you show such love that even the other aunts grew annoyed?
There is no event that equals the joy
given by the wooden horse you bought for me!
How magnificent was your help in hospitals?
The elegant way you conversed with doctors
to understand medical matters was truly great.
You were capable of conversing not just with ordinary people like Thayamma, Chellathayi, and Koodammal,
but also with great achievers!
You were one who would run around to help others.
You were one who would speak with melting tenderness.
For your talent and understanding,
You should have become an M.L.A. or an M.P.!
Poetic flair sparkled not just in your lullabies,
but even in your laments.
Even in old age, you never stopped reading.
You wouldn't just throw away the morning newspaper;
you would put on your glasses and read it with deep focus.
Your wish—"I must pass away without troubling anyone"—
was fulfilled by the "Thiruvasagam" that you read tirelessly and without fatigue.
Though you had worries regarding your grandchildren,
there was even more pride for them.
More than the love we had for you,
you loved us much more.
One thing is certain: as long as your blessing remains,
no deficiency shall ever touch us.
Death cannot conquer the great.
Yes, you will forever shine as our guiding light!

Forever with love,
Pon. Muthukumar | Pon. Chidambaraganesan | Pon. Kandasamy`,
            content: `06-01-2007 அன்று மண்ணைவிட்டு அகன்றாலும் நெஞ்சைவிட்டு அகலாத தெய்வத்திரு முத்தம்மாள் அண்ணி அவர்கள் நினைவாக
எங்கள் அன்புக்குரிய அத்தையே!
உன் கைப்பட்டது எதுவும் இனிக்கும்
அதற்குக் காரணம் அதில் கலந்திருக்கும் உன் அளவற்ற நேசம் தான்
நீ கரைத்து தரும் நீராகார கரைசலுக்கும்
சமயமறிந்து வைத்துக் கொடுக்கும் சுக்கு வெந்நீர்,
உளுந்தங் கஞ்சி, சுக்கு களிக்கும், மல்லி காபிக்கும்
பரிவோடு அருகமர்ந்து பேசும் பாச மொழிக்கும் இணைதான் ஏது?
எங்கள் விடுமுறை நாள் பிரதேசம் வாகைகுளம் தானே?
கலைவாணர் ஹோட்டல் பூரிக்கிழங்கும், மசால் மொச்சையும்,
அம்பை பாதம் அல்வாவும்
பஞ்சாயத்து முத்தையாவிடம் பெற்றுத்தந்த புத்தகங்களும்
கோபாலனிடம் பெற்றுத்தந்த பதநீரும்
நெஞ்சில் என்றும் நிலைத்து இருக்கும், என்றும் இனிக்கும்
எங்களுக்காக நீ மாமாவிடம் போடும் சண்டையில்தான்
உன் அன்பு எத்தனை வேகமாக வெளிப்படும்?
விடிந்தும் விடியாத காலைப் பொழுதில் நீ தயாரிக்கும்
மனோகலம் எத்தனை மனோ ரஞ்சிதமானது?
'உனக்கு உன் தம்பி, தம்பி பிள்ளைகளும் தான் உசத்தி'
அத்தாத்தைகள் எரிச்சல்படும் அளவுக்கு
நேசத்தை காட்டியவள் அல்லவா நீ?
நீ எனக்கு வாங்கித்தந்த மரக்குதிரை
தந்த மனமகிழ்வுக்கு ஈடான நிகழ்வு வேறு ஒன்றும் இல்லையே!
மருத்துவ மனைகளில் உன் உதவி எத்தனை மகத்தானது?
மருத்துவர்களோடு இணக்கமாக பேசி விஷயங்களை
தெரிந்து கொள்ளும் நேர்த்திதான் எத்தனை மகத்தானது?
தாயம்மா, செல்லத்தாய், கூடம்மாள் போன்ற சாதாரணமானவர்களோடு
மட்டுமல்ல சாதனையாளர்களோடும் சம்பாஷிக்க கூடிய
ஆற்றல் கொண்டவள் அல்லவா நீ!
ஓடி, ஓடி உதவக் கூடியவள் நீ
உருக, உருக பேசக் கூடியவள் நீ
உன்னுடைய திறனுக்கும், புரிதலுக்கும்
M.L.A ஆகவோ M.P. ஆகவோ ஆக வேண்டியவள் நீ!
உன்னுடைய தாலாட்டுகளில் மட்டுமல்ல
புலம்பல்களில் கூட கவித்துவம் மின்னும்
வயதான பின்னும் வாசிப்பதை நிறுத்தாதவள்
காலையில் வந்து விழும் பேப்பரை அப்படியே தூக்கி போடாமல்
கண்ணாடி போட்டுக் கொண்டு கருத்தாகப் படிப்பவள் நீ
“யாரையும் கஷ்டப்படுத்தாமல் போயிறணும்” என்ற உன் ஆசை
“நீ அலுங்காமல், சலிக்காமல் படித்த திருவாசகத்தால்” தானே நிறைவேறியது
பேரப்பிள்ளைகள் குறித்து உனக்கு கவலைகள் உண்டு என்றாலும்
அதையும் மீறி, பெருமிதங்களும் நிறைய உண்டு.
நாங்கள் உன்னை நேசித்ததை விட, நீ
எங்களை அதிகம் நேசித்தாய்
உன் ஆசி இருக்கும் போது
குறை ஒன்றும் அண்டாது என்பது மட்டும் நிச்சயம்
மகத்தானவர்களை மரணம் ஜெயிக்க முடியாது
ஆம். என்றும் வழிகாட்டும் ஒளிவிளக்காக திகழ்வாய் நீ!

என்றென்றும் அன்புடன்
பொன். முத்துக்குமார் | பொன். சிதம்பர கணேசன் | பொன். கந்தசாமி`
          },
          {
            id: "hi-poem-1",
            title: "தந்தை சொல்மிக்க மந்திரமில்லை - திரு.பொன்னப்பன் அவர்கள் ",
            date: "2016",
            image: "/poem-1.jpeg",
            audioFile: "/poem-1-audio.m4a",
            englishTranslation: `There is no mantra more powerful than a father's word.
Our father who lives in our thoughts,
The father who knocks awake even the sun.
You are the one who acts ahead of time,
We are the ones who think past the time.
                Waking up at dawn and bathing unfailingly,
                Worshipping with flowers and praying with hymns,
                Through the daily Pillayar (Ganesha) pooja,
                The home becomes a temple.
Reading the daily newspaper and listening to news,
With an eagerness to know the country's happenings,
The home becomes a library.
                       The noble virtue of waiting to eat
                       Only after knowing that the farmer
                       Has been provided his meal.
Before the sweat dries,
The great soul who yearned
To hand over the wages.
                        To those seeking rest,
                        And those who came seeking shade,
                        And to all the burden bearers,
                        A banyan tree that helped as much as it could.
                       
Though holding a position that could amass wealth,
You did the duty of amassing relationships.
Unblemished hands
And a flawless heart
Remained unchanged until the very end.
                        For the ordinary people,
                        Fixing an auspicious time,
                        A priest who accepted no fee.
For those arriving with sibling disputes,
A judge who performed partition without breaking the bond of love,
And accepted no fee.
                      To ensure the sick got well,
                      Giving advice,
                      And accompanying them for treatment—a true well-wisher.
Money, jewelry, and land,
Safely returned to the very person
Who entrusted them for safekeeping,
A safe-deposit box that took no rent.
                      An archive without arrogance,
                      Holding information from local to global,
                      A time-capsule of accumulated facts.
For the three temples
Under your responsibility,
A king of devotion who renovated
And conducted the Kumbhabhishekam (consecration).
                  Even the one who came to rob,
                  Until his very last days,
                  Remained your loyal servant.
                                                                       
The gold that protected the community sangam (association),
The lion who established a sangam in the local town.

For the local festival you conducted,
The Christian school provided the space.
In your close circle of friends were many respected Islamic individuals,
Religious harmony was your true nature.
                   Uniting multiple communities,
                   For a long time,
                   Conducting the festival,
                   The peacemaker who aided communal harmony.

Those filled with wealth,
Those with immense strength,
Those high in position,
Everyone,
Wished to receive your help,
And rejoiced upon receiving it.

                                  All the elevated ones
                                  Realized your worth,
                                  And all who realized it,
                                  Did not forget to come back
                                  To speak of the help
                                  They received.

Your family life
      Was always a conversation
      Between flexible affection
      And strict affection.
 
Your brotherhood
The town would speak of as Rama and Lakshmana.
Until the sister passed away,
An embracing flower of affection.
 

                    
                       Even when far away,
                       Remaining within reachable range,
                       To the grandchildren,
Holding onto the last breath,
The great-grandparents who provided care.
                               What the right hand gives,
                               The left hand should not know.
                               Our hands must always
                               Remain as giving hands.
                               These were all your principles.
Planned was your life,
Pure was your method,
Simple was your practice.
                         A man of few words,
                         So spoken of by everyone.
                         Your brief speech
                         Always hit the mark.

Singing ancient Tamil songs
With complete fluency,
A true student of literature.
Until the very last second,
A reader who never gave up reading.
    

                                      When hesitating to accept changing times,
                                      And all the youth
                                      Were faltering,
                                      The innovator who gifted a Bible
                                      To his granddaughter with blessings.



He never stood withered himself,
He never made others wither.
No matter who stood withered,
He never failed to help.
     
 So as not to become a burden,
Taking care of his health,
To be well,
And to help the well-being of others,
Such was
 Your great life.
                         In the direction
                         You pointed,
                         Our journey will continue.`,
            content: `தந்தை சொல்மிக்க மந்திரமில்லை.
எம் சிந்தையில் வாழும் தந்தையே
சூரியனையே தட்டி எழுப்பும் எந்தையே
காலத்துக்கு முந்தி செயல்படுவது நீங்கள்
காலம் கடந்து சிந்திப்பது நாங்கள் 
                விடிகாலையில் விழித்து தவறாது நீராடி
                பூக்களால் அர்ச்சித்து பாக்களால் வழிபடும்
                பிள்ளையார் பூஜையால்
                வீடு கோவிலாகும்.
நாளிதழ் வாசித்து செய்திகள் கேட்டு 
நாட்டு நடப்பு தெரியும் ஆர்வத்தால்
இல்லம் நூலகமாகும்.
                       குடியானவனுக்கு 
                       அன்னம் அளித்தது
                       அறிந்த பின்னே 
                       உண்ண வரும் மாண்பு.
வியர்வை ஆறும் முன்
கூலி கொடுக்க வேண்டுமென
துடிக்கும் பெருந்தகை
                       இளைப்பாறுதல் தேடி
                       நிழல் நாடி வந்த
                       பாரம் சுமப்போருக்கெல்லாம்
                       இயன்ற அளவு உதவிய ஆலமரம்.
சொத்துகள் சேர்க்கும் பதவி இருந்த போதும்
சொந்தங்கள் சேர்க்கும் பணியினை செய்தாய்.
கறை படாத கரமும்
குறை இல்லா மனமும்
இறுதிவரை மாறாதிருந்தது.
                        எளியோர்களுக்கு
                        நல்ல நேரம்  குறித்துக் கொடுக்கும்
                        தட்சணை பெறாத குருக்கள்.
சகோதர சச்சரவில் வருபவர்களுக்கு
பாசப்பிரிவினை நிகழாது
பாகப்பிரிவினை செய்து கொடுத்த
கட்டணம் பெறாத நடுவர்.
                      பிணியாளிகள் நலமாக
                      ஆலோசனை தரவும்
                      சிகிச்சை பெறவும்  உடன் சென்ற நலவிரும்பி.
பணம், நகை, நிலம் என 
பாதுகாக்க சொல்லி  கொடுத்தவருக்கே
பத்திரமாக திருப்பி அளித்த
வாடகை பெறாத சேமிப்பு பெட்டகம்.
                      ஆணவமில்லா ஆவணகாப்பகம்
                      உள்ளூர் முதல் உலகம் வரை உள்ள
                      தகவல்கள் குவிந்த காலப் பெட்டகம்.
பொறுப்பில் உள்ள 
மூன்று ஆலயங்களையும்
புதுப்பித்து குட முழுக்கு நடத்திய
பக்திப் பேரரசன்.
                  கொள்ளையிட வந்தவர் கூட
                  தம் இறுதிவரை
                  உம் தொண்டனாக இருந்தார்.                                                                
சமூக சங்கம் காத்த தங்கம்
உள்ளூரில் சங்கம் அமைத்த சிங்கம்.

நடத்தும் கொடைவிழாவுக்கு 
இடம் தந்து உதவியது கிறிஸ்தவ பள்ளி
நெருங்கிய நட்பு வட்டத்தில், பல இஸ்லாமிய பெருமக்கள்
மதநல்லிணக்கம் உங்கள் இயல்பு.
                   பல சமூகங்களை ஒன்றிணைத்து
                   நெடுங்காலமாய்
                   கொடைவிழா நடத்தி
                   சமூக நல்லிணக்கத்துக்கு உதவிய சமரசவாதி.

வளம் நிரம்பியோர்
பலம் பொருந்தியோர்
பதவியில் உயர்ந்தோர் என
அனைவரும்
உன் உதவி பெற விழைந்தோர்
பெற்ற பின் மகிழ்ந்தோர்.                                                                                      
                                  உயர்ந்தோரெல்லாம் உன்
                                  மதிப்பு உணர்ந்தோர்
                                  உணர்ந்தோரெல்லாம் 
                                  மறவாது வந்து
                                  பெற்ற உதவிகளை
                                  உரைத்தோர்,  
உங்கள் இல்லற வாழ்வு
நெகிழ்வான பாசத்துக்கும்
கறாரான பாசத்துக்கும்
நடந்த உரையாடலாகவே
இருந்ததது.            

உங்கள் சகோதர உறவு
ராம இலட்சுமணன் என்றே ஊர் பேசும்.
சகோதரி மறையும்வரை
அரவணைத்த பாசமலர்.                
                       தொலைதூரத்தில் இருந்தபோதும்
                       தொடர்பு எல்லைக்குள்ளே இருந்த
                       பேரன் பேத்திகள்
இறுதி மூச்சை இழுத்துப்பிடித்து
சிகிச்சை தந்த பூட்டன் பூட்டிகள்
                               வலக்கை வழங்குவது
                               இடக்கைக்கு தெரியலாகாது
                               நம் கைகள் எப்போதும் கொடுக்கும்               
                               கைகளாகவே இருக்க வேண்டும்     
                               என்பதெல்லாம் உங்கள் கொள்கை.
திட்டமிட்டது   உங்கள் வாழ்வு
தூய்மையானது   செயல்முறை
எளிமையானது   நடைமுறை 
                         அதிகம் பேசாதவர் என 
                         அனைவராலும் பேசப்பட்டவர்.
                         நறுக்கென்று இருக்கும்  உங்கள்
                         சுருக்கப் பேச்சு.
பழந்தமிழ் பாடல்களை
சரளமாகப் பாடும்
இலக்கிய மாணவன்.
கடைசி நொடிவரை
வாசிப்பை கைவிடாத வாசகன்.
                                      காலமாறுதலை ஏற்கத் தயங்கி
                                      இளையோரெல்லாம்
                                      தடுமாறிய போதும்
                                      பைபிளை பேத்தியிடம்
                                      ஆசியுடன் வழங்கிய புதுமையாளர்.
தான் வாடி நின்றதில்லை
பிறர் வாட செய்ததில்லை
எவர் வாடி நின்றாலும்
உதவிட தவறியதில்லை.
     
சுமையாகி விடாதிருக்க
உடல் நலத்தைப் பேணவும்
சுகமாயிருக்க  
பிறர் நலத்துக்கு உதவவும்
அமைந்தது  
உங்கள் பெரு வாழ்வு.
                         நீங்கள்
                         காட்டிய திசையில்
                         எங்கள் பயணம் தொடரும்.

                         - பொன்.முத்துக்குமார்
                           பணகுடி`
          },
          {
            id: "hi-poem-4",
            title: "மாறாந்தை திருமதி. கோ. சாரதா அத்தை அவர்களுக்கு புகழ் அஞ்சலி",
            date: "14 நவம்பர் 2018",
            image: "/poem-4.jpg",
            audioFile: "/saradha_paati.opus",
            englishTranslation: `Love, patience, kindness, and dignity were Aunt's ornaments. Like the 'Nightingale of Music' M.S. Subbulakshmi, she was a representative of Indian culture. If Uncle was a strict father, Aunt was a tender mother. The way she would bless the children every day and send them to Nallur school in a bullock cart (vill vandi) would make us envious.

Aunt’s sense of responsibility and patience were the pillars that allowed Uncle to achieve whatever he set his mind to. Is there any child who wouldn't be captivated by Aunt calling them "Ayya"? Before Aunt’s milk-porridge, herbal tonics (kasayam), compassion, and concern, our fevers, coughs, and colds would run away in fear. Aunt was the strength that ensured Uncle’s noble quality of philanthropy never withered. How many, many weddings has she conducted and guided?

What immense affection and gratitude were contained in the way Uncle called out "Saradha"?

How proud Aunt was that her younger brother was a college professor! And how proud the brother was that his elder sister was a teacher of experiential wisdom. To put it in Vedic terms, she was the sister-in-law who raised five sisters like a mother. She was an Amudhasurabi (vessel of infinite food) who served everyone without discrimination or exhaustion. She never let go of the Thiruvasagam (sacred hymns), and the Thiruvasagam never let go of her.

The world of your children was a small one—revolving only around you. But the world of your grandchildren and great-grandchildren is as vast as the ocean-surrounded earth.

What a friendly rivalry there was between "Maaranthai Athai" and "Vagaikulam Athai" in showering us with rain-like affection! Because you were a virtuous woman who had gathered many blessings, you received such quality and compassionate care in your old age. You maintained a top-tier place of respect in both your birthplace and the home you married into, solely through your unchanging love.

The scenes from those days—of you giving us milk and fruit, performing Arathi, and warding off the 'evil eye'—remain as indelible paintings on the screen of our minds.

Let us cherish the memory of our dear Aunt. Let us seek her blessings for our well-being!
- Pon Muthukumar,
  Panagudi`,
            content: `அன்பு, பொறுமை, கனிவு, கம்பீரம் அத்தையின் அணிகலன். இசைக்குயில் எம்.எஸ் போல இந்திய கலாசாரத்தின் பிரதிநிதி. மாமா ஒரு கண்டிப்பான தந்தை என்றால் அத்தை ஒரு கனிவான தாய். பிள்ளைகளை நித்தம் ஆசீர்வதித்து நல்லூர் பள்ளிக்கு வில் வண்டியில் அனுப்பும் பாங்கு, எங்களை பொறாமைப்பட வைக்கும்.

அத்தையின் பொறுப்புணர்வும், பொறுமையும் தானே மாமாவை நினைத்ததை முடிப்பவராக மிளிரச் செய்தது. அத்தையின் அய்யா என்ற அழைப்புக்கு மயங்காத பிள்ளைகள் தான் உண்டா? அத்தையின் பால்கஞ்சி, கசாயும், பரிவு, கரிசனம் முன் நிற்க அஞ்சி ஓடுமே, எங்கள் காய்ச்சல், இருமல், சளி தொந்தரவுகள். மாமாவின் பரோபகாரம் என்ற நல்ல குணம் பட்டுப் போகாமல் இருக்க அத்தை தானே பக்கபலம். நடத்தி வைத்த திருமணங்கள் தான் எத்தனை? எத்தனை?

“சாரதா” என்ற மாமாவின் அழைப்பில் தான் எத்தனை பாசம்? எவ்வளவு நன்றியுணர்வு?

தம்பி கல்லூரி பேராசிரியர் என்பதில் தான் அத்தைக்கு எவ்வளவு பெருமை? அக்கா அனுபவ ஞான ஆசிரியர் என்பதில் தம்பிக்கு எவ்வளவு பெருமை. வேதம் வார்த்தைகளில் சொன்னால் சகோதரிகள் ஐவரையும் அன்னைபோல் வளர்த்த அண்ணியார். பேதம் இன்றி சலிப்பின்றி எல்லோருக்கும் அமுது படைக்கும் அமுதசுரபி. திருவாசகத்தை அவளும் அவளை திருவாசகமும் கைவிட்டதில்லை.

உங்கள் பிள்ளைகளின் உலகம் சின்னஞ்சிறிய உலகம் - உங்களை சுற்றியே ஆனால் பேரப்பிள்ளைகளின், பூட்டன் பூட்டிகளின் உலகமோ ஆழி சூழ்பேருலகம்.

எங்கள் மீது பாசமழை பொழிவதில் மாறாந்தை அத்தைக்கும் வாகைகுளம் அத்தைக்கும் தான் எத்தனை போட்டோ போட்டி? புண்ணியங்களைச் சேர்ந்த புண்ணியவதி என்பதால்தானே கிடைத்தது வயோதிகத்தில் தரமான, பரிவான பராமரிப்பு? பிறந்த இடத்திலும் புகுந்த இடத்திலும் உங்களுக்கு என்று (மே) சிறப்பான முதலிடம் பெற்ற இடத்தை மாறாத உங்கள் அன்பால் தானே தக்க வைக்க முடிந்தது.

பாலும், பழமும் கொடுப்பது ஆரத்தி எடுப்பது கண்ணேறு கழிப்பது போன்றவற்றில் முன் நின்ற அந்நாள் காட்சிகள் மனத்திரையில் அழியாத சித்திரங்கள்.

அன்பு அத்தையின் நினைவைப் போற்றுவோம். நம் நல்வாழ்வுக்கு அத்தையின் ஆசியை நாடுவோம்!
- பொன். முத்துக்குமார்,
  பணகுடி`
          },
          {
            id: "hi-poem-3",
            title: "சிங்கி அண்ணன்",
            date: "06 டிசம்பர் 2024",
            image: "/singi.jpg",
            audioFile: "/singi-audio.m4a",
            englishTranslation: `
          A messenger of love...
          Who arrives in the early hours
          To share news with all the relatives.
          The chief leader who stood at the forefront
          Of every special occasion in our home.
          In the kitchen where food is prepared,
          The clever one who moved about
          With a Courtallam towel and a vest,
          Keeping everyone alert and vigilant.
          The man of action
          Who accelerated every task
          And got things moving.
          The affectionate one...
          Who would playfully scold our 'Athathai' (Aunt)
          In a way that made her laugh with joy.
          O, brother who was an embodiment of love!
          Instead of being a burden,
          You shone as the one who carried the weight for others.
          We bow and salute you in reverence...
          - Pon Muthukumar,
            Panagudi`,
            content: `
          அதிகாலை நேரங்களிலே
          செய்திகளை உறவுகளுக்கு சொல்ல
          வரும்
          அன்புத்தூதுவன்...
          எங்கள் வீட்டு விசேஷங்களில்
          முன்னின்ற தளநாயகன்....
          சமையல் செய்யும்
          ஆக்குப்பிறையில்
          குற்றால துண்டு, பனியனோடும்
          சுற்றி வந்து
          உஷார் படுத்தும் சமர்த்தன்.
          காரியங்களை
          முடுக்கி விடும்
          காரிய கர்த்தா...
          எங்கள் அத்தாத்தை
          மகிழ்ந்து சிரிக்கும்
          வண்ணம் செல்லமாய் திட்டும்
          நேசன்...
          அன்புக்கோர் அண்ணனே!
          சுமையாக இருக்காமல்
          சுமக்கிறவனாக
          திகழ்ந்தாய்..
          வணங்கி பணிகிறோம்...
          
          பொன்.முத்துக்குமார்,
          பணகுடி.` },
          {
            id: "hi-poem-5",
            title: "வீர பத்திர பிள்ளை அண்ணாச்சி",
            date: "11 ஜனவரி 2026",
            audioFile: "",
            image: "/veerabathra.jpg",
            englishTranslation: `A friend of the family!
One who always sought our well-being!
One who rose high through hard work!
An ordinary man
Who achieved many extraordinary feats!
Simplicity was your strength...
Today, "home-service" medicine is a trend,
But even back then,
Weren't you the doctor
Who came searching for us at our doorstep?
You raised your daughters
Like sons...
And sent them
Into the teaching profession.
How much pride you took
In your daughter Gandhimathi’s
Administrative skills...
How much joy you found
In the professional excellence and growth
Of your grandsons and granddaughters!
You would share interesting events
And bitter experiences... so flavorfully.
In the Medical Certificates (M.C.) you issued,
Your medical experience
Would shine through.
When reading medical reports,
The expert doctor in you
Would be revealed.
You weren't one to melt away in constant prayer,
Nor were you a glass-shattering atheist...
Just like the place of salt in food,
That was exactly the place you gave to God.
"Even nectar is poison in excess"—
Weren't you the one who knew this and lived with clarity?
Our Doctor.
When we came to see you
For the last time,
You were overwhelmed with emotion,
You were anxious...
You brought back
All the old memories.
Through your love,
We felt joy; we were moved.
In our hearts,
Through memories,
You will live forever.
Farewell, Annanachi...
- Pon Muthukumar,
  Panagudi`,
            content: `குடும்ப நண்பரே!
எங்கள் நலம் நாடும் ஆர்வலரே!
உழைப்பால் உயர்ந்தவரே!
சாதனைகள் பல
நிகழ்த்திய சாதாரணரே!
எளிமை தான் உங்கள் வலிமை...
இல்லம் தேடி மருத்துவம்
இன்றுதான்.
அன்றே
இல்லம் தேடி வரும்
மருத்துவர் அல்லவா...நீங்கள்..
மகள்களை மகன் போல்
வளர்த்தீர்கள்..
ஆசிரியர் பணிகளுக்கும்
அனுப்பினீர்கள்..
மகள் காந்திமதியின்
நிர்வாகத்திறனில் தான் உங்களுக்கு
எத்தனை பெருமிதம்..
பேரன்...பேத்திகளின்
பணி மேன்மை ..வளர்ச்சி குறித்து
எத்தனை மகிழ்ச்சி?
சுவாரஸ்யமான நிகழ்வுகள்,
கசப்பான அனுபவங்கள்
பகிர்ந்து கொள்வீர்களே..சுவையாக..
நீங்கள் தரும் மருத்துவ
சான்றிதழில்(M.C.)
உங்கள் மருத்துவ அனுபவங்கள்
பளிச்சிடுமே..
Medical Reportகளை
படிக்கும் போது
ஒரு தேர்ந்த மருத்துவர் அல்லவா
வெளிப்படுவார்..
உருகி..உருகி சாமி கும்பிடுவதும்
இல்லை..
போட்டு உடைக்கும் நாத்திகரும்
இல்லை...
உணவில் உப்புக்கு
எவ்வளவு இடமோ
அவ்வளவு இடம்தான் கடவுளுக்கும்..
அளவுக்கு மிஞ்சினால்
அமிர்தமும் நஞ்சு என
தெரிந்தவர்...தெளிந்தவர் அல்லவா?
நம் மருத்துவர்.
உங்களை கடைசியாக பார்க்க
வந்தபோது
பரவசப்பட்டீர்கள்
பதற்றப்பட்டீர்கள்..
பழசை எல்லாம் நினைவு
படுத்தினீர்கள்..
உங்கள் அன்பால்
மகிழ்ந்தோம்; நெகிழ்ந்தோம்..
எங்கள் இதயத்தில்
நினைவுகளால்
என்றும் வாழ்வீர்கள்..
போய் வாருங்கள் அண்ணாச்சி...

பொன்.முத்துக்குமார்,
பணகுடி.` }

        ],
      },
    ],
  },
  {
    id: "poems-for-him",
    number: "2",
    title: "அவரை நினைத்துக் கவிதைகள்",
    icon: "💐",
    description: "அவரை நினைவு கூர்ந்து எழுதப்பட்ட கவிதைகள்",
    subCategories: [
      {
        id: "for-vaazhthu",
        title: "வாழ்த்து மடல்கள்",
        items: [
          {
            id: "item_1774963004046",
            title: "திருமண வாழ்த்து",
            date: "18 ஜனவரி 1981",
            image: "/item_1774963004046_ES_Murugan.png",

            content: `மன்றல் வாழ்த்து

மணமகன் : முத்துக்குமார்
மணமகள் : வேலம்மாள்
மணநாள் : 18.01.1981

“அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
பண்பும் பயனும் அது”

கூடுகின்ற மணமிரண்டில்
கொட்டுகின்ற மேளமதில்
கட்டுகின்ற தாலி வாழ்க!

சாடுகின்ற அருவியதில்
சாந்தமுடன் நனைந்து வர
சாந்தியதில் நீங்கள் வாழ்க!

மாடு மனை வாசலுடன்
மரம் செடிகள் செல்வமென
மகிழ்வோடு நீங்கள் வாழ்க!

பாடுகின்ற புலவனிவன்
பாட்டெழுதி வாழ்த்தி வர
பாடலென நீங்கள் வாழ்க!

நாடதனின் வாழ்வுதனில்
நம் வாழ்வும் இருப்பதனால்
நமக்கிருவர் என்றே வாழ்க!

கோடு இவன் வரையவில்லை
கோட்டினையும் தாண்டவில்லை
கொள்கையதாய் நீங்கள் வாழ்க!

என்னப்பன் முருகனவன்
என் வாயில் பாடிவர
எழுதுகின்றேன் வாழ்க வாழ்க!

பொன்னப்பர் மகனான
பொறுமையப்பர் முத்துக்குமார்
பல்லாண்டு வாழ்க வாழ்க!

- E.S முருகன்,
  பணகுடி`,
            englishTranslation: `“If home life possesses love and virtue,
That is its grace and fruit.” (This is a famous Thirukkural couplet)

In the joining of two hearts,
To the beat of the drums,
Long live the holy thread being tied!

In the cascading waterfall,
May you soak in peacefulness,
May you live with tranquility!

With cattle and a house with a front yard,
And wealth like trees and plants,
May you live with joy!

This poet who sings,
Writes a song to bless you,
May you live as a perfect song!

In the life of this country,
Since our lives also exist,
May you live by the motto “two for us”! (This refers to family planning or mutual support)

He has not drawn a limiting line,
Nor has he crossed the line set for him,
May you live adhering to this principle!

May my father, Lord Murugan,
Sing within my mouth,
As I write this blessing: Long live! Long live!

Muthukumar, the son of Ponnappar,
Who is the epitome of patience,
May you live for many, many years!

- E.S Murugan`,
          },
          {
            id: "fv2",
            title: "மணிவிழா வாழ்த்து [விழா நாயகர்: பொன். முத்துக்குமார் : விழா நாயகி: மு. வேலம்மாள் அண்ணி]",
            date: "25 செப்டம்பர் 2015",
            image: "/periyappa-periyamma-60.jpg",
            audioFile: "/manivizha.mp3",
            englishTranslation: `Diamond Jubilee (60th Anniversary) Greetings

Hero of the Jubilee: Pon. Muthukumar
Heroine of the Jubilee: Mu. Velammal Anni

O, our guiding light and the East that shows us the world!
You have a passion for learning and a sincere concern for sharing it.
Showing compassion for others is the divine vision you seek.

An eloquent orator who speaks with grace, and an enthusiast who reads continuously.
A guardian of loving relationships and a poet who showers rains of blessings.

Not a single day has he spent thinking only of himself;
His hand reaches out to help whenever anyone is in distress.

His approach is always positive;
He is a sacred word that knows no negativity.

Without dwelling on tomorrow and without carrying the weight of yesterday,
He is a traveler of today, breathing in fresh air.

Our sister-in-law (Anni) is the devoted companion who provides overwhelming hospitality;
The gathering of relatives is their very life force.

He speaks with friendly authority and mingles joyfully with children;
A pure, innocent heart and a blemish-less, child-like nature.

They are achievers who crossed
Trials and tribulations as if they were just a game.
In a world focused on amassing wealth,
They are the ones who prioritized their kin.

To these two who always bless others,
We greet them today,
Wishing that they live in good health.

Hearts that Greet,
Loving Younger Brothers.`,
            content: `எங்களின் வழிகாட்டும் ஒளிவிளக்கே உலகைக்காட்டும் கிழக்கே
உங்களுக்கு அறிவதில் ஆர்வம் அதனைப் பகிர்வதில் அக்கறை
பிறர்மீதான கரிசனமே நீங்கள் விரும்பும் இறைதரிசனம்.

சுவைபடப் பேசும் நாவலர் தொடர்ந்து படித்திடும் ஆர்வலர்
அன்பு உறவுகளின் காவலர் வாழ்த்துமழை பொழியும் பாவலர்

எமக்கென்ன என்று இருந்ததில்லை ஒருநாளும்
எவருக்கிடர் என்றாலும் இவர் கைநீளும்.

அணுகுமுறை எப்போதும் நேர்மறை
இவர் எதிர்மறையில்லா திருமறை.

நாளையை நினைக்காமல் நேற்றையை சுமக்காமல்
புதிய காற்றையே சுவாசிக்கும் இன்றையப் பயணி.

விழுந்து விழுந்து உபசரிக்கும் உற்ற துணைவி எங்கள் அண்ணி
உறவுகளின் கூடலே இவர்களது உயிர்

உரிமையுடன் உரையாடுவார் மழலைகளுடன் உறவாடுவார்
கள்ளமில்லா வெள்ளை மனம் களங்கமில்லா பிள்ளைக்குணம்

சோதனைகளை வேதனைகளை
விளையாட்டாய்க் கடந்த சாதனையாளர்கள்
சொத்துக்கள் குவிக்கும் உலகில்
சொந்தங்களுக்கு முதன்மை தந்தவர்கள்

என்றும் வாழ்த்தும் இவர்களை
நலமோடு வாழ்கவென
இன்று நாங்கள் வாழ்த்துகின்றோம்.

வாழ்த்தும் உள்ளங்கள்,
அன்புத்தம்பிகள்.` },
          {
            id: "fv3",
            title: "பிறந்த நாள் வாழ்த்து",
            date: "28 செப்டம்பர் 2018",
            image: "/kumar_to_kumar.jpeg",
            audioFile: "/kumar_to_kumar-audio.m4a",
            englishTranslation: `It is your nature to speak in a style unique to Panagudi, mixing humor and wit while adding words as strong as fertilizer.
Kindness in your eyes, humanity in your heart, and books in your hands are your identity.
Turning darkness into day, enjoying the beauty of the daylight, and making reading your own is your excellence.
Making relationships your life force and traveling hand-in-hand with your younger brothers is your path.

Why do you need greetings?
Bless us instead on your birthday.
  
- Your well wishing Doctor
  Dr. R. Meenatchi Sundaram
  Nellai`,
            content: `குமார் அத்தானுக்கு வணக்கம்....

உரமென சொற்களை சேர்த்து 
கிண்டலும் கேலியுமாய் பணகுடிக்கே உண்டான  பாணியில் பழகுவது உங்கள் இயல்பு 
கண்ணில் கனிவும் மனதில் மனிதமும் 
கைகளில் புத்தகமும் 
உங்கள் அடையாளம் 
இருளை பகலாக்கி...
பகலின் அழகை ரசித்து 
வாசிப்பை தனதாக்குவது 
உங்கள் மேன்மை
உறவுகளை உயிராக்கி
தம்பிகளுடன் கைகோர்த்து
பயணிப்பது உங்கள் நடை

வாழ்த்து எதற்கு உங்களுக்கு 
நீங்கள் பிறந்த நாளில் எங்களை வாழ்த்துங்கள்

   தங்கள் நலம் விரும்பும் மருத்துவர்
   Dr. இரா.மீனாட்சி சுந்தரம்
   நெல்லை ` },
          {
            id: "fv1",
            title: "எழுபதைத் தொழுவோம்",
            date: "28 செப்டம்பர் 2025",
            image: "/bdy-70.jpg",
            audioFile: "/bdy-70-audio.mp3",
            englishTranslation: `We salute this seventy.
A seventy-year-old youth.
An artist of speech even at a young age; the reason for such sweet speech is not the sugar level in the body, but the immense love within the heart.
The strength to endure anything is not due to a fitted Stent.
It is the power of high ideals.
One who provides solutions to all problems.
One who also perceives the potential problems within every solution.
If one knows how to hold their breath, they can gather pearls from this deep ocean.
Otherwise, one might say there is only wandering foam.

A great man of broad mind and vast wisdom.
There is always a microscope in his eyes.
Even if he spots a tiny grain of good character or talent in others, he shares it with everyone in wonder and never forgets to rejoice in it.
There is always a telescope around his neck; it captures and shows significant events happening in any corner of the world.
It also predicts the future, aided by his historical perspective and scientific approach.

He always carries a scale of justice.
It weighs things without discrimination, yet it never puts a price tag on them.
He walks his path without enmity.
Strict control is very scarce with him.
Harshness is certainly not in him; an award could be given to anyone who finds it.
Being born as the eldest son, not only rights and privileges but also responsibility and patience are his siblings.
The library is his second home.
He has critiques for everyone, but he has never held hatred for anyone.

He is our guiding light, the East that shows us the world.
He has a passion for knowing and a concern for sharing it.
Showing concern for others is the divine vision he seeks.
An eloquent orator who speaks with finesse.
An enthusiast who reads continuously.
A guardian of loving relationships.
A poet who showers rains of blessings; his approach is always positive, a sacred word that knows no negative.
Without dwelling on tomorrow, without carrying yesterday, he is a traveler of today breathing fresh air.

Our sister-in-law (Anni) is the steadfast companion who provides overwhelming hospitality.
The gathering of relatives is their very life.
He converses with authority and mingles with children; a pure, innocent heart and a blemish-less, child-like nature.
Both are achievers who crossed trials and tribulations as if they were a game.
Their home served as a rain-bearing cloud for the thirsty and a sanctuary like Vedanthangal for birds.
In a world that amasses assets, they prioritized their kin.
We, who are always blessed by them, wish them a healthy life today.

- Pon. Kandasamy`,
            content: `எழுபதைத் தொழுகிறோம்.
எழுபது வயது இளைஞர் 
பேச்சில் இளம் வயது கலைஞர் இனிமையான பேச்சுக்குக் காரணம் உடலில் உள்ள சர்க்கரை அளவல்ல இதயத்தில்  உள்ள பேரன்புதான்.
எதையும் தாங்கும் வலிமை பெற்றிருப்பதற்குக் காரணம் பொருத்தப்பட்ட Stent அல்ல .
அது உயர் சிந்தனைகளின் பலம்.
எல்லா பிரச்சினைகளுக்கும் தீர்வுகளைச்  சொல்பவர். 
எல்லா தீர்வுகளிலும் உள்ள பிரச்சனையையும் காண்பவர்.
மூச்சடக்கத் தெரிந்தால் இந்த ஆழ்கடலில் முத்துக்களை அள்ளலாம். 
இல்லை எனில் அலையும் நுரையும் உள்ளன என சொல்லலாம்.
பரந்த மனமும் விரிந்த ஞானமும் கொண்ட பெருமகன் 
இவர் கண்களில் எப்போதும் ஒரு நுண்ணோக்கி இருக்கும் 
எள்ளளவு நற்குணத்தையோ திறனையோ பிறரிடம் கண்டால் கூட அதனை வியந்து மறவாது அனைவரிடமும் பகிர்ந்து மகிழும் .
அவர் கழுத்தில் எப்போதும் ஒரு தொலைநோக்கி இருக்கும் உலகில் எந்த மூலையில் நடக்கும் முக்கிய நிகழ்வுகளையும் படம் பிடித்து காட்டும். 
அது எதிர்காலத்தையும் கணிக்கும் . அதற்கு அவர் வரலாற்றுப் பார்வையும் அறிவியல் அணுகுமுறையும் உதவும்.
அவரிடம் எப்போதும் ஒரு நியாயத்தராசு  இருக்கும் 
அது வேறுபாடு இன்றி எடை போடும் ஆனாலும் விலை போடாது
விரோதம் இன்றி நடை போடும் . கட்டுப்பாடு இவரிடம் மிகவும் தட்டுப்பாடு.
கண்டிப்பு இவரிடம் கண்டிப்பாக இல்லை கண்டுபிடித்தவருக்கு விருதே தரலாம். 
மூத்த மகனாய் பிறந்ததனால் உரிமையும் சலுகையும் மட்டுமல்ல பொறுப்பும் பொறுமையும் இவர் உடன் பிறப்பு.
நூலகம் இவரது இரண்டாவது தாயகம்.
எல்லார் மீதும் விமர்சனம் உண்டு ஆனால் எவர் மீதும் வெறுப்பு இருந்தது இல்லை.
எங்களின் வழிகாட்டும் ஒளி விளக்கு உலகைக் காட்டும் கிழக்கு
இவருக்கு அறிவதில் ஆர்வம் அதனை பகிர்வதில் அக்கறை 
பிறர் மீதான கரிசனமே இவர் விரும்பும் இறை தரிசனம் 
நயம்பட பேசும் நாவலர்
தொடர்ந்து படித்திடும் ஆர்வலர்
அன்பு உறவுகளின் காவலர் 
வாழ்த்து மழை பொழியும் பாவலர் அணுகுமுறை எப்போதுமே நேர்மறை இவர் எதிர்மறை அறியா திருமறை நாளையை நினைக்காமல் 
நேற்றை சுமக்காமல் 
புதிய காற்றையே சுவாசிக்கும் இன்றைய பயணி 
விழுந்து விழுந்து உபசரிக்கும் 
உற்ற துணைவி எங்கள் அண்ணி.
உறவுகளின்  கூடலே இவர்களது உயிர்.


உரிமையுடன் உரையாடுவார் மழலைகளுடன் உறவாடுவார். கள்ளம் இல்லா வெள்ளை மனம். களங்கமில்லா பிள்ளைக்குணம். சோதனைகளை வேதனைகளை எல்லாம் விளையாட்டாய் கடந்த இருவரும் சாதனையாளர்கள் . தாகத்தோடிருப்போருக்கு மழை தரும் மேகமாகவும்
பறவைகளுக்கு வேடந்தாங்கல் இடமாக திகழ்ந்தது இவர்கள் அகம்.
சொத்துக்கள் குவிக்கும் உலகில் சொந்தங்களுக்கு முதன்மை தந்தவர்கள் 
என்றும் வாழ்த்தும் இவர்களை நலமோடு வாழ்க என இன்றும் நாங்கள் வாழ்த்துகிறோம்.

 - பொன் கந்தசாமி`
          }

        ],
      },
      {
        id: "for-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          {
            id: "fi1", title: "சித்தப்பா இராமலிங்கம் அவர்களின் இரங்கல்",
            date: "24 மார்ச் 2026",
            audioFile: "/Perumalpuram Thatha Erangal Audio.mp3",
            image: "/perumalpuram_thaatha.png",
            englishTranslation: `
            I have no words to express my grief. 
            O God you are so cruel to take a graceful soul at an early age`,
            content: `
            வானத்து அமரன் வந்தான் காண்,
            வந்தது போல் சென்றான் காண்
            `
          },
          {
            id: "fi4",
            title: "அக்கா தனலட்சுமி (குந்தவை பிராட்டியின்) இரங்கல்",
            date: "29 மார்ச் 2026",
            image: "/aththai-img.jpg",
            audioFile: "/maranthai_aththai.m4a",
            englishTranslation: `Brother...
You are three years younger than me, but in this life, you were always the first to support me... like an elder brother! Since childhood, you did not walk in front of me... you were always by my side... and at times, behind me like a shadow... I never asked for myself, but you were always there at the moment I needed you... and you did what was necessary...
You
You never expected anything..
But
You wanted to live
Without losing my respect for you!
That was your world!

The long phone conversation
I had with you
Keeps echoing within me
Without ceasing!

Believing that being with you
Was safety,
I moved into Panagudi!
But you...
You surrendered
To the haste of the God of Time!

To whom shall I tell?
What shall I do?
Confused like a child
In the silence of your absence,
I am wasting away searching for you!
I search for your voice
Saying, "I am here."

All that I pray for
Is only one thing!
That you alone must be my younger brother...
Even in the next life...

With love forever,
Your affectionate elder sister,
P. Dhanalakshmi Somasundaram.`,
            content: `
            தம்பி! 
            என்னை விட 
            மூன்று வயது இளையவன் 
            ஆனால் 
            இந்த வாழ்க்கையில் 
            எப்போதும் 
            நீயே 
            என்னை முதலில் தாங்கினாய்... 
            அண்ணனாக! 
            
            சிறு வயதிலிருந்தே 
            எனக்கு முன்னால் நடக்கவில்லை நீ... 
            எப்போதும் என் பக்கத்தில்... 
            சில நேரங்களில் என் பின்னால் நிழலாக... 
            நான் கேட்டதில்லை
            ஆனால் 
            நீ எப்போதும் எனக்கு 
            தேவையான நேரத்தில் இருந்தாய்... 
            தேவையானதை செய்தாய்...
            நீ
            எதையும் எதிர்பார்த்ததில்லை..
            ஆனால்
            என் மரியாதை உடைந்து போகாமல்
            வாழ வேண்டும்
            என நினைத்தாய்!
            அதுதான் உன் உலகம்!

            உன்னுடனான
            நீண்ட அலைபேசி உரையாடல்
            என்னுள்
            ஓயாமல் ஒலித்து கொண்டிருக்கிறது!

            உன்னுடன் இருப்பதே
            பாதுகாப்பு என்று
            பணகுடிக்கு இடம்பெயர்ந்தேன்!
            நீயோ
            காலதேவனின் அவசரத்திற்கு
            இணங்கி விட்டாய்!

            யாரிடம் சொல்வது?
            என்ன செய்வது?
            குழந்தை போல குழம்பி
            நீ இல்லாத மௌனத்தில்
            உன்னைத் தேடி அழுகின்றேன்!
            "நான் இருக்கிறேன்"
            என்ற உன் குரலை தேடுகின்றேன்!

            நான் வேண்டுவதெல்லாம்
            ஒன்றே!
            நீயே என் தம்பியாக
            வேண்டும்...
            அடுத்த பிறவியிலும்...

            என்றென்றும் அன்புடன்
            உன் பாசமிகு அக்காள்
            P. தனலட்சுமி சோமசுந்தரம்.
                        `
          },
          {
            id: "item_1774940432499",
            title: "அத்தான் சோமசுந்தரத்தின் இரங்கல்",
            date: "31 மார்ச், 2026",
            image: "/item_1774940432499_maranthai_mama_img.jpg",
            audioFile: "/maranthai_mama.mp3",

            content: `என் அருமை மைத்துனனே...
"அத்தான்"
என்று
அன்பு பொங்க அழைக்கும்
உன் குரலுக்காக
ஏங்கிக் கொண்டிருக்கிறேன்!

நீ
பொறுமையின் சிகரம்
அன்பின் கடல்
பாசத்தில் விரிந்த வானம்
பண்பில் உயர்ந்த மனிதன்...

உறவுகளுடன் கூடுவதிலும்
உறவுகளை பேணுவதிலும் — தான்
உனக்கு சந்தோஷம்!
எங்களுக்கு பார்க்க பார்க்க
பரவசம்!

விருந்தோம்பலில்
உன்னை மிஞ்ச யாருமில்லை!
"வந்தவருக்கு
என்ன பிடிக்கும்?" என்று
பார்த்து பார்த்து உபசரிப்பதில்
உனக்கு பேரானந்தம்!

பதவிகளை நாடாமல்
பொறுப்புகளை
எங்களிடம் வழங்கி
தலைமையை கற்றுத்தந்தாய்
உடனிருந்து...

இன்று இளந்தலைமுறை
வெற்றியோடு
பயணிக்கின்றது என்றால்
உனது வழிகாட்டுதலே காரணம்!

உன் அன்பு என்றும்
பிரகாசிக்கிறது.
உன் மதிப்பு நாள்தோறும்
உயர்கிறது
உன் நினைவு
எங்கள் மூச்சோடு கலந்து
உயிரோடு உள்ளது!

என்றும் அன்புடன்
உன் அத்தான்
கோ. சோமசுந்தரம்.`,
            englishTranslation: `My dear brother-in-law...
I am longing
For your voice
That used to call out "Athaan" Overflowing with love!

You were:
The peak of patience,
The ocean of love,
The sky expanded with affection,
A man of supreme character...

In gathering with relatives
And in nurturing those relationships—
That is where your joy lay!
For us, watching you
Was sheer delight!

In hospitality (Virunthompalam),
There is no one to surpass you!
"What would
Our guest like?"
Taking such meticulous care in hosting
Brought you the greatest happiness!

Without seeking titles (positions of power),
You handed over responsibilities
To us, and
Taught us leadership
By being right beside us...

If today the younger generation
Travels with success,
It is because of your guidance!

Your love shines
Forever.
Your worth increases
With every passing day.
Your memory
Is mingled with our breath
And remains alive!

Always with love,
Your Athaan,
G. Somasundaram.`,
          },
          {
            id: "fi2", title: "தங்கை சங்கீதா இனியனின் இரங்கல்",
            date: "28 மார்ச் 2026",
            audioFile: "/Babu Ka_ Audio_ Essay & Song.mp3",
            image: "/babuththai-hw.jpg",
            englishTranslation: `You are the 'Resting Stone' (Sumai Thaangi) who voluntarily bears the burdens of others.
Has anyone ever seen you set down your own burden?
You are the one who gave us the stylus to sketch the great portrait of our lives!
You gave us the freedom and encouragement to fill our own ink.
O, Veena that spread music without a sound!
Blessed are the parents whose ears were graced to perceive it.

After reading the book 'Thai' (Mother) that you gave me, my heart adopted you as both Mother and Child.
It was also you who gave me La. Sa. Ra.’s 'Pachai Kanavu' (Green Dream);
From that day on, the horizon of my intellect expanded.
In any situation tightened and twisted by the heat and weight of arguments,
You are the magician who knows how to melt it in a second with your shrewd humor.
No matter what 'atomic bomb' of a problem is waiting to explode,
What a talent you have to douse it with water and extinguish it!

O Leader, with the character and skill to guide this entire society,
Did the 'prison of family' confine you?
Had you entered public life, you would have emerged as a stellar legend (Annal).
Without holding a physical scale of justice, your mindset of respecting everyone's problems is unique.
A heart tempered like steel, not by hiding behind a shield, but by enduring the scars of many wounds.
Among people who mask themselves with colors and wordplay,
Who else is there for us like this brother who offered love with a pure heart?

Your loss reminds me of Vannadasan’s line: "Among wonders, you are the wonder... there is none like you..."
As we began to understand your words, our blossoming hearts became your most affectionate fans!
Your poetic heart was able to touch the depths of the soul that even we hadn't recognized or reached.
That is why there are so many Mohanangal (enchantments).
(When I say Mohanangal, I combine the essence of both the enchanting and the enchanted).

It is only your body that has departed from us; you are always with our hearts... ever alive.

- Babu Iniyan.`,
            content: `பிறர் சுமை வலிய, சுமக்கும் 'சுமை தாங்கி' நீங்கள்

தன் சுமை இறக்கி யாராவது கண்டதுண்டோ?

எங்களின் வாழ்பெரும் சித்திரம் தீட்ட எழுத்தாணி தந்ததே நீங்கள் தான்!

அவரவர் மைகளை நிரப்பிக்கொள்ள சுதந்திரமும் ஊக்கமும் கொடுத்தீர்கள்

ஒலியின்றி இசை பரப்பிய வீணையே!

அதை உணரும் செவி பெற்றோர் பேறு பெற்றோர்.

நீங்கள் கொடுத்த 'தாய்' புத்தகம் படித்த பின் என் மனசு உங்களை தாயாய் / சேயாய் வரித்துக் கொண்டது.

லா.சா.ரா-வின் 'பச்சைக்கனவு' கொடுத்ததும் நீங்கள் தான்

அன்று முதல் என் கனவின் வானம் விரிந்தது.

உரையாடல்களின் கனத்தினாலும் சூட்டிலும் இறுகி முறுக்கிக்கொண்ட எந்தச் சூழலையும்

தன் சாதுர்ய ஹாஸியத்தால் நொடியில் இளகச் செய்ய வைக்கத் தெரிந்த மாயாவி அய்யா நீ.

இதோ வெடிக்கும் என காத்திருக்கும் எந்த அனுகுண்டு பிரச்சனையும்

தன் தலையீட்டால் நீர் பாய்ச்சி அணைத்துவிடும் திறமை தான் என்னே!

இச்சமுதாயத்தை வழிநடத்தமளவு திறமையும் பண்பும் கொண்ட தலைவனே

உங்களை குடும்பச் சிறை அடைத்து விட்டதோ?

பொது வாழ்வில் இறங்கி இருந்தால் நட்சத்திர அண்ணாவாய் வந்திருக்கலாம்.

துலாக்கோல் ஏந்தாமல் அவரவர் பிரச்சனையும் மதிக்கும் உங்கள் மனப்பாங்கே தனி.

கேடயம் கொண்டு எதையும் தாங்காமல் விழுப்புண்கள் வாங்கியே உறமேறிய மனது.

வர்ணங்கள் பூசி வார்த்தை ஜாலம் செய்யும் மனிதரிடையே

வெள்ளை மனதின் உள்ளன்போடு அன்பு வழங்கிய அண்ணனைப் போல் இனி யார் எங்களுக்கு?

"அற்புதங்களில் நீ தான் அற்புதம்... கிடையாது..." எனும் வண்ணதாசன் வரியை நினைவு படுத்திவிட்டது உங்கள் இழப்பு.

உங்களின் வரிகள் புரிய புரிய மலர்த்திய எங்கள் மனமயக்கத்தில் தான் இத்தனை வாஞ்சல்யம் மிக்க ரசிகர்கள் உங்களுக்கு!

அவரவர் அறியாத தொடாத மனதின் ஆழங்களை தொட்டு விட முடிந்தது உங்களின் கவி மனசுக்கு.

அதனாலேயே இத்தனை மோகனங்கள்.

(நான் மோகனங்கள் என சொல்வது மோகினி மற்றும் மோகனர் என இணைத்து சொல்கிறேன்)

உங்களின் உடல் தான் பிரிந்தது எங்களுக்கு; நீங்கள் என்றும் எங்களின் மனதோடு தான்... உயர்ப்போடு.

பாபு இனியன்.`
          },
          {
            id: "fi3", title: "தம்பி கந்தனின் இரங்கல்",
            date: "24 மார்ச் 2026",
            audioFile: "/appa_audio_clean.mp3",
            image: "/kandhan.jpg",
            englishTranslation: `The divine hand that embraced those who were forsaken.
The supreme light of grace that showed mercy to the needy and the helpless.

How could your heart find the will to part, Brother,
From those who held you in such boundless love
And the vast circle of friendship you leave behind?

The Kuyil Paattu (Cuckoo’s Song) of Bharathi Illam has fallen into silence...
Our guiding light, our shining lamp—
How can we ever bid you farewell, Brother?

I truly believed we would converse at leisure after my retirement.
But you have plunged us into an unhealable sorrow
And departed into an eternal sleep, Brother.`,
            content: `
            புறக்கணிக்கப்பட்டவர்களையும் அரவணைக்கும் திருக்கரம்
            இல்லாதோருக்கும் இயலாதோருக்கும் இரங்கும் அருட்பெருஞ்ஜோதி
            பேரன்புக்குரியவர்களையும் 
            பெரும்நட்பு வட்டத்தையும் 
            பிரிய எப்படி மனம் வந்தது அண்ணா. 
            பாரதி இல்லத்தின் குயில் பாட்டு அமைதியாகி விட்டதே.. 
            வழிகாட்டும் ஒளி விளக்கை எப்படி வழி அனுப்பி வைப்போம் அண்ணா.
            ஓய்வுக்குப் பின் நிதானமாக உரையாடலாம் என்று தானே இருந்தேன்
            ஆறாத் துயரில் தள்ளிவிட்டு மீளாத் துயிலில் சென்றுவிட்டாயே அண்ணா `
          },
          {
            id: "item_1774935563695",
            title: "மகன் வேதநாயகத்தின் இரங்கல்",
            date: "28 மார்ச், 2026",
            image: "/Vetham.jpg",
            audioFile: "/item_1774935563695_Vetham-audio.opus",
            content: `பெரிய(அ)ப்பாவுக்கு அர்ப்பணிப்பு

ஆலமரமாய் நின்ற உன் நிழல்,
எங்கள் வீட்டின் அஸ்திவாரமாக இருந்தது.
எங்கள் இருளில் ஒளியாகவும்,
எங்கள் வாழ்வில் உறுதியாகவும் நீயே இருந்தாய்.
உடைமைகள் மட்டும் அல்ல,
உறவுகளையும் தந்தாய்;
உரிமைகளை காத்து,
வாழ்க்கையை உருவாக்கினாய்.
எங்கள் வாழ்க்கை என்ற செடியை நட்டு,
அதை மரமாக வளர்த்தாய்.
ஆனால் கனியை காணும் முன்பே
நீ மறைந்தாய்.
"பெரியப்பா இருக்கிறார்" என்ற நம்பிக்கை—
இன்று சிதறி விழுந்துவிட்டது.
வாழ்க்கைப் பயணத்தின் கால்கள் இடறினாலும்,
பிடிக்கக் கை இருந்தது;
இன்று அந்த கை
கண்ணீரில் கரைந்துவிட்டது.
ஆரம்ப பள்ளி முதல் கல்லூரி வரை,
என் வாழ்க்கைப் பாதை முழுவதும் நீயே நடந்தாய்.
என் கல்வி, என் தேர்வு,
பேச்சுப் போட்டி, கட்டுரை போட்டி, கவிதைப் போட்டி—
எனக்கான அனைத்திலும்
நீயே வழிநடத்தினாய்.
என் முதல் எழுத்தை கற்றுக்கொடுத்த கை நீ;
பள்ளி, கல்லூரி நாட்களில் நான் பெற்ற பரிசுகளுக்கும்,
என் மேடைப் பேச்சுகளுக்கும் காரணம் நீ.
நான் பெற்ற ஒவ்வொரு சாதனையின் பின்னாலும் நீ மட்டுமே இருந்தாய்.
என் பெயருக்கு மதிப்பு தந்தது நீ,
என் வாழ்க்கைக்கு அர்த்தம் தந்தது நீ.
என் ஊரில் நான் யார் என்றால்—
அது உன் பெயரால் தான்.
"பாங்கர் தம்பியின் மகன்" என்றே நான் அறியப்படுவேன்.
உடல் நலம் பார்த்து உதவும் உறவுகளுக்கு நடுவில் நீயோ;
என் முகம் பார்த்து உதவினாய்.
என் முகம் வாடினால்,
வார்த்தைகளால் ஊக்கமூட்டி
என்னவென்று அறிந்து உதவுவாய்.
மருத்துவ செலவுகள், குடும்பச் செலவுகள் முதல்
சின்ன சந்தோஷங்கள் வரை—
அனைத்தையும் என் வாழ்க்கையில் விதைத்தாய்.
ஹோட்டல் உணவுகளும், திரையரங்கங்களும்,
பூங்கா சுற்றுலாக்களும்—
என் சிறுவயது மகிழ்ச்சிகள் அனைத்தும்
வழங்கியது நீயே.
அந்த நினைவுகள் இன்று
கண்ணீரின் சுமையாக மாறிவிட்டன.
என் முதல் வெளியூர் பயணம் கூட
உன்னால்தான் தொடங்கியது.
இன்று அந்த நினைவுகள்
என் இதயத்தை நொறுக்குகின்றன.
ATM அட்டை இல்லாத காலத்திலிருந்து
என் பிறப்பு முதல் இன்று வரை
எங்களுக்கு ஆதரவான ஒரே ஆதாரம் நீ.
எங்கள் குடும்பத்தை தாங்கிய தூண் நீ.
எல்லாவற்றையும் நான் கேட்கும் முன்பே கொடுத்தாய்;
என் தேவைகள் அனைத்துக்கும் நீயே ஆதாரம்.
நீர் இல்லாத மீன் போல,
நீ இல்லாத நான்—
உன் குரல், உன் எண்ணங்கள்
இன்றும் எங்கள் மனதில் ஒலிக்கின்றன.
உன் இடத்தை யாராலும் நிரப்ப முடியாது.
உன் நிழலில் வாழ்ந்த நான்,
இன்று நிழல் இன்றிக் நிற்கிறேன்.
என் ஒவ்வொரு கண்ணீரிலும்
உன் அன்பு ஓடிக்கொண்டிருக்கிறது.
நீ இல்லாமல் நான் இன்று
என்னையே இழந்து தவிக்கிறேன், பெரியப்பா...

என்றென்றும் நன்றியோடு நீ வளர்த்த பிள்ளை
C.Vethanayagam MCA
Consultant, Atos Syntel
Chennai`,
            englishTranslation: `Your shadow, which stood like a Banyan tree,
Was the very foundation of our home.
You were the light in our darkness,
And the strength within our lives.
You gave us not just possessions,
But meaningful relationships too;
By protecting our rights,
You built our lives for us.
You planted the sapling of our life
And nurtured it into a tree.
But before you could see the fruit,
You have vanished.
The belief that "Periyappa is here"—
Has shattered and fallen today.
Even when my feet stumbled on life's journey,
There was a hand for me to hold;
Today, that hand
Has dissolved into tears.
From elementary school to college,
You walked beside me through my entire life path.
My education, my exams,
Speech competitions, essay contests, poetry recitals—
In everything that was for me,
It was you who guided the way.
Yours was the hand that taught me my first letter;
For the prizes I won during my school and college days,
You are the reason behind my public speeches.
Behind every achievement I earned, you alone stood.
You gave value to my name,
You gave meaning to my life.
If asked who I am in my hometown—
It is only through your name.
I am known as the "son of Banker Thambi."
Among relatives who help only after seeing one's physical health;
You helped just by looking at my face.
If my face withered (in sadness),
You would encourage me with words,
Understand what was wrong, and help.
From medical expenses and family costs
To the smallest joys—
You sowed everything into my life.
Restaurant meals, movie theaters,
And trips to the park—
All my childhood happiness
Was provided by you.
Those memories today
Have turned into a burden of tears.
Even my first journey out of town
Started because of you.
Today, those memories
Are crushing my heart.
From the times when there were no ATM cards...
From my birth until today,
You were the only source of support for us.
You were the pillar that held our family together.
You gave me everything even before I asked;
You were the provider for all my needs.
Like a fish out of water,
So am I without you—
Your voice, your thoughts,
Still resonate in our hearts today.
No one can ever fill your place.
I, who lived in your shadow (protection),
Stand today without any shade.
In every one of my tears,
Your love keeps flowing.
Without you today,
I am lost and struggling to find myself, Periyappa...

Forever with gratitude, the child you raised,

C. Vethanayagam MCA
Consultant, Atos Syntel
Chennai`,
          },
          {
            id: "item_1774936549085",
            title: "மருமகள் பிரதீபா வேதநாயகத்தின் இரங்கல்",
            date: "28 மார்ச், 2026",
            image: "/item_1774936549085_Prathiba_anni.jpg",
            audioFile: "/item_1774936549085_prathiba_anni.opus",
            content: `பெரிய மாமனாருக்கு கண்ணீர் அஞ்சலி

நான் பார்த்த அமைதியின் உருவம்,
அன்பின் சிகரம், ஆளுமையின் வடிவம்;
அதிகம் பேச மாட்டார்,
ஆனால் இவரின் கண் அசைவிற்கும்,
புன்முறுவலுக்கும் ஆயிரம் அர்த்தங்கள் இருக்கும்.

“தம்பி உடையான் படைக்கு அஞ்சான் என்று கேள்வி பட்டதுண்டு”
“ஆனால் இவர் போன்ற அண்ணன் இருந்தால்,
வாழ்க்கையில் எதற்கும் அச்சம் கொள்ள தேவையில்லை என்று
தன் செயல்களால் நிருபித்து காட்டியவர்.”

கண்களில் இருக்கும் கண்ணாடியும்,
கைகளில் புத்தகமும்,
சாய்வு நாற்காலியில்அமர்ந்தபடி உரையாடும் விதமும்
காண்போருக்கு இவரின் அடையாளம்...

நெஞ்சம் நிறைந்த அன்பும்,
நேர்மையுடன் கூடிய உழைப்பும்,
உறவுகளை கட்டி அணைக்கும் விதமும்
இவருக்கே உரித்தான தனி சிறப்பு.

வாழ்வில் சிலரை மறக்க நினைப்பதுண்டு,
ஆனால் நினைவலைகளில் நீக்கமற நிறைந்து
நெஞ்சில் குடி கொண்ட எங்கள் இதய தெய்வம்,
மரியாதைக்குரிய மாமா “பொன் முத்துக்குமார்”,
அவர்களை இழந்து வாடும் அன்பு சொந்தங்கள் நாங்கள்,

எங்கள் கண்ணீரை காணிக்கை ஆக்குகிறோம்.

பிரதீபா வேதநாயகம் B.E
VSL India Private Limited
Chennai`,
            englishTranslation: `A Tearful Tribute to My Father-in-law (Periya Maamanar)

He was the embodiment of peace I witnessed,
The peak of love, and the form of personality;
He did not speak much,
But his slight eye movements and his faint smile
Held a thousand meanings.

"I have heard it said that he who has a younger brother fears no army,"
"But he proved through his actions
That if one has an elder brother (a protector) like him,
There is no need to fear anything in life."

The spectacles on his eyes,
The book in his hands,
And the way he conversed while sitting in his recliner—
These were his trademarks to those who saw him...

A heart full of love,
Hard work coupled with honesty,
And the way he embraced and held relationships together
Were the unique qualities special only to him.

In life, we may wish to forget some people,
But you are the divine soul who dwells in our hearts,
Permanently filling our waves of memory.
Our respectful Uncle (Maama), "Pon Muthukumar,"
We, the loving relatives who grieve your loss,

Offer our tears as our tribute.

Prathiba Vethanayagam B.E
VSL India Private Limited
Chennai`,
          },
          {
            id: "fi5", title: "சகோதரிகளின் விழுதுகள் - மருமக(ன்)ள்களின் இரங்கல்",
            date: "29 மார்ச் 2026",
            audioFile: "/guru-audio.m4a",
            image: "/marumagangal.jpg",
            englishTranslation: `
Mama...
Both my eyes
Have become pools (of tears)..
My mind suffers in loneliness...
My heart feels heavy...
Words are failing...
The waves of your memories
Rise like a tsunami
And keep crashing against my entire soul!

You always loved
Taking us all
Out together...
When that is so,
How did your heart agree
To depart and leave us behind?

To describe your love
In mere words
Feels like a great crime...
Because...
It is
An emotion that needs
No explanation...
You are not just a relative—
You are life itself...

Not just mother’s brother,
But our protector,
Our best friend!
The sculptor who
Silently carved us (into who we are)...

In our childhood,
On weekends,
At the Thalavai Bhadrakali Amman bus stop—
Those evening hours
When we waited for you
Still remain unforgettable in our minds...

In our tiny, little
Achievements,
Oh, how much joy you found...
Seeing that (your joy),
We strove
Even harder!

Today I understand—
That we grew up
Not because of ourselves...
But because of your faith in us!

Your voice,
Resounding as you said,
"My elder sister's children"...
I cannot hear it today...
But it is echoing
Throughout my entire soul!

This pride
Still makes us
Stand tall today!

Your smile
Has become a memory today,
And it hurts (it feels hollow)...
Your patience
Has become a lesson
For our lives...

What you taught us
Were not mere words—but love (affections).
To be human... that even if there are
Differences of opinion,
To still love and respect that person...
Though your physical body has left,
Your love
Will never, ever
Leave us...

Thank you, Mama...
Not for leaving us,
But for living in such a way
That you shaped us into who we are.

As long as
This heart beats,
In every deep breath (we take),
You are —
Though silent,
Yet fully
With us!

With unchanging love
And immeasurable gratitude...
The roots (descendants) of your loving sisters....`,
            content: `
மாமா...
கண்கள் இரண்டும்
குளமாகின்றன..
மனம் தவியாய் தவிக்கிறது...
இதயம் கனமாகிறது...
வார்த்தைகள் தடைபடுகிறது...
உன் நினைவலைகள் சுனாமியாக
எழுந்து
உள்ளம் முழுதும் மோதிக் கொண்டிருக்கின்றன!

எங்களையெல்லாம் ஒன்றாக
கூட்டிச் செல்வதற்கே
உங்களுக்கு பிடிக்கும்...
அப்படியிருக்க
எங்களை விட்டு பிரிந்து செல்ல
உங்கள் மனம் எப்படி சம்மதித்தது?

உங்கள் அன்பை
வார்த்தையில் வர்ணிப்பது
ஒரு மாபெரும் குற்றமாகவே
தோன்றுகிறது...
ஏனென்றால்
அது
விளக்கம் தேவைப்படாத
ஒரு உணர்வு...
நீங்கள் உறவல்ல -
உயிர்...

அம்மாவின் சகோதரன் மட்டுமல்ல
எங்களின் பாதுகாவலன்
சிறந்த தோழன்!
மௌனமாய் எங்களை
செதுக்கிய சிற்பி...

எங்கள் குழந்தை பருவத்தில்,
வார இறுதியில்
தளவாய் பத்திரகாளியம்மன் பேருந்து நிறுத்தத்தில்
நாங்கள் உங்களுக்காக
காத்திருந்த அந்த மாலை நேரங்கள்
இன்றும் மனதில் ரீங்காரமிடுகிறது...

எங்களின் சின்னச் சின்ன
சாதனைகளில் தான்
உங்களுக்கு எவ்வளவு மகிழ்ச்சி...

அதைப் பார்த்து
நாங்கள் இன்னும்
முயற்சி செய்தோம்!

இன்று புரிகிறது—
நாங்கள் வளர்ந்தது
எங்களால் அல்ல..
உங்கள் நம்பிக்கையால்!

என் "அக்கா பிள்ளைகள்"
என்று ஒலிக்கும்
உங்கள் குரல்...
இன்று கேட்க முடியவில்லை...
ஆனால் மனம் முழுக்க
எதிரொலித்து கொண்டிருக்கிறது!

இந்த பெருமை
இன்றும் எங்களை
நிமிர்ந்து நிற்க செய்கிறது!

உங்கள் புன்னகை
இன்று நினைவாகி
வெறுக்கிறது....
உங்கள் பொறுமை
எங்கள் வாழ்வுக்கு
பாடமாக இருக்கிறது...

நீங்கள் கற்றுத் தந்தது
வாசகங்கள் அல்ல - நேசங்கள்
மனிதராக இருப்பது... கருத்து வேறுபாடு
இருப்பினும் அவரை நேசிப்பது / மதிப்பதே...

உடல் நீங்கினாலும்
உங்கள் அன்பு
ஒரு போதும் எங்களை
விட்டு நீங்காது...

நன்றி மாமா...
எங்களை விட்டு போனதற்காக அல்ல,
இப்படி வாழ்ந்து
எங்களை உருவாக்கியதற்காக,

இந்த நெஞ்சம்
துடிக்கும் வரைக்கும்,
ஒவ்வொரு பெரும் மூச்சிலும்
நீங்கள் —
மௌனமாகி,
ஆனால் முழுமையாக
எங்களோடு!

மாறா அன்படனும்
அளவில்லா நன்றியுடனும்...
உங்கள் அன்பு சகோதரிகளின்
விழுதுகள்....
`
          },
          {
            id: "item_1774933301251",
            title: "மகள் ஜோதிமணி பொன்னப்பனின் இரங்கல்",
            date: "30 மார்ச் 2026",
            image: "/jothi_akka_img.jpg",
            audioFile: "/item_1774933301251_jothi_akka_audio.m4a",
            content: `சித்தப்பா...
நீங்கள் என் கணவருக்கு பிரியமான தாய்மாமன். ஆனால் எனக்கு தாயுமானவன்!
என்மேல் நீங்கள் காட்டிய அன்பு, ஒரு தாயின் மடிச்சாயல்... பாதுகாப்பு, பரிவு என்று ஒரு சேரக் சேர்ந்தது.
அதனால்தானோ என்னவோ புதியதாய் இணைந்த நான் ஐக்கியமாகிவிட்டேன் என் புகுந்த வீட்டில்!
வங்கி வேலை என்று ஏதேனும் ஒரு சிறு அவசியம் வந்தாலும் நான் அழைப்பது உங்களைத்தானே! சலிக்காமல் நிழலாய் கவசமாய் என்னுடன் வந்தீர்களே!
என் மகனுக்கு உயிரோட்டத்துடன் ரைம்ஸ் (தென்னை மரத்தில்...) சொல்லித்தர உங்களைத் தேடுகின்றேன்!
மனம் நிறைந்த நன்றிகளுடன் 

உங்கள் அன்பு மகள்,
ஜோதிமணி பொன்னப்பன்.`,
            englishTranslation: `You are a beloved maternal uncle (Thaaimaman) To my husband. But to me, You are like a mother! (Thaayumaanavan)
The love you showered upon me Was like leaning into a mother's lap... A blend of Protection and compassion.
Perhaps that is why, Though I was a newcomer (to the family), I was able to merge so completely With my marital home!
Even for a small necessity, Like a trip to the bank, It was always you I called upon! Without ever getting tired, Like a shadow, Like a shield, You always came with me!
I am searching for you... To teach rhymes With such liveliness To my Son! ("In the coconut tree...")
With a heart full of gratitude, 

Your loving daughter, 
Jothimani Ponnappan.`,
          }
          ,
          {
            id: "item_1774940548683",
            title: "மகள் முத்துமீனாட்சியின் இரங்கல்",
            date: "29 மார்ச், 2026",
            audioFile: "/muthumeenatchi.opus",
            image: "/item_1774940548683_muthu_Meenatchi.jpg",

            content: `அன்பால் வெல்லும் அற்புதக் கலையால் அனைவர் உள்ளம் கவர்ந்தவர் நீரே!
இரக்க குணத்தில் இறைவனை வென்ற இன்முகம் கொண்ட இனியவர் நீர்!
தமிழ் பற்றை அனைவர் எண்ணத்தில் விதைத்தீர்.
உங்கள் சிந்தனையில் உதித்த சிந்தனை துளிகளை சுமந்த காகிதங்களும் கண் கலங்கி காத்திருக்கிறது...
உங்களோடு வார்த்தைகளை பகிர்ந்து கொண்ட வழிநடை நண்பர்களோ இன்று பாஷை இன்றி பரிதவிக்கின்றனர்.
உங்களின் கை பிடித்து எழுத கற்றவர்கள் இன்று கண்ணீரோடு உங்களுக்காக வரையும் கவிதை மடல்கள்.
நீங்கள் விதிகளில் இருந்து விடை பெற்றீர் ஆனால் எங்கள் விழிகளில் அல்ல—இருந்து அல்ல!

இப்படிக்கு,
முத்து மீனாட்சி`,
            englishTranslation: `You are the one who captured everyone’s heart with the wonderful art of winning through love!
You are the sweet person with a pleasant face who surpassed even the Divine through your compassionate nature!
You sowed the passion for the Tamil language in everyone’s thoughts.
Even the papers that carried the drops of thought born from your intellect are waiting with tearful eyes...
The walking friends who used to share words with you are now struggling, lost for words.
These are the poetic letters drawn for you today, with tears, by those who learned to write by holding your hand.
You have taken leave from the rules of fate/life, but not from our eyes—not from within us!

Yours,
Muthu Meenatchi`,
          }
          ,
          {
            id: "item_1774941974770",
            title: "மகள் அகல்யாவின் இரங்கல்",
            date: "24 மார்ச், 2026",
            image: "/agal.jpg",
            audioFile: "/agal-audio.m4a",
            content: `சிறிய கிராமத்தில் இருந்து கொண்டு பெரிய பெரிய காரியங்களை நிறைவேற்றிய பெரியப்பாவிற்கு

ஊர் அறியா என்னை 
உலகம் சுற்ற வைத்த உன்னத பயணி

தன் குடும்பம் தன் வீடு என இராமல்
பாருக்கே இடமளிக்கும் பாரதி இல்லத்தை கட்டியவர்

முற்போக்கு சிந்தனையை முதலில் ஊட்டியவர்

என்றும் என் வழிகாட்டும் ஒளி விளக்கு

என் கோடை விடுமுறைக் கொண்டாட்டம் நீங்கள் 

விடுமுறை முடிந்து ஊருக்கு அழாமல் சென்றதே இல்லை காரணம் உங்களது அப்பழுக்கற்ற அன்பு

சுயநலம் துளியும் கலக்காத பேரன்புக்கார்

நக்கலும் நகைச்சுவையும் பேச்சில் நடனமாடும்
அன்பும் அக்கறையும் செயலில் அதிகம் இருக்கும்

நேற்று கேட்ட செய்தி ஒரு கெட்ட கனவாக இருந்திடக்கூடாதா என்றே கண்ணீர் விடுகிறேன்

உங்களுக்கு நல்லவங்க கையால் நல்ல காபி தர காத்திருக்கிறேன் 

எழுந்து வாருங்கள் பெரியப்பா! 😭

தொலைத்து விட்டோம் நம் வீட்டு கவிக்குயிலை
தவற விட்டு விட்டோம் நம் முத்தான சொத்தை
நம் மீன் தொட்டிக்குள்ளே மீன் என நம்பி இருந்து விட்ட விண்மீனை 

இழந்து தவிக்கிறோம்
வருந்தி வாடுகிறோம்

வெறும் அறிவாளிகள் நம்மை சுயநலமி ஆக்குகிறார்கள்
வெறும் அன்பானவர்கள் நம்மை உணர்ச்சி மிகுந்த மனிதனாக்குகிறார்கள்
உங்களைப்போன்ற அன்பான அறிவாளிகளே நம்மை படைப்பாளிகளாக்கி
புத்துலகைப் படைக்க வைக்கிறார்கள்!

உங்கள் வழிகாட்டுதலின் படி புத்துலகை படைக்க விரும்பும்

உங்கள் அன்பு மகள், 
அகல்யா`,
            englishTranslation: `To my Periyappa, who achieved great things while living in a small village.

To the noble traveler who took me,
once unknown even to my own village,
and made me travel the world.

He did not live just for "his family" or "his house";
He built the "Bharathi Illam" (Bharathi Home),
A place that offered space and a heart for the whole world.

He was the first to sow the seeds of progressive thoughts in me.

You are forever my guiding light.

You were the very definition of my summer holiday celebrations.
I have never returned home after a vacation without crying;
Such was the weight of your stainless, pure love.

A man of great love, without a single drop of selfishness.

Sarcasm and humor would dance in your speech,
While love and care were always abundant in your actions.

I weep, wishing that the news I heard yesterday
Was nothing but a bad dream.

I am waiting here to give you a good cup of coffee,
Made by the hands of the good people.
Please wake up and come back, Periyappa! 😭

We have lost the "Poetic Nightingale" of our home.
We have let slip away our pearl-like treasure.
We lived believing the "Star" was just a "fish" inside our little tank.

We are lost in this grief,
Withered by this sorrow.

Logic alone confines us to the ego;
Emotion alone leaves us at the mercy of the storm.
But the union of Heart and Mind—the path you tread—
Ignites the Creator within us
To fashion a brand new dawn

Seeking to build that new world under your guidance!

Your loving daughter,
Agalya`,
          }
        ],
      },
    ],
  },

  {
    id: "press",
    number: "5",
    title: "பத்திரிக்கை நாளிதழ்களில் அவர் எடுத்த அவதாரங்கள்",
    icon: "📰",
    description: "பத்திரிக்கைகளில் அவரின் படைப்புகள்",
    subCategories: [
      {
        id: "vasantham",
        title: "வசந்தம்",
        description: "தம்பி கந்தனின் வசந்தம் பத்திரிக்கையில் வெளியான அண்ணனின் எழுத்துக்கள்",
        image: "/cover.png",
        items: [

          {
            id: "item_1775141232195",
            title: "இலட்சிய இளைஞனே! நீ எங்கே?",
            date: "ஜூன் 1985",
            image: "/item_1775141232195_june-vsantham-img.png",
            audioFile: "/item_1775141232195_june-vasantham-audio.m4a",
            content: `இலட்சிய இளைஞனே! நீ எங்கே?
		பொன். முத்துக்குமார்

பேருந்து நிலையத்தில் பருந்து நோட்டமோ!
வேலைக்கான கஜினி வேட்டையோ!
கூடிக் குடித்துக் கும்மாளம் இடுகிறாயோ!
புகைத்துப் புகைத்து யாகம் நடத்துகிறாயோ!
இல்லை
விரக்தியின் விளிம்பில் நிற்கிறாயோ!
சலித்து சலித்து சாம்பிப் போனாயோ!
மனதில் உள்ள மிரட்சியை மறைக்க
போடுவது தான் மிரட்டல் வேஷமோ!
இந்திய இருட்டுக்கு; அரசியல் புரட்டுக்கு
கிழட்டு இளைஞனே! நீதான் பூரண பொறுப்பு!
இருபதில் உனக்கு அறுபதின் தளர்ச்சி!
இளைஞன் பங்கேற்காத இயக்கம்;
இதயம் ஏற்காத சுவாசம்:
ஆனால் உனக்கு
அமிதாப் விஷயத்தில் அமோக ஞானம்?
பஞ்சாப் விஷயத்தில் ஞான சூன்யம்!
கிரிக்கெட் கேட்பதில் தனியொரு மயக்கம்
சகமனிதன் சங்கடம் தீர்க்க பெரிதும் தயக்கம்
உன் போர்த்தவம் கலைக்க பல மேனகை நர்த்தனம்.
உன்னை முடக்க எத்தனை தடைகள்!
உன்னை மயக்க எத்தனை வலைகள்!
உன்னின் தோளில் எத்தனை சிலுவைகள்!
இருபதில் கூட நீ எழ முடியாததற்கு காரணம்
இயலாமை அல்ல; மனம் இல்லாமை
தீட்சண்ய பார்வையோடு, தீர்க்கமான முடிவோடு
கிளர்ந்து எழு; கிளர்ச்சி செய்
சங்கமிக்கும் உணர்வுகளால் சங்கம் சேர்!
சகமனிதன் சங்கடம் தீர்!
புறப்படு! புரட்சி செய்!
பொங்கு! தடைகளைப் பொடிப் பொடியாக்கு!
விழிப்புடன் இருந்தால் தான் நீ
விடியலைக் காண்பாய்!`,
            englishTranslation: `O Idealistic Youth! Where are you?
				— Pon. Muthukumar

Are you casting a vulture’s gaze at the bus station?
Or are you on a "Ghazni-style" hunt for the maid?
Are you gathering to drink and making a raucous?
Are you performing a "ritual" of endless smoking?
No—
Are you standing on the edge of frustration?
Have you become shriveled and weary with boredom?
Is that threatening persona you put on
just a mask to hide the fear in your heart?
For the darkness of India; for the political deceptions—
O aged youth! You are entirely responsible!
At twenty, you have the exhaustion of a sixty-year-old!
A movement in which youth do not participate
is like a breath that the heart does not accept.
But for you—
There is immense knowledge regarding Amitabh (Bachchan)?
Yet in the matter of Punjab, your knowledge is zero!
There is a peculiar intoxication in listening to Cricket,
but a great hesitation to solve a fellow human's distress.
Many "Menaka" dances exist to break your meditative penance.
How many obstacles there are to paralyze you!
How many nets there are to entice you!
How many crosses are upon your shoulders!
The reason you cannot rise even at twenty
is not inability; it is a lack of will.
With a piercing gaze and a firm decision,
Rise up; start a rebellion!
Join a union with merging emotions!
Solve the distress of your fellow man!
Set out! Lead a revolution!
Surge forth! Shatter the obstacles into dust!
Only if you remain awake
will you witness the dawn!`,
          }
          ,
          {
            id: "item_1775142064886",
            title: "ஒரு கொடியில் இரு மலர்கள் -  ஒரு பட்டம் புலம்புகிறது",
            date: "ஆகஸ்ட் 1985",
            image: "/item_1775142064886_Aug_1985.png",
            audioFile: "/item_1775142064886_August_Vasantham_1985.m4a",
            content: `ஒரு கொடியில் இரு மலர்கள்
ஒரு பட்டம் புலம்புகிறது
	பொன். முத்துக்குமார்

ஓ! எங்கள் வீட்டு மாமரமே!
என் சின்ன வயது விளையாட்டு மைதானமே!
இருபத்தி ஈராண்டு பந்தமே!

நீ
காய்த்து எமக்கு கனி கொடுத்தாய்!
தலை சாய்த்தும் எனக்கு கல்விக் கண் கொடுத்ததாய்
உன்னைப் பலி கொடுத்தது என்னை சீராட்டிய
என் அப்பாவும் ஒரு சிறுதொண்டரே!

ஆனால்
உன்னை உயிர்ப்பிக்க நான் சிவபிரானும் அல்ல!
மீண்டும் உயிர்த்தெழ நீ ஏசுபிரானும் அல்ல!
எங்கள் வறுமைக்குப் பலியான தருவே!
சமயத்தில் உதவிய சஞ்சீவி மருந்தே!
உன்னை என் நினைவுகளால் கௌவிக்கிறேன்!
நீ காய்த்தும் பலன் தந்தாய்! மடிந்ததும் பயன் பட்டாய்!
படித்தும் நான் பயன் படவில்லையே இங்கு!`,
            englishTranslation: `O! The mango tree of our house!
The playground of my childhood!
A bond of twenty-two years!

You—
You bore fruit and gave us sweetness!
By bowing your head, you gave me the eyes of education;
My father, who nurtured me,
Was also a Siruthondar (a selfless devotee) for sacrificing you!

But—
I am no Lord Shiva to bring you back to life!
Nor are you Lord Jesus to rise again!
O tree, who fell victim to our poverty!
O Sanjeevi medicine, who helped us in our time of need!

I honor you with my memories!
You gave us fruit while you lived; you served us even in your death!
But despite my education, I remain of no use here!`,
          }
          ,
          {
            id: "item_1775142830758",
            title: "கண்மூடிப் பழக்கம் இன்னும் கண்மூடிப் போகலையோ!",
            date: "செப்டம்பர் 1985",
            image: "/item_1775142830758_sept_1985.png",
            audioFile: "/item_1775142830758_September_Vasantham-1985.m4a",
            content: `கண்மூடிப் பழக்கம் இன்னும்
கண்மூடிப் போகலையோ!

மோசமான முன்னுதாரணமாகி விட்ட
நேசமிக்க நாயுடம்மாவின் நாயகியே!
உங்கள் முடிவு பலர்கண்களை பனிக்கச் செய்கிறது
என்னால் என்னவோ உங்களை கோபிக்கவே முடிகிறது!
மகோன்னதமானது உங்கள் அன்பு என்பதை
நீங்கள் மரணித்துத்தானா நிரூபிக்க வேண்டும்?
காலாவதியாகி விட்ட உடன் கட்டை ஏறுதலை
உயிர்ப்பிக்கவா நீங்கள் உயிரை மாய்த்தீர்கள்!
ஒரு அறிவு ஜீவியின் மனைவியா நீங்கள்!
“உணர்ச்சிப் பூர்வமானவர்களே பெண்கள்
அவர்களுக்கு ஏது அறிவார்ந்த பார்வை?”
அற்ப கணிப்புக்கு நீங்களா உதாரணமாகிறது!
ஒரு விஞ்ஞானியின் துணைவி நீங்கள்!
அஞ்ஞானத்திற்கும் போய் விட்டீர்களே துணை!
சாதனை செய்து சரித்திர நாயகி ஆகாது
பிராணனை விட்டு புராண நாயகி ஆகிவிட்டீர்களே!
படித்து வைத்திருந்தீர்களே மருத்துவத்தை!
பின்பற்ற மறந்து போனீர்களே டாக்டர்
சௌந்திரத்தை!

டாக்டர்! டாக்டர்!
சாவை விரட்ட வேண்டிய நீங்களா...
சாவை வலிந்து வரவழைப்பது!
“பிரிவாற்றாமை கொடுமை தான்
அதற்கு மருந்து சாவுதான்”
சபித்தது உங்களை எந்தச் சாத்தான்?
ஓ!
கண்மூடிப் பழக்கம் இன்னும் கண்மூடிப் போகலையோ!

— பொன். முத்துக்குமார்`,
            englishTranslation: `Has the blind practice still not
closed its eyes (vanished)!

O heroine of the beloved Nayudamma,
who has now become a terrible example!
Your end makes many eyes well up with tears,
but somehow, I can only feel angry with you!
To prove that your love was sublime,
did you have to prove it by dying?
Did you take your own life to revive
the long-expired practice of Sati (self-immolation)?
Are you the wife of an intellectual!
“Women are merely emotional beings,
where is the rational perspective for them?”
Should you be the example for such a base estimation!
You are the partner of a scientist!
Yet you became a partner to ignorance!
Instead of achieving and becoming a heroine of history,
you gave up your life and became a heroine of mythology!
You had studied medicine!
But you forgot to follow it, Doctor
Soundirathai!

Doctor! Doctor!
Should it be you, who is meant to chase death away...
that invites death upon yourself?
“The pain of separation is indeed cruel,
and the only medicine for it is death.”
Which devil cursed you with this thought?
Oh!
Has the blind practice still not closed its eyes!

— Pon. Muthukumar`,
          }
          ,
          {
            id: "item_1775143091436",
            title: "நாங்கள்",
            date: "ஏப்ரல் 1986",
            image: "/item_1775143091436_April_1986.png",
            audioFile: "/item_1775143091436_April_Vasantham_1986.m4a",
            content: `நாங்கள்
— பொன் முத்துக்குமார்

எங்கள் சௌகரியங்களுக்காக
பெற்றவர்களையே மறப்பவர்கள்!
ஏற்படும் கணநேர அசௌகரியத்துக்காக
உலக சமாதான யாத்திரையைக்கூட
சபிப்பவர்கள்!

விடுதலைக்காக போராடத்துணியாது
ஜாமீனில் வெளிவரத் துடிப்பவர்கள்!
எந்தப் போராட்டத்தையும் பார்த்து (?)
எரிந்து விழுபவர்கள்; சலித்துக்கொள்பவர்கள்!

பாதையை சுலபமாக மறந்துவிட்டு
போதை சுவாரஸ்யத்தில் திளைப்பவர்கள்!
எங்களுக்காக சங்கடப்படுவோரையும்
சந்தேகத்தோடு தான் பார்ப்பவர்கள்!

தோழனே! ஓ நக்சல்பாரி தோழனே!
பார்வையில்லாத எங்களுக்காக வீணாய்
உதிரம் சிந்தி ஏன் சித்திரம் எழுதுகிறாய்?
நாங்கள் ஆயத்தமாவதற்குள்
அவசரப்பட்டு ஆயுதமேந்தி ஏன் அழிந்து
போகிறாய்?

தோழனே! ஓ நக்சல்பாரி தோழனே!`,
            englishTranslation: `We
— Pon. Muthukumar

For our own comforts,
We are those who forget even our parents!
For a moment’s inconvenience,
We are those who would curse even
a world peace pilgrimage!

Without the courage to fight for liberation,
We are those yearning only to get out on bail!
Looking at any struggle (?),
We are those who get irritated and weary!

Having easily forgotten the path,
We are those who revel in the thrill of intoxication!
Even those who feel distressed for our sake,
We are those who look upon them only with suspicion!

O comrade! Oh, Naxalbari comrade!
For us, who lack vision, why do you
wastefully shed blood to paint a picture?
Before we could even get prepared,
why do you take up arms in haste and
perish?

O comrade! Oh, Naxalbari comrade!`,
          }
        ],
      },
      {
        id: "articles",
        title: "கட்டுரைகள்",
        items: [
          {
            id: "item_1774959564631",
            title: "எனது வெட்டி வேலை",
            date: "09 நவம்பர் 2025",
            image: "/item_1774959564631_enadhu_vetti_velai.jpg",

            content: `கல்யாணம் ஆன புதிதில் மனைவியிடம் என் அம்மா, ‘அவனுக்கு வெந்நீர்கூட வைக்கத் தெரியாது. பார்த்துக்கோ அம்மா’ என்றார்.

இந்தக் காலமாக இருந்தால், ‘நல்லாத்தான் வளர்த்திருக்கீங்க பிள்ளையை’ என்று நேரிலேயே சொல்லி இருப்பார் என் மனைவி. ஆனால், அன்று ‘இதில் என்ன பெருமை?’ என்பது போலப் பார்த்தார். நான் வங்கி வேலைக்குப் போகும் பெருமையில் அடுப்படிப் பக்கமே செல்வதில்லை. எல்லாம் கைக்கு வந்துவிடும். ஆனால், பணி ஓய்வுக்குப் பிறகு, என் மனைவிக்கும் உடல்நலம் குன்றியதால் ஏதாவது உதவலாமே என்று நினைத்தேன். பந்தி பரிமாறும் வேலையில் இலைக்கு அப்பளம் போடுவதுதான் எளிய வேலை. அது போலத் துலக்கி வைக்கப்பட்ட பாத்திரங்களை அடுக்கும் வேலையைச் செய்யத் தலைப்பட்டேன்.

பாராட்டு கிடைத்திருக்கும் என்றுதானே நினைக்கிறீர்கள். அதுதான் இல்லை. ‘அது அதை அதற்குரிய இடத்தில் வைக்க வேண்டும். ஏனோதானோ எனச் செய்வதாக இருந்தால் செய்ய வேண்டாம். ஒட்டிக்கு ரெட்டி வேலை (ஒன்றுக்கு இரண்டு வேலை) வெட்டிவேலை’ என்கிற அர்ச்சனை காதில் விழுந்தாலும் ‘போற்றுவோர் போற்றட்டும்; தூற்றுவோர் தூற்றட்டும்; எது வரினும் நில்லேன். என் கடன் பணி செய்து கிடப்பதே’ எனத் தொடர்கிறது இந்த அணிலின் பணி. வீட்டுவேலைகளைப் பகிராவிட்டாலும் கொஞ்சமாவது பங்கேற்பது மனநிறைவு அளிக்கத்தான் செய்கிறது. என்னைவிட இன்றைய இளைஞர்கள் முதிர்ச்சியோடு முன்னணியில் இருப்பது குற்றவுணர்வை உருவாக்குகிறது.

— பொன்.முத்துக்குமார், பணகுடி.`,
            englishTranslation: `My ‘Useless Work!’

When I was newly married, my mother told my wife, "He doesn't even know how to boil water. Take care of him, dear."

If it were today’s times, my wife would have replied right to her face, "Well, you certainly raised your son well!" But back then, she just gave a look that seemed to say, "Is this something to be proud of?" Caught up in the pride of my bank job, I never even stepped toward the kitchen. Everything was served right to my hand. However, after retirement, as my wife’s health declined, I thought I should help out in some way. Just as serving appalam (papadum) on a leaf is the easiest job at a feast, I took up the task of arranging the washed vessels.

You probably think I received praise, don't you? Not at all. "Everything must be kept in its proper place. If you're going to do it half-heartedly, don't do it at all. This is double the work for me—just 'useless work' (vetti-velai)," she scolded. Despite these "offerings" falling on my ears, I think to myself: "Let those who praise, praise; let those who slender, slander; I shall not stop regardless of what comes. My duty is simply to serve." And so, this "squirrel’s service" (small contribution) continues. Even if I don't share all the housework, participating even a little brings a sense of contentment. Seeing today’s youth being far more mature and proactive than I was creates a slight sense of guilt in me.

— Pon. Muthukumar, Panagudi.`,
          },
          {
            id: "item_1774959061571",
            title: "அப்பாவின் பணப்பாதை டெக்னிக்... வசதியாக வாழும் நங்கள்",
            date: "04 ஜனவரி 2026",
            image: "/item_1774959061571_Engal_Veetu_FM_-_thaatha-img.png",

            content: `எங்கள் வீட்டு எஃப்.எம்.(அதாங்க நிதி அமைச்சர்) என்
அப்பாதான்.வீட்டில் அவருக்கென்று தனி அறை.அறை முழுக்க வீட்டுக்
கணக்கு நோட்டுக்களால் நிறைந்திருக்கும்.பொங்கல்,
தீபாவளி பண்டிகை வருவதற்கு முன் அம்மாவோடு
முதல் சுற்று பட்ஜெட் உரையாடல்.போன பண்டிகைக்கு எவ்வளவு செலவானது என்பதை கணக்கு நோட்டை எடுத்துப்பார்த்து சொல்லி
'அதற்குள் முடித்து விடலாமா?"
என் உரையாடலை ஆரம்பிப்பார்."விலைவாசி எல்லாம் உயர்ந்திருக்கிறது.
பழங்கணக்கை எல்லாம் ஒதுக்கி வையுங்க"அம்மா எதிர்க்கட்சி தலைவர் போல்
கறார்காட்டுவார்.பின்னர் நிதி
ஒதுக்கீடு யாருக்குமே திருப்தி
தராத வகையில் அளிக்கப்படும்.பொதுவாக நிதி அமைச்சர் என்றால் கடுத்தமானவராகத்தான்
இருப்பார்கள்.காசை கையாள்பவர் இல்லையா?
காசை கரியாக்க விடுவார்களா?
மின் கட்டண ரசீது, சொத்து வரி ரசீது,குடிநீர் கட்டணமரசீது
எல்லாம் முறையாக ஃபைல்
செய்யப்பட்டிருக்கும்.பிள்ளைகளின் பணி நியமன ஆணைகள்,மாறுதல் ஆணைகள் அவரால் பத்திரப்படுத்தப்படும்.ஆயுள் காப்பீடு தவணை தேதிகளை
நினைவுபடுத்துவார்.தன்னுடைய கல்யாண செலவையும்,
பிள்ளைகளின் கல்யாண செலவையும் கணக்குநோட்டுக்களை வைத்துக்கொண்டு ஒப்பிட்டுப்பேசுவார்.நேரு காலத்தையும்,மோடி காலத்தையும் நம்ம எஃப் எம்
ஒப்பிடுவதில்லையா...அதே மாதிரி..
எங்கள் நகர் பணகுடி யில் இருக்கும்வார்டுகளின் எண்ணிக்கை, பஞ்சாயத்து தலைவர்களின் பட்டியல்,தேர்தல் பிரச்சார துண்டு பிரசுரங்கள் எல்லாம்
தொகுத்து வைத்திருப்பார்.
மகன்கள்,
மருமகள்கள், மகள்கள்,மருமகள்கள்,பேரன்,பேத்திகள்,ஜாதகங்கள்,கல்வி சான்றிதழ்,பிறப்பு சான்றிதழ்
நகல்கள் எல்லாம் பாதுகாத்து
வைத்திருந்த அவரின் அருமையை ஒவ்வொன்றையும் தேடி சலிக்கும் போது உணர்ந்து
நெகிழ்கிறோம்.Finance Minister மட்டுமல்ல..Perfect 
Field Manager ம் கூட..

- பொன். முத்துக்குமார்`,
            englishTranslation: `Our Home's F.M. (That is, the Finance Minister)

My father is the Finance Minister of our home. He has a dedicated room for himself, filled entirely with household account ledgers. Before festivals like Pongal or Diwali, the "First Round" of budget negotiations would begin with my mother. He would open the ledger, look at how much was spent during the previous festival, and start the conversation by asking, "Can we finish everything within that same amount?"

Mother, acting like a strict Leader of the Opposition, would retort, "Prices have all gone up! Set aside those old accounts." Then, the financial allocation would be granted in a way that—as is typical—satisfied no one! Generally, Finance Ministers are perceived as stern figures. After all, they handle the cash, don't they? Would they ever allow money to be burnt away?

Electricity bills, property tax receipts, water tax receipts—everything was systematically filed. The children's appointment orders and transfer orders were safely preserved by him. He would remind everyone of their Life Insurance (LIC) premium due dates. Using his account books, he would compare the expenses of his own wedding with the wedding expenses of his children. Just as our national F.M.s compare the Nehru era to the Modi era, he did the same!

He even kept a collection of the number of wards in our town Panagudi, lists of Panchayat presidents, and election campaign flyers. Today, as we grow weary searching for documents, we feel deeply moved realizing his value—how he protected copies of horoscopes, educational certificates, and birth certificates for his sons, daughters, daughters-in-law, and grandchildren.

He wasn't just a Finance Minister... he was a Perfect Field Manager too.`,
          },
          {
            id: "a-maamiyar",
            title: "சிறுமிபோல் விளையாடும் மாமியார் (ஆயிரத்தில் ஒருவர்) - மருமகளாக அவதாரம்",
            date: "14 மார்ச் 2026",
            image: "/article-1.jpeg",
            englishTranslation: `Many might be surprised if I say the most unforgettable woman in my life is my mother-in-law. I am originally from Rajapalayam. However, it was my mother-in-law, Sundari, who transformed Panagudi Thalavaipuram into my second maternal home. During Pongal and Diwali, she would collect money from my father-in-law for purchasing clothes, entrust it to me (the eldest daughter-in-law), make a list, allocate funds for each person, and function just like a finance minister. She possessed the maturity to simply accept things without any criticism about the color being wrong or the budget being exceeded. She was an expert at delegating work to everyone in the house according to their respective capacities.

After completing the chores, she would play the traditional dice game (Thaayam) with family members just like a young girl, enthusiastically dropping the dice with loud exclamations, shining as the hero of the game. She would warmly welcome the postman who came searching for our house in the hot sun by offering him buttermilk or refreshing drinks. During festive days, she would send us all to the movies while staying back to cook meals for us. Occasionally, yielding to her son's insistence, she would join us for a movie. Many people like Parvathi, Thayammal, and Sellathayi would eagerly volunteer to assist her. When my father-in-law brought half a kilo of halwa from Tirunelveli, she would delightfully distribute it to everyone, much like Jesus sharing the bread. Being blessed with her—the very embodiment of generosity and kindness—as a mother-in-law is a great fortune. Within our family circle, being introduced as "Sundari's son and daughter-in-law" instills a sense of immense pride. How can I not praise her, simply because I haven't been able to become exactly like her?

- Velammal Muthukumar,
  Panagudi, Tirunelveli.`,
            content: "என் வாழ்க்கையில் மறக்க முடியாத பெண்மணி என் மாமியார் என்றால் பலரும் ஆச்சரியப்படக்கூடும். நான் ராஜபாளையத்தைச் சேர்ந்தவள். என் இரண்டாவது தாய்வீடாக பணகுடி, தளவாய்புரத்தை மாற்றியவர் என் மாமியார் சுந்தரி. பொங்கல், தீபாவளிக்குத் துணி எடுக்க என் மாமனாரிடம் இருந்து பணத்தை வாங்கி, மூத்த மருமகளான என்னிடம் கொடுத்து, பட்டியல் போட்டு, ஆளாளுக்கு நிதி ஒதுக்கி ஒரு நிதி அமைச்சர்போலச் செயல்படுவார். நிறம் சரியில்லை, ஒதுக்கிய நிதிக்குள் முடிக்கவில்லை என்கிற விமர்சனம் ஏதுமின்றி அப்படியே ஏற்றுக்கொள்ளும் பக்குவம் உடையவர். வீட்டில் உள்ள அனைவருக்கும் அவரவர் சக்திக்கேற்ப வேலை பங்கீடு செய்வதில் நிபுணர்.\n\nவேலைகளை முடித்த பின்னர் குடும்ப உறுப்பினர்களோடு சேர்ந்து சிறுமி போல் தாயக்கட்டம் ஆடுவதோடு, விருத்தங்களாகப் போட்டுக் காய்களைக் கொத்தி ஆட்ட நாயகியாக ஜொலிப்பார். வெயிலில் வீடு தேடி வரும் தபால்காரருக்கு மோரோ நீராகாரமோ கொடுத்து உபசரிப்பார். விழாக்காலங்களில் எங்கள் எல்லாரையும் திரைப்படத்துக்கு அனுப்பிவிட்டு எங்களுக்கு உணவு சமைத்து வைப்பார். சிலநேரம் மகனின் வற்புறுத்தலுக்கு இணங்கி எங்களோடு படம் பார்க்க வருவார். அவருக்கு உதவ பார்வதி, தாயம்மாள், செல்லத்தாயி எனப் பலர் முன்வருவர். நெல்லைக்குச் சென்று மாமனார் வாங்கிவரும் அரை கிலோ அல்வாவை, ஏசு அப்பத்தைப் பங்கிட்டுக் கொடுத்தது போல எல்லாருக்கும் கொடுத்து மகிழ்வார். தாராளம், தயை இவற்றின் உருவமாகத் திகழ்ந்த அவரை மாமியாராகப் பெற்றது பெரும்பேறு. எங்கள் உறவினர் வட்டத்தில், 'சுந்தரி மகன் - மருமகள்' என அறிமுகம் ஆகும்போது பெருமிதம் உண்டாகும். அவரைப்போல ஆக முடியவில்லை என்பதற்காக அவரைச் சிலாகிக்காமல் இருக்க முடியுமா?\n\n- வேலம்மாள் முத்துக்குமார்,\nபணகுடி, திருநெல்வேலி."
          },
          {
            id: "item_1774958201143",
            title: "எங்கள் வீட்டு F.M என் அப்பா பிரம்மநாயகம்தான் - ஒரு மகளாக அவதாரம்",
            date: "20 மார்ச் 2026",
            image: "/item_1774958201143_brahma.png",

            content: `நான் திருமணம் ஆகி கணவர் மகனோடு தூத்துக்குடியில் வசித்து வருகிறேன். என் தந்தை திரு S. பிரம்மநாயகம் ஆசிரியர் (ஓய்வு) அவர்கள் தான் சிறந்த F.M (Finance Minister) என்பேன். பொதுவாக நிதி அமைச்சர் என்றால் கணக்கு வழக்குகளில் கெட்டிக்காரராகவும் செலவு செய்வதில் கொஞ்சம் கருத்தமானவர்களாகவும் இருப்பார். விரும்புவதையெல்லாம் செய்ய மாட்டார்கள்; தேவையானதை மட்டும் தான் செய்வார்கள். அப்படிப்பட்டவர் தான் என் அப்பா.

‘பணம் இருந்தால் மணக்க வேண்டும்; பயன்பட வேண்டும்’ என நினைப்பவன் நான். என் அப்பாவோ "ஆற்றில் போட்டாலும் அளந்து போட வேண்டும்" என்று நினைப்பவர், செயல்படுபவர். மாதாந்திர பட்ஜெட்டுக்காக குடும்ப உறுப்பினர்கள் (அம்மா, அண்ணன், நான்) அனைவரும் அவர் முன் ஆஜராக வேண்டும். சம்பளப் பணம் மேஜை மீது வைக்கப்பட்டிருக்கும். பலசரக்கு, பால், ஷாப்பிங், மருத்துவம், பயணச் செலவு, எதிர்பாராத செலவு என வகை வகையாக பிரிக்கப்பட்ட செலவுகளுக்கு அதிகபட்ச உத்தேச ஒதுக்கீடு குறித்து விவாதிக்கப்பட்டு கவர்களில் ஒதுக்கி வைக்கப்படும். வரவு செலவுகளை யார் பார்ப்பது என்பது கூட்டத்தில் முடிவு செய்யப்பட்ட பின் உழக்கு மாவில் ஊருக்கெல்லாம் சாப்பாடு போடுவதில் எனக்கு கட்டாது என நான் ஜகாவாங்கி விடுவேன். அம்மா, அண்ணன் யாராவது துணிச்சலாக முன்வருவார்.

அப்போது அப்பா பட்ஜெட்டுக்குள் செலவுகளை நிறுத்துபவர்களுக்கு இன்சென்டிவ் வழங்கப்படும் என்பார். இன்சென்டிவ் கிடைக்கும் என்பதால் சிக்கனமாக பட்ஜெட் செயல்படுத்தப்படும். செலவாளியாக இருப்பதற்கு தைரியம் இருக்க வேண்டியதில்லை. சிக்கனமாக இருக்கத்தான் துணிச்சல் கூடுதலாக எல்லாம் வேண்டும் என்பார் அப்பா.

அப்பா பணியாற்றிய பள்ளி மூன்று கிலோமீட்டர் தூரத்தில் இருந்த போதும், சைக்கிளில் தான் செல்வார். டி.வி.எஸ்-50 கூட வாங்காமல் இருக்கும் அவரிடம் வண்டி வாங்க வேண்டும் எங்களுக்கு என்று கேட்க தயக்கமாக இருக்கும்.

பட்ஜெட் ஆயத்த கூட்டம், இடை இடையே அப்ரைசல் கூட்டம், ரிவியூ கூட்டம் என குடும்ப உறுப்பினர்கள் அடிக்கடி கலந்து பேசுவோம். கார்ப்பரேட் கம்பெனிகள் தோற்றுது போங்கள்.

சரி... ரொம்ப சிக்கனமாக இருந்தீர்கள்.. சொத்து எவ்வளவு சேர்த்து இருப்பீர்கள் என்று கேட்கத் தோன்றுகிறதா? அப்பாவிடமே கேட்போம்.

"கடன் இல்லாமல் இருக்கிறோமே... அது போதாதா?" என்கிறார் அப்பா.

நல்ல எஃப்.எம் (F.M) தானே எங்கள் அப்பா.

	 - K. மகராசி பிரம்மநாயகம்`,
            englishTranslation: `I am married and living in Thoothukudi with my husband and son. I would say my father, Mr. S. Brahmanayagam, a retired teacher, was the best "Finance Minister." Generally, a Finance Minister is expected to be sharp with accounts and very prudent when it comes to spending. They won't engage in wasteful expenses; they only do what is necessary. My father was exactly like that.

I am someone who believes that ‘if there is money, it should be spent and be useful.’ However, my father is someone who thinks and acts by the proverb: "Even when throwing it into the river, one must measure it." For the monthly budget, all family members (Mother, Brother, and I) had to appear before him. The salary money would be placed on the table. We would discuss and allocate estimated amounts into separate covers for groceries, milk, shopping, medical, travel, and unforeseen expenses.

When deciding who would manage the accounts, I would say it wouldn't suit me as I'd end up spending it all on feeding others, and I’d just take five hundred rupees. Mother or Brother would then courageously step forward.

At that time, Father would say that an "incentive" would be given to those who kept expenses within the budget. Because of that incentive, the budget was implemented very economically. Father used to say, "It doesn't take courage to be a spendthrift; it takes extra courage and discipline to be frugal."

Even though the school where my father worked was three kilometers away, he would only go by bicycle. Since he lived without even buying a TVS-50 (moped), we felt very hesitant to ask him to buy a vehicle for us.

We family members would frequently meet for "Budget Preparatory Meetings," "Appraisal Meetings" in between, and "Review Meetings." Corporate companies, take a back seat!

Alright... you might feel like asking, "You were so frugal... how much property/wealth have you accumulated?" Let's ask Father himself.

"We are living without any debt... isn't that enough?" says Father.

Isn't my father a great F.M. (Finance Minister)?

		- K. Maharasi Brahmanayagam`,
          }


          ,
          {
            id: "item_1774960278802",
            title: "வாஞ்சை மிக்க வாகைக்குளம் பெரியம்மா! (ஆயிரத்தில் ஒருவர்) - ஒரு மகளாக அவதாரம்",
            date: "08 பிப்ரவரி 2026",
            image: "/item_1774960278802_kannadi_paati.jpg",

            content: `என் கணவரின் அத்தைதான் வாகைக்குளம் பெரியம்மா. இப்படி ஏதாவது எழுதுகிறபோதுதான் முத்தம்மாள் என்கிற அவரது பெயர் நினைவுக்கு வரும். மற்றபடி அவர் எப்போதும் எனக்கு 'வாகைக்குளம் பெரியம்மா' தான். பிள்ளைகளுக்கு அவர் 'கண்ணாடி பாட்டி'. அதிகாலையில் வீட்டு வாசலில் வந்துவிழும் செய்தித்தாளை நகர்த்திவிட்டு வீட்டைப் பெருக்குவோம், செய்தித்தாள் ஆண்களுக்கானது என்கிற எண்ணத்தோடு. ஆனால், பெரியம்மா அதிகாலை வேளையில் கண்ணாடி போட்டுக்கொண்டு நாளிதழ் படிக்கும் அழகே தனிதான்.

உடல் நலக்குறைவு, பிரசவம் போன்று மருத்துவமனையில் சேர்த்துப் பார்க்க வேண்டியது வந்தால் எங்கள் உறவு வட்டத்தின் முதல் தேர்வு வாகை பெரியம்மாதான். மெத்தப்படித்தவர்கள்கூட மருத்துவர்களிடம் பேசத் தயங்கும்போது தயக்கம் ஏதுமின்றித் தெளிவாகப் பேசி உண்மை நிலவரத்தை அறிந்துகொள்வார். அடுத்த முறை மருத்துவமனைக்குச் சென்றால் மருத்துவரே, "அந்தக் கண்ணாடி பெரியம்மா எங்கே?" எனத் தேடுவார்.

நோயாளிகளைக் கவனிப்பதில் பெரியம்மாவுக்கு நிகர் பெரியம்மாவே! நேரத்துக்கு மருந்து மாத்திரை தருவது, கஞ்சி வைத்துக் கொடுப்பது, கனிகள் உரித்து வைப்பது என அனைத்தையும் அவரே செய்வார். வீட்டில் தேங்காய் துருவிய உடன் அதன் மணம் மாறுவதற்குள் கொண்டு வந்து தருவதும், அப்பளம் பொரித்தவுடன் சூடாகத் தன் தம்பியின் (என் மாமனார்) அறைக்குக் கொண்டு செல்வதும் அவரது வாடிக்கை. தயிர் கடையும் போது திரண்டு வரும் வெண்ணெய்யைப் பக்குவமாக எடுத்து, சுற்றி இருக்கும் பிள்ளைகளுக்கு உண்ணத் தருவார்.

இஞ்சி காபியும் சுக்கு காபியும் அவர் கை பட்டதால் அமிர்தம் ஆகிவிடும் என் கணவருக்கு. "அன்பைக் கலந்து தருவதால் அமிர்தமாகிவிட்டது" என்பார் என் கணவர் எங்களை வெறுப்பேற்றும் விதமாக. "எங்கள் அத்தை மட்டும் கொஞ்சம் படித்திருந்தால் சட்டமன்ற உறுப்பினராகி இருப்பார்" என வருந்துவார். அந்த நாளிலேயே மாதர் சங்கம், பஞ்சாயத்து யூனியன் நியமன உறுப்பினர் போன்ற பொறுப்புகளை வகித்தவர் பெரியம்மா. இனிய சொற்களும், தேவையானபோதெல்லாம் உதவும் உள்ளமும் அவரது அடையாளங்கள்!

— வேலம்மாள் முத்துக்குமார், பணகுடி.
`,
            englishTranslation: `The Affectionate Vagaikulam Periyamma! (One in a Thousand)

Vagaikulam Periyamma is my husband's aunt. It is only when writing something like this that her actual name, Muttamman, comes to mind; otherwise, she is always "Vagaikulam Periyamma" to me. To the children, she is "Kannadi Paatti" (Grandmother with Glasses). Usually, we sweep the porch by pushing aside the morning newspaper, thinking it’s meant for the men. But the sight of Periyamma wearing her glasses and reading the daily news early in the morning was truly special.

Whenever someone in our family circle needed hospital care for illness or childbirth, Vagaikulam Periyamma was the first choice. Even when highly educated people hesitated to talk to doctors, she would speak clearly and without hesitation to understand the true medical situation. Often, when we visited the hospital next, the doctor himself would ask, "Where is that grandmother with the glasses?"

In caring for the sick, she was unparalleled! Giving medicines on time, preparing porridge, peeling fruits—she did it all herself. It was her habit to bring freshly grated coconut before its aroma faded and to take hot, freshly fried appalams to her brother’s (my father-in-law) room. While churning curd, she would skillfully gather the fresh butter and feed it to the children gathered around her.

To my husband, the ginger coffee and dry-ginger coffee she made felt like nectar (Amirtham). "It became nectar because she mixed it with love," he would say, teasing us. He would often lament, "If only my aunt had been a bit more educated, she would have become a Member of the Legislative Assembly (MLA)." Even back in those days, she held responsibilities such as being a nominated member of the Women's Association and the Panchayat Union. Kind words and a heart that helped whenever needed were her true identities!

— Velammal Muthukumar, Panagudi.`,
          }
        ],
      },
      {
        id: "cartoons",
        title: "கருத்துச் சித்திரங்கள்",
        items: [
          {
            id: "item_1774960938675",
            title: "நம்பிக்கை",
            image: "/item_1774960938675_karuthu.jpg",
          }
        ],
      },
      {
        id: "punch",
        title: "'பஞ்ச்'சோந்தி பராக்",
        items: [


          {
            id: "item_1774961681961",
            title: "மத்திய அரசு திட்டங்கள்",

            image: "/item_1774961681961_central_govt_policy.jpg",



          }
          ,
          {
            id: "item_1774961732994",
            title: "மீனவர் பிரச்சனைகள்",

            image: "/item_1774961732994_fisherman_issue.jpg",



          }
        ],
      }

    ],
  },
  {
    id: "memories",
    number: "6",
    title: "நினைவு பெட்டகம்",
    icon: "📦",
    description: "அவரின் அரிய நினைவுகள்",
    subCategories: [
      {
        id: "ninaivu",
        title: "நினைவு துணுக்குகள்",
        description: `
        அத்தானை குறித்த நினைவலைகளில் நீந்தினால் 
        கரை சேரவே முடியாது.
        அவ்வளவு நிகழ்ச்சிகள் நடந்துள்ளன.
        எண்ணி எண்ணி பார்க்க ஏராள நினைவுகள். 
        நம்மை இப்போது பார்த்தால் 
        போதும்… போதும் அழுத அழுகை போதுமென 
        நம்மை எழுப்பி வேறு ஏதாவது கிண்டலாக சொல்லியிருப்பார். 
        எல்லாரையும் கொண்டாடியகொண்டாட்டக்காரர்.
        அவரைப்போல  மற்றவர்களையும் இந்த வாழ்வையும் 
        நாம் கொண்டாடுவதே அவருக்கான 
        சிறந்த அஞ்சலியாக இருக்கும். 
        - கொழுந்தியா,
          அனு கந்தன்`,
        image: "/ninaivu_cover.jpg",
        items: [
          {
            id: "item_1775007527540",
            title: "நல்ல காபி",
            date: "2001",
            image: "/item_1775007527540_nalla_coffee.png",
            audioFile: "/item_1775007527540_nalla_coffee.mp3",
            content: `வீட்டுக்குள் நுழைந்த அத்தான் “வேலம்மா…. காபி
போடு” என்று கேட்க, தளவாய்புரத்தில் இருந்து தானே
வர்றீங்க. அத்தை காபி கொடுத்திருப்பார்களே என்று
அக்கா சொன்னார். “நல்ல காபி கேட்டேன் என அத்தான்
சொல்ல வேலமக்கா குஷியாகி உற்சாகத்துடனும்
பெருமையுடனும் காபி போட செல்லும்போது அத்தான்
“நல்லவங்க கையால் காபி குடிச்சாச்சு. இப்ப ஒரு நல்ல
காபி போடு “ என சொல்ல சிரிப்பலைகள் வீடு முழுவதும்
பரவியது.`
          },
          {
            id: "item_1774966328444",
            title: "பூ... ப்பூ..",
            date: "2001",
            image: "/item_1774966328444_poo...pooo.jpg",
            audioFile: "/item_1774966328444_poo_poo.mp3",
            content: `பணகுடியில் கீழத்தெருவில் கமலாத்தா பேத்தி பெரியவளாகி இருந்தாள். நான் அவளைப் பார்த்துவிட்டு வீட்டுக்கு வந்தேன். அப்போது வேலம்மாள் அக்கா என்னிடம் அந்த பெண்ணுக்கு என்ன வாங்கிட்டு போனாய் என கேட்டார்கள். அதற்கு நான் ரொம்ப பெருமையாக பூ வாங்கி கொடுத்து பார்த்து விட்டு வந்தேன் என்று சொன்னேன். அதற்கு அத்தான் 'பூ பூ' என்று ஊதி தள்ளி விட்டார்கள் உங்கள் எல்லோருக்கும் ஒரே சிரிப்பு.`,

          }
          ,

          {
            id: "item_1774967665207",
            title: "ஜாடை பேச்சு",
            date: "",
            image: "/item_1774967665207_jaadai_pechu.jpeg",
            audioFile: "/item_1774967665207_jaadai_pechu.mp3",
            content: `கல்யாண வீட்டிலோ அல்லது ஊருக்கு பஸ்ஸில் சென்று கொண்டிருக்கும் போது யாராவது ஜிப்பா போட்ட நபரை பார்த்துவிட்டு பாபநாச சித்தப்பா வந்துள்ளார்கள் என்றும். ஒரு பெண் கண்ணாடி அணிந்து சீரியஸாக முகத்தை வைத்திருந்தால் அங்க பாரு சத்யா வந்திருக்கிறாள் என்றும். கைகளை பின்னால் கட்டிக்கொண்டு நடந்த பெண்ணை பார்த்தால் பெருமாள்புரம் அண்ணி வந்து விட்டார்கள் என்றும் சொல்வார்கள். அதே மாதிரி சூப்பர் சிங்கர் பார்த்துக் கொண்டிருக்கும் போதும் பாடுபவனை பார்த்து முத்து மகன் பாட வந்து விட்டான் என்று பார்க்க வர சொல்வார்கள். அந்த இளம் பாடகன் தென் திருப்பேரை முத்து மகன் ஜாடையில் இருப்பான். டிவி சீரியலில் ஒரு பெண்மணி மெதுவாகவும் ரொம்ப அசதியாகவும் பேசி நடிப்பாள் அவளைப் பார்த்து ஆயாசக்காரி வந்து விட்டாள் என்றும் சொல்வார்கள். நாங்களும் அதை பார்த்தும் கேட்டும் ரசிப்போம்.`,

          }
          ,
          {
            id: "item_1774969152241",
            title: "Little Hearts <3",
            date: "2001",
            image: "/item_1774969152241_little_hearts.png",
            audioFile: "/item_1774969152241_little_hearts.mp3",
            content: `ஒரு தடவை பிரேமா திருச்சிக்கு வந்திருந்தாள், அந்த சமயம் அத்தான், அக்கா, சதீஷ், அரசியும் வந்திருந்தார்கள். அப்போது கடைக்கு போய் வந்த அத்தான் little hearts biscuit  வாங்கிவந்தார்கள். இனிப்பு என்றால் கேட்கவா வேண்டும் அத்தானுக்கு.அனைவருக்கும் ஒவ்வொரு பிஸ்கட் கொடுத்துவிட்டு மீதியிருந்த பிஸ்கட் அனைத்தையும் அவரே சாப்பிட்டு முடித்துவிட்டார். அதற்கு பிரேமா  ஒரே ஒரு பிஸ்கட் மட்டும் எனக்கு  கொடுத்துவிட்டுமீதியை அவுங்களே சாப்பிட்டுட்டாங்களே என்று சொன்னாள். அதை கேட்ட அத்தான்  எப்போது கடைக்கு போனாலும் பிரேமாவுக்காக தனியாக  LITTLE HEARTS பிஸ்கட் பாக்கெட் வாங்கி வந்து கொடுத்துவிட்டு “இந்தாம்மா உனக்கு முழுசா வாங்கி கொடுத்துவிட்டேன்“என்பார், பிரேமா வெட்கபட்டுக்கொண்டே சிரிப்பாள். இப்போதுவரை அதை சொல்லிக்கொண்டிருக்கிறாள்.
`,
          },
          {
            id: "item_1774966651026",
            title: "இட்லி தயிர்",
            date: "2004",
            image: "/item_1774966651026_idly_thayir.jpg",
            audioFile: "/item_1774966651026_idli_thayir.mp3",
            content: `ஒரு கல்யாணத்தில் அனைவரும் காலையில் டிபன் சாப்பிட்டுக் கொண்டிருந்தார்கள். மாப்பிள்ளை வீட்டில் அனைவருக்கும் நாங்கள் பரிமாறிக் கொண்டிருந்தோம். மாப்பிள்ளை வீட்டில் கடைசி இட்லிக்கு தயிர் ஊற்றி சாப்பிடும் பழக்கம் இருந்தது. அப்போது ஒருவர் எனக்கு ஏன் இட்லிக்கு தயிர் ஊற்றவில்லை என்று அத்தானிடம் கேட்டார். அதற்கு அத்தான் ‘நீங்கள் சாப்பிடுவது கடைசி இட்லியா என்று எனக்கு எப்படி தெரியும்' என்று சொன்னதும் அவரே சிரித்துவிட்டார்.`,

          }
          ,
          {
            id: "item_1774968339390",
            title: "பட்டம் சூட்டுபவர்",

            image: "/item_1774968339390_pattam_sootubavar.png",
            audioFile: "/item_1774968339390_pattam.mp3",
            content: `மாறாந்தை அத்தாத்தையை குந்தவை நாச்சியார் என்று கூறும்பொழுது நாங்கள் அப்பொழுது நீங்கள் அருள்மொழி வர்மனா என்று கேட்போம். அகல்யா அப்பாவை இளைய தலைமுறையின் எழுச்சி நாயகன் என்றும் சதீஷ்க்கு தாயுமானவன் என்றும் பக்தி பாடல்களைப் பாடும் கலாக்கா லதா அக்காவை சூலமங்கலம் சகோதரிகள் என்றும் கன்னத்தில் கை வைத்து தலையை சாய்த்து யோசிக்கும் துள்சி தளிர்க்கு சிந்தனை சிற்பி என்றும் பட்டம் சூட்டி மகிழ்ந்தவர்.`,

          },
          {
            id: "item_1775006800237",
            title: "வாழ்த்துக்கள்",
            date: "2026",
            image: "/item_1775006800237_vaazhthukkal.png",
            audioFile: "/item_1775006800237_Vaazhthu.mp3",
            content: `1.எங்களுக்கு(அனு – கந்தனுக்கு):

அப்பாவி போன்ற அறிவாளிக்கும், அறிவாளி போன்ற
அப்பாவிக்கும் நல்வாழ்த்துக்கள்.

மலைக்கோட்டை ஏறியது பற்றி…

களிப்புக்கு பதிலாக களைப்பு தெரிகிறதே……

2.அகல்யா-வீராவுக்கு

வீரா ஒவ்வொருவருக்கும்;
அகல்யா எல்லாருக்கும்.

நேரு….இந்திரா..
கந்தசாமி…அகல்யா…வெல்க அகல்....

அகல்யா வீரா இமயமலைப் பயணம் குறித்து:

வியந்துபார்க்கிறோம்; மகிழ்ந்து போகிறோம்… நாம்
சிற்றெறும்பு என உணர்ந்து கொள்கிறோம்…
மலை மலைக்கவும் வைக்கிறது. மகிழவும் வைக்கிறது…

3.குமார் - ப்ரியாவுக்கு
நலமும்[டாக்டர்] வளமும் [பேங்கர்] பெருகட்டும்; இல்வாழ்க்கை
இனிக்கட்டும்.

4. குரு - ஜோதிக்கு
முன்மாதிரி தம்பதிகள்….குரு,,,ஜோதி மாதிரி .
வயதானவர்கள் தான் குரு ஆக வேண்டுமா……
எங்கள் பாலகுரு வாழ்க.
`,

          }
          ,
          {
            id: "item_1775009017339",
            title: "வெளியூர் பயணங்கள்",
            date: "2012",
            image: "/item_1775009017339_veliyoor_payanangal.png",
            audioFile: "/item_1775009017339_veliyoor_payanangal.aac",
            content: `வெளியூர் பயணங்கள் என்றாலே குஷி தான் மொழி
தெரியாத வெளி மாநிலம் என்றால் அங்கு நிகழும்
திண்டாட்டங்களையெல்லாம் கொண்டாட்டமாக மாற்றி
விடுவார் அத்தான்.
டெல்லி சென்ற போது வழி தெரியாமல்
டிரைவரிடம் கேட்ட போது அவர் இந்தியில் விரிவாக
வேகமாக சொல்வதை முழுவதுமாக கேட்டுவிட்டு இதை
அப்படியே சற்று தள்ளி நின்ற அரசி மாப்பிள்ளையிடம்
சொல்ல சொல்லி கை காட்டினார்கள்.அந்த டிரைவர்
அலுப்புடன் எங்களைப் பார்த்தார். எங்களுக்கெல்லாம்
ஒரே சிரிப்பு,

அதே மாதிரி கோவா பயணத்தின் போது
உணவு தேடி தேடி அலைந்து கடைசியாக ஒரு
உணவகத்தை அடைந்தோம். அங்கு வந்த சர்வரிடம்
இட்லி..,தோசை.. என நாங்கள் சொல்ல அவன்
தாலிகளை [சாப்பாடு] பட்டியலிட்டுக்கொண்டிருந்தான்.
அவனிடம் எந்த தாலியையாவது கொண்டு வந்து வை.
என அத்தான் கூறினார்கள். பசியில் இருந்த நாங்கள்
அனைவரும் பசியையே மறந்தோம்.
நாங்கள் பாம்பே சென்றிருக்கும்போது மின்சார
ரயிலில் பக்கத்து ஊரிலிருந்து வந்தோம். Train
நின்றவுடன். எங்களை இறங்க கூடவிடாமல் தள்ளிவிட்டு
பயணிகள் உள்ளே ஏற ஆரம்பித்துவிட்டார்கள்.front
வாசலில் நின்ற நாங்கள் அவர்கள் தள்ளுன
தள்ளுமுள்ளுவில் நாங்கள் அனைவரும் back வாசல்
வரை போய்விட்டோம். அதற்கு அத்தான் “ஏம்லே இந்த
வரத்து வர்றீங்க போய் தொலைங்களே” என்று கூறினார்.
எங்கள் களைப்பு பறந்து போனது.`,

          }
          ,
          {
            id: "item_1775009400444",
            title: "கொண்டாட்டக்காரருக்கு நினைவு அஞ்சலி",
            date: "2026",
            image: "/celebration_maker.png",
            audioFile: "/item_1775009400444_celebration_maker.mp3",
            content: `யார் பணகுடிக்கு வந்தாலும் ஒரு வேன் பிடித்து ஆஞ்சனேயர் கோவிலாக இருந்தாலும் சரி அல்லது எங்கே சுற்றுலா சென்றாலும்சரி  அனைவரையும் கூட்டிட்டு போய் சந்தோஷப்படுத்தி பின் ஹோட்டலுக்கும் அழைத்து போய் சாப்பாடு வாங்கி கொடுத்து அதன் பின் தான் வீட்டுக்கு வருவார்கள். தன் பணம் என்று எப்போதுமே அவர்கள் நினைத்ததே இல்லை. அவர்களைப் பொறுத்தவரை எல்லோரும்  ஒன்றுதான். எனக்கு அவர்கள் அத்தான் இல்லை  இன்னொரு தந்தை. அவரை இழந்து தவிக்கிறேன்.
               அத்தானை குறித்த நினைவலைகளில் நீந்தினால் கரை சேரவே முடியாது.அவ்வளவு நிகழ்ச்சிகள் நடந்துள்ளன.எண்ணி எண்ணி பார்க்க ஏராள நினைவுகள். நம்மை இப்போது பார்த்தால் போதும்… போதும் அழுத அழுகை போதுமென நம்மை எழுப்பி வேறு ஏதாவது கிண்டலாக சொல்லியிருப்பார். எல்லாரையும் கொண்டாடியகொண்டாட்டக்காரர்.அவரைப்போல  மற்றவர்களையும் இந்த வாழ்வையும் நாம் கொண்டாடுவதே அவருக்கான சிறந்த அஞ்சலியாக இருக்கும்.`,

          }
        ],
      },
      {
        id: "photos",
        title: "புகைப்படங்கள்",
        items: [


          {
            id: "item_1775018682207",
            title: "படிப்பின் மூலம் தன்னை உருவேற்றுபவர். எழுத்தின் மூலம் உலகை/ உறவை மெருகேற்றுபவர்",

            image: "/item_1775018682207_Periyappa_and_reading.jpg",



          }
          ,
          {
            id: "item_1775023355276",
            title: "தொட்டுத் தொடரும் பந்தம்",

            image: "/item_1775023355276_Family_Tree.jpg",



          }
          ,
          {
            id: "item_1775023887632",
            title: "திரு. சிவகாமிநாதனின் இரங்கல்",
            date: "28 மார்ச் 2026",
            image: "/item_1775023887632_SivagamiNathan.jpeg",



          }
          ,
          {
            id: "item_1775024076761",
            title: "திரு. பழனிவேல் ராஜனின் இரங்கல்",
            date: "28 மார்ச் 2026",
            image: "/item_1775024076761_Pazhanivel_Rajan.jpeg",



          }
          ,
          {
            id: "item_1775024266657",
            title: "திருமதி புஷ்பா தாண்டவராயனின் இரங்கல்",
            date: "28 மார்ச் 2026",
            image: "/item_1775024266657_Pushpa.jpeg",



          }
        ],
      },
      {
        id: "letters",
        title: "கடிதங்கள்",
        items: [
          {
            id: "l1",
            title: "மகன் ராம்கிக்கு கடிதம்",
            date: "10 ஜூலை 2025",
            audioFile: "",
            image: "/Ramki-letter.png"
          }
          ,
          {
            id: "item_1775014361801",
            title: "பாரதி இல்ல திறப்பு விழா",
            date: "12 செப்டம்பர் 1991",
            image: "/item_1775014361801_Bharathi_Illam.png",



          }
        ],
      },
    ],
  },
  {
    id: "book-reviews",
    number: "7",
    title: "புத்தக விமர்சனங்கள்",
    icon: "📚",
    description: "அவரின் புத்தக விமர்சனங்கள்/அணிந்துரைகள்",
    items: [

      {
        id: "item_1774963889570",
        title: "கவிஞர் E.S. முருகன் எழுதிய சிறு துளி நூலுக்கு எழுதிய அணிந்துரை. ",
        date: "2021",
        image: "/item_1774963889570_book_review.jpg",

        content: `இளமை முன்னால் பார்க்கிறது முதுமை பின்னால் பார்க்கிறது உங்களால் மட்டும் எப்படி எல்லாவற்றையும் பார்க்க முடிகிறது, அடிப்பதற்கு எளிதானது மட்டுமே ஆபத்தானதற்கு பதிலாக அடிபட்டு சரிகிறது. யதார்த்தம் தரும் வருத்தம், ஆதங்கம் உங்கள் கவிதைகளில் பின்னிக் கிடக்கிறது. “பூ மனசுக்காரன் எல்லாம் புண்பட்டுக் கொண்டே தான் திரிய வேண்டும்” என்பது சாபமாக இருந்தாலும் நல்ல கவிதைகள் கிடைக்கிறதே! அறிவு ஜீவிகள் அதிகாரங்களுக்கு சேவை செய்கிறார்கள். கவிஞர்கள் தான் கொந்தளிக்கிறார்கள். நல்ல மனசு, வளமான கற்பனை முட்டி மோதும் துணிச்சல் அழகு நடை எல்லாம் இருக்கிறது தோழர் E.S. முருகனின் கவிதைகளில்.

— P. முத்துக்குமார்
இந்தியன் ஓவர்சீஸ் வங்கி மேலாளர்`,
        englishTranslation: `Foreword

Youth looks forward; old age looks backward. How is it that you alone are able to see everything? What is easy to strike down falls as a victim instead of being dangerous. The sorrow and anguish brought by reality are woven throughout your poems. Although it feels like a curse that "those with a flower-like heart must wander while constantly being wounded," it is because of that pain that we receive such good poetry! Intellectuals serve those in power, but it is the poets who seethe with rage [against injustice]. A good heart, fertile imagination, the courage to clash against obstacles, and a beautiful style of prose—all of these are present in the poems of Comrade E.S. Murugan.

— P. Muthukumar
Manager, Indian Overseas Bank`,
      }
      ,
      {
        id: "item_1775022872627",
        title: "கொறிக்க - புத்தக விமர்சனம்",
        date: "2024",
        image: "/item_1775022872627_Rani-Review.png",

        content: `பணகுடி எங்கள் நூலகத்தில் "ராணி" ஆசிரியர் அ.மா. சாமி தொகுத்த "கொறிக்க" என்ற நூலைக் காண நேர்ந்தது. மூன்று பேரக் குழந்தைகள் (ஒரே பிரசவத்தில் பிறந்தவர்கள்) பராமரிப்பு, வீட்டு வேலைகள், தொலைக்காட்சி சீரியல்களில் சிக்கியிருக்கும் எனக்கு

கனமான நூலாக இருந்தாலும், சுவையான விஷயமாக இருந்ததாலும் சரி, படிப்பது சிரமமாக இருந்தது. முன்னுரையில் தொகுப்பாளர் அ.மா. சாமி எங்கள் சிரமங்களை உணர்ந்தது போல், "கையில் எடுத்தால் எளிமையாகப் படிக்கவும், எந்த இடத்தில் விட்டோம் என நினைவு வைக்க வேண்டியது இல்லை. எந்தப் பக்கத்திலிருந்தும் படிக்கலாம். பயணத்தில் படிக்கலாம்" எனக் குறிப்பிட்டுள்ளதைப் பார்த்து மகிழ்ந்தேன். படித்தேன். சுவையான நிகழ்வுகளை மட்டுமல்ல, சாதாரண நிகழ்வுகளைக் கூட சுவாரஸ்யமாகப் பதிவு செய்துள்ளார்.

"நான் தாடியை ஒட்ட மழிக்கவும் இல்லை; நீண்டு வளரக்கவும் இல்லை. இளந்தாடி வைத்திருக்கிறேன். மழித்தலும் நீட்டலும் வேண்டாம் என்று வள்ளுவர் சொன்ன 'திருக்குறள் தாடி'தானென்று ஆதித்தனார் சொன்னதை பதிவு செய்துள்ளார். 

ஜனநாயகத்தில் ஆட்சி மாற்றத்தின் அவசியத்தை "தோசை கருகாமல் இருக்க தோசையைத் திருப்பிப் போட வேண்டும்" என்று 1967 தேர்தலில் அவரின் பிரசாரத்தைக் குறிப்பிட்டுள்ளார். 

எல்லாவற்றிற்கும் மேலாக பெரியாரின் முதல் மனைவி நாகம்மாள் இறந்த போது பெரியார் எழுதியதை 'இரங்கல் இலக்கியத்தின் இமயம் இது' என குறிப்பிட்டு வெளியிட்டுள்ளார்.

துக்கப்படுவதா? மகிழ்ச்சியடைவதா? அவர் மறைவு எனக்கு லாபமா? நஷ்டமா? அவர் தான் எனக்குத் துணையாக இருந்தார். நான் துணையாக இருந்தேனா என்பது கேள்விக்குறி தான். நான் போதித்த அளவு,  நூற்றில் ஒரு பங்கு வீதமாவது நாகம்மாள் விஷயத்தில் நடந்து கொண்டேன் என சொல்லிக் கொள்ள எனக்கு முழு யோக்கியதை இல்லை. நாகம்மாள் மறைவை நான் எவ்வளவு மகிழ்ச்சி காரியத்திற்கும் லாபமான காரியத்திற்கும் பயன்படுத்திக் கொள்கிறேனோ, அந்த மாதிரி என் மறைவையோ எனது நலிவையோ நாகம்மாள் பயன்படுத்திக் கொள்ள மாட்டாள் என்பது என் நிச்சயம்." பெரியாரின சுயவிமர்சனம் வெளியான ஆண்டு 1933 ஆகும். பொழுது போக்கிற்குத் தொகுக்கப்பட்ட நூலில் அகப்பட்ட வைரக்கல் ஆகும்.இந்த நிகழ்வைப் படித்துப் பார்த்து பெரியாருக்குள் இருக்கும் சிறப்பைத் தெரிந்து கொள்ளலாம்`,
        englishTranslation: `I happened to find the book 'Korikka' (to munch/nibble), compiled by A. Ma. Sami, the editor of 'Rani' magazine, at our Panagudi library. As someone caught up in the care of triplets (born in a single birth), household chores, and television serials, reading felt like a difficult task even if the book was substantial or the subject matter interesting.

However, in the preface, compiler A. Ma. Sami seemed to understand our difficulties. I was delighted to read his note: 'This is easy to read once picked up; there’s no need to remember where you left off. You can read it from any page. You can even read it while traveling.' I read it. He has recorded not just interesting events, but even ordinary occurrences in a fascinating way.

He has recorded Adithanar’s words about his beard, citing that it followed Valluvar's 'Thirukkural beard' principle—neither letting it grow long out of joy nor shaving it off completely. Regarding the necessity of a change in government in a democracy, he mentions the 1967 election campaign slogan: 'To keep a Dosa from burning, it must be flipped over.'

Above all, he has highlighted what Periyar wrote when his first wife, Nagammal, passed away, describing it as the 'Himalayas of Elegiac Literature.'

Periyar wrote: 'Should I grieve or be happy? Is her passing a gain or a loss for me? She was the one who was a support to me. Whether I was a support to her remains a question mark. I do not have the full merit to say that I lived at least one part in a hundred of what I preached, in my life with Nagammal. I am certain of this: however much I use Nagammal's death for a happy or profitable cause, she would not have used my death or my decline in such a way.'

This self-criticism by Periyar was published in the year 1933. It is a diamond found in a book compiled for leisure. By reading this incident, one can understand the greatness within Periyar.`,
      }
    ],
  },
  {
    id: "speeches",
    number: "3",
    title: "வெற்றி பேச்சுகள்",
    icon: "🎤",
    description: "அவர் எழுதி பிறர் பேசிய சிறந்த பேச்சுகள்",
    items: [

      {
        id: "item_1775031773575",
        title: "என் கனவு - ஓர் வளர்ந்த இந்தியா",
        date: "2007",
        image: "/item_1775031773575_Vetham.png",
        audioFile: "/item_1775031773575_vetham-audio.mp3",
        content: `என் கனவு - ஓர் வளர்ந்த இந்தியா
நம் இந்தியா ஒரு பாரம்பரியமிக்கப் பழம்பெரும் தேசம். இது ஒரு ஞான பூமியாகும். நம்மைப் பெருமையும் பெருமிதமும் கொள்ளச் செய்யும் நம் தேசம் பொருளாதார ரீதியிலும் ஓர் வளர்ந்த நாடாக உலக அரங்கில் செம்மாந்து வலம்வர வேண்டும் என்பது இந்தியர் ஒவ்வொருவரின் கனவு மற்றும் விருப்பமாக இருப்பதில் வியப்பு ஒன்றுமில்லை. நம் கனவு நனவாகத் தடையாக இருக்கும் தடைக்கற்களை அடையாளம் கண்டு அகற்றவும், முன்னேற்றப் பாதையில் வீறு நடைபோடவும் என்னென்ன வழிமுறைகள் உள்ளன என்பதைக் காண்போம்.

முன்னேற்றத்திற்கான தடை:
‘பழம்பெருமை’ என்னும் போதை நம்மை விரைவாகச் செயல்பட விடாமல் தடுக்கும் பெருந்தடை. புதிய சிந்தனைகள், மாற்றங்கள் இவற்றைப் பரிசீலிக்கவும் தேவைப்பட்டால் சுவீகரிக்கவும் வேண்டியது காலத்தின் கட்டாயம். ஆனால் நம்மிடம் மண்டிக் கிடக்கும் பழமைவாத மனமோ அதற்கு ஒத்து வருவதில்லை. சிலருக்கோ ‘நம்மால் எதுவுமே முடியாது’ என்ற அழுகுணி மனப்பான்மை. ஆக்கப்பூர்வமான சிந்தனைகள், எண்ணங்கள் அவையே நம் தேசத்தை வளமாக்கும்.

விழிப்புணர்வு இன்றைய தேவை:
யாரெல்லாம் அடிமைகளாக இருக்கிறோம் என்பதை உணர்ந்து கொண்டார்களோ, அவர்கள் விடுதலைக்காகப் போராடத் தொடங்கினார்கள். நாமும் நம் பலவீனத்தைத் தெரிந்துகொள்ள வேண்டும். அதனை அகற்றி நம்மை வலிமைமிக்கவர்களாக மாற்றிக் கொள்ள வேண்டும்.

கனவு நனவாக:
கனவு நனவாக வேண்டும் என்றால் முதலில் விழித்தெழ வேண்டும். ‘நல்ல பொழுதையெல்லாம் தூங்கிக் கெடுத்தவர்கள் நாட்டை கெடுத்ததுடன் தாமும் கெட்டார்’ என்று சொல்லும் பட்டுக்கோட்டையார். ‘விழித்துக் கொண்டோரெல்லாம் பிழைத்துக் கொண்டார்கள்’ என்று பாதை காட்டுகிறார் பாரதி. ‘கனவு மெய்ப்பட காரியத்தில் உறுதி வேண்டும்’ என்று முழங்குகிறார். தங்கத்தைத் தோண்டும் போது ஒரு அவுன்ஸ் தங்கத்தை அடையத் டன் டன்னாக மண்ணை அகற்றியே ஆக வேண்டும். மன உறுதி, முனைப்பு, கடின உழைப்பு இவையே இன்றைய தேவை.

வலுவான இந்தியா:
உலகமயமாக்கம் நமக்கு பல்வேறு மறைமுக அச்சுறுத்தல்களைத் தடைகளை ஏற்படுத்தியுள்ளது. இந்தியா இவற்றிலிருந்து தப்பிக்க முடியாது. அவற்றை தீரமுடன் சந்திக்கும் ஆற்றல் வலிமை நமக்கு வேண்டும். வளர்ந்த நாடுகளின் நிர்ப்பந்தங்களுக்கு அடிபணியாமல் நிமிர்ந்து நிற்க நாம் நமது இறையாண்மையை நிலைநிறுத்தச் சுயசார்புள்ள பாதுகாப்பு வசதிகளைப் பெருக்கிக் கொள்ள வேண்டும். ஏவுகணைகளும் பாதுகாப்பு கருவிகளும் நம்மைப் பாதுகாக்கவே தவிர பிறரை பயமுறுத்த அல்ல. பஞ்சசீலக் கொள்கை கண்ட நம் பாரத தேசத்திற்கு மேலாதிக்க எண்ணமோ மற்றவர் மண்ணைக் கவரும் நோக்கமோ கிடையாது.

வளமான இந்தியா:
பட்டினிச் சாவு, சிசு மரணம், குடிநீர் வசதியற்ற கிராமங்கள், மருத்துவ வசதி கிட்டாத ஏழைகள் இவை மீதான கவனம் கூர்மையாக்கப்பட வேண்டும். வறுமை அகற்றப்படாத வரை அர்த்தமுள்ள வளர்ச்சி சாத்தியமில்லை. நாட்டின் ஒரு மூலையில் இருக்கும் வறுமை கூட நாடு முழுவதும் இருக்கும் வளமைக்குப் பெரும் அச்சுறுத்தலாகும்.

விவசாயத்தில் புரட்சி:
இந்தியா அடிப்படையில் ஒரு வளர்ந்த நாடு. அதன் முன்னேற்றத்தில் விவசாயத்தின் பங்கு இன்றியமையாதது. இந்திய விவசாயி கடனாளியாக வாழ்ந்து, கடனாளியாக மறைந்து போகும் நிலை மாற்றப்பட வேண்டும். இயற்கையின் சூதாட்டக் களமாக இருக்கும் இந்திய விவசாயம் நவீன தொழில்நுட்பங்களால் மாற்றப்பட வேண்டும். நிலங்கள் மேலும் மேலும் துண்டாடப்படுவதைத் தடுக்க வேண்டும். பாசன வசதிகளைப் பெருக்கி புதிய விளைச்சல் நிலங்கள் உருவாக்கப்பட வேண்டும். காலாவதியாகிப் போன சாகுபடி முறைகளைக் கைவிட்டு புதிய நவீன முறைகளைக் கடைப்பிடிக்க விவசாயிகளுக்கு ஊக்கம் கொடுக்க வேண்டும். விளைபொருட்களைச் சேமிக்கவும், பதப்படுத்தவும், பாதுகாக்கவும், கட்டுப்படியான விலையில் கிடைக்கவும் உரிய நடவடிக்கைகள் எடுக்கப்பட வேண்டும். பசுமைப் புரட்சியும், வெண்மைப் புரட்சியும் நிகழ்ந்தால் மட்டும் போதாது. அதன் பலன்கள் விவசாயிகளுக்குச் சென்றடைகிறதா என்று கண்காணிக்க வேண்டும்.

தொழில் புரட்சி:
தொழில்துறையில் வளர்ச்சி அடையாமல் நம்மால் முன்னேற்றப் பாதையில் விரைந்து செல்ல இயலாது. நவீன தொழில்நுட்பங்களைப் பயன்படுத்தத் தயக்கம் காட்டக்கூடாது. அதே சமயத்தில் சுற்றுச்சூழல் குறித்த அக்கறையும் தேவை. நமது தேசத்தில் மூல வளங்கள், தொழில்நுட்பங்கள், தொழில்துறை அடித்தளம் ஆகியவை இருந்தாலும் அவை இன்னும் வலுப்படுத்தப்பட வேண்டும். விவசாயம் சார்ந்த தொழில்துறைகள் மீது இன்னும் அதிக அக்கறை காட்டப்பட வேண்டும். பெருந்தொழிற்சாலைகள் உருவாக்குவதால் சிறு தொழில்கள் நசிந்து விடாமல் பார்த்துக் கொள்ள வேண்டும். நமது உற்பத்திப் பொருட்கள் சர்வதேசத் தரத்துடன் திகழக் கவனம் செலுத்தப்பட வேண்டும்.

உத்தரவாதப்படுத்தப்பட்ட ஆரோக்கியம்:
ஆரோக்கிய நலவாழ்வே நாட்டின் ஆதார உயிர்நாடி என்பதை உணர்ந்து, பாதுகாக்கப்பட்ட குடிநீர், சுற்றுச்சூழல் பாதுகாப்பு போன்றவற்றில் அக்கறை காட்டப்பட வேண்டும். இதைப் புறக்கணித்துவிட்டு வளர்ந்த இந்தியா என்பது சாத்தியமில்லை.

வளர்த்தெடுக்கப்பட வேண்டியவைகள்:
வளர்ச்சிப் பாதை ராஜபாட்டையாக அமைய உள்கட்டமைப்பு சிறப்பாக அமைய வேண்டும். விரைவான போக்குவரத்திற்கு ஏற்ற சிறப்பான சாலை வசதிகள், தங்குதடையற்ற சீரான மின் விநியோகம், தொலைத்தொடர்பு வசதி, துறைமுகம் போன்றவற்றில் கவனம் காட்டப்பட வேண்டும்.

அனைவருக்கும் கல்வி:
வளர்ந்த இந்தியா என்ற கனவு நனவாக, கல்வி வணிகமயமாவதைத் தடுத்து நிறுத்தித் தரமான கல்வி அனைவருக்கும் கிடைக்கச் செய்ய வேண்டும்.

உழைப்போம் உயர்வோம்:
வெறும் திட்டமிடல் மட்டும் நமது லட்சியப் பயணத்திற்கு உதவாது. 
ஓங்கி ஒலிப்பதால் மட்டும் நம்மால் ஓர் அங்குலம் கூட உயர முடியாது. 
திட்டங்களைச் செயல்படுத்தத் திடசித்தமும் கடின உழைப்பும் அர்ப்பணிப்பு மனப்பான்மையும் தேவை. வளர்ந்த இந்தியாவை நிர்மாணிப்பதில் நம் ஒவ்வொருவருக்கும் பங்கு இருக்கிறது என்பதை உணர்ந்து செயல்பட்டால் கனவு நனவாவது உறுதி. நினைப்பவன் அல்ல, நடப்பவனால்தான் சென்றடைய முடியும்.

-சி. வேதநாயகம்,
 பதினொன்றாம் வகுப்பு,
 திரு இருதய மேல்நிலைப்பள்ளி,
 பணகுடி 627109,
 நெல்லை மாவட்டம்.
`,

        englishTranslation: `My Dream - A Developed India
Our India is a tradition-rich, ancient nation; it is a land of wisdom. It is no surprise that it is the dream and desire of every Indian that our nation, which fills us with pride and dignity, should stand tall on the global stage as an economically developed country. Let us explore the ways to identify and remove the stumbling blocks that hinder the realization of our dream and to stride forward on the path of progress.

Barriers to Progress:
The intoxication of ‘ancient glory’ is a major obstacle that prevents us from acting swiftly. It is the necessity of time to examine new thoughts and changes and, if required, to adopt them. However, our deep-rooted conservative mindset does not cooperate with this. Some suffer from a defeatist attitude that 'we cannot achieve anything.' Constructive thoughts and ideas are what will make our nation prosperous.

Awareness - The Need of the Hour:
Only those who realized they were enslaved began to fight for freedom. Similarly, we must recognize our weaknesses. We must remove them and transform ourselves into a strong people.

Making the Dream a Reality:
To make a dream come true, one must first wake up. As Pattukkottaiyar said, "Those who wasted good times in sleep ruined both the country and themselves." Bharathi shows the way, saying, "All those who woke up survived." He proclaims, "To make dreams come true, one needs determination in action." When mining for gold, one must remove tons of soil to obtain a single ounce of gold. Determination, focus, and hard work are the needs of the hour.

A Strong India:
Globalization has posed various indirect threats and obstacles to us. India cannot escape these. We need the strength and capability to face them with courage. To stand tall without yielding to the pressures of developed nations, we must increase our self-reliant defense facilities to uphold our sovereignty. Missiles and defense equipment are for our protection, not to intimidate others. Our Bharat, which follows the Panchsheel principles, has no intent of dominance or seizing others' lands.

A Prosperous India:
Attention must be sharpened toward starvation deaths, infant mortality, villages without drinking water facilities, and the poor who lack access to medical facilities. Meaningful development is not possible until poverty is eradicated. Even poverty in one corner of the country is a major threat to the prosperity of the entire nation.

Revolution in Agriculture:
India is fundamentally a developing country. The role of agriculture is indispensable in its progress. The situation where an Indian farmer lives and dies in debt must be changed. Indian agriculture, which currently serves as a gamble with nature, must be transformed with modern technologies. The further fragmentation of land must be prevented. By increasing irrigation facilities, new cultivable lands should be created. Outdated cultivation methods must be abandoned, and farmers should be encouraged to adopt new, modern techniques. Proper measures must be taken to store, process, and protect produce, and to ensure they are available at affordable prices. It is not enough for the Green Revolution and White Revolution to occur; it must be monitored whether their benefits actually reach the farmers.

Industrial Revolution:
Without growth in the industrial sector, we cannot move quickly on the path of progress. We should not hesitate to use modern technologies. At the same time, concern for the environment is also necessary. Although our nation possesses raw resources, technologies, and an industrial foundation, they need to be further strengthened. More attention should be paid to agro-based industries. While establishing large-scale industries, we must ensure that small-scale industries do not perish. Attention must be paid to ensuring our manufactured products meet international quality standards.

Guaranteed Health:
Recognizing that a healthy life is the lifeblood of the nation, care must be taken regarding protected drinking water and environmental protection. A developed India is not possible if these are neglected.

Things to be Developed:
For the path of growth to become a royal road, infrastructure must be excellent. Attention must be paid to high-quality road facilities for rapid transport, uninterrupted and steady power supply, telecommunication facilities, and ports.

Education for All:
To realize the dream of a developed India, the commercialization of education must be stopped, and quality education must be made accessible to everyone.

Let Us Work and Rise:
Mere planning alone will not help our ideal journey. We cannot rise even an inch just by shouting loudly. Firm determination, hard work, and a spirit of dedication are required to implement plans. If we act with the realization that each of us has a role in building a developed India, the dream is sure to come true. It is not the one who merely thinks, but the one who walks who can reach the destination.`,
      },
      {
        id: "item_1775112083673",
        title: "பாரதி கண்ட பாரதம்",
        date: "2008",
        image: "/item_1775112083673_bharathikandabharatham_img.png",
        audioFile: "/item_1775112083673_bharathi_kanda_bharatham_-_agal.m4a",
        content: `ஞானத்திலே... பரமோனத்திலே...
மானத்திலே... அன்னதானத்திலே...
கானத்திலே... அமுதாக நிறைந்த...
கவிதையிலே... உயர் நாடு...
இதுதான் நம் பாரதி கண்ட பாரதம்.

ஞானம் என்கிற போது விஞ்ஞானத்திலும், பரமோனத்திலே என்கிற போது ஆன்மீகத்திலும், மானத்திலே என்கிற போது வீரத்திலும், அன்னதானத்திலே என்கிற போது மானுட நேயத்திலும், கானத்திலே என்கிற போது இசையிலும், கவிதையிலே என்கிற போது இலக்கியத்திலும் சிறந்து விளங்க வேண்டும் பாரதம் என்கிற கனவு பாரதியிடம் இருந்தது. அதுதான் பாரதி கண்ட பாரதம்.

பாரதி கண்ட பாரதத்தில் ஜாதி-மத பேதங்களுக்கு இடமில்லை.

"வேதியர் ஆயினும் ஒன்றே"
"வேறு குலத்தவர் ஆயினும் ஒன்றே"

எல்லோரும் ஓர் குலம்
எல்லோரும் ஓரினம்
எல்லோரும் ஓர் நிறை
எல்லோரும் இந்நாட்டு மன்னர்

என்ற முழக்கம் பாரதத்தை ஒரு பரிபூரண, சுதந்திர, ஜனநாயக சோஷலிச குடியரசாக திகழ வேண்டும் என்று பறைசாற்றுகிறது

செப்பும் மொழி பதினெட்டு உடையாள் எனிலும்
சிந்தனை ஒன்றுடையாள்

பல்வேறு மொழி, மதம் ஆகியவைகளைக் கொண்ட பாரதத்தின் பன்முகத்தன்மையை அங்கீகரிக்கவும், அதன் ஊடாக ஒற்றுமை காண வேண்டும் என்பது பாரதியின் விருப்பம்.

"வேற்றுமையில் ஒற்றுமை"
"Unity in Diversity"

பாரதத்தின் சுவாசம்!
நல்லிணக்கம்தான் பாரதத்தின் கவசம்!

பெண் அடிமை தீருமட்டும்
பேசும் திருநாட்டில்
மண் அடிமை தீர்தல் முயற்கொம்பே
என பாரதியின் சீடர் முழங்குகிறார்.

அதனால் தான் பாரதியார்,
"வீட்டுக்குள்ளே பெண்ணைப் பூட்டி வைப்போம் என்ற விந்தை மனிதர் தலைகவிழ்ந்தார்"
ஆணுக்கிங்கு பெண் இளைப்பில்லை காண் என முழங்கி, 
பாரதம் என்பது பெண் உரிமை பேணும் தேசமாகத் திகழ வேண்டும் என்கிறார்.

வளர்ச்சி என்பது சமச்சீரானதாகவும், மானுட நேசம் கொண்டதாகவும் திகழ வேண்டும். சக மனிதனை கீழே தள்ளி விட்டு, அவனை மிதித்துக் கொண்டு வெற்றி இலக்கை நோக்கி ஓடும் கொடூரத்தைப் பாரதி அங்கீகரிக்கவில்லை.

"தனி ஒரு மனிதனுக்கு உணவில்லை எனில் ஜகத்தினை அழித்திடுவோம்." 
நாட்டில் ஒரு மூலையில் இருக்கும் வறுமைகூட நாட்டின் பெரும் பகுதியில் இருக்கும் செழுமையை புரட்டிப் போட்டுவிடும் என்ற எச்சரிக்கையை மனதில் கொள்ள வேண்டும். எனவேதான் பாரதி வளர்ச்சி, முன்னேற்றம் ஒருங்கிணைந்த சமச்சீர் வளர்ச்சியாக இருக்க வேண்டும் என்று எண்ணினார்.

பாரதி கண்ட பாரதத்தில் வெளிநாட்டு வர்த்தகத்திற்கு முக்கிய இடம் உண்டு. 
"சேதுவை மேடுறுத்தி வீதி சமைப்போம்" என வழியும் கண்டார். 
"வங்கத்தில் ஓடி வரும் நீரின் மிகுதியால் மையத்து நாடுகளுக்கு பயிர் செய்வோம்." 

பாரதி கண்ட பாரதத்தின் இரு கண்களாக ஆன்மீகமும் விஞ்ஞானமும் விளங்கியது.
ஆன்மீகம் மன அமைதிக்கு
விஞ்ஞானம் தேச வளர்ச்சிக்கு...
வானை அளப்போம் கடல் மீனை அளப்போம்
சந்திர மண்டலத்தியல் கண்டு தெளிவோம்
பாரதி கண்ட பாரதத்தில்
அறிவியலுக்கு மட்டுமல்ல;
ஆன்மீகத்திற்கும் இடம் உண்டு.
யாரையும் அச்சுறுத்தாத பாரதம்
யாருக்கும் அஞ்சாத பாரதம்
அதுதான் பாரதி கண்ட பாரதம்.
"பகைவனுக்கருள்வாய் நெஞ்சே"
என்றதும்
"அச்சமில்லை அச்சமில்லை
உச்சி மீது வான் இடிந்து வீழுகின்ற போதிலும்
அச்சமில்லை அச்சமில்லை"
என்று முழங்கியதும் நம் பாரதி தானே!

வளர்ச்சி, முன்னேற்றம் என்ற வேகத்தில் நாம் இயந்திரமாகி விடக்கூடாது. மனிதனை மனிதனாகப் ஆக்கும் கலை இலக்கியம் பேணும் தேசமாக பாரதம் திகழ விழைந்தான் பாரதி.

"காவியம் செய்வோம்
கலை வளர்ப்போம்
ஓவியம் செய்வோம்"

தொலைத் தொடர்பு புரட்சியின் விளை நிலமாக பாரதம் திகழ பாரதி கனவு கண்டான். 

"காசி நகர்ப் புலவன் பேசும் உரை தான் 
காஞ்சியில் கேட்பதற்கோர் கருவி செய்வோம்"

வீரமும், ஈரமும் கொண்ட நம் முண்டாசுக்கவிஞன் காண விரும்பும் பாரதம் பல்வேறு தளங்களில் தடம் பதித்துள்ளது. இன்னும் சில விஷயங்களில் தடம் புரண்டுள்ளது தடுமாறி நிற்கிறது. 

சுயச் சார்பு கொண்ட வீர தேசமாக,
தேவைப்படுவோற்கு உதவும் நேச தேசமாக
பாரதம் திகழ வேண்டும்

மக்கள் கவிஞன்,  இளைய சமுதாயத்தின் நம்பிக்கை நட்சத்திரமாம் நம் பாரதியின் கவிதைகளை "பாரதம் எப்படி இருக்க வேண்டும்" என்பதற்கான வழிகாட்டு நெறிமுறைகளாய் கொள்வோம்.

பாரதியின் பெயரால் பல்கலைக்கழகம் கண்டோம்; 
பாரதிக்கு சிலை வடித்தோம். 
பல சிறப்புக்கள் செய்தோம். 
ஆனால் அவர் விரும்பிய வண்ணம் "நவபாரதம்" படைத்தோமா?

பாரதியின் கனவுகளை நனவாக்க சபதம் ஏற்போம். 
செயல்படுவோம். 
செய்து முடிப்போம்; 
வென்று காட்டுவோம்.`,
        englishTranslation: `In wisdom… in spirituality…
In honor… in charity…
In music… overflowing with nectar…
In poetry… a higher nation…
This is the India that Bharathi envisioned.
When Bharathi spoke of wisdom, he meant science;
When he spoke of spirituality, he meant the soul;
When he spoke of honor, he meant valor;
When he spoke of charity, he meant human compassion;
When he spoke of music, he meant art;
When he spoke of poetry, he meant literature.
India, in his dream, must excel in all these.
That is the India Bharathi saw.
In Bharathi’s India, there is no place for caste or religious divisions.
“Even if one is a Brahmin, he is the same.
Even if one belongs to another caste, he is the same.”
All are one community,
All are one race,
All are one fullness,
All are kings of this land.
This clarion call declares that India must stand as a complete, free, democratic, socialist republic.
Even if she speaks eighteen languages,
Her thought is one.
Bharathi wanted India to embrace diversity of language and religion, yet find unity through it.
“Unity in Diversity” —
That is India’s breath!
Harmony is India’s shield!
Until women’s slavery ends,
Until the bondage of land is broken,
India must strive — so proclaimed Bharathi’s disciples.
That is why Bharathi thundered:
“The strange man who locks up women inside the house has lost his head.”
“There is no rest for women here as long as men deny them equality.”
India must be a nation that protects women’s rights.
Development must be balanced and humane. Bharathi rejected the cruelty of trampling others to reach success.
“If even one man goes hungry, we will destroy the whole world.”
He warned that poverty in one corner of the nation can overturn prosperity elsewhere. Hence, progress must be inclusive and equitable.
In Bharathi’s India, foreign trade has its place:
“We shall build bridges and roads.”
“With the abundance of river waters, we shall cultivate crops for central nations.”
The two eyes of Bharathi’s India are spirituality and science.
Spirituality for peace of mind,
Science for national growth.
“We shall measure the sky, measure the fish in the sea,
We shall explore the moon’s realm.”
In Bharathi’s India, there is room not only for science but also for spirituality.
India must be a nation that threatens none, and fears none.
“Show mercy even to your enemy, O heart.”
And he roared:
“No fear, no fear,
Even if the sky falls upon our heads,
No fear, no fear.”
In the rush of progress, we must not become machines. India must remain a land that nurtures art and literature — the essence of humanity.
“We shall compose epics,
We shall foster art,
We shall paint.”
Bharathi dreamed of India as the land of telecommunication revolution:
“The speech of a poet in Kashi
Shall be heard in Kanchipuram through a device we create.”
The turbaned poet, with valor and tenderness, envisioned India across many dimensions. In some, India has advanced; in others, it still falters.
India must be a self-reliant nation of valor,
A compassionate nation that helps those in need.
Let us take Bharathi’s poems — the guiding star of the youth — as the blueprint for how India should be.
We have built universities in his name,
We have sculpted statues for him,
We have honored him in many ways.
But have we built the “New India” he desired?
Let us vow to make Bharathi’s dreams come true.
Let us act.
Let us accomplish.
Let us triumph.`,
      }
      ,
      {
        id: "item_1775117627084",
        title: "விளம்பரங்கள் நம்முள் விதைக்கும் விஷக் சிந்தனைகள்",
        date: "2004",
        image: "/item_1775117627084_Advt_img-1.jpg",
        audioFile: "/item_1775117627084_periyappa-_vilambarangal_nammul.m4a",
        content: `விளம்பரங்கள் நம்முள் விதைக்கும் விஷக் சிந்தனைகள். 
விளம்பரங்கள் நுகர்வோர் சுயசிந்தனைக்கு வைக்கப்பட்ட தடை. 
அது நுகர்வோர் மேலாண்மைக்குக் கட்டப்பட்ட பாடை.

இது பொருளாதார ரீதியில் விளம்பரங்கள் ஏற்படுத்தும் விளைவு. ஆனால் எல்லாவற்றுக்கும் மேலாக, 
விளம்பரங்கள் கலாசாரத்தளத்தில் வைக்கிறதே வேட்டு, அதுதான் நம்மைப் பதைபதைக்க வைக்கிறது, பயமுறுத்துகிறது. 
விளம்பரங்கள் பொருட்களை நம்மிடம் விற்கவில்லை.
நம்மைதான் பொருட்களுக்கு விற்றுவிடுகின்றன. 

விளம்பரங்கள் நம்மைக்கவர காரணங்கள் 
துல்லியமான படபிடிப்பு, கச்சிதமான கதை அமைப்பு, 
கவனத்தை ஈர்க்கும் சொற்ச்செட்டு, "புதுசு கண்ணா புதுசு" என்றும் மீண்டும் மீண்டும் ஒளிபரப்புவதால் 
மனதில் தாக்கத்தை ஏற்படுத்திகிறது. 
விளம்பரங்கள் தொழில் நூட்ப ரீதியில் கண்ணையும் கருத்தையும் கவரிகிறது.

ஆனால் அது நம்மைக் கருத்துக் குருடர்கள் ஆக்குவதுதான் கவலைத் தெரிகிறது. 
ஒரு தொலைக்காட்சி தொடரைவிட இடையிடையே வந்துபோகும் கவர்ச்சி விளம்பரங்கள்தான் பிஞ்சு உள்ளங்களைக் கவிப்பிடிக்கிறது. 
பாடத்தில் ஃபேய்லா, Don't care என்கிற இளம்பெண் தன் சரும்மத்தில் கரும்புள்ளி என்றால் கலங்கிப் போகிறாள்.

விளம்பரங்கள் காட்டும் நவையுக மங்கையிவள். 
படிப்பைவிட மேனி  எழில்தான் ஒரு பெண்ணுக்கு முக்கியம். இது ஒரு விஷக் கருத்து.

பாலில் விஷம் கலக்கும் பாதகம். புது வீடு, புது கார், புது மனைவி என்று உயிரும் உணர்வும் கொண்ட பெண்ணை 
நுகர்வுப் பொருளாகப் படைத்துக் காட்டுகிறதே ஒரு விளம்பரம். 
அது பெண் பற்றிய புதிய சிந்தனைகளைப் பின்னோக்கி தள்ளும் அபாயம் அல்லவா?

பதைப்பதைக்கிறாள் அம்மா.
ஒரு குறிப்பிட்ட குரியல் சோப் வாங்காவிட்டால் ஏற்படும் விளைவுகள் குறித்து ஆம், 
அலர்ஜி வந்து விடுமாம். பரு வந்து விடுமாம். 
கல்யாணமே ஆகாதே என்று கலங்கிப் போயிறாள் அந்த அம்மா 

கல்யாணம் தான் ஒரு பெண்ணின் உச்சபச்ச இலக்கு, காலாவதி ஆக வேண்டிய கட்டுப் பெட்டிக் கருத்து இது 
அது வண்ண படமாக சத்தமின்றி நம் நெஞ்சுக்குள் வந்து விழும் விளம்பர விஷ வித்து 

பட்டங்கள் ஆள்வதும் சட்டங்கள் செய்வதும் பாரினில் பெண்களே நடத்த வந்தோம் என பாரதி முழங்குகிறாள். 

ஆனால் உங்கள் மகனின் உயர்க்கல்விக்கும் உங்கள் மகளின் திருமணத்திற்கும் இதோ தருகிறோம் கடன் என்கிறது வங்கி விளம்பரங்கள் 

"மகனை மேலே மேலே படிக்க வையுங்கள் 
மகளை உடனே கட்டிக் கொடுங்கள்" 

இந்த விளம்பரங்கள் பாரதியின் கனவை சிதைக்கும் கொடுமை இல்லையா? 

"அண்டை வீட்டார் பொறாமை அதுதான் நம் பெருமை" என்று போதிக்கிறது ஒரு TV கம்பேனி விளம்பரம்.
அண்டை அயலாரை நேசி என்கிறது வேதம் 

குளிர்பானங்களுக்காக நட்பையே மாற்ற தயாராகும் பெண்களை விளம்பரங்கள் அறிமுகப்படுத்திக்கிறன 
கையில் குறிப்பிட்ட வகை செல்ஃபோன்கள் இருந்தால் வசியப்படுத்தலாம் என்கிற வக்கற சிந்தனைகளுக்கு விளம்பரங்கள் இன்று தீனி போடிக்கிறது 

இது சரியா? இது முறையா? சிந்திக்க வேண்டாமா?

தன் பொருளின் தரம் பற்றிப் பேச வேண்டிய விளம்பரங்கள் தரம் இழந்து போகின்றன
விளம்பரத்திற்காக உற்பத்தி செலவில் ஏராளமாக செலவிடப்படுகிறதாம்
பொருளின் தகுதியை உயர்த்த அதை செலவழிக்கலாம். 
அல்லது அது குறித்த ஆராய்ச்சிக்கு செலவழிக்கலாம் அல்லது பொருளின் விலையை குறைத்து நிர்ணயிக்கலாம் 
அதனால் வாடிக்கையாளருக்கு கிட்டுமே பலன். 

நுகர்வு கலாச்சாரத்தின் விளைவு தான் இந்த மோசமான விளம்பரங்கள் 

நோய் நாடி 
நோய்முதல் நாடி 
செயல்பட வேண்டிய தருணம் இது 

விளம்பரத்தை எவ்வாறு எதிர்கொள்வது நம்மிடம் விழிப்புணர்வு என்ற ஆயுதம் உள்ளது 
அதன் துணை கொண்டு எந்த அபாயத்தையும் முறியடிக்கலாம் 
அர்ஜுன் அம்மா புத்திசாலிதான் ஆரோக்கிய பாலையும் விளம்பரத்திற்கு பணத்தையும் பெற்றுக் கொள்வதால்! 
என விமர்சிப்பதன் மூலம் விளம்பரங்களை எதிர்கொள்ளலாம் 

விழித்தெழுவோம் விமர்சனப் பார்வையில் 
நச்சு விளம்பரங்களை தகர்த்தெறிவோம் `,
        englishTranslation: `The Toxic Thoughts Sown Within Us by Advertisements

Advertisements plant poisonous thoughts within us.
They are barriers placed against the consumer’s independent thinking.
They are cages built for consumer manipulation.

This is the economic impact of advertisements. But beyond everything else,
the damage they inflict on the cultural sphere is what truly makes us anxious and afraid.

Advertisements do not sell products to us.
They sell us to the products.

What makes advertisements so attractive?
Precise cinematography, perfectly structured storytelling,
attention-grabbing wordplay, and the constant repetition of slogans like “New, dear, new!”
These repeated broadcasts leave deep impressions on the mind.

Technically, advertisements captivate both the eye and the mind.

But the real concern is that they turn us into people blind in judgment.

More than a television serial, it is the glamorous advertisements that keep appearing in between
that capture the tender minds of children.

A young girl who says “Don’t care” about failing in studies
is deeply disturbed by a dark spot on her skin.

This is the image of the “modern woman” shown in advertisements:
for a woman, physical beauty matters more than education.
This is a poisonous idea.

It is like mixing poison in milk.

An advertisement that says “new house, new car, new wife”
portrays a living, feeling woman as just another consumer object.
Is this not dangerous—pushing progressive ideas about women backward?

A mother trembles in fear.
If a certain brand of soap is not bought,
there may be allergies, there may be pimples,
and she panics thinking “What if her marriage never happens?”

The outdated boxed idea that marriage is the ultimate goal of a woman’s life
is another toxic seed silently dropped into our hearts through colorful advertisements.

Subramania Bharati once proclaimed:
“Women shall rule, frame laws, and lead this world.”

But bank advertisements say:
“Here is a loan for your son’s higher education and your daughter’s marriage.”

“Let your son study higher and higher,
but marry your daughter off immediately.”

Are these advertisements not cruelly shattering Bharati’s dream?

A TV company advertisement preaches:
“The envy of the neighbor is our pride.”

But our scriptures teach:
Love thy neighbor.

Advertisements even introduce women willing to trade friendship
for soft drinks.

They feed distorted ideas that possessing a certain brand of cellphone
is enough to attract and manipulate others.

Is this right? Is this fair? Should we not question it?

Advertisements that should speak about the quality of their products
are themselves losing all quality.

Huge amounts are spent on advertising from the production cost.
That money could instead be spent on improving the product’s quality,
or on research,
or on reducing the price of the product.

Then the real benefit would reach the customer.

These harmful advertisements are the very outcome of consumerist culture.

This is the time to
diagnose the disease,
trace its root cause,
and act.

How should we confront advertisements?
We already possess a weapon called awareness.

With its support, we can defeat any danger.

By critically questioning them—
like the clever mother Arjun who takes both the healthy malt drink
and the advertisement money—we can resist advertisements.

Let us awaken with a critical vision.
Let us tear apart these toxic advertisements.`,
      }
      ,
      {
        id: "item_1775119164359",
        title: "இயற்கை",
        date: "2010",
        image: "/item_1775119164359_iyarkai.jpg",
        audioFile: "/item_1775119164359_iyarkai.m4a",
        content: `இயற்கை
காற்று, மழை, காடு மலை, கடல்
எல்லாம் இயற்கையின் காட்சி
இயற்கையைக் கொண்டாடி மகிழ்வோம்.


மண் என்றால் அழுக்கு என்ற நம் நிலை
எப்போது நீங்கும்?

அதுதான் நம் வளம் என்று புரிதல்
எப்போது பிறக்கும்?

மழை என்றால் தொந்தரவு, சேதம் என்ற
மனோ நிலை எப்போது போகும்?

அதுதான் நீராதாரம் என்ற உண்மை
எப்போது புரியும்?

சூரியன் என்றால் வெப்பம் என வெறுக்கும்
நம் எண்ணம் எப்போது மாறும்?

அதுதான் வெளிச்சம் என்ற உணர்தல்
எப்போது பிறக்கும்?

காற்று வெறும் காற்று அல்ல;
நம் உயிர் மூச்சு அல்லவா?

பறவைகளும், விலங்குகளும் நம்மோடு
வாழ உரிமை படைத்த உயிர்ச்சங்கிலியில்
கண்ணிகள் என்பதை புரிந்து கொண்டால்,

காக்கை குருவி எங்கள் ஜாதி
கடலும் மலையும் எங்கள் கூட்டம் என
இவ் இயற்கையோடு இணைந்து ஆனந்தக் கூத்தாட
மாட்டோமோ?

வளர்ச்சிப் போதையில் இயற்கையை சீரழிப்பது
கண்களை விற்று சித்திரம் வாங்கிய கதை தானே?
பாதை மாறலாமா? பயணத்தை இழக்கலாமா?
மரங்களின் அழிவும் காடுகளின் வீழ்ச்சியும்
காற்று மண்டலத்தில் மாசு படிய காரணம் ஆகிறது.
புவி வெப்பமடைவதற்கும் காரணம் இயற்கைக்கு
நாம் செய்யும் கொடுமைதானே!
இயற்கை என்னும் பொன் முட்டையிடும் வாத்தை
பேராசையால் கொன்று வயிறை அறுத்து கொள்ளும்
பேதையாக நாம் இருப்பதா?

இயற்கைக்காக குரல் கொடுத்தும்
அதை காக்க கரம் நீட்டியும்

நாளை உலகை பத்திரமாக பாதுகாத்து
அடுத்த தலைமுறைக்குத் தர வேண்டிய
பசுமை வீரர்களாக நாம் மாற வேண்டாமா?

இயற்கையோடு இசைந்து, இயைந்து வாழும்
வித்தகத்தைக் கற்றுக் கொள்ளுவோம்
இயற்கை அன்னையைப் போற்றி மகிழ்வோம்;
வணங்கிப் பாதுகாப்போம்.`,
        englishTranslation: `Natural breeze, rain, forest, mountain, and ocean
All are spectacles of nature.
Let us celebrate and enjoy nature.

When will our mindset that soil means dirt change?
When will the realization that it is our true wealth be born?

When will the mental state that rain means trouble and damage vanish?
When will the truth that it is the source of water be understood?

When will our thought that hates the sun as mere heat change?
When will the understanding that it is our light be born?

Air is not just air;
Isn't it our very life breath?

If we understand that birds and animals
Are links in the chain of life, with an equal right to live alongside us,

Wouldn't we, with the belief that "the crow and sparrow are our kin,
The sea and mountain are our crowd,"
Join this nature and dance in joy?

Is destroying nature in the intoxication of development not the story of
Selling one's eyes to buy a painting?
Can we deviate from the path? Can we lose our journey?

The destruction of trees and the fall of forests
Become the cause of pollution settling in the atmosphere.
The cause of global warming is the cruelty we inflict upon nature!

Should we be the fools who, out of greed,
Kill the nature that is the goose that lays golden eggs and cut open its belly?

Shouldn't we change into green heroes,
Who raise a voice for nature and stretch out a hand to protect it,
Safely guarding the world of tomorrow to give it to the next generation?

Let us learn the art of living in harmony and unison with nature.
Let us praise and enjoy Mother Nature;
Let us worship and protect her.`,
      }
    ],
  },
  {
    id: "haiku",
    number: "4",
    title: "பூக்கோல ஹைக்கூக்கள்",
    icon: "🌸",
    description: `
    தங்கையின் பூக்கோலம்
    அண்ணணின் சொற்கோலம்`,
    items: [

      {
        id: "item_1775025100145",
        title: "சுற்றங்கள் அரவணைக்கிறார்களா? அமுக்குகிறார்களா? சிறப்பா? சிறையா? பதில் சொல்லுங்கள் பூக்களே... புன்னகைத்து மழுப்பாதீர்கள்... ",

        image: "/item_1775025100145_IMG-20250122-WA0000.jpg",



      }
      ,
      {
        id: "item_1775026054943",
        title: "பெருசை தலையில் வைத்து கொண்டாடுதே இந்த சின்னப் பூக்கள்...👌  சிறப்பானதை  தலையில் வைத்து கொண்டாடுதோ  இந்த நரைத்த பூக்கள்....",

        image: "/item_1775026054943_IMG-20250604-WA0002.jpg",



      }
      ,
      {
        id: "item_1775026153539",
        title: "Though the flowers kept inside are not (having good smell and good look) beauty but sweety to Lord Vinayagar... ",

        image: "/item_1775026153539_IMG-20251013-WA0001.jpg",



      }
      ,
      {
        id: "item_1775026244213",
        title: "வெள்ளை துப்பாக்கிகளுக்கு அஞ்சாமல் சிரிக்கிறதே இந்த மஞ்சள் ஈரான்.. ",

        image: "/item_1775026244213_IMG-20260325-WA0020.jpg",



      }
      ,
      {
        id: "item_1775026303697",
        title: "இரத்தத்தின் இரத்தமான உடன்பிறப்புகளுக்கு தலைமைப்பூ கொடுக்கும் செய்தி என்னவோ? ",

        image: "/item_1775026303697_IMG-20260325-WA0018.jpg",



      }
      ,
      {
        id: "item_1775026374635",
        title: "மேலே இருக்கிறவன் பார்த்துக்கிடுவான் என்ற நம்பிக்கையில் உடன்பிறப்\"பூ\"க்கள்.🙏 ",

        image: "/item_1775026374635_IMG-20260325-WA0017.jpg",



      }
      ,
      {
        id: "item_1775026483235",
        title: "விரிகதிராய் வருக! விழிப்புணர்வு தருக!!🙏👍 ",

        image: "/item_1775026483235_IMG-20260325-WA0015.jpg",



      }
      ,
      {
        id: "item_1775026542985",
        title: "கால சக்கரம் சுழல்வது கடவுளின் அரு்ளால்🙏 ",

        image: "/item_1775026542985_IMG-20260325-WA0025.jpg",



      }
      ,
      {
        id: "item_1775026673805",
        title: "ஜொலிக்க,ஜெயிக்க...உதிரிகளும் உதவக்கூடும் என்கிறதோ இந்த மஞ்சள் பூ... மையபூ... ",

        image: "/item_1775026673805_IMG-20260325-WA0028.jpg",



      }
      ,
      {
        id: "item_1775026970307",
        title: "மலருக்குள் ஒளிந்திருக்கும் பூதம்  இறை பிரசன்னத்தைக் கண்டு அஞ்சி அலறுகிறதோ! மலர்களோ பக்தி மயக்கத்தில்..👍👌 ",
        image: "/item_1775026970307_IMG-20250618-WA0000.jpg",
      }
      ,
      {
        id: "item_1775027056664",
        title: "நாடி  நரம்புகளில் பின்னிக்கிடப்பது கர்மயோகமா? பக்தி யோகமா?👌 ",

        image: "/item_1775027056664_IMG-20260324-WA0005.jpg",



      }
    ],
  },
];
