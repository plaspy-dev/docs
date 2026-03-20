---
slug: /megastek/mt_100/protocol
id: mt_100-protocol
sidebar_label: Protocol
title: Megastek - MT-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating Megastek MT 100 with Plaspy using shared connection settings and automatic detection
keywords:
  - Megastek MT 100 protocol
  - Megastek MT 100 GPS protocol
  - MT 100 communication protocol
  - MT 100 tracking protocol
  - Megastek tracker compatibility
  - Plaspy device compatibility
  - Plaspy GPS integration
  - vehicle tracking Megastek MT 100
  - real time tracking MT 100
  - AGPS MT 100
---

# Megastek - MT-100 Protocol

This page describes the public protocol context for using the Megastek MT-100 handheld tracker with Plaspy. It focuses on how the tracker communicates with a Plaspy server endpoint and what to consider when configuring reporting so that location, alarms, and status arrive reliably into the Plaspy platform. The page uses the MT-100 feature set as background, including AGPS assisted positioning, SOS alarm with LBS assistance, two way communication, real time tracking, and support for GPRS and SMS.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by MT-100 firmware version, hardware revision, and manufacturer implementation, so this document keeps protocol discussion at a public and practical level rather than documenting firmware specific frames or private command structures.

## Protocol Overview

At a high level the MT-100 communication protocol defines how the device reports identity, position, alarms, and status to a remote server and how the server can send control or query messages back. For Plaspy integration the key role of the protocol is to reliably deliver usable telemetry and event data over IP transport so Plaspy can parse and present it to users.

- Enable the device to identify itself so Plaspy can associate messages with the correct asset or user.
- Convey location information including AGPS assisted GPS and LBS assisted positions for SOS events.
- Transport alarm and status events such as geo fence, overspeed, vibration, and low battery.
- Allow two way commands and acknowledgements where device firmware implements remote control or configuration.
- Use an IP transport channel (GPRS data) as the primary path for reporting to Plaspy, with SMS available on the MT-100 for alternate messaging or alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device data at a shared server endpoint and automatically identifies the tracker protocol based on the reporting traffic it receives. In most cases you do not need to manually select a protocol inside Plaspy so long as the MT-100 is configured to report to the Plaspy endpoint correctly.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The Plaspy port used for device reporting is 8888 and all devices in Plaspy use the same port.
- The platform performs automatic protocol detection so configured devices typically register without a manual protocol selection step.
- Proper device identity and network reporting to the Plaspy endpoint are the primary requirements for successful automatic detection.
- If a device does not appear, verify that the device is pointed to the correct Plaspy endpoint and that network connectivity permits outbound connections to the server.

## Transport and Connection Context

Transport selection and network configuration determine how the MT-100 reaches the Plaspy endpoint. The MT-100 supports GPRS data for IP reporting and SMS as a fallback or secondary channel. When configuring the device, choose the transport that matches the firmware capabilities and network environment.

- The device may be configured using UDP or TCP on port 8888 depending on device support and local configuration.
- Devices reporting to Plaspy can point to d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices which simplifies device configuration across models.
- Ensure the device APN and SIM data plan allow outbound GPRS connections to the Plaspy endpoint.
- Use UDP when required by the device firmware or when lower overhead is preferred; use TCP if reliable ordered delivery is needed and supported by the firmware.
- Network firewalls and carrier restrictions can block connections so confirm that the device can reach the Plaspy endpoint from the deployed SIM and location.

## Protocol Compatibility Notes

- MT-100 firmware versions and hardware revisions can change what commands and reporting formats the device uses; verify firmware notes when troubleshooting.
- Transport mode (UDP or TCP) must match the device configuration; some units may only support one transport type.
- GPRS settings such as APN and network operator behavior can affect how and when the device successfully connects to Plaspy.
- SMS is supported by the MT-100 and can be useful for initial device setup or emergency alerts but is not the same as continuous IP reporting.
- Manufacturer customizations or region specific firmware may alter available features or message fields.
- Always validate compatibility against current manufacturer documentation for the specific MT-100 unit in use.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable reporting to Plaspy, allows targeted troubleshooting, and supports long term maintainability of deployed trackers. A practical grasp of transport choices, server endpoints, and how the device exposes identity and events reduces configuration time and operational issues.

- Confirms device is pointed to the Plaspy endpoint and uses the expected transport and port.
- Helps interpret missing or delayed telemetry by checking transport, APN, and carrier connectivity.
- Enables correct configuration of device identity fields so Plaspy can automatically detect and associate messages.
- Assists in diagnosing alarm behavior and event reporting such as SOS, geo fence, overspeed, and low battery alerts.
- Supports planning for firmware updates or hardware replacements by highlighting where protocol differences may impact integration.

## Why Use Plaspy with This Protocol

Using the Megastek MT-100 with Plaspy gives organizations a straightforward way to collect and act on location and event data from a rugged handheld tracker. Plaspy's shared endpoint and automatic protocol detection minimize the amount of manual configuration required, allowing teams to focus on rules, alerts, and operational workflows rather than low level connectivity details.

To learn more about Plaspy and how it handles device connections and data presentation, visit https://www.plaspy.com. For the most current MT-100 protocol specifics, firmware notes, and hardware details consult the official manufacturer documentation at https://www.megastek.com/ since protocol support and firmware behavior can change over time and should be verified with the manufacturer.
