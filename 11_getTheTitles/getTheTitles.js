const getTheTitles = function(books) {
    let titles = [];
    for (let i=0 ; i<books.length;i++){
        let key = books[i];
        titles[i]= (key.title);
      }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
