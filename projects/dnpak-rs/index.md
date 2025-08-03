---
layout: project-page.vto
type: project
title: dnpak-rs
description: A Rust implementation of Dragon Nest PAK structure file
github_url: https://crates.io/crates/dnpak
technologies: ["Rust"]
date: 2022-04-11
---

## dnpak-rs

I originally made a [Python version](https://github.com/Veirt/dnpak.py) of this
to understand how Dragon Nest `.pak` files work. As I was learning Rust, I
rewrote it to improve performance and usability. This Rust version powers
[dnutils](/projects/dnutils), and is significantly faster and more robust.
`dnpak-rs` is a Rust library for reading and writing Dragon Nest `.pak` files.

## Features

- Read and write `.pak` files
- Unpack all files from a `.pak` archive
- Find specific files within a `.pak` archive
- Add files to a new `.pak` archive

## Usage

```rust
use dnpak_rs::EtFileSystem;

// Read a .pak file
let pak = EtFileSystem::read("Resource00.pak");

// Unpack all files
pak.unpack_all(None, false).unwrap();

// Create a new .pak file
let mut new_pak = EtFileSystem::write("NewResource.pak");

// Add files to the new .pak file
new_pak.add_files("my_files").unwrap();

// Close the new .pak file
new_pak.close_file_system();
```

Available on [crates.io](https://crates.io/crates/dnpak).
