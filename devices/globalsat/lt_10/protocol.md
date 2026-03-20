---
slug: /globalsat/lt_10/protocol
id: lt_10-protocol
sidebar_label: Protocol
title: GlobalSat - LT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the GlobalSat LT 10 cattle tracker and how it communicates with Plaspy
keywords:
  - GlobalSat LT 10 protocol
  - LT 10 GPS tracker
  - LT 10 LoRaWAN tracker
  - GlobalSat cattle tracker protocol
  - LT 10 communication protocol
  - LT 10 Plaspy compatibility
  - GPS tracker protocol for Plaspy
  - livestock tracking protocol
  - LoRaWAN animal tracker
  - Plaspy device integration
---

# GlobalSat - LT-10 Protocol

This page summarizes the public protocol context for using the GlobalSat LT-10 ear tag tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform at a high level, what role the device reporting protocol plays, and practical considerations for connecting LT-10 devices used for cattle and range animal tracking. The description emphasizes public facts and does not attempt to reproduce manufacturer internal protocol details.

The LT-10 is a solar powered ear tag tracker that uses LoRaWAN technology to report GNSS position, motion, and battery related telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is intended as general guidance rather than a substitute for the manufacturer documentation.

## Protocol Overview

The protocol used by the LT-10 governs how the device reports position, motion, and status information from the field to a backend service like Plaspy. For a LoRaWAN based livestock tracker the protocol defines what telemetry is sent, how often the device reports, and how the platform interprets those reports into usable location and sensor data.

- Enables the LT-10 to deliver GNSS position fixes and accelerometer based motion events to Plaspy for monitoring and alerts.
- Conveys device state such as battery level and periodic report intervals that help maintain long term operation in field conditions.
- Provides identifiers and telemetry that allow Plaspy to associate messages with specific devices and translate raw reports into tracked assets.
- Works alongside LoRaWAN network behavior and device configuration to determine reporting frequency and data availability in different sunlight and range conditions.
- Helps the platform apply meaningful status indicators such as low battery alerts and movement detection for livestock management.

## How Plaspy Detects the Protocol

Plaspy automatically examines incoming device traffic sent to the shared server endpoint and identifies the tracker protocol so users generally do not have to select a protocol manually when the device is configured correctly. Automatic detection is intended to simplify onboarding for a variety of supported tracker models.

- Plaspy receives device reports on a single shared endpoint domain d.plaspy.com and on the public IP 54.85.159.138.
- All devices configured for Plaspy report to the same port, and Plaspy uses that shared port to accept inbound reports.
- Plaspy automatically detects the tracker protocol from the incoming connection and payload pattern so manual selection inside the platform is usually not required.
- Proper device configuration to point to the Plaspy endpoint speeds up detection and ensures reports are processed correctly.
- Because firmware and device setup affect the reported data, detection works best when the tracker is configured to send expected telemetry and identifiers.

## Transport and Connection Context

Connection context covers the network transport and addressing that the LT-10 must use to deliver telemetry to Plaspy. While the LT-10 uses LoRaWAN for radio and network layer transport to gateways, the backend ingestion side for Plaspy accepts device reports on a common service endpoint.

- Devices may be configured to send data to the Plaspy host at d.plaspy.com or directly to the IP 54.85.159.138 depending on network setup.
- Plaspy accepts incoming device traffic on port 8888 and that same port is used across all supported devices in the Plaspy platform.
- The tracker may be configured using either UDP or TCP transport on port 8888 where device support and network setup permit.
- Using the shared Plaspy endpoint and port simplifies device provisioning and centralizes communication for many tracker models.
- Network or gateway configuration that forwards LoRaWAN uplinks into the Plaspy ingestion endpoint must preserve the device identifiers used by the manufacturer.

## Protocol Compatibility Notes

- Firmware versions can change reporting behavior such as interval, fields included, or battery reporting logic; always verify the device firmware level when assessing compatibility.
- Hardware revisions or regional RF variants of the LT-10 can affect feature availability and regional frequency support; confirm model variant details with the manufacturer.
- Transport selection between UDP and TCP may be limited by the device or by middleware in the data path; choose the transport that matches the device and gateway capabilities.
- LoRaWAN network settings and gateway integration can influence how and when data reaches Plaspy; ensure the network forwards uplinks as expected.
- When in doubt, compare field reports received by Plaspy with the manufacturer documentation and update device configuration accordingly.
- Validate that any third party gateways or network servers in the path preserve device identifiers and telemetry required for Plaspy to correctly process reports.

## Why Protocol Understanding Matters

Understanding the LT-10 communication protocol helps ensure reliable setup, accurate location reporting, and effective troubleshooting when the device is in the field. Awareness of how the device reports and how Plaspy ingests that data reduces onboarding time and supports long term operational reliability.

- Helps confirm the device is configured to report to the correct Plaspy endpoint at d.plaspy.com or 54.85.159.138.
- Makes it easier to diagnose missing or malformed reports by checking transport settings such as UDP or TCP on port 8888.
- Supports efficient battery and reporting interval decisions by relating telemetry fields to expected behavior in sunlight and seasonal conditions.
- Clarifies how motion and low battery alerts are signaled so monitoring rules in Plaspy map to real device events.
- Reduces ambiguity when coordinating with network operators or manufacturer support about what data should arrive at Plaspy.

## Why Use Plaspy with This Protocol

Using the GlobalSat LT-10 with Plaspy lets livestock managers combine the LT-10 field durability and LoRaWAN reach with a centralized platform for visibility and operational oversight. The LT-10 provides periodic GNSS position and motion telemetry while Plaspy ingests that data to present location history, status alerts, and fleet level views useful for range management and animal welfare monitoring.

Plaspy accepts reports on the shared domain d.plaspy.com and the IP 54.85.159.138 using port 8888 and automatically detects the tracker protocol so onboarding is streamlined when devices are configured to send to the Plaspy endpoint. To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and variant information verify the latest documentation from the manufacturer at https://www.globalsat.com.tw/. Protocol support and firmware behavior can change over time so checking manufacturer information helps ensure accurate integration.
