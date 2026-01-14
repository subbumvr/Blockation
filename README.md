# On Mark Evaluation System - Implementation Plan

## 1. Project Overview
**On Mark Evaluation** is a comprehensive digital assessment platform designed to streamline the grading process. It replaces physical answer sheets with digital copies, allowing examiners to mark, annotate, and grade submissions on-screen.

**Core Value Proposition:**
- **Efficiency:** Faster grading and result processing.
- **Accuracy:** Automated totaling and rubric application.
- **Security:** Digital audit trails and secure access.

## 2. Technology Stack
We will build a high-performance, modern web application.

- **Frontend Framework:** Next.js (React)
  - *Why:* Best for performance, SEO, and robust routing.
- **Language:** TypeScript
  - *Why:* Type safety for complex evaluation logic.
- **Styling:** Vanilla CSS (CSS Modules)
  - *Design Philosophy:* "Premium Glassmorphism" - Dark mode by default, translucent layers, vibrant gradients, and smooth micro-animations.
- **State Management:** React Context / Zustand
- **Database (Proposed):** PostgreSQL (Supabase) or Local Mock Data for initial prototype.
- **Authentication:** NextAuth.js (supporting role-based access for Admin, Examiner, Student).

## 3. Key Feature Modules

### A. Authentication & Roles
- **Admin**: Manage subjects, exams, and assign evaluators.
- **Examiner**: View assigned scripts, mark papers, submit grades.
- **Student**: View processed results and feedback (optional for MVP).

### B. Dashboard
- **Stats Overview**: Pending papers, completed evaluations, average processing time.
- **Inbox**: List of answer scripts ready for marking.

### C. The "On-Screen Marking" Interface (Core)
This is the heart of the application.
- **Split View**: 
  - Left Panel: Scanned Answer Script (PDF/Image viewer).
  - Right Panel: Interactive Scoring Sheet & Rubrics.
- **Annotation Tools**: Red pen, highlighter, sticky notes, checkmarks, cross-marks overlaying the script.
- **Auto-Totalling**: As marks are entered, the total score updates automatically.
- **Zoom/Pan**: Easy navigation of the scanned script.

### D. Automated Processes
- **Rubric Grading**: Click-to-grade rubrics for subjective answers.
- **Validation**: Prevent submission if questions are skipped (unless marked optional).

## 4. Design & Aesthetics (Premium UX)
- **Theme**: Deep space blue/black background with neon accents (Cyan/Purple).
- **Glassmorphism**: Panels will have semi-transparent backgrounds with blur effects.
- **Interactions**: 
  - Smooth transitions between marking tools.
  - Success animations when a paper is submitted.
  - Hover effects on all interactive elements.

## 5. Implementation Roadmap

### Phase 1: Foundation & Setup
1.  Initialize Next.js project.
2.  Configure CSS variables for the "Premium" design system (colors, spacing, typography).
3.  Set up basic layout (Sidebar, Header, Main Content Area).

### Phase 2: Core Components & Layouts
1.  Build reusable UI components: Cards, Buttons, Inputs, Modals.
2.  Implement the **Dashboard View** for Examiners.
3.  Create the **PDF/Image Viewer** component prototype.

### Phase 3: The Marking Engine (MVP)
1.  Implement the **Split-Screen Layout**.
2.  Develop the **Scoring Panel** (Question input, marks entry).
3.  Add basic **Canvas/Overlay** features for drawing annotations on the script.

### Phase 4: Data & State Logic
1.  Mock data for students, exams, and answer scripts.
2.  Connect the UI to state management.
3.  Implement auto-calculation logic.

### Phase 5: Polish & Refinement
1.  Add micro-animations (Framer Motion).
2.  Ensure responsiveness.
3.  Final review of UX flows.

## 6. Next Steps
Shall we proceed with **Phase 1: Foundation & Setup**?
I will initialize the Next.js application and set up the premium design tokens.
