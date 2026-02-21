---
layout: project-page.vto
type: project
title: schedula
description: Website for managing my college schedule with automated reminders via Discord
github_url: https://github.com/Veirt/schedula
technologies: ["Svelte", "TypeScript", "SQLite", "Hono"]
date: 2024-04-13
screenshot: /projects/schedula/screenshot.png
---

<img src="/projects/schedula/screenshot.png" alt="Schedula Screenshot" transform-images="avif">

I built Schedula to manage my class schedule and avoid the usual last-minute
confusion—like already being on campus and forgetting where the next class is.
Instead of juggling notes or scrolling through chats, this takes care of
it. It sends automatic reminders to Discord 30 minutes before each class
starts, and I also hooked it into WhatsApp so I can just type `.schedule` and
instantly get the day's classes and room info.

Access is limited to classmates via Discord OAuth, so only people in the class
server can log in and update the schedule. The site itself is built with Svelte
and TypeScript, backed by SQLite and Drizzle, with a lightweight Hono API
running the backend. It's not complicated, but it's already saved me from more
than a few “wrong room” moments.
