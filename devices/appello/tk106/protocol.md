---
slug: /appello/tk106/protocol
id: tk106-protocol
sidebar_label: Protocol
title: Appello - TK106 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Appello TK106 tracking and Plaspy compatibility with connection guidance
keywords:
  - Appello TK106 protocol
  - Appello TK106 GPS protocol
  - Appello TK106 protocol for Plaspy
  - Appello GPS tracker protocol
  - TK106 communication protocol
  - TK106 tracking protocol
  - Plaspy device compatibility
  - Plaspy GPS integration
  - vehicle tracking Appello TK106
  - TK106 firmware compatibility
---

# Appello - TK106 Protocol

This page covers the public protocol context for using the Appello TK106 tracker with the Plaspy platform. It explains how the device typically communicates to a third party server, what role the tracker reporting protocol plays when integrating with Plaspy, and what to keep in mind when configuring the device for reliable operation. The hardware and radio features of the TK106, such as GSM GPRS connectivity and the New Star NS 1315 GPS chip, provide the foundation for the device to report position and status data to a backend service.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Plaspy’s public endpoint information is d.plaspy.com with server IP 54.85.159.138 and port 8888. Devices can be configured to use either UDP or TCP on port 8888, and Plaspy uses the same port for all devices. Exact protocol behavior and fields may vary by TK106 firmware, hardware revision, and manufacturer implementation, so validate device specific details against the device firmware and manufacturer guidance.

## Protocol Overview

The protocol is the set of conventions the tracker uses to report location, time, and status information over the cellular network to a remote server. For the TK106 this means the device encodes and transmits position reports, movement or alarm events, and basic device status so a server such as Plaspy can present usable tracking data to operators.

- Enables periodic or event driven transmission of GPS coordinates and timestamped status to a remote server.
- Carries device identification so Plaspy can associate incoming reports with a specific tracker unit.
- Conveys basic telemetry such as movement, ignition or external input states where supported by the device.
- Supports both UDP and TCP transport depending on device settings and network conditions.
- Allows the server to acknowledge or log incoming reports for processing and display by Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and automatically detects the tracker protocol used by the unit when it reports. Because Plaspy centralizes transport on a common address and port, manual protocol selection in the Plaspy interface is normally not required if the device is configured to report correctly to the Plaspy endpoint.

- Plaspy listens on the public endpoint d.plaspy.com and the server IP 54.85.159.138.
- The service uses port 8888 for all supported devices and incoming connections.
- Devices may be configured to report over UDP or TCP on port 8888; Plaspy accepts both.
- When a TK106 or similar tracker reports to Plaspy, the platform matches the incoming data and applies the appropriate handling automatically.
- Users typically only need to ensure the device points to the Plaspy endpoint and that network and SIM settings are correct on the tracker.

## Transport and Connection Context

Connection context describes how the TK106 reaches Plaspy over the cellular network and which endpoint and transport options are commonly used. The TK106’s GSM GPRS capability allows it to send tracking reports using either UDP or TCP to the configured server address and port; choosing between UDP and TCP depends on device configuration and the desired behavior for retransmission and reliability.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The platform uses port 8888 for all supported devices and incoming data.
- The TK106 may be configured to use UDP or TCP on port 8888 according to preference or firmware support.
- Cellular network settings such as SIM, APN, and signal availability affect the device ability to reach the Plaspy endpoint.
- Using the domain name or the server IP are both common setup options depending on the tracker configuration options available.

## Protocol Compatibility Notes

- Firmware revisions can change which fields, events, or optional reports a TK106 supports; verify behavior for your device firmware.
- Hardware revisions or regional variants may alter supported frequency bands or GNSS performance, which can impact reporting reliability.
- The transport mode selected on the device (UDP versus TCP) can affect delivery characteristics; choose the mode that matches your operational needs.
- Manufacturer configuration interfaces sometimes use different default server fields; ensure d.plaspy.com or 54.85.159.138 and port 8888 are entered correctly.
- Plaspy’s automatic protocol detection makes adding devices straightforward, but correct device identification and reporting format are still required.
- Always validate compatibility with the latest manufacturer documentation and release notes before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps ensure a smooth setup, reliable data flow, and faster troubleshooting when issues occur. Knowing which transport to use, how identification is provided, and what types of reports the device sends makes it easier to get the TK106 operating consistently with Plaspy.

- Facilitates correct device configuration for server address, transport mode, and reporting intervals.
- Helps diagnose connectivity issues by confirming whether the tracker reaches d.plaspy.com or 54.85.159.138 on port 8888.
- Improves expectations around data frequency, accuracy, and battery impact based on reporting behavior.
- Supports reliable alarm and event handling by ensuring the device sends the necessary status reports.
- Reduces integration time because Plaspy will detect the protocol automatically when the device reports correctly.

## Why Use Plaspy with This Protocol

Using the Appello TK106 with Plaspy offers a practical way to convert device reports into usable tracking and fleet data for monitoring, routing, and operational oversight. The TK106’s compact form factor and solid GNSS performance combined with Plaspy’s centralized detection and processing make it a good fit for many vehicle and asset tracking scenarios where dependable location updates are needed.

If you want to learn more about Plaspy and how it handles common tracker protocols, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes on the manufacturer website http://www.cnjeo.com/.
