---
layout: project-page.vto
type: project
title: miyo
description: A Web UI for realesrgan-ncnn-vulkan and waifu2x-ncnn-vulkan
github_url: https://github.com/Veirt/miyo
technologies: ["Svelte", "TypeScript", "Go", "Fiber"]
date: 2024-07-16
---

## About

Miyo is a simple web interface I built for two popular image upscalers: [Real-ESRGAN-ncnn-vulkan](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) and [waifu2x-ncnn-vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan). Both run locally using Vulkan, and Miyo wraps them in a UI that’s easier to use than the terminal.

I made it mostly for personal use — sometimes I want to upscale old images or anime-style art without uploading them to a third-party service. Miyo makes that process a bit more accessible.

<img src="/projects/miyo/screenshot.png" alt="Screenshot" transform-images="avif" />

## Why I built it

There are a few GUI wrappers out there, but many of them are heavy or closed-source. I wanted something lightweight, local-first, and a bit more user-friendly. It was also a good excuse to try out Svelte and Fiber (a web framework in Go).

## Features

- Drag-and-drop interface for image upscaling
- Choose between waifu2x and Real-ESRGAN backends
- Docker and systemd support

## Notes

- It works best when run natively (to take full advantage of Vulkan support).
- The Docker version works too, but without GPU acceleration.

---

Just a small tool I made for myself — but if it helps others, even better.
