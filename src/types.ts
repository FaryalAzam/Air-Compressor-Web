export interface CompressorProduct {
  id: string;
  name: string;
  type: 'piston' | 'screw' | 'high-pressure' | 'dryer';
  hpRange: string;
  pressureRange: string;
  bestFor: string;
  features: string[];
  placeholderDescription: string;
  imageAlt: string;
}

export interface IndustrySpec {
  id: string;
  name: string;
  subtitle: string;
  recommendedType: 'Piston' | 'Screw' | 'Heavy Piston';
  hpRecommended: string;
  receiverCapacity: string;
  pressureBar: string;
  description: string;
}

export interface FailureSymptom {
  id: string;
  symptomName: string;
  likelyCause: string;
  urgency: 'Low' | 'Medium' | 'Critical';
  solution: string;
}

export interface Review {
  id: string;
  clientName: string;
  companyName: string;
  location: string;
  rating: number;
  comment: string;
}

export const PRODUCTS: CompressorProduct[] = [
  {
    id: 'piston-single',
    name: 'Single Stage Piston Compressor',
    type: 'piston',
    hpRange: '2 HP - 5 HP',
    pressureRange: '8 Bar (115 PSI)',
    bestFor: 'Paint Shops, Small Auto Workshops, Tyre Shops',
    features: ['Low maintenance cost', 'High durability cast-iron pump', 'Easy to move around'],
    placeholderDescription: 'Upload a clear photograph of a standard Piston Air Compressor tank here. Prefer vertical layout or clean horizontal tank background.',
    imageAlt: 'Iqbal & Zeeshan - Piston Air Compressor'
  },
  {
    id: 'piston-two',
    name: 'Two-Stage Heavy Duty Compressor',
    type: 'piston',
    hpRange: '5 HP - 15 HP',
    pressureRange: '12 - 14 Bar (175 PSI)',
    bestFor: 'Service Stations, CNC Mills, Marble Factories',
    features: ['Intercooler for maximum efficiency', 'Heavy-duty continuous run', 'Dual pressure relief systems'],
    placeholderDescription: 'Upload a picture of a Two-Stage Heavy Duty Double Piston Compressor. Ensure the dual-belt guard and twin cylinder pump are visible.',
    imageAlt: 'Iqbal & Zeeshan - Two Stage Industrial Compressor'
  },
  {
    id: 'screw-direct',
    name: 'Direct Drive Rotary Screw Compressor',
    type: 'screw',
    hpRange: '10 HP - 50 HP',
    pressureRange: '8 - 10 Bar (145 PSI)',
    bestFor: 'Textile Mills, Plastic Molding Centers, Large Manufacturing Unit',
    features: ['100% Continuous continuous duty cycle', 'Extremely quiet operation (<68 dB)', 'Smart digital controller for safety'],
    placeholderDescription: 'Upload a high-end closed box premium Screw Compressor image here. Best with an orange/black color schema to match the website theme.',
    imageAlt: 'Iqbal & Zeeshan - Rotary Screw Compressor'
  },
  {
    id: 'dryer-refrig',
    name: 'Refrigerated Compressed Air Dryer',
    type: 'dryer',
    hpRange: 'All CFM Ranges',
    pressureRange: 'Dry air dewpoint +3°C',
    bestFor: 'Dry Powder Coating, Food Packaging, Medical Equipment',
    features: ['Ensures moisture-free rustless pipes', 'Energy-efficient operation', 'High-quality copper heat exchangers'],
    placeholderDescription: 'Upload a picture of an Air Dryer machine connected to the outlet pipeline. Essential for preventing water in pneumatic pipelines.',
    imageAlt: 'Iqbal & Zeeshan - Refrigerated Air Dryer'
  }
];

export const INDUSTRIES: IndustrySpec[] = [
  {
    id: 'automotive',
    name: 'Auto Workshop & Service Station',
    subtitle: 'Impact Wrench & Lift Systems',
    recommendedType: 'Piston',
    hpRecommended: '5 HP to 10 HP',
    receiverCapacity: '300 L - 500 L',
    pressureBar: '10 Bar (145 PSI)',
    description: 'Perfect for regular pneumatic impact guns, lifters, dust cleaning, and premium paint sprays with stable flow.'
  },
  {
    id: 'textile_weaving',
    name: 'Textile Webbing / Loom Unit',
    subtitle: '24/7 Air-Jet Loom Systems',
    recommendedType: 'Screw',
    hpRecommended: '20 HP to 50 HP (Screw)',
    receiverCapacity: '500 L to 1000 L',
    pressureBar: '8 Bar',
    description: 'Requires silent, continuous air flow 24 hours a day with pure moisture dryers to keep yarn clean and running.'
  },
  {
    id: 'marble_cnc',
    name: 'Marble & CNC Laser Cutting',
    subtitle: 'Heavy Stone Action & Laser Cut',
    recommendedType: 'Heavy Piston',
    hpRecommended: '10 HP to 20 HP',
    receiverCapacity: '500 L+',
    pressureBar: '12 to 14 Bar',
    description: 'Designed for high impact air blasts in stone cutting, carving, and heavy pneumatic actuators requiring robust reliability.'
  },
  {
    id: 'dental_clinic',
    name: 'Medical / Dental Clinic',
    subtitle: 'Clean & Dry Dental Air',
    recommendedType: 'Piston',
    hpRecommended: '1 HP to 3 HP (Oil-Free)',
    receiverCapacity: '100 L - 150 L',
    pressureBar: '8 Bar',
    description: 'Pure moisture-free and oil-free air required to feed dental premium chairs and equipment safely.'
  }
];

export const SYMPTOMS: FailureSymptom[] = [
  {
    id: 'loud_noise',
    symptomName: 'Heavy Knocking / Loud Vibration',
    likelyCause: 'Loose pulley, crankshaft damage, or worn head bearings.',
    urgency: 'Critical',
    solution: 'Turn off immediately. Main bearings may need immediate replacement or oil level check to prevent cylinder seizure.'
  },
  {
    id: 'low_pressure',
    symptomName: 'Takes too long to build pressure / Does not cut off',
    likelyCause: 'Leaking gaskets, worn piston rings, or damaged read valves.',
    urgency: 'Medium',
    solution: 'Valve plate repair or ring replacement. Our service can inspect the pump block on-site in Shershah.'
  },
  {
    id: 'oil_discharge',
    symptomName: 'Oil coming inside the Air Line / Pipeline',
    likelyCause: 'Saturated air dryer, broken separator, or worn oil rings.',
    urgency: 'Medium',
    solution: 'Change ring sets or install a certified separator. If running screw compressor, separator filter element is fully choked.'
  },
  {
    id: 'starting_issue',
    symptomName: 'Motor hums but does not start / Trips breaker',
    likelyCause: 'Faulty unloader valve, low voltage capacitor, or jammed pump.',
    urgency: 'Critical',
    solution: 'Pressure relief unloader repair or motor rewinding support. Avoid repeatedly turning it on to save the motor coil.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Irshad Ghafoor',
    companyName: 'Ghafoor Textile Loom Unit',
    location: 'S.I.T.E Area, Karachi',
    rating: 5,
    comment: 'Our industrial screw compressor broke down at night. Iqbal & Zeeshan sent their expert technicians immediately from Shershah. They diagnosed the issue, replaced the necessary parts, and had us running again in no time. Exceptionally fast service!'
  },
  {
    id: 'rev-2',
    clientName: 'Zubair Marble Works',
    companyName: 'Owner, Zubair Marbles',
    location: 'Manghopir Road, Karachi',
    rating: 5,
    comment: 'They provided us with the highest quality piston air compressor at the most competitive price in Karachi. Outstanding customer service, continuous tech support, and highly stable output for heavy marble cutting.'
  },
  {
    id: 'rev-3',
    clientName: 'M. Ali Raza',
    companyName: 'Raza Auto Service Station',
    location: 'Shershah Village, Karachi',
    rating: 5,
    comment: 'We had an urgent issue with our unloader valve and pressure switch. Their team replaced them with genuine components at very reasonable rates. Unmatched experts in compressor technology.'
  }
];
