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

const nextWork = (key, obj) => {
    let keys = Object.keys(obj);
    let next = keys[(keys.indexOf(key) + 1) % keys.length];

    if(next === keys[(keys.indexOf(1) + 1) % keys.length]) {
        next = false;
    }

    return next;
}

const prevWork = (key, obj) => {
    let keys = Object.keys(obj);
    let prev = keys[(keys.indexOf(key) - 1) % keys.length];

    if(prev === undefined) {
        prev = false;
    }
    return prev;
}

const getSingleWork = (req, res) => {
    const workId = req.query.id;
    const works = worksList.getWorkList();
    const tempObj = works[workId];
    tempObj.next = nextWork(workId, works);
    tempObj.prev = prevWork(workId, works);

    res.send(tempObj);
}

module.exports = {
    getWorksList,
    getAllWorks,
    getSingleWork
}