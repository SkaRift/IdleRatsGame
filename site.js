// Community dropdown. To change a link, edit SOCIALS below.
// Leave url empty ("") to show that network as "Soon" (not clickable).
const SOCIALS = [
  { name: "Discord",   handle: "Join the server", url: "https://discord.gg/gYXZVp9TQ" },
  { name: "Reddit",    handle: "r/idleratsgame",  url: "https://www.reddit.com/r/idleratsgame/" },
  { name: "TikTok",    handle: "@idleratsgame",   url: "https://www.tiktok.com/@idleratsgame" },
  { name: "YouTube",   handle: "@idleratsgame",   url: "https://www.youtube.com/@idleratsgame" },
  { name: "Instagram", handle: "@idleratsgame",   url: "https://www.instagram.com/idleratsgame/" },
  { name: "Facebook",  handle: "@idleratsgame",   url: "https://www.facebook.com/idleratsgame" },
];

(function () {
  const btn = document.getElementById("communityBtn");
  const menu = document.getElementById("communityMenu");
  if (!btn || !menu) return;
  menu.innerHTML = SOCIALS.map(s => s.url
    ? `<a role="menuitem" href="${s.url}" target="_blank" rel="noopener"><b>${s.name}</b><span>${s.handle}</span></a>`
    : `<span class="off" role="menuitem" aria-disabled="true"><b>${s.name}</b><span>Coming soon</span></span>`
  ).join("");
  const setOpen = open => { menu.hidden = !open; btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", e => { e.stopPropagation(); setOpen(menu.hidden); });
  document.addEventListener("click", e => { if (!menu.hidden && !menu.contains(e.target)) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { setOpen(false); btn.focus(); } });
})();
