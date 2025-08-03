---
layout: project-page.vto
type: project
title: homelab-gitops
description: GitOps configuration of my Kubernetes homelab
github_url: https://github.com/Veirt/homelab-gitops
technologies: ["Docker", "Kubernetes"]
date: 2025-02-25
---

## About

This is where I manage the configuration for my homelab using GitOps. Everything
runs on Kubernetes, and I use [Flux](https://fluxcd.io) to keep things in sync
with what's defined in Git.

I also use:

- `cert-manager` for TLS certificates
- `Vault` with `external-secrets` to manage secrets
- `sealed-secrets` for encrypted secrets in Git
- `zeropod` to scale pods to zero when not in use
- `Renovate` to keep container images and Helm charts up-to-date

There's a private repo for things that shouldn't be public (like secrets and
internal apps), but most of the structure and apps are open here.

## Installed Apps

I run a bunch of self-hosted tools—some for media, others for productivity and
automation. A few examples:

- **Jellyfin**, **Metube**, and **Miniserve** for media streaming and downloads
- **Syncthing** to sync files between devices
- **Paperless-NGX**, **Memos**, and **n8n** for organizing docs and automating
  tasks
- **Vaultwarden** for managing passwords
- **Searxng** and **Gotify** for private search and push notifications
- Some small tools I’ve made too, like **Vesta** (a simple dashboard).

Most of them are installed declaratively and updated automatically, which makes
things easy to manage over time.

---

That’s all—just a small project to keep my homelab organized and learn more
about GitOps and Kubernetes along the way.
