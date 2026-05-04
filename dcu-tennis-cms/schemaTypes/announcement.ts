export default {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Urgent", value: "urgent" },
          { title: "Info", value: "info" },
          { title: "Normal", value: "normal" },
        ],
      },
    },
    {
      name: "badge",
      title: "Badge (Emoji + Text)",
      type: "string",
    },
  ],
};