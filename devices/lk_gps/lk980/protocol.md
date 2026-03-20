---
slug: /lk_gps/lk980/protocol
id: lk980-protocol
sidebar_label: Protocol
title: LK-GPS - LK980 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the LK GPS LK980 and how it communicates with Plaspy for device integration and reliable tracking
keywords:
  - LK GPS LK980 protocol
  - LK980 GPS tracker protocol
  - LK GPS LK980 communication
  - LK980 tracking protocol
  - LK980 Plaspy compatibility
  - LK GPS tracker protocol guide
  - LK980 4G tracker protocol
  - Plaspy device protocol
  - Vehicle tracking LK980
  - Fleet tracking LK980
---

# LK-GPS - LK980 Protocol

This page covers the public protocol context for using the LK-GPS LK980 tracker with Plaspy. It explains how the device communicates at a high level, what connection settings are commonly used to point the tracker to Plaspy, and which aspects of the reporting lifecycle are relevant to successful device integration. The intent is to clarify public, non sensitive protocol information that helps with setup and troubleshooting while leaving firmware internal details to the manufacturer.

The LK980 is a compact 4G car tracker with built in GPS and GSM antennas and features such as low battery alarm, vibration alarm, removal alarm, historical route tracking, and overspeed alerts. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can still vary by firmware version, hardware revision, and manufacturer implementation, so device behavior should be validated against current manufacturer guidance.

## Protocol Overview

The communication protocol for the LK980 defines how the device identifies itself, reports position and status, and forwards alarms and telemetry to a remote server like Plaspy. In general terms, the protocol bridges the device hardware events and the cloud platform so position, battery state, and alarm conditions arrive as usable data for monitoring and reporting.

- Enables the tracker to report GPS location and movement events to a remote server
- Carries device state information such as battery level and alarm flags for Plaspy to interpret
- Allows the server to receive historical route data and periodic status updates from the device
- Supports real time updates when the device has cellular connectivity for live tracking
- Serves as the foundation for platform features like alerts, geofencing reports, and route playback

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and uses that input to determine how to interpret incoming device data. For users this typically means minimal manual configuration inside Plaspy is required if the tracker is correctly pointed to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138 for direct host addressing
- Plaspy listens on port 8888 and all devices in Plaspy use the same port
- Devices reporting to Plaspy may use either UDP or TCP on port 8888 depending on device support and configuration
- Plaspy automatically detects the tracker protocol so manual protocol selection is usually unnecessary when the device is properly configured
- If a device differs in behavior due to firmware or configuration, detection may require checking the device reporting settings and firmware version

## Transport and Connection Context

Connection and transport choices affect how the LK980 reaches Plaspy but do not change the fact that data is delivered to the same Plaspy endpoint. The device may be set up to send its telemetry over either UDP or TCP to the Plaspy listener on port 8888.

- The device may be configured using UDP or TCP on port 8888
- Devices can be pointed at the Plaspy DNS name d.plaspy.com or at the numeric host 54.85.159.138
- Plaspy uses the same port for all supported devices which simplifies configuration across a mixed fleet
- Transport selection (UDP vs TCP) can affect delivery guarantees and behavior when cellular connectivity is intermittent
- Network level items such as APN, SIM data plan, and carrier restrictions are relevant to successful connectivity but are managed outside the protocol itself

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional telemetry that the device sends
- Hardware revisions or optional accessories may add or remove telemetry sources such as additional sensors
- Manufacturer configuration options can alter transport selection and server addressing formats
- Some features described by the manufacturer such as street view or multi platform query are platform features that depend on correct reporting and platform parsing
- Validate device compatibility with Plaspy by ensuring the device points to d.plaspy.com or 54.85.159.138 on port 8888 and that it uses a supported transport
- Always review the device configuration for APN and network requirements when integrating at scale

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure reliable reporting, faster troubleshooting, and predictable long term operation when using Plaspy. Knowing what the device is expected to send and how the platform receives it reduces integration friction and improves operational confidence.

- Speeds up initial setup by confirming the correct server address and transport type
- Helps isolate connectivity issues versus interpretation issues in Plaspy
- Makes it easier to explain data gaps or unusual telemetry to the device manufacturer
- Supports decisions about transport and power settings that affect battery life and reporting cadence
- Enables controlled rollouts and validation when updating firmware or deploying across a fleet

## Why Use Plaspy with This Protocol

Using the LK-GPS LK980 with Plaspy provides a practical path to real time visibility, alarm handling, and historical route playback without per device protocol selection. Plaspy's shared endpoint and automatic protocol detection reduce manual steps during setup and let organizations focus on operational workflows rather than low level parsing details.

If you want to learn more about how Plaspy can manage LK980 devices and other trackers, please visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and implementation information verify the manufacturer's documentation at https://www.lk-gps.com since device behavior and protocol support can change over time.
