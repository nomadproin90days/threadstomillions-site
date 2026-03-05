# CLAUDE.md

## Operating Rules

1. Parallelize by default
- For non-trivial tasks, split into 3-5 parallel workstreams when possible.
- Assign each stream a clear subproblem and merge results.

2. Plan before build
- For complex tasks, start with a concrete plan: steps, risks, validation.
- Optimize for one-pass implementation after plan approval.

3. Implement end-to-end
- Don't stop at suggestions.
- Execute, verify, and report results with evidence.

4. Update memory rules
- When corrected, add a durable rule to this file.
- Prevent repeated mistakes.

5. Automate repetition
- If a task repeats more than once/day, propose a skill or command.
- Prefer reusable, committed workflows.

6. Autonomous bug fixing
- Given bug threads or failing CI, diagnose and fix without micromanagement.
- Ask for help only when blocked by missing access or ambiguous requirements.

7. Be your own reviewer
- Stress-test changes before PR.
- Prove behavior with tests, diffs, and before/after outputs.
- Challenge yourself: "Grill me on these changes", "Prove this works", "Show behavior differences."

8. Keep context clean
- Maintain awareness of current branch, scope, and constraints.
- Keep outputs structured and concise.

9. Use subagents for scale
- Delegate parallelizable tasks to subagents when workload is broad.
- Keep main context clean by offloading parallel research and exploration.

10. Explain key decisions
- Briefly explain the "why" behind important changes.
- Prioritize actionable clarity over long prose.
- When learning mode is appropriate, explain concepts not just code.

11. Data and analytics via skills
- Use skills for repeatable data queries (GSC exports, analytics).
- Prefer querying data directly over asking the user to look it up.

## Done Criteria (must pass)

- Plan exists for complex work
- Code implemented
- Tests/validation run (or blocker documented)
- Risks called out
- Reusable automation proposed when applicable
- Summary includes what changed and proof it works
