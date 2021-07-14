module.exports = {
    paginar(limit, page = 1, pages) {
        const start = limit * page - limit;
        const end = start + Number(limit)
        const pagina = pages.slice(start, end)
        console.log(start, end)
        return pagina
    }
}