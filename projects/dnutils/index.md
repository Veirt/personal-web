---
layout: project-page.vto
type: project
title: dnutils
description: A collection of Dragon Nest modding/development utilities
github_url: https://github.com/Veirt/dnutils
technologies: ["Rust"]
date: 2022-04-11
---

## About

**dnutils** is a set of command-line tools I wrote to help with modding and
reverse engineering the game _Dragon Nest_. I used to rely on a mix of different
tools — some outdated, others scattered across various sources — and wanted to
consolidate everything into a single, fast, and reliable CLI tool.

That led me to build my own utilities in Rust, focused on speed and ease of use.
The tools handle tasks like unpacking assets, inspecting game files, and
converting formats commonly used in the game.

This project also became a great way to deepen my Rust skills — especially
around binary parsing, CLI design, and performance tuning. I still occasionally
use it when revisiting old modding ideas or helping others in the DN modding
community.

## Tools

### `dnpak-create`

Creates a `.pak` file from a directory.

**Usage:** `dnpak-create <input_directory> [output_file]`

- `input_directory`: The directory to pack.
- `output_file`: Optional name for the output `.pak` file. Defaults to
  `<input_directory>.pak`.

### `dnpak-unpack`

Unpacks a `.pak` file.

**Usage:** `dnpak-unpack <input_file> [output_directory]`

- `input_file`: The `.pak` file to unpack.
- `output_directory`: Optional directory to unpack to. Defaults to a folder
  named after the `.pak` file.

### `dnpak-find`

Searches for files within a `.pak` file.

**Usage:** `dnpak-find <input_file> [query]`

- `input_file`: The `.pak` file to search in.
- `query`: Optional filter string to search for matching filenames.

### `dnpak-patch`

Creates a patch from a `.pak` file. This tool includes a simple GUI to input the
patch version.

**Usage:** `dnpak-patch <input_file>`

- `input_file`: The `.pak` file to create the patch from.

The tool will create a new directory named after the version number provided. It
includes:

- A renamed `.pak` file: `Patch<version>.pak`
- A file list: `Patch<version>.txt`
- An MD5 checksum: `Patch<version>.pak.md5`
- Patch metadata: `PatchInfoServer.cfg`
