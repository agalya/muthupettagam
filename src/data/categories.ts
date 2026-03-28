export interface WritingItem {
  id: string;
  title: string;
  content?: string;
  date?: string;
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
    description: "அவர் எழுதிய அழகான கவிதைகள்",
    subCategories: [
      {
        id: "his-vaazhthu",
        title: "வாழ்த்து மடல்கள்",
        items: [
          { id: "hv1", title: "வாழ்த்து மடல் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv2", title: "வாழ்த்து மடல் 2", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv3", title: "வாழ்த்து மடல் 3", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv4", title: "வாழ்த்து மடல் 4", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hv5", title: "வாழ்த்து மடல் 5", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "his-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          { id: "hi1", title: "இரங்கல் கவிதை 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "hi2", title: "இரங்கல் கவிதை 2", content: "விரைவில் பதிவேற்றப்படும்..." },
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
          { id: "fv1", title: "வாழ்த்து மடல் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fv2", title: "வாழ்த்து மடல் 2", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "for-irangal",
        title: "இரங்கல் கவிதைகள்",
        items: [
          { id: "fi1", title: "இரங்கல் கவிதை 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi2", title: "இரங்கல் கவிதை 2", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi3", title: "இரங்கல் கவிதை 3", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi4", title: "இரங்கல் கவிதை 4", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi5", title: "இரங்கல் கவிதை 5", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "fi6", title: "இரங்கல் கவிதை 6", content: "விரைவில் பதிவேற்றப்படும்..." },
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
      { id: "s1", title: "வெற்றி பேச்சு 1", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s2", title: "வெற்றி பேச்சு 2", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s3", title: "வெற்றி பேச்சு 3", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "s4", title: "வெற்றி பேச்சு 4", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
  {
    id: "haiku",
    number: "4",
    title: "பூக்கோல ஹைக்கூக்கள்",
    icon: "🌸",
    description: "அவரின் ஹைக்கூ கவிதைகள்",
    items: [
      { id: "h1", title: "ஹைக்கூ 1", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h2", title: "ஹைக்கூ 2", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "h3", title: "ஹைக்கூ 3", content: "விரைவில் பதிவேற்றப்படும்..." },
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
        id: "cartoons",
        title: "கருத்துச் சித்திரங்கள்",
        items: [
          { id: "c1", title: "கருத்துச் சித்திரம் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "punch",
        title: "'பஞ்ச்'சோந்தி பராக்",
        items: [
          { id: "p1", title: "பஞ்ச்சோந்தி பராக் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "articles",
        title: "கட்டுரைகள்",
        items: [
          { id: "a1", title: "கட்டுரை 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a2", title: "கட்டுரை 2", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a3", title: "கட்டுரை 3", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a4", title: "கட்டுரை 4", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "a5", title: "கட்டுரை 5", content: "விரைவில் பதிவேற்றப்படும்..." },
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
          { id: "b1", title: "பாரதி இல்ல திறப்பு விழா", content: "விரைவில் பதிவேற்றப்படும்..." },
        ],
      },
      {
        id: "letters",
        title: "கடிதங்கள்",
        items: [
          { id: "l1", title: "கடிதம் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
          { id: "l2", title: "கடிதம் 2", content: "விரைவில் பதிவேற்றப்படும்..." },
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
      { id: "br1", title: "புத்தக விமர்சனம் 1", content: "விரைவில் பதிவேற்றப்படும்..." },
      { id: "br2", title: "புத்தக விமர்சனம் 2", content: "விரைவில் பதிவேற்றப்படும்..." },
    ],
  },
];
