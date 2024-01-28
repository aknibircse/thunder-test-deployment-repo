import logo from "./Thunderslab logo 2.svg";
import social from "./Group 1000003280.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import f1 from "../../assets/img/footer (1).png";
import f2 from "../../assets/img/footer (2).png";
import f3 from "../../assets/img/footer (3).png";
import f4 from "../../assets/img/footer (4).png";
import f5 from "../../assets/img/footer (5).png";

const Footer = () => {
  return (
    <div className="bg-[#1A1818D9] text-white  lg:p-10 ">
      <div className=" my-10 ">
        <nav className="lg:hidden flex justify-center items-center">
          <img src={logo} className="w-[102px] h-[107.212px]" alt="" />
        </nav>
        <h1 className="mb-10 text-center font-semibold text-lg flex justify-center items-center">
          Services
        </h1>
        <footer className="footer px-10  max-w-[1400px]   lg:mx-auto mx-14 text-white ">
          <nav className="hidden lg:block -mt-8">
            <img src={logo} alt="" />
          </nav>
          <nav className=" text-center mx-16 ">
            <header className="link link-hover">Strategy Game Testing</header>
            <a className="link link-hover">Sports/Racing Game Testing</a>
            <a className="link link-hover">FPS Testing</a>
            <a className="link link-hover">RPG Testing</a>
          </nav> 
          <nav className=" text-center mx-16  ">
            <header className="link link-hover">Horror Game Testing</header>
            <a className="link link-hover">MMO Testing</a>
            <a className="link link-hover">Simulation Game Testing</a>
            <a className="link link-hover">Playtest Testing</a>
          </nav>
          <nav>
            <div className="lg:-mt-16 block mx-5  lg:mx-0">
              <a
                className="lg:flex items-center gap-3"
                href="teamthunder@crusherslabqa.com"
              >
                <div className="flex justify-center items-center my-2 lg:my-0">
                  <MdOutlineMail className="text-2xl" />
                </div>
               <p className="flex justify-center items-center ml-3 lg:ml-0">
               teamthunder@crusherslabqa.com
               </p>
              </a>
              <div className="mb-5 mt-3 lg:flex items-center gap-3">
                <p className="flex justify-center items-center lg:my-3">
                  <FaPhoneVolume className="text-xl lg:text-lg" />
                </p>
                <span className="ml-8 lg:ml-0 flex justify-center items-center">
                  +88 01608217323
                </span>
              </div>
            </div>
            {/* social images */}
            <div className=" lg:mx-0 mx-12">
              <img src={social} alt="" />
            </div>
          </nav>
        </footer>
        {/* divider */}
        <hr className="lg:max-w-[1400px] mx-auto my-14" />
        {/* images */}
      </div>
      <footer className="footer px-10  max-w-[1400px]   lg:mx-auto mx-14 text-white ">
        <aside className="items-center lg:flex justify-center  lg:ml0-0 ml-14 lg:gap-40">
          <img src={f1} className="md:w-32 h-24 " alt="" />
          <img src={f2} className="md:w-52 h-9 mb-5 " alt="" />
          <img src={f3} className="md:w-52 h-6 mb-5 " alt="" />
          <img src={f4} className="md:w-32 h-8 mb-5 " alt="" />
          <img src={f5} className="md:w-32 h-16" alt="" />
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
