---
slug: /calmamp/lmu_900/protocol
id: lmu_900-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the CalmAmp LMU 900 tracker and how it communicates with Plaspy for vehicle tracking and fleet monitoring
keywords:
  - CalmAmp LMU-900 protocol
  - CalmAmp LMU-900 GPS protocol
  - CalmAmp LMU-900 protocol for Plaspy
  - CalmAmp LMU-900 communication protocol
  - CalmAmp LMU-900 tracking protocol
  - CalmAmp tracker Plaspy compatibility
  - LMU-900 UDP SMS reporting
  - vehicle tracking LMU-900
  - fleet tracking CalmAmp LMU-900
  - LMU-900 firmware considerations
---

# CalmAmp - LMU-900 Protocol

This page covers the public protocol context for using the CalmAmp LMU-900 tracker with Plaspy. It explains how the device typically communicates with a backend platform, which data types are commonly reported, and which connection options are relevant when integrating LMU-900 units into Plaspy for vehicle tracking and fleet monitoring. The content focuses on high level, non sensitive protocol context rather than implementation internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once a device is correctly pointed at the Plaspy endpoint. Exact protocol behavior can vary depending on LMU-900 firmware, hardware revision, and manufacturer implementation. The LMU-900 itself can report by enhanced SMS or datagram messaging over IP, and it supports common cellular transports and remote configuration features that affect how it communicates.

## Protocol Overview

The protocol for a tracker like the LMU-900 defines how the unit packages and sends location, motion, I/O, and status information to a server so the data can be consumed by a platform such as Plaspy. At a high level the protocol role is to reliably move telemetry from the vehicle to the cloud while supporting alerts and remote configuration controls.

- Enable periodic and event driven position reporting so Plaspy can display location and history
- Convey accelerometer and I O state to support motion detection and custom rules
- Transport alerts and diagnostic status for unit health monitoring and exception handling
- Support alternative transports such as enhanced SMS and IP datagrams to adapt to network availability
- Allow remote updates and configuration to change reporting behavior without physical access to the unit

## How Plaspy Detects the Protocol

Plaspy receives incoming device data at a single shared endpoint and port and performs automatic protocol detection for common tracker models when a properly formatted message arrives. This means most users do not need to manually select a protocol in Plaspy if the tracker is configured to report to the Plaspy endpoint.

- Point the device to the Plaspy endpoint d.plaspy.com or the Plaspy server IP 54.85.159.138 to deliver telemetry
- Use the common Plaspy port 8888 which is used for all devices in Plaspy
- Configure the LMU-900 to report using a supported transport option so messages reach Plaspy
- Plaspy will automatically detect the tracker protocol and route messages into the platform processing pipeline
- Users typically verify the device is reaching the Plaspy endpoint and that messages appear in logs rather than setting a protocol option manually

## Transport and Connection Context

LMU-900 devices can be configured to use UDP or TCP to deliver IP datagrams, or to fall back to SMS for specific message types depending on unit configuration and network availability. When integrating with Plaspy, the transport and endpoint choices determine how the device reaches the Plaspy message endpoint.

- The LMU-900 may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices may be pointed at the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138
- Plaspy uses the same port for all supported devices which simplifies device configuration
- Enhanced SMS reporting is an alternative transport supported by the LMU-900 and may be used where IP connectivity is limited
- Cellular network options such as GSM GPRS CDMA and HSPA affect available transports and should be considered during setup

## Protocol Compatibility Notes

- Firmware revisions can change message frequency options, fields reported, and available transports so always confirm the device firmware version during integration
- Hardware revisions or optional accessories such as different antennas can alter GPS performance and reporting behavior
- Manufacturer configuration tools or cloud services may influence how the unit reports to external servers and which transports are enabled
- Choosing UDP versus TCP can affect delivery characteristics and should match both the device configuration and your operational needs
- Over the air management features such as CalAmp PULS can change configuration remotely which in turn affects protocol behavior
- Validate that the LMU-900 is configured to report to the Plaspy endpoint and test in a controlled environment before wide deployment

## Why Protocol Understanding Matters

Understanding the communication protocol used by the LMU-900 makes setup and troubleshooting more efficient and reduces time to reliable operation on Plaspy. Knowing which transports and reporting modes the device uses helps ensure messages arrive as expected and that alerts and I O mappings behave correctly.

- Confirm the correct Plaspy endpoint and port to avoid misrouted telemetry
- Choose UDP or TCP in line with device settings and network conditions for the expected delivery profile
- Verify firmware capabilities so the fields your applications rely on are present in reported messages
- Test SMS fallback behavior when IP connectivity is unreliable to ensure continuity of critical alerts
- Use the LMU-900 I O and accelerometer features in Plaspy by confirming how those signals are encoded and reported

## Why Use Plaspy with This Protocol

Using the CalmAmp LMU-900 together with Plaspy provides organizations with practical vehicle visibility, configurable alerting, and centralized fleet oversight. The LMU-900’s compact hardware, accelerometer based motion sensing, and flexible I O options map well to common fleet use cases when the unit is configured to report to Plaspy.

Plaspy’s shared endpoint approach and automatic protocol detection mean initial integration steps are straightforward: point the LMU-900 to d.plaspy.com or 54.85.159.138 using port 8888 and choose the transport that fits your network plan. To learn more about Plaspy and how it can integrate with CalmAmp trackers visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time and you should verify the latest device specific protocol information and firmware notes on the manufacturer website http://www.calamp.com/.
