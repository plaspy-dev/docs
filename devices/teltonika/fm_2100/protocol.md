---
slug: /teltonika/fm_2100/protocol
id: fm_2100-protocol
sidebar_label: Protocol
title: Teltonika - FM 2100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Teltonika FM 2100 with Plaspy servers and fleet management platforms
keywords:
  - Teltonika FM 2100 protocol
  - Teltonika FM 2100 GPS
  - FM 2100 tracking protocol
  - Teltonika protocol Plaspy
  - FM 2100 compatibility
  - vehicle tracking FM 2100
  - fleet management Teltonika
  - GPS tracker FM 2100
  - communication protocol FM 2100
  - Plaspy GPS compatibility
---

# Teltonika - FM 2100 Protocol

This page describes the public protocol context for using the Teltonika FM 2100 tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in general terms and what to consider when configuring reporting to the platform. The goal is to clarify the connection and reporting behavior without exposing sensitive implementation details.

The FM 2100 is a compact, GSM based tracker suited for vehicle and asset tracking. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior may differ slightly in the field.

## Protocol Overview

The FM 2100 reporting protocol defines how the tracker sends location, status, and input/output information to a remote server. It ensures the device can identify itself, transmit usable telemetry, and allow remote monitoring and basic control where available.

- Enables periodic or event driven transmission of GPS coordinates and device status to a remote server
- Carries identifying information so Plaspy can associate incoming data with the correct asset
- Transmits auxiliary inputs and outputs state so external sensors and controls can be monitored
- Supports both GPRS data and SMS based fallback for delivery of tracking updates
- Works with standard GSM networks and is typically configurable for transport and destination settings

## How Plaspy Detects the Protocol

Plaspy receives data from devices using a shared endpoint and automatically determines the tracker protocol from the incoming connection and payload characteristics. In most cases, when the FM 2100 is configured to report to Plaspy, no manual protocol selection is required in the platform.

- Plaspy listens for device connections on a common port used by all supported devices
- The Plaspy server endpoint for device reporting is d.plaspy.com and the public server IP is 54.85.159.138
- The platform automatically detects the tracker protocol from the data the device sends
- Users typically only need to point the device to the Plaspy endpoint and choose the transport type
- Proper device configuration on the tracker side ensures Plaspy can identify and parse incoming reports

## Transport and Connection Context

The FM 2100 can be set to use either UDP or TCP transport depending on configuration and network conditions. For integration with Plaspy, the device should be pointed to the Plaspy reporting endpoint and use the shared port used by the service.

- The device may be configured to connect to d.plaspy.com or directly to 54.85.159.138
- Plaspy accepts connections on port 8888 and all devices in Plaspy use the same port
- The FM 2100 can use UDP or TCP on port 8888 depending on device settings and network preference
- Choose transport according to reliability and network provider characteristics for your deployment
- Ensure APN and GPRS settings are correct on the device for reliable data delivery

## Protocol Compatibility Notes

- Firmware revisions can change message content and available fields; verify the firmware running on your FM 2100
- Hardware revisions and regional variants may affect available interfaces or reporting options
- Manufacturer default settings may use different transport or destination settings; confirm device configuration before deployment
- SMS fallback is available on the FM 2100 but behavior depends on device setup and provider support
- When in doubt, validate expected behavior against official Teltonika documentation and release notes
- Plaspy’s automatic detection reduces configuration steps, but correct device endpoint and transport are still required

## Why Protocol Understanding Matters

Understanding the FM 2100 communication protocol helps ensure a smooth integration with Plaspy and reduces time spent troubleshooting connectivity or data interpretation issues.

- Speeds up initial setup by clarifying which connection and transport options the device should use
- Helps troubleshooting by narrowing whether issues are network, configuration, or device firmware related
- Improves reliability by informing decisions about transport selection and reporting intervals
- Supports long term maintenance when firmware updates or device swaps occur
- Enables informed configuration of inputs and outputs to match monitoring and control needs

## Why Use Plaspy with This Protocol

Using the Teltonika FM 2100 with Plaspy gives organizations a practical way to collect location, status, and basic I O telemetry from vehicles and remote assets. The FM 2100’s compact design, GSM connectivity options, and auxiliary I O make it suitable for a range of tracking scenarios, while Plaspy provides a centralized endpoint and automatic protocol detection to simplify integration.

To learn more about how Plaspy works with GPS trackers and to review platform capabilities visit https://www.plaspy.com. For device specific protocol details, firmware notes, and the latest manufacturer guidance verify information on the Teltonika website at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
