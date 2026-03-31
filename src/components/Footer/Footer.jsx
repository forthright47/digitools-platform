import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4 lg:mt-7">
            DigiTools
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 mb-6">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex space-x-3">
            <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition cursor-pointer">
              <FaInstagram size={18}  />
            </div>
            <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition cursor-pointer">
              <FaFacebookSquare size={18} />
            </div>
            <div className="bg-white text-black p-2 rounded-full hover:scale-105 transition cursor-pointer">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;