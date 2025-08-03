---
layout: project-page.vto
type: project
title: dnwebhook
description: A simple Discord webhook notifier for DragonNest server status.
github_url: https://github.com/Veirt/DNWebhook
technologies: ["Python", "SQLite"]
date: 2021-02-08
---

A small Python script I made to monitor DragonNest server status by checking a
specific port on an IP address. It keeps a log of status changes
(Online/Offline) in an SQLite database and sends updates to a Discord webhook
when the server goes up or down.
