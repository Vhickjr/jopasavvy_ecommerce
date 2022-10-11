import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Center = styled.div`
  margin: 20px auto;
`;

const BannerStyle = styled.div`
  --mainColor: background: linear-gradient(180deg, #00ccff 0%, #7465e4 100%);
  --mainColorLight: #5767aa;
  --secondaryColor: #f48c06;
  --textColor: #eee;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 4;
    padding-left: 8rem;
    background-color: var(--mainColor);
    color: var(--textColor);
    font-family: "Poppins";
    font-size: 1.3rem;
    font-weight: 400;
  }

  nav a {
    padding-left: 3rem;
    color:white;
    gap:10px
    color: var(--textColor);
    text-decoration: none;
  }
  nav div{
    gap: 20px;
    padding: 2rem;
  
 }

  nav a:hover {
    color: var(--secondaryColor);
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  header div,
  nav {
    display: flex;
    align-items: center;
  }
  header .responsive_nav {
    transform: none;
  }

  @media only screen and (max-width: 1130px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    header .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    header nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: var(--mainColor);
      background-color: var(--mainColor);
       {
        /*transition: 1s;*/
      }
      transform: translateY(-100vh);
    }

    header .responsive_nav {
      transform: none;
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    nav div{
      gap: 20px;
      padding: 2rem;
     display: flex;
     flex-direction: column;
   }

    nav a {
      font-size: 1.4rem;
      padding-left: 0rem;
    }
  }
`;

export default function Home() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzujr4h",
        "template_23cdkcq",
        e.target,
        "dfKvdTRbroAo0kBGF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <BannerStyle>
        <header className={styles.navv}>
          <nav ref={navRef}>
            {" "}
            <a href="/#">Home</a>
            <a href="/#">Careers</a>
            <a href="/#">Blog</a>
            <a href="/#">About us</a>
            <div>
              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "2px solid white",
                  borderRadius: "18px",
                  width: "170px",
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  padding: "10px",
                }}
              >
                Languages
              </button>
              <button
                style={{
                  background: "#F48C06",
                  color: "white",
                  border: "2px solid #F48C06",
                  borderRadius: "18px",
                  width: "170px",
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  padding: "10px",
                }}
              >
                Download
              </button>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </BannerStyle>
      <div
        className={styles.main}
        style={{
          paddingLeft: "1em",
          paddingRight: "1em",
          paddingBotton: "5em",
          paddingTop: "1em",
        }}
      >
        <div>
          {" "}
          <Image alt="" src="/favicon.ico" width="50px" height="50px" />
          <h4>Jopasavvy</h4>
          <h6>Coming soon!</h6>
          <p>
            Our mission as a company is to provide packages that can be paid for
            without stress. This is the sole aim of jopa savvy global limited,
            adding value to the lives of Nigerians by helping them get their
            daily needs one Naira @ a time.
          </p>
        </div>
        <div>
          <a id="Contact">
            {" "}
            <h5>Subscribe to Our Newsletter!</h5>
          </a>
          <form
            style={{
              paddingTop: "3em",
              paddingBottom: "3em",
              justifyContent: "center",
            }}
            onSubmit={sendEmail}
          >
            <div>
              <input
                type="name"
                placeholder="Full name"
                style={{
                  width: "70%",
                  height: "50px",
                  borderRadius: "5px",
                  paddingLeft: "25px",
                }}
              ></input>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "70%",
                  height: "50px",
                  borderRadius: "5px",
                  paddingLeft: "25px",
                }}
              ></input>
            </div>
            <button
              type="submit"
              value="send"
              style={{
                width: "70%",
                height: "50px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "black",
                marginTop: "20px",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.item1}>
        <div
          style={{
            paddingLeft: "1em",
            paddingRight: "1em",
            paddingBotton: "5em",
            paddingTop: "1em",
          }}
        >
          {" "}
          <a id="About_us">
            {" "}
            <h4>About us</h4>
          </a>
          <p>
            Jopasavvy Global is a dynamic company focused on helping the average
            Nigerian meet up with their Household need through daily
            contribution otherwise know as product savings , we provide the best
            payment method every Nigerian can access any product they need
            through instalmental payments that are very convenient.
          </p>
        </div>

        <div
          style={{
            paddingLeft: "1em",
            paddingRight: "1em",
          }}
        >
          {" "}
          <h4>Our Vision</h4>
          <p>
            Our vision is to eradicate lack by making all daily needs accessible
            to every Nigerians and beyond.
          </p>
        </div>
      </div>
      <div className={styles.item2}>
        <div style={{ width: "300px" }}>
          <h2>Jopasavvy</h2>
          <h4>The new way to buy</h4>
        </div>
        <div style={{ width: "300px" }}>
          <h4>Quick Links</h4>
          <a
            href="Jopasavvy"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h6>Home</h6>
          </a>
          <a
            href="#About_us"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h6>About</h6>{" "}
          </a>{" "}
          <a href="Contact" style={{ textDecoration: "none", color: "black" }}>
            <h6>Contact</h6>
          </a>
        </div>
        <div style={{ width: "300px" }}>
          <h4>Follow Us</h4>
          <h6>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://web.facebook.com/Jopa_Savvy"
            >
              Facebook
            </a>
          </h6>
          <a
            href="https://twitter.com/JopaSavvy?s=20&t=DRvpCy09V1X_6hwHG1cufA"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <h6>Twitter</h6>
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.instagram.com/Jopasavvy_GL/"
          >
            <h6>Instagram</h6>
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <footerSection>
          <Center>
            <textContent>
              <FaRegCopyright /> Copyright 2022. jopasavvy.com
            </textContent>
          </Center>
        </footerSection>
      </div>
    </div>
  );
}
