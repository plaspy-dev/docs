---
slug: /queclink/wts100/protocol
id: wts100-protocol
sidebar_label: Protocol
title: QuecLink - WTS100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the QuecLink WTS100 sensor with Plaspy for temperature telemetry and gateway integration
keywords:
  - QuecLink WTS100 protocol
  - QuecLink WTS100 GPS protocol
  - QuecLink WTS100 communication protocol
  - QuecLink WTS100 tracking protocol
  - WTS100 temperature sensor integration
  - QuecLink receiver gateway compatibility
  - Plaspy device protocol
  - Plaspy temperature telemetry
  - cold chain telemetry Plaspy
  - fleet monitoring temperature sensor
---

# QuecLink - WTS100 Protocol

This page describes the public protocol context for using the QuecLink WTS100 temperature sensor with Plaspy. It focuses on how the sensor's telemetry flows through QuecLink receivers or gateways and how that telemetry is made available inside the Plaspy platform for monitoring, alerts, and historical reporting.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol once telemetry is forwarded to its endpoint. Exact protocol behavior and message content can vary by firmware, hardware revision, gateway model, and manufacturer implementation, so this page provides general integration and connection context rather than device internal specifics.

## Protocol Overview

The WTS100 is a battery powered wireless temperature sensor that transmits telemetry to compatible QuecLink receivers or gateways. Those receivers forward sensor reports to backend systems which in turn deliver usable temperature, battery, and health data into Plaspy for unified visibility.

- The protocol enables the sensor to be identified and associated with a device record when its reports arrive via a QuecLink gateway.
- Telemetry typically includes temperature readings, battery status, and basic health or signal indicators as forwarded by the gateway.
- Gateways act as protocol translators and transport aggregators, sending sensor data to Plaspy so users can correlate temperature with fleet or asset data.
- The protocol role is primarily to deliver periodic or event driven telemetry from the sensor to the receiving gateway, not to provide direct cloud connectivity from the sensor itself.
- When the gateway forwards telemetry to Plaspy, the platform normalizes that data for dashboard display, alerts, and historical analysis.

## How Plaspy Detects the Protocol

Plaspy receives forwarded telemetry at a shared endpoint and port and uses protocol detection to identify the incoming device type. In most cases users do not need to manually choose a protocol in Plaspy when the gateway is correctly configured to report sensor data.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for incoming reports.
- Plaspy automatically detects the tracker protocol when telemetry arrives from a configured gateway or receiver.
- Users typically point their QuecLink gateway to the Plaspy endpoint and do not need to select a device protocol inside Plaspy for standard integrations.
- Proper gateway mapping of sensor identifiers to Plaspy device records ensures telemetry is attributed correctly without extra protocol configuration.

## Transport and Connection Context

Connection and transport choices depend on the gateway and deployment. The WTS100 itself communicates wirelessly to receivers on RF but the gateway is responsible for forwarding that data to Plaspy over IP networks.

- The device may be configured at the gateway to forward telemetry to d.plaspy.com or to the numeric server address 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on gateway support and network considerations.
- All devices in Plaspy use the same port 8888 so gateway configuration is consistent across supported hardware.
- Network reliability, firewall rules, and NAT behavior can affect whether UDP or TCP is preferable for a given installation.
- Ensure gateways are allowed to communicate outbound to the Plaspy endpoint to enable timely telemetry delivery.

## Protocol Compatibility Notes

- Firmware differences on gateways and receivers can change which fields or health indicators are forwarded to Plaspy; validate against current gateway firmware notes.
- Hardware revisions of receivers or gateways may alter RF handling or identification strings that are visible to backend systems.
- Because the WTS100 uses RF to talk to a gateway, confirm the specific gateway model supports the WTS100 on your firmware version.
- Transport selection between UDP and TCP may affect delivery characteristics such as ordering and retransmission; choose based on network reliability.
- End of life or product migrations can change integration recommendations; plan migrations with both QuecLink and Plaspy in mind.
- Always cross check device identifiers and pairing procedures with official QuecLink documentation before deploying at scale.

## Why Protocol Understanding Matters

A clear grasp of how the WTS100 telemetry is forwarded to Plaspy helps ensure correct device mapping, reliable alerts, and accurate historical records for cold chain and asset monitoring.

- Correct gateway configuration ensures temperature readings map to the right Plaspy device record and reporting workflows.
- Understanding whether your gateway uses UDP or TCP to reach Plaspy helps diagnose transport related delivery issues.
- Awareness of firmware and hardware variations reduces time spent troubleshooting missing fields or unexpected telemetry behavior.
- Knowing that Plaspy uses a shared port and automatic detection simplifies setup and reduces the need for manual protocol selection.
- Protocol awareness supports migration planning when devices reach end of life or when replacing gateways or sensors.

## Why Use Plaspy with This Protocol

Using WTS100 temperature telemetry alongside fleet and asset data in Plaspy gives teams a single pane for operational visibility. Sensor readings forwarded by QuecLink gateways into Plaspy enable real time alerts on temperature excursions, battery and health monitoring, and historic reporting to support compliance and logistics decision making.

To learn more about Plaspy and how it brings temperature telemetry together with fleet and asset tracking, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notices, and manufacturer guidance verify current information at the official QuecLink website https://www.queclink.com/.
