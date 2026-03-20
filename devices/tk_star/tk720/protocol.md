---
slug: /tk_star/tk720/protocol
id: tk720-protocol
sidebar_label: Protocol
title: TK-Star - TK720 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the TK-Star TK720 tracker with Plaspy servers and connection settings
keywords:
  - TK-Star TK720 protocol
  - TK720 GPS protocol
  - TK720 tracking protocol
  - TK-Star GPS tracker protocol
  - TK720 Plaspy compatibility
  - Plaspy tracker protocol
  - GPS tracker communication
  - vehicle tracking TK720
  - fleet tracking TK-Star
  - TK720 protocol guide
---

# TK-Star - TK720 Protocol

This page documents the public protocol context for using the TK-Star TK720 relay GPS tracker with the Plaspy platform. It explains how the device communicates in broad terms, what connection points Plaspy exposes for ingestion, and which aspects of the tracker reporting process are relevant when integrating the TK720 with Plaspy for real time tracking and fleet management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available commands can vary by device firmware, hardware revision, regional SKU, and manufacturer implementation, so this page focuses on safe, public facing protocol context rather than firmware specific internals.

## Protocol Overview

The TK720 uses its built in GNSS, assisted positioning and cellular data link to send location, event and status information to a server. The device protocol governs how those reports and alert messages are packaged and transmitted so a platform like Plaspy can interpret them and present location, telemetry and event history to users.

- Enables delivery of periodic location updates and position fixes to the tracking server for live map visualization.
- Communicates event and alarm telemetry such as vibration alerts, geo fence triggers, over speed and move alerts so Plaspy can generate notifications.
- Carries status and heartbeat information so the platform can monitor connectivity and device health.
- Supports remote command and control flows used for operations like relay based engine cut off when routed through the platform.
- Provides the identifiers and metadata needed for device association and historical route storage on the server.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared server endpoint and uses automatic detection to determine the tracker protocol so devices do not normally need manual protocol selection inside the platform. Correct device reporting settings are the typical requirement for successful automatic detection and ingestion.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol

## Transport and Connection Context

Transport decisions determine how the TK720 reaches the Plaspy endpoint. The tracker uses cellular GPRS to send its reports and can be configured to use one of the supported transport modes when reporting to the platform. Connection context is about reaching the Plaspy endpoint reliably and ensuring the device is set to use the correct APN and server address.

- The TK720 may be configured to use UDP or TCP on port 8888 depending on device support and provisioning.
- Devices can point to the domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS or carrier routing requires an IP.
- Plaspy uses the same port for all supported trackers which simplifies device configuration and server routing.
- Verify APN and SIM settings so the device can establish a GPRS session and send outbound reports to the platform.
- Ensure network firewalls and carrier restrictions allow outbound TCP or UDP traffic to port 8888 to avoid blocked connections.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available event types, and optional fields. Confirm firmware behavior if a device is not behaving as expected.
- Hardware revisions or SKUs may include slightly different sensors or I O wiring that affect event reporting and remote control functions.
- Manufacturer side configuration menus or SMS commands used to change server settings can differ by region and firmware build.
- Transport choice between UDP and TCP can affect reliability characteristics in high loss networks; select the transport best suited to your environment.
- Always validate device reporting by confirming it can reach d.plaspy.com or 54.85.159.138 on port 8888 and is visible in the Plaspy device list.
- For command and control functions like relay operations, ensure administrative access and device pairing are correctly provisioned on the platform.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure the device is configured correctly, speeds up troubleshooting, and improves the reliability of alerts and command delivery when used with Plaspy. A practical grasp of the connection and reporting context reduces integration friction and supports consistent operations over time.

- Speeds up initial setup by confirming correct server address, transport mode, and APN settings.
- Helps isolate connectivity problems such as blocked ports, DNS failures, or carrier restrictions.
- Clarifies what telemetry and events to expect from the device so Plaspy dashboards and alert rules can be tuned appropriately.
- Improves confidence when using remote actions like engine cut off by knowing how and when commands are transmitted.
- Supports lifecycle management by highlighting when firmware or hardware changes might alter integration behavior.

## Why Use Plaspy with This Protocol

Using the TK-Star TK720 with Plaspy gives operators a compact tracker with multi GNSS positioning and event reporting that feeds directly into a unified fleet management platform. Plaspy ingests the device telemetry and provides live tracking, alerting, route playback, and incident workflows that are commonly needed for anti theft operations, rental monitoring, and light fleet oversight.

To learn more about Plaspy and how it handles device integration and fleet visibility, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware documentation on the manufacturer site https://www.tk-star.com/ before planning large scale deployments.
