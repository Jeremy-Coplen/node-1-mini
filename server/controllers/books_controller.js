const books = []
let id = 0
module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },

    create: (req, res) => {
        const {title, author} = req.body
        const book = {
            id,
            title,
            author
        }
        books.push(book)
        id++
        res.status(200).send(books)
    },

    update: (req, res) => {
        const {title, author} = req.body
        bookID = null
        books.forEach((book, index) => {
            if(book.id === Number(req.params.id)) {
                bookID = index
            }
        })
        books[bookID] = {
            id: books[bookID].id,
            title: title || books[bookID].title,
            author: author || author[bookID].author
        }
        res.status(200).send(books)
    },

    delete: (req, res) => {
        books.forEach((book, index) => {
            if(book.id === Number(req.params.id)) {
                books.splice(index, 1)
            }
        })
        res.status(200).send(books)
    }
}