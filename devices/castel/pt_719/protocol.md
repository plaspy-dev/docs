---
slug: /castel/pt_719/protocol
id: pt_719-protocol
sidebar_label: Protocol
title: Castel - PT-719 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Castel PT 719 GPS tracker and Plaspy connectivity with transport and compatibility context
keywords:
  - Castel PT-719 protocol
  - Castel PT-719 GPS protocol
  - Castel PT-719 communication
  - PT-719 tracking protocol
  - Castel GPS tracker protocol
  - PT-719 Plaspy compatibility
  - vehicle tracking PT-719
  - RFID attendance PT-719
  - GPS tracker protocol guide
  - Plaspy device compatibility
---

# Castel - PT-719 Protocol

This page provides a public protocol overview for using the Castel PT-719 GPS tracker with the Plaspy platform. It summarizes how the device communicates in general terms, what to expect when integrating the tracker with Plaspy, and which transport and addressing choices are commonly used. The PT-719 is a compact 2G quad band GPS tracker with real time location reporting and an RFID attendance feature, which makes it suitable for staff management, school attendance, and logistics cases.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Devices that report to Plaspy may be configured to use either UDP or TCP and send data to d.plaspy.com or the server IP 54.85.159.138 on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, though exact behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The PT-719 reporting protocol defines how the tracker identifies itself, reports GPS position and status, and delivers RFID attendance events to a remote server. For integration with Plaspy this protocol provides the messages and sequence needed for location updates and device status to be usable by a fleet or tracking platform without exposing device internals.

- Enables the tracker to send position, time, and status information to a remote endpoint for mapping and alerts.
- Carries device identification so Plaspy can associate incoming reports with the correct asset record.
- Transmits external sensor or RFID event data that may be used for attendance or asset interactions.
- Supports periodic and event driven reporting so Plaspy receives timely updates for monitoring and historical records.
- Works over common transports so the same endpoint settings on Plaspy can receive messages from many trackers.

## How Plaspy Detects the Protocol

Plaspy receives reports at a single shared endpoint and port and determines how to interpret the incoming messages so users do not normally have to choose a protocol manually. When the PT-719 is pointed at the Plaspy endpoint and uses the supported transport, that device's reports are accepted and associated with the correct device entry.

- Plaspy listens on port 8888 for device connections and reports.
- Devices may be configured to target d.plaspy.com or the server IP 54.85.159.138.
- The device may use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy automatically detects the tracker protocol for properly formatted incoming reports.
- In most deployments the end user only needs to configure the device to report to the Plaspy endpoint.

## Transport and Connection Context

Transport and connection choices determine how the PT-719 reaches the Plaspy servers but do not change the overall reporting intent. The tracker can be set up to use UDP or TCP to reach Plaspy, and these transport options influence delivery characteristics like reliability and retransmission.

- The PT-719 may use UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can be configured to point to the hostname d.plaspy.com or the IP 54.85.159.138.
- Port 8888 is the single port Plaspy uses for all device connectivity.
- UDP is commonly used for lightweight periodic reports while TCP may be selected where a connection oriented transport is preferred, depending on device firmware and configuration.
- Network and APN settings on the tracker must allow outbound connections to the Plaspy endpoint for reporting to succeed.

## Protocol Compatibility Notes

- Firmware versions can change message behavior and available fields; verify firmware details when diagnosing discrepancies.
- Hardware revisions or regional variants of the PT-719 may implement minor protocol differences.
- Manufacturer configuration pages or provisioning settings often control transport selection between UDP and TCP.
- RFID attendance reporting is a feature to confirm with device documentation for event format and timing.
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is the expected connection configuration for Plaspy.
- Always validate compatibility against the latest manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Knowing the communication protocol helps ensure the PT-719 is configured correctly, that Plaspy receives the expected data, and that issues can be diagnosed efficiently. A clear understanding reduces integration time and improves reliability.

- Ensures correct device addressing so reports arrive at the Plaspy endpoint.
- Helps choose the appropriate transport mode of UDP or TCP for the intended deployment.
- Supports troubleshooting when reports are missing, delayed, or misidentified in the platform.
- Improves planning for battery and reporting intervals by understanding how and when the device transmits.
- Aids in mapping RFID events and device status to Plaspy features for attendance and monitoring workflows.

## Why Use Plaspy with This Protocol

Using the Castel PT-719 with Plaspy provides a straightforward way to convert the tracker’s position, status, and RFID events into fleet insights and attendance logs. Plaspy’s shared endpoint approach and automatic protocol detection simplify device onboarding so teams can focus on operational use rather than low level integration tasks.

To learn more about Plaspy and how it works with devices like the PT-719 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; confirm the latest device specific protocol and firmware information on the Castel website http://www.castelecom.com/ before final deployment.
