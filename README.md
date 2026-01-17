<img width="1536" height="1024" alt="Preview" src="https://github.com/user-attachments/assets/60703999-3f89-43b9-abfb-f380e18ddc50" />

# 🔴 TrippyHost  
**🔥 stupidly clean image hosting powered by Firebase**  
minimal UI • lightning uploads • instant links • zero bullshit



## 🚀 features that hit

* 📁 drag + drop or click to upload, straight from the browser
* ☁️ full Firebase Storage hookup
* 🔗 instant shareable links for max clout
* 🌚 sleek af dark mode UI
* 📱 mobile-friendly (ofc)
* 🧘‍♂️ no ads, no logins, no brain damage

---

## 🔥 live demo

🔗 **[trippyhost.github.io](https://trippyhost.github.io)**
go touch it. it’s live.

---

## 🛠 local setup (for nerds)

```bash
git clone https://github.com/YOUR_USERNAME/trippyhost.github.io.git
cd trippyhost.github.io
```

then open `index.html` in a browser.
that’s it. no `npm install`, no 42 dependencies, no tears 😭

---

## 🔧 firebase config

if u using ur own Firebase project, just swap the creds in `index.html`:

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

also:
✅ make sure Firebase Storage is enabled
❌ don’t cry if it breaks and you didn’t do that

---

## 🧱 file structure

```
├── index.html          # main page, the face of the brand
├── styles.css          # sexy styling
├── script.js           # handles the sauce
├── .github/            # the platform shenanigans
│   └── workflows/
│       └── upload-image.yml
└── README.md           # the gospel you're reading rn 💀
```

---

## 📄 license

MIT — do what u want
just don’t upload anything toe-related. we beg u. 🙏

---

## ✨ credits

made w/ firebase, notepad++, and no sanity
---
