export type LocaleCode = 'es' | 'en';

export type ContentText = {
  readonly title: string;
  readonly description: string;
};

export type UiStrings = {
  readonly nav: {
    readonly about: string;
    readonly experience: string;
    readonly background: string;
    readonly contact: string;
    readonly cv: string;
  };
  readonly hero: {
    readonly kicker: string;
    readonly headline: string;
    readonly headlineAccent: string;
    readonly lede: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly tickerLabel: string;
  };
  readonly about: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly philosophyLabel: string;
    readonly philosophy: string;
    readonly skillLevels: Record<'primary' | 'solid' | 'working', string>;
    readonly endToEnd: string;
  };
  readonly experience: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly lede: string;
    readonly currentBadge: string;
    readonly freelanceBadge: string;
  };
  readonly background: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly educationLabel: string;
    readonly certificationLabel: string;
    readonly languageLabel: string;
    readonly languageValue: string;
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly lede: string;
    readonly emailCta: string;
    readonly linkedinCta: string;
  };
  readonly cv: {
    readonly download: string;
    readonly hint: string;
  };
  readonly footer: {
    readonly role: string;
    readonly builtWith: string;
  };
};

export type Locale = {
  readonly code: LocaleCode;
  readonly label: string;
  readonly htmlLang: string;
  readonly entries: Readonly<Record<string, ContentText>>;
  /** Display labels for concepts (not product names) that need translating. */
  readonly skillLabels: Readonly<Record<string, string>>;
  readonly ui: UiStrings;
};
