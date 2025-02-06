import React from 'react';
import { Github, Linkedin, XIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000033] border-t border-[#CBA135]/20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-[#CBA135] text-center text-sm">
            <p className="text-sm text-center text-foreground">
              This website is a demonstration created by the{' '}
              <span className="text-[#00B831]">Qli Partner Engineering Team</span> to showcase integration capabilities with{' '}
              <span className="text-[#00B831]">Qlik</span> Answers.
              <br />
              <br />
              <strong>Harry Potter Application </strong>is a not intended for Production use and is not part of the{' '}
              <span className="text-[#00B831]">Qlik</span> Platform, &copy; <span className="text-[#00B831]">Qlik</span> 2025.
            </p>
          </div>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="https://github.com/Parkman328/harrypotter-v2" target="_blank" rel="noopener noreferrer" className="text-[#CBA135] hover:text-[#CBA135]/80">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/qlik" target="_blank" rel="noopener noreferrer" className="text-[#CBA135] hover:text-[#CBA135]/80">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/qlik" target="_blank" rel="noopener noreferrer" className="text-[#CBA135] hover:text-[#CBA135]/80">
              <XIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};