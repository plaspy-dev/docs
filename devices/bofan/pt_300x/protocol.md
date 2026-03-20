---
slug: /bofan/pt_300x/protocol
id: pt_300x-protocol
sidebar_label: Protocol
title: Bofan - PT-300X Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Bofan PT-300X with Plaspy GPS tracking and fleet management
keywords:
  - Bofan PT-300X protocol
  - Bofan PT-300X GPS protocol
  - Bofan PT-300X Plaspy compatibility
  - PT 300X communication protocol
  - PT 300X tracking protocol
  - Bofan GPS tracker protocol
  - Plaspy device protocol
  - vehicle tracking protocol Bofan
  - fleet tracking PT 300X
  - GPRS GPS tracker compatibility
---

# Bofan - PT-300X Protocol

This page describes the public protocol context for using the Bofan PT-300X tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and which aspects of the tracker behavior are relevant for integration. The intent is to provide clear, non sensitive protocol guidance that helps with setup and troubleshooting while encouraging reference to manufacturer documentation for firmware specific details.

The PT-300X can report location and events by SMS or over GPRS using TCP or UDP. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary across firmware versions, hardware revisions, and manufacturer configuration, so some device features and message details may differ in practice.

## Protocol Overview

The communication protocol for the PT-300X governs how the tracker identifies itself, sends location updates, and reports events such as geofence breaches, overspeed alerts, battery warnings, SOS, and remote relay status. With Plaspy, the protocol enables reliable delivery of position and telemetry so fleet managers can view and act on real time and historical data.

- The protocol transmits periodic location updates and event messages so the server can build a position history and trigger alerts.
- Identification fields in device messages allow Plaspy to associate incoming data with the correct tracker account.
- Event reporting covers typical tracker features such as overspeed alerts, low battery, SOS notifications, and geofence triggers.
- Transport can be either TCP or UDP over the cellular data link depending on how the tracker is configured by the user or installer.
- SMS is a possible fallback for some PT-300X deployments but is not the primary integration path for Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives data from devices on a single shared endpoint and automatically detects the tracker protocol when data arrives. For most users this means there is no need to manually choose a protocol inside Plaspy if the device is configured to report to the Plaspy server address and port.

- Plaspy listens on the domain d.plaspy.com and the fallback server IP 54.85.159.138.
- All devices supported by Plaspy use the same port which simplifies device configuration.
- The port used by Plaspy for device reporting is 8888.
- Devices may be configured to use either UDP or TCP when reporting, and Plaspy accepts both transports on the same port.
- If the tracker sends correctly formatted reports to the Plaspy endpoint, Plaspy will associate the messages to the device automatically without manual protocol selection.

## Transport and Connection Context

Connection setup for the PT-300X is primarily a matter of configuring the device to send its GPRS reports to the Plaspy endpoint and selecting UDP or TCP according to the tracker configuration. The network transport and the server address are the essential connection context pieces that determine whether Plaspy receives the tracker data.

- The PT-300X can be set to report via GPRS using either UDP or TCP depending on device options and network stability.
- For Plaspy integration point the device toward d.plaspy.com or the numeric server address 54.85.159.138.
- Plaspy accepts incoming connections on port 8888 for all supported devices.
- Using TCP can provide a connection oriented flow while UDP may be chosen for lower overhead reporting patterns depending on the tracker configuration.
- Ensure the APN and GPRS parameters on the device are configured correctly so the tracker can reach the Plaspy endpoint over the cellular network.

## Protocol Compatibility Notes

- Firmware variations can change message fields, reporting intervals, and available event types between device revisions.
- Hardware revisions or optional accessories may add or remove features such as external power sensing, relays, or additional inputs.
- The transport mode selected on the device (UDP versus TCP) affects how data is delivered but both are accepted by Plaspy on the same port.
- Some deployments use SMS reporting for simple alerts or as a fallback, but GPRS reporting to Plaspy is the primary integration method.
- Always validate device configuration against the most recent manufacturer documentation for your exact firmware version.
- If you encounter unexpected messages or missing fields, verify the device firmware revision and configuration first before concluding a protocol incompatibility.

## Why Protocol Understanding Matters

A practical understanding of how the PT-300X communicates helps ensure reliable setup, faster troubleshooting, and better long term operation with Plaspy. Knowing which transport to use, how identification is included in reports, and which events the device can send reduces integration friction and supports operational monitoring.

- Properly configuring APN and GPRS settings prevents connectivity failures to d.plaspy.com or 54.85.159.138.
- Selecting the appropriate transport mode for your network environment improves delivery reliability.
- Recognizing which events the tracker reports helps tune alerting and geofence behavior inside Plaspy.
- Matching firmware capabilities to your operational needs avoids surprises when features are absent or changed after an update.
- Understanding basic reporting cadence and event triggers speeds up root cause analysis for missing or late positions.

## Why Use Plaspy with This Protocol

Using the Bofan PT-300X with Plaspy gives organizations centralized visibility into vehicle location, alerts, and status using a single, consistent reporting endpoint. Plaspy's automatic protocol detection and unified port strategy reduce the complexity of onboarding multiple tracker models and let you focus on fleet workflows rather than per device network details.

To learn more about Plaspy and how it handles tracker integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration commands consult the manufacturer site at https://www.bofancloud.com/ to confirm current behavior and options.
