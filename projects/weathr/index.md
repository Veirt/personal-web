---
layout: project-page.vto
type: project
title: weathr
description: A terminal weather app with ASCII animations
technologies: ["Rust"]
github_url: https://github.com/veirt/weathr
date: 2026-02-01
screenshot: /projects/weathr/demo.gif
---

<img src="/projects/weathr/demo.gif" alt="Weathr preview" />

weathr started from a simple place: I really like asciiquarium. When my nephew
comes over, I usually leave it running on my second monitor, and she seems to
enjoy it (or at least keeps watching it). That got me thinking about making
another ASCII scene that I could leave open in the background.

I also have a soft spot for snow, which is kind of obvious from the homepage
here. So the first idea was: what if the scene could snow. Then it escalated to
"okay, if it can snow, it should probably rain too," and from there the obvious
next step was to make it match real weather data instead of being fake. That
chain of thoughts is basically how weathr happened.

The app builds a small world in the terminal and animates it based on what the
sky is doing. It renders a house and ground with little decorations (trees,
fence, mailbox) and then layers the weather on top. Snow and rain are both fully
animated, fog rolls in, clouds drift by, and thunderstorms flash the whole
screen. When it is clear, the scene opens up with birds, a sun animation, or a
quiet airplane passing through. At night you get stars, the moon, and even
fireflies, plus subtle touches like chimney smoke to keep it cozy.

It is written in ⚡ blazingly fast ⚡ Rust, because of course it is.
