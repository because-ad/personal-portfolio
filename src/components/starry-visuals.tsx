import { starryCocktail, starryPriceLadder } from "@/data/starry-cocktail";

function starPoints(cx: number, cy: number, outer: number, inner: number) {
  return Array.from({ length: 16 }, (_, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI) / 8;
    const radius = index % 2 === 0 ? outer : inner;
    return `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`;
  }).join(" ");
}

export function StarryMark() {
  return (
    <svg
      className="starry-mark"
      viewBox="0 0 200 200"
      role="img"
      aria-label="设计方案：圆形徽章内的马天尼杯、金色酒液、气泡与八角星"
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="100"
        cy="100"
        r="83"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".3"
      />
      <path
        d="M52 58H148L100 120Z"
        fill="none"
        stroke="#f6f1e8"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path d="M65 76H135L100 116Z" fill="#d6b576" />
      <path
        d="M100 121V157M76 158H124"
        fill="none"
        stroke="#f6f1e8"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <polygon points={starPoints(149, 44, 16, 5)} fill="#d6b576" />
      <circle cx="89" cy="89" r="2.4" fill="#fff6df" />
      <circle cx="110" cy="84" r="1.7" fill="#fff6df" />
      <circle cx="101" cy="100" r="1.6" fill="#fff6df" />
      <circle cx="48" cy="110" r="1.8" fill="currentColor" />
      <polygon points={starPoints(148, 125, 5, 1.8)} fill="currentColor" />
    </svg>
  );
}

export function StarryLockup() {
  return (
    <div className="starry-lockup">
      <StarryMark />
      <strong>{starryCocktail.name}</strong>
      <span lang="en">{starryCocktail.english}</span>
      <small>{starryCocktail.subtitle}</small>
    </div>
  );
}

function SignConcept() {
  return (
    <div className="starry-sign-concept">
      <StarryMark />
      <div>
        <strong>{starryCocktail.name}</strong>
        <span lang="en">{starryCocktail.english}</span>
        <small>{starryCocktail.subtitle}</small>
      </div>
    </div>
  );
}

function TableclothConcept() {
  return (
    <svg
      className="starry-tablecloth-sketch"
      viewBox="0 0 400 280"
      role="img"
      aria-label="桌布设计方案：纯黑桌面、自然下垂前挡与缩短侧边；前挡放置八角星和品牌名"
    >
      <path d="M40 46H360V82H40Z" fill="#0c0e0d" stroke="#85877f" />
      <path
        d="M40 82H360V242Q200 250 40 242Z"
        fill="#191b19"
        stroke="#777a71"
      />
      <path
        d="M26 52L40 82V104L26 74ZM360 82L374 52V74L360 104Z"
        fill="#242724"
        stroke="#777a71"
      />
      <polygon points={starPoints(200, 124, 19, 6)} fill="#d6b576" />
      <text
        x="200"
        y="181"
        textAnchor="middle"
        fill="#f6f1e8"
        fontSize="25"
        fontWeight="700"
      >
        星光鸡尾酒
      </text>
      <text
        x="200"
        y="207"
        textAnchor="middle"
        fill="#d6b576"
        fontSize="12"
        letterSpacing="3"
      >
        STARRY COCKTAIL
      </text>
    </svg>
  );
}

export function StarryBoothSketch() {
  return (
    <svg
      className="starry-booth-sketch"
      viewBox="0 0 640 470"
      role="img"
      aria-label="移动摊位结构设计方案：小推车、操作桌、两根黑色支架、约95cm横杆及约85乘28cm悬挂刀刮布；非现场照片"
    >
      <path
        d="M150 52H490M150 43V61M490 43V61"
        fill="none"
        stroke="#8a8d82"
        strokeWidth="1.5"
      />
      <text x="320" y="32" textAnchor="middle" fill="#555c55" fontSize="18">
        约 95cm 伸缩横杆
      </text>
      <path
        d="M150 80H490M150 78V300M490 78V300"
        fill="none"
        stroke="#252a25"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M180 82V101M460 82V101" stroke="#8f7953" strokeWidth="2" />
      <rect
        x="176"
        y="100"
        width="288"
        height="95"
        rx="2"
        fill="#121511"
        stroke="#7a6b4d"
      />
      <text
        x="320"
        y="143"
        textAnchor="middle"
        fill="#f6f1e8"
        fontSize="27"
        fontWeight="700"
      >
        星光鸡尾酒
      </text>
      <text
        x="320"
        y="169"
        textAnchor="middle"
        fill="#d6b576"
        fontSize="13"
        letterSpacing="3"
      >
        STARRY COCKTAIL
      </text>
      <path d="M125 295H515V310H125Z" fill="#111410" />
      <path
        d="M142 310H498V415Q320 424 142 415Z"
        fill="#1a1e18"
        stroke="#73796a"
      />
      <polygon points={starPoints(320, 342, 13, 4)} fill="#d6b576" />
      <text
        x="320"
        y="376"
        textAnchor="middle"
        fill="#f6f1e8"
        fontSize="22"
        fontWeight="700"
      >
        星光鸡尾酒
      </text>
      <text
        x="320"
        y="398"
        textAnchor="middle"
        fill="#d6b576"
        fontSize="11"
        letterSpacing="2"
      >
        STARRY COCKTAIL
      </text>
      <path
        d="M155 418L181 443H457L485 418M140 312L119 325M500 312L521 325"
        fill="none"
        stroke="#41473c"
        strokeWidth="4"
      />
      <circle cx="192" cy="444" r="17" fill="#353b32" />
      <circle cx="448" cy="444" r="17" fill="#353b32" />
      <circle cx="192" cy="444" r="7" fill="#b7bdad" />
      <circle cx="448" cy="444" r="7" fill="#b7bdad" />
      <text x="320" y="264" textAnchor="middle" fill="#555c55" fontSize="17">
        操作桌面约 95 × 55cm
      </text>
    </svg>
  );
}

export function StarryMenuConcept() {
  return (
    <div className="starry-menu-concept">
      <p className="starry-menu-name">
        {starryCocktail.name}
        <span lang="en">{starryCocktail.english}</span>
      </p>
      <p className="starry-menu-subtitle">{starryCocktail.subtitle}</p>
      <div className="starry-menu-prices">
        {starryPriceLadder.map((tier) => (
          <div key={tier.price}>
            <strong>¥{tier.price}</strong>
            <span>{tier.count} 款结构规划</span>
          </div>
        ))}
      </div>
      <p className="starry-menu-concept-note">
        菜单价格结构设计稿 · 未列完整正式品名
      </p>
    </div>
  );
}

export function StarryVisualSystem() {
  return (
    <div className="starry-visual-grid">
      {starryCocktail.visualItems.map((item, index) => (
        <figure className="starry-visual-card" key={item.id}>
          <div className={`starry-visual-preview starry-visual-${item.id}`}>
            {item.id === "logo" ? (
              <StarryLockup />
            ) : item.id === "sign" ? (
              <SignConcept />
            ) : item.id === "tablecloth" ? (
              <TableclothConcept />
            ) : item.id === "booth" ? (
              <StarryBoothSketch />
            ) : (
              <StarryMenuConcept />
            )}
          </div>
          <figcaption>
            <span className="starry-concept-label">
              Design Concept / 设计方案
            </span>
            <h3>
              0{index + 1} / {item.title} · {item.label}
            </h3>
            <p>{item.note}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
