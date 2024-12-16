# Project Setup

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) as the database
- [Prisma](https://www.prisma.io/) as the ORM

## Installation and Configuration

Follow these steps to set up the project:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>
```

### 2. Install Dependencies

Install all required dependencies:

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory of your project and add the following configuration:

```env
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
```

Replace `user`, `password`, `localhost`, `3306`, and `dbname` with your MySQL credentials.

### 4. Run Database Migration

Use Prisma to apply the database migration:

```bash
npx prisma migrate dev --name init
```

This step will set up the database structure based on the schema defined in the `prisma/schema.prisma` file.

### 5. Generate Prisma Client

Generate the Prisma Client to use in the project:

```bash
npx prisma generate
```

### 6. Start the Project

Once all steps are complete, you can start the project with:

```bash
npm run dev
```

Your project should now be running at `http://localhost:3000` (or the port configured).

## Additional Notes

- To inspect the database structure or manage data visually, you can use [Prisma Studio](https://www.prisma.io/studio) by running:

  ```bash
  npx prisma studio
  ```

- Ensure your database is running and accessible before starting the project.

- If you encounter errors during setup, verify that all dependency versions are compatible and refer to the Prisma documentation for troubleshooting: [https://www.prisma.io/docs/](https://www.prisma.io/docs/).

## Prisma Documentation

For comprehensive guidance on Prisma, refer to the official documentation at [https://www.prisma.io/docs/](https://www.prisma.io/docs/).


# Folder Structure

```bash
dvhq-web/
│
├── prisma/                # Prism schema and migration files
│   └── schema.prisma
│
├── src/                   # Backend source code
│   ├── controllers/       # Folder for Controller
│   │   └── fooController.js
│   │
│   ├── models/            # Folder for Models (ORM Database, Prisma Client)
│   │   └── fooModel.js
│   │
│   ├── routes/            # Folder for Route
│   │   └── fooRoutes.js
│   │
│   ├── services/          # (Optional) Business logic
│   │   └── fooService.js
│   │
│   ├── index.js           # Entry point server
│   └── app.js             # Express server configuration
│
├── .env                   # Environment variables
├── .gitignore
├── package.json
└── package-lock.json
```

# LICENSE
[MIT License](./LICENSE)