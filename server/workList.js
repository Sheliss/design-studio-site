let worksList = {
    Project1 : {
        name: 'Project1',
        img: '../server/img/project1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ornare dui, eget vehicula arcu accumsan sed. Suspendisse molestie justo ac iaculis euismod. Aliquam suscipit diam quis nibh pharetra vestibulum. Duis viverra posuere blandit. Sed dapibus porttitor elit eu aliquam. Ut ipsum neque, ornare id auctor non, ultrices vitae libero. Etiam euismod vulputate tellus sed mollis. Nullam cursus sollicitudin massa eu posuere. Integer suscipit sed elit aliquam suscipit. Nullam eget mollis nulla, eu porta est. Nullam rutrum ultricies quam, ac feugiat odio facilisis sed.',
        customer: 'John Stone',
        date: '04/09/2020',
        share: {
            pinterest: '',
            twitter: ''
        }
    },
    Project2 : {
        name: 'Project2',
        img: '../server/img/project2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ornare dui, eget vehicula arcu accumsan sed. Suspendisse molestie justo ac iaculis euismod. Aliquam suscipit diam quis nibh pharetra vestibulum. Duis viverra posuere blandit. Sed dapibus porttitor elit eu aliquam. Ut ipsum neque, ornare id auctor non, ultrices vitae libero. Etiam euismod vulputate tellus sed mollis. Nullam cursus sollicitudin massa eu posuere. Integer suscipit sed elit aliquam suscipit. Nullam eget mollis nulla, eu porta est. Nullam rutrum ultricies quam, ac feugiat odio facilisis sed.',
        customer: 'Ponnappa Priya',
        date: '20/09/2020',
        share: {
            pinterest: '',
            twitter: ''
        }
    },
    Project3 : {
        name: 'Project3',
        img: '../server/img/project3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ornare dui, eget vehicula arcu accumsan sed. Suspendisse molestie justo ac iaculis euismod. Aliquam suscipit diam quis nibh pharetra vestibulum. Duis viverra posuere blandit. Sed dapibus porttitor elit eu aliquam. Ut ipsum neque, ornare id auctor non, ultrices vitae libero. Etiam euismod vulputate tellus sed mollis. Nullam cursus sollicitudin massa eu posuere. Integer suscipit sed elit aliquam suscipit. Nullam eget mollis nulla, eu porta est. Nullam rutrum ultricies quam, ac feugiat odio facilisis sed.',
        customer: 'Mia Wong',
        date: '08/10/2020',
        share: {
            pinterest: '',
            twitter: ''
        }
    },
    Project4 : {
        name: 'Project4',
        img: '../server/img/project4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ornare dui, eget vehicula arcu accumsan sed. Suspendisse molestie justo ac iaculis euismod. Aliquam suscipit diam quis nibh pharetra vestibulum. Duis viverra posuere blandit. Sed dapibus porttitor elit eu aliquam. Ut ipsum neque, ornare id auctor non, ultrices vitae libero. Etiam euismod vulputate tellus sed mollis. Nullam cursus sollicitudin massa eu posuere. Integer suscipit sed elit aliquam suscipit. Nullam eget mollis nulla, eu porta est. Nullam rutrum ultricies quam, ac feugiat odio facilisis sed.',
        customer: 'Peter Stanbridge',
        date: '01/11/2020',
        share: {
            pinterest: '',
            twitter: ''
        }
    },
    Project5 : {
        name: 'Project5',
        img: '../server/img/project5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ornare dui, eget vehicula arcu accumsan sed. Suspendisse molestie justo ac iaculis euismod. Aliquam suscipit diam quis nibh pharetra vestibulum. Duis viverra posuere blandit. Sed dapibus porttitor elit eu aliquam. Ut ipsum neque, ornare id auctor non, ultrices vitae libero. Etiam euismod vulputate tellus sed mollis. Nullam cursus sollicitudin massa eu posuere. Integer suscipit sed elit aliquam suscipit. Nullam eget mollis nulla, eu porta est. Nullam rutrum ultricies quam, ac feugiat odio facilisis sed.',
        customer: 'Natalie Lee-Walsh',
        date: '13/12/2020',
        share: {
            pinterest: '',
            twitter: ''
        }
    }
};

function getWorkList() {
    return worksList
}

module.exports = {
    getWorkList
};