---
slug: /gotop/g23d/protocol
id: g23d-protocol
sidebar_label: Protocol
title: GOTOP - G23D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP G23D GPS tracker compatibility with Plaspy and practical connection context
keywords:
  - GOTOP G23D protocol
  - GOTOP G23D GPS protocol
  - GOTOP G23D communication protocol
  - GOTOP G23D tracking protocol
  - GOTOP GPS tracker protocol
  - GOTOP G23D Plaspy compatibility
  - vehicle tracking protocol
  - fleet management protocol
  - CDMA GPS tracker protocol
  - G23D tracker integration with Plaspy
---

# GOTOP - G23D Protocol

This page describes the public protocol context for using the GOTOP G23D tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level and what to expect when integrating the G23D for location, status, and alarm reporting. The content is intended for technical users, integrators, and fleet managers who need an overview of the communication considerations without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact behavior can vary by G23D firmware version, hardware revision, and manufacturer implementation, so the guidance below describes practical, public facing context rather than firmware internals or packet formats.

## Protocol Overview

The communication protocol for the G23D defines how the tracker reports position, device identity, status signals, and alarm events to a backend service such as Plaspy. Through the protocol, the tracker sends location fixes, movement and ignition information, and event triggers that Plaspy consumes to provide mapping, alerts, and historical data.

- Enables periodic and event driven location reports from the device to a server
- Carries device identification so Plaspy can associate incoming data with the correct asset
- Transmits status signals such as ACC, power, overspeed, and tamper events for monitoring
- Provides a channel by which remote commands or configuration updates can be delivered when supported
- Supports both short heartbeat and richer position reports depending on device state and configuration

## How Plaspy Detects the Protocol

Plaspy receives incoming connections to a single shared endpoint and automatically determines the tracker protocol used by each device once it begins reporting. In most cases users do not manually select a protocol in Plaspy if the device is configured to send to the Plaspy endpoint.

- Plaspy listens on the shared domain and address for device reports
- When a G23D is pointed to the Plaspy endpoint the platform detects its protocol automatically
- You typically only need to configure the device to report to Plaspy to enable detection
- Plaspy associates incoming device identity information with a Plaspy device record
- Automatic detection reduces manual setup when deploying many devices from different vendors

## Transport and Connection Context

Connection and transport settings determine how the G23D opens a session to Plaspy and where the device sends its reports. The G23D can be configured to use either UDP or TCP on the Plaspy listening port depending on device support and network requirements.

- Plaspy server domain is d.plaspy.com for device reporting
- Plaspy server IP is 54.85.159.138 and the standard port for device reports is 8888
- The device may be configured using UDP or TCP on port 8888 depending on device capabilities
- All devices in Plaspy use the same port making bulk configuration simpler for large deployments
- Choose UDP or TCP on the tracker according to network reliability and the device documentation

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported events, or configuration commands; always verify firmware behavior
- Hardware revisions and accessory wiring may affect available inputs such as ACC detection and remote cut outputs
- Manufacturer side settings or regional firmware builds for CDMA devices can alter how the tracker behaves on specific networks
- Transport selection between UDP and TCP should match the tracker configuration and network environment
- Plaspy automatic detection helps, but proper device reporting address and transport configuration on the tracker are required
- Validate compatibility against the manufacturer documentation and any release notes for the G23D

## Why Protocol Understanding Matters

Understanding the public aspects of the G23D communication protocol helps ensure a reliable integration, faster troubleshooting, and predictable fleet operations in Plaspy. Awareness of what the device reports and how it connects reduces guesswork during deployments and maintenance.

- Ensures correct device configuration so reports reach d.plaspy.com or 54.85.159.138 on port 8888
- Helps diagnose why a device might not appear in Plaspy when reporting is misconfigured
- Supports sensible transport selection between UDP and TCP based on network behavior
- Clarifies which status signals and event types to expect from the tracker for alerting and automation
- Guides firmware update and lifecycle planning by highlighting differences between revisions

## Why Use Plaspy with This Protocol

Using the GOTOP G23D with Plaspy gives organizations practical visibility into vehicle location and operational status across a range of vehicle types. The G23D's flexible voltage range, compact form factor, and support for vehicle inputs make it suitable for mixed fleets, while Plaspy provides the backend to collect, normalize, and present that data for monitoring and reporting.

To learn more about Plaspy and how it works with devices like the GOTOP G23D, visit https://www.plaspy.com. For the latest device specific protocol details, firmware updates, and manufacturer guidance consult the GOTOP website at https://www.gotop.cc/ as protocol support and firmware behavior can change over time and should be validated with the manufacturer.
