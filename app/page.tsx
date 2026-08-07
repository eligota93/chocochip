const instagram = "https://www.instagram.com/cookie.chocolattte/";

const signature = [
  ["23-striped-cream-cookie.png", "Striped Cream", "Signature cookie"],
  ["22-triple-chocolate-cookie.png", "Triple Chocolate", "Signature cookie"],
  ["24-red-velvet-cookie.png", "Red Velvet", "Signature cookie"],
];

const chocolateBars = [
  "01-heart-cluster-chocolate.png", "02-abstract-pattern-chocolate.png", "03-yellow-dress-fruit-chocolate.png",
  "04-woman-strawberry-chocolate.png", "05-colorful-balloon-chocolate.png", "06-classic-balloon-chocolate.png",
  "07-paris-chocolate.png", "08-decorated-chocolate.png", "09-decorated-chocolate.png", "10-decorated-chocolate.png",
  "11-decorated-chocolate.png", "12-decorated-chocolate.png", "13-decorated-chocolate.png", "14-decorated-chocolate.png",
  "15-decorated-chocolate.png", "16-christmas-reindeer-chocolate.png", "17-classic-chocolate.png",
  "18-classic-chocolate.png", "19-classic-chocolate.png", "20-classic-chocolate.png", "21-geometric-mixed-chocolate.png",
  "25-fashion-macarons-chocolate.png", "26-sculpted-woman-flowers-chocolate.png", "27-pink-floral-chocolate.png",
  "28-mint-pink-dress-chocolate.png", "29-yellow-wedding-dress-chocolate.png",
];

function ProductImage({ file, alt }: { file: string; alt: string }) {
  return <img src={`/products/${file}`} alt={alt} loading="lazy" />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="ChocoChip Biscuit home">ChocoChip Biscuit</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a><a href="#cookies">Cookies</a><a href="#chocolates">Chocolates</a>
          <a href="#custom-orders">Custom orders</a><a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div><a href="#home">Home</a><a href="#cookies">Cookies</a><a href="#chocolates">Chocolates</a><a href="#custom-orders">Custom orders</a><a href="#contact">Contact</a></div>
        </details>
        <a className="nav-order" href={instagram} target="_blank" rel="noreferrer">Order</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-products" aria-hidden="true">
          <ProductImage file="22-triple-chocolate-cookie.png" alt="" />
          <ProductImage file="04-woman-strawberry-chocolate.png" alt="" />
          <ProductImage file="24-red-velvet-cookie.png" alt="" />
          <ProductImage file="08-decorated-chocolate.png" alt="" />
          <ProductImage file="23-striped-cream-cookie.png" alt="" />
          <ProductImage file="05-colorful-balloon-chocolate.png" alt="" />
        </div>
        <div className="hero-copy">
          <p className="script">Made fresh for every occasion</p>
          <h1>Custom chocolates<br />&amp; cookies</h1>
          <a className="button light" href={instagram} target="_blank" rel="noreferrer">Place a custom order</a>
        </div>
      </section>

      <div className="hero-chocolate-divider" aria-hidden="true">
        <img src="/hero-chocolate-drip-divider.png" alt="" />
      </div>

      <section className="signature section" id="cookies">
        <p className="script dark">Freshly baked, beautifully finished</p>
        <h2>Our Signature Cookies</h2>
        <p className="section-intro">Three flavours. One impossible choice.</p>
        <div className="product-grid cookie-only-grid">
          {signature.map(([file, name, type]) => (
            <article className="product" key={name}>
              <div className="product-image"><ProductImage file={file} alt={name} /></div>
              <div className="product-copy"><h3>{name}</h3><p>{type}</p></div>
            </article>
          ))}
        </div>
      </section>

      <div className="chocolate-drip-divider" aria-hidden="true">
        <img src="/chocolate-drip-divider.png" alt="" />
      </div>

      <section className="personal" id="custom-orders">
        <div className="personal-copy">
          <p className="script dark">Your moment, made delicious</p>
          <h2>Your idea.<br />Our chocolate.</h2>
          <p>From the colour and theme to every final detail, each chocolate is created around your celebration—not pulled from a shelf.</p>
          <a className="button dark-button" href={instagram} target="_blank" rel="noreferrer">Start a custom order</a>
        </div>
        <div className="personal-collage" aria-label="Custom chocolate examples">
          <div><ProductImage file="04-woman-strawberry-chocolate.png" alt="Strawberry custom chocolate" /></div>
          <div><ProductImage file="07-paris-chocolate.png" alt="Paris custom chocolate" /></div>
          <div><ProductImage file="27-pink-floral-chocolate.png" alt="Pink floral custom chocolate" /></div>
          <div><ProductImage file="29-yellow-wedding-dress-chocolate.png" alt="Wedding custom chocolate" /></div>
        </div>
      </section>

      <div className="milk-splash-divider" aria-hidden="true">
        <img src="/milk-chocolate-splash-transparent.png" alt="" />
      </div>

      <section className="cookie-feature" id="cookie-story">
        <div className="cookie-stack">
          <img className="cookie-shards-backdrop" src="/chocolate-shards-divider.png" alt="" aria-hidden="true" />
          <div className="feature-cookie"><ProductImage file="22-triple-chocolate-cookie.png" alt="Triple chocolate cookie" /></div>
          <span className="melt">melted<br />inside</span>
        </div>
        <div><p className="script">Thick, buttery, impossible to forget</p><h2>Baked to be<br />remembered</h2><p>Rich chocolate, soft centres and generous toppings. One bite, endless moments.</p></div>
      </section>

      <section className="occasions section" id="chocolates">
        <p className="script dark">Every bar tells a different story</p>
        <h2>The Chocolate Showroom</h2>
        <p className="section-intro">Custom-made for celebrations, gifts and everything in between.</p>
        <div className="chocolate-marquee" aria-label="All custom chocolate bar designs">
          <div className="chocolate-track">
            <div className="marquee-group">
              {chocolateBars.map((file, index) => <div className="moving-bar" key={`a-${file}`}><ProductImage file={file} alt={`Custom chocolate bar design ${index + 1}`} /></div>)}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {chocolateBars.map((file) => <div className="moving-bar" key={`b-${file}`}><ProductImage file={file} alt="" /></div>)}
            </div>
          </div>
        </div>
        <a className="button outline" href={instagram} target="_blank" rel="noreferrer">Create your own</a>
      </section>

      <section className="gifting">
        <div className="gift-copy">
          <p className="script">Unwrap something unforgettable</p>
          <h2>Sweet moments,<br />beautifully gifted</h2>
          <p>Choose the colours, theme and flavours. We’ll turn them into a one-of-a-kind chocolate and cookie gift made especially for your person.</p>
          <a className="button light" href={instagram} target="_blank" rel="noreferrer">Design a gift</a>
        </div>
        <div className="gift-scene" aria-label="ChocoChip Biscuit custom gift box">
          <div className="gift-float gift-float-one"><ProductImage file="27-pink-floral-chocolate.png" alt="Pink floral chocolate" /></div>
          <div className="gift-float gift-float-two"><ProductImage file="22-triple-chocolate-cookie.png" alt="Triple chocolate cookie" /></div>
          <div className="gift-float gift-float-three"><ProductImage file="24-red-velvet-cookie.png" alt="Red velvet cookie" /></div>
          <div className="gift-float gift-float-four"><ProductImage file="03-yellow-dress-fruit-chocolate.png" alt="Yellow dress chocolate" /></div>
          <img className="gift-whisk" src="/chocolate-whisk-transparent.png" alt="Melted chocolate on a whisk" />
        </div>
      </section>

      <section className="finale" id="contact">
        <div className="finale-treat finale-treat-left"><ProductImage file="24-red-velvet-cookie.png" alt="" /></div>
        <div className="finale-treat finale-treat-right"><ProductImage file="27-pink-floral-chocolate.png" alt="" /></div>
        <div className="finale-copy">
          <p className="script">Your sweetest idea starts here</p>
          <h2>Let’s make something<br />delicious</h2>
          <p>Pre-orders, custom gifts and collaborations are open.</p>
          <a className="finale-button" href={instagram} target="_blank" rel="noreferrer"><span>Instagram</span> @cookie.chocolattte <b aria-hidden="true">↗</b></a>
        </div>
        <footer className="finale-footer">
          <a className="finale-mark" href="#home">ChocoChip Biscuit</a>
          <p>Made fresh for every occasion</p>
          <a href="mailto:contact@chocochipbiscuit.com">contact@chocochipbiscuit.com</a>
          <p>Sunday closed</p>
        </footer>
      </section>
    </main>
  );
}
