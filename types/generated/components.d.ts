import type { Schema, Struct } from '@strapi/strapi';

export interface ProductColorType extends Struct.ComponentSchema {
  collectionName: 'components_product_color_types';
  info: {
    description: 'Define color either as a hex value or an image';
    displayName: 'Color Type';
  };
  attributes: {
    Color: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'folder';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.cta', false>;
    Headline: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Schema.Attribute.Text;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    BtnLink: Schema.Attribute.String;
    BtnText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.color-type': ProductColorType;
      'shared.banner': SharedBanner;
      'shared.cta': SharedCta;
    }
  }
}
