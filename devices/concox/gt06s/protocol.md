---
slug: /concox/gt06s/protocol
id: gt06s-protocol
sidebar_label: Protocol
title: Concox - GT06S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating Concox GT06S with Plaspy for GPS tracking telemetry and device communication
keywords:
  - Concox GT06S protocol
  - Concox GT06S GPS protocol
  - Concox GT06S tracking protocol
  - GT06S Plaspy compatibility
  - Concox tracker protocol
  - GT06S communication protocol
  - GPS tracker protocol
  - vehicle tracking protocol
  - Plaspy device compatibility
  - fleet tracking GT06S
---

# Concox - GT06S Protocol

This page describes the public protocol context for using the Concox GT06S tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a connection and telemetry level without exposing proprietary or sensitive implementation details. The goal is to help operators and integrators understand what the tracker reports and how Plaspy receives that information for mapping, alerts, and reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is configured to report to Plaspy. Exact protocol behavior and available features can vary by GT06S firmware, hardware revision, and manufacturer implementation, so this page emphasizes general, public-facing protocol context and practical compatibility considerations.

## Protocol Overview

The GT06S reporting protocol is the mechanism by which the device sends location, status, and event telemetry to a cloud endpoint. In practical terms this protocol ensures the tracker can identify itself, transmit GNSS and cell based positions, deliver alarm and sensor events, and allow the server to translate those messages into usable data for fleet workflows.

- Encodes device identity and status so the server can associate telemetry with a vehicle or asset.
- Transports GNSS and LBS location updates plus timestamps and basic sensor state.
- Conveys event types such as ignition status, tamper alerts, accelerometer events, and remote cut off requests in a machine readable form.
- Allows the cloud platform to map, display, and archive location and event data for alerts and reports.
- Supports offline log upload on reconnect so historical points are preserved after connectivity loss.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and determines the tracker protocol automatically when a device is properly pointed at the service. In most cases the device owner does not need to select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint and uses the supported transport settings.

- Plaspy’s public endpoint for device reporting is d.plaspy.com and can also be reached at 54.85.159.138.
- The Plaspy platform listens on port 8888 for device connections.
- Devices may use either UDP or TCP to connect to Plaspy on port 8888.
- All devices in Plaspy use the same port, simplifying server configuration on the tracker side.
- Plaspy automatically detects the tracker protocol once data arrives at the shared endpoint.
- Proper APN and network configuration on the SIM side are required for the device to reach the Plaspy endpoint.

## Transport and Connection Context

The GT06S typically transmits its telemetry over the mobile network using a SIM card and can be configured to use TCP or UDP transport to send data to Plaspy. Connection context is important for reliability and for matching the device to the Plaspy service address and port.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Use TCP or UDP on port 8888 depending on device configuration and operator preference.
- All Plaspy supported devices use the same port number 8888 for reporting to the platform.
- Mobile network settings such as APN, signal strength, and provider roaming behavior affect delivery.
- Ensure the GT06S is configured to point to the Plaspy endpoint and that the SIM has data connectivity.
- Offline log upload behavior restores historical points after reconnection so that Plaspy maintains continuity.

## Protocol Compatibility Notes

- Firmware differences can change which messages or event types the device sends; verify behavior for your firmware version.
- Hardware revisions and regional variants of the GT06S may have slightly different feature sets or telemetry fields.
- Manufacturer side configuration options such as transport mode selection (TCP versus UDP) affect how the device connects to Plaspy.
- Confirm APN and mobile network provisioning to ensure reliable delivery to the Plaspy endpoint.
- Test a single device on your account before wide deployment to validate event mapping and reporting cadence.
- Refer to manufacturer documentation for message timing limits and device specific configuration methods such as SMS or remote management.

## Why Protocol Understanding Matters

Knowing the public protocol context for the GT06S helps with setup, troubleshooting, and long term reliability when integrating devices into Plaspy. Clear expectations about what the tracker reports and how the platform receives it reduce time spent diagnosing connectivity and data mapping issues.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 and using port 8888 for successful delivery.
- Helps troubleshoot missing telemetry by checking transport type and APN settings.
- Aids in interpreting event types such as ignition, tamper, accelerometer alerts, and remote cut off in Plaspy dashboards.
- Supports planning for firmware updates that may change available telemetry fields or behavior.
- Improves deployment confidence by validating a sample device before scaling.

## Why Use Plaspy with This Protocol

Using the GT06S with Plaspy gives fleet and asset operators practical, real time visibility into vehicle location, ignition status, accelerometer events, and anti theft features such as remote cut off. Plaspy maps and interprets the device telemetry into dashboards, alerting rules, and historical reports so teams can act on events, analyze driver behavior, and maintain continuity through offline log upload.

Plaspy’s shared endpoint and automatic protocol detection simplify integration: point your GT06S devices to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP and the platform will recognize the reporting device. To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official Concox site at https://www.iconcox.com/ as implementations can evolve over time.
