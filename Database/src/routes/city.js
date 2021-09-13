import { Router } from 'express';
const city = require('../controllers/city.controller');
const router = Router();

router.get('/:id', city.getCity);

router.post('/createCity', city.createCity);

router.post('/delete', city.deleteCity);

router.post('/update/:id', city.updateCity);

export default router;