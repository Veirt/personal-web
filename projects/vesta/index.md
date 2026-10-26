---
layout: project-page.vto
type: project
title: vesta
description: Simple, lightweight dashboard for home server
icon: /assets/project-icons/vesta.svg
github_url: https://github.com/Veirt/Vesta
technologies: ["Rust", "Axum", "TailwindCSS"]
date: 2024-08-16
screenshot: /assets/vesta-screenshot.webp
---

Vesta is a minimal server dashboard I made to monitor my home server.
I built it because I was sick of messing with YAML config in the last dashboard I used.

It's written in ⚡ blazingly fast ⚡ Rust using the ⚡ blazingly fast ⚡ Axum framework.
It reads from single TOML file and does basic HTTP checks to show which services are
online. It's lightweight, fast, mobile-friendly, and super easy to run with
Docker.
