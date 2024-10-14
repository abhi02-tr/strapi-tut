import type { Struct, Schema } from '@strapi/strapi';

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'files' | 'images'>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.button-link', true>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'blocks.row': BlocksRow;
      'blocks.hero': BlocksHero;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
    }
  }
}
