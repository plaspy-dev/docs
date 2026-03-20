---
slug: /queclink/gl500mg/protocol
id: gl500mg-protocol
sidebar_label: Protocol
title: QuecLink - GL500MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GL500MG and how it communicates with Plaspy for tracking and telemetry integration
keywords:
  - QuecLink GL500MG protocol
  - QuecLink GL500MG GPS protocol
  - QuecLink GL500MG Plaspy compatibility
  - GL500MG communication protocol
  - GL500MG tracking protocol
  - QuecLink asset tracker protocol
  - QuecLink @Track protocol
  - GL500MG telemetry integration
  - QuecLink GPS tracker Plaspy
  - asset tracking protocol Plaspy
---

# QuecLink - GL500MG Protocol

This page describes the public protocol context for using the QuecLink GL500MG tracker with the Plaspy platform. It focuses on how the device communicates telemetry and events to Plaspy in broad, non-sensitive terms so integrators and administrators understand the role of the tracker reporting protocol in a successful deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision and manufacturer implementation, so administrators should treat this page as a protocol overview rather than a firmware specific reference.

## Protocol Overview

The GL500MG transmits GNSS positions, motion events and internal sensor readings to a backend server using QuecLink’s public reporting methods. The tracker’s protocol defines how the device identifies itself, how telemetry is packaged for transmission, and which event types are reported so the platform can convert raw device messages into usable tracking and alert data.

- Enables the GL500MG to report location, accelerometer events, temperature and light telemetry to a server endpoint.
- Allows the device to include identification so Plaspy can associate messages with the correct asset record.
- Supports scheduled and event driven reporting to balance battery life and timely updates for asset monitoring.
- Buffers messages on the device during intermittent coverage so Plaspy receives historical telemetry when connectivity resumes.
- Operates over the device’s supported transports so messages reach the configured server endpoint reliably.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and port and uses automatic protocol detection to determine how to parse incoming messages. In most cases, a correctly configured GL500MG that reports to Plaspy’s endpoint will be recognized without requiring manual protocol selection in the Plaspy device manager.

- Plaspy’s public server endpoint for device reporting is d.plaspy.com and the known server IP is 54.85.159.138.
- The Plaspy platform listens on port 8888 for device reports and uses the same port for all supported devices.
- Plaspy will automatically detect the tracker protocol once the GL500MG connects and begins reporting to the Plaspy endpoint.
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to send reports to d.plaspy.com on the correct transport and port.
- Automatic detection simplifies onboarding for mixed fleets where devices use different manufacturer protocols.

## Transport and Connection Context

The GL500MG supports multiple transport methods for sending telemetry, and Plaspy accepts device traffic over standard network transports. Devices may be configured to send data to the Plaspy endpoint using either UDP or TCP depending on device capabilities and deployment requirements.

- The GL500MG may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to 54.85.159.138 as the reporting server.
- Plaspy uses the same listening port 8888 for all devices, so no per device port configuration is required on the server side.
- Choice of UDP or TCP affects delivery semantics and should be selected to match coverage and reliability needs for the deployment.
- For cellular trackers like the GL500MG, connection settings and APN configuration on the device determine whether reports reach Plaspy reliably.

## Protocol Compatibility Notes

- QuecLink implements reporting behaviors that may differ by firmware revision; identical model numbers can sometimes exhibit small protocol differences across firmware versions.
- Hardware revisions or regional variants may affect supported bands and cellular fallback, which can indirectly change reporting reliability and transport preferences.
- The GL500MG publicly documents use of QuecLink reporting methods; where manufacturer protocol names appear in device documentation, use those names to match device settings to Plaspy expectations.
- Transport selection (UDP versus TCP) should be validated during commissioning to confirm message delivery and battery impact.
- Always verify compatibility when migrating devices to a new network operator or when a device firmware update is applied.
- Consult official QuecLink documentation and release notes for device specific protocol clarifications.

## Why Protocol Understanding Matters

Understanding the GL500MG communication protocol helps with successful setup, predictable behavior in the field, and efficient troubleshooting when telemetry is missing or malformed. Knowledge of the protocol and transport context reduces onboarding time and improves long term reliability for asset monitoring.

- Ensures device reporting settings (server address, transport, port) are correct for Plaspy ingestion.
- Helps troubleshoot common issues such as malformed messages, modem registration failures, or buffering behavior after connectivity loss.
- Enables informed choices about reporting frequency and event triggers to balance battery life and timeliness.
- Supports planning for firmware updates and hardware revisions by clarifying where behavior can change.
- Assists in validating sensor telemetry and event mapping inside Plaspy dashboards and alerts.

## Why Use Plaspy with This Protocol

Using the QuecLink GL500MG with Plaspy provides organizations with a scalable way to convert long-life asset telemetry into usable location and event insights. The combination of the GL500MG’s low-power design and Plaspy’s automatic protocol handling makes it straightforward to onboard many devices while keeping ongoing maintenance minimal.

Plaspy’s shared endpoint at d.plaspy.com (54.85.159.138) on port 8888 and automatic protocol detection mean administrators generally only need to configure the GL500MG to report to that address and choose UDP or TCP on port 8888 as appropriate. For additional details about device specific protocol behavior, firmware differences and the latest manufacturer guidance, please learn more about Plaspy at https://www.plaspy.com and verify device documentation and firmware notes at the official QuecLink site https://www.queclink.com/ . Protocol support, firmware behavior and manufacturer implementation details can change over time, so always confirm the current details with the manufacturer.
