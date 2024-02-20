const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Memorizzo l'id dei post piaciuti in un array
const likedPosts = [];



const containerElement = document.getElementById("container");


// Creo un forEach per visualizzare ogni post
posts.forEach(function (actualPost) {


    const newPost = document.createElement("div");


    newPost.innerHTML = `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${actualPost.author.image}" alt="${actualPost.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${actualPost.author.name}</div>
                <div class="post-meta__time">${actualPost.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${actualPost.content}</div>
    <div class="post__image">
        <img src="${actualPost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${actualPost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${actualPost.id}" class="js-likes-counter">${actualPost.likes}</b> persone
            </div>
        </div> 
    </div>            
    `;

    newPost.className = "post";

    containerElement.append(newPost);



    const actualLikedPost = document.querySelector(`a[data-postid="${actualPost.id}"]`)

    actualLikedPost.addEventListener("click", function(e) {

        // Prenvengo il comportamento di default dell'"a" al click
        e.preventDefault();

        // Verifico se ho già messo like ad un post
        if( ! likedPosts.includes(actualPost.id)) {
            // inserisco l'id del post nell'array dei post piaciuti
            likedPosts.push(actualPost.id);
            // aggiungo una classe che cambierà il colore del tasto "mi piace"
            actualLikedPost.classList.add("like-button--liked");

            // aumento il numero di like in pagina
            actualPost.likes ++;
            const actualLikeCounter = document.querySelector(`#like-counter-${actualPost.id}`);
            actualLikeCounter.innerText = actualPost.likes;
        }
        console.log(likedPosts)
        
    } )


})
