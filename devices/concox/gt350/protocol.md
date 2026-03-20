---
slug: /concox/gt350/protocol
id: gt350-protocol
sidebar_label: Protocol
title: Concox - GT350 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Concox GT350 GPS tracker and how it communicates with Plaspy
keywords:
  - Concox GT350 protocol
  - Concox GT350 GPS protocol
  - GT350 communication protocol
  - GT350 tracking protocol
  - Concox GT350 Plaspy compatibility
  - Concox GPS tracker protocol
  - personal GPS tracker protocol
  - GPS tracker communication
  - fleet tracking Concox GT350
  - Plaspy device protocol
---

# Concox - GT350 Protocol

This page provides a public protocol overview for using the Concox GT350 personal GPS tracker with Plaspy. It focuses on high level communication context and how the device reports location and events to a remote server without exposing sensitive implementation details. The information here is intended to help fleet and asset managers, integrators, and technical users understand the role of the tracker protocol when connecting GT350 devices to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Plaspy accepts connections at d.plaspy.com and 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888 and all devices in Plaspy use the same port. Exact protocol behavior for the GT350 can vary with firmware version, hardware revision, and manufacturer implementation, so check device settings and manufacturer documentation when setting up and troubleshooting.

## Protocol Overview

The communication protocol for the GT350 defines how the tracker identifies itself, reports position and status, and signals events so that a server like Plaspy can interpret and display useful information. This page describes the public facing aspects of that process to help you integrate GT350 devices with the Plaspy platform.

- Device identification and registration information allow Plaspy to associate incoming connections with a specific tracker and account.
- Position reports convey latitude, longitude, timestamp, speed, and basic movement status so Plaspy can map and store location history.
- Event notifications such as SOS alerts, geo fence crossings, and battery state provide actionable signals for alerts and workflows in Plaspy.
- Regular status or heartbeat messages help the server track device online state and battery or tamper conditions.
- Transport agnostic behavior means the tracker can typically send data over UDP or TCP depending on configuration and network conditions.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models using a shared endpoint and port, and it automatically detects the incoming tracker protocol when a device reports to that endpoint. In most cases you do not need to manually select a protocol inside Plaspy if the GT350 is set to report to the Plaspy address.

- Point the GT350 reporting address to d.plaspy.com or 54.85.159.138 and use port 8888 for the device connection.
- Devices may use UDP or TCP to send data to Plaspy depending on device settings and network conditions.
- Plaspy uses a single port for all supported devices which simplifies device configuration and firewall rules.
- If a device is correctly configured to report to the Plaspy endpoint, protocol selection inside Plaspy is typically not required.
- For troubleshooting, confirm the tracker is sending to the correct address, port, and transport type and that the SIM and APN are functioning.

## Transport and Connection Context

Transport and connection choices determine how data moves between the GT350 and Plaspy. Knowing the supported transports and the required endpoint information helps ensure reliable reporting and reduces setup friction.

- The GT350 may be configured to use UDP or TCP on port 8888 depending on device support and preferences.
- Devices can be pointed to the Plaspy endpoint using the domain d.plaspy.com or the IP address 54.85.159.138.
- Plaspy uses the same port 8888 for all devices it supports which simplifies firewall and network configuration.
- Ensure your mobile carrier or local network allows outbound traffic to port 8888 for the chosen transport protocol.
- SIM, APN, and power settings on the GT350 can affect its ability to maintain a connection and deliver timely reports.

## Protocol Compatibility Notes

- Firmware variations can change how the GT350 formats or schedules reports. Verify the device firmware level when diagnosing behavior.
- Hardware revisions or regional variants may offer different feature sets or default reporting settings.
- Manufacturer configuration tools or SMS commands might allow switching between UDP and TCP or changing the reporting address and port.
- Some features such as voice monitoring or extended battery modes can influence how frequently the device reports status and telemetry.
- Always validate key compatibility items such as transport selection, reporting address, and event support against manufacturer resources and a test device.
- If you encounter unexpected behavior, confirm both device side settings and network conditions before changing server side configuration.

## Why Protocol Understanding Matters

Understanding the GT350 communication protocol helps ensure a smooth setup, reliable reporting, and efficient troubleshooting when the tracker is used with Plaspy. Even limited protocol awareness can dramatically reduce setup time and improve operational outcomes.

- Faster initial configuration by knowing which transport and endpoint to use
- More effective troubleshooting when messages are missing or events are not appearing in the platform
- Better battery and reporting trade offs by understanding how event and heartbeat schedules affect power
- Clearer expectations around which device features will generate events that Plaspy can display
- Improved device fleet management through consistent configuration and testing practices

## Why Use Plaspy with This Protocol

Using the Concox GT350 with Plaspy provides a practical way to centralize personal tracker location, alerts, and status in a single platform. Plaspy's shared endpoint design and automatic protocol detection reduce the need for per device port management and make it simpler to bring a mixed fleet online quickly.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring, visit https://www.plaspy.com. For the latest GT350 device specific protocol details, firmware notes, and configuration instructions verify information with the manufacturer at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.
