---
slug: /coban/bn_311b/protocol
id: bn_311b-protocol
sidebar_label: Protocol
title: Coban - BN-311B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Coban BN 311B compatibility with Plaspy real time tracking and connection guidance
keywords:
  - Coban BN 311B protocol
  - Coban BN 311B GPS protocol
  - BN 311B communication protocol
  - BN 311B tracking protocol
  - Coban GPS tracker Plaspy
  - motorcycle GPS protocol
  - compact vehicle tracker protocol
  - Plaspy device compatibility
  - real time vehicle tracking
  - fleet tracking protocol
---

# Coban - BN-311B Protocol

This page explains the public protocol context for using the Coban BN-311B tracker with Plaspy. It focuses on how the device reports location and telemetry to Plaspy, which connection endpoints are used, and what administrators should know about integration without describing private implementation details.

The BN-311B is a compact GSM GNSS motorcycle management terminal that streams location and telemetry using TCP, UDP, or SMS to an endpoint. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page clarifies the practical connectivity and detection points you will encounter when integrating a BN-311B with Plaspy.

## Protocol Overview

The BN-311B reporting protocol provides the rules and formats that allow the tracker to identify itself, report GNSS positions and telemetry, and signal alarm events to a remote platform. In Plaspy the protocol is treated as the channel for translating device messages into live locations, events, and historical data usable by fleet and anti-theft workflows.

- Enables the BN-311B to transmit GNSS position, speed, ACC ignition state, battery and power status, and alarm events to Plaspy.
- Provides the mechanism for geo-fence triggers, overspeed alerts, shock or movement alarms, and remote immobilizer commands to be associated with a specific device identity.
- Supports multiple transport options from the device such as TCP, UDP, or SMS so the tracker can reach Plaspy from different network conditions.
- Lets Plaspy ingest streamed data for live mapping, notifications, and historical route playback without requiring manual per device parsing by the user.
- Supplies contextual telemetry that Plaspy turns into alerts and reports for operational monitoring and incident review.

## How Plaspy Detects the Protocol

Plaspy receives incoming tracker messages on a shared endpoint and port and performs automatic detection to determine the tracker protocol in use. In most cases a properly configured BN-311B that reports to the Plaspy endpoint will be recognized and processed without manual protocol selection.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888 when reporting to Plaspy.
- All devices in Plaspy use the same port which simplifies device configuration and network rules.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol inside the platform if the device is pointed to the Plaspy endpoint.
- Proper device identity and stable reporting intervals help Plaspy map messages to the correct account and device record for reliable processing.

## Transport and Connection Context

Connection choices determine how the BN-311B sends its messages to Plaspy and influence firewall and network configuration. The device supports TCP and UDP reporting as well as SMS fallback, and Plaspy accepts those reports at a common network endpoint.

- The BN-311B may use UDP or TCP on port 8888 depending on device support and configuration preferences.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Because Plaspy uses the same port for all supported devices, network and firewall rules can be standardized across deployments.
- SMS reporting can be used for initial setup or as a fallback when GPRS is unavailable, subject to the device and operator SIM capabilities.
- Choose TCP when session reliability is preferred and UDP when lower overhead or lower latency is desired, according to the device and network conditions.

## Protocol Compatibility Notes

- Firmware versions can change message behavior, supported fields, and reporting options; verify the firmware level when troubleshooting.
- Hardware revisions and optional wiring harnesses may expose or hide certain inputs such as ACC or external power sensing.
- Manufacturer side configuration commands and SMS setup may differ by region or firmware and can affect how the device reports to Plaspy.
- Transport selection between TCP and UDP can affect delivery behavior; ensure the tracker is configured to use the preferred transport for your network.
- When using SMS reporting, expect differences in how data is formatted and delivered compared to GPRS reporting.
- Validate compatibility and available features against the official Coban documentation for the BN-311B and any firmware release notes.

## Why Protocol Understanding Matters

Understanding how the BN-311B communicates helps ensure correct installation, reliable reporting, and faster troubleshooting when integrating with Plaspy. A clear grasp of the communication context reduces setup time and supports predictable operational behavior.

- Ensures correct server address and transport settings on the tracker so reports reach Plaspy reliably.
- Helps diagnose connectivity or event reporting issues by knowing whether the device uses TCP, UDP, or SMS.
- Supports correct alarm and input wiring so telemetry like ACC and shock events are reported as expected.
- Allows administrators to plan firewall and network rules using the shared Plaspy endpoint and port.
- Improves confidence when upgrading firmware or changing device configurations by anticipating protocol related effects.

## Why Use Plaspy with This Protocol

Using the BN-311B with Plaspy delivers compact hardware capabilities into a platform designed for live tracking, alerting, and historical route analysis. The combination is well suited for motorcycle fleets, rental vehicles, and individual owners who need discreet installation, telemetry, and anti-theft tools such as remote immobilization and multiple alarm types.

Plaspy centralizes BN-311B location and event data into dashboards, notifications, and reports to support operational oversight and incident response. To learn more about Plaspy and how it works with compatible devices visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer documentation at https://www.coban.net/ since protocol support and implementation details can change over time.
