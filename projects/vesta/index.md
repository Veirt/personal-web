---
layout: project-page.vto
type: project
title: vesta
description: Simple, lightweight dashboard for home server
github_url: https://github.com/Veirt/Vesta
technologies: ["Rust", "Axum", "TailwindCSS"]
date: 2024-08-16
---

<img src="/projects/vesta/screenshot.png" alt="Preview" transform-images="avif" />

Vesta is a minimal server dashboard I made to monitor my home server.
I built it because I was sick of messing with YAML config in the last dashboard I used.

It's written in ⚡ blazingly fast ⚡ Rust using the ⚡ blazingly fast ⚡ Axum framework.
It reads from single TOML file and does basic HTTP checks to show which services are
online. It's lightweight, fast, mobile-friendly, and super easy to run with
Docker.
