# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, featuring a headless CMS for content management, blog functionality, and a contact form with email integration.

![Portfolio Screenshot](public/portfolio-screenshot.png)

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Styling**: Tailwind CSS and shadcn/ui components for a beautiful, responsive design
- **Content Management**: Payload CMS for easy content updates
- **Database**: PostgreSQL with Supabase for storing content and user data
- **Storage**: S3-compatible storage for media files
- **Email Integration**: Resend for handling contact form submissions
- **Blog System**: Full-featured blog with categories and rich text content
- **Experience Showcase**: Display your work experience, projects, and skills
- **Contact Form**: Interactive contact form with email notifications
- **Dark Mode**: Built-in dark mode support
- **Webhooks**: Connect to any external service using webhooks
- **Form Validation**: Zod and React Hook Form for type-safe form validation

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **CMS**: Payload CMS
- **Database**: PostgreSQL with Supabase
- **Storage**: S3-compatible storage
- **Email**: Resend
- **Form Validation**: Zod, React Hook Form
- **Deployment**: Docker support included

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- S3-compatible storage (or Supabase storage)
- Resend API key for email functionality

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration:
   ```
   DATABASE_URI=your-postgres-connection-string
   PAYLOAD_SECRET=your-secret-key
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   S3_BUCKET=your-bucket-name
   S3_ACCESS_KEY_ID=your-access-key
   S3_SECRET_ACCESS_KEY=your-secret-key
   S3_REGION=your-region
   S3_ENDPOINT=your-endpoint
   NEXT_PUBLIC_RESEND_API_KEY=your-resend-api-key
   NEXT_PUBLIC_RESEND_TO_EMAIL=your-email
   ```

4. Generate Payload CMS types:
   ```bash
   pnpm generate:types
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: React components
  - `sections/`: Main page sections (hero, experience, blog, contact)
  - `ui/`: Reusable UI components
  - `RichText/`: Rich text rendering components
- `collections/`: Payload CMS collection definitions
- `lib/`: Utility functions and API helpers
- `public/`: Static assets
- `migrations/`: Database migrations

## Content Management

This portfolio uses Payload CMS for content management. The CMS includes collections for:

- **Posts**: Blog posts with rich text content
- **Experiences**: Work experience, projects, and volunteer work
- **Tags**: Skills and categories for filtering content
- **Media**: Image and file uploads

To access the CMS admin panel, navigate to `/admin` after starting the development server.

## Deployment

The project includes a Dockerfile for containerized deployment. To build and run the Docker container:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Payload CMS](https://payloadcms.com/)
- [Resend](https://resend.com/)
