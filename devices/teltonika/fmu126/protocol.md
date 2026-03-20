---
slug: /teltonika/fmu126/protocol
id: fmu126-protocol
sidebar_label: Protocol
title: Teltonika - FMU126 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the Teltonika FMU126 with Plaspy servers and connection guidance
keywords:
  - Teltonika FMU126 protocol
  - Teltonika FMU126 GPS protocol
  - FMU126 communication protocol
  - FMU126 tracker Plaspy compatibility
  - Teltonika GPS protocol
  - vehicle tracking FMU126
  - fleet management Teltonika FMU126
  - Plaspy tracker integration
  - Teltonika FMU126 connectivity
  - FMU126 protocol guide
---

# Teltonika - FMU126 Protocol

This page covers the public protocol context for using the Teltonika FMU126 tracker with Plaspy. It summarizes how the FMU126's connectivity and on device features such as 3G with 2G fallback, GNSS and Bluetooth, RS232 interfaces, BLE sensor support, CAN adapters, internal antennas, and native power outputs relate to sending tracking and telemetry data to Plaspy for monitoring and fleet workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The Plaspy server endpoint is d.plaspy.com with public IP 54.85.159.138 and the platform accepts device reports on port 8888. Devices may be configured to use UDP or TCP on port 8888 and Plaspy uses the same port for all supported devices. Exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so device behavior should be validated against official manufacturer documentation.

## Protocol Overview

The FMU126 device protocol governs how the tracker packages GNSS position, cellular context, sensor telemetry, and peripheral inputs for delivery to a remote server such as Plaspy. The protocol used by the device determines which fields are sent, how device identity and status are communicated, and what management features are available remotely.

- Enables delivery of position and movement data from the FMU126 to Plaspy for real time tracking and historical analysis
- Carries sensor and peripheral data such as BLE sensor readings, CAN data, and RS232 inputs that Plaspy can map to telematics fields
- Conveys device identity and status information so Plaspy can attribute messages to the correct asset
- Supports the device manufacturer features exposed for remote configuration and reporting as implemented by the device firmware
- Provides the transportable payload that Plaspy ingests and translates into usable telemetry for dashboards and alerts

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a single shared endpoint and port and automatically detects the tracker protocol when a properly configured device communicates with the server. This means that in most deployments the user does not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Devices send data to d.plaspy.com or directly to 54.85.159.138 and Plaspy receives those reports on port 8888
- Plaspy automatically identifies the reporting format and maps incoming fields to platform objects when the device data matches supported patterns
- Because Plaspy uses the same port for all supported devices, deployment and firewall rules are simplified
- If a device is configured to use UDP or TCP, Plaspy accepts both transports on port 8888
- In the uncommon case of non standard device behavior, reviewing device configuration and manufacturer guidance helps align reporting with Plaspy expectations

## Transport and Connection Context

Transport choices and network configuration affect how the FMU126 reaches the Plaspy server. The device may be set to use either UDP or TCP depending on the installed firmware and desired reporting behavior, and the reporting destination can be provided as a domain name or as the Plaspy server IP.

- The Plaspy endpoint for reporting is d.plaspy.com and the public server IP is 54.85.159.138
- Devices may be configured to use UDP or TCP on port 8888 to send data to Plaspy
- Plaspy accepts device traffic on port 8888 for all supported devices so a single outbound rule is typically sufficient
- When configuring the FMU126, ensure the device APN and mobile data path allow outbound connections to the Plaspy endpoint
- Network elements such as NAT, carrier firewalls, and enterprise proxies can affect transport behavior and should permit traffic to the Plaspy server on port 8888

## Protocol Compatibility Notes

- Firmware revisions can change which fields are reported and how often the FMU126 sends data
- Hardware revisions and optional accessories such as CAN adapters or external sensors may affect available telemetry and message formats
- Transport selection between UDP and TCP is a device configuration choice and can affect delivery semantics
- Manufacturer configuration options such as RS232 modes influence how external devices and readers are represented in reports
- Always validate key behaviors such as GNSS reporting frequency, BLE sensor handling, and CAN mappings on a test unit before wide deployment
- Consult Teltonika documentation for details on firmware specific features that may change how the FMU126 communicates

## Why Protocol Understanding Matters

Understanding the FMU126 communication protocol helps ensure a smooth setup, accurate data mapping, and predictable operation when the device reports to Plaspy. Clear knowledge of what the device sends and when it sends it reduces troubleshooting time and helps match device capabilities to operational requirements.

- Helps confirm the FMU126 is configured to report the right telemetry and sensors to Plaspy
- Speeds up diagnosis of connectivity issues related to transport, DNS, or carrier restrictions
- Improves mapping of peripheral data such as BLE sensor values and CAN metrics into Plaspy dashboards
- Assists in planning for firmware updates that may alter reporting behavior
- Supports consistent behavior across a mixed fleet when devices use the same Plaspy endpoint and port

## Why Use Plaspy with This Protocol

Using the Teltonika FMU126 with Plaspy provides organizations with a straightforward path to ingesting vehicle position, sensor, and peripheral data into a single fleet management platform. The FMU126’s support for GNSS, cellular redundancy, BLE sensors, CAN, and RS232 peripherals makes it suitable for a range of telematics use cases, and Plaspy’s automatic protocol detection and common port model simplify large scale rollouts.

To learn more about integrating devices and reviewing platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
