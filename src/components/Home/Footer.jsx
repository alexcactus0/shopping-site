import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer bg-zinc-950 text-zinc-400 flex flex-col w-full items-center ">
      <div className="navsFooter w-full pl-[6em] h-[13em] flex items-center gap-[6em]">
        <section className="ft shop h-[7.5em]">
          <p>
            <Link to="/shop">Shop</Link>
          </p>
          <p>
            <Link to="/shoes">Shoes</Link>
          </p>
          <p>
            <Link to="/clothes">Clothes</Link>
          </p>
          <p>
            <Link to="/accessories">Accessories</Link>
          </p>
        </section>
        <section className="ft about  h-[7.5em]">
          <p>About</p>
          <p>Careers</p>
          <p>About Cactix</p>
          <p>Meet the Team</p>
        </section>
        <section className="ft help h-[7.5em] ">
          <p>Help</p>
          <p>FAQ</p>
          <p>Support</p>
          <p>Acoount Help</p>
          <p>Shipping & Returns</p>
        </section>
        <section className="ft shopName flex flex-col items-center h-[7.5em] w-[20em] ">
          <p className="text-xl">CACTIX</p>
          <p>Built for those who never give it up</p>
        </section>
      </div>
      <div className="creator flex justify-center items-center w-full gap-[20em] p-5">
        <div className="date">@2026 Cactix, All Rights Reserved</div>
        <div className="me">Built and Maintained by alexcactus0</div>
        <div className="privacy flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
