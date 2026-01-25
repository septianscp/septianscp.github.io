# Implementation Plan - Portfolio Detail Page

The goal is to create a dynamic detail page for each portfolio item, featuring a title, 3 descriptions, and a carousel of images.

## User Review Required

> [!IMPORTANT] 
> Routing will be `app/portfolio/[index]/page.tsx` as requested. Data will be looked up by index from `PROJECTS`.

## Proposed Changes

### Data Structure
#### [MODIFY] [constant/Body/index.ts](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/constant/Body/index.ts)
- Update `PROJECTS` array to include:
    - `description_1`, `description_2`, `description_3`
    - `images` (array of strings for carousel)

### Routing (New Page)
#### [NEW] [app/portfolio/[index]/page.tsx](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/app/portfolio/[index]/page.tsx)
- Use dynamic params to get `index`.
- Find project data using `PROJECTS[index]`.
- Render:
    - **Header/Footer** (Standard layout)
    - **Title**
    - **Carousel**: using `embla-carousel-react`.
    - **Descriptions**: Display the 3 description paragraphs.

### Components
#### [NEW] [component/Carousel/index.tsx](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/component/Carousel/index.tsx)
- Implement using `embla-carousel-react`.

#### [MODIFY] [component/Body/Portfolio/PortfolioCard.tsx](file://wsl.localhost/Ubuntu/home/septian/playground/portofolio-web/component/Body/Portfolio/PortfolioCard.tsx)
- Update card to link to `/portfolio/${index}`.

## Verification Plan
### Manual Verification
- Click on a Portfolio card -> navigate to `/portfolio/0`, `/portfolio/1`, etc.
- Verify correct content loads for that index.
- Verify Carousel functionality.
