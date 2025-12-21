---
layout: project-page.vto
type: project
title: discord-toggle-rpc
description: A simple utility to toggle Discord Rich Presence on and off
github_url: https://github.com/Veirt/discord-toggle-rpc
technologies: ["Rust"]
date: 2021-10-12
---

I made this when I got tired of Discord Rich Presence constantly showing what I
was doing. This little CLI app lets me toggle it on or off whenever I want,
without needing to quit Discord or mess with settings. It's written in Rust and
works by modifying the client state using your Discord token.

## Installation

```sh
cargo install discord-toggle-rpc
```
