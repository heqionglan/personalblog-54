// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

import Navigation from '@/components/Navigation';
export default function About(props) {
  const {
    $w
  } = props;
  return <div className="min-h-screen bg-[#faf9f7]">
      <Navigation $w={$w} currentPage="about" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              关于刘荔教授
            </h1>
            <p className="font-['Merriweather'] text-lg md:text-xl text-gray-300 leading-relaxed">
              清华大学建筑学院长聘副教授、特聘研究员
              新型冠状病毒感染防治岗位"长江学者"特聘教授
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="bg-white p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop" alt="刘荔教授" className="w-full aspect-square object-cover rounded-lg" />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a] mb-4">
                刘荔 教授
              </h2>
              <p className="font-['Merriweather'] text-[#2d2d2d] mb-6 leading-relaxed">
                清华大学建筑学院长聘副教授、特聘研究员，博士生导师。
                长期聚焦健康建筑、建筑防疫与环境健康研究。
                入选国家高层次人才计划、国家海外青年人才项目。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#f8f5f0] text-[#2d2d2d] text-sm font-['Merriweather']">
                  长江学者
                </span>
                <span className="px-4 py-2 bg-[#f8f5f0] text-[#2d2d2d] text-sm font-['Merriweather']">
                  WHO 专家组成员
                </span>
                <span className="px-4 py-2 bg-[#f8f5f0] text-[#2d2d2d] text-sm font-['Merriweather']">
                  国家级人才
                </span>
                <span className="px-4 py-2 bg-[#f8f5f0] text-[#2d2d2d] text-sm font-['Merriweather']">
                  博士生导师
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a] mb-6">
            教育与工作背景
          </h2>
          <div className="font-['Merriweather'] text-[#2d2d2d] space-y-4 leading-relaxed">
            <p>
              <strong>教育经历：</strong>2006 年毕业于清华大学热能工程系热能与动力工程专业，获学士学位；
              2011 年获香港大学机械工程系博士学位，师从李玉国教授，研究室内飞沫与气溶胶传播。
            </p>
            <p>
              <strong>工作履历：</strong>2012-2018 年在丹麦奥尔堡大学土木工程系历任助理教授、副教授；
              2018 年至今在清华大学建筑学院历任副教授、长聘副教授。
              期间兼任西安建筑科技大学兼职教授、法国东巴黎大学访问教授。
            </p>
            <p>
              <strong>学术服务：</strong>担任世界卫生组织（WHO）呼吸道病毒经空气传播专家组成员，
              参与 WHO 首部《医院内自然通风控制传染疾病指南》编写；
              《Indoor Air》期刊编委；中国建筑学会建筑物理分会理事。
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a] mb-6">
            研究领域
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a1a1a] mb-3">
                呼吸道传染病传播机理
              </h3>
              <p className="font-['Merriweather'] text-[#2d2d2d] text-sm">
                空气传播机理、风险评估、近距离传播机制
              </p>
            </div>
            <div className="bg-white p-6">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a1a1a] mb-3">
                建筑环境控制
              </h3>
              <p className="font-['Merriweather'] text-[#2d2d2d] text-sm">
                医院环境、特殊场所感染防控、环境监测
              </p>
            </div>
            <div className="bg-white p-6">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a1a1a] mb-3">
                暴露测量技术
              </h3>
              <p className="font-['Merriweather'] text-[#2d2d2d] text-sm">
                室内空气污染物、吸入暴露、可视化技术
              </p>
            </div>
            <div className="bg-white p-6">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a1a1a] mb-3">
                智能识别方法
              </h3>
              <p className="font-['Merriweather'] text-[#2d2d2d] text-sm">
                机器视觉、症状识别、感染行为分析
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 md:p-12">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a] mb-6">
            联系方式
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#c9a227]" />
              <span className="font-['Merriweather'] text-[#2d2d2d]">
                liuli_archi@tsinghua.edu.cn
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-[#c9a227]" />
              <span className="font-['Merriweather'] text-[#2d2d2d]">
                清华大学建筑学院 · 北京
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <a href="https://www.researchgate.net/profile/Liu-Li-15" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] text-white hover:bg-[#c9a227] transition-colors" title="ResearchGate">
              <GraduationCap className="w-5 h-5" />
            </a>
            <a href="https://www.arch.tsinghua.edu.cn/info/rw_jzhj/1454" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] text-white hover:bg-[#c9a227] transition-colors" title="清华大学建筑学院教师主页">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-['Playfair_Display'] text-2xl mb-4">刘荔教授学术主页</p>
          <p className="font-['Merriweather'] text-gray-400 text-sm">
            清华大学建筑学院 · 长聘副教授 · 特聘研究员
          </p>
          <p className="font-['Merriweather'] text-gray-500 text-xs mt-2">
            © 2026 All Rights Reserved. liuli_archi@tsinghua.edu.cn
          </p>
        </div>
      </footer>
    </div>;
}