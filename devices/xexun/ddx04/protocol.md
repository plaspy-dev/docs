---
slug: /xexun/ddx04/protocol
id: ddx04-protocol
sidebar_label: Protocol
title: Xexun - DDX04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xexun DDX04 wearable tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - Xexun DDX04 protocol
  - Xexun DDX04 GPS protocol
  - DDX04 Plaspy compatibility
  - Xexun wearable tracker protocol
  - DDX04 communication protocol
  - GPS tracker protocol Plaspy
  - Xexun DDX04 tracking protocol
  - Plaspy device compatibility
  - DDX04 tamper detection tracking
  - Xexun GPS BeiDou tracker
---

# Xexun - DDX04 Protocol

This page provides a public protocol level overview for using the Xexun DDX04 wearable GPS and BeiDou tracker with the Plaspy platform. It focuses on the communication context that lets the DDX04 send location, tamper alerts, health telemetry, and event data into Plaspy for live monitoring and history playback without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the DDX04 can vary by firmware version, hardware revision, and manufacturer implementation, so this page summarizes the practical communication context and integration considerations rather than low level packet formats.

## Protocol Overview

The DDX04 tracking watch uses its internal telemetry and multi source positioning to report useful tracking information to a backend server. The protocol is the set of rules and message types the device uses to identify itself, deliver location and sensor data, and notify a server about events such as tamper or low battery.

- Enables the device to report multi source location fixes and timestamps to a backend ingestion endpoint.
- Carries tamper and alert signals so Plaspy can generate immediate notifications and compliance events.
- Transports health and sensor telemetry such as heart rate and blood pressure for integrated monitoring dashboards.
- Provides regular reporting and on demand responses so history, playback, and live position views remain accurate.
- Supplies device identification and status metadata that allow Plaspy to associate reports with the correct tracker and user account.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a single shared endpoint and port, and the platform automatically detects which tracker protocol is being used when a device is properly configured to report. In most cases, operators do not need to manually select a protocol inside Plaspy if the DDX04 is pointed to the Plaspy endpoint.

- Plaspy accepts device reports at the domain d.plaspy.com and the server IP 54.85.159.138.
- Plaspy listens on a single port for all devices so the same port applies to the DDX04.
- The common port for Plaspy device communication is 8888 and Plaspy uses that port uniformly for supported trackers.
- Plaspy automatically detects the tracker protocol whenever a correctly addressed report arrives at the endpoint.
- Proper device configuration to send data to d.plaspy.com on the standard port is typically all that is required for detection.

## Transport and Connection Context

Connection context covers how the DDX04 reaches the Plaspy endpoint over cellular networks and which transports are commonly used. The device can be configured to send its reports over different transport layers depending on its firmware and provisioning choices.

- The DDX04 may be configured to use either UDP or TCP to communicate with Plaspy on port 8888 depending on device support and configuration.
- Device reports should be addressed to d.plaspy.com or directly to 54.85.159.138 if IP addressing is required by the deployment.
- All devices in Plaspy use the same port so port 8888 is the standard port to allow inbound processing by Plaspy.
- Cellular APN, network registration, and carrier routing affect how the device reaches Plaspy but do not change the endpoint or port requirements.
- Firewalls and NAT rules at customer gateways should allow outbound UDP or TCP traffic to d.plaspy.com on port 8888 to ensure delivery.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, and supported transports so confirm the device firmware when validating behavior.
- Hardware revisions or regional variants may introduce differences in supported networks and sensor availability.
- Manufacturer configuration options may allow choosing UDP or TCP; pick the transport mode that matches your network and Plaspy guidance.
- Plaspy reads reports from the shared endpoint so correct server address and port are required for compatibility.
- Validate any device specific features such as tamper alarm semantics or health telemetry field names against Xexun documentation and device settings.
- Test devices in a controlled environment before large scale deployment to confirm reporting cadence and alert delivery.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices report reliably to Plaspy, that alerts map correctly to platform events, and that operational monitoring is accurate. Clear protocol context reduces setup time and streamlines troubleshooting when devices do not appear or behave as expected.

- Ensures devices are configured to point to d.plaspy.com or the Plaspy IP on the correct port.
- Helps troubleshoot transport related issues by confirming whether UDP or TCP is being used.
- Clarifies which telemetry fields to expect in platform reports so alerts and dashboard widgets are meaningful.
- Aids in planning firmware updates and remote management workflows that depend on reliable reporting.
- Supports device lifecycle planning including battery maintenance, replacement, and OTA updates.

## Why Use Plaspy with This Protocol

Using the Xexun DDX04 with Plaspy gives organizations a practical combination of tamper resistant wearable hardware and a backend that ingests location, alert, and health telemetry for monitoring, compliance, and operational oversight. Plaspy’s shared endpoint and automatic protocol detection simplify onboarding so devices that are pointed to the Plaspy endpoint begin reporting without manual protocol selection in most cases.

To learn more about Plaspy and how it handles device communication and fleet management, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer implementation notes on the official Xexun website at https://www.xexun.com/ since protocol behavior and firmware features can change over time.
