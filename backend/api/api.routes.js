const router = require('express').Router();
const { User } = require('../db/models');
const { Question } = require('../db/models');

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/cards', async (req, res) => {
  try {
    const questions = await Question.findAll({ raw: true });
    res.json(questions);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
