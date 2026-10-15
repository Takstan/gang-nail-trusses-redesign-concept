import { ProductSystem, Testimonial } from '../types';
import {
  heroGangnailTrusses,
  openWebFloorTruss,
  commercialAgriculturalTruss,
  trussManufacturingFacility
} from '../assets/images';

export const TRUSS_PRODUCTS: ProductSystem[] = [
  {
    id: 'roof-systems',
    name: 'Engineered Roof Truss Systems',
    kicker: 'Custom Pitch & Clear Spans',
    shortDesc: 'Precision-engineered pre-fabricated wood roof trusses manufactured with high-tensile galvanized Gang-Nail connector plates for maximum snow, wind, and seismic performance.',
    features: [
      'Engineered for Prairie snow loads and intense wind shear',
      'From simple garage roofs to multi-pitch custom architectural residences',
      'Clear-span agricultural trusses up to 80+ feet without interior load bearing',
      'Integrated raised-heel energy trusses for full attic insulation R-value'
    ],
    applications: ['Residential Homes', 'Agricultural Shops & Barns', 'Commercial Buildings', 'Garages & Cottages'],
    specNote: 'Stamped by Canadian Professional Engineers (P.Eng)',
    image: heroGangnailTrusses
  },
  {
    id: 'floor-systems',
    name: 'Open Web & I-Joist Floor Systems',
    kicker: 'Mechanical Routing & Long Spans',
    shortDesc: 'Eliminate bulkheads and dropped ceilings. Our open web floor trusses allow plumbers and HVAC technicians to route ducts and pipework directly through the open webs without drilling or cutting.',
    features: [
      'Wide 2.5" to 3.5" nailing surface for faster subfloor installation and squeak-free floors',
      'Continuous clear spans eliminate intermediate bearing walls and basement teleposts',
      'Engineered I-joists available for light, straight, dimensional stability',
      'Reduces framing labor time on site by up to 40%'
    ],
    applications: ['Multi-Family Buildings', 'Custom Homes', 'Commercial Second Floors', 'Basement Framing'],
    specNote: 'Zero-drop ceiling mechanical chases',
    image: openWebFloorTruss
  },
  {
    id: 'tall-walls',
    name: 'Tall Wall Framing Systems',
    kicker: 'Wind-Resistant LVL Studs',
    shortDesc: 'Designed specifically for modern two-story great rooms, vaulted foyers, and gable end-walls that face aggressive prairie winds. Built with high-strength Laminated Veneer Lumber (LVL) studs that stay laser-straight.',
    features: [
      'Engineered to resist high prairie wind pressures without structural deflection',
      'Pre-cut LVL studs prevent wall bowing, drywall cracks, and window binding',
      'Designed up to 24+ feet tall in single unbroken studs',
      'Includes complete hardware and anchoring engineering packages'
    ],
    applications: ['Great Rooms', 'Window Walls', 'Entry Foyers', 'Commercial Showrooms'],
    specNote: 'Deflection-tested under NBC / Saskatchewan building codes',
    image: commercialAgriculturalTruss
  },
  {
    id: 'beam-posts',
    name: 'Structural Beams & Laminated Posts',
    kicker: 'LVL Headers & Rot-Resistant Posts',
    shortDesc: 'Large in-stock inventory of Laminated Veneer Lumber (LVL) beams, PSL, and custom-manufactured lightweight laminated posts that offer superior resistance to rot and decay compared to solid timbers.',
    features: [
      'In-house sizing software calculates exact beam dimensions based on building load paths',
      'Treated, glued, and pressed laminated columns resist warping, twisting, and ground rot',
      'Consistent strength values across every lineal foot with no natural timber defects',
      'Pre-cut and ready for rapid job-site installation'
    ],
    applications: ['Garage Door Headers', 'Main Floor Flush Beams', 'Post-Frame Pole Sheds', 'Deck & Porch Supports'],
    specNote: 'Immediate inventory available in Pilot Butte yard',
    image: trussManufacturingFacility
  }
];

export const BUILDER_TESTIMONIALS: Testimonial[] = [
  {
    id: 'ripplinger',
    author: 'Ken Ripplinger',
    company: 'Ripplinger Homes',
    relationshipYears: '25 Years Client',
    quote: 'Gang-Nail has been supplying our floor and roof trusses for 25 years. Quality and workmanship has always been excellent! They ship on time to keep our projects moving on schedule. The engineers, designers, & office staff are very knowledgeable and professional!',
    rating: 5
  },
  {
    id: 'gilroy',
    author: 'Ryan Noble',
    company: 'Gilroy Homes',
    relationshipYears: 'Partner Since 1979 (45+ Yrs)',
    quote: 'Since 1979 Gang-Nail has been a trusted and reliable supplier of trusses and building components to Gilroy Homes. They are a leader in their field and a partner we depend on implicitly for our projects. We wouldn’t choose to go anywhere else to fulfill our needs.',
    rating: 5
  },
  {
    id: 'sthamann',
    author: 'Samuel Sthamann',
    company: 'Sthamann Homes Inc.',
    relationshipYears: '40+ Years Client',
    quote: 'Sthamann Homes has been a customer of Gang-Nail for over 40 years. Building custom homes often requires creative solutions for difficult design challenges—the team at Gang-Nail has the expertise to design, engineer, and build trusses that meet demanding requirements with reliable delivery.',
    rating: 5
  },
  {
    id: 'security-building',
    author: 'Garry Burton',
    company: 'Security Building Supplies',
    relationshipYears: '35+ Years Partner',
    quote: 'I have been dealing with Gang-Nail for over 35 years. Their staff is friendly and always going up and beyond, deliveries are done in a timely manner, rarely ever have errors and the drivers are super friendly. The estimators are detailed and bring any issues to me as soon as possible.',
    rating: 5
  },
  {
    id: 'emerald-park',
    author: 'Emerald Park Homes Team',
    company: 'Emerald Park Homes Ltd.',
    relationshipYears: '23+ Years Exclusive Partner',
    quote: 'Emerald Park Homes has been working with the staff at Gang-Nail Trusses for over 23 years. Great product and the service is excellent!',
    rating: 5
  }
];

export const COMMUNITIES_SERVED = [
  { name: 'Pilot Butte (HQ Plant)', dist: 'Local Facility', highlighted: true },
  { name: 'Regina', dist: '15 min', highlighted: true },
  { name: 'Moose Jaw', dist: '55 min', highlighted: false },
  { name: 'Saskatoon', dist: '2.5 hrs', highlighted: true },
  { name: 'Swift Current', dist: '2.5 hrs', highlighted: false },
  { name: 'Weyburn', dist: '1 hr 15 min', highlighted: false },
  { name: 'Yorkton', dist: '2 hrs', highlighted: false },
  { name: 'Estevan', dist: '2 hrs', highlighted: false },
  { name: 'Melville', dist: '1.5 hrs', highlighted: false },
  { name: 'Tisdale & Melfort', dist: '3 hrs', highlighted: false },
  { name: 'Fort Qu’Appelle', dist: '45 min', highlighted: false },
  { name: 'All Saskatchewan RMs', dist: 'Direct Jobsite', highlighted: true }
];
