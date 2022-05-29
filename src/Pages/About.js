import React from "react";
import eZone from "../img/mySites/project01.png";
import eDoctor from "../img/mySites/project02.png";
import fashionHouse from "../img/mySites/project03.png";
import hotGadget from "../img/mySites/project04.png";
import eSchool from "../img/mySites/project05.png";
import eCommerce from "../img/mySites/project06.png";
import mobileFinder from "../img/mySites/project07.png";
import gromingWedding from "../img/mySites/project08.png";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import TechnologyAndTools from "../components/TechnologyAndTools";
const About = () => {
  return (
    <div className=" bg-base-200">
      <div className="hero py-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
          <div className="text-center lg:text-left">
            <h4 className="text-md">Hey! I'm</h4>
            <h4 className="text-4xl">
              <span className="font-bold text-red-600">Riazul Islam</span>{" "}
            </h4>
            <p className=" text-blue-500 font-bold text-xl tracking-widest ">
              Full Stack Web Developer
            </p>
            <hr class=" border-[1px] border-yellow-400" />
            <p className="pt-2 text-justify">
              I am a computer science graduate from{" "}
              <a href="" target="_blank">
                <strong className="hover:underline hover:text-blue-600">
                  Jahangirnagar University
                </strong>
              </a>{" "}
              in <strong>Dhaka, Bangladesh</strong> My mission this year
              is to be a Full Stack Web Developer. I am constantly working hard for this
              and hopefully I will be able to reach my destination. Below you
              can see samples of some of the projects I have done.
            </p>
            {/* Social  */}
            <div className="w-1/2 mx-auto flex justify-evenly my-1">
              <a
                href="https://facebook.com/devriazul"
                className="hover:text-blue-600 "
                target="_blank"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://github.com/devriazul"
                className="hover:text-gray-600 "
                target="_blank"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/devriazul/"
                className="hover:text-blue-500"
                target="_blank"
              >
                <FaLinkedinIn size={40} />
              </a>
              <a
                href="https://www.youtube.com/devriazul"
                className="hover:text-red-600"
                target="_blank"
              >
                <FaYoutube size={40} />
              </a>
              <a
                href="https://twitter.com/devriazul"
                className="hover:text-blue-500"
                target="_blank"
              >
                <FaTwitter size={40} />
              </a>
            </div>
            {/* Email  */}
            <div className="flex justify-center mb-2">
              <strong>Email: &nbsp;&nbsp;</strong>
              <a
                href="mailto:engr.riazul@gmail.com"
                target="_blank"
                className="hover:underline hover:text-orange-600"
                title="Click me to send email"
              >
                engr.riazul@gmail.com
              </a>
            </div>
            {/* Education  */}
            <div class=" flex justify-between ">
              <div>
                <div class="font-bold">MSc in Computer Science</div>
                <div class="text-sm opacity-50">
                  Jahangirnagar University
                </div>
                <div class="text-sm opacity-50">Dhaka, Bangladesh</div>
              </div>
              <div>
                <div class="font-bold">
                BSc in Computer Science
                </div>
                <div class="text-sm opacity-50">
                  Fareast International University.
                </div>
                <div class="text-sm opacity-50">Dhaka, Bangladesh.</div>
              </div>
            </div>
            <TechnologyAndTools />
            <hr class=" border-[1px] border-yellow-400" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img
              src="https://avatars.githubusercontent.com/u/24354468?v=4"
              alt=""
            />
          </div>
        </div>
      </div>

      <h1 className="text-center text-2xl hover:text-red-500">My Projects</h1>
      <hr class=" border-[1px] w-10/12 mx-auto my-3 border-gray-800 hover:border-red-500" />
      <div className="hero w-full">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-10">
          <a href="https://devriazul-ecommerce.netlify.app/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#E32227] duration-300  hover:bg-neutral text-primary-content p-5">
                <img src={eCommerce} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Panda eCommerce</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#E84B4F] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#ED7377] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a href="https://devriazul.github.io/E-School/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#2BB02B]  duration-300  hover:bg-neutral text-primary-content p-5">
                <img src={eSchool} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">eSchool</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#3ACF3A] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#5FD85F] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://devriazul.github.io/hot-gadgets/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#3F33BD] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={hotGadget} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Hot Gadget</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#5A4FCF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#7C73D9] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://penguin-shop-devriazul.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#FFA500] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={fashionHouse} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">
                    Penguin Fashion
                  </h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#FFB52E] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#FFD68A] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://e-doctor-devriazul.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#FF00FF] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={eDoctor} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">
                    eDoctor
                  </h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#FF2EFF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#FF5CFF] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a href="https://electronics-zone-277dc.web.app/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#8F00FF] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={eZone} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">eZone Service</h2>
                  <p>eZone</p>
                </div>
              </div>

              <div class="card shadow bg-[#A32EFF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#B75CFF] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://convention-center-devriazul.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#3F33BD] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={gromingWedding} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Convension Center</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#5A4FCF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#7C73D9] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://mobile-finder-devriazul.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#FF00FF] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={mobileFinder} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">
                    Phone Finder
                  </h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#FF2EFF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#FF5CFF] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
