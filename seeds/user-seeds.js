const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'jeffery',
    password: 'password123'
  },
  {
    username: 'william',
    password: 'password123'
  },
  {
    username: 'charles',
    password: 'password123'
  },
  {
    username: 'richard',
    password: 'password123'
  },
  {
    username: 'george',
    password: 'password123'
  },
  {
    username: 'thomas',
    password: 'password123'
  },
  {
    username: 'philip',
    password: 'password123'
  },
  {
    username: 'joseph',
    password: 'password123'
  },
  {
    username: 'matthew',
    password: 'password123'
  },
  {
    username: 'michael',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;