import express from 'express';
import {
    getAllNotification,
    getOneNotification,
    markAsSeen,
    // sendTestNotification
} from '../controllers/notification.controller'
import { protect } from '../controllers/auth.controller';

const NotificationRouter = express.Router()

NotificationRouter.use(protect)

NotificationRouter.get('/all-notification', getAllNotification)

NotificationRouter.get('/one-notification/:id', getOneNotification)

NotificationRouter.put('/markasseen/:id', markAsSeen)

// send test notification
// NotificationRouter.post('/test/send-notification', sendTestNotification)

export default NotificationRouter;