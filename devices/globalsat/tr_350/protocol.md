---
slug: /globalsat/tr_350/protocol
id: tr_350-protocol
sidebar_label: Protocol
title: GlobalSat - TR-350 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating GlobalSat TR 350 with Plaspy using shared connection settings and automatic detection
keywords:
  - GlobalSat TR 350 protocol
  - GlobalSat TR 350 GPS protocol
  - TR 350 Plaspy compatibility
  - TR 350 communication protocol
  - TR 350 tracking protocol
  - GPS tracker protocol
  - personal tracker protocol
  - Plaspy device compatibility
  - Plaspy tracker integration
  - GNSS Wi Fi BLE positioning
---

# GlobalSat - TR-350 Protocol

This page provides public protocol context for using the GlobalSat TR-350 personal tracker with Plaspy. It summarizes how the device communicates with Plaspy in general, the role of the tracker reporting protocol, and practical connection details you will use when provisioning devices for live monitoring. The content focuses on public, non sensitive information and is intended to help operators and integrators understand the communication relationship between the TR-350 and Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a high level while pointing out the concrete connection facts you will need for integration and troubleshooting.

## Protocol Overview

The TR-350 uses a device reporting protocol to deliver location, telemetry, and event data from the tracker to a remote server. The protocol defines how the device identifies itself, reports GNSS coordinates and assisted position sources, and communicates status events such as SOS, battery, and movement alerts to Plaspy for ingestion and processing.

- Enables the device to send GNSS fixes together with Wi‑Fi and Bluetooth LE assisted positioning data to the backend.
- Carries SOS and event indicators like motion and fall advisories so Plaspy can trigger alerts and workflows.
- Conveys device health telemetry such as battery level and connectivity state for uptime monitoring.
- Allows the tracker to present a unique device identity so Plaspy can correlate incoming messages with the correct asset.
- Provides the transportable payload that Plaspy ingests and maps into location history, alerts, and operator dashboards.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically detects the tracker protocol based on the data the device reports. For most users the platform will determine the protocol without manual selection, provided the tracker is configured to report to the Plaspy server address and port.

- Plaspy exposes a shared server endpoint for device reporting at d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same port so device routing is simplified and uniform.
- Plaspy automatically detects the tracker protocol when properly configured reporting arrives at the platform.
- In typical deployments you do not need to select a protocol in Plaspy if the TR-350 is pointed to the Plaspy endpoint.
- If detection issues occur, reviewing device reporting settings and firmware notes is the recommended next step.

## Transport and Connection Context

Connection to Plaspy is established using common transport options supported by the TR-350. The device can be configured to send its reporting over either UDP or TCP to Plaspy, using the same port that Plaspy uses for all devices. These transport details are the primary network settings required to point the tracker at Plaspy for live data ingestion.

- Devices may be configured to use UDP or TCP on port 8888 depending on device and firmware capabilities.
- The Plaspy reporting endpoint is d.plaspy.com and the server IP 54.85.159.138, reachable on the shared port.
- Plaspy uses the same port for all supported devices which simplifies fleet provisioning.
- Choose UDP or TCP according to the tracker configuration options and network conditions in your deployment.
- Confirm that any network firewalls or carrier settings allow outbound traffic to the Plaspy endpoint on the configured transport and port.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available events; always check the installed firmware level on TR-350 units.
- Hardware revisions or regional variants may affect available cellular bands or assisted positioning behavior; validate against device labels and manufacturer notes.
- Manufacturer configuration defaults may point to different endpoints; ensure units are set to report to d.plaspy.com or 54.85.159.138 on the shared port.
- Transport selection between UDP and TCP can influence reliability and should match the tracker configuration and network characteristics.
- Plaspy’s automatic detection reduces manual setup, but verification of incoming messages during initial provisioning is recommended.
- For device management and remote provisioning options consult the manufacturer or your reseller for supported methods.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, effective troubleshooting, and reliable long term operation of the TR-350 when used with Plaspy. Clear knowledge of what the tracker reports and how it reaches the server reduces downtime and improves the quality of location and event data available to operators.

- Helps validate that SOS, motion, fall, and battery events are properly transmitted and interpreted by the platform.
- Guides selection between UDP and TCP transport for the best balance of latency and reliability in your environment.
- Assists troubleshooting when devices do not appear on the platform by focusing checks on connection endpoint, port, and firmware behavior.
- Enables better planning for indoor assisted positioning by understanding how GNSS, Wi‑Fi, and Bluetooth LE data are delivered.
- Reduces deployment time by clarifying which device settings must be matched to Plaspy connection parameters.

## Why Use Plaspy with This Protocol

Using the GlobalSat TR-350 with Plaspy gives organizations a focused solution for personal safety monitoring and real time incident response. The TR-350’s combination of high sensitivity GNSS, Wi‑Fi positioning and Bluetooth LE beacon support provides richer location context that Plaspy can ingest and present to caregivers, response centers, or operations teams. Built in SOS and two way voice events map naturally into Plaspy alerting and incident workflows to streamline response.

To learn more about Plaspy and how it can integrate with devices like the TR-350, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol documentation and firmware notes with the manufacturer at https://www.globalsat.com.tw/.
