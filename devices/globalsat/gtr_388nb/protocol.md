---
slug: /globalsat/gtr_388nb/protocol
id: gtr_388nb-protocol
sidebar_label: Protocol
title: GlobalSat - GTR-388NB Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat GTR 388NB and its Plaspy compatibility for NB IoT GPS tracking
keywords:
  - GlobalSat GTR-388NB protocol
  - GlobalSat GTR-388NB GPS
  - GTR-388NB Plaspy compatibility
  - NB IoT GPS tracker
  - vehicle tracking protocol
  - scooter tracker protocol
  - Plaspy compatible tracker
  - fleet management GPS
  - GTR-388NB communication
  - GPS tracker protocol
---

# GlobalSat - GTR-388NB Protocol

This page provides a public protocol overview for using the GlobalSat GTR-388NB tracker with Plaspy. It focuses on the communication context and practical considerations needed to route telemetry and location data to Plaspy without exposing private implementation details. The content here is intended to help fleet and device integrators understand how the tracker reports to a cloud endpoint and how Plaspy ingests that data.

The GTR-388NB is a compact NB‑IoT tracker that transmits telemetry over UDP by default and is designed for scooters, eBikes, motorcycles and other light vehicles. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation. Always validate device specific behavior against manufacturer documentation when planning deployments.

## Protocol Overview

The communication protocol of the GTR-388NB defines how the device packages and sends location, status and sensor telemetry to a server. For Plaspy compatibility, the protocol must provide identifiable position reports, periodic or event driven updates, and basic status indicators so the platform can convert incoming messages into map markers, alerts and historical trails.

- Enables the tracker to report GNSS coordinates, timestamps, motion state and basic telemetry to a remote server.
- Carries ignition and analog input states so Plaspy can create trip logs and voltage based telemetry reports.
- Supports event driven messages such as emergency button press and motion alerts to trigger notifications.
- Provides a mechanism for regular heartbeat or keepalive messages so the server can monitor device connectivity.
- Allows the tracker to be configured to point to a Plaspy endpoint for single stream ingestion into the platform.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections at a shared endpoint and port and automatically detects the tracker protocol for supported devices. This means most users do not need to manually select a protocol in Plaspy if the device is correctly configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol when the device sends valid reports to the endpoint.
- Proper device configuration to send reports to d.plaspy.com or 54.85.159.138 is typically all that is required for protocol detection.
- Plaspy supports both UDP and TCP transports on the shared port so devices using either transport can be ingested.

## Transport and Connection Context

Connection settings determine how the GTR-388NB reaches Plaspy and which transport the tracker uses to send its telemetry. The GTR-388NB is typically deployed over NB‑IoT and is described as sending data over UDP, but Plaspy supports devices that use UDP or TCP on the shared port.

- The device may be configured using UDP or TCP on port 8888 depending on device support and network setup.
- Devices can be pointed to d.plaspy.com or to 54.85.159.138 as the server destination for telemetry.
- Plaspy uses the same port for all supported devices which simplifies device provisioning and network rules for fleets.
- NB‑IoT connectivity and carrier behavior can affect delivery times and packet fragmentation, so test connectivity with your carrier and APN settings.
- Ensure your network or firewall allows outbound UDP and TCP traffic to the Plaspy endpoint and port for reliable reporting.

## Protocol Compatibility Notes

- Firmware versions can change the device message cadence, field availability and optional features. Confirm firmware specifics with the manufacturer.
- Hardware revisions and accessory configurations may alter available inputs or behavior for ACC, analog telemetry and relay control.
- Transport selection matters: the GTR-388NB is typically used with UDP on NB‑IoT but Plaspy accepts TCP and UDP on the shared port when available.
- Carrier NB‑IoT configurations and regional band support influence connectivity and may require APN or SIM provisioning changes.
- Optional accessories such as external relays or emergency buttons add functionality but can introduce variability in reported signals.
- Always validate the device reporting endpoint and credentials (if any) before large scale deployment.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a smooth integration with Plaspy, reduces setup time, and improves long term reliability for fleet operations and anti theft workflows.

- Correct endpoint and transport configuration avoids connectivity issues and missed reports during commissioning.
- Awareness of firmware and hardware differences helps troubleshoot missing fields or unexpected event behavior.
- Knowledge of device reporting cadence supports server side expectations for live tracking and historical accuracy.
- Understanding how inputs map to telemetry (ACC, analog, emergency) enables correct alert and rule configuration in Plaspy.
- Considering NB‑IoT carrier behavior and power modes reduces surprises related to delayed deliveries or deep sleep reporting.

## Why Use Plaspy with This Protocol

Using the GlobalSat GTR-388NB with Plaspy provides a practical solution for organizations that need reliable, low power wide area tracking for scooters, motorcycles and light vehicles. The combination of NB‑IoT telemetry and Plaspy ingestion enables centralized monitoring, geofence alerts, trip analytics and remote actions such as relay based immobilization when configured.

To learn more about how Plaspy can ingest and manage GTR-388NB telemetry visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so verify the latest device specific protocol documentation and firmware notes at the manufacturer site https://www.globalsat.com.tw/.
