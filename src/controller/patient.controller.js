const express = require('express');
const router = express.Router();
const crudController = require('./crud.controller');
const Patient = require('../model/patient.model');

router.get('/', crudController.getAll(Patient));
router.get('/:id', crudController.getOne(Patient));
router.post('/', crudController.post(Patient));
router.patch('/:id', crudController.patch(Patient));
router.delete('/:id', crudController.deleteOne(Patient));


module.exports = router;