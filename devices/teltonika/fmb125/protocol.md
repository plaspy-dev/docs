---
slug: /teltonika/fmb125/protocol
id: fmb125-protocol
sidebar_label: Protocol
title: Teltonika - FMB125 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Teltonika FMB125 and how it communicates with Plaspy
keywords:
  - Teltonika FMB125
  - Teltonika FMB125 protocol
  - FMB125 GPS tracker
  - FMB125 communication
  - FMB125 Plaspy compatibility
  - Teltonika GPS protocol
  - vehicle tracking FMB125
  - FMB125 telemetry
  - FMB125 serial integration
  - Teltonika tracker Plaspy
---

# Teltonika - FMB125 Protocol

This page describes the public protocol context for using the Teltonika FMB125 tracker with the Plaspy platform. It focuses on how the device communicates in general terms, which connection settings are used to reach Plaspy, and which telemetry and interface types the tracker typically reports. The FMB125 is a compact professional tracker with dual SIM 2G cellular, RS232 and RS485 serial interfaces, impulse input, onboard RFID and 1 wire support, and an option to connect an Iridium Edge satellite modem via RS232. The device is listed as End of Life and newer 4G and LTE replacements are available for new long term deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, regional product variant, and manufacturer implementation, so configuration and reporting characteristics may differ between units and over time.

## Protocol Overview

The device protocol is the set of rules the FMB125 uses to send GNSS, telemetry, and input events to a remote server such as Plaspy. In practical terms the protocol enables the tracker to identify itself to the platform, transmit position and sensor data, and carry event information that fleet managers can use for monitoring and reporting.

- Transports GNSS position updates and vehicle telemetry for live tracking and historical reporting in Plaspy.
- Sends impulse input events and serial sensor telemetry so fuel, temperature, and other metrics can be associated with locations.
- Carries driver and asset identification events from onboard RFID and 1 wire interfaces into Plaspy workflows.
- Communicates device health and basic status information that Plaspy can map to alerts and diagnostics.
- Allows remote configuration and firmware management workflows to be coordinated alongside telemetry reporting.

## How Plaspy Detects the Protocol

Plaspy receives tracker connections on a shared server endpoint and automatically determines the tracker protocol when a properly configured device connects. This means users usually do not need to manually select a protocol inside Plaspy as long as the device is pointed to the correct Plaspy endpoint and transport.

- Plaspy server domain for tracker reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the platform listens on port 8888.
- Devices may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- All devices that report to Plaspy use the same port, so a single endpoint simplifies device configuration.
- When a device opens a session to the Plaspy endpoint, the platform automatically detects the tracker protocol and maps incoming telemetry for processing.

## Transport and Connection Context

Connection context covers how the FMB125 is instructed to reach Plaspy and which transport options are available. The tracker supports cellular reporting and can accept serially attached satellite modems for operations beyond terrestrial coverage. Transport choice and network conditions affect how frequently data is delivered and how the device maintains connectivity with Plaspy.

- The FMB125 can be pointed to the Plaspy endpoint using either UDP or TCP on port 8888 depending on device configuration and carrier behavior.
- Devices may be configured to use the domain name d.plaspy.com or the Plaspy server IP 54.85.159.138 when reporting.
- All Plaspy supported devices share the same listening port 8888 which simplifies provisioning and fleet scale deployments.
- For deployments that use the Iridium Edge satellite modem via RS232, telemetry routed through the tracker is expected to arrive at the Plaspy endpoint when the device forwards networked reports.
- Network characteristics such as 2G coverage, dual SIM failover, and satellite link behavior influence how the tracker maintains sessions to Plaspy.

## Protocol Compatibility Notes

- Firmware variations between Teltonika releases can change available features, telemetry fields, and event formats; check firmware notes for device specific behavior.
- Hardware revisions and regional product variants may affect supported cellular bands and accessory interfaces.
- The FMB125 is listed as End of Life; consider Teltonika FMC125 or FMM125 for new projects where 4G or LTE M NB IoT is preferred.
- Transport selection between UDP and TCP can impact delivery characteristics and should be tested in your operational network.
- Serial integrations via RS232 or RS485, and the use of impulse inputs or RFID, require validation of sensor mapping and event interpretation with Plaspy during setup.
- Always validate compatibility and mapping of custom telemetry against the latest Teltonika documentation and your Plaspy account settings.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure a reliable setup, accurate telemetry mapping, and efficient troubleshooting when devices report to Plaspy. Knowing the limits and variability of protocol behavior makes it easier to interpret data, plan firmware updates, and integrate auxiliary sensors.

- Faster troubleshooting when position or telemetry fields do not appear as expected in Plaspy.
- Correct transport configuration reduces connection failures and improves data timeliness.
- Clear expectations for how impulse inputs, serial telemetry, and RFID events are translated into Plaspy data models.
- Better planning for firmware updates and hardware replacement cycles especially for EOL devices.
- Informed decisions about replacement devices and network strategies when broader coverage or newer cellular standards are needed.

## Why Use Plaspy with This Protocol

Using the FMB125 with Plaspy gives fleets an integrated path to collect GNSS locations, serial sensor telemetry, impulse input events, and RFID identification in a single monitoring platform. Plaspy’s shared endpoint approach and automatic protocol detection reduce configuration overhead and let teams focus on operational use cases such as geofencing, fuel monitoring, and driver event correlation.

If you want to learn more about how Plaspy handles tracker integration and telemetry workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official technical resources for Teltonika products consult the manufacturer site at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
