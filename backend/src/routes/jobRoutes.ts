import express from 'express';
import { createJob, getJobs, updateJob, deleteJob } from '../controllers/jobController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', protect, createJob);
router.get('/', protect, getJobs);
router.put('/:id', protect, updateJob);
router.delete('/:id', protect, deleteJob);

export default router;
