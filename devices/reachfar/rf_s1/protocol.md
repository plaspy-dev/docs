---
slug: /reachfar/rf_s1/protocol
id: rf_s1-protocol
sidebar_label: Protocol
title: Reachfar - RF-S1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Reachfar RF S1 wearable tracker with Plaspy and shared connection settings
keywords:
  - Reachfar RF S1
  - RF S1 protocol
  - Reachfar protocol
  - RF S1 GPS tracker
  - Plaspy compatible
  - GPS tracker protocol
  - wearable GPS protocol
  - personal tracker Plaspy
  - RF S1 tracking protocol
  - tracker protocol compatibility
---

# Reachfar - RF-S1 Protocol

This page describes the public protocol context for integrating the Reachfar RF-S1 GPS Tracking Health Smart Watch with Plaspy. It explains how the tracker reports location, health telemetry and alert events to the Plaspy platform in general, non sensitive terms, and what to consider when configuring devices to report to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed at the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so this page focuses on communication context and practical compatibility guidance rather than firmware internals.

## Protocol Overview

The RF-S1 uses a device reporting protocol to send position, SOS events, health telemetry and status updates to Plaspy. In practice that protocol lets the watch identify itself, transmit actionable data to the platform and raise event notifications that Plaspy can surface to caregivers or administrators.

- Enables periodic and event driven location reporting so Plaspy can display real time position and history.
- Carries health telemetry such as heart rate and SpO2 as status messages for monitoring in Plaspy.
- Sends high priority event notifications like SOS button presses and removal alarms for immediate alerting.
- Allows device identification and basic status reporting so Plaspy can associate incoming data with the correct asset.
- Delivers voice call and event metadata to Plaspy when the device supports two way voice and event logging.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and port and automatically detects the tracker protocol so most users do not need to pick a protocol manually in Plaspy. Proper device configuration to report to the Plaspy endpoint is the usual requirement for automatic protocol detection to work reliably.

- Plaspy server domain is d.plaspy.com and the platform also accepts connections to 54.85.159.138 on the same port.
- The device may be configured to use either UDP or TCP on port 8888 to reach Plaspy.
- All devices in Plaspy use the same port, which simplifies configuration across mixed device fleets.
- When the RF-S1 is configured to report to the Plaspy endpoint, the platform will recognize the device protocol automatically.
- Users typically only need to point the tracker to the Plaspy endpoint and ensure transport and credentials are set according to manufacturer guidance.

## Transport and Connection Context

Connection choices such as UDP or TCP and the server address determine how the RF-S1 reaches Plaspy but do not change the higher level meaning of protocol messages. Configure transport according to the RF-S1 device settings and the network environment you deploy into.

- The device may use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to d.plaspy.com or to 54.85.159.138 as the Plaspy server endpoint.
- Plaspy uses the same port for all supported devices which reduces configuration differences when mixing trackers.
- Network routing, carrier NAT and firewall rules can affect whether TCP or UDP performs better for a specific deployment.
- Ensure the device has mobile network connectivity and that outbound traffic to the Plaspy endpoint and port is allowed by the operator and local network.

## Protocol Compatibility Notes

- Firmware versions can change message content and timing; verify the RF-S1 firmware level when troubleshooting compatibility.
- Hardware revisions or regional device variants may implement slightly different reporting options or telemetry sets.
- Manufacturer side configuration or regional operator settings can influence which transport or reporting mode is recommended.
- Selection of UDP versus TCP can affect delivery characteristics of telemetry and event messages.
- Confirm supported features such as two way voice metadata or specific telemetry fields against manufacturer documentation.
- Validate device behavior in a controlled test before wide deployment to ensure Plaspy receives the expected event and telemetry streams.
- When in doubt, consult Reachfar documentation to confirm device specific defaults and supported configuration commands.

## Why Protocol Understanding Matters

Knowing how the RF-S1 communicates with Plaspy helps ensure correct setup, faster troubleshooting and reliable long term operation for personal monitoring scenarios.

- Faster setup by ensuring the device points to d.plaspy.com or 54.85.159.138 using the correct transport and port 8888.
- More efficient troubleshooting when events like SOS or removal alarms do not appear in Plaspy.
- Better planning for network behavior such as NAT, carrier limitations and preferred transport for your deployment.
- Clearer expectations about which telemetry and events the device will forward to Plaspy under different firmware revisions.
- Improved operational reliability by validating configuration and testing edge cases before scaling.

## Why Use Plaspy with This Protocol

Using the Reachfar RF-S1 with Plaspy brings wearable location and health telemetry into a single monitoring platform. For caregivers and organizations focused on personal safety, the combination provides a centralized view of location, SOS alerts, removal alarms and health status updates that support faster response and better oversight.

Plaspy accepts reports at d.plaspy.com and 54.85.159.138 on port 8888, uses the same port for all supported devices, and automatically detects the tracker protocol so configuration is kept straightforward. Learn more about Plaspy at https://www.plaspy.com and verify the latest RF-S1 protocol and firmware details with the manufacturer at https://www.reachfargps.com/. Protocol support, firmware behavior and device implementation details can change over time so always check the manufacturer documentation for the most current information.
