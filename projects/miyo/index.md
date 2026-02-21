---
layout: project-page.vto
type: project
title: miyo
description: A Web UI for realesrgan-ncnn-vulkan and waifu2x-ncnn-vulkan
github_url: https://github.com/Veirt/miyo
technologies: ["Svelte", "TypeScript", "Go", "Fiber"]
date: 2024-07-16
screenshot: /projects/miyo/screenshot.png
---

<img src="/projects/miyo/screenshot.png" alt="Screenshot" transform-images="avif" />

Miyo is a simple web interface I built for two popular image upscalers:
[Real-ESRGAN-ncnn-vulkan](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan)
and [waifu2x-ncnn-vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan). Both
run locally using Vulkan, and Miyo just puts a nicer UI on top so I don’t have to use the terminal every time.

It's nothing fancy, you just drag and drop an image, pick either waifu2x or
Real-ESRGAN, and it does its thing. That's pretty much it. It also works with
Docker or systemd if you're into that kind of setup.

## Notes

- It works best when run natively (to take full advantage of Vulkan support).
- The Docker version works too, but without GPU acceleration.
