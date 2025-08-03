---
layout: project-page.vto
type: project
title: vesta
description: Simple, lightweight dashboard for home server
github_url: https://github.com/Veirt/Vesta
technologies: ["Rust", "Axum", "TailwindCSS"]
date: 2024-08-16
---

## What is Vesta?

<img src="/projects/vesta/screenshot.png" alt="Preview" transform-images="avif" />

Vesta is a minimal dashboard I made to monitor my home server. I was looking for
something really lightweight that didn’t require a full monitoring stack, just a
clean overview of the services I run. So I built my own.

It’s written in Rust using Axum, and the UI is styled with Tailwind. It reads
from a simple config file and performs basic HTTP checks to show which services
are up.

I named it after the Roman goddess of the hearth — felt fitting for something
that sits quietly at the center of my homelab setup.

## Why I built it

There are plenty of dashboards out there, but most felt too heavy or too
opinionated for what I needed. I just wanted something quick to load, easy to
configure, and good-looking enough.

## Features

- Simple configuration with a single TOML file
- Lightweight and fast
- Mobile-friendly UI
- Easy to self-host with Docker

## Notes

- You can find the example config and screenshot in the repo.
- I still consider it a work-in-progress, but it’s already powering the main
  dashboard in my homelab.

---

Just a small tool that solved a need I had — and hopefully useful for others
too.
