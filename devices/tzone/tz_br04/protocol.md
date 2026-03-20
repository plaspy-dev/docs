---
slug: /tzone/tz_br04/protocol
id: tz_br04-protocol
sidebar_label: Protocol
title: TZone - TZ-BR04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TZone TZ BR04 GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - TZone TZ BR04 protocol
  - TZone TZ BR04 GPS protocol
  - TZone TZ BR04 Plaspy compatibility
  - TZone GPS tracker protocol
  - TZ BR04 tracking protocol
  - Plaspy tracker compatibility
  - tracker communication protocol
  - industrial GPS tracker
  - vehicle tracking protocol
  - fleet tracking integration
---

# TZone - TZ-BR04 Protocol

This page summarizes the public protocol context for using the TZone TZ-BR04 GPS tracker with Plaspy. It focuses on how the device communicates in general terms, what connection settings are used by Plaspy, and what to consider when integrating this industrial tracker into a fleet monitoring deployment. The content here is intended to help technical users and integrators understand the communication relationship between the TZ-BR04 and Plaspy without exposing manufacturer private details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the TZ-BR04 can vary by firmware version, hardware revision, and manufacturer implementation. The TZ-BR04 is an industrial grade tracker with Bluetooth 4.0 support, RS232 and RS485 output options, external antenna reception, and wide temperature tolerance, and those hardware characteristics influence how it is configured to deliver data to Plaspy.

## Protocol Overview

The TZ-BR04 tracker protocol defines how the device identifies itself to a server, reports location and telemetry, and maintains an operational session. For Plaspy integration this means the device sends periodic and event driven data to the Plaspy endpoint so the platform can parse and present usable tracking information. The overview below highlights the protocol role in general terms rather than describing firmware internals.

- Enables the tracker to report location, movement, and status to a remote server for monitoring and logging.
- Carries identity and session information so Plaspy can associate incoming messages with the correct device record.
- Transports telemetry such as signal strength, identification angle, and environmental sensor data when available.
- Supports periodic reporting and event driven messages to balance update frequency with power and bandwidth considerations.
- Allows remote command and configuration workflows when the tracker and manufacturer firmware support server side commands.

## How Plaspy Detects the Protocol

Plaspy provides a common network endpoint and port for device reporting and is designed to automatically identify the incoming tracker protocol when a device is properly configured to report to Plaspy. In most cases there is no need to select a protocol manually inside Plaspy if the device is sending data to the correct Plaspy endpoint and port.

- Plaspy server domain for device reporting is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 which may be used as an alternative to the domain name.
- The port used by Plaspy for all devices is 8888 and is shared across supported trackers.
- The device may be configured to use either UDP or TCP on port 8888 depending on the device capability and configuration preference.
- When a properly configured TZ BR04 reports to the Plaspy endpoint the platform will automatically detect the tracker protocol and route messages to the correct parser and device record.

## Transport and Connection Context

Transport and connection settings determine how the TZ-BR04 reaches Plaspy on the network. The device supports multiple physical interfaces and output modes which can be mapped to network reporting via a gateway or an on device network interface depending on installation. This section clarifies the connection context without asserting firmware level message formats.

- The TZ BR04 may be configured to report to Plaspy using either UDP or TCP on port 8888 according to device support and site requirements.
- For DNS based setups point the device reporting host to d.plaspy.com so Plaspy can be resolved dynamically.
- As an alternative to DNS the device can be configured to report directly to 54.85.159.138 if the deployment prefers a static IP endpoint.
- Plaspy uses the same port 8888 for all supported devices which simplifies device configuration and firewall rules.
- Transport selection between UDP and TCP can affect delivery behavior and should be chosen based on reliability requirements and device capability.

## Protocol Compatibility Notes

- Manufacturer firmware versions can change message timing and available fields; always check the device firmware level when validating compatibility.
- Hardware revisions of the TZ BR04 that alter supported interfaces or radio characteristics may affect how the device is configured to forward data to Plaspy.
- When using RS232 or RS485 output modes the data path that delivers messages to Plaspy (for example a local gateway or modem) must be configured to forward to d.plaspy.com or 54.85.159.138 on port 8888.
- Bluetooth 4.0 on the device can be used for local configuration or accessory connectivity but is separate from the network reporting channel to Plaspy.
- Transport differences such as choosing UDP versus TCP can change packet delivery semantics and should be tested in the target environment.
- Validate device behavior against the manufacturer documentation for the exact build and firmware rather than relying on generic assumptions.

## Why Protocol Understanding Matters

A practical understanding of the TZ-BR04 communication protocol improves setup success, reduces integration time, and helps diagnose issues when devices do not appear in Plaspy or when telemetry is incomplete. Knowing which connection settings to use and what variables may differ across firmware or hardware revisions empowers administrators and integrators during deployment and maintenance.

- Ensures correct configuration of the device reporting host and transport so messages reach Plaspy reliably.
- Helps diagnose connectivity issues by narrowing scope to transport, DNS resolution, or firewall rules.
- Supports decisions about reporting frequency and event triggers to balance network usage and tracking resolution.
- Aids in verifying that RS232 or RS485 data paths and any gateway devices are correctly forwarding to the Plaspy endpoint.
- Reduces time spent troubleshooting by understanding which device characteristics are relevant to server integration.

## Why Use Plaspy with This Protocol

Using the TZone TZ-BR04 with Plaspy provides a practical way to turn the device telemetry into actionable visibility for asset and vehicle monitoring. Plaspy's shared endpoint model and automatic protocol detection simplify the device on boarding process so technical teams can focus on placement, configuration, and operational policies rather than bespoke server endpoints for each tracker.

To learn more about how Plaspy supports device integrations and fleet tracking, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time so please verify the latest device specific documentation and firmware notes with the manufacturer at http://www.tzonedigital.com/ for the most current and authoritative information.
