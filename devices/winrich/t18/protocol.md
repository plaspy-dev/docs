---
slug: /winrich/t18/protocol
id: t18-protocol
sidebar_label: Protocol
title: Winrich - T18 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Winrich T18 GPS tracking watch with Plaspy for real time monitoring and alerts
keywords:
  - Winrich T18 protocol
  - Winrich T18 GPS tracker
  - Winrich T18 communication
  - T18 tracking protocol
  - T18 Plaspy compatibility
  - GPS tracker protocol Plaspy
  - wearable GPS tracker protocol
  - child safety GPS protocol
  - elder care GPS tracking
  - Plaspy device compatibility
---

# Winrich - T18 Protocol

This page describes the public protocol context for using the Winrich T18 GPS tracking watch with the Plaspy platform. It focuses on how the device communicates usable location and event data to Plaspy and what to consider when configuring and validating a T18 for monitoring and alerts. The goal is to provide useful integration context while avoiding sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behaviour can vary with firmware version, hardware revision, and manufacturer implementation. Plaspy receives device reports at the shared Plaspy endpoint and port and will process incoming messages from compatible trackers once the device is pointed at the Plaspy server.

## Protocol Overview

The T18 reporting protocol enables the device to deliver location, safety events, and basic telemetry from the wearable to a remote platform. For Plaspy integration the protocol's role is to ensure the watch can identify itself, transmit position information, and deliver alerts and status updates that the platform can parse and present to caregivers or administrators.

- Transmits GPS and LBS location updates so Plaspy can display live position and history playback.
- Sends SOS emergency alerts and associated coordinates for immediate notification workflows.
- Reports battery and basic device status to support low battery warnings and operational monitoring.
- Delivers event triggers such as geo fence entry or exit that Plaspy can route as alerts.
- Supports two way voice and call related signaling through the device GSM connectivity as part of the overall service experience.

## How Plaspy Detects the Protocol

Plaspy detects compatible trackers automatically when devices are configured to report to the Plaspy endpoint. Users usually do not need to select a protocol manually inside Plaspy if the T18 is correctly pointed at the platform and using the supported transport settings.

- Plaspy listens on a shared server address and port for all device types and handles protocol detection automatically.
- Devices should be configured to report to d.plaspy.com or the equivalent Plaspy server IP for reliable delivery.
- Plaspy automatically detects the tracker protocol when the device begins sending reports to the platform endpoint.
- If a device uses TCP or UDP the platform will accept the incoming connection on the Plaspy port and apply detection logic.
- Proper APN and SIM network configuration on the device side helps ensure the first reports reach Plaspy for detection.

## Transport and Connection Context

Connection context describes how the T18 reaches Plaspy over a mobile network and which transport settings are typically involved. The T18 may be configured to use either UDP or TCP to send reports, and devices can be pointed at Plaspy by hostname or IP depending on provisioning workflows.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for environments that require an IP address.
- All devices in Plaspy use the same port which simplifies provisioning and network rules.
- Use the device configuration tools or SMS commands provided by the manufacturer to set the reporting host and transport.
- Mobile network settings such as APN must be valid to allow outbound connections from the T18 to Plaspy.

## Protocol Compatibility Notes

- Firmware differences between production batches can change message timing, available fields, or optional telemetry.
- Hardware revisions or regional variants may enable or disable features like LBS assistance or two way voice.
- Manufacturer configuration commands and default transport (UDP vs TCP) can vary; confirm device settings before deployment.
- Network operator behavior and SIM provisioning may affect how quickly a device can establish connections to the platform.
- Always validate compatibility in a controlled test before rolling devices into a live monitoring environment.
- Manufacturer documentation and release notes are the authoritative sources for firmware specific protocol details.

## Why Protocol Understanding Matters

Understanding how the T18 communicates with Plaspy helps ensure a reliable setup, faster troubleshooting, and predictable behavior during critical events. Clear knowledge of the communication context reduces time to resolution when devices do not appear on the platform or when expected events are missing.

- Helps identify misconfigured reporting host or transport type that prevents device onboarding.
- Makes it easier to verify network and SIM settings required for consistent reporting.
- Aids in interpreting device telemetry such as location accuracy, battery level, and SOS events.
- Supports planning for firmware updates or device replacements that may alter behaviour.
- Improves operational readiness for caretakers by clarifying how alerts and voice features reach Plaspy users.

## Why Use Plaspy with This Protocol

Using the Winrich T18 with Plaspy provides a straightforward way to centralize wearable tracking, SOS alerts, and basic telemetry for caregiving and safety workflows. Plaspy presents live position, historical routes, geo fence alerts, and device status in a consolidated interface so schools, families, and care organizations can maintain situational awareness without managing low level protocol details.

To learn more about Plaspy and the broader platform capabilities visit https://www.plaspy.com. Protocol support, firmware behaviour, and manufacturer implementation details can change over time, so verify the latest device specific protocol information on the official Winrich website http://www.winrichgroup.com/en/.
