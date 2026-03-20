---
slug: /hunterpro/cp60g/protocol
id: cp60g-protocol
sidebar_label: Protocol
title: HunterPro - CP60G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for HunterPro CP60G GPS tracker and how it communicates with Plaspy for device integration
keywords:
  - HunterPro CP60G protocol
  - CP60G GPS tracker
  - HunterPro GPS protocol
  - CP60G communication protocol
  - HunterPro tracker Plaspy compatibility
  - fleet tracking CP60G
  - vehicle tracking protocol
  - Plaspy device compatibility
  - HunterPro protocol documentation
  - GPS tracker protocol Plaspy
---

# HunterPro - CP60G Protocol

This page provides a public overview of the communication context for the HunterPro CP60G when used with Plaspy. It focuses on non-sensitive protocol information that helps fleet and device administrators understand how the CP60G reports location and event data to a back end such as Plaspy. The summary is intended for technical users who need to align device configuration and network settings without requiring access to firmware internals.

The HunterPro CP60G is a GSM GPRS GPS tracker built for vehicle tracking and recovery, featuring full quadband GSM coverage, a backup battery, and inputs for ignition panic and doors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always check device specific documentation for the most current implementation details.

## Protocol Overview

At a high level, the CP60G uses its GSM GPRS connection to send GPS and status data to a remote server. The device protocol defines how the tracker identifies itself, reports position and input states, and indicates battery or signal conditions so the receiving platform can convert raw transmissions into usable location and event records.

- The protocol carries device identification and telemetry so Plaspy can associate messages with the correct asset.
- Position and timestamp data are transmitted over the mobile link to the configured server endpoint.
- Event reporting for inputs like ignition, panic, and door sensors provides contextual information for monitoring and alerts.
- The protocol enables periodic reporting and can support sleep or low power modes to conserve battery while retaining essential updates.
- Transport-level settings determine whether messages arrive over UDP or TCP and how the server accepts them.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and protocols and to detect the incoming protocol automatically when devices are correctly configured to report to the Plaspy endpoint. In most cases, users do not need to manually select a protocol inside Plaspy if the device is pointing to the shared Plaspy server settings.

- Plaspy server domain is d.plaspy.com which resolves to the platform endpoint.
- Plaspy server IP is 54.85.159.138 which may be used for direct device configuration in some setups.
- The port is 8888 and is the common port Plaspy listens on for device reports.
- Plaspy automatically detects the tracker protocol when data reaches the platform on the shared port.
- All devices in Plaspy use the same port so configuration consistency is simplified.
- If a device is properly configured to report to the Plaspy endpoint, manual protocol selection in the platform is typically unnecessary.

## Transport and Connection Context

Transport and connection choices affect how the CP60G reaches Plaspy and can impact delivery characteristics such as latency and reliability. The CP60G relies on GSM GPRS for data, and connection mode is determined by device settings and network conditions.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration preferences.
- Devices commonly point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS is not available.
- Port 8888 is the single port Plaspy uses for all supported devices which simplifies firewall and NAT rules.
- TCP offers connection-oriented delivery while UDP may be used for lower overhead reporting in some setups depending on device firmware.
- Ensure the SIM and carrier data plan allow GPRS connections and outbound traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported features, and optional fields that the platform may receive from the CP60G.
- Hardware revisions or variants of CP60G may expose different sets of inputs or sensor interfaces which affect reported events.
- Manufacturer side configuration utilities or SMS commands may be required to point the device to d.plaspy.com or to the IP address 54.85.159.138 on port 8888.
- Selecting UDP versus TCP at the device level can influence delivery behavior and should match the device capabilities and network environment.
- Lack of internal memory on the CP60G means it relies on live GPRS transmission for reporting rather than store and forward.
- Validate compatibility against HunterPro documentation and firmware release notes before large scale deployments.

## Why Protocol Understanding Matters

Understanding the CP60G reporting protocol helps with setup, troubleshooting, and ensuring reliable long term operation with Plaspy. Clear knowledge of how and when the device reports makes it easier to diagnose connectivity issues and confirm that event data arrives as expected.

- Ensures correct device configuration so reports arrive at d.plaspy.com or 54.85.159.138 on port 8888.
- Aids in troubleshooting missing data by focusing on transport selection UDP or TCP, SIM data plan, and signal conditions.
- Helps set appropriate reporting intervals and sleep modes to balance battery life and tracking requirements.
- Supports validation of event wiring for inputs such as ignition, panic, and door sensors so reported events match real world activity.
- Improves planning for firmware updates and verifying behavior changes after manufacturer updates.

## Why Use Plaspy with This Protocol

Using the HunterPro CP60G with Plaspy provides a straightforward way to convert device telemetry into actionable fleet visibility. For organizations such as insurance providers, rental companies, and fleet operators, the CP60G offers a cost effective way to track assets while Plaspy handles protocol detection and data ingestion on a common, scalable endpoint.

To learn more about Plaspy and how it supports multi vendor devices like the HunterPro CP60G visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific information with the manufacturer at http://hunterpro.com.tw/.
