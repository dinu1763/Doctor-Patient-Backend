const express = require('express');
const router = express.Router();
const crudController = require('./crud.controller');
const Doctor = require('../model/doctor.model');

router.get('/', crudController.getAll(Doctor));
router.get('/:id', crudController.getOne(Doctor));
router.post('/', crudController.post(Doctor));
router.patch('/:id', crudController.patch(Doctor));
router.delete('/:id', crudController.deleteOne(Doctor));


module.exports = router;