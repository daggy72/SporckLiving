# Discover Standards

Extract tribal knowledge from your codebase into concise, documented standards.

## Important Guidelines

- **Always use AskUserQuestion tool** when asking the user anything
- **Write concise standards** — Use minimal words. Standards must be scannable by AI agents without bloating context windows.
- **Offer suggestions** — Present options the user can confirm, choose between, or correct.

## Process

### Step 1: Determine Focus Area

Analyze codebase structure and present 3-5 major areas to the user. Wait for selection.

### Step 2: Analyze & Present Findings

Read key files in the selected area. Look for patterns that are unusual, opinionated, tribal, or consistent. Present findings and let user select which to document.

### Step 3: Ask Why, Then Draft Each Standard

For each selected standard, complete the full loop:
1. Ask 1-2 clarifying questions about the "why"
2. Wait for response
3. Draft the standard
4. Confirm with user
5. Create the file

### Step 4: Create the Standard File

Place in `agent-os/standards/[folder]/[standard].md`

### Step 5: Update the Index

Update `agent-os/standards/index.yml` with new entries.

### Step 6: Offer to Continue

Ask if user wants to discover standards in another area.

## Writing Concise Standards

- Lead with the rule
- Use code examples
- Skip the obvious
- One standard per concept
- Bullet points over paragraphs
