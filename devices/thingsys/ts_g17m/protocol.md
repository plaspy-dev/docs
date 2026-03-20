---
slug: /thingsys/ts_g17m/protocol
id: ts_g17m-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the ThingSys TS-G17M GPS tracker and how it communicates with Plaspy for tracking and alarms
keywords:
  - ThingSys TS-G17M protocol
  - ThingSys TS-G17M GPS protocol
  - TS-G17M Plaspy compatibility
  - TS-G17M communication protocol
  - TS-G17M tracking protocol
  - ThingSys GPS tracker protocol
  - Plaspy device integration
  - GPS tracker protocol guide
  - motorcycle GPS tracker protocol
  - hybrid positioning protocol
---

# ThingSys - TS-G17M Protocol

This page provides public protocol context for using the ThingSys TS-G17M GPS tracker with Plaspy. It explains how the tracker reports location and status to the Plaspy platform in broad, non sensitive terms and describes the connection context and practical considerations for successful integration. The TS-G17M is a compact motorcycle and small vehicle tracker with hybrid positioning and multiple alarms that feed telemetry into fleet management systems such as Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior, available commands, and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non proprietary protocol context rather than device internals.

## Protocol Overview

The protocol implemented by the TS-G17M enables the device to report location, status, alarms, and telemetry so Plaspy can present real time tracking, alerts, and historical playback. At a high level the protocol governs how the tracker identifies itself, how periodic and event driven reports are sent, and how remote commands and configuration changes are transmitted between Plaspy and the device.

- Allows the tracker to send position and status updates to Plaspy for mapping and timeline playback.
- Transmits alarm events such as SOS, vibration, tilt, low battery, and power loss so Plaspy can raise alerts.
- Carries telemetry like ACC or ignition status and relay control confirmations for remote immobilizer actions.
- Supports both real time reporting and scheduled or interval tracking modes used by fleet monitoring.
- Provides a channel for remote configuration and command delivery from Plaspy to the unit, subject to firmware capabilities.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a common public endpoint and automatically identifies the reporting protocol for each device when the device sends data to that endpoint. In most deployments you do not need to manually select a protocol inside Plaspy if the TS-G17M is correctly configured to report to the Plaspy server.

- Plaspy accepts device reports at the public server domain d.plaspy.com and at the server IP 54.85.159.138.
- The supported network port for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and cellular configuration.
- When the TS-G17M points its GPRS endpoint to Plaspy, Plaspy will detect the tracker protocol automatically and ingest the location and alarm data.
- Users typically only need to set the device reporting address and transport; Plaspy handles protocol identification on reception.

## Transport and Connection Context

Connection setup and transport selection are practical considerations when configuring a TS-G17M for use with Plaspy. The tracker reports over cellular data and can also fall back to SMS for certain functions; however, the main real time path to Plaspy is over GPRS using TCP or UDP to the shared Plaspy endpoint and port.

- The TS-G17M can report via GPRS using TCP IP or UDP to port 8888 on the Plaspy endpoint.
- Devices may be pointed at d.plaspy.com or directly at 54.85.159.138 for reporting.
- SMS is commonly supported as a secondary channel for configuration or emergency reporting, depending on the device firmware.
- Plaspy uses the same port for all supported devices so device side configuration is simplified to endpoint and transport selection.
- Network reliability, APN settings, and carrier behavior can affect whether TCP or UDP is preferable for your deployment.

## Protocol Compatibility Notes

- Compatibility can depend on the device firmware version and specific hardware revision of the TS-G17M; features and message timing may vary.
- Manufacturer configuration commands and available remote controls such as relay activation are subject to the device firmware and settings.
- Transport mode selection between UDP and TCP may affect message delivery characteristics and should match the device configuration.
- SMS based reporting and command delivery may be available as a fallback but behaves differently than GPRS based reporting.
- Verify that the device's APN, reporting address, and transport are set to the Plaspy endpoint to enable automatic detection.
- Always consult the manufacturer documentation for firmware specific command lists and any model variants that change protocol behavior.

## Why Protocol Understanding Matters

Understanding how the TS-G17M communicates helps ensure reliable setup, faster troubleshooting, and predictable behavior once devices are deployed in Plaspy. Knowing the connection context and common variation points reduces integration friction and improves operational uptime for tracking and alarm workflows.

- Helps ensure APN and endpoint settings are correct for consistent data flow to Plaspy.
- Makes troubleshooting easier when telemetry or alarms are not arriving as expected.
- Guides decisions about using TCP or UDP based on network and carrier characteristics.
- Clarifies how firmware updates or hardware variants may change behavior and feature availability.
- Supports better planning for alarm handling, remote relay control, and audit quality of historical tracks.

## Why Use Plaspy with This Protocol

Using the TS-G17M with Plaspy provides a centralized view of location, alarms, and telemetry that is useful for motorcycle fleets, courier services, and asset protection programs. The device feeds hybrid positioning and vehicle status into Plaspy so teams can monitor movement, receive geofence and SOS alerts, and issue remote commands when authorized.

To learn more about Plaspy and how it can manage devices like the TS-G17M, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes on the manufacturer website https://www.thingsys.com/.
