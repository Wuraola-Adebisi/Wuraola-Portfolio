export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Card / Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    },
    {
      name: "domain",
      title: "Domain",
      type: "string",
      options: {
        list: [
          { title: "Studio", value: "Studio" },
          { title: "Product App", value: "Product App" },
          { title: "E-commerce", value: "E-commerce" },
          { title: "Event", value: "Event" },
          { title: "Editorial", value: "Editorial" },
        ],
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      initialValue: "Frontend Developer",
    },
    {
      name: "context",
      title: "Card Description",
      description: "Short teaser shown on the project card.",
      type: "text",
      rows: 3,
    },
    {
      name: "tech",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "API",
          "Tailwind CSS",
        ],
      },
    },
    {
      name: "problem",
      title: "Problem / Context",
      description: "What was needed, and who for. Case study only.",
      type: "text",
      rows: 4,
    },
    {
      name: "decisions",
      title: "What I Built",
      description: "3-5 feature areas covered, e.g. \"Cart System\", \"Auth & Onboarding\".",
      type: "array",
      of: [
        {
          type: "object",
          name: "decision",
          fields: [
            {
              name: "title",
              title: "Feature Area",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
          ],
        },
      ],
    },
    {
      name: "outcome",
      title: "Outcome",
      description: "Optional. Only fill in if there is a real, honest result.",
      type: "text",
      rows: 3,
    },
    {
      name: "secondaryImages",
      title: "Supporting Images",
      description: "Process shots or additional visuals for the case study.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "domain",
      media: "image",
    },
  },
};