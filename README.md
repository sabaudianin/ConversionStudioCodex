# Portfolio Conversion Studio

A fullstack portfolio app for conversion-focused marketing websites. The app combines a public portfolio, a four-step landing page brief, readiness scoring, and a small lead CRM.

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your Neon connection string:

```env
DATABASE_URL="postgresql://..."
```

Check the database connection:

```bash
npm run db:check
```

Generate a Drizzle migration from the schema:

```bash
npm run db:generate
```

Apply migrations to Neon:

```bash
npm run db:migrate
```

Run the app:

```bash
npm run dev
```

## Current Flow

- `/` shows the initial portfolio homepage.
- `/brief` shows the four-step brief wizard.
- `/brief/success` shows the readiness summary after submit.

The submit flow requires `DATABASE_URL`, because the brief is saved as a lead before the readiness summary is returned.
