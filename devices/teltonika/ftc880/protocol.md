---
slug: /teltonika/ftc880/protocol
id: ftc880-protocol
sidebar_label: Protocol
title: Teltonika - FTC880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Teltonika FTC880 tracker with Plaspy using shared connection settings
keywords:
  - Teltonika FTC880 protocol
  - Teltonika FTC880 GPS protocol
  - FTC880 Plaspy integration
  - FTC880 communication protocol
  - Teltonika FTC880 tracking protocol
  - FTC880 telemetry protocol
  - Teltonika tracker protocol
  - vehicle tracking FTC880
  - fleet tracking Teltonika
  - Teltonika FTC880 compatibility
---

# Teltonika - FTC880 Protocol

This page provides public protocol context for using the Teltonika FTC880 tracker with Plaspy. It explains how the device communicates at a high level, what connection settings Plaspy expects, and how that communication enables position, event, and telemetry reporting into the Plaspy platform. The FTC880 description in this document is grounded in its role as a battery-mounted, rugged GPS tracker with multi constellation GNSS, LTE Cat 1 cellular connectivity with 2G fallback, IP69K enclosure, and Teltonika remote management and FOTA WEB capabilities.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to our endpoint. Exact protocol behavior and available features can vary by device firmware, hardware revision, regional module variant, and manufacturer implementation. This page focuses on the public, non sensitive aspects of how the FTC880 communicates with Plaspy and what you should check when configuring the tracker for use with the platform.

## Protocol Overview

The protocol used by the FTC880 enables the tracker to identify itself, send GNSS positions, status updates, and event reports to Plaspy so the platform can display live location, alerts, and telemetry. Plaspy receives those transmissions and maps the data into tracking dashboards and reporting workflows. The following points summarize the public role of the communication protocol without exposing implementation specifics.

- Transports position reports, timestamps, device status, and event notifications from the tracker to a server endpoint.
- Allows the tracker to identify itself so the receiving platform can associate incoming reports with the correct device record.
- Carries telemetry and health indicators such as battery state, cellular status, and input/output events that Plaspy uses for alerts and logs.
- Enables remote configuration and firmware update workflows when combined with Teltonika management tools, supporting lifecycle maintenance.
- Provides the foundation for higher level features in Plaspy such as geofencing, historical playback, and alert rules based on incoming telemetry.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and performs automatic protocol detection so users usually do not need to select a protocol manually inside the platform. If the FTC880 is configured to send its reports to Plaspy, the platform will determine the compatible protocol behavior from the incoming data and map it to the device record.

- Plaspy listens on the same port for all supported devices which simplifies device configuration and onboarding.
- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- When the tracker is pointed at the Plaspy endpoint and correctly configured, manual protocol selection inside Plaspy is typically unnecessary.
- Automatic detection reduces configuration errors and speeds up initial integration for mixed fleets with different tracker models.

## Transport and Connection Context

Connection transport and addressing are a practical part of protocol configuration. The FTC880 can be configured to report to Plaspy using either UDP or TCP depending on the device settings and network environment. Below are the public connection details you can use to point the FTC880 toward Plaspy for reporting.

- Devices may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- The Plaspy reporting endpoint is d.plaspy.com and can also be addressed by the server IP 54.85.159.138.
- All Plaspy supported devices use port 8888, which streamlines fleetwide configuration and firewall rules.
- Choose UDP for simpler, lower overhead reporting where allowed by network conditions, or TCP where reliable delivery is required and supported by the device.
- Ensure your cellular APN and network settings on the FTC880 allow outbound connections to the Plaspy domain or IP on the configured transport and port.

## Protocol Compatibility Notes

- Firmware revisions and Teltonika remote configuration options can affect available reporting intervals, supported transports, and event reporting behavior.
- Regional module variants and hardware revisions may introduce subtle differences in radio behavior and supported bands; verify the variant in your device label.
- Selection between UDP and TCP can affect delivery characteristics and must match how the device is configured to report to Plaspy.
- Manufacturer tools such as Teltonika FOTA WEB can change device firmware and therefore alter protocol behavior over time.
- Always validate device identity and reporting after initial configuration to confirm Plaspy is receiving the expected telemetry and position reports.
- For advanced features or custom telemetry, check whether the device firmware supports the necessary fields or events before deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, timely troubleshooting, and predictable behavior across deployments. Knowing what the tracker sends and how Plaspy receives it reduces integration friction and supports long term operational reliability for mixed fleets.

- Faster troubleshooting when position or telemetry updates do not appear in Plaspy, since you can confirm transport, endpoint, and device configuration.
- Better battery life and reporting efficiency by aligning reporting intervals and event triggers to the device capabilities and Plaspy workflows.
- Clear expectations for what telemetry fields will be available in Plaspy based on device firmware and remote configuration options.
- Reduced downtime through coordinated use of Teltonika remote management tools and Plaspy monitoring for abnormal device states.
- Easier fleet scale up because Plaspy uses a single listening port and automatic protocol detection across supported device models.

## Why Use Plaspy with This Protocol

Using the Teltonika FTC880 with Plaspy provides a practical combination of rugged, battery optimized hardware and a platform designed for real time tracking, alerts, and fleet workflows. The tracker’s multi constellation GNSS and LTE Cat 1 connectivity with 2G fallback deliver reliable location and telemetry for demanding deployments, while Plaspy maps incoming data into operational dashboards for monitoring and reporting.

To learn more about Plaspy and how the FTC880 integrates with our platform visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify information on the official Teltonika website https://www.teltonika-gps.com/ as manufacturer documentation and firmware updates can change protocol behavior over time.
