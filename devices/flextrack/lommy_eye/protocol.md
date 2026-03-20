---
slug: /flextrack/lommy_eye/protocol
id: lommy_eye-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Eye Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Flextrack Lommy Eye and how it communicates with Plaspy for reliable asset tracking
keywords:
  - Flextrack Lommy Eye protocol
  - Lommy Eye GPS protocol
  - Flextrack Lommy Eye communication
  - Lommy Eye Plaspy compatibility
  - Lommy Eye tracking protocol
  - Flextrack GPS tracker protocol
  - asset tracking protocol Flextrack
  - Lommy Eye GNSS communication
  - Lommy Eye UDP TCP reporting
  - Plaspy device protocol detection
---

# Flextrack - Lommy Eye Protocol

This page describes the public protocol context for using the Flextrack Lommy Eye with the Plaspy platform. It focuses on how the device communicates with Plaspy in general, what connection settings are used, and what to expect when integrating Lommy Eye for scheduled and event-driven reporting. The goal is to provide practical guidance for setup and troubleshooting while keeping implementation details at a safe, public level.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Lommy Eye can send scheduled location reports and event-driven updates, and exact protocol behavior may vary depending on device firmware, hardware revision, and manufacturer implementation. For Plaspy integration the public server endpoint is d.plaspy.com (also reachable at 54.85.159.138) and the platform uses port 8888 for device reporting; devices may be configured to use UDP or TCP on that port.

## Protocol Overview

The Lommy Eye communication protocol enables the tracker to deliver position, motion, and event data to Plaspy, and to receive remote configuration when supported. At a high level the protocol is the vehicle for identity, telemetry, and state so Plaspy can present maps, history, and alerts to end users.

- Carries periodic location reports and event-driven updates such as motion triggered reports that preserve battery life until movement is detected.
- Transports GNSS fixes, cellular-derived positioning, and RF-assisted signals so Plaspy can build consistent location history.
- Allows remote configuration of reporting intervals and motion thresholds when the device and transport support configuration messages.
- Supports transient storage and forwarding so missed positions can sync to Plaspy after connectivity is restored.
- Integrates with Plaspy’s ingestion pipeline so device identity and telemetry map to the correct asset in the platform.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections to a single shared endpoint and port and applies automatic detection to identify the device protocol. In most cases the device only needs to be configured to report to the Plaspy endpoint and no manual protocol selection inside Plaspy is required.

- Devices should be pointed to the Plaspy endpoint d.plaspy.com or the IP address 54.85.159.138.
- Plaspy listens on port 8888 and uses the same port for all supported devices.
- Lommy Eye can be configured to report over UDP or TCP to that same port depending on device capability.
- When the tracker is correctly configured to report to the Plaspy endpoint, Plaspy’s ingestion automatically associates incoming telemetry with the device.
- Administrators typically do not need to set a device protocol in Plaspy if the device is configured to send data to the shared Plaspy endpoint.

## Transport and Connection Context

Connection details are kept deliberately simple to support a wide range of battery driven trackers like Lommy Eye. The transport choice—UDP or TCP—depends on the tracker firmware and configuration, and the Plaspy endpoint accepts both on the standard port.

- Lommy Eye devices may be configured to use UDP or TCP for reporting to Plaspy on port 8888.
- The canonical Plaspy reporting host is d.plaspy.com, which resolves to 54.85.159.138 for public reporting.
- All devices supported by Plaspy use the same listening port, simplifying device configuration across fleets.
- When using UDP, reporting is typically lightweight and suitable for periodic updates; TCP can be used when a connection-oriented session is preferred by the device firmware.
- SMS or out of band channels may be available for remote configuration on some Lommy Eye variants but are separate from the IP transport used to send telemetry to Plaspy.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and remote configuration commands; always check the device firmware revision when diagnosing behavior.
- Hardware revisions or different form factors may expose different sensors or telemetry fields that affect what is received by Plaspy.
- The choice of UDP versus TCP is a device configuration parameter and can affect delivery behavior during network issues.
- Manufacturer-side settings such as default reporting interval or recovery modes can vary by region or model and influence how often Plaspy receives updates.
- Local storage behaviors differ between Lommy Eye M, L, and XL models; devices may buffer reports during coverage gaps and forward them when connectivity returns.
- Validate compatibility and feature availability against official Flextrack documentation for model and firmware specific details before large scale rollouts.

## Why Protocol Understanding Matters

A basic understanding of how Lommy Eye reports data to Plaspy helps ensure reliable setup, efficient battery life, and effective troubleshooting. Knowing what the device reports and how transport and firmware influence behavior reduces integration friction and supports predictable operations.

- Helps choose appropriate reporting intervals to balance battery life and positional granularity.
- Informs troubleshooting when reports are missing, delayed, or differ from expected fields.
- Guides selection of UDP or TCP based on network characteristics and device firmware support.
- Clarifies expectations around buffered data recovery after connectivity loss.
- Supports asset assignment and mapping in Plaspy by ensuring device identity and telemetry match platform expectations.

## Why Use Plaspy with This Protocol

Using Lommy Eye with Plaspy offers organizations visibility into remote, battery driven assets with flexible reporting modes and recovery tools. Plaspy ingests location, motion, and event data from Lommy Eye so operators can monitor asset location history, receive movement alerts, and leverage RF assisted recovery where GNSS is limited.

Plaspy’s shared endpoint approach simplifies device provisioning by using a single host and port for all devices and automatically detecting the tracker protocol when the tracker is correctly pointed at the Plaspy endpoint. To learn more about Plaspy and how it supports devices like Lommy Eye visit https://www.plaspy.com. Please verify current device protocol details, firmware behavior, and manufacturer implementation on the official Flextrack website https://flextrack.dk because protocol support and firmware features may change over time.
