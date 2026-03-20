---
slug: /sentar/q60/protocol
id: q60-protocol
sidebar_label: Protocol
title: Sentar - Q60 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Sentar Q60 tracker with Plaspy for reliable tracking and integration
keywords:
  - Sentar Q60
  - Sentar Q60 protocol
  - Sentar GPS tracker
  - Q60 Plaspy compatibility
  - Plaspy device integration
  - vehicle tracking Sentar
  - Q60 communication protocol
  - asset tracking Q60
  - GPS tracker protocol
  - tracking platform Plaspy
---

# Sentar - Q60 Protocol

This page describes the public protocol context for integrating the Sentar Q60 GPS tracker with the Plaspy platform. It focuses on how the device communicates at a high level with Plaspy, which connection endpoints are used, and what to expect from common firmware and hardware variations. The technical content here is intentionally general and non sensitive to help administrators and integrators plan deployments and basic troubleshooting.

The Sentar Q60 is a compact tracker based on an MTK2503 chipset and supports GPS AGPS and LBS modes for positioning. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary based on firmware versions hardware revisions and manufacturer implementation choices. Review the manufacturer documentation and firmware notes for device specific details before final deployment.

## Protocol Overview

At a high level the tracker protocol defines how the Q60 reports location and status to a remote server and how the server sends configuration or control messages back to the device when supported. The protocol is the bridge between the Q60 hardware and Plaspy services allowing location points battery and status information to appear in the platform.

- Enables the Q60 to send periodic location updates using GPS AGPS and LBS data to the server endpoint.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct asset.
- Allows server side responses where the device firmware and configuration permit remote commands or acknowledgements.
- Provides the usable telemetry that Plaspy ingests for mapping alerts and reporting while respecting device capabilities.
- Varies by firmware and hardware revision so the same model may behave slightly differently across production batches.

## How Plaspy Detects the Protocol

Plaspy listens on a common endpoint and automatically determines the tracker protocol for supported devices when the device is correctly configured to report to the platform. For most integrations users do not need to select the protocol manually inside Plaspy as the platform matches incoming traffic to a compatible parser.

- Plaspy accepts incoming connections at the domain d.plaspy.com and at the public IP 54.85.159.138.
- All devices use the same port on the Plaspy side and Plaspy automatically detects the tracker protocol.
- If the Q60 is configured to report to the Plaspy endpoint the platform will attempt to identify the reporting format and register the device.
- Typical setup requires updating the device reporting server address and ensuring the correct transport type is enabled on the tracker.

## Transport and Connection Context

Connection transport and addressing are a key part of getting the Q60 to report successfully. The tracker may be configured to use UDP or TCP depending on the firmware and device settings. Plaspy supports both transports on the same port so choose the one that matches the tracker firmware and network environment.

- Devices may be set to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy listens on port 8888 for both TCP and UDP traffic and all supported devices use the same port.
- Ensure the device APN and GPRS settings are correct so it can reach the Plaspy endpoint over mobile networks.
- Firewalls NAT and mobile operator restrictions can affect connectivity so allow outbound traffic to the Plaspy domain and port.
- Verify the tracker sends to the correct transport type that matches its configuration and firmware capabilities.

## Protocol Compatibility Notes

- Firmware revisions can change message timing fields default transport or available telemetry so check the device firmware level when troubleshooting.
- Hardware revisions and regional variants may alter available features such as AGPS or LBS performance.
- Some trackers offer configuration commands that require a different transport or timing to receive responses reliably.
- Network conditions and operator APN settings influence whether UDP or TCP is the practical choice for reporting.
- Always validate that the device is pointed to d.plaspy.com or the IP 54.85.159.138 and using port 8888.
- Cross check device serial and IMEI reporting against Plaspy device registration to ensure accurate association.

## Why Protocol Understanding Matters

Understanding how the Q60 communicates with Plaspy helps with setup verification ongoing troubleshooting and long term reliability. Even when Plaspy auto detects the protocol being used having a basic grasp of transport and reporting behavior makes it easier to diagnose missing data or intermittent connections.

- Confirms the device is reporting to the correct Plaspy endpoint and transport so data reaches the platform.
- Helps identify whether gaps in location data are caused by connectivity firmware or environmental factors.
- Supports informed decisions about using UDP or TCP based on network reliability and response needs.
- Makes it simpler to validate device identity and ensure incoming messages map to the correct asset in Plaspy.
- Aids collaboration with manufacturer support when firmware related behaviors need to be resolved.

## Why Use Plaspy with This Protocol

Using the Sentar Q60 with Plaspy gives organizations a straightforward way to collect location telemetry and device status from compact reliable trackers. Plaspy’s shared endpoint model and automatic protocol detection reduce the configuration steps required on the platform side letting deployments focus on device placement and network readiness.

If you want to learn more about how Plaspy supports device integrations please visit https://www.plaspy.com. For the most current device specific protocol details firmware notes and manufacturer instructions verify information on the Sentar website at http://www.sentarsmart.com/ as implementations and firmware behavior can change over time.
