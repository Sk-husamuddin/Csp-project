import { Disease, HealthTip, VaccineItem, FAQItem, SymptomOption } from '../types';

export const SYMPTOMS_LIST: SymptomOption[] = [
  // General
  { id: 'fever', name: 'High Fever / Body Temperature > 103°F', nameTe: 'తీవ్రమైన జ్వరం / ఉష్ణోగ్రత > 103°F', category: 'General' },
  { id: 'weakness', name: 'General Weakness & Lethargy', nameTe: 'సాధారణ బలహీనత మరియు నీరసం', category: 'General' },
  { id: 'weight_loss', name: 'Rapid Weight Loss & Muscle Wasting', nameTe: 'వేగంగా బరువు తగ్గడం మరియు కృశించడం', category: 'General' },
  { id: 'loss_of_appetite', name: 'Loss of Appetite (Off Feed)', nameTe: 'మేత మేయకపోవడం (ఆకలి లేకపోవడం)', category: 'General' },
  { id: 'chills', name: 'Shivering & Cold Ears/Extremities', nameTe: 'వణుకు మరియు చల్లని చెవులు/కాళ్లు', category: 'General' },

  // Digestive
  { id: 'diarrhea', name: 'Watery / Bloody Diarrhea (Loose Dung)', nameTe: 'నీళ్ల విరేచనాలు / రక్త విరేచనాలు', category: 'Digestive' },
  { id: 'bloat', name: 'Severe Swelling on Left Side of Flank (Bloat)', nameTe: 'కడుపు ఉబ్బరం (ఎడమ వైపు ఉబ్బడం)', category: 'Digestive' },
  { id: 'vomiting', name: 'Regurgitation / Frothing from Mouth', nameTe: 'నోటి నుండి నురగు కక్కడం', category: 'Digestive' },
  { id: 'constipation', name: 'Hard Dung / Inability to Defecate', nameTe: 'గట్టి పేడ / మలబద్ధకం', category: 'Digestive' },
  { id: 'rumen_stasis', name: 'Absence of Rumination (Chewing Cud)', nameTe: 'నెమరు వేయకపోవడం (Rumination stop)', category: 'Digestive' },

  // Respiratory
  { id: 'cough', name: 'Persistent Coughing / Grunting', nameTe: 'నిరంతర దగ్గు / గురక శబ్దం', category: 'Respiratory' },
  { id: 'nasal_discharge', name: 'Thick Mucus / Nasal Discharge', nameTe: 'ముక్కు నుండి చిక్కటి ద్రవం కారడం', category: 'Respiratory' },
  { id: 'breathing_difficulty', name: 'Heavy / Labored Breathing & Panting', nameTe: 'కష్టంగా శ్వాస తీసుకోవడం / రొప్పుడం', category: 'Respiratory' },

  // Skin & Udder
  { id: 'swollen_udder', name: 'Swollen, Hard, Hot Udder / Teats', nameTe: 'పొదుగు వాపు, గట్టిపడటం, వేడిగా ఉండటం', category: 'Skin & Udder' },
  { id: 'milk_reduction', name: 'Sudden Drop in Milk Production', nameTe: 'పాల దిగుబడి హఠాత్తుగా తగ్గడం', category: 'Skin & Udder' },
  { id: 'milk_clots', name: 'Blood, Clots or Watery Milk', nameTe: 'పాలలో రక్తం, గడ్డలు లేదా నీళ్లలా రావడం', category: 'Skin & Udder' },
  { id: 'skin_lesions', name: 'Nodules, Bumps, or Blisters on Skin', nameTe: 'చర్మంపై గెంతులు, పొక్కులు లేదా బొబ్బలు', category: 'Skin & Udder' },
  { id: 'mouth_blisters', name: 'Blisters / Sores in Mouth & Tongue', nameTe: 'నోటిలో మరియు నాలుకపై బొబ్బలు/పుండ్లు', category: 'Skin & Udder' },
  { id: 'foot_sores', name: 'Blisters or Cracks Between Hooves', nameTe: 'గిట్టల మధ్య పుండ్లు లేదా బొబ్బలు', category: 'Skin & Udder' },
  { id: 'ringworm', name: 'Circular Hairless Crusty Patches', nameTe: 'చర్మంపై గుండ్రటి బొబ్బలు / మచ్చలు', category: 'Skin & Udder' },
  { id: 'ticks', name: 'Heavy Tick or Fly Infestation', nameTe: 'గోమార్లు / పిడుదుల తీవ్రత (Ticks)', category: 'Skin & Udder' },

  // Reproductive
  { id: 'abortion', name: 'Premature Abortion / Infertility', nameTe: 'ఈత తప్పడం / చెడిపోవడం / ఈత సమస్యలు', category: 'Reproductive' },
  { id: 'discharge', name: 'Foul-smelling Vaginal Discharge', nameTe: 'దుర్వాసనతో కూడిన యోని స్రావాలు', category: 'Reproductive' },

  // Locomotor & Eye
  { id: 'limping', name: 'Limping / Lameness / Inability to Stand', nameTe: 'కుంటితనం / నడవలేకపోవడం / నిలబడలేకపోవడం', category: 'Locomotor & Eye' },
  { id: 'eye_infection', name: 'Cloudy / Red Eyes or Excessive Tears', nameTe: 'కళ్ళు ఎర్రబడటం / కంటి నుండి నీరు కారడం', category: 'Locomotor & Eye' },
  { id: 'salivation', name: 'Excessive Stringy Salivation (Roping)', nameTe: 'నోటి నుండి తీగలుగా లాలాజలం కారడం', category: 'Locomotor & Eye' },
  { id: 'aggression', name: 'Extreme Restlessness or Abnormal Aggression', nameTe: 'అతిగా అలజడి / అసాధారణమైన ఆవేశం', category: 'Locomotor & Eye' },
];

export const INITIAL_DISEASES: Disease[] = [
  // VIRAL DISEASES
  {
    id: 'fmd',
    name: 'Foot and Mouth Disease',
    nameTe: 'నోరు-కాళ్ల వ్యాధి',
    targetAnimal: 'Both',
    category: 'Viral Diseases',
    description: 'A highly contagious viral disease affecting cattle and buffaloes, causing fever and painful blisters in the mouth and between hooves.',
    descriptionTe: 'పశువులలో వ్యాపించే అత్యంత తీవ్రమైన వైరస్ వ్యాధి. నోటిలో, నాలుకపై మరియు గిట్టల మధ్య బొబ్బలు, పుండ్లు ఏర్పడతాయి.',
    causes: 'Aphthovirus transmitted through air, direct contact, saliva, or contaminated feed and water.',
    causesTe: 'ఆఫ్తోవైరస్ క్రిమి ద్వారా గాలి, లాలాజలం, మరియు కలుషితమైన మేత నీటి ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'High fever (104°-106°F)',
      'Blisters and sores in mouth, tongue, and between hooves',
      'Excessive stringy profuse salivation',
      'Severe limping and lameness',
      'Sudden drop in milk yield'
    ],
    symptomsTe: [
      'తీవ్రమైన జ్వరం (104°-106°F)',
      'నోరు, నాలుక మరియు గిట్టల మధ్య పుండ్లు/బొబ్బలు',
      'నోటి నుండి తీగలుగా లాలాజలం కారడం',
      'కాలి నెప్పి, కుంటితనం',
      'పాల దిగుబడి హఠాత్తుగా తగ్గడం'
    ],
    prevention: 'Regular FMD vaccination every 6 months, quarantine new animals, and disinfect sheds with 4% sodium carbonate.',
    preventionTe: 'ప్రతి 6 నెలలకొకసారి ఎఫ్‌ఎమ్‌డి టీకా వేయడం, క్రొత్త పశువులను వేరుగా ఉంచడం, కొట్టాన్ని శుభ్రంగా ఉంచడం.',
    firstAid: 'Wash mouth with 1% Potassium Permanganate or Soda Bicarbonate solution. Apply antiseptic ointment on hoof sores. Provide soft ragi or rice gruel.',
    firstAidTe: 'నోటిని 1% పొటాషియం పర్మాంగనేట్ నీటితో కడగాలి. గిట్టల పుండ్లపై వేపనూనె లేదా యాంటీసెప్టిక్ రాయాలి. మెత్తని గంజి అందించాలి.',
    whenToContactVet: 'Contact veterinarian immediately if fever exceeds 104°F, animal refuses to stand, or mouth lesions bleed severely.',
    whenToContactVetTe: 'జ్వరం 104°F దాటినా, పశువు నిలబడలేకపోయినా లేదా పుండ్ల నుండి రక్తం కారుతుంటే వెంటనే పశువైద్యుడిని సంప్రదించాలి.',
    severity: 'Severe',
    treatment: 'Symptomatic: Wash mouth with 1% Potassium Permanganate. Apply antiseptics/fly repellents on hoof lesions.',
    vaccination: 'FMD Vaccine every 6 months.'
  },
  {
    id: 'lsd',
    name: 'Lumpy Skin Disease',
    nameTe: 'లంపీ స్కిన్ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Viral Diseases',
    description: 'Viral pox disease causing firm skin nodules, fever, leg swelling, and reduced milk yield in cows and buffaloes.',
    descriptionTe: 'చర్మంపై గెంతులు (బొబ్బలు) ఏర్పడే వైరస్ వ్యాధి. జ్వరం, కాళ్ల వాపు, పాల దిగుబడి తగ్గడం ముఖ్య లక్షణాలు.',
    causes: 'Capripoxvirus transmitted by biting flies, mosquitoes, ticks, and direct contact.',
    causesTe: 'కాప్రిపాక్స్ వైరస్ దోమలు, ఈగలు, గోమార్లు మరియు కలుషిత నీటి ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'Firm round skin nodules (2-5 cm) all over body',
      'High fever and loss of appetite',
      'Swelling of legs and brisket area',
      'Watery eyes and nasal discharge',
      'Sudden drop in milk yield'
    ],
    symptomsTe: [
      'శరీరం అంతటా గుండ్రటి చర్మ గెంతులు (బొబ్బలు)',
      'తీవ్రమైన జ్వరం మరియు ఆకలి లేకపోవడం',
      'కాళ్లు మరియు రొమ్ము భాగంలో వాపు',
      'కళ్ల నుండి నీరు, ముక్కు నుండి ద్రవం కారడం',
      'పాల ఉత్పత్తి బాగా తగ్గిపోవడం'
    ],
    prevention: 'Annual Goat Pox / LSD vaccination, vector control using mosquito nets and fly repellents.',
    preventionTe: 'ఏటా గోట్ పాక్స్ / ఎల్‌ఎస్‌డి టీకా వేయడం, దోమలు, ఈగలు రాకుండా స్ప్రే చేయడం.',
    firstAid: 'Isolate infected animal. Clean skin lesions with antiseptic solution. Apply neem oil and turmeric paste on burst nodules. Give oral electrolyte fluid.',
    firstAidTe: 'పశువును వేరు చేయాలి. పొక్కులపై పసుపు, వేపనూనె రాయాలి. ఓఆర్‌ఎస్ లేదా మంచి తాగునీరు అందించాలి.',
    whenToContactVet: 'Contact vet promptly for anti-inflammatory injections and to prevent secondary bacterial skin infections.',
    whenToContactVetTe: 'చర్మ పుండ్లు ఎక్కువైనా, శ్వాస తీసుకోవడం కష్టమైనా పశువైద్యుడి సహాయం పొందాలి.',
    severity: 'Severe',
    treatment: 'Anti-inflammatory drugs, antiseptics on burst nodules, herbal neem-turmeric paste.',
    vaccination: 'Goat Pox / LSD Vaccine annually.'
  },
  {
    id: 'rabies',
    name: 'Rabies',
    nameTe: 'రేబీస్',
    targetAnimal: 'Both',
    category: 'Viral Diseases',
    description: 'Fatal viral infection of the nervous system transmitted by bites from rabid dogs or wild animals.',
    descriptionTe: 'పిచ్చి కుక్కలు లేదా అడవి జంతువుల కాటు ద్వారా వ్యాపించే నరాల వ్యాధి. ఇది నయం కాని తీవ్రమైన వ్యాధి.',
    causes: 'Lyssavirus transmitted via infected saliva entering bite wounds.',
    causesTe: 'లిస్సావైరస్ కలిగిన లాలాజలం కుక్క కాటు లేదా గాయాల ద్వారా రక్తంలోకి ప్రవేశించడం.',
    symptoms: [
      'Abnormal aggression or extreme depression',
      'Altered bellowing voice and choking sound',
      'Excessive stringy salivation',
      'Inability to swallow water or feed',
      'Progressive paralysis leading to death'
    ],
    symptomsTe: [
      'అసాధారణ ప్రవర్తన లేదా ఆవేశం',
      'అరుస్తూ ఉండటం, బొంగురు గొంతు',
      'నోటి నుండి తీగలుగా లాలాజలం కారడం',
      'నీరు లేదా మేత మింగలేకపోవడం',
      'కాళ్ల పక్షవాతం మరియు మరణం'
    ],
    prevention: 'Vaccinate herd dogs against rabies. Post-exposure rabies vaccination immediately after animal bites.',
    preventionTe: 'కుక్క కాటుకు గురైన వెంటనే పశువుకు యాంటీ-రేబీస్ టీకా వేయించాలి.',
    firstAid: 'Wash bite wound thoroughly under running water with soap for 15 minutes. Apply iodine tincture. Do NOT touch saliva directly with bare hands.',
    firstAidTe: 'గాయాన్ని సబ్బు మరియు నీటితో 15 నిమిషాల పాటు బాగా కడగాలి. చేతులతో లాలాజలాన్ని నేరుగా తాకకూడదు.',
    whenToContactVet: 'Contact vet IMMEDIATELY within hours of any suspected dog or wild animal bite for post-exposure vaccines.',
    whenToContactVetTe: 'పిచ్చి కుక్క కరిచిన వెంటనే కొన్ని గంటల్లోనే పశువైద్యుడి వద్దకు తీసుకెళ్లాలి.',
    severity: 'Fatal if untreated',
    treatment: 'No treatment once clinical signs appear. Post-exposure vaccination protocol required immediately after bite.',
    vaccination: 'Post-exposure Anti-Rabies Vaccine (Days 0, 3, 7, 14, 28).'
  },

  // BACTERIAL DISEASES
  {
    id: 'hs',
    name: 'Hemorrhagic Septicemia',
    nameTe: 'రక్తస్రావ సెప్టిసీమియా',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Fast-acting acute bacterial disease (Gonta Vaapu) causing high fever and painful throat swelling, common during monsoons.',
    descriptionTe: 'వర్షాకాలంలో కనిపించే తీవ్రమైన గొంతు వాపు వ్యాధి. గొంతు వద్ద పెద్ద వాపు, శ్వాస తిరోగమనం సంభవిస్తుంది.',
    causes: 'Pasteurella multocida bacteria triggered by stress, sudden weather shifts, and high humidity.',
    causesTe: 'పాశ్చరెల్లా మల్టోసిడా బ్యాక్టీరియా వాతావరణ మార్పులు మరియు తేమ ద్వారా సంభవిస్తుంది.',
    symptoms: [
      'Sudden high fever (106°F)',
      'Severe painful swelling around throat and neck',
      'Labored grunting breath and open-mouth panting',
      'Tongue protrusion and severe salivation',
      'Rapid death if untreated within 24 hours'
    ],
    symptomsTe: [
      'తీవ్రమైన జ్వరం (106°F)',
      'గొంతు మరియు రొమ్ము భాగంలో వేడి నీటి వాపు',
      'గురక శబ్దంతో శ్వాస తీసుకోవడం, రొప్పుడం',
      'నాలుక బయటకు రావడం, లాలాజలం కారడం',
      'చికిత్స చేయకపోతే 24 గంటల్లో మరణం'
    ],
    prevention: 'Pre-monsoon annual HS vaccination in May-June. Keep barn dry and stress-free.',
    preventionTe: 'మే-జూన్ మాసాల్లో వర్షాకాలానికి ముందే ప్రతి సంవత్సరం హెచ్.ఎస్. (గొంతు వాపు) టీకా వేయించాలి.',
    firstAid: 'Keep animal in cool shade. Apply cold compresses on neck swelling. Do not force-feed liquids if breathing is obstructed.',
    firstAidTe: 'పశువును చల్లని ప్రదేశంలో ఉంచాలి. గొంతు వాపుపై చల్లని నీటి గుడ్డ పెట్టాలి. బలవంతంగా ద్రవాలు తాపవద్దు.',
    whenToContactVet: 'Immediate emergency veterinary attention required within 3-6 hours for antibiotic injections.',
    whenToContactVetTe: 'గొంతు వాపు లేదా గురక శబ్దం గమనించిన వెంటనే అత్యవసరంగా డాక్టర్‌ను పిలవాలి.',
    severity: 'Fatal if untreated',
    treatment: 'High doses of Sulfa drugs or Oxytetracycline injected intravenously early.',
    vaccination: 'Annual HS Vaccine before monsoon.'
  },
  {
    id: 'bq',
    name: 'Black Quarter / Blackleg',
    nameTe: 'బ్లాక్ క్వార్టర్ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Severe bacterial infection causing painful, gas-filled crackling swelling in heavy muscle areas like thighs and shoulders.',
    descriptionTe: 'పశువుల తొడలు, భుజాల వద్ద గాలి పూరిత వాపు (జబ్బ వాపు) వచ్చే తీవ్రమైన బ్యాక్టీరియా వ్యాధి.',
    causes: 'Clostridium chauvoei bacterial spores ingested from contaminated soil or grazing fields.',
    causesTe: 'క్లోస్ట్రిడియం చౌవోయ్ బ్యాక్టీరియా బీజాంశాలు నేల లేదా మేత ద్వారా పశువు శరీరంలోకి వెళ్లడం.',
    symptoms: [
      'High fever (106°F)',
      'Severe limping and lameness in hind legs',
      'Painful crackling (crepitant) swelling over thigh or shoulder',
      'Swelling becomes cold, painless, and dark red',
      'Severe depression and refusal to eat'
    ],
    symptomsTe: [
      'తీవ్రమైన జ్వరం (106°F)',
      'తీవ్రంగా కుంటడం, కాళ్ల నెప్పి',
      'జబ్బలు/తొడల వద్ద నొక్కితే మట్ మట్ అని శబ్దం వచ్చే వాపు',
      'వాపు చల్లబడి నల్లగా మారడం',
      'ఆకలి లేకపోవడం, నీరసం'
    ],
    prevention: 'Annual pre-monsoon BQ vaccination for all young cattle aged 6 months to 2 years.',
    preventionTe: 'వర్షాకాలానికి ముందు 6 నెలల నుండి 2 సంవత్సరాల వయస్సు గల దూడలకు జబ్బ వాపు (BQ) టీకా వేయించాలి.',
    firstAid: 'Keep animal resting in soft bedding. Do not rub or squeeze muscle swelling to avoid spreading toxins.',
    firstAidTe: 'పశువును మెత్తటి ప్రదేశంలో పడుకోబెట్టాలి. జబ్బ వాపును ఒత్తడం లేదా రుద్దడం చేయకూడదు.',
    whenToContactVet: 'Contact vet immediately at first sign of lameness with muscle swelling for early Penicillin therapy.',
    whenToContactVetTe: 'జబ్బ వద్ద వాపు లేదా కుంటితనం గమనించిన వెంటనే పశువైద్యుడి సహాయం పొందాలి.',
    severity: 'Fatal if untreated',
    treatment: 'High doses of Penicillin or Ampicillin in early stages.',
    vaccination: 'Annual BQ Vaccine for young stock.'
  },
  {
    id: 'brucellosis',
    name: 'Brucellosis',
    nameTe: 'బ్రూసెల్లోసిస్',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Infectious reproductive bacterial disease causing late-term abortions (6-8th month) and retained placenta in cows and buffaloes.',
    descriptionTe: 'పశువులలో ఈత తప్పడం (చివరి నెలలలో ఈత చెడిపోవడం), మాయ పడకపోవడం జరిగే అంటువ్యాధి.',
    causes: 'Brucella abortus bacteria spread via aborted fetus fluid, discharge, and unpasteurized milk.',
    causesTe: 'బ్రూసెల్లా అబోర్టస్ బ్యాక్టీరియా చెడిపోయిన ఈత ద్రవాలు మరియు కలుషిత పాల ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'Abortion in 6th-8th month of pregnancy',
      'Retention of placenta after abortion',
      'Foul-smelling vaginal discharge',
      'Swollen joints and hygroma',
      'Infertility and repeated breeding failure'
    ],
    symptomsTe: [
      'చూడి 6-8 నెలల సమయంలో ఈత చెడిపోవడం (అబార్షన్)',
      'మాయ వెంటనే పడకపోవడం',
      'యోని నుండి దుర్వాసన స్రావాలు',
      'కీళ్ల వాపు మరియు నీరు చేరడం',
      'మరలా చూడి నిలవకపోవడం'
    ],
    prevention: 'Vaccinate female calves (4-8 months age) ONCE with Brucella S19 vaccine. Test herd regularly.',
    preventionTe: '4-8 నెలల ఆడ దూడలకు బ్రూసెల్లా ఎస్19 టీకా వేయించాలి. క్రమం తప్పకుండా పరీక్షలు చేయించాలి.',
    firstAid: 'Wear gloves when handling aborted fetus or placenta. Burn or bury aborted tissue with lime plaster. Disinfect shed with bleaching powder.',
    firstAidTe: 'చేతులకు గ్లౌజులు వేసుకుని మాత్రమే మైలు తీయాలి. చెడిపోయిన పిండాన్ని సున్నంతో పాతిపెట్టాలి.',
    whenToContactVet: 'Contact vet immediately after any abortion for blood testing and placenta removal procedures.',
    whenToContactVetTe: 'చూడి చెడిపోయిన వెంటనే లేదా మాయ పడకపోతే పశువైద్యుడిని సంప్రదించాలి.',
    severity: 'Severe',
    treatment: 'No specific cure. Isolate infected cattle; manage secondary uterine infections.',
    vaccination: 'Brucella Strain 19 Vaccine (Single lifetime dose for female calves aged 4-8 months).'
  },
  {
    id: 'mastitis',
    name: 'Mastitis',
    nameTe: 'పొదుగు వాపు',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Inflammation of udder tissues caused by bacterial infection, leading to curdled or bloody milk and udder swelling.',
    descriptionTe: 'పొదుగు గట్టిపడి, వాచి, పాలలో రక్తం లేదా గడ్డలు వచ్చే ప్రమాదకర వ్యాధి (పొదుగు వాపు).',
    causes: 'Bacterial entry (Staphylococcus, Streptococcus, E. coli) into teat canal due to dirty floors or unhygienic milking.',
    causesTe: 'అపరిశుభ్రమైన కొట్టం లేదా పాలు పితికే పద్ధతి సరిగ్గా లేకపోవడం వల్ల బ్యాక్టీరియా పొదుగులోకి ప్రవేశించడం.',
    symptoms: [
      'Swollen, hard, hot, and painful udder',
      'Sudden reduction in milk yield',
      'Milk with clots, flakes, or watery bloody appearance',
      'Fever and loss of appetite in acute cases',
      'Fibrosis and teat blockage if untreated'
    ],
    symptomsTe: [
      'పొదుగు వేడిగా, గట్టిగా వాచడం, నొప్పులు',
      'పాల దిగుబడి హఠాత్తుగా తగ్గడం',
      'పాలలో గడ్డలు, పూసలు లేదా నీళ్లలా రావడం',
      'జ్వరం మరియు ఆకలి లేకపోవడం',
      'పొదుగు భాగం పూర్తిగా దెబ్బతినడం'
    ],
    prevention: 'Full-hand milking technique, teat dipping with 0.5% iodine before/after milking, keep farm floors clean and dry.',
    preventionTe: 'పాలు పితికే ముందు మరియు తరువాత పొదుగును క్లీన్ చేయడం, డ్రైగా ఉంచడం, పొదుగు ముచ్చెలను డిప్ చేయడం.',
    firstAid: 'Frequently milk out affected quarter manually into a container. Apply ice packs for acute hot swelling. Keep udder dry.',
    firstAidTe: 'జబ్బు చేసిన పొదుగు నుండి పాలను తరచుగా పితికి బయట పోయాలి. వేడి వాపుపై ఐస్ ప్యాక్ పెట్టాలి.',
    whenToContactVet: 'Contact vet quickly for intramammary antibiotic infusions and anti-inflammatory medications.',
    whenToContactVetTe: 'పాలలో తేడా కనిపించిన వెంటనే పశువైద్యుడికి చూపించి యాంటీబయాటిక్స్ వాడాలి.',
    severity: 'Severe',
    treatment: 'Intramammary antibiotic tubes and systemic injectable antibiotics as prescribed by vet.',
    vaccination: 'Maintain strict milking sanitation; autogenous vaccines in select herds.'
  },
  {
    id: 'anthrax',
    name: 'Anthrax',
    nameTe: 'ఆంత్రాక్స్',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Deadly zoonotic bacterial infection that causes sudden high fever and rapid death with dark non-clotting blood from orifices.',
    descriptionTe: 'మనుషులకు కూడా వ్యాపించే అతి ప్రమాదకర వ్యాధి. పశువులు హఠాత్తుగా చనిపోవడం, ముక్కు, నోటి నుండి రక్తం కారడం.',
    causes: 'Bacillus anthracis spores persisting in soil for decades, ingested while grazing.',
    causesTe: 'నేలలో అనేక ఏళ్లు ఉండే బాసిల్లస్ ఆంత్రాసిస్ బీజాంశాలు పశువులు మేత మేసేటప్పుడు శరీరంలోకి వెళ్లడం.',
    symptoms: [
      'Sudden high fever and muscle tremors',
      'Severe respiratory distress',
      'Sudden death within hours',
      'Dark tarry non-clotting blood from nose, mouth, and anus',
      'Rapid bloating of carcass'
    ],
    symptomsTe: [
      'హఠాత్తుగా తీవ్రమైన జ్వరం',
      'శ్వాస ఆడకపోవడం',
      'కొద్ది గంటల్లోనే చనిపోవడం',
      'ముక్కు, నోరు, పాయువు నుండి నల్లటి రక్తం కారడం',
      'శవం త్వరగా ఉబ్బిపోవడం'
    ],
    prevention: 'Annual pre-monsoon Anthrax spore vaccine in endemic zones. Never open carcass of suspected anthrax case.',
    preventionTe: 'ఆంత్రాక్స్ పీడిత ప్రాంతాల్లో ఏటా టీకా వేయించాలి. చనిపోయిన పశువును కోయకూడదు (పోస్ట్‌మార్టమ్ చేయరాదు).',
    firstAid: 'Do NOT open or cut the dead body. Isolate suspect live animals. Deeply bury carcass 6 feet deep covered in lime plaster.',
    firstAidTe: 'చనిపోయిన పశువును కోయకూడదు. 6 అడుగుల గోతి తవ్వి సున్నం చల్లి పాతిపెట్టాలి.',
    whenToContactVet: 'Immediately alert government veterinary officer upon noticing sudden animal deaths with oozing blood.',
    whenToContactVetTe: 'పశువు హఠాత్తుగా చనిపోయి రక్తం కారుతుంటే వెంటనే పశువైద్యునికి కబురు అందించాలి.',
    severity: 'Fatal if untreated',
    treatment: 'High doses of Penicillin if caught early. DO NOT autopsy carcass.',
    vaccination: 'Annual Anthrax Spore Vaccine in endemic regions.'
  },
  {
    id: 'tb',
    name: 'Bovine Tuberculosis',
    nameTe: 'పశువుల క్షయ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Chronic bacterial infection affecting lungs and lymph nodes, causing progressive weight loss and chronic coughing.',
    descriptionTe: 'పశువుల ఊపిరితిత్తులు మరియు శోషరస గ్రంథులను దెబ్బతీసే దీర్ఘకాలిక క్షయ వ్యాధి (టిబి).',
    causes: 'Mycobacterium bovis bacteria spread through respiratory droplets and unpasteurized milk.',
    causesTe: 'మైకోబ్యాక్టీరియం బోవిస్ క్రిమి ద్వారా గాలి, దగ్గు మరియు పాల ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'Chronic soft coughing',
      'Progressive weight loss and emaciation',
      'Fluctuating mild fever',
      'Swollen lymph nodes in neck',
      'Decreased milk yield'
    ],
    symptomsTe: [
      'నిరంతర దగ్గు',
      'పశువు దినదినమూ చిక్కిపోవడం (బరువు తగ్గడం)',
      'కొద్దిపాటి జ్వరం',
      'మెడ వద్ద బిళ్లల వాపు',
      'పాల దిగుబడి తగ్గిపోవడం'
    ],
    prevention: 'Regular Tuberculin skin testing of herd, culling positive cases, maintaining proper farm ventilation.',
    preventionTe: 'పశువులకు టిబి పరీక్షలు చేయించడం, మంచి గాలి, వెలుతురు ఉండేలా చూసుకోవడం.',
    firstAid: 'Separate coughing underweight cattle from healthy calves and milk cows. Provide nutritious green feed and mineral mixture.',
    firstAidTe: 'దగ్గుతున్న, చిక్కిపోయిన పశువును వేరుగా ఉంచాలి. పోషకాహార మేత మరియు మినరల్ మిశ్రమం అందించాలి.',
    whenToContactVet: 'Consult vet for Tuberculin testing if animal shows unexplained chronic weight loss and cough.',
    whenToContactVetTe: 'పశువు రోజురోజుకూ బరువు తగ్గి దగ్గుతుంటే పశువైద్యుడితో టిబి పరీక్ష చేయించాలి.',
    severity: 'Moderate',
    treatment: 'Cull or isolate positive animals under government veterinary supervision.',
    vaccination: 'No routine livestock vaccine available; test and control strategy.'
  },
  {
    id: 'johnes',
    name: 'Johne\'s Disease',
    nameTe: 'జోన్స్ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Chronic bacterial intestinal infection causing persistent watery diarrhea and severe muscle wasting in adult cattle.',
    descriptionTe: 'పశువుల పేగులను దెబ్బతీసే దీర్ఘకాలిక విరేచనాల వ్యాధి. పశువు బాగా కృశించిపోతుంది.',
    causes: 'Mycobacterium avium subspecies paratuberculosis (MAP) ingested during calfhood from infected manure or milk.',
    causesTe: 'పారాట్యూబర్క్యులోసిస్ బ్యాక్టీరియా కలుషిత పేడ మరియు పాల ద్వారా దూడల శరీరంలోకి చేరడం.',
    symptoms: [
      'Chronic watery diarrhea without straining',
      'Fluid swelling under lower jaw (bottle jaw)',
      'Severe progressive weight loss and muscle wasting',
      'Normal appetite initially despite emaciation',
      'Dry rough coat'
    ],
    symptomsTe: [
      'ఆగకుండా నీళ్ల విరేచనాలు కావడం',
      'గడ్డం కింద నీటి వాపు (బాటిల్ జా)',
      'శరీరం తీవ్రంగా కృశించడం',
      'తిన్నా లావు కాకపోవడం',
      'చర్మం పొడిగా మారడం'
    ],
    prevention: 'Raise calves in clean environments separate from adult manure. Test and segregate infected adult cattle.',
    preventionTe: 'దూడలను పెద్ద పశువుల పేడకు దూరంగా పెంచడం. వ్యాధి సోకిన పశువులను సకాలంలో గుర్తించడం.',
    firstAid: 'Provide electrolyte drinks and clean dry bedding. Separate infected animal to avoid pasture contamination.',
    firstAidTe: 'పశువుకు ఓఆర్‌ఎస్ నీరు ఇవ్వాలి. పేడ ద్వారా ఇతరులకు వ్యాపించకుండా వేరుగా ఉంచాలి.',
    whenToContactVet: 'Contact vet for Johnin testing or stool testing if continuous diarrhea persists despite deworming.',
    whenToContactVetTe: 'నులిపురుగుల మందు ఇచ్చినప్పటికీ విరేచనాలు తగ్గకపోతే డాక్టర్‌ను సంప్రదించాలి.',
    severity: 'Moderate',
    treatment: 'No curative treatment; test and segregate infected carriers.',
    vaccination: 'Johne\'s vaccine available in specific endemic regions.'
  },
  {
    id: 'foot_rot',
    name: 'Foot Rot',
    nameTe: 'కాలి కుళ్ళు',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Painful bacterial infection of feet leading to severe lameness, swelling between toes, and foul odor from hooves.',
    descriptionTe: 'గిట్టల మధ్య బురద, తడి వల్ల కలిగే బ్యాక్టీరియా సంక్రమణ (కాలి కుళ్ళు). తీవ్రమైన నెప్పి మరియు దుర్వాసన.',
    causes: 'Fusobacterium necrophorum entering injuries caused by wet, muddy, or stony ground.',
    causesTe: 'వర్షాకాలంలో బురద, తడి ప్రదేశాల్లో తిరగడం వల్ల గిట్టల మధ్య బ్యాక్టీరియా చేరడం.',
    symptoms: [
      'Severe lameness and reluctance to walk',
      'Swelling between hooves and coronet band',
      'Foul-smelling discharge from interdigital space',
      'Fever and sudden milk drop',
      'Hoof pain and heat'
    ],
    symptomsTe: [
      'నడవలేక కుంటడం, కాళ్లు లాగడం',
      'గిట్టల మధ్య ఎర్రటి వాపు',
      'దుర్వాసనతో కూడిన రసి/సీము కారడం',
      'జ్వరం మరియు పాల ఉత్పత్తి తగ్గడం',
      'గిట్టలు వేడిగా ఉండటం'
    ],
    prevention: 'Keep standing area dry and clean. Pass cattle through 5% Copper Sulfate footbaths weekly during monsoon.',
    preventionTe: 'పశువుల పాకలను తడి లేకుంటే పొడిగా ఉంచడం. వర్షాకాలంలో కాపర్ సల్ఫేట్ నీటిలో కాళ్లు కడగడం.',
    firstAid: 'Wash affected foot thoroughly with clean water and antiseptic (povidone-iodine). Keep animal on clean dry floor.',
    firstAidTe: 'గిట్టను శుభ్రమైన నీటితో కడిగి పసుపు/యాంటీసెప్టిక్ రాయాలి. పొడి ప్రదేశంలో కట్టేయాలి.',
    whenToContactVet: 'Contact vet for systemic parenteral antibiotic treatment and wound dressing if lameness persists.',
    whenToContactVetTe: 'కాళ్ల వాపు తగ్గి కుంటితనం తగ్గకపోతే పశువైద్యుడి చేత యాంటీబయాటిక్స్ వేయించాలి.',
    severity: 'Moderate',
    treatment: 'Injectable antibiotics (Procaine Penicillin/Ceftiofur) and foot trimming.',
    vaccination: 'Foot rot vaccines in selected commercial herds.'
  },
  {
    id: 'pink_eye',
    name: 'Pink Eye / Infectious Bovine Keratoconjunctivitis',
    nameTe: 'కంటి సంక్రమణ',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Highly contagious bacterial eye infection causing redness, tearing, cloudiness, and temporary blindness.',
    descriptionTe: 'కళ్లు ఎర్రబడి, నీరు కారుతూ, కంటిపాపపై తెల్లటి మచ్చ వచ్చే అంటువ్యాధి (కంటి జబ్బు).',
    causes: 'Moraxella bovis bacteria spread by face flies, dust, and direct eye contact.',
    causesTe: 'మోరాక్సెల్లా బోవిస్ బ్యాక్టీరియా ఈగలు, ధూళి మరియు వెలుతురు ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'Excessive tearing (lacrimation)',
      'Squinting in bright sunlight',
      'Redness around eyelids',
      'White or cloudy spot on cornea',
      'Temporary blindness in severe cases'
    ],
    symptomsTe: [
      'కళ్ల నుండి విపరీతంగా నీరు కారడం',
      'వెలుతురును చూడలేకపోవడం, కళ్లు మూసుకోవడం',
      'కన్ను ఎర్రబడటం',
      'కంటిపాపపై తెల్లటి మచ్చ లేదా పూత',
      'తాత్కాలికంగా చూపు మందగించడం'
    ],
    prevention: 'Control face flies with fly traps/repellents. Provide shade during bright sunny days.',
    preventionTe: 'ఈగలు వాలకుండా స్ప్రే చేయడం. తీవ్రమైన ఎండలో పశువులను నీడలో ఉంచడం.',
    firstAid: 'Keep animal in shaded stall away from direct sunlight. Clean around eyes with boric acid water or sterile saline.',
    firstAidTe: 'పశువును చీకటి నీడలో ఉంచాలి. బోరిక్ యాసిడ్ నీటితో కళ్లను మెల్లగా శుభ్రం చేయాలి.',
    whenToContactVet: 'Consult vet for antibiotic eye ointments/drops to prevent permanent corneal ulceration.',
    whenToContactVetTe: 'కంటిపై మచ్చ పెద్దదైతే చూపు పోకుండా ఉండేందుకు తక్షణమే పశువైద్యుడిని సంప్రదించాలి.',
    severity: 'Mild',
    treatment: 'Subconjunctival antibiotic injections or eye ointments (Terramycin/Gentamicin).',
    vaccination: 'Moraxella vaccines in endemic areas.'
  },
  {
    id: 'pneumonia',
    name: 'Pneumonia',
    nameTe: 'న్యుమోనియా',
    targetAnimal: 'Both',
    category: 'Bacterial Diseases',
    description: 'Respiratory lung infection causing coughing, heavy breathing, nasal discharge, and fever in stressed or young cattle.',
    descriptionTe: 'ఊపిరితిత్తుల వాపు మరియు శ్వాసకోశ సంక్రమణ (న్యుమోనియా). దగ్గు, రొప్పుడం, ముక్కు నీరు కారడం.',
    causes: 'Pasteurella, Mycoplasma, or viral pathogens triggered by sudden cold weather, drafts, or long transportation.',
    causesTe: 'చలిగాలులు, తేమ, ప్రయాణ అలసట వల్ల ఊపిరితిత్తులలో క్రిములు చేరడం.',
    symptoms: [
      'Rapid labored breathing and panting',
      'Persistent moist cough and grunting',
      'Thick yellow nasal discharge',
      'High fever and depression',
      'Neck extension to breathe'
    ],
    symptomsTe: [
      'వేగంగా శ్వాస తీసుకోవడం, రొప్పుడం',
      'నిరంతరం దగ్గుడం, గురక శబ్దం',
      'ముక్కు నుండి పసుపుపచ్చటి ద్రవం కారడం',
      'తీవ్రమైన జ్వరం, నీరసం',
      'మెడ చాచి శ్వాస తీసుకోవడం'
    ],
    prevention: 'Provide warm, draft-free, well-ventilated housing. Protect young calves from cold rains and wind.',
    preventionTe: 'చలిగాలి తగలకుండా గుడిసె చుట్టూ గోనె సంచులు కట్టడం. గాలి, వెలుతురు సరిగా ఉండేలా చూడటం.',
    firstAid: 'Move animal to dry warm room. Provide warm water to drink and soft digestible feed. Keep bedding clean.',
    firstAidTe: 'పశువును వెచ్చని ప్రదేశంలో ఉంచాలి. గోరువెచ్చని నీరు, మెత్తని తిండి అందించాలి.',
    whenToContactVet: 'Contact vet promptly for course of broad-spectrum antibiotics and anti-inflammatory bronchodilators.',
    whenToContactVetTe: 'పశువు రొప్పుతూ దగ్గుతుంటే సకాలంలో పశువైద్యుడితో ఇంజెక్షన్లు ఇప్పించాలి.',
    severity: 'Moderate',
    treatment: 'Broad-spectrum antibiotics (Ceftiofur, Enrofloxacin) and anti-inflammatories.',
    vaccination: 'Respiratory polyvalent vaccines available.'
  },

  // PARASITIC DISEASES
  {
    id: 'theileriosis',
    name: 'Theileriosis',
    nameTe: 'థైలీరియోసిస్',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Tick-borne protozoan blood parasite disease especially severe in crossbred cows, causing high fever and swollen lymph nodes.',
    descriptionTe: 'గోమార్ల ద్వారా వచ్చే తీవ్రమైన రక్త పరాన్నజీవి వ్యాధి (సీమ తట్టు). అధిక జ్వరం, గజ్జల్లో వాపులు వస్తాయి.',
    causes: 'Theileria annulata protozoa transmitted by Hyalomma tick bites.',
    causesTe: 'హైయలోమా గోమార్ల కాటు ద్వారా థైలీరియా ప్రొటోజోవా రక్తం ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'High continuous fever (105°-107°F)',
      'Enlarged prescapular lymph nodes (swollen glands in neck/shoulder)',
      'Pale or yellowish gums and eyes',
      'Rapid breathing and weakness',
      'Heavy tick infestation'
    ],
    symptomsTe: [
      'నిరంతర తీవ్ర జ్వరం (105°-107°F)',
      'చెవులు, మెడ వద్ద ఉండే బిళ్లలు (గ్రంథులు) దబ్బల్లా వాచడం',
      'కళ్ళు, చిగుళ్ళు పసుపు/తెలుపు రంగులోకి మారడం',
      'శ్వాస వేగంగా తీసుకోవడం, నీరసం',
      'శరీరంపై ఎక్కువ గోమార్లు ఉండటం'
    ],
    prevention: 'Strict tick eradication using synthetic pyrethroids or Amitraz spray every 3 weeks. Vaccination for high-yield crossbred cows.',
    preventionTe: 'గోమార్లను అరికట్టడానికి క్రమం తప్పకుండా మందులు స్ప్రే చేయడం. క్రాస్‌బ్రీడ్ ఆవులకు థైలీరియోసిస్ టీకా వేయించడం.',
    firstAid: 'Keep animal in cool comfortable shade. Offer fresh green grass and liver tonics with iron.',
    firstAidTe: 'పశువును చల్లని ప్రదేశంలో ఉంచాలి. పచ్చగడ్డి మరియు లివర్ టానిక్, ఐరన్ సిరప్ అందించాలి.',
    whenToContactVet: 'Contact vet immediately for specific Buparvaquone injection which cures early cases.',
    whenToContactVetTe: 'గ్రంథుల వాపు, జ్వరం ఉన్నట్లు గమనిస్తే వెంటనే బ్యూపర్వాక్వోన్ ఇంజెక్షన్ కోసం డాక్టర్‌ను పిలవాలి.',
    severity: 'Severe',
    treatment: 'Single dose of Buparvaquone (2.5 mg/kg) injected intramuscularly.',
    vaccination: 'Rakshavac-T (Theileria annulata vaccine) for calves.'
  },
  {
    id: 'babesiosis',
    name: 'Babesiosis',
    nameTe: 'బాబీసియోసిస్',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Tick-transmitted blood parasite disease destroying red blood cells, causing coffee-colored urine, jaundice, and high fever.',
    descriptionTe: 'గోమార్ల కాటు వల్ల వచ్చే ఎర్ర మూత్ర వ్యాధి. రక్తం కణాలు విచ్ఛిన్నమై మూత్రం కాఫీ రంగులోకి మారుతుంది.',
    causes: 'Babesia bigemina protozoa transmitted by Rhipicephalus microplus ticks.',
    causesTe: 'బాబీసియా బిజెమినా క్రిమి గోమార్ల ద్వారా రక్తంలో చేరి ఎర్ర రక్తకణాలను నాశనం చేస్తుంది.',
    symptoms: [
      'High fever (106°F)',
      'Dark red to coffee-colored urine',
      'Pale or yellow gums and eyes (jaundice)',
      'Severe weakness and rapid pulse',
      'Loss of appetite and constipation'
    ],
    symptomsTe: [
      'తీవ్రమైన జ్వరం (106°F)',
      'కాఫీ లేదా రక్తం రంగులో మూత్రం పడటం',
      'కళ్ళు, చిగుళ్ళు పసుపు రంగులోకి మారడం (కామెర్లు)',
      'తీవ్రమైన బలహీనత, నడవలేకపోవడం',
      'ఆకలి లేకపోవడం, గట్టి పేడ'
    ],
    prevention: 'Regular application of anti-tick sprays (Deltamethrin/Flumethrin) on cattle body and barn walls.',
    preventionTe: 'పాకల గోడలపై మరియు పశువుల శరీరంపై గోమార్ల నివారణ మందులు స్ప్రే చేయడం.',
    firstAid: 'Keep animal resting in shade. Do not stress or drive the animal. Give jaggery water and electrolyte solutions.',
    firstAidTe: 'పశువును నడిపించకూడదు. నీడన విశ్రాంతి నివ్వాలి. బెల్లం నీరు, ఓఆర్‌ఎస్ ద్రవాలు తాగించాలి.',
    whenToContactVet: 'Urgent veterinary medical care required for Diminazene aceturate or Imidocarb injection.',
    whenToContactVetTe: 'ఎర్ర మూత్రం పడిన వెంటనే అత్యవసరంగా పశువైద్యుడితో బెరెనిల్ ఇంజెక్షన్ ఇప్పించాలి.',
    severity: 'Severe',
    treatment: 'Diminazene aceturate (Berenil) or Imidocarb dipropionate injections.',
    vaccination: 'Tick control management.'
  },
  {
    id: 'anaplasmosis',
    name: 'Anaplasmosis',
    nameTe: 'అనాప్లాస్మోసిస్',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Bacterial-like tick-borne blood infection causing severe anemia, jaundice, and fever WITHOUT red urine.',
    descriptionTe: 'గోమార్లు మరియు రక్తం పీల్చే ఈగల వల్ల వచ్చే రక్తహీనత వ్యాధి. మూత్రం ఎర్రబడకుండానే పసుపు కామెర్లు వస్తాయి.',
    causes: 'Anaplasma marginale transmitted by ticks, biting flies, or unsterilized needles.',
    causesTe: 'అనాప్లాస్మా మార్జినేల్ క్రిమి గోమార్లు, ఈగలు లేదా పరిశుభ్రం లేని సూదుల ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'High fever',
      'Severe pale or yellow gums/eyes (jaundice)',
      'Dry dark hard dung (constipation)',
      'Labored breathing on mild walking',
      'Aggression or confusion due to brain hypoxia'
    ],
    symptomsTe: [
      'జ్వరం',
      'కళ్ళు మరియు నోటి చిగుళ్ళు పసుపు రంగులోకి మారడం',
      'గట్టి నల్లటి పేడ పడటం (మలబద్ధకం)',
      'కొద్దిగా నడిచినా ఊపిరి ఆడకపోవడం',
      'కంగారు లేదా అసాధారణ అలజడి'
    ],
    prevention: 'Control ticks and biting flies. Use single-use disposable needles for herd vaccinations.',
    preventionTe: 'ఈగలు, గోమార్లు లేకుండా చూడటం. ఒక్కో పశువుకు విడివిడిగా కొత్త సూది (నీడిల్) వాడటం.',
    firstAid: 'Provide high-protein green fodder, electrolyte drinks, and liver tonics. Protect from hot sun.',
    firstAidTe: 'పశువును ఎండలో ఉంచవద్దు. కాలేయ ఉత్ప్రేరకాలు (లివర్ టానిక్) మరియు బలమైన మేత ఇవ్వాలి.',
    whenToContactVet: 'Consult vet for specific long-acting Oxytetracycline therapy and blood building supplements.',
    whenToContactVetTe: 'కామెర్లు మరియు బలహీనత ఉంటే పశువైద్యుడితో ఆక్సిటెట్రాసైక్లిన్ వైద్యం అందించాలి.',
    severity: 'Moderate',
    treatment: 'Injectable Oxytetracycline and blood tonics.',
    vaccination: 'Anaplasmosis vaccine where available.'
  },
  {
    id: 'tick_infestation',
    name: 'Tick Infestation',
    nameTe: 'పేను పురుగుల దాడి',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Heavy infestation of hard ticks sucking blood, causing stress, skin damage, weight loss, and transmitting deadly fevers.',
    descriptionTe: 'పశువుల చర్మంపై పిడుదులు, గోమార్లు చేరి రక్తం పీల్చడం. పశువు నీరసించి పాల ఉత్పత్తి పడిపోతుంది.',
    causes: 'Rhipicephalus, Hyalomma, and Boophilus ticks reproducing in barn cracks and pasture grass.',
    causesTe: 'కొట్టంలో పగుళ్లు, గడ్డి ద్వారా గోమార్లు, పిడుదులు పశువుల చర్మానికి అంటుకోవడం.',
    symptoms: [
      'Numerous visible ticks on udder, thighs, ears, and neck',
      'Restlessness and continuous tail swishing',
      'Pale gums due to blood loss (anemia)',
      'Reduced milk production',
      'Damage and wounds on skin'
    ],
    symptomsTe: [
      'పొదుగు, గజ్జలు, చెవుల వెనుక వందలాది గోమార్లు కనిపించడం',
      'పశువు అలజడిగా ఉండటం, తోక ఊపుకోవడం',
      'రక్తం తగ్గి కళ్ళు తెలుపు రంగులోకి మారడం',
      'పాల ఉత్పత్తి తగ్గిపోవడం',
      'చర్మంపై పుండ్లు పడటం'
    ],
    prevention: 'Spray Amitraz or Deltamethrin on cattle and coat barn walls with lime powder to seal egg cracks.',
    preventionTe: 'అమిట్రాజ్ లేదా డెల్టామెత్రిన్ మందులతో స్ప్రే చేయడం. కొట్టానికి సున్నం వేసి గోడల పగుళ్లు పూడ్చడం.',
    firstAid: 'Hand-pick large ticks carefully without leaving mouthparts in skin. Apply neem oil mixed with camphor on skin.',
    firstAidTe: 'గోమార్లను చేతితో తీసేసి వేపనూనెలో కర్పూరం కలిపి పశువు శరీరానికి రాయాలి.',
    whenToContactVet: 'Contact vet or para-vet for prescription pour-on solutions (Ivermectin) if infestation is severe.',
    whenToContactVetTe: 'గోమార్లు ఎక్కువగా ఉంటే ఐవర్మెక్టిన్ మందు కోసం పశువైద్యుడిని సంప్రదించాలి.',
    severity: 'Mild',
    treatment: 'Amitraz/Deltamethrin sprays or pour-on Ivermectin solutions.',
    vaccination: 'Anti-tick vaccines under trial.'
  },
  {
    id: 'coccidiosis',
    name: 'Coccidiosis',
    nameTe: 'కాక్సిడియోసిస్',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Intestinal protozoal parasite disease in calves (1-6 months old) causing dark bloody diarrhea, straining, and weakness.',
    descriptionTe: 'చిన్న దూడలలో (1-6 నెలల వయస్సు) కనిపించే రక్త విరేచనాల వ్యాధి. దూడ నీరసించిపోతుంది.',
    causes: 'Eimeria protozoal oocysts swallowed from mud, dirty drinking water, or dung-soiled bedding.',
    causesTe: 'కలుషితమైన తడి నేల, నీరు లేదా పేడ ఉన్న ప్రదేశాల్లో దూడలు మేసేటప్పుడు కడుపులోకి ఎమిరియా క్రిములు చేరడం.',
    symptoms: [
      'Dark reddish-brown or bloody diarrhea',
      'Straining while passing dung',
      'Soiled tail and hindquarters',
      'Rough hair coat and weight loss',
      'Dehydration and weakness'
    ],
    symptomsTe: [
      'రక్తం పడే నల్లటి/ఎర్రటి విరేచనాలు',
      'ముక్కుతూ ముక్కి ముక్కి పేడ వేయడం',
      'తోక మరియు కాళ్లు మురికిగా మారడం',
      'వెంట్రుకలు నిక్కబొడుచుకోవడం',
      'దూడ బాగా నీరసించిపోవడం'
    ],
    prevention: 'Keep calf pens dry, clean, and sunny. Elevate feed troughs above floor dung level.',
    preventionTe: 'దూడల గదులను నిరంతరం శుభ్రంగా, తడి లేకుండా పొడిగా ఉంచడం. మేత తొట్లను ఎత్తులో పెట్టడం.',
    firstAid: 'Isolate sick calf to dry warm straw bedding. Provide oral electrolyte rehydration solution (ORS) frequently.',
    firstAidTe: 'దూడను వెచ్చని పొడి గడ్డిపై పడుకోబెట్టాలి. తరచుగా ఓఆర్‌ఎస్ ద్రవం తాపాలి.',
    whenToContactVet: 'Contact vet promptly for anticoccidial medications (Amprolium or Sulfaquinoxaline).',
    whenToContactVetTe: 'రక్తం పడుతున్న విరేచనాలు తగ్గకపోతే వెంటనే పశువైద్యుడితో సల్ఫా మందులు వాడాలి.',
    severity: 'Moderate',
    treatment: 'Amprolium or Sulfaquinoxaline drench for 3-5 days.',
    vaccination: 'Proper pen hygiene is key preventive control.'
  },
  {
    id: 'fascioliasis',
    name: 'Fascioliasis / Liver Fluke Disease',
    nameTe: 'కాలేయ పురుగు వ్యాధి',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Internal liver parasite infection caused by flatworms in swampy grazing areas, causing anemia, bottle jaw, and digestive failure.',
    descriptionTe: 'పశువుల కాలేయంలో ఫ్లూక్ పురుగులు చేరే వ్యాధి. రక్తహీనత, గడ్డం కింద బాటిల్ జా వాపు ముఖ్య లక్షణం.',
    causes: 'Fasciola gigantica flukes ingested via water snails in stagnant water bodies and marshy pastures.',
    causesTe: 'చెరువులు, నిలిచిన తడి నీటి ప్రదేశాలలో నత్తల ద్వారా పెరిగే కాలేయ పురుగులు పశువు శరీరంలోకి వెళ్లడం.',
    symptoms: [
      'Progressive weight loss and emaciation',
      'Pale gums and eyes (severe anemia)',
      'Soft fluid swelling under lower jaw (bottle jaw)',
      'Chronic persistent diarrhea',
      'Reduced milk yield'
    ],
    symptomsTe: [
      'పశువు బాగా చిక్కిపోవడం',
      'కళ్ళు, చిగుళ్ళు తెలుపు రంగులోకి మారడం (రక్తహీనత)',
      'గడ్డం కింద సంచిలా నీటి వాపు (బాటిల్ జా)',
      'దీర్ఘకాలిక విరేచనాలు',
      'పాల ఉత్పత్తి పడిపోవడం'
    ],
    prevention: 'Avoid grazing cattle around stagnant swampy water. Treat water bodies or deworm periodically with Triclabendazole.',
    preventionTe: 'నిలిచి ఉన్న నీటి గుంటల దగ్గర పశువులను మేపకూడదు. క్రమం తప్పకుండా కాలేయ పురుగుల మందు తాగించాలి.',
    firstAid: 'Move animal away from wet pastures. Provide nutritious mineral mixture and iron supplements with feed.',
    firstAidTe: 'పశువుకు పోషకాహార మేత మరియు మినరల్ మిశ్రమం అందించాలి. తడి ప్రదేశాలకు తోలకూడదు.',
    whenToContactVet: 'Consult vet for specific liver fluke dewormers like Oxyclozanide, Rafoxanide, or Triclabendazole.',
    whenToContactVetTe: 'గడ్డం కింద వాపు కనిపిస్తే పశువైద్యుడితో ఫ్లూక్ పురుగుల మందు ఇప్పించాలి.',
    severity: 'Moderate',
    treatment: 'Triclabendazole, Oxyclozanide, or Nitroxynil deworming.',
    vaccination: 'Periodic strategic deworming before and after monsoons.'
  },
  {
    id: 'worm_infestation',
    name: 'Worm Infestation',
    nameTe: 'పేగు పురుగులు',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Internal roundworms, tapeworms, and stomach worms stealing nutrients, causing pot-belly in calves and low milk in adults.',
    descriptionTe: 'కడుపులో నులిపురుగులు, బద్ధె పురుగులు చేరడం. దూడలలో కడుపు ముందుకు రావడం, ఎదుగుదల లోపించడం.',
    causes: 'Ingestion of parasite eggs and larvae from infected grazing pastures and contaminated water.',
    causesTe: 'మేత మరియు కలుషిత నీటి ద్వారా పురుగుల గుడ్లు పశువుల జీర్ణవ్యవస్థలోకి వెళ్లడం.',
    symptoms: [
      'Pot-belly in growing calves',
      'Dull rough hair coat and rib prominence',
      'Intermittent diarrhea or constipation',
      'Slow growth and poor weight gain',
      'Drop in milk production'
    ],
    symptomsTe: [
      'దూడల కడుపు సాగడం (కుండ కడుపు)',
      'వెంట్రుకలు నిక్కబొడుచుకోవడం, ఎముకలు తేలడం',
      'మార్చి మార్చి వచ్చే విరేచనాలు',
      'దూడల ఎదుగుదల మందగించడం',
      'పాల ఉత్పత్తి తగ్గడం'
    ],
    prevention: 'Broad-spectrum deworming every 3-4 months. Rotate grazing pastures and clean feeding troughs.',
    preventionTe: 'ప్రతి 3-4 నెలలకొకసారి క్రమం తప్పకుండా నులిపురుగుల మందు తాగించాలి.',
    firstAid: 'Give fresh clean water, mineral mixture, and easily digestible green fodder.',
    firstAidTe: 'పశువులకు మినరల్ మిశ్రమం మరియు మంచి తాగునీరు అందించాలి.',
    whenToContactVet: 'Consult vet for appropriate deworming dosage (Albendazole/Fenbendazole/Ivermectin) based on animal weight.',
    whenToContactVetTe: 'పశువు బరువును బట్టి సరైన మోతాదులో నులిపురుగుల మందు వేయడానికి డాక్టర్‌ను సంప్రదించాలి.',
    severity: 'Mild',
    treatment: 'Broad-spectrum anthelmintics (Albendazole, Fenbendazole, Ivermectin).',
    vaccination: 'Routine seasonal deworming schedule.'
  },
  {
    id: 'mange',
    name: 'Mange',
    nameTe: 'చర్మ మైట్ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Parasitic Diseases',
    description: 'Parasitic skin mite disease causing intense itching, hair loss, thickened wrinkled skin, and scab formation.',
    descriptionTe: 'చర్మంపై మైట్స్ (పురుగులు) చేరి కుట్టడం వల్ల వచ్చే గజ్జి/నమై వ్యాధి. తీవ్రమైన దురద, వెంట్రుకలు ఊడిపోవడం.',
    causes: 'Sarcoptes or Psoroptes mites burrowing into skin layers, spread by direct contact in crowded sheds.',
    causesTe: 'సార్కోప్టెస్ మైట్స్ పశువుల చర్మంలోకి తొలిచి గుడ్లు పెట్టడం ద్వారా వ్యాపిస్తుంది.',
    symptoms: [
      'Intense itching and rubbing against walls or trees',
      'Hair loss around eyes, neck, and tail base',
      'Thick, wrinkled, crusty scabbed skin',
      'Restlessness and weight loss',
      'Secondary skin infections'
    ],
    symptomsTe: [
      'పశువు గోడలకు, చెట్లకు ఒళ్లు గోకుకోవడం',
      'కళ్లు, మెడ, తోక చుట్టూ వెంట్రుకలు రాలిపోవడం',
      'చర్మం మందంగా, గట్టిగా, రాపిడితో మారడం',
      'అలజడి మరియు బరువు తగ్గడం',
      'చర్మంపై చీము పుండ్లు పడటం'
    ],
    prevention: 'Disinfect cattle housing regularly. Quarantine new animals showing skin lesions.',
    preventionTe: 'కొట్టాన్ని క్రిమిసంహారక మందులతో క్లీన్ చేయడం. వ్యాధి ఉన్న పశువులను వేరుగా ఉంచడం.',
    firstAid: 'Wash affected skin gently with warm soapy water to remove crusts. Apply sulphur ointment or neem oil mixed with camphor.',
    firstAidTe: 'సబ్బు నీటితో చర్మాన్ని తోమి వేపనూనె, కర్పూరం లేదా సల్ఫర్ మందు రాయాలి.',
    whenToContactVet: 'Consult vet for Ivermectin injection or subcutaneous antiparasitic treatment for complete cure.',
    whenToContactVetTe: 'గజ్జి తగ్గకపోతే పశువైద్యుడితో ఐవర్మెక్టిన్ ఇంజెక్షన్ ఇప్పించాలి.',
    severity: 'Mild',
    treatment: 'Injectable Ivermectin or topical Deltamethrin washes.',
    vaccination: 'Maintain clean, dry housing.'
  },

  // FUNGAL DISEASES
  {
    id: 'ringworm',
    name: 'Ringworm',
    nameTe: 'చర్మ ఫంగస్ వ్యాధి',
    targetAnimal: 'Both',
    category: 'Fungal Diseases',
    description: 'Contagious fungal skin infection causing round, dry, greyish crusty hairless patches mainly around head, neck, and eyes.',
    descriptionTe: 'చర్మంపై గుండ్రటి బొబ్బలు, మచ్చలు (తామర) వచ్చే ఫంగల్ వ్యాధి. ముఖ్యంగా ముఖం, మెడ భాగాల్లో వస్తుంది.',
    causes: 'Trichophyton verrucosum fungal spores thriving in humid, dark, poorly ventilated animal housing.',
    causesTe: 'తడి, గాలి వెలుతురు సరిగా లేని కొట్టాలలో ట్రైకోఫైటాన్ ఫంగస్ పశువుల చర్మానికి సోకడం.',
    symptoms: [
      'Circular greyish-white raised crusty patches',
      'Hair loss on lesions around head, neck, and eyes',
      'Mild itching and rough skin surface',
      'Non-painful, dry scaly skin areas',
      'Spreads rapidly among housed young calves'
    ],
    symptomsTe: [
      'చర్మంపై గుండ్రటి పొడి మచ్చలు',
      'ముఖం, మెడ భాగాల్లో వెంట్రుకలు ఊడిపోవడం',
      'బూడిద రంగు పిప్పిలా తయారవడం',
      'స్వల్ప దురద ఉండటం',
      'దూడలలో త్వరగా ఒకదాని నుండి మరొకదానికి వ్యాపించడం'
    ],
    prevention: 'Ensure direct sunlight reaches stalls. Keep grooming equipment clean and dry.',
    preventionTe: 'పశువుల కొట్టంలోకి మంచి ఎండ తగిలేలా చూడటం. బ్రష్‌లు, కాళ్ళు కడిగే ప్రదేశాలు శుభ్రంగా ఉంచడం.',
    firstAid: 'Gently scrape off crusts using soapy warm water. Apply 10% Povidone-Iodine solution or Miconazole cream daily.',
    firstAidTe: 'గోరువెచ్చని సబ్బు నీటితో మచ్చలను తోమి పసుపు లేదా పోవిడోన్ అయోడిన్ మందు రాయాలి.',
    whenToContactVet: 'Consult vet if patches spread extensively over body for oral antifungal prescription.',
    whenToContactVetTe: 'చర్మం అంతటా మచ్చలు వ్యాపిస్తే పశువైద్యుడికి చూపించాలి.',
    severity: 'Mild',
    treatment: 'Topical antifungal ointments (Miconazole, Clotrimazole) or 2% Copper Sulfate wash.',
    vaccination: 'Ensure dry housing and sunlight exposure.'
  },

  // NUTRITIONAL & METABOLIC DISORDERS
  {
    id: 'milk_fever',
    name: 'Milk Fever',
    nameTe: 'పాలు జ్వరం',
    targetAnimal: 'Both',
    category: 'Nutritional & Metabolic Disorders',
    description: 'Acute metabolic calcium deficiency occurring right after calving in high-yielding cows/buffaloes, leading to paralysis.',
    descriptionTe: 'ఈనిన వెంటనే పశువులలో రక్తం లాల్ కాల్సియం తగ్గిపోవడం వల్ల వచ్చే పాలు జ్వరం (పారాసిస్).',
    causes: 'Sudden heavy milk production depleting blood calcium faster than mobilization from bones.',
    causesTe: 'ఈనిన వెంటనే పాల ద్వారా కాల్సియం బయటకు వెళ్లిపోయి రక్తంలో కాల్సియం శాతం పడిపోవడం.',
    symptoms: [
      'Inability to stand (downer cow)',
      'Cow turns head back towards flank in S-shape posture',
      'Cold ears, muzzle, and body extremities',
      'Loss of appetite and constipation',
      'Muscle twitching followed by recumbency and coma'
    ],
    symptomsTe: [
      'పశువు నిలబడలేకపోవడం, కింద పడిపోవడం',
      'మెడను పక్కకు తిప్పి పొట్టపై ఆనించి పడుకోవడం (S-ఆకారం)',
      'చెవులు, శరీరం చల్లబడటం',
      'ఆకలి లేకపోవడం, మలబద్ధకం',
      'స్పృహ కోల్పోవడం'
    ],
    prevention: 'Feed low-calcium diet before calving and give oral Calcium gel immediately after calving.',
    preventionTe: 'ఈనడానికి ముందే మినరల్ మిశ్రమం మరియు ఈనిన వెంటనే కాల్సియం జెల్ తాపడం.',
    firstAid: 'Keep cow upright supported with straw bales. Keep animal warm with blankets. Do NOT force-feed liquid orally (risk of lung aspiration).',
    firstAidTe: 'పశువును పక్కకు పడిపోకుండా గడ్డి బస్తాలతో తోపు ఇవ్వాలి. బలవంతంగా నోట్లో ద్రవాలు పోయకూడదు.',
    whenToContactVet: 'Contact vet IMMEDIATELY for slow intravenous Calcium Borogluconate infusion to raise blood calcium.',
    whenToContactVetTe: 'పశువు నిలబడలేకపోతే తక్షణమే పశువైద్యుడితో నరానికి కాల్సియం (IV) ఎక్కించాలి.',
    severity: 'Severe',
    treatment: 'Intravenous Calcium Borogluconate (450-500 ml) administered slowly by vet.',
    vaccination: 'Dietary calcium management during dry period.'
  },
  {
    id: 'ketosis',
    name: 'Ketosis',
    nameTe: 'కీటోసిస్',
    targetAnimal: 'Both',
    category: 'Nutritional & Metabolic Disorders',
    description: 'Metabolic energy deficit disorder in early lactation causing drop in milk, rapid weight loss, and sweet acetone breath.',
    descriptionTe: 'ఈనిన మొదటి నెలల్లో శక్తి లోపం వల్ల వచ్చే కీటోసిస్ వ్యాధి. పాల ఉత్పత్తి తగ్గి, తిండి మానడం.',
    causes: 'Negative energy balance when dietary carbohydrates cannot match heavy milk energy demands.',
    causesTe: 'పశువుకు సరిపడా శక్తి (పిండి పదార్థాలు) దక్కకపోవడం వల్ల కొవ్వు కరిగి కీటోన్ బాడీలు పెరగడం.',
    symptoms: [
      'Sudden drop in milk yield',
      'Refusal to eat grain/concentrate feed while eating straw',
      'Sweet acetone pear-like smell in breath and milk',
      'Rapid weight loss and hollow flanks',
      'Nervous licking or staggering in severe cases'
    ],
    symptomsTe: [
      'పాల దిగుబడి హఠాత్తుగా పడిపోవడం',
      'దాణా తినడానికి నిరాకరించడం (కేవలం ఎండుగడ్డి తినడం)',
      'శ్వాస లేదా పాల నుండి తీపి/ఆసిటోన్ వాసన రావడం',
      'త్వరగా బరువు తగ్గి పొట్ట లోపలికి పోవడం',
      'నడవలేక తోలడం'
    ],
    prevention: 'Feed high-energy concentrate rations with jaggery/bypass fat during early lactation.',
    preventionTe: 'ఈనిన ఆవులకు మంచి దాణా, బెల్లం నీరు మరియు బైపాస్ ఫ్యాట్ కలిపి అందించడం.',
    firstAid: 'Offer 250-500g jaggery dissolved in warm water daily. Provide fresh green fodder and propionate energy supplements.',
    firstAidTe: 'రోజుకు 250 గ్రాముల బెల్లాన్ని వేడి నీటిలో కలిపి పశువుకు తాగించాలి.',
    whenToContactVet: 'Contact vet for intravenous Dextrose (D25/D50) therapy and hormonal/corticosteroid treatment.',
    whenToContactVetTe: 'పశువు దాణా తినడం ఆపేస్తే డాక్టర్‌తో డెక్స్ట్రోస్ (గ్లూకోజ్) ఇంజెక్షన్ ఇప్పించాలి.',
    severity: 'Moderate',
    treatment: 'Intravenous Dextrose 50% and oral Propylene glycol drenching.',
    vaccination: 'Balanced energy feeding in high yielders.'
  },

  // DIGESTIVE DISORDERS
  {
    id: 'bloat',
    name: 'Bloat',
    nameTe: 'కడుపు ఉబ్బరం',
    targetAnimal: 'Both',
    category: 'Digestive Disorders',
    description: 'Over-accumulation of gas or foam in the rumen (left flank), causing swelling, severe distress, and breathing difficulty.',
    descriptionTe: 'పొట్ట ఎడమవైపు గాలి లేదా నురగు పేరుకుపోయి కడుపు ఉబ్బడం (అఫారా). శ్వాస తీసుకోవడం కష్టమవుతుంది.',
    causes: 'Excessive consumption of wet succulent legumes (lucerne, clover), sudden feed changes, or esophageal obstruction.',
    causesTe: 'తడి పచ్చగడ్డి, పప్పుధాన్యపు మేత ఎక్కువ తినడం లేదా గొంతులో పండ్ల తొనలు అడ్డుపడటం.',
    symptoms: [
      'Severe swelling and bulging on left side of belly',
      'Kicking at abdomen with hind legs due to colic pain',
      'Breathing difficulty and open-mouth panting',
      'Frequent attempt to urinate or defecate',
      'Collapse due to lung pressure in severe cases'
    ],
    symptomsTe: [
      'పొట్ట ఎడమ వైపు పెద్దగా ఉబ్బడం',
      'పొట్టను కాళ్లతో తన్నుకోవడం, నెప్పి',
      'నోరు తెరిచి రొప్పుడం, శ్వాస తీసుకోవడంలో ఇబ్బంది',
      'తరచుగా ఉచ్చ, పేడ వేయడానికి ప్రయత్నించడం',
      'కడుపు ఉబ్బరం ఎక్కువై కింద పడిపోవడం'
    ],
    prevention: 'Feed dry straw or hay before giving lush green pasture. Avoid sudden feed changes.',
    preventionTe: 'పచ్చగడ్డి మేపే ముందు ఎండుగడ్డి తినిపించడం. మేతను హఠాత్తుగా మార్చకపోవడం.',
    firstAid: 'Keep animal standing with front legs elevated. Drench with 500ml edible cooking oil mixed with 30ml turpentine oil or anti-bloat solution.',
    firstAidTe: 'పశువును ముందరి కాళ్లు ఎత్తుగా ఉండేలా నిలబెట్టాలి. 500మి.లీ వంటనూనె తాగించాలి.',
    whenToContactVet: 'Emergency vet call needed immediately if swelling is extreme for trocar puncture or stomach tube passing.',
    whenToContactVetTe: 'కడుపు ఉబ్బరం చాలా ఎక్కువగా ఉండి శ్వాస ఆడకపోతే పశువైద్యుడిని పిలిచి గాలి తీయించాలి.',
    severity: 'Moderate',
    treatment: 'Anti-bloat oils (vegetable oil + turpentine), drenching surfactants, or emergency trocarization.',
    vaccination: 'Dietary management with dry roughage.'
  },
  {
    id: 'enterotoxemia',
    name: 'Enterotoxemia',
    nameTe: 'ఎంటెరోటాక్సీమియా',
    targetAnimal: 'Both',
    category: 'Digestive Disorders',
    description: 'Severe bacterial gut toxin infection (Pulpy Kidney) triggered by sudden rich feed, causing acute convulsions and sudden death.',
    descriptionTe: 'జీర్ణ వ్యవస్థలో బ్యాక్టీరియా విషపదార్థాలు విడుదల కావడం వల్ల వచ్చే చిటి వ్యాధి. పశువు హఠాత్తుగా పడిపోయి చనిపోవడం.',
    causes: 'Clostridium perfringens type D multiplying rapidly in intestines due to heavy carbohydrate or rich grain intake.',
    causesTe: 'హఠాత్తుగా ఎక్కువ దాణా లేదా ధాన్యాలు మేపడం వల్ల క్లోస్ట్రిడియం బ్యాక్టీరియా పెరగడం.',
    symptoms: [
      'Severe abdominal colic pain and grunting',
      'Teeth grinding and frothing at mouth',
      'Greenish watery diarrhea',
      'Nervous convulsions and opisthotonos',
      'Sudden death within hours'
    ],
    symptomsTe: [
      'తీవ్రమైన కడుపునొప్పి, మూలగడం',
      'పళ్లు కొరకడం, నోటి నుండి నురగు రావడం',
      'ఆకుపచ్చని విరేచనాలు కావడం',
      'కాళ్లు కొట్టుకుని పడిపోవడం',
      'కొద్ది గంటల్లోనే చనిపోవడం'
    ],
    prevention: 'Vaccination against Enterotoxemia pre-monsoon. Gradually introduce grain feed changes over 10-14 days.',
    preventionTe: 'ఎంటెరోటాక్సీమియా (చిటి వ్యాధి) టీకా వేయించడం. దాణాను హఠాత్తుగా పెంచకుండా కొద్దికొద్దిగా మార్చడం.',
    firstAid: 'Stop concentrated grain feed immediately. Give plain clean water and dry roughage.',
    firstAidTe: 'దాణా ఇవ్వడం వెంటనే ఆపివేయాలి. కేవలం మంచి నీరు మరియు ఎండుగడ్డి మాత్రమే ఇవ్వాలి.',
    whenToContactVet: 'Contact vet immediately for antitoxin administration and intestinal antiseptics in early stages.',
    whenToContactVetTe: 'పశువు పళ్లు కొరుకుతూ కడుపునొప్పితో ఉంటే వెంటనే పశువైద్యుడిని పిలవాలి.',
    severity: 'Fatal if untreated',
    treatment: 'Intestinal antiseptics, analgesics, and fluids; antitoxin administration if available.',
    vaccination: 'Annual Enterotoxemia Vaccine.'
  }
];

export const INITIAL_HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Clean Drinking Water Management',
    titleTe: 'స్వచ్ఛమైన తాగునీటి యాజమాన్యం',
    category: 'Water Intake',
    categoryTe: 'నీటి తాగుడు',
    season: 'All Seasons',
    seasonTe: 'అన్ని కాలాలు',
    content: 'Adult cows and buffaloes require 50 to 100 liters of clean, fresh drinking water daily. Water requirements increase by 50% during hot summer months and peak milk production.',
    contentTe: 'ఎదిగిన ఆవులు మరియు గేదెలకు రోజుకు 50 నుండి 100 లీటర్ల స్వచ్ఛమైన మంచినీరు అవసరం. ఎండాకాలంలో మరియు ఎక్కువ పాలిచ్చే సమయంలో నీటి అవసరం 50% పెరుగుతుంది.',
    keyPoints: [
      'Provide ad-libitum clean drinking water 24/7',
      'Clean water troughs twice weekly with lime water',
      'Buffaloes require extra water for wallowing during peak heat'
    ],
    keyPointsTe: [
      'రోజులో 24 గంటలూ స్వచ్ఛమైన మంచినీరు అందుబాటులో ఉంచండి',
      'నీటి తొట్టెలను వారానికి రెండుసార్లు సున్నం నీటితో శుభ్రం చేయండి',
      'ఎండ తీవ్రత ఎక్కువ ఉన్నప్పుడు గేదెలను నీటిలో ఈత కొట్టించాలి లేదా చల్లటి నీరు చల్లాలి'
    ]
  },
  {
    id: 'tip-2',
    title: 'Balanced Ration & Fodder Formula',
    titleTe: 'సమతుల్య మేత & దాణా విధానం',
    category: 'Nutrition',
    categoryTe: 'పోషకాహారం',
    season: 'All Seasons',
    seasonTe: 'అన్ని కాలాలు',
    content: 'Maintain a 2:1 ratio of green fodder to dry fodder (straw/stover). For every 2.5 liters of milk, feed 1 kg of balanced concentrate mixture supplemented with 50g mineral mixture.',
    contentTe: 'పచ్చి మేత మరియు ఎండు మేత (గడ్డి) ని 2:1 నిష్పత్తిలో అందించాలి. ప్రతి 2.5 లీటర్ల పాల ఉత్పత్తికి 1 కిలో సమతుల్య దాణా మరియు 50 గ్రాముల ఖనిజ మిశ్రమం అందించాలి.',
    keyPoints: [
      'Include 30% leguminous green fodder (Berseem/Lucerne/Cowpea)',
      'Add 50-100g mineral mixture with iodized salt daily',
      'Soak dry concentrates 2 hours before feeding for easy digestion'
    ],
    keyPointsTe: [
      '30% పప్పుజాతి పచ్చి మేత (బర్‌సీమ్/లూసర్న్/సొరకాయ) మేపాలి',
      'రోజుకు 50-100 గ్రాముల ఖనిజ మిశ్రమం మరియు అయోడైజ్డ్ ఉప్పు దాణాలో కలపాలి',
      'జీర్ణం సులభంగా అవ్వడానికి ఎండు దాణాను మేపే 2 గంటల ముందు నానబెట్టాలి'
    ]
  },
  {
    id: 'tip-3',
    title: 'Udder Hygiene & Milking Protocol',
    titleTe: 'పొదుగు పరిశుభ్రత & పాలు పితికే పద్ధతి',
    category: 'Shelter & Hygiene',
    categoryTe: 'కొట్టం & పరిశుభ్రత',
    season: 'All Seasons',
    seasonTe: 'అన్ని కాలాలు',
    content: 'Mastitis is 90% preventable through good milking habits. Clean the udder before milking with warm water containing potassium permanganate, dry with clean cloth, and practice teat dipping.',
    contentTe: 'మంచి పాలు పితికే అలవాట్ల ద్వారా 90% పొదుగు వాపు వ్యాధిని నివారించవచ్చు. పాలు పితికే ముందు పొదుగును పొటాషియం పర్మాంగనేట్ కలిపిన గోరువెచ్చని నీటితో కడిగి ఆరబెట్టాలి.',
    keyPoints: [
      'Practice full-hand milking (fisting) rather than knuckling',
      'Dip teats in 0.5% Iodine teat dip immediately post-milking',
      'Keep cows standing for 30 minutes after milking by offering fresh fodder'
    ],
    keyPointsTe: [
      'వేళ్లను మడిచి పిండకుండా అరచేతితో పితికే పద్ధతిని పాటించాలి',
      'పాలు పితికిన వెంటనే 0.5% అయోడిన్ ద్రావణంలో చన్నులను ముంచాలి (టీట్ డిప్పింగ్)',
      'పాలు పితికిన 30 నిమిషాల వరకు పశువు కింద పడుకోకుండా పచ్చి మేత వేసి నిలబెట్టాలి'
    ]
  },
  {
    id: 'tip-4',
    title: 'Summer Heat Stress Protection',
    titleTe: 'వేసవి వడదెబ్బ సంరక్షణ',
    category: 'Seasonal Care',
    categoryTe: 'ఋతువుల సంరక్షణ',
    season: 'Summer',
    seasonTe: 'వేసవి కాలం',
    content: 'Buffaloes suffer severely from heat stress due to dark skin pigmentation and fewer sweat glands. Spray water or wallow buffaloes twice daily during 11 AM - 3 PM.',
    contentTe: 'గేదెలు నల్లటి చర్మం కలిగి ఉండటం వల్ల వేసవి తీవ్రతకు త్వరగా వడదెబ్బకు గురవుతాయి. ఉదయం 11 నుండి మధ్యాహ్నం 3 గంటల మధ్య రోజుకు రెండుసార్లు నీరు చల్లాలి.',
    keyPoints: [
      'Install ceiling fans or foggers in closed cattle sheds',
      'Paint shed roofs white or thatch with coconut leaves/paddy straw',
      'Add electrolyte powder or 50g baking soda to drinking water'
    ],
    keyPointsTe: [
      'పశువుల పాకలలో సీలింగ్ ఫ్యాన్లు లేదా ఫాగర్లు ఏర్పాటు చేయండి',
      'కొట్టం కప్పుపై తెల్లటి రంగు వేయడం లేదా తాటి ఆకులు/వరి గడ్డితో కప్పడం చేయాలి',
      'తాగునీటిలో ఎలక్ట్రోలైట్ పొడి లేదా 50 గ్రాముల వంట సోడా కలపండి'
    ]
  },
  {
    id: 'tip-5',
    title: 'Monsoon Dampness & Parasite Control',
    titleTe: 'వర్షాకాల తడి & పరాన్నజీవుల నివారణ',
    category: 'Seasonal Care',
    categoryTe: 'ఋతువుల సంరక్షణ',
    season: 'Monsoon',
    seasonTe: 'వర్షాకాలం',
    content: 'Monsoon brings high humidity, mud, ticks, and worms. Keep barn flooring dry using dry soil, sawdust, or rubber mats. Deworm all adult cattle before monsoon onset.',
    contentTe: 'వర్షాకాలంలో తేమ, బురద, పిడుదులు మరియు నులిపురుగులు పెరుగుతాయి. కొట్టం నేలను పొడి మట్టి లేదా రబ్బరు మ్యాట్లతో తడి లేకుండా ఉంచాలి. వర్షాకాలం ప్రారంభానికి ముందే నులిపురుగుల మందు తాగించాలి.',
    keyPoints: [
      'Deworm cattle with broad-spectrum albendazole or fenbendazole',
      'Spray Deltamethrin (1ml per liter water) on shed walls to eliminate ticks',
      'Avoid grazing cattle in waterlogged pastures early in the morning'
    ],
    keyPointsTe: [
      'ఆల్బెండజోల్ లేదా ఫెన్‌బెండజోల్ మందుతో పశువులకు నులిపురుగుల నివారణ చేయాలి',
      'పిడుదుల నివారణకు కొట్టం గోడలపై డెల్టామెత్రిన్ (లీటర్ నీటికి 1మి.లీ) పిచికారీ చేయాలి',
      'ఉదయాన్నే నీరు నిలిచిన మేత భూముల్లో పశువులను మేపకూడదు'
    ]
  }
];

export const INITIAL_VACCINATIONS: VaccineItem[] = [
  {
    id: 'vac-1',
    age: '4 Months',
    ageTe: '4 నెలలు',
    vaccine: 'FMD Vaccine (Foot & Mouth)',
    vaccineTe: 'ఎఫ్ఎమ్డీ టీకా (నోరు-కాళ్ల వ్యాధి / FMD)',
    targetDisease: 'Foot and Mouth Disease',
    targetDiseaseTe: 'నోరు-కాళ్ల వ్యాధి (గాలికుంటి / FMD)',
    frequency: 'Every 6 Months',
    frequencyTe: 'ప్రతి 6 నెలలకు ఒకసారి',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '2 ml',
    dosageTe: '2 మి.లీ.',
    importance: 'Mandatory for all cattle under National Animal Disease Control Programme.',
    importanceTe: 'జాతీయ పశు వ్యాధి నియంత్రణ కార్యక్రమం ప్రకారం అన్ని పశువులకు ఈ టీకా తప్పనిసరిగా వేయించాలి.'
  },
  {
    id: 'vac-2',
    age: '6 Months',
    ageTe: '6 నెలలు',
    vaccine: 'HS Vaccine (Hemorrhagic Septicemia)',
    vaccineTe: 'హెచ్‌ఎస్ టీకా (గొంతువాపు / HS)',
    targetDisease: 'Hemorrhagic Septicemia (Galghotu)',
    targetDiseaseTe: 'గొంతువాపు వ్యాధి (గల్ఘోటు / HS)',
    frequency: 'Annual (Pre-Monsoon May-June)',
    frequencyTe: 'సంవత్సరానికి ఒకసారి (వర్షాకాలానికి ముందు మే-జూన్)',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '2 ml',
    dosageTe: '2 మి.లీ.',
    importance: 'Prevents acute fatal throat swelling prior to rainy season.',
    importanceTe: 'వర్షాకాలంలో వచ్చే తీవ్రమైన ప్రాణాంతక గొంతువాపు వ్యాధి నుండి పశువును కాపాడుతుంది.'
  },
  {
    id: 'vac-3',
    age: '6 Months',
    ageTe: '6 నెలలు',
    vaccine: 'BQ Vaccine (Black Quarter)',
    vaccineTe: 'బీక్యూ టీకా (జానువుల వాపు / BQ)',
    targetDisease: 'Black Quarter (Chhuria)',
    targetDiseaseTe: 'జానువుల వాపు వ్యాధి (ఛురియా / BQ)',
    frequency: 'Annual (Pre-Monsoon)',
    frequencyTe: 'సంవత్సరానికి ఒకసారి (వర్షాకాలానికి ముందు)',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '2 ml',
    dosageTe: '2 మి.లీ.',
    importance: 'Protects young growing calves from fatal muscle gas gangrene.',
    importanceTe: 'ఎదిగే లేగదూడలలో తొడల కండరాల గాలి వాపు మరియు జానువుల వాపును నివారిస్తుంది.'
  },
  {
    id: 'vac-4',
    age: '4 to 8 Months (Female Calves Only)',
    ageTe: '4 నుండి 8 నెలలు (ఆడ దూడలకు మాత్రమే)',
    vaccine: 'Brucella abortus S19 Vaccine',
    vaccineTe: 'బ్రుసెల్లా టీకా (Brucella S19 Vaccine)',
    targetDisease: 'Brucellosis (Contagious Abortion)',
    targetDiseaseTe: 'చెడు ఈత వ్యాధి (బ్రుసెల్లోసిస్ / Contagious Abortion)',
    frequency: 'ONCE in Lifetime (Female Calves only)',
    frequencyTe: 'జీవితంలో ఒక్కసారి మాత్రమే (ఆడ దూడలకు)',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '2 ml',
    dosageTe: '2 మి.లీ.',
    importance: 'Prevents late-term abortion and lifetime sterility in dairy herds.',
    importanceTe: 'చూడి కాలంలో ఈత చెడిపోవడం (పడిపోవడం) మరియు గొడ్రాలుదనాన్ని జీవితాంతం నివారిస్తుంది.'
  },
  {
    id: 'vac-5',
    age: '4 Months & Above',
    ageTe: '4 నెలలు మరియు అంతకంటే ఎక్కువ',
    vaccine: 'Goat Pox Vaccine (for LSD)',
    vaccineTe: 'గోట్ పోక్స్ టీకా (లంబి స్కిన్ / LSD)',
    targetDisease: 'Lumpy Skin Disease (LSD)',
    targetDiseaseTe: 'లంబి స్కిన్ వ్యాధి (Lumpy Skin Disease / LSD)',
    frequency: 'Annual Booster',
    frequencyTe: 'సంవత్సరానికి ఒకసారి బూస్టర్',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '1 ml',
    dosageTe: '1 మి.లీ.',
    importance: 'Provides robust cross-protection against severe Lumpy Skin Disease outbreaks.',
    importanceTe: 'చర్మంపై బొబ్బలు వచ్చే తీవ్రమైన లంబి స్కిన్ వ్యాధి వ్యాప్తి నుండి బలమైన రక్షణ ఇస్తుంది.'
  },
  {
    id: 'vac-6',
    age: '6 Months',
    ageTe: '6 నెలలు',
    vaccine: 'Anthrax Spore Vaccine',
    vaccineTe: 'ఆంత్రాక్స్ టీకా (Anthrax Spore Vaccine)',
    targetDisease: 'Anthrax',
    targetDiseaseTe: 'దాసరి వ్యాధి (ఆంత్రాక్స్ / Anthrax)',
    frequency: 'Annual (Endemic Areas)',
    frequencyTe: 'సంవత్సరానికి ఒకసారి (వ్యాధి ప్రభావం ఉన్న ప్రాంతాల్లో)',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '1 ml',
    dosageTe: '1 మి.లీ.',
    importance: 'Crucial in known anthrax belts to prevent sudden fatal bacterial shock.',
    importanceTe: 'ఆంత్రాక్స్ ప్రభావం ఉన్న ప్రాంతాల్లో పశువులు హఠాత్తుగా చనిపోకుండా రక్షించే అత్యంత కీలకమైన టీకా.'
  },
  {
    id: 'vac-7',
    age: '3 Months & Above',
    ageTe: '3 నెలలు మరియు అంతకంటే ఎక్కువ',
    vaccine: 'Anti-Rabies Vaccine',
    vaccineTe: 'రేబీస్ టీకా (Anti-Rabies Vaccine)',
    targetDisease: 'Rabies (Hydrophobia)',
    targetDiseaseTe: 'పిచ్చి కుక్క కాటు వ్యాధి (రేబీస్ / Rabies)',
    frequency: 'Post-Bite (Days 0, 3, 7, 14, 28) or Annual',
    frequencyTe: 'కుక్క కరిచినప్పుడు (0, 3, 7, 14, 28 రోజుల్లో) లేదా సంవత్సరానికి ఒకసారి',
    route: 'Subcutaneous / Intramuscular',
    routeTe: 'చర్మం క్రింద లేదా కండరానికి (S/C / I/M)',
    dosage: '1 ml',
    dosageTe: '1 మి.లీ.',
    importance: 'Essential immediately if cattle are bitten by a rabid dog or wild animal.',
    importanceTe: 'పిచ్చి కుక్క లేదా అడవి జంతువులు కరిచినప్పుడు పశువు ప్రాణాన్ని కాపాడటానికి తప్పనిసరి టీకా.'
  },
  {
    id: 'vac-8',
    age: '2 Months & Above',
    ageTe: '2 నెలలు మరియు అంతకంటే ఎక్కువ',
    vaccine: 'Theileriosis Vaccine (Rakshavac-T)',
    vaccineTe: 'థైలేరియోసిస్ టీకా (Theileriosis Vaccine)',
    targetDisease: 'Theileriosis (Tick Fever)',
    targetDiseaseTe: 'పిడుదు జ్వరం (థైలేరియోసిస్ / Tick Fever)',
    frequency: 'ONCE in Lifetime (Crossbred Calves)',
    frequencyTe: 'జీవితంలో ఒక్కసారి మాత్రమే (సంకరజాతి దూడలకు)',
    route: 'Subcutaneous (S/C)',
    routeTe: 'చర్మం క్రింద (Subcutaneous)',
    dosage: '3 ml',
    dosageTe: '3 మి.లీ.',
    importance: 'Protects high-yielding HF and Jersey crossbred cows from fatal tick-borne blood infection.',
    importanceTe: 'ఎక్కువ పాలిచ్చే హెచ్‌ఎఫ్, జెర్సీ సంకరజాతి ఆవులను పిడుదు జ్వరం నుండి కాపాడుతుంది.'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How accurate is the AI Symptom Checker?',
    questionTe: 'AI లక్షణాల నివారణ వ్యవస్థ (Symptom Checker) ఎంతవరకు ఖచ్చితమైనది?',
    answer: 'The CowCare AI Symptom Checker uses Google Gemini AI trained on veterinary disease benchmarks to provide high-probability educational guidance. However, it is an educational community tool and NEVER replaces a certified local veterinarian.',
    answerTe: 'కౌకేర్ AI వ్యవస్థ గూగుల్ జెమిని AI సాంకేతికత ఆధారంగా పశువుల వ్యాధి సంకేతాలను విశ్లేషించి ప్రాథమిక అవగాహన అందిస్తుంది. అయితే ఇది కేవలం రైతులకు ఉచిత విద్యా సలహా పరికరం మాత్రమే. ఇది అర్హత కలిగిన పశువైద్యుడి ప్రత్యక్ష చికిత్సకు ఎప్పటికీ ప్రత్యామ్నాయం కాదు.'
  },
  {
    id: 'faq-2',
    category: 'First Aid',
    question: 'What immediate first aid should I give if my cow shows high fever and foot sores?',
    questionTe: 'నా పశువుకు తీవ్రమైన జ్వరం మరియు కాళ్లపై పుండ్లు (గాలికుంటి సంకేతాలు) వస్తే వెంటనే చేయవలసిన ప్రథమ చికిత్స ఏమిటి?',
    answer: 'Isolate the animal in a shaded clean room. Wash mouth and foot sores with mild 1% Potassium Permanganate solution or warm baking soda water. Apply fly repellent grease or turmeric-neem paste on hoof cracks. Offer soft lukewarm rice gruel or banana stem instead of tough straw, and call your local government vet immediately.',
    answerTe: 'వ్యాధి పశువును వేరుగా నీడ ఉన్న శుభ్రమైన కొట్టంలో ఉంచాలి. నోరు మరియు కాళ్ల పుండ్లను 1% పొటాషియం పర్మాంగనేట్ లేదా గోరువెచ్చని బేకింగ్ సోడా నీటితో కడగాలి. పుండ్లపై ఈగలు వాలకుండా పసుపు-వేప నూనె లేదా యాంటీసెప్టిక్ రాయాలి. గడ్డికి బదులుగా మెత్తటి గంజి లేదా అరటి బోదలు ఇవ్వాలి. వెంటనే పశువైద్యుడికి సమాచారం ఇవ్వాలి.'
  },
  {
    id: 'faq-3',
    category: 'Vaccination',
    question: 'Can pregnant cows be vaccinated?',
    questionTe: 'చూడితో ఉన్న (గర్భంతో ఉన్న) ఆవులకు లేదా గేదెలకు టీకాలు వేయవచ్చా?',
    answer: 'Most killed or inactivated vaccines (like FMD and HS) are safe in mid-pregnancy under veterinary guidance. However, live vaccines (such as Brucella S19) or rabies live strains should NEVER be given to pregnant animals as they can trigger abortion.',
    answerTe: 'చనిపోయిన క్రిములతో తయారుచేసిన చంపబడిన టీకాలు (ఎఫ్ఎమ్డీ, హెచ్‌ఎస్ వంటివి) గర్భం మధ్యకాలంలో పశువైద్యుడి సలహాతో వేయవచ్చు. అయితే బ్రుసెల్లా S19 వంటి సజీవ క్రిముల టీకాలను చూడి పశువులకు వేయకూడదు, ఇవి ఈత చెడిపోవడానికి కారణమవుతాయి.'
  },
  {
    id: 'faq-4',
    category: 'Emergency',
    question: 'What is the national helpline number for animal health in India?',
    questionTe: 'భారతదేశంలో పశువుల అత్యవసర ఆరోగ్య సహాయం కోసం జాతీయ హెల్ప్‌లైన్ నంబర్ ఏది?',
    answer: 'Call 1962 (National Animal Disease Control & Mobile Veterinary Unit Helpline) for emergency veterinary assistance in most Indian states.',
    answerTe: 'భారతదేశవ్యాప్తంగా పశువుల అత్యవసర పశువైద్య సహాయం మరియు సంచార పశువైద్య వాహనం (Mobile Vet Unit) కోసం ఉచిత టోల్-ఫ్రీ నంబర్ 1962 కి కాల్ చేయండి.'
  },
  {
    id: 'faq-5',
    category: 'Nutrition',
    question: 'How can I increase milk fat and yield naturally in buffaloes?',
    questionTe: 'గేదెలలో పాల దిగుబడి మరియు వెన్న శాతాన్ని (Fat %) సహజంగా ఎలా పెంచవచ్చు?',
    answer: 'Feed high-quality green fodder (Napier grass, Lucerne), supply 50 grams of mineral mixture with 30 grams of bypass fat daily, ensure continuous access to cool drinking water, and wallow or spray buffaloes twice daily during hot weather.',
    answerTe: 'నాణ్యమైన పచ్చిగడ్డి (నెపియర్, లూసర్న్) అందించాలి. రోజుకు 50 గ్రాముల ఖనిజ మిశ్రమం (Mineral Mixture) మరియు 30 గ్రాముల బైపాస్ ఫ్యాట్ దాణాలో కలపాలి. నిరంతరం శుభ్రమైన చల్లని తాగునీరు అందుబాటులో ఉంచాలి. వేసవిలో రోజుకు రెండుసార్లు గేదెలను నీటిలో ఈత కొట్టించాలి లేదా కడగాలి.'
  }
];

export const INITIAL_FEEDBACK = [
  {
    id: 'fb-1',
    name: 'Ramesh Patel',
    district: 'Anand, Gujarat',
    animalType: 'Cow',
    rating: 5,
    comments: 'Very helpful app for our village dairy society. Identified Foot & Mouth early and saved our lactating cow with prompt vet call.',
    suggestions: 'Add Gujarati language support if possible.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'fb-2',
    name: 'Sardar Gurpreet Singh',
    district: 'Ludhiana, Punjab',
    animalType: 'Buffalo',
    rating: 5,
    comments: 'The feed ration calculator and vaccination alert dates are very practical for Murrah buffalo keepers.',
    suggestions: 'Include voice input for older farmers.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'fb-3',
    name: 'Dr. Anita Deshmukh',
    district: 'Pune, Maharashtra',
    animalType: 'Veterinarian / Extension Worker',
    rating: 5,
    comments: 'Appreciate the clear educational disclaimer on every page and the 1962 hotline integration. Great community initiative!',
    suggestions: 'Add more pictures of early stage skin lesions.',
    createdAt: new Date().toISOString()
  }
];

