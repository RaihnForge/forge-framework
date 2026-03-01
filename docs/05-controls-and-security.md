# Controls & Security

## Overview

The Forge Framework has a built-in controls and security layer that supports organizational governance, compliance, and security management. This layer integrates naturally with the framework's structure rather than being bolted on after the fact.

## Organizational Controls

### Master Control Document

Each organization maintains a top-level **Control** document that serves as the operations "bible." This document:

- Links all department indexes into a single reference point
- Contains or references the Forge Framework itself
- Provides a complete map of the organization's operational structure
- Includes action logs segmented by department

**Action Log Segmentation:**
- Admin Action Log
- Clientele Action Log
- Product Action Log
- Resource Action Log

### Index Document

The Index document provides a navigational map of the entire organization:

```
Operations
├── Control (Master reference)
├── Action Logs (by department)
│
├── Administration
│   ├── Compliance
│   ├── Finance
│   ├── HR
│   └── Security
│       ├── Master Control (Security)
│       ├── Service Owners
│       ├── RBAC
│       ├── Asset Inventory
│       ├── Policies
│       └── Framework References (CMMC, etc.)
│
├── Clientele
│   └── [Client categories]
│
└── Product
    └── [Product categories with controls]
```

**Goal:** *"Link all indexes to controls for complete operations bible."*

---

## Security Management

### Cybersecurity Management Structure

**Organizational Goal:** Ensure safety and security of clients within the organization.

**Key Roles:**
- CTO / Information Security Manager
- Project Manager / Information Security Manager

### Periodic Responsibilities

| Activity | Frequency | Details |
|----------|-----------|---------|
| Monitor security channels and email | Ongoing | Continuous awareness |
| Access Review (RBAC Matrix) | Quarterly | Validate user access alignment |
| Risk Assessment | Annual (end of June) | Organizational risk evaluation |
| Vendor Risk Assessment | Annual (end of June) | Third-party risk evaluation |
| Data Deletion & Retention Check | Annual | Data lifecycle compliance |
| Backup and Recovery Testing | Annual | Verify recovery capabilities |
| Firewall and Network Review | Annual | Configuration and rule review |
| Security Incident Testing | Annual | Tabletop exercise or incident response |
| Vendor Management Review | Annual | Compliance and report review |

### Security Incident Handling
- Log and document all security incidents
- Maintain incident response logs
- Conduct periodic tabletop exercises

---

## Role-Based Access Control (RBAC)

### Principles

The Forge Framework enforces three RBAC principles:

1. **Privileged permissions are segregated** from non-privileged personnel and accounts
2. **Administrative access** to production infrastructure strictly adheres to the **principle of least privilege**
3. **User access** to systems is provisioned based on the **principle of least privilege**

### RBAC Matrix

The RBAC Matrix maps roles to system access levels:

| Role Category | Job Code | Google Workspace | Shared Drives | Financial Systems |
|---------------|----------|-----------------|---------------|-------------------|
| Executive (CEO, CTO) | EX-001, EX-005 | Admin | Manager (all depts) | Manager |
| Executive (CPO, COO, CRO) | EX-002–004 | NA | Manager (all depts) | Manager |
| Project Manager | PM-001 | Contributor | Contributor (assigned depts) | Viewer |
| Developer | DV-001 | Contributor | Contributor (Developer only) | NA |
| Administrative Staff | AD-001 | Contributor | Contributor (Administration only) | Viewer |

**Systems tracked:**
- Google Workspace (MFA required)
- Shared Drives (by department: Executive, Administration, Clientele, Developer)
- Financial systems (e.g., QuickBooks via SSO)
- Additional tools as needed

**Access Levels:**
- Admin — Full administrative control
- Manager — Management-level access
- Contributor — Standard operational access
- Viewer — Read-only access
- NA — No access

### Quarterly Access Review Process

1. Review all user access to production servers, databases, and sensitive applications
2. Validate internal user access alignment with least privilege
3. Validate service account usage
4. Validate shared account access
5. Update quarterly review template with completion date
6. Document and track any identified access issues for remediation

**Critical Rule:** An auditor *distinct from the reviewer* must verify access rights — individuals cannot audit their own access.

---

## Compliance Frameworks

The Forge Framework's structure is designed to support compliance with:

| Framework | Description |
|-----------|-------------|
| **SOC 2** | Service Organization Control — Trust Service Criteria |
| **CMMC** | Cybersecurity Maturity Model Certification (DoD) |
| **NIST** | National Institute of Standards and Technology frameworks |

The framework's built-in documentation habits (action logs, trackers, filing discipline, RBAC) create a natural audit trail that satisfies many compliance requirements.

---

## Classification System

Documents and folders may carry security classifications:

- **RESTRICTED** — Limited access, sensitive business information
- Additional classifications as needed by the organization

---

## Asset Management

### Corporate Asset Inventory

Tracked assets include:

| Field | Description |
|-------|-------------|
| Employee Name | First, Last |
| Email | Corporate email |
| Employment Type | Classification |
| Start/End Date | Employment period |
| Laptop | Assigned device |
| OS | Operating system |
| Serial Number | Device identifier |

---

## How Controls Integrate with the Framework

The controls layer is not separate from the Forge Framework — it's woven into the same structure:

1. **Action Logs** double as audit trails
2. **Functional Folders** enforce document retention
3. **Date stamping** provides chronological evidence
4. **Department structure** maps cleanly to RBAC zones
5. **Process Folders** document and track procedure execution
6. **Archive** provides historical evidence for audits

This means that an organization following the Forge Framework is *already doing most of what compliance frameworks require* — they just need to formalize the policies around it.
