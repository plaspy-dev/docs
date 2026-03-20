---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/protocol
id: mta_glonass_ver12m_can_fms-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the MTA-Glonass ver.12M CAN FMS and how it communicates with Plaspy for fleet tracking
keywords:
  - OKB Tehnoavtomatika MTA-Glonass protocol
  - MTA-Glonass GPS protocol
  - MTA-Glonass CAN FMS compatibility
  - Plaspy device protocol
  - Plaspy tracker integration
  - vehicle tracking protocol
  - fleet telematics protocol
  - GNSS tracker protocol
  - CAN FMS telemetry
  - GPS tracker communication
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Protocol

This page provides a public, non-sensitive overview of the communication context for the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) when used with Plaspy. It covers how the tracker reports GNSS positions and vehicle telemetry to Plaspy and what role the device reporting protocol plays in that data flow. The focus is on practical protocol context useful for deployment, configuration, and troubleshooting rather than on firmware internals or proprietary packet formats.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy. Exact protocol behavior and available telemetry can vary with firmware version, hardware revision, and manufacturer implementation, so configuration and feature availability for the MTA-Glonass (ver.12M-CAN FMS) may differ across units or firmware builds.

## Protocol Overview

The device protocol defines how the MTA-Glonass (ver.12M-CAN FMS) communicates location, CAN FMS telemetry, sensor inputs, and event records to a remote server. For integration with Plaspy the protocol's public aspects determine what telemetry fields are available, how frequently reports are sent, and how events are identified for downstream processing.

- Enables the tracker to report GNSS coordinates and movement events that Plaspy displays on maps and reports.
- Carries vehicle bus data from the CAN FMS interface such as engine parameters and diagnostics that Plaspy can map into telemetry fields.
- Transports fuel sensor and auxiliary input states so Plaspy can generate fuel analytics and alerts.
- Provides event and timestamp data that supports historical playback, compliance logs, and audit trails in Plaspy.
- Works over standard mobile data or SMS channels to deliver real time and fallback telemetry to the Plaspy platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a common endpoint and uses automated detection to identify the device protocol so users do not normally need to select a protocol manually. When an appropriately configured MTA-Glonass reports to the Plaspy endpoint, Plaspy will associate the incoming stream with the correct supported device behavior and present telemetry accordingly.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The port used by Plaspy for device reporting is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol setting in the platform when the device is configured to report to Plaspy.
- Correct device configuration to point to the Plaspy endpoint and the chosen transport is the most common prerequisite for successful automatic detection.
- If a device is not being detected, checking transport settings, APN configuration, and manufacturer documentation for device reporting parameters is the recommended first step.

## Transport and Connection Context

The MTA-Glonass (ver.12M-CAN FMS) can deliver telemetry using common mobile data transports and flexible addressing. When connecting to Plaspy, the device may be configured to use either UDP or TCP on the network port that Plaspy listens on, and it may use the Plaspy domain name or the Plaspy server IP as its reporting target.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can point to d.plaspy.com or to the Plaspy server IP 54.85.159.138 as their reporting endpoint.
- All devices in Plaspy use the same port for reporting, simplifying server side connectivity and device setup.
- Mobile network configuration such as APN and data channel behavior affect how the tracker establishes connections to Plaspy.
- SMS or other fallback channels are commonly used by the tracker family for configuration or as a secondary delivery method for critical events in low data coverage scenarios.

## Protocol Compatibility Notes

- Firmware versions can change available telemetry fields, reporting intervals, and event behavior; verify which firmware revision is installed on each unit.
- Hardware revisions or optional interfaces (for example different CAN FMS wiring or optional sensors) can affect what data the device exposes to Plaspy.
- Transport selection (UDP versus TCP) can impact delivery characteristics and should be chosen based on network conditions and carrier behavior.
- Manufacturer-side configuration or provisioning settings may be required to enable reporting to third party platforms such as Plaspy.
- Some features such as CAN FMS parameter availability or optional sensor inputs depend on vehicle wiring and installed modules.
- Validate compatibility and any device-specific configuration parameters against official manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

A clear understanding of the device reporting protocol helps ensure reliable integration, accurate telemetry mapping, and simpler troubleshooting when using the MTA-Glonass (ver.12M-CAN FMS) with Plaspy. Knowing which telemetry the tracker sends and how it connects to Plaspy reduces deployment time and supports consistent operational behavior.

- Helps confirm that CAN FMS parameters and fuel sensor inputs will be available in Plaspy reports.
- Speeds up troubleshooting when telemetry is missing or when events differ from expectations.
- Guides correct transport and APN configuration for reliable data delivery to Plaspy.
- Informs firmware upgrade decisions and change management for fleetwide deployments.
- Supports accurate mapping of device events to Plaspy alerting and reporting workflows.

## Why Use Plaspy with This Protocol

Using the MTA-Glonass (ver.12M-CAN FMS) with Plaspy provides a practical path to combine GNSS positioning, vehicle bus telemetry, and fuel sensing into a single operational view. Organizations that need vehicle-centric telemetry, fuel analytics, and anti-theft or remote control workflows can leverage the device's CAN FMS and sensor inputs together with Plaspy's platform capabilities to improve visibility and operational oversight.

To learn more about Plaspy and how it handles device connectivity and telemetry, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and installation guidance verify information on the official manufacturer site http://www.okb-ta.ru/ since protocol support, firmware behavior, and device implementation details can change over time.
