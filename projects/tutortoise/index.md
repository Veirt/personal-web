---
layout: project-page.vto
type: project
title: tutortoise
description: Personalized tutoring platform connecting learners with skilled tutors
github_url: https://github.com/Tutortoise
technologies: ["TypeScript", "Express.js", "PostgreSQL"]
date: 2024-12-12
---

## Tutortoise: Your Perfect Tutor is Around You

<img alt="Pitch Deck" src="/projects/tutortoise/pitchdeck.png" transform-images="avif" />

Tutortoise is a platform designed to connect learners with the right tutors —
based on subject, budget, availability, and preferred learning style (online or
on-site). It was developed as part of the Bangkit 2024 program, with a focus on
accessibility and personalized learning experiences.

I contributed to the backend development, which was built using TypeScript
(with Bun), Express.js, and PostgreSQL. We deployed the services on Google
Cloud Platform using Docker and Terraform.

Some of the things I worked on:

- Designing and implementing core REST APIs
- Handling authentication and user management
- Integrating external services, including ML endpoints and content moderation tools
- Ensuring the backend was scalable, containerized, and smooth to deploy

This was a collaborative project involving students from the Machine Learning, Mobile Development, and Cloud Computing learning paths. It was one of the most cross-functional teams I’ve worked with, and I learned a lot from building something meaningful together from scratch.

## Infrastructure Overview

<img alt="Infrastructure" src="/projects/tutortoise/infrastructure.png" transform-images="avif" />

The infrastructure for Tutortoise was built on Google Cloud Platform, combining several services to ensure reliability, scalability, and seamless integration across components.

At the core is a **monolithic backend API** deployed on **Cloud Run**, which handles most of the application logic. This backend also integrates with two key sidecar services:

- **Face Validation Service** – ensures user profile images are valid (not blank or inappropriate)
- **Text Moderation Service** – scans user-generated content to filter offensive or inappropriate messages

The backend communicates with a **high-compute unit** running on **Compute Engine**, which hosts:

- A **PostgreSQL 16** database for storing structured data
- A **System Recommendation Service**, which provides tutor-learner pairing suggestions using custom logic and data models

For frontend and mobile interactions, the **Tutortoise App** communicates with:

- **Firebase Realtime Database** – for syncing chat messages and lightweight data in real time
- **Firebase Cloud Messaging (FCM)** – for handling push notifications and updates

Other integrations include:

- **Cloud Storage** buckets for storing uploaded files and ML models
- **Cloud Build** and **Artifact Registry** – used for building and deploying images from GitHub to Cloud Run and Compute Engine

This setup allowed us to deploy quickly and scale easily, while integrating both traditional backend logic and machine learning components in a unified way.
