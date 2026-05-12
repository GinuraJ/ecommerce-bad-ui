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

      {/* Accessible announcement */}
      <header className="top-strip">
        <p>
          Summer Sale — Save up to 25%
          on selected electronics.
        </p>
      </header>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">
          <h1 className="logo">
            Mega Deal Zone
          </h1>

          <p className="subtitle">
            Shop quality electronics
            with clear pricing and
            reliable delivery.
          </p>

          <button className="hero-btn">
            Shop Now
          </button>
        </div>

        {/* accessible media */}
        <video
          controls
          muted
          preload="metadata"
          className="promo-video"
          aria-label="Promotional video for products"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

      </section>

      {/* clean banner */}
      <section className="sale-banner">
        <h2>
          Featured Weekly Deals
        </h2>

        <p>
          Discover discounted
          electronics and accessories.
        </p>
      </section>

      {/* products */}
      <section className="products">

        {products.map((product, index) => (
          <article
            key={index}
            className="product-card"
          >
            <span className="discount-tag">
              Save 25%
            </span>

            <h2>{product}</h2>

            <p className="product-desc">
              Premium quality product
              with warranty support and
              fast delivery.
            </p>

            <div className="price-row">
              <span className="old-price">
                $499.99
              </span>

              <span className="price">
                ${(index + 1) * 15}.99
              </span>
            </div>

            <div className="button-group">

              <button
                className="primary-btn"
                aria-label={`Buy ${product}`}
              >
                Buy Now
              </button>

              <button
                className="secondary-btn"
                aria-label={`Add ${product} to cart`}
              >
                Add to Cart
              </button>

            </div>
          </article>
        ))}

      </section>

      {/* readable content */}
      <section className="info-section">

        <h2>
          Shopping Information
        </h2>

        <p className="info-text">
          Mega Deal Zone offers
          affordable electronics with
          secure checkout, transparent
          pricing, and reliable
          delivery. Browse our featured
          products and enjoy a more
          comfortable shopping
          experience.
        </p>

      </section>

      {/* reviews */}
      <section className="reviews">

        <h2>
          Customer Reviews
        </h2>

        <article className="review-card">
          ⭐⭐⭐⭐⭐
          Great product quality and
          delivery service.
        </article>

        <article className="review-card">
          ⭐⭐⭐⭐⭐
          Easy checkout process and
          helpful support.
        </article>

        <article className="review-card">
          ⭐⭐⭐⭐⭐
          Excellent shopping
          experience.
        </article>

      </section>

      {/* newsletter */}
      <section className="newsletter">

        <h2>
          Subscribe for Updates
        </h2>

        <p>
          Receive occasional product
          offers and updates.
        </p>

        <label
          htmlFor="email"
          className="visually-hidden"
        >
          Email address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter email"
          className="email-input"
        />

        <button className="join-btn">
          Subscribe
        </button>

      </section>

      <footer className="footer">
        © 2026 Mega Deal Zone —
        Accessible Shopping Experience
      </footer>

    </main>
  );
}