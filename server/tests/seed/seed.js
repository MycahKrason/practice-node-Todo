const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

//testing data

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
    {
        _id: userOneId,
        email: 'mycah@test.com',
        password: 'userOnePass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userOneId, access: 'auth'}, 'randomsecret').toString()
        }]
    },
    {
        _id: userTwoId,
        email: 'moki@test.com',
        password: 'userTwoPass'
    }
]

const todos = [
    {
        _id: new ObjectID(), 
        text: 'Test 1'
    }, 
    {
        _id: new ObjectID(), 
        text: 'Test 2',
        completed: true, 
        completedAt: 123
    },
    {
        _id: new ObjectID(), 
        text: 'Test 3'
    }
];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};