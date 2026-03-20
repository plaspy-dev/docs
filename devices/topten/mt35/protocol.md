---
slug: /topten/mt35/protocol
id: mt35-protocol
sidebar_label: Protocol
title: TopTen - MT35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopTen MT35 GPS tracker compatibility with Plaspy including connection settings and integration notes
keywords:
  - TopTen MT35
  - TopTen MT35 protocol
  - TopTen MT35 GPS protocol
  - MT35 compatibility Plaspy
  - MT35 tracking protocol
  - MT35 communication protocol
  - TopTen tracker protocol
  - MT35 fleet tracking
  - MT35 vehicle tracker
  - GPS tracker MT35
---

# TopTen - MT35 Protocol

This page describes the public protocol context for using the TopTen MT35 tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in general terms, the connection settings Plaspy expects, and practical notes to help you get the device reporting reliably without exposing private implementation details.

The TopTen MT35 is a versatile 3G tracker with fallback to 2G that supports multiple frequency bands and a wide range of features such as SMS and web reporting, waypoint logging, alarms, and optional voice or immobilizer functions. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol. Devices reporting to Plaspy should target the Plaspy endpoint (d.plaspy.com or 54.85.159.138) on port 8888. The device may be configured to use UDP or TCP on port 8888 and Plaspy uses the same port for all devices, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The MT35 reporting protocol is the mechanism that lets the tracker send location data, event alerts, and device state to Plaspy and receive remote commands or configuration prompts where supported. The protocol defines how the device identifies itself, delivers telemetry, and structures reports so Plaspy can present usable information to users.

- Provides identification and device metadata so Plaspy can associate incoming reports with the correct tracker.
- Transmits position updates and event messages that Plaspy converts into location and alarm records.
- Carries status information such as power, movement, and alarm events that map to Plaspy通知 and monitoring features.
- Supports on device logging and batch uploads so historical waypoints (for example stored waypoints in the MT35) can be synchronized to the platform.
- Enables two common transport options, letting devices send data over UDP or TCP depending on device support and configuration.

## How Plaspy Detects the Protocol

Plaspy receives data on a single, shared endpoint and port, and it automatically recognizes the tracker protocol when the device first reports. In most cases, if the MT35 is configured to send data to Plaspy’s endpoint and port, no manual protocol selection is required inside Plaspy.

- Devices should be configured to report to d.plaspy.com or the equivalent IP address 54.85.159.138.
- Plaspy listens on port 8888 for all device traffic and uses the same port for every supported tracker.
- Plaspy accepts both UDP and TCP connections on the same port and will process incoming data accordingly.
- When a properly formatted report arrives, Plaspy uses automatic detection to associate the report with the MT35 device identity.
- Users typically do not need to choose a protocol in Plaspy if the device is correctly pointed at the Plaspy endpoint and uses an appropriate transport.

## Transport and Connection Context

The transport and connection context determine how the MT35 reaches Plaspy over the mobile network and how network elements like NAT and firewalls interact with the device. The MT35 supports reporting over mobile data and can be set to use either UDP or TCP depending on the installed firmware and the configuration you apply.

- Configure the tracker to point to d.plaspy.com or 54.85.159.138 as the destination host.
- Use port 8888 for both TCP and UDP connections; Plaspy uses the same port for all supported devices.
- Select UDP or TCP on the device based on network reliability and feature support; some installations prefer TCP when guaranteed delivery is important.
- Ensure the SIM card and data APN are set up correctly so the device can establish an outbound connection to Plaspy.
- Account for mobile network behavior and any cellular operator NAT when troubleshooting connectivity.

## Protocol Compatibility Notes

- Firmware versions may implement reporting options differently; verify the MT35 firmware level when evaluating compatibility.
- Hardware revisions and optional features (for example SOS, voice monitoring, or immobilizer support) can affect which messages the device sends.
- Manufacturer configuration menus often control transport selection between UDP and TCP; choose the transport that matches your network and monitoring needs.
- Regional radio band support affects where the MT35 can operate but does not change the Plaspy connection endpoint.
- Validate important configuration items such as device ID formatting, APN, and reporting server address against the manufacturer documentation.
- Where possible, perform a small field test to confirm that waypoints, alarms, and historical uploads appear in Plaspy as expected.

## Why Protocol Understanding Matters

Knowing how the MT35 communicates helps you set up, troubleshoot, and maintain a reliable connection to Plaspy. Clear understanding reduces integration time, avoids common misconfigurations, and helps interpret device behavior when reports do not appear as expected.

- Confirms that the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888.
- Helps choose UDP or TCP based on expected network conditions and device feature support.
- Aids in troubleshooting common issues like missing reports, incorrect device ID mapping, or intermittent connectivity.
- Enables better planning for fleet deployments by understanding logging behavior and historical waypoint uploads.
- Reduces support cycles by aligning device configuration with Plaspy connection expectations.

## Why Use Plaspy with This Protocol

Using the TopTen MT35 with Plaspy provides centralized visibility into vehicle location, event alarms, and historical waypoints. Plaspy’s automatic protocol detection and unified port usage simplify firewall and server configuration, letting fleets and individual users get devices reporting with fewer platform-specific steps.

If you want to learn more about how Plaspy works with trackers like the TopTen MT35, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions, please verify information on the manufacturer site http://www.t10.cn as implementations can change over time.
