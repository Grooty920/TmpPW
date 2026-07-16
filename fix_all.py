import os, re

b = "D:\\DeskTop\\TmpPW"

# ===== 1. Fix global.css =====
css = open(b + "/src/styles/global.css", "r", encoding="utf-8").read()
# Replace LXGW WenKai with Noto Serif SC
css = css.replace('LXGW WenKai', 'Noto Serif SC')
# Fix the Google Fonts URL for Noto Serif SC
old_font = '@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap");'
new_font = '@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap");' + "\n" + old_font
css = css.replace(old_font, new_font)
open(b + "/src/styles/global.css", "w", encoding="utf-8").write(css)
print("1. global.css fixed")

# ===== 2. Fix tailwind.config.mjs =====
tw = open(b + "/tailwind.config.mjs", "r", encoding="utf-8").read()
tw = tw.replace('LXGW WenKai', 'Noto Serif SC')
open(b + "/tailwind.config.mjs", "w", encoding="utf-8").write(tw)
print("2. tailwind fixed")

# ===== 3. Rewrite Layout.astro with proper Chinese + particles =====
layout = '''---
import "../styles/global.css";

export interface Props {
  title?: string;
  description?: string;
}
const { title = "LoveAlwaysHere", description = "\u4e2a\u4eba\u535a\u5ba2\u4e0e\u5de5\u5177\u96c6" } = Astro.props;
---

<!doctype html>
<html lang="zh-CN" class="">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <script is:inline>
      (function() {
        try {
          var theme = localStorage.getItem("theme");
          var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          if (theme === "dark" || (!theme && prefersDark)) {
            document.documentElement.classList.add("dark");
          }
        } catch(e) {}
      })();
    </script>
    <style>
      .particle-container {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 0; pointer-events: none; overflow: hidden;
      }
      #particle-canvas { width: 100%; height: 100%; }
    </style>
  </head>
  <body class="min-h-screen antialiased">
    <div class="particle-container"><canvas id="particle-canvas"></canvas></div>
    <div id="reading-progress" class="reading-progress" style="width:0%"></div>

    <header id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="text-xl font-serif font-bold tracking-wide gold-link">\u2726 LoveAlwaysHere</a>
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="relative text-sm tracking-wide transition-colors duration-300 group" style="color:var(--text-secondary)">\u9996\u9875<span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style="background-color:var(--accent)"></span></a>
          <a href="/blog" class="relative text-sm tracking-wide transition-colors duration-300 group" style="color:var(--text-secondary)">\u968f\u7b14<span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style="background-color:var(--accent)"></span></a>
          <a href="/tools" class="relative text-sm tracking-wide transition-colors duration-300 group" style="color:var(--text-secondary)">\u5de5\u5177<span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style="background-color:var(--accent)"></span></a>
          <button id="theme-toggle" class="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-warm-200 dark:hover:bg-ink-700 focus:outline-none" aria-label="\u5207\u6362\u4e3b\u9898">
            <svg id="sun-icon" class="absolute w-5 h-5 transition-all duration-500" style="color:var(--accent);opacity:1;transform:rotate(0deg) scale(1)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg id="moon-icon" class="absolute w-5 h-5 transition-all duration-500" style="color:var(--accent);opacity:0;transform:rotate(-90deg) scale(0.5)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
        </div>
        <div class="md:hidden flex items-center gap-3">
          <button id="theme-toggle-mobile" class="w-10 h-10 rounded-full flex items-center justify-center" style="color:var(--accent)" aria-label="\u5207\u6362\u4e3b\u9898">
            <svg id="sun-icon-m" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>
          <button id="menu-btn" class="w-10 h-10 rounded-full flex items-center justify-center" style="color:var(--text-primary)" aria-label="\u83dc\u5355">
            <svg id="menu-icon" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <div id="mobile-menu" class="fixed inset-0 top-16 z-40 hidden flex-col items-center gap-8 pt-16 text-lg" style="background-color:var(--bg-primary)">
      <a href="/" class="transition-colors" style="color:var(--text-secondary)" onclick="document.getElementById('mobile-menu').classList.add('hidden')">\u9996\u9875</a>
      <a href="/blog" class="transition-colors" style="color:var(--text-secondary)" onclick="document.getElementById('mobile-menu').classList.add('hidden')">\u968f\u7b14</a>
      <a href="/tools" class="transition-colors" style="color:var(--text-secondary)" onclick="document.getElementById('mobile-menu').classList.add('hidden')">\u5de5\u5177</a>
    </div>

    <main class="min-h-screen pt-20">
      <slot />
    </main>

    <footer class="border-t py-12 mt-24" style="border-color:var(--border)">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <a href="/" class="text-lg font-serif font-bold tracking-wide gold-link">\u2726 LoveAlwaysHere</a>
            <p class="text-sm mt-2" style="color:var(--text-secondary)">\u8bb0\u5f55 \u00b7 \u521b\u9020 \u00b7 \u5206\u4eab</p>
          </div>
          <div class="flex items-center gap-6">
            <a href="https://github.com/Grooty920" target="_blank" class="w-8 h-8 rounded-full flex items-center justify-center border text-xs font-mono transition-all duration-300 hover:scale-110" style="border-color:var(--border);color:var(--text-secondary)">GH</a>
            <a href="mailto:hello@lovealwayshere.cc" class="w-8 h-8 rounded-full flex items-center justify-center border text-xs font-mono transition-all duration-300 hover:scale-110" style="border-color:var(--border);color:var(--text-secondary)">@</a>
          </div>
        </div>
        <div class="mt-8 text-center text-xs" style="color:var(--text-secondary)">&copy; 2026 LoveAlwaysHere. Built with Astro &amp; Tailwind CSS.</div>
      </div>
    </footer>

    <script>
      (function() {
        var canvas = document.getElementById("particle-canvas");
        if (!canvas) return;
        var ctx = canvas.getContext("2d");
        var w, h, particles = [];
        var mouse = { x: null, y: null, radius: 120 };
        function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", function(e) { mouse.x = e.clientX; mouse.y = e.clientY; });
        canvas.addEventListener("mouseleave", function() { mouse.x = null; mouse.y = null; });
        var colors = ["rgba(212, 154, 26,", "rgba(235, 196, 92,", "rgba(212, 173, 106,", "rgba(228, 196, 138,"];
        function Particle() {
          this.x = Math.random() * w; this.y = Math.random() * h;
          this.size = Math.random() * 2.5 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = (Math.random() - 0.5) * 0.5;
          this.opacity = Math.random() * 0.4 + 0.1;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.pulse = Math.random() * Math.PI * 2;
          this.pulseSpeed = Math.random() * 0.02 + 0.005;
        }
        Particle.prototype.update = function() {
          if (mouse.x !== null) {
            var dx = mouse.x - this.x, dy = mouse.y - this.y, dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              var force = (mouse.radius - dist) / mouse.radius;
              this.speedX -= (dx / dist) * force * 0.03;
              this.speedY -= (dy / dist) * force * 0.03;
            }
          }
          this.x += this.speedX; this.y += this.speedY; this.pulse += this.pulseSpeed;
          if (this.x < 0 || this.x > w) this.speedX *= -1;
          if (this.y < 0 || this.y > h) this.speedY *= -1;
          this.speedX *= 0.99; this.speedY *= 0.99;
        };
        Particle.prototype.draw = function() {
          var o = this.opacity + Math.sin(this.pulse) * 0.1;
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color + o + ")"; ctx.fill();
        };
        function init() { particles = []; for (var i = 0; i < 50; i++) particles.push(new Particle()); }
        function connect() {
          for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
              var dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 120) { var o = (1 - dist / 120) * 0.15;
                ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = "rgba(212, 154, 26," + o + ")"; ctx.lineWidth = 0.5; ctx.stroke();
              }
            }
          }
        }
        function animate() {
          ctx.clearRect(0, 0, w, h);
          for (var i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
          connect(); requestAnimationFrame(animate);
        }
        resize(); init(); animate();
      })();

      function setTheme(t) { document.documentElement.classList.toggle("dark", t === "dark"); localStorage.setItem("theme", t); updateIcons(t); }
      function updateIcons(theme) {
        var isDark = theme === "dark";
        [["sun-icon","moon-icon"],["sun-icon-m","moon-icon-m"]].forEach(function(p) {
          var sun = document.getElementById(p[0]), moon = document.getElementById(p[1]);
          if (!sun || !moon) return;
          sun.style.opacity = isDark ? "0" : "1"; sun.style.transform = isDark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)";
          moon.style.opacity = isDark ? "1" : "0"; moon.style.transform = isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)";
        });
      }
      function toggleTheme() { setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark"); }
      var t = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      setTheme(t);
      document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
      document.getElementById("theme-toggle-mobile")?.addEventListener("click", toggleTheme);

      var navbar = document.getElementById("navbar");
      window.addEventListener("scroll", function() {
        if (window.scrollY > 20) { navbar.style.backgroundColor = "var(--nav-bg)"; navbar.style.backdropFilter = "blur(24px)"; navbar.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)"; }
        else { navbar.style.backgroundColor = "transparent"; navbar.style.backdropFilter = "none"; navbar.style.boxShadow = "none"; }
      });

      var pb = document.getElementById("reading-progress");
      window.addEventListener("scroll", function() {
        var dh = document.documentElement.scrollHeight - window.innerHeight;
        if (dh > 0) pb.style.width = Math.min((window.scrollY / dh) * 100, 100) + "%";
      }, { passive: true });

      var mb = document.getElementById("menu-btn"), mm = document.getElementById("mobile-menu"), mi = document.getElementById("menu-icon");
      mb?.addEventListener("click", function() {
        var open = !mm.classList.contains("hidden"); mm.classList.toggle("hidden");
        mi.innerHTML = open ? "<path d='M3 12h18M3 6h18M3 18h18'/>" : "<path d='M18 6L6 18M6 6l12 12'/>";
      });
    </script>
  </body>
</html>
'''

with open(b + "/src/layouts/Layout.astro", "w", encoding="utf-8") as f:
    f.write(layout)
print("3. Layout.astro rewritten with particles")

# ===== 4. Rewrite index.astro =====
index = '''---
import Layout from "../layouts/Layout.astro";
---

<Layout title="LoveAlwaysHere \u9996\u9875" description="\u4e2a\u4eba\u535a\u5ba2\u4e0e\u5de5\u5177\u96c6">
  <div class="container-page">
    <section class="pt-16 pb-12 text-center">
      <div class="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest mb-8 animate-fade-in" style="background-color:var(--accent-light);color:var(--bg-primary)">
        \u4e2a\u4eba\u7a7a\u95f4 \u00b7 \u6280\u672f\u535a\u5ba2 \u00b7 \u5b9e\u7528\u5de5\u5177
      </div>
      <h1 class="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight animate-fade-up" style="animation-delay:0.1s;animation-fill-mode:both">
        <span style="color:var(--accent)">\u63a2\u7d22</span>
        <span class="mx-3" style="color:var(--text-secondary)">\u00b7</span>
        <span style="color:var(--text-primary)">\u521b\u9020</span>
        <span class="mx-3" style="color:var(--text-secondary)">\u00b7</span>
        <span style="color:var(--accent)">\u5206\u4eab</span>
      </h1>
      <p class="mt-6 text-lg max-w-xl mx-auto leading-relaxed" style="color:var(--text-secondary)">
        \u8bb0\u5f55\u6280\u672f\u601d\u8003\uff0c\u5206\u4eab\u5b9e\u7528\u5de5\u5177\u3002<br />
        \u5728\u4ee3\u7801\u4e0e\u521b\u9020\u4e4b\u95f4\uff0c\u5bfb\u627e\u5c5e\u4e8e\u81ea\u5df1\u7684\u8282\u594f\u3002
      </p>
      <div class="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up" style="animation-delay:0.3s;animation-fill-mode:both">
        <a href="/blog" class="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105" style="background-color:var(--accent);color:#fff">\u6d4f\u89c8\u968f\u7b14 \u2192</a>
        <a href="/tools" class="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105" style="border:1px solid var(--border);color:var(--text-secondary)">\u5b9e\u7528\u5de5\u5177</a>
      </div>
    </section>

    <section class="py-12 grid md:grid-cols-3 gap-6">
      {[
        { icon: "\u270d\ufe0f", title: "\u6280\u672f\u968f\u7b14", desc: "\u8bb0\u5f55\u524d\u7aef\u3001\u5168\u6808\u5f00\u53d1\u4e2d\u7684\u8e29\u5751\u4e0e\u601d\u8003\uff0c\u5206\u4eab\u6280\u672f\u5fc3\u5f97\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002" },
        { icon: "\U0001F527", title: "\u5b9e\u7528\u5de5\u5177", desc: "\u65e5\u5e38\u5f00\u53d1\u548c\u751f\u6d3b\u6240\u9700\u7684\u5728\u7ebf\u5c0f\u5de5\u5177\uff0c\u5f00\u7bb1\u5373\u7528\uff0c\u6301\u7eed\u66f4\u65b0\u3002" },
        { icon: "\U0001F331", title: "\u6301\u7eed\u8fdb\u5316", desc: "\u4e0d\u65ad\u8fed\u4ee3\u4f18\u5316\uff0c\u8ba9\u8fd9\u4e2a\u5c0f\u5c0f\u7684\u6570\u5b57\u82b1\u56ed\u8d8a\u6765\u8d8a\u4e30\u5bcc\u3002" },
      ].map((card, i) => (
        <div class="card-warm animate-fade-up group" style={{ animationDelay: ${0.4 + i * 0.1}s, animationFillMode: "both" }}>
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" style="background-color:var(--accent-light)">
            <span set:html={card.icon}></span>
          </div>
          <h3 class="text-lg font-serif font-semibold mb-3 transition-colors duration-300" style="color:var(--text-primary)">{card.title}</h3>
          <p class="text-sm leading-relaxed" style="color:var(--text-secondary)">{card.desc}</p>
        </div>
      ))}
    </section>

    <section class="py-12 text-center">
      <div class="flex items-center gap-3 mb-10">
        <div class="h-px flex-1" style="background:linear-gradient(to right, transparent, var(--border), transparent)"></div>
        <span class="text-xs tracking-widest" style="color:var(--text-secondary)">\u6700\u65b0\u52a8\u6001</span>
        <div class="h-px flex-1" style="background:linear-gradient(to right, transparent, var(--border), transparent)"></div>
      </div>
      <div class="py-12">
        <div class="text-4xl mb-4" style="color:var(--accent)">\u2728</div>
        <p style="color:var(--text-secondary)">\u535a\u5ba2\u6587\u7ae0\u6b63\u5728\u8def\u4e0a\uff0c\u656c\u8bf7\u671f\u5f85...</p>
      </div>
    </section>
  </div>
</Layout>
'''

with open(b + "/src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(index)
print("4. index.astro rewritten")

# ===== 5. Rewrite blog and tools pages =====
for name, title in [("blog", "\u968f\u7b14"), ("tools", "\u5de5\u5177")]:
    p = b + "/src/pages/" + name + "/index.astro"
    content = '''---
import Layout from "../../layouts/Layout.astro";
---

<Layout title="''' + title + ''' \u00b7 LoveAlwaysHere" description="''' + title + '''">
  <div class="container-page py-16 text-center">
    <h1 class="text-3xl font-serif font-bold" style="color:var(--accent)">''' + title + '''</h1>
    <p class="mt-4" style="color:var(--text-secondary)">\u6b63\u5728\u5efa\u8bbe\u4e2d...</p>
  </div>
</Layout>
'''
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("5. " + name + "/index.astro rewritten")

print("\\nAll done!")
