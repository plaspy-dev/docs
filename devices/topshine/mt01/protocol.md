---
slug: /topshine/mt01/protocol
id: mt01-protocol
sidebar_label: Protocol
title: TopShine - MT01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopShine MT01 GPS tracker and Plaspy compatibility and connection settings
keywords:
  - TopShine MT01 protocol
  - TopShine MT01 GPS protocol
  - MT01 communication protocol
  - MT01 tracking protocol
  - TopShine tracker Plaspy compatibility
  - Plaspy device integration
  - vehicle GPS tracker protocol
  - fleet tracker MT01
  - MT01 telemetry protocol
  - MT01 Plaspy setup
---

# TopShine - MT01 Protocol

This page covers the public protocol context for using the TopShine MT01 tracker with the Plaspy platform. It explains how the tracker communicates in general terms, what connection settings Plaspy uses, and what to check during deployment and troubleshooting. This guidance focuses on observable, public behaviors rather than firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by MT01 firmware version, hardware revision, and manufacturer implementation, so always validate device specific details when planning integrations.

## Protocol Overview

The MT01 communicates location, telemetry, and event data to a remote server using the device communication protocol implemented by the manufacturer. That protocol defines how the device identifies itself, reports GPS fixes and sensors, and responds to remote configuration and control requests. When integrated with Plaspy, the tracker sends periodic and event driven reports that the platform ingests and presents as live positions and alerts.

- Enables periodic and event driven reporting of GPS position, speed, and timestamp to a remote endpoint.
- Carries telemetry and sensor data such as power state, battery level, and optional fuel or crash sensor events for ingestion by Plaspy.
- Includes device identity information so Plaspy can associate incoming reports with the correct asset record.
- Supports remote configuration and control workflows exposed at the platform level when the device and firmware allow two way communication.
- Works with the MT01 offline logger to upload stored traces after temporary connectivity loss for historical continuity.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a shared server endpoint and automatically determines the tracker protocol based on the incoming data profile. In most deployments users do not need to manually select a protocol inside Plaspy if the MT01 is configured to report to the Plaspy endpoint using the correct transport and address.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138. The port is 8888.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol for properly addressed reports.
- If the MT01 is configured to point to the Plaspy endpoint and send its reports, the platform will ingest and map data to the correct device record.
- Users typically only need to ensure the device reporting address and transport match Plaspy settings for automatic detection to occur.
- Consult Plaspy integration guides or your integrator if a device requires provider specific fields or vendor configuration to reach d.plaspy.com.

## Transport and Connection Context

The MT01 can be configured to use either UDP or TCP depending on device support and the chosen configuration. Plaspy accepts connections on a single shared port for all devices, so transport selection and correct server addressing are the common setup points to confirm before onboarding devices.

- The device may be configured using UDP or TCP on port 8888 depending on device support and installer choice.
- Devices may be pointed to the domain d.plaspy.com or to the numeric address 54.85.159.138 to reach Plaspy.
- Plaspy listens on port 8888 and uses the same port across supported trackers for simplified configuration.
- Cellular data or SMS/GPRS fallback behavior is controlled by the tracker firmware and cellular configuration, not by Plaspy transport settings.
- Verify the MT01 APN and outbound transport settings when provisioning so reports arrive reliably at the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations can change which features and report formats are available, so identify the MT01 firmware version when validating behavior.
- Hardware revisions or optional accessories such as fuel sensors and immobilizer relays may alter the telemetry fields the tracker sends.
- Manufacturer side configuration defaults can differ by region or reseller; confirm the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport selection between UDP and TCP may affect delivery characteristics under certain network conditions; choose the one that matches your reliability needs.
- If the device uses SMS as a fallback for remote commands, review SMS command lists in the official documentation.
- Always confirm compatibility and mapping of optional sensor inputs before large scale deployment.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable data flow, faster troubleshooting, and correct mapping of device features into Plaspy. A clear view of how reports are sent and what the device includes in those reports reduces integration time and supports predictable fleet operations.

- Helps confirm the device is pointing to d.plaspy.com or 54.85.159.138 and using port 8888 for successful delivery.
- Speeds troubleshooting when location updates or event notifications are missing by narrowing focus to transport, APN, and firmware behavior.
- Ensures optional sensors and inputs are correctly interpreted by Plaspy when the device sends their telemetry fields.
- Informs decisions about UDP versus TCP for your network environment and expected delivery guarantees.
- Aids in planning for offline logging and data catch up from the MT01 after coverage gaps.

## Why Use Plaspy with This Protocol

Using the TopShine MT01 with Plaspy gives organizations an operational view of vehicle location, events, and optional telemetry such as fuel status or panic alerts. The MT01 hardware features such as wide voltage range, compact weatherproof housing, and onboard data logging pair well with Plaspy platform capabilities for real time mapping, alerts, and historical reporting.

If you want to learn more about Plaspy and how the MT01 integrates with the platform, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and accessory compatibility consult the manufacturer's official documentation at https://www.gztopshine.com/ as protocol support and firmware behavior can change over time.
