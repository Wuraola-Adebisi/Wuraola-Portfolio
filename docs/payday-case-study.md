# Payday — Case Study Content

> Portfolio CMS entry for the Payday project. Add these fields to the existing `project` document in Sanity Studio, then upload the current Payday dashboard screenshot as the card/hero image.

## Project fields

- **Title:** Payday
- **Slug:** payday
- **Display order:** 2
- **Domain:** Product
- **Role:** Product Designer & Frontend Developer
- **Live URL:** https://payday.vercel.app/
- **Card description:** A personal finance planner that brings everyday budgeting and shared household expenses into one place, with clear balances and branded reports.
- **Tech stack:** React, TypeScript, Vite, Recharts, Responsive Design, GitHub, Vercel

## Problem / Context

Managing money often means jumping between a personal budget, bill reminders, savings goals and a separate conversation or spreadsheet for shared household costs. Payday brings those routines into one interface: people can plan their own money, organise expenses with a household or partner, see who paid and how costs split, and export a readable record.

The product is designed around practical financial clarity rather than bank integrations or financial advice. The current MVP stores records in the browser on the device being used, so shared spaces are organised locally rather than synchronised between multiple people.

## Responsibilities

- Product direction and feature definition
- UX and interface design
- Frontend architecture and implementation
- Personal budgeting and savings flows
- Shared expense tracking and settlement calculations
- Responsive layouts and interaction states
- Branded print, PDF and HTML report experiences

## Technical highlights

### 1. Personal and shared money in one product
Kept everyday income, spending, bills and savings goals alongside a separate shared-expense workspace. The two data areas remain distinct so a household ledger does not silently change a person's personal budget.

### 2. Expense splits and running balances
Built flows for recording an expense, identifying who paid, selecting participants for an equal split, and reviewing each member's resulting balance. Suggested settlements make it easier to understand how a group can settle up without manually reconciling every transaction.

### 3. Reports designed for real use
Created Payday-branded report layouts for supported planner views and the shared ledger. Users can print or save a PDF, or download a standalone HTML copy, with the key figures and transaction details arranged for reading outside the app.

### 4. Local-first data handling
Kept the current MVP usable without requiring account creation or a backend. Personal planner data and shared-space records are stored separately in browser storage; the UI and product copy must be explicit that the data is device-local and that adding a member does not create a real invitation or cross-device access.

### 5. Clear boundaries around financial data
Payday does not connect to bank accounts, initiate payments or independently verify transactions. Balances are calculated from the information entered, and reports are personal records rather than bank-issued statements or proof of payment.

## Outcome

Payday brings budgeting, bills, savings goals and shared-expense reconciliation into one coherent product experience. The current MVP covers the core planning and ledger flows, including useful exports, while account-based collaboration and secure cloud synchronisation remain future product work.

## Visual assets to add in Sanity

1. **Card / hero image:** a clean desktop screenshot of the Payday dashboard or personal money overview.
2. **Supporting image:** shared-expense workspace showing the member balances and settlement summary.
3. **Supporting image:** branded report/print preview.

Use real screenshots from the current build. Do not use a mockup that implies live cloud collaboration, bank connectivity or payments that the MVP does not provide.
