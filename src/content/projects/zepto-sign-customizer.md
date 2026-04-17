---
title: "Zepto Sign Customizer"
tagline: "A live Shopify app that lets merchants sell per-character customizable neon signs."
summary: "A production Shopify SaaS where the shopper designs their own neon sign on a real-time canvas — choosing colour, font, and size down to each individual character — and the merchant manages orders through a matching admin dashboard."
year: "2025"
status: "live"
featured: true
order: 1
liveUrl: "https://apps.shopify.com/neon-sign-customizer"
stack:
  - Remix
  - React
  - Redux
  - Shopify Polaris
  - Vanilla JS
  - Laravel
  - MySQL
role: "Frontend Engineer (primary), occasional full-stack"
cover:
  from: "#ff3d00"
  to: "#ffb300"
  text: "Z/S"
---

## Context

Zepto Sign Customizer is a commercial Shopify app built for merchants selling bespoke neon signage. The hard problem isn't checkout — it's giving the shopper a design surface that's powerful enough to express what they want, simple enough to not overwhelm them, and accurate enough that what they see is what the shop will actually produce.

## What I built

- A **real-time design canvas** with per-character, per-word, and per-line controls for colour and font. The data model had to stay addressable at the character level without leaking that complexity into the UI.
- A **state architecture in Redux** that kept the canvas, the tool panel, and the preview in lockstep — every keystroke triggers updates in three places and they all have to agree.
- A **responsive UI layer** using Remix and Shopify Polaris so the app feels native inside the Shopify admin, and the shopper-facing customizer works cleanly on mobile.
- A **merchant admin dashboard** with order tracking, customization previews, and monitoring views.
- **Cross-stack fixes** in Laravel and MySQL — the team is small enough that "it's a frontend bug" often turns into "it's actually a validation issue on the server".

## What I learned

Building product inside another platform (Shopify) forces you to think about constraints you'd otherwise ignore — the Polaris design system, the App Bridge contract, the merchant's existing mental model. The UI that wins isn't the one with the most polish, it's the one that fits.
