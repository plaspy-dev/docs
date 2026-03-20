---
slug: /teltonika/fmm880/protocol
id: fmm880-protocol
sidebar_label: Protocol
title: Teltonika - FMM880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMM880 explaining how the tracker communicates with Plaspy using shared connection settings
keywords:
  - Teltonika FMM880 protocol
  - Teltonika FMM880 GPS
  - FMM880 Plaspy compatibility
  - FMM880 communication protocol
  - FMM880 tracking protocol
  - Teltonika GPS tracker protocol
  - Plaspy device integration
  - Plaspy tracker protocol
  - fleet tracking FMM880
  - GNSS tracker protocol
---

# Teltonika - FMM880 Protocol

This page covers the public protocol context for using the Teltonika FMM880 tracker with Plaspy. It describes how the device communicates with Plaspy at a high level, what connection settings are used by the platform, and what to expect during integration without exposing manufacturer internals or sensitive implementation details.

The FMM880 is a battery mounted, water resistant GNSS tracker with LTE Cat M1 and NB IoT options, dual band GNSS L1 and L5, and Bluetooth LE sensor support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact on device protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always validate device configuration against the manufacturer documentation when precise behavior is required.

## Protocol Overview

The FMM880 communicates location, sensor telemetry, and status to cloud endpoints using its built in cellular modem and configured transport. At a protocol level this means the tracker sends device reports to Plaspy where those reports are parsed, attributed to the device, and made available for tracking, alerts, and reporting.

- Enables periodic and event driven location updates to Plaspy for real time tracking and historical route reconstruction.
- Sends telemetry such as battery status, BLE sensor readings, and basic device health that Plaspy surfaces in dashboards and alerts.
- Provides identity and status information that allows Plaspy to associate incoming messages with a specific FMM880 unit.
- Works over standard network transports so devices can report from wide area cellular networks into Plaspy without special networking requirements.
- Supports firmware dependent variations in message cadence and optional sensor payloads that may affect how data appears in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared cloud endpoint and uses detection logic to identify the incoming device type and map data into platform fields. For users this generally means a properly configured FMM880 will start sending usable data to Plaspy without manual protocol selection inside the platform.

- Plaspy listens on a single shared port for all supported devices so configuration is simplified.
- The public Plaspy endpoint used for device reporting is d.plaspy.com and the server IP is 54.85.159.138 with port 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on their network and device settings.
- Plaspy automatically detects the tracker protocol when traffic arrives at the shared endpoint so manual protocol selection is usually not required.
- If a device is not reporting, verify device APN, transport selection, and destination settings on the tracker and confirm it points to the Plaspy endpoint.

## Transport and Connection Context

The FMM880 supports low power cellular transports and can be set to report to Plaspy over the network transport that best fits deployment needs. Connection settings are intentionally consistent across devices in Plaspy to reduce configuration errors during rollouts.

- Devices may be configured to communicate with Plaspy using UDP or TCP on port 8888.
- The Plaspy reporting host can be set to d.plaspy.com or the server IP 54.85.159.138 as the destination.
- Plaspy uses the same port for all devices, simplifying mass configuration and provisioning workflows.
- Choose UDP for lighter weight transmissions where device firmware supports it, or TCP for a connection oriented link if required by the device firmware or network.
- Confirm APN and cellular registration on the tracker so it can reach the Plaspy endpoint across the mobile network.

## Protocol Compatibility Notes

- Firmware revisions can change message fields, timing, and optional sensor payloads that affect how data is interpreted by Plaspy.
- Hardware revisions or regional variants may alter available bands or cellular fallbacks which can influence connectivity performance.
- Transport selection between UDP and TCP can affect delivery characteristics; ensure the device is set to the transport that matches the deployment plan.
- Manufacturer configuration commands or setup menus determine the destination host and transport; verify these settings on each unit prior to deployment.
- Validate that Bluetooth sensor mappings and optional interfaces are supported by your firmware build and recognized by Plaspy.
- Always cross check compatibility against the latest manufacturer documentation for device specific behavior.

## Why Protocol Understanding Matters

Having a clear, practical understanding of the FMM880 communication protocol helps ensure successful setup, reliable reporting, and faster troubleshooting when integrating devices with Plaspy.

- Accelerates initial provisioning by aligning device destination and transport with Plaspy expectations.
- Reduces downtime by making it easier to diagnose whether issues are network, transport, or device configuration related.
- Helps set realistic reporting cadence and battery life trade offs based on how often the device transmits telemetry.
- Improves integration planning for Bluetooth sensors and optional telemetry so Plaspy receives the expected fields.
- Supports long term maintenance by identifying when firmware or hardware changes might require configuration updates.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM880 with Plaspy provides a straightforward path to gather GNSS position, BLE sensor telemetry, and device status from a rugged, battery mounted tracker. The FMM880 design is well suited to temporary, seasonal, or hard to wire installations where rapid deployment and low power operation are priorities.

Plaspy centralizes incoming reports from the FMM880 at the shared Plaspy endpoint so fleet managers and operators can monitor location, set alerts for movement or sensor thresholds, and access historical reports for operational analysis. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For precise protocol behavior, firmware notes, and device implementation details consult the manufacturer documentation at https://www.teltonika-gps.com/ which may be updated over time.
