/**
 * MADAR — Shared data model types
 *
 * Phase 1 established the minimal Tool/Category/Roadmap shapes needed
 * to render the homepage. Phase 2 extends ToolDefinition into the
 * actual Tool Engine contract: enough structure for a single dynamic
 * route to render any tool's page (SEO metadata, search-indexable
 * fields, category/subcategory, and cross-links to Learn/Roadmaps)
 * without every tool needing a hand-built page.
 */

/** A string with an Arabic and English variant. */
export type LocalizedString = {
  ar: string;
  en: string;
};

/** A string list with an Arabic and English variant (e.g. search keywords). */
export type LocalizedStringList = {
  ar: string[];
  en: string[];
};

export type ToolType =
  | 'calculator'
  | 'file-processing'
  | 'text-processing'
  | 'generator'
  | 'converter'
  | 'validator'
  | 'interactive'
  | 'educational'
  | 'ai';

export type ToolCategoryId =
  | 'pdf'
  | 'engineering'
  | 'image'
  | 'developer'
  | 'text'
  | 'student'
  | 'finance'
  | 'seo'
  | 'ai';

/**
 * Engineering is the one category the Master Spec splits into
 * subcategories (Electrical, Mechanical, Pneumatics & Hydraulics,
 * Solar, Automation & Robotics — spec section 9). Other categories
 * don't use this field yet; it's optional and category-specific
 * rather than a second global taxonomy.
 */
export type EngineeringSubcategoryId =
  | 'electrical'
  | 'mechanical'
  | 'pneumatics-hydraulics'
  | 'solar'
  | 'automation-robotics';

export type ToolDefinition = {
  id: string;
  category: ToolCategoryId;
  /** Only meaningful when category === 'engineering' for now. */
  subcategory?: EngineeringSubcategoryId;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  type: ToolType;
  /** Search keywords per language — indexed by the future search system. */
  keywords?: LocalizedStringList;
  /** Icon name, resolved the same way CategoryCard resolves category icons. */
  icon?: string;
  /**
   * Whether this tool actually works today. The UI (ToolCard, tool
   * routing) always keys off this — an unimplemented tool never gets
   * a real page or a clickable link. See getStaticPaths in the tool
   * route, which only generates pages for `implemented: true` tools.
   */
  implemented: boolean;
  /** IDs of other tools this one should link to (Tools ↔ Tools). */
  relatedTools?: string[];
  /** Slugs of related Learn pages (Tools ↔ Learn). Learn doesn't exist
   *  yet, so these render as plain labels, never as links, until it does. */
  relatedLearn?: string[];
  /** IDs of related roadmaps (Tools ↔ Roadmaps). */
  relatedRoadmaps?: string[];
  /** Optional SEO overrides; falls back to title/description when omitted. */
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
  };
};

export type ToolCategoryDefinition = {
  id: ToolCategoryId;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  /** Icon name, resolved by the CategoryCard component. */
  icon: string;
};

export type EngineeringSubcategoryDefinition = {
  id: EngineeringSubcategoryId;
  title: LocalizedString;
  description?: LocalizedString;
};

/* -------------------------------------------------------------------
 * Roadmaps
 *
 * `nodes` is Phase 1's flat, lightweight preview list — RoadmapCard
 * still reads it for every roadmap, so it stays required. `sections`
 * is Phase 3's rich, structured content for a roadmap's actual detail
 * page and is optional: a roadmap with `sections` gets a real page
 * (see getStaticPaths in the roadmap route); one without it stays a
 * preview-only card, same pattern as ToolDefinition.implemented.
 * ------------------------------------------------------------------- */

export type RoadmapTopic = {
  id: string;
  title: LocalizedString;
  /** "category/slug" Learn paths this topic connects to, e.g. "electrical/ohms-law". */
  relatedLearn?: string[];
  /** Tool ids this topic connects to. */
  relatedTools?: string[];
};

export type RoadmapSection = {
  title: LocalizedString;
  topics: RoadmapTopic[];
};

export type RoadmapDefinition = {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  keywords?: LocalizedStringList;
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
  };
  /** Ordered high-level knowledge nodes, used by the lightweight RoadmapCard preview. */
  nodes: LocalizedString[];
  /** Rich detail-page content. Presence of `sections` is what gates a real page. */
  introduction?: LocalizedString;
  prerequisites?: LocalizedString[];
  sections?: RoadmapSection[];
  relatedLearn?: string[];
  relatedTools?: string[];
  relatedRoadmaps?: string[];
};

/* -------------------------------------------------------------------
 * Tool page long-form content
 *
 * Kept as a separate, optional dataset (src/data/toolContent.ts)
 * rather than bloating ToolDefinition itself: every tool card/listing
 * needs title+description, but only tools with a real page need a
 * formula, worked example, assumptions, etc. Keeping this content
 * out of ToolDefinition means listing/search/related-tools code never
 * has to load or care about it.
 * ------------------------------------------------------------------- */

export type ToolVariable = {
  symbol: string;
  label: LocalizedString;
  unit: string;
};

export type ToolFaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type ToolContent = {
  formula: LocalizedString;
  explanation: LocalizedString;
  variables: ToolVariable[];
  assumptions: LocalizedString[];
  workedExample: LocalizedString;
  commonMistakes: LocalizedString[];
  faq?: ToolFaqItem[];
};

/* -------------------------------------------------------------------
 * Learn
 *
 * Learn's category taxonomy deliberately reuses EngineeringSubcategoryId
 * rather than inventing a new one: every Learn page shipped in Phase 3
 * is an engineering topic, and the URL shape the Master Spec shows
 * (/ar/learn/electrical/ohms-law) already matches ToolDefinition's
 * subcategory values. When Learn content expands beyond Engineering
 * (Programming, AI & ML, Mathematics, ...), this field's type should
 * widen to a proper top-level "field" union — introducing that
 * taxonomy now, before any non-engineering content exists to justify
 * it, would be speculative. ToolVariable and ToolFaqItem are reused
 * as-is rather than duplicated.
 * ------------------------------------------------------------------- */

export type LearnSection = {
  heading: LocalizedString;
  body: LocalizedString;
};

export type LearnDefinition = {
  id: string;
  category: EngineeringSubcategoryId;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  keywords?: LocalizedStringList;
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
  };
  introduction: LocalizedString;
  /** Main explanation, broken into headed sections ("key concepts"). */
  sections: LearnSection[];
  /** Omit entirely for concepts with no formula — the template renders nothing. */
  formula?: LocalizedString;
  variables?: ToolVariable[];
  workedExample?: LocalizedString;
  commonMistakes?: LocalizedString[];
  faq?: ToolFaqItem[];
  /** Tool ids ("Use the calculator" links). */
  relatedTools?: string[];
  /** Roadmap ids. */
  relatedRoadmaps?: string[];
  /** "category/slug" paths of other Learn pages. */
  relatedLearn?: string[];
  /** Blog post ids — the blog system doesn't have real pages yet
   *  (see data/blog.ts), so these render as labels, never links. */
  relatedBlog?: string[];
};
