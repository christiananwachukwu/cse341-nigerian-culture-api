const express = require('express');
const passport = require('passport');

const router = express.Router();

// 🔐 GitHub login
router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// 🔐 Callback
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api-docs');
  }
);

// 🚪 Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logged out' });
  });
});

// ✅ TEST LOGIN (VERY IMPORTANT)
if (process.env.NODE_ENV === 'test') {
  router.get('/test-login', (req, res) => {
    req.login({ id: 'test-user' }, (err) => {
      if (err) return res.status(500).json(err);
      return res.json({ message: 'Test login successful' });
    });
  });
}

module.exports = router;