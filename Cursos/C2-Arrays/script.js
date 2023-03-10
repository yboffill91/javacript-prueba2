const equipos=[
    {
        nombre:  "PC1",
        ram: "2 GiB",
        hdd: "2 TiB",
    },

    {
        nombre:  "PC2",
        ram: "16 GiB",
        hdd: "1 TiB",
    },
    {
        nombre:  "PC3",
        ram: "8 GiB",
        hdd: "4 TiB",
    },
    {
        nombre:  "PC4",
        ram: "3 GiB",
        hdd: "12 TiB",
    },
    {
        nombre:  "PC5",
        ram: "64 GiB",
        hdd: "1 TiB",
    },
];
equipos.forEach(equipo => {
    document.write(`${equipo.nombre} ->RAM: ${equipo.ram}, HDD: ${equipo.hdd} <hr>`);
});