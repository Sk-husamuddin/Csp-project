import { AnalysisInput, AnalysisResult } from '../types.js';

export function analyzeSymptomsFallback(input: AnalysisInput): AnalysisResult {
  const { animalType, symptoms, additionalNotes, language } = input;
  const isTelugu = language === 'te';
  const symptomSet = new Set(symptoms.map(s => s.toLowerCase()));

  // Rule matching logic
  let possibleDisease = isTelugu
    ? 'అపరిచిత వర్గపు పశు వ్యాధి (Undifferentiated Bovine Illness)'
    : 'Undifferentiated Bovine Illness / General Infection';
  let confidence = isTelugu ? '70% (నిబంధనల ఆధారిత విశ్లేషణ)' : '70% (Rule-Based Analysis)';
  let emergencyLevel: 'Low' | 'Moderate' | 'High' | 'Critical' = 'Moderate';
  let explanation = isTelugu
    ? `మీ ${animalType === 'Buffalo' ? 'గేదె' : 'ఆవు'} లో కనిపించిన లక్షణాలు (${symptoms.join(', ')}) ఆధారంగా, పశువుకు అంటువ్యాధి లేదా జీర్ణకోశ/రక్తసంబంధిత అసమతుల్యత ఉండే అవకాశం ఉంది.`
    : `Based on the reported symptoms in your ${animalType} (${symptoms.join(', ')}), there are clinical indications of an underlying infectious or systemic condition that requires careful monitoring.`;
  let firstAid: string[] = isTelugu
    ? [
        `పశువును వెంటనే వెలుతురు, నీడ ఉన్న పొడి కొట్టంలో వేరుగా కట్టేయండి.`,
        'గోరువెచ్చని మంచి నీటిలో కొద్దిగా ఉప్పు మరియు బెల్లం కలిపి తాగించండి.',
        'థర్మామీటర్‌తో ప్రతి 6 గంటలకు ఒకసారి పశువు జ్వరం ఉందో లేదో చూడండి.'
      ]
    : [
        `Isolate the ${animalType} in a clean, shaded, well-ventilated stall with dry bedding.`,
        'Provide free access to fresh, clean lukewarm drinking water.',
        'Monitor rectal body temperature every 6 hours using a veterinary thermometer.'
      ];
  let foodsToGive: string[] = isTelugu
    ? [
        'మెత్తటి పచ్చి మేత (ల్యూసర్న్, సజ్జ గడ్డి, లేదా బెర్సీమ్)',
        'గోరువెచ్చని బియ్యపు గంజి (ఉప్పు కలిపినది)',
        'ఎలక్ట్రోలైట్ నీరు లేదా కొబ్బరి నీరు'
      ]
    : [
        'Soft green fodder (chopped maize, berseem, or napier grass)',
        'Lukewarm rice gruel (kanji) mixed with a pinch of salt',
        'Electrolyte solution or tender coconut water for hydration'
      ];
  let foodsToAvoid: string[] = isTelugu
    ? [
        'ఎండిపోయిన మొరటు గడ్డి, నాచు పట్టిన లేదా పాతబడిన దానా',
        'ఎక్కువ వేడి చేసే దానా నూనెపిండి మోతాదులు'
      ]
    : [
        'Dry straw, hard coarse stubble, or moldy feeds',
        'Excessive concentrated oilcakes that generate metabolic heat',
        'Cold or contaminated pasture grass'
      ];
  let preventiveMeasures: string[] = isTelugu
    ? [
        'పశువుల కొట్టాన్ని సున్నం లేదా ఫినియాల్‌తో క్రిమిరహితం చేయండి.',
        'ఇతర పశువులను సోకిన పశువు తాగే నీటి తొట్టికి దూరంగా ఉంచండి.',
        'గాలికుంటి, గొంతువాపు, జానువుల వాపు టీకా రికార్డులను తనిఖీ చేయండి.'
      ]
    : [
        'Disinfect the barn floor with lime powder or 2% phenyl solution.',
        'Ensure all other herd animals are kept away from shared water troughs.',
        'Review vaccination records for FMD, HS, BQ, and Anthrax.'
      ];
  let whenToVisitVet = isTelugu
    ? 'లక్షణాలు 12-24 గంటలలోపు తగ్గకపోతే లేదా జ్వరం 103°F కంటే ఎక్కువ ఉంటే వెంటనే లైసెన్స్ పొందిన పశువైద్యుడిని (Vet) సంప్రదించండి.'
    : 'Contact your local licensed veterinarian immediately within 12-24 hours if symptoms persist or body temperature exceeds 103°F.';

  // 1. Foot and Mouth Disease (FMD)
  if (
    symptomSet.has('fever') &&
    (symptomSet.has('mouth_blisters') || symptomSet.has('foot_sores') || symptomSet.has('salivation') || symptomSet.has('limping'))
  ) {
    possibleDisease = 'Foot and Mouth Disease (నోరు-కాళ్ల వ్యాధి / గాలికుంటి)';
    confidence = isTelugu ? '88% (అధిక సంభావ్యత)' : '88% (High Clinical Correlation)';
    emergencyLevel = 'High';
    explanation = isTelugu
      ? `అధిక జ్వరం, నోరు/నాలుకపై బొబ్బలు, చిక్కని లాలాజలం మరియు కాళ్ల వేళ్ల మధ్య పుండ్లు ఉండటం గాలికుంటి వ్యాధి (FMD) ని సూచిస్తుంది. ఇది వైరస్ ద్వారా వేగంగా వ్యాపించే అంటువ్యాధి.`
      : `The presence of high fever combined with vesicles/sores in the mouth, tongue, or feet along with stringy salivation strongly suggests Foot and Mouth Disease. FMD is a highly contagious viral disease in cloven-hoofed cattle.`;
    firstAid = isTelugu
      ? [
          'వ్యాధి సోకిన పశువును వెంటనే మంద నుండి వేరు చేసి వేరే కొట్టంలో ఉంచండి.',
          'నోటి పుండ్లను 1% పొటాషియం పెర్మాంగనేట్ నీటితో రోజుకు రెండుసార్లు కడగండి.',
          'కాళ్ల పుండ్ల మధ్య పసుపు-వేప నూనె ముద్ద లేదా ఫ్లై-రిపెల్లెంట్ క్రీమ్ రాయండి.',
          'మెత్తటి బియ్యపు గంజి మరియు మెత్తని పచ్చి మేత మాత్రమే అందించండి.'
        ]
      : [
          'Isolate the animal immediately from the rest of the herd to prevent disease spread.',
          'Wash mouth blisters gently with 1% Potassium Permanganate solution or warm sodium bicarbonate solution twice daily.',
          'Apply fly-repellent antiseptic cream or turmeric-neem paste on foot lesions between hooves.',
          'Offer soft, easily digestible gruel rather than hard dry straw.'
        ];
    foodsToGive = isTelugu ? ['ఉడకబెట్టిన మెత్తటి గంజి', 'మెత్తటి పచ్చి గడ్డి', 'గోరువెచ్చని మంచినీరు'] : ['Soft cooked rice gruel', 'Boiled wheat porridge', 'Fresh soft green grasses', 'Clean lukewarm water with electrolytes'];
    foodsToAvoid = isTelugu ? ['ఎండు గడ్డి లేదా మొరటు మేత', 'ఎండిన తకడు'] : ['Hard coarse straw or stubble', 'Dry wheat bran', 'Moldy or sour silage'];
    preventiveMeasures = isTelugu ? ['వ్యాధి సోకిన పశువును 3 వారాలు వేరుగా ఉంచండి.', 'కొట్టాన్ని శోధించి టీకాలు వేయించండి.'] : ['Isolate infected animal for 3 weeks.', 'Disinfect shed with 4% sodium carbonate.', 'Vaccinate remaining cattle with FMD vaccine.'];
    whenToVisitVet = isTelugu ? 'వెంటనే పశువైద్యుడిని సంప్రదించండి. ఇది త్వరగా సోకే అంటువ్యాధి కావున డాక్టర్ సలహా తప్పనిసరి.' : 'IMMEDIATE VET VISIT REQUIRED. FMD is a reportable contagious disease. Veterinary intervention is needed for secondary bacterial infection control.';
  }
  // 2. Mastitis
  else if (
    symptomSet.has('swollen_udder') || symptomSet.has('milk_reduction') || symptomSet.has('milk_clots')
  ) {
    possibleDisease = 'Mastitis (పొదుగు వాపు వ్యాధి)';
    confidence = isTelugu ? '92% (అధిక సంభావ్యత)' : '92% (High Correlation)';
    emergencyLevel = 'High';
    explanation = isTelugu
      ? `పొదుగు వాపు, గట్టిపడటం, పాలలో పూసలు/రక్తం రావడం పొదుగు వాపు (Mastitis) లక్షణం. ఇది బ్యాక్టీరియా వల్ల వస్తుంది.`
      : `Swelling, tenderness, or hardness in the udder accompanied by milk clots or drop in yield indicates Mastitis. Mastitis is caused by bacterial infection in the mammary gland and requires prompt antibiotic treatment to prevent permanent udder damage.`;
    firstAid = isTelugu
      ? [
          'వ్యాధి సోకిన పొదుగు కాము నుండి పాలను ప్రతి 3 గంటలకు ఒకసారి పూర్తిగా పితికి వేరే చోట పారబోయండి.',
          'పొదుగు మంటగా ఉంటే చల్లని నీటి గుడ్డతో మెల్లగా తుడవండి.',
          'పశువును పొడి మరియు పరిశుభ్రమైన నేలపై ఉంచండి.'
        ]
      : [
          'Gently milk out the affected teat completely every 3-4 hours and discard the infected milk safely (do not let it spill on flooring).',
          'Apply cold water compresses if udder is severely hot and inflamed.',
          'Ensure the cow stands on clean dry bedding rather than wet muddy flooring.'
        ];
    foodsToGive = isTelugu ? ['పరిశుభ్రమైన పచ్చి మేత', 'రోజుకు 50గ్రా మినరల్ మిశ్రమం', 'బెల్లం నీరు'] : ['Clean green fodder', 'Mineral mixture (50g daily)', 'Jaggery water with vitamin C supplements'];
    foodsToAvoid = isTelugu ? ['ఎక్కువ ప్రోటీన్ ఉన్న దానా కాసేపు ఆపండి'] : ['High-protein excessive concentrate feed during acute inflammation', 'Dusty or spoiled feed'];
    preventiveMeasures = isTelugu ? ['పాలు పితికిన వెంటనే టీట్ డిప్పింగ్ (Teat dipping) చేయండి.'] : ['Perform teat dipping with 0.5% iodine after every milking.', 'Keep cows standing for 30 minutes post-milking.', 'Maintain strict hygiene.'];
    whenToVisitVet = isTelugu ? '6 గంటలలోపు డాక్టర్‌ను సంప్రదించండి. యాంటీబయోటిక్ చికిత్స అత్యవసరం.' : 'Contact vet within 6 hours. Intramammary antibiotic infusion or anti-inflammatory injections are critical to save the infected quarter.';
  }
  // 3. Bloat
  else if (symptomSet.has('bloat') || (symptomSet.has('rumen_stasis') && symptomSet.has('breathing_difficulty'))) {
    possibleDisease = 'Rumen Bloat (కడుపు ఉబ్బరం / అఫారా)';
    confidence = isTelugu ? '90% (అత్యవసర పరిస్థితి)' : '90% (Urgent Condition)';
    emergencyLevel = 'Critical';
    explanation = isTelugu
      ? `పశువు ఎడమ కడుపు వైపు విపరీతంగా ఉబ్బడం, ఆయాసం రావడం కడుపు ఉబ్బరం (Bloat) ను సూచిస్తుంది. ఇది ప్రాణాంతక అత్యవసర పరిస్థితి.`
      : `Severe swelling of the left flank accompanied by abdominal discomfort and heavy breathing indicates Rumen Bloat. Excessive gas accumulation exerts pressure on lungs and heart, making bloat a life-threatening emergency.`;
    firstAid = isTelugu
      ? [
          'పశువు ముందరి కాళ్లను ఎత్తైన దిబ్బపై ఉంచండి.',
          '500ml మంచి నూనెలో 30ml టర్పెంటైన్ నూనె కలిపి నెమ్మదిగా త్రాపించండి.',
          'నోటిలో కర్రను అడ్డంగా అమర్చి నమలేలా చేయండి.',
          'ఎడమ పొట్టపై గడ్డి చుట్టతో మెల్లగా తోమండి.'
        ]
      : [
          'Keep the animal standing with its front legs on an elevated slope to relieve lung pressure.',
          'Drench 500 ml of vegetable oil (sweet oil/mustard oil) mixed with 30 ml turpentine oil slowly to break gas foam.',
          'Gently tie a smooth wooden stick horizontally in the animal mouth like a bridle bit to stimulate chewing and eructation.',
          'Massage the left flank gently upward with a straw bundle.'
        ];
    foodsToGive = isTelugu ? ['ఎండు గడ్డి కొద్దిగా ఇవ్వండి', 'గ్యాస్ తగ్గేవరకు స్వచ్ఛమైన నీరు'] : ['Small quantities of dry cereal hay', 'Clean lukewarm water only after gas subsides'];
    foodsToAvoid = isTelugu ? ['పచ్చి అలసంద/లూసర్న్ గడ్డి ఇవ్వవద్దు', 'బలవంతంగా నీరు త్రాపించవద్దు'] : ['DO NOT feed green legumes (lucerne/clover)', 'DO NOT give concentrates or wet lush grass', 'DO NOT force water down if animal is gasping'];
    preventiveMeasures = isTelugu ? ['పచ్చి మేత మేపేముందు ఎండుగడ్డి తినిపించండి.'] : ['Feed dry straw before releasing on lush pasture.', 'Avoid sudden feed changes.', 'Avoid feeding whole potatoes or fruits.'];
    whenToVisitVet = isTelugu ? 'వెంటనే అత్యవసర పశువైద్యుడిని సంప్రదించండి!' : 'EMERGENCY VET VISIT REQUIRED IMMEDIATELY. If breathing is severely hindered, trocharization (needle puncture of left flank) by a veterinarian is life-saving.';
  }
  // 4. Black Quarter / Anthrax
  else if (symptomSet.has('limping') && (symptomSet.has('chills') || symptomSet.has('fever')) && symptomSet.has('weakness')) {
    possibleDisease = 'Black Quarter (BQ) / Chhuria';
    confidence = '82% (Moderate-High Risk)';
    emergencyLevel = 'Critical';
    explanation = `High fever combined with lameness in hind legs and painful swelling in heavy muscles (shoulder/thigh) suggests Black Quarter. Gas crackling sound under swelling is a classic sign.`;
    firstAid = [
      'Isolate the animal immediately in a quiet, dry, warm stall.',
      'Do not apply pressure or cut the crackling swelling.',
      'Keep body warm with blankets.'
    ];
    foodsToGive = ['Soft green fodder', 'Fresh water', 'Gur (jaggery) kanji'];
    foodsToAvoid = ['Coarse dry fodder'];
    preventiveMeasures = ['Vaccinate young cattle (6 months - 2 years) annually before monsoon with BQ vaccine.'];
    whenToVisitVet = 'CRITICAL EMERGENCY. High-dose antibiotic therapy (Penicillin) must start immediately before toxin release.';
  }
  // 5. Milk Fever
  else if (symptomSet.has('weakness') && (symptomSet.has('chills') || symptomSet.has('loss_of_appetite')) && animalType && input.gender.includes('Female')) {
    possibleDisease = 'Milk Fever (Post-Calving Hypocalcemia)';
    confidence = '85% (Metabolic Disorder)';
    emergencyLevel = 'High';
    explanation = `Weakness, cold ears, and inability to stand shortly before or after calving strongly point to Milk Fever due to sudden blood calcium depletion in high milkers.`;
    firstAid = [
      'Prop the cow in a sternal position (upright sitting) with straw bales so she does not lie flat on her side.',
      'Keep ears and limbs warm with burlap sacks.',
      'Do NOT attempt to force liquid drenching down the throat if she is recumbent or sluggish (risk of aspiration).'
    ];
    foodsToGive = ['Oral calcium gels (as recommended by vet)', 'Jaggery water'];
    foodsToAvoid = ['Do not force feed large grain meals until standing'];
    preventiveMeasures = ['Manage pre-calving dietary calcium levels', 'Provide oral calcium gel immediately after calving.'];
    whenToVisitVet = 'VET VISIT REQUIRED IMMEDIATELY for IV Calcium Borogluconate administration.';
  }
  // 6. Lumpy Skin Disease
  else if (symptomSet.has('skin_lesions') || (symptomSet.has('fever') && symptomSet.has('limping'))) {
    possibleDisease = 'Lumpy Skin Disease (LSD) / Gaanthidaar Twacha Rog';
    confidence = '86% (High Probability)';
    emergencyLevel = 'High';
    explanation = `Firm round nodular bumps on the skin along with fever and swelling of limbs are hallmark symptoms of Lumpy Skin Disease caused by a capripox virus.`;
    firstAid = [
      'Isolate the affected cattle in an insect-screened or smoke-fumigated stall.',
      'Apply neem paste or 10% povidone iodine on burst skin lesions to keep flies away.',
      'Spray neem oil or natural fly repellent around the barn.'
    ];
    foodsToGive = ['Green soft fodder', 'Water mixed with jaggery and turmeric', 'Electrolytes'];
    foodsToAvoid = ['Dry rough straw', 'Stale feed'];
    preventiveMeasures = ['Administer Goat Pox vaccine annually.', 'Maintain strict fly and mosquito control in cattle sheds.'];
    whenToVisitVet = 'Consult vet within 24 hours for antipyretics, anti-inflammatory, and secondary antibiotic protection.';
  }
  // 7. Tick Fever
  else if (symptomSet.has('ticks') || (symptomSet.has('fever') && symptomSet.has('eye_infection'))) {
    possibleDisease = 'Tick Fever (Babesiosis / Anaplasmosis) / Redwater';
    confidence = '84% (Parasitic Indicator)';
    emergencyLevel = 'High';
    explanation = `High fever associated with heavy tick presence, pale/yellowish eye mucous membranes, or coffee-colored urine points toward tick-borne blood protozoal infection.`;
    firstAid = [
      'Keep the animal resting in complete shade.',
      'Provide clean drinking water and blood-building green feeds.',
      'Avoid driving or working draft bullocks.'
    ];
    foodsToGive = ['Fresh green fodder rich in iron', 'Jaggery water', 'Liver tonic supplements'];
    foodsToAvoid = ['Heavy dry concentrates during peak fever'];
    preventiveMeasures = ['Apply tickicides (Deltamethrin/Amitraz) every 21 days during humid weather.', 'Keep barn walls whitewashed.'];
    whenToVisitVet = 'VET VISIT REQUIRED within 12 hours for specific anti-protozoal injections (Berenil/Imidocarb).';
  }

  return {
    possibleDisease,
    confidence,
    explanation,
    firstAid,
    foodsToGive,
    foodsToAvoid,
    emergencyLevel,
    preventiveMeasures,
    whenToVisitVet
  };
}
