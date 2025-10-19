import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white">YC</span>
              </div>
              <span className="text-xl">Yon Chanranuth</span>
            </div>
            <p className="text-gray-400 mb-4">
              IT Support & Network Engineering professional dedicated to delivering 
              exceptional technical solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Yonchanranuth@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Yon Chanranuth
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
