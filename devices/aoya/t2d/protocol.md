---
slug: /aoya/t2d/protocol
id: t2d-protocol
sidebar_label: Protocol
title: AoYa - T2D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the AoYa T2D GPS tracker with Plaspy for reliable vehicle tracking
keywords:
  - AoYa T2D protocol
  - AoYa T2D GPS protocol
  - AoYa T2D tracking protocol
  - AoYa GPS tracker compatibility
  - T2D communication protocol
  - vehicle tracking protocol Plaspy
  - fleet management AoYa T2D
  - GPS tracker Plaspy integration
  - T2D device protocol
  - AoYa T2D connectivity
---

# AoYa - T2D Protocol

This page describes the public protocol context for using the AoYa T2D GPS tracker with Plaspy. It focuses on how the device communicates in general terms, how Plaspy receives device reports, and what to consider during setup and troubleshooting. The content is intended to be informative and non sensitive while reflecting the T2D hardware and capabilities described by the manufacturer.

The AoYa T2D is a compact 2G GSM/GPRS tracker designed for automotive use with GPS LBS and AGPS location modes, a wide input voltage range, and an emergency battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device settings against the official AoYa documentation when necessary.

## Protocol Overview

The T2D reporting protocol defines how the tracker sends location and status information to a server and how remote commands or configuration can be applied when supported by the device. For integration with Plaspy this means the tracker must be configured to report to the Plaspy endpoint and use one of the supported transports.

- Enables periodic and event driven position reports such as GPS and assisted location data
- Transmits basic telemetry and status useful for fleet monitoring and security workflows
- Allows the device to identify itself so Plaspy can correlate incoming messages to the correct unit
- Supports remote configuration and updates when the tracker firmware exposes those features
- Works over standard mobile data connectivity provided by the device GSM GPRS subsystem

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared public endpoint and uses the content of incoming reports along with connection metadata to determine the tracker protocol automatically. In most cases you do not need to select a protocol manually in Plaspy if the T2D is configured to send data to the Plaspy server.

- Plaspy uses the endpoint at d.plaspy.com for tracker reporting
- The public Plaspy server IP is 54.85.159.138 and Plaspy listens on port 8888
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support
- All devices in Plaspy use the same port which simplifies device configuration
- When a properly configured T2D reports to Plaspy the platform will automatically detect the tracker protocol
- Users typically only need to ensure the device reports to the Plaspy endpoint and that APN and SIM settings are correct

## Transport and Connection Context

Connection context covers how the tracker reaches the Plaspy server on the public internet and which transport options are commonly used. The T2D supports GSM GPRS data and can send reports over IP using the tracker transport mode it implements.

- The T2D may be configured to report to d.plaspy.com or directly to 54.85.159.138
- Plaspy accepts both UDP and TCP on port 8888 so configure the T2D to match the transport that its firmware supports
- Using the same port across devices reduces configuration mistakes and speeds up deployment
- Ensure mobile network APN settings are valid and that the SIM has data enabled for GPRS communications
- Network coverage and 2G availability can affect reporting frequency and reliability

## Protocol Compatibility Notes

- Firmware differences across T2D units can change available message types and configurable options
- Hardware revisions or regional variants of the T2D may behave differently in reporting cadence or supported transports
- Manufacturer side settings and default APN values vary; verify SIM and network settings before troubleshooting protocol issues
- Choosing TCP versus UDP can affect delivery guarantees and should match what the device firmware expects
- Plaspy automatically detects the protocol but successful detection depends on the device being correctly pointed at the Plaspy endpoint and using a supported transport
- Always validate compatibility against the official manufacturer documentation and any firmware release notes

## Why Protocol Understanding Matters

Understanding the T2D communication protocol helps ensure correct setup, faster troubleshooting, and reliable long term operation when using Plaspy. Clear knowledge of what the device sends and how Plaspy expects to receive it reduces deployment friction and improves data quality.

- Confirms the device is reporting to the correct Plaspy endpoint and transport
- Helps diagnose missing position reports or inconsistent telemetry
- Improves configuration of device reporting intervals and event triggers
- Guides firmware or hardware revision checks when behavior differs across units
- Supports planning for network constraints such as 2G coverage limitations

## Why Use Plaspy with This Protocol

Using the AoYa T2D with Plaspy provides a straightforward way to capture vehicle location and status data within a managed fleet platform. Plaspy’s shared endpoint approach and automatic protocol detection simplify initial setup for many common tracker models, letting organizations focus on monitoring and operations rather than low level integration details.

To learn more about Plaspy and how it works with devices like the AoYa T2D, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware documentation please verify information with the manufacturer at http://www.aoyagps.com/ as protocol support and firmware behavior can change over time.
