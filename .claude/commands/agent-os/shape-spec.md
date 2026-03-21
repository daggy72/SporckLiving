# Shape Spec

Gather context and structure planning for significant work. **Run this command while in plan mode.**

## Important Guidelines

- **Always use AskUserQuestion tool** when asking the user anything
- **Offer suggestions** — Present options the user can confirm, adjust, or correct
- **Keep it lightweight** — This is shaping, not exhaustive documentation

## Prerequisites

This command **must be run in plan mode**.

**Before proceeding, check if you are currently in plan mode.**

If NOT in plan mode, **stop immediately** and tell the user:

```
Shape-spec must be run in plan mode. Please enter plan mode first, then run /shape-spec again.
```

Do not proceed with any steps below until confirmed to be in plan mode.

## Process

### Step 1: Clarify What We're Building

Use AskUserQuestion to understand the scope:

```
What are we building? Please describe the feature or change.

(Be as specific as you like — I'll ask follow-up questions if needed)
```

Based on their response, ask 1-2 clarifying questions if the scope is unclear.

### Step 2: Gather Visuals

Use AskUserQuestion:

```
Do you have any visuals to reference?

- Mockups or wireframes
- Screenshots of similar features
- Examples from other apps

(Paste images, share file paths, or say "none")
```

### Step 3: Identify Reference Implementations

Use AskUserQuestion:

```
Is there similar code in this codebase I should reference?

(Point me to files, folders, or features to study)
```

### Step 4: Check Product Context

Check if `agent-os/product/` exists and contains files. If it exists, read key files and confirm alignment.

### Step 5: Surface Relevant Standards

Read `agent-os/standards/index.yml` to identify relevant standards.

### Step 6: Generate Spec Folder Name

Create a folder name: `YYYY-MM-DD-HHMM-{feature-slug}/`

### Step 7: Structure the Plan

Build the plan with **Task 1 always being "Save spec documentation"**.

### Step 8: Complete the Plan

Continue building implementation tasks based on scope, references, and standards.

### Step 9: Ready for Execution

When the full plan is ready, confirm with the user before proceeding.

## Output Structure

```
agent-os/specs/{YYYY-MM-DD-HHMM-feature-slug}/
├── plan.md
├── shape.md
├── standards.md
├── references.md
└── visuals/
```
