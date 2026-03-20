---
slug: /topfly/solarguardx_200/protocol
id: solarguardx_200-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for TopFly SolarGuardX 200 integration with Plaspy for reliable GPS tracking and tamper event reporting
keywords:
  - TopFly SolarGuardX 200 protocol
  - TopFly SolarGuardX 200 GPS protocol
  - TopFly SolarGuardX 200 communication protocol
  - SolarGuardX 200 tracking protocol
  - SolarGuardX 200 Plaspy compatibility
  - TopFly GPS tracker protocol
  - Solar padlock GPS protocol
  - container tracker protocol
  - fleet management tracker protocol
  - asset tracker protocol Plaspy
---

# TopFly - SolarGuardX 200 Protocol

This page covers the public protocol context for using the TopFly SolarGuardX 200 with the Plaspy platform. It describes how the tracker communicates at a high level, what role the device reporting protocol plays in integration, and what to expect when configuring the device to forward location, tamper and sensor events to Plaspy. The SolarGuardX 200 is a rugged solar powered cargo GPS tracker and padlock designed for long autonomy and tamper detection, and this document explains how that device class typically interacts with Plaspy without exposing firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so while the SolarGuardX 200 is Plaspy compatible out of the box, differences in reporting frequency, supported transports, encryption options and command sets may depend on the unit SKU and firmware state.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the SolarGuardX 200 sends position fixes, tamper and lock events, sensor readings and heartbeat messages to a remote server. The protocol bridges the device’s GNSS and sensor subsystems with Plaspy so that locations and events are parsed into actionable telemetry for dashboards, alerts and reporting.

- Enables the SolarGuardX 200 to deliver GNSS positions and telemetry to Plaspy for real time tracking and history.
- Communicates lock and tamper events such as rope cut, SIM cover removal, and lock unlock notifications to Plaspy event streams.
- Carries device status, battery and sensor data so Plaspy can trigger alerts, rules and automated workflows.
- Supports common transport methods advertised by the device family so data can be routed to Plaspy reliably.
- Allows remote commands and firmware management to be coordinated through Plaspy when the device supports OTA or SMS control.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming device reports on a single shared endpoint and identify the reporting format automatically. If the SolarGuardX 200 is configured to report to the Plaspy endpoint, the platform will detect the incoming protocol and process position and event messages without manual protocol selection by the user.

- Plaspy accepts device reports on the shared server endpoint d.plaspy.com and the public server address 54.85.159.138.
- All devices that report to Plaspy use the same port, which simplifies device configuration and onboarding.
- The SolarGuardX 200 can be pointed at the Plaspy endpoint so the platform can automatically recognize and parse compatible reports.
- When configured correctly, users typically do not need to choose a protocol inside Plaspy; simply point the device to the Plaspy endpoint and allow automatic detection.
- If multiple transports are supported by the device, Plaspy can receive reports regardless of whether the tracker uses the preferred transport supported by its firmware.

## Transport and Connection Context

Connection context is about how reports are delivered, not the internal message layout. The SolarGuardX 200 supports multiple transport options and can be configured to use the transport best suited for the deployment. Devices may be set to target the Plaspy endpoint by domain or by IP.

- The tracker may be configured to use UDP or TCP on port 8888 depending on device support and local configuration.
- Devices can be pointed at the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138 for direct reporting.
- Plaspy uses the same port for all supported devices to streamline onboarding and reduce configuration errors.
- Some SolarGuardX 200 SKUs and firmware builds also support MQTT and SMS reporting as alternative transports for telemetry and remote commands.
- Transport choice can affect reliability, latency and how the device buffers data during connectivity gaps; choose the transport that matches your network and operational constraints.

## Protocol Compatibility Notes

- SolarGuardX 200 units are described as Plaspy compatible out of the box, but firmware revisions can change supported transports and available features.
- Different SKUs may expose distinct cellular bands, modem stacks and reporting options; verify the SKU details against Plaspy requirements.
- Hardware revisions or optional features such as encryption (MD5, AES256) and MQTT may be available on some firmware versions but not others.
- Transport selection (UDP vs TCP vs MQTT vs SMS) should be validated for your deployment to ensure desired behavior for buffering and retransmission.
- Manufacturer configuration defaults may point to a different cloud endpoint; confirm settings so the device reports to the Plaspy endpoint.
- Always compare the tracker unit firmware and configuration with official manufacturer documents to confirm compatibility and expected behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators ensure reliable setup, faster troubleshooting and predictable long term operation when using the SolarGuardX 200 with Plaspy. Knowing which transports and events the device will send makes it easier to map device telemetry into Plaspy rules, notifications and fleet workflows.

- Helps verify the device is correctly pointed at d.plaspy.com or the Plaspy server IP so reports reach the platform.
- Assists in choosing the best transport for your network and data requirements, taking into account buffering and latency.
- Enables quicker identification of issues such as missing tamper events, unexpected reporting intervals, or mismatched firmware features.
- Supports planning for OTA firmware updates, encryption settings and secure command channels when the device offers those features.
- Improves confidence when integrating accessory sensors via BLE or when routing lock/unlock events into operational processes.

## Why Use Plaspy with This Protocol

Pairing the SolarGuardX 200 with Plaspy provides organizations with continuous visibility, tamper alerts and consolidated telemetry for container, trailer and remote asset security. The device’s long autonomy, robust GNSS performance and tamper detection map naturally into Plaspy workflows for geofencing, event-driven alerts and historical route analysis, helping teams reduce response times and improve asset protection.

To learn more about how Plaspy handles device integrations and the broader platform capabilities, visit https://www.plaspy.com. For the most current firmware specific protocol details, feature lists and configuration instructions for the SolarGuardX 200, verify information with the manufacturer at https://www.topflytech.com/.
