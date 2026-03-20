---
slug: /xexun/u02/protocol
id: u02-protocol
sidebar_label: Protocol
title: Xexun - U02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Xexun U02 wearable with Plaspy for indoor precision and telemetry
keywords:
  - Xexun U02 protocol
  - Xexun U02 GPS protocol
  - Xexun U02 communication
  - Xexun U02 tracking
  - U02 UWB device
  - Plaspy compatible trackers
  - U02 indoor positioning
  - U02 tamper alerts
  - U02 telemetry integration
  - Plaspy device protocol
---

# Xexun - U02 Protocol

This page describes the public protocol context for using the Xexun U02 wearable tracker with Plaspy. It explains how the device’s reporting behavior and supporting systems interact with the Plaspy platform in broad, non sensitive terms while focusing on the communication role the protocol plays in delivering location and telemetry to the server.

The U02 is a UWB anti tamper positioning watch designed for high security deployments and it complements GPS trackers by providing centimetre level indoor positioning, tamper alerts, and personnel telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the U02 enables the watch and its supporting anchor network to deliver position fixes, tamper and emergency events, and sensor telemetry into Plaspy. In practical terms the protocol defines how the device or anchor network reports computed positions and event data to a backend endpoint that Plaspy consumes and maps to a user account.

- Carries UWB derived position data and anchor exchanges that result in high precision indoor location updates for Plaspy.
- Transmits tamper alarms and emergency button events so Plaspy can generate immediate alerts and incident records.
- Forwards sensor telemetry such as heart rate and motion to allow health and activity monitoring inside Plaspy.
- Supports two way messaging between device and anchors to enable command acknowledgements and system messages when supported.
- Enables the anchor system or positioning engine to forward computed fixes and event metadata into Plaspy for visualization and reporting.

## How Plaspy Detects the Protocol

Plaspy receives reported data at a single shared endpoint and automatically detects the tracker protocol used by incoming devices. When a U02 deployment is configured to report to Plaspy, the platform identifies the incoming message type and integrates the device without requiring a manual protocol selection in most cases.

- Plaspy listens on the same port for all supported devices and automatically detects the tracker protocol.
- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Plaspy supports both UDP and TCP reporting from devices depending on device configuration and network requirements.
- Users normally do not need to choose a protocol inside Plaspy if the device is pointed to the correct Plaspy endpoint and port.
- Automatic protocol detection helps simplify onboarding for mixed deployments that include U02 wearables and conventional GPS trackers.

## Transport and Connection Context

Connection context covers how the U02 and its anchor system forward computed positions and telemetry into Plaspy rather than low level message structure details. The critical public settings for integration are the Plaspy endpoint, transport options, and the consistent port used across devices.

- The device or anchor system may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Plaspy accepts reports sent to d.plaspy.com or the numeric address 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port which simplifies firewall and network rules for deployments.
- Transport selection can depend on network stability, relay behavior of anchor systems, and any intermediate gateways used in the deployment.
- Ensure network routing and firewall rules allow outbound traffic from anchors or gateways to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions on U02 units or on anchor firmware can change message timing, available fields, or optional telemetry. Verify firmware notes before large scale rollouts.
- Hardware revisions or optional modules such as RFID or NFC variants may affect which telemetry fields are available to Plaspy.
- Transport mode matters consider whether your anchors or gateway forward via UDP or TCP and configure devices accordingly.
- Manufacturer configuration tools or anchor management systems may be responsible for forwarding computed fixes to Plaspy rather than the watch directly.
- Validate any two way messaging workflows with anchors to ensure system messages are passed through to Plaspy as expected.
- Always consult official manufacturer documentation for implementation details that affect integration and compatibility.

## Why Protocol Understanding Matters

Understanding how the U02 reports positions, tamper events, and sensor telemetry makes deployment, troubleshooting, and operational monitoring more reliable when integrated with Plaspy. Clarity about transport, endpoint configuration, and expected event types reduces onboarding time and helps pinpoint issues quickly.

- Speeds up onboarding by ensuring devices and anchors are pointed at the correct Plaspy endpoint and port.
- Reduces false alarms and missed events by aligning firmware settings with expected reporting intervals and transport choices.
- Improves incident response when you know how tamper and emergency events are encoded and delivered to Plaspy.
- Helps plan network and firewall configurations since all Plaspy devices share the same listening port.
- Supports maintenance and upgrades by highlighting where firmware changes could alter reporting behavior.

## Why Use Plaspy with This Protocol

Using the Xexun U02 together with Plaspy provides organizations with a unified view that combines high precision indoor positioning and personnel telemetry with wider area GPS tracker data. This combination is valuable for security sensitive sites, healthcare facilities, and industrial environments where indoor accuracy, tamper protection, and health event detection complement conventional fleet and asset tracking.

Plaspy takes incoming U02 events and anchor derived positions and integrates them into live maps, alerts, and historical playback alongside vehicle and asset telemetry. To learn more about Plaspy and how it handles mixed deployments, visit https://www.plaspy.com. For the most current details about device protocol behavior, firmware changes, and manufacturer specific implementation notes verify information on the official Xexun site https://www.xexun.com/ as device support and firmware behavior can change over time.
