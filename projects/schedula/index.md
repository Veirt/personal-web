---
layout: project-page.vto
type: project
title: schedula
description: Website for managing my college schedule with automated reminders via Discord
github_url: https://github.com/Veirt/schedula
technologies: ["Svelte", "TypeScript", "SQLite", "Hono"]
date: 2024-04-13
---

## About

<img src="/projects/schedula/screenshot.png" alt="Schedula Screenshot" transform-images="avif">

I built **Schedula** to manage my class schedule and avoid last-minute
confusion—especially when I’m already on campus and can’t remember where the
next class is.

It sends automatic reminders to Discord 30 minutes before each class starts, and
I also integrated it with WhatsApp so I can simply type `.schedule` to get the
day’s schedule and room info instantly.

Access is limited to classmates via Discord OAuth, so only people on the class
server can log in and update the schedule.

The site is built with Svelte and TypeScript, backed by SQLite and Drizzle, with
a lightweight Hono API handling the backend.

It’s simple, but it's helped me stay on time and in the right place more than
once.
