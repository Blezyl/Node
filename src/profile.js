import { Router } from 'express';

const router = Router();

router.get('/ybanez', (req, res) => {
  const name = 'Blezyl Mae';
  const gender = 'Female';
  const email = 'ybanezblezyl@mail.com';
  res.status(200).send({ name, gender, email });
});

export default router;