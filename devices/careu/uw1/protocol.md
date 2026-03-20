---
slug: /careu/uw1/protocol
id: uw1-protocol
sidebar_label: Protocol
title: CAREU - UW1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for CAREU UW1 GPS tracker and Plaspy compatibility with connection and transport context
keywords:
  - CAREU UW1
  - CAREU UW1 protocol
  - CAREU UW1 GPS protocol
  - Plaspy compatible UW1
  - UW1 tracker protocol
  - vehicle tracking CAREU
  - UW1 communication
  - fleet tracking UW1
  - CAREU protocol Plaspy
  - GPS tracker UW1
---

# CAREU - UW1 Protocol

This page describes the public protocol context for using the CAREU UW1 tracker with Plaspy. It explains how the UW1 communicates with Plaspy in general terms, what connection settings are used to reach the Plaspy platform, and which aspects of device behavior are most relevant when integrating UW1 devices into operational tracking workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available reporting features can vary by UW1 firmware version, hardware revision, and manufacturer implementation, so this page focuses on stable, public facing communication concepts rather than firmware internals.

## Protocol Overview

The UW1 tracker uses a device reporting protocol to relay GNSS positions, sensor telemetry, and alarm events to Plaspy. That protocol is the means by which the device identifies itself to the platform, reports periodic or event driven updates, and delivers the payload data Plaspy uses to populate live maps, reports, and alerts.

- The protocol enables position reporting, timestamps, and basic telemetry so Plaspy can show live location and historical tracks.
- It carries alarm and event flags such as geofence violations, harsh driving events, and power loss that Plaspy transforms into alerts and workflows.
- Telemetry channels like 1 Wire sensors, accelerometer events, RS‑232 accessory data, and optional CAN bus values are delivered through the tracker protocol so Plaspy can correlate sensor data with location.
- The protocol supports buffered uploads from the UW1 storage so long offline logs are delivered to Plaspy when connectivity is restored.
- Manufacturer configuration and firmware determine which telemetry fields are present and how often the device reports.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and automatically recognizes the tracker protocol when properly configured devices send their data. In most cases you do not need to manually select a protocol in Plaspy when the UW1 is configured to report to the Plaspy address.

- Plaspy listens on a single supported server endpoint d.plaspy.com and the public server address 54.85.159.138.
- The platform receives device connections on port 8888 and uses the same port for all supported devices.
- Devices may be configured to use either UDP or TCP transport to reach Plaspy depending on device settings and network conditions.
- When a correctly configured UW1 reports to the Plaspy endpoint, Plaspy automatically associates incoming data with the appropriate device entry.
- If a device does not appear in Plaspy, verify the reporting address, transport selection, and device identifier fields in the UW1 configuration.

## Transport and Connection Context

Connection context covers how the UW1 reaches Plaspy over cellular networks and which transport options the device can use. The UW1 supports multiple cellular generations and can report over either UDP or TCP to the Plaspy endpoint on the shared port.

- The UW1 may be configured to send data to d.plaspy.com or directly to the IP address 54.85.159.138.
- All Plaspy devices use port 8888 for reporting, and Plaspy expects device traffic on that port.
- The device can use UDP or TCP transport on port 8888 depending on the UW1 firmware and device configuration.
- Select the transport in the UW1 configuration according to network reliability and any operator recommendations for your deployment.
- For large buffered uploads after offline periods, confirm the UW1 transport and session parameters to ensure successful transfer to Plaspy.

## Protocol Compatibility Notes

- Firmware versions may add or remove fields and behaviors. Confirm which reporting options are enabled on your UW1 firmware level.
- Hardware revisions and optional interfaces such as CAN bus or additional accelerometer options can change which telemetry channels are available.
- Manufacturer side configuration menus may offer multiple transport and server address options such as DNS or IP. Point devices to d.plaspy.com or 54.85.159.138 and use port 8888.
- Some deployment scenarios may prefer TCP for reliable session delivery and UDP for lower overhead; verify the UW1 setting for your use case.
- Device identifiers and IMEI reporting must match the device entry in Plaspy for automatic association.
- Always validate compatibility and configuration steps against the official manufacturer documentation when performing device setup or firmware upgrades.

## Why Protocol Understanding Matters

Knowing the basics of the UW1 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy. A clear view of what the tracker sends and how Plaspy receives it prevents configuration mismatches and reduces integration time.

- It speeds initial setup by ensuring devices point to d.plaspy.com or 54.85.159.138 on port 8888 using a supported transport.
- It helps identify whether missing data is caused by transport selection, server address, or firmware differences.
- It clarifies expectations around which telemetry channels are available to Plaspy from the UW1 hardware.
- It aids planning for offline log retrieval and bulk uploads after connectivity is restored.
- It enables more efficient coordination with network operators and integrators when diagnosing connectivity or reporting issues.

## Why Use Plaspy with This Protocol

Pairing the CAREU UW1 with Plaspy provides a robust solution for organizations that require resilient location visibility and operational telemetry. The UW1’s rugged IP67 design, Cat‑1 LTE connectivity with fallback, multi GNSS support, long offline logging capacity, and flexible I O options make it well suited for fleets, construction assets, and high value equipment. When the UW1 reports to Plaspy, its position, sensor, and alarm data become actionable insights in live maps, reports, and alerting workflows.

To learn more about how Plaspy works with devices like the CAREU UW1 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions verify the official manufacturer documentation at https://www.systech-iot.com/ since protocol support and firmware behavior can change over time.
