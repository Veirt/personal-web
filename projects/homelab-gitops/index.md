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

You might've seen my blog on my home server, but probably not.
So, I started my home server back in 2022. At first, whenever I wanted to set up an app, my first choice of deploying things was a docker-compose.yaml. It's really simple, my favorite thing about it is where I can mount the configuration of a particular app, in a specified directory. I usually put it in the same directory as the docker-compose.yaml, and it makes backing up really easy. I can just get entire directory, put it on another machine, run `docker compose up -d` and voilà, the same app with the exact configuration just works.

## Why Kubernetes?

You may wonder: if a simple `docker-compose.yaml` works, why move on to really
complex, production-grade tools like Kubernetes? Do I need 99.6969% uptime? No.
Is a simple `docker-compose.yaml` reliable enough for my needs? Yes.
Then why did I move?
The answer is probably boring for you: learning and job relevance.

What really drove me to migrate to Kubernetes was a
[video](https://youtu.be/WfDwFvl5XBo) by Mischa van den Burg. Basically, he
said that his homelab is a project that he can show when applying for jobs.

Not only that, I think Kubernetes is a necessary tool to learn when it comes to
making scalable apps these days. This is a great way for me to learn through my
small homelab.
