export const HeaderConfig = {
    id: {
        name: 'id',
        type: 'text',
        align: 'center',
        sortable: true,
        sortType: "int",
        accessor: (d) => d.id,
    },
    title: {
        name: 'title',
        type: 'url',
        align: 'center',
        sortable: true,
        url: "url",
        sortType: "string",
        accessor: (d) => d.title,
    },
    tags: {
        name: 'tags',
        type: 'text',
        align: 'center',
        sortable: true,
        sortType: "string",
        accessor: (d) => d.tags,
    }
}