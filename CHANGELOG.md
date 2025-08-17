# Changelog
All notable changes to this project will be documented in this file(hopefully).

## `v2.0.3` 17th August 2025
### Fixed
- Typos and wrong v in readme.
- Vscode bug fix confirmed! 🍺

## `v2.0.2` 17th August 2025
### Fixed
- Double vscode option. 🤞

## `v2.0.1` 17th August 2025 [BREAKING]
### Changed
- Module export.

### Fixed
- Fixed missing `$ConLogShowErr`.

### Added
- How to use in frontend. [README](https://github.com/codump/conlog#how-to-use-in-frontend)

## `v1.0.1` 17th August 2025 [RELEASE]
### Changed
- The way settings are used has been rebuild. `ConLogSet(true, true, true, true, true)` becomes `ConLogSet({error: true, ok: true, warning: true, object: true, color: true})`. This way you can now target a setting, without needing to set them all `ConLogSet({error: false})`. 
### Added
- Type 4 | object outputs with stringify. Don't use any type at all to log a raw object.
- Syntax highlighter for type 4 | objects when color enabled.
- Error/warning origin and line notifier.

## `v0.2.0-beta.1` 16th August 2025 [BREAKING]
### Changed
- Swapped order of parameters in `ConLog(type, text)` becomes `ConLog(text, type)`.

### Added
- Auto-detect object in single ConLog param.
- ConLog[sys] Error for feature usage.