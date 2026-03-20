---
slug: /calmamp/ttu_700/protocol
id: ttu_700-protocol
sidebar_label: Protocol
title: CalmAmp - TTU-700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CalmAmp TTU 700 and how it communicates with Plaspy for trailer and asset tracking
keywords:
  - CalmAmp TTU 700
  - CalmAmp TTU 700 protocol
  - CalmAmp TTU 700 GPS protocol
  - CalmAmp tracking protocol
  - TTU 700 trailer tracker
  - CalmAmp GPS tracker Plaspy
  - TTU 700 communication protocol
  - trailer asset tracking protocol
  - Plaspy device compatibility
  - CalAmp PULS PEG
---

# CalmAmp - TTU-700 Protocol

This page covers the public protocol context for using the CalmAmp TTU-700 tracker with Plaspy. It explains in plain technical terms how the TTU-700 reports position and status data to a fleet server and what to consider when pointing devices at Plaspy for cloud reception and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol context while encouraging verification against manufacturer documentation.

## Protocol Overview

The TTU-700 communicates telemetry, status, and event messages to backend servers using cellular data and optional SMS transport. The device is built for long term deployments and leverages CalAmp features such as an event engine and over the air management to control what and when it reports. The protocol's role is to ensure the device can identify itself, transmit usable location and event information, and allow server side platforms like Plaspy to ingest that data reliably.

- Transports messages from device to server so position, battery, and event data are available to applications.
- Enables device identity and basic telemetry to be associated with a customer account on Plaspy.
- Carries event driven messages produced by the device on-board engine to report exceptions and state changes.
- Supports both packet based data transport and enhanced SMS fallback depending on network and configuration.
- Works with over the air device management systems to adjust reporting rules and firmware when needed.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a common endpoint and automatically detects the tracker protocol when data arrives. In most cases you do not need to manually select a protocol inside Plaspy if the TTU-700 is configured to report to the Plaspy endpoint and uses supported transport settings.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct endpoint reference.
- Plaspy listens on a single port for all devices which simplifies device configuration and onboarding.
- When a properly configured device sends telemetry to the Plaspy endpoint, Plaspy will identify the incoming protocol and process messages automatically.
- Users typically configure the device to report to the Plaspy endpoint and confirm transport and credentials at the device or carrier level.
- If reports are not received as expected, checking device reporting settings and network connectivity is the first troubleshooting step.

## Transport and Connection Context

The TTU-700 supports multiple network transports and can be configured to use packet data or SMS for message delivery. For connectivity to Plaspy it is important to point the device to the correct Plaspy endpoint and select an appropriate transport that matches the device firmware and subscription.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy uses port 8888 for all supported devices which provides a consistent entry point across models.
- Devices may be pointed to d.plaspy.com or 54.85.159.138 as the reporting endpoint.
- Some deployments use UDP for lower power and simplicity while others use TCP when a persistent connection is preferred by the device firmware.
- Enhanced SMS messaging is also available on the TTU-700 as a transport option for networks or use cases that require text based reporting.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, or supported transports so always confirm the device firmware level when validating compatibility.
- Hardware revisions and region specific SKUs can introduce subtle differences in behavior between units of the same model.
- The TTU-700 supports both packet data and enhanced SMS transport which affects how and when messages arrive at Plaspy.
- Transport selection (UDP versus TCP) should match the device configuration and the carrier environment in the deployment area.
- Over the air management features can alter reporting rules remotely which affects message volume and format seen by Plaspy.
- Validate any custom PEG rules or PULS driven configuration changes against expected behavior in Plaspy to avoid missing important events.
- Always consult manufacturer release notes and device documentation for firmware specific protocol details.

## Why Protocol Understanding Matters

Understanding how the TTU-700 communicates with a backend platform helps with correct setup, efficient troubleshooting, and predictable long term operation. This knowledge ensures messages arrive as expected, battery life is optimized, and event rules behave consistently for asset monitoring.

- Helps ensure devices are pointed to the correct Plaspy endpoint and transport to begin reporting immediately.
- Makes troubleshooting missing or malformed reports faster by narrowing focus to transport, firmware, or configuration issues.
- Supports informed decisions on reporting intervals and event rules that impact battery life for long term deployments.
- Enables coordination between device OTA management and server side processing so changes in rules or firmware are anticipated.
- Helps fleet operators validate that event triggers and geo fence behavior are translating into the notifications they expect in Plaspy.

## Why Use Plaspy with This Protocol

Using the CalmAmp TTU-700 with Plaspy delivers a straightforward way to collect trailer and asset telemetry from a device built for long term, low maintenance deployments. The TTU-700’s focus on long battery life, internal antennas, and configurable event generation complements Plaspy’s ability to ingest data from many device types into a single platform that automatically detects supported protocols.

If you want to learn more about how Plaspy handles device connectivity and monitoring for fleet and asset tracking, visit https://www.plaspy.com. For the latest device specific protocol and firmware information verify details with the manufacturer at http://www.calamp.com/ since protocol support and firmware behavior can change over time.
