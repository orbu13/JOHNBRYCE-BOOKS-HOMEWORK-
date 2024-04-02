function addPages (title, newPages){
    // let title = "Don Quijote De La Mancha";

    for(let i = 0; i < books.length; i ++){
        if(books[i].title === title){
            console.log(books[i]);
            console.log(i);
            // newPages = 5667
            books[i].pages = newPages

        }
    }
}
addPages("The Divine Comedy", 6789)


