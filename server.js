const express = require('express');
const app     = express();
const port    = 3000;

const announcements = [
  'Team standup — every day at 9:00am',
  'Sprint review — Friday at 3:00pm',
  'Deployment freeze starts Dec 20',
  'New joiners onboarding — Room 204',
  'Updated VPN policy — check your email',
];

app.get('/', (req, res) => {
  const items = announcements.map(a => `<li>${a}</li>`).join('');
  res.send(`
    <!DOCTYPE html><html><head><title>QuickBoard</title>
    <body>
      <h1>QuickBoard</h1>
      <ul>${items}</ul>
      <p>Served by pod: ${process.env.HOSTNAME}</p>
    </body></html>
  `);
});

app.listen(port, () => console.log(`QuickBoard running on port ${port}`));
