---
slug: /topshine/tlv01/protocol
id: tlv01-protocol
sidebar_label: Protocol
title: TopShine - TLV01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TopShine TLV01 and how it communicates with Plaspy for real time tracking and alarms
keywords:
  - TopShine TLV01 protocol
  - TopShine TLV01 GPS protocol
  - TopShine TLV01 communication protocol
  - TopShine TLV01 tracking protocol
  - TLV01 protocol Plaspy
  - TopShine GPS tracker protocol
  - TLV01 GPS reporting
  - TopShine tracker compatibility
  - GPS tracker protocol Plaspy
  - fleet tracking TopShine
---

# TopShine - TLV01 Protocol

This page describes the public protocol context for using the TopShine TLV01 Mini Hide GPS Tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general terms, how that communication is carried over mobile data and SMS, and what integrators and fleet managers should consider when configuring the device for reliable reporting and remote control.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol so manual protocol selection is typically not required when a device is pointed to the Plaspy endpoint. Exact protocol behavior and available features can vary by TLV01 firmware, hardware revision, and manufacturer implementation, so installers should validate device settings against manufacturer documentation and test on the intended firmware build.

## Protocol Overview

The TLV01 communicates position, event alarms, and telemetry to a backend platform using GSM GPRS data and SMS reporting, with hybrid GPS and LBS positioning to improve fixes in weak signal areas. In practice, the device protocol governs how the tracker identifies itself, reports location and events, and accepts remote control requests such as immobilizer commands.

- Enables the tracker to report position updates, geo-fence events, tow detection, and overspeed alarms to Plaspy.
- Provides a way for the device to identify itself and supply usable telemetry such as power status and battery level.
- Supports both internet based reporting over GSM GPRS and SMS based reporting as a fallback channel.
- Carries remote command capability for authorized controls like engine or oil cut off when the device and deployment permit.
- Facilitates configurable reporting intervals and event triggers that determine how and when the device sends updates to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a common public endpoint and port and automatically detects the tracker protocol based on the data reported to that endpoint. For most TLV01 deployments this means that once the device is configured to report to the Plaspy endpoint, platform-side protocol selection is handled automatically and no manual protocol entry is required in Plaspy.

- Plaspy’s public server endpoint for device reporting is d.plaspy.com and the platform also accepts connections to the server IP 54.85.159.138.
- Plaspy listens on port 8888 and uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol from incoming connections and reported data so installers do not normally need to configure protocol type inside Plaspy.
- If a device is configured to send SMS messages instead of GPRS, Plaspy can ingest SMS forwarded data through the same platform workflow.
- Confirm device reporting destination and transport on the tracker before concluding that a device is not recognized by Plaspy.

## Transport and Connection Context

The TLV01 can send reports over mobile data (GPRS) or via SMS, and when using IP reporting the device may be configured to use either UDP or TCP depending on device capability and settings. Plaspy accepts both common transport modes and expects devices to be pointed to the standard Plaspy endpoint for automatic handling.

- Devices may be configured to report to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 for incoming tracker connections and all devices use the same port for reporting.
- The TLV01 supports reporting over GSM GPRS for live telemetry and SMS as a fallback reporting channel when data connectivity is unavailable.
- Transport selection (UDP versus TCP) is determined by the device configuration and network conditions; the device may be set to use either transport on port 8888.
- Ensure the device APN and mobile data settings are correct for the SIM being used so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions may change the set of commands, reporting fields, or default reporting intervals available on the TLV01.
- Hardware revisions and regional device variants can alter supported bands, SMS formats, or accessory interfaces.
- Some features such as immobilizer control depend on proper wiring of inputs and outputs and on manufacturer-provided settings.
- Transport behavior can differ by configuration; confirm whether a device is set for UDP or TCP and that it points to Plaspy on port 8888.
- SMS reporting can be used as a reliable fallback, but SMS content and routing may vary by carrier and firmware.
- Always validate compatibility and feature availability against the official manufacturer documentation for the exact TLV01 hardware and firmware you have.

## Why Protocol Understanding Matters

A practical understanding of the TLV01 communication protocol helps installers and fleet operators achieve reliable telemetry, timely alarms, and correct remote control behavior when the device is paired with Plaspy. Knowing what the device reports and how it connects makes setup and troubleshooting faster and reduces downtime.

- Helps confirm that the tracker is correctly reporting to Plaspy and using the expected transport and destination.
- Enables quicker diagnosis when position updates or alarms are not appearing in Plaspy.
- Clarifies how fallback channels like SMS operate alongside GPRS reporting.
- Informs decisions about reporting thresholds and power management for battery backed devices.
- Assists with secure configuration of remote control features so that immobilizer and other commands behave as expected.

## Why Use Plaspy with This Protocol

Pairing the TopShine TLV01 with Plaspy gives organizations a consolidated view of location, events, and device health across a fleet of covert and small form factor trackers. Plaspy ingests the TLV01’s position, alarm, and telemetry data to present maps, history, and alerts that help with theft response, operational oversight, and asset monitoring.

If you want to learn more about how Plaspy handles device communication and fleet telemetry, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest TLV01 device specific protocol information and firmware guidance on the manufacturer site https://www.gztopshine.com/.
