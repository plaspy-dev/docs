---
slug: /laipac/s911_lola/protocol
id: s911_lola-protocol
sidebar_label: Protocol
title: Laipac - S911 Lola Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Laipac S911 Lola and how it communicates with Plaspy for location reporting and alerts
keywords:
  - Laipac S911 Lola protocol
  - Laipac S911 Lola GPS protocol
  - Laipac S911 Lola tracking protocol
  - Laipac protocol Plaspy
  - S911 Lola compatibility
  - Laipac GPS tracker protocol
  - S911 Lola communication
  - S911 Lola Plaspy integration
  - Laipac mPERS tracking
  - S911 Lola location reporting
---

# Laipac - S911 Lola Protocol

This page documents the public protocol context for using the Laipac S911 Lola with Plaspy. It focuses on how the device communicates with the Plaspy backend for location reporting, SOS alerts, and two way voice events. The goal is to provide a clear, non sensitive summary of the communication considerations that affect successful integration and day to day operation.

The S911 Lola is a compact mobile personal emergency response device with AGPS, an SOS panic button, fall and geofence alerts, and two way cellular voice capability. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device specific commands and firmware details should be verified with Laipac when needed.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the S911 Lola identifies itself, sends position and event data, and transmits alerts so Plaspy can parse and present usable information. This page does not reproduce manufacturer proprietary formats but explains the role of the protocol in practical terms for integration with Plaspy.

- Enables the device to send location coordinates and timestamped events to a remote endpoint for processing.
- Transmits alert types such as SOS panic presses, fall alerts, and geofence triggers so Plaspy can surface notifications.
- Carries periodic position reporting and mode updates so the platform can reflect battery, motion, and tracking states.
- Supports basic device identification and status information so Plaspy can associate messages with the correct tracker account.
- Facilitates optional two way communication events that occur after an SOS alert or when voice channels are opened.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a shared Plaspy endpoint and automatically detects the tracker protocol for supported devices when messages arrive. In most cases users do not need to manually select a protocol inside Plaspy if the tracker is configured to report to the Plaspy connection settings.

- Plaspy receives reports at the domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices supported by Plaspy use the same network port, which simplifies device configuration.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint using the expected transport.
- From a user perspective the critical step is configuring the device to report to Plaspy rather than choosing a protocol inside the Plaspy interface.
- If automatic detection does not occur, reviewing the device reporting destination and transport mode is the recommended first troubleshooting step.

## Transport and Connection Context

The S911 Lola can be configured to report to Plaspy using standard IP transport layers. Plaspy supports both common transport modes on the shared port to accommodate different device capabilities and network environments.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device firmware and the installer preference.
- Trackers may point to the domain d.plaspy.com or the public server IP 54.85.159.138 when specifying the Plaspy endpoint.
- Plaspy uses the same port for all supported devices which streamlines field deployment and configuration templates.
- Choice of UDP versus TCP can affect delivery characteristics such as retransmission behavior and connection state management.
- Ensure the device APN settings and outbound network access allow traffic to the Plaspy endpoint on the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions can alter message fields, reporting intervals, or optional features so always verify compatibility for the specific firmware version in the device.
- Hardware revisions or SKU differences may change available sensors or alert logic and therefore affect the set of events sent to Plaspy.
- Some features such as fall detection, medication reminders, or speakerphone behavior depend on device configuration and may be enabled or disabled by firmware.
- Transport selection between UDP and TCP should match the device capability and any network requirements for the deployment.
- Manufacturer server products and cloud services may expose different integration options; confirm the device is set to report to the Plaspy endpoint for direct integration.
- Validate any integration against official Laipac documentation for model specific command sets and configuration instructions.

## Why Protocol Understanding Matters

Understanding how the S911 Lola communicates helps site administrators, integrators, and support teams set up devices correctly, diagnose issues, and align expectations for alerting and position accuracy. Clear protocol awareness reduces setup time and improves operational reliability.

- Confirms that devices are reporting to the correct Plaspy endpoint and transport so data arrives reliably.
- Helps diagnose missing events such as SOS alerts or fall notifications by checking reporting patterns and device mode.
- Guides decisions about transport selection and network configuration for deployments with restricted connectivity.
- Aids in validating battery and mode reporting to ensure the device operates in the intended tracking profile.
- Clarifies when a manufacturer firmware update or device replacement may be needed to access newer features.

## Why Use Plaspy with This Protocol

Using Plaspy with the Laipac S911 Lola provides organizations and caregivers a centralized way to receive location updates, manage SOS events, and maintain situational awareness for vulnerable users. Plaspy accepts the device reports on a shared, simplified connection setup so deployments can scale without per device port complexity.

If you want to learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer implementation notes on the official Laipac site https://laipac.com/ since protocol support and firmware behavior can change over time and should be confirmed with the manufacturer.
