module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Type must be one of these
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style changes (formatting, etc)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "build", // Build system changes
        "ci", // CI configuration changes
        "chore", // Other changes (dependencies, etc)
        "revert", // Revert previous commit
      ],
    ],
    // Scope is required and must be present
    "scope-empty": [2, "never"],
    // Subject must be present
    "subject-empty": [2, "never"],
    // Subject must be lowercase
    "subject-case": [2, "always", "lower-case"],
    // Subject must not end with period
    "subject-full-stop": [2, "never", "."],
    // Header must not be longer than 100 characters
    "header-max-length": [2, "always", 100],
    // Type must be lowercase
    "type-case": [2, "always", "lower-case"],
    // Scope must be lowercase
    "scope-case": [2, "always", "lower-case"],
  },
};
