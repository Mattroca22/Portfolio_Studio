"use client";

import { useLang } from "@/hooks/useLang";

export function Footer() {
  const { t } = useLang();

  const footerLinks = {
    [t.footer.links]: [t.nav.home, t.nav.services, t.nav.projects, t.nav.stack],
    [t.footer.social]: ["LinkedIn", "GitHub", "Twitter/X", "Medium"],
    [t.footer.contact]: ["tu@email.com", "+34 600 000 000", "Madrid, Espana"],
  };

  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#00d4ff]" />
              <span className="text-lg font-bold text-white">DataCraft</span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.4)]">{t.footer.role}</p>
          </div>
          
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.6)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] text-center">
          <p className="text-sm text-[rgba(255,255,255,0.4)]">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}