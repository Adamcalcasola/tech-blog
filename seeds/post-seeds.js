const { Post } = require('../models');

const postdata = [
  {
    title: 'Post One',
    content: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Post Two',
    post_url: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Post Three',
    post_url: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Post Four',
    post_url: 'Nunc purus.',
    user_id: 4
  },
  {
    title: 'Post Five',
    post_url: 'Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Post Six',
    post_url: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'Post Seven',
    post_url: 'In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    title: 'Post Eight',
    post_url: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Post Nine',
    post_url: 'Duis ac nibh.',
    user_id: 9
  },
  {
    title: 'Post Ten',
    post_url: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  },
  {
    title: 'Post Eleven',
    post_url: 'In hac habitasse platea dictumst.',
    user_id: 3
  },
  {
    title: 'Post Twelve',
    post_url: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Post Thirteen',
    post_url: 'Donec dapibus.',
    user_id: 8
  },
  {
    title: 'Post Fourteen',
    post_url: 'Nulla tellus.',
    user_id: 3
  },
  {
    title: 'Post Fifteen',
    post_url: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3
  },
  {
    title: 'Post Sixteen',
    post_url: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 7
  },
  {
    title: 'Post Seventeen',
    post_url: 'In hac habitasse platea dictumst.',
    user_id: 6
  },
  {
    title: 'Post Eighteen',
    post_url: 'Etiam justo.',
    user_id: 4
  },
  {
    title: 'Post Nineteen',
    post_url: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 6
  },
  {
    title: 'Post Twenty',
    post_url: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;