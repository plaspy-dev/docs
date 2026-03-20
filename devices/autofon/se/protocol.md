---
slug: /autofon/se/protocol
id: se-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the AutoFon SE+ Маяк tracker with Plaspy server settings and integration context
keywords:
  - AutoFon SE+ Маяк protocol
  - AutoFon SE+ Mayak GPS
  - AutoFon SE+ tracking protocol
  - AutoFon protocol Plaspy
  - SE+ Mayak GPRS compatibility
  - AutoFon GPS tracker protocol
  - AutoFon SE+ Plaspy integration
  - vehicle tracking AutoFon SE+
  - AutoFon SE+ monitoring server
  - AutoFon SE+ communication
---

# AutoFon - SE+ Маяк Protocol

This page describes the public protocol context for using the AutoFon SE+ Маяк GPS tracker with the Plaspy fleet monitoring platform. It focuses on how the device reports location and event data to a remote monitoring endpoint and what to consider when configuring the device to work with Plaspy, using non sensitive and general protocol information.

The AutoFon SE+ Маяк is a compact GPRS and SMS tracker on the v.6.x hardware platform with GLONASS+GPS positioning, multiple movement and impact sensors, a built in microphone, a black box for packet storage, and remote firmware update capability via GPRS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behaviour can vary depending on firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by a tracker is the set of rules and message patterns the device follows when reporting location, status, and events to a monitoring server. For SE+ Маяк this generally means sending position and event information over GPRS to a configured server address so a platform such as Plaspy can ingest and present the data.

- Enables the device to transmit GNSS coordinates and timestamped location updates to a monitoring endpoint.
- Carries event reports such as movement detection, impacts, SOS signals, and sensor state changes.
- Allows the tracker to identify itself so the receiving platform can associate messages with the correct unit.
- Supports remote configuration and firmware update mechanisms delivered over GPRS from a monitoring server.
- Makes it possible for a backend like Plaspy to convert raw device messages into usable telemetry and alerts for fleet management.

## How Plaspy Detects the Protocol

Plaspy is designed to receive tracker traffic on a single shared endpoint and automatically detect the device protocol so most users do not need to select a protocol manually. If the SE+ Маяк is configured to report correctly to Plaspy, the platform will typically recognize and parse the incoming data stream.

- Plaspy listens on the shared server domain d.plaspy.com and IP address 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies server and firewall configuration.
- Plaspy automatically detects the tracker protocol when the device connects to the Plaspy endpoint.
- In normal setup the user only needs to point the tracker to the Plaspy endpoint and ensure APN and GPRS settings are correct.
- If the device supports both UDP and TCP, Plaspy can accept connections over either transport as configured on the device.

## Transport and Connection Context

Transport and connection choices determine how the SE+ Маяк delivers its data to Plaspy. The device can be configured to use GPRS to send packets to a monitoring server over IP and may support either UDP or TCP depending on the unit and firmware. Knowing the connection context helps with firewall rules, APN configuration, and ensuring reliable delivery.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts tracker connections on port 8888 and all supported devices use this same port.
- SE+ Маяк units can be set to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Ensure firewall and NAT rules allow outbound GPRS connections to the Plaspy endpoint and incoming responses on the required transport.
- Verify the tracker APN credentials and GPRS registration are functioning so the device can establish IP connectivity to Plaspy.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message timing, available fields, or optional reporting modes; check the device firmware release notes if precise behavior matters.
- Some manufacturer configurations expose both SMS and GPRS reporting modes; for Plaspy integration use the GPRS monitoring server option.
- Transport selection (UDP vs TCP) may affect delivery characteristics; choose the transport supported by your firmware and network conditions.
- Remote firmware update capability via GPRS is available on some revisions; confirm whether updates may alter protocol behaviour.
- Hardware options and expansion modules can expose extra channels or sensors; those additions may report additional event types to the server.
- Always validate compatibility with a short field test before wide deployment and consult official manufacturer documentation for details.

## Why Protocol Understanding Matters

Understanding how the SE+ Маяк communicates with a backend helps ensure reliable setup, predictable behavior, and faster troubleshooting when integrating with Plaspy. Even when automatic detection is available, knowing the communication context reduces integration friction and operational surprises.

- Helps confirm correct APN, GPRS registration, and server address configuration on the device.
- Speeds troubleshooting when location updates or events do not appear in Plaspy.
- Informs decisions about transport choice between UDP and TCP based on network reliability and latency.
- Guides firmware update planning so you understand potential changes in reporting behavior.
- Assists in configuring alerts and telemetry in Plaspy by clarifying which device events will be reported.

## Why Use Plaspy with This Protocol

Using the AutoFon SE+ Маяк with Plaspy gives organisations a straightforward path to receive, visualize, and act on GNSS location and event data from compact GPRS trackers. Plaspy’s shared endpoint approach means a single configuration target for devices and consistent processing across supported models, which simplifies rollout for fleets and distributed assets.

Plaspy accepts SE+ Маяк traffic on the public server d.plaspy.com (IP 54.85.159.138) using port 8888, and the platform will automatically detect the tracker protocol when the device is pointed to that endpoint. To learn more about Plaspy and its features visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions please verify current documentation at the device manufacturer site https://www.autofon.ru/.
