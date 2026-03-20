---
slug: /xirgo/lx40/protocol
id: lx40-protocol
sidebar_label: Protocol
title: Xirgo - LX40 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo LX40 integration with Plaspy for reliable fleet tracking
keywords:
  - Xirgo LX40 protocol
  - LX40 GPS protocol
  - Xirgo GPS protocol
  - LX40 Plaspy compatibility
  - vehicle tracking protocol
  - LX40 telematics
  - Xirgo tracker protocol
  - LX40 Bluetooth sensors
  - LX40 CANBUS compatibility
  - Plaspy device protocol
---

# Xirgo - LX40 Protocol

This page provides a public, non sensitive overview of the communication context for using the Xirgo LX40 tracker with Plaspy. It explains how the LX40 exchanges location and telemetry information with the Plaspy platform, what role the tracker reporting protocol plays in that exchange, and which connection settings are typically used to point LX40 devices to Plaspy for real time tracking and device management.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation choices. The LX40 family includes programmable I O, CANBUS capable variants, BLE sensor support, and a scripting engine that can affect how and when the device sends data to a server; those device features influence what Plaspy receives but do not change the public connection endpoint and port used for reporting.

## Protocol Overview

The protocol used by the LX40 defines how the tracker identifies itself to a server, how it reports position and telemetry, and how auxiliary events such as driver ID or geofence triggers are transmitted to a fleet platform like Plaspy. This page focuses on the public protocol context rather than internal packet formats.

- Enables device identification and regular reporting of GPS position and telemetry to Plaspy.
- Carries event notifications such as ignition on off, geofence enter exit, and driver ID events to the platform.
- Transports CANBUS and sensor telemetry where the LX40 variant collects such data so Plaspy can normalize and display it.
- Supports remote device management and OTA updates when the tracker is configured to report to the fleet server.
- Works over standard network transports so the LX40 can be pointed to Plaspy with common endpoint settings.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically determines the tracker protocol used by an incoming device report. For most LX40 installations the user or installer configures the device to report to Plaspy and the platform handles protocol detection without manual selection.

- Plaspy automatically detects the tracker protocol when the device connects and sends data.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The Plaspy port is 8888 and all devices in Plaspy use the same port.
- In typical setups the installer configures the LX40 to point to the Plaspy endpoint and no protocol selection is required inside Plaspy.
- Proper device identification on first connection helps Plaspy map incoming telemetry to the correct device record.

## Transport and Connection Context

The LX40 can be configured to use common transport protocols to communicate with a back end. When integrating with Plaspy, devices should be pointed at the Plaspy endpoint so that location and telemetry flow into the platform for processing and display.

- The device may be configured using UDP or TCP on port 8888 depending on the LX40 firmware and installer preference.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies device configuration and onboarding.
- Network stability and mobile carrier behavior can affect delivery of reports over UDP versus TCP, so transport selection is sometimes influenced by deployment needs.
- Ensure firewall and APN settings allow outbound connections to d.plaspy.com on port 8888 from the vehicle modem.

## Protocol Compatibility Notes

- Firmware variations across LX40 units can change which telemetry fields are present or how often reports are sent; always validate behavior against the device firmware level.
- Hardware revisions and optional I O or CANBUS variants may expose different telemetry objects that Plaspy will normalize differently.
- Transport choice of UDP versus TCP can affect delivery guarantees and should match the installer guidance for the fleet environment.
- Manufacturer configurable scripting and custom parameters can modify reporting behavior and event thresholds; verify configuration when troubleshooting.
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is the standard way to integrate with Plaspy, but confirm settings during deployment.
- For advanced or changed behavior consult Xirgo documentation for firmware specific notes before adjusting production fleets.

## Why Protocol Understanding Matters

A practical understanding of how the LX40 communicates with Plaspy helps ensure a smooth onboarding, reliable reporting, and faster troubleshooting when devices do not behave as expected.

- Speeds initial setup by ensuring devices are pointed to the correct Plaspy endpoint and port.
- Helps diagnose connectivity versus configuration issues by separating transport problems from protocol or firmware differences.
- Clarifies expectations around which telemetry and events will appear in Plaspy based on device variant and firmware.
- Enables informed choices about transport selection and reporting intervals for a given fleet use case.
- Supports predictable OTA update and remote management workflows when Plaspy receives the expected device reports.

## Why Use Plaspy with This Protocol

Using the LX40 with Plaspy gives fleet operators a flexible combination of configurable onvehicle telematics and a centralized platform for real time tracking, alerting, and reporting. The LX40’s scripting engine, programmable inputs, CANBUS capable variants, and BLE sensor support let integrators tailor data collection to operational needs, while Plaspy provides the endpoint and tools to consolidate that data into actionable insights.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://xirgo.com/. Protocol support and firmware behavior can change over time so verify device behavior against the latest official documentation before deploying at scale.
