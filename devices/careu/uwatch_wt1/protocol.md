---
slug: /careu/uwatch_wt1/protocol
id: uwatch_wt1-protocol
sidebar_label: Protocol
title: CAREU - uWatch WT1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for CAREU uWatch WT1 integration with Plaspy covering connection context and compatibility considerations
keywords:
  - CAREU uWatch WT1 protocol
  - uWatch WT1 GPS protocol
  - CAREU uWatch WT1 Plaspy
  - Plaspy tracker protocol
  - wearable GPS protocol
  - health telemetry tracking
  - SOS geofence monitoring
  - uWatch WT1 compatibility
  - smartwatch GPS tracker
  - care management tracking
---

# CAREU - uWatch WT1 Protocol

This page covers the public protocol context for using the CAREU uWatch WT1 with Plaspy. It explains how the smartwatch form factor report of location, SOS events, and vital sign telemetry is conveyed to Plaspy in general terms and what you should expect when integrating the device into a Plaspy account. The intent is to clarify network and protocol concepts relevant to administrators, integrators, and technical users without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary with firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context and practical connection guidance.

## Protocol Overview

The uWatch WT1 uses a device reporting protocol to transmit GPS positions, SOS signals, geofence events, and health telemetry to a remote server where Plaspy ingests and correlates the data. The protocol defines how the device identifies itself, when it reports, and what kinds of telemetry are included in each report so Plaspy can present location and vital sign context together.

- Facilitates periodic and event driven reports so Plaspy can show real time location and historical playback.
- Carries emergency signals such as SOS and geofence exit events for immediate alerting in Plaspy.
- Transmits health telemetry like heart rate, blood pressure, SpO2, and body temperature alongside location data for consolidated monitoring.
- Provides device identification and metadata so Plaspy can link incoming records to the correct wearable and user profile.
- Supports remote alerts and routine reports that enable geofence notifications and operational workflows inside Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives data from trackers at a shared network endpoint and uses that incoming connection to automatically identify and process the tracker protocol. In most cases a uWatch WT1 configured to report to Plaspy will be recognized without manual protocol selection inside the platform.

- Plaspy listens on the shared server domain d.plaspy.com and accepts connections to the public server address 54.85.159.138.
- The service uses port 8888 for device reporting and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol manually when the device reports to the Plaspy endpoint.
- Proper device configuration to point reports to the Plaspy endpoint is the usual setup step to allow automatic detection and ingestion.
- If a device does not appear in Plaspy after reporting, verify device reporting settings and manufacturer documentation for firmware specific options.

## Transport and Connection Context

The uWatch WT1 may establish transport to Plaspy using either UDP or TCP depending on device support and configuration choices. Network reachability, NAT behavior, and cellular carrier behavior influence which transport is most reliable for a given deployment.

- Devices may be configured to report by pointing to d.plaspy.com or directly to 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy uses the same listening port 8888 for all supported devices which simplifies server endpoint configuration.
- UDP often reduces overhead for frequent periodic reports while TCP can be used when delivery confirmation and ordered streams are preferred by the device firmware.
- Ensure carrier APN settings and any intermediate firewalls permit outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware versions can change report cadence, payload contents, and which health telemetry metrics are included. Verify firmware behavior for your units.
- Hardware revisions or regional variants of the uWatch WT1 may have different default transport settings or available features.
- Manufacturer configuration tools or SIM provisioning steps may be required to point the device to d.plaspy.com or the Plaspy server IP.
- Selecting UDP versus TCP influences delivery characteristics; choose the transport that matches the device firmware recommendation and network constraints.
- Plaspy’s automatic protocol detection reduces the need for manual selection but correct network endpoint configuration on the device is still required.
- Validate device behavior against official manufacturer documentation for device specific commands, firmware release notes, and provisioning workflows.

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps ensure reliable data flow, faster troubleshooting, and predictable behavior in monitoring and alerting workflows for care teams and operators. Clear knowledge of connection context prevents common integration pitfalls and supports operational stability.

- Ensures devices are pointed to the correct Plaspy endpoint so location and vitals arrive reliably.
- Helps diagnose connectivity issues such as blocked ports, misconfigured APN settings, or incorrect transport selection.
- Guides firmware and device update decisions that may affect what telemetry is reported and when.
- Improves geofence tuning and SOS handling by clarifying how and when event reports are generated.
- Supports capacity planning and fleet management by understanding reporting cadence and expected network usage.

## Why Use Plaspy with This Protocol

Using the CAREU uWatch WT1 with Plaspy brings location, SOS events, geofence alerts, and vital sign telemetry into a single monitoring environment. This combined view is useful for care centers, family caregivers, and organizations that need rapid incident response, consolidated reporting, and historical playback of movement and health trends. Plaspy’s platform is designed to present these inputs together so teams can make informed decisions with location context and physiological data side by side.

To learn more about Plaspy and how the uWatch WT1 can integrate into your monitoring workflows visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol details and firmware information with the manufacturer at https://www.systech-iot.com/.
