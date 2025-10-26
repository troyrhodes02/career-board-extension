## Host-Allowist Roadmap

For the MVP, JobHunt CRM + Autofill does **not** request any host permissions.
Host access (e.g., `indeed.com`, `greenhouse.io`) will only be added later, when Clipping and Autofill features ship. This keeps our extension private and safe - no access to websites until the user explicitly interacts with them.

Planned addition: -**When:** After Clipping (F1) and Autofill (F6) featires are stable -**Where:** Only for Indeed and Greenhouse posting pages -**Why:** Follows least privilegeand user-consent desgin principles

## 🔒 Permissions

- **storage** — Allows the extension to save your jobs, notes, and profile data locally so it’s still there when you reopen the browser.
- **activeTab** — Lets the extension interact only with the tab you click it on (used for clipping or autofill when you trigger it).
- **scripting** — Lets the extension temporarily insert small scripts to read or fill job pages on supported sites you visit.
