<<<<<<< HEAD
# Easy Business

Easy Business is an ASP.NET Core business app. The web interface is served by an ASP.NET Core API, and business records are shared with signed-in users through PostgreSQL.

## Run locally

Requirements: the .NET 8 SDK and PostgreSQL 13 or later.

Create a PostgreSQL database and configure its connection string before starting the app. For example, in PowerShell:

```powershell
$env:ConnectionStrings__EasyBusiness = "Host=127.0.0.1;Port=5432;Database=easybusiness;Username=easybusiness_app;Password=<strong-password>;Pooling=true"
dotnet run --project .\EasyBusiness.csproj
```

The application creates its tables on the first connection. The PostgreSQL user should own the application database and should not be a PostgreSQL superuser. Store the connection string in the hosting environment or a secret manager; do not commit it to source control.

From the project directory, run:

```powershell
dotnet run --project .\EasyBusiness.csproj
```

Open [http://127.0.0.1:5080](http://127.0.0.1:5080). On first launch, create the administrator account. Use a unique password with at least 12 characters. Setup is available only until the first administrator has been created.

PostgreSQL is the system of record. Back it up with PostgreSQL-aware encrypted backups and test restores regularly. Do not put database credentials or fiscal-device certificates in source control.

## Current scope

- Separate administrator and staff dashboards; only an administrator can create and delete staff accounts and assign business-module access. Deleting a staff account also deletes records they own, while preserving audit history. Administrator accounts are protected. New staff accounts have no business-module access until the administrator selects modules. Access restrictions are enforced by the API and apply to dashboard totals, activity, search, and records.
- Accounts have a company job title separate from system access level, and the administrator sets the initial password.
- The sign-in page offers email password resets. Reset links are single-use, expire after 30 minutes, and invalidate existing sessions. Reset requests do not reveal whether an email address belongs to an account.
- Password-hashed accounts, expiring server-side sessions, CSRF checks, request limits, and a loopback-only listener.
- PostgreSQL persistence for business records, with create, edit, delete, search, CSV export, and an audit history.
- Product records track opening stock; Inventory receives or issues stock with a movement history. Point of Sale checkout atomically deducts stock and creates linked Sales and Invoicing records. Processing a return adds the returned quantity back to stock and adjusts the linked sale and invoice totals.
- Point of Sale supports USD, Zimbabwe dollar (ZWL), and South African rand (ZAR), shows available quantities, and prints a receipt after checkout. Staff need Point of Sale, Products, Inventory, Sales, and Invoicing access to use checkout.
- Invoicing stores a unique invoice number and invoice maker, and invoices can be printed in a print-ready layout from the Invoicing module. Browser pop-ups must be allowed to print.
- Daily and monthly activity reports are generated from saved audit events, covering record changes, user/module-access management, and sign-ins/sign-outs. Reports use the computer's local date, show activity totals and hourly/daily breakdowns, and can export the latest 500 activity entries; report data is filtered to each staff member's assigned modules.
- Business records are shared across accounts in the same local workspace; user creation and the user directory are administrator-only on both the interface and API.
- Prices, invoices, sales, purchases, expenses, contacts, and dashboard summaries support USD, Zimbabwe dollar (ZWL), and South African rand (ZAR). Dashboard money totals are filtered by currency and are not converted between currencies.
- Settings let each signed-in account choose browser-local workspace naming, dashboard currency and period, POS currency, and standard or larger text. These preferences are stored in that browser only; business records remain in the shared PostgreSQL database. Settings also show account/module access and local API status.
- The AI business assistant uses a locally running Ollama service; chat messages and up to 80 recent records from the signed-in user's assigned modules stay on this computer. The assistant is read-only and does not change business records. Install [Ollama](https://ollama.com/download), then run `ollama pull llama3.2:3b` in PowerShell. Start Easy Business and open **Ask AI**. Ollama must be running at `http://127.0.0.1:11434`; choose another installed model by setting `EasyBusiness__Ollama__Model` before starting the app.
- Dashboard totals and sales pipeline summaries are derived from saved records rather than sample figures.
- The sign-in and workspace screens display the `2026 POWERED BY SLYTECHZW` footer signature.
- Account creation does not send invitation emails. Configure HTTPS, a reverse proxy, production secrets, monitoring, and backups before public deployment.

## Migrating the existing SQLite data

The application now creates a PostgreSQL schema and does not automatically copy data from the old `App_Data\easybusiness.sqlite3` file. Before switching users to the new deployment:

1. Stop the old application and make a verified backup of the SQLite database, including its `-wal` and `-shm` files if they exist.
2. Create the PostgreSQL database and application user.
3. Transfer the SQLite tables and data with a tested migration tool such as `pgloader`, or a reviewed one-time export/import script. Map SQLite integer identities to PostgreSQL `BIGINT` identities, `BLOB` values to `BYTEA`, and `payload_json` to `JSONB`.
4. Verify user login, record counts, audit history, POS stock, invoices, and foreign-key relationships before cutover.
5. Keep the original SQLite backup read-only until the PostgreSQL deployment has been verified.

This repository includes a one-time migration utility that performs the transfer and validates row counts. Stop Easy Business first, then run:

```powershell
dotnet run --project .\tools\MigrateSqliteToPostgres\MigrateSqliteToPostgres.csproj -- .\App_Data\easybusiness.sqlite3
```

The utility reads the SQLite file without modifying it. It uses `ConnectionStrings__EasyBusiness` for the PostgreSQL target, preserves user IDs, password hashes, sessions, records, audit history, invoices, and POS data, then resets PostgreSQL identity sequences. You can pass a different SQLite path and PostgreSQL connection string explicitly:

```powershell
dotnet run --project .\tools\MigrateSqliteToPostgres\MigrateSqliteToPostgres.csproj -- `
  "D:\backups\easybusiness.sqlite3" `
  "Host=127.0.0.1;Port=5432;Database=easybusiness;Username=easybusiness_app;Password=<strong-password>"
```

## Password reset email

Password reset requires an SMTP account configured in the environment where Easy Business runs. Set these variables before starting the app; do not put mail credentials in source control:

```powershell
$env:EasyBusiness__Smtp__Host = "smtp.example.com"
$env:EasyBusiness__Smtp__Port = "587"
$env:EasyBusiness__Smtp__From = "business@example.com"
$env:EasyBusiness__Smtp__Username = "business@example.com"
$env:EasyBusiness__Smtp__Password = "<mail-provider-app-password>"
$env:EasyBusiness__Smtp__EnableSsl = "true"
$env:EasyBusiness__PublicBaseUrl = "http://127.0.0.1:5080"
dotnet run --project .\EasyBusiness.csproj
```

Use the SMTP host, port, sender, and app-password format required by your provider. Username and password may both be omitted if the SMTP server does not require authentication. The public base URL defaults to `http://127.0.0.1:5080`; since this edition listens only on the local machine, reset links are intended to be opened on that same machine. Restart the app after changing environment settings.

## ZIMRA FDMS

The public [ZIMRA FDMS site](https://fdms.zimra.co.zw/) is an invoice validation portal; its public pages do not provide the device API contract needed to safely submit fiscal receipts. This project therefore does **not** claim a live ZIMRA connection and deliberately refuses fiscal submissions.

To implement and verify live fiscalisation, obtain the current official FDMS device-integration specification, the applicable sandbox URL, device-registration details/certificate, and ZIMRA-issued sandbox credentials. Provide those through a secure channel for implementation. Never paste production credentials into source code or commit device certificates. Fiscal invoices must not be treated as ZIMRA-fiscalised until ZIMRA confirms the official integration and testing process.
=======
# Easy-Business
>>>>>>> cc758d0b0164f0e2c4b31579ec7d8f26e0356217
