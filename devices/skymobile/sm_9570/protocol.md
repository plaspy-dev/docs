---
slug: /skymobile/sm_9570/protocol
id: sm_9570-protocol
sidebar_label: Protocol
title: SkyMobile - SM-9570 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for SkyMobile SM-9570 GPS tracker and how it communicates with Plaspy for reliable fleet tracking and integration
keywords:
  - SkyMobile SM-9570 protocol
  - SkyMobile SM-9570 GPS protocol
  - SM-9570 Plaspy compatibility
  - SM-9570 tracking protocol
  - SkyMobile vehicle tracker protocol
  - embeddex track protocol
  - Plaspy device integration
  - fleet tracking SM-9570
  - GPS tracker communication Plaspy
  - SM-9570 protocol guide
---

# SkyMobile - SM-9570 Protocol

This page describes the public protocol context for using the SkyMobile SM-9570 GPS tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform, what role the device protocol plays in everyday tracking, and what to expect when integrating the SM-9570 into a fleet tracking deployment. The information here is intended for system integrators, administrators, and technical users who need a clear, non-sensitive view of the communication relationship between the device and Plaspy.

The SM-9570 combines a high sensitivity UBLOX GPS chipset, multi input and output interfaces, and periodic reporting capabilities. It is based on the embeddex @ track protocol for integration flexibility. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact runtime behavior can vary by firmware version, hardware revision, and manufacturer implementation. For Plaspy communications, the server domain is d.plaspy.com, the server IP is 54.85.159.138, and the port is 8888.

## Protocol Overview

At a high level, the SM-9570 device protocol defines how the tracker packages location, status, and sensor information and sends it to a remote server like Plaspy. The protocol's role is to ensure the platform receives consistent, identifiable telemetry that can be translated into location updates, alerts, and I/O state changes for fleet monitoring and control.

- Enables the SM-9570 to report periodic location and status updates to a remote endpoint for fleet visibility
- Provides device identification information so the platform can associate messages with the correct asset
- Carries telemetry such as GPS coordinates, movement or motion sensor triggers, and basic I/O states for remote monitoring
- Supports configuration-driven reporting intervals and conditions so the device can conserve power or increase reporting frequency as needed
- Facilitates integration with tracking platforms using embeddex @ track protocol conventions where applicable

## How Plaspy Detects the Protocol

Plaspy receives incoming device communications on a single shared endpoint and port and applies automatic detection to determine the tracker protocol in use. In most cases a correctly configured SM-9570 that reports to the Plaspy endpoint will be recognized without manual protocol selection inside the platform.

- Plaspy accepts device reports at the domain d.plaspy.com and the IP address 54.85.159.138
- All devices supported by Plaspy use the same port so configuration on the device side is simplified
- Port and endpoint are consistent across models, and Plaspy automatically detects the tracker protocol from the incoming messages
- When the SM-9570 is pointed at the Plaspy endpoint and reporting correctly, manual protocol selection in Plaspy is typically unnecessary
- Platform logs and device status views within Plaspy can help verify that messages are being received and the protocol was identified

## Transport and Connection Context

Connection transport is a device configuration detail that affects how the SM-9570 sends protocol messages to Plaspy. The device can be configured to use either UDP or TCP and should point to the Plaspy endpoint and port as part of initial setup.

- The SM-9570 may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings
- Devices can point to the domain d.plaspy.com or the direct server IP 54.85.159.138 when sending reports
- Port 8888 is the shared port used by Plaspy for all supported devices
- Choose UDP for lightweight, connectionless reporting or TCP if the device configuration or network requires a connection oriented transport
- Ensure the device APN and cellular network policy allow outbound connections to the Plaspy endpoint to avoid delivery issues

## Protocol Compatibility Notes

- Firmware variations can change message details, available fields, and behavior; always check the device firmware version when validating compatibility
- Hardware revisions or regional variants of the SM-9570 may alter supported transport modes or available I/O features
- Manufacturer-side protocol implementations sometimes include optional fields or extensions; these can vary across firmware builds
- The choice of UDP versus TCP affects delivery semantics but does not change the fact that Plaspy receives data on port 8888
- Plaspy’s automatic detection handles many common variants, but confirm device reports are reaching d.plaspy.com or 54.85.159.138 during commissioning
- Consult the manufacturer for firmware specific protocol notes when integrating advanced features or proprietary extensions

## Why Protocol Understanding Matters

Understanding the SM-9570 communication protocol is practical and helps ensure reliable, long term operation with Plaspy. Knowing what the device sends, how it identifies itself, and which transport it uses makes commissioning and troubleshooting faster.

- Speeds up initial setup by ensuring the device points to the correct Plaspy endpoint and port
- Helps diagnose connectivity problems by narrowing focus to transport, APN, or firmware-related issues
- Improves accuracy of telemetry interpretation when platform users know what data fields the device typically provides
- Supports planned maintenance and firmware updates by anticipating potential protocol changes
- Enables correct configuration of reporting intervals and I/O behaviors for battery life and network usage optimization

## Why Use Plaspy with This Protocol

Using the SkyMobile SM-9570 with Plaspy provides organizations a practical path to real time vehicle visibility and centralized fleet management. The SM-9570’s strong GPS sensitivity, motion detection, and flexible I/O combine with Plaspy’s device handling to deliver actionable location and status data for operations teams. Because Plaspy uses a single, consistent port and automatically detects the tracker protocol, integration is typically straightforward when the device is configured to report to the Plaspy endpoint.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions for the SM-9570 consult the manufacturer documentation at http://www.skymobile.com.co. Protocol support and device firmware behavior can change over time, so verifying current information with the manufacturer is recommended.
