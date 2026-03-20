---
slug: /jointech/jt301b/protocol
id: jt301b-protocol
sidebar_label: Protocol
title: Jointech - JT301B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Jointech JT301B GPS tracker integration with Plaspy server and connection context
keywords:
  - Jointech JT301B protocol
  - Jointech JT301B GPS protocol
  - Jointech JT301B Plaspy
  - JT301B tracking protocol
  - JT301B communication protocol
  - Jointech asset tracker protocol
  - JT301B GPS tracker compatibility
  - Plaspy device protocol
  - asset GPS tracker protocol
  - logistics tracker protocol
---

# Jointech - JT301B Protocol

This page describes the public protocol context for using the Jointech JT301B asset GPS tracker with the Plaspy platform. It summarizes how the tracker communicates in broad terms, what connection settings are used by Plaspy, and which aspects you should check when deploying the JT301B for logistics and supply chain monitoring.

The JT301B is a compact, rechargeable asset tracker with multi mode positioning and environmental sensors. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. This document focuses on public, non sensitive protocol context rather than firmware internals.

## Protocol Overview

The communication protocol is the mechanism the JT301B uses to report location, sensor telemetry, and event alerts to a remote server such as Plaspy. In practical terms the protocol determines how the device identifies itself, how often it reports, and which telemetry fields are sent so that Plaspy can display, store, and trigger alerts from the incoming data.

- Enables the JT301B to transmit multi mode positioning data including GPS, BeiDou, and cellular LBS to a backend.
- Carries environmental telemetry such as temperature and humidity so Plaspy can monitor refrigerated or sensitive cargo.
- Sends event driven alerts like motion, tamper, door open, and unpacking detection for anti theft workflows.
- Provides identity and session information so incoming messages can be associated with the correct asset in Plaspy.
- Governs reporting frequency and event triggers that affect battery life and operational behavior.
- Works alongside transport layer choices such as TCP or UDP to reach the Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy accepts tracker reports on a single shared endpoint and port and will automatically detect the tracker protocol from incoming device traffic when the device is properly configured to report to Plaspy. Users generally do not need to pick a protocol manually inside Plaspy if the JT301B is pointed to the correct Plaspy address and uses a supported transport.

- Plaspy’s public server domain for device reporting is d.plaspy.com.
- The Plaspy server IP address for reporting is 54.85.159.138.
- Plaspy listens on port 8888 for device reports and all devices supported by Plaspy use this same port.
- Plaspy automatically detects the tracker protocol from the incoming connection and message stream.
- If the tracker sends properly formatted reports to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will ingest telemetry and map it to the corresponding device record.
- Proper device configuration to point to the Plaspy endpoint is typically all that is required for detection.

## Transport and Connection Context

Connection context covers how the JT301B reaches the Plaspy server and which transport options are commonly used. The JT301B may be configured to use either UDP or TCP depending on device support and deployment needs, and both transports are supported when reporting to the Plaspy endpoint.

- The device may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can point to the domain d.plaspy.com or directly to the IP 54.85.159.138 for reporting.
- Plaspy uses the same port 8888 for all supported devices which simplifies configuration across mixed fleets.
- Transport choice can affect delivery characteristics such as reliability and overhead; select the mode that fits the device firmware and network environment.
- Ensure cellular APN and outbound connectivity allow traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- The JT301B is described as Plaspy compatible for asset tracking and telemetry reporting.
- Firmware revisions can change reporting fields, timing, or supported transports; verify firmware release notes when troubleshooting.
- Hardware revisions or regional variants may include different sensors or IMEI behavior that affect how the device reports.
- Transport selection between TCP and UDP is device configurable and may be constrained by firmware or carrier networks.
- Manufacturer configuration commands and activation steps are vendor specific; check the official manufacturer documentation for precise setup instructions.
- Always validate a sample device configuration against Plaspy by sending test reports to the Plaspy endpoint before mass deployment.
- Network operators and firewalls must allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Protocol Understanding Matters

Understanding how the JT301B communicates helps IT and operations teams deploy, troubleshoot, and maintain reliable asset tracking over time. A clear view of the protocol behavior reduces integration friction and supports predictable monitoring in Plaspy.

- Helps confirm the device is reporting required telemetry such as location, temperature, and humidity.
- Simplifies troubleshooting when devices do not appear in Plaspy by checking transport, endpoint, and device configuration.
- Aids battery optimization by understanding reporting intervals and event driven reporting characteristics.
- Ensures tamper and alarm events are received and acted on by confirming that the device can reach the Plaspy endpoint.
- Supports change management when firmware updates or hardware revisions alter reporting behavior.

## Why Use Plaspy with This Protocol

Using the JT301B with Plaspy gives logistics and fleet teams a practical way to combine compact asset tracking hardware with a central platform for visibility and alerting. The JT301B’s multi mode positioning and environmental sensors pair naturally with Plaspy’s ability to ingest telemetry, present live location, and trigger configurable alerts for refrigerated transport, high value cargo, and reusable asset fleets.

To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific protocol and firmware details, please verify information with the manufacturer at https://www.jointcontrols.com/. Protocol support, firmware behavior, and device implementation details can change over time so checking the official manufacturer resources is recommended.
