---
slug: /ev/ev_07b/protocol
id: ev_07b-protocol
sidebar_label: Protocol
title: EV - EV-07B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the EV EV-07B wearable GPS tracker and how it communicates with Plaspy for location SOS and telemetry
keywords:
  - EV EV-07B protocol
  - EV-07B GPS tracker
  - EV EV-07B communication protocol
  - Plaspy device protocol
  - wearable GPS protocol
  - SOS pendant integration
  - personal safety tracker protocol
  - EV-07B Plaspy compatibility
  - GPS tracking protocol EV
  - BLE sensor tracker protocol
---

# EV - EV-07B Protocol

This page describes the public protocol context for using the Eview EV-07B wearable GPS tracker with the Plaspy platform. It focuses on how the device reports location, SOS and basic telemetry to Plaspy and what to expect from a connectivity and compatibility perspective. The EV-07B is a compact SOS pendant that combines GPS, Wi‑Fi, BLE Beacon, LBS and BLE 5.0 sensor support to deliver location and alarm events into monitoring systems such as Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy. Exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation, so this page provides general, non-sensitive guidance to help with integration and troubleshooting.

## Protocol Overview

The EV-07B communication protocol defines how the tracker reports identifiers, location sources, SOS events and simple telemetry to a remote server such as Plaspy. The public overview below explains the role of the protocol without exposing vendor private formats.

- Enables the device to identify itself to Plaspy and deliver device identity and status information that Plaspy can map to a tracked unit.
- Transports periodic and event driven location reports assembled from GPS, Wi‑Fi, BLE Beacon and LBS sources for display and alerting in Plaspy.
- Carries SOS and emergency alarm signals so Plaspy can trigger high frequency updates, notifications and response workflows.
- Forwards basic telemetry such as battery status, fall detection and no motion alerts to Plaspy for monitoring and maintenance tasks.
- Supports BLE sensor data forwarding when the device is paired to medical or environmental peripherals to augment situational data in Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts connections to a shared server endpoint and automatically determines the compatible tracker protocol for devices that report there. When the EV-07B is configured to send reports to the Plaspy endpoint, users normally do not need to manually select a protocol inside Plaspy.

- Plaspy exposes a single public endpoint for device reporting listed as d.plaspy.com and reachable at 54.85.159.138 on the shared port 8888.
- Plaspy uses the same port for all supported devices so a single outbound device configuration can work across models.
- When the EV-07B sends its reporting packets to the Plaspy endpoint, Plaspy routes incoming data into the appropriate device record and event pipeline.
- In most deployments the installer only needs to set the device reporting host to d.plaspy.com or 54.85.159.138 and use the port configured on the device to begin automatic detection.
- If a device is not appearing in Plaspy after configuration, checking the reporting destination, network reachability and transport protocol are the usual first steps.

## Transport and Connection Context

The EV-07B can be configured to reach Plaspy over standard IP transports. Connection choices and network behavior are part of the device configuration and can affect delivery characteristics such as reliability and latency.

- The device may be configured using UDP or TCP on port 8888 depending on the device firmware and configuration settings.
- Devices can point to the Plaspy server by hostname d.plaspy.com or by the server IP 54.85.159.138 if DNS or carrier restrictions require an IP.
- All devices in Plaspy use the same port 8888 which simplifies outbound device configuration and firewall rules.
- UDP reporting can provide lower overhead and reduced latency for frequent location updates, while TCP may be used where delivery confirmation and session reliability are preferred.
- Network operators, NAT behavior and cellular carrier settings can influence which transport performs best for a given deployment.

## Protocol Compatibility Notes

- EV-07B comes in multiple hardware and radio variants including 2G and 4G LTE versions; the EV-07BX-4G is AT&T certified for U.S. LTE networks per the vendor specification.
- Firmware releases can change message timing, available fields and supported transports, so confirm firmware level when validating behavior.
- Hardware revisions and regional SKUs may alter radio bands, available location sources or default reporting settings that affect integration.
- Some features such as BLE sensor forwarding, fall detection sensitivity and high frequency SOS reporting are influenced by device configuration and firmware options.
- Choose the transport type on the device consistent with carrier recommendations and local network conditions to ensure reliable delivery to Plaspy.
- Always validate device configuration against the manufacturer documentation for model and firmware specific settings prior to large scale deployment.

## Why Protocol Understanding Matters

Knowing the role of the EV-07B communication protocol helps ensure reliable setup, predictable alarm handling and efficient troubleshooting when integrating with Plaspy. Clear protocol awareness reduces setup time and supports operational reliability.

- Ensures correct destination and transport settings so the EV-07B can reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps interpret why events might be delayed, missing or duplicated by considering transport choices and firmware behavior.
- Supports correct mapping of device event types such as SOS, fall detection and battery alerts into Plaspy alarm and reporting workflows.
- Makes it easier to work with carriers and IT teams when firewall rules or NAT settings are blocking device communications.
- Simplifies maintenance planning by understanding how firmware updates and hardware variants can change reporting behavior.

## Why Use Plaspy with This Protocol

Using the EV-07B with Plaspy brings wearable personal safety data into a central monitoring and notification environment. Organizations gain near real time visibility into SOS events, location updates and basic telemetry so responders and caregivers have the context needed to act quickly. The combination of GPS, Wi‑Fi, BLE Beacon, LBS and BLE sensor support in the EV-07B pairs well with Plaspy’s event routing, high frequency SOS handling and notification features.

To learn more about Plaspy and how it handles device reporting and alerts visit https://www.plaspy.com. Please verify the latest device specific protocol and firmware details with the manufacturer at http://www.eviewltd.com/ since protocol support, firmware behavior and device implementation details can change over time and should be confirmed against official documentation.
