# InsightBoard

A modern analytics dashboard built with Next.js and TypeScript. It delivers a polished, responsive interface for exploring metrics, trends, and time-series data through interactive cards and charts.

## About

InsightBoard provides a centralized platform for exploring and analyzing key metrics and trends. It addresses the common challenge of visualizing complex data in an intuitive, interactive way that supports data-driven decision-making.

The project emphasizes a clean, responsive experience and efficient data handling that help users quickly discover insights across devices. By streamlining data exploration and visualization, InsightBoard demonstrates a commitment to usability and performance-driven design.

## Live Demo

🔗 [View Live Demo](https://insight-board.vercel.app/) — _Link to be added_

## Preview

[Insert screenshot or GIF here]

## Features

- **Responsive Analytics Dashboard** – Browse a curated collection of metrics and trends through interactive charts
- **Metric Widgets** – Summary widgets with total, trend, and data point breakdowns
- **Dual Chart Views** – Metric history and daily trend analysis
- **Date Range Selection** – Custom date ranges and quick-range filtering
- **Dark Mode Support** – Theme switching for better user experience
- **State Management** – Redux Toolkit for filters and selected metrics
- **Optimized Rendering** – Lazy-loaded chart components for performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Charts**: Recharts
- **Date Handling**: React Datepicker
- **Language**: TypeScript

## Installation

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/insightboard.git
   cd insightboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Other Commands

- `npm run build` – Build for production
- `npm start` – Run the production server
- `npm run lint` – Run ESLint

## Project Structure

```
insightboard/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   ├── dashboard/                 # Dashboard section
│   │   ├── page.tsx               # Dashboard page
│   │   └── Dashboard.tsx          # Dashboard component
│   └── providers.tsx              # Providers setup
├── components/                    # Reusable React components
│   ├── charts/                    # Chart-related components
│   │   ├── AreaChartCard.tsx
│   │   ├── BigLineChart.tsx
│   │   ├── ChartSkeleton.tsx
│   │   └── LineChartCard.tsx
│   ├── common/                    # Common UI components
│   │   ├── Modal.tsx
│   │   ├── Portal.tsx
│   │   ├── Stat.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   └── WidgetCard.tsx
│   ├── forms/                     # Form components
│   │   ├── DateRangePicker.tsx
│   │   ├── LineChartFilters.tsx
│   │   ├── MetricsSelector.tsx
│   │   └── QuickDateRangePicker.tsx
│   └── tables/                    # Table components
│       └── RecentTable.tsx
├── lib/                           # Shared utilities
│   ├── computeMetrics.ts          # Metric calculations
│   └── mockData.ts                # Mock data
├── modules/                       # Feature modules
│   └── dashboard/                 # Dashboard module
│       └── components/            # Dashboard-specific components
├── store/                         # Redux store
│   ├── store.ts                   # Store setup
│   └── slices/                    # Redux slices
│       └── analyticsSlice.ts
├── types/                         # TypeScript types
│   └── analytics.ts
├── public/                        # Static assets
├── assets/                        # Design assets
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & scripts
└── README.md                      # This file
```

## Key Technical Decisions

### App Router with Next.js 16

Leverages Next.js 16's App Router for improved performance, reduced bundle size, and efficient routing without API layers.

### Redux Toolkit for State Management

Chose Redux Toolkit for reliable, scalable state management. Suitable for this scale while maintaining predictable state updates.

### Tailwind CSS for Styling

Component-scoped Tailwind classes prevent naming conflicts and maintain style encapsulation without heavy dependencies.

### Lazy Loading for Charts

Chart components are dynamically imported to reduce initial bundle size and improve load times.

### TypeScript for Type Safety

Implements TypeScript to ensure type safety and better developer experience.

## Challenges

Implementing responsive chart interactions required coordinating multiple libraries while keeping performance optimal. The solution was to use Recharts with lazy loading and skeleton components for better user experience.

Managing state for filters and selected metrics across components presented edge cases when updating multiple charts simultaneously. A centralized Redux slice now handles all analytics state, preventing conflicts without user intervention.

## Results

- Delivered a fully responsive analytics platform with interactive charts and efficient data handling.
- Enabled data-driven insights, increasing usability through intuitive visualizations.
- Optimized page load times using lazy loading and modern React features.
- Demonstrated proficiency in modern Next.js features and state management patterns.

## Future Improvements

- **User Authentication** – Add login/signup with data persistence
- **Real Data Integration** – Connect to live APIs for real-time analytics
- **Advanced Filters** – Implement multi-dimensional filtering and search

## License

This project is licensed under the MIT License. See the LICENSE file for details.
