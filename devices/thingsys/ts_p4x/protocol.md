---
slug: /thingsys/ts_p4x/protocol
id: ts_p4x-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4X Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for ThingSys TS P4X and Plaspy compatibility for reliable asset tracking
keywords:
- ThingSys TS P4X protocol
- ThingSys TS P4X GPS protocol
- ThingSys TS P4X Plaspy
- TS P4X tracking protocol
- Plaspy device compatibility
- container GPS tracker protocol
- heavy duty GPS tracker Plaspy
- GPRS GPS tracker compatibility
- blind area data forwarding
- OTA GPS tracker management
---

# ThingSys - TS-P4X Protocol

This page documents the public protocol context for using the ThingSys TS-P4X GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in broad, non sensitive terms and what to expect when integrating the TS-P4X into a Plaspy powered fleet or asset monitoring deployment.

The TS-P4X is a heavy duty magnetic container tracker that uses GPRS for telemetry, supports blind area storage and OTA firmware updates, and reports events such as lock state and tamper alarms. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the TS-P4X defines how the device reports location, telemetry, alarm events and stored blind area records to a cloud endpoint. In public terms the protocol ensures that the device can identify itself, deliver usable position and event data, and accept remote configuration or firmware update triggers when supported.

- Enables delivery of positional fixes and device telemetry to the platform for live tracking and history playback
- Carries alarm and status events such as lock ON OFF and tamper notifications so Plaspy can generate alerts
- Supports blind area buffering so stored records are forwarded after connectivity is restored to preserve history
- Provides mechanisms for remote configuration and OTA firmware upgrades without requiring physical access
- Allows the device to present identifying information so Plaspy can associate messages with the correct asset record

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a shared endpoint and port and uses that input to determine the tracker protocol automatically. In most cases a TS-P4X that is configured to report to the Plaspy endpoint will be detected without manual protocol selection inside the platform.

- Plaspy accepts connections at the domain d.plaspy.com and also at the public IP 54.85.159.138
- The listening port for device traffic is 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol so manual protocol selection is typically not required when the device is correctly pointed to the Plaspy endpoint
- Proper device reporting configuration ensures the platform can ingest location streams, alarms and blind area records
- If devices are not detected automatically, reviewing device reporting destination settings and manufacturer guidance is the recommended first step

## Transport and Connection Context

Transport and connection choices determine how the TS-P4X reaches Plaspy but do not change the high level role of the protocol. The device may use either UDP or TCP on the shared Plaspy port depending on device support and configuration choices made during provisioning.

- Devices may be configured to use UDP or TCP on port 8888
- Devices can point to the domain d.plaspy.com or directly to the IP 54.85.159.138 as the destination
- All devices in Plaspy use the same port so Firewall and NAT rules can be simplified in most deployments
- Transport selection can affect delivery characteristics for acknowledgements and retransmission but does not change the public protocol purpose
- Ensure APN and GPRS settings on the TS-P4X are correct for reliable delivery to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware version differences can change reporting intervals, available events, and configuration commands
- Hardware revisions and cellular module variants may affect supported transport or network compatibility
- Manufacturer configuration options may expose UDP or TCP choices and different default endpoints
- Blind area buffer size and behavior may vary by firmware so validate expectations for historical data forwarding
- OTA capability can differ by firmware and needs validation before large scale rollouts
- Always verify the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion
- When in doubt consult official ThingSys documentation for device specific behaviors

## Why Protocol Understanding Matters

A basic understanding of the TS-P4X communication protocol helps with reliable deployment, efficient troubleshooting, and predictable long term operation with Plaspy. Knowing what the protocol is responsible for reduces integration time and clarifies where to look when events or data do not appear in the platform.

- Helps confirm devices are pointed to the correct Plaspy endpoint and port for automatic detection
- Makes it easier to verify blind area forwarding and to reconcile historical gaps
- Improves troubleshooting of event reporting such as lock state and tamper alerts
- Guides decisions about transport selection when UDP or TCP is available
- Informs planning for OTA updates and remote configuration at scale

## Why Use Plaspy with This Protocol

Using the TS-P4X with Plaspy gives organizations durable container and trailer visibility combined with platform level event handling. The TS-P4X design is oriented toward long deployments in harsh conditions, and when it reports to Plaspy it becomes part of a unified tracking and alerting pipeline for fleet and asset operations.

Plaspy accepts the TS-P4X reporting stream at d.plaspy.com and 54.85.159.138 on port 8888 and automatically detects the tracker protocol so devices that are correctly configured typically require minimal platform side setup. To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific protocol documents and firmware notes consult the manufacturer at https://www.thingsys.com/.
