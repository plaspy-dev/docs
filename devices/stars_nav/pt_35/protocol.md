---
slug: /stars_nav/pt_35/protocol
id: pt_35-protocol
sidebar_label: Protocol
title: Stars Nav - PT-35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Stars Nav PT-35 and how it communicates with Plaspy for reliable tracking and alerts
keywords:
  - Stars Nav PT-35
  - PT-35 protocol
  - Stars Nav GPS protocol
  - PT-35 GPS tracker
  - PT-35 Plaspy
  - Plaspy device compatibility
  - PT-35 communication protocol
  - personal tracker protocol
  - PT-35 fleet tracking
  - GPS tracker integration
---

# Stars Nav - PT-35 Protocol

This page provides a public protocol context for using the Stars Nav PT-35 tracker with the Plaspy platform. It summarizes how the PT-35 commonly communicates over cellular networks to forward location, alert, and telemetry data to Plaspy without exposing private implementation specifics. Use this page to understand the general role of the tracker protocol in integration and to verify setup requirements before connecting devices to Plaspy.

The PT-35 is designed to operate with GPRS TCP/IP and SMS transports and is described as Plaspy compatible. Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so installers should confirm device-specific details against official Stars Nav documentation when necessary.

## Protocol Overview

The protocol used by the PT-35 describes how the device identifies itself, reports GNSS position and telemetry, and delivers event messages such as panic alerts or stored message uploads to a remote server. In practice this means the tracker will use the device transport (GPRS TCP/IP or SMS) to send periodic and event-driven updates that Plaspy ingests for mapping, alerts, and history.

- Enables delivery of GNSS positions and telemetry from the PT-35 to Plaspy for live tracking and historical reporting.
- Carries event signals such as panic, motion, tamper, and I/O state changes so Plaspy can generate alerts and actions.
- Supports buffered message upload so stored positions and events are forwarded to Plaspy after reconnection.
- Uses standard cellular data or SMS channels supported by the device to reach the Plaspy endpoint.
- Works in conjunction with the PT-35 power and scheduling modes to control reporting frequency and battery life.

## How Plaspy Detects the Protocol

Plaspy receives data from devices using a shared server endpoint and port and automatically determines the appropriate tracker protocol for parsing and processing. Because Plaspy centralizes the connection settings, users typically do not need to manually select the protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.

- Plaspy uses the shared server domain d.plaspy.com and also accepts connections to the server IP 54.85.159.138 on port 8888.
- All devices supported by Plaspy use the same listening port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol once the device successfully reports to the Plaspy endpoint.
- When the PT-35 is configured to point at the Plaspy endpoint, users usually do not need to set a protocol name in the Plaspy interface.
- If messages are not arriving, verifying the device reporting address, transport type, and firmware behavior is the first troubleshooting step.

## Transport and Connection Context

The PT-35 supports multiple transport channels for communicating with backend servers; installers select the transport that best fits coverage, cost, and feature needs. For Plaspy integration the device may be set to use either UDP or TCP on the common Plaspy port, or use SMS as an alternate delivery method for alerts and status.

- Devices can be configured to use UDP or TCP on port 8888 for GPRS based reporting depending on device firmware and installer preference.
- The PT-35 may also send messages via SMS for alerts or when data connections are unavailable.
- Plaspy accepts device traffic addressed to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- All Plaspy devices use the same port number which simplifies fleet level configuration.
- Choose transport based on reliability and network conditions; TCP can provide persistent session behavior while UDP can be lighter weight where supported by the tracker.

## Protocol Compatibility Notes

- PT-35 is described as Plaspy compatible and supports GPRS TCP/IP and SMS transports, but exact message behavior can differ by firmware release.
- Hardware revisions and optional accessories (for example different GNSS modules or I/O variants) may change available features and telemetry fields.
- Some features such as buffered message limits, sleep timers, or voice routing are implementation dependent and should be validated per device unit and firmware.
- Transport choice (TCP, UDP, SMS) can affect message delivery semantics and should be matched to the device configuration on the tracker side.
- Verify APN, destination address, and transport settings in the device configuration match Plaspy connection settings before deployment.
- When in doubt consult the official Stars Nav technical documentation for firmware specific notes and configuration examples.

## Why Protocol Understanding Matters

Understanding how the PT-35 communicates with Plaspy helps ensure reliable installation, correct data interpretation, and effective troubleshooting. A clear view of the communication pattern reduces setup time and minimizes surprises in field deployments.

- Ensures the device is configured to report to d.plaspy.com or 54.85.159.138 on the Plaspy listening port so data reaches Plaspy.
- Helps map device events such as panic, motion, or I/O changes to Plaspy alert rules and dashboards.
- Aids in selecting the best transport mode for your deployment scenario, balancing battery life, latency, and reliability.
- Supports quicker diagnosis when messages are delayed or missing by checking transport, APN, and firmware behavior.
- Encourages validation of buffered upload behavior so historical messages are recovered after connectivity loss.

## Why Use Plaspy with This Protocol

Using the PT-35 with Plaspy provides organizations and individuals straightforward visibility and operational oversight from compact hardware. The PT-35’s low power design, flexible I/O, and support for GPRS and SMS make it a practical option for personal safety, asset protection, and light fleet or equipment tracking where discreet form factor and long standby are priorities.

Plaspy centralizes incoming location and event data from devices that report to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the tracker protocol so teams can focus on monitoring and response rather than manual protocol selection. To learn more about Plaspy and how it handles device connectivity and fleet management, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the most current information and device specific configuration guidance on the manufacturer site at http://www.starsnav.com/.
