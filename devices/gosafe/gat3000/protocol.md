---
slug: /gosafe/gat3000/protocol
id: gat3000-protocol
sidebar_label: Protocol
title: Gosafe - GAT3000 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Gosafe GAT3000 with Plaspy for GPS tracking and telemetry
keywords:
  - Gosafe GAT3000 protocol
  - Gosafe GAT3000 GPS protocol
  - GAT3000 Plaspy compatibility
  - Gosafe tracker Plaspy
  - GAT3000 communication protocol
  - Gosafe tracking protocol
  - solar powered GPS tracker
  - asset tracking protocol
  - fleet management protocol
  - GPS tracker protocol Plaspy
---

# Gosafe - GAT3000 Protocol

This page provides public protocol context for using the Gosafe GAT3000 tracker with Plaspy. It explains how the device communicates at a high level, the role the communication protocol plays in sending location and telemetry to Plaspy, and practical compatibility considerations for deployment. The description and notes here are intended for administrators, integrators, and technical users preparing devices for platform integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so treat this guidance as high level and verify device specific details against manufacturer documentation when needed.

## Protocol Overview

The protocol used by the GAT3000 governs how the tracker reports GNSS positions, telemetry, sensor events, and device status to a remote server. For Plaspy integration the protocol enables the tracker to identify itself, deliver location updates, report accelerometer and tamper events, and surface Bluetooth sensor readings for platform use.

- Transports GNSS position reports and device telemetry so Plaspy can render live location and history.
- Conveys event data such as tamper alerts, accelerometer triggers, and I O states for alerting and automation.
- Allows the tracker to include device identifiers and status fields so Plaspy can associate messages with the correct asset.
- Supports remote configuration and over the air settings that can change reporting intervals and thresholds.
- Carries accessory telemetry such as BLE sensor readings when configured to do so.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a single, shared endpoint and automatically detects the device protocol when a properly configured tracker reports. In most cases you do not need to select a protocol manually inside Plaspy if the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens for device reports at the public server domain d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same port for reporting so endpoint configuration is consistent across models.
- The platform automatically detects the tracker protocol once a device begins sending data to the shared endpoint.
- Proper device identifiers and consistent reporting to the Plaspy endpoint are the typical prerequisites for automatic detection.
- If a device supports SMS reporting as an alternative transport, platform ingestion may rely on separate SMS gateways depending on operator setup.

## Transport and Connection Context

The GAT3000 is capable of reporting over cellular links and may be configured to use different transport methods based on network and device configuration. Correct transport settings are a common source of connectivity problems, so confirm device-side configuration matches the intended network path to Plaspy.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Devices can use UDP or TCP on port 8888 depending on the tracker configuration and firmware support.
- All Plaspy devices share the same port for reporting which simplifies gateway configuration and device provisioning.
- When available, SMS can be used as an alternative reporting channel separate from TCP or UDP transports.
- Confirm that device APN, SIM routing, and firewall rules allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware level differences can change which telemetry fields are included and how often reports are sent.
- Hardware revisions and optional features such as BLE sensors or dual SIM can affect capability and default behavior.
- Some deployments may require choosing UDP or TCP at the device based on carrier characteristics or power considerations.
- Over the air configuration may alter reporting intervals or payload contents after initial provisioning.
- Validate compatibility against Gosafe documentation for the specific GAT3000 firmware and hardware revision in your fleet.
- For large rollouts, pilot a small set of units to confirm behavior before mass deployment.
- Ensure device identifiers and server targets are correctly provisioned to allow automatic detection by Plaspy.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable reporting, smooth onboarding, and effective troubleshooting when integrating devices with Plaspy. A clear grasp of how the GAT3000 reports location and events reduces configuration time and supports better long term reliability.

- Helps identify why a device may not appear on the platform when reports are misaddressed or use the wrong transport.
- Aids in tuning reporting intervals and power profiles to balance battery life with required telemetry frequency.
- Supports mapping of BLE sensor and I O events into Plaspy dashboards and alert rules.
- Speeds root cause analysis for connectivity issues involving APN, SIM routing, or carrier limitations.
- Allows administrators to verify that remote configuration and OTA updates are applied as expected.

## Why Use Plaspy with This Protocol

Pairing the Gosafe GAT3000 with Plaspy provides a practical way to turn solar powered asset telemetry into actionable fleet and asset intelligence. Plaspy ingests GNSS positions, accelerometer events, tamper alerts, and BLE sensor readings so teams can monitor assets, set geofence alarms, and generate reports without bespoke server configuration for each device model.

Plaspy keeps integration simple by using a shared listening endpoint at d.plaspy.com (54.85.159.138) on port 8888 and by automatically detecting the tracker protocol for properly configured devices. To learn more about Plaspy and how it can manage tracking and telemetry workflows visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official Gosafe site https://gosafesystem.com/ since device implementations and firmware features can change over time.
