---
slug: /aoya/a8/protocol
id: a8-protocol
sidebar_label: Protocol
title: AoYa - A8 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the AoYa A8 GPS tracker and how it communicates with Plaspy using shared server settings
keywords:
  - AoYa A8
  - AoYa A8 protocol
  - AoYa GPS A8
  - A8 tracker Plaspy
  - Plaspy compatible devices
  - GPS tracker protocol
  - personal GPS tracker
  - live tracking A8
  - A8 communication protocol
  - tracker reporting protocol
---

# AoYa - A8 Protocol

This page covers the public protocol context for using the AoYa A8 personal GPS tracker with the Plaspy platform. It describes general communication behavior and connection settings that help the A8 report location, alerts, and basic telemetry to Plaspy without exposing firmware internals or private implementation details. The A8 is a compact personal tracker with SOS and voice monitoring features, live tracking capability, and multi band GSM support that make it suitable for real time monitoring and emergency use.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when the device reports to the platform. For Plaspy integration the public server endpoint is d.plaspy.com and the public server IP is 54.85.159.138, using port 8888. Devices may be configured to use either UDP or TCP on port 8888. Exact behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so validate device specific details when needed.

## Protocol Overview

The A8 tracker protocol describes how the device establishes transport to a remote server, identifies itself, and transmits location, alert, and status data so Plaspy can process and present it. This page focuses on public, non sensitive aspects of that exchange and how the protocol supports reliable reporting to Plaspy.

- The protocol lets the A8 deliver location updates, SOS alerts, and basic status information to a remote endpoint for processing.
- Identification and regular reporting allow Plaspy to correlate incoming messages with a registered device record.
- The communication flow supports real time tracking so live locations can be displayed on Plaspy dashboards.
- Transport choice and periodic reporting intervals affect battery life and reporting granularity for the A8.
- Manufacturer firmware controls the exact message timing and content, so behavior may differ across firmware releases.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections on a shared endpoint and port and automatically detects the device protocol when a tracker is configured to report to the platform. In most cases users do not have to manually choose a protocol in Plaspy if the device is correctly pointed to the Plaspy endpoint.

- Plaspy exposes a single public endpoint d.plaspy.com and a public server IP of 54.85.159.138 for device reporting.
- All devices supported by Plaspy use the same port, simplifying device configuration.
- Devices can be configured to report via either UDP or TCP on port 8888 depending on device support.
- When the A8 sends its first reports to the Plaspy endpoint the platform matches and associates incoming data with a device record.
- Users typically validate device ID and reporting settings on the tracker side rather than selecting protocol options inside Plaspy.

## Transport and Connection Context

Connection context describes how the A8 sends data to Plaspy at the network transport level. The A8 may use UDP or TCP transport depending on device configuration and firmware capabilities, and the platform accepts either transport to the same Plaspy endpoint and port.

- Devices may be configured to send reports to d.plaspy.com or directly to 54.85.159.138.
- Plaspy listens on port 8888 for both UDP and TCP traffic from all supported devices.
- Choosing UDP can reduce overhead and latency for frequent reports, while TCP may be used where reliability of each transmission is preferred by the device firmware.
- Ensure the tracker APN and GPRS settings are valid for the SIM used so the device can reach the Plaspy endpoint.
- Network level firewalls and carrier restrictions can affect the device ability to reach d.plaspy.com; verify connectivity when diagnosing issues.

## Protocol Compatibility Notes

- Firmware and software updates from the manufacturer can change message timing, supported fields, or reporting behavior.
- Different hardware revisions of the A8 may support different transport modes or features such as voice monitoring and SOS behavior.
- Some features depend on server side support as well as device capability; confirm that the required reporting fields are available for the desired use case.
- Transport choice between UDP and TCP may be constrained by the device firmware and network environment.
- Verify APN, server address, and transport configuration on the device to ensure it reports to the Plaspy endpoint.
- When in doubt, consult the manufacturer documentation for firmware specific command references and behavior.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps with setup, configuration, and troubleshooting so the A8 can reliably report to Plaspy and provide useful location and alert data.

- Knowing the required server address and port reduces configuration errors when provisioning devices.
- Understanding transport options helps balance reporting frequency against battery life.
- Awareness of firmware and hardware variation prepares administrators for device behavior differences during scaling.
- Clear expectations for what the device reports make it easier to verify successful integration and diagnose missing data.
- Documenting device settings and firmware versions simplifies ongoing maintenance and support work.

## Why Use Plaspy with This Protocol

Using the AoYa A8 with Plaspy enables practical real time visibility and monitoring for personal safety and asset tracking use cases. The A8s small form factor, SOS button, live tracking, and voice monitoring map well to Plaspy use cases where live location, alerting, and simple remote monitoring are required.

Plaspy accepts reports from the A8 at the shared endpoint d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP and automatically detects the tracker protocol so users can focus on deployment and operations. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the most current device level protocol details and firmware specific behavior consult the manufacturer documentation at http://www.aoyagps.com/ as protocol support and firmware behavior can change over time.
