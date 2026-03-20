---
slug: /thinkrace/traxbean_st2/protocol
id: traxbean_st2-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean ST2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ThinkRace Traxbean ST2 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - ThinkRace Traxbean ST2 protocol
  - Traxbean ST2 GPS protocol
  - ThinkRace protocol Plaspy compatibility
  - Traxbean ST2 communication protocol
  - Traxbean ST2 tracking protocol
  - ThinkRace GPS tracker protocol
  - eldercare smartwatch protocol
  - GPS tracker Plaspy integration
  - device to server reporting
  - real time telemetry tracking
---

# ThinkRace - Traxbean ST2 Protocol

This page provides a public, high level view of the communication protocol context for using the ThinkRace Traxbean ST2 with Plaspy. It focuses on how the device reports location, health telemetry, and events into Plaspy without exposing sensitive implementation details. Use this document as a protocol-oriented reference to understand how the ST2 typically integrates into a Plaspy deployment.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays intentionally general and practical while pointing you to the key connection facts needed for device configuration.

## Protocol Overview

The Traxbean ST2 communicates with back end services to deliver location, vital signs, and event data that Plaspy ingests for mapping, alerting, and reporting. The tracker protocol governs how the device packages telemetry, identifies itself to a server endpoint, and signals events such as SOS or fall detection. For Plaspy users, the important aspects are reliable identification, periodic and event-driven updates, and transport settings that allow the device to reach the Plaspy endpoint.

- The protocol enables device identification and authentication information to be sent along with telemetry so Plaspy can associate data with a known device.
- Periodic location and telemetry reporting are used for live maps and historical tracks within Plaspy.
- Event messages such as SOS, fall detection, and immobility alerts are delivered as prioritized reports for immediate handling.
- Health telemetry like heart rate and SpO2 is transmitted alongside location so Plaspy can apply alert rules and dashboards.
- The protocol supports both scheduled reporting and asynchronous event pushes to ensure timely delivery of critical alarms.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and performs automatic protocol detection so users typically do not need to choose a protocol manually when a device is correctly configured to report to Plaspy. Detection and routing happen at the platform edge, allowing many tracker models, including the Traxbean ST2, to be ingested under a common connection model.

- Plaspy uses a single server endpoint d.plaspy.com to receive device reports.
- The Plaspy server IP also resolves to 54.85.159.138 for deployments that prefer or require a direct address.
- All devices in Plaspy use the same port, which simplifies device configuration across mixed fleets.
- Plaspy automatically detects the tracker protocol when a device connects to the shared endpoint and port.
- In typical setups the integrator configures the device to report to d.plaspy.com (or 54.85.159.138) and Plaspy handles the rest.

## Transport and Connection Context

Transport selection and endpoint configuration are foundational to getting the Traxbean ST2 talking to Plaspy. The tracker can be set to forward data over common transport protocols supported by mobile networks; choosing the correct transport and endpoint ensures messages reach the Plaspy ingestion service.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and your configuration.
- Plaspy receives tracker connections on port 8888, and this same port is used for all devices supported by the platform.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 if DNS is not available.
- Ensure the device carrier and APN settings permit the chosen transport and outbound port so reports can reach Plaspy.
- Network reliability and carrier behavior can influence whether UDP or TCP is the better choice for your deployment.

## Protocol Compatibility Notes

- Firmware revisions and hardware variants of the Traxbean ST2 can alter message timing, available telemetry fields, or optional features; confirm firmware behavior for a given device batch.
- Manufacturer defaults may route the device through ThinkRace backend services; you can configure direct server push to Plaspy where supported.
- Transport selection (UDP versus TCP) should match the device configuration and carrier constraints for best delivery reliability.
- Plaspy’s shared endpoint model reduces per-device configuration complexity but does not remove the need to validate device ID and reporting cadence.
- Some features such as advanced health telemetry or BLE beacon scanning may depend on enabled firmware options or accessory configurations.
- Always validate an individual device on Plaspy during rollout to confirm event delivery, telemetry fields, and update cadence.

## Why Protocol Understanding Matters

Knowing the basic protocol characteristics helps streamline setup, troubleshooting, and long term operation of Traxbean ST2 devices in Plaspy. Understanding how the device reports, what transports it can use, and where it must send data reduces integration time and helps you design reliable monitoring workflows.

- Ensures correct server and transport configuration so data arrives consistently at Plaspy.
- Helps diagnose delivery issues when telemetry or events fail to appear in dashboards.
- Informs decisions on whether to use direct device forwarding or route via manufacturer services.
- Allows planning for firmware updates and how they may change available telemetry or message timing.
- Supports configuring alert thresholds and reporting intervals that match device capabilities.

## Why Use Plaspy with This Protocol

Using the Traxbean ST2 with Plaspy brings wearable health and safety telemetry into a single monitoring environment that can combine people and asset tracking. For organizations focused on eldercare, assisted living, or mixed deployments, this integration provides timely location and vital sign observability alongside event alerts like SOS and fall detection. Plaspy’s ingestion model and unified port simplify bringing many devices online quickly while preserving event priority and telemetry fidelity.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer site https://www.thinkrace.com/.
