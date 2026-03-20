---
slug: /teltonika/fmm003/protocol
id: fmm003-protocol
sidebar_label: Protocol
title: Teltonika - FMM003 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMM003 and how this tracker communicates with Plaspy for fleet tracking
keywords:
  - teltonika fmm003 protocol
  - teltonika fmm003 gps protocol
  - fmm003 communication protocol
  - teltonika protocol plaspy
  - fmm003 tracking protocol
  - teltonika obd protocol
  - fmm003 gps tracker compatibility
  - teltonika fmm003 integration
  - plaspy device protocol
  - fleet tracking teltonika
---

# Teltonika - FMM003 Protocol

This page describes the public protocol context for using the Teltonika FMM003 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, what role the tracker reporting protocol plays in reliable telemetry, and what to expect when integrating an FMM003 into a fleet management setup. Technical detail here is limited to public, non sensitive information and is intended to help with setup and troubleshooting, not to replace manufacturer documentation.

The Teltonika FMM003 is a 4G LTE Cat M1 tracker with OBD OEM data reading and multi band connectivity designed for fleet use. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior you observe in the field may differ from what is described here.

## Protocol Overview

The communication protocol used by the FMM003 defines how the tracker reports location, OBD parameters, telemetry, and status information to a remote server like Plaspy. At a high level the protocol enables the device to identify itself, transmit usable position and vehicle data, and support remote configuration workflows via the server endpoint.

- Transmits GNSS location, OBD-derived parameters, and device state so Plaspy can present usable telemetry.
- Carries identification data that allows a server to associate incoming messages with a specific device and account.
- Supports device reporting frequency and event driven messages used for real time monitoring.
- Enables fallback behavior so tracking continues when primary networks are unavailable.
- Works alongside device-side settings such as sleep modes and power optimization to balance battery and reporting needs.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared public endpoint and automatically detects the tracker protocol used by an incoming connection. As long as an FMM003 is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is typically unnecessary.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- All devices in Plaspy use the same port, which is 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capability and settings.
- Plaspy automatically detects the tracker protocol when the device connects to the platform endpoint.
- If a device is sending to the Plaspy endpoint and not appearing in your account, check device reporting settings and network routing to d.plaspy.com.

## Transport and Connection Context

Connection context covers how the device reaches the Plaspy endpoint and which transport options are available. The FMM003 supports modern cellular transports and can be configured to use either UDP or TCP for reporting, so selecting the correct transport and endpoint is an important part of setup.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify device configuration.
- Network level issues such as carrier restrictions, APN configuration, and firewall rules can affect connectivity to the Plaspy endpoint.
- Ensure the device SIM and APN are provisioned for data and that outbound traffic to d.plaspy.com is permitted by the carrier.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available OBD parameters, and feature behavior; always note the firmware running on the tracker.
- Hardware revisions and OEM OBD implementations may affect which manufacturer parameters are available via the OBD interface.
- Some features such as advanced vehicle parameters may require specific vehicle models or a supported vehicle list from the manufacturer.
- Transport selection (UDP vs TCP) can influence delivery characteristics and should be matched to device configuration and network conditions.
- Validate compatibility and supported features against the official Teltonika documentation for the FMM003 before large scale deployment.
- Plaspy detection simplifies integration but does not replace verifying that the tracker is configured to report to the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth deployment and reliable operations when using the FMM003 with Plaspy. Clear knowledge of the reporting behavior, transport options, and device capabilities reduces troubleshooting time and improves data quality for fleet monitoring.

- Allows accurate configuration of device reporting intervals and event triggers to meet operational requirements.
- Helps troubleshoot connectivity problems by confirming transport and endpoint settings such as UDP or TCP and the Plaspy host.
- Clarifies which OBD and vehicle parameters will be visible in Plaspy based on device firmware and supported vehicle lists.
- Assists with planning for firmware updates and how they may alter device behavior or supported telemetry.
- Encourages appropriate validation steps when rolling out devices across a mixed fleet or across regions with differing network support.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM003 with Plaspy provides a straightforward path to collect GNSS, OBD, and device state data in a centralized platform. For organizations that need vehicle visibility, fuel and odometer telemetry, and event driven alerts, Plaspy receives the FMM003 reports at a shared endpoint and presents them alongside other fleet data for operational oversight.

If you want to learn more about Plaspy and how the platform works with devices like the Teltonika FMM003, visit https://www.plaspy.com. For the most current and device specific protocol documentation, firmware notes, and supported vehicle lists, verify details with the manufacturer at https://www.teltonika-gps.com/. Protocol support and firmware behavior can change over time, so reviewing official manufacturer documentation is recommended before deployment.
