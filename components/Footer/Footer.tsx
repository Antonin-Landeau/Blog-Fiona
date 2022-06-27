import Link from "next/link";

const Footer = () => {
  return (
    <>
      <svg
        className="rotate-180 m-[-5px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-primary-color drop-shadow-2xl shadow-black/25"
          d="M0,192L120,208C240,224,480,256,720,250.7C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <footer className="bg-primary-color">
        <div>
          <Link href="/">
            <a className="text-white text-2xl font-bold font-title  transition-all duration-200 ease-in-out block pb-5 text-center">
              Fiona Landeau
            </a>
          </Link>
          <p className="text-center text-slate-200 text-xs">
            © Fiona Landeau - Tout droit reservé
          </p>
          <nav className="flex flex-col items-center mt-5 mb-3 border-y border-white w-1/2 mx-auto">
            <Link href="/">
              <a className="text-white py-2 text-xl">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white py-2 text-xl">A propos</a>
            </Link>
            <Link href="/articles">
              <a className="text-white py-2 text-xl">Articles</a>
            </Link>
            <Link href="/recettes">
              <a className="text-white py-2 text-xl">Recettes</a>
            </Link>
          </nav>
          <div className="flex items-center justify-center pb-3">
            <Link href="https://www.facebook.com/fiona.landeau">
              <a target="_blanck">
                <svg
                  className=" fill-black hover:fill-white transition-all duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="50px"
                  height="50px"
                >
                  {" "}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                </svg>
              </a>
            </Link>
            <Link href="https://www.instagram.com/mieuxmangerpourmieuxvivre/">
              <a target="_blanck">
                <svg
                  className=" fill-black hover:fill-white transition-all duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50px"
                  height="50px"
                >
                  {" "}
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
            </Link>
            <Link href="https://fr.linkedin.com/in/fiona-landeau-1625a1194">
              <a target="_blanck">
                <svg
                  className=" fill-black hover:fill-white transition-all duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50px"
                  height="50px"
                >
                  {" "}
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
