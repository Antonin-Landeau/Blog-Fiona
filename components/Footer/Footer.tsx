import Link from "next/link";

const Footer = () => {
  return (
    <>
      <svg
        className="w-full mb-[-60px]"
        width="2183"
        height="138"
        viewBox="0 0 2183 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2182.5 70C1921.17 17.8333 1118.8 -55.2 0 70V138H2183V70H2182.5Z"
          fill="#89BEC9"
        />
      </svg>

      <footer className="bg-primary-color md:pb-12">
        <div className="md:flex md:items-center md:justify-around md:max-w-5xl md:m-auto">
          <div>
            <div className="m-auto">
              <Link href="/" >
                <svg
                  className="fill-creamy-white mx-auto py-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 99"
                  width={180}
                >
                  <path d="M91.94,91.73V67.64L58.6,5.87,11.5,91.79h14L35.2,73.65H81.68l9.57,18.14ZM40.85,63,58.46,29.83,76,63Z" />
                  <path d="M173.2,9.16H160.49V73.32L109.58,9.17H96.85V91.73h12.77v-64l50.92,64H173.2V75.15a43,43,0,0,1,0-49.31Z" />
                  <path d="M214.27,19.77a32.65,32.65,0,0,1,21.53,7.84V12.94A46.49,46.49,0,0,0,214.31,7.8c-15.31,0-28.38,7.06-36.2,18a43,43,0,0,0,0,49.31c7.81,11,20.87,18,36.2,18a46.46,46.46,0,0,0,21.49-5.07V73.45a32.52,32.52,0,0,1-21.53,7.75c-17.54,0-31.26-13-31.26-30.75S196.73,19.77,214.27,19.77Z" />
                  <path d="M253.41,80.07V78.32l.18-.18-.18-.14.07-68.84H240.71V91.72h43.66l6.39-11.65Z" />
                  <path d="M382.47,91.32c-10-2.74-17.36-10-20.08-20.88l7.76-1.94L336.34,5.87l-40.67,74.2-6.39,11.65h14l1.54-2.89,8.1-15.18h46.48L369,91.79h13.73ZM318.6,63l17.6-33.17L353.73,63Z" />
                  <path d="M436.52,80.07V53.21h37.72V41.93l-37.72-.06V20.75h51.91V9.16H411.7V60.33c0,13.68-4.4,20.5-15.85,20.5-7.74,0-14.16-4.85-16.57-13.38l-4.22,1-7.75,1.94c2.72,10.91,10.05,18.14,20.07,20.88a35.87,35.87,0,0,0,9.16,1.25c15.14.12,24.46-7.16,27.28-22V91.72H488.5V80.07Z" />
                </svg>
              </Link>
            </div>
            <p className="text-center text-slate-200 text-xs">
              © Fiona Landeau - Tout droit reservé
            </p>
          </div>
          <nav className="flex flex-col items-center mt-5 mb-3 border-y border-white w-1/2 mx-auto md:mx-0 md:border-x md:border-y-0 md:w-1/3 ">
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
