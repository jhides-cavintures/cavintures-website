const categories = [
  { number: "01", name: "Household essentials", note: "For everyday living", symbol: "⌂" },
  { number: "02", name: "Electronics", note: "Useful technology", symbol: "⌁" },
  { number: "03", name: "Furniture", note: "For home and work", symbol: "▱" },
  { number: "04", name: "Office supplies", note: "Ready for the workday", symbol: "▤" },
];

const shopUrl = "https://cavintures.net/";

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>Serving buyers across the Philippines</span>
        <div className="top-contact">
          <a href="tel:+639475210539">+63 947 521 0539</a>
          <span className="top-divider">/</span>
          <a href="mailto:support@cavintures.com">support@cavintures.com</a>
        </div>
      </div>

      <header className="site-header">
        <a href="#home" className="brand" aria-label="CAVINTURES home">
          <span className="brand-mark">C</span>
          <span className="brand-name">CAVINTURES<span className="brand-dot">.</span><small>CRAFTING EXCELLENCE</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#categories">Shop categories</a>
          <a href="#customized">Customized merchandise</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-dark header-cta" href={shopUrl} target="_blank" rel="noreferrer">Shop online <Arrow /></a>
      </header>

      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> GENERAL MERCHANDISE · PHILIPPINES</p>
          <h1>Everyday goods.<br /><em>Made more</em> convenient.</h1>
          <p className="hero-description">Cavintures is an online store offering a wide range of general merchandise. We aim to provide quality products at competitive prices with convenient online shopping.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#categories">Explore categories <Arrow /></a>
            <a className="text-link" href={shopUrl} target="_blank" rel="noreferrer">Go to online store <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof"><span className="proof-dot" /> Online shopping <span className="proof-separator">·</span> Buyers across the Philippines</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/images/servicon-03-980x980.jpg" alt="Assortment of leather and travel bags" />
            <div className="image-label"><span>01 / 03</span><span>Selected merchandise</span></div>
          </div>
          <div className="hero-note"><span className="note-icon">✳</span><span><strong>Crafting excellence</strong><small>Delivering trust</small></span></div>
          <span className="hero-stamp">CAV<br />INTURES</span>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> FIND WHAT YOU NEED</p><h2>Shop by category</h2></div>
            <a className="text-link" href={shopUrl} target="_blank" rel="noreferrer">Browse the online store <span aria-hidden="true">→</span></a>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a className="category-card" href={shopUrl} target="_blank" rel="noreferrer" key={category.number}>
                <div className="category-card-top"><span>{category.number}</span><span className="category-symbol" aria-hidden="true">{category.symbol}</span></div>
                <div><p>{category.note}</p><h3>{category.name}</h3></div>
                <span className="category-arrow" aria-label={`Shop ${category.name}`}><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-section page-width" id="customized">
        <div className="custom-photo"><img src="/images/servicon-02-980x980.jpg" alt="Workwear, uniforms, and safety merchandise" /><span className="photo-caption">CUSTOMIZED MERCHANDISE</span></div>
        <div className="custom-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> MADE FOR YOUR BRAND</p>
          <h2>Customized<br />merchandise</h2>
          <p>CAVINTURES’ customized merchandise offers a wide range of personalized products designed to meet the unique needs of corporate, government, and individual clients. Specializing in high-quality, tailored items, CAVINTURES provides custom-made solutions that reflect the client’s brand and identity.</p>
          <p>Our product lineup includes branded apparel, such as custom-printed t-shirts, jackets, and uniforms, perfect for promotional events, corporate giveaways, and team-building activities. We also offer promotional items like personalized mugs, bags, pens, power banks, USB, RFID Cards and keychains, ideal for strengthening brand presence and fostering client engagement.</p>
          <p>For government and corporate projects, CAVINTURES delivers specialized items like plaques, trophies, and awards, crafted with precision to reflect professionalism and excellence. In addition, we offer IT products, providing customized solutions like branded tech accessories, software and hardware for corporate use.</p>
          <a className="button button-outline" href="mailto:support@cavintures.com?subject=Customized%20merchandise%20inquiry">Ask about customization <Arrow /></a>
        </div>
      </section>

      <section className="brand-story" id="about">
        <div className="page-width story-inner">
          <div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> THE COMPANY</p><h2>Crafting excellence.<br /><em>Delivering trust.</em></h2></div>
          <div className="story-copy"><p>CAVINTURES is built on the foundation of crafting excellence and delivering trust in every product and service we offer. Our commitment to quality and innovation ensures that each solution we provide is crafted with precision and care. By consistently delivering reliable, high-performance products, we earn the trust of our clients, forging long-lasting partnerships.</p><p>At CAVINTURES, excellence is more than a goal; it’s the standard we uphold in everything we do, ensuring that our customers receive not just products, but solutions they can depend on.</p></div>
        </div>
      </section>

      <section className="service-strip page-width" id="delivery">
        <div><span className="service-index">01</span><span><strong>Online ordering</strong><small>Shop through our online store</small></span></div>
        <div><span className="service-index">02</span><span><strong>Serving the Philippines</strong><small>For buyers across the country</small></span></div>
        <div><span className="service-index">03</span><span><strong>Delivery & returns</strong><small>See current store information</small></span></div>
        <a href={shopUrl} target="_blank" rel="noreferrer">Visit store for details <Arrow /></a>
      </section>

      <footer id="contact">
        <div className="page-width footer-main">
          <a href="#home" className="brand brand-footer"><span className="brand-mark">C</span><span className="brand-name">CAVINTURES<span className="brand-dot">.</span><small>CRAFTING EXCELLENCE</small></span></a>
          <div className="footer-message"><h2>Delivering trust<br />in every detail.</h2><p>For product or customized merchandise inquiries, get in touch with our team.</p></div>
          <div className="footer-contact"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> CONTACT</p><a href="tel:+639475210539">+63 947 521 0539</a><a href="mailto:support@cavintures.com">support@cavintures.com</a><a href="mailto:support@cavintures.com?subject=Product%20inquiry">Send an inquiry <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} CAVINTURES</span><span>Crafting Excellence · Delivering Trust</span><a href={shopUrl} target="_blank" rel="noreferrer">Shop online ↗</a></div>
      </footer>
    </main>
  );
}
