'use strict';

const demoData = {
  HeroBanner: {
    Title: "Modern Furniture Collection",
    Subtitle: "Discover timeless pieces for your home",
    CTA: {
      text: "Shop Now",
      link: "/shop"
    }
  },
  MidBanner: {
    Title: "Crafted with Care",
    Subtitle: "Explore our artisan furniture collection",
    CTA: {
      text: "View Collection",
      link: "/shop"
    }
  },
  Collections: [
    {
      Title: "Windsor",
      Handle: "windsor-collection",
      Description: "Classic wooden designs with modern comfort"
    },
    {
      Title: "Ashton",
      Handle: "ashton-collection",
      Description: "Luxurious comfort in cream and ivory"
    },
    {
      Title: "Savannah",
      Handle: "savannah-collection",
      Description: "Modern elegance in forest green"
    }
  ],
  BlogPosts: [
    {
      Title: "The Art of Furniture Design",
      Slug: "art-of-furniture-design",
      Description: "Exploring the craftsmanship behind our collections"
    },
    {
      Title: "Creating Your Perfect Living Space",
      Slug: "creating-perfect-living-space",
      Description: "Tips for selecting and arranging furniture"
    }
  ]
};

module.exports = {
  async seed(ctx) {
    try {
      // Create Collections
      const collections = await Promise.all(
        demoData.Collections.map(collection =>
          strapi.entityService.create('api::collection.collection', {
            data: {
              ...collection,
              publishedAt: new Date()
            }
          })
        )
      );

      ctx.body = {
        message: 'Demo data seeded successfully',
        data: {
          collections
        }
      };
    } catch (error) {
      ctx.body = {
        error: error.message,
        details: error.details
      };
      ctx.status = 500;
    }
  }
}; 