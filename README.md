## Folder Structure

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