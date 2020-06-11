var items = {
    title: "Star Trek: Enterprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
        'Poster Art': {
        url: "https://streamcoimg-a.akamaihd.net/000/120/02/12002-PosterArt-90648d08f69e94d44d6cb4de2cdda757.jpg",
        width: 1000,
        height: 1500
        }
    },
    releaseYear: 0
    }


    function getKeyByValue(object, value) { 
        return Object.keys(object).find(key => object[key] === value); 
    } 

   // console.log(getKeyByValue(items, title));
     console.log(items[0].images['Poster Art'].url);
    // var output = items.map(item => {
    //     console.log(item.key)
    // })

// console.log(item.images['Poster Art'])
// output();

// console.log(Object.keys(items).map(k => items[k] = items[k].trim()))
