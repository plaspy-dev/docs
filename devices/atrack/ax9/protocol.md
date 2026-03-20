---
slug: /atrack/ax9/protocol
id: ax9-protocol
sidebar_label: Protocol
title: ATrack - AX9 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ATrack AX9 and how it communicates with Plaspy for device reporting and integration
keywords:
  - ATrack AX9
  - ATrack AX9 protocol
  - ATrack AX9 GPS
  - ATrack AX9 Plaspy
  - AX9 tracker protocol
  - GPS tracker protocol
  - vehicle tracking
  - OBDII tracker
  - fleet tracking
  - AX9 compatibility
---

# ATrack - AX9 Protocol

This page describes the public protocol context for using the ATrack AX9 GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy, what role the tracker reporting protocol plays in successful integration, and practical connection details you will use when pointing an AX9 to Plaspy. The AX9 features such as OBDII connectivity, 2G and 3G network support, low power deep sleep, high GPS sensitivity, and a built in 3 axis G sensor are the functional background for how the device reports vehicle data to a cloud service.

Plaspy uses shared connection settings for supported trackers and automatically detects the tracker protocol once the device reports to the platform. Plaspy accepts device traffic at the public endpoint d.plaspy.com or at 54.85.159.138 on port 8888. The AX9 may be configured to use UDP or TCP on port 8888 when sending data. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so field testing and reference to official manufacturer materials are recommended.

## Protocol Overview

The communication protocol for the AX9 is the mechanism the tracker uses to identify itself, send location updates, and report events such as harsh driving or OBDII diagnostics to Plaspy. On a high level, the protocol ensures that telemetry and event messages arrive at the Plaspy endpoint in a way the platform can process and display for fleet monitoring and reporting.

- Enables device identification and session establishment so Plaspy can attribute reports to the correct vehicle
- Transports GPS positions, event flags, and OBDII derived metrics for downstream reporting
- Supports periodic and event driven messages to optimize battery life and network usage
- Works over standard IP transport so devices can reach Plaspy through cellular networks
- Allows Plaspy to present usable location and behavior data without requiring manual protocol selection

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a single shared endpoint and automatically recognize common tracker reporting formats. This reduces configuration steps for administrators and simplifies onboarding of devices like the AX9.

- Plaspy listens at d.plaspy.com and 54.85.159.138 on port 8888 for incoming device connections
- All devices in Plaspy use the same port making transport uniform across models
- Plaspy automatically detects the tracker protocol when a device sends data to the endpoint
- In most cases the user does not need to manually choose a protocol inside Plaspy if the AX9 is correctly pointed to the Plaspy endpoint
- Proper device identification and consistent reporting intervals help the platform map incoming packets to the right asset

## Transport and Connection Context

Transport configuration determines how the AX9 reaches Plaspy and can affect reliability depending on network conditions and device firmware. The device may be set to use UDP or TCP on port 8888 when sending data to Plaspy, so check the device configuration options available in your AX9 unit.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Plaspy uses the same port for all supported devices which simplifies firewall and NAT configuration
- Choose UDP for lower latency small messages or TCP for connection oriented delivery if supported by the device firmware
- Ensure cellular APN and outbound traffic rules allow connections to the Plaspy endpoint to avoid blocking device reports

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and available events; verify the AX9 firmware level when troubleshooting
- Hardware revisions and different AX9 batches may expose distinct configuration menus or transport defaults
- Network generation differences such as 2G versus 3G can affect connectivity and message throughput for AX9 units
- OBDII data availability depends on vehicle support and device configuration and may require additional setup steps
- Transport selection between UDP and TCP should match what the device firmware supports and what your network allows
- Always validate behavior in a controlled environment before mass deployment to confirm Plaspy receives intended reports
- Refer to official manufacturer documentation for firmware specific notes and supported features

## Why Protocol Understanding Matters

Understanding how the AX9 communicates helps ensure reliable setup, quicker troubleshooting, and accurate data delivery to Plaspy. Knowing what to check when a device is not reporting reduces downtime and improves confidence in long term monitoring.

- Makes it easier to verify that the device is pointing to d.plaspy.com or 54.85.159.138 and using port 8888
- Helps isolate transport problems by confirming whether the device is using UDP or TCP
- Guides firmware update decisions when new message types or fixes are required
- Supports correct configuration of OBDII reporting and event thresholds for driver behavior detection
- Improves troubleshooting steps for intermittent reports or power state issues related to deep sleep behavior

## Why Use Plaspy with This Protocol

Using the ATrack AX9 with Plaspy gives organizations a straightforward path to vehicle visibility and event monitoring. The AX9 hardware features such as OBDII integration, a 3 axis G sensor for harsh driving detection, and low power deep sleep make it suitable for fleet, rental, and usage based insurance scenarios where both location and vehicle health are important.

If you want to learn more about Plaspy and how the platform works with devices like the ATrack AX9, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time so verify the latest device specific protocol information on the ATrack website https://www.atrack.com.tw/.
