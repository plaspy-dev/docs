---
slug: /yulongda/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: YulongDa - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating the compact YulongDa TK102 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - YulongDa TK102 protocol
  - TK102 GPS protocol
  - YulongDa tracker Plaspy compatibility
  - TK102 communication protocol
  - TK102 tracking protocol
  - YulongDa GPS tracker protocol
  - TK102 integration guide
  - fleet management TK102
  - vehicle tracking TK102
  - Plaspy compatible trackers
---

# YulongDa - TK102 Protocol

This page describes the public protocol context for using the YulongDa TK102 GPS tracker with Plaspy. It focuses on how the tracker communicates in general terms, how Plaspy receives device reports, and what to review when integrating the TK102 into fleet or asset tracking workflows. The hardware details of the TK102 such as compact size, SIRF3 GPS chipset, supported GSM/GPRS bands, and battery characteristics are useful background when evaluating device deployment and reporting behavior.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device-specific details against the manufacturer documentation. For connectivity, Plaspy accepts reports at d.plaspy.com and 54.85.159.138 on port 8888 and the device may be configured to use either UDP or TCP to that endpoint.

## Protocol Overview

The TK102 reporting protocol defines how the tracker identifies itself and delivers location, status, and telemetry to a remote server. This page stays at a public and practical level so you can understand the role of the protocol when integrating the TK102 with Plaspy without delving into firmware internals.

- The protocol allows the device to send periodic location updates, event driven messages, and basic status information to the server.
- Identification fields in the protocol enable Plaspy to associate incoming reports with a registered device record.
- Time, position, speed, and basic sensor or input states are typically conveyed so Plaspy can map reports to usable tracking data.
- The protocol interacts with the transport layer (TCP or UDP) but actual framing and timing may change with firmware or configuration.
- Successful integration depends on the device reporting to the Plaspy endpoint and on Plaspy successfully recognizing the incoming message format.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and uses automated detection to determine the protocol used by incoming devices. In most common setups you do not need to select a protocol manually in Plaspy if the device is correctly configured to report to the Plaspy server.

- Plaspy accepts connections and datagrams at d.plaspy.com and at 54.85.159.138 on port 8888.
- The device may be configured to use UDP or TCP to send reports to the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol from incoming traffic for properly configured devices.
- Users typically ensure the device IMEI or identifier is correctly included in reports so Plaspy can bind the incoming data to the device.
- If a device does not appear, check device reporting settings, transport selection, and that the device is pointing to the Plaspy endpoint and port.

## Transport and Connection Context

Transport choices and endpoint settings determine how TK102 units deliver their protocol messages to Plaspy. The device can be configured to use either UDP or TCP depending on the firmware and the user's preferences.

- Devices may be set to report to d.plaspy.com or to the IP address 54.85.159.138.
- Plaspy listens on port 8888 for all supported devices and uses the same port across the platform.
- The TK102 may support sending data by UDP or TCP; choose the transport that matches the device firmware and network environment.
- Firewalls and carrier APN settings can affect connectivity; ensure outbound traffic to the Plaspy endpoint and port is allowed.
- Transport behavior such as retransmission or session state is governed by the device firmware and network stack.

## Protocol Compatibility Notes

- Compatibility can vary between firmware revisions of the TK102; newer or older firmware may change how some fields are encoded or when reports are sent.
- Hardware revisions or regional variants of the device can introduce differences in supported features or default reporting behavior.
- Transport selection matters: confirm whether a particular TK102 unit is configured for UDP or TCP and point it to the Plaspy endpoint.
- Manufacturer side customizations or operator provisioning can affect the format or cadence of reports.
- Always validate that the device is correctly pointing to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy to receive data.
- When in doubt, consult the official YulongDa documentation for device specific setup and firmware release notes.

## Why Protocol Understanding Matters

Understanding the TK102 communication protocol at a practical level helps you get devices online faster, troubleshoot issues, and maintain reliable tracking over time. Knowing which transport and endpoint the device uses reduces guesswork and avoids common configuration mistakes.

- Ensures the device is pointed to the correct Plaspy endpoint and uses the supported port.
- Helps diagnose connectivity problems related to carrier APN, firewalls, or transport mismatch.
- Makes it easier to confirm the device IMEI and identifiers are included so Plaspy can match reports to devices.
- Supports better decisions about reporting intervals, battery life tradeoffs, and expected update cadence.
- Provides context when coordinating firmware updates or when working with manufacturer support.

## Why Use Plaspy with This Protocol

Using the YulongDa TK102 with Plaspy offers straightforward integration for organizations that need location visibility and basic telemetry for vehicles, assets, or personal tracking. Plaspy's shared endpoint approach and automatic protocol detection simplify onboarding, letting teams focus on deployment and operational use rather than low level protocol configuration.

Plaspy accepts device reports at d.plaspy.com and 54.85.159.138 on port 8888 and uses the same port for all devices while automatically detecting the tracker protocol. To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current and device specific protocol or firmware information, please verify details with the manufacturer at http://www.yulongdatechnology.com.
