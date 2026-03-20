---
slug: /istartek/vt110/protocol
id: vt110-protocol
sidebar_label: Protocol
title: iStartek - VT110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iStartek VT110 integration with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - iStartek VT110 protocol
  - iStartek VT110 GPS protocol
  - VT110 Plaspy compatibility
  - VT110 communication protocol
  - VT110 tracking protocol
  - iStartek GPS tracker
  - Plaspy tracker integration
  - vehicle tracking protocol
  - fleet tracking VT110
  - VT110 telemetry
---

# iStartek - VT110 Protocol

This page provides the public protocol context for using the iStartek VT110 GPS tracker with Plaspy. It summarizes how the device communicates with Plaspy for position reports, telemetry and event alarms without exposing sensitive implementation details. The information here is intended to help fleet managers, integrators and technical users understand the communication relationship between the VT110 and Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by VT110 firmware version, hardware revision and manufacturer implementation, so this page focuses on public, practical guidance rather than firmware internals.

## Protocol Overview

The VT110 communicates location, telemetry and event data to a backend endpoint where Plaspy ingests those messages for live mapping, alerts and history. The tracker reporting protocol defines how the device identifies itself, how regular and event-driven updates are sent, and how common telematics fields are conveyed so Plaspy can display and process the information.

- Enables periodic and event driven reporting of GNSS and GSM based location fixes to the server.
- Conveys key telemetry such as mileage, heading, ACC ignition state and alarm conditions for Plaspy to interpret.
- Allows configurable reporting modes on the device for time, distance, heading change and mileage thresholds.
- Supports alarm reporting for geo-fence, speeding, power loss, low battery, impact and towing events that integrate into Plaspy alerts.
- Permits remote control and accessory triggers to be initiated from the server side when supported by the device and configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and uses the incoming device traffic to identify the tracker protocol automatically. In most cases a properly configured VT110 will begin reporting to Plaspy without any manual protocol selection inside the platform.

- Plaspy’s public server endpoint is reachable at the domain d.plaspy.com and the server IP is 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy listens on port 8888 for tracker reports.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and installer preference.
- When a VT110 points to the Plaspy endpoint and transmits its reports, Plaspy will detect and interpret the protocol automatically.
- Users typically only need to ensure the device reporting settings match Plaspy’s endpoint and transport; manual protocol selection is not normally required.

## Transport and Connection Context

Connection context covers how the VT110 reaches Plaspy rather than low level packet contents. A correct transport setup is essential for reliable delivery of location and alarm data from the tracker to Plaspy.

- The VT110 may be configured to report using UDP or TCP on port 8888 to reach Plaspy.
- Devices can be set to point at d.plaspy.com or directly to 54.85.159.138 depending on provisioning choices.
- Plaspy uses the same port 8888 for all supported devices which simplifies device configuration across a mixed fleet.
- Choose UDP when low latency and minimal overhead is preferred and the network conditions are stable; choose TCP when reliable ordered delivery is needed and the device supports it.
- Ensure mobile network SIM settings such as APN are correct so the VT110 can establish GPRS connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences across VT110 production batches can change available reporting options and alarm behaviors; always confirm firmware level when troubleshooting.
- Hardware revisions and optional accessories (fuel sensors, RFID readers, relays) influence which telemetry fields are reported to Plaspy.
- Manufacturer side configuration menus may offer dual server entries or transport toggles; use the Plaspy endpoint settings as required for your deployment.
- Transport selection (UDP versus TCP) is device configurable and may affect message delivery characteristics under different network conditions.
- Plaspy’s automatic protocol detection reduces the need for manual protocol selection, but correct server endpoint and transport on the device are still required.
- Validate compatibility and feature availability against iStartek documentation and the device firmware release notes when planning deployments.

## Why Protocol Understanding Matters

Knowing the communication protocol fundamentals helps ensure a smooth integration of the VT110 with Plaspy and improves operational uptime, troubleshooting and data quality.

- Faster setup by confirming the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888 with the desired transport.
- Improved troubleshooting when you understand whether a device is sending periodic reports or only event driven messages.
- Better alarm handling by aligning device alarm configuration with Plaspy alert and notification workflows.
- Smarter network planning by choosing UDP or TCP based on coverage and reliability needs for your fleet.
- Easier firmware and accessory planning because you can correlate feature availability with protocol fields that Plaspy expects.

## Why Use Plaspy with This Protocol

Using the VT110 with Plaspy provides a compact, rugged telematics option for organizations that require consistent real time tracking, alarm management and operational oversight. Plaspy ingests GNSS and GSM derived position fixes, mileage and event reports from the VT110 to populate live maps, historical reports and alerting channels used by fleet operations and security teams.

To learn more about how Plaspy works with a wide range of trackers and to review platform capabilities, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer instructions, please verify current information on the official iStartek site https://istartek.com/
