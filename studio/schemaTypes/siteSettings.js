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
    {
      name: "resumeFile",
      title: "Resume (PDF)",
      description:
        "The file behind the Download PDF button on /resume. Upload a new PDF here to swap it, no redeploy needed.",
      type: "file",
      options: { accept: "application/pdf" },
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