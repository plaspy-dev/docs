---
slug: /navtelekom/signal_s_2117/protocol
id: signal_s_2117-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Navtelekom СИГНАЛ S-2117 integration with Plaspy using shared connection settings and automatic detection
keywords:
  - Navtelekom СИГНАЛ S-2117 protocol
  - Navtelekom GPS tracker protocol
  - СИГНАЛ S-2117 Plaspy compatibility
  - fleet tracking Navtelekom
  - GLONASS GNSS tracker protocol
  - RS-485 fuel sensor tracker
  - 1-Wire temperature tracker
  - vehicle telemetry communication
  - tracker connection settings
  - tracker protocol detection
---

# Navtelekom - СИГНАЛ S-2117 Protocol

This page describes the public protocol context for using the Navtelekom СИГНАЛ S-2117 tracker with Plaspy. It focuses on how the device communicates in general terms, what connection settings are used to reach Plaspy, and what aspects of the tracker reporting are relevant when integrating the S-2117 into a fleet management deployment. The S-2117 is a GNSS tracking device with GLONASS positioning, GSM connectivity, RS-485 fuel sensor support, 1-Wire temperature and ID inputs, alarm and tamper monitoring, two-way loud voice, and remote control outputs.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. In practice this means the tracker can be configured to send data to Plaspy using the same endpoint and port used by other devices. Exact protocol behavior and reported fields can vary by firmware version, hardware revision, and manufacturer configuration, so this page offers high level protocol context rather than firmware specific instructions.

## Protocol Overview

The protocol used by the СИГНАЛ S-2117 governs how the device reports position, sensor telemetry, and event signals to a remote server. In the context of Plaspy, the protocol carries GNSS fixes, alarm and tamper events, fuel and temperature telemetry, and any remote control acknowledgements or voice session indicators that the tracker forwards. The protocol enables Plaspy to map device messages into real time location updates, alerts, and historical records.

- Allows the tracker to send periodic and event driven location updates to Plaspy for live tracking and route history.
- Conveys telemetry from RS-485 fuel sensors and 1-Wire temperature sensors so Plaspy can display fuel levels and temperature trends.
- Transmits alarm, tamper, and panic events so security and alerting workflows can be triggered in Plaspy.
- Supports remote control and voice related messages that Plaspy can surface as actionable controls or event markers.
- Identifies the device and its reported channels so Plaspy can associate messages with the correct vehicle and sensor configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a shared endpoint and automatically determines the appropriate tracker protocol for most supported devices. If the S-2117 is configured to report to the Plaspy endpoint, the platform will map incoming messages to the corresponding device record without requiring manual selection of a protocol inside Plaspy in most cases. This automated detection streamlines setup for mixed fleets.

- Plaspy uses a single shared server endpoint and port for device reporting to simplify device configuration.
- Users typically point the tracker to the Plaspy endpoint and do not need to choose a protocol manually in the Plaspy UI when reporting is configured correctly.
- Plaspy automatically detects the tracker protocol and associates incoming messages with the correct device type for processing.
- Consistent endpoint and port usage reduces configuration errors when deploying many devices across a fleet.
- If a device is not recognized, reviewing device configuration and manufacturer settings usually resolves reporting issues.

## Transport and Connection Context

Connection context covers how the tracker sends its protocol frames to Plaspy rather than the internal packet contents. The СИГНАЛ S-2117 can be configured to use standard IP based transport to deliver its reports to Plaspy. For reliable delivery, make sure the tracker’s server and transport settings match the Plaspy endpoint and transport options supported by the device.

- Plaspy accepts device reports at the domain d.plaspy.com and the IP address 54.85.159.138.
- The shared Plaspy port for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration.
- Use the transport type supported and tested for your fleet; some deployments prefer UDP for lower latency while others prefer TCP for persistent sessions.
- Verify the tracker’s server, transport, and APN settings so messages are delivered to the Plaspy endpoint correctly.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change which fields and events the tracker reports; always confirm the firmware edition in use.
- Hardware revisions or optional interfaces on the S-2117 may enable or disable RS-485 or 1-Wire channels, affecting telemetry availability.
- Transport selection (UDP versus TCP) influences how the device establishes and maintains connections to Plaspy; ensure the chosen transport is supported by the tracker firmware.
- Discontinued models can remain compatible but may not receive new firmware; validate existing behavior before rolling the device into new deployments.
- Manufacturer configuration tools and official manuals are the authoritative source for device-specific settings and recommended connection parameters.
- When integrating sensors such as fuel meters or temperature probes, validate sensor mapping and scaling to ensure accurate telemetry in Plaspy.

## Why Protocol Understanding Matters

A basic understanding of the communication protocol helps ensure devices report reliably, sensors map correctly in Plaspy, and that alerts and controls behave as expected. While Plaspy handles protocol detection and parsing, knowing the transport and reporting characteristics of the S-2117 reduces setup time and simplifies troubleshooting.

- Ensures correct server, transport, and APN settings are applied so device messages reach Plaspy.
- Helps confirm which telemetry channels the device will actually report based on firmware and hardware options.
- Simplifies troubleshooting of missing data, such as fuel readings or temperature logs, by narrowing root causes to transport, configuration, or sensor wiring.
- Aids in planning firmware updates and rollouts when behavior changes are expected with new releases.
- Allows integrators to document expected event types and telemetry for downstream reporting and alert rules in Plaspy.

## Why Use Plaspy with This Protocol

Using the СИГНАЛ S-2117 with Plaspy provides a practical way to centralize vehicle location, fuel telemetry, temperature monitoring, and security events for fleet operations. Plaspy translates the device’s streamed GNSS, sensor, and alarm data into operational dashboards, historical reports, and alerting workflows that fleet managers can act upon.

Plaspy’s shared endpoint model and automatic protocol detection reduce the configuration burden across mixed fleets and help bring devices like the S-2117 online more quickly. To learn more about Plaspy and how it handles device reporting and fleet visibility, please visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer configuration guidance, verify current information on the official Navtelekom site at https://www.navtelecom.ru/.
