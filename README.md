# Mini Message Board

A simple message board built with **Express**, **EJS**, and **PostgreSQL** where users can post short messages.

---

## Features

* Add new messages via a simple form
* View messages on the home page
* Persistent storage with PostgreSQL (no data loss on server restart)
* Express routing with EJS templates

---

## Tech Stack

* **Node.js** & **Express** for the backend
* **express-validator** for server side validation
* **EJS** for server-side templates
* **Lucide Icons** for inline SVG icons
* **dotenv** for loading environment variables
* **PostgreSQL** for data storage
* **node-postgres** PostgreSQL client for Node.js 

---

## Database Setup

This project uses **PostgreSQL** for message storage.

1. Create a new database (e.g. `mini_message_board`):

   ```sql
   CREATE DATABASE mini_message_board;
   ```

2. Add your PostgreSQL credentials to a `.env` file in the project root:

   ```
   PGUSER=your_username
   PGPASSWORD=your_password
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE="mini_message_board"
   ```

---

## Populate the Database

A helper script `db/seedDB.js` is included to create the table and insert initial data.
Run it with your **Postgres connection string** as the argument:

```bash
node db/seedDB.js "postgresql://user:password@localhost:5432/mini_message_board"
```


## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm run start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Icon Credits

Icons used in this project are sourced from [Lucide Icons](https://lucide.dev) and embedded as raw SVG for and customization.

## License

This project is licensed under the **MIT License**.