// Single source for company details. Set website or hours to null to hide that row.
export const company = {
  legalName: 'THE OCTOPUS TRADING (PVT).LTD',
  tagline: 'Your Trusted Partner in Procurement and Supply',
  headOffice: 'Bahria Town, Karachi',
  businessType: 'Importer, supplier and general trader',
  registration: 'K560819',
  bank: 'Bank AL Habib',
  address: 'Bahria Town, Karachi',
  phone: '+92 325 3861626',
  email: 'theoctopustrading@gmail.com',
  website: null,
  hours: null,
};

export const telHref = `tel:${company.phone.replace(/\s/g, '')}`;

// Quotation buttons open an email with the subject already filled in.
export const quoteHref = `mailto:${company.email}?subject=${encodeURIComponent('Quotation request')}`;

export const trades = [
  {
    id: 'medical',
    title: 'Medical Instruments and Consumables',
    short: 'Medical instruments',
    image: '/images/instruments.jpg',
    text: 'Diagnostic instruments, surgical instruments and sets, patient care, operation theatre and ICU equipment, sterilization, laboratory instruments, analyzers and reagents, and disposables for hospitals, clinics, diagnostic centers and homecare.',
  },
  {
    id: 'imports',
    title: 'Import of Medical Machinery',
    short: 'Medical machinery imports',
    image: '/images/mri.jpg',
    text: 'X-ray, ultrasound, CT and MRI through authorized principals, dialysis, ventilators, dental units and turnkey hospital setups.',
  },
  {
    id: 'admin',
    title: 'Admin and Office',
    short: 'Administrative products',
    image: '/images/office.jpg',
    text: 'Stationery, toner, furniture, filing and pantry.',
  },
  {
    id: 'security',
    title: 'Security Items',
    short: 'Security items',
    image: '/images/security.jpg',
    text: 'CCTV, access control, fire safety and scanners.',
  },
  {
    id: 'parts',
    title: 'Operational Parts',
    short: 'Operational parts',
    image: '/images/parts.jpg',
    text: 'Imaging, dialysis, lab and utility spares.',
  },
];

export const values = [
  ['Integrity', 'Authentic, certified products and honest dealings'],
  ['Reliability', 'On-time delivery and consistent availability'],
  ['Quality', 'Strict supplier vetting and product inspection'],
  ['Service', 'Installation, training, warranty and maintenance support'],
  ['Value', 'Competitive pricing without compromising standards'],
];

// The eight import services, in the order the octopus's arms are numbered.
export const arms = [
  'Supplier sourcing',
  'Quotations',
  'Letters of credit and payment arrangements',
  'Shipping',
  'Customs clearance',
  'Regulatory documentation',
  'Delivery to site',
  'Installation and commissioning',
];

export const reasons = [
  ['Authentic and certified', 'Products sourced from approved manufacturers and authorized distributors, with relevant CE, ISO, FDA or equivalent certifications where applicable.'],
  ['One-stop solution', 'Hospital instruments, administrative products, security items and machinery parts under one contract.'],
  ['Global sourcing network', 'Direct relationships with suppliers in Europe, Asia and the Americas.'],
  ['Spare parts availability', 'Fast sourcing of OEM and compatible parts to reduce equipment downtime.'],
  ['Competitive pricing', 'Bulk purchasing power and lean operations.'],
  ['End-to-end support', 'From quotation to installation, staff training and warranty service.'],
  ['Compliance expertise', 'Experienced handling of import regulations, licensing and customs documentation.'],
  ['Flexible terms', 'Tailored supply agreements, tenders and project-based orders.'],
];

export const steps = [
  ['Consultation', 'We understand your requirement, budget and timeline.'],
  ['Sourcing and quotation', 'We shortlist suitable products and provide transparent offers.'],
  ['Order and procurement', 'Purchase, inspection and documentation.'],
  ['Logistics and clearance', 'Shipping, insurance, customs and regulatory approvals.'],
  ['Delivery and installation', 'On-site setup, testing and commissioning.'],
  ['Training and after-sales', 'User training, warranty, spare parts and maintenance.'],
];
