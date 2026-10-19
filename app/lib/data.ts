// All copy and imagery lives here so it is easy to swap for the firm's own photos later.
export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  justiceLight: img("photo-1589578527966-fdac0f44566c"),
  justiceBronze: img("photo-1589994965851-a8f479c573a9"),
  gavelDark: img("photo-1575505586569-646b2ca898fc"),
  gavelLight: img("photo-1593115057322-e94b77572f20"),
  library: img("photo-1505664063603-28e48ca204eb"),
  libraryLadder: img("photo-1505664194779-8beaceb93744"),
  columns: img("photo-1436450412740-6b988f486c6b"),
  courthouse: img("photo-1453945619913-79ec89a82c51"),
  boardroom: img("photo-1431540015161-0bf868a2d407"),
  meetingRoom: img("photo-1462826303086-329426d1aef5"),
  officeLoft: img("photo-1497366811353-6870744d04b2"),
  officeWindow: img("photo-1497215728101-856f4ea42174"),
  officeModern: img("photo-1497366216548-37526070297c"),
  officeBright: img("photo-1577412647305-991150c7d163"),
  signing: img("photo-1521791055366-0d553872125f"),
  signing2: img("photo-1450101499163-c8848c66ca85"),
  documents: img("photo-1454165804606-c3d57bc86b40"),
  handshake: img("photo-1521791136064-7986c2920216"),
  meetingTable: img("photo-1517048676732-d65bc937f952"),
  meetingWomen: img("photo-1551836022-d5d88e9218df"),
  meetingTeam: img("photo-1542744173-8e7e53415bb0"),
  suitCuff: img("photo-1491336477066-31156b5e4f35"),
  suitAdjust: img("photo-1507679799987-c73779587ccf"),
  laptopDesk: img("photo-1520607162513-77705c0f0d4a"),
  skyscrapers: img("photo-1486406146926-c627a92ad1ab"),
  glassTower: img("photo-1560179707-f14e90ef3623"),
  glassTowers: img("photo-1554469384-e58fac16e23a"),
  cityStreet: img("photo-1449824913935-59a10b8d2000"),
  family: img("photo-1511895426328-dc8714191300"),
  houseModern: img("photo-1600596542815-ffad4c1539a9"),
  housePool: img("photo-1512917774080-9991f1c4c750"),
  houseGarden: img("photo-1600585154340-be6161a56a0c"),
  contactTiles: img("photo-1528747045269-390fe33c19f2"),
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas", mega: true },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phone: "+1 0000 0000",
  email: "info@xyz.com",
  address: "1234 Main Street, Suite 100, Springfield, IL 62701, USA",
  hours: "Mon – Sat · 9:00 – 19:00",
};

export type IconName = "briefcase" | "scales" | "family" | "home" | "doc";

export type PracticeArea = {
  slug: string;
  icon: IconName;
  title: string;
  line: string;
  details: string[];
  facts: { value: string; label: string }[];
  services: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  image: string;
  gallery: string[];
};

export const PRACTICE: PracticeArea[] = [
  {
    slug: "business-corporate",
    icon: "briefcase",
    title: "Business & Corporate",
    line: "Deals, governance and growth — structured to last.",
    details: [
      "From first funding round to full acquisition, we structure deals that protect what you have built.",
      "Our corporate team works with founders, family businesses and listed companies across India — drafting, negotiating and closing transactions of every size.",
      "Beyond the deal, we stay on as your legal partner: board meetings, shareholder agreements, compliance calendars and employment policies, all handled by one team that already knows your business.",
    ],
    facts: [
      { value: "350+", label: "Deals closed" },
      { value: "₹4,000 Cr", label: "Transaction value" },
      { value: "120+", label: "Retainer clients" },
    ],
    services: [
      { name: "Mergers & Acquisitions", text: "Due diligence, valuation support and deal documents from term sheet to closing." },
      { name: "Contracts", text: "Vendor, client and partnership agreements written to prevent disputes, not invite them." },
      { name: "Compliance", text: "ROC filings, board resolutions and statutory registers kept current all year." },
      { name: "Startups", text: "Incorporation, ESOPs, founder agreements and investor rounds done right the first time." },
      { name: "Employment", text: "Offer letters, HR policies, POSH committees and exits handled with care." },
      { name: "Joint Ventures", text: "Clear structures for shared ownership, control and a clean exit if needed." },
    ],
    faqs: [
      { q: "How early should we involve a lawyer in a deal?", a: "Before you sign a term sheet. The structure agreed at that stage decides most of what follows." },
      { q: "Do you work on a retainer?", a: "Yes. Most corporate clients choose a monthly retainer that covers contracts, compliance and advice." },
      { q: "Can you work with our in-house team?", a: "Absolutely. We regularly act as an extension of in-house legal teams on larger or specialist matters." },
    ],
    image: IMAGES.skyscrapers,
    gallery: [IMAGES.boardroom, IMAGES.signing, IMAGES.glassTower],
  },
  {
    slug: "litigation-disputes",
    icon: "scales",
    title: "Litigation & Disputes",
    line: "Courtroom strength when it matters most.",
    details: [
      "We prepare every case as if it will go to trial — and that is why most settle on our terms.",
      "Our litigators appear before district courts, High Courts, tribunals and arbitral panels, in civil, commercial and criminal matters.",
      "From the first notice to the final appeal, one partner stays with your matter, so you always know who is responsible and what happens next.",
    ],
    facts: [
      { value: "1,200+", label: "Cases won" },
      { value: "18", label: "Courts & tribunals" },
      { value: "9 in 10", label: "Settled favourably" },
    ],
    services: [
      { name: "Civil Litigation", text: "Recovery suits, contract disputes and injunctions argued with a clear strategy." },
      { name: "Arbitration", text: "Domestic and international arbitration, from notice to award enforcement." },
      { name: "Criminal Defence", text: "Bail, trials and white-collar matters handled discreetly and firmly." },
      { name: "Appeals", text: "Fresh eyes on lower-court rulings, with focused written and oral arguments." },
      { name: "Mediation", text: "Faster, private settlements when a courtroom battle is not the best route." },
      { name: "Injunctions", text: "Urgent relief to stop harm while the main dispute is heard." },
    ],
    faqs: [
      { q: "How long will my case take?", a: "It depends on the forum, but we give you a realistic timeline in the first meeting and update it as things move." },
      { q: "Should I try to settle?", a: "Often, yes — but only from a position of strength. We prepare for trial so you can negotiate with confidence." },
      { q: "What do I need for the first meeting?", a: "Any notices, contracts and correspondence you have. We will tell you what else is needed." },
    ],
    image: IMAGES.gavelDark,
    gallery: [IMAGES.courthouse, IMAGES.justiceLight, IMAGES.library],
  },
  {
    slug: "personal-family",
    icon: "family",
    title: "Personal & Family",
    line: "Sensitive matters, handled with care.",
    details: [
      "Family matters need patience as much as law. We listen first, then build a clear plan.",
      "Divorce, custody, maintenance and inheritance are handled privately, with your family's future — and your children's wellbeing — in mind.",
      "Where possible we resolve matters through mediation and agreement; where it is not, we represent you firmly in court.",
    ],
    facts: [
      { value: "600+", label: "Families helped" },
      { value: "70%", label: "Resolved by mediation" },
      { value: "100%", label: "Confidential" },
    ],
    services: [
      { name: "Divorce", text: "Mutual-consent and contested divorces, handled with dignity and discretion." },
      { name: "Child Custody", text: "Custody and visitation plans that put the child's interests first." },
      { name: "Wills & Estates", text: "Wills, trusts and succession planning so your wishes are clear." },
      { name: "Adoption", text: "Guidance through every step of domestic and inter-country adoption." },
      { name: "Personal Injury", text: "Compensation claims for accidents and medical negligence." },
      { name: "Guardianship", text: "Legal guardianship for minors and dependent family members." },
    ],
    faqs: [
      { q: "Will my matter stay private?", a: "Yes. Every family matter is handled with strict confidentiality, and we request in-camera hearings where possible." },
      { q: "Is mediation compulsory?", a: "Not always, but courts often encourage it. We will advise whether it suits your situation." },
      { q: "Do I need a will if I am young?", a: "If you own property or have dependants, a simple will saves your family a great deal of difficulty." },
    ],
    image: IMAGES.family,
    gallery: [IMAGES.meetingWomen, IMAGES.documents, IMAGES.officeWindow],
  },
  {
    slug: "property-real-estate",
    icon: "home",
    title: "Property & Real Estate",
    line: "Every square foot, legally sound.",
    details: [
      "Buying, leasing or developing — we check every title, approval and clause before you sign.",
      "We act for home buyers, landlords, developers and investors on residential and commercial property across the NCR and beyond.",
      "When disputes arise — over title, possession, rent or delayed projects — we move quickly to protect your property and your investment.",
    ],
    facts: [
      { value: "2,500+", label: "Titles verified" },
      { value: "80+", label: "Projects advised" },
      { value: "48 hrs", label: "Title report" },
    ],
    services: [
      { name: "Transactions", text: "Sale deeds, agreements and registration for homes and commercial space." },
      { name: "Leasing", text: "Lease and licence agreements that protect both owner and tenant." },
      { name: "Title Disputes", text: "Clearing defects and defending ownership in court." },
      { name: "Development", text: "Joint development agreements, approvals and project documentation." },
      { name: "Tenancy", text: "Eviction, rent recovery and tenancy disputes resolved efficiently." },
      { name: "RERA Matters", text: "Complaints and defence before RERA for delayed or defective projects." },
    ],
    faqs: [
      { q: "What is title verification?", a: "A search of ownership records going back 30 years to confirm the seller can legally sell the property." },
      { q: "Can you help with a delayed flat?", a: "Yes. We file and argue RERA and consumer complaints for refunds, interest or possession." },
      { q: "Do I need a lawyer to register property?", a: "It is not mandatory, but a lawyer-checked deed avoids costly mistakes that are hard to fix later." },
    ],
    image: IMAGES.houseModern,
    gallery: [IMAGES.housePool, IMAGES.houseGarden, IMAGES.signing2],
  },
  {
    slug: "legal-advisory",
    icon: "doc",
    title: "Legal Advisory",
    line: "Clear answers before problems begin.",
    details: [
      "Good advice early costs far less than a dispute later. We review risks before they become cases.",
      "Businesses and individuals come to us for second opinions, regulatory guidance and careful review of documents before they commit.",
      "Retainer clients get a dedicated advisor for documents, policies and regulatory questions — a quick call away whenever something new comes up.",
    ],
    facts: [
      { value: "24 hrs", label: "Typical reply" },
      { value: "5,000+", label: "Documents reviewed" },
      { value: "1", label: "Dedicated advisor" },
    ],
    services: [
      { name: "Due Diligence", text: "Legal checks on companies, properties and partners before you commit." },
      { name: "Risk Review", text: "A clear map of legal risks in your business, with practical fixes." },
      { name: "Documentation", text: "Agreements, notices and policies drafted in plain, enforceable language." },
      { name: "Regulatory", text: "Guidance on licences, data protection and sector-specific rules." },
      { name: "Retainers", text: "Ongoing legal support for a fixed monthly fee." },
      { name: "Policy Drafting", text: "Internal policies for HR, privacy, procurement and governance." },
    ],
    faqs: [
      { q: "What does a retainer include?", a: "Unlimited advice calls, document reviews and drafting within an agreed scope, for a fixed monthly fee." },
      { q: "Can I get a one-time opinion?", a: "Yes. We provide written legal opinions on specific questions, usually within a few working days." },
      { q: "Do you advise individuals too?", a: "Yes — on contracts, investments, notices and any legal question before it turns into a dispute." },
    ],
    image: IMAGES.signing2,
    gallery: [IMAGES.laptopDesk, IMAGES.meetingTable, IMAGES.officeBright],
  },
];

// Same four steps for every practice area
export const PROCESS = [
  { title: "Consultation", text: "We listen, review your documents and explain where you stand." },
  { title: "Strategy", text: "A clear plan with options, timelines and costs — in writing." },
  { title: "Action", text: "Drafting, negotiation or court work, led by one partner." },
  { title: "Resolution", text: "We close the matter and stay available for what comes next." },
];

export const STATS = [
  { value: 25, suffix: "+", label: "Years" },
  { value: 1200, suffix: "+", label: "Cases Won" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 40, suffix: "", label: "Attorneys" },
];

export const TEAM = [
  { name: "Arjun Mehra", role: "Managing Partner", image: img("photo-1560250097-0b93528c311a", 900) },
  { name: "Sophia Laurent", role: "Senior Litigator", image: img("photo-1573496359142-b8d87734a5a2", 900) },
  { name: "Daniel Whitmore", role: "Corporate Counsel", image: img("photo-1519085360753-af0119f7cbe7", 900) },
  { name: "Priya Kapoor", role: "Family Law", image: img("photo-1580489944761-15a19d654956", 900) },
  { name: "Rohan Malhotra", role: "Real Estate", image: img("photo-1556157382-97eda2d62296", 900) },
  { name: "Elena Russo", role: "Arbitration", image: img("photo-1573497019940-1c28c88b4f3e", 900) },
  { name: "Vikram Sethi", role: "Senior Partner", image: img("photo-1472099645785-5658abf4ff4e", 900) },
  { name: "Ananya Rao", role: "Advisory", image: img("photo-1531123897727-8f129e1688ce", 900) },
];

export type GalleryTag = "Office" | "Courtroom" | "Moments";

export const GALLERY: { image: string; alt: string; tag: GalleryTag; tall?: boolean }[] = [
  { image: IMAGES.boardroom, alt: "Lexora boardroom", tag: "Office" },
  { image: IMAGES.justiceLight, alt: "Lady Justice statue", tag: "Courtroom", tall: true },
  { image: IMAGES.meetingTable, alt: "Client meeting", tag: "Moments" },
  { image: IMAGES.libraryLadder, alt: "Law library", tag: "Office", tall: true },
  { image: IMAGES.handshake, alt: "Agreement handshake", tag: "Moments" },
  { image: IMAGES.courthouse, alt: "Courthouse facade", tag: "Courtroom" },
  { image: IMAGES.officeWindow, alt: "Workspace by the window", tag: "Office" },
  { image: IMAGES.suitCuff, alt: "Partner preparing for court", tag: "Moments", tall: true },
  { image: IMAGES.gavelDark, alt: "Judge's gavel", tag: "Courtroom" },
  { image: IMAGES.meetingRoom, alt: "Glass meeting rooms", tag: "Office" },
  { image: IMAGES.signing, alt: "Signing a contract", tag: "Moments" },
  { image: IMAGES.columns, alt: "Classical columns", tag: "Courtroom", tall: true },
  { image: IMAGES.officeLoft, alt: "Open office", tag: "Office" },
  { image: IMAGES.meetingWomen, alt: "Strategy session", tag: "Moments" },
];

export const INSIGHTS = [
  { title: "What the new arbitration rules mean for you", tag: "Litigation", date: "Oct 2026", image: IMAGES.meetingTable },
  { title: "Five clauses every founder should read twice", tag: "Corporate", date: "Sep 2026", image: IMAGES.signing },
  { title: "Buying property? Check these documents first", tag: "Real Estate", date: "Sep 2026", image: IMAGES.housePool },
  { title: "Custody and care: a calm guide", tag: "Family", date: "Aug 2026", image: IMAGES.family },
  { title: "Compliance calendars that actually work", tag: "Advisory", date: "Aug 2026", image: IMAGES.laptopDesk },
  { title: "Inside a winning appeal", tag: "Litigation", date: "Jul 2026", image: IMAGES.courthouse },
  { title: "Due diligence, the Lexora way", tag: "Advisory", date: "Jun 2026", image: IMAGES.documents },
];

export const VALUES = [
  { word: "Integrity", image: IMAGES.justiceLight },
  { word: "Clarity", image: IMAGES.officeWindow },
  { word: "Results", image: IMAGES.handshake },
];

export const MILESTONES = [
  { year: "1998", text: "Founded in Delhi", image: IMAGES.libraryLadder },
  { year: "2008", text: "Corporate wing opens", image: IMAGES.skyscrapers },
  { year: "2016", text: "1,000th case won", image: IMAGES.gavelLight },
  { year: "2026", text: "Three cities, one firm", image: IMAGES.glassTowers },
];

export const TESTIMONIALS = [
  {
    quote: "They structured our acquisition in six weeks and caught two risks our bankers missed. Calm, sharp and always available.",
    name: "Karan Bhatia",
    role: "Founder, Northwind Foods",
    area: "Business & Corporate",
    image: img("photo-1500648767791-00dcc994a43e", 400),
  },
  {
    quote: "After two years in court elsewhere, Lexora settled our dispute in four months — on our terms.",
    name: "Meera Iyer",
    role: "Director, Iyer Textiles",
    area: "Litigation & Disputes",
    image: img("photo-1438761681033-6461ffad8d80", 400),
  },
  {
    quote: "A painful time made bearable. They explained every step and kept my children's interests first.",
    name: "Neha Sharma",
    role: "Private client",
    area: "Personal & Family",
    image: img("photo-1544005313-94ddf0286df2", 400),
  },
  {
    quote: "Their title check stopped me from buying a flat with a hidden dispute. Worth every rupee.",
    name: "Rahul Verma",
    role: "Home buyer, Gurugram",
    area: "Property & Real Estate",
    image: img("photo-1507003211169-0a1dd7228f2d", 400),
  },
  {
    quote: "Our monthly retainer feels like having a senior lawyer on the team. Quick, clear answers every time.",
    name: "Aisha Khan",
    role: "COO, Brightpath Health",
    area: "Legal Advisory",
    image: img("photo-1494790108377-be9c29b29330", 400),
  },
  {
    quote: "Professional from the first call. They told us honestly what to expect — and then delivered better.",
    name: "Sameer Joshi",
    role: "Partner, Joshi & Co.",
    area: "Litigation & Disputes",
    image: img("photo-1566492031773-4f4e44671857", 400),
  },
  {
    quote: "Our shareholder agreement was a mess. They rewrote it in a week and every partner signed without a single objection.",
    name: "Vikram Desai",
    role: "MD, Desai Logistics",
    area: "Business & Corporate",
    image: img("photo-1463453091185-61582044d556", 400),
  },
  {
    quote: "They handled my divorce with such sensitivity. I never felt rushed, and the settlement was fair to both of us.",
    name: "Pooja Nair",
    role: "Private client",
    area: "Personal & Family",
    image: img("photo-1488426862026-3ee34a7d66df", 400),
  },
  {
    quote: "The builder delayed our flat by three years. Lexora won our RERA case with full interest.",
    name: "Aditya Rao",
    role: "Home buyer, Noida",
    area: "Property & Real Estate",
    image: img("photo-1527980965255-d3b416303d12", 400),
  },
  {
    quote: "From incorporation to our seed round, they were the calmest people in every meeting.",
    name: "Kabir Malhotra",
    role: "Co-founder, Loopwise",
    area: "Business & Corporate",
    image: img("photo-1539571696357-5a69c17a67c6", 400),
  },
  {
    quote: "Their data-protection review saved us from a regulatory fine before we launched.",
    name: "Riya Sen",
    role: "Head of Product, Finly",
    area: "Legal Advisory",
    image: img("photo-1524504388940-b1c1722653e1", 400),
  },
  {
    quote: "We leased our first office through them. Every clause explained, nothing left to chance.",
    name: "Anjali Gupta",
    role: "Owner, Studio Anjali",
    area: "Property & Real Estate",
    image: img("photo-1508214751196-bcfd4ca60f91", 400),
  },
  {
    quote: "They made my late father's estate simple for the whole family. Patient and kind throughout.",
    name: "Simran Kaur",
    role: "Private client",
    area: "Personal & Family",
    image: img("photo-1520813792240-56fc4a3765a7", 400),
  },
  {
    quote: "A recovery suit we thought was lost — they found the right argument and we recovered in full.",
    name: "Dev Patel",
    role: "Director, Patel Exports",
    area: "Litigation & Disputes",
    image: img("photo-1506794778202-cad84cf45f1d", 400),
  },
  {
    quote: "Sharp in court and straight with us outside it. Exactly what you want in a litigator.",
    name: "Harish Menon",
    role: "CFO, Menon Steel",
    area: "Litigation & Disputes",
    image: img("photo-1552058544-f2b08422138a", 400),
  },
  {
    quote: "Every contract we send out now goes through their team first. It has paid for itself many times over.",
    name: "Farhan Ali",
    role: "Founder, Alif Retail",
    area: "Legal Advisory",
    image: img("photo-1547425260-76bcadfb4f2c", 400),
  },
  {
    quote: "They guided our family business through a tricky restructuring without a single dispute.",
    name: "Ishita Bose",
    role: "Director, Bose Group",
    area: "Business & Corporate",
    image: img("photo-1554151228-14d9def656e4", 400),
  },
  {
    quote: "The title search found an old mortgage nobody had told us about. They sorted it before we paid a rupee.",
    name: "Tanya Arora",
    role: "Investor, Gurugram",
    area: "Property & Real Estate",
    image: img("photo-1546961329-78bef0414d7c", 400),
  },
  {
    quote: "Our custody arrangement was settled through mediation — no court battle, and the kids came first.",
    name: "Kavya Iyer",
    role: "Private client",
    area: "Personal & Family",
    image: img("photo-1489424731084-a5d8b219a5bb", 400),
  },
];

export type FaqTopic = "General" | "Fees" | "Process" | "Consultation";

export const FAQS: { topic: FaqTopic; q: string; a: string }[] = [
  { topic: "General", q: "Which areas of law do you handle?", a: "Business and corporate, litigation and disputes, personal and family, property and real estate, and general legal advisory." },
  { topic: "General", q: "Where are your offices?", a: "Our main office is in Gurugram, and we serve clients across the NCR and the rest of India, in person or online." },
  { topic: "General", q: "Will my information be kept confidential?", a: "Always. Everything you share with us is protected by attorney–client privilege from the very first conversation." },
  { topic: "Fees", q: "How do you charge?", a: "Depending on the matter, we work on a fixed fee, an hourly rate or a monthly retainer. You will get the fee in writing before any work starts." },
  { topic: "Fees", q: "Is the first consultation free?", a: "The first 30-minute consultation is complimentary, so you can understand your options before committing." },
  { topic: "Fees", q: "Are there any hidden costs?", a: "No. Court fees and other external costs are listed separately in your estimate, and we tell you before anything changes." },
  { topic: "Process", q: "Who will handle my matter?", a: "Every matter is led by one partner, supported by an associate. You always know who is responsible." },
  { topic: "Process", q: "How will you keep me updated?", a: "You get an update after every hearing or major step, plus a direct line to your lawyer for questions in between." },
  { topic: "Process", q: "How long will my case take?", a: "It depends on the type of matter and the forum. We give you a realistic timeline in the first meeting and update it as things move." },
  { topic: "Consultation", q: "How do I book a consultation?", a: "Use the Book Consultation page to pick a date, time and format. We confirm within one working day." },
  { topic: "Consultation", q: "What should I bring?", a: "Any notices, contracts, letters or documents related to your matter. A short timeline of events also helps." },
  { topic: "Consultation", q: "Can I consult over video?", a: "Yes. You can choose an in-person, video or phone consultation when you book." },
];
