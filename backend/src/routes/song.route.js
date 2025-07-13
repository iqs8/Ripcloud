import {Router} from "express";
import { getAllSongs, getDefaultSongs, getMostListenedToSongs, getSharedWithMeSongs} from "../controller/song.controller.js";
import {protectRoute, requireAdmin} from "../middleware/auth.middleware.js"

const router = Router();

router.get('/', protectRoute, requireAdmin, getAllSongs);
router.get('/default', getDefaultSongs);
router.get('/most-listened-to', getMostListenedToSongs);
router.get('/shared', getSharedWithMeSongs);

export default router