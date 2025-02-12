import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";  // Add this import

const Footer = () => {
  return (
    <footer className="bg-[#08080] text-[#9e9d9d] py-8 px-4 border-t-2 border-t-[#1c1c1c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo & Description */}
        <div className="mb-6 pb-10 md:mb-0">
          <div className="flex items-center mb-4">
            <Image
              src="/images/divineinfotech.png"
              alt="Company logo"
              width={55}
              height={55}
              className="w-16 h-16 mr-2"
            />
            <span className="text-xl font-normal text-[#d0d0d0]">Divine Infotech</span>
          </div>
          <p className="text-[#9e9d9d]">
            Find a job you love and research the fastest-growing companies.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-10">
          <FooterColumn title="Product" links={["Remote Job", "Startup", "Investor & Board", "Company"]} />
          <FooterColumn title="Features" links={["For Candidate", "For Company", "Society"]} />
          <FooterColumn title="About Us" links={["Documentation", "Contact Us", "Career"]} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#1c1c1c] mt-8 pt-4 text-[#9e9d9d]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#9e9d9d] text-sm">© {new Date().getFullYear()} Divine Infotech, Inc.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink href="#" text="Terms" />
            <FooterLink href="#" text="Privacy" />
            <FooterLink href="#" text="Legal" />

            {/* Social Links */}
            <div className="flex space-x-4 ml-4">
              <SocialIcon href="#" icon={faFacebookF} />
              <SocialIcon href="#" icon={faTwitter} />
              <SocialIcon href="#" icon={faLinkedinIn} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Column Component
const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-[#d0d0d0] font-semibold mb-2">{title}</h3>
    <ul className="text-[#9e9d9d] space-y-1">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  </div>
);

// Reusable Footer Link Component
const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="text-[#9e9d9d] text-sm">
    {text}
  </Link>
);

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }: { href: string; icon: IconDefinition }) => ( // Updated here
  <Link href={href} className="text-gray-600 hover:text-gray-900">
    <FontAwesomeIcon icon={icon} className="text-lg" />
  </Link>
);

export default Footer;
