---
slug: /cantrack/tk08a/protocol
id: tk08a-protocol
sidebar_label: Protocol
title: CanTrack - TK08A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol description for the CanTrack TK08A and how it communicates with Plaspy for reliable GPS tracking and telemetry
keywords:
  - CanTrack TK08A protocol
  - CanTrack TK08A GPS protocol
  - CanTrack TK08A Plaspy
  - TK08A communication protocol
  - TK08A tracking protocol
  - CanTrack GPS tracker protocol
  - TK08A motorcycle tracker protocol
  - TK08A fleet tracking
  - Plaspy device compatibility
  - Plaspy tracker protocol detection
---

# CanTrack - TK08A Protocol

This page describes the public protocol context for using the CanTrack TK08A tracker with Plaspy. It focuses on how the device communicates with Plaspy in open, non sensitive terms so fleet managers, integrators, and technical staff can understand the role of the tracker reporting protocol in successful device integration. The TK08A is a compact hard wired motorcycle and small vehicle tracker that provides GPS location, GPRS connectivity, anti theft immobilizer capability, alarm telemetry and short backup reporting on an internal Li Polymer battery.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Plaspy server settings for device reporting are d.plaspy.com and 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so properly configured devices typically start reporting without manual protocol selection inside Plaspy.

## Protocol Overview

The TK08A reporting protocol governs how the tracker identifies itself, transmits position and event data, and signals alarms and status updates that Plaspy consumes for mapping, alerts, and reporting. At a high level the protocol provides the necessary structure for device identity, periodic or event driven reporting, and minimal telemetry needed by fleet and security workflows.

- Enables the device to present identity and status so Plaspy can associate incoming messages with the correct asset.
- Transmits position, time, speed, and basic sensor states so Plaspy can show live location and historical routes.
- Conveys alarm and tamper events such as ignition state, vibration, power cut, and immobilizer triggers for timely alerts.
- Supports buffering and upload of stored positions after connectivity restoration to preserve continuity of tracking history.
- Operates over cellular data reporting methods commonly used by vehicle trackers so Plaspy can ingest messages in real time.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and performs automatic detection of compatible tracker protocols. For most users this means that when the TK08A is pointed to the Plaspy reporting address with the correct transport, Plaspy will identify and process the device without a manual protocol choice.

- Devices report to the Plaspy server address d.plaspy.com or the fallback IP 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.
- Users normally do not need to select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint using the appropriate transport.
- Basic configuration steps on the device side typically include server address, transport selection, and correct device identity so Plaspy can match incoming messages.
- If problems arise, reviewing device SMS or USB configuration procedures and the manufacturer documentation can help verify that reporting parameters are correct.

## Transport and Connection Context

The TK08A can send data to Plaspy using cellular data reporting or fallback SMS-based uplinks for certain events. Connection context determines how the device reaches Plaspy and which transport the tracker uses for live reporting and reconnection after outages.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Plaspy accepts tracker traffic on d.plaspy.com and 54.85.159.138 using port 8888.
- All devices in Plaspy use the same port, simplifying server settings across diverse tracker models.
- When cellular coverage is interrupted the TK08A stores positions locally and uploads buffered data when the connection resumes.
- Transport selection (UDP versus TCP) can affect delivery behavior and should be matched to the tracker settings recommended by the manufacturer for the specific firmware version.

## Protocol Compatibility Notes

- Firmware revisions can change how a tracker formats messages, which may affect compatibility with any receiving platform.
- Hardware revisions or optional feature sets on the TK08A family can introduce variations in available telemetry fields and alarm reporting.
- Transport choice matters: some firmware builds prefer UDP while others support TCP reporting to the same Plaspy server port.
- SMS reporting is often available as a fallback for critical alarms but may require separate configuration distinct from GPRS reporting.
- Always validate device identity settings so Plaspy can map incoming reports to the correct vehicle or asset.
- Confirm compatibility against manufacturer documentation when deploying large numbers of devices or mixing firmware versions.

## Why Protocol Understanding Matters

Understanding the tracker protocol reduces guesswork during installation and troubleshooting, and helps ensure reliable telemetry and alarm delivery to Plaspy. Knowing how and when the device reports makes it easier to configure server settings, diagnose connectivity issues, and validate that important events reach your monitoring workflows.

- Ensures correct server address and transport are applied during device setup so data reaches Plaspy.
- Helps troubleshoot missing locations by checking buffer and upload behavior after coverage gaps.
- Clarifies how alarms and ignition events are represented so alerts in Plaspy are accurate and actionable.
- Guides decisions on using SMS fallbacks versus GPRS for critical event delivery.
- Supports consistent fleet scale deployments by highlighting firmware or hardware variations to watch for.

## Why Use Plaspy with This Protocol

Using the TK08A with Plaspy gives organizations a practical path to collect position, sensor, and alarm data from compact motorcycle and small vehicle trackers. The combination is useful for mixed fleet management, anti theft workflows with remote immobilizer control, and telematics projects that rely on consistent reporting and historical route reconstruction.

To learn more about Plaspy and how it integrates with devices like the CanTrack TK08A visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions verify information on the manufacturer site https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
