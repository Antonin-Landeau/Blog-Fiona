export default {
  name: "recepies",
  title: "Recepies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name:'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'ingredient'}]
    },
    {
      name: "type",
      title: "Type de recette",
      type: "reference",
      to: { type: "recepiesTypes" },
    },
    {
      name: "duration",
      title: "Durée",
      type: "object",
      fields: [
        {
          name: "preparationTime",
          type: "number",
          title: "Temps de péparation",
        },
        { name: "restTime", type: "number", title: "Temps de repos" },
        { name: "cookTime", type: "number", title: "Temps de cuisson" },
        { name: "totalTime", type: "number", title: "Temps Total" },
      ],
    },
    {
      name: "preparation",
      title: "Préparation",
      type: "blockContent",
    },
  ],
};
