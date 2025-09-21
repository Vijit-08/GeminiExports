# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🏢 Company Profile
**Name**: Gemini Exports
**Founded**: 1996 (30+ years experience)
**Industry**: ISO-certified pharmaceutical trading & exports
**Location**: Mumbai, India
**Global Reach**: 50+ countries
**Products**: 300+ APIs, complex intermediates
**Key Contact**: Mr. Punit C. Thakkar

## Content Guideline
- ** As moving from page to page don't change content.
- ** look for index.md in old code base for starting point

## We should use as less token as possible and get the maximum output

## 🎨 Brand Guidelines
### Colors
- **Primary**: #1CAFD8 (Gemini Blue - use for CTAs, highlights)
- **Secondary**: #FFFFFF (White - backgrounds, text contrast)
- **Accent**: #F8FAFC (Light gray - subtle backgrounds)
- **Text**: #1F2937 (Dark gray - primary text)
- **Muted**: #6B7280 (Medium gray - secondary text)

### Typography
- **Primary Font**: Inter or Poppins (professional, clean)
- **Headings**: 600-700 font weight
- **Body**: 400-500 font weight
- **Scale**: text-sm to text-6xl (Tailwind scale)

### Design Principles
- **Minimal**: Clean layouts, generous whitespace
- **Corporate**: Professional, trustworthy appearance
- **Modern**: Contemporary design patterns
- **Accessible**: WCAG 2.1 AA compliance
- **B2B Focused**: Industry-appropriate tone

## 🏗️ Technical Stack
```json
{
  "framework": "React 18+",
  "styling": "Tailwind CSS",
  "icons": "Lucide React",
  "animations": "Framer Motion",
  "routing": "React Router",
  "forms": "React Hook Form",
  "typescript": "preferred",
  "build": "Vite (faster than CRA)"
}
```

## 📱 Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```



## 🎨 Component Library

### Button Variants
```jsx
// Primary button
className="bg-[#1CAFD8] hover:bg-[#0EA5E9] text-white px-6 py-3 rounded-lg font-semibold transition-colors"

// Secondary button
className="border-2 border-[#1CAFD8] text-[#1CAFD8] hover:bg-[#1CAFD8] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"

// Ghost button
className="text-[#1CAFD8] hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
```

### Card Component
```jsx
className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
```

### Section Container
```jsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

## 🔍 SEO Requirements
- Meta title: Include "pharmaceutical exports", "APIs", "Mumbai"
- Meta description: Focus on quality, experience, global reach
- Alt tags: Descriptive for all images
- Headings: Proper H1-H6 hierarchy
- Page speed: <3 seconds load time

## 💻 Modern Desktop-First Approach
- Design for desktop experience first (1200px+)
- Sophisticated layouts with proper spacing and typography
- Advanced animations and micro-interactions
- Premium pharmaceutical industry aesthetics
- Responsive scaling down to mobile devices

## ♿ Accessibility Standards
- Color contrast: 4.5:1 minimum
- Keyboard navigation support
- Screen reader friendly
- Focus indicators visible
- Alt text for images
- Semantic HTML structure

## 🚀 Performance Guidelines
- Lazy load images below fold
- Minimize bundle size
- Optimize images (WebP format)
- Use semantic HTML
- Implement loading states
- Error boundary components

## 📝 Content Tone
- **Professional**: Industry-appropriate language
- **Trustworthy**: Emphasize quality & compliance
- **Global**: International market focus
- **Technical**: Accurate pharmaceutical terminology
- **Concise**: Clear, direct communication

## 🔄 Development Workflow
1. **Start with Homepage** - Complete before moving to other pages
2. **Desktop-first** - Create sophisticated layouts, then make responsive
3. **Component-driven** - Build reusable components with modern design
4. **Advanced UI/UX** - Focus on premium pharmaceutical industry aesthetics
5. **Performance-focused** - Optimize for speed and accessibility

## 📞 Contact Information Template
```
Gemini Exports
Tower A-704, Marathon Future X
Mumbai, Maharashtra, India
Phone: [To be provided]
Email: [To be provided]
Website: geminiexports.in
```

---

## 💡 Quick Reference Commands

### Start Development
```bash
npx create-vite@latest gemini-exports --template react-ts
cd gemini-exports
npm install tailwindcss @headlessui/react framer-motion lucide-react react-router-dom
```

### Colors in Tailwind Config
```js
theme: {
  extend: {
    colors: {
      'gemini': '#1CAFD8',
      'gemini-dark': '#0EA5E9'
    }
  }
}
```

**Remember**: Always refer back to this file for brand colors, component patterns, and business information. Build homepage first, then ask for next page guidance.. look for this claude.md file for the guidelines. this is a pharmacuetical website so use some icons as well if you have any. don't use big blocks with padding to make it modern that wiill look unprofessional.