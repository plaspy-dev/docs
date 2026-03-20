---
slug: /gotop/g23n/protocol
id: g23n-protocol
sidebar_label: Protocol
title: GOTOP - G23N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for GOTOP G23N GPS tracker integration with Plaspy server and connection context for reliable reporting
keywords:
  - GOTOP G23N protocol
  - GOTOP G23N GPS protocol
  - GOTOP G23N communication protocol
  - GOTOP G23N tracking protocol
  - GOTOP GPS tracker protocol
  - GOTOP tracker Plaspy compatibility
  - G23N NB IoT tracking
  - G23N vehicle tracker protocol
  - Plaspy compatible GPS tracker
  - fleet tracking GOTOP G23N
---

# GOTOP - G23N Protocol

This page describes the public protocol context for using the GOTOP G23N tracker with Plaspy. It focuses on the communication role the tracker plays when reporting location, telemetry, and alarm events to the Plaspy platform, and explains the connection settings Plaspy exposes for device reporting. The content here is intended to help administrators and integrators understand how the G23N communicates at a high level without exposing firmware internals or private implementation details.

The G23N is an NB‑IoT vehicle tracker built around the Quectel BC26 and a ZKMicro GNSS engine, and it supports GPS, BDS, and LBS positioning as described in the device specification. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware versions, hardware revisions, and manufacturer implementation choices. Review this overview to align device configuration with Plaspy expectations and consult the manufacturer for device specific firmware behavior.

## Protocol Overview

The protocol for the G23N defines how the device packages and sends location, status, and alarm messages to a remote server so those messages can be ingested and displayed by Plaspy. In the context of Plaspy integration the focus is on reliable reporting over NB‑IoT and how vehicle inputs and outputs map to platform events and controls.

- Enables the G23N to report GNSS fixes, cell based location, and device telemetry to a remote server for processing.
- Delivers alarm and input state changes such as ACC detection, power loss, and remote output status to Plaspy for event handling.
- Provides a common channel for telemetry so Plaspy can present live markers, routes, and alarms on dashboards.
- Allows the G23N to be addressed by the Plaspy ingest endpoint so device identity and status are associated with the correct asset.
- Supports configuration paths such as local UART setup and over the air reporting configuration to point the device at Plaspy.

## How Plaspy Detects the Protocol

Plaspy ingests incoming device connections at a shared endpoint and uses that connection to determine the incoming tracker protocol so devices can be processed without manual protocol selection in most cases. Properly configuring the G23N to report to Plaspy simplifies onboarding and reduces the need for per device protocol configuration inside Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the platform listens on a single port for device traffic.
- The Plaspy platform automatically detects the tracker protocol once a device successfully reports to the Plaspy endpoint.
- When the G23N is configured to point to the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required.
- Consistent device reporting to the Plaspy endpoint helps ensure correct association of incoming messages with assets.

## Transport and Connection Context

G23N devices connect over NB‑IoT radio and forward data to a remote server address configured in the device. For Plaspy integration, the critical transport and addressing details are unified so supported devices use the same connection port and endpoint, allowing straightforward device reporting regardless of device brand.

- Devices may be configured to report using UDP or TCP on port 8888 depending on device firmware and configuration options.
- Point the device to the Plaspy reporting domain d.plaspy.com or use the Plaspy server IP 54.85.159.138 when DNS is not available.
- Plaspy uses the same port for all supported devices which simplifies configuration and reduces per model variance.
- Choose the transport method supported by your carrier and firmware build; some network environments or device firmware prefer UDP while others use TCP.
- Verify that the device can reach the Plaspy endpoint over the chosen transport when deployed behind firewalls or private APNs.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported transports, and which telemetry fields are sent; always check the device firmware release notes.
- Hardware revisions such as antenna layout or GNSS module firmware may affect positioning performance but do not change the public reporting endpoint.
- Manufacturer side configuration utilities or commands may be required to point the G23N at the Plaspy server or to switch between UDP and TCP.
- Some carriers or NB‑IoT networks impose limits on payload size or connection timing that can affect reporting behavior.
- Validate that your device is configured to send the expected events for ACC, power loss, and remote output so Plaspy can map those to platform features.
- When in doubt, compare device behavior against Plaspy ingest logs or device messages during initial testing to confirm compatibility.

## Why Protocol Understanding Matters

Understanding the G23N communication protocol and the connection context with Plaspy helps ensure reliable device onboarding, accurate event mapping, and faster troubleshooting when messages do not arrive as expected. A clear grasp of what the device sends and how Plaspy receives it reduces downtime and improves fleet visibility.

- Ensures correct device configuration so location and alarm messages reach Plaspy consistently.
- Helps identify whether transport or network issues are preventing device reporting.
- Supports validation that ACC, power loss, and remote output events are mapped correctly into Plaspy event rules.
- Aids in planning deployments with NB‑IoT considerations such as reporting interval and power management.
- Improves confidence when performing firmware updates or hardware changes that may affect reporting.

## Why Use Plaspy with This Protocol

Using the G23N with Plaspy provides a unified way to collect NB‑IoT based GNSS location, telemetry, and vehicle input events and present them in dashboards, alerts, and reports. Plaspy’s shared endpoint approach simplifies device configuration and helps operators manage mixed fleets with a consistent server address and port.

Plaspy is designed to accept reports from compatible trackers like the G23N and to automatically detect the tracker protocol so devices can be onboarded without complex per device protocol selection. To learn more about Plaspy and how it can be used with GOTOP devices visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and you should verify the latest device specific protocol information and firmware details with the manufacturer at https://www.gotop.cc/.
