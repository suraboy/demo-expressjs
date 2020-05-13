import express from 'express';
import DoScgController from "../../app/api/controllers/DoScgController";
import doScgRequest from '../../app/request/scg';

const router = express.Router();
router.route('/').get([],DoScgController.callDoSCG);
router.route('/xyz').get([],DoScgController.findXYZ);
router.route('/abc').get([],DoScgController.findABC);
router.route('/map').get([],DoScgController.curlApiGoogleMap);

export default router;