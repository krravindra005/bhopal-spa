export interface SpaService {
  id: string;
  title: string;
  category: 'Bodywork & Muscle Relief' | 'Hydro & Thermal Therapy' | 'Vedic Healing Rituals' | 'Botanical Facial Care' | 'Sanctuary Packages';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: number;
  popular?: boolean;
  benefits: string[];
  steps: string[];
  idealFor: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sanctuary Spaces' | 'Therapies' | 'Hydrothermal' | 'Botanicals';
  imageUrl: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  author: string;
  locality: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  outcome: string;
}

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'nandini-deep-recovery',
    title: 'Nandini Kinetic Muscle Reset & Deep Tissue',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Precision targeted trigger point therapy addressing dense sub-layer tightness, postural compression, and physical fatigue.',
    fullDesc: 'A rigorous anatomical treatment designed for tired musculature and chronic postural compression. Our master practitioners combine sustained deep-finger friction, myofascial stripping, and organic wild arnica infusions to disperse dense lactic deposits, re-align connective muscle bands, and restore effortless physical movement.',
    duration: '60 / 90 Mins',
    price: 2699,
    popular: true,
    benefits: [
      'Decompresses deeply seated spinal and shoulder tension',
      'Accelerates muscular recovery from endurance work and travel',
      'Stimulates micro-capillary circulation and fascia flexibility',
      'Restores balanced skeletal alignment and posture'
    ],
    steps: [
      'In-depth muscular posture and pain-point assessment',
      'Thermal steam compress to soften superficial muscle fascia',
      'Deliberate forearm and elbow deep-tissue compression',
      'Passive assisted mobility stretching and cool herbal mist'
    ],
    idealFor: 'Busy executives, athletes, and individuals suffering from persistent neck, shoulder, or lower back stiffness.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'oceanic-basalt-stone',
    title: 'Warm Basalt Stone & Geothermal Therapy',
    category: 'Hydro & Thermal Therapy',
    shortDesc: 'Mineral-rich volcanic basalt stones smoothed by ocean waves, heated to therapeutic perfection to melt stress away.',
    fullDesc: 'Experience the profound restorative power of geothermal healing. Polished black volcanic stones are immersed in sea-mineral waters and heated to an exact therapeutic warmth. As they glide harmoniously along key energy meridians, the sustained thermal energy penetrates deep beneath tense muscles, inducing parasympathetic calm.',
    duration: '75 Mins',
    price: 3199,
    popular: true,
    benefits: [
      'Expands constricted blood vessels, dramatically improving circulation',
      'Eases stubborn joint ache and muscular fatigue without harsh pressure',
      'Sinks brainwave activity into deep meditative theta relaxation',
      'Fosters effortless detoxification via soothing thermal sweat'
    ],
    steps: [
      'Aromatherapeutic foot cleansing ritual in warm sea salt water',
      'Application of organic cold-pressed jojoba and eucalyptus oils',
      'Long rhythmic heated basalt sweeps across back, calves, and shoulders',
      'Stationary alignment stone placement over spinal chakras'
    ],
    idealFor: 'Those who carry accumulated daily fatigue and desire deep muscular release without intense manual pressure.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vedic-shirodhara-abhyanga',
    title: 'Authentic Shirodhara & Golden Abhyanga',
    category: 'Vedic Healing Rituals',
    shortDesc: 'A rhythmic flow of warm medicated herbal oils poured over the brow accompanied by synchronized dosha bodywork.',
    fullDesc: 'One of the world’s most venerated restorative therapies. Beginning with a synchronized full-body Abhyanga using customized classical Ayurvedic medicated oils, the ritual culminates in Shirodhara: a continuous, peaceful pendulum flow of warm infused oil gently poured across the third-eye chakra to dissolve mental anxiety and reset the nervous system.',
    duration: '80 Mins',
    price: 3499,
    popular: true,
    benefits: [
      'Quiets overstimulated mental chatter and persistent anxiety',
      'Clinically demonstrated to enhance sleep depth and reduce insomnia',
      'Nourishes cranial nerves and fortifies hair root vitality',
      'Harmonizes internal dosha energies and releases emotional strain'
    ],
    steps: [
      'Ayurvedic constitution (Dosha) and pulse check',
      'Synchronistic full-body warm herbal oil Abhyanga massage',
      'Continuous warm Shirodhara stream across the brow for 35 minutes',
      'Gentle scalp massage and restorative saffron-cardamom infusion'
    ],
    idealFor: 'Anyone enduring persistent mental exhaustion, sleep disruptions, intense screen fatigue, or burnout.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ayurvedic-potli-massage',
    title: 'Vedic Potli Herbal Poultice Compression',
    category: 'Vedic Healing Rituals',
    shortDesc: 'Warm steamed linen poultices filled with therapeutic herbs and mineral salts applied with rhythmic compression.',
    fullDesc: 'An authentic Ayurvedic therapy particularly beneficial for inflammatory stiffness and deep muscular knots. Medicated muslin pouches (Kizhi / Potli) packed with dried medicinal roots, rock salt, and camphor are steeped in hot therapeutic oils and gently tapped along tense muscle junctions to dissipate pain and draw out toxins.',
    duration: '75 Mins',
    price: 2999,
    benefits: [
      'Significantly alleviates chronic joint stiffness and muscular soreness',
      'Assists blood micro-circulation and drains stagnant inflammatory fluids',
      'Promotes cellular sweating and deep physiological detox',
      'Induces profound systemic physical and nervous system calm'
    ],
    steps: [
      'Preliminary warm medicated oil application over back and limbs',
      'Rhythmic patting and gliding with heated Ayurvedic herb potlis',
      'Focused trigger-point kneading on lumbar spine and scapular areas',
      'Warm herbal towel compress and calming turmeric tisane'
    ],
    idealFor: 'Individuals with frozen shoulders, back spasms, arthritis discomfort, or sports fatigue.',
    imageUrl: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'aquatic-aromatherapy-flow',
    title: 'Botanical Eucalyptus & Lavender Aromatherapy',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Feather-light flowing Swedish effleurage enriched with pure single-origin lavender, vetiver, and eucalyptus botanicals.',
    fullDesc: 'Surrender sensory overload in a peaceful, whisper-quiet treatment suite. Hand-selected therapeutic grade essential oils of French lavender, soothing blue chamomile, and earth-grounding vetiver are warmed and massaged with rhythmic, wave-like strokes that lull the nervous system into effortless renewal.',
    duration: '60 Mins',
    price: 2399,
    benefits: [
      'Relieves psychological stress and emotional fatigue instantly',
      'Deeply conditions dry, climate-exposed epidermal layers',
      'Lowers resting cortisol levels and calms rapid pulse',
      'Encourages prolonged, uninterrupted night rest'
    ],
    steps: [
      'Personal olfactory essential oil selection session',
      'Gentle rhythmic effleurage and gentle muscle kneading',
      'Aromatherapeutic warm chest and temple towel compress',
      'Soothing cranial acupressure release'
    ],
    idealFor: 'Those seeking gentle, comforting holistic touch to decompress and recharge mental clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'balinese-palm-harmony',
    title: 'Balinese Deep Harmony & Acupressure',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Ancient Indonesian full-body ritual uniting deliberate palm pressure, skin rolling, and aromatic frangipani oils.',
    fullDesc: 'Rooted in traditional Indonesian healing, this treatment utilizes therapist palm heels, gentle thumb kneading, and rhythmic skin-rolling strokes. Enhanced by warm organic coconut and frangipani oils, it unlocks congested meridian pathways and produces deep physical serenity from scalp to toes.',
    duration: '75 Mins',
    price: 2799,
    benefits: [
      'Dissolves dense knots without causing acute muscular trauma',
      'Enhances oxygen supply and micro-vascular blood flow',
      'Releases blocked emotional tension and restores physical vitality',
      'Imparts a deep, tranquil state of meditative mindfulness'
    ],
    steps: [
      'Floral foot bath and lemongrass sea-salt exfoliation',
      'Full-body palm pressure-point deactivation along spine and legs',
      'Gentle skin rolling and rhythmic myofascial stretching',
      'Aromatic warm compress and ginger-lemongrass infusion'
    ],
    idealFor: 'Anyone feeling physically drained, seeking medium-firm holistic bodywork with rich cultural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'swedish-stress-recovery',
    title: 'Swedish Stress Recovery & Neck Decompression',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Classic European rhythmic bodywork dedicated to erasing postural desk strain, trapezius stiffness, and fatigue.',
    fullDesc: 'A scientifically validated modality combining long gliding strokes (effleurage), muscle kneading (petrissage), and gentle friction along the trapezius, cervical spine, and lumbar band. Designed specifically for individuals whose work entails prolonged sitting or computer usage.',
    duration: '60 Mins',
    price: 2499,
    popular: true,
    benefits: [
      'Rapidly releases desk-worker tension across neck and shoulders',
      'Improves venous blood return to the heart and eases fatigue',
      'Boosts flexibility and passive range of motion in spinal joints',
      'Provides immediate emotional relaxation and tension release'
    ],
    steps: [
      'Cervical range-of-motion and spinal curvature check',
      'Warm lavender and sweet almond oil back application',
      'Systematic effleurage, petrissage, and shoulder blade release',
      'Cooling camphor and herbal neck compress'
    ],
    idealFor: 'Professionals with desk fatigue, tech-neck soreness, or shoulder stiffness.',
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'thai-assisted-yoga-stretch',
    title: 'Traditional Thai Assisted Stretch & Mobility',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Dynamic mat bodywork combining acupressure along Sen energy lines with assisted yoga-based passive stretches.',
    fullDesc: 'Conducted on a comfortable firm sanctuary floor mat with comfortable loose clothing provided. The therapist uses thumbs, palms, elbows, and gentle body weight to apply rhythmic pressure along the body’s Sen lines, followed by guided passive yogic stretches that lengthen tight hamstrings, hips, and spine.',
    duration: '75 Mins',
    price: 2899,
    benefits: [
      'Significantly increases spinal range of motion and joint flexibility',
      'Eliminates chronic lower back compression and hip flexor tightness',
      'Balances physical energy flows without requiring greasy oils',
      'Leaves the recipient feeling elongated, centered, and physically light'
    ],
    steps: [
      'Joint mobility check and loose cotton therapy attire fitting',
      'Rhythmic foot and palm compression ascending through legs',
      'Assisted cobra, spinal twist, and hamstring lengthening stretches',
      'Cranial traction, temple acupressure, and herbal jasmine tisane'
    ],
    idealFor: 'Athletes, yogis, runners, or anyone desiring deep stretch and joint opening without heavy oil application.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cellular-collagen-facial',
    title: 'Cellular Botanical Peptide & Jade Facial',
    category: 'Botanical Facial Care',
    shortDesc: 'Advanced bio-marine nutrients, hyaluronic hydration, chilled jade drainage, and firming contouring massage.',
    fullDesc: 'Elevate your natural skin vitality through bioactive sea minerals and botanical peptides. This bespoke multi-stage facial incorporates deep gentle pore steam, cold ultrasonic lymphatic drainage, and a nutrient-dense marine collagen hydration veil that smooths micro-creases and imparts a visible, dewy radiance.',
    duration: '60 Mins',
    price: 2899,
    benefits: [
      'Dramatically rehydrates dull, sun-parched facial tissue',
      'Refines pore visibility and calms redness or sensitivity',
      'Depuffs eye contours and defines jawline structure',
      'Leaves the skin visibly supple, luminous, and plump'
    ],
    steps: [
      'Skin diagnostic consultation & double gentle botanical cleansing',
      'Bio-enzyme gentle exfoliation with micro-fine steam',
      'Sculpting facial and neck massage with cooling jade stones',
      'Application of marine collagen biocellulose mask and UV defense'
    ],
    idealFor: 'Urban dwellers seeking immediate skin brightening, lifted contours, and deep cellular hydration.',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'thalasso-sea-salt-cocoon',
    title: 'Earth & Sea Mineral Polish & Warm Clay Cocoon',
    category: 'Hydro & Thermal Therapy',
    shortDesc: 'Fine Mediterranean sea salts and mineral clay polish that gently buffs dead cells followed by a detoxifying warm body wrap.',
    fullDesc: 'Drawing inspiration from classical coastal thalassotherapy, this intensive body ritual blends fine sea minerals with cold-pressed almond and peppermint oils to polish away dry keratin. Your body is then enveloped in a warm thermal volcanic clay wrap that draws out deep-set toxins before a rainfall shower rinse.',
    duration: '75 Mins',
    price: 3299,
    benefits: [
      'Removes surface roughness to reveal baby-soft, silky skin',
      'Assists whole-body lymphatic drainage and fluid elimination',
      'Replenishes essential trace minerals through the skin barrier',
      'Fosters a feeling of lightness and invigorated energy'
    ],
    steps: [
      'Full-body dry skin brushing to stimulate lymphatic channels',
      'Gentle exfoliating Mediterranean mineral salt polish',
      'Warm private ensuite rainfall shower rinse',
      'Detoxifying thermal clay wrap and velvet moisture lock'
    ],
    idealFor: 'Individuals feeling sluggish, congested, or experiencing dry, uneven whole-body skin texture.',
    imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nandini-couples-haven',
    title: 'Nandini Sanctuary Couples Haven',
    category: 'Sanctuary Packages',
    shortDesc: 'Synchronized dual massage in our premier VIP suite featuring private hydro-tub, floral foot bath, and artisan refreshments.',
    fullDesc: 'An exclusive, uninterrupted sanctuary designed for couples, friends, or companions. Enjoy dual side-by-side bespoke 75-minute therapeutic massages within our climate-controlled private executive suite. Completed with a welcoming floral foot soak, soothing acoustic ambiance, and artisan herbal tisanes.',
    duration: '90 Mins',
    price: 5899,
    popular: true,
    benefits: [
      'Complete private suite seclusion with personal en-suite shower',
      'Synchronized massage therapies tailored to each guest’s preference',
      'Deep shared relaxation away from external interruptions',
      'Includes celebratory herbal refreshments and fruit delicacy platter'
    ],
    steps: [
      'Aromatic mineral foot soak ritual with rose and mint oils',
      'Side-by-side 75-minute tailored massage (Deep Tissue or Aromatherapy)',
      'Subtle scalp tension release and acupressure therapy',
      'Private suite lounge time with signature infused herbal tea'
    ],
    idealFor: 'Anniversaries, milestone celebrations, or partners seeking a shared sanctuary of renewal.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'oriental-reflex-pathway',
    title: 'Acupressure Foot & Lower Leg Pathway',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Targeted pressure therapy along foot reflex zones and calf meridians to release heavy, tired legs.',
    fullDesc: 'Our feet endure immense gravitational load every day. This intensive therapy utilizes a warm camphor and mineral soak, followed by focused thumb compression and smooth kansa bronze wand massage along plantar nerve endings mapped to whole-body organ systems.',
    duration: '45 Mins',
    price: 1799,
    benefits: [
      'Banishes foot ache, heel tightness, and calf swelling',
      'Triggers reflex pathways that stimulate metabolic balance',
      'Provides rapid whole-body relaxation in a compact timeframe',
      'Restores spring and lightness to every step'
    ],
    steps: [
      'Warm eucalyptus and Epsom mineral salt soak',
      'Plantar fascia stretching and lower leg effleurage',
      'Systematic pressure-point stimulation with smooth Kansa wand',
      'Cooling mint cream finish with warm towel wrap'
    ],
    idealFor: 'Travelers, active walkers, or anyone on their feet all day seeking quick restorative relief.',
    imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'spinal-alignment-kinesiology',
    title: 'Targeted Spinal Alignment & Trigger Point Bodywork',
    category: 'Bodywork & Muscle Relief',
    shortDesc: 'Precision neuromuscular manipulation focused on cervical, thoracic, and lumbar tension release.',
    fullDesc: 'Crafted for acute postural tightness, this intensive therapy isolates chronic trigger points across the paravertebral muscles, scapula, and gluteal attachments. Incorporating hot botanical compresses and rhythmic thumbs-and-forearms friction to unlock restricted spinal mobility.',
    duration: '60 Mins',
    price: 2999,
    benefits: [
      'Decompresses cramped spinal vertebrae and relieves sciatic nerve impingement',
      'Deactivates stubborn myofascial knots and postural spasms',
      'Restores balanced pelvic and scapular symmetry',
      'Promotes immediate freedom of movement and physical lightness'
    ],
    steps: [
      'Anatomical spinal palpation and range-of-motion assessment',
      'Deep thermal compress application along spinal erectors',
      'Targeted trigger-point ischemic compression and myofascial release',
      'Gentle passive spinal traction and cooling herbal liniment finish'
    ],
    idealFor: 'Individuals enduring stubborn back spasms, computer-neck curvature, or sciatica tightness.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hydro-botanical-soak-ritual',
    title: 'Aromatic Hydro-Mineral Soak & Botanical Milk Bath',
    category: 'Hydro & Thermal Therapy',
    shortDesc: 'A private submerged thermal soak infused with Epsom magnesium flakes, raw coconut milk, and jasmine botanicals.',
    fullDesc: 'Immerse your body in an opulent private hydrotherapy bath filled with therapeutic Himalayan and Dead Sea salts, pure unrefined coconut milk, and organic jasmine essential oils. The mineralized water relieves muscular buoyancy tension while botanical lipids intensely condition every inch of your skin.',
    duration: '45 Mins',
    price: 1999,
    benefits: [
      'Eliminates gravitational weight and hydrostatic stress on joints',
      'Magnesium absorption promotes deep somatic muscular relaxation',
      'Softens and hydrates dry skin with natural plant emollients',
      'Lulls the nervous system into effortless serene tranquility'
    ],
    steps: [
      'Private suite hydro-tub preparation with warm mineralized waters',
      'Infusion of pure organic coconut milk, magnesium, and jasmine oils',
      'Uninterrupted 30-minute tranquil therapeutic soak with chilled herbal tisane',
      'Warm rainfall shower rinse and velvet botanical moisturization'
    ],
    idealFor: 'Those desiring gentle full-body hydrotherapy to soothe sore joints and nourish dry skin.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ng-1',
    title: 'Nandini Spa Tranquility Lounge',
    category: 'Sanctuary Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Calming soft cream and sand lounge space featuring botanical decor and warm ambient lighting.'
  },
  {
    id: 'ng-2',
    title: 'Heated Volcanic Basalt Stones',
    category: 'Therapies',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Carefully smoothed basalt stones heated in aromatic botanical mineral baths.'
  },
  {
    id: 'ng-3',
    title: 'Traditional Vedic Shirodhara Stream',
    category: 'Therapies',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Continuous medicated oil stream poured with steady rhythm over the third eye for deep mental calm.'
  },
  {
    id: 'ng-4',
    title: 'Vedic Potli Herbal Poultice Ritual',
    category: 'Therapies',
    imageUrl: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steamed medicated herbal poultices prepared freshly with Himalayan rock salt and restorative herbs.'
  },
  {
    id: 'ng-5',
    title: 'Deep Muscular Release & Myofascial Bodywork',
    category: 'Therapies',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Master kinesiologist applying focused anatomical pressure along spinal and trapezius tension zones.'
  },
  {
    id: 'ng-6',
    title: 'Private Couples Sanctuary Suite',
    category: 'Sanctuary Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    caption: 'Secluded VIP suite with side-by-side heated tables and private rain shower facilities.'
  },
  {
    id: 'ng-7',
    title: 'Botanical Peptide Facial Suite',
    category: 'Botanicals',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    caption: 'Private serene facial treatment suite with cooling jade drainage and pure organic plant serums.'
  },
  {
    id: 'ng-8',
    title: 'Cold-Pressed Botanical Essential Oils',
    category: 'Botanicals',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steam-distilled single-origin essential oils free from parabens, synthetic fragrances, or fillers.'
  },
  {
    id: 'ng-9',
    title: 'Acupressure Foot Reflexology Pathway',
    category: 'Therapies',
    imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=80',
    caption: 'Focused reflexology and Kansa bronze wand work addressing plantar pressure points and leg vitality.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'nt-1',
    author: 'Sunil Rao',
    locality: 'Arera Colony, Bhopal',
    treatment: 'Kinetic Muscle Reset & Deep Tissue',
    rating: 5,
    date: 'October 2026',
    quote: 'The level of professionalism at Nandini Spa is exceptional. As someone dealing with stiff lower back muscles from long desk hours, their master therapist worked through the knots with genuine anatomical precision.',
    outcome: 'Chronic postural back tightness resolved'
  },
  {
    id: 'nt-2',
    author: 'Meera Deshmukh',
    locality: 'Shyamla Hills, Bhopal',
    treatment: 'Authentic Shirodhara & Golden Abhyanga',
    rating: 5,
    date: 'September 2026',
    quote: 'Stepping into Nandini Spa feels like entering an entirely different world of peace. The continuous warm oil stream during Shirodhara quieted my anxiety and gave me the best night of deep sleep in years.',
    outcome: 'Restored deep sleep and mental calm'
  },
  {
    id: 'nt-3',
    author: 'Dev & Natasha Malhotra',
    locality: 'Kolar Road, Bhopal',
    treatment: 'Nandini Sanctuary Couples Haven',
    rating: 5,
    date: 'August 2026',
    quote: 'We spent our wedding anniversary at Nandini Spa’s VIP couples suite. The attention to detail, private rainfall showers, and warm earthy ambiance were world-class. Highly recommended!',
    outcome: 'A memorable, deeply restorative anniversary'
  }
];

export const NANDINI_PILLARS = [
  {
    title: 'Anatomical Precision & Master Touch',
    description: 'Every session is conducted by certified practitioners with comprehensive knowledge of musculoskeletal kinesiology and pressure meridians.',
    iconName: 'Award'
  },
  {
    title: 'Pure Wildcrafted Botanicals',
    description: 'All carrier oils, restorative compresses, and skin formulas are organically sourced, cold-pressed, and 100% free from synthetic fillers.',
    iconName: 'Droplets'
  },
  {
    title: 'Pristine Hygiene & Suite Privacy',
    description: 'Fresh autoclaved linens for every guest, private ensuite rainfall showers, sound-damped walls, and absolute modesty standards.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Tailored Mindfulness Experience',
    description: 'From customized pressure intensity to olfactory essential oil matching, every element of your appointment is curated for your wellbeing.',
    iconName: 'HeartHandshake'
  }
];

export const PRANAYA_PILLARS = NANDINI_PILLARS;
export const AURANEST_PILLARS = NANDINI_PILLARS;
