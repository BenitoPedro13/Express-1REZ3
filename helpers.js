module.exports = {
    paginar(limit, page = 1, pages) {
        const start = page === 1 ? 0 : limit * (page - 1);
        const end = start + limit
        const pagina = pages.slice(start, end)
        return pagina
    }
}