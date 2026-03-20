---
slug: /concox/eg02/protocol
id: eg02-protocol
sidebar_label: Protocol
title: Concox - EG02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Concox EG02 integration with Plaspy including connection endpoints and transport guidance
keywords:
  - Concox EG02 protocol
  - Concox EG02 GPS protocol
  - EG02 Plaspy compatibility
  - Concox EG02 communication
  - EG02 tracking protocol
  - Concox GPS tracker protocol
  - EG02 vehicle tracking
  - Concox tracker Plaspy
  - EG02 integration guide
  - EG02 anti theft tracker
---

# Concox - EG02 Protocol

This page covers the public protocol context for using the Concox EG02 GPS tracker with Plaspy. It explains how the tracker communicates in broad terms, what connection settings Plaspy expects, and which aspects of the device reporting behavior matter during integration. The focus here is on public and non sensitive information useful for setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the EG02 can vary depending on firmware version, hardware revision, and any manufacturer changes. Users should combine the guidance here with the EG02 hardware documentation and current firmware notes from the manufacturer.

## Protocol Overview

The EG02 communicates location, movement, and status information to remote servers using its built in reporting capabilities. The device reports its position and alerts so a fleet or security platform like Plaspy can display and act on that information. This page describes the role of the tracker protocol in enabling that flow without exposing proprietary packet formats.

- Provides device identity and status information so Plaspy can associate reports with the correct asset.
- Transmits GPS and cellular based location data for real time tracking and historical playback.
- Delivers event signals such as vibration alarm, power changes, geo fence events, and remote lock status.
- Enables remote control and configuration commands when the device and manufacturer firmware allow it.
- Ensures messages are delivered over a network transport so Plaspy can ingest and process them for monitoring and alerts.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device traffic at a single shared endpoint and port and uses the report payloads to determine the device protocol automatically. In most cases, if the EG02 is configured to report to the Plaspy endpoint the platform will detect and begin processing data without requiring manual protocol selection in the interface.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when the EG02 reports successfully to the platform.
- Users typically do not need to pick a protocol inside Plaspy if the device is configured to point to the Plaspy endpoint.
- Ensure the device identifier and reporting interval are set per manufacturer instructions so Plaspy can match incoming messages to the correct asset.

## Transport and Connection Context

The EG02 can be configured to send its reports over the network using either UDP or TCP depending on device firmware and configuration choices. Plaspy accepts both transport modes on its shared port so administrators can choose the transport that best suits their connectivity and reliability needs.

- Devices may be configured to point at the domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy listens on port 8888 for device reports and the device may use UDP or TCP on port 8888.
- Using TCP can provide delivery confirmation on unstable cellular links, while UDP is a common low overhead option when supported by firmware.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Confirm the EG02 transport setting and APN configuration match the mobile network environment for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or change reporting fields and available events; always verify the EG02 firmware level when confirming compatibility.
- Hardware batches or regional variants may carry small protocol differences that affect optional features such as remote lock or buzzer integration.
- Transport selection between UDP and TCP may affect how quickly events are received and whether retransmission is handled by the device.
- Manufacturer default server settings may need to be changed to point to d.plaspy.com or 54.85.159.138 on port 8888.
- Some remote commands or advanced features require specific firmware support and may not be available on all EG02 units.
- Validate compatibility by confirming the device reports to the Plaspy endpoint and that Plaspy detects the protocol automatically.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators set up devices correctly, diagnose connectivity problems, and ensure the EG02 reports meaningful data to Plaspy. A clear view of transport and reporting behavior reduces onboarding time and improves long term reliability.

- Correct transport and server settings prevent lost or misrouted reports during initial setup.
- Knowing which events the EG02 sends helps configure alerts and automations inside Plaspy.
- Awareness of firmware and hardware variations speeds troubleshooting when data fields differ from expectations.
- Proper APN and cellular settings are critical for mobile reporting in different regions and carriers.
- Understanding reporting intervals and power management ensures timely updates without unintended battery drain.

## Why Use Plaspy with This Protocol

Using the Concox EG02 with Plaspy gives organizations practical real time visibility into scooters and light vehicles, combining the device capabilities for anti theft alerts and remote control with Plaspy tracking, alerts, and operational oversight. The EG02 is purpose built for scooters and small electric vehicles, and when configured to report to Plaspy it can feed position and event data into a centralized platform for monitoring and response.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information on the manufacturer site https://www.iconcox.com/. Protocol support, firmware behavior, and manufacturer implementation can change over time so confirm the latest documentation before making configuration changes.
