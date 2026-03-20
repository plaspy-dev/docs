---
slug: /bofan/pt_600/protocol
id: pt_600-protocol
sidebar_label: Protocol
title: Bofan - PT-600 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Bofan PT-600 and how it communicates with Plaspy for camera GPS and telemetry reporting
keywords:
  - Bofan PT 600 protocol
  - Bofan PT 600 GPS protocol
  - Bofan PT 600 Plaspy compatibility
  - PT 600 communication protocol
  - PT 600 tracker integration
  - GPS camera tracker protocol
  - vehicle tracking Plaspy
  - fleet tracking PT 600
  - RFID driver ID protocol
  - telemetry and alarms protocol
---

# Bofan - PT-600 Protocol

This page explains the public protocol context for integrating the Bofan PT-600 camera GPS tracker with Plaspy. It focuses on how the device communicates in general terms, what data types the tracker typically reports, and the connection settings Plaspy uses to receive those reports. The goal is to give fleet managers and technicians the clarity they need for setup and troubleshooting without exposing manufacturer internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the PT-600 can vary with firmware version, hardware revision, and manufacturer implementation. For device specific command behavior or firmware changes consult the manufacturer documentation for the most current details.

## Protocol Overview

The PT-600 communicates vehicle position, telemetry, and multimedia data to a remote server using the device reporting protocol supported by the tracker. That protocol defines how the unit encodes GPS/GLONASS position, telemetry like fuel and temperature, driver ID events from RFID, alarm events, and triggers for camera photos or video uploads.

- Carries GPS and GLONASS position reports used by Plaspy for real time location and history.
- Transmits telemetry and status such as fuel, temperature, and IO events so Plaspy can display vehicle health and alarms.
- Sends multimedia triggers and references for camera photos and video clips produced by the PT-600.
- Reports driver identification events from RFID so Plaspy can correlate drivers with trips.
- Delivers alarms and event notifications like SOS, speed, geo fence, and input changes for timely platform alerts.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device reports and automatically determines which tracker protocol a device is using when it connects and begins reporting. This behavior reduces the need for manual protocol selection inside the platform when a device is configured correctly.

- Point the PT-600 to the Plaspy server endpoint d.plaspy.com or to the server IP 54.85.159.138 to send reports to Plaspy.
- Plaspy receives reports on port 8888 and uses the incoming connection to identify the reporting protocol.
- All devices in Plaspy use the same port which simplifies device configuration and server reachability.
- Because Plaspy detects protocol automatically, users typically do not need to manually select a protocol in the platform if reporting is configured correctly.
- If a device does not appear online, verify the tracker is sending to the correct endpoint and transport (UDP or TCP) and that the device firmware is configured to report.

## Transport and Connection Context

The PT-600 can be configured to use either UDP or TCP transport depending on the device firmware and configuration options. Plaspy accepts both transports on the same port so the device side selection is what determines the connection type.

- Devices may be configured to report to the domain d.plaspy.com or directly to the server IP 54.85.159.138.
- The port used for all devices and for Plaspy is 8888, and Plaspy accepts both UDP and TCP on that port.
- Choose UDP when the device firmware recommends lower overhead reporting, or TCP where reliable delivery and session behavior are preferred by the device.
- Ensure any network firewalls allow outbound device traffic to d.plaspy.com or the server IP on port 8888 for the chosen transport.
- Confirm APN and GPRS settings on the PT-600 match your carrier requirements so the device can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change which features are reported or how specific events are formatted. Confirm firmware version when diagnosing missing data.
- Hardware revisions or optional modules (camera, RFID, temperature sensor) affect which telemetry and alarms the PT-600 can send.
- Manufacturer configuration choices determine whether multimedia and voice monitoring are sent over GPRS or require separate handling.
- Transport selection between UDP and TCP is configured on the device and may affect reliability and session behavior.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to reach Plaspy.
- When integrating additional accessories or custom IO wiring, confirm how those inputs map to reported events in the manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the PT-600 communicates helps ensure reliable setup, faster troubleshooting, and predictable behavior of features like camera captures, driver ID, and alarms when used with Plaspy.

- Faster identification of configuration issues by confirming endpoint, transport, and port settings.
- Better troubleshooting of missing telemetry such as fuel or temperature by matching expected reports to platform fields.
- Clear expectations for multimedia and event behavior so camera and alarm workflows are visible in Plaspy.
- Improved decision making when selecting firmware updates or hardware variants to enable required features.
- More effective collaboration with manufacturer support by referencing the device reporting context and observed behavior.

## Why Use Plaspy with This Protocol

Using the PT-600 with Plaspy gives organizations centralized visibility into vehicle location, driver identification, multimedia evidence, and telemetry in a single platform. The PT-600’s camera, RFID, and alarm capabilities complement Plaspy’s reporting and alerting so fleet operators can monitor safety, route compliance, and asset condition.

To learn more about using Plaspy with the Bofan PT-600, visit the Plaspy website at https://www.plaspy.com. For the most current device specific protocol reference, firmware notes, and hardware details verify information on the manufacturer site https://www.bofancloud.com/ because protocol support and firmware behavior can change over time.
