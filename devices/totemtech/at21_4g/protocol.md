---
slug: /totemtech/at21_4g/protocol
id: at21_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT21-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Totemtech AT21 4G tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Totemtech AT21-4G protocol
  - Totemtech AT21-4G GPS protocol
  - Totemtech AT21-4G tracking protocol
  - Totemtech AT21-4G communication
  - Plaspy tracker protocol
  - Plaspy device compatibility
  - solar powered GPS tracker protocol
  - remote asset tracking protocol
  - LTE tracker protocol compatibility
  - multi GNSS tracker protocol
---

# Totemtech - AT21-4G Protocol

This page describes the public protocol context for using the Totemtech AT21-4G tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general terms, what connection settings are used, and what matters for reliable integration without exposing firmware internals or confidential packet formats.

The AT21-4G is a solar powered 4G asset tracker designed for long term remote deployments and is Plaspy compatible. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Users should combine this high level protocol context with Totemtech documentation when validating specific firmware features or commands.

## Protocol Overview

The communication protocol is the ruleset the AT21-4G uses to report location, sensor values, and event notices to a backend server such as Plaspy. This page explains the public role of that protocol for device identification, data reporting, and reliable delivery rather than low level packet formats.

- The protocol defines how the tracker sends GPS, telemetry and event data so Plaspy can map and interpret useful fields for monitoring and reporting.
- It enables device identification and session context so Plaspy can associate incoming reports with the correct asset and account.
- Reporting intervals, sleep behavior, and store and forward logic are controlled by the device and reflected in the data Plaspy receives.
- Transport aware behavior determines whether messages are sent over UDP, TCP or via SMS, which influences reliability and power trade offs.
- Offline logging on the device allows the protocol to support delayed uploads so historical tracks can be reconstructed in Plaspy after connectivity gaps.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from many tracker models and automatically detects the tracker protocol when the device reports to the Plaspy ingestion endpoint. In typical setups the user does not need to choose a protocol inside Plaspy provided the device is configured to report to the correct Plaspy endpoint.

- Plaspy’s ingestion endpoint is reachable at the domain d.plaspy.com and at the IP address 54.85.159.138.
- The service listens on port 8888 for device reports and all devices in Plaspy use the same port for ingestion.
- Plaspy automatically detects the tracker protocol when the AT21-4G is configured to send data to the Plaspy endpoint.
- For most deployments there is no manual protocol selection required in Plaspy if the device is pointed correctly to the Plaspy server.
- If multiple transport options are available on the tracker, configuring the intended transport (UDP or TCP) to target d.plaspy.com on port 8888 is the primary step to begin reporting.

## Transport and Connection Context

Transport choices and connection settings control how the AT21-4G reaches Plaspy and affect delivery reliability, latency, and power consumption. The device supports multiple transport methods and can be configured according to deployment needs.

- The AT21-4G may be configured to use UDP or TCP on port 8888 depending on device firmware and provisioning.
- Devices can be pointed to the Plaspy domain d.plaspy.com or the IP address 54.85.159.138 as the server endpoint.
- Plaspy uses the same port 8888 for all supported devices which simplifies server settings across a mixed fleet.
- UDP is often used for lower overhead reporting while TCP can be chosen where reliable delivery and session handling are preferred.
- SMS fall back is available on the device for environments where IP data is unavailable; SMS behavior is managed separately from the IP transports.
- Network and APN configuration on the device determines whether the device reaches Plaspy over LTE Cat 1 or when it falls back to lower generation networks.

## Protocol Compatibility Notes

- Firmware version differences can change available reporting fields, transport options, and configuration commands. Always check the device firmware level when validating compatibility.
- Hardware revisions and regional band kits may affect cellular behavior and therefore the practical reporting performance to Plaspy.
- Manufacturer configuration methods such as SMS provisioning, USB tools, or vendor portal settings can alter which transport and server values are active.
- Choose UDP or TCP on the device according to the deployment priorities for power consumption and delivery reliability.
- Offline log storage and store and forward behavior may vary by firmware and will determine how historical data is uploaded to Plaspy.
- Validate any special sensor or I/O features against Totemtech documentation to confirm how those fields appear in Plaspy reports.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps ensure a successful deployment, easier troubleshooting, and predictable long term operation. Knowing the transport, endpoint, and general behavior reduces time spent diagnosing connectivity and data interpretation issues.

- Correct server endpoint and port settings are the first step to get the device reporting to Plaspy reliably.
- Awareness of UDP versus TCP implications helps balance battery life versus delivery guarantees.
- Knowing the role of offline logging and store and forward explains how historical tracks appear after signal loss.
- Recognizing firmware dependent behavior speeds troubleshooting when fields or events are missing from incoming reports.
- Understanding how identification and session context are presented helps correlate device reports with inventory and asset records.

## Why Use Plaspy with This Protocol

Using the AT21-4G with Plaspy gives organizations a practical way to monitor remote assets with long life solar powered hardware while leveraging Plaspy’s mapping, alerts, and reporting features. The combination supports real time location updates, telemetry aggregation from I/O and sensors, and historical playback after connectivity gaps.

Plaspy’s shared ingestion endpoint simplifies configuration for mixed fleets by using d.plaspy.com or 54.85.159.138 on port 8888 and by automatically detecting the tracker protocol when the device is properly pointed at the Plaspy server. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware notes, and manufacturer instructions verify information on the Totemtech website http://www.totemtek.com/ as implementations and firmware features can change over time.
