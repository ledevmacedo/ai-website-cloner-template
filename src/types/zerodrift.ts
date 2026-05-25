export interface LayerFeature {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface ComplianceCard {
  title: string;
  body: string;
  image: string;
}

export interface ChannelCard {
  title: string;
  body: string;
  icons: string[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}
