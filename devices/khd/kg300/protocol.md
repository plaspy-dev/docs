---
slug: /khd/kg300/protocol
id: kg300-protocol
sidebar_label: Protocol
title: KHD - KG300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for KHD KG300 GPS tracker integration with Plaspy including transport detection and compatibility considerations
keywords:
  - KHD KG300 protocol
  - KG300 GPS protocol
  - KHD KG300 communication protocol
  - KG300 tracking protocol
  - KHD tracker Plaspy
  - KG300 compatibility Plaspy
  - vehicle tracking KG300
  - GNSS tracker KG300
  - GSM GPS tracker KG300
  - KG300 protocol guide
---

# KHD - KG300 Protocol

This page covers the public protocol context for using the KHD KG300 tracker with the Plaspy platform. It explains how the KG300 communicates over cellular networks and how those public communication details relate to reporting into Plaspy without exposing manufacturer private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed at the Plaspy endpoint. Exact protocol behavior and available features can vary by KG300 firmware version, hardware revision, and manufacturer configuration, so the guidance here is intended as general, public-facing context to help with setup and troubleshooting.

## Protocol Overview

The KG300 is a GNSS tracker that uses GSM cellular connectivity to report location, alerts, and events to backend servers. In practical terms, the device sends its reporting data over the mobile network so a platform such as Plaspy can receive, parse, and present that information for tracking and monitoring use cases.

- The tracker protocol governs how the device identifies itself to a backend and how position and event data are encoded for transmission.
- Protocol behavior determines which device fields are available to Plaspy for mapping into location, speed, input status, and alerts.
- The KG300 can report events such as geo fence crossing, emergency alerts, and scheduled reports that the platform interprets to trigger notifications and history records.
- Transport-level settings (domain or IP, port, and TCP or UDP) determine how the device reaches the Plaspy endpoint.
- SMS is available on the KG300 as an alternate channel for simple command and alert delivery; primary real time reporting is typically via GPRS/GSM data.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects which tracker protocol the device is using when the device reports to that endpoint. In most cases, if the KG300 is configured to report to Plaspy, no manual protocol selection inside Plaspy is required.

- Plaspy listens on a single, common port for all supported devices which simplifies device setup.
- When a device reports to the Plaspy endpoint, the platform uses the incoming data stream to determine the protocol type automatically.
- Users normally configure the KG300 to report to the Plaspy server address and port; once configured, Plaspy will recognize the device traffic.
- Automatic detection reduces the need for end users to choose a parser or protocol profile during initial onboarding.
- If a device does not appear to connect, check that the tracker is using the correct server address, transport, and that mobile data is active.

## Transport and Connection Context

KG300 devices can be configured to use either UDP or TCP transport for reporting depending on the device settings and network conditions. For Plaspy, the public connection context is standardized so that devices point to a known Plaspy endpoint.

- Plaspy server domain is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 and the listening port for devices is 8888.
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and chosen transport.
- All devices in Plaspy use the same port which simplifies server address and port configuration on the tracker.
- If possible, configure the KG300 APN and server settings to point at d.plaspy.com or the IP 54.85.159.138 with the transport matching your device setting.
- Use the transport best supported by your mobile network and device firmware; some networks and firmware behave better with TCP while others prefer UDP.

## Protocol Compatibility Notes

- Firmware differences can change which reporting fields are available and how frequently the KG300 reports location and events.
- Hardware revisions or regional variants may alter supported transports or feature sets.
- The KG300 supports SMS as a secondary channel which can be useful when GPRS data is unavailable.
- Selecting TCP versus UDP on the device can affect reliability and latency depending on network conditions and operator behavior.
- Always validate compatibility and required configuration against the manufacturer supplied documentation for your specific device and firmware.
- Pointing the device to the correct Plaspy endpoint and port is the most common reason for successful integration.

## Why Protocol Understanding Matters

Understanding the KG300 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term behavior when the tracker is used with Plaspy. Knowing the public-facing protocol context reduces guesswork during onboarding and helps teams make informed configuration choices.

- It clarifies which transport (TCP or UDP) to select for the best network behavior in your environment.
- It helps you verify that the device is correctly reporting expected fields such as position, time, and input states.
- It reduces integration time by focusing attention on server address, port, and APN settings rather than internal packet formats.
- It aids in diagnosing connectivity issues by confirming whether data reaches the Plaspy endpoint.
- It supports planning for firmware updates and hardware changes that could affect reporting frequency or available events.

## Why Use Plaspy with This Protocol

Using Plaspy with a KG300 tracker gives organizations practical visibility into vehicle location, status alerts, and historical movement. Because Plaspy uses a shared server address and port and automatically detects the device protocol, onboarding is frequently straightforward once the tracker is pointed at the Plaspy endpoint.

For more detailed setup steps and the latest information about feature availability, please learn more about Plaspy on the main website https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol guidance and firmware notes at the official KHD site http://www.khd.hk.
