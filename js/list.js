for(let i = 0; i < books.length; i++){
    let elementTitle = books[i].title
    console.log(elementTitle);
    let titleElemnt = document.createElement("h1")
    titleElemnt.innerText = books[i].title
    titleElemnt.style.background="pink"
    document.body.append(titleElemnt)

    let authorElement = document.createElement("h3")
    authorElement.innerText = books[i].author
    authorElement.style.background = "green"
    document.body.append(authorElement)

    let countryElement = document.createElement("h2")
    countryElement.innerText = books[i].country
    countryElement.style.background = "blue"
    document.body.append(countryElement)

    let imageLinkElement = document.createElement("h4")
    imageLinkElement.innerText = books[i].imageLink
    imageLinkElement.style.background = "purple"
    document.body.append(imageLinkElement)

    let linkElement = document.createElement ("h5")
    linkElement.innerText =books[i].link
    linkElement.style.background = "orange"
    document.body.append(linkElement)

    let pagesElement = document.createElement ("h1")
    pagesElement.innerText = books[i].pages
    pagesElement.style.background = " yellow"
    document.body.append(pagesElement)

    let yearElement = document.createElement ("h6")
    yearElement.innerText = books[i].year
    yearElement.style.background = "brown"
    document.body.append(yearElement)

    

}
