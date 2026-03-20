---
slug: /teltonika/fmb001/protocol
id: fmb001-protocol
sidebar_label: Protocol
title: Teltonika - FMB001 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB001 and how it communicates with Plaspy
keywords:
  - Teltonika FMB001 protocol
  - Teltonika FMB001 GPS protocol
  - Teltonika FMB001 communication
  - FMB001 Plaspy compatibility
  - GPS tracker protocol
  - OBD II tracker protocol
  - Bluetooth LE tracker integration
  - vehicle tracking protocol
  - fleet management tracker
  - Teltonika Plaspy integration
---

# Teltonika - FMB001 Protocol

This page describes the public protocol context for using the Teltonika FMB001 with Plaspy. It focuses on how the device communicates at a high level rather than implementation details. The FMB001 is a compact OBD II form factor tracker that supplies GNSS location plus OBD telemetry such as true odometer, fuel level, mileage, and engine RPM, and it can forward Bluetooth LE sensor data for temperature, humidity, magnet detection, and movement.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Devices compatible with Plaspy should be configured to report to the Plaspy endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888. The FMB001 may be configured to use either UDP or TCP on port 8888 depending on the device configuration and network environment. Exact protocol behavior can vary by firmware revision, hardware variant, and manufacturer implementation, so verify device specifics when needed.

## Protocol Overview

The communication protocol is the set of rules the FMB001 uses to report telemetry and sensor data to a remote server such as Plaspy. In public terms, the protocol defines how the device sends location, OBD readings, and Bluetooth LE sensor updates so that Plaspy can ingest them for real time tracking and historical reporting.

- Enables delivery of GNSS position and OBD telemetry from the FMB001 to Plaspy for live tracking and analytics
- Carries Bluetooth LE sensor data collected by the device so environmental and movement events are available in Plaspy
- Provides the data context needed for Plaspy to associate vehicle identifiers, trip data, and telemetry metrics with the correct asset
- Supports the transport of periodic reports and event driven updates according to device configuration and firmware behavior
- Works alongside Teltonika device management features such as FOTA WEB and Teltonika Configurator for firmware and configuration workflows

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker connections and automatically detects the reporting protocol used by supported devices. This reduces manual setup inside the platform when a tracker is correctly pointed at the Plaspy endpoint.

- Configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888
- Devices can use UDP or TCP on port 8888 as supported by the tracker and network
- Plaspy uses the same port for all supported devices which simplifies deployment and firewall configuration
- When a device reports to the Plaspy endpoint, the platform automatically identifies the device protocol so manual protocol selection in Plaspy is usually not required
- After successful reporting, Plaspy associates incoming telemetry with the registered asset for tracking and history

## Transport and Connection Context

Transport and connection context describe how the FMB001 reaches the Plaspy server on the network. At a high level, the tracker must be able to make outbound connections to the Plaspy endpoint using the transport supported by the device and permitted by the network.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and local network policy
- Plaspy accepts connections at the domain d.plaspy.com and the public IP 54.85.159.138 on port 8888
- All devices in Plaspy use the same port 8888 which simplifies network and firewall rules for fleets
- Choose the transport type that matches the device configuration and any carrier or firewall constraints
- Verify that the vehicle or carrier network allows outbound traffic to the Plaspy endpoint and port to ensure reliable reporting

## Protocol Compatibility Notes

- Firmware revisions can change what telemetry fields are available or how certain OBD parameters are reported
- Hardware variants and regional order codes may affect cellular banding and accessory support such as BLE sensors
- End of Life status for a model can affect firmware updates and long term compatibility; check manufacturer notices
- Transport selection UDP versus TCP may be limited by carrier or device firmware and should be chosen accordingly
- Manufacturer configuration tools such as Teltonika Configurator and FOTA WEB interact with device settings and can change reporting behavior
- Always validate device compatibility against the latest Teltonika documentation and your Plaspy deployment requirements

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure correct setup, reliable telemetry ingestion, and effective troubleshooting when the FMB001 is used with Plaspy. Awareness of what data the tracker can and cannot send helps set expectations and design operational workflows.

- Ensures you configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888 using the preferred transport
- Helps confirm which OBD and BLE telemetry fields will be available in Plaspy for analytics and alerts
- Aids in diagnosing connectivity issues related to transport, port blocking, or carrier constraints
- Clarifies how firmware or configuration changes might affect reporting frequency and data availability
- Supports planning for device lifecycle management including firmware updates and replacement for EOL models

## Why Use Plaspy with This Protocol

Using the Teltonika FMB001 with Plaspy gives organizations a straightforward path to combine vehicle GNSS location, authentic OBD telemetry, and Bluetooth LE sensor inputs into a single operational view. The plug and play OBD form factor accelerates deployments while the device telemetry can feed maintenance schedules, fuel monitoring, and movement alerts in Plaspy.

To learn more about how Plaspy works with devices like the FMB001, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information with Teltonika at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
