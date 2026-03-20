---
slug: /riti/670_idu_300/protocol
id: 670_idu_300-protocol
sidebar_label: Protocol
title: Riti - 670 (IDU-300) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Riti 670 IDU 300 compatibility with Plaspy server settings and connection behavior
keywords:
  - Riti 670 protocol
  - Riti IDU 300
  - Riti 670 Plaspy
  - Riti GPS tracker protocol
  - IDU 300 communication protocol
  - Riti vehicle tracking
  - Plaspy device compatibility
  - Plaspy GPS tracker
  - fleet tracking protocol
  - GPS telemetry protocol
---

# Riti - 670 (IDU-300) Protocol

This page describes the public protocol context for using the Riti Locator 670 (IDU-300) with Plaspy. It focuses on how the device communicates with Plaspy servers in general terms and what connection settings are commonly used for Plaspy integrations. The content is intended to help fleet managers and integrators understand the role of the tracker communication protocol without exposing vendor private details.

The Locator 670 is a Plaspy compatible in vehicle GPS tracker with high sensitivity GNSS, frequent reporting, and broad peripheral support. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific details consult the official Riti documentation.

## Protocol Overview

The device communication protocol governs how GNSS position, telemetry, and peripheral events are reported from the unit to a remote telematics server. For the Riti 670 used with Plaspy, the protocol enables reliable transport of location and sensor data and supports buffering and uplink after connectivity recovery.

- Transports GNSS position reports, mileage and odometer data, battery voltage, and peripheral events to the server.
- Encodes multi sensor telemetry so Plaspy can display live maps, alerts, and historical reports.
- Supports local buffering so records are retained during connectivity loss and uploaded later.
- Enables the tracker to identify itself and convey device state needed for fleet workflows.
- Carries event notifications such as SOS, DVR alerts, and sensor thresholds for Plaspy driven alarms.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and automatically identifies the tracker protocol without manual selection when the device is configured to report to the Plaspy endpoint. Proper device reporting configuration greatly reduces setup time and helps ensure timely data processing.

- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.
- Devices should be configured to report to d.plaspy.com or directly to the Plaspy server IP.
- When the device is pointed to the Plaspy endpoint, protocol detection is handled server side so users rarely need to pick a protocol manually.
- Correct APN, transport type, and reporting interval are typical device side settings that influence successful detection and data flow.
- For discontinued or legacy models confirm device firmware and reporting settings match current Plaspy expectations.

## Transport and Connection Context

Connection context covers how the tracker opens and maintains a path to Plaspy servers. The Locator 670 can be configured to use different transport modes and will forward buffered data when cellular connectivity recovers.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy server domain d.plaspy.com and server IP 54.85.159.138 are public Plaspy endpoints that devices can report to.
- All devices in Plaspy use the same port, simplifying device side configuration across mixed fleets.
- Transport selection UDP versus TCP can affect delivery characteristics such as latency and reliability depending on network and firmware behavior.
- Ensure APN and cellular credentials are correct so the tracker can establish a session to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported features, and available sensor fields; confirm firmware version when troubleshooting.
- Hardware revisions and accessory configurations may enable or disable certain peripheral inputs or telemetry types.
- Transport mode differences between UDP and TCP are device configurable and can affect how data is retransmitted or acknowledged.
- Discontinued 3G models like the Locator 670 may have limitations compared to newer cellular standards; factor that into long term planning.
- Validate compatibility with Plaspy against the device behavior on your network before large scale deployment.
- Manufacturer side differences such as custom OEM settings can alter the default reporting endpoint or commands.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure the device and Plaspy exchange the right telemetry and that data appears correctly in live views and reports. It also streamlines troubleshooting when messages are delayed, missing, or when peripheral data is not arriving as expected.

- Speeds up initial setup by guiding correct endpoint, port, and transport configuration.
- Helps diagnose connectivity issues such as incorrect APN, blocked ports, or wrong transport selection.
- Clarifies expectations for buffered record delivery after intermittent connectivity.
- Informs decisions about firmware updates and device replacement planning for fleet lifecycle management.
- Enables better integration of vehicle sensors and peripherals into Plaspy workflows.

## Why Use Plaspy with This Protocol

Using the Riti Locator 670 (IDU-300) with Plaspy gives fleet operators consolidated access to real time position, per second mileage, battery monitoring, and a wide set of peripheral events. For legacy fleets that continue to operate the 670, Plaspy can ingest GNSS and sensor telemetry to support dispatch, alerting, and historical analysis without requiring custom per device ports or endpoints.

If you want to learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer documentation on the official Riti website https://www.riti.com.tw/ since protocol support and device implementations can change over time.
