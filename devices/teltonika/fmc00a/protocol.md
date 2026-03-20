---
slug: /teltonika/fmc00a/protocol
id: fmc00a-protocol
sidebar_label: Protocol
title: Teltonika - FMC00A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMC00A with Plaspy covering connection settings and practical integration notes
keywords:
  - Teltonika FMC00A protocol
  - FMC00A GPS protocol
  - Teltonika tracker Plaspy
  - FMC00A communication protocol
  - Teltonika OBD tracker protocol
  - FMC00A fleet tracking
  - Plaspy device compatibility
  - Teltonika FMC00A integration
  - GPS tracker protocol guide
  - vehicle tracking protocol
---

# Teltonika - FMC00A Protocol

This page describes the public protocol context for using the Teltonika FMC00A tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level and what to expect when configuring an FMC00A for real time vehicle tracking and OBD data reporting. The FMC00A is a plug and play OBD II tracker with 4G LTE Cat 1 connectivity, the ability to read OEM OBD parameters such as odometer and fuel level, multiple GNSS support, and a set of vehicle telematics features useful for fleet operations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The FMC00A can be configured to report over TCP or UDP to the Plaspy server and exact protocol behavior may vary by firmware version, hardware revision, and manufacturer implementation. For final device specific behavior rely on Teltonika product documentation and release notes when available.

## Protocol Overview

The communications protocol of the FMC00A defines how the device identifies itself, reports position and vehicle data, and signals events to a backend service such as Plaspy. At a public level this protocol enables secure and reliable delivery of telemetry and OBD derived parameters so that Plaspy can present actionable vehicle insights.

- Device identification and initial session establishment to associate reports with an IMEI or other device identifier
- Periodic and event driven telemetry reporting including GPS position and timestamped vehicle data
- Delivery of OBD OEM parameters such as odometer and fuel level when available from the vehicle
- Event and alarm reporting for incidents like ignition changes, towing, or crash detection
- Support for both live reporting and reduced or sleep reporting modes to conserve power

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and automatically determines which tracker protocol a device is using when it starts reporting. This automatic detection means most users do not need to manually select a protocol inside Plaspy if the FMC00A is configured to report to the Plaspy endpoint.

- All devices report to the same Plaspy server port which simplifies device configuration
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 with port 8888 used for device connections
- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions
- When the tracker connects to the Plaspy endpoint the platform inspects the incoming data and maps the device to the correct protocol handler automatically
- Typical setup requires pointing the FMC00A at d.plaspy.com or the fallback IP and ensuring the correct transport is selected on the device

## Transport and Connection Context

Connection context covers how the FMC00A delivers packets to Plaspy rather than the packet contents themselves. The FMC00A supports cellular connectivity and can be configured to use either UDP or TCP transport to reach the Plaspy endpoint on port 8888.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 as an IP fallback
- The tracker may use UDP or TCP on port 8888 depending on configuration and operator network behavior
- Using the domain name enables DNS based failover and is convenient for device provisioning while the IP address can be used when DNS is restricted
- Cellular NAT, operator firewalls, and APN settings can affect connectivity and should be validated during deployment
- Power saving modes on the FMC00A influence how frequently the device opens connections and transmits data

## Protocol Compatibility Notes

- Firmware revisions may change supported features, data fields, or event behavior; confirm compatibility for a given firmware build
- Hardware revisions can affect available sensors or OBD parameter access for some vehicle makes and models
- Manufacturer configuration tools such as Teltonika Configurator and FOTA mechanisms control device settings and should be used to ensure proper reporting configuration
- Transport choice between UDP and TCP can affect delivery semantics and should match network requirements
- OBD OEM parameter availability depends on the vehicle and ECU support; not all vehicles expose the same set of OEM fields
- Validate any advanced feature requirements such as jamming detection or crash sensing against Teltonika product documentation

## Why Protocol Understanding Matters

Understanding how the FMC00A communicates helps streamline setup, troubleshoot connection problems, and ensure reliable long term operation with Plaspy. Clear expectations about transport, identification, and feature availability reduce integration issues and speed deployments.

- Confirm that the tracker is pointed to d.plaspy.com or 54.85.159.138 and using port 8888
- Match the device transport setting to your network and operator constraints for best reliability
- Verify firmware and hardware revision feature sets before assuming availability of a specific OBD parameter
- Use device identifiers and server reports to confirm successful registration and data flow into Plaspy
- Account for power saving and sleep behavior when planning reporting intervals and monitoring expectations

## Why Use Plaspy with This Protocol

Using the Teltonika FMC00A with Plaspy provides a practical path to combine plug and play OBD tracking with a cloud backend that automatically recognizes device reports and presents vehicle and OEM data for fleet monitoring. The FMC00A's support for OBD OEM parameters, multi GNSS, and a broad feature set makes it well suited for mixed vehicle fleets that need continuous visibility and operational insights.

To learn more about Plaspy and how it works with devices like the FMC00A visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and hardware specifics verify documentation on the manufacturer site https://www.teltonika-gps.com/ since protocol support and firmware behavior can evolve over time.
