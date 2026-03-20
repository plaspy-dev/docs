---
slug: /parallel_track/trackbox/features
id: trackbox-features
sidebar_label: Features
title: Parallel track - Trackbox Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Parallel Track Trackbox GPS tracker and how it integrates with Plaspy for location reporting and mapping
keywords:
  - Parallel track Trackbox
  - Trackbox features
  - Parallel Track GPS tracker
  - Trackbox Plaspy integration
  - Trackbox location reporting
  - real time tracking Trackbox
  - Trackbox POST integration
  - Trackbox SMS tracking
  - vehicle tracking Trackbox
  - asset tracking Trackbox
---

# Parallel track - Trackbox Features

This page provides a public feature overview describing how the Parallel Track Trackbox can be used with Plaspy for location reporting and basic tracking functions. It summarizes the Trackbox capabilities that are relevant to Plaspy users and clarifies how the device typically reports location data to a web service.

Exact feature availability, behavior, and user experience can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific configuration and the most current technical details, consult the manufacturer documentation.

## Feature Overview

The Parallel Track Trackbox is a compact GPS tracker designed to report position information at scheduled intervals or on request. It transmits location data to a predefined web service and supports common web integration methods, making it suitable for straightforward tracking scenarios.

- Regular interval location reporting for continuous visibility
- On request location reporting via SMS as an alternative transport
- Data delivery using standard HTTP POST for easy website integration
- Compatibility with common web mapping providers for visualization
- Compact design intended for simple installation across many asset types

## Core Features of Parallel track - Trackbox

- Periodic automatic location reports sent to a configured web endpoint
- On demand position retrieval via SMS message request
- Data export using standard HTTP POST payloads for integration
- Designed to work with mapping services for real time visualization
- Compact form factor suitable for a variety of installations
- Intended for tracking vehicles equipment and personnel where permitted
- Simple integration path for third party web services and platforms

## How These Features Work with Plaspy

When used with Plaspy, the Trackbox can deliver its periodic and on demand reports into Plaspy’s tracking service so positions become visible on Plaspy maps and history views. Plaspy is designed to accept device reports and display location updates, helping users monitor assets in one central interface.

- Plaspy accepts incoming Trackbox reports and maps them to the device record for live and historical location views
- POST based device reports can be routed to Plaspy’s service endpoint for ingestion
- Plaspy automatically detects compatible tracker protocols to simplify onboarding
- Device updates are shown on Plaspy maps and timeline views for operational oversight
- SMS based device requests remain useful when mobile data connectivity is limited; reported positions can still be entered into Plaspy if forwarded or relayed through a web endpoint

## Typical Use Cases

- Fleet location monitoring for route oversight and dispatch coordination
- Asset tracking for equipment that moves between locations
- Personal location reporting in permitted and compliant scenarios
- Temporary tracking for rentals or short term assignments
- Remote position reporting where simple POST integration is preferred
- Backstop reporting via SMS when primary mobile data links are unavailable

## Feature Availability Notes

- Feature availability may differ by firmware version and device hardware revision
- Some functions depend on how the device is installed and configured by the installer
- Regional cellular service and SMS behavior can influence how and when reports arrive
- Manufacturer implementation of POST payloads and mapping links may change over time
- Consult the official device manual for exact parameter names and configuration steps

## Why Use Plaspy with These Features

Using the Parallel Track Trackbox with Plaspy provides a straightforward way to centralize location updates from devices that report at intervals or on request. Plaspy offers mapping visualization, device history, and consolidated event visibility so teams can monitor asset movement without building a custom backend.

To learn more about Plaspy and how it can receive and present Trackbox reports, visit https://www.plaspy.com. For the most current device specific feature details and manufacturer documentation check http://www.paralleltrack.co.uk; device features and firmware behavior can change over time so verify the latest information with the manufacturer.
