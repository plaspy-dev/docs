---
slug: /topshine/mt02_4g/protocol
id: mt02_4g-protocol
sidebar_label: Protocol
title: TopShine - MT02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopShine MT02 4G integration with Plaspy for tracking configuration and connectivity
keywords:
  - TopShine MT02-4G protocol
  - TopShine MT02-4G GPS protocol
  - TopShine MT02-4G protocol for Plaspy
  - MT02-4G communication protocol
  - MT02-4G tracking protocol
  - 4G GPS tracker protocol
  - Plaspy device protocol
  - TopShine tracker compatibility
  - vehicle tracking MT02-4G
  - fleet tracking protocol
---

# TopShine - MT02-4G Protocol

This page provides a public, non sensitive overview of the communication context for using the TopShine MT02-4G tracker with Plaspy. It focuses on how the device reports location and telemetry to Plaspy, the shared connection settings used by the service, and practical compatibility considerations for deployment and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol for incoming reports. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes the public communication context rather than firmware internals. The MT02-4G is Plaspy compatible and ships with features like 4G connectivity, onboard logging, a backup battery, and OTA firmware capability that interplay with how it reports to a tracking platform.

## Protocol Overview

At a high level the tracker protocol describes how the MT02-4G sends position, motion, I O status, and event alerts to a remote server so Plaspy can display live position, route history, and configured notifications. The protocol is the mechanism that turns GPS and sensor readings inside the device into usable data on the Plaspy platform.

- Enables the MT02-4G to transmit GPS coordinates and vehicle telemetry to Plaspy for live tracking and history.
- Carries event information such as overspeed, geo fence triggers, SOS alerts, and power or battery status.
- Provides device identification and status so Plaspy can attribute incoming reports to the correct tracker record.
- Supports offline logging upload so stored points are sent when network connectivity is restored.
- Works together with OTA and remote management features to allow firmware updates and configuration over the air when supported.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port and is designed to automatically detect the tracker protocol used by an arriving device. When the MT02-4G is pointed at Plaspy, the platform matches observed data patterns to supported device behaviors so manual protocol selection inside Plaspy is usually not required.

- Plaspy receives device reports at d.plaspy.com and at the server IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, simplifying device configuration and firewall planning.
- Plaspy automatically detects the tracker protocol from the incoming connection and reported data so users generally do not need to pick a protocol by hand.
- Proper device configuration to point to the Plaspy endpoint is the common requirement for automatic detection to succeed.
- If a device does not appear, checking that the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 is a practical first step.

## Transport and Connection Context

The MT02-4G can communicate over cellular data and may be configured to use either UDP or TCP transport depending on device settings and network considerations. Transport choice affects connection behavior but not the fact that Plaspy accepts reports at the same server endpoint and port for all supported trackers.

- Devices may be configured to use UDP on port 8888 for lightweight reporting.
- Devices may also be configured to use TCP on port 8888 for connection oriented reporting depending on firmware and configuration.
- Plaspy accepts connections addressed to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Using the common port across devices makes network and firewall configuration simpler for fleets.
- Verify the MT02-4G transport setting matches your intended network policy and the device configuration sent to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change reporting behavior and available commands so compatibility should be validated against the device firmware in use.
- Hardware revisions or optional accessories on the MT02-4G may enable or change telemetry channels such as fuel sensing or driver ID.
- Manufacturer side settings or custom firmware variants can introduce protocol differences that affect integration.
- Transport selection between UDP and TCP can be important for reliability in specific network environments.
- Confirm that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and that APN and SIM settings permit data connectivity.
- For advanced or unusual deployments consult the device manual and manufacturer resources to confirm behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the MT02-4G reports reliably to Plaspy, prevents misconfiguration, and shortens diagnosis time for connectivity issues. A basic grasp of protocol roles makes it easier to validate device setup and interpret why data might be missing or delayed.

- Ensures the tracker is pointed at the correct Plaspy endpoint and using the correct transport.
- Helps diagnose connectivity problems such as blocked ports, incorrect APN, or wrong server settings.
- Guides firmware upgrade planning so you know when reporting behavior might change.
- Supports sensible expectations about offline logging and how stored points are uploaded.
- Enables clearer communication with the device vendor when manufacturer support is required.

## Why Use Plaspy with This Protocol

Using the MT02-4G with Plaspy provides a straightforward path to real time vehicle visibility, historical route playback, and configurable event alerts that are useful for fleet operations, anti theft workflows, and asset monitoring. The combination of 4G connectivity, onboard logging, backup battery, and OTA capability makes the MT02-4G a practical device for integration into a centralized tracking platform such as Plaspy.

If you want to learn more about how Plaspy receives and manages tracker data or explore platform features for device fleets visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions check the TopShine official website https://www.gztopshine.com/ as manufacturer documentation may change over time.
