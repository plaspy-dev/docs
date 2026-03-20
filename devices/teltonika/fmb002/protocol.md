---
slug: /teltonika/fmb002/protocol
id: fmb002-protocol
sidebar_label: Protocol
title: Teltonika - FMB002 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Teltonika FMB002 with Plaspy for tracker communication and compatibility
keywords:
  - Teltonika FMB002 protocol
  - FMB002 GPS tracker
  - Teltonika FMB002 Plaspy compatibility
  - FMB002 communication protocol
  - FMB002 OBDII tracking
  - FMB002 BLE sensors
  - vehicle tracking FMB002
  - FMB002 CAN bus data
  - fleet management FMB002
  - Plaspy tracker integration
---

# Teltonika - FMB002 Protocol

This page describes the public protocol context for using the Teltonika FMB002 with Plaspy. It focuses on how the tracker communicates with Plaspy, what role the device reporting protocol plays in delivering location and vehicle data, and the practical considerations to keep in mind when integrating an FMB002 device with the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation. The FMB002 is an ultra small OBDII plug and play tracker with GNSS, GSM, BLE 4.0, and CAN bus capabilities, and those features determine which data a configured device can send to Plaspy.

## Protocol Overview

The tracker reporting protocol is the set of rules and message flows the FMB002 uses to send telemetry, position, and vehicle bus data to a remote server such as Plaspy. For an OBDII plug and play device like the FMB002, the protocol enables delivery of GNSS positions, vehicle diagnostics from OBDII and CAN, BLE sensor readings, and event notifications to a fleet backend.

- Enables transmission of location updates and timestamps from GNSS to the server
- Carries vehicle data read from OBDII and CAN bus for fuel, RPM, and diagnostics
- Transports BLE sensor and accessory data when those peripherals are in use
- Conveys device generated events such as ignition, unplug, crash, and towing
- Provides a standard communication channel so a platform like Plaspy can interpret and store telemetry

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and automatically determines the tracker reporting protocol for incoming connections. When an FMB002 is configured to report to the Plaspy endpoint, users generally do not need to manually select a protocol inside Plaspy as long as the device is correctly pointed at the platform.

- Plaspy accepts connections at the domain d.plaspy.com
- Plaspy server IP is 54.85.159.138 and Plaspy listens on port 8888 for device reporting
- Devices may be configured to use UDP or TCP and Plaspy supports both transports on the common port
- All devices in Plaspy use the same port which simplifies device configuration
- Plaspy automatically detects the tracker protocol once a properly configured device connects

## Transport and Connection Context

Connection details are an important part of successful integration. The FMB002 supports common cellular transports and can be set to send data over UDP or TCP depending on your configuration and firmware options.

- FMB002 devices may be configured using UDP or TCP on port 8888
- Devices can be pointed at the Plaspy domain d.plaspy.com or the IP address 54.85.159.138
- Using the shared Plaspy port keeps settings uniform across different trackers
- Choose the transport that matches your network requirements and any carrier restrictions
- Confirm device APN and GPRS settings to ensure reliable connectivity to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware version can change what messages and features the tracker sends to a server
- Hardware revisions and optional BLE accessories may alter available telemetry and behavior
- Manufacturer configuration options such as sleep modes and reporting intervals affect data flow
- Transport selection between UDP and TCP can influence delivery reliability and latency
- Validate OBDII and CAN data availability for your vehicle make and model before deployment
- Always cross check device settings after firmware upgrades to preserve Plaspy connectivity
- For edge cases consult Teltonika documentation to confirm feature support per firmware

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices are configured correctly, aids in troubleshooting connectivity and data issues, and supports consistent long term operation in Plaspy. Knowledge of how the tracker reports position, events, and vehicle bus data directly impacts setup choices and operational visibility.

- Helps verify that GNSS, OBDII, CAN, and BLE data types are being transmitted as expected
- Makes it easier to diagnose why a device may not appear on Plaspy after configuration changes
- Informs decisions about transport selection and reporting intervals for battery or power sensitive deployments
- Assists with planning firmware updates and validating retained settings after upgrades
- Aids fleet administrators in interpreting events such as unplug, crash, or dwell detection

## Why Use Plaspy with This Protocol

Using the Teltonika FMB002 with Plaspy provides organizations a way to centralize vehicle location, OBDII diagnostics, and BLE sensor data into a single platform for monitoring and reporting. The FMB002’s plug and play OBDII form factor, combined with Plaspy’s automated protocol detection and unified port handling, reduces administrative overhead during deployment and helps maintain consistent connectivity across a mixed device fleet.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Please verify device specific protocol details, firmware behavior, and manufacturer guidance on the official Teltonika website https://www.teltonika-gps.com/ as implementation details can change over time.
