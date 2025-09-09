import { Router } from 'express';
export const tapRouter = Router();
// Minimal endpoint to receive device taps: { deviceKey, uid }
tapRouter.post('/', (req, res) => {
  const { deviceKey, uid } = req.body || {};
  if (!deviceKey || !uid) return res.status(400).json({ message: 'deviceKey and uid required' });
  // In real app: validate deviceKey, lookup card, upsert attendance, etc.
  console.log('Tap received', { deviceKey, uid });
  return res.json({ message: 'Tap recorded (skeleton)', deviceKey, uid });
});
