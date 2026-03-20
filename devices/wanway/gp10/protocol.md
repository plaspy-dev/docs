---
slug: /wanway/gp10/protocol
id: gp10-protocol
sidebar_label: Protocol
title: WanWay - GP10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the WanWay GP10 and how it communicates with Plaspy for tracking and alerts
keywords:
  - WanWay GP10 protocol
  - WanWay GP10 GPS protocol
  - WanWay GP10 for Plaspy
  - GP10 tracking protocol
  - WanWay GP10 communication protocol
  - WanWay GP10 compatibility
  - WanWay GP10 tracker protocol
  - WanWay GP10 device protocol
  - WanWay GP10 real time tracking
  - WanWay GP10 geo fence
---

# WanWay - GP10 Protocol

This page provides public protocol context for using the WanWay GP10 personal tracker with the Plaspy platform. It focuses on how the device typically communicates with Plaspy for real time location, geo fence events, SMS alerts, and related telemetry while avoiding device firmware internals or private implementation details.

The GP10 is a compact personal tracker with real time tracking, geo fencing, SMS alerts, voice monitoring, and an 800mAh battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a protocol level appropriate for integration and troubleshooting.

## Protocol Overview

The protocol used by the GP10 governs how the tracker identifies itself, reports position and status, and sends event notifications to a remote server. For Plaspy integration the important public facts are the transport endpoint and that Plaspy will accept device reports and infer the protocol automatically.

- The protocol conveys device identity and location reports so Plaspy can map the GP10 to an asset in the platform.
- Telemetry typically includes periodic position updates, event-driven messages such as geo fence breaches and SOS alerts, and status indicators like battery level.
- Protocol messages are sent from the device to the server endpoint so Plaspy can present real time tracking and trigger notifications.
- The device may support multiple transport options; the chosen transport determines how the same protocol messages are delivered.
- Understanding which events the tracker can report helps configure alerts and monitoring rules inside Plaspy.

## How Plaspy Detects the Protocol

Plaspy operates with a shared server endpoint and port for all supported devices and automatically detects the reporting protocol when a tracker is correctly configured to send data. In most cases a user does not need to select a protocol manually in Plaspy if the device is pointed to the Plaspy endpoint.

- Plaspy receives incoming reports at the domain d.plaspy.com and also accepts the corresponding public IP address 54.85.159.138.
- All devices supported by Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when the device starts reporting to the platform endpoint.
- If a device is not appearing in Plaspy, confirm the tracker is configured to report to the Plaspy endpoint and verify transport settings on the device.
- Users typically only need to ensure server address and transport mode are set correctly on the GP10 for automatic detection to occur.

## Transport and Connection Context

The GP10 can be configured to use either UDP or TCP transport to send its reports, depending on device capabilities and chosen settings. For Plaspy integration the device should be pointed to the Plaspy endpoint and use the supported transport on the common port.

- Devices may be configured to report to d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy accepts device connections on port 8888 and all Plaspy supported devices use this same port.
- The GP10 may be set to use UDP or TCP on port 8888 depending on its configuration options and firmware.
- Choosing UDP or TCP can affect delivery behavior; select the mode that matches the device configuration and network requirements.
- Ensure network firewalls and carrier APN settings allow outbound traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available events, or optional fields, so confirm firmware details if behavior differs from expectations.
- Hardware variants or regional models may implement the reporting features slightly differently; validate the exact model revision when troubleshooting.
- Transport selection (UDP versus TCP) must match the device configuration to ensure successful delivery to Plaspy.
- Some features such as SMS alerts or voice monitoring are device capabilities and may not be directly part of the IP reporting protocol.
- Always validate configuration examples against the current manufacturer documentation for the GP10.
- If a device does not register automatically in Plaspy, recheck the server address, transport selection, and device reporting interval settings.

## Why Protocol Understanding Matters

Knowing how the GP10 communicates with Plaspy helps with setup, reliable operation, and diagnosing issues when devices do not behave as expected. A basic grasp of the communication context guides configuration choices and reduces time spent on common connectivity problems.

- Confirms the device is pointed to the correct Plaspy server endpoint so automatic detection can occur.
- Helps choose the correct transport mode and verify network paths for outbound device traffic.
- Enables targeted troubleshooting when expected events like geo fence alerts or SOS messages are not received.
- Helps plan battery and reporting interval trade offs for desired real time behavior and battery life.
- Supports clear communication with manufacturer support when firmware or device behavior needs investigation.

## Why Use Plaspy with This Protocol

Using the WanWay GP10 with Plaspy provides a straightforward way to centralize tracking, alerts, and device monitoring across a fleet of personal trackers and assets. Plaspy’s automatic protocol detection and shared endpoint model simplify onboarding so devices that are configured to report to the Plaspy endpoint begin to appear in the platform with minimal manual protocol selection.

If you need more detail about Plaspy capabilities or device onboarding processes, learn more at https://www.plaspy.com. For the latest GP10 firmware, device configuration options, and manufacturer specific protocol details verify information on the official WanWay site https://www.wanwaytech.net/.
