---
slug: /arusnavi/integral_4/protocol
id: integral_4-protocol
sidebar_label: Protocol
title: Arusnavi - Integral 4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and Plaspy compatibility information for the Arusnavi Integral 4 GPS tracker
keywords:
  - Arusnavi Integral 4 protocol
  - Arusnavi Integral 4 GPS protocol
  - Integral 4 Plaspy compatibility
  - Arusnavi tracking protocol
  - Integral 4 communication protocol
  - GPS tracker Plaspy integration
  - Arusnavi fleet telemetry protocol
  - Integral 4 device reporting
  - Plaspy tracker protocol
  - vehicle tracking Integral 4
---

# Arusnavi - Integral 4 Protocol

This page describes the public protocol context for using the Arusnavi Integral 4 tracker with Plaspy. It focuses on the communication role the device plays when reporting GNSS position, telemetry, sensor readings and event logs to Plaspy monitoring servers without exposing private or firmware specific internals.

Integral 4 devices can be pointed to Plaspy using shared connection settings and Plaspy will automatically detect the tracker protocol. Plaspy accepts device reports at d.plaspy.com and at the public server IP 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888, and all devices in Plaspy use the same port. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so confirm device specific details where needed.

## Protocol Overview

The Integral 4 communication protocol enables the tracker to deliver position, vehicle bus data, discrete input events and black box logs to a central Plaspy server for monitoring, alerts and historical reporting. On the device side, the protocol coordinates periodic and event driven reporting, supports configurable server targets, and carries sensor and diagnostic payloads that Plaspy maps into dashboards and analytics.

- Transports GNSS position and timestamped telemetry for real time tracking and route history.
- Carries vehicle bus and sensor data such as CAN, RS-485 readings and BLE sensor values for diagnostics and telemetry.
- Supports configurable server settings so the device can report to Plaspy endpoints and failover servers when available.
- Preserves offline records in local black box storage and forwards stored logs when connectivity returns.
- Works with common industry protocol variants supported by Integral 4 to allow interoperability with monitoring platforms.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port, and performs automatic protocol identification so most users do not need to select a protocol manually in the platform. When Integral 4 is configured to report to the Plaspy endpoint, the platform will detect and normalize incoming data to the Plaspy data model.

- Devices report to d.plaspy.com or to 54.85.159.138 using the universal port 8888 used by all Plaspy supported devices.
- The device may use UDP or TCP on port 8888 depending on device configuration and network conditions.
- Plaspy automatically detects the tracker protocol and applies the appropriate parser and mapping rules.
- In typical setups the tracker firmware is configured with the Plaspy server address and no manual protocol selection is required inside Plaspy.
- If a device uses a manufacturer specific protocol variant, Plaspy detection handles common variants provided the device reports to the shared endpoint.

## Transport and Connection Context

Integral 4 supports cellular reporting and configurable server settings that determine how telemetry is delivered to Plaspy. The connection layer is limited to standard network transports and does not require custom ports for different models when used with Plaspy.

- Devices may be configured to use UDP or TCP on port 8888 when sending data to Plaspy.
- The primary Plaspy server endpoint is d.plaspy.com and the public server IP is 54.85.159.138.
- All Plaspy devices use the same port so firewall and network rules can be standardized in fleet environments.
- Device firmware allows target server configuration so you can point one or two monitoring servers as supported by the device.
- Transport selection can affect latency and retransmission behavior but does not change the public reporting endpoint requirements for Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can introduce behavioral changes in reporting cadence, optional fields and feature support; always check device firmware release notes.
- Hardware variants and optional interface configurations such as CAN or RS-485 availability may affect what telemetry is sent.
- Integral 4 supports several protocol variants and configurable server targets; ensure the device is set to report to Plaspy endpoints.
- Transport choice between UDP and TCP is a configuration option that may be limited by carrier or local network constraints.
- Manufacturer side settings such as dual SIM behavior, power management and black box forwarding can influence data continuity.
- Validate compatibility and any vendor specific protocol extensions against the official Arusnavi documentation before large scale deployment.

## Why Protocol Understanding Matters

A clear understanding of the device reporting protocol helps ensure reliable integration, faster troubleshooting and better long term operational outcomes when using Integral 4 with Plaspy. Knowing what the tracker will send and how Plaspy expects to receive it reduces configuration errors and supports consistent monitoring behavior.

- Accelerates setup by ensuring server address, transport and SIM configuration match Plaspy requirements.
- Simplifies troubleshooting by narrowing whether issues stem from network, transport selection, firmware or mapping rules.
- Improves data quality by aligning device telemetry options with Plaspy data fields and alert logic.
- Helps plan for intermittent connectivity using black box logging and upload rules.
- Enables predictable integration of vehicle bus data, BLE sensor feeds and discrete I O events into Plaspy workflows.

## Why Use Plaspy with This Protocol

Using Arusnavi Integral 4 with Plaspy gives organizations a practical way to centralize real time tracking, telemetry aggregation and event driven alerts for fleets and mobile assets. Integral 4’s multi GNSS capability, dual SIM cellular link, black box storage and wide interface support make it well suited for scenarios where continuous visibility and telemetry fidelity are important, and Plaspy provides the platform to ingest, normalize and present that data.

To learn more about how Plaspy works with supported GPS trackers and to explore integration options visit https://www.plaspy.com. Protocol support and device firmware behavior can change over time; for the latest device specific protocol documentation and firmware notes consult the manufacturer at https://www.arusnavi.ru.
