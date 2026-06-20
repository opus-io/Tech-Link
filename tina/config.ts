import { defineConfig } from "tinacms";

// TinaCMS Configuration untuk Tech-Link-Final
// Manage products dengan GUI admin panel

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputDir: "admin",
    publicDir: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      targetPath: "/images/",
    },
  },
  schema: {
    collections: [
      {
        label: "Products",
        name: "products",
        path: "content/products",
        format: "json",
        ui: {
          // Admin panel display
          previewSrc: "/admin/index.html",
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "products",
            label: "All Products",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Product Name",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Product Image",
                required: true,
              },
              {
                type: "boolean",
                name: "featured",
                label: "Featured (Show as highlight)?",
              },
              {
                type: "string",
                name: "badge",
                label: "Badge Label",
                description: 'e.g. "FEATURED", "STANDARD_ISSUE"',
                required: true,
              },
              {
                type: "string",
                list: true,
                name: "tags",
                label: "Platform Tags",
                description: 'e.g. "SHOPEE", "TIKTOK", "TOKOPEDIA"',
                ui: {
                  itemProps: (item) => ({ label: item }),
                },
              },
              {
                type: "string",
                name: "defaultUrl",
                label: "Default URL (when image clicked)",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "object",
                list: true,
                name: "links",
                label: "Access Links",
                ui: {
                  itemProps: (item) => ({
                    label: item?.label || "New Link",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Link Label",
                    description: 'e.g. "ACCESS // SHOPEE"',
                    required: true,
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Link URL",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Link Color",
                    options: ["amber", "green", "white"],
                    ui: {
                      component: "radio",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "variant",
                label: "Styling Variant",
                options: ["featured", "standard"],
                ui: {
                  component: "radio",
                },
                required: true,
              },
            ],
          },
        ],
        defaultItem: {
          products: [
            {
              title: "New Product",
              featured: false,
              variant: "standard",
              links: [],
              tags: [],
            },
          ],
        },
      },
    ],
  },
});
