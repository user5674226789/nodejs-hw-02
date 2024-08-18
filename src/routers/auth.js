import {Router} from 'express'
import {ctrlWrapper} from "../utils/ctrlWrapper.js"
import { registerUserController } from '../controllers/auth.js'
import { validateBody } from '../middlewares/validateBody.js'
import { logoutUserController } from '../controllers/auth.js';
import { refreshUserSessionController } from '../controllers/auth.js';
import { loginUserController } from "../controllers/auth.js";
import { registerUserSchema } from "../validation/auth.js";
import { loginUserSchema} from "../validation/auth.js";


const router = Router()

router.post(
   validateBody(registerUserSchema),
   ctrlWrapper(registerUserController),
);

router.post(
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
  );

  router.post('/logout', ctrlWrapper(logoutUserController));


router.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default router