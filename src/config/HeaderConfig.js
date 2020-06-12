export const HeaderConfig = {
    no: {
        name: 'no',
        type: 'text',
        align: 'center',
        sortable: true,
        sortType: "int",
        accessor: (d) => d.no,
    },
    name: {
        name: 'name',
        type: 'text',
        align: 'center',
        sortable: true,
        sortType: "string",
        accessor: (d) => d.name,
    }
}