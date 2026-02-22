---
layout: project-page.vto
type: project
title: dnpak.py
description: A Python package to manipulate Dragon Nest PAK file
github_url: https://pypi.org/project/dnpak.py
technologies: ["Python"]
date: 2021-09-30
screenshot: /projects/dnpak.py/screenshot.png
---

> My first reverse engineering library. Originally written in Python and now
> rewritten in Rust to learn more about binary parsing and improve performance.

`dnpak.py` is a Python package (with Rust backend) to manipulate **Dragon Nest**
`.pak` files. It is based on data definitions from
[vincentzhang96/DragonNestFileFormats](http://vincentzhang96.github.io/DragonNestFileFormats/files/pak).

You can:

- Write new PAK files and add files into them.
- Add an entire folder into a PAK file.
- Read existing PAKs and extract all contents.

---

### Installation

```bash
pip install dnpak.py
```

---

### Getting Started

Write a new PAK and add files manually:

```python
import dnpak

pak = dnpak.EtFileSystem.write("filename.pak")
pak.add_file("path/to/file", "file/location/in/pak")
pak.close_file_system()
```

Or add an entire folder:

```python
pak = dnpak.EtFileSystem.write("filename.pak")
pak.add_files("path/to/folder")
pak.close_file_system()
```

Read and extract from an existing `.pak`:

```python
pak = dnpak.EtFileSystem.read("filename.pak")
pak.extract()
pak.close_file_system()
```
