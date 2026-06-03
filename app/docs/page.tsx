import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocImage } from "@/components/docs/DocImage";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { GITHUB_URL } from "@/lib/constants";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Everything you need to install Wolent CMS, define content types, and
          consume your content via the REST API.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <DocsSidebar />

        <article className="min-w-0 max-w-3xl prose-invert">
          <section id="getting-started" className="scroll-mt-28 pb-16">
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Wolent CMS is an open-source headless content management system
              designed for developers who want power without complexity. This
              guide walks you through your first setup.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Prerequisites</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Node.js 18+ or Docker</li>
              <li>PostgreSQL or SQLite database</li>
              <li>A modern browser for the admin panel</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Quick overview</h3>
            <p className="mt-4 leading-relaxed text-muted">
              After installation, open the admin dashboard to create your first
              content type using the setup wizard or ready-made templates.
            </p>

            <DocImage
              src="/docs/screenshots/01-dashboard.png"
              alt="Wolent CMS admin dashboard"
              caption="The Wolent admin dashboard — your content hub"
            />

            <p className="leading-relaxed text-muted">
              Clone the repository from{" "}
              <a
                href={GITHUB_URL}
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              and follow the installation steps below.
            </p>
          </section>

          <section id="installation" className="scroll-mt-28 border-t border-border pb-16 pt-16">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Wolent can be deployed with Docker (recommended) or installed
              manually for local development.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Docker (recommended)</h3>
            <p className="mt-4 text-muted">
              The fastest way to get Wolent running in production:
            </p>
            <CodeBlock>{`git clone https://github.com/boracomet/wolent-cms.git
cd wolent-cms
docker compose up -d`}</CodeBlock>
            <p className="text-muted">
              The admin panel will be available at{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-sm text-accent">
                http://localhost:3000
              </code>
              . Default credentials are documented in the repository README.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Manual installation</h3>
            <p className="mt-4 text-muted">For local development without Docker:</p>
            <CodeBlock>{`git clone https://github.com/boracomet/wolent-cms.git
cd wolent-cms
npm install
cp .env.example .env
# Edit .env with your database URL
npm run db:migrate
npm run dev`}</CodeBlock>

            <h3 className="mt-8 text-lg font-semibold">Environment variables</h3>
            <CodeBlock language="env">{`DATABASE_URL=postgresql://user:pass@localhost:5432/wolent
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme`}</CodeBlock>
          </section>

          <section id="content-types" className="scroll-mt-28 border-t border-border pb-16 pt-16">
            <h2 className="text-2xl font-bold">Content Types</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Content types define the structure of your data — like schemas for
              blog posts, products, or portfolio items. Wolent provides a visual
              builder so you never touch JSON by hand.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Setup wizard</h3>
            <p className="mt-4 text-muted">
              New projects start with the setup wizard. Name your project and
              choose a template to get started quickly:
            </p>
            <DocImage
              src="/docs/screenshots/02-wizard-step1-name.png"
              alt="Wolent setup wizard step 1"
              caption="Setup wizard — name your project and pick a template"
            />

            <h3 className="mt-8 text-lg font-semibold">Managing content types</h3>
            <p className="mt-4 text-muted">
              All content types appear in a clear list view. Create, edit, or
              delete types from one place:
            </p>
            <DocImage
              src="/docs/screenshots/03-content-types-list.png"
              alt="Content types list in Wolent"
              caption="Content types list — manage all your schemas"
            />

            <h3 className="mt-8 text-lg font-semibold">Field builder</h3>
            <p className="mt-4 text-muted">
              Each content type has a drag-and-drop field builder. Add text,
              rich text, numbers, dates, relations, and media fields:
            </p>
            <DocImage
              src="/docs/screenshots/04-post-fields.png"
              alt="Post content type field builder"
              caption="Visual field builder for the Post content type"
            />

            <h3 className="mt-8 text-lg font-semibold">Supported field types</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>
                <strong className="text-foreground">Text</strong> — Short and
                long text fields
              </li>
              <li>
                <strong className="text-foreground">Rich Text</strong> — WYSIWYG
                editor for formatted content
              </li>
              <li>
                <strong className="text-foreground">Number</strong> — Integers
                and decimals
              </li>
              <li>
                <strong className="text-foreground">Date</strong> — Date and
                datetime pickers
              </li>
              <li>
                <strong className="text-foreground">Relation</strong> — Link to
                other content types via dropdown
              </li>
              <li>
                <strong className="text-foreground">Media</strong> — Image and
                file uploads
              </li>
              <li>
                <strong className="text-foreground">Boolean</strong> — Toggle
                switches
              </li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Multi-language</h3>
            <p className="mt-4 text-muted">
              Wolent ships with Turkish and English built-in. Enable locales per
              content type and translate fields individually from the entry
              editor.
            </p>
          </section>

          <section id="api-reference" className="scroll-mt-28 border-t border-border pt-16">
            <h2 className="text-2xl font-bold">API Reference</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Wolent auto-generates a REST API for every content type you
              create. Authenticate with JWT tokens and fetch content from any
              frontend.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Base URL</h3>
            <CodeBlock>{`http://localhost:3000/api`}</CodeBlock>

            <h3 className="mt-8 text-lg font-semibold">Authentication</h3>
            <p className="mt-4 text-muted">
              Obtain a JWT token by posting credentials to the auth endpoint:
            </p>
            <CodeBlock language="http">{`POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "your-password"
}

# Response
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}`}</CodeBlock>
            <p className="mt-4 text-muted">
              Include the token in subsequent requests:
            </p>
            <CodeBlock>{`Authorization: Bearer <your-token>`}</CodeBlock>

            <h3 className="mt-8 text-lg font-semibold">Fetching entries</h3>
            <p className="mt-4 text-muted">
              List all entries for a content type (replace{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-sm text-accent">
                posts
              </code>{" "}
              with your type slug):
            </p>
            <CodeBlock language="http">{`GET /api/posts
GET /api/posts/:id
GET /api/posts?locale=en&limit=10&offset=0`}</CodeBlock>

            <h3 className="mt-8 text-lg font-semibold">Creating entries</h3>
            <CodeBlock language="http">{`POST /api/posts
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Hello World",
  "slug": "hello-world",
  "body": "Your content here...",
  "locale": "en"
}`}</CodeBlock>

            <h3 className="mt-8 text-lg font-semibold">Response format</h3>
            <CodeBlock language="json">{`{
  "data": [
    {
      "id": "uuid",
      "title": "Hello World",
      "slug": "hello-world",
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:00:00Z"
    }
  ],
  "meta": {
    "total": 1,
    "limit": 10,
    "offset": 0
  }
}`}</CodeBlock>

            <p className="mt-8 text-muted">
              For the complete API specification, see the{" "}
              <a
                href={GITHUB_URL}
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                repository documentation
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
