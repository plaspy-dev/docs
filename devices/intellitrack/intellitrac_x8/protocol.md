---
slug: /intellitrack/intellitrac_x8/protocol
id: intellitrac_x8-protocol
sidebar_label: Protocol
title: Intellitrack - Intellitrac X8 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Intellitrac X8 compatibility with Plaspy servers and connection context for reliable GPS reporting
keywords:
  - Intellitrack Intellitrac X8 protocol
  - Intellitrack Intellitrac X8 GPS protocol
  - Intellitrac X8 communication protocol
  - Intellitrac X8 tracking protocol
  - Intellitrack protocol Plaspy
  - Intellitrac X8 Plaspy compatibility
  - GPS tracker protocol documentation
  - vehicle tracking protocol Intellitrack
  - GPS tracking integration Plaspy
  - fleet management tracker protocol
---

# Intellitrack - Intellitrac X8 Protocol

This page describes the public protocol context for using the Systech IntelliTrac X8 GPS tracker with Plaspy. It focuses on how the device communicates at a high level with Plaspy servers so integrators, fleet managers, and technical teams can understand connection and reporting behavior without exposing private implementation details.

The IntelliTrac X8 combines GPS positioning and GSM GPRS connectivity with features such as quadband cellular support, two way voice capability, backup battery, internal memory, multiple digital and analogue inputs, and configurable reporting modes. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

At a general level the tracker protocol is the set of communications rules the Intellitrac X8 uses to identify itself, report position and sensor data, and receive optional server commands. With Plaspy this protocol enables the device to send telemetry and status that the platform converts into location, events, and alerts for fleet workflows.

- Enables the tracker to deliver periodic or event driven GPS and sensor reports to the server
- Provides device identification so Plaspy can associate incoming data with the correct asset
- Carries status fields that indicate inputs, power state, and battery or memory conditions
- Supports multiple transport options so the device can operate across different network conditions
- Allows manufacturers to vary reporting intervals and trigger conditions depending on configuration

## How Plaspy Detects the Protocol

Plaspy accepts connections at a shared endpoint and port for all supported devices and automatically detects the tracker protocol. In normal use you do not need to select a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint; the platform uses the incoming connection context and device identification to classify the data stream.

- Plaspy uses a single server endpoint that devices report to for automatic detection
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol when data arrives on the shared port
- Users typically only need to configure the device to point to the Plaspy endpoint and select TCP or UDP as supported by the device

## Transport and Connection Context

Connection context covers how the IntelliTrac X8 sends data to the platform rather than the exact message layout. The X8 supports both packet and session oriented transports depending on configuration and network conditions, and Plaspy accepts the device on the same standardized endpoint and port used for other trackers.

- The device may be configured using UDP or TCP on port 8888
- Devices can be pointed to d.plaspy.com or 54.85.159.138 as the server destination
- Plaspy accepts both UDP and TCP connections on the shared port to accommodate device settings
- Using TCP can provide persistent sessions while UDP is commonly used for datagram style reporting
- Ensure the device APN and GPRS settings are correct so the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change reporting fields, default intervals, and available features
- Hardware revisions and optional accessories may expose different inputs or sensors to the protocol
- Manufacturer side configuration commands or tools may affect the exact data the device sends
- Choice of TCP versus UDP affects session behavior and can influence delivery characteristics
- Confirm device APN and network registration before troubleshooting higher level protocol issues
- Always validate device settings against official manufacturer documentation for firmware specific details

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure successful setup, accurate reporting, and efficient troubleshooting when integrating the Intellitrac X8 with Plaspy. Clear expectations about what the tracker reports and how it connects reduce configuration errors and improve operational reliability.

- Speeds up initial provisioning by aligning device server settings with Plaspy connection requirements
- Helps diagnose missing data by focusing on transport, APN, and device identification rather than parser internals
- Supports predictable behavior for reporting modes such as timed intervals or movement triggers
- Informs decisions about TCP or UDP based on network performance and firewall policies
- Makes it easier to validate that device inputs and sensors are arriving correctly in Plaspy dashboards

## Why Use Plaspy with This Protocol

Using the IntelliTrac X8 with Plaspy provides a practical path to real time vehicle visibility, secure reporting, and fleet monitoring without requiring manual protocol selection inside the platform. Plaspy accepts the device on a shared server endpoint and port, which streamlines integration and reduces configuration overhead for large deployments.

To learn more about how Plaspy works with GPS trackers and to review platform capabilities visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer site https://www.systech-iot.com/ before deploying at scale.
