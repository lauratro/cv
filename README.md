# Laura Tronchin — CV Website

A bilingual, responsive CV website built with Next.js and TypeScript. It
presents Laura Tronchin's professional experience, skills, education, and
projects in English and German, with downloadable ATS-oriented PDF versions.

## Features

- English and German CV routes with a persistent language switcher
- Responsive layout for desktop and mobile screens
- Structured experience, skills, education, and project sections
- Localized page titles, descriptions, canonical URLs, and social metadata
- Accessible semantic markup, keyboard focus states, and reduced-motion support
- Dedicated print layouts and downloadable English and German PDFs
- Clickable LinkedIn, GitHub, and project links in the generated PDFs
- Custom 404 and error pages

## Technology

- [Next.js 13](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) utilities alongside custom CSS
- [Lucide React](https://lucide.dev/) and
  [React Icons](https://react-icons.github.io/react-icons/) for icons

## Project structure

```text
src/
├── app/
│   ├── de/                    German CV route
│   ├── pdf/[locale]/          Printable CV routes
│   ├── resume-view.tsx        Shared bilingual CV presentation
│   ├── globals.css            Site and print styling
│   ├── layout.tsx             Root layout and shared metadata
│   └── page.tsx               English CV route
├── data/
│   └── resume-data.ts         English and German CV content
public/
├── Laura-Tronchin-CV-ATS-EN.pdf
├── Laura-Tronchin-Lebenslauf-ATS-DE.pdf
└── profile-pic-small.png
```

## Local development

Requirements:

- Node.js 18 or newer
- npm

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the local development server       |
| `npm run build` | Create and validate the production build |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run the Next.js ESLint checks            |

## Configuration

Set the public production URL in the deployment environment so canonical and
alternate-language links use the correct domain:

```env
PUBLIC_SITE_URL=https://your-domain.example
```

Do not include a trailing slash. Local development falls back to
`http://localhost:3000`.

## Updating the CV

The English and German content is maintained in
[`src/data/resume-data.ts`](src/data/resume-data.ts). Changes to that file are
shown by the website and the printable routes at `/pdf/en` and `/pdf/de`.

The downloadable PDF files in `public/` are committed assets. After changing
the CV, regenerate both files from the corresponding printable routes so the
downloads remain synchronized with the website.

## Deployment on Cloudflare Pages

The application is exported as a static site to the `out/` directory and
deployed by the GitHub Actions workflow in
`.github/workflows/deploy-cloudflare-pages.yml`. Every push to `main` runs a
clean production build and deploys it to Cloudflare Pages. The workflow can
also be started manually from the Actions tab.

Create a Cloudflare Pages project using **Direct Upload**, then configure the
following repository secrets in GitHub under **Settings > Secrets and
variables > Actions > Secrets**:

| Secret | Purpose |
| --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account that owns the Pages project |
| `CLOUDFLARE_API_TOKEN` | Scoped token with Cloudflare Pages edit permission |

Configure these repository variables under **Settings > Secrets and variables
> Actions > Variables**:

| Variable | Value |
| --- | --- |
| `CLOUDFLARE_PROJECT_NAME` | Exact name of the Cloudflare Pages project |
| `PUBLIC_SITE_URL` | The final public URL, without a trailing slash |

The workflow uses Node.js 20 and sets `NODE_ENV=production` itself. Do not also
enable Cloudflare's Git-based builds for the same project, otherwise a push may
create two deployments.

## Credits

The CV content was developed and reviewed with the MIT-licensed
[`cv-evidence-base` and `cv-and-human` skills](https://github.com/kevin-burns/claude-skills)
created by Kevin Burns.
The skills helped recover career evidence, improve recruiter-facing wording,
and check ATS readability. They influenced the content rather than the
application code and are not vendored in this repository.

## License

The source code is available under the [MIT License](LICENSE).

Personal information, CV content, photographs, and personal branding contained
in this repository are excluded from the license and may not be copied,
distributed, or reused without explicit permission from Laura Tronchin.
