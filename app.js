const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const photo = {
        id: 1,
        name: "Pencil",
        description: "Pencil blah blah"
    }
  res.send(photo);
});

const port = 3000;

app.listen(port, () => {
  console.log('Sunucu $(port) portunda başlatıldı.');
});
