---
slug: /ruptela/fm_tco4_lcv/protocol
id: fm_tco4_lcv-protocol
sidebar_label: Protocol
title: Ruptela - FM-Tco4 LCV Protocol
sidebar_class_name: menu_item_tracker
description: Clear public protocol overview for Ruptela FM Tco4 LCV integration with Plaspy
keywords:
  - Ruptela FM Tco4 LCV protocol
  - Ruptela FM Tco4 LCV GPS protocol
  - Ruptela FM Tco4 LCV Plaspy compatibility
  - Ruptela vehicle tracking protocol
  - FM Tco4 LCV communication protocol
  - GPS tracker protocol Ruptela
  - CANbus fuel monitoring integration
  - OBD II fleet tracking
  - driver identification tracking
  - remote ignition blocking monitoring
---

# Ruptela - FM-Tco4 LCV Protocol

This page presents the public protocol context for using the Ruptela FM-Tco4 LCV tracker with Plaspy. It focuses on how the device communicates usable telemetry and vehicle data to Plaspy rather than on private binary formats or internal parser logic. The FM-Tco4 LCV is built for light commercial vehicles and can report GPS position, CANbus data including fuel level and consumption, OBD II engine codes, driver identification events, and security features such as remote ignition blocking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by firmware version, hardware revision, or manufacturer configuration, so the details here are intended as general, public facing guidance for successful integration and troubleshooting.

## Protocol Overview

The communication protocol of the FM-Tco4 LCV defines the rules for how the tracker transmits location, vehicle telemetry, and event data to a remote server. In practice this protocol enables the device to identify itself to a backend, send periodic and event driven reports, and deliver vehicle-specific telemetry that Plaspy can present to users.

- Enables GPS position and movement reports to be sent from the tracker to Plaspy
- Carries CANbus derived data such as fuel level, consumption, mileage, and other vehicle signals
- Transmits OBD II diagnostic reports and engine error codes for preventive maintenance workflows
- Supports driver identification and registration events for accountability and trip attribution
- Delivers security related signals such as remote ignition block state and antijamming alerts

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and automatically identifies the tracker protocol when properly configured to report to Plaspy. In most cases you do not need to select a protocol inside Plaspy if the device is pointed to the correct Plaspy host and network settings.

- Plaspy accepts connections at the domain d.plaspy.com and the public IP 54.85.159.138
- The shared Plaspy port for all supported devices is 8888 and is used across device types
- Plaspy can detect the reporter protocol automatically once the device is sending data to the Plaspy endpoint
- Users typically only need to configure the device to report to d.plaspy.com or the provided IP and to use the correct transport
- If a device fails to register or send expected telemetry, verify network address and transport settings on the device and consult device logs

## Transport and Connection Context

Connection transport and addressing determine how the FM-Tco4 LCV delivers its data to Plaspy. The device may be configured to use either UDP or TCP depending on model firmware and deployment needs, and it must be pointed to the Plaspy endpoint to establish reporting.

- The tracker may be configured to use UDP or TCP on port 8888 depending on device configuration and network reliability needs
- Devices may be set to report to the domain d.plaspy.com or the numeric address 54.85.159.138
- All devices managed by Plaspy use the same port so configuration is consistent across supported models
- Choosing UDP or TCP can affect delivery behavior but does not change how Plaspy identifies the protocol once data arrives
- Verify that network routing and firewall rules allow outbound traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware versions and device hardware revisions can change which fields or CANbus signals the tracker reports
- Some vehicle makes or CANbus implementations may expose different fuel or mileage signals; validation against the vehicle is recommended
- Transport selection (UDP vs TCP) is configured on the device and can influence reliability under different network conditions
- Manufacturer settings such as record intervals, event triggers, and SMS features may alter reporting behavior
- Plaspy automatically detects the protocol, but correct endpoint and transport configuration on the tracker are required for success
- Always validate device behavior against the latest official manufacturer documentation for firmware specific details

## Why Protocol Understanding Matters

Understanding the communication protocol for the FM-Tco4 LCV helps ensure accurate setup, reliable operation, and effective troubleshooting with Plaspy. Knowing which telemetry the device is expected to send clarifies configuration choices and helps diagnose gaps in reported data.

- Ensures correct device pointing to d.plaspy.com or 54.85.159.138 and use of port 8888
- Helps confirm whether vehicle CANbus signals needed for fuel or mileage are available from the hardware and firmware
- Aids troubleshooting when diagnostics such as OBD II codes or driver ID events are not appearing in Plaspy
- Guides decisions about using UDP or TCP for the deployment environment
- Supports planning for firmware updates that may change report formats or available telemetry
- Improves collaboration with the manufacturer during advanced integration tasks

## Why Use Plaspy with This Protocol

Using the Ruptela FM-Tco4 LCV with Plaspy gives fleet operators a practical way to centralize vehicle location, fuel management, driver assignment, and basic diagnostics in one platform. The device's ability to read CANbus and OBD II data complements Plaspy's reporting and alerting capabilities, enabling improved route efficiency, fuel oversight, and preventive maintenance workflows without the need for additional sensors in many cases.

To learn more about how Plaspy works with devices like the FM-Tco4 LCV, visit https://www.plaspy.com. For the most current and device specific protocol and firmware information, please verify details on the manufacturer's site https://ruptela.com/ as protocol support and firmware behavior can change over time.
