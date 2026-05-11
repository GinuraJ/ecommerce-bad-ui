export default function Home() {
  const products = [
    "Neon Headphones",
    "Glow Gaming Mouse",
    "RGB Mechanical Keyboard",
    "Mega Smart Watch",
    "Ultra Bass Speaker",
    "Hyper Charger",
    "LED Mouse Pad",
    "Gaming Chair",
    "Smart Ring",
    "Bluetooth Earbuds",
    "Cyber Backpack",
    "VR Glasses",
  ];

  return (
    <main className="page">

      {/* Flashing top strip */}
      <div className="top-strip">
        ⚡ FLASH SALE ⚡ 99% OFF ⚡ LIMITED TIME ⚡ BUY NOW ⚡
      </div>

      {/* Breaking ticker */}
      <div className="ticker">
        <div className="ticker-text">
          ✈ LIMITED TIME FLIGHT DEALS ✈
          ONLY 1 ROOM LEFT ✈ 70% OFF ✈
          BOOK NOW ✈ FREE BREAKFAST ✈
        </div>
      </div>

      {/* Intrusive popup */}
      <div className="popup">
        <h2>🔥 SPECIAL OFFER 🔥</h2>
        <p>
          CLAIM YOUR 99% DISCOUNT NOW BEFORE TIMER ENDS!
        </p>

        <div className="countdown">
          00 : 01 : 44
        </div>

        <button className="popup-btn">
          CLAIM DEAL
        </button>
      </div>

      {/* Floating ad */}
      <div className="floating-ad">
        BUY NOW!!!
      </div>

      {/* Hero */}
      <section className="hero">

        <h1 className="logo">
          MEGA DEAL ZONE
        </h1>

        <p className="subtitle">
          BIGGEST SALE OF THE YEAR —
          EVERYTHING MUST GO —
          CHEAPEST PRICES —
          HURRY NOW!!!
        </p>

        {/* autoplay video */}
        <video
          autoPlay
          loop
          className="promo-video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* autoplay audio */}
        <audio autoPlay loop>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mp3"
          />
        </audio>
      </section>

      {/* flashing banner */}
      <section className="sale-banner">
        ⚠ WARNING ⚠ ONLY 1 ITEM LEFT ⚠
        PRICE INCREASES IN 10 MINUTES ⚠
      </section>

      {/* rotating promo cards */}
      <section className="promo-grid">
        <div className="promo-card">
          <h2>SUPER DEAL</h2>
          <p>
            Buy headphones and get 8 random
            mystery cables FREE!!!
          </p>
        </div>

        <div className="promo-card shake">
          <h2>MEGA OFFER</h2>
          <p>
            FREE SHIPPING FOR ONLY
            4 MINUTES!!!
          </p>
        </div>

        <div className="promo-card blink">
          <h2>FLASH PRICE</h2>
          <p>
            LIMITED STOCK —
            LIMITED STOCK —
            LIMITED STOCK
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="products">

        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
          >
            <div className="discount-tag">
              99% OFF
            </div>

            <h2>{product}</h2>

            <p className="product-desc">
              AMAZING QUALITY +
              LIMITED EDITION +
              BEST DEAL +
              ONLY TODAY +
              SUPER FAST SHIPPING.
            </p>

            <div className="price-row">
              <span className="old-price">
                $499.99
              </span>

              <span className="price">
                ${(index + 1) * 5}.99
              </span>
            </div>

            <div className="button-group">
              <button className="tiny-btn">
                BUY
              </button>

              <button className="tiny-btn">
                +
              </button>

              <button className="tiny-btn">
                GO
              </button>
            </div>

            {/* hidden clickable */}
            <div
              className="ghost-click"
              title="hidden"
              tabIndex={0}
            />
          </div>
        ))}
      </section>

      {/* dense text */}
      <section className="dense-section">

        <h2>
          IMPORTANT SALE INFORMATION
        </h2>

        <p className="dense-text">
          THIS PARAGRAPH IS
          INTENTIONALLY LONG,
          DENSE, STRESSFUL,
          REPETITIVE, HARD TO SCAN,
          OVERWHELMING, AND
          VISUALLY DISTRACTING FOR
          TESTING PURPOSES. THIS
          STORE HAS THE BEST DEALS,
          BEST PRICES, CHEAPEST
          PRODUCTS, FLASH SALES,
          COUNTDOWN TIMERS,
          SHAKING BUTTONS,
          BLINKING ALERTS,
          FLASHING CONTENT,
          EXCESSIVE MOTION,
          PROMOTIONAL OVERLOAD,
          MULTIPLE POPUPS,
          RANDOM ATTENTION
          GRABBING UI PATTERNS,
          HIDDEN CLICKABLE
          ELEMENTS, TINY TARGETS,
          AND MANY OTHER FEATURES
          THAT MAY CREATE COGNITIVE
          OVERLOAD.
        </p>

      </section>

      {/* fake reviews */}
      <section className="reviews">

        <h2>
          CUSTOMER REVIEWS
        </h2>

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          BEST PRODUCT EVER!!!
          I BOUGHT 12!!!
        </div>

        <div className="review-card shake">
          ⭐⭐⭐⭐⭐
          FAST DELIVERY!!!
          AMAZING EXPERIENCE!!!
        </div>

        <div className="review-card blink">
          ⭐⭐⭐⭐⭐
          EVERYTHING IS SO CHEAP!!!
        </div>

      </section>

      {/* newsletter popup section */}
      <section className="newsletter">

        <h2>
          JOIN OUR VIP MEMBERSHIP
        </h2>

        <p>
          GET 100 EMAILS DAILY
          ABOUT SALES!!!
        </p>

        <input
          placeholder="Enter email"
          className="email-input"
        />

        <button className="join-btn">
          JOIN NOW
        </button>

      </section>

      {/* bottom ad */}
      <section className="mega-banner">
        BUY NOW BUY NOW BUY NOW
        BUY NOW BUY NOW BUY NOW
      </section>

      <footer className="footer">
        THIS WEBSITE IS
        INTENTIONALLY DESIGNED
        TO VIOLATE ACCESSIBILITY
        RULES FOR AUDIT TOOL
        TESTING PURPOSES.
      </footer>
    </main>
  );
}