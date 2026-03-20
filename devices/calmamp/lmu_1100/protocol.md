---
slug: /calmamp/lmu_1100/protocol
id: lmu_1100-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-1100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CalmAmp LMU 1100 GPS tracker and how it connects with Plaspy using shared server and port settings
keywords:
  - CalmAmp LMU 1100
  - CalmAmp LMU 1100 protocol
  - CalmAmp GPS tracker protocol
  - LMU 1100 Plaspy compatibility
  - LMU 1100 communication
  - vehicle tracking protocol
  - GPS tracker integration Plaspy
  - PEG event generator
  - CalAmp PULS
  - outdoor asset tracking
---

# CalmAmp - LMU-1100 Protocol

This page provides a public protocol overview for using the CalmAmp LMU-1100 vehicle tracker with the Plaspy platform. It focuses on the communication context and practical integration considerations that matter when sending positioning, status, and event data from LMU-1100 units to Plaspy without exposing detailed or sensitive implementation specifics.

The LMU-1100 is a compact, outdoor rated tracker with GPS performance suitable for recreational vehicles and other exposed assets, including a backup battery and I O capacity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device configuration and firmware state will influence how the LMU-1100 behaves when reporting to Plaspy.

## Protocol Overview

The tracker protocol is the set of rules the LMU-1100 uses to send location, status, and event messages to a backend server. In practical terms the protocol determines how the device identifies itself, how and when it reports position and alerts, and how server acknowledgements or commands are exchanged when supported by the device and platform.

- Enables the LMU-1100 to identify the unit and deliver GPS position and status to Plaspy
- Carries event driven messages such as motion, input changes, geo zone triggers, and PEG generated alerts
- Supports periodic reporting and on demand messages that fleet managers rely on for monitoring and recovery
- Works alongside CalAmp features such as PEG for programmable event rules and PULS for over the air updates
- Acts as the bridge between the physical device and Plaspy for telemetry and remote management signals

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and uses the incoming device traffic to automatically detect the tracker protocol. When an LMU-1100 is configured to report to Plaspy, there is generally no need to manually pick a protocol inside Plaspy as long as the device points to the correct Plaspy endpoint and is properly configured.

- Plaspy listens on a shared server endpoint at d.plaspy.com
- The Plaspy server address is 54.85.159.138
- The platform accepts incoming device traffic on port 8888 and automatically detects protocol
- Users typically do not need to manually select a protocol in Plaspy when the device reports to the Plaspy endpoint
- Plaspy supports multiple tracker types while maintaining a consistent inbound connection point for simplicity

## Transport and Connection Context

Transport configuration determines how the LMU-1100 sends its protocol messages to Plaspy. The device may be set to use either UDP or TCP depending on device capabilities and fleet configuration preferences. Correct host and port configuration on the device is required for reliable delivery of position and event data.

- The LMU-1100 may be configured to use UDP or TCP on port 8888
- Devices can point to the Plaspy domain d.plaspy.com or the IP address 54.85.159.138
- All devices in Plaspy use the same port for reporting which simplifies device provisioning
- Choice of UDP versus TCP can affect message delivery guarantees and behavior depending on network conditions and device settings
- Confirm transport settings in device configuration or management portal before deployment

## Protocol Compatibility Notes

- Firmware revisions can change message behavior and available features so verify firmware level when planning integration
- Hardware revisions or regional variants may expose different inputs, outputs, or radio behavior that affect reporting
- Manufacturer tools such as PULS can alter configuration and PEG rules which in turn change what events the tracker sends
- Transport selection between UDP and TCP should align with the device configuration and network environment
- Plaspy automatic protocol detection reduces the need for manual selection but does not replace validating device reporting in initial tests
- Always validate that the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888 and confirm messages arrive as expected

## Why Protocol Understanding Matters

A clear, practical understanding of how the LMU-1100 communicates with Plaspy helps streamline setup, troubleshooting, and reliable fleet operations. Knowing what the tracker sends and how it connects reduces time to service and improves overall system stability.

- Ensures correct host and port settings on the device for successful delivery
- Helps diagnose why messages are not appearing in Plaspy by checking transport and firmware state
- Supports efficient configuration of PEG rules so relevant events are reported to Plaspy
- Aids in planning for battery and reporting intervals to balance visibility and power usage
- Improves coordination with manufacturer support when firmware or hardware variations affect behavior

## Why Use Plaspy with This Protocol

Using the CalmAmp LMU-1100 with Plaspy provides a consolidated way to monitor outdoor and recreational assets with minimal provisioning overhead. Plaspy s unified endpoint and automatic protocol detection make it straightforward to receive location and event data from a mixed fleet of devices while maintaining consistent management practices.

To learn more about how Plaspy works with devices like the LMU-1100 visit https://www.plaspy.com. Please verify current device protocol details, firmware behavior, and manufacturer implementation on the official CalmAmp site at http://www.calamp.com/ since protocol support and device behavior can change over time.
