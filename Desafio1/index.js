
let favoriteCharacter= 'nanami from jujutsu'
document.getElementById('text').innerHTML = favoriteCharacter

 
 function CreateBook(title, author, pages){
    const book={
        this:bookTitle = title,
        this:bookAuthor = author,
        this:bookPages = pages,
        printBook: function(){
            console.log('printing');
        }  
    }
    return book;
 }

 const book1 = new CreateBook('Declinio de um Homem', '<Osamu Dazai>', 148)
 const book2 = new CreateBook('Vanitas no Carte', '<Jun Mochizuki>', 55)
 console.log(book1)
 console.log(book2)

 //----------------
 
// function CreateBook(title, author, pages){
//         this.bookTitle = title;
//         this.bookAuthor = author;
//         this.bookPages = pages 
// }

// const book1 = new CreateBook('Declinio de um Homem', '<Osamu Dazai>', 148)

// console.log(book1)

// function printBook() {
//     console.log('printing...')
// }


 
