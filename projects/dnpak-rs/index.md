---
layout: project-page.vto
type: project
title: dnpak-rs
description: A Rust implementation of Dragon Nest PAK structure file
github_url: https://crates.io/crates/dnpak
technologies: ["Rust"]
date: 2022-04-11
screenshot: /projects/dnpak-rs/screenshot.png
---

**dnpak-rs** is a Rust library for reading and writing Dragon Nest `.pak` files.
I first made a [Python version](https://github.com/Veirt/dnpak.py) just to
figure out how the format worked, but later rewrote it in Rust because I wanted
something faster (and honestly, I just wanted to build something cool in Rust).

This is what [dnutils](/projects/dnutils) use and is way quicker and more
stable than my old Python one.

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
