# Prism Advisors

Accounting that scales with you. From startups to enterprises, Prism Advisors delivers full-stack accounting, bookkeeping, and CFO advisory.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **Font**: Geist Sans & Geist Mono
- **Deployment**: Static export ready

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation + mobile menu
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Why.tsx         # Why choose us section
│   │   ├── Services.tsx    # Services section
│   │   ├── Industries.tsx  # Industries we serve
│   │   ├── About.tsx       # About + testimonials
│   │   ├── Insights.tsx    # Blog/resources section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer links
│   ├── context/
│   │   └── DataContext.tsx # Centralized data context
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API route
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
└── public/                 # Static assets
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run type-check

# Lint and fix
npm run lint:fix

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment Options

### Option 1: Static Export (Current Config)

Best for: GitHub Pages, Netlify, Vercel static hosting

```bash
npm run build
```

The `out/` folder contains the static export.

### Option 2: Server-Side Rendering

For dynamic features (contact form API):

1. Remove `output: 'export'` from `next.config.ts`
2. Deploy to Vercel, Netlify, or similar platform

### Option 3: Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📧 Contact Form Integration

To enable the contact form:

1. **Email Service**: Add Resend, SendGrid, or similar
2. **Environment Variables**:
   ```bash
   RESEND_API_KEY=your_api_key_here
   CONTACT_EMAIL=info@prismadvisors.com
   ```
3. **Update API Route**: Uncomment email service code in `/api/contact/route.ts`

## 🎨 Customization

- **Content**: Edit `src/app/context/DataContext.tsx`
- **Styling**: Modify `tailwind.config.ts` and component styles
- **Components**: Each section is modular in `src/app/components/`
- **Branding**: Update colors, fonts, and assets

## 📱 Features

✅ Responsive design  
✅ SEO optimized  
✅ Type-safe components  
✅ Centralized data management  
✅ Contact form with validation  
✅ Modern CSS with Tailwind v4  
✅ Performance optimized  
✅ Accessibility compliant

## 🔧 Configuration

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (create this file)

---

**Built with ❤️ using Next.js and Tailwind CSS**
