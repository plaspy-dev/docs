---
slug: /ev/ev_05/protocol
id: ev_05-protocol
sidebar_label: Protocol
title: EV - EV-05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the EV EV-05 wearable tracker and how it communicates with Plaspy servers
keywords:
  - EV EV-05
  - EV-05 protocol
  - EV-05 GPS tracker
  - EV tracker Plaspy
  - EV-05 wearable tracker
  - EV-05 tracking protocol
  - Plaspy compatibility EV-05
  - GPS wearable protocol
  - personal safety tracker protocol
  - EV-05 communication
---

# EV - EV-05 Protocol

This page provides a public, non sensitive overview of the EV EV-05 tracker reporting protocol as it relates to Plaspy. It explains the communication context you need to configure devices and understand how the watch forwards position, SOS events, fall detection, and health telemetry into the Plaspy platform without exposing private or proprietary implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on common public protocol concepts and the connection context needed to integrate the EV-05 with Plaspy.

## Protocol Overview

The protocol implemented by the EV-05 governs how the watch encodes and sends location, event, and telemetry data to a remote server. At a high level, the protocol enables the device to report periodic position updates, high-priority safety events such as SOS and fall alerts, and health telemetry like heart rate readings so Plaspy can present an integrated view of the wearer’s status.

- Enables the EV-05 to transmit GPS, Wi‑Fi, beacon and LBS based location reports to the server.
- Delivers time sensitive alarm events such as SOS, fall detection, and no motion alerts for immediate operator attention.
- Sends wearable health and activity telemetry including heart rate and step counts for monitoring and rules.
- Associates device identity and status information so Plaspy can correlate incoming messages to the correct device record.
- Supports configurable reporting rates so the watch can increase update frequency during emergencies while conserving power during normal operation.

## How Plaspy Detects the Protocol

Plaspy receives reports at a single shared endpoint and port and uses its platform logic to identify incoming tracker data formats. In most cases a properly configured EV-05 will begin reporting to Plaspy without requiring manual protocol selection inside the platform.

- Plaspy listens on the shared endpoint d.plaspy.com and the public server IP 54.85.159.138 for device reports.
- Plaspy receives device traffic on port 8888 which is used by all devices supported on the platform.
- Devices can be set to use either UDP or TCP when sending to port 8888 depending on device configuration and network conditions.
- When an EV-05 is configured to report to Plaspy, the platform automatically detects the tracker protocol so users usually do not need to pick a protocol manually.
- If a device fails to appear, double check that reporting settings and network connectivity are correct and that the device is pointed at the Plaspy endpoint.

## Transport and Connection Context

The EV-05 supports multiple network transports and location methods, and the connection layer determines how device messages reach Plaspy. This section covers the public connection options you will commonly use when configuring an EV-05 to report into Plaspy.

- The EV-05 may be configured to send data using either UDP or TCP on port 8888 depending on the firmware and chosen settings.
- Devices may point DNS to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS is not available.
- Plaspy uses the same port 8888 for all supported devices which simplifies firewall and network setup for mixed deployments.
- Choosing UDP can reduce overhead for frequent position reports while TCP can offer a more reliable transport for important event delivery depending on network behavior.
- Ensure APN, cellular data, and any local firewall rules allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing and available telemetry fields; always confirm the device firmware you have when validating compatibility.
- Hardware variations between regional models may alter supported bands or sensors which in turn affect what data the device sends.
- Manufacturer configuration tools or SIM provisioning settings may default to different transports; verify the EV-05 is set to report to the Plaspy endpoint.
- Plaspy automatically detects incoming tracker protocols but correct network addressing and transport selection are required for successful detection.
- Local network restrictions such as carrier NAT, corporate firewalls, or blocked ports can prevent the device from reaching Plaspy.
- For the most reliable results test a device in your intended deployment environment before large scale rollouts.

## Why Protocol Understanding Matters

Understanding the EV-05 communication protocol and the surrounding connection context helps ensure a smooth setup, faster troubleshooting, and predictable long term operation when integrating with Plaspy.

- Speeds initial setup by clarifying which endpoint and transport the watch should use to report to Plaspy.
- Helps diagnose connectivity issues by isolating transport, DNS, APN, and server reachability problems.
- Guides expectations about reporting intervals and payload contents based on firmware and configuration choices.
- Supports proper firewall and network configuration since Plaspy uses a single port 8888 for all devices.
- Makes it easier to plan monitoring rules and alerting in Plaspy because you know which event types the EV-05 can provide.

## Why Use Plaspy with This Protocol

Using the EV-05 with Plaspy gives organizations a way to consolidate personal safety telemetry, live location, and health alerts into a single operational dashboard. The wearable form factor combined with SOS, fall detection, and heart rate monitoring makes the EV-05 well suited to care providers, monitoring centers, and lone worker safety programs that need continuous visibility and fast incident response.

Learn more about Plaspy and how it can aggregate EV-05 telemetry and alarms at https://www.plaspy.com. Please verify device specific protocol behavior, firmware details, and the latest implementation notes with the manufacturer at http://www.eviewltd.com/ as protocol support and firmware behavior can change over time.
