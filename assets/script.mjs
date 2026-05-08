  // Example brick data - expand as needed
  const bricks = [
    {
      name: "Animal quiz",
      url: "https://devottr.github.io/games/animal quiz/",
      icon: "🐗",
      description: "Decode, and learn about animals.",
      category: "Leisure events",
      progress: "Completed"
    },
    {
      name: "Archery game",
      url: "https://devottr.github.io/games/archery game/",
      icon: "🏹",
      description: "Text your archery skills.",
      category: "Fun & Games",
      progress: "Completed"
    },
    {
      name: "Calculator",
      url: "https://devottr.github.io/games/calculator",
      icon: "➕",
      description: "Hexadecimal conversions and operations.",
      category: "Number Systems",
      progress: "Ongoing"
    },
    {
      name: "Click the dot",
      url: "https://devottr.github.io/games/click the dot",
      icon: "👉",
      description: "improve your focus",
      category: "Leisure events",
      progress: "Locked"
    },
    {
      name: "Cross the goal",
      url: "https://devottr.github.io/games/cross the goal",
      icon: "🚸",
      description: "cross components safely.",
      category: "Fun & Games",
      progress: "Under Construction"
    },
    {
      name: "Door show",
      url: "https://devottr.github.io/games/door show",
      icon: "🚪",
      description: "check for puzzles.",
      category: "Fun & Games",
      progress: "Locked"
    },
    {
      name: "emoji",
      url: "https://devottr.github.io/games/emoji",
      icon: "😬",
      description: "emojis game.",
      category: "Leisure events",
      progress: "Ongoing"
    },
    {
      name: "Fraction calculator",
      url: "https://devottr.github.io/games/fraction calculator",
      icon: "➗",
      description: "Encode and decode using Base64 standard.",
      category: "Number Systems",
      progress: "In Progress"
    },
    {
      name: "Guessing game",
      url: "https://devottr.github.io/games/guessing game",
      icon: "⁉️",
      description: "Encode, decode, basics.",
      category: "Fun & Games",
      progress: "Completed"
    },
    {
      name: "Image editor",
      url: "https://devottr.github.io/games/image editor",
      icon: "📸",
      description: "Convert & edit images.",
      category: "Graphics Systems",
      progress: "In Progress"
    },
    {
      name: "Math quiz",
      url: "https://devottr.github.io/games/math quiz",
      icon: "✅",
      description: "Encode and decode using Base64 standard.",
      category: "Number Systems",
      progress: "Ongoing"
    },
    {
      name: "Math workout",
      url: "https://devottr.github.io/games/math workout",
      icon: "☑️",
      description: "Hexadecimal conversions and operations.",
      category: "Number Systems",
      progress: "Locked"
    },
    {
      name: "Memory game",
      url: "https://devottr.github.io/games/memory game",
      icon: "💾",
      description: "Encode and decode components safely.",
      category: "Text Codes",
      progress: ""
    },
    {
      name: "Minesweeper",
      url: "https://devottr.github.io/games/minesweeper",
      icon: "⛏️",
      description: "Reverse and invert text strings for puzzles.",
      category: "Fun & Games",
      progress: "Under Construction"
    },
    {
      name: "Snake pop",
      url: "https://devottr.github.io/games/snake pop",
      icon: "🐍",
      description: "snap track.",
      category: "Fun & Games",
      progress: "In Progress"
    },
    {
      name: "Tankpro",
      url: "https://devottr.github.io/games/tankpro",
      icon: "🚜",
      description: "Obliterate with a tank visually.",
      category: "Fun & Games",
      progress: "Locked"
    },
    {
      name: "Tictac",
      url: "https://devottr.github.io/games/tictac",
      icon: "⭕",
      description: "Minimal Tic-Tac-Toe",
      category: "Text Codes",
      progress: "Completed"
    },
    {
      name: "Towerpro",
      url: "https://devottr.github.io/games/towerpro",
      icon: "🗼",
      description: "Create mirror images of text visually.",
      category: "Fun & Games",
      progress: "In Progress"
    }
  ];

  const gridContainer = document.getElementById("brickGrid");
  const searchInput = document.getElementById("search");

  function renderBricks(list) {
    if (list.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">No matching bricks found.</p>`;
      return;
    }
    gridContainer.innerHTML = list.map(brick => `
      <a href="${brick.url}" class="code-btn tooltip" tabindex="0" aria-label="${brick.name}: ${brick.description}">
        <span class="code-icon" aria-hidden="true">${brick.icon}</span>
        ${brick.name}
        <div class="code-desc">${brick.description}</div>
        <span class="tooltiptext">${brick.category}</span>
        ${brick.progress ? `<span class="progress-badge">${brick.progress}</span>` : ''}
      </a>
    `).join('');
  }

  function filterBricks() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = bricks.filter(b =>
      b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
    );
    renderBricks(filtered);
  }

  searchInput.addEventListener('input', filterBricks);

  // Initial render
  renderBricks(bricks);
