---
slug: /topfly/solarx_310/protocol
id: solarx_310-protocol
sidebar_label: Protocol
title: TopFly - SolarX 310 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for TopFly SolarX 310 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - TopFly SolarX 310 protocol
  - TopFly SolarX 310 GPS protocol
  - TopFly SolarX 310 protocol Plaspy
  - SolarX 310 tracking protocol
  - SolarX 310 communication protocol
  - TopFly GPS tracker protocol
  - SolarX 310 Plaspy compatibility
  - TopFly asset tracking protocol
  - GPS tracker protocol documentation
  - fleet tracking SolarX 310
---

# TopFly - SolarX 310 Protocol

This page covers the public protocol context for using the TopFly SolarX 310 tracker with Plaspy. It explains how the device communicates with Plaspy for reporting position, telemetry and events without exposing private or sensitive implementation details. The information here is intended to help technical users understand expected connection behavior and what to validate when integrating the SolarX 310 with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The SolarX 310 is Plaspy compatible out of the box and supports multiple transport options including TCP, UDP, MQTT and SMS. Because firmware options and feature sets can differ between hardware revisions, this page focuses on practical, public facing protocol context rather than internal packet structures.

## Protocol Overview

The device communication protocol is the set of rules the SolarX 310 follows to send location, sensor and event data to Plaspy and to receive optional remote commands or configuration replies. In practical terms the protocol ensures the tracker can identify itself to Plaspy, transmit buffered points after connectivity resumes, and deliver alarm and sensor events for immediate notification and historical analysis.

- Enables the SolarX 310 to send positional updates, sensor data and alarms to Plaspy for real time dashboards and alerts.
- Allows the tracker to include identifying metadata so Plaspy can associate incoming messages with the correct device record.
- Supports buffered delivery so large offline logs stored on the device forward to Plaspy when connectivity is restored.
- Provides a transport agnostic layer so the device can use TCP, UDP, MQTT or fall back to SMS when needed.
- Carries telemetry necessary for features such as tamper alerts, BLE sensor readings, geofence events and battery status.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a unified ingestion endpoint and automatically detects the tracker protocol for supported models. In most integrations the device only needs to be pointed at the Plaspy endpoint; manual protocol selection inside Plaspy is usually not required when the device is configured correctly.

- Plaspy automatically detects the tracker protocol so devices report without manual protocol configuration in many cases.
- Point the device at the Plaspy ingestion endpoint to allow automatic detection and association with your account.
- When a device connects, Plaspy examines the incoming session and metadata to match it with a supported tracker type.
- Proper device identity information and consistent transport settings on the device improve detection reliability.
- If you see unexpected behavior, verify the device is configured to report to Plaspy and that identifying fields match the device record.

## Transport and Connection Context

The SolarX 310 can use multiple transports to reach Plaspy depending on device settings and network conditions. For Plaspy ingestion the public connection targets and port are standardized so devices can be configured consistently across a fleet.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct configuration reference.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port which simplifies provisioning and network firewall configuration.
- The SolarX 310 also supports MQTT or SMS as alternative transports when those options are enabled on the unit.
- Choose TCP when you prefer session reliability and UDP when a lightweight connection is preferred and supported by the device firmware.

## Protocol Compatibility Notes

- Firmware differences can change which transport options and message fields are available; confirm the device firmware version before assuming feature parity.
- Hardware revisions may add or remove sensors such as BLE accessory support which affects the telemetry sent to Plaspy.
- Manufacturer side configuration or regional firmware builds can alter default reporting intervals and security options.
- Transport selection matters for behavior after connectivity loss which influences how buffered points are forwarded to Plaspy.
- When using MQTT or SMS, verify that those transports are enabled and supported by your Plaspy account configuration.
- Always cross check compatibility statements against official TopFly documentation and release notes for the SolarX 310.

## Why Protocol Understanding Matters

Understanding how the SolarX 310 communicates helps ensure reliable setup, efficient troubleshooting and predictable long term operation when integrated with Plaspy. Knowing transport options, expected behaviors and detection requirements reduces integration time and improves uptime for tracking and alerting workflows.

- Helps validate device configuration so the tracker reports to the correct Plaspy endpoint and port.
- Clarifies expected behavior for buffered data forwarding after network restoration.
- Aids troubleshooting when devices are not appearing in Plaspy or when telemetry is incomplete.
- Informs network planning such as firewall rules and carrier settings for large scale deployments.
- Supports change management when updating firmware or swapping hardware revisions in an active fleet.

## Why Use Plaspy with This Protocol

Pairing the SolarX 310 with Plaspy provides a practical solution for organizations that need continuous visibility, environmental telemetry and anti-theft alerts across remote and exposed assets. The SolarX 310’s solar assisted battery, large offline buffer and BLE sensor support combine with Plaspy’s ingestion and alerting to deliver continuous tracking and timely event notifications for fleets, containers and high value equipment.

To learn more about Plaspy and how it integrates with devices like the SolarX 310 visit https://www.plaspy.com. Protocol support, firmware behavior and manufacturer implementation details can change over time, so please verify the latest device specific protocol documentation and firmware notes on the manufacturer site https://www.topflytech.com/ before deploying at scale.
