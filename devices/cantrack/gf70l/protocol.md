---
slug: /cantrack/gf70l/protocol
id: gf70l-protocol
sidebar_label: Protocol
title: CanTrack - GF70L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CanTrack GF70L integration with Plaspy including transport and detection notes
keywords:
  - CanTrack GF70L protocol
  - CanTrack GF70L GPS protocol
  - CanTrack GF70L Plaspy
  - GF70L tracking protocol
  - GF70L communication protocol
  - CanTrack tracker protocol
  - GF70L asset tracker
  - Plaspy protocol compatibility
  - vehicle tracking GF70L
  - solar GPS tracker GF70L
---

# CanTrack - GF70L Protocol

This page covers the public protocol context for using the CanTrack GF70L tracker with Plaspy. It explains how the GF70L communicates in general terms and what to consider when pointing the device to Plaspy for position reporting, alerts, and status updates. The information here is intended to help integrators and administrators understand the communication role and connection requirements without exposing vendor private implementation details.

The GF70L is a rechargeable asset tracker with a 12000mAh battery, solar charging panels, strong magnetic installation, and features such as geo fencing, low battery and vibration alarms, optional microphone support, and multiple tracking modes. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Confirm device specific behavior against manufacturer documentation when needed.

## Protocol Overview

The tracker protocol is the set of behaviors the GF70L uses to identify itself, report location and status, and receive configuration while connected to a server such as Plaspy. In practice the protocol defines the kinds of messages the device sends for location updates, alarms, battery status, and how the server acknowledges or responds to those messages.

- Enables periodic and event driven reporting of GPS location and device status to Plaspy
- Carries alarm and telemetry signals such as geo fence events, low battery, and vibration alerts
- Lets the server and device exchange configuration or heartbeat messages needed for reliable monitoring
- Provides the identifying information Plaspy needs to associate a specific GF70L unit with an account or device record
- Supports different tracking modes such as real time, timed intervals, or smart tracking as implemented by the device firmware

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and identifies the device protocol automatically. When a GF70L is configured to report to Plaspy, the platform uses the connection data and message contents to route and interpret incoming reports without requiring a manual protocol selection from the user.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting
- The port is 8888 and Plaspy automatically detects the tracker protocol on that endpoint
- All devices in Plaspy use the same port which simplifies fleet wide configuration
- The user typically does not need to select a protocol inside Plaspy if the device is properly configured to report to the Plaspy endpoint
- If a tracker sends nonstandard messages or a custom firmware is in use, consult manufacturer documentation for compatibility guidance

## Transport and Connection Context

Connection transport and addressing are foundational to getting the GF70L to report into Plaspy. The device may be configured using UDP or TCP on port 8888 depending on device support and network requirements, and it can be pointed at either the Plaspy domain or the IP address.

- The device may be configured using UDP or TCP on port 8888 based on firmware and network needs
- Devices may point to d.plaspy.com or 54.85.159.138 when reporting to Plaspy
- The port is 8888 and all devices in Plaspy use the same port to simplify deployment and firewall rules
- Choose UDP for simpler stateless delivery where supported or TCP where reliable delivery and session behavior is preferred by the device
- Ensure APN, SIM data, and network firewall rules allow outbound connections to the Plaspy endpoint and port

## Protocol Compatibility Notes

- GF70L compatibility with Plaspy depends on standard reporting behavior available in the device firmware and configuration
- Firmware updates or hardware revisions can change message timing, available fields, and optional features
- Transport selection between UDP and TCP can affect delivery semantics and battery consumption; validate chosen transport on live devices
- Optional hardware such as the microphone or solar charging logic does not typically change basic location reporting but can influence power management and reporting intervals
- Always validate alarm behavior like geo fence, low battery, or vibration alerts with the current firmware to ensure expected server side handling
- Confirm any custom or vendor specific settings against the official CanTrack documentation before large scale deployment

## Why Protocol Understanding Matters

Understanding how the GF70L communicates helps with correct setup, reliable reporting, and efficient troubleshooting when integrating with Plaspy. Clear expectations about transport, message timing, and alarm semantics reduce integration time and improve operational uptime.

- Helps ensure the device is configured to report to d.plaspy.com or 54.85.159.138 on the correct port
- Reduces time spent diagnosing missing reports by clarifying whether transport, APN, or firmware are the root cause
- Improves battery and solar performance by aligning reporting intervals with power management features
- Ensures alarms and geo fence events arrive and are processed by Plaspy as expected
- Guides decisions about whether to use UDP or TCP based on network reliability and device behavior

## Why Use Plaspy with This Protocol

Using Plaspy with a tracker like the GF70L provides a single platform for asset visibility, alarm handling, and historical location data. Plaspy’s shared endpoint model and automatic protocol detection reduce setup complexity for fleets that include a mix of device types while letting teams focus on operational monitoring rather than low level protocol handling.

If you want to learn more about how Plaspy works with devices like the CanTrack GF70L and to evaluate fit for your deployment, please visit https://www.plaspy.com. For the most current, device specific protocol details, firmware notes, and implementation guidance refer to the manufacturer at https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
