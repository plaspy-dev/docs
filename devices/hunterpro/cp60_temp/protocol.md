---
slug: /hunterpro/cp60_temp/protocol
id: cp60_temp-protocol
sidebar_label: Protocol
title: HunterPro - CP60-TEMP Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for HunterPro CP60-TEMP compatibility with Plaspy for refrigerated temperature tracking
keywords:
  - HunterPro CP60-TEMP protocol
  - HunterPro CP60-TEMP GPS protocol
  - CP60-TEMP tracking protocol
  - HunterPro temperature tracker protocol
  - Plaspy device compatibility
  - HunterPro Plaspy integration
  - refrigerated truck GPS protocol
  - container temperature tracker protocol
  - GPS tracker communication protocol
  - fleet temperature monitoring protocol
---

# HunterPro - CP60-TEMP Protocol

This page covers the public protocol context for using the HunterPro CP60-TEMP tracker with Plaspy. It explains, at a high level, how the device reports location and temperature telemetry to Plaspy and what role the tracker communication protocol plays in delivering usable data for refrigerated trucks, containers, and storage facilities.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary depending on device firmware, hardware revision, and manufacturer implementation, so this page focuses on the general communication context and practical compatibility considerations rather than firmware specific internals.

## Protocol Overview

The CP60-TEMP protocol is the set of device behaviors and messages that allow the tracker to send GPS position, temperature readings, and status information to a remote server like Plaspy. The protocol governs how the tracker authenticates or identifies itself, reports periodic data and alarms, and handles transport-level connectivity to the Plaspy endpoint.

- Enables the CP60-TEMP to report GPS location and temperature telemetry to a cloud server for monitoring and alerts
- Carries identification or device metadata so Plaspy can associate incoming data with the correct asset
- Supports periodic reporting and event driven messages that are used for route visibility and temperature compliance monitoring
- Allows the platform to receive status indicators such as power, battery, or sensor state alongside location and temperature
- Provides the basis for remote configuration and threshold driven alerts when supported by the device and firmware

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol for supported devices, including the CP60-TEMP, when the device is properly configured to report to the platform. In most cases users do not need to manually select a protocol inside Plaspy if the tracker is sending data to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Plaspy listens on port 8888 for incoming device traffic
- Devices may be configured to use UDP or TCP transport on port 8888 depending on device support
- All devices in Plaspy use the same port which simplifies endpoint configuration
- If a device is correctly pointed at the Plaspy endpoint the platform will handle protocol identification automatically

## Transport and Connection Context

Connection context describes how the CP60-TEMP reaches Plaspy over the network. The choice of transport and whether the device is pointed to the Plaspy domain or the numeric address can affect firewall rules and how networks are configured for telemetry.

- The CP60-TEMP may be configured to use UDP or TCP on port 8888 based on device firmware and settings
- Devices can target the Plaspy domain d.plaspy.com or the numeric address 54.85.159.138
- Plaspy uses port 8888 for all devices which reduces per device endpoint configuration
- Ensure firewalls and network routing allow outbound UDP or TCP traffic to the Plaspy endpoint on port 8888
- Network reliability and cellular parameters influence how often telemetry is reported and whether retransmission behaviors are visible at the transport layer

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message timing, field availability, or the exact set of telemetry items a device sends
- Hardware revisions and optional sensor modules may alter available temperature or environmental data
- Some configuration options on the device determine whether transport uses UDP or TCP and which endpoint is used
- Always configure the device to report to the Plaspy endpoint to enable automatic protocol detection
- Verify device behavior after firmware updates as reporting intervals and alarm handling may change
- Cross check any device-side configuration settings against the official HunterPro documentation before deployment
- If telemetry or identification is missing, confirm device settings and whether the device firmware supports the expected telemetry set

## Why Protocol Understanding Matters

Having a clear, high level understanding of the CP60-TEMP communication protocol helps fleet operators and integrators ensure reliable setup, efficient troubleshooting, and consistent temperature monitoring across refrigerated assets.

- Speeds initial setup by clarifying which server and port the device should report to
- Helps diagnose connectivity and reporting issues when telemetry or temperature values are not arriving
- Improves operational visibility into how often the device will report and what data will be included
- Guides decisions about transport selection and network permissions for stable telemetry delivery
- Supports planning for firmware updates and compatibility testing before wide scale rollouts

## Why Use Plaspy with This Protocol

Using the HunterPro CP60-TEMP with Plaspy gives organizations a practical way to centralize location and temperature data for refrigerated vehicles and facilities. Plaspy receives the device telemetry and presents it alongside alerting, geofencing, and reporting tools so teams can monitor cold chain integrity and respond to excursions quickly.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions please verify information on the manufacturer website http://hunterpro.com.tw/ as protocol support and firmware behavior can change over time.
