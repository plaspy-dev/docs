---
slug: /teltonika/fmc640/protocol
id: fmc640-protocol
sidebar_label: Protocol
title: Teltonika - FMC640 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Teltonika FMC640 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Teltonika FMC640 protocol
  - Teltonika FMC640 GPS protocol
  - FMC640 Plaspy compatibility
  - FMC640 tracker protocol
  - Teltonika tracking protocol
  - fleet tracking FMC640
  - GPS tracker FMC640
  - vehicle tracking Teltonika
  - Plaspy device protocol
  - Teltonika FMC640 communication
---

# Teltonika - FMC640 Protocol

This page describes the public protocol context for using the Teltonika FMC640 tracker with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive terms, what connection settings are used, and practical considerations for integrating the FMC640 into a Plaspy deployment. The content is based on the FMC640 product characteristics and general protocol practices rather than device firmware internals.

The Teltonika FMC640 is a professional grade GPS tracker with GNSS and LTE connectivity and features suited for fleet operations. Plaspy accepts data from the FMC640 using a shared set of connection settings and automatic protocol detection. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device specific behavior should always be validated against official Teltonika documentation.

## Protocol Overview

The tracker reporting protocol defines how an FMC640 packages location, sensor, and vehicle bus data and sends it to a remote server so Plaspy can process and present it. The protocol's role at a high level is to reliably deliver position and telemetry, allow the server to identify the device, and support command and configuration messages where available.

- Enables the FMC640 to transmit GNSS position, status, and telemetry to Plaspy for mapping and alerts
- Provides device identification so incoming data can be associated with the correct asset in Plaspy
- Carries FMS and fuel CAN data, tachograph related telemetry, and peripheral sensor information when present
- Supports both real time updates and periodic reporting to conserve bandwidth or power
- Allows remote configuration or command exchange mechanisms through supported transport channels

## How Plaspy Detects the Protocol

Plaspy receives connections on a common endpoint and port for all supported devices and automatically determines the tracker protocol for each incoming device. In most setups you do not need to manually choose a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy listens for incoming tracker reports on the shared endpoint hosted at d.plaspy.com
- The Plaspy server IP address used by devices can be 54.85.159.138 and the port for device reporting is 8888
- All devices supported by Plaspy use the same port which simplifies device configuration
- When an FMC640 is pointed at the Plaspy endpoint and sends data, Plaspy will automatically detect the tracker protocol and associate data with the correct account
- Users typically configure the tracker to report to d.plaspy.com or the IP address above and choose the transport supported by their device

## Transport and Connection Context

Connection options and transport selection affect how the FMC640 communicates with Plaspy but do not change the core purpose of the protocol. The FMC640 supports common cellular transports and Plaspy supports both UDP and TCP reporting on the shared port, enabling flexible deployment across networks.

- The FMC640 may be configured to use either UDP or TCP for reporting depending on device options and network conditions
- Plaspy accepts device reports on port 8888 whether the device uses UDP or TCP
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138
- Using a consistent host and port across devices simplifies fleet wide configuration and reduces setup errors
- Network considerations such as firewall rules and APN settings can affect connectivity and should be validated when deploying devices

## Protocol Compatibility Notes

- Firmware version differences can change which messages or optional fields the FMC640 transmits; check firmware release notes for details
- Hardware revisions and regional variants can influence available cellular bands and peripheral interfaces
- Transport selection (UDP versus TCP) may affect delivery semantics and should match your network reliability and latency needs
- Manufacturer side configuration options such as Dual SIM and APN settings can alter connectivity behavior
- Always validate device reporting to the Plaspy endpoint after configuration to confirm the device is reachable and identified correctly
- For complex integrations involving CAN data or external peripherals, confirm which interfaces are enabled by the FMC640 firmware in use

## Why Protocol Understanding Matters

Understanding the FMC640 communication protocol and how it is handled by Plaspy helps ensure a reliable integration, faster troubleshooting, and better long term maintenance of your fleet monitoring solution. Knowing what the tracker sends and how the platform expects to receive it reduces configuration errors and supports operational decisions.

- Simplifies initial setup by confirming the correct host, transport, and port settings for device reporting
- Makes troubleshooting connectivity issues faster by narrowing potential causes such as transport, APN, or firmware mismatches
- Helps verify that CAN, tachograph, and peripheral sensor data arrive as expected in Plaspy
- Supports planning for firmware updates, feature rollouts, and hardware maintenance across a fleet
- Reduces support turnaround time by clarifying what Plaspy expects from incoming device reports

## Why Use Plaspy with This Protocol

Using the Teltonika FMC640 with Plaspy provides organizations with a practical path to capture vehicle location, telemetry, and vehicle bus information in a centralized platform. Plaspy's automatic protocol detection and unified connection settings simplify device onboarding and let fleets scale without per device port configuration.

If you want to learn more about Plaspy and how it handles tracker integration, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and hardware documentation please verify information on the manufacturer site https://www.teltonika-gps.com/.
