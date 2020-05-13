import express from 'express';
import doscgRouter from './doscg.route';

const router = express.Router();

/**
 * remove prefix /api use  to the future.
 */
router.use('/v1/doscg', doscgRouter);

export default router;