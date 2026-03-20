---
slug: /flextrack/lommy_pro_t/protocol
id: lommy_pro_t-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Pro T Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Flextrack Lommy Pro T GPS and temperature tracker integration with Plaspy for reliable cold chain monitoring
keywords:
  - Flextrack Lommy Pro T protocol
  - Lommy Pro T GPS tracker
  - Lommy Pro T communication
  - Lommy Pro T Plaspy compatibility
  - temperature monitoring tracker protocol
  - cold chain GPS telemetry
  - Plaspy device integration
  - GPS and temperature telemetry
  - fleet tracking Lommy Pro T
  - Lommy Pro T integration guide
---

# Flextrack - Lommy Pro T Protocol

This page summarizes the public protocol context for using the Flextrack Lommy Pro T device with Plaspy. It focuses on how the tracker communicates usable telemetry and location information to Plaspy without exposing private implementation details. The goal is to help fleet and cold chain operators understand the role of the device protocol in successful integration and daily operations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and feature availability can vary by device firmware, hardware revision, and manufacturer implementation, so treat the material here as high level context that complements the official Flextrack documentation.

## Protocol Overview

The Lommy Pro T reporting protocol is the mechanism the device uses to deliver GPS, GSM based location estimates, temperature telemetry, and event alarms to a remote server. In a Plaspy deployment the protocol ensures that periodic updates, alarms, and status information arrive in a consistent way that Plaspy can present and archive.

- Transports temperature sensor readings and environmental logs alongside location data for cold chain visibility.
- Delivers event driven alarms such as temperature excursions and power state changes to Plaspy for immediate notification.
- Identifies the device and its reporting session so Plaspy can attribute incoming telemetry to the correct asset record.
- Enables timestamped historical logging to support regulatory evidence and forensic review inside Plaspy.
- Supports remote configuration and management flows when the device and manufacturer firmware expose those functions to the platform.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a single shared endpoint and port and applies automatic protocol detection so most devices do not require a manual protocol selection inside Plaspy. Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection to succeed.

- Plaspy listens on the shared domain d.plaspy.com and on the corresponding public IP 54.85.159.138.
- All devices supported by Plaspy use the same port 8888 for reporting, which simplifies deployment and firewall configuration.
- Plaspy automatically detects the tracker protocol once the device connects and begins reporting to the Plaspy endpoint.
- In most cases you do not need to choose a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint on the correct transport and port.
- Ensure the device ID and reporting interval settings in the tracker are set according to Flextrack guidance so Plaspy can match incoming messages to the right asset.

## Transport and Connection Context

Connection details are a critical part of successful device integration. Lommy Pro T devices may be configured to use either UDP or TCP depending on device support and the chosen setup. Plaspy supports both transports on the same port to accommodate different deployment preferences and network environments.

- Devices may be configured to report to the domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy accepts device connections on port 8888 and all Plaspy supported devices use that same port.
- The Lommy Pro T can be set to use UDP or TCP on port 8888 depending on firmware and configuration choices.
- Choosing UDP can reduce reporting overhead and is common for frequent small telemetry updates; TCP can be used where reliable delivery per connection is preferred.
- Network policies and carrier NAT behavior can influence the preferred transport and should be considered during testing.

## Protocol Compatibility Notes

- Firmware versions can add or change telemetry fields, reporting intervals, and alarm behavior; always record the firmware used during validation.
- Hardware revisions may affect supported sensors or ranges; confirm the Lommy Pro T revision against Flextrack publications.
- Manufacturer configuration tools or SIM based configuration services can alter how the device reports and which transport is used.
- Transport selection matters for reliability and firewall traversal; validate UDP and TCP behavior in your network.
- Plaspy auto detection reduces manual setup but relies on correct destination settings on the tracker.
- For mission critical cold chain use cases, run a staged validation and sample reporting period before fleet wide rollout.
- Confirm any remote command or configuration capabilities with Flextrack as those capabilities are firmware dependent.

## Why Protocol Understanding Matters

Understanding how the Lommy Pro T communicates helps administrators avoid common setup mistakes, speed troubleshooting, and ensure long term data integrity and compliance when using Plaspy.

- Ensures the tracker is configured to send to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive data.
- Helps diagnose connectivity issues by checking transport choice, SIM connectivity, and carrier conditions.
- Clarifies which telemetry and alarm types to expect for regulatory reporting and automated workflows.
- Guides testing strategies so temperature alarms, geofences, and logging behave as required in operational conditions.
- Supports change control when updating firmware or rolling out hardware revisions across a fleet.

## Why Use Plaspy with This Protocol

Pairing the Lommy Pro T with Plaspy gives operations teams centralized access to both precise temperature telemetry and location context. This combined visibility helps teams act quickly on temperature excursions, maintain certified logs for audits, and locate assets in transit or storage. Plaspy’s platform is designed to accept telemetry from compatible trackers and present it alongside maps, event history, and alarm workflows to support cold chain operators and fleet managers.

To learn more about Plaspy and how it works with compatible trackers such as the Flextrack Lommy Pro T visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions consult the manufacturer documentation at https://flextrack.dk since protocol support and firmware behavior may change over time.
