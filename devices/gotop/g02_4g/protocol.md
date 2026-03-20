---
slug: /gotop/g02_4g/protocol
id: g02_4g-protocol
sidebar_label: Protocol
title: GOTOP - G02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the GOTOP G02-4G tracker with Plaspy for real time fleet tracking
keywords:
  - GOTOP G02-4G protocol
  - GOTOP G02-4G GPS protocol
  - GOTOP G02-4G communication protocol
  - GOTOP G02-4G tracking protocol
  - GOTOP G02-4G Plaspy compatibility
  - GOTOP GPS tracker protocol
  - fleet tracking GOTOP G02-4G
  - Plaspy device integration
  - vehicle telemetry protocol
  - motorcycle GPS tracker protocol
---

# GOTOP - G02-4G Protocol

This page describes the public protocol context for using the GOTOP G02-4G tracker with Plaspy. It focuses on how the device communicates telemetry and events to Plaspy and what to consider when configuring the tracker to report into the platform. The content is intentionally high level and does not include private implementation details or firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to Plaspy. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device reporting can differ between units or firmware releases even within the same model line.

## Protocol Overview

The protocol in this context is the device reporting and command exchange behavior that allows the G02-4G to deliver GPS positions, alarm events, and state data to Plaspy. It governs how the tracker identifies itself, how location and sensor data are packaged, and how status updates are transmitted so Plaspy can ingest, display, and act on the data.

- Enables periodic and event driven transmission of GPS positions, ACC/ignition state, and alarms to the Plaspy ingestion endpoint.
- Carries device identifiers and status information so Plaspy can associate incoming messages with the correct tracker record.
- Transmits event flags such as geo-fence triggers, movement or vibration alarms, low battery, and main power loss for immediate alerting.
- Supports redundant delivery methods such as cellular data over 4G with fallback to 3G/2G and optional SMS reporting when network conditions require it.
- Ensures Plaspy receives the telemetry needed for mapping, historical tracks, automated alerts, and integrations with fleet workflows.

## How Plaspy Detects the Protocol

Plaspy listens on a shared ingestion endpoint and automatically determines which tracker protocol a device is using when a compatible message arrives. This means users generally do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint using the correct transport and addressing.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol once the device reports to the Plaspy endpoint on port 8888.
- In most cases, configuring the G02-4G to report to d.plaspy.com on port 8888 over the chosen transport is sufficient for detection.
- If a device does not appear in Plaspy, verify network access, correct server address, and that the tracker is actively sending telemetry.

## Transport and Connection Context

Connection context covers how the G02-4G reaches Plaspy rather than the precise structure of the messages it sends. The device supports cellular network reporting and can be configured to use different transports depending on requirements and firmware capabilities.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices commonly point to d.plaspy.com or 54.85.159.138 as the Plaspy ingestion endpoint.
- Plaspy uses the same port 8888 for all devices, simplifying configuration across a mixed fleet.
- The G02-4G sends telemetry over 4G LTE with fallback to 3G and 2G and can also provide SMS reporting as a secondary channel.
- Ensure the tracker has a working mobile data subscription and that mobile operator firewalls allow outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware variations between units may change supported message options, reporting intervals, or alarm behavior.
- Hardware revisions can introduce differences in supported transports or peripheral inputs that affect what data is reported.
- Manufacturer configuration utilities or SMS commands may be required to set the server address and transport on some firmware builds.
- Transport selection (UDP vs TCP) can affect delivery characteristics such as reliability and latency in specific network conditions.
- SMS reporting is useful for redundancy but typically carries different fields and costs compared with cellular data reporting.
- Always validate compatibility for your fleet use case by confirming the exact firmware and model revision before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the G02-4G communicates with Plaspy helps installers, integrators, and fleet operators achieve reliable deployments and faster troubleshooting. Knowing the role of transport, server addressing, and event reporting reduces setup time and improves operational visibility.

- Ensures correct server address and transport are applied so devices reliably connect to Plaspy.
- Helps diagnose common issues such as missing telemetry, incorrect device identification, or intermittent reporting.
- Clarifies expectations around event types available from the device, such as ACC state, geo-fence triggers, and power alarms.
- Guides decisions about redundancy and fallback strategies using SMS versus cellular data.
- Supports planning for firmware updates, field testing, and staged rollouts across mixed vehicle fleets.

## Why Use Plaspy with This Protocol

Using the GOTOP G02-4G with Plaspy provides organizations with a simple path to centralized fleet visibility. The device’s rugged IP67 enclosure, wide voltage support, and accurate GNSS positioning make it well suited for motorcycles, e-bikes, and cars where compact form factor and reliable reporting are important. Plaspy ingests the G02-4G telemetry to offer live maps, alerts, history, and integration points for fleet workflows without requiring per-device port changes or manual protocol selection.

If you want to learn more about how Plaspy works with devices like the GOTOP G02-4G, visit the Plaspy website at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance, verify current information on the official GOTOP website at https://www.gotop.cc/. Protocol support, firmware behavior, and manufacturer implementation details can change over time so checking the manufacturer documentation helps ensure accurate configuration.
