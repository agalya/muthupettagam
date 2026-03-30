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
          { id: "hv4", title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.இராமலிங்கம், நாயகி: திருமதி.கௌரி இராமலிங்கம்]", 
            date: "07 ஏப்ரல் 1996", 
            audioFile: "", 
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
          { id: "hv7", title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.M.இராமலிங்கம் B.Com., H.D.C., CAIIB., நாயகி: திருமதி. கோமதி இராமலிங்கம்]", 
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
          { id: "hv2", 
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
          { id: "hv5",
            title: "மணிவிழா வாழ்த்து - [நாயகன்: திருமிகு.A.S பிச்சையா, நாயகி: திருமதி.P.சங்கர வடிவு]", 
            date: "01 செப்டம்பர் 2007", 
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
          },
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
           { id: "hi-poem-3", 
            title: "சிங்கி அண்ணன்", 
            date: "06 டிசம்பர் 2024",
            image:"/singi.jpg",
            audioFile: "", 
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
          { id: "hi-poem-5", 
            title: "வீர பத்திர பிள்ளை அண்ணாச்சி", 
            date: "11 ஜனவரி 2026",
            audioFile: "", 
            image:"/veerabathra.jpg",
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
    title: "அவரை நினைத்து கவிதைகள்",
    icon: "💐",
    description: "அவரை நினைவு கூர்ந்து எழுதப்பட்ட கவிதைகள்",
    subCategories: [
      {
        id: "for-vaazhthu",
        title: "வாழ்த்து மடல்கள்",
        items: [
          { id: "fv2", 
            title: "மணிவிழா வாழ்த்து [விழா நாயகர்: பொன். முத்துக்குமார் : விழா நாயகி: மு. வேலம்மாள் அண்ணி]", 
            date: "25 செப்டம்பர் 2015",
            image:"/periyappa-periyamma-60.jpg", 
            audioFile: "", 
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
{ id: "fv3", 
  title: "பிறந்த நாள் வாழ்த்து", 
  date: "28 செப்டம்பர் 2018",
  image:"/kumar_to_kumar.jpeg", 
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
          { id: "fi1", title: "சித்தப்பா இராமலிங்கம் அவர்களின் இரங்கல்", 
            date: "24 மார்ச் 2026", 
            audioFile: "",
            image:"/perumalpuram_thaatha_periyappa.jpg", 
            englishTranslation: "I have no words to express my grief. O God you are so cruel to take a graceful soul at an early age ", 
            content: `
            வானத்து அமரன் வந்தான் காண்,
            வந்தது போல் சென்றான் காண்
            ` 
          },
          { id: "fi4", 
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
          { id: "fi2", title: "தங்கை சங்கீதா இனியனின் இரங்கல்", 
            date: "28 மார்ச் 2026", 
            audioFile: "/babuththai-audio.mp3",
            image:"/babuththai-hw.jpg", 
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

          { id: "fi3", title: "தம்பி கந்தனின் இரங்கல்", 
            date: "24 மார்ச் 2026", 
            audioFile: "/appa_audio_clean.mp3",
            image:"/kandhan.jpg",
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
          
          { id: "fi5", title: "சகோதரிகளின் விழுதுகள் - மருமக(ன்)ள்களின் இரங்கல்", 
            date: "10 டிசம்பர் 2024", 
            audioFile: "", 
            englishTranslation: "Will be uploaded soon...", 
            content: "விரைவில் பதிவேற்றப்படும்..." 
          },
          { id: "fi6", title: "இரங்கல் கவிதை 6", date: "30 டிசம்பர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
    ],
  },
  {
    id: "speeches",
    number: "3",
    title: "வெற்றி பேச்சுகள்",
    icon: "🎤",
    description: "அவரின் சிறந்த பேச்சுகள்",
    items: [
      { id: "s1", title: "வெற்றி பேச்சு 1", date: "8 ஜனவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s2", title: "வெற்றி பேச்சு 2", date: "15 ஜனவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s3", title: "வெற்றி பேச்சு 3", date: "22 ஜனவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s4", title: "வெற்றி பேச்சு 4", date: "1 பிப்ரவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
  {
    id: "haiku",
    number: "4",
    title: "பூக்கோல ஹைக்கூக்கள்",
    icon: "🌸",
    description: "அவரின் ஹைக்கூ கவிதைகள்",
    items: [
      { id: "h1", title: "ஹைக்கூ 1", date: "10 பிப்ரவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h2", title: "ஹைக்கூ 2", date: "20 பிப்ரவரி 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h3", title: "ஹைக்கூ 3", date: "1 மார்ச் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
  {
    id: "press",
    number: "5",
    title: "பத்திரிக்கை நாழிதள்களில் அவர் எடுத்த அவதாரங்கள்",
    icon: "📰",
    description: "பத்திரிக்கைகளில் அவரின் படைப்புகள்",
    subCategories: [
      {
        id: "articles",
        title: "கட்டுரைகள்",
        items: [
          {
            id: "a-maamiyar",
            title: "சிறுமிபோல் விளையாடும் மாமியார் (ஆயிரத்தில் ஒருவர்)",
            date: "14 மார்ச் 2026",
            image: "/article-1.jpeg",
            englishTranslation: `Many might be surprised if I say the most unforgettable woman in my life is my mother-in-law. I am originally from Rajapalayam. However, it was my mother-in-law, Sundari, who transformed Panagudi Thalavaipuram into my second maternal home. During Pongal and Diwali, she would collect money from my father-in-law for purchasing clothes, entrust it to me (the eldest daughter-in-law), make a list, allocate funds for each person, and function just like a finance minister. She possessed the maturity to simply accept things without any criticism about the color being wrong or the budget being exceeded. She was an expert at delegating work to everyone in the house according to their respective capacities.

After completing the chores, she would play the traditional dice game (Thaayam) with family members just like a young girl, enthusiastically dropping the dice with loud exclamations, shining as the hero of the game. She would warmly welcome the postman who came searching for our house in the hot sun by offering him buttermilk or refreshing drinks. During festive days, she would send us all to the movies while staying back to cook meals for us. Occasionally, yielding to her son's insistence, she would join us for a movie. Many people like Parvathi, Thayammal, and Sellathayi would eagerly volunteer to assist her. When my father-in-law brought half a kilo of halwa from Tirunelveli, she would delightfully distribute it to everyone, much like Jesus sharing the bread. Being blessed with her—the very embodiment of generosity and kindness—as a mother-in-law is a great fortune. Within our family circle, being introduced as "Sundari's son and daughter-in-law" instills a sense of immense pride. How can I not praise her, simply because I haven't been able to become exactly like her?

- Velammal Muthukumar,
  Panagudi, Tirunelveli.`,
            content: "என் வாழ்க்கையில் மறக்க முடியாத பெண்மணி என் மாமியார் என்றால் பலரும் ஆச்சரியப்படக்கூடும். நான் ராஜபாளையத்தைச் சேர்ந்தவள். என் இரண்டாவது தாய்வீடாக பணகுடி, தளவாய்புரத்தை மாற்றியவர் என் மாமியார் சுந்தரி. பொங்கல், தீபாவளிக்குத் துணி எடுக்க என் மாமனாரிடம் இருந்து பணத்தை வாங்கி, மூத்த மருமகளான என்னிடம் கொடுத்து, பட்டியல் போட்டு, ஆளாளுக்கு நிதி ஒதுக்கி ஒரு நிதி அமைச்சர்போலச் செயல்படுவார். நிறம் சரியில்லை, ஒதுக்கிய நிதிக்குள் முடிக்கவில்லை என்கிற விமர்சனம் ஏதுமின்றி அப்படியே ஏற்றுக்கொள்ளும் பக்குவம் உடையவர். வீட்டில் உள்ள அனைவருக்கும் அவரவர் சக்திக்கேற்ப வேலை பங்கீடு செய்வதில் நிபுணர்.\n\nவேலைகளை முடித்த பின்னர் குடும்ப உறுப்பினர்களோடு சேர்ந்து சிறுமி போல் தாயக்கட்டம் ஆடுவதோடு, விருத்தங்களாகப் போட்டுக் காய்களைக் கொத்தி ஆட்ட நாயகியாக ஜொலிப்பார். வெயிலில் வீடு தேடி வரும் தபால்காரருக்கு மோரோ நீராகாரமோ கொடுத்து உபசரிப்பார். விழாக்காலங்களில் எங்கள் எல்லாரையும் திரைப்படத்துக்கு அனுப்பிவிட்டு எங்களுக்கு உணவு சமைத்து வைப்பார். சிலநேரம் மகனின் வற்புறுத்தலுக்கு இணங்கி எங்களோடு படம் பார்க்க வருவார். அவருக்கு உதவ பார்வதி, தாயம்மாள், செல்லத்தாயி எனப் பலர் முன்வருவர். நெல்லைக்குச் சென்று மாமனார் வாங்கிவரும் அரை கிலோ அல்வாவை, ஏசு அப்பத்தைப் பங்கிட்டுக் கொடுத்தது போல எல்லாருக்கும் கொடுத்து மகிழ்வார். தாராளம், தயை இவற்றின் உருவமாகத் திகழ்ந்த அவரை மாமியாராகப் பெற்றது பெரும்பேறு. எங்கள் உறவினர் வட்டத்தில், 'சுந்தரி மகன் - மருமகள்' என அறிமுகம் ஆகும்போது பெருமிதம் உண்டாகும். அவரைப்போல ஆக முடியவில்லை என்பதற்காக அவரைச் சிலாகிக்காமல் இருக்க முடியுமா?\n\n- வேலம்மாள் முத்துக்குமார்,\nபணகுடி, திருநெல்வேலி."
          },
          { id: "a1", title: "கட்டுரை 1", date: "5 ஏப்ரல் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a2", title: "கட்டுரை 2", date: "12 ஏப்ரல் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a3", title: "கட்டுரை 3", date: "3 மே 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a4", title: "கட்டுரை 4", date: "18 மே 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a5", title: "கட்டுரை 5", date: "25 மே 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "cartoons",
        title: "கருத்துச் சித்திரங்கள்",
        items: [
          { id: "c1", title: "கருத்துச் சித்திரம் 1", date: "1 ஜூன் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "punch",
        title: "'பஞ்ச்'சோந்தி பராக்",
        items: [
          { id: "p1", title: "பஞ்ச்சோந்தி பராக் 1", date: "15 ஜூன் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "press-poems",
        title: "கவிதைகள்",
        items: [
          { id: "pp1", title: "கவிதை 1", date: "28 ஜூன் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
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
        id: "bharathi",
        title: "பாரதி இல்ல திறப்பு விழா",
        items: [
          { id: "b1", title: "பாரதி இல்ல திறப்பு விழா", date: "1 ஜூலை 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "letters",
        title: "கடிதங்கள்",
        items: [
          { id: "l1", title: "கடிதம் 1", date: "10 ஜூலை 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "l2", title: "கடிதம் 2", date: "20 ஜூலை 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
    ],
  },
  {
    id: "book-reviews",
    number: "7",
    title: "புத்தக விமர்சனங்கள்",
    icon: "📚",
    description: "அவரின் புத்தக விமர்சனங்கள்",
    items: [
      { id: "br1", title: "புத்தக விமர்சனம் 1", date: "5 ஆகஸ்ட் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "br2", title: "புத்தக விமர்சனம் 2", date: "15 ஆகஸ்ட் 2025", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
];
