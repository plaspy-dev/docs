---
slug: /thingsys/ts_g17hs/protocol
id: ts_g17hs-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17Hs Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the ThingSys TS-G17Hs tracker with Plaspy for reliable vehicle telemetry and tracking
keywords:
  - ThingSys TS-G17Hs protocol
  - TS-G17Hs GPS protocol
  - ThingSys GPS tracker protocol
  - TS-G17Hs Plaspy compatibility
  - Plaspy device integration
  - vehicle tracking TS-G17Hs
  - TS-G17Hs GT06 protocol
  - TS-G17Hs CRX3 protocol
  - TS-G17Hs tracking protocol
  - ThingSys vehicle tracker
---

# ThingSys - TS-G17Hs Protocol

This page describes the public protocol context for using the ThingSys TS-G17Hs tracker with Plaspy. It explains how the tracker reports location and vehicle telemetry in general terms, how Plaspy receives those reports, and what aspects of the communication are relevant when deploying the device with Plaspy for fleet or anti theft use.

The TS-G17Hs is a compact 4G LTE Cat 1 tracker built around the SIMCOM 7670SA module with 2G fallback, blind area buffering, ignition and SOS inputs, and relay control capability. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration. For device specific protocol details and the latest firmware behavior consult the official ThingSys documentation.

## Protocol Overview

The protocol is the set of messages the TS-G17Hs uses to report GNSS position, ignition state, alarms, and buffered records to a remote platform such as Plaspy. In practical terms the protocol determines how the device identifies itself, how telemetry fields are encoded, and how events like SOS or blind-area uploads are conveyed to the server so they can be rendered on Plaspy dashboards.

- Enables regular position and telemetry reporting from the TS-G17Hs to a remote Plaspy endpoint for real time tracking.
- Conveys vehicle signals such as ACC ignition status, SOS presses, motion/g-sensor events, and relay state so Plaspy can surface alerts and telemetry.
- Supports blind-area buffering so stored messages are uploaded after coverage is restored and events are preserved in Plaspy history.
- The TS-G17Hs commonly supports GT06 and CRX3 reporting formats and can be switched to other manufacturer supported modes via SMS where required.
- The protocol choice and device configuration determine whether the tracker reports over UDP or TCP and how the server recognizes the incoming data.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a single shared endpoint and port and automatically detects the tracker protocol used by the incoming device. When a TS-G17Hs is configured to report to Plaspy, the platform typically recognizes the message pattern and assigns the device to the proper parser without requiring manual protocol selection.

- Plaspy accepts tracker connections at d.plaspy.com and at the public server address 54.85.159.138 using the common port 8888.
- Devices may be configured to use either UDP or TCP on port 8888 to reach Plaspy depending on device support and configuration.
- All devices on Plaspy use the same port, simplifying device configuration and onboarding.
- Because Plaspy auto detects protocol, users normally do not need to choose a protocol inside Plaspy if the device is correctly pointed to the Plaspy endpoint.
- If a device is reporting in an alternate format provided by the manufacturer, ensure the tracker is switched to the expected reporting mode before testing connectivity.

## Transport and Connection Context

Transport context covers how the TS-G17Hs connects to Plaspy rather than the internal message layout. The TS-G17Hs offers flexible transport options and can be pointed to a domain name or an IP address to deliver telemetry to Plaspy.

- The device may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- TS-G17Hs reporting can target the Plaspy domain d.plaspy.com or the server IP address 54.85.159.138 depending on installation preferences.
- Using the shared Plaspy port 8888 across devices reduces configuration differences when deploying mixed fleets.
- Network settings such as APN and GPRS connectivity must be correct for cellular reporting to reach Plaspy.
- SMS-based commands or fallback reporting are supported by the device for low data or emergency scenarios; these operate separately from the GPRS transport to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions may change how certain messages are formatted or which fields are included; validate compatibility against the tracker firmware level in use.
- Hardware revisions and optional modules (for example an external relay or microphone) can affect which telemetry fields the device reports.
- The TS-G17Hs supports common tracking modes such as GT06 and CRX3 and can be switched via SMS to other modes where the manufacturer supports them.
- Transport selection (UDP vs TCP) can affect message delivery characteristics; choose the transport that matches the device configuration and network environment.
- Always confirm the tracker’s configured reporting mode and server target before attempting to register or troubleshoot the device in Plaspy.
- Manufacturer-side variations or regional firmware builds can introduce protocol differences; check ThingSys documentation for firmware specific notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth initial setup, accurate interpretation of telemetry by Plaspy, and reliable long term operation. Awareness of how the TS-G17Hs reports events and buffered records reduces integration friction and speeds troubleshooting when telemetry does not appear as expected.

- Ensures the device is configured to report to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 using the correct transport.
- Helps diagnose why a device might not appear in Plaspy when reports use an unexpected protocol or firmware variant.
- Clarifies how ignition, SOS, and blind-area messages are expected to appear in Plaspy so alerts and rules can be configured correctly.
- Informs decisions about transport selection, SMS fallback, and buffer handling for deployments with intermittent coverage.
- Supports orderly firmware and configuration updates by highlighting which protocol changes could affect Plaspy ingestion.

## Why Use Plaspy with This Protocol

Using the TS-G17Hs with Plaspy provides organizations a practical way to collect GNSS position, ignition-aware telemetry, SOS alerts, and buffered blind-area history into a single fleet management view. The TS-G17Hs hardware features such as wide voltage range, backup battery, and motion detection pair well with Plaspy’s automatic protocol detection and shared endpoint model to reduce per-device setup complexity for mixed fleets.

Plaspy’s single endpoint approach simplifies onboarding because devices can be pointed to d.plaspy.com or 54.85.159.138 on port 8888 and the platform will detect the tracker protocol automatically. To learn more about Plaspy and how it can be used with the TS-G17Hs, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance please verify information on the official ThingSys website at https://www.thingsys.com/
