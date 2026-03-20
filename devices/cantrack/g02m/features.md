---
slug: /cantrack/g02m/features
id: g02m-features
sidebar_label: Features
title: CanTrack - G02M Features
sidebar_class_name: menu_item_tracker
description: CanTrack G02M pet tracker features and Plaspy compatibility for real time tracking geofence alerts and SMS location replies
keywords:
  - CanTrack G02M
  - CanTrack G02M features
  - CanTrack G02M GPS tracker
  - CanTrack G02M Plaspy
  - pet tracker features
  - GPS pet tracker
  - G02M geofence alerts
  - G02M SMS location
  - G02M GPRS tracking
  - Plaspy compatible tracker
---

# CanTrack - G02M Features

This page documents the public feature context for using the CanTrack G02M tracker with Plaspy. It summarizes the device capabilities that are relevant when integrating the G02M into Plaspy for live monitoring, alerts, and historical route review. The content here focuses on practical, user-facing features and how those features map to Plaspy workflows.

Exact feature availability and behavior can vary by device firmware, hardware revision, regional model, installation method, and manufacturer implementation. For device-specific technical details, firmware release notes, or configuration instructions consult the official CanTrack documentation and support resources.

## Feature Overview

The CanTrack G02M is a compact pet and small asset tracker designed for simple, reliable location reporting. It supports SMS quick-lookups plus continuous server uploads, enabling both immediate location queries from a phone and ongoing tracking when connected to a data service. Below are the primary capabilities that matter for everyday use.

- Real time location reporting via GPS with WiFi assisted positioning and LBS fallback for broader coverage.
- GPRS server upload for continuous tracking and historical route playback in Plaspy.
- SMS quick view that returns a Google Maps link with latitude and longitude for instant lookups.
- Geofence notifications and low battery alerts to help protect pets and small assets.
- Small form factor and rechargeable 300 mAh battery suitable for collars and carried items.

## Core Features of CanTrack - G02M

- GPS positioning with assisted location methods to improve fix performance in mixed environments.
- GPRS data upload to a tracking server for live location streaming and history recording.
- SMS coordinate replies that include a Google Maps link for fast manual checks from any phone.
- Geofence alerts that can be configured on the device and surfaced in Plaspy as events.
- Low battery notifications reported by the device to support timely charging.
- Adjustable upload intervals to balance tracking resolution and battery run time.
- Compact, lightweight design intended for pet collars and small portable items.

## How These Features Work with Plaspy

Plaspy receives location updates and device events from the G02M when the tracker is configured to send data to a compatible tracking endpoint. Once reporting is active, Plaspy presents locations on live maps, retains historical tracks, and surfaces configured alerts for operational oversight.

- Live positions from the G02M appear on Plaspy maps for immediate situational awareness.
- Historical tracks recorded via GPRS upload are available in Plaspy for route review and playback.
- Geofence events from the device are forwarded to Plaspy so users can receive notifications or view alerts in the platform.
- Low battery alerts are shown as device events in Plaspy to help schedule recharging.
- Upload interval settings on the device affect how often Plaspy receives updates, enabling tradeoffs between battery life and tracking granularity.

## Typical Use Cases

- Pet tracking for dogs, cats, and other small animals while walking or roaming outdoors.
- Lightweight personal tracking for children or elderly family members where discreet devices are preferred.
- Small asset monitoring such as backpacks, luggage, or portable equipment that needs compact GPS tracking.
- Short term deployments and rentals where simple setup and SMS lookups provide immediate location visibility.
- Care services and pet sitters who need an easy way to check current location or receive geofence alerts.

## Feature Availability Notes

- Firmware differences can change available features, menu options, and alert behavior; verify feature sets against the device firmware version.
- Regional hardware or band variants may affect network connectivity and GPRS performance in some countries.
- SMS and server upload capabilities depend on the SIM service, data plan, and mobile network availability at the device location.
- Physical installation and antenna placement can influence GPS performance and assisted positioning effectiveness.
- For the most current device specifications and supported options consult the official CanTrack documentation.

## Why Use Plaspy with These Features

Using the CanTrack G02M with Plaspy provides a straightforward path from a compact pet tracker to a full server-based monitoring setup. Plaspy makes it easy to visualize live locations, review historical routes, and manage alerts such as geofence breaches and low battery notifications — turning the G02M’s basic telemetry into actionable operational visibility for personal and small-asset tracking.

To learn more about Plaspy and how the G02M can be integrated into your tracking workflows, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and manufacturer guidance verify information on the official CanTrack website https://www.cantrackgps.com/.
