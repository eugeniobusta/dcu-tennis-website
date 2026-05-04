export default {
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Session Type",
      type: "string",
      options: {
        list: [
          { title: "Tournament", value: "tournament" },
          { title: "Match", value: "match" },
          { title: "Regular", value: "regular" },
          { title: "Social", value: "social" }
        ]
      }
    },
    {
      name: "day",
      title: "Day",
      type: "string"
    },
    {
      name: "time",
      title: "Time",
      type: "string"
    },
    {
      name: "note",
      title: "Note",
      type: "string"
    },
    {
      name: "color",
      title: "Color",
      type: "string"
    }
  ]
}