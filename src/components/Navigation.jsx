// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, FileText, User } from 'lucide-react';

export default function Navigation({
  $w,
  currentPage
}) {
  const navItems = [{
    id: 'home',
    label: '首页',
    icon: Home
  }, {
    id: 'about',
    label: '关于',
    icon: User
  }];
  const handleNavClick = pageId => {
    $w.utils.navigateTo({
      pageId,
      params: {}
    });
  };
  return <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="font-['Playfair_Display'] text-2xl font-bold text-[#1a1a1a] hover:text-[#c9a227] transition-colors">
            刘荔教授学术主页
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex items-center gap-2 font-['Merriweather'] text-sm transition-colors ${isActive ? 'text-[#c9a227]' : 'text-[#2d2d2d] hover:text-[#c9a227]'}`}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>;
          })}
          </div>
        </div>
      </div>
    </nav>;
}