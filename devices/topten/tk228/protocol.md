---
slug: /topten/tk228/protocol
id: tk228-protocol
sidebar_label: Protocol
title: TopTen - TK228 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TopTen TK228 and how it communicates with Plaspy for tracking and diagnostics
keywords:
  - TopTen TK228
  - TopTen TK228 protocol
  - TK228 GPS tracker protocol
  - TopTen tracker Plaspy compatibility
  - TK228 CAN BUS OBDII
  - TK228 tracking protocol
  - TopTen GPS communication
  - TK228 vehicle tracking
  - Plaspy device protocol
  - GPS tracker protocol guide
---

# TopTen - TK228 Protocol

This page provides a public, high level view of the communication context for the TopTen TK228 when used with Plaspy. It focuses on how the device typically reports location, diagnostic, and alarm information to a fleet server and what to consider when configuring the tracker to work with Plaspy. The intent is to explain the protocol role and connection basics without exposing implementation sensitive details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the TK228 is reporting to the Plaspy endpoint. Exact behavior can vary by TK228 firmware version, hardware revision, and manufacturer implementation, so you should validate device-specific settings against the manufacturer documentation when necessary.

## Protocol Overview

The TK228 uses its reporting protocol to move GPS positioning, GSM cell location fallback, CAN bus diagnostics, and alarm events from the vehicle to a remote server. The protocol defines how the device identifies itself, reports periodic and event data, and carries status or diagnostic payloads that fleet platforms like Plaspy consume for mapping, alerts, and analysis.

- Carries positional updates and GSM base station information to support location accuracy and fallback reporting.
- Transmits vehicle diagnostics and CAN bus data that support odometer, speed, engine status, and error code monitoring.
- Sends alarm and sensor events such as vibration, movement, geofence, overspeed, power loss, and immobilizer triggers.
- Provides device identification and status fields that let a server associate incoming messages with a specific vehicle or IMEI.
- Enables remote diagnostics and control flows via GPRS reporting channels when supported by the device and manufacturer settings.

## How Plaspy Detects the Protocol

Plaspy receives reported data at a single shared endpoint and automatically identifies the tracker protocol in order to parse incoming messages. For most users this means there is no manual protocol selection inside Plaspy provided the TK228 is configured to report to the Plaspy endpoint.

- Plaspy listens for device reports at d.plaspy.com and the public IP 54.85.159.138 on the standard Plaspy port.
- All devices used with Plaspy report to the same port number which simplifies device configuration and onboarding.
- The TK228 can be set to report to the Plaspy endpoint and, once messages arrive, Plaspy detects the appropriate protocol for that device model or message type.
- Users typically only need to configure the device APN, server address, and transport type on the TK228; Plaspy handles protocol detection automatically.
- If device messages do not arrive or are not parsed, check transport selection, server address, and device firmware compatibility.

## Transport and Connection Context

Connection choices determine how TK228 messages reach the Plaspy server but do not change the public endpoint details. The TK228 may be configured to use either UDP or TCP depending on device firmware and local configuration options, and it can point to either the Plaspy domain or the IP address.

- Devices may be pointed to d.plaspy.com or directly to 54.85.159.138 as the reporting endpoint.
- The standard Plaspy port used by all devices is 8888 and can be used over either UDP or TCP.
- Choose UDP or TCP on the TK228 according to network reliability and device capability; both transports are accepted by Plaspy on the same port.
- Ensure APN and GPRS settings are correct so the device can establish a cellular data connection to the Plaspy endpoint.
- Confirm that carrier networks and in-vehicle systems do not block the chosen transport or port.

## Protocol Compatibility Notes

- Firmware revisions can change how and what data the TK228 reports; verify the device firmware level when troubleshooting compatibility.
- Hardware revisions and CAN bus wiring differences can affect which vehicle signals are available through the device protocol.
- Some TK228 features such as Bluetooth diagnostics, RFID alarm control, and wireless immobilizer are managed locally and may not always surface over GPRS to a server.
- Transport selection between UDP and TCP may influence delivery behavior in constrained networks; test the chosen transport in your environment.
- Manufacturer configuration defaults may point to other service providers by default; update server address to d.plaspy.com or 54.85.159.138 and port 8888 for Plaspy integration.
- Validate feature availability and protocol behavior against the manufacturer documentation before deploying at scale.

## Why Protocol Understanding Matters

Knowing how the TK228 communicates helps ensure a smooth setup, effective troubleshooting, and reliable long term operation within Plaspy. Understanding the protocol role reduces guesswork when events are missing, diagnostics are incomplete, or transport issues arise.

- Speeds initial setup by clarifying what server address and transport the device should use.
- Helps diagnose missing reports by checking whether messages reach d.plaspy.com or 54.85.159.138 on port 8888.
- Guides decisions about firmware upgrades and feature enablement when certain data fields are required.
- Supports proper mapping of CAN bus and OBDII signals to the fleet platform expectations.
- Improves alarm and immobilizer handling by clarifying which events the device will report to the server.

## Why Use Plaspy with This Protocol

Using the TK228 with Plaspy gives organizations centralized visibility into vehicle location, status, and diagnostics in a single platform. Plaspy’s automatic protocol detection and unified endpoint approach simplify onboarding so fleets can focus on monitoring and operations rather than low level protocol management.

If you want to learn more about Plaspy and how the platform works with devices like the TopTen TK228, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest TK228 device specifics and firmware notes on the manufacturer website http://www.t10.cn.
