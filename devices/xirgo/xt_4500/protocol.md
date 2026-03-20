---
slug: /xirgo/xt_4500/protocol
id: xt_4500-protocol
sidebar_label: Protocol
title: Xirgo - XT-4500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT-4500 integration with Plaspy including connection settings and compatibility guidance
keywords:
  - Xirgo XT-4500 protocol
  - Xirgo XT-4500 GPS tracker
  - XT-4500 Plaspy compatibility
  - XT-4500 communication protocol
  - Xirgo tracker protocol
  - vehicle tracking XT-4500
  - asset tracker XT-4500
  - Plaspy protocol support
  - GPS tracker integration
  - remote asset tracking
---

# Xirgo - XT-4500 Protocol

This page presents the public protocol context for using the Xirgo XT-4500 with Plaspy. It summarizes how the device communicates in general terms, what role the tracker protocol plays in reporting location and device health, and what to consider when integrating the XT-4500 into a Plaspy deployment. The XT-4500 is an ultra low power GPRS modem with integrated GPS and optional sensors, so its reporting behavior often emphasizes battery and power management as well as periodic location updates.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive connection and compatibility information while encouraging verification against official Xirgo documentation.

## Protocol Overview

The communication protocol for the XT-4500 defines how the tracker identifies itself, opens a reporting session, and transmits location, sensor, and battery status to a backend. In the context of Plaspy the protocol enables the server to receive usable telemetry and to associate that data with the correct asset record without requiring manual protocol selection.

- Enables periodic or event driven location reports that include GPS fixes and time stamps
- Carries device status information such as battery state, sleep or wake events, and sensor triggers
- Allows the server to identify device identity and map incoming data to a Plaspy asset
- Supports transitions between low power and active reporting modes to preserve battery life
- Provides the basis for remote configuration and command delivery when manufacturer and device firmware allow

## How Plaspy Detects the Protocol

Plaspy listens on a single public endpoint and port for incoming tracker connections and uses that shared endpoint to automatically identify the reporting protocol. In most cases a properly configured XT-4500 will start sending data to Plaspy and the platform will detect the protocol without any manual selection by the user.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- All devices in Plaspy use the same port which simplifies device configuration
- Devices may be configured to report using either UDP or TCP on port 8888
- When the device points to the Plaspy endpoint and port the platform will automatically detect the tracker protocol
- Users typically do not need to choose a protocol inside Plaspy if the tracker is correctly pointed at the Plaspy endpoint

## Transport and Connection Context

Understanding the transport and connection settings helps ensure a reliable link between an XT-4500 and Plaspy. The XT-4500 can be configured to use different transport modes depending on device support and deployment constraints, and it is important to align those settings with the Plaspy endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can point to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138
- Plaspy uses the same port for all supported devices which reduces configuration complexity
- Choose transport mode (UDP vs TCP) in line with network reliability and power trade offs for the deployment
- Confirm APN and cellular settings on the XT-4500 match your carrier and allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change how the device reports data, timing, and available fields
- Hardware variants or optional sensor modules may add or remove telemetry elements
- Transport selection between UDP and TCP can affect delivery guarantees and battery consumption
- Manufacturer configuration tools and default settings vary; confirm the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888
- Test with representative firmware and battery conditions to validate reporting intervals and wake behavior
- Always cross reference device behavior with Xirgo documentation and firmware release notes

## Why Protocol Understanding Matters

A practical understanding of the XT-4500 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable behavior in the field. Knowing what the device reports and how it connects lets teams optimize battery life, network usage, and alerting.

- Confirms device identity and mapping to the correct Plaspy asset record
- Helps diagnose why expected reports are missing or delayed by checking transport and endpoint settings
- Supports tuning of reporting intervals and power modes to match operational needs
- Enables meaningful validation when performing firmware upgrades or hardware swaps
- Reduces deployment time by aligning device configuration to the Plaspy endpoint and port

## Why Use Plaspy with This Protocol

Using the Xirgo XT-4500 with Plaspy gives organizations a straightforward way to receive location and asset health reports from a low power GPS tracker. Plaspy’s shared endpoint approach and automatic protocol detection reduce setup complexity so teams can focus on asset visibility, battery management, and operational monitoring rather than manual protocol mapping.

To learn more about how Plaspy works with devices like the XT-4500 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes please verify information directly with the manufacturer at https://xirgo.com/ since protocol support and firmware behavior can change over time.
