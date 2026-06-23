export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "aboutPhoto",
      title: "About Section Photo",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      media: "aboutPhoto",
    },
    prepare(selection) {
      return {
        title: "Site Settings",
        media: selection.media,
      };
    },
  },
};