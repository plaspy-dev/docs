---
slug: /ulbotech/t360/protocol
id: t360-protocol
sidebar_label: Protocol
title: Ulbotech - T360 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Ulbotech T360 GPS tracker with Plaspy integration and practical connection guidance
keywords:
  - Ulbotech T360 protocol
  - T360 GPS tracker
  - Ulbotech T360 Plaspy compatibility
  - T360 communication protocol
  - T360 tracking protocol
  - Ulbotech GPS protocol
  - T360 OBD tracker protocol
  - Plaspy compatible trackers
  - vehicle tracking T360
  - fleet management T360
---

# Ulbotech - T360 Protocol

This page describes the public protocol context for using the Ulbotech T360 GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non-sensitive terms so fleet managers, integrators, and technical teams can understand connection expectations, common telemetry types, and the role the tracker protocol plays in backend ingestion.

The T360 is a plug-and-play OBD-II tracker built around a u-blox GNSS engine and a quad-band GPRS modem; it provides periodic and immediate position uploads, alarms, geo-fence events and driving behavior reports. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact message behavior can vary by firmware version, hardware revision and manufacturer implementation, so configuration and testing remain important during rollout.

## Protocol Overview

The protocol for the T360 defines how the device reports position, events and basic telemetry to a remote backend. In public terms this protocol enables the tracker to identify itself to the server, transmit location and sensor data, and trigger event messages that Plaspy can ingest and convert into alerts, reports and dashboard items.

- Enables the tracker to send periodic location updates and immediate event notifications to the backend.
- Carries telemetry such as accelerometer events, ignition status, battery voltage and geo-fence triggers.
- Provides identifiers and status messages that allow Plaspy to correlate incoming packets with a specific device and vehicle.
- Supports alarm reporting and engine immobilizer signals that feed into anti-theft workflows.
- Works over standard mobile data connectivity so devices can report in real time to a centralized Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a T360 is configured to report to the Plaspy endpoint. In most cases you do not need to choose a protocol manually inside Plaspy when the device is correctly pointed at the shared server address and port used by Plaspy.

- Plaspy provides a single shared server endpoint for device reporting at d.plaspy.com.
- The Plaspy server reachable by IP is 54.85.159.138 and listens on port 8888.
- All devices in Plaspy use the same port, so a consistent outbound configuration is sufficient for many tracker models.
- When the device reports to the Plaspy endpoint, Plaspy matches incoming messages to supported formats and routes data into the platform automatically.
- Users typically only need to set the device APN and server address on the tracker side; Plaspy handles protocol identification on receipt.

## Transport and Connection Context

The T360 reports over mobile GPRS and supports standard socket transports. Device transport selection and server addressing determine how the tracker reaches Plaspy, and the T360 can be configured to use either common transport modes depending on device firmware and provisioning.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and carrier behavior.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Port 8888 is the shared reporting port used by Plaspy for all supported trackers.
- Using the domain d.plaspy.com allows DNS based routing and can be preferable when carriers or network conditions require flexible addressing.
- Confirm carrier APN settings and ensure the SIM has data enabled so the T360 can establish GPRS connectivity to Plaspy.

## Protocol Compatibility Notes

- Firmware differences between T360 units can affect which messages are available and how certain events are reported.
- Hardware revisions and regional firmware builds may change default transport (UDP vs TCP) or APN auto-detection behavior.
- Manufacturer settings such as auto APN and FOTA can simplify provisioning but may require verification after deployment.
- Some features reported over the protocol, like immobilizer control or voice monitor, depend on local regulatory and carrier capabilities.
- Always validate a representative sample of devices on your cellular provider and in the operational geography before large scale rollouts.
- Use the official manufacturer documentation to confirm device-specific commands and firmware release notes.

## Why Protocol Understanding Matters

Understanding how the T360 communicates with Plaspy helps ensure reliable setup, faster troubleshooting and predictable long term operation. Clear knowledge of the transport and message expectations reduces deployment friction and improves data quality in Plaspy.

- Speeds up provisioning by aligning device APN and server settings with Plaspy requirements.
- Helps diagnose connectivity issues when devices fail to appear in Plaspy dashboards.
- Enables correct interpretation of telemetry fields such as accelerometer events and ignition status.
- Supports planning for feature usage like immobilization, geo-fence alerts and scheduled reporting.
- Reduces time to resolution for firmware or configuration mismatches by focusing investigation on transport and firmware differences.

## Why Use Plaspy with This Protocol

Using the Ulbotech T360 with Plaspy delivers a compact OBD-II solution for organizations that need rapid installation, continuous vehicle visibility and event driven alerts. The T360’s OBD form factor, internal sensors and FOTA support make it suitable for fleet deployments, rental services and anti-theft workflows where quick install and centralized management are priorities.

Plaspy accepts T360 reports via the shared Plaspy endpoint and port, automatically detects the tracker protocol, and converts raw device messages into actionable location and event data for dashboards and alerts. To learn more about Plaspy and how it can integrate with devices like the T360 visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time; verify the latest device specific information with the manufacturer at http://www.ulbotech.com/ for the most current guidance.
