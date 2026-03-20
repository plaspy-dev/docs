---
slug: /teltonika/fmm800/protocol
id: fmm800-protocol
sidebar_label: Protocol
title: Teltonika - FMM800 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Teltonika FMM800 GPS tracker with Plaspy server settings and compatibility notes
keywords:
  - Teltonika FMM800 protocol
  - Teltonika FMM800 GPS protocol
  - FMM800 Plaspy compatibility
  - FMM800 communication protocol
  - Teltonika GPS tracker protocol
  - FMM800 OBD II tracker
  - vehicle tracking protocol
  - Plaspy device compatibility
  - fleet tracking protocol
  - GPS tracker communication
---

# Teltonika - FMM800 Protocol

This page describes the public protocol context for using the Teltonika FMM800 GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, what connection settings are used, and practical considerations for integrating this plug and play OBD II tracker into a centralized telematics workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by FMM800 firmware version, hardware revision, and manufacturer implementation, so this guide stays at a public and non sensitive level while highlighting the key communication points for reliable integration.

## Protocol Overview

The protocol used by the FMM800 governs how the tracker authenticates, reports location and telemetry, and delivers event data from vehicle OBD II and onboard sensors to Plaspy. In practical terms the protocol translates raw device measurements into identified, timestamped messages that Plaspy can ingest for maps, alerts, and reports.

- Enables the FMM800 to identify itself and send location, OBD II telemetry, accelerometer events, and BLE sensor data to Plaspy.
- Carries periodic position updates and event driven messages used for alerts such as harsh braking or ignition changes.
- Contains device identifiers and metadata that allow Plaspy to associate incoming reports with the correct vehicle record.
- Supports the delivery of auxiliary sensor values forwarded from BLE devices paired to the FMM800.
- Allows remote configuration and firmware actions initiated through Teltonika tools while Plaspy focuses on data ingestion and visualization.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and uses that incoming connection to identify the tracker protocol automatically. For most deployments a correctly configured FMM800 only needs to be pointed at Plaspy and the platform will recognize the device type and begin ingesting data without manual protocol selection.

- Plaspy listens on a single common port for all supported devices and automatically detects the tracker protocol from arriving traffic.
- Users normally configure the FMM800 to report to the Plaspy endpoint rather than selecting a protocol inside the Plaspy interface.
- Automatic detection reduces configuration steps and helps when deploying diverse device models at scale.
- If a device is not appearing as expected, check device reporting settings, firmware version, and that it is pointed to the Plaspy endpoint.

## Transport and Connection Context

Connection choice and DNS targets determine how the FMM800 reaches Plaspy. The device can be configured to use either UDP or TCP transport depending on device support and site requirements. Plaspy exposes a single reachable endpoint that devices should use when reporting.

- Devices may be configured to send data using UDP or TCP on port 8888 depending on device support and your preferred transport.
- FMM800 units can be pointed to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when configuring the reporting endpoint.
- Plaspy uses the same port for all supported devices which simplifies device provisioning and firewall rules.
- Using the correct transport and endpoint ensures messages arrive and can be automatically detected and processed by Plaspy.
- Ensure mobile operator or on vehicle network settings allow outbound traffic to the Plaspy endpoint and chosen transport.

## Protocol Compatibility Notes

- Firmware differences between Teltonika releases can change which telemetry fields are available or how certain events are reported.
- Hardware revisions or regional variants of the FMM800 may present slight differences in supported interfaces such as BLE or cellular band behavior.
- Manufacturer configuration tools such as Teltonika Configurator and FOTA WEB are the primary method to manage firmware and device settings that affect protocol behavior.
- Transport choice between UDP and TCP can affect message delivery characteristics and should match your reliability and latency needs.
- Validate compatibility and available telemetry against Teltonika documentation for the specific FMM800 firmware and hardware revision you intend to deploy.
- When integrating at scale, test a sample device with your network and Plaspy settings before bulk provisioning.

## Why Protocol Understanding Matters

A practical grasp of the tracker communication protocol helps ensure a reliable installation, simplifies troubleshooting, and improves long term operational stability when using Plaspy for fleet monitoring.

- Faster setup by confirming the device is pointed to the correct endpoint and transport before deployment.
- More effective troubleshooting when telemetry or events do not appear as expected in Plaspy.
- Better planning for network and firewall rules since all devices use the same Plaspy port and endpoint.
- Improved lifecycle management by aligning firmware updates and configuration templates with expected data formats.
- Clear expectations about which sensor and OBD II values will be available based on firmware and device configuration.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM800 with Plaspy provides a low friction path to vehicle visibility and operational monitoring. The plug and play OBD II form factor, combined with cellular options and BLE sensor support, delivers a strong telemetry stream that Plaspy can ingest for live tracking, alerts, and historical reporting. This pairing is useful for fleet managers, car sharing platforms, and logistics operators who require timely location data and vehicle diagnostics without complex installation.

To learn more about how Plaspy handles device integration and reporting, visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and hardware specifics verify information with the manufacturer at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
