---
slug: /thingsys/ts_v6h/protocol
id: ts_v6h-protocol
sidebar_label: Protocol
title: ThingSys - TS-V6H Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the ThingSys TS V6H tracker and how it communicates with Plaspy for real time vehicle tracking
keywords:
  - ThingSys TS V6H protocol
  - ThingSys TS V6H GPS protocol
  - TS V6H tracking protocol
  - ThingSys tracker protocol Plaspy
  - TS V6H GPRS SMS reporting
  - vehicle tracking protocol ThingSys
  - TS V6H telematics compatibility
  - TS V6H fleet management protocol
  - Plaspy device protocol compatibility
  - TS V6H anti theft tracking
---

# ThingSys - TS-V6H Protocol

This page describes the public protocol context for using the ThingSys TS-V6H tracker with Plaspy. It focuses on the communication and connection facts that matter when integrating the device into a Plaspy deployment, including how the TS-V6H reports position and telemetry via cellular networks and SMS fallbacks. The TS-V6H is a rugged vehicle tracker with a UBLOX GNSS receiver, built in backup battery, vibration and ignition sensing, and relay control features that are relevant to telemetry and alerting inside Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol for properly configured devices. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps to public, non sensitive protocol context while explaining how the TS-V6H typically communicates with Plaspy.

## Protocol Overview

The protocol governs how the TS-V6H communicates position, status, and event data to a remote server and how remote commands or SMS queries are handled. For integration with Plaspy, the protocol role is to reliably deliver GNSS fixes and sensor telemetry over the cellular link and to provide a fallback path by SMS when configured.

- Enable periodic and event driven reporting of GNSS location and device status for live tracking.
- Convey digital inputs and sensor events such as ACC ignition changes, vibration tamper alerts, and power loss notifications.
- Support fallback reporting and query responses via SMS when GPRS is unavailable.
- Provide remote command and control paths for authorized operations such as relay control or configuration updates.
- Allow the tracking platform to map incoming messages into live positions, alerts, and historical records without requiring custom hardware changes.

## How Plaspy Detects the Protocol

Plaspy receives device connections at a single shared endpoint and port and automatically determines the tracker protocol for devices that are configured to report to Plaspy. When a TS-V6H is pointed at the Plaspy endpoint, the platform will accept the incoming connection and associate messages with the appropriate device profile.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and carrier behavior.
- When a device is properly configured to send data to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will automatically detect the tracker protocol.
- In most cases a user does not need to select a protocol inside Plaspy manually if the tracker is correctly pointed to the Plaspy endpoint.

## Transport and Connection Context

Transport choices and DNS or IP targets determine how the TS-V6H reaches Plaspy but do not change the general responsibilities of the protocol. The TS-V6H typically reports over the cellular data channel with SMS as a fallback for queries or critical alerts.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may use UDP or TCP on port 8888 based on device settings and network conditions.
- All Plaspy supported devices use the same port to simplify deployment and firewall rules.
- GPRS is the usual transport for continuous reporting while SMS is commonly used for discrete queries or as a fallback.
- Reliable DNS configuration or the direct IP option helps ensure the tracker can reach Plaspy across different mobile operators.

## Protocol Compatibility Notes

- Firmware differences can change message content and reporting intervals, so verify the tracker firmware level when troubleshooting integration.
- Hardware revisions may introduce or alter sensor inputs and behavior for features such as vibration detection or relay control.
- Manufacturer configuration options determine whether the device uses TCP or UDP and whether it sends SMS fallbacks automatically.
- Network operator behavior can affect session persistence and whether TCP or UDP is more reliable in a given region.
- Confirm that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 to ensure messages reach Plaspy.
- Consult the official manufacturer documentation for firmware specific behaviors before making operational changes.

## Why Protocol Understanding Matters

Understanding the TS-V6H communication protocol helps ensure a smooth setup, accurate telemetry, and faster resolution when issues arise. Knowing what to check and what to expect from the device side reduces integration time and supports reliable fleet operations.

- Helps validate that the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Guides decisions between TCP and UDP for a given deployment and operator environment.
- Clarifies which sensor events and telemetry to expect in Plaspy for alerting and reporting rules.
- Speeds up troubleshooting when location updates, ACC events, or tamper alerts are not appearing.
- Informs planning for firmware upgrades and hardware replacements by highlighting compatibility risk factors.

## Why Use Plaspy with This Protocol

Using the TS-V6H with Plaspy provides a practical, scalable way to turn vehicle position and security telemetry into operational insight. The tracker supplies continuous GNSS reporting via GPRS with SMS fallback and vehicle centric inputs that Plaspy converts into live maps, geofence alerts, immobilization workflows, and historical reports useful to fleet, rental, and security operators.

To learn more about how Plaspy works with devices like the TS-V6H visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify device specific information and the latest firmware guidance with the manufacturer at https://www.thingsys.com/.
