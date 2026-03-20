---
slug: /autofon/se_beacon/protocol
id: se_beacon-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Beacon Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon SE+ Beacon and how it communicates with Plaspy for reliable tracking and event reporting
keywords:
  - AutoFon SE Beacon protocol
  - AutoFon SE Beacon GPS protocol
  - AutoFon SE Beacon Plaspy
  - SE Beacon tracking protocol
  - AutoFon GPS tracker protocol
  - SE Beacon communication
  - AutoFon GPRS tracker
  - covert vehicle tracking
  - long battery life tracker
  - SE Beacon compatibility
---

# AutoFon - SE+ Beacon Protocol

This page provides a public, non sensitive overview of the communication context used by the AutoFon SE+ Beacon when integrated with the Plaspy platform. It is intended for technical users, integrators, and fleet administrators who want to understand how the tracker reports position and event data to Plaspy in general terms without exposing device internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior for the SE+ Beacon can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the practical aspects of how the device communicates rather than low level packet formats.

## Protocol Overview

The SE+ Beacon communicates GNSS positions and event telemetry to a remote server so Plaspy can display live location, history, and alerts. The device uses mobile network data (GPRS) as the primary reporting channel and SMS as a fallback for alerts or emergency messages, while a sizeable onboard buffer preserves unsent messages during connectivity outages.

- The tracker protocol defines how the device packages position fixes, motion events, SOS presses, and alarm inputs for transmission to a backend server.
- Protocol messages enable the SE+ Beacon to identify itself to the server, report device status, and deliver event metadata that Plaspy can map to dashboard events.
- Heartbeat or life signal messages are part of the reporting cycle to confirm the device is operational and reachable by Plaspy.
- SMS fallback and a large onboard black box buffer help ensure event delivery when GPRS connectivity is intermittent.
- Remote firmware update notifications are exchanged over GPRS to keep devices in sync with manufacturer revisions and operational policies.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker connections and automatically determines the appropriate protocol when a device reports correctly. This automatic detection reduces the need for manual protocol selection inside Plaspy for most properly configured SE+ Beacon deployments.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 using the common Plaspy port 8888.
- All devices in Plaspy use the same port so you do not need distinct ports per model.
- Plaspy automatically detects the tracker protocol once the device connects to the Plaspy endpoint and starts sending data.
- With typical SE+ Beacon setup, you only need to point the device to the Plaspy endpoint and choose the appropriate transport (TCP or UDP) if the device requires that configuration.
- If a device does not appear online, check device reporting settings, SIM data service, and whether the device is pointed to the domain or IP above.

## Transport and Connection Context

Connection context describes how the SE+ Beacon reaches Plaspy rather than the internal structure of messages. The device can report over mobile data or use SMS as an alternative, and transport selection is a configuration choice available on the device.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy server endpoint.
- Plaspy accepts connections on the shared port 8888 for all supported trackers.
- Primary reporting is over GPRS for real time tracking; SMS is used as fallback or for specific alerting modes.
- Network reliability, APN settings, and SIM provisioning are common causes of connection issues and should be validated during setup.

## Protocol Compatibility Notes

- The SE+ Beacon is described as compatible with Plaspy, but behavior can vary across firmware builds and hardware revisions.
- Firmware updates from the manufacturer can add features, change message timing, or modify optional fields that affect parsing and device behavior.
- Some SE+ Beacon units may default to UDP while others prefer TCP; confirm transport configuration on the device to match Plaspy expectations.
- SMS fallback modes are useful for alerts but are not a substitute for continuous GPRS reporting when live tracking is required.
- Validate compatibility against the manufacturer documentation and any release notes for firmware to avoid unexpected behavior in production.
- Large onboard buffering and remote FOTA capability improve resilience, but buffer configuration and heartbeat intervals affect how quickly Plaspy receives delayed data.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, reliable event delivery, and faster troubleshooting when using the SE+ Beacon with Plaspy. Knowing the roles of transport, endpoints, and device reporting behavior reduces guesswork when addressing connectivity or data quality issues.

- Confirming transport (UDP versus TCP) and endpoint settings prevents basic configuration errors.
- Awareness of heartbeat and buffering behavior helps set expectations for delayed or batched location uploads.
- Knowing which events the device reports (motion, impact, SOS, alarm inputs) enables correct alert mapping inside Plaspy.
- Recognizing the role of SMS as a fallback clarifies when alerts may arrive by SMS rather than the live platform.
- Tracking firmware revision and changelogs supports predictable operations and coordinated updates.

## Why Use Plaspy with This Protocol

Using the AutoFon SE+ Beacon with Plaspy provides a lightweight, battery efficient option for long term, low profile tracking where discreet installation and long battery life are priorities. Plaspy ingests GNSS and event telemetry reported over GPRS and exposes those signals on live maps, alerting workflows, and historical playback so teams can monitor assets and respond to incidents.

If you need more information about integrating the SE+ Beacon with Plaspy or about general deployment best practices, learn more about Plaspy at https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; please verify the latest device specific documentation and firmware notes on the manufacturer site https://www.autofon.ru/ before large scale deployments.
