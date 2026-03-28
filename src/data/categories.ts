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
          { id: "hv1", title: "வாழ்த்து மடல் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv2", title: "வாழ்த்து மடல் 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv3", title: "வாழ்த்து மடல் 3", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv4", title: "வாழ்த்து மடல் 4", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv5", title: "வாழ்த்து மடல் 5", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "his-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          {
            id: "hi-poem-1",
            title: "தந்தை சொல்மிக்க மந்திரமில்லை",
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
          { id: "hi1", title: "இரங்கல் கவிதை 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hi2", title: "இரங்கல் கவிதை 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
          { id: "fv1", title: "வாழ்த்து மடல் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fv2", title: "வாழ்த்து மடல் 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "for-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          { id: "fi1", title: "இரங்கல் கவிதை 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi2", title: "இரங்கல் கவிதை 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi3", title: "இரங்கல் கவிதை 3", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi4", title: "இரங்கல் கவிதை 4", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi5", title: "இரங்கல் கவிதை 5", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi6", title: "இரங்கல் கவிதை 6", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
      { id: "s1", title: "வெற்றி பேச்சு 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s2", title: "வெற்றி பேச்சு 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s3", title: "வெற்றி பேச்சு 3", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s4", title: "வெற்றி பேச்சு 4", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
  {
    id: "haiku",
    number: "4",
    title: "பூக்கோல ஹைக்கூக்கள்",
    icon: "🌸",
    description: "அவரின் ஹைக்கூ கவிதைகள்",
    items: [
      { id: "h1", title: "ஹைக்கூ 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h2", title: "ஹைக்கூ 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h3", title: "ஹைக்கூ 3", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
            image: "/article-1.jpeg",
            audioFile: "/article-1-audio.m4a",
            englishTranslation: `Many might be surprised if I say the most unforgettable woman in my life is my mother-in-law. I am originally from Rajapalayam. However, it was my mother-in-law, Sundari, who transformed Panagudi Thalavaipuram into my second maternal home. During Pongal and Diwali, she would collect money from my father-in-law for purchasing clothes, entrust it to me (the eldest daughter-in-law), make a list, allocate funds for each person, and function just like a finance minister. She possessed the maturity to simply accept things without any criticism about the color being wrong or the budget being exceeded. She was an expert at delegating work to everyone in the house according to their respective capacities.

After completing the chores, she would play the traditional dice game (Thaayam) with family members just like a young girl, enthusiastically dropping the dice with loud exclamations, shining as the hero of the game. She would warmly welcome the postman who came searching for our house in the hot sun by offering him buttermilk or refreshing drinks. During festive days, she would send us all to the movies while staying back to cook meals for us. Occasionally, yielding to her son's insistence, she would join us for a movie. Many people like Parvathi, Thayammal, and Sellathayi would eagerly volunteer to assist her. When my father-in-law brought half a kilo of halwa from Tirunelveli, she would delightfully distribute it to everyone, much like Jesus sharing the bread. Being blessed with her—the very embodiment of generosity and kindness—as a mother-in-law is a great fortune. Within our family circle, being introduced as "Sundari's son and daughter-in-law" instills a sense of immense pride. How can I not praise her, simply because I haven't been able to become exactly like her?

- Velammal Muthukumar,
  Panagudi, Tirunelveli.`,
            content: "என் வாழ்க்கையில் மறக்க முடியாத பெண்மணி என் மாமியார் என்றால் பலரும் ஆச்சரியப்படக்கூடும். நான் ராஜபாளையத்தைச் சேர்ந்தவள். என் இரண்டாவது தாய்வீடாக பணகுடி, தளவாய்புரத்தை மாற்றியவர் என் மாமியார் சுந்தரி. பொங்கல், தீபாவளிக்குத் துணி எடுக்க என் மாமனாரிடம் இருந்து பணத்தை வாங்கி, மூத்த மருமகளான என்னிடம் கொடுத்து, பட்டியல் போட்டு, ஆளாளுக்கு நிதி ஒதுக்கி ஒரு நிதி அமைச்சர்போலச் செயல்படுவார். நிறம் சரியில்லை, ஒதுக்கிய நிதிக்குள் முடிக்கவில்லை என்கிற விமர்சனம் ஏதுமின்றி அப்படியே ஏற்றுக்கொள்ளும் பக்குவம் உடையவர். வீட்டில் உள்ள அனைவருக்கும் அவரவர் சக்திக்கேற்ப வேலை பங்கீடு செய்வதில் நிபுணர்.\n\nவேலைகளை முடித்த பின்னர் குடும்ப உறுப்பினர்களோடு சேர்ந்து சிறுமி போல் தாயக்கட்டம் ஆடுவதோடு, விருத்தங்களாகப் போட்டுக் காய்களைக் கொத்தி ஆட்ட நாயகியாக ஜொலிப்பார். வெயிலில் வீடு தேடி வரும் தபால்காரருக்கு மோரோ நீராகாரமோ கொடுத்து உபசரிப்பார். விழாக்காலங்களில் எங்கள் எல்லாரையும் திரைப்படத்துக்கு அனுப்பிவிட்டு எங்களுக்கு உணவு சமைத்து வைப்பார். சிலநேரம் மகனின் வற்புறுத்தலுக்கு இணங்கி எங்களோடு படம் பார்க்க வருவார். அவருக்கு உதவ பார்வதி, தாயம்மாள், செல்லத்தாயி எனப் பலர் முன்வருவர். நெல்லைக்குச் சென்று மாமனார் வாங்கிவரும் அரை கிலோ அல்வாவை, ஏசு அப்பத்தைப் பங்கிட்டுக் கொடுத்தது போல எல்லாருக்கும் கொடுத்து மகிழ்வார். தாராளம், தயை இவற்றின் உருவமாகத் திகழ்ந்த அவரை மாமியாராகப் பெற்றது பெரும்பேறு. எங்கள் உறவினர் வட்டத்தில், 'சுந்தரி மகன் - மருமகள்' என அறிமுகம் ஆகும்போது பெருமிதம் உண்டாகும். அவரைப்போல ஆக முடியவில்லை என்பதற்காக அவரைச் சிலாகிக்காமல் இருக்க முடியுமா?\n\n- வேலம்மாள் முத்துக்குமார்,\nபணகுடி, திருநெல்வேலி."
          },
          { id: "a1", title: "கட்டுரை 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a2", title: "கட்டுரை 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a3", title: "கட்டுரை 3", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a4", title: "கட்டுரை 4", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a5", title: "கட்டுரை 5", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "cartoons",
        title: "கருத்துச் சித்திரங்கள்",
        items: [
          { id: "c1", title: "கருத்துச் சித்திரம் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "punch",
        title: "'பஞ்ச்'சோந்தி பராக்",
        items: [
          { id: "p1", title: "பஞ்ச்சோந்தி பராக் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "press-poems",
        title: "கவிதைகள்",
        items: [
          { id: "pp1", title: "கவிதை 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
          { id: "b1", title: "பாரதி இல்ல திறப்பு விழா", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "letters",
        title: "கடிதங்கள்",
        items: [
          { id: "l1", title: "கடிதம் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "l2", title: "கடிதம் 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
      { id: "br1", title: "புத்தக விமர்சனம் 1", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "br2", title: "புத்தக விமர்சனம் 2", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
];
