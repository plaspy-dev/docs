---
slug: /atrack/au7/protocol
id: au7-protocol
sidebar_label: Protocol
title: ATrack - AU7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ATrack AU7 GPS tracker and how it communicates with Plaspy for reporting and compatibility
keywords:
  - ATrack AU7 protocol
  - ATrack AU7 GPS protocol
  - AU7 tracking protocol
  - ATrack protocol Plaspy
  - AU7 compatibility Plaspy
  - vehicle tracking protocol AU7
  - AU7 communication protocol
  - ATrack AU7 RS232 CAN Bus
  - AU7 GPS GLONASS tracker
  - AU7 TCP UDP reporting
---

# ATrack - AU7 Protocol

This page covers the public protocol context for using the ATrack AU7 tracker with Plaspy. It explains how the device typically reports location and events and what role the communication protocol plays in delivering usable data to the Plaspy platform. The focus is on practical, non-sensitive information that helps with setup and expectations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by AU7 firmware, hardware revision, and manufacturer implementation, so device behavior may differ between deployments.

## Protocol Overview

The AU7 reporting mechanism provides a way for the tracker to identify itself, send position updates, and deliver event data such as geofence triggers, harsh driving detection, and sensor inputs to a server. Protocol-level behavior determines what data is transmitted, how frequently reports are sent, and how the device and server acknowledge events.

- The protocol enables the AU7 to transmit GPS GLONASS position, timestamp, and movement data to Plaspy.
- It carries supplementary telemetry such as inputs from RS-232 peripherals, CAN Bus interpreter readings, 1-Wire sensors, and the built in 3 axis G sensor.
- Device configuration rules and the AU7 custom reporting mechanism control when and how reports are generated.
- Optional features such as AES 128 encryption and FOTA can affect how data is exchanged and whether additional configuration is required.
- Transport selection and network mode determine whether messages are sent over UDP, TCP, SMS, or other supported channels.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a unified endpoint and automatically determines which device protocol is in use so users generally do not need to choose a protocol manually inside the platform. Proper device configuration to target Plaspy is the primary requirement for automatic detection to work reliably.

- Plaspy accepts device connections at the hostname d.plaspy.com and at the IP address 54.85.159.138 on the platform port 8888.
- Devices may be configured to use either UDP or TCP on port 8888 depending on their network support and operational preferences.
- All devices supported by Plaspy use the same port, which simplifies device setup and reduces configuration errors.
- When the AU7 is configured to report to the Plaspy endpoint, Plaspy will automatically identify the reporting protocol and process incoming messages.
- Users normally only need to ensure the AU7 network and reporting settings point to the Plaspy endpoint for detection to occur.

## Transport and Connection Context

Transport and connection settings are part of the practical considerations when integrating the AU7 into Plaspy. The AU7 supports multiple network modes and reporting channels, and choosing the appropriate transport affects reliability, latency, and configuration steps.

- The AU7 can send data over TCP or UDP on port 8888 when configured for IP reporting to Plaspy.
- Devices may be pointed to either the hostname d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses the same port 8888 for all devices, so the port setting does not need to vary between different models.
- Transport choice can impact packet delivery behavior and may be selected based on network conditions or operator SIM behavior.
- Alternative reporting channels supported by the AU7 such as SMS or USSD are device features but are separate from the Plaspy TCP/UDP endpoint integration.

## Protocol Compatibility Notes

- Firmware revisions can change reporting formats, available fields, and enabled features; always check the device firmware level when evaluating compatibility.
- Hardware revisions and optional accessories such as CAN Bus interpreters or 1-Wire devices can alter the set of telemetry items transmitted.
- Enabling AES 128 encryption or other security options on the AU7 may require additional configuration on the server side or in Plaspy to process encrypted payloads.
- Choosing TCP versus UDP affects delivery semantics and may require different network firewall settings or SIM operator allowances.
- FOTA or firmware update behavior can modify protocol behavior; verify update procedures and timing before deploying at scale.
- Validate compatibility by testing a device with Plaspy under expected network conditions and reviewing the manufacturer documentation for firmware specific protocol notes.

## Why Protocol Understanding Matters

Understanding the AU7 communication protocol helps ensure successful setup, reliable reporting, and predictable behavior when devices are managed by Plaspy. Awareness of protocol capabilities and limits leads to faster troubleshooting and better operational outcomes.

- It makes it easier to map AU7 telemetry to Plaspy fields and dashboards during initial configuration.
- It helps diagnose missing or unexpected data by isolating transport issues versus protocol or firmware differences.
- It clarifies how features such as event filtering, geo fence alerts, and harsh driving detection will be delivered to the platform.
- It supports planning for bandwidth and power management by understanding reporting intervals and wake patterns.
- It informs decisions about enabling optional features such as encryption, FOTA, or external sensor integrations.

## Why Use Plaspy with This Protocol

Using Plaspy with the ATrack AU7 gives organizations a straightforward way to collect location and event data from a capable GNSS tracker that supports rich telemetry and accessory inputs. Plaspy’s single endpoint approach and automatic protocol detection reduce configuration overhead while allowing teams to focus on monitoring, alerts, and operations rather than low level protocol selection.

To learn more about Plaspy and how it works with devices like the AU7 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and accessory compatibility please verify information with the manufacturer at https://www.atrack.com.tw/ as protocol support and firmware behavior may change over time.
