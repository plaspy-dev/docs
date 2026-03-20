---
slug: /gosafe/g1c/protocol
id: g1c-protocol
sidebar_label: Protocol
title: Gosafe - G1C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Gosafe G1C GPS tracker and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - Gosafe G1C protocol
  - Gosafe G1C GPS protocol
  - G1C Plaspy compatibility
  - Gosafe tracker protocol
  - G1C tracking protocol
  - Gosafe GPS communication
  - G1C fleet tracking
  - Plaspy device compatibility
  - vehicle tracker protocol
  - Gosafe G1C setup
---

# Gosafe - G1C Protocol

This page describes the public protocol context for using the Gosafe G1C tracker with the Plaspy fleet platform. It focuses on how the device communicates with Plaspy in general, the connection and transport choices commonly used, and practical compatibility considerations. The G1C is a compact GPS tracker designed for a variety of automotive applications and offers LTE CAT 1 and GPRS connectivity, internal cellular and GPS antennas, ignition detection, crash data recording, and other telemetry useful to fleet and asset monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. For G1C devices this typically means pointing the tracker at Plaspy's server d.plaspy.com or the equivalent IP 54.85.159.138 and using port 8888. The G1C may be configured to use UDP or TCP on port 8888 depending on device settings and network environment. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation, so validate device specific details with official manufacturer documentation when needed.

## Protocol Overview

The tracker reporting protocol defines how the Gosafe G1C sends location, status, and event data to a cloud endpoint like Plaspy and how the platform identifies and processes those incoming messages. In practice the protocol enables periodic position reports, event driven messages such as ignition or crash events, and simple remote commands where supported, all routed to Plaspy for parsing and display.

- Enables the G1C to deliver GPS position, timestamps, and basic telemetry to a remote server
- Carries event indicators such as ignition state and panic input in messages consumed by Plaspy
- Provides the information Plaspy needs to correlate device identity with fleet assets
- Supports operation over cellular networks using LTE CAT 1 or GPRS depending on coverage and configuration
- Works with the device internal antennas and low power design to support discreet installations

## How Plaspy Detects the Protocol

Plaspy receives data on a shared endpoint and uses automatic detection to determine the incoming tracker protocol so users generally do not need to select a protocol manually. If a G1C is configured to report to the Plaspy endpoint and the device is reachable over the network, Plaspy will attempt to parse the messages and associate them with the corresponding asset record.

- Plaspy listens on a common server address d.plaspy.com and the public IP 54.85.159.138 using port 8888
- All Plaspy supported devices use the same port, simplifying device configuration
- The platform automatically detects the tracker protocol when the device sends data to the Plaspy endpoint
- In most setups you only need to configure the G1C to report to d.plaspy.com or 54.85.159.138 on port 8888
- Manual protocol selection inside Plaspy is not usually required if the device sends data to the shared endpoint correctly

## Transport and Connection Context

Transport choices affect how the G1C transmits data to Plaspy but do not change the high level purpose of the protocol. The G1C supports cellular connectivity and can be configured to use either UDP or TCP on the Plaspy port depending on what the carrier, firmware, or installation requires.

- The G1C may be configured to use UDP or TCP on port 8888 depending on device settings
- Devices should be pointed to the Plaspy server d.plaspy.com or the IP 54.85.159.138 as the destination
- Plaspy uses the same port 8888 for all devices to simplify configuration and firewall rules
- Choice of UDP versus TCP can affect reliability and latency but is determined by device configuration and network conditions
- Ensure any network firewalls or NAT devices allow outbound traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware updates can change message behavior and available features; check the installed firmware version when validating compatibility
- Hardware revisions or region specific variants of the G1C may expose different configuration options or transport defaults
- Manufacturer settings may default to UDP or TCP; verify and set the transport to match network policies and Plaspy expectations
- Crash data, driving behavior, and other advanced telemetry are device capabilities and their reporting cadence may vary by firmware
- Plaspy will automatically attempt to detect the protocol when the device reports to d.plaspy.com or 54.85.159.138 on port 8888
- Always cross reference manufacturer documentation for model specific limitations, recommended settings, and firmware notes

## Why Protocol Understanding Matters

Understanding how the G1C communicates helps ensure reliable reporting, correct device identification, and effective troubleshooting when integrating with Plaspy. Knowledge of transport choices, expected events, and the device capabilities reduces configuration errors and shortens support cycles.

- Properly pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 prevents common misconfiguration issues
- Knowing whether the device is using UDP or TCP helps with firewall and network configuration
- Awareness of firmware differences aids in interpreting unexpected behavior or missing telemetry
- Understanding event reporting such as ignition and crash data improves monitoring rules and alerts
- Clear protocol expectations make it easier to validate device health and connectivity during deployments

## Why Use Plaspy with This Protocol

Using the Gosafe G1C with Plaspy provides a straightforward path to capture location and event data from a compact, low power tracker into a platform designed for fleet visibility and operational oversight. Plaspy’s shared endpoint approach simplifies device setup across large deployments and reduces the number of per device configuration steps required to get telemetry flowing.

If you want to learn more about how Plaspy handles device connectivity and fleet features, visit https://www.plaspy.com. For device specific protocol details, firmware notes, and the latest manufacturer guidance for the Gosafe G1C, please verify information on the official Gosafe website https://gosafesystem.com/ because protocol support and firmware behavior can change over time.
