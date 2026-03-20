---
slug: /neomatica/adm333/protocol
id: adm333-protocol
sidebar_label: Protocol
title: Neomatica - ADM333 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Neomatica ADM333 integration with Plaspy for GPS tracking and telemetry
keywords:
  - Neomatica ADM333 protocol
  - ADM333 GPS protocol
  - ADM333 Plaspy compatibility
  - Neomatica GPS tracker protocol
  - ADM333 communication protocol
  - ADM333 tracking protocol
  - Plaspy device integration
  - GPS tracker protocol guide
  - vehicle tracking ADM333
  - ADM333 telemetry integration
---

# Neomatica - ADM333 Protocol

This page provides a public protocol context for using the Neomatica ADM333 tracker with the Plaspy platform. It explains the role of the tracker reporting protocol in sending GNSS, sensor, and event data to Plaspy, and it draws on publicly available device features such as open protocol support, GPRS uplink, BLE sensors, and peripheral interfaces as relevant to integration and deployment planning.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary between firmware versions, hardware revisions, and manufacturer implementation, so this page focuses on public connection contexts and practical compatibility guidance rather than internal or proprietary packet formats.

## Protocol Overview

The ADM333 uses an open reporting protocol over a GPRS uplink to deliver GNSS positions, telemetry and peripheral sensor data to third party telematics servers and platforms such as Plaspy. In integration terms, the protocol defines how the tracker identifies itself, reports location and event data, and conveys sensor readings so that a platform can interpret and present useful information.

- Enables GNSS position reports and telemetry such as ignition status, accelerometer events, and BLE sensor readings.
- Carries event-driven alerts including movement alarms and jamming detection for real time monitoring.
- Provides an identifier and telemetry fields so Plaspy can associate incoming data with the correct device and fleet object.
- Supports buffered route storage for periods of intermittent connectivity so historical data can be uploaded when coverage returns.
- Allows remote configuration and firmware updates via supported transport and configuration channels as permitted by the device.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from devices on a shared endpoint and automatically determines the appropriate tracker protocol when the device reports to that endpoint. In most deployments the device owner does not need to select a specific protocol in Plaspy if the tracker is configured to send data to the Plaspy server.

- Configure the ADM333 to send data to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 on the shared port 8888.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection when traffic arrives at the endpoint.
- When a properly configured ADM333 reports, Plaspy associates the incoming stream with a device record and presents location and telemetry without manual protocol selection.
- If a device is routed through an intermediary telematics server, ensure that server forwards the ADM333 data to Plaspy using the shared Plaspy endpoint and port.
- Users can rely on Plaspy detection for standard open protocol integrations, while keeping device firmware and configuration in sync with manufacturer recommendations.

## Transport and Connection Context

Connection and transport choices determine how the ADM333 reaches Plaspy. The tracker can use its cellular GPRS link to send telemetry and it supports common transport options that influence reliability and network behavior.

- The ADM333 may be configured to use UDP or TCP directed at port 8888 on the Plaspy endpoint depending on device support and configuration preference.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138 if required by network rules or provisioning tools.
- Plaspy listens on port 8888 for all device traffic, simplifying server settings for mixed device fleets.
- Transport selection (UDP vs TCP) may affect delivery guarantees and power consumption; choose the mode that fits your operational priorities and device firmware options.
- Dual SIM and GPRS connectivity on the ADM333 provide redundancy for uplink but do not change the Plaspy endpoint or port requirements.

## Protocol Compatibility Notes

- Firmware revisions can change available fields, telemetry frequency, or transport behavior. Verify the ADM333 firmware level when validating compatibility.
- Hardware revisions or model variants may expose different peripheral sets such as BLE or RS‑485 support; confirm which interfaces are present on your unit.
- Manufacturer configuration tools and SMS commands may be necessary to point the tracker to d.plaspy.com or 54.85.159.138 and to select UDP or TCP on port 8888.
- Transport differences between UDP and TCP can affect packet loss handling and battery usage; select what suits your network and device configuration.
- When integrating through intermediary servers, ensure the intermediate preserves required fields and forwards raw telemetry to the Plaspy endpoint for automatic detection.
- Always cross check feature expectations such as BLE sensor polling, buffered route behavior, and event thresholds against the manufacturer documentation and release notes.

## Why Protocol Understanding Matters

Understanding the ADM333 communication protocol in general terms helps ensure a smooth deployment to Plaspy, faster troubleshooting, and dependable long term operation. Knowing how the device reports and what fields to expect makes it easier to map telemetry to fleet workflows and maintain consistent data quality.

- Correct server and transport configuration ensures devices reach Plaspy at d.plaspy.com or 54.85.159.138 using port 8888 so automatic detection can occur.
- Awareness of firmware and hardware differences reduces integration surprises and helps prioritize firmware updates or configuration changes.
- Understanding what telemetry is available from BLE, analog inputs, RS‑485, and accelerometer events helps design monitoring and alerting rules in Plaspy.
- Knowledge of buffering and reconnection behavior aids in validating historical route uploads after connectivity interruptions.
- Clear expectations of transport behavior (UDP vs TCP) assist in optimizing battery life, reliability, and network usage.

## Why Use Plaspy with This Protocol

Using the ADM333 with Plaspy gives organizations access to consolidated vehicle and asset telemetry, event alerts, and historical routing within a single platform. The ADM333 v2’s open protocol, GPRS uplink, BLE sensors and peripheral interfaces map well to common fleet and asset management use cases such as route monitoring, fuel telemetry, anti theft workflows, and environmental sensing.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance consult the official Neomatica website at https://neomatica.com/ since protocol support and device behavior can evolve over time and should be verified with the manufacturer.
