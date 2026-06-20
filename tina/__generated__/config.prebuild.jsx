// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputDir: "admin",
    publicDir: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      targetPath: "/images/"
    }
  },
  schema: {
    collections: [
      {
        label: "Products",
        name: "product",
        path: "content/products",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.title?.toLowerCase().replace(/ /g, "-") || "product";
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Product Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Product Image URL",
            description: "Paste URL gambar produk",
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Product?"
          },
          {
            type: "string",
            name: "badge",
            label: "Badge Label",
            description: 'Contoh: "FEATURED", "STANDARD_ISSUE", "NEW"',
            required: true
          },
          {
            type: "string",
            list: true,
            name: "tags",
            label: "Platform Tags",
            description: "Contoh: SHOPEE, TIKTOK, TOKOPEDIA"
          },
          {
            type: "string",
            name: "defaultUrl",
            label: "Default URL",
            description: "URL yang terbuka saat klik gambar produk",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            },
            required: true
          },
          {
            type: "object",
            list: true,
            name: "links",
            label: "Access Links",
            ui: {
              itemProps: (item) => ({
                label: item?.label || "New Link"
              })
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Link Label",
                description: 'Contoh: "ACCESS // SHOPEE"',
                required: true
              },
              {
                type: "string",
                name: "href",
                label: "Link URL",
                required: true
              },
              {
                type: "string",
                name: "color",
                label: "Link Color",
                options: ["amber", "green", "white"],
                ui: {
                  component: "radio"
                }
              }
            ]
          },
          {
            type: "string",
            name: "variant",
            label: "Styling Variant",
            options: [
              {
                label: "Featured (Highlight)",
                value: "featured"
              },
              {
                label: "Standard",
                value: "standard"
              }
            ],
            ui: {
              component: "radio"
            },
            required: true
          }
        ],
        defaultItem: () => ({
          title: "New Product",
          imageAlt: "",
          image: "",
          featured: false,
          badge: "STANDARD_ISSUE",
          tags: [],
          defaultUrl: "https://",
          description: "",
          links: [],
          variant: "standard"
        })
      }
    ]
  }
});
export {
  config_default as default
};
