export type UpgradeMatch = {
  usage?: string[];
  dockType?: string[];
  priorities?: string[];
  budget?: string[];
  goal?: string[];
  requiresSeating?: boolean;
  lake?: ('Lake of the Ozarks' | 'Table Rock Lake')[];
};

export type CoverDetails = {
  coverType: string;
  systemBrand?: string;
  localProvider?: string;
  websiteUrl?: string;
  lakeCoverage?: ('Lake of the Ozarks' | 'Table Rock Lake')[];
};

export type LiftDetails = {
  liftType: string;
  systemBrand?: string;
  localProvider?: string;
  websiteUrl?: string;
  lakeCoverage?: ('Lake of the Ozarks' | 'Table Rock Lake')[];
  sizingNotes?: string[];
  automationLevel?: 'manual' | 'assisted' | 'automatic';
};

export type ComfortDetails = {
  comfortType: string;
  systemBrand?: string;
  localProvider?: string;
  websiteUrl?: string;
  lakeCoverage?: ('Lake of the Ozarks' | 'Table Rock Lake')[];
};

export type UpgradeItem = {
  id: number;
  category: 'Dock' | 'Comfort' | 'Performance' | 'Cover';
  title: string;
  description: string;
  match: UpgradeMatch;
  cover?: CoverDetails;
  lift?: LiftDetails;
  comfort?: ComfortDetails;
};

export const upgrades: UpgradeItem[] = [
  // ======================
  // DOCK
  // ======================
  {
    id: 1,
    category: 'Dock',
    title: 'Open Water Poly Lift System',
    description:
      'Lake of the Ozarks lift option from Open Water Dock Company for covered-slip setups needing a locally installed Poly Lift system.',
    match: {
      dockType: ['Covered slip'],
      budget: ['90-150', '150+'],
      lake: ['Lake of the Ozarks'],
    },
    lift: {
      liftType: 'boat lift',
      systemBrand: 'Poly Lift',
      localProvider: 'Open Water Dock Company',
      lakeCoverage: ['Lake of the Ozarks'],
      automationLevel: 'assisted',
      sizingNotes: [
        'Confirm lift capacity against actual boat dry weight, fuel load, gear, and trailerable dimensions.',
        'Verify slip width, guide spacing, and roof clearance before final installer recommendation.',
      ],
    },
  },
  {
    id: 12,
    category: 'Dock',
    title: 'Fitzco AirHoist Lift System',
    description:
      'Table Rock Lake lift option from Fitzco Marine Group for covered-slip setups needing a locally installed AirHoist system.',
    match: {
      dockType: ['Covered slip'],
      budget: ['90-150', '150+'],
      lake: ['Table Rock Lake'],
    },
    lift: {
      liftType: 'boat lift',
      systemBrand: 'AirHoist',
      localProvider: 'Fitzco Marine Group',
      lakeCoverage: ['Table Rock Lake'],
      automationLevel: 'assisted',
      sizingNotes: [
        'Confirm lift capacity against actual boat dry weight, fuel load, ballast, accessories, and seasonal gear.',
        'Verify slip width, dock framing, and fluctuating-water setup requirements before final installer recommendation.',
      ],
    },
  },

  // ======================
  // COMFORT
  // ======================
  {
    id: 2,
    category: 'Comfort',
    title: 'SHO-ME MISTER Dock Misting System',
    description:
      'Provider-based dock misting option from SHO-ME MISTER for seating areas that need active cooling and more comfortable warm-weather hangout time.',
    match: {
      lake: ['Lake of the Ozarks', 'Table Rock Lake'],
      budget: ['60-90', '90-150', '150+'],
      requiresSeating: true,
    },
    comfort: {
      comfortType: 'dock misting system',
      systemBrand: 'SHO-ME MISTER',
      localProvider: 'SHO-ME MISTER',
      lakeCoverage: ['Lake of the Ozarks', 'Table Rock Lake'],
    },
  },
  {
    id: 13,
    category: 'Comfort',
    title: 'DockWorks Seating Shade Upgrade',
    description:
      'Lake of the Ozarks dock seating-area upgrade path from DockWorks for creating a more comfortable shaded hangout area.',
    match: {
      lake: ['Lake of the Ozarks'],
      budget: ['30-60', '60-90', '90-150', '150+'],
      requiresSeating: true,
    },
    comfort: {
      comfortType: 'dock seating shade upgrade',
      localProvider: 'DockWorks LLC',
      lakeCoverage: ['Lake of the Ozarks'],
    },
  },
  {
    id: 14,
    category: 'Comfort',
    title: 'Fitzco Seating Shade Upgrade',
    description:
      'Table Rock Lake dock seating-area upgrade path from Fitzco Marine Group for improving shade and guest comfort around the dock.',
    match: {
      lake: ['Table Rock Lake'],
      budget: ['30-60', '60-90', '90-150', '150+'],
      requiresSeating: true,
    },
    comfort: {
      comfortType: 'dock seating shade upgrade',
      localProvider: 'Fitzco Marine Group',
      lakeCoverage: ['Table Rock Lake'],
    },
  },

  // ======================
  // PERFORMANCE
  // ======================
  {
    id: 4,
    category: 'Performance',
    title: 'Wake Enhancement Setup',
    description:
      'Ballast optimization and setup guidance for better wake performance.',
    match: {
      usage: ['Wakeboarding'],
      budget: ['60-90', '90-150', '150+'],
    },
  },

  // ======================
  // COVER OPTIONS (TIERED)
  // ======================

  // Entry level
  {
    id: 5,
    category: 'Cover',
    title: 'Paradise Canvas Custom Cover',
    description:
      'Custom-fitted cover service from Paradise Canvas for Lake of the Ozarks boats needing tailored everyday protection.',
    match: {
      dockType: ['Covered slip', 'Covered slip with seating area', 'Open dock'],
      budget: ['30-60', '60-90', '90-150'],
      lake: ['Lake of the Ozarks'],
    },
    cover: {
      coverType: 'custom boat cover',
      localProvider: 'Paradise Canvas',
      lakeCoverage: ['Lake of the Ozarks'],
    },
  },

  // Table Rock custom cover service
  {
    id: 6,
    category: 'Cover',
    title: 'Branson West Marine Custom Cover Service',
    description:
      'Locally relevant boat cover and canvas service option near Table Rock Lake for fitted protection and everyday storage needs.',
    match: {
      dockType: ['Covered slip', 'Covered slip with seating area', 'Open dock', 'No dock yet'],
      budget: ['30-60', '60-90', '90-150'],
      lake: ['Table Rock Lake'],
    },
    cover: {
      coverType: 'custom boat cover',
      localProvider: 'Branson West Marine and Powersports',
      lakeCoverage: ['Table Rock Lake'],
    },
  },

  // Lake of the Ozarks touchless installer
  {
    id: 7,
    category: 'Cover',
    title: 'Ozark Touchless Cover System',
    description:
      'Lake of the Ozarks automatic Touchless Boat Cover option for buyers prioritizing fast daily use and dockside convenience.',
    match: {
      priorities: ['Automation / Convenience'],
      dockType: ['Covered slip', 'Covered slip with seating area'],
      budget: ['90-150', '150+'],
      lake: ['Lake of the Ozarks'],
    },
    cover: {
      coverType: 'automatic touchless cover',
      systemBrand: 'Touchless Boat Cover',
      localProvider: 'Ozark Touchless Cover',
      lakeCoverage: ['Lake of the Ozarks'],
    },
  },

  // Table Rock touchless installer
  {
    id: 8,
    category: 'Cover',
    title: 'Sho-Me Touchless Cover System',
    description:
      'Table Rock Lake automatic Touchless Boat Cover option for owners who want button-up protection and easier in-season use.',
    match: {
      priorities: ['Automation / Convenience'],
      dockType: ['Covered slip', 'Covered slip with seating area'],
      budget: ['90-150', '150+'],
      lake: ['Table Rock Lake'],
    },
    cover: {
      coverType: 'automatic touchless cover',
      systemBrand: 'Touchless Boat Cover',
      localProvider: 'Sho-Me Touchless Boat Cover',
      lakeCoverage: ['Table Rock Lake'],
    },
  },

  // Lake of the Ozarks mooring-style canvas
  {
    id: 9,
    category: 'Cover',
    title: 'Paradise Canvas Mooring Cover',
    description:
      'Lake of the Ozarks custom mooring-cover solution from Paradise Canvas for open-dock and storage-focused setups.',
    match: {
      dockType: ['Open dock', 'No dock yet'],
      budget: ['30-60', '60-90', '90-150'],
      lake: ['Lake of the Ozarks'],
    },
    cover: {
      coverType: 'mooring cover',
      localProvider: 'Paradise Canvas',
      lakeCoverage: ['Lake of the Ozarks'],
    },
  },

  // Table Rock mooring-style canvas
  {
    id: 10,
    category: 'Cover',
    title: 'Branson West Marine Mooring Cover',
    description:
      'Table Rock Lake cover service option for mooring-style protection and day-to-day outdoor storage.',
    match: {
      dockType: ['Open dock', 'No dock yet'],
      budget: ['30-60', '60-90', '90-150'],
      lake: ['Table Rock Lake'],
    },
    cover: {
      coverType: 'mooring cover',
      localProvider: 'Branson West Marine and Powersports',
      lakeCoverage: ['Table Rock Lake'],
    },
  },

  // Trailering use case
  {
    id: 11,
    category: 'Cover',
    title: 'Travel / Tow Cover',
    description:
      'Best suited for owners who trailer frequently or store their boat off-site.',
    match: {
      dockType: ['No dock yet', 'Open dock'],
      goal: ['Trailer often', 'Store off-site'],
      budget: ['30-60', '60-90', '90-150', '150+'],
    },
  },
];
