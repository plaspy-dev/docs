---
slug: /meitrack/mt_80i/protocol
id: mt_80i-protocol
sidebar_label: Protocol
title: Meitrack - MT-80i Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Meitrack MT 80i and Plaspy compatibility connection context and integration notes
keywords:
  - Meitrack MT 80i protocol
  - Meitrack MT 80i GPS protocol
  - Meitrack MT 80i communication protocol
  - Meitrack MT 80i tracking protocol
  - Meitrack tracker protocol
  - MEITRACK protocol
  - GPS tracker compatibility Plaspy
  - Plaspy device integration
  - vehicle tracking protocol
  - asset tracking protocol
---

# Meitrack - MT-80i Protocol

This page describes the public protocol context for using the Meitrack MT-80i GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms, what to check when configuring reporting, and practical compatibility considerations. The intent is to clarify the communication role without exposing sensitive implementation details.

The MT-80i is a compact, low power tracker with SiRF III GPS performance and Quad Band GSM support. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so configuration and features may differ between units.

## Protocol Overview

At a high level the tracker protocol defines how the MT-80i reports location, status, and alerts to a remote server and how the server can send configuration commands back when supported. For Plaspy this protocol enables reliable position updates, event reporting, and basic device identification so incoming messages are associated with the correct unit.

- Carries GPS position, time, and basic device status from the MT-80i to the server.
- Communicates event driven messages such as SOS alerts, motion events, and low battery indications.
- Allows the server to associate messages with a device identifier so Plaspy can map reports to the correct asset.
- Supports multiple reporting modes commonly used on the MT-80i such as interval reporting, distance based reporting, and on demand queries.
- Works over standard mobile data or SMS reporting channels when the device is configured for GPRS reporting to a remote endpoint.

## How Plaspy Detects the Protocol

Plaspy is designed to accept tracker reports on a shared endpoint and automatically determine the tracker protocol based on incoming data and the configured reporting endpoint. In most cases a properly configured MT-80i will begin reporting to Plaspy without requiring manual protocol selection inside the platform.

- Plaspy receives device reports at the shared endpoint hosted at d.plaspy.com and at the public IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device setup on the tracker side.
- The standard Plaspy port for tracker reporting is 8888.
- Plaspy automatically detects the tracker protocol so manual protocol selection is usually unnecessary when the device is pointed to the Plaspy endpoint.
- Users should ensure the device identifier and reporting settings on the MT-80i match their Plaspy account registration so reports are attributed correctly.

## Transport and Connection Context

The MT-80i can be configured to use UDP or TCP for GPRS reporting depending on device settings and firmware capabilities. When integrating with Plaspy, confirm the transport mode and reporting host on the tracker so network traffic reaches the Plaspy endpoint reliably.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 for tracker reports and uses the same port for all supported devices.
- Choose UDP for lightweight periodic reporting when supported, or TCP if a persistent connection is preferred and supported by the device firmware.
- Ensure the mobile data APN and device GPRS settings are properly configured so the tracker can reach the Plaspy endpoint from the cellular network.

## Protocol Compatibility Notes

- The MT-80i often reports using MEITRACK protocol variants but behavior may differ across firmware builds.
- Firmware revisions and hardware batches can change available features like listen in, memory logging, or specific reporting options.
- Transport choice between UDP and TCP can affect delivery characteristics; match the device setting to your network and operational needs.
- Manufacturer configuration commands and SMS control methods may vary and should be validated against official Meitrack documentation.
- Always confirm device identifiers and reporting host entries before expecting data to appear in Plaspy.
- Test a single device first when deploying at scale to validate firmware behavior with the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding the MT-80i communication protocol improves setup success, helps troubleshoot missing reports, and supports long term reliability when devices are managed in Plaspy. Clear knowledge of reporting modes, transport, and identifier configuration reduces integration friction and operational surprises.

- Ensures the MT-80i is sending to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy receives data.
- Helps identify whether TCP or UDP is best for your environment and device firmware.
- Simplifies troubleshooting when reports are intermittent by narrowing issues to network, device config, or firmware.
- Allows verification that event types like SOS and motion alerts are delivered and processed by Plaspy.
- Supports planning for battery and reporting interval trade offs for long term deployments.

## Why Use Plaspy with This Protocol

Using the Meitrack MT-80i with Plaspy gives organizations a straightforward way to collect location, status, and alert data from compact low power trackers. Plaspy’s automatic protocol detection and unified listening port reduce configuration complexity so the MT-80i can be integrated into tracking workflows without per device port management.

If you want to learn more about using Plaspy with the MT-80i and other devices, visit https://www.plaspy.com for general platform information. For the most current device specific protocol commands, firmware notes, and implementation details always verify information with the manufacturer at https://www.meitrack.com/ as protocol behavior and firmware features can change over time.
