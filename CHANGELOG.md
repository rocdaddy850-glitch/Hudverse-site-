# Changelog

All notable changes to this project are recorded in this file.

## [Unreleased]

- feat(hudverse): HUD visibility persistence and cross-tab synchronization
- test(hudverse): Vitest unit tests and Playwright E2E scaffold
- ci(hudverse): Playwright E2E workflow
# Changelog

## Unreleased

- feat(hudverse): Add HUD persistence to localStorage and cross-tab synchronization
- test(hudverse): Add Vitest unit tests and Playwright E2E scaffold for cross-tab behavior
- ci(hudverse): Add GitHub Actions workflow to run Playwright E2E
# Changelog

## Unreleased

### Added

- HUD persistence: `hud:visible` stored in localStorage to remember HUD open/closed state across sessions.
- Cross-tab sync: storage event listener keeps HUD visibility in sync across multiple tabs (debounced to avoid flapping).
- Tests: unit tests added for HUD persistence and cross-tab behavior (Vitest + Testing Library).

### Changed

- `hudverse/components/HudOverlay.tsx` updated to debounce cross-tab storage events and add aria-live for metric updates.
- `hudverse/TESTS.md` added with local test instructions.

- test(hudverse): Restrict Vitest discovery to unit tests under `components/` to avoid importing Playwright E2E specs during unit runs.
