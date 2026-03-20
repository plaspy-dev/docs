---
slug: /wanway/s20/protocol
id: s20-protocol
sidebar_label: Protocol
title: WanWay - S20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for WanWay S20 GPS tracker integration with Plaspy covering connection detection and compatibility
keywords:
  - WanWay S20 protocol
  - WanWay S20 GPS protocol
  - WanWay S20 tracking protocol
  - WanWay S20 communication protocol
  - S20 tracker Plaspy compatibility
  - WanWay asset tracker protocol
  - battery powered GPS tracker protocol
  - WanWay S20 integration
  - GPS asset tracking Plaspy
  - fleet tracking WanWay S20
---

# WanWay - S20 Protocol

This page describes the public protocol context for using the WanWay S20 asset GPS tracker with Plaspy. It explains how the S20 reports location and status to Plaspy and what protocol-level considerations matter for deployment, without exposing private implementation details. Use this as a practical reference when planning integration, deployment, and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware revision, hardware variant, and manufacturer configuration. The S20 is a battery powered asset tracker with tamper detection and magnetic mounting that is commonly deployed across trailers, containers, and portable equipment; understanding the communication context helps ensure reliable reporting and alarm delivery into Plaspy.

## Protocol Overview

The protocol used by the S20 governs how the device identifies itself, reports position and telemetry, and signals alerts such as tamper or motion events. For integration with Plaspy this means the protocol must deliver readable position, time, battery, and event data to the Plaspy endpoint so the platform can parse and present it in a fleet view.

- Enables the S20 to send position updates and status telemetry to a remote server so Plaspy can display real time and historical locations.
- Conveys device identity and event flags that allow Plaspy to associate reports with an asset and trigger alarms such as disassemble or low battery.
- Supports a transport layer over network connectivity so packets reach Plaspy reliably depending on device configuration and signal conditions.
- Balances reporting frequency and power usage so the S20 can provide high frequency tracking when needed and low duty cycle reports for long battery life.
- Provides the information Plaspy needs to combine S20 telemetry with other fleet inputs for unified monitoring and reporting.

## How Plaspy Detects the Protocol

Plaspy receives reports at a shared endpoint and port and automatically identifies the tracker protocol to route and parse incoming data. In typical deployments you do not need to select a protocol manually within Plaspy as long as the S20 is configured to report to the correct Plaspy endpoint.

- Plaspy listens on a single shared port for all supported devices and automatically detects the tracker protocol.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct server addressing.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- If the device is configured to send reports to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive the data and perform protocol detection.
- Users generally only need to configure the device reporting endpoint and transport type on the S20; Plaspy handles the rest on receipt.

## Transport and Connection Context

Connection details determine how the S20 reaches the Plaspy servers on the mobile network. The device may support different transport options and should be configured to match the device firmware and operational needs.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices may point their reporting address to d.plaspy.com or to 54.85.159.138 if direct IP addressing is preferred.
- Using UDP can reduce connection overhead and battery use in some reporting modes while TCP can provide more reliable delivery in lossy networks, depending on S20 firmware behavior.
- All devices in Plaspy use the same port which simplifies device configuration and server-side routing.
- Ensure APN and SIM settings on the S20 are correct so the tracker can reach d.plaspy.com or 54.85.159.138 on port 8888 from the cellular network.

## Protocol Compatibility Notes

- Firmware variations between S20 units can change available reporting features, supported transports, and default configuration parameters.
- Hardware revisions or different product SKUs may expose different sensor options or event flags that affect what the protocol reports.
- Manufacturer side configuration tools or SMS commands may be used to set transport and server parameters; confirm exact commands in the official WanWay documentation.
- Transport selection (UDP versus TCP) can affect delivery characteristics and battery usage; pick the mode supported by your deployed firmware and network conditions.
- Plaspy automatically detects the tracker protocol, but correct device configuration pointing to d.plaspy.com or 54.85.159.138 on port 8888 is required for seamless detection.
- Validate compatibility against the latest WanWay S20 documentation and firmware release notes before large scale rollouts.

## Why Protocol Understanding Matters

Knowing how the tracker protocol behaves helps with initial setup, troubleshooting, and maintaining long term reliability when S20 devices are managed by Plaspy. A practical understanding reduces time to resolution for missing reports, misidentified devices, and alarm handling.

- Helps verify that the S20 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and select the appropriate transport.
- Guides troubleshooting when reports stop arriving or alarms are not presented in Plaspy by focusing efforts on network, transport, and firmware factors.
- Allows planning of reporting intervals and alarm thresholds that balance visibility and battery life for asset tracking use cases.
- Supports informed decisions when testing firmware updates or new hardware revisions to ensure continued Plaspy compatibility.
- Improves communication with manufacturers and network providers when diagnosing delivery or parsing issues.

## Why Use Plaspy with This Protocol

Using the WanWay S20 with Plaspy gives operations a clear path to integrate compact, battery powered asset trackers into a single fleet management view. Plaspy ingests S20 telemetry and exposes location, tamper alerts, battery status, and historical playback so teams can respond to incidents and manage assets across logistics, construction, and temporary fleet scenarios.

To learn more about Plaspy and how it works with devices like the WanWay S20 visit https://www.plaspy.com. Please verify the latest device specific protocol details, supported firmware behavior, and manufacturer guidance on the WanWay site https://www.wanwaytech.net/ as protocol support and device implementation can change over time.
