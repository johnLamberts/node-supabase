# Node-Supabase Project

This project is a practice and learning application built using Node.js, Express, TypeScript, and Supabase. The main goal is to understand and implement these technologies together.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>= 18.20.x)
- npm (>= 10.x)
- Supabase Account and Project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-supabase.git
   cd node-supabase
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase credentials:

   ```plaintext
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```

### Running the Application

To start the application, run:

```bash
npm run dev
```

## Project Structure

node-supabase/
│
├── src/
│ ├── controllers/
│ │ └── exampleController.ts
│ ├── common/
│ │ └── base-controller.ts
│ ├── errors/
│ │ └── errors.ts
│ ├── config/
│ │ └── supabase.ts
│ ├── middlewares/
│ │ └── errorHandler.ts
│ ├── modules/
│ │ └── users/
│ │ └── products/
│ ├── app.ts
│ ├── boostrap.ts
│ └── routes.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
