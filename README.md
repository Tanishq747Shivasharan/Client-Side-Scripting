# Client-Side-Scripting

## Introduction
This repository contains a structured implementation set for the MSBTE Diploma course **Client Side Scripting (Course Code: 316005, K-Scheme, Semester VI)**. The work aligns with the laboratory orientation defined in `316005.pdf`, with practical exercises implemented using HTML, JavaScript, AngularJS, modern Angular, and React.

The repository is organized as practical-wise folders (`Practical_01` through `Practical_19`) to support laboratory execution, demonstration, and revision.

## Objectives
The implemented practicals are intended to support the core course outcomes reflected in the MSBTE laboratory manual:

- Develop web pages using client-side scripting.
- Design dynamic pages using Angular-based approaches.
- Apply built-in AngularJS features such as filters, controllers, and events.
- Develop React-based user interfaces and forms.
- Implement event handling and input validation in React applications.

## Repository Scope
Based on the current directory contents, this repository includes implementations for:

- Practicals **1 to 19** (with additional variants under `Practical_19/19.1` and `Practical_19/19.2`).
- Standalone HTML/AngularJS exercises.
- Multiple Angular standalone applications.
- Multiple React (Create React App) applications.

Scope note against `316005.pdf`:

- The manual lists practicals up to 23 (including list manipulation, CSS approaches in React, and microproject guidance).
- The present repository is focused on practical implementations up to Practical 19, with additional validation variants.

## Features
- Practical-wise folder structure for direct mapping to lab assignments.
- Coverage of foundational client-side scripting topics:
  - Console/document/alert output
  - JSON object creation and access
  - PyScript browser execution
- AngularJS-focused exercises:
  - Form validation
  - Filters
  - Controllers and external controller files
- Angular (standalone component) exercises:
  - Data model-view display
  - Two-way binding
  - Event handling
  - Data table rendering and table styling
- React exercises:
  - Controlled forms
  - Parent-to-child function argument flow
  - Class lifecycle usage
  - `useState`-based state management
  - Real-time form preview
  - Form validation scenarios

## Directory Structure
```text
Client-Side-Scripting/
|- 316005.pdf
|- README.md
|- Practical_01/
|- Practical_02/
|- Practical_03/
|- Practical_04/
|  |- prerequisites.md
|  `- ngmyNewApp/           (Angular)
|- Practical_05/
|  `- formApp/              (Angular app hosting AngularJS form page)
|- Practical_06/
|  `- data-model-view/      (Angular)
|- Practical_07/
|  |- two-way-data-binding/ (Angular)
|  `- registration-form/    (Angular)
|- Practical_08/            (AngularJS filter pages)
|- Practical_09/
|  `- events/               (Angular)
|- Practical_10/
|  `- Table/                (Angular)
|- Practical_11/
|  `- Table-Style/          (Angular)
|- Practical_12/            (AngularJS controllers)
|- Practical_13/            (AngularJS external controller)
|- Practical_14/
|  `- myreactapp/           (React)
|- Practical_15/
|  `- reactcomponent/       (React)
|- Practical_16/
|  `- reactlifecycle/       (React)
|- Practical_17/
|  `- reacthooks/           (React)
|- Practical_18/
|  `- form/                 (React)
`- Practical_19/
   |- reactvalidation/      (React)
   |- 19.1/19.1/            (React validation variant)
   `- 19.2/19.2/            (React validation variant)
```

## Practical Mapping
1. Hello World (`console.log`, `document.write`, `alert`)  
2. Welcome output using PyScript  
3. JSON object creation and display  
4. Angular setup prerequisite and Good Morning page  
5. AngularJS form controls and validation  
6. Data model-view binding  
7. Two-way data binding (plus registration-form implementation)  
8. AngularJS filters (including additional filter examples)  
9. Event handling  
10. Table rendering  
11. Table styling (including odd/even row styling)  
12. AngularJS controllers (parent/child/student)  
13. External controller file usage  
14. React form handling  
15. Passing function argument into React component  
16. React lifecycle demonstration  
17. React Hooks state handling (`useState`)  
18. Real-time React form behavior  
19. React form validations (with additional validation variants)

## Technology Stack
- HTML5, CSS3, JavaScript (ES6+)
- AngularJS `1.8.2` (CDN-based pages)
- Angular `21.x` (standalone application pattern in practical projects)
- React `19.2.4` with `react-scripts 5.0.1`
- PyScript `2025.8.1` (Practical 02)

## Prerequisites
- Node.js and npm (required for Angular and React subprojects)
- Angular CLI (required for Angular practical projects)
- Modern browser with internet access (required for CDN dependencies such as AngularJS and PyScript)

## Installation and Execution
### A. Standalone HTML / AngularJS practicals
Use for folders such as `Practical_01`, `Practical_02`, `Practical_03`, `Practical_08`, `Practical_12`, `Practical_13`.

1. Open the required `.html` file in a browser.
2. Ensure internet connectivity for external CDN links.

### B. Angular practical applications
Use for projects under:
- `Practical_04/ngmyNewApp`
- `Practical_05/formApp`
- `Practical_06/data-model-view`
- `Practical_07/two-way-data-binding`
- `Practical_07/registration-form`
- `Practical_09/events`
- `Practical_10/Table`
- `Practical_11/Table-Style`

```bash
cd <angular-project-folder>
npm install
npm start
```

Default local URL: `http://localhost:4200`

### C. React practical applications
Use for projects under:
- `Practical_14/myreactapp`
- `Practical_15/reactcomponent`
- `Practical_16/reactlifecycle`
- `Practical_17/reacthooks`
- `Practical_18/form`
- `Practical_19/reactvalidation`
- `Practical_19/19.1/19.1`
- `Practical_19/19.2/19.2`

```bash
cd <react-project-folder>
npm install
npm start
```

Default local URL: `http://localhost:3000`

## Implementation Notes
- Several Angular projects follow modern Angular standalone conventions while embedding course-oriented practical logic in `src/app/app.html` and related component files.
- AngularJS practicals are intentionally lightweight and file-based for direct lab demonstration.
- React practicals are organized as independent Create React App projects, each focused on one topic.
- Some subdirectories may contain generated tooling artifacts (for example, dependency caches) depending on local execution history.

## Alignment with 316005 Laboratory Manual
Analysis of `316005.pdf` indicates emphasis on:

- Outcome-based practical execution.
- Industry-relevant skills: client-side UI behavior, DOM interaction, form validation, and modern framework usage.
- Practical progression from scripting fundamentals to framework-based development.

The repository implementation reflects this progression in a practical-first structure suitable for laboratory submission support and technical revision.

## References
- MSBTE Laboratory Manual: `316005.pdf`
- AngularJS CDN documentation and examples
- Angular CLI and Angular framework documentation
- React documentation and Create React App toolchain documentation

## License
No explicit license file is currently present in this repository.

