---
slug: /navtelekom/smart_s_2425_complex/protocol
id: smart_s_2425_complex-protocol
sidebar_label: Protocol
title: Navtelekom - SMART S-2425 COMPLEX Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Navtelekom SMART S-2425 COMPLEX and how it communicates with Plaspy for fleet tracking
keywords:
  - Navtelekom SMART S-2425 COMPLEX
  - SMART S-2425 COMPLEX protocol
  - Navtelekom gps tracker protocol
  - Plaspy device compatibility
  - vehicle tracking protocol
  - GNSS GLONASS tracker
  - 2G gps tracker integration
  - fleet management telemetry
  - tracker communication Plaspy
  - tracking protocol for integrators
---

# Navtelekom - SMART S-2425 COMPLEX Protocol

This page explains the public protocol context for using the Navtelekom SMART S-2425 COMPLEX tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, what connection settings are used, and what to consider when deploying the tracker for fleet monitoring, telemetry, and remote control workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so deployment steps and feature sets can differ between units even of the same model.

## Protocol Overview

The SMART S-2425 COMPLEX uses its onboard GNSS and cellular modem to deliver position fixes and telemetry to a remote server. In practice, the device reporting protocol defines how the tracker identifies itself, how position and sensor data are packaged, and how event and input states are reported to a platform like Plaspy.

- Enables GNSS position reporting and periodic telemetry delivery to the server for live tracking and history.
- Carries I/O state and sensor readings from universal inputs, serial interfaces, and 1-Wire sensors for fuel, tachograph, and telemetry integration.
- Conveys discrete events and status changes such as ignition, door, alarm, and accelerometer based notifications for driving behavior analytics.
- Supports remote control signals from platform commands routed through configured control outputs for immobilizer or equipment control workflows.
- Works with device configuration tools and firmware updates from the manufacturer to modify reporting intervals, input mapping, and behaviour.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming device reports and automatically detects the tracker protocol when data arrives. This reduces manual configuration in the Plaspy interface provided the device is set to send reports to the Plaspy endpoint and uses supported transport settings.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- The Plaspy service accepts connections on port 8888 for all supported devices.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Because Plaspy uses the same port for all devices, users normally do not need to select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.
- Ensure the tracker is pointed to d.plaspy.com or the IP 54.85.159.138 and that the chosen transport matches configuration on the device.

## Transport and Connection Context

Connection and transport choices affect how reliably data reaches Plaspy in varied network conditions. The SMART S-2425 COMPLEX supports cellular reporting and can use either UDP or TCP reporting modes where configured, and the choice can influence retransmission behaviour and session management.

- Devices report to the Plaspy endpoint using port 8888 for both UDP and TCP transports.
- Pointing the tracker to d.plaspy.com or to 54.85.159.138 are both valid options depending on your deployment and DNS preferences.
- Use UDP where low overhead and lightweight reporting are desired, or TCP when session reliability is preferred and supported by the tracker firmware.
- Cellular network factors such as SIM routing, operator NAT, and signal quality will influence reporting frequency and delivery.
- Confirm firewall and NAT rules in your infrastructure allow outbound and return traffic on port 8888 to the Plaspy endpoint.

## Protocol Compatibility Notes

- Compatibility can depend on device firmware and hardware revision; similar model numbers may implement slightly different reporting features.
- Manufacturer configuration tools such as Navtelecom NTC Configurator are the primary method to adjust reporting parameters and apply firmware updates.
- Dual SIM operation improves cellular resilience but may change session behavior during SIM switchover events.
- Transport selection between UDP and TCP is a device setting and must match the intended Plaspy endpoint configuration.
- Verify mapping of I/O, serial ports, and 1-Wire sensors to Plaspy data fields during commissioning to ensure expected telemetry arrives correctly.
- Always validate behavior on representative units before large scale deployments.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps installers and integrators achieve reliable device onboarding, accurate telemetry mapping, and effective troubleshooting when devices are offline or reporting unexpectedly.

- Ensures correct endpoint and transport settings so the tracker can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Helps map device I/O and serial sensor outputs to Plaspy data fields for fuel, tachograph, and vehicle diagnostics.
- Aids in diagnosing missed reports, SIM failover events, and connectivity issues related to UDP versus TCP usage.
- Supports informed decisions about firmware updates, configuration changes, and feature enablement using manufacturer tools.
- Reduces deployment time by identifying which telemetry items are available and how frequently they are reported.

## Why Use Plaspy with This Protocol

Using the SMART S-2425 COMPLEX with Plaspy gives organizations a way to collect GNSS positions, rich vehicle telemetry, and discrete event data in a single platform. The combination of the device's flexible I/O, serial interfaces, Bluetooth configuration, and dual SIM cellular connectivity makes it suitable for fleet monitoring, anti theft workflows, fuel monitoring, and driver behavior analytics.

If you want to learn more about Plaspy and how devices like the SMART S-2425 COMPLEX integrate into fleet workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration guides refer to the official Navtelecom documentation at https://www.navtelecom.ru/ as manufacturer details and firmware behavior can change over time.
