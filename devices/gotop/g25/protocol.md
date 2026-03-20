---
slug: /gotop/g25/protocol
id: g25-protocol
sidebar_label: Protocol
title: GOTOP - G25 Protocol
sidebar_class_name: menu_item_tracker
description: Public guide to GOTOP G25 protocol and how the tracker communicates with Plaspy server for reliable asset tracking
keywords:
  - GOTOP G25 protocol
  - GOTOP G25 GPS tracker
  - GOTOP G25 Plaspy compatibility
  - GOTOP G25 communication protocol
  - GOTOP G25 tracking protocol
  - GOTOP asset tracker protocol
  - GOTOP G25 4G tracker
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - vehicle tracking protocol
---

# GOTOP - G25 Protocol

This page covers the public protocol context for using the GOTOP G25 tracker with Plaspy. It explains how the device communicates at a high level, what role the tracker reporting protocol plays in successful data delivery, and what to check when configuring devices to report to Plaspy. The content is intended for fleet managers, integrators, and technical users who need non-sensitive protocol guidance for integration and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data arrives at the platform. Exact protocol behavior for the G25 can vary between firmware versions, hardware revisions, and manufacturer-side configuration, so this page focuses on public, practical guidance rather than firmware internals or private command formats.

## Protocol Overview

The protocol used by a GPS tracker defines how the device reports location, status, alarms, and telemetry to a remote server. For the G25, the tracker reporting protocol enables the device to identify itself to Plaspy, send periodic or event-driven position updates, and transmit alarm or battery state information that Plaspy can present to users and systems.

- Provides the channel for position and status reporting from the G25 to the server.
- Includes identity information so Plaspy can associate incoming messages with the correct device record.
- Transports event notifications such as movement alerts, drop off alerts, and low battery warnings.
- Supports both periodic reporting and event-driven messages depending on device settings and firmware.
- Enables Plaspy to parse telemetry into usable position, battery, and input/output state information for tracking and alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and applies automatic protocol detection to match incoming data to known tracker formats. When a G25 is configured to report to Plaspy, the user normally does not need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy reporting endpoint.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy listens for tracker traffic on port 8888 and uses the same port for all supported devices.
- The G25 may be configured to use UDP or TCP to send messages to the Plaspy endpoint on port 8888.
- Plaspy automatically detects the tracker protocol when device messages are received at the endpoint.
- Correct DNS or IP configuration on the device is typically all that is required for Plaspy to begin recognizing incoming messages.

## Transport and Connection Context

Connection context covers how the G25 reaches Plaspy over the network. The device supports cellular networks and can be set to report using different transport modes; choosing the correct transport and endpoint is essential for reliable reporting.

- The G25 may be configured to use either UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be pointed to the Plaspy reporting domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses the same port 8888 for all devices, simplifying device-side configuration.
- Network considerations such as mobile operator NAT, APN settings, and firewall rules can affect whether UDP or TCP is more reliable for a given deployment.
- Ensure the device APN and SMS or web configuration commands (as provided by the manufacturer) are set to target the Plaspy reporting endpoint.

## Protocol Compatibility Notes

- Firmware revisions may alter message timing, available fields, and command support; verify the G25 firmware level if you encounter unexpected behavior.
- Hardware revisions or regional variants can introduce slight protocol differences; check the device label and documentation for variant details.
- The choice of UDP versus TCP on port 8888 can impact message delivery characteristics and should be chosen according to your network and reliability needs.
- Manufacturer configuration methods such as SMS parameter settings or a configuration tool may be required to point the device to the Plaspy endpoint.
- Plaspy’s automatic detection reduces the need to manually select a protocol inside the platform, but correct device-side settings are required.
- Always validate compatibility and feature availability against the official manufacturer documentation for the specific G25 unit and firmware build.

## Why Protocol Understanding Matters

Understanding how the G25 communicates with Plaspy helps ensure reliable tracking, quicker troubleshooting, and predictable behavior in production deployments. Even without low-level protocol details, practical knowledge of connection expectations, transport choices, and common device features improves operational outcomes.

- Helps diagnose why a device is not appearing in Plaspy by checking endpoint, APN, and transport settings.
- Enables informed selection of UDP or TCP to match network conditions and delivery requirements.
- Allows administrators to confirm that alarms and telemetry fields required by operations are included and parsed by Plaspy.
- Guides firmware and configuration updates when device behavior changes after an upgrade.
- Reduces integration friction by aligning device reporting cadence and event reporting with Plaspy expectations.

## Why Use Plaspy with This Protocol

Using the GOTOP G25 with Plaspy provides a practical way to monitor assets with long battery life, waterproof durability, and a range of alarms suited to asset and vehicle tracking. Plaspy’s platform ingests location and telemetry data from trackers, presenting real-time visibility and historical context that organizations use for security, logistics, and operations.

To learn more about Plaspy and how the platform supports device integrations like the GOTOP G25, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions for the G25, please verify information on the manufacturer site https://www.gotop.cc/ as protocol support and firmware behavior can change over time.
