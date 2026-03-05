import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 w-full pt-16 pb-8 px-6 lg:px-16 border-t border-zinc-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">
            Shop
          </h3>
          <Link to="/shop" className="hover:text-white transition">
            All Products
          </Link>
          <Link to="/shoes" className="hover:text-white transition">
            Shoes
          </Link>
          <Link to="/clothes" className="hover:text-white transition">
            Clothes
          </Link>
          <Link to="/accessories" className="hover:text-white transition">
            Accessories
          </Link>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">
            About
          </h3>
          <Link className="hover:text-white transition">Our Story</Link>
          <Link className="hover:text-white transition">Careers</Link>
          <Link className="hover:text-white transition">Meet the Team</Link>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">
            Support
          </h3>
          <Link className="hover:text-white transition">FAQ</Link>
          <Link className="hover:text-white transition">
            Shipping & Returns
          </Link>
          <Link className="hover:text-white transition">Account Help</Link>
        </section>

        <section className="flex flex-col items-start md:items-start text-left md:text-right gap-2">
          <Link
            to="/"
            className="text-2xl font-black text-white tracking-tighter"
          >
            CACTIX
          </Link>
          <p className="text-sm italic">Built for those who never give up.</p>
        </section>
      </div>

      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-zinc-500">© 2026 Cactix. All Rights Reserved.</div>

        <div className="flex gap-8">
          <Link className="hover:text-white transition">Privacy Policy</Link>
          <Link className="hover:text-white transition">Terms of Use</Link>
        </div>

        <div className="text-zinc-500">
          Maintained by
          <a
            href="https://github.com/alexcactus0"
            className="text-white hover:underline ml-1"
          >
            alexcactus0
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
