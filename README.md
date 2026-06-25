# 🫧 Bubble Pop — *Khel Khatam*

> You see a number. You click the bubble. Simple, right?  
> **WRONG.** The clock is eating your soul and your fingers can't keep up.

🎮 **[Play it live →](https://your-vercel-link.vercel.app)**

---

## 👀 What does it look like?

| Gameplay | Game Over |
|----------|-----------|
| ![gameplay](./screenshots/gameplay.png) | ![gameover](./screenshots/gameover.png) |

---

## 🕹️ How to not embarrass yourself

1. **Look** at the `hit` number up top
2. **Find** the bubble with that number (there are 136 of them, good luck)
3. **Click** it before your brain crashes
4. Score goes up. Bubbles shuffle. New target. Repeat.
5. Hit below **3 seconds?** A correct click steals 2s back from death
6. Timer = 0 → **Khel Khatam** — it's over bhai, accept it

---

## ⚡ Features that slap

- 🔢 136 randomly shuffled bubbles every round — no memorizing
- ⏱️ Countdown timer that genuinely stresses you out
- 🎁 Bonus time mechanic when you're clutching at the end
- 👻 Game-over screen with floating ghost blobs (spooky, respectfully)
- 🔁 Instant restart — no page reload, no excuses

---

## 🗂️ Files (it's literally 3)

```
├── index.html   ← the bones
├── style.css    ← the drip
└── script.js    ← the brain
```

---

## 🔧 Wanna mess with it?

| Vibe | File | Line |
|------|------|------|
| More time (for casuals) | `script.js` | `var timer = 6` → make it bigger |
| More score per hit | `script.js` | `score += 10` → go wild |
| More bubbles (chaos mode) | `script.js` | `i <= 136` → crank it |
| Different bubble color | `style.css` | `.bubble { background }` |
| Change hover color | `style.css` | `.bubble:hover { background }` |

---

## 🛠️ Built with

**HTML. CSS. JavaScript.**  
No React. No npm. No webpack. No therapy (yet).

---

*Made with frustration, caffeine, and `setInterval`.*  
*If your high score is under 50, don't talk to me.*
