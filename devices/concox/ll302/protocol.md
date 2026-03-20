---
slug: /concox/ll302/protocol
id: ll302-protocol
sidebar_label: Protocol
title: Concox - LL302 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Concox LL302 GPS tracker and its communication with Plaspy including transport and compatibility notes
keywords:
  - Concox LL302 protocol
  - Concox LL302 GPS protocol
  - LL302 Plaspy compatibility
  - Concox LL302 tracking protocol
  - LL302 GPS tracker communication
  - Concox asset tracker protocol
  - LL302 LTE Cat 1 tracker
  - Concox LL302 compatibility Plaspy
  - vehicle tracking LL302
  - LL302 telemetry protocol
---

# Concox - LL302 Protocol

This page provides a public protocol context for using the Concox LL302 GPS asset tracker with Plaspy. It summarizes how the device communicates with Plaspy at a connection level, what role the tracker reporting protocol plays in data delivery, and practical compatibility considerations for successful integration without exposing manufacturer confidential details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary based on device firmware, hardware revision (for example LL302 E and LL302 L variants), and manufacturer implementation, so this page focuses on the high level transport and compatibility context that matters during setup and troubleshooting.

## Protocol Overview

At a high level the LL302 reporting protocol is the mechanism that moves GNSS positions and sensor telemetry from the device into Plaspy. The protocol enables the tracker to identify itself, report periodic or event driven location updates, and deliver sensor events that Plaspy translates into alerts and operational data.

- Enables periodic and event driven GNSS position delivery to Plaspy for real time tracking.
- Carries sensor telemetry such as accelerometer vibration, light tamper events, hall effect status, and optional temperature and humidity readings.
- Provides identification and status information that allows Plaspy to associate incoming messages with the correct asset record.
- Supports different reporting modes to balance update frequency and battery life for the LL302 long endurance design.
- Acts as the public interoperability layer between LL302 hardware and the Plaspy ingestion endpoint.

## How Plaspy Detects the Protocol

Plaspy is designed to accept telemetry from many tracker models using a consistent network endpoint and to automatically identify the protocol used by an incoming device. In most cases a properly configured LL302 that reports to the Plaspy endpoint will be detected and mapped without manual protocol selection inside Plaspy.

- Plaspy listens on a shared endpoint and single port for all supported devices so manual protocol selection is rarely required.
- Incoming connections addressed to the Plaspy endpoint are examined and associated automatically with a supported tracker protocol.
- If an LL302 is configured to report to Plaspy and its firmware sends standard telemetry and identification fields, Plaspy will detect and register the device.
- Users typically only need to confirm the device reports to the correct Plaspy address and uses the appropriate transport mode.
- When troubleshooting detection, review device reporting destination and verify network reachability to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the LL302 establishes network links to Plaspy rather than the internal packet structure. The LL302 can be configured to send data over either UDP or TCP depending on device settings and firmware capabilities. Plaspy accepts both transports on the same shared port and endpoint to simplify device setup.

- Devices may be configured to report over UDP or TCP to port 8888 depending on device support and configuration preferences.
- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so the same port applies across models and helps standardize firewall and APN rules.
- Choose UDP for lower overhead reporting in some scenarios or TCP where reliable delivery is preferred and supported by the LL302 firmware.
- Verify that the device APN and mobile operator allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware differences across LL302 revisions can change available reporting fields and event triggers; confirm firmware release notes with the manufacturer.
- Hardware variants LL302 E and LL302 L cover different regional LTE bands and may have slight protocol behavior differences related to regional firmware.
- Transport selection between UDP and TCP may affect delivery semantics and power profile; check device configuration menus for available modes.
- Manufacturer default settings may not point to Plaspy by default; you will usually need to configure the device reporting destination to d.plaspy.com or the Plaspy server IP.
- Some optional sensor telemetry (temperature, humidity) may require peripheral installation and explicit enabling in device settings.
- Always validate compatibility and recommended settings against Concox documentation for the specific model and firmware build.

## Why Protocol Understanding Matters

Understanding the communication protocol at a high level helps ensure reliable setup, accurate telemetry ingestion, and efficient troubleshooting when using the LL302 with Plaspy. Knowing which transport, destination, and reporting modes are in use reduces configuration errors and shortens the time to operational tracking.

- Ensures correct device configuration for reporting destination and transport so Plaspy can detect the tracker automatically.
- Helps troubleshoot connectivity issues by focusing on APN, outbound port 8888, and reachability to d.plaspy.com or the Plaspy server IP.
- Informs decisions about reporting frequency and power profiles to balance battery life against update timeliness for long deployments.
- Clarifies expectations for which sensor events will be available in Plaspy based on installed hardware and firmware capabilities.
- Reduces integration time by aligning device settings with Plaspy network and ingestion assumptions.

## Why Use Plaspy with This Protocol

The Concox LL302 is well suited to long term asset and vehicle tracking thanks to its multi source positioning, rugged magnetic mount, and large battery. When the LL302 reports its telemetry to Plaspy over the shared Plaspy endpoint and port, organizations gain real time visibility, event alerts, and historical reporting useful for fleet operations, anti theft workflows, and environmental monitoring.

Plaspy’s shared endpoint model and automatic protocol detection simplify onboarding LL302 devices at scale while preserving the ability to receive GNSS fixes, tamper and movement alerts, and optional environmental telemetry. To learn more about Plaspy and how it can ingest LL302 telemetry, visit https://www.plaspy.com. Protocol support and device behavior can change over time due to firmware updates or manufacturer revisions, so verify the latest model and firmware specific protocol details on the Concox website https://www.iconcox.com/.
