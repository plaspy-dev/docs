---
slug: /xirgo/xt47/protocol
id: xt47-protocol
sidebar_label: Protocol
title: Xirgo - XT47 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Xirgo XT47 tracker with Plaspy and shared Plaspy connection settings
keywords:
  - Xirgo XT47 protocol
  - Xirgo XT47 GPS protocol
  - XT47 Plaspy compatibility
  - Xirgo tracker protocol
  - XT47 communication protocol
  - XT47 tracking protocol
  - Xirgo tracker Plaspy
  - XT47 asset tracker protocol
  - GPS tracker protocol Xirgo
  - XT47 fleet management protocol
---

# Xirgo - XT47 Protocol

This page provides public protocol context for integrating the Xirgo XT47 GPS tracker with Plaspy. It focuses on how the XT47 communicates with Plaspy for location reporting, I O and telemetry delivery in a way that is suitable for public documentation. The XT47 is purpose built for rugged remote assets such as generator sets, construction machinery, trailers and containers, and this page explains the communication relationship between the device and the Plaspy platform without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Plaspy accepts connections at d.plaspy.com and 54.85.159.138 on port 8888; devices may be configured to use either UDP or TCP on port 8888. Exact protocol behavior can vary with firmware versions, hardware revisions and manufacturer implementation, so device specific behavior should be validated against manufacturer documentation where needed.

## Protocol Overview

The tracker protocol is the set of messages and conventions the XT47 uses to send location, telemetry and event information to a remote server such as Plaspy. At a high level, the protocol enables the device to identify itself, report position and state, and deliver sensor and I O events that Plaspy converts into usable telemetry, alerts and history.

- Carries core tracking data such as GNSS position, time, and basic movement state to Plaspy for live and historical views.
- Transmits I O events and telemetry so Plaspy can map inputs like ignition, alarms, door status and external sensors into workflows.
- Provides identification and session information so Plaspy can associate incoming messages with the correct asset record.
- Enables event driven reporting that supports anti theft workflows and telemetry based maintenance when configured.
- Works over the device transport channel to ensure messages reach Plaspy for ingestion and processing.

## How Plaspy Detects the Protocol

Plaspy is designed to automatically detect the protocol from devices that are correctly configured to report to the Plaspy endpoint. Because Plaspy uses a shared server address and port for supported devices, most users do not need to pick a protocol manually inside Plaspy when the device is set to send to the Plaspy endpoint.

- Devices should be configured to report to d.plaspy.com or 54.85.159.138 using port 8888.
- Plaspy accepts both UDP and TCP connections on port 8888; choose the transport that matches the device configuration.
- When the XT47 sends data to the Plaspy endpoint, Plaspy associates the incoming stream with the correct device and detects the message format automatically.
- Users typically only need to ensure the device APN and reporting server settings match the Plaspy endpoint and port.
- If reporting does not begin, confirm network access, firewall rules and that the device is actively sending to the Plaspy address and port.

## Transport and Connection Context

Transport-level choices affect how the XT47 reaches Plaspy but do not change the general role of the protocol in reporting location and events. The device may be set to communicate over either UDP or TCP depending on its configuration and the deployment needs.

- The XT47 may be configured to use UDP or TCP on port 8888 to reach Plaspy.
- Plaspy accepts connections at the domain d.plaspy.com and at 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port for reporting, simplifying server configuration for mixed fleets.
- Network conditions, carrier behavior and device power management can influence transport reliability and reporting frequency.
- Verify that carrier settings, APN credentials and any on device firewall or NAT traversal settings allow traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields and telemetry options; validate compatibility after firmware updates.
- Hardware revisions or optional modules may add or remove I O and sensor capabilities that affect what the device reports.
- Manufacturer side configuration pages or provisioning tools may expose different server or transport defaults than those used in the field.
- Selecting UDP or TCP is a device level choice and may require matching configuration on the network side for reliable delivery.
- Test device reporting to the Plaspy endpoint during commissioning to confirm that identification, telemetry and I O events arrive as expected.
- Confirm which telemetry channels and control outputs are enabled on the specific XT47 unit before relying on them in production rules.
- For new deployments, coordinate with the manufacturer documentation to ensure the device variant supports the required telemetry and control features.

## Why Protocol Understanding Matters

A clear, practical understanding of the tracker protocol helps ensure the XT47 is set up correctly, integrates smoothly with Plaspy, and provides reliable data for operations and maintenance teams.

- Proper configuration of the device reporting address and transport ensures data reaches Plaspy consistently.
- Knowing which telemetry and I O events the device will include helps map device signals into Plaspy workflows and alerts.
- Awareness of firmware and hardware differences reduces troubleshooting time when a device behaves differently than expected.
- Understanding transport behavior assists with diagnosing connectivity issues related to carriers, NAT or firewalls.
- Validating compatibility during commissioning avoids surprises in production and supports long term reliability.

## Why Use Plaspy with This Protocol

Using the XT47 with Plaspy provides centralized visibility and control for rugged remote assets. Plaspy ingests the XT47 location, I O events and telemetry so teams can monitor asset location, track utilization, receive geofence and tamper alerts, and act on sensor data for maintenance planning. For high value equipment deployed in challenging environments, the combination of the XT47 hardware and Plaspy software enables practical asset protection and operational oversight.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and hardware revision guidance please verify current information on the manufacturer site https://xirgo.com/.
