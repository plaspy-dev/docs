---
slug: /tk_star/xe108/protocol
id: xe108-protocol
sidebar_label: Protocol
title: TK-Star - XE108 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the TK-Star XE108 and how it communicates with Plaspy for tracking and alerts
keywords:
  - TK-Star XE108 protocol
  - XE108 GPS protocol
  - TK-Star XE108 Plaspy
  - XE108 communication protocol
  - TK-Star GPS tracker protocol
  - XE108 tracking protocol
  - TK-Star tracker compatibility
  - GPS tracker protocol guide
  - vehicle tracking XE108
  - XE108 geofencing alerts
---

# TK-Star - XE108 Protocol

This page describes the public protocol context for using the TK-Star XE108 portable GPS tracker with Plaspy. It focuses on how the device communicates in general terms, the connection context Plaspy expects, and practical compatibility considerations that help with setup and troubleshooting. The objective is to provide clear, public-facing information without exposing private implementation details.

The XE108 is a compact portable tracker built for real time tracking, auto tracking, blind area tracking, GPS plus GSM reporting, history trace review, geo fencing, movement and overspeed alerts, low battery warnings, a shaking sensor, SOS button, and a sleep mode to conserve battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementation choices.

## Protocol Overview

The device protocol is the set of rules and message patterns the XE108 uses to report location, status, and alerts to a remote server. For integration with Plaspy, the protocol allows the tracker to identify itself, send position and event data, and receive optional commands or confirmations where supported by the device and firmware.

- Enables the XE108 to report GPS location and GSM based status updates to a server.
- Conveys event signals such as SOS presses, geofence entries and exits, movement, overspeed, and low battery alerts.
- Provides an identifier so Plaspy can associate incoming messages with the correct device record.
- Transports time, positional fixes, and status metadata that Plaspy uses for mapping and history traces.
- Allows the tracker to participate in power saving modes by controlling reporting intervals and event driven updates.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device reports and includes automatic protocol detection to simplify device onboarding. When an XE108 is configured to send data to Plaspy, the platform inspects incoming messages at a high level and matches them to known public protocol patterns so manual protocol selection is typically unnecessary.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The port for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support.
- If the XE108 is pointed at the Plaspy endpoint, the platform will attempt to identify the protocol automatically.
- Users generally do not need to pick a protocol inside Plaspy if the tracker is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the XE108 reaches Plaspy rather than the exact format of messages. The tracker can use either UDP or TCP transport where its firmware supports both modes, and it must be set to send reports to Plaspy's address and port for successful delivery.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The supported transport on the device can be UDP or TCP on port 8888.
- All Plaspy supported devices use the same reporting port to simplify server configuration and device setup.
- Network considerations such as mobile operator NAT, signal quality, and APN settings can affect connectivity.
- Ensure the XE108 APN and outbound server settings are configured to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations can change how frequently the device reports, which events it includes, and minor message details.
- Hardware revisions across production runs sometimes introduce slight behavioral differences that affect compatibility.
- Manufacturer side configuration options may allow switching transport mode or toggling specific features that influence reporting.
- Selecting UDP versus TCP should match the firmware capability and the setting used when configuring the device to point at Plaspy.
- Validate the XE108 shipping firmware and options against manufacturer release notes when troubleshooting unusual behavior.
- Always compare real device behavior to the current official documentation from the manufacturer for the most reliable reference.

## Why Protocol Understanding Matters

Knowing the role of the XE108 communication protocol helps ensure a smooth setup, reliable tracking, and meaningful alerts inside Plaspy. Even when Plaspy detects the protocol automatically, understanding the basics speeds troubleshooting and clarifies why certain behaviors occur.

- Helps diagnose why a device is not appearing or reporting on Plaspy by checking transport, endpoint, and APN settings.
- Explains differences in reporting frequency and battery life linked to firmware reporting modes.
- Clarifies how event types like SOS, geofence, and movement alerts are delivered and interpreted by the platform.
- Aids in planning for coverage gaps and blind area tracking behavior by understanding how the device buffers and reports.
- Supports correct configuration of server address and transport so the tracker reliably reaches Plaspy.

## Why Use Plaspy with This Protocol

Using the TK-Star XE108 with Plaspy provides organizations and individuals with an easy path to collect real time location data, manage alerts like geofence or SOS events, and review historical traces for operational oversight. Plaspy's shared endpoint and automatic protocol detection reduce the manual steps needed to begin receiving data from the tracker, so teams can focus on using location data rather than configuring complex server settings.

Learn more about Plaspy at https://www.plaspy.com and review the latest device specific protocol and firmware details on the manufacturer site https://www.tk-star.com/ to confirm current behavior and configuration options. Protocol support, firmware behavior, and device implementation details can change over time so verifying with official manufacturer documentation will ensure the most accurate setup.
