---
slug: /astra_telematics/at502/protocol
id: at502-protocol
sidebar_label: Protocol
title: Astra Telematics - AT502 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Astra Telematics AT502 with Plaspy for GPS reporting and asset telemetry
keywords:
  - Astra Telematics AT502 protocol
  - Astra Telematics AT502 GPS protocol
  - AT502 Plaspy compatibility
  - AT502 communication protocol
  - Astra AT502 tracker protocol
  - AT502 tracking protocol
  - AT502 telemetry integration
  - AT502 LTEM NB IoT compatibility
  - asset tracker AT502 protocol
  - Plaspy AT502 integration
---

# Astra Telematics - AT502 Protocol

This page covers the public protocol context for using the Astra Telematics AT502 with Plaspy. It explains how the AT502, a compact battery powered GNSS tracker with LTE‑M, NB‑IoT and GSM fallback plus BLE configuration, communicates telemetry and location data to the Plaspy platform in broad, non sensitive terms useful for setup and planning.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior for the AT502 can vary by firmware version, hardware revision and manufacturer implementation, so this page focuses on connection and integration context rather than firmware specific frames or private parser details.

## Protocol Overview

The tracker reporting protocol defines how the AT502 authenticates, identifies itself, and sends GNSS positions plus device telemetry to the cloud. With Plaspy, the protocol's public role is to deliver usable location fixes, motion and battery status so the platform can provide real time tracking, history and alerting.

- Enables GNSS position reports and telemetry to be delivered from the AT502 to Plaspy for mapping and event processing.
- Conveys device identity and basic health metrics such as battery level and cellular signal to support maintenance and alerts.
- Supports periodic reporting and motion based wake patterns appropriate for long life asset tracking where power conservation is critical.
- Uses the cellular bearer and optional BLE for on site configuration while the core reporting channel goes to Plaspy.
- Allows Plaspy to interpret incoming data into location, motion events and device state without requiring manual protocol selection by the user.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared, public endpoint and performs protocol selection automatically so most deployments do not need explicit protocol choice inside the Plaspy interface. Proper device configuration to point to the Plaspy endpoint is typically all that is required for automatic detection and ingestion.

- Plaspy server domain is d.plaspy.com which devices can target for reporting.
- Plaspy server IP is 54.85.159.138 and is available as an alternative endpoint in device configuration.
- The port is 8888 and Plaspy uses the same single port for all supported devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capability and operator preference.
- When the AT502 reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates incoming telemetry with the correct device record.

## Transport and Connection Context

Connection and transport choices are an important part of integrating the AT502. The device supports modern low power cellular modes and can use either UDP or TCP to send reports to Plaspy, with BLE used for local setup when available.

- The device may be configured using UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can point to the domain d.plaspy.com or directly to the IP address 54.85.159.138 when configuring the reporting target.
- All devices in Plaspy use the same port, simplifying bulk provisioning and firewall rules for fleets.
- Cellular bearer options include LTE‑M, NB‑IoT and GSM fallback which impact how and when data is transmitted from the device.
- BLE is used for local configuration and diagnostics but is not the primary path for cloud reporting.

## Protocol Compatibility Notes

- Firmware revisions can change the AT502 reporting cadence, available telemetry fields and connection behavior; always verify firmware release notes when troubleshooting.
- Hardware variants or regional SKUs may alter supported cellular bands or radio fallback behavior which affects connectivity to cellular networks.
- Transport selection between UDP and TCP may be influenced by network reliability, operator restrictions and desired acknowledgement semantics.
- Device configuration profiles provided by Astra Telematics may preconfigure the reporting target and transport; confirm settings before deployment.
- Plaspy’s automatic detection reduces the need for manual protocol selection but correct reporting target and APN settings are still required on the device.
- For features not present on the AT502 such as ignition sense or CAN data, pair the tracker with other vehicle devices if those signals are required in your deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps teams plan deployment, troubleshoot connectivity issues and ensure the AT502 delivers the expected telemetry to Plaspy over the device lifetime.

- Ensures correct network and firewall configuration so devices can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Helps choose between UDP and TCP based on network characteristics and reporting reliability goals.
- Improves troubleshooting by focusing on firmware, APN, SIM provisioning and transport selection rather than guessing parser internals.
- Guides battery life expectations by aligning reporting intervals and motion wake behavior with asset management policies.
- Informs decisions about firmware updates and hardware variants that might change protocol behavior or telemetry content.

## Why Use Plaspy with This Protocol

Using the AT502 with Plaspy gives organizations a straightforward path to long term, low maintenance asset tracking. The device’s multi constellation GNSS, low power cellular modes and BLE configuration make it well suited for discreet installations where endurance matters, while Plaspy ingests the device reports and turns them into actionable location, health and alerting data.

To learn more about how Plaspy works with devices like the AT502 visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer implementation notes verify information on the Astra Telematics website https://astratelematics.com/ as vendor documentation and firmware updates can change over time.
