---
slug: /queclink/sc350mg/protocol
id: sc350mg-protocol
sidebar_label: Protocol
title: QuecLink - SC350MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the QuecLink SC350MG tracker and how it communicates with Plaspy
keywords:
  - QuecLink SC350MG protocol
  - QuecLink SC350MG GPS protocol
  - QuecLink SC350MG Plaspy
  - SC350MG tracking protocol
  - QuecLink protocol compatibility
  - E bike tracker protocol
  - GNSS tracker protocol
  - vehicle tracking Plaspy
  - LTE Cat M1 tracker
  - BMS ECU telemetry protocol
---

# QuecLink - SC350MG Protocol

This page provides public protocol context for using the QuecLink SC350MG tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what connection endpoints and transport options Plaspy expects, and what to consider during setup and validation. The information here is intended to help administrators and integrators understand the communication relationship between the SC350MG and Plaspy without exposing private implementation details.

The SC350MG is a compact, water resistant GNSS tracker designed for E bikes with LTE Cat M1 and NB2 connectivity plus 2G fallback, a wide input voltage range, and ECU BMS interfaces via CAN or UART. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so device configuration and firmware level can affect how the tracker reports to Plaspy.

## Protocol Overview

The tracker protocol is the set of rules and message expectations that allow the SC350MG to report location, telemetry, and status to a remote server such as Plaspy. At a high level the protocol defines how the device establishes transport, how it identifies itself, and how telemetry and state information are encoded and delivered so Plaspy can turn raw device data into usable events and metrics.

- Enables the SC350MG to send GNSS position, motion events, and telemetry to the Plaspy endpoint.
- Carries device identity and session information so the platform can associate messages with the correct asset.
- Transports ECU and BMS telemetry that the device reads via CAN or UART for remote diagnostics or reporting.
- Supports uplink messaging over cellular and fallback networks so data reaches Plaspy reliably.
- Works alongside device features such as BLE, vibration detection, and accelerometer events to provide a fuller operational picture.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and port and implements automatic protocol detection to determine how an individual tracker reports. When an SC350MG is configured to report to the Plaspy endpoint, users generally do not need to select a protocol manually within Plaspy.

- Plaspy listens on the public endpoint d.plaspy.com and the IP address 54.85.159.138 for device connections.
- All devices supported by Plaspy use the same port, which is 8888, simplifying device configuration.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and network requirements.
- When a properly configured device connects to the Plaspy endpoint, the platform automatically detects the tracker protocol and associates data with the correct device record.
- Proper reporting configuration on the tracker side is the key step to ensure automatic detection succeeds.

## Transport and Connection Context

Connection context covers the transport layer choices and endpoint targeting that must be configured on the SC350MG so it can reach Plaspy. The device supports modern low power cellular links with fallback and can be set to target a DNS name or an IP address for the server.

- The SC350MG may be configured to send data using UDP or TCP on port 8888 based on device configuration and network considerations.
- Plaspy accepts device connections at d.plaspy.com or directly at 54.85.159.138 using the common port 8888.
- Using the DNS name d.plaspy.com allows the device to resolve the correct server IP and provides flexibility if Plaspy updates endpoints.
- TCP is typically used when a reliable connection and session persistence are needed; UDP can be selected for lower overhead where supported by the device and network.
- Ensure the device APN and cellular settings allow outbound connections to the Plaspy endpoint and that any carrier firewalls do not block port 8888.

## Protocol Compatibility Notes

- Firmware differences across SC350MG units can change available telemetry fields and the behavior of reporting intervals and event generation.
- Hardware revisions or region specific SKUs may enable or disable interfaces such as CAN, UART, or BLE; confirm which interfaces are present on your device.
- Manufacturer side settings can affect what ECU and BMS data is exposed over the tracker telemetry channel and which fields are included in uplink messages.
- Choosing TCP versus UDP on port 8888 will affect connection behavior and may change how the device handles retries and acknowledgements.
- Always validate device compatibility by testing a representative unit against the Plaspy endpoint d.plaspy.com and confirming data arrival and interpretation.
- When in doubt consult the official QuecLink documentation and release notes for firmware specific behavior before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the SC350MG communicates with Plaspy helps ensure a smooth deployment, faster troubleshooting, and reliable long term operation. Awareness of transport, reporting behavior, and firmware differences reduces integration friction and speeds up validation.

- Simplifies initial setup by ensuring the device is pointed at d.plaspy.com or 54.85.159.138 on the required port 8888 using the correct transport.
- Helps diagnose connectivity issues by focusing on transport, APN, and whether the device is using UDP or TCP as configured.
- Clarifies expectations for which ECU BMS metrics and sensor events will be available in platform reports and dashboards.
- Reduces time spent on support by confirming firmware level and hardware revision before deeper protocol investigation.
- Supports decisions about power management and reporting intervals that impact battery or vehicle electrical behavior.

## Why Use Plaspy with This Protocol

Using Plaspy with the QuecLink SC350MG provides a straightforward way to collect GNSS position, telemetry, and vehicle interface data for e bike fleets and individual owners. Plaspy’s unified port and endpoint model reduces per device configuration complexity and the platform’s automatic protocol detection removes the need for manual protocol selection when devices are pointed to the Plaspy endpoint.

If you want to learn more about integrating the QuecLink SC350MG with Plaspy, visit https://www.plaspy.com for platform details and onboarding information. For device specific protocol documents, firmware notes, and the latest manufacturer guidance verify current information at https://www.queclink.com/ since protocol support and firmware behavior can change over time.
