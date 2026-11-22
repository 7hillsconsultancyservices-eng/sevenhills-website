export interface Stage {
  number: string;
  name: string;
  shortName: string;
  summary: string;
  threadNote: string;
  description: string;
  bullets: string[];
  carries: string;
}

export const stages: Stage[] = [
  {
    number: '01',
    name: 'CRF Design',
    shortName: 'CRF Design',
    summary: 'Define the form, field, unit, and edit checks once.',
    threadNote: 'Defined with unit and range check',
    description:
      'Case report forms are designed as controlled definitions. Each field carries its label, type, unit, code list, range, and edit checks into the rest of the platform, so the same definition is used for capture, cleaning, analysis, and reporting.',
    bullets: [
      'Reusable form and field libraries with version control.',
      'Edit checks, derivations, and code lists defined at design time.',
      'Structured metadata that downstream stages can read directly.',
    ],
    carries: 'Field definitions, units, code lists, and edit-check logic.',
  },
  {
    number: '02',
    name: 'Trial Master File',
    shortName: 'TMF',
    summary: 'Keep the study record complete and inspectable.',
    threadNote: 'Form version filed',
    description:
      'The Trial Master File holds the documents that show how a study was run and governed. SevenHills is designing the TMF as part of the same record as the data, so document versions, approvals, and form definitions stay aligned with the trial they belong to.',
    bullets: [
      'Document metadata, version history, and status tracking.',
      'Expected-document checklists by study and site.',
      'Links between filed documents and the forms and data they govern.',
    ],
    carries: 'Document versions, approvals, and filing status.',
  },
  {
    number: '03',
    name: 'Data Capture and Interlinking',
    shortName: 'EDC',
    summary: 'Enter data once, with its context attached.',
    threadNote: 'Captured once at site',
    description:
      'Electronic data capture is where the thread becomes visible. A site user enters a value once, and the platform keeps the subject, visit, form, field, and source context attached. Interlinking connects related records, such as a lab result to the visit and to the safety review that follows.',
    bullets: [
      'Visit-based and subject-based data entry.',
      'Source context and an audit trail on every change.',
      'Links between related forms, records, and external data.',
    ],
    carries: 'Captured values, source context, and change history.',
  },
  {
    number: '04',
    name: 'Clinical Data Management',
    shortName: 'CDM',
    summary: 'Clean, query, and reconcile with a visible history.',
    threadNote: 'Query raised and closed',
    description:
      'Clinical data management turns captured data into reviewable data. The platform is being designed to support query generation, discrepancy tracking, coding review, and reconciliation while keeping every action attached to the underlying field.',
    bullets: [
      'Edit-check runs, queries, and resolution history.',
      'Medical coding with MedDRA and WHODrug dictionaries.',
      'Reconciliation across clinical, lab, and external data.',
    ],
    carries: 'Clean values, query history, and coding decisions.',
  },
  {
    number: '05',
    name: 'Pharmacovigilance',
    shortName: 'Pharmacovigilance',
    summary: 'Review safety signals without re-keying the case.',
    threadNote: 'Abnormal result reviewed',
    description:
      'Safety review depends on clinical detail arriving intact. SevenHills is designing pharmacovigilance workflows that read the same captured data, flag relevant events and abnormal results, and preserve the link back to the source record.',
    bullets: [
      'Adverse event and serious adverse event intake.',
      'Follow-up tracking and case documentation.',
      'Safety review linked to the originating clinical record.',
    ],
    carries: 'Safety cases, assessments, and follow-up status.',
  },
  {
    number: '06',
    name: 'Biostatistics',
    shortName: 'Biostatistics',
    summary: 'Map clean data to analysis-ready structures.',
    threadNote: 'Mapped to analysis data',
    description:
      'Biostatistics defines how clean clinical data becomes analysis data. The platform is intended to carry field-level metadata into analysis dataset specifications, so mapping decisions are explicit and can be traced back to the collected value.',
    bullets: [
      'Analysis dataset specifications and mapping.',
      'Derived variables and analysis populations.',
      'Traceability from an analysis variable to a CRF field.',
    ],
    carries: 'Analysis mappings, derived variables, and populations.',
  },
  {
    number: '07',
    name: 'SAS Analysis',
    shortName: 'SAS Analysis',
    summary: 'Generate tables, listings, and figures from mapped data.',
    threadNote: 'Table generated',
    description:
      'SAS programming produces the outputs that support review and reporting. SevenHills is designing the analysis stage to run from the same mapped data and to record which program, dataset, and version produced each output.',
    bullets: [
      'Tables, listings, and figures for study review.',
      'Program and output version tracking.',
      'Validation checks on analysis results.',
    ],
    carries: 'Programs, outputs, and validation evidence.',
  },
  {
    number: '08',
    name: 'Final Report Generation',
    shortName: 'Final Report',
    summary: 'Assemble the report with its evidence attached.',
    threadNote: 'Result in final report',
    description:
      'The final report should be an assembly of the record, not a reconstruction of it. The platform is being designed to bring results, outputs, and supporting documentation together so each reported value can be followed back through the analysis to the captured source.',
    bullets: [
      'Structured report sections and content reuse.',
      'Links from reported results to outputs and source data.',
      'Review and approval history for report versions.',
    ],
    carries: 'Report versions, approvals, and source links.',
  },
];

export interface Service {
  number: string;
  name: string;
  short: string;
  what: string;
  actions: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    number: '01',
    name: 'CRF Design and EDC Build',
    short: 'Forms, field definitions, and a tested electronic data capture build.',
    what: 'Case report form design and the electronic data capture build that turns the design into a working study.',
    actions: [
      'Translate protocols and study objectives into CRF structure.',
      'Build forms, field definitions, units, code lists, and edit checks.',
      'Configure visit schedules, subject identifiers, and data entry paths.',
      'Test the build against the protocol and document the result.',
    ],
    deliverables: [
      'Annotated CRF and field specification',
      'Configured EDC forms and edit checks',
      'UAT script, findings, and sign-off record',
    ],
  },
  {
    number: '02',
    name: 'Clinical Data Management',
    short: 'Day-to-day data quality, queries, coding, and database lock.',
    what: 'Day-to-day management of clinical data quality from first patient in to database lock.',
    actions: [
      'Run edit checks and manage queries to resolution.',
      'Review data trends, discrepancies, and protocol deviations.',
      'Perform medical coding and reconciliation.',
      'Prepare data for analysis and archive the study record.',
    ],
    deliverables: [
      'Data management plan and edit-check specification',
      'Query and discrepancy logs',
      'Clean data extract and database lock documentation',
    ],
  },
  {
    number: '03',
    name: 'Medical Coding (MedDRA / WHODrug)',
    short: 'Consistent coding of events, history, and medications.',
    what: 'Structured coding of adverse events, medical history, and concomitant medications using standard dictionaries.',
    actions: [
      'Code terms with MedDRA and WHODrug at the agreed version.',
      'Review coding consistency and synonym decisions.',
      'Manage dictionary upgrades and recoding impact.',
      'Document coding conventions and query resolutions.',
    ],
    deliverables: [
      'Coded term datasets',
      'Coding conventions and dictionary version record',
      'Coding review and query log',
    ],
  },
  {
    number: '04',
    name: 'TMF and Clinical Documentation',
    short: 'Trial Master File structure, document control, and inspection readiness.',
    what: 'Trial Master File structure, document control, and the clinical documentation that supports inspection readiness.',
    actions: [
      'Set up TMF structure and expected-document lists.',
      'Track document versions, approvals, and filing status.',
      'Support periodic completeness and quality reviews.',
      'Align document control with study and site workflows.',
    ],
    deliverables: [
      'TMF plan and index',
      'Expected-document checklist by study and site',
      'Completeness review and filing log',
    ],
  },
  {
    number: '05',
    name: 'Pharmacovigilance and Drug Safety',
    short: 'Safety intake, assessment, follow-up, and reconciliation.',
    what: 'Safety intake, assessment, and follow-up support for adverse events and serious adverse events.',
    actions: [
      'Support adverse event and serious adverse event intake.',
      'Track case documentation, follow-up, and timelines.',
      'Reconcile safety cases with clinical data.',
      'Maintain clear links between the case and the source record.',
    ],
    deliverables: [
      'Safety case files and follow-up log',
      'Reconciliation record with clinical data',
      'Safety review documentation',
    ],
  },
  {
    number: '06',
    name: 'Biostatistics and SAS Programming',
    short: 'Analysis specifications, validated programs, and study outputs.',
    what: 'Statistical input and SAS programming from analysis specifications through tables, listings, and figures.',
    actions: [
      'Define analysis datasets, populations, and derived variables.',
      'Write and validate SAS programs for outputs.',
      'Produce tables, listings, and figures for review and reporting.',
      'Document mapping from analysis variables to collected fields.',
    ],
    deliverables: [
      'Statistical analysis plan input and analysis dataset specifications',
      'Validated SAS programs',
      'Tables, listings, figures, and validation record',
    ],
  },
  {
    number: '07',
    name: 'Software Development, Clinical Applications',
    short: 'Clinical software, integrations, and controlled application change.',
    what: 'Design and development of clinical software, from workflow tools to validated application components.',
    actions: [
      'Design clinical workflows around real study operations.',
      'Build web applications and integrations with controlled change.',
      'Implement audit trails, access control, and data traceability.',
      'Support testing, release, and maintenance.',
    ],
    deliverables: [
      'Technical design and data model',
      'Application build and integration documentation',
      'Test evidence and release record',
    ],
  },
  {
    number: '08',
    name: 'QA and Validation, Clinical Software',
    short: 'Risk-based validation, traceability, and audit readiness.',
    what: 'Quality assurance and computer system validation for clinical software and regulated workflows.',
    actions: [
      'Plan validation according to intended use and risk.',
      'Write and execute test scripts with traceability.',
      'Review requirements, design, and change control.',
      'Support audit readiness and periodic review.',
    ],
    deliverables: [
      'Validation plan and risk assessment',
      'Requirements traceability matrix',
      'Test scripts, evidence, and validation summary',
    ],
  },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

export const company = {
  brand: 'SevenHills',
  legalName: 'SEVENHILLS CONSULTANCY SERVICES INCORPORATED',
  tagline: 'Clinical Data Management & Pharma Technology',
  email: 'info@shcdata.ca',
  location: 'Scarborough, Toronto, Ontario, Canada',
  incorporated: 'June 13, 2024',
  domain: 'shcdata.ca',
};

export const pageMeta = {
  home: {
    title: 'SevenHills | Clinical Data Management & Pharma Technology',
    description:
      'SevenHills is building one connected clinical data platform, from CRF design and EDC through pharmacovigilance, biostatistics, SAS analysis, and final report generation.',
  },
  platform: {
    title: 'Platform | SevenHills Clinical Data Platform',
    description:
      'Explore the SevenHills platform flow: CRF design, TMF, EDC, clinical data management, pharmacovigilance, biostatistics, SAS analysis, and final report generation.',
  },
  services: {
    title: 'Services | Clinical Data Management and Pharma Technology',
    description:
      'SevenHills services across CRF design and EDC, clinical data management, medical coding, TMF, pharmacovigilance, biostatistics, SAS programming, software development, and validation.',
  },
  about: {
    title: 'About | SevenHills, Scarborough, Ontario',
    description:
      'SevenHills is an Ontario-incorporated clinical technology company based in Scarborough, Toronto, building a connected clinical data platform and delivering specialist services.',
  },
  careers: {
    title: 'Careers | SevenHills Clinical Technology',
    description:
      'SevenHills is building its product development team across clinical data management, pharmacovigilance, biostatistics, SAS programming, software development, and validation.',
  },
  contact: {
    title: 'Contact | SevenHills',
    description:
      'Contact SevenHills in Scarborough, Toronto, Ontario, to discuss clinical data management, pharma technology, or the SevenHills platform.',
  },
};
