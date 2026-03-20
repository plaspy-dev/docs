---
slug: /sentar/d37/protocol
id: d37-protocol
sidebar_label: Protocol
title: Sentar - D37 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Sentar D37 kids watch and how it communicates with Plaspy for reliable tracking
keywords:
  - Sentar D37 protocol
  - Sentar D37 GPS protocol
  - Sentar D37 Plaspy compatibility
  - Sentar D37 communication protocol
  - Sentar D37 tracking protocol
  - Sentar D37 smartwatch GPS
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - GPS tracker communication
  - child tracker protocol
---

# Sentar - D37 Protocol

This page describes the public protocol context for using the Sentar D37 kids smart watch with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, the role of that communication for real time tracking and alerts, and practical notes to help with setup and validation. Sensitive implementation details and proprietary packet formats are intentionally omitted.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by device firmware, hardware revision and manufacturer implementation, so while Plaspy simplifies integration, you should expect small differences that depend on your D37 firmware and configuration.

## Protocol Overview

The D37 uses its reporting protocol to deliver location fixes, telemetry and events from the watch to a remote server so Plaspy can present live tracking, history and alerts. The protocol's public role is to ensure timely, identifiable and usable data reaches Plaspy without describing internal frame formats.

- Enables periodic and event driven location reports using the watch GPS AGPS LBS and WiFi positioning sources.
- Transports device telemetry such as battery level signal strength and SOS events so Plaspy can trigger alerts and display device health.
- Conveys device identity and session context so Plaspy can associate incoming messages with the correct watch account.
- Transmits simple on device events like SOS activations check ins and basic status updates for mapping and history.
- Allows server side responses or acknowledgements when supported by the device transport mode to confirm receipt or send commands.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically identifies the tracker protocol based on the data the device sends. In most cases there is no need to manually select a protocol inside the Plaspy platform if the D37 is correctly configured to report to Plaspy.

- Plaspy listens on the domain d.plaspy.com and the public server IP 54.85.159.138 as the primary endpoint for device reporting.
- All devices supported by Plaspy use the same port which simplifies device configuration and server routing.
- Plaspy performs automatic protocol detection so the platform can route telemetry to the correct parser without user intervention.
- Users typically only need to ensure the D37 is configured to point to the Plaspy endpoint and use the correct transport mode.
- If a device does not appear to connect, verify network settings SIM data connectivity and that the device is allowed to send data to the Plaspy endpoint.

## Transport and Connection Context

The D37 may be configured to use either UDP or TCP transport depending on device support and the configuration applied by the user or manufacturer. Connection details are limited to public routing context so installers and administrators can set the device to reach Plaspy correctly.

- Devices can report to the Plaspy endpoint using UDP or TCP on port 8888 depending on device support and chosen configuration.
- The device hostname d.plaspy.com or the server IP 54.85.159.138 are valid targets for reporting to Plaspy.
- Plaspy uses the same port 8888 for all supported devices to reduce configuration complexity.
- Confirm that the D37 has active cellular data and that the network allows outbound traffic to port 8888.
- Select UDP when instructed by the device setup or use TCP if reliable delivery and session behavior are preferred and supported by the watch.

## Protocol Compatibility Notes

- Firmware versions for the D37 can change how certain messages are formatted and which fields are included in reports.
- Hardware revisions and regional variants of the watch may behave differently with respect to transport support or event reporting.
- Manufacturer server configuration options may allow pointing the device to a custom host; for Plaspy integration use d.plaspy.com or 54.85.159.138 on port 8888.
- Some device features such as two way voice or media capture are device capabilities rather than protocol guarantees and may require specific firmware.
- Always validate a sample device connection to Plaspy after configuration to confirm expected telemetry and event behavior.
- When troubleshooting, check SIM data provisioning APN settings and any carrier level restrictions that could block outbound connections.

## Why Protocol Understanding Matters

A practical understanding of how the D37 communicates with Plaspy makes setup smoother and enables faster troubleshooting when devices do not appear online or when events are missing. Knowing the high level behavior helps administrators and integrators ensure reliable reporting and correct feature operation.

- Ensures the device is configured to point to the correct Plaspy endpoint and transport mode.
- Helps narrow down issues caused by firmware differences or regional hardware variants.
- Guides validation of telemetry such as location fixes SOS events and battery reporting once a device is connected.
- Supports decisions about using UDP or TCP based on network characteristics and device capabilities.
- Reduces time to resolution when working with manufacturer support or carrier troubleshooting.

## Why Use Plaspy with This Protocol

Using the Sentar D37 with Plaspy provides parents and administrators with a clear path to real time visibility and incident awareness. The combination of multi mode positioning on the D37 and Plaspy ingestion gives reliable location tracking, historical routes and alerting for SOS and other device events without exposing internal protocol mechanics.

Plaspy streamlines integration by using a shared server endpoint and port and by automatically detecting the tracker protocol when the device reports. If you want to learn more about what Plaspy offers and how it supports devices like the D37 visit https://www.plaspy.com. Please note that protocol support firmware behavior and manufacturer implementation details can change over time so verify the latest device specific information with the manufacturer at http://www.sentarsmart.com/
