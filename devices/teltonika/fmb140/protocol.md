---
slug: /teltonika/fmb140/protocol
id: fmb140-protocol
sidebar_label: Protocol
title: Teltonika - FMB140 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Teltonika FMB140 and how it communicates with Plaspy for tracking and CAN telemetry
keywords:
  - Teltonika FMB140 protocol
  - Teltonika FMB140 GPS protocol
  - FMB140 Plaspy compatibility
  - FMB140 CAN telemetry
  - Teltonika GPS tracker protocol
  - vehicle tracking protocol Teltonika
  - Plaspy device compatibility
  - FMB140 Bluetooth telemetry
  - fleet tracking protocol
  - Teltonika FMB140 tracking
---

# Teltonika - FMB140 Protocol

This page covers the public protocol context for using the Teltonika FMB140 with the Plaspy platform. It explains, at a general level, how the tracker communicates to Plaspy for location, CAN derived telemetry, and accessory events while avoiding device internals and manufacturer confidential details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behaviour can vary by firmware version, hardware revision, and manufacturer implementation, so be aware that device specifics may change between SKUs and firmware updates.

## Protocol Overview

The tracker communication protocol defines how the FMB140 reports position, CAN bus parameters, Bluetooth sensor data, and accessory events to a remote server. This public overview describes the role of the protocol in establishing reliable uploads to Plaspy and how those streams become usable telematics.

- Enables the FMB140 to identify itself and deliver location and telemetry to the Plaspy endpoint.
- Transfers CAN derived parameters and accessory events so Plaspy can map them into dashboards and reports.
- Supports both periodic and event driven reporting so Plaspy receives timely updates for motion, ignition, and sensor alerts.
- Provides the transport layer interactions required for consistent connectivity from vehicle to cloud.
- Allows remote configuration changes and firmware management workflows to be triggered or coordinated through Teltonika tools and Plaspy integrations.

## How Plaspy Detects the Protocol

Plaspy accepts inbound device connections on a shared endpoint and port and performs automatic protocol detection so users usually do not need to select a protocol manually inside the platform. When the FMB140 is configured to report to Plaspy, the platform recognizes the incoming communication pattern and maps device data into the correct processing workflow.

- All Plaspy supported devices use the same server endpoint and port for reporting.
- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The listening port used by Plaspy for device reporting is 8888 and is shared across devices.
- Plaspy automatically detects the tracker protocol when the device connects to the Plaspy endpoint.
- If the device is configured correctly to report to Plaspy, manual protocol selection in Plaspy is typically not required.

## Transport and Connection Context

Transport is the connection method used to send protocol data from the FMB140 to Plaspy. The choice between UDP and TCP depends on device support and configuration preferences and affects delivery characteristics but not the fact that the Plaspy endpoint and port remain the same.

- The FMB140 may be configured to use either UDP or TCP on port 8888 depending on device configuration and network requirements.
- Devices can be pointed to the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138.
- Using TCP provides connection oriented delivery while UDP can reduce latency for some event reporting scenarios depending on network and device settings.
- Plaspy uses the shared port 8888 for all devices so transport selection does not change the Plaspy endpoint.
- Ensure network firewalls allow outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888 for successful reporting.

## Protocol Compatibility Notes

- Firmware variations can change what data fields are reported and how CAN parameters are exposed; always verify the firmware release notes for the FMB140 SKU in use.
- Hardware SKUs differ by integrated CAN solution such as LV CAN or ALL CAN variants which affects available CAN metrics and accessory compatibility.
- Transport choice between UDP and TCP may be limited by carrier or local network policies and can impact message delivery mode.
- Bluetooth accessory support and accessory event formats can vary by firmware and by the specific accessory used.
- Manufacturer configuration tools like Teltonika Configurator and FOTA WEB are recommended for applying correct reporting parameters for Plaspy.
- Validate device reporting settings against both Plaspy connection requirements and the Teltonika product documentation before large scale rollout.
- Note the FMB140 has EOL status in some listings; confirm availability and official support when planning deployments.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, accurate telemetry mapping, and efficient troubleshooting when integrating FMB140 devices with Plaspy. A clear view of the public protocol context reduces guesswork during configuration and enables more predictable fleet operations.

- Speeds initial setup by aligning device reporting destination and transport to Plaspy expectations.
- Helps diagnose connectivity or data mapping issues by knowing what types of data the tracker can supply.
- Guides decisions about which SKU and accessory combinations meet telemetry requirements for your use case.
- Improves remote management workflows by clarifying how firmware and parameter changes affect reporting.
- Supports planning for network conditions by choosing the appropriate transport and retry strategies.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB140 with Plaspy provides organizations with a compact, CAN capable device that integrates vehicle position, CAN derived telemetry, and accessory events into a centralized fleet platform. This combination is useful for real time tracking, driver behaviour analytics, eco driving programs, and asset monitoring scenarios where CAN level insights and Bluetooth sensor data add operational value.

If you want to learn more about how Plaspy handles device communications, visit https://www.plaspy.com. For the most current device specific protocol and firmware behaviour, always verify details on the manufacturer site https://www.teltonika-gps.com/ as protocol support and implementation can change over time.
