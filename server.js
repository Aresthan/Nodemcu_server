const express = require("express");
const app = express();

let ledState = "off";

app.get("/", (req, res) => {
  res.send(`LED şu anda: ${ledState}`);
});

app.get("/set", (req, res) => {
  const state = req.query.state;
  if (state === "on" || state === "off") {
    ledState = state;
    res.send(`LED durumu güncellendi: ${ledState}`);
  } else {
    res.send("Geçersiz komut, 'on' veya 'off' gönderin.");
  }
});

app.get("/status", (req, res) => {
  res.send(ledState);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
