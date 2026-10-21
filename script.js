/**
 * ROMANTIC MORNING EXPERIENCE - JAVASCRIPT ENGINE
 * Crafted with love, high performance, and smooth animations.
 * Optimized for Mobile & Desktop with Morphy Glass & Vivid Floating Photos.
 */

// =============================================================================
// STREAMING MUSIC CONFIGURATION
// If you host your song online (e.g. Cloudinary, Supabase, or Catbox), paste the direct URL here!
// If left empty, it streams the local audio file automatically.
// =============================================================================
const ONLINE_STREAM_URL = "https://res.cloudinary.com/ruewlmpp/video/upload/v1792565496/Video_Project_1.mp3";

// =============================================================================
// 1. MEMORY ARCHIVE (ALL 36 PHOTOS WITH ROMANTIC CAPTIONS)
// =============================================================================
const MEMORIES = [
  { id: 1, file: 'IMG-20260111-WA0003.webp', caption: 'The smile that lights up my universe ✨', likes: 12 },
  { id: 2, file: 'IMG-20260111-WA0005.webp', caption: 'My favorite person in all of existence 💕', likes: 19 },
  { id: 3, file: 'IMG-20260111-WA0008.webp', caption: 'Endlessly charming & adorable 🌸', likes: 15 },
  { id: 4, file: 'IMG-20260111-WA0009.webp', caption: 'Every second with you is a blessing 💫', likes: 21 },
  { id: 5, file: 'IMG-20260113-WA0012.webp', caption: 'You make my world so colorful 🌈', likes: 18 },
  { id: 6, file: 'IMG-20260113-WA0016.webp', caption: 'Pure sunshine wrapped in grace ☀️', likes: 25 },
  { id: 7, file: 'IMG-20260113-WA0022.webp', caption: 'That magical look in your eyes ✨', likes: 14 },
  { id: 8, file: 'IMG-20260113-WA0024.webp', caption: 'Falling in love all over again 🌹', likes: 28 },
  { id: 9, file: 'IMG-20260202-WA0021.webp', caption: 'Laughter is sweeter with you 🥰', likes: 16 },
  { id: 10, file: 'IMG-20260202-WA0024.webp', caption: 'My forever happy place 🏡❤️', likes: 22 },
  { id: 11, file: 'IMG-20260202-WA0025.webp', caption: 'Cute beyond measure 🐰', likes: 17 },
  { id: 12, file: 'IMG-20260202-WA0028.webp', caption: 'You make every day feel like poetry 📖', likes: 20 },
  { id: 13, file: 'IMG-20260202-WA0052.webp', caption: 'My heart beats only for you 💓', likes: 31 },
  { id: 14, file: 'IMG-20260202-WA0063.webp', caption: 'Sweetest moments together 🍰', likes: 13 },
  { id: 15, file: 'IMG-20260202-WA0065.webp', caption: 'Unforgettable magic 🌟', likes: 19 },
  { id: 16, file: 'IMG-20260202-WA0066.webp', caption: 'You are my greatest adventure 🚀', likes: 24 },
  { id: 17, file: 'IMG-20260202-WA0067.webp', caption: 'The prettiest flower in the garden 🌺', likes: 27 },
  { id: 18, file: 'IMG-20260202-WA0068.webp', caption: 'Warmest hugs, sweetest soul 🤗', likes: 23 },
  { id: 19, file: 'IMG-20260202-WA0069.webp', caption: 'Can never get enough of your smile 😊', likes: 30 },
  { id: 20, file: 'IMG-20260202-WA0070.webp', caption: 'Cherishing you every single day 💖', likes: 18 },
  { id: 21, file: 'IMG-20260202-WA0071.webp', caption: 'Golden memories with my girl 👑', likes: 26 },
  { id: 22, file: 'IMG-20260202-WA0072.webp', caption: 'My dream come true 🌙', likes: 34 },
  { id: 23, file: 'IMG-20260202-WA0073.webp', caption: 'The sweetest golden light 🕊️', likes: 15 },
  { id: 24, file: 'IMG-20260202-WA0074.webp', caption: 'You bring peace to my soul 🌿', likes: 21 },
  { id: 25, file: 'IMG-20260202-WA0075.webp', caption: 'My queen, always and forever 👑❤️', likes: 29 },
  { id: 26, file: 'IMG-20260202-WA0076.webp', caption: 'Forever grateful to have you 💫', likes: 22 },
  { id: 27, file: 'IMG-20260202-WA0077.webp', caption: 'A spark of pure joy ✨', likes: 17 },
  { id: 28, file: 'IMG-20260202-WA0078.webp', caption: 'Holding your hand through life 🤝', likes: 33 },
  { id: 29, file: 'IMG-20260202-WA0079.webp', caption: 'The love of my life 💘', likes: 40 },
  { id: 30, file: 'IMG20260115064059.webp', caption: 'Serenity and peace together 🌅', likes: 19 },
  { id: 31, file: 'IMG20260115064100.webp', caption: 'Waking up with you in my thoughts 💭', likes: 27 },
  { id: 32, file: 'IMG20260124233454.webp', caption: 'Day or night, always you 🌌', likes: 35 },
  { id: 33, file: 'IMG20260125082306.webp', caption: 'Pure elegance and warmth 🍯', likes: 24 },
  { id: 34, file: 'IMG20260125082316.webp', caption: 'Your happiness is my mission 🎯💕', likes: 31 },
  { id: 35, file: 'IMG20260125082452.webp', caption: 'Every angle is perfection 💎', likes: 28 },
  { id: 36, file: 'IMG20260125082515.webp', caption: 'To infinity and beyond with you 🚀❤️', likes: 45 }
];

// =============================================================================
// 2. ROMANTIC LOVE WHISPERS & REASONS
// =============================================================================
const MORNING_WHISPERS = [
  "I love youuu so so muchhh meri jaan 😚❤️ Missing you a little extra todayyy. Kaash distance ki jagah mai tere paas hota aur tujhe bata pata ki tu kitni pyaari hai mere liye.",
  "Every moment with you is my favorite feeling. Just knowing you're in my life makes today feel full of possibilities.",
  "The sun shines bright, but nothing in this universe warms my world quite like your smile.",
  "You are the first thought on my mind every single day, and the sweetest dream in my heart.",
];

const LOVE_REASONS = [
  "Because the way your eyes crinkle when you laugh is the most beautiful sight in existence.",
  "Because you understand me even when I don't say a single word.",
  "Because hearing your voice instantly calms any storm inside my head.",
  "Because your kindness towards others inspires me to be a better person every day.",
  "Because you make ordinary moments feel like once-in-a-lifetime adventures.",
  "Because your hugs feel like home, no matter where we are.",
  "Because you believe in me even when I doubt myself.",
  "Because you look utterly adorable when you're sleepy or excited.",
  "Because every song about love suddenly makes complete sense when I think of you.",
  "Because you have the biggest, gentlest heart, and I am the luckiest person to hold it.",
  "Because knowing you're in my life is the greatest gift in the world.",
  "Because your smile can brighten the rainiest and darkest of days."
];

const KISS_RESPONSES = [
  "That one's right on your forehead! 💋",
  "A big, warm bear hug! 🤗",
  "One gentle kiss on each cheek! ✨",
  "Can't wait to wrap my arms around you! 🥰",
  "Sending 10,000 more just because you're cute! 💕",
  "A sweet butterfly kiss to tickle your smile! 🦋",
  "A loving squeeze so you know you're safe! 💖",
  "A sweet loving kiss to make you smile! ☀️"
];

// =============================================================================
// 3. APPLICATION STATE & LOCALSTORAGE
// =============================================================================
const state = {
  partnerName: localStorage.getItem('partnerNickname') || 'My Love',
  kissCount: parseInt(localStorage.getItem('morningKissCount') || '0', 10),
  currentWhisperIdx: 0,
  currentSpotlightIdx: 0,
  isMelodyPlaying: false,
  isCardMinimized: true,
  likedPhotos: JSON.parse(localStorage.getItem('likedMemoryPhotos') || '{}')
};

// =============================================================================
// 4. FLOATING PHOTO ENGINE (MOBILE-OPTIMIZED PHYSICS & MULTI-PLANE RENDERER)
// =============================================================================
class FloatingBackdrop {
  constructor(container, memories) {
    this.container = container;
    this.memories = memories;
    this.items = [];
    this.isPaused = false;
    this.init();
  }

  getDimensions(plane) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      if (plane === 'plane-back') return { width: 78, height: 98, speed: 0.45 };
      if (plane === 'plane-mid') return { width: 92, height: 116, speed: 0.6 };
      return { width: 108, height: 136, speed: 0.75 };
    } else {
      if (plane === 'plane-back') return { width: 110, height: 135, speed: 0.5 };
      if (plane === 'plane-mid') return { width: 135, height: 165, speed: 0.7 };
      return { width: 160, height: 195, speed: 0.9 };
    }
  }

  init() {
    this.container.innerHTML = '';
    const planes = ['plane-back', 'plane-mid', 'plane-front'];
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const isMobile = windowW <= 768;

    this.memories.forEach((mem, index) => {
      const plane = planes[index % 3];
      const dims = this.getDimensions(plane);

      const el = document.createElement('div');
      el.className = `floating-photo-item ${plane}`;
      el.setAttribute('data-index', index);
      el.style.width = `${dims.width}px`;
      el.style.height = `${dims.height}px`;

      el.innerHTML = `
        <img src="photos/${mem.file}" alt="${mem.caption}" loading="${index < 8 ? 'eager' : 'lazy'}" decoding="async">
        <span class="photo-caption-tag">${mem.caption}</span>
      `;

      this.container.appendChild(el);

      // Intelligent distribution on mobile:
      // Alternate left column, right column, and center lane so photos are visible all across mobile screens
      let initialX;
      if (isMobile) {
        const lane = index % 3;
        if (lane === 0) {
          // Left side
          initialX = Math.random() * 50 + 6;
        } else if (lane === 1) {
          // Right side
          initialX = windowW - dims.width - (Math.random() * 50 + 6);
        } else {
          // Center
          initialX = (windowW - dims.width) / 2 + (Math.random() - 0.5) * 60;
        }
      } else {
        initialX = (Math.random() * (windowW - dims.width - 40)) + 20;
      }

      // Vertical spread across full height plus buffer
      const initialY = (Math.random() * (windowH + 700)) - 350;
      const baseRotation = (Math.random() * 22) - 11;

      const itemData = {
        el,
        x: initialX,
        y: initialY,
        width: dims.width,
        height: dims.height,
        plane,
        speed: dims.speed * (0.85 + Math.random() * 0.3),
        oscillationSpeed: 0.0012 + Math.random() * 0.0016,
        oscillationAmp: isMobile ? (15 + Math.random() * 20) : (25 + Math.random() * 35),
        phase: Math.random() * Math.PI * 2,
        rotation: baseRotation,
        isHovered: false
      };

      // Pointer / Hover / Touch interaction for seamless mobile & desktop support
      let pStartX = 0;
      let pStartY = 0;
      let pStartTime = 0;
      let isPointerActive = false;

      el.addEventListener('mouseenter', () => {
        itemData.isHovered = true;
      });

      el.addEventListener('mouseleave', () => {
        if (!isPointerActive) itemData.isHovered = false;
      });

      el.addEventListener('pointerdown', (e) => {
        isPointerActive = true;
        itemData.isHovered = true; // Freeze motion instantly on press/touch
        pStartX = e.clientX;
        pStartY = e.clientY;
        pStartTime = Date.now();
      });

      el.addEventListener('pointerup', (e) => {
        const dx = Math.abs(e.clientX - pStartX);
        const dy = Math.abs(e.clientY - pStartY);
        const dt = Date.now() - pStartTime;
        isPointerActive = false;

        // If it was an intentional tap or click (drag < 18px, time < 700ms)
        if (dx < 18 && dy < 18 && dt < 700) {
          e.stopPropagation();
          openSpotlight(index);
        }

        setTimeout(() => {
          if (!el.matches(':hover')) {
            itemData.isHovered = false;
          }
        }, 300);
      });

      el.addEventListener('pointercancel', () => {
        isPointerActive = false;
        itemData.isHovered = false;
      });

      // Direct click handler fallback
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openSpotlight(index);
      });

      this.items.push(itemData);
    });

    // Start animation loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    // Responsive resize handler
    window.addEventListener('resize', () => {
      const newW = window.innerWidth;
      this.items.forEach(item => {
        const dims = this.getDimensions(item.plane);
        item.width = dims.width;
        item.height = dims.height;
        item.el.style.width = `${dims.width}px`;
        item.el.style.height = `${dims.height}px`;
        if (item.x > newW - item.width) {
          item.x = Math.max(8, newW - item.width - 12);
        }
      });
    });
  }

  animate(timestamp) {
    if (!this.isPaused) {
      const windowH = window.innerHeight;
      const windowW = window.innerWidth;
      const isMobile = windowW <= 768;

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];

        if (!item.isHovered) {
          // Continuous vertical float
          item.y -= item.speed;

          // Sine drift
          const horizontalOffset = Math.sin(timestamp * item.oscillationSpeed + item.phase) * item.oscillationAmp;
          let currentX = item.x + horizontalOffset;

          // Boundaries
          if (currentX < 4) currentX = 4;
          if (currentX > windowW - item.width - 4) currentX = windowW - item.width - 4;

          // Recycle to bottom when past top
          if (item.y < -item.height - 60) {
            item.y = windowH + 40 + Math.random() * 200;
            if (isMobile) {
              const lane = i % 3;
              if (lane === 0) item.x = Math.random() * 50 + 6;
              else if (lane === 1) item.x = windowW - item.width - (Math.random() * 50 + 6);
              else item.x = (windowW - item.width) / 2 + (Math.random() - 0.5) * 60;
            } else {
              item.x = (Math.random() * (windowW - item.width - 40)) + 20;
            }
            item.rotation = (Math.random() * 22) - 11;
          }

          // GPU-accelerated transform
          item.el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${item.y.toFixed(1)}px, 0) rotate(${item.rotation.toFixed(1)}deg)`;
        }
      }
    }

    requestAnimationFrame(this.animate);
  }
}

// =============================================================================
// 5. AMBIENT PARTICLES CANVAS (ROSE PETALS & GOLDEN SPARKLES)
// =============================================================================
class AmbientCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.init();
  }

  init() {
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);

    const count = window.innerWidth < 768 ? 26 : 48;
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }

    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticle() {
    const isPetal = Math.random() > 0.45;
    return {
      type: isPetal ? 'petal' : 'sparkle',
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: isPetal ? (6 + Math.random() * 7) : (2 + Math.random() * 3),
      speedY: 0.25 + Math.random() * 0.65,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      color: isPetal
        ? `rgba(240, 114, 130, ${0.4 + Math.random() * 0.4})`
        : `rgba(245, 203, 116, ${0.5 + Math.random() * 0.4})`
    };
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > this.height + 20) {
        p.y = -20;
        p.x = Math.random() * this.width;
      }
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);

      if (p.type === 'petal') {
        this.ctx.beginPath();
        this.ctx.fillStyle = p.color;
        this.ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.beginPath();
        this.ctx.fillStyle = p.color;
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    requestAnimationFrame(this.render);
  }
}

// =============================================================================
// 6. PINK FLOYD - WISH YOU WERE HERE (1975) AUDIO ENGINE & SYNTHESIZER
// =============================================================================
class PinkFloydAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.step = 0;
    this.audioEl = document.getElementById('pinkFloydAudio');
    if (this.audioEl && typeof ONLINE_STREAM_URL === 'string' && ONLINE_STREAM_URL.trim() !== '') {
      this.audioEl.src = ONLINE_STREAM_URL.trim();
    }
    this.isUsingRealAudio = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic Acoustic Guitar String Pluck
  playAcousticString(freq, startTime, duration = 2.0, gainVal = 0.08) {
    if (!this.ctx) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    // Triangle + subtle sawtooth for rich bronze acoustic string timbre
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(freq, startTime);

    // Dynamic lowpass filter to emulate guitar body resonance & pick attack
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, startTime);
    filter.frequency.exponentialRampToValueAtTime(700, startTime + 0.35);
    filter.Q.setValueAtTime(2.2, startTime);

    // Natural exponential pluck decay
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(gainVal, startTime + 0.005);
    gain.gain.exponentialRampToValueAtTime(gainVal * 0.45, startTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  // Guitar Chord Strum (picks through strings with natural finger delay)
  strumAcousticChord(freqs, startTime, speed = 0.026, gainVal = 0.055) {
    freqs.forEach((freq, idx) => {
      this.playAcousticString(freq, startTime + idx * speed, 2.6, gainVal);
    });
  }

  // Soft ascending chime for morning kisses
  playKissChime() {
    this.init();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playAcousticString(freq, now + idx * 0.07, 0.7, 0.09);
    });
  }

  // Play user's audio: Pink Floyd - Wish You Were Here (1975)
  startMelody() {
    this.isPlaying = true;

    if (this.audioEl) {
      // Prime audio if not ready
      if (this.audioEl.readyState === 0) {
        try { this.audioEl.load(); } catch (e) {}
      }

      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.isUsingRealAudio = true;
          const musicToggleBtn = document.getElementById('musicToggleBtn');
          if (musicToggleBtn) {
            musicToggleBtn.classList.add('playing');
            musicToggleBtn.querySelector('.music-label').textContent = 'Wish You Were Here 🎸';
          }
        }).catch((err) => {
          console.warn('Real audio play error, retrying on user gesture:', err);
          // If first attempt fails (e.g. mobile restriction or buffering), retry once
          const retryPlay = () => {
            this.audioEl.play().then(() => {
              this.isUsingRealAudio = true;
              const musicToggleBtn = document.getElementById('musicToggleBtn');
              if (musicToggleBtn) {
                musicToggleBtn.classList.add('playing');
                musicToggleBtn.querySelector('.music-label').textContent = 'Wish You Were Here 🎸';
              }
            }).catch(() => {
              this.isUsingRealAudio = false;
              this.startGuitarSynthesizer();
            });
            document.removeEventListener('click', retryPlay);
            document.removeEventListener('touchend', retryPlay);
          };
          document.addEventListener('click', retryPlay, { once: true });
          document.addEventListener('touchend', retryPlay, { once: true });
        });
        return;
      }
    }

    this.startGuitarSynthesizer();
  }

  startGuitarSynthesizer() {
    this.init();
    this.step = 0;

    // "Wish You Were Here" (1975) Chords & Intro Melodic Sequences in G Major:
    const G_CHORD = [98.00, 146.83, 196.00, 246.94, 293.66, 392.00]; // G2, D3, G3, B3, D4, G4
    const EM7_CHORD = [82.41, 123.47, 146.83, 196.00, 293.66, 392.00]; // E2, B2, D3, G3, D4, G4
    const A7SUS4_CHORD = [110.00, 164.81, 196.00, 261.63, 293.66]; // A2, E3, G3, C4, D4

    const sequence = [
      // 1. Hammer-on into G
      () => {
        const now = this.ctx.currentTime;
        this.playAcousticString(110.00, now, 0.4);       // A2
        this.playAcousticString(123.47, now + 0.16, 0.6); // B2
        this.playAcousticString(146.83, now + 0.35, 0.5); // D3
        this.playAcousticString(164.81, now + 0.55, 0.6); // E3
        this.strumAcousticChord(G_CHORD, now + 0.8, 0.024);
      },
      // 2. Iconic run: G3 -> A3 -> G3 -> E3 -> D3 -> B2 -> A2 -> G2
      () => {
        const now = this.ctx.currentTime;
        this.playAcousticString(196.00, now, 0.3);         // G3
        this.playAcousticString(220.00, now + 0.18, 0.3);   // A3
        this.playAcousticString(196.00, now + 0.36, 0.3);   // G3
        this.playAcousticString(164.81, now + 0.54, 0.35);  // E3
        this.playAcousticString(146.83, now + 0.72, 0.35);  // D3
        this.playAcousticString(123.47, now + 0.90, 0.35);  // B2
        this.playAcousticString(110.00, now + 1.08, 0.35);  // A2
        this.playAcousticString(98.00, now + 1.26, 0.8);    // G2
      },
      // 3. Em7 & G Strumming Rhythm
      () => {
        const now = this.ctx.currentTime;
        this.strumAcousticChord(EM7_CHORD, now, 0.025);
        this.strumAcousticChord(G_CHORD, now + 0.9, 0.025);
      },
      // 4. Em7 -> A7sus4 -> Em7 -> A7sus4 -> G
      () => {
        const now = this.ctx.currentTime;
        this.strumAcousticChord(EM7_CHORD, now, 0.024);
        this.strumAcousticChord(A7SUS4_CHORD, now + 0.5, 0.022);
        this.strumAcousticChord(EM7_CHORD, now + 0.95, 0.024);
        this.strumAcousticChord(A7SUS4_CHORD, now + 1.4, 0.022);
        this.strumAcousticChord(G_CHORD, now + 1.85, 0.028);
      },
      // 5. David Gilmour's Melodic Acoustic Solo (Part 1)
      () => {
        const now = this.ctx.currentTime;
        this.playAcousticString(293.66, now, 0.45);        // D4
        this.playAcousticString(329.63, now + 0.28, 0.55);  // E4
        this.playAcousticString(392.00, now + 0.65, 0.5);   // G4
        this.playAcousticString(440.00, now + 0.95, 0.5);   // A4
        this.playAcousticString(493.88, now + 1.25, 0.8);   // B4
      },
      // 6. David Gilmour's Melodic Acoustic Solo (Part 2)
      () => {
        const now = this.ctx.currentTime;
        this.playAcousticString(587.33, now, 0.5);         // D5
        this.playAcousticString(493.88, now + 0.3, 0.45);   // B4
        this.playAcousticString(440.00, now + 0.6, 0.45);   // A4
        this.playAcousticString(392.00, now + 0.9, 0.5);    // G4
        this.playAcousticString(329.63, now + 1.2, 0.5);    // E4
        this.playAcousticString(293.66, now + 1.5, 0.8);    // D4
        this.strumAcousticChord(G_CHORD, now + 1.7, 0.03);  // Final G ring out
      }
    ];

    const stepIntervals = [1700, 1900, 1800, 2400, 1900, 2400];

    const playNext = () => {
      if (!this.isPlaying) return;
      const fn = sequence[this.step % sequence.length];
      const interval = stepIntervals[this.step % stepIntervals.length];
      fn();
      this.step++;
      this.timer = setTimeout(playNext, interval);
    };

    playNext();
  }

  stopMelody() {
    this.isPlaying = false;
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    }
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

const audioEngine = new PinkFloydAudio();

// =============================================================================
// 7. CURSOR SPARKLES & HEART EXPLOSIONS
// =============================================================================
function initCursorSparkles() {
  const container = document.getElementById('cursorTrailContainer');
  const symbols = ['✨', '💖', '🌸', '💫', '☀️'];
  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  function spawnSparkle(x, y) {
    const el = document.createElement('span');
    el.className = 'cursor-sparkle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    container.appendChild(el);

    setTimeout(() => { el.remove(); }, 800);
  }

  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist > 35 && now - lastTime > 60) {
      spawnSparkle(e.clientX, e.clientY);
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      spawnSparkle(touch.clientX, touch.clientY);
    }
  }, { passive: true });
}

function triggerHeartBurst(originX, originY) {
  const container = document.getElementById('heartBurstContainer');
  const items = ['💋', '❤️', '💖', '🥰', '🌹', '✨', '💕', '💫'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'burst-particle';
    el.textContent = items[Math.floor(Math.random() * items.length)];

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = 70 + Math.random() * 120;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - (35 + Math.random() * 50);
    const rot = (Math.random() - 0.5) * 60;

    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    el.style.setProperty('--tx', `${tx}px`);
    el.style.setProperty('--ty', `${ty}px`);
    el.style.setProperty('--rot', `${rot}deg`);
    el.style.fontSize = `${15 + Math.random() * 16}px`;

    container.appendChild(el);
    setTimeout(() => { el.remove(); }, 1600);
  }
}

// =============================================================================
// 8. INTERACTIVE MODALS & SCRAPBOOK
// =============================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function renderAlbumGrid() {
  const grid = document.getElementById('albumGrid');
  grid.innerHTML = '';

  MEMORIES.forEach((mem, index) => {
    const card = document.createElement('div');
    card.className = 'album-polaroid';
    const rot = (Math.random() * 8 - 4).toFixed(1);
    card.style.setProperty('--rot', `${rot}deg`);

    card.innerHTML = `
      <div class="album-polaroid-img-wrap">
        <img src="photos/${mem.file}" alt="${mem.caption}" loading="lazy">
      </div>
      <span class="album-polaroid-caption">${mem.caption}</span>
    `;

    card.addEventListener('click', () => {
      closeModal('albumModal');
      openSpotlight(index);
    });

    grid.appendChild(card);
  });
}

function openSpotlight(index) {
  state.currentSpotlightIdx = index;
  const mem = MEMORIES[index];

  const img = document.getElementById('spotlightImg');
  const caption = document.getElementById('spotlightCaption');
  const likeCount = document.getElementById('spotlightLikeCount');
  const heartIcon = document.getElementById('spotlightHeartIcon');

  img.src = `photos/${mem.file}`;
  caption.textContent = mem.caption;

  const isLiked = !!state.likedPhotos[mem.id];
  heartIcon.textContent = isLiked ? '❤️' : '🤍';
  likeCount.textContent = mem.likes + (isLiked ? 1 : 0);

  openModal('spotlightModal');
}

function updateSpotlightPhoto(dir) {
  let nextIdx = state.currentSpotlightIdx + dir;
  if (nextIdx < 0) nextIdx = MEMORIES.length - 1;
  if (nextIdx >= MEMORIES.length) nextIdx = 0;
  openSpotlight(nextIdx);
}

// =============================================================================
// 9. INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 0. Ultra-Fast Romantic Preloader (Instant <500ms reveal)
  const loaderEl = document.getElementById('romanticLoader');
  const progressBar = document.getElementById('loaderProgressBar');
  const percentageEl = document.getElementById('loaderPercentage');
  const statusText = document.getElementById('loaderStatusText');

  // Preload only the first 6 key memories (~160 KB total) so screen unveils instantly
  const INITIAL_BATCH_COUNT = 6;
  let loadedInitialCount = 0;
  let isLoaderDismissed = false;

  function dismissRomanticLoader() {
    if (isLoaderDismissed) return;
    isLoaderDismissed = true;

    if (progressBar) progressBar.style.width = '100%';
    if (percentageEl) percentageEl.textContent = '100%';
    if (statusText) statusText.textContent = "Ready with all my love! ❤️";

    setTimeout(() => {
      if (loaderEl) {
        loaderEl.classList.add('loaded');
        setTimeout(() => {
          loaderEl.style.display = 'none';
        }, 500);
      }
    }, 200);
  }

  function onInitialPhotoPreloaded() {
    loadedInitialCount++;
    const percent = Math.min(100, Math.round((loadedInitialCount / INITIAL_BATCH_COUNT) * 100));
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (percentageEl) percentageEl.textContent = `${percent}%`;

    if (percent > 40 && percent < 90 && statusText) {
      statusText.textContent = "Wrapping everything in love... 💖";
    }

    if (loadedInitialCount >= INITIAL_BATCH_COUNT) {
      dismissRomanticLoader();
    }
  }

  // Preload first 6 critical WebP photos immediately
  MEMORIES.slice(0, INITIAL_BATCH_COUNT).forEach(m => {
    const pre = new Image();
    pre.decoding = 'async';
    pre.onload = onInitialPhotoPreloaded;
    pre.onerror = onInitialPhotoPreloaded;
    pre.src = `photos/${m.file}`;
  });

  // Strict failsafe: unveil after max 1.2s under any circumstances
  setTimeout(dismissRomanticLoader, 1200);

  // Background idle preloading for remaining memories without blocking UI
  const scheduleIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 500));
  scheduleIdle(() => {
    MEMORIES.slice(INITIAL_BATCH_COUNT).forEach(m => {
      const pre = new Image();
      pre.decoding = 'async';
      pre.src = `photos/${m.file}`;
    });
  });

  // 1. Initialize Floating Photo Backdrop
  const floatingContainer = document.getElementById('floatingPhotosContainer');
  const backdrop = new FloatingBackdrop(floatingContainer, MEMORIES);

  // 2. Initialize Ambient Canvas
  const ambientCanvasEl = document.getElementById('ambientCanvas');
  new AmbientCanvas(ambientCanvasEl);

  // 3. Initialize Cursor Sparkles
  initCursorSparkles();

  // 4. Partner Nickname Management
  function updatePartnerName(name) {
    state.partnerName = name;
    localStorage.setItem('partnerNickname', name);
    document.getElementById('partnerNameDisplay').textContent = name;
    document.querySelectorAll('.letter-name-var').forEach(el => el.textContent = name);
  }
  updatePartnerName(state.partnerName);

  // 5. Real-Time Date String
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const todayStr = new Date().toLocaleDateString(undefined, dateOptions);
  document.getElementById('currentDateStr').textContent = todayStr;
  document.getElementById('letterDateDisplay').textContent = todayStr;

  // 6. Rotate Whispers
  const whisperEl = document.getElementById('whisperText');
  const nextWhisperBtn = document.getElementById('nextWhisperBtn');

  function showNextWhisper() {
    whisperEl.classList.add('fade-out');
    setTimeout(() => {
      state.currentWhisperIdx = (state.currentWhisperIdx + 1) % MORNING_WHISPERS.length;
      whisperEl.textContent = MORNING_WHISPERS[state.currentWhisperIdx];
      whisperEl.classList.remove('fade-out');
    }, 350);
  }
  nextWhisperBtn.addEventListener('click', showNextWhisper);
  setInterval(showNextWhisper, 12000);

  // 7. Kisses & Hugs Machine
  const sendKissBtn = document.getElementById('sendKissBtn');
  const kissCountEl = document.getElementById('kissCount');
  const kissCounterText = document.getElementById('kissCounterText');
  kissCountEl.textContent = state.kissCount;

  sendKissBtn.addEventListener('click', () => {
    state.kissCount++;
    localStorage.setItem('morningKissCount', state.kissCount);
    kissCountEl.textContent = state.kissCount;

    const rect = sendKissBtn.getBoundingClientRect();
    triggerHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    audioEngine.playKissChime();

    const sweetMsg = KISS_RESPONSES[Math.floor(Math.random() * KISS_RESPONSES.length)];
    kissCounterText.innerHTML = `<strong>${sweetMsg}</strong>`;
  });

  // 8. Card Minimize & Full Photos Focus Mode
  const mainLoveCard = document.getElementById('mainLoveCard');
  const minimizedCardPill = document.getElementById('minimizedCardPill');
  const minimizeCardBtn = document.getElementById('minimizeCardBtn');
  const restoreCardBtn = document.getElementById('restoreCardBtn');
  const backdropToggleBtn = document.getElementById('backdropToggleBtn');

  function toggleCardView(minimize) {
    state.isCardMinimized = minimize !== undefined ? minimize : !state.isCardMinimized;
    if (state.isCardMinimized) {
      mainLoveCard.classList.add('card-minimized');
      minimizedCardPill.style.display = 'inline-flex';
    } else {
      mainLoveCard.classList.remove('card-minimized');
      minimizedCardPill.style.display = 'none';
    }
  }

  minimizeCardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCardView(true);
  });

  restoreCardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCardView(false);

    // Auto-start user's trimmed song!
    if (!state.isMelodyPlaying) {
      audioEngine.startMelody();
      state.isMelodyPlaying = true;
      const musicToggleBtn = document.getElementById('musicToggleBtn');
      if (musicToggleBtn) {
        musicToggleBtn.classList.add('playing');
        musicToggleBtn.querySelector('.music-label').textContent = 'Wish You Were Here 🎸';
      }
    }

    // Festive heart burst from button location
    const rect = restoreCardBtn.getBoundingClientRect();
    triggerHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  backdropToggleBtn.addEventListener('click', () => {
    toggleCardView();
  });

  // 9. Love Letter Modal Triggers
  const openLetterBtn = document.getElementById('openLetterBtn');
  const letterModal = document.getElementById('letterModal');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const closeLetterBackdrop = document.getElementById('closeLetterBackdrop');

  openLetterBtn.addEventListener('click', () => {
    openModal('letterModal');
    const rect = openLetterBtn.getBoundingClientRect();
    triggerHeartBurst(rect.left + rect.width / 2, rect.top);
  });
  closeLetterBtn.addEventListener('click', () => closeModal('letterModal'));
  closeLetterBackdrop.addEventListener('click', () => closeModal('letterModal'));

  // 10. Scrapbook Gallery Modal Triggers
  const albumTriggerBtn = document.getElementById('albumTriggerBtn');
  const closeAlbumBtn = document.getElementById('closeAlbumBtn');
  const closeAlbumBackdrop = document.getElementById('closeAlbumBackdrop');

  renderAlbumGrid();
  albumTriggerBtn.addEventListener('click', () => openModal('albumModal'));
  closeAlbumBtn.addEventListener('click', () => closeModal('albumModal'));
  closeAlbumBackdrop.addEventListener('click', () => closeModal('albumModal'));

  // 11. Memory Spotlight Lightbox Controls
  const closeSpotlightBtn = document.getElementById('closeSpotlightBtn');
  const closeSpotlightBackdrop = document.getElementById('closeSpotlightBackdrop');
  const prevPhotoBtn = document.getElementById('prevPhotoBtn');
  const nextPhotoBtn = document.getElementById('nextPhotoBtn');
  const heartPhotoBtn = document.getElementById('heartPhotoBtn');

  closeSpotlightBtn.addEventListener('click', () => closeModal('spotlightModal'));
  closeSpotlightBackdrop.addEventListener('click', () => closeModal('spotlightModal'));
  prevPhotoBtn.addEventListener('click', () => updateSpotlightPhoto(-1));
  nextPhotoBtn.addEventListener('click', () => updateSpotlightPhoto(1));

  heartPhotoBtn.addEventListener('click', () => {
    const mem = MEMORIES[state.currentSpotlightIdx];
    const isLiked = !state.likedPhotos[mem.id];
    state.likedPhotos[mem.id] = isLiked;
    localStorage.setItem('likedMemoryPhotos', JSON.stringify(state.likedPhotos));

    const heartIcon = document.getElementById('spotlightHeartIcon');
    const likeCount = document.getElementById('spotlightLikeCount');
    heartIcon.textContent = isLiked ? '❤️' : '🤍';
    likeCount.textContent = mem.likes + (isLiked ? 1 : 0);

    const rect = heartPhotoBtn.getBoundingClientRect();
    triggerHeartBurst(rect.left + rect.width / 2, rect.top);
    audioEngine.playKissChime();
  });

  window.addEventListener('keydown', (e) => {
    const spotlightModal = document.getElementById('spotlightModal');
    if (spotlightModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') updateSpotlightPhoto(-1);
      if (e.key === 'ArrowRight') updateSpotlightPhoto(1);
      if (e.key === 'Escape') closeModal('spotlightModal');
    }
  });

  // 12. "Why I Love You" Modal
  const reasonBtn = document.getElementById('reasonBtn');
  const closeReasonBtn = document.getElementById('closeReasonBtn');
  const closeReasonBackdrop = document.getElementById('closeReasonBackdrop');
  const anotherReasonBtn = document.getElementById('anotherReasonBtn');
  const reasonText = document.getElementById('reasonText');
  const reasonNumber = document.getElementById('reasonNumber');

  function drawRandomReason() {
    const randomIdx = Math.floor(Math.random() * LOVE_REASONS.length);
    reasonNumber.textContent = `Reason #${randomIdx + 1}`;
    reasonText.textContent = LOVE_REASONS[randomIdx];
  }

  reasonBtn.addEventListener('click', () => {
    drawRandomReason();
    openModal('reasonModal');
  });
  anotherReasonBtn.addEventListener('click', () => {
    drawRandomReason();
    const rect = anotherReasonBtn.getBoundingClientRect();
    triggerHeartBurst(rect.left + rect.width / 2, rect.top);
  });
  closeReasonBtn.addEventListener('click', () => closeModal('reasonModal'));
  closeReasonBackdrop.addEventListener('click', () => closeModal('reasonModal'));

  // 13. Edit Nickname Modal
  const editNameBtn = document.getElementById('editNameBtn');
  const nameModal = document.getElementById('nameModal');
  const nameInput = document.getElementById('nameInput');
  const cancelNameBtn = document.getElementById('cancelNameBtn');
  const saveNameBtn = document.getElementById('saveNameBtn');
  const closeNameBackdrop = document.getElementById('closeNameBackdrop');

  editNameBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nameInput.value = state.partnerName;
    openModal('nameModal');
    setTimeout(() => nameInput.focus(), 100);
  });

  saveNameBtn.addEventListener('click', () => {
    const val = nameInput.value.trim();
    if (val) updatePartnerName(val);
    closeModal('nameModal');
  });

  cancelNameBtn.addEventListener('click', () => closeModal('nameModal'));
  closeNameBackdrop.addEventListener('click', () => closeModal('nameModal'));

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveNameBtn.click();
    if (e.key === 'Escape') closeModal('nameModal');
  });

  // 14. Music Melody Toggle: Pink Floyd - Wish You Were Here (1975)
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  musicToggleBtn.addEventListener('click', () => {
    if (!state.isMelodyPlaying) {
      audioEngine.startMelody();
      state.isMelodyPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicToggleBtn.querySelector('.music-label').textContent = 'Wish You Were Here 🎸';
    } else {
      audioEngine.stopMelody();
      state.isMelodyPlaying = false;
      musicToggleBtn.classList.remove('playing');
      musicToggleBtn.querySelector('.music-label').textContent = 'Wish You Were Here (1975)';
    }
  });
});
