---
slug: /xirgo/xt_2000/protocol
id: xt_2000-protocol
sidebar_label: Protocol
title: Xirgo - XT-2000 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Xirgo XT-2000 OBD II GPS tracker and how it communicates with Plaspy
keywords:
  - Xirgo XT-2000 protocol
  - Xirgo XT-2000 GPS
  - XT-2000 Plaspy compatibility
  - XT-2000 OBD II tracker
  - Xirgo tracking protocol
  - vehicle tracking Plaspy
  - fleet management XT-2000
  - GPS tracker protocol
  - telematics XT-2000
  - OBD II telematics
---

# Xirgo - XT-2000 Protocol

This page covers the public protocol context for using the Xirgo XT-2000 OBD II modem with Plaspy. It explains how the device communicates with Plaspy at a high level, what connection settings are used publicly by Plaspy, and what aspects of the tracker reporting behavior are relevant when integrating the XT-2000 into a fleet monitoring workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the XT-2000 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol context and practical compatibility notes rather than firmware internals.

## Protocol Overview

The XT-2000 uses telematics reporting over cellular networks to deliver GNSS location plus vehicle parameters read from the OBD II interface. The device reports position, motion events, and vehicle diagnostic data so a backend system like Plaspy can transform those reports into location, status, and fault insights.

- Enables the XT-2000 to send GNSS location and OBD II parameters to a remote server for monitoring
- Carries device identity and session information so Plaspy can associate reports with the correct vehicle record
- Delivers event updates such as ignition, speed, and accelerometer motion for real time visibility
- Supports transport modes commonly used by telematics devices so the tracker can reach the Plaspy endpoint over cellular
- Allows the platform to ingest diagnostic fault codes and vehicle telemetry exposed via the OBD port

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port and automatically determines the correct tracker protocol for incoming connections. If the XT-2000 is configured to report to the Plaspy endpoint, the platform will typically identify the device protocol without requiring manual protocol selection in most onboarding scenarios.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- The device may be configured using UDP or TCP on port 8888 and Plaspy accepts both transports
- When the XT-2000 reports to the Plaspy endpoint, the platform uses the incoming connection to match and register the device
- Users generally do not need to select a protocol inside Plaspy if the device is correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888

## Transport and Connection Context

Connection setup for the XT-2000 depends on its network settings and the firmware feature set. The device is designed to operate over cellular links and supports common transport options; understanding the connection context helps ensure reliable data flow to Plaspy.

- The XT-2000 may use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed at the Plaspy domain d.plaspy.com or the IP address 54.85.159.138 for connectivity
- All devices in Plaspy report to the same port which simplifies backend routing and onboarding
- The XT-2000 supports OBD powered operation via its J1962 connector and sends reports over the cellular interface
- The modem family also supports auxiliary transfer and firmware update transports but those are separate from core reporting to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can alter message timing, content, and optional fields; confirm firmware details when validating compatibility
- Hardware revisions or regional variants of the XT-2000 may enable or disable specific OBD parameters or sensors
- Some features reported by the device, such as DTCs or VIN, depend on vehicle OBD support and the selected OBD II protocol
- Transport preference between UDP and TCP can affect delivery behavior; choose the transport consistent with the device configuration and network environment
- Network operator settings, APN, and cellular availability can influence device reachability to d.plaspy.com or 54.85.159.138
- Always validate device server configuration so the unit points at the Plaspy endpoint on port 8888

## Why Protocol Understanding Matters

A practical understanding of the XT-2000 communication protocol helps with onboarding, troubleshooting connectivity, and ensuring long term reliability when the device reports into Plaspy. Knowing which data the tracker is capable of sending and how it reaches the platform reduces setup time and operational surprises.

- Helps confirm that the device is sending the expected GNSS and OBD II parameters to Plaspy
- Makes it easier to diagnose connectivity issues related to TCP versus UDP or misconfigured server addresses
- Clarifies which vehicle signals and diagnostic codes will be available in the platform for reporting and alerts
- Informs firmware maintenance planning so new firmware that changes reporting format can be validated
- Supports better integration planning for fleet rules, geofences, and driver behavior monitoring that rely on consistent telemetry

## Why Use Plaspy with This Protocol

Using the Xirgo XT-2000 with Plaspy gives fleet operators a streamlined way to collect location, speed, and vehicle diagnostics from an OBD II connected modem. Plaspy’s shared endpoint model and automatic protocol detection reduce configuration complexity, while the platform ingests the device reports to provide maps, events, and diagnostics in a single view.

If you want to learn more about how Plaspy works with devices like the XT-2000, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; verify the most current device specific protocol and firmware information with the manufacturer at https://xirgo.com/.
