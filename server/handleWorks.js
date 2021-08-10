const worksList = require('./workList');

const getWorksList = (req, res) => {
    const works = worksList.getWorkList();
    let tempArray = [];

    for(let key in works) {
        let tempObj = {};

        tempObj.id = key;
        tempObj.img = works[key].img;

        tempArray.push(tempObj);
    }
    res.send(tempArray);
}

module.exports = {
    getWorksList
}