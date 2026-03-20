---
slug: /careu/uwatch_wt1_lite/protocol
id: uwatch_wt1_lite-protocol
sidebar_label: Protocol
title: CAREU - uWatch WT1 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU uWatch WT1 Lite integration with Plaspy covering connection context and compatibility
keywords:
  - CAREU uWatch WT1 Lite protocol
  - CAREU uWatch WT1 Lite GPS protocol
  - CAREU uWatch WT1 Lite communication protocol
  - CAREU uWatch WT1 Lite tracking protocol
  - wearable GPS tracker protocol
  - health watch tracking protocol
  - Plaspy compatible tracker
  - Plaspy device protocol
  - caregiver monitoring tracker
  - geofence and SOS protocol
---

# CAREU - uWatch WT1 Lite Protocol

This page describes the public, non sensitive protocol context for using the CAREU uWatch WT1 Lite with Plaspy. It focuses on how the device reports location and health telemetry to a Plaspy deployment and what connection settings are commonly used for integration. The content is targeted at technical users setting up reporting or troubleshooting connectivity and is not a replacement for the manufacturer's technical documentation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed at the Plaspy endpoint. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is intended as a high level integration guide rather than a firmware specific specification.

## Protocol Overview

The uWatch WT1 Lite communicates telemetry and event information from the wearable to a remote server using its onboard cellular or companion app forwarding mechanisms. The public protocol context covers how that data is delivered to Plaspy for real time tracking, alerts, and historical playback without exposing private parser details.

- Enables the watch to report GPS location and health telemetry such as heart rate, blood pressure, and SpO2 to a remote endpoint for monitoring.
- Delivers event notifications like SOS button presses and geofence breaches so Plaspy can generate alerts and escalation workflows.
- Carries regular position updates and status reports that Plaspy uses for mapping, playback, and time series correlation with health data.
- Provides identifying information the server needs to associate incoming reports with the correct device and user account.
- Supports configuration and remote management flows when the device or companion app is set to report to the Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy accepts device reports on a single shared network endpoint and automatically determines the tracker protocol used by each device when properly configured to report there. This means that in most cases the user does not need to select a protocol manually inside Plaspy once the device is sending data to the correct address and port.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- The server listens on port 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and carrier settings.
- When the uWatch WT1 Lite is pointed to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and associates incoming messages with the device.
- Proper device identity and configuration ensure Plaspy can route telemetry and events into the correct user account and monitoring workflows.

## Transport and Connection Context

Connection context covers how the uWatch WT1 Lite typically reaches the Plaspy servers and what options are commonly supported. This section stays at the transport level and does not describe internal frame formats or parsing logic.

- The watch may send reports over UDP or TCP depending on its network stack and configuration.
- Devices can be configured to report to the Plaspy domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy receives data on port 8888 for all supported devices which simplifies configuration and firewall rules.
- Transport selection between UDP and TCP can affect delivery guarantees and should match the device firmware capabilities and operator network behavior.
- For reliable remote monitoring, verify that outbound traffic to d.plaspy.com on port 8888 is permitted by any intermediate firewalls or carrier APN settings.

## Protocol Compatibility Notes

- Firmware versions may change which telemetry fields are reported, their sampling cadence, or available event types such as SOS behavior and health sensor reporting.
- Hardware revisions or regional variants of the uWatch WT1 Lite can implement different transport defaults or companion app behaviors that affect how the device is pointed to a reporting endpoint.
- Manufacturer side settings and companion app configuration may be required to direct the device to d.plaspy.com or 54.85.159.138 on port 8888.
- Choosing UDP versus TCP should follow device support and network reliability considerations for your deployment.
- Plaspy automatically detects the tracker protocol when the device reports to the shared port, but correct device identity and reporting intervals are necessary for consistent mapping to user accounts.
- Always validate compatibility and current behavior against the manufacturer documentation for firmware specific details and release notes.

## Why Protocol Understanding Matters

Understanding how the uWatch WT1 Lite communicates with Plaspy helps ensure a smooth setup, reliable alerts, and predictable long term operation of the wearable in caregiving or safety deployments.

- Facilitates correct device configuration so telemetry and SOS events reach Plaspy without manual protocol selection.
- Helps troubleshoot connectivity issues related to DNS, IP routing, firewall rules, and transport selection to the Plaspy endpoint.
- Enables informed choices about reporting intervals and power trade offs for battery sensitive wearable deployments.
- Supports proper validation of event delivery such as geofence triggers, SOS acknowledgements, and health telemetry sampling.
- Reduces ambiguity when coordinating with the device manufacturer or carrier about firmware changes that affect reporting.

## Why Use Plaspy with This Protocol

Using the CAREU uWatch WT1 Lite with Plaspy centralizes location and health telemetry into a single monitoring platform that supports real time alerts, historical playback, and multi user caregiving workflows. Plaspy’s shared endpoint model and automatic protocol detection simplify integration, allowing organizations to focus on monitoring and response rather than device specific server configuration.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware notes on the manufacturer website https://www.systech-iot.com/.
