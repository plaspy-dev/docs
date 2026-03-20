---
slug: /gotop/l17/protocol
id: l17-protocol
sidebar_label: Protocol
title: GOTOP - L17 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GOTOP L17 wearable and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP L17 protocol
  - GOTOP L17 GPS protocol
  - GOTOP L17 protocol for Plaspy
  - GOTOP L17 communication protocol
  - GOTOP L17 tracking protocol
  - GOTOP wearable tracker protocol
  - Plaspy tracker protocol
  - GPS tracker compatibility Plaspy
  - L17 wearable telemetry protocol
  - GOTOP L17 SOS tracker
---

# GOTOP - L17 Protocol

This page documents the public protocol context for using the GOTOP L17 wearable GPS tracker with Plaspy. It explains how the L17 typically communicates positioning, SOS events, and sensor telemetry to Plaspy in general, non sensitive terms so you can plan configuration and integration with the Plaspy platform.

The L17 is a compact 4G SOS GPS smart bracelet designed for personal safety and health monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact on device behavior can vary with firmware version, hardware revision, and manufacturer implementation. Review official GOTOP documentation for firmware specific details before final deployment.

## Protocol Overview

The device protocol is the set of rules the L17 uses to send location fixes, health telemetry, SOS alerts, and status updates to a remote server. With Plaspy the protocol's role is to convert on device events and sensor measurements into messages the server can ingest for real time display, alarming, and historical records.

- The protocol carries GNSS position reports and time stamps so Plaspy can map live location and history.
- Sensor telemetry such as heart rate, SpO2, blood pressure, temperature and activity events are transmitted as structured telemetry messages.
- SOS button presses and status changes are sent as alert messages so Plaspy can trigger notifications and workflows.
- Transport level settings point the device at Plaspy endpoints so messages arrive at d.plaspy.com and are routed into Plaspy services.
- Protocol behavior may change across firmware releases so message frequency, optional fields, and available telemetry can vary by device firmware.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and determines the appropriate handling for each tracker type automatically. In most cases a correctly configured device will begin reporting to the Plaspy server without requiring manual protocol selection inside Plaspy.

- Plaspy listens on a single well known port for all devices and identifies incoming data streams automatically.
- Devices pointed to d.plaspy.com or the server IP will be routed into Plaspy processing.
- When the L17 is configured to report to Plaspy the platform matches the incoming data to the expected device class and extracts usable fields.
- Users typically do not need to choose a protocol in Plaspy provided the device is configured to send to the Plaspy endpoint.
- If telemetry does not appear, validate network settings, SIM profile, and firmware configuration on the device.

## Transport and Connection Context

Connection choices determine how the L17 sends its protocol messages to Plaspy. The L17 can be configured to use either UDP or TCP depending on device support and network conditions, and messages must target the Plaspy endpoint to be processed.

- The Plaspy server domain for device reporting is d.plaspy.com.
- The Plaspy server IP is 54.85.159.138 and the platform uses port 8888 for device connections.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and network preference.
- All devices supported by Plaspy use the same port which simplifies configuration and firewall rules.
- Ensure the device data APN and SIM are active and that outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888 is permitted by the mobile operator or network.

## Protocol Compatibility Notes

- Firmware revisions can alter which telemetry fields are reported and the frequency of messages so confirm firmware release notes for the L17.
- Hardware variants and regional builds may differ in available cellular bands, sensor sets, or BLE features which affects telemetry availability.
- Transport selection between UDP and TCP may affect delivery patterns and should match what the device firmware supports and what the network permits.
- Manufacturer side configuration options such as server address and reporting intervals determine how quickly Plaspy receives events and telemetry.
- Plaspy automatically detects device protocol when messages arrive at the shared port but correct device network configuration is required for that detection to succeed.
- Validate compatibility by testing a device in a controlled environment before large scale deployment.

## Why Protocol Understanding Matters

Knowing how the L17 communicates helps ensure reliable setup, faster troubleshooting, and consistent long term operation with Plaspy. Understanding transport, expected telemetry, and potential firmware differences reduces integration time and improves alert accuracy.

- It helps you verify the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 so messages reach Plaspy.
- It clarifies whether the device should use UDP or TCP based on network and firmware capabilities.
- It enables quicker diagnosis when SOS, location, or health telemetry do not appear in Plaspy.
- It informs choices about reporting intervals and battery life trade offs for wearable use cases.
- It sets proper expectations around available telemetry as features can vary by firmware and hardware revision.

## Why Use Plaspy with This Protocol

Using the GOTOP L17 with Plaspy gives organizations and families a compact wearable solution that combines live GNSS tracking, SOS alerting, two way calling capability, and health telemetry in a single stream into the Plaspy platform. This makes it straightforward to monitor location, respond to emergencies, and retain an audit history of events within Plaspy dashboards and reports.

Learn more about Plaspy on the main website https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time and should be verified against the latest manufacturer documentation available at https://www.gotop.cc/.
