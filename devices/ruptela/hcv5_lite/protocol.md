---
slug: /ruptela/hcv5_lite/protocol
id: hcv5_lite-protocol
sidebar_label: Protocol
title: Ruptela - HCV5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Ruptela HCV5 Lite with Plaspy server settings and connection guidance
keywords:
  - Ruptela HCV5 Lite protocol
  - Ruptela HCV5 Lite GPS protocol
  - Ruptela HCV5 Lite Plaspy compatibility
  - Ruptela tracker communication
  - HCV5 Lite tracking protocol
  - Ruptela vehicle tracking
  - GPS tracker protocol Plaspy
  - fleet tracking Ruptela HCV5 Lite
  - BLE GPS tracker HCV5 Lite
  - CANbus OBD Ruptela HCV5 Lite
---

# Ruptela - HCV5 Lite Protocol

This page describes the public protocol context for using the Ruptela HCV5 Lite tracker with Plaspy. It focuses on the communication and connection aspects that matter when integrating the HCV5 Lite into Plaspy for vehicle tracking, telemetry, and fleet monitoring. The content here is intended to be high level and safe for public sharing while helping technical users and integrators understand how the device communicates with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to its endpoint. Exact protocol behavior for the HCV5 Lite can vary based on firmware version, hardware revision, and the manufacturer's implementation choices. For device specific packet formats or firmware behavior consult the official Ruptela documentation when needed.

## Protocol Overview

The HCV5 Lite communication protocol governs how the device packages and reports GNSS position, vehicle telemetry, input and output states, and accessory data to a server endpoint. In practice this means the tracker encodes sensor and CANbus information and transmits it to Plaspy so the platform can display position, alerts, and vehicle metrics.

- Enables the HCV5 Lite to report GNSS position and movement to the server for real time tracking.
- Carries vehicle data and inputs collected from OBD, CANbus, and accessory interfaces for telemetry and diagnostics.
- Conveys status signals such as tamper indications, backup battery state, and jamming alerts to the platform.
- Supports configuration commands and remote management when the device and firmware expose such features.
- Allows the device to identify itself and associate reported data with a specific vehicle and account on Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared server endpoint and automatically detects the protocol used by the connecting device. In most cases you do not need to manually select a protocol inside Plaspy as long as the HCV5 Lite is configured to report to the Plaspy endpoint.

- Plaspy listens on a single shared port for all supported devices so device reporting can use uniform connection settings.
- Devices can be pointed at the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 for direct reporting.
- Plaspy automatically detects the tracker protocol after the device initiates communication with the server.
- If the HCV5 Lite is configured correctly to report to the Plaspy endpoint, manual protocol selection in the platform is typically not required.
- Detection enables Plaspy to parse incoming data into position, events, and telemetry for the fleet dashboard.

## Transport and Connection Context

The HCV5 Lite can be configured to use common transport layers to reach the Plaspy endpoint. Connection context covers whether the device reports over UDP or TCP and which server host it is pointed to, rather than the internal packet layout.

- The HCV5 Lite may be configured to use either UDP or TCP depending on device firmware and configuration choices.
- Plaspy accepts device connections on port 8888 and all devices in Plaspy use the same port for reporting.
- Devices can be configured to send data to d.plaspy.com or to the server IP 54.85.159.138 as an alternative.
- Selecting UDP or TCP affects reliability and behavior at the transport layer but not the fact that Plaspy will detect the protocol.
- Ensure the tracker’s APN and outbound connectivity allow traffic to the Plaspy endpoint and to port 8888.

## Protocol Compatibility Notes

- Firmware version differences can change which fields or event types the HCV5 Lite includes in reports; always note firmware when validating behavior.
- Hardware revisions and optional accessory modules may introduce new inputs or telemetry that affect reported data.
- Manufacturer configuration tools and default settings determine whether the device uses UDP or TCP, and which server address is programmed.
- Some implementations expose remote command channels; availability depends on device firmware and provisioning.
- Validate compatibility by checking the HCV5 Lite configuration against Plaspy reporting expectations and endpoint settings.
- For any advanced integration features reference the manufacturer documentation for firmware specific behavior.

## Why Protocol Understanding Matters

A practical understanding of the HCV5 Lite communication protocol helps ensure reliable setup, accurate data interpretation, and efficient troubleshooting when integrating the device with Plaspy. Knowing how the device is expected to report and what transport it uses reduces time spent diagnosing connectivity or data issues.

- Helps confirm the device is pointing to the correct Plaspy endpoint and port before troubleshooting higher level problems.
- Makes it easier to verify which telemetry fields should appear in Plaspy based on the HCV5 Lite configuration and firmware.
- Supports efficient network troubleshooting by clarifying whether UDP or TCP is in use and ensuring transport ports are open.
- Assists in validating device identity and vehicle mapping so reported data is associated with the correct asset.
- Informs decisions about firmware updates, accessory integrations, and feature availability during deployment planning.

## Why Use Plaspy with This Protocol

Using the Ruptela HCV5 Lite with Plaspy gives fleet operators a straightforward path to collect position, vehicle telemetry, and event data in a single platform. Plaspy’s shared endpoint model simplifies device provisioning because one server domain and port can be used for many supported devices, while the platform automatically recognizes the tracker protocol when data arrives.

If you want to learn more about Plaspy and how it works with devices like the HCV5 Lite visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and installation instructions verify current information on the manufacturer website https://ruptela.com/ as manufacturer behavior and firmware features can change over time.
