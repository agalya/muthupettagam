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
          { id: "hv3", title: "மணிவிழா வாழ்த்து - [நாயகன்: மீ.ஆறுமுகம், நாயகி: ஆ.நீலா]", 
            date: "7 ஜுலை 1996", 
            image: "/vazhthu-3.jpg",
            audioFile: "", 
            englishTranslation: "Will be uploaded soon...", 
            content: "விரைவில் பதிவேற்றப்படும்..." 
          },
          { id: "hv4", title: "வாழ்த்து மடல் 4", date: "22 ஏப்ரல் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv5", title: "வாழ்த்து மடல் 5", date: "10 மே 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv2", title: "வாழ்த்து மடல் 2", date: "18 பிப்ரவரி 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
            audioFile: "", 
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
            title: "வீர பத்திர பிள்ளை அண்ணாச்சி", 
            date: "11 ஜனவரி 2026",
            audioFile: "", 
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
பணகுடி.` },
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
          { id: "fv1", title: "வாழ்த்து மடல் 1", date: "15 ஆகஸ்ட் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fv2", title: "வாழ்த்து மடல் 2", date: "3 செப்டம்பர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "for-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          { id: "fi1", title: "இரங்கல் கவிதை 1", date: "1 அக்டோபர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi2", title: "இரங்கல் கவிதை 2", date: "20 அக்டோபர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi3", title: "இரங்கல் கவிதை 3", date: "5 நவம்பர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi4", title: "இரங்கல் கவிதை 4", date: "25 நவம்பர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi5", title: "இரங்கல் கவிதை 5", date: "10 டிசம்பர் 2024", audioFile: "", englishTranslation: "Will be uploaded soon...", content: "விரைவில் பதிவேற்றப்படும்..." },
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
