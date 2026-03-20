---
slug: /astra_telematics/at405/protocol
id: at405-protocol
sidebar_label: Protocol
title: Astra Telematics - AT405 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Astra Telematics AT405 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Astra Telematics AT405 protocol
  - Astra Telematics AT405 GPS protocol
  - AT405 Plaspy compatibility
  - AT405 communication protocol
  - AT405 tracker protocol
  - Astra Telematics GPS tracker
  - Plaspy supported devices
  - vehicle tracking AT405
  - AT405 telemetry protocol
  - fleet management AT405
---

# Astra Telematics - AT405 Protocol

This page provides a public protocol context for using the Astra Telematics AT405 tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in general, what to expect from the tracker reporting behavior, and which transport settings to check when integrating AT405 units into a Plaspy deployment. The AT405 is a compact IP65 rated unit with LTE Cat 1 cellular, multi constellation GNSS and BLE for short range sensors, and vehicle interfaces such as CANBus and digital inputs and outputs.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Devices compatible with Plaspy typically point at the Plaspy endpoint and use the same configured port, though exact protocol behavior can vary by firmware revision, hardware revision and manufacturer implementation. When preparing an AT405 for Plaspy integration, confirm device firmware and transport configuration with the manufacturer documentation and your provisioning process.

## Protocol Overview

The AT405 reporting protocol is the mechanism by which the tracker delivers GNSS positions, vehicle telemetry and event data to Plaspy so the platform can render maps, alerts and reports. The public description here focuses on the role of the communication protocol rather than internal packet formats or proprietary command frames.

- Enables the tracker to send location updates and timestamped telemetry from GNSS and vehicle interfaces to Plaspy.
- Carries device identification and status information so Plaspy can associate incoming messages with the correct asset.
- Transmits event driven messages such as ignition changes, geofence events or immobilizer activations for real time monitoring.
- Supports periodic and on demand reporting so the platform can provide historical tracking and live location services.
- Allows for optional telemetry fields such as CANBus parameters and BLE sensor inputs to be included in regular reports.

## How Plaspy Detects the Protocol

Plaspy is designed to receive reports from many tracker models without requiring manual protocol selection for most deployments. When an AT405 is pointed to the Plaspy endpoint with the correct transport settings, the platform will identify and decode the incoming data according to supported protocol profiles.

- Plaspy receives device traffic at the shared server endpoint domain d.plaspy.com and at the public server IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy listens on port 8888 for tracker connections.
- The AT405 may be configured to use UDP or TCP on port 8888 depending on device support and provisioning.
- When an AT405 reports to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol for compatible units.
- In most cases users do not need to manually select a protocol inside Plaspy if the device is configured to report correctly to the Plaspy endpoint.

## Transport and Connection Context

Connecting an AT405 to Plaspy requires configuring the device to report to the Plaspy endpoint using the supported transport. The AT405 supports common cellular transports and can be set up to deliver telemetry to Plaspy over the network path most appropriate for your deployment.

- The AT405 may be configured to use either UDP or TCP transport on port 8888 based on device firmware and provisioning choices.
- Devices can be pointed to d.plaspy.com or directly to the server IP 54.85.159.138 when DNS or network constraints require a fixed address.
- Port 8888 is the shared Plaspy port used by all supported devices for telemetry intake.
- Cellular network settings such as APN, roaming policies and signal availability affect whether the device can maintain a reliable connection.
- Verify that your network and firewall policies allow outbound traffic to the Plaspy endpoint on port 8888 for the selected transport.

## Protocol Compatibility Notes

- Firmware revisions can change which telemetry fields are reported and how certain events are encoded. Confirm firmware level for feature expectations.
- Hardware revisions or optional I O configurations on the AT405 can affect available diagnostics and CANBus message exposure.
- Some manufacturer configuration options can switch the device between UDP and TCP reporting modes; choose the transport that matches your operational needs.
- Transport reliability differs by network and environment so test both UDP and TCP where practical during rollout.
- Plaspy supports automatic protocol detection but validating a test device early in deployment helps confirm expected data mapping.
- Always reference Astra Telematics documentation and release notes for device specific behavioral changes.

## Why Protocol Understanding Matters

Knowing how the AT405 communicates with Plaspy helps ensure reliable installation, faster troubleshooting and predictable data in your fleet dashboards. Protocol awareness reduces guesswork when devices behave differently than expected and helps operations teams align device configuration with platform expectations.

- Helps ensure devices are configured to report to d.plaspy.com or 54.85.159.138 on the correct transport and port.
- Speeds troubleshooting by narrowing scope to transport, firmware version or device settings when reports are missing or incomplete.
- Enables sensible expectations for what telemetry and event types will be available from the AT405 in Plaspy.
- Informs decisions about reporting intervals and power management settings to balance battery life and data granularity.
- Supports validation of CANBus and BLE sensor integrations so the platform receives the telemetry needed for rules and alerts.

## Why Use Plaspy with This Protocol

Using the AT405 with Plaspy provides a practical way to collect GNSS positions, vehicle telemetry and short range sensor data for fleet operations, anti theft workflows and shared mobility services. The AT405 hardware features such as LTE Cat 1 connectivity, CANBus access and BLE complement Plaspy capabilities for real time monitoring and historical analysis without requiring custom firmware work for standard telemetry flows.

If you are evaluating the AT405 for a Plaspy deployment, start with a small pilot to confirm the transport and firmware combination you plan to use. To learn more about Plaspy and how it supports a broad range of trackers, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and installation instructions verify information on the manufacturer website https://astratelematics.com/.
