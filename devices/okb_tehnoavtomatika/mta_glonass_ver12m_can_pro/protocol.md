---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/protocol
id: mta_glonass_ver12m_can_pro-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for MTA-Glonass ver.12M-CAN-PRO and how it communicates with Plaspy for fleet tracking compatibility
keywords:
  - OKB Tehnoavtomatika MTA Glonass protocol
  - MTA Glonass GPS protocol
  - MTA Glonass Plaspy compatibility
  - vehicle tracking protocol
  - fleet telemetry CAN bus
  - GNSS tracking device communication
  - GPRS data channel tracking
  - telemetry protocol overview
  - tracker protocol detection
  - remote diagnostics telemetry
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Protocol

This page provides a public protocol level overview for using the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) tracker with Plaspy. It focuses on how the device communicates in general terms, what role the reporting protocol plays in delivering position and telemetry to Plaspy, and what to check when integrating the device with a Plaspy deployment. The content is intentionally high level and avoids sensitive implementation specifics while describing the practical connection and compatibility context.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Note that exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific frames, firmware release notes, or configuration commands consult the manufacturer documentation and the latest firmware notes from OKB Tehnoavtomatika.

## Protocol Overview

The protocol used by the MTA-Glonass (ver.12M-CAN-PRO) governs how GNSS position, CAN bus telemetry, input states, and event logs are packaged and transmitted from the terminal to a server such as Plaspy. At a public level the protocol enables the device to identify itself, transmit measured data, and support basic remote control or configuration workflows where permitted by the terminal capabilities and carrier network.

- Enables periodic and event driven transmission of GNSS positions and telemetry to a remote server for live tracking and historical reporting.
- Carries CAN derived parameters and input readings so Plaspy can correlate vehicle state with location for diagnostics and fleet reports.
- Includes identifiers and session information that allow a receiving server to associate incoming messages with an installed device.
- Supports buffering of stored events during connectivity loss and forwarding of historical records once the link is restored.
- Works over standard cellular data channels and SMS where supported by the terminal to provide redundant reporting paths.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models using a single shared endpoint and port. When an MTA-Glonass terminal reports to Plaspy it is typically not necessary to manually select a protocol inside Plaspy if the device is configured to send data to the Plaspy endpoint. Automatic detection simplifies onboarding for fleet deployments that mix multiple tracker models.

- Plaspy listens on a common endpoint hostname and address which is d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same port which is 8888, so no per device port mapping is required.
- Plaspy automatically detects the tracker protocol based on the incoming connection and reported device identifiers.
- Users generally configure the tracker to report to the Plaspy endpoint and let Plaspy handle protocol selection.
- If a device is not reporting as expected verify device reporting parameters, network connectivity, and manufacturer configuration options before changing settings in Plaspy.

## Transport and Connection Context

The MTA-Glonass terminal supports multiple transport options for sending telemetry. Plaspy accepts device traffic over the shared Plaspy endpoint and port, and devices may be set up to use different transport modes depending on network conditions and configuration. Understanding the transport context helps ensure reliable connectivity and predictable data flow.

- The device may be configured to use UDP or TCP on port 8888 depending on device firmware and operator preference.
- Typical configuration points include pointing the terminal at d.plaspy.com or at the numeric server address 54.85.159.138.
- All devices in Plaspy connect using the same port so firewall and APN settings can be standardized across a fleet.
- Choose UDP for lower overhead reporting where supported, or TCP when a connection oriented transport is preferred by the deployment.
- Verify that the cellular APN and GPRS settings on the terminal allow data sessions to the Plaspy endpoint.

## Protocol Compatibility Notes

- Protocol behavior can differ across firmware revisions; confirm the terminal firmware level when troubleshooting unexpected behavior.
- Hardware revisions and optional I O modules may expose different sets of telemetry and events not present on all units.
- Transport selection between UDP and TCP affects reliability and retry behavior but does not change the high level telemetry the device can send.
- SMS as a fallback reporting channel may be supported for configuration or alerts, but payloads and capabilities vary by model and firmware.
- Manufacturer configuration tools or provisioning services may be required to set the reporting host to d.plaspy.com or the numeric server address.
- Always validate compatibility and supported features against the device documentation from OKB Tehnoavtomatika.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps ensure the device is configured correctly for Plaspy, aids in troubleshooting connectivity or data discrepancies, and supports predictable long term operations for a vehicle fleet. Knowing the general protocol roles reduces integration time and helps teams make informed choices about configuration and monitoring.

- Helps diagnose why a device is not appearing in Plaspy or why specific telemetry fields are missing.
- Guides configuration of APN, reporting intervals, and transport mode to match operational needs.
- Supports planning for event buffering, offline storage, and how historical records are reconciled after connectivity is restored.
- Clarifies which CAN bus parameters and external inputs are expected to appear in Plaspy reports.
- Reduces time spent on trial and error by aligning manufacturer configuration with the Plaspy endpoint expectations.

## Why Use Plaspy with This Protocol

Using the MTA-Glonass (ver.12M-CAN-PRO) with Plaspy provides fleet operators a dependable path to capture GNSS position, CAN derived metrics, and event driven telemetry in a unified platform. The device capability set including CAN integration, pulse and analog inputs, and event buffering complements Plaspy features for real time monitoring, alerts, and historical reporting without needing per device port or endpoint changes.

Plaspy accepts connections at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the tracker protocol so onboarding is streamlined for mixed fleets. To learn more about Plaspy and how it can receive telemetry from the MTA-Glonass terminal visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify current information at the OKB Tehnoavtomatika website http://www.okb-ta.ru/
