const express = require('express');

const router = express.Router();

const Url = require('../models/connection');
const { generateUniqueId } = require('../helpers/shortenUrl');
const { BASE_URL } = require('../helpers/config');

router.get('/favicon.ico', (req, res) => res.sendStatus(204));

// TODO: Add validation to detect if url being sent is already a shortend url
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Url.findOne({ uniqueId: id });
    return res.redirect(301, result.url);
  } catch (error) {
    return res.redirect(301, `http://localhost:8080/notfound/${id}`);
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  const url = body;
  const uniqueId = generateUniqueId(6);
  url.uniqueId = uniqueId;
  url.timeGenerated = Date.now();
  const urlObject = new Url(url);
  try {
    await urlObject.save();
    return res.status(200).json({ message: 'success', shortenedUrl: `${BASE_URL}/${uniqueId}` });
  } catch {
    res.status(500);
    return res.end(JSON.stringify({ message: 'Something went wrong, Please try again' }));
  }
});

module.exports = router;
