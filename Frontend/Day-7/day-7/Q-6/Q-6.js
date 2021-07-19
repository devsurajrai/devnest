var library = [ 
    { title: 'The Road Ahead', 
    author: 'Bill Gates', 
    libraryID: 1254 },

    { title: 'Walter Isaacson', 
    author: 'Steve Jobs', 
    libraryID: 4264 },

    { title: 'Mockingjay: The Final Book of The Hunger Games', 
    author: 'Suzanne Collins', 
    libraryID: 3245 }
    ]

// var sortedLibrary={}

// console.log(library)

for(let i=0;i<library.length-1; i++){
    
    if(library[i].libraryID<library[i+1].libraryID)
    {
        sortedLibrary=library[i+1]
        library[i+1]=library[i]
        library[i]=sortedLibrary;
    }
    
}
for(let item in library){
  console.log(library[item])
}

// console.log(library)

// library.map(item => console.log(item))

// console.log(library.sort((a, b) => (a.libraryID < b.libraryID) ? 1 : -1))

// let sortArray = (a, b) => {
//     return a.title.localeCompare(b.title);
//   };
//   library.sort(sortArray);
//   console.log(library);








