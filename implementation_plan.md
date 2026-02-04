# Implementation Plan - Portfolio List Page

## Goal
Create a dedicated page at `/portfolio` to list all projects, and limit the Home page portfolio section to a preview with a "Show More" button.

## Proposed Changes

### New Page
#### [NEW] [app/portfolio/page.tsx](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/app/portfolio/page.tsx)
-   **Layout**: Header -> Content -> Footer.
-   **Header**: `active="Portfolio"`, `isDetail={false}?` (It's a list page, so maybe standard header or detail header? Standard header seems appropriate, or maybe `active="Portfolio"` is enough).
-   **Content**: Map through ALL `PROJECTS` and render `PortfolioCard`. Re-use the styling from `Body/Portfolio/index.tsx`.

### Home Component
#### [MODIFY] [component/Body/Portfolio/index.tsx](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/component/Body/Portfolio/index.tsx)
-   **Limit**: Display only the first 3 projects.
-   **Button**: Add a "Show All Projects" button at the bottom.
-   **Action**: `router.push('/portfolio')`.

## Verification
-   Navigate to `/portfolio` -> See all projects.
-   Click project -> Go to detail `/portfolio/[index]`.
-   Go to Home -> See limited list + "Show Mo re".
-   Click "Show More" -> Go to `/portfolio`.
