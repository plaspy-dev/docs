---
slug: /topten/tk108/protocol
id: tk108-protocol
sidebar_label: Protocol
title: TopTen - TK108 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the TopTen TK108 GPS tracker with Plaspy server settings and compatibility guidance
keywords:
  - TopTen TK108 protocol
  - TopTen TK108 GPS
  - TK108 communication protocol
  - TK108 Plaspy compatibility
  - TopTen tracker protocol
  - TK108 tracking protocol
  - vehicle GPS protocol
  - GPS tracker compatibility Plaspy
  - fleet tracking TK108
  - TopTen TK108 protocol guide
---

# TopTen - TK108 Protocol

This page provides a public protocol overview for integrating the TopTen TK108 vehicle GPS tracker with Plaspy. It explains the general communication context used when the TK108 reports position, alerts, and telemetry to Plaspy without exposing firmware internals or private parser details. The goal is to help fleet managers, integrators, and technical users understand how the device communicates with Plaspy in broad, practical terms.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact behavior of the TK108 reporting protocol can vary with firmware version, hardware revision, and manufacturer implementation, so some device features such as SMS alarm control, engine on off alerts, SOS signaling, analog fuel input, and offline logging may behave differently between units.

## Protocol Overview

The TK108 communication protocol is the mechanism by which the tracker reports location, status, and alerts to a remote server and receives configuration or control commands as permitted by the device. For Plaspy integration, the protocol enables the tracker to identify itself to the server, transmit GPS and telemetry data, and send event notifications that Plaspy can use for monitoring and alerts.

- Transmits GPS positions and timestamps to a reporting endpoint so locations appear in Plaspy
- Sends event notifications such as engine on off, power fail alerts, and SOS alarms that map to Plaspy event types
- Allows delivery of auxiliary telemetry like analog fuel monitoring and basic sensor states
- Supports storage and later upload of offline waypoints from the TK108 data logger when connectivity returns
- Carries device identity information so Plaspy can associate incoming messages with the correct tracker record

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint and automatically determines the tracker protocol for incoming device traffic. When a TK108 is configured to report to the Plaspy endpoint, the platform will associate messages from that device with the appropriate record without requiring manual protocol selection.

- Plaspy accepts tracker traffic sent to d.plaspy.com or the server address 54.85.159.138
- All devices in Plaspy use the same port so configuration is consistent across tracker models
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and preference
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol inside the platform when the device points to the Plaspy endpoint
- Proper device ID and reporting settings on the TK108 are important so Plaspy can match incoming data to the correct tracker

## Transport and Connection Context

The transport layer and server endpoint are the primary connection details required to deliver TK108 reports to Plaspy. Depending on the tracker configuration, the TK108 can send messages over UDP or TCP to the Plaspy listener on the shared port.

- The device may be configured to send data using UDP or TCP on port 8888
- The tracker can point to the Plaspy server by domain name d.plaspy.com or by IP address 54.85.159.138
- Plaspy uses the same port for all supported devices to simplify device configuration
- Choice of UDP versus TCP can affect delivery guarantees and retransmission behavior based on the tracker firmware
- Ensure APN, SMS fallback, and network registration are correctly set on the TK108 so it has cellular connectivity to reach the Plaspy endpoint

## Protocol Compatibility Notes

- TK108 features such as SMS arm disarm, phone call control, SOS alarm, and analog fuel input may depend on firmware and hardware revision
- Different TK108 batches or firmware releases can implement reporting fields or event names slightly differently
- Transport selection between UDP and TCP should match what the device firmware supports and what was configured on the unit
- Offline logging behavior from the TK108 data logger can vary in capacity and upload timing depending on firmware
- Verify device identity strings and reporting intervals to ensure Plaspy associates data correctly
- For device specific commands or behavior confirm details with the manufacturer documentation

## Why Protocol Understanding Matters

Understanding the TK108 communication protocol helps ensure successful setup, reliable reporting, and clearer troubleshooting when integrating with Plaspy. Awareness of how the tracker reports position and events makes it easier to validate correct operation and to diagnose issues related to connectivity, configuration, or firmware.

- Ensures correct device configuration so reports reach d.plaspy.com or 54.85.159.138 on port 8888
- Helps match expected device events such as engine on off and SOS with Plaspy event handling
- Aids in troubleshooting connectivity problems by verifying UDP or TCP selection and APN settings
- Supports planning for offline logging and later data uploads from the TK108 data logger
- Reduces configuration time by confirming the tracker is set to the shared Plaspy port and endpoint

## Why Use Plaspy with This Protocol

Using Plaspy with the TopTen TK108 provides a practical way to consolidate location, event, and telemetry reporting for vehicle fleets. Plaspy consumes the TK108 reporting feed and converts position updates, power and engine alerts, SOS signals, and fuel monitoring data into actionable information for operations, security, and maintenance workflows. This combination is useful for organizations that need continuous visibility, timely alerts, and historical movement records.

If you want to learn more about how Plaspy works with vehicle trackers like the TopTen TK108 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time and you should verify the most current device specific information with the manufacturer at http://www.t10.cn.
