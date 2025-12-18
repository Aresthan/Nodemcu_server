// server.js
const express = require("express");
const app = express();

// 👇 BU SATIR ÇOK ÖNEMLİ: www klasöründeki dosyaları /app yolunda çalıştırır
app.use("/app", express.static("www"));

// LED durumu
let ledState = "off";

// Ana sayfa
app.get("/", (req, res) => {
  res.send(`LED şu anda: ${ledState}`);
});

// LED açma/kapama
app.get("/set", (req, res) => {
  const state = req.query.state;
  if (state === "on" || state === "off") {
    ledState = state;
    res.send(`LED durumu güncellendi: ${ledState}`);
  } else {
    res.send("Geçersiz komut, 'on' veya 'off' gönderin.");
  }
});

// Durum sorgulama
app.get("/status", (req, res) => {
  res.send(ledState);
});

// Render uyumlu port ayarı
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
