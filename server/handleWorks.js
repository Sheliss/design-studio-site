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

const getAllWorks = (req, res) => {
    const works = worksList.getWorkList();

    res.send(works);
}

const getSingleWork = (req, res) => {
    const workId = req.query.id;
    const works = worksList.getWorkList();
    res.send(works[workId]);
}

module.exports = {
    getWorksList,
    getAllWorks,
    getSingleWork
}