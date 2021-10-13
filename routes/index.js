import AppController from '../controllers/AppController';
import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
  AppController.getStatus(req, res);
});

router.get('/stats', (req, res) => {
  AppController.getStats(req, res);
});

module.exports = router;

