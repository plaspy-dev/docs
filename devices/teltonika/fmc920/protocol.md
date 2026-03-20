---
slug: /teltonika/fmc920/protocol
id: fmc920-protocol
sidebar_label: Protocol
title: Teltonika - FMC920 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Teltonika FMC920 with Plaspy real time tracking and fleet workflows
keywords:
  - Teltonika FMC920 protocol
  - Teltonika FMC920 GPS protocol
  - FMC920 communication protocol
  - FMC920 tracking protocol
  - Teltonika tracker Plaspy
  - FMC920 Plaspy compatibility
  - vehicle tracking protocol FMC920
  - GPS tracker protocol Teltonika FMC920
  - FMC920 telemetry protocol
  - Teltonika FMC920 BLE sensors
---

# Teltonika - FMC920 Protocol

This page describes the public protocol context for integrating the Teltonika FMC920 with Plaspy. It focuses on how the device communicates with Plaspy in general, explains the role of the device reporting protocol, and highlights the practical connection settings you need to know when pointing FMC920 devices to the Plaspy service.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact message timing, available telemetry fields and behavior can vary by FMC920 firmware version, hardware revision and manufacturer implementation, so this page provides implementation neutral guidance and connection context rather than firmware specific command or packet details.

## Protocol Overview

The FMC920 communication protocol is the set of conventions the tracker uses to report GNSS positions, telemetry, sensor states and status events to a server such as Plaspy. In practical terms this protocol enables the tracker to identify itself to Plaspy, send usable location and sensor data, and support control or alerting workflows through the Plaspy platform.

- Enables the tracker to report position fixes, timestamps and basic telemetry to Plaspy so locations appear on live maps and in reports.
- Conveys device identity and status so Plaspy can associate messages with the correct fleet asset and display device metadata.
- Carries sensor and auxiliary data such as BLE sensor readings, battery state and digital input events for use in alerts and dashboards.
- Facilitates remote actions when supported by the device, for example immobilizer commands or configuration acknowledgements routed through Plaspy.
- Operates over standard network transports so the tracker can deliver data reliably from cellular networks to Plaspy servers.

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a single shared endpoint and port and automatically detects the reporting protocol when telemetry arrives. That means in most cases you do not need to select a specific protocol inside Plaspy as long as the FMC920 is configured to send data to the Plaspy server endpoint.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port for device reporting is 8888 and all devices in Plaspy use the same port.
- Devices may be configured to use either UDP or TCP on port 8888 depending on the tracker configuration and network considerations.
- When the FMC920 reports to the Plaspy endpoint Plaspy will recognize the device protocol automatically and route incoming telemetry into the platform.
- Typical setup requires only pointing the device to the Plaspy domain or IP and confirming transport settings on the tracker.

## Transport and Connection Context

Understanding the transport and basic connection parameters helps ensure the FMC920 can reach Plaspy reliably over cellular networks. Connection options vary by deployment and cellular network quality, and the FMC920 may be set to use different transports according to operational needs.

- The device may be configured using UDP or TCP on port 8888 based on device support and installer preference.
- Point the tracker to the Plaspy endpoint by using d.plaspy.com or the server IP 54.85.159.138 if DNS is not available in the environment.
- Plaspy uses the same port for all supported devices which simplifies configuration when deploying multiple tracker models.
- Ensure APN and cellular connectivity are provisioned correctly so the tracker can establish outbound connections to Plaspy.
- Where network firewalls are present, allow outbound traffic to the Plaspy endpoint to ensure reports reach the server.

## Protocol Compatibility Notes

- Firmware revisions may add, change or remove telemetry fields and behavior; confirm which features are available on your FMC920 firmware.
- Hardware revisions and regional variants can affect radio bands and supported cellular technologies which in turn influence connectivity behavior.
- Manufacturer configuration options can change transport defaults between UDP and TCP so verify the transport mode on each device.
- Bluetooth LE sensor behavior and supported sensor types depend on both FMC920 firmware and the specific BLE peripherals used.
- Plaspy automatically detects the protocol but correct device configuration pointing to d.plaspy.com or 54.85.159.138 on port 8888 is required for discovery.
- Always validate compatibility and any security related features such as certificates or firmware signing against Teltonika documentation before large scale deployments.

## Why Protocol Understanding Matters

Knowing how the FMC920 communicates with Plaspy helps installers and fleet managers set up devices correctly, troubleshoot delivery issues, and plan for maintenance and firmware upgrades. A clear understanding reduces downtime and ensures telemetry is reliable for operational decision making.

- Accurate configuration reduces failed reports and speeds up device onboarding into Plaspy.
- Understanding transport choice helps diagnose connectivity problems in cellular networks or when firewalls restrict traffic.
- Awareness of firmware differences guides decisions on feature availability for immobilization, BLE sensors and telemetry fields.
- Proper device identity handling ensures telemetry is attributed to the correct vehicle or asset in Plaspy.
- Knowing where to check official manufacturer resources helps resolve edge cases and confirm security or certificate requirements.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC920 with Plaspy gives organizations compact hardware that integrates into a single fleet management platform for real time visibility, alerts and historical reporting. The FMC920’s small form factor, BLE sensor support and immobilizer capability make it suitable for discreet installations where both location and condition monitoring are important.

To learn more about Plaspy and how it works with trackers like the FMC920 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior and manufacturer guidance verify information with the official Teltonika resources at https://www.teltonika-gps.com/ since device capabilities and firmware may change over time.
