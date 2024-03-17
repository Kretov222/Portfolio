const express = require('express');
const { Appeal } = require('../../../db/models');

const apiAppealsRouter = express.Router();

apiAppealsRouter
  .route('/')

  .get(async (req, res) => {
    try {
      const data = await Appeal.findAll();
      console.log(data);
      return res.json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { authorName, description, type } = req.body;
      const newdata = await Appeal.create({
        authorName,
        description,
        date: new Date(),
        status: 'В очереди',
        type,
      });
      return res.status(201).json(newdata);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });
apiAppealsRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Appeal.destroy({
        where: {
          id,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      await Appeal.update(req.body, {
        where: {
          id,
        },
      });
      const updatedAppeal = await Appeal.findByPk(id);
      res.status(200).json(updatedAppeal);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = apiAppealsRouter;
