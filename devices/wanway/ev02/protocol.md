---
slug: /wanway/ev02/protocol
id: ev02-protocol
sidebar_label: Protocol
title: WanWay - EV02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for WanWay EV02 GPS tracker and Plaspy compatibility
keywords:
  - WanWay EV02 protocol
  - WanWay EV02 GPS protocol
  - WanWay EV02 tracking protocol
  - WanWay EV02 communication
  - WanWay EV02 Plaspy
  - EV02 protocol Plaspy
  - WanWay tracker protocol
  - EV02 compatibility with Plaspy
  - GPS tracker protocol EV02
  - EV02 fleet management protocol
---

# WanWay - EV02 Protocol

This page covers the public protocol context for using the WanWay EV02 GPS tracker with the Plaspy platform. It explains the role of the device reporting protocol in enabling real time location, event, and status updates to Plaspy without revealing private or manufacturer restricted implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the EV02 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical, non sensitive guidance for integrations and troubleshooting.

## Protocol Overview

The EV02 communicates position, telemetry, and alarm events to a remote server using its internal GSM modem and the tracker reporting protocol implemented by the manufacturer. That protocol defines how the device identifies itself, reports GPS coordinates, and reports discrete events such as ACC state, vibration tamper alarms, and remote cut off activity.

- Enables the EV02 to send regular location updates and event reports to Plaspy for mapping and history.
- Carries device identity and status information so Plaspy can associate messages with the correct asset.
- Conveys security and telemetry events such as ACC detection, cut wire alerts, vibration alarms, and immobilizer actions.
- Supports both real time streaming and periodic reporting depending on device configuration and network conditions.
- Works with Plaspy’s ingestion endpoint so data becomes usable in dashboards, alerts, and reports without manual protocol selection.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint for all supported trackers and automatically detects the protocol when devices report to that endpoint. In most deployments the user only needs to configure the tracker to point at the Plaspy endpoint; Plaspy will handle protocol identification and parsing on the server side.

- Devices should be configured to report to the Plaspy server at d.plaspy.com or directly to 54.85.159.138.
- Plaspy listens on a single shared port so all supported devices use the same port value to simplify device setup.
- When a correctly addressed EV02 message arrives at Plaspy, the platform identifies the device and applies the appropriate parser and processing rules.
- Users normally do not need to pick a protocol inside Plaspy if the EV02 is correctly configured to report to the Plaspy endpoint.
- If messages do not appear, confirm device reporting settings, network connectivity, and that the device firmware supports reporting to the specified Plaspy endpoint.

## Transport and Connection Context

The EV02 may use either UDP or TCP to deliver reports depending on its firmware and configuration. Plaspy accepts tracker connections over the same port regardless of transport, and devices configured to use UDP or TCP can both report to Plaspy on that shared port.

- EV02 devices may be configured to use UDP or TCP on port 8888.
- Plaspy accepts connections on port 8888 for all devices to maintain a consistent configuration requirement.
- Devices can point to either the DNS name d.plaspy.com or the numeric address 54.85.159.138 for the Plaspy server.
- Choose UDP when lower overhead and simpler retransmission behavior is preferred, or TCP when ordered delivery and connection reliability are required by the device firmware.
- Verify the EV02 firmware supports the chosen transport and that the device's APN and GSM connectivity are functioning.

## Protocol Compatibility Notes

- Firmware differences across EV02 units can change available messages, event names, or reporting intervals; always verify behavior after firmware updates.
- Hardware revisions or optional wiring for immobilizer and cut off may affect which events are reported to Plaspy.
- The choice of UDP versus TCP is device configurable in many EV02 installations and can affect how quickly Plaspy receives messages under different network conditions.
- Some advanced telemetry features require wiring or external sensors to be present and enabled on the EV02.
- Confirm which reporting commands and event types are supported by the EV02 firmware installed in your devices before relying on a specific feature in production.
- Manufacturer documentation is the authoritative source for firmware specific protocol details and for commands that affect device behavior.

## Why Protocol Understanding Matters

A clear understanding of the EV02 communication protocol helps ensure reliable reporting to Plaspy, faster troubleshooting when messages are missing, and correct interpretation of events such as immobilizer activations or tamper alerts.

- Helps confirm the device is pointed to d.plaspy.com or 54.85.159.138 and using the correct transport and port settings.
- Aids in diagnosing connectivity issues by separating network problems from device configuration or firmware behavior.
- Improves confidence that telemetry and alarms seen in Plaspy reflect the intended wiring and sensor configuration on the EV02.
- Enables informed decisions about firmware upgrades and configuration changes that may alter message frequency or format.
- Supports accurate mapping of device features such as ACC detection, vibration alarm reporting, and remote cut off into Plaspy alerts and workflows.

## Why Use Plaspy with This Protocol

Using the WanWay EV02 with Plaspy gives fleet operators a compact, feature focused tracker integrated into a platform that centralizes location, event alerts, and vehicle status. The EV02’s compact form factor, broad operating voltage range, and anti theft features make it well suited for mixed fleets and discreet installations where reliable reporting to Plaspy is required.

Plaspy’s shared endpoint and automatic protocol detection reduce configuration complexity: point the EV02 at d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP and the platform will ingest reports and present them in dashboards, alerts, and reports. To learn more about how Plaspy can work with WanWay devices visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information on the WanWay official site https://www.wanwaytech.net/ .
