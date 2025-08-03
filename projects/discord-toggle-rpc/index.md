---
layout: project-page.vto
type: project
title: discord-toggle-rpc
description: A simple utility to toggle Discord Rich Presence on and off
github_url: https://github.com/Veirt/discord-toggle-rpc
technologies: ["Rust"]
date: 2021-10-12
---

## Why?

I made this when I got tired of Discord Rich Presence constantly showing what I
was doing. This little CLI app lets me toggle it on or off whenever I want,
without needing to quit Discord or mess with settings. It’s written in Rust and
works by modifying the client state using your Discord token.

## How It Works

This tool uses your Discord token (set via environment variable) to toggle the Rich Presence display. It’s minimal and fast — exactly what I needed at the time.

## Installation

```sh
cargo install discord-toggle-rpc
```

## Setup

Set the environment variable:

```sh
DISCORD_TOKEN=<your token>
```

You can place it in `/etc/environment` or export it manually in your shell.

## Finding Your Token

Your Discord token looks like `mfa.XXXX...` or just a long base64 string.

- **In browser**: open DevTools → Network tab → click any XHR request → check `authorization` header.
- **In desktop app**: try `Ctrl+Shift+I` to open DevTools, then follow the same steps. If it doesn’t work, use the browser method instead.

This is a personal utility and may break if Discord changes how their client works.
