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
          <p>
            <Link>About</Link>
          </p>
          <p>
            <Link>Careers</Link>
          </p>
          <p>
            <Link>About Cactix</Link>
          </p>
          <p>
            <Link>Meet the Team</Link>
          </p>
        </section>
        <section className="ft help h-[7.5em] ">
          <p>
            <Link>Help</Link>
          </p>
          <p>
            <Link>FAQ</Link>
          </p>
          <p>
            <Link>Support</Link>
          </p>
          <p>
            <Link>Account Help</Link>
          </p>
          <p>
            <Link>Shipping & Returnr</Link>
          </p>
        </section>
        <section className="ft shopName flex flex-col items-center h-[7.5em] w-[20em] ">
          <p className="text-xl">
            <Link to="/">CACTIX</Link>
          </p>
          <p>Built for those who never give it up</p>
        </section>
      </div>
      <div className="creator flex justify-center items-center w-full gap-[20em] p-5">
        <div className="date">@2026 Cactix, All Rights Reserved</div>
        <div className="me">
          Built and Maintained by
          <a href="https://github.com/alexcactus0">alexcactus0</a>
        </div>
        <div className="privacy flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
