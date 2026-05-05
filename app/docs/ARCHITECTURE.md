# Documentation Hub - Architecture Plan

## Overview
Build inner documentation pages for SwanDesk platform, replacing broken `/docs/...` links.

## Current State
- `/documentation` page exists with links to: `/docs/quickstart`, `/docs/platform`, `/docs/integrations`, `/docs/troubleshooting`, `/docs/api`, `/docs/sdk`
- Only `/docs/platform` exists (empty)

## Architecture

### 1. Layout Layer
```
app/docs/layout.tsx
├── Left Sidebar (fixed, 280px)
│   ├── Logo/Back to main
│   ├── Navigation sections
│   │   ├── Getting Started
│   │   │   ├── Quick Start
│   │   │   ├── Platform Guide
│   │   │   └── Integrations
│   │   └── Help & Support
│   │       └── Troubleshooting
│   └── Active state with orange accent
└── Right Content (flex-1, max-w-4xl)
    └── Page content with proper typography
```

### 2. Page Structure

| Route | File | Content |
|-------|------|---------|
| `/docs/quickstart` | `app/docs/quickstart/page.tsx` | Account setup, channel connection, first AI test |
| `/docs/platform` | `app/docs/platform/page.tsx` | Dashboard, AI training, routing, canned responses |
| `/docs/integrations` | `app/docs/integrations/page.tsx` | WhatsApp, Email, CRM integrations |
| `/docs/troubleshooting` | `app/docs/troubleshooting/page.tsx` | AI issues, WhatsApp errors, delays, contact support |

### 3. Removed Pages
- `/docs/api` - removed (not in scope)
- `/docs/sdk` - removed (not in scope)

## Implementation Order

1. **Create docs layout** - `app/docs/layout.tsx`
   - Two-column layout with sidebar
   - Sidebar navigation with active states
   - Responsive: sidebar becomes top nav on mobile

2. **Create quickstart page** - `app/docs/quickstart/page.tsx`
   - Introduction
   - Account Setup
   - Connecting Channel
   - Testing AI

3. **Create integrations page** - `app/docs/integrations/page.tsx`
   - WhatsApp Business
   - Email Integration
   - CRM Integrations

4. **Create troubleshooting page** - `app/docs/troubleshooting/page.tsx`
   - AI Not Responding
   - WhatsApp Connection Errors
   - Message Delivery Delays
   - Contacting Support

5. **Update documentation index** - `app/documentation/page.tsx`
   - Remove API Reference card
   - Remove SDK Documentation card
   - Update CTAs

## Design System

- **Colors**:
  - Sidebar bg: `slate-50`
  - Active/hover: `orange-500`
  - Text: `slate-900` (headings), `slate-600` (body)
- **Typography**: Tailwind prose classes
- **Components**:
  - Code blocks with syntax highlighting
  - Callout boxes (info, warning, tip)
  - Step-by-step numbered lists

## Technical Details

- Use Next.js App Router (already configured)
- All pages are Server Components by default
- Use `clsx` or conditional classes for active states
- Sidebar links check `usePathname()` for active state
- No additional dependencies needed (uses existing Tailwind setup)