---
slug: /gelix/gelix_3/protocol
id: gelix_3-protocol
sidebar_label: Protocol
title: Gelix - Gelix 3 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Gelix 3 GPS tracker and Plaspy compatibility including connection settings and integration considerations
keywords:
  - Gelix Gelix 3 protocol
  - Gelix 3 GPS protocol
  - Gelix 3 communication protocol
  - Gelix 3 tracking protocol
  - Gelix protocol Plaspy
  - Gelix 3 compatibility Plaspy
  - Gelix GPS tracker protocol
  - Gelix device telemetry protocol
  - power consumption data logger protocol
  - Gelix remote monitoring protocol
---

# Gelix - Gelix 3 Protocol

This page provides public protocol context for using the Gelix 3 tracker with Plaspy. It focuses on how the Gelix 3 communicates in broad terms, what connection settings are commonly used, and how those settings relate to successful integration with the Plaspy platform. The information here is intended for technical users and integrators who want to understand the communication relationship between the device and Plaspy without exposing firmware internals.

The Gelix 3 is a versatile power consumption data logger with automated I O and an embedded GSM GPRS modem or Ethernet port, designed for telemetry, event monitoring, access control, device control, and related applications. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so device behavior may differ between installations or firmware versions.

## Protocol Overview

The protocol used by the Gelix 3 governs how the device reports telemetry, status, and event data to a remote server and how it receives configuration or control messages when supported. For integration with Plaspy this means the tracker sends identifiable telemetry and event records that Plaspy can accept and map into the platform.

- Enables delivery of telemetry such as power consumption, I O states, events, and positional information to Plaspy.
- Provides device identification and status information that lets Plaspy associate incoming reports with a Gelix 3 unit.
- Carries event and alarm records from integrated sensors and peripherals so they appear in platform dashboards and logs.
- Supports remote configuration options when the device and firmware expose management commands over the reporting link.
- Allows Plaspy to process delivery, logging, and alerts as part of normal fleet and asset monitoring workflows.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections at a common endpoint and port and uses the contents of device reports to determine the correct handling. In most cases a Gelix 3 configured to report to Plaspy will be automatically recognized without manual protocol selection.

- Plaspy’s public server domain for device reporting is d.plaspy.com.
- Plaspy’s public server IP address is 54.85.159.138 and the service listens on port 8888.
- Devices may be configured to use either UDP or TCP transport to reach Plaspy on port 8888.
- All devices managed by Plaspy use the same port which simplifies device configuration.
- When a properly configured Gelix 3 connects to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and associate it with the receiving account.

## Transport and Connection Context

Connection context covers how the Gelix 3 establishes network transport to a server and which endpoints are typical for Plaspy integration. Gelix 3 units may use cellular GPRS or Ethernet depending on the hardware option and configuration.

- The Gelix 3 may be configured to report to Plaspy using UDP or TCP on port 8888 depending on device capabilities and settings.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy listens on a single port for all supported devices which reduces complexity when configuring multiple tracker models.
- Select transport type according to the device firmware and network environment since some installations prefer UDP and others require TCP.
- Network configuration such as APN, firewall rules, and NAT behavior can affect connectivity and should be validated during setup.

## Protocol Compatibility Notes

- The Gelix 3 is compatible with Plaspy when correctly configured to report to the Plaspy endpoint and port.
- Firmware versions and hardware revisions of the Gelix 3 can change available features and command behavior; verify the device firmware release for specific capabilities.
- Manufacturer settings sometimes vary by region or product variant and can affect which transport or reporting modes are available.
- If the device supports both GSM GPRS and Ethernet, confirm which interface is active and how it is configured to reach the Plaspy endpoint.
- Transport selection between UDP and TCP may affect reliability and delivery characteristics depending on network conditions.
- Always validate configuration parameters against the Gelix 3 official documentation for the exact model and firmware you are deploying.

## Why Protocol Understanding Matters

Understanding the Gelix 3 communication protocol helps ensure stable reporting, correct interpretation of telemetry, and faster troubleshooting when issues arise. Clear knowledge of the reporting flow reduces integration time and prevents common setup mistakes.

- Helps confirm the device is pointing to the correct Plaspy endpoint and using the expected transport and port.
- Makes it easier to diagnose missing telemetry or inconsistent event reporting when comparing device logs to Plaspy intake logs.
- Informs decisions about transport choice UDP versus TCP and how that impacts delivery behavior in your network.
- Guides firmware update planning when protocol changes or new messages are added by the manufacturer.
- Supports correct mapping of Gelix 3 integrated sensors and I O channels into Plaspy dashboards and alerts.

## Why Use Plaspy with This Protocol

Using the Gelix 3 with Plaspy provides organizations a centralized way to collect power consumption telemetry, event notifications, and device state from the Gelix 3 alongside other assets. Plaspy’s automatic protocol detection and unified port approach simplify on boarding and let teams focus on operational use cases such as energy monitoring, alarm handling, and remote device control.

To learn more about how Plaspy can work with Gelix devices and to get started with integration please visit https://www.plaspy.com. Note that protocol support, firmware behavior, and manufacturer specific implementation details can change over time so verify the latest device documentation and firmware details with Gelix at http://www.gelix.com/ before final deployment.
