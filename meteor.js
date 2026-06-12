const METEOR_DEFAULTS = {
  maxMeteors: 3,
  spawnInterval: [3000, 5200],
  initialDelay: [250, 900],
  batchChance: 0.16,
  batchDelay: [180, 460],
  duration: [850, 1350],
  length: [190, 330],
  thickness: [1.6, 2.8],
  opacity: [0.72, 0.9],
  angle: [-45, -35],
  startTop: [-10, 44],
  startLeft: [72, 112],
  travelX: [-118, -145],
  travelY: [64, 88],
  colors: [
    {
      tail: "rgba(255, 255, 255, 0)",
      mid: "rgba(255, 215, 170, 0.5)",
      head: "rgba(255, 255, 255, 0.96)",
      glow: "rgba(255, 214, 138, 0.48)",
      softGlow: "rgba(243, 167, 187, 0.2)",
    },
    {
      tail: "rgba(255, 255, 255, 0)",
      mid: "rgba(243, 167, 187, 0.46)",
      head: "rgba(255, 248, 238, 0.95)",
      glow: "rgba(243, 167, 187, 0.44)",
      softGlow: "rgba(255, 214, 138, 0.18)",
    },
    {
      tail: "rgba(255, 255, 255, 0)",
      mid: "rgba(255, 247, 236, 0.46)",
      head: "rgba(255, 255, 255, 0.98)",
      glow: "rgba(255, 255, 255, 0.38)",
      softGlow: "rgba(255, 214, 138, 0.2)",
    },
  ],
};

function randomBetween([min, max]) {
  return min + Math.random() * (max - min);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function mergeMeteorSettings() {
  const customSettings = window.METEOR_SETTINGS || {};

  return {
    ...METEOR_DEFAULTS,
    ...customSettings,
    colors: customSettings.colors || METEOR_DEFAULTS.colors,
  };
}

function spawnMeteor(layer, settings = mergeMeteorSettings()) {
  if (!layer || layer.children.length >= settings.maxMeteors) {
    return null;
  }

  const color = randomItem(settings.colors);
  const meteor = document.createElement("span");
  const duration = Math.round(randomBetween(settings.duration));

  meteor.className = "meteor";
  meteor.style.top = `${randomBetween(settings.startTop).toFixed(2)}vh`;
  meteor.style.left = `${randomBetween(settings.startLeft).toFixed(2)}vw`;
  meteor.style.setProperty("--meteor-length", `${Math.round(randomBetween(settings.length))}px`);
  meteor.style.setProperty("--meteor-thickness", `${randomBetween(settings.thickness).toFixed(2)}px`);
  meteor.style.setProperty("--meteor-duration", `${duration}ms`);
  meteor.style.setProperty("--meteor-opacity", randomBetween(settings.opacity).toFixed(2));
  meteor.style.setProperty("--meteor-angle", `${randomBetween(settings.angle).toFixed(2)}deg`);
  meteor.style.setProperty("--meteor-travel-x", `${randomBetween(settings.travelX).toFixed(2)}vw`);
  meteor.style.setProperty("--meteor-travel-y", `${randomBetween(settings.travelY).toFixed(2)}vh`);
  meteor.style.setProperty("--meteor-tail", color.tail);
  meteor.style.setProperty("--meteor-mid", color.mid);
  meteor.style.setProperty("--meteor-head", color.head);
  meteor.style.setProperty("--meteor-glow", color.glow);
  meteor.style.setProperty("--meteor-soft-glow", color.softGlow);

  meteor.addEventListener("animationend", () => meteor.remove(), { once: true });
  layer.appendChild(meteor);

  window.setTimeout(() => {
    if (meteor.isConnected) {
      meteor.remove();
    }
  }, duration + 160);

  return meteor;
}

function startMeteorLayer() {
  const layer = document.querySelector(".meteor-layer");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const settings = mergeMeteorSettings();
  let timerId = null;

  function clearMeteors() {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = null;
    }

    if (layer) {
      layer.replaceChildren();
    }
  }

  function scheduleNextMeteor() {
    if (!layer || reduceMotion.matches) {
      return;
    }

    timerId = window.setTimeout(() => {
      spawnMeteor(layer, settings);

      if (layer.children.length < settings.maxMeteors && Math.random() < settings.batchChance) {
        window.setTimeout(() => spawnMeteor(layer, settings), randomBetween(settings.batchDelay));
      }

      scheduleNextMeteor();
    }, randomBetween(settings.spawnInterval));
  }

  if (layer) {
    window.createMeteor = () => spawnMeteor(layer, settings);
  }

  if (!layer || reduceMotion.matches) {
    clearMeteors();
    return;
  }

  window.setTimeout(() => spawnMeteor(layer, settings), randomBetween(settings.initialDelay));
  scheduleNextMeteor();

  const handleMotionChange = () => {
    clearMeteors();
    scheduleNextMeteor();
  };

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", handleMotionChange);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(handleMotionChange);
  }
}

startMeteorLayer();
