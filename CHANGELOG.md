# Changelog

## Unreleased

### Added

- HUD persistence: `hud:visible` stored in localStorage to remember HUD open/closed state across sessions.
- Cross-tab sync: storage event listener keeps HUD visibility in sync across multiple tabs (debounced to avoid flapping).
- Tests: unit tests added for HUD persistence and cross-tab behavior (Vitest + Testing Library).

### Changed

- `hudverse/components/HudOverlay.tsx` updated to debounce cross-tab storage events and add aria-live for metric updates.
- `hudverse/TESTS.md` added with local test instructions.
