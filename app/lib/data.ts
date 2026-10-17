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
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phone: "+1 0000 0000",
  email: "info@xyz.com",
  address: "1234 Main Street, Suite 100, Springfield, IL 62701, USA",
  hours: "Mon – Sat · 9:00 – 19:00",
};

export type IconName = "briefcase" | "scales" | "family" | "home" | "doc";

export const PRACTICE = [
  {
    slug: "business-corporate",
    icon: "briefcase" as IconName,
    title: "Business & Corporate",
    line: "Deals, governance and growth — structured to last.",
    services: ["Mergers & Acquisitions", "Contracts", "Compliance", "Startups", "Employment", "Joint Ventures"],
    image: IMAGES.skyscrapers,
    gallery: [IMAGES.boardroom, IMAGES.signing, IMAGES.glassTower],
  },
  {
    slug: "litigation-disputes",
    icon: "scales" as IconName,
    title: "Litigation & Disputes",
    line: "Courtroom strength when it matters most.",
    services: ["Civil Litigation", "Arbitration", "Criminal Defence", "Appeals", "Mediation", "Injunctions"],
    image: IMAGES.gavelDark,
    gallery: [IMAGES.courthouse, IMAGES.justiceLight, IMAGES.library],
  },
  {
    slug: "personal-family",
    icon: "family" as IconName,
    title: "Personal & Family",
    line: "Sensitive matters, handled with care.",
    services: ["Divorce", "Child Custody", "Wills & Estates", "Adoption", "Personal Injury", "Guardianship"],
    image: IMAGES.family,
    gallery: [IMAGES.meetingWomen, IMAGES.documents, IMAGES.officeWindow],
  },
  {
    slug: "property-real-estate",
    icon: "home" as IconName,
    title: "Property & Real Estate",
    line: "Every square foot, legally sound.",
    services: ["Transactions", "Leasing", "Title Disputes", "Development", "Tenancy", "RERA Matters"],
    image: IMAGES.houseModern,
    gallery: [IMAGES.housePool, IMAGES.houseGarden, IMAGES.signing2],
  },
  {
    slug: "legal-advisory",
    icon: "doc" as IconName,
    title: "Legal Advisory",
    line: "Clear answers before problems begin.",
    services: ["Due Diligence", "Risk Review", "Documentation", "Regulatory", "Retainers", "Policy Drafting"],
    image: IMAGES.signing2,
    gallery: [IMAGES.laptopDesk, IMAGES.meetingTable, IMAGES.officeBright],
  },
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
