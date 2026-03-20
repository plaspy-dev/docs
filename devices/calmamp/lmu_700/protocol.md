---
slug: /calmamp/lmu_700/protocol
id: lmu_700-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CalmAmp LMU 700 compatibility with Plaspy including connection context and integration notes
keywords:
  - CalmAmp LMU-700 protocol
  - CalmAmp LMU-700 GPS protocol
  - CalmAmp LMU-700 tracking protocol
  - CalmAmp LMU-700 Plaspy compatibility
  - LMU 700 GPS tracker communications
  - LMU 700 integration guide
  - vehicle tracking LMU 700
  - LMU 700 configuration Plaspy
  - CalmAmp LMU 700 telemetry
  - LMU 700 tracking integration
---

# CalmAmp - LMU-700 Protocol

This page provides a public, non-sensitive overview of the communication context for the CalmAmp LMU-700 when used with Plaspy. It is intended to explain how the device reports location and event data to Plaspy and what connection settings are commonly used for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on transport and integration context rather than low level packet formats.

## Protocol Overview

The LMU-700 communicates GPS and event data to backend servers using cellular data channels and may also support enhanced SMS for certain message types. The device's protocol governs how it identifies itself, encodes location and I/O events, and triggers alerts that are delivered to a receiver such as Plaspy.

- Defines how the tracker identifies itself to the server so telemetry can be associated with the correct asset.
- Carries GPS fixes, time stamps, and I/O or alert events that downstream systems use for monitoring.
- Supports both data channel messaging and enhanced SMS as transport options where available.
- Enables programmable event rules on the device that generate reports when thresholds are met.
- Works in combination with over the air management for configuration and firmware updates.

## How Plaspy Detects the Protocol

Plaspy centralizes inbound device connections on a single public endpoint and automatically determines the tracker protocol based on the incoming traffic. In most cases, you do not need to select a protocol manually inside Plaspy as long as the device is correctly configured to report to the Plaspy address and port.

- Plaspy listens on the public endpoint d.plaspy.com and the corresponding server IP 54.85.159.138.
- All devices reporting to Plaspy use the same port number so a single inbound port simplifies setup.
- Plaspy automatically detects the tracker protocol from the incoming connection and payload pattern.
- If a device is configured to report to Plaspy, manual protocol selection is usually not required.
- Proper device configuration at the manufacturer or fleet management provisioning stage ensures automatic detection works reliably.

## Transport and Connection Context

The LMU-700 can use cellular data or enhanced SMS to communicate. For data reporting, transport layer selection (UDP or TCP) and the network destination are key configuration items that determine how messages reach Plaspy.

- Devices may be configured to report to the domain d.plaspy.com or directly to the server IP 54.85.159.138.
- The common port used for all Plaspy devices is 8888 and both UDP and TCP transports are supported depending on device configuration and network conditions.
- Choosing UDP or TCP is handled at device configuration time and may depend on how the unit was provisioned by the installer or fleet manager.
- Enhanced SMS can be an alternative or fallback where cellular data is unavailable or restricted.
- Ensure APN and cellular settings on the LMU-700 match your mobile provider and fleet provisioning plan so it can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, reporting behavior, and which features are enabled by default.
- Hardware revisions or regional variants may differ in supported cellular bands or messaging options.
- Manufacturer configuration tools and over the air services may alter device behavior; verify OTA settings if units behave unexpectedly.
- Transport choice between UDP and TCP affects delivery characteristics but does not change the higher level reporting intent.
- Enhanced SMS support may be available for specific markets or firmware builds and can affect how alarms are delivered.
- Always validate the device configuration against the latest official documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the LMU-700 communicates helps installers and fleet managers ensure reliable reporting, accurate asset association, and predictable alerting when the device is used with Plaspy. This knowledge reduces integration friction and makes troubleshooting faster.

- Helps confirm the device is pointed at the correct Plaspy endpoint and using the expected transport.
- Makes it easier to interpret why a unit may not be reporting if firmware or configuration differs from expectations.
- Assists with planning connectivity fallbacks such as enhanced SMS versus cellular data.
- Supports correct provisioning of APN, transport, and server settings during installation.
- Aids in coordinating OTA updates or rule changes that affect when and how the device reports events.

## Why Use Plaspy with This Protocol

Using the CalmAmp LMU-700 with Plaspy gives organizations a practical way to capture GPS location, I/O events, and programmable alerts and to centralize that data for operational oversight. Plaspy's central endpoint and automatic protocol detection simplify large scale deployment by removing the need to map many device endpoints and ports.

To learn more about how Plaspy works with vehicle trackers and to explore platform features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official documentation for the LMU-700, please verify information on the manufacturer site http://www.calamp.com/. Protocol support and firmware behavior can change over time so checking the latest manufacturer resources is recommended.
