
# trippyhost.github.io

**🔥 clean af image hosting powered by Firebase**  
minimal UI • fast uploads • shareable links • no bullshit

---

## 🚀 Features

- 📁 Upload images directly from your browser  
- ☁️ Firebase Storage integration  
- 🔗 Instant shareable links  
- 🧼 Sleek, dark UI (lowkey sexy)  
- 📱 Mobile responsive  
- 💨 No ads, no clutter

---

## 📸 Live Demo

🔗 **[trippyhost.github.io](https://trippyhost.github.io)**

---

## 🛠 Setup

clone this repo & run it locally like a real dev:

```bash
git clone https://github.com/YOUR_USERNAME/trippyhost.github.io.git
cd trippyhost.github.io
```

then just open `index.html` in your browser. that's it. no npm bs 😭

---

## 🔧 Firebase Config

if u not using the included Firebase project, plug in your own creds in `index.html`:

```js
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

don’t forget to enable **Firebase Storage** in the console.

---

## 📂 File Structure

```
├── index.html          # main page
├── styles.css          # clean ass styling
├── script.js           # optional, could be inline too
├── .github/
│   └── workflows/      # CI stuff if you ever add it
│       └── upload-image.yml
└── README.md           # you lookin at it rn 💀
```

---

## 📄 License

MIT — steal it, fork it, sell it, idc  
just don’t upload toes or toes-related content pls 🙏

---

## ✨ Credits

made w/ love, firebase, and notepad++  
🦇 stay trippy
