# Inject Standards

Inject relevant standards into the current context, formatted appropriately for the situation.

## Usage Modes

### Auto-Suggest Mode (no arguments)
```
/inject-standards
```
Analyzes context and suggests relevant standards.

### Explicit Mode (with arguments)
```
/inject-standards frontend              # All standards in frontend/
/inject-standards frontend/images       # Single file
/inject-standards global/naming         # Single file from global folder
```

## Process

### Step 1: Detect Context Scenario

Determine if we're in: Conversation, Creating a Skill, or Shaping/Planning.

### Step 2: Read the Index

Read `agent-os/standards/index.yml` for available standards.

### Step 3: Analyze Work Context

Look at the current conversation to understand what the user is working on.

### Step 4: Match and Suggest

Present 2-5 relevant standards and ask for confirmation.

### Step 5: Inject Based on Scenario

Format output based on detected scenario (conversation, skill, or plan).

## Tips

- Run early — inject standards at the start of a task
- Be specific — use explicit mode when you know which standards apply
- Keep standards concise — they consume tokens
