---
slug: /skypatrol/sp3400c/protocol
id: sp3400c-protocol
sidebar_label: Protocol
title: SkyPatrol - SP3400C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SkyPatrol SP3400C GPS tracker integration with Plaspy server and connection context
keywords:
  - SkyPatrol SP3400C protocol
  - SkyPatrol SP3400C GPS protocol
  - SkyPatrol SP3400C protocol for Plaspy
  - SkyPatrol SP3400C communication protocol
  - GPS tracker communication
  - vehicle tracking protocol
  - Plaspy compatibility
  - CDMA GPS tracker
  - fleet management tracker
  - over the air firmware
---

# SkyPatrol - SP3400C Protocol

This page describes the public protocol context for using the SkyPatrol SP3400C GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy, the role of the tracker reporting protocol, and the connection settings you will commonly use when integrating the SP3400C into the Plaspy platform. The content here is non-sensitive and intended to help administrators and integrators understand the communication relationship between the device and Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and reported fields can vary by firmware version, hardware revision, and manufacturer implementation. For device specific commands, binary formats, or firmware release notes, consult the official SkyPatrol documentation.

## Protocol Overview

The protocol glossary for the SP3400C is the set of conventions that allows the device to send position and telemetry to a server and to receive configuration or updates when supported by the device. In practice this means the tracker packages GPS fixes, status flags, and I/O state in a way the receiving server can interpret and map to vehicle tracking features.

- Enables the device to report GPS location, time, and basic telemetry to a remote server.
- Carries status signals from the SP3400C such as ignition sense, accelerometer events, and I/O state.
- Provides the observable channel for over the air firmware updates and remote configuration when the device and carrier support it.
- Lets the receiving platform identify the device and associate incoming messages with a vehicle or asset record.
- Serves as the foundation for higher level features like geofence alerts, movement detection, and event reporting.

## How Plaspy Detects the Protocol

Plaspy automatically identifies the tracker protocol when a device begins reporting to the Plaspy server endpoint. Users do not normally need to choose a specific protocol inside Plaspy if the device is configured to report to the correct Plaspy destination and uses a supported transport.

- Plaspy exposes a shared server endpoint at d.plaspy.com and the public IP 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port and the platform listens on port 8888 for incoming device connections.
- Devices may be configured to report via UDP or TCP to the Plaspy endpoint depending on device capabilities and carrier support.
- When a properly configured SP3400C reports to the Plaspy endpoint, Plaspy will automatically detect and interpret the protocol for that device.
- In most cases, integration simply requires pointing the device at the Plaspy address and confirming transport and credentials if applicable.

## Transport and Connection Context

Connection context covers how the SP3400C reaches Plaspy and what transport options are typically available. The SP3400C supports multiple communication methods and its configuration will determine whether UDP or TCP is used for live reporting.

- The SP3400C may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can point to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138 as the reporting destination.
- Plaspy uses the same port for all supported devices, simplifying device configuration across fleets.
- Depending on carrier and device settings, SP3400C units may also support SMS for certain communications, though server reporting to Plaspy typically uses IP transport.
- Verify network and carrier settings to ensure the tracker can reach Plaspy over the selected transport.

## Protocol Compatibility Notes

- Firmware versions can change the exact set of fields the device reports and how events are encoded; confirm firmware release notes for details.
- Hardware revisions and regional variants of the SP3400C may exhibit differences in available inputs, outputs, or cellular band support.
- Transport selection (UDP vs TCP) can affect behavior such as retransmission and session semantics; pick the transport that matches your network and device configuration.
- Over the air firmware capability means behavior can change after an update; coordinate updates during planned maintenance windows.
- Manufacturer configuration strings and server settings must be entered correctly on the device to ensure it reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Validate compatibility against SkyPatrol documentation and test a sample device before wide deployment.

## Why Protocol Understanding Matters

Understanding how the SP3400C communicates helps ensure reliable data flow into Plaspy, supports faster troubleshooting, and informs decisions about fleet configuration and operations. A clear view of protocol and transport choices reduces integration friction and improves long term reliability.

- Speeds initial setup by making it clear which server and port the device must report to.
- Helps troubleshoot connectivity issues by narrowing whether the problem is transport, network, or device configuration.
- Informs decisions about firmware updates, since protocol behavior can change across firmware releases.
- Enables correct mapping of device telemetry and I/O to monitoring and alerting rules in Plaspy.
- Supports planning for scale by ensuring consistent configuration across a mixed fleet of devices.

## Why Use Plaspy with This Protocol

Using the SkyPatrol SP3400C with Plaspy gives organizations a straightforward path to vehicle visibility, event monitoring, and operational oversight. The SP3400C’s rugged design, CDMA connectivity, accelerometer, and I/O capabilities make it suitable for many vehicle telematics scenarios, while Plaspy receives and normalizes the device data so fleets can act on it.

Plaspy’s shared connection model and automatic protocol detection simplify integration: point the SP3400C at d.plaspy.com or 54.85.159.138 on port 8888 using the supported transport, and Plaspy will handle the incoming device reports. To learn more about Plaspy and how it supports tracker integrations, visit https://www.plaspy.com. For the most current SP3400C protocol details, firmware notes, and device specific instructions, verify information with the manufacturer at https://www.skypatrol.com/ as device implementations and firmware behavior may change over time.
