---
slug: /teltonika/ftc881/protocol
id: ftc881-protocol
sidebar_label: Protocol
title: Teltonika - FTC881 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Teltonika FTC881 communication with Plaspy including connection settings and compatibility guidance
keywords:
  - Teltonika FTC881 protocol
  - FTC881 GPS tracker
  - FTC881 Plaspy compatibility
  - Teltonika GPS protocol
  - FTC881 communication protocol
  - vehicle tracking FTC881
  - fleet tracking Teltonika FTC881
  - FTC881 telemetry
  - Teltonika FTC881 integration
  - FTC881 tracking protocol
---

# Teltonika - FTC881 Protocol

This page describes the public protocol context for using the Teltonika FTC881 tracker with Plaspy. It focuses on how the device communicates with Plaspy endpoints and explains the role of the tracker reporting protocol in enabling real time location, telemetry, and event reporting to the Plaspy platform. Information here is intended to help fleet engineers and integrators understand the communication context without exposing private implementation details.

Plaspy accepts connections from supported trackers using a shared endpoint and port configuration and automatically detects the tracker protocol once the device reports to the platform. Exact protocol behavior and available message fields can vary by FTC881 firmware version, hardware revision, and Teltonika implementation, so device behavior in the field may differ slightly from general descriptions here.

## Protocol Overview

The protocol used by the FTC881 governs how GNSS positions, telemetry, and event data are packaged and sent from the tracker to a backend server such as Plaspy. In practice this protocol enables the tracker to identify itself, report location and status, and participate in remote device management workflows when configured for a Plaspy endpoint.

- Enables transmission of GNSS positions and telemetry from the FTC881 to a backend service.
- Allows the device to identify itself and send metadata that Plaspy can use for device mapping.
- Carries event signals and input/output states for fleet workflows such as ignition detection and movement alerts.
- Supports remote update and configuration flows when used together with Teltonika remote management tools and Plaspy reporting.
- Provides the basis for data Plaspy ingests for live maps, alerts, and historical reporting.

## How Plaspy Detects the Protocol

Plaspy uses a unified server endpoint and a single port for all supported trackers and automatically detects the device protocol when the tracker reports to that endpoint. In most cases the tracker user or integrator only needs to point the FTC881 at the Plaspy endpoint with the correct transport settings and the platform handles protocol identification.

- Plaspy listens on the shared endpoint d.plaspy.com and on the server IP 54.85.159.138 for incoming tracker connections.
- The platform accepts tracker connections on port 8888 and uses that port for all supported devices.
- Devices configured to report to d.plaspy.com or 54.85.159.138 on port 8888 will be recognized by Plaspy for automatic protocol detection.
- Plaspy can accept either UDP or TCP traffic depending on the tracker configuration and network conditions.
- When the FTC881 is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is usually unnecessary.

## Transport and Connection Context

Connection and transport choices affect how the FTC881 reaches the Plaspy backend but do not change the public role of the protocol itself. The tracker may be configured to use different transports and endpoints based on deployment needs and Teltonika configuration tools.

- The FTC881 may be configured to use UDP or TCP when sending reports to Plaspy depending on device support and site preferences.
- Plaspy accepts device traffic addressed to d.plaspy.com or directly to 54.85.159.138.
- All Plaspy devices report to the same port number which simplifies configuration across a mixed fleet.
- Network level considerations such as carrier NAT, firewalls, and mobile data policies can affect transport behavior and should be checked during deployment.
- Confirm device APN and outbound connection settings in Teltonika configuration tools to ensure the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may add, change, or deprecate reporting fields and message timing; verify firmware release notes for device-specific behavior.
- Hardware revisions and optional accessories can alter available inputs, outputs, or telemetry that the protocol reports.
- Teltonika configuration tools such as FOTA WEB and TCT can change how the device communicates and which events are reported.
- Transport choice between UDP and TCP can affect delivery characteristics but Plaspy supports both on the shared port.
- Confirm that the FTC881 is configured to report to d.plaspy.com or 54.85.159.138 and uses port 8888 for Plaspy ingestion.
- Always validate final behavior in a controlled test before large scale rollout to ensure telemetry and events map correctly in Plaspy.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol is practical for successful setup, ongoing troubleshooting, and maintaining reliable device behavior in the field. Knowing the communication context helps integrate hardware features into Plaspy workflows and reduces time spent diagnosing connection or data mapping issues.

- Speeds up initial configuration by confirming the correct endpoint and transport settings.
- Helps troubleshoot missed or delayed reports by isolating transport, carrier, or device configuration issues.
- Ensures correct mapping of device inputs, outputs, and telemetry into Plaspy dashboards and alerts.
- Improves readiness for firmware updates that may change message behavior or available fields.
- Supports better planning for fleet scale deployments by clarifying network and configuration requirements.

## Why Use Plaspy with This Protocol

Using the FTC881 with Plaspy gives organizations a straightforward path to collect rugged, battery-mounted device telemetry and location data for fleet and asset monitoring. The FTC881’s low power modes, strong GNSS reception, and rugged packaging make it well suited for heavy equipment, e-mobility, and mixed fleet scenarios, while Plaspy provides a centralized backend to ingest, normalize, and present that data for operations teams.

To learn more about how Plaspy handles device connections and fleet workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify the latest information on the manufacturer site https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
