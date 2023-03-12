import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} bg-dimGray  flex-col md: mt-[-35px] mt-[-15px]`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex-[1.5] w-full flex  justify-between ml-[40px] flex-wrap md:mt-[-40px] mt-[10] sm:flex-row flex-col">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins  font-bold text-[14px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins cursor-pointer hover:underline font-bold text-[10px] leading-[14px] text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col md:mt-0 mt-6 ">
          <h1 className="font-poppins font-medium text-[14px] leading-[27px] text-white mr-[40px] ">JOIN THE CONVERSATION</h1>
          <div className="mt-[-20px] ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] mt-[40px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
        </div>
      </div>
      </div>
    </div>
    <ul id="list" className="flex justify-between text-[10px]  text-white w-[100%] py-3 px-9 mt-[-80px] font-semibold shadow-lg sm:flex-row flex-col absolute ">
      <li className="cursor-pointer hover:underline">CHANGE MARKET</li>
<li className="cursor-pointer hover:underline">CAREERS</li>
<li className="cursor-pointer hover:underline">TERMS & CONDITIONS</li>
<li className="cursor-pointer hover:underline">CONTACT US</li>
<li className="cursor-pointer hover:underline">PRIVACY POLICY</li>
<li className="cursor-pointer hover:underline">COOKIE POLICY</li>
<li className="cursor-pointer hover:underline">ACCESSIBILITY</li>
<li className="cursor-pointer hover:underline">SITEMAP</li>
    </ul>
    <div className="mt-[100px] text-[11px] ml-9 mr-5 text-white ">
<p className="mb-[20px]">© JAGUAR LAND ROVER LIMITED 2023</p>
<p>Registered Office: Abbey Road, Whitley, Coventry CV3 4LF<br/>
Registered in England No: 1672070</p>

 

<p className="mb-[20px] mt-[20px]">Smart Settings is intended to be released as part of a future wireless software update. Software development and releases are subject to movements in planning and programming, and dates may be subject to change.</p>

 

<h1 className="mb-[20px]">VIEW REGULATION (EU) 2020/740 PDF</h1>

 

<p className="mb-[20px]">The fuel consumption figures provided are as a result of official manufacturer's tests in accordance with EU legislation.<br/>
A vehicle's actual fuel consumption may differ from that achieved in such tests and these figures are for comparative purposes only.</p>

 

<p className="mb-[20px]"><span className="font-bold">Important note on imagery & specification.</span> The global shortage of semiconductors is currently affecting vehicle build specifications, option availability, and build timings. This is a very dynamic situation, and as a result imagery used within the website at present may not fully reflect current specifications for features, options, trim and colour schemes. Please consult your Retailer who will be able to confirm any current restrictions with you in order to allow an informed choice.</p>

 

<p className="mb-[20px]">Jaguar Land Rover Limited is constantly seeking ways to improve the specification, 
  design and production of its vehicles, parts and accessories and alterations 
  take place continually, and we reserve the right to change without notice. Some 
  features may vary between optional and standard for different model years.
   The information, specification, engines and colours on this website are based
    on European specification and may vary from market to market and are subject 
    to change without notice. Some vehicles are shown with optional equipment and 
    retailer-fit accessories that may not be available in all markets. Please contact 
    your local retailer for local availability and prices.</p>

 

<p >The mapping on this website is provided by external mapping providers and is for
 general information purposes only.</p>

      
    </div>
  </section>
);

export default Footer;