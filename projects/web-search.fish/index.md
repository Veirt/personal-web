---
layout: project-page.vto
type: project
title: web-search.fish
description: Fish shell plugin to do a web search
github_url: https://github.com/Veirt/web-search.fish
technologies: ["Fish", "Shell Scripting"]
date: 2024-10-14
---

<img src="https://veirt.github.io/web-search.fish/demo.gif" alt="Preview" />

web-search.fish is a simple plugin I made for the Fish shell to open web
searches directly from the terminal. Mostly just to make terminal life a bit
smoother. I often found myself switching between the terminal and browser just
to do quick lookups, and this plugin helps avoid that. It's not trying to be
much, just a small tool that fits nicely into a terminal-first setup.

You can search with:

```shell
web-search google your query here
```

Or set up short aliases for even quicker access:

```shell
alias github="web-search github"
alias duck="web-search duckduckgo"
```

It supports a good number of search contexts by default, like Google,
DuckDuckGo, GitHub, StackOverflow, YouTube, Brave, and many others. You can also
define your own by setting an environment variable with the `WEB_SEARCH_`
prefix. No need to touch the code—just update your `config.fish`.

You can install it with [Fisher](https://github.com/jorgebucaran/fisher):

```shell
fisher install veirt/web-search.fish
```

Or manually:

```shell
curl -sL https://raw.githubusercontent.com/Veirt/web-search.fish/main/install.fish | fish
```

## References

- [oh-my-zsh/web-search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/web-search) - The Zsh equivalent that inspired this project.
