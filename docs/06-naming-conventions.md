# Naming Conventions & Standards

## Overview

Consistent naming is critical to the Forge Framework. When everything follows the same conventions, finding, filing, and referencing information becomes intuitive for everyone.

## Organization Prefix

Every organization using the Forge Framework assigns itself a short prefix code:

| Organization | Prefix | Notes |
|---|---|---|
| Fourth State Communications | `4S` | Company |
| Kelvin Education | `KE` | Company |
| Keyes Forge (Personal) | `KF` | Personal brand/umbrella |
| RaihnForge | `KF.R` | Personal sub-brand |
| UnchosenForge | `KF.UF` | Freelance/business sub-brand |

## Department Codes

Standard single-letter codes for the four core departments:

| Code | Department |
|------|-----------|
| `A` | Administration |
| `C` | Clientele |
| `P` | Product |
| `R` | Resources |

## Standard Naming Formats

### Department Reference
```
[Prefix].[DeptCode]: [Description]
```
**Examples:**
- `4S.A: Administration`
- `KE.C: Sales`
- `4S.P: CTI`

### Control Documents
```
[Prefix].[DeptCode] - [Document Type]
```
**Examples:**
- `KF.R - Action Log`
- `KF.R - RaihnForge - Control`
- `KF.UF - Action Log`

### Queue / Task Folders
```
YYYYMMDD - [Task Description]
```
**Examples:**
- `20220809 - State Registration`
- `20240711 - Finance Update`
- `20250823 - AeroCMS - Glasshive - Study`

### Date Format
**Always use:** `YYYYMMDD` (no separators in folder names)

- `20240711` = July 11, 2024
- `20250907` = September 7, 2025

When used in document titles or notes, ISO format with dashes is acceptable: `2024-07-11`

### Project Milestone & WBS
```
PRJ | MS [#] | [Milestone Name]
PRJ | WBS [#.#] | [Work Item]
```

### Action Log Items
Sequential numbered index: `1.0`, `2.0`, `3.0`...

### Action Log Entries (for numbered action items in execution)
Three-digit sequential: `001`, `002`, `003`...

## File Naming Best Practices

1. **Lead with date** for time-sensitive files: `YYYYMMDD - Description`
2. **Lead with prefix** for organizational files: `4S.A: Description`
3. **Be descriptive** — names should be self-explanatory without opening the file
4. **Save emails as PDF** — preserves searchability and consolidates information
5. **Screen capture webpages** — for tickets, confirmations, reference pages

## Classification Labels

Documents may carry classification labels:

```
CLASSIFICATION: RESTRICTED
```

Place at the top of documents or in metadata fields as appropriate.
