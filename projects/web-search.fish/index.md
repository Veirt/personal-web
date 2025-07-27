---
layout: project-page.vto
type: project
title: web-search.fish
description: Fish shell plugin to do a web search
github_url: https://github.com/Veirt/web-search.fish
technologies: ["Fish", "Shell Scripting"]
date: 2024-10-14
---

`web-search.fish` is a lightweight Fish shell plugin that lets you quickly search the web straight from your terminal.

It supports a wide variety of search “contexts” out of the box—like Google, DuckDuckGo, GitHub, StackOverflow, YouTube, Brave, and more. You can search like so:

```fish
web-search google your query here
```

Or define convenient aliases in your `config.fish`, for example:

```fish
alias github="web-search github"
alias duck="web-search duckduckgo"
```

It’s super simple to customize: just set environment variables with the `WEB_SEARCH_` prefix to add your own contexts or override existing ones.

The tool is minimal by design—no heavy dependencies, just uses `xdg-open` to launch your browser—and lets you stay focused in your terminal workflow.

If you run into setup issues (like mismatched default browser settings), the README includes straightforward tips to resolve them.
