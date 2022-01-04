const { Post } = require('../models');

const postdata = [
  {
    title: 'Post One',
    content: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Post Two',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Post Three',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Post Four',
    content: 'Nunc purus.',
    user_id: 4
  },
  {
    title: 'Post Five',
    content: 'Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Post Six',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'Post Seven',
    content: 'In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    title: 'Post Eight',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Post Nine',
    content: 'Duis ac nibh.',
    user_id: 9
  },
  {
    title: 'Post Ten',
    content: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  },
  {
    title: 'Post Eleven',
    content: 'In hac habitasse platea dictumst.',
    user_id: 3
  },
  {
    title: 'Post Twelve',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Post Thirteen',
    content: 'Donec dapibus.',
    user_id: 8
  },
  {
    title: 'Post Fourteen',
    content: 'Nulla tellus.',
    user_id: 3
  },
  {
    title: 'Post Fifteen',
    content: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3
  },
  {
    title: 'Post Sixteen',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 7
  },
  {
    title: 'Post Seventeen',
    content: 'In hac habitasse platea dictumst.',
    user_id: 6
  },
  {
    title: 'Post Eighteen',
    content: 'Etiam justo.',
    user_id: 4
  },
  {
    title: 'Post Nineteen',
    content: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 6
  },
  {
    title: 'Post Twenty',
    content: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;