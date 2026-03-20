---
slug: /topfly/torchx_110/protocol
id: torchx_110-protocol
sidebar_label: Protocol
title: TopFly - TorchX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating TopFly TorchX 110 with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - TopFly TorchX 110 protocol
  - TopFly TorchX 110 GPS protocol
  - TopFly TorchX 110 Plaspy compatibility
  - TorchX 110 OBDII tracker protocol
  - TorchX 110 communication protocol
  - vehicle tracking protocol Plaspy
  - Plaspy device protocol compatibility
  - OBDII GPS tracker protocol
  - fleet tracking TorchX 110
  - BLE CAN telemetry protocol
---

# TopFly - TorchX 110 Protocol

This page summarizes the public protocol context for using the TopFly TorchX 110 tracker with Plaspy. It describes how the device communicates with Plaspy in high level terms, what connection settings are commonly used, and what to consider when confirming a successful integration. The focus is on communication context rather than internal firmware or proprietary packet formats.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this guide highlights practical, non sensitive protocol context and lifecycle considerations for TorchX 110 deployments.

## Protocol Overview

At a high level, the device protocol defines how the TorchX 110 packages and sends telemetry, location, and event data to a remote server. For Plaspy integration the protocol role is to reliably deliver GNSS positions, CAN bus telemetry, BLE sensor readings, and event triggers so Plaspy can present live dashboards and reports.

- Enables the tracker to report GNSS positions, CAN bus fields (ignition, VIN, odometer, fuel, DTCs), and BLE sensor data to a remote endpoint.
- Carries status and event messages such as crash detection, power disconnect, and tamper or jamming alerts for timely platform processing.
- Allows the device to buffer data when out of network and transmit buffered points when connectivity is restored.
- Supports multiple transport options so the device can deliver data over the network available in the deployment environment.
- Provides the information Plaspy needs to map raw telemetry into actionable fields for fleet management, UBI, and diagnostics.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and uses the incoming data to identify the tracker protocol automatically. In most cases a TorchX 110 that is properly configured to report to Plaspy will be recognized without manual protocol selection inside the Plaspy platform.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when the device connects and begins reporting.
- Users typically do not need to select a protocol manually inside Plaspy if the device is pointed at the Plaspy endpoint.
- Proper device configuration (APN, transport choice, and reporting server) is the usual prerequisite for automatic detection to succeed.

## Transport and Connection Context

TorchX 110 supports common transport options and can be configured to use the network transport that fits your deployment. For Plaspy integration the main practical points are about addressing and transport selection rather than proprietary protocol internals.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting server address.
- Plaspy uses port 8888 for all supported devices, reducing per device configuration differences.
- Network considerations such as APN settings, carrier restrictions, and firewall rules can affect whether TCP or UDP is the preferred transport in a given environment.
- For devices with fallback options, ensure the chosen transport and server address are consistent across firmware updates and provisioning.

## Protocol Compatibility Notes

- Firmware variations can change message timing, available fields, and transport options; confirm the device firmware version when validating behavior.
- Hardware revisions or regional variants sometimes alter supported network bands or transport stacks; verify the specific TorchX 110 variant used in your fleet.
- Manufacturer configuration defaults may use different transport modes; explicitly set the reporting server to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy.
- BLE and CAN telemetry availability depends on configuration and connected vehicle support; ensure required sensors and OBDII/CAN access are enabled.
- Transport selection (TCP vs UDP) impacts delivery characteristics and should be chosen with network reliability and carrier behavior in mind.
- Validate real-world behavior after provisioning by confirming live reports and buffered data uploads in Plaspy.

## Why Protocol Understanding Matters

A practical understanding of the TorchX 110 communication protocol and connection context helps ensure reliable setup, faster troubleshooting, and consistent long term data delivery to Plaspy. Knowing which transport and addressing settings the device uses reduces integration friction and helps diagnose connectivity issues before they impact operations.

- Speeds initial provisioning by aligning device reporting address and transport with Plaspy settings.
- Helps troubleshoot connectivity issues related to carrier APN, firewall, or transport mismatches.
- Clarifies expectations around telemetry frequency, buffering behavior, and event forwarding to Plaspy.
- Informs firmware update planning when protocol or transport behavior changes are introduced.
- Ensures BLE and CAN telemetry sources are enabled and routed correctly for Plaspy to consume.

## Why Use Plaspy with This Protocol

Using TorchX 110 with Plaspy gives fleet operators high frequency location updates, rich CAN bus telemetry, and BLE sensor integration in a compact OBDII form factor that simplifies deployment. Plaspy’s shared connection endpoint and automatic protocol detection reduce setup complexity so teams can focus on operational monitoring, alerts, and analytics rather than low level connectivity details.

If you want to learn more about Plaspy and how it works with devices like the TorchX 110, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer documentation at https://www.topflytech.com/ as protocol support and firmware behavior can change over time.
