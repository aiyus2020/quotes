function gen(){
    let quotes ={
        '— Albert Einstein': '"We cannot solve problems with the kind of thinking we employed when we came up with them."',
        '— Mahatma Gandhi': '"Learn as if you will live forever, live like you will die tomorrow."',
        '— Mark Twain' :'"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."'

    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
