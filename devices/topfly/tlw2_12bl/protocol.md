---
slug: /topfly/tlw2_12bl/protocol
id: tlw2_12bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-12BL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly TLW2 12BL GPS tracker compatibility with Plaspy including connection and transport guidance
keywords:
  - TopFly TLW2-12BL protocol
  - TopFly TLW2-12BL GPS protocol
  - TLW2-12BL Plaspy compatibility
  - TopFly tracker protocol
  - vehicle tracking protocol
  - fleet management GPS protocol
  - TLW2-12BL communication
  - TopFly BLE telemetry
  - Plaspy compatible tracker
  - TLW2-12BL tracking protocol
---

# TopFly - TLW2-12BL Protocol

This page describes the public protocol context for using the TopFly TLW2-12BL tracker with the Plaspy platform. It focuses on how the device communicates in general terms, how Plaspy receives device data, and practical connection guidance for integration. The TLW2-12BL is a hardwired 4G LTE vehicle tracker with high frequency updates, BLE sensor support, extensive I O, and onboard buffering, and this page explains how those capabilities map to Plaspy without exposing sensitive internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For TLW2-12BL installations, devices can be configured to report to the Plaspy endpoint d.plaspy.com or to the Plaspy server IP 54.85.159.138 using port 8888. The device may use UDP or TCP on port 8888 depending on configuration, and Plaspy treats port 8888 as the common entry point for all devices while automatically selecting the correct protocol parser for supported trackers. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so verify device specifics when troubleshooting.

## Protocol Overview

The tracker reporting protocol defines how the TLW2-12BL identifies itself, transmits position and telemetry, and signals events to a backend such as Plaspy. In practice the protocol enables continuous location updates, event notifications, buffered uploads after connectivity loss, and relay or output control commands relayed through the platform.

- Enables transmission of GNSS coordinates, timestamps, and movement telemetry to Plaspy for live and historical views.
- Conveys input and output state changes such as ignition, door, and alarm events so Plaspy can generate alerts and reports.
- Relays BLE sensor telemetry from paired accessories so environmental and asset condition data are available in Plaspy.
- Supports buffered storage on the device so missed messages are uploaded automatically when connectivity returns.
- Allows remote control of outputs such as immobilizer relays through command channels when the device and firmware support remote actions.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and automatically detects the device protocol once the device reports. This removes the need for manual protocol selection inside the platform for most properly configured devices and simplifies device onboarding.

- Plaspy listens for device reports on the same port for all supported trackers to streamline ingestion.
- Devices can report to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 using port 8888.
- Plaspy automatically selects the compatible protocol handler for incoming device traffic when the reported data matches known supported formats.
- In most cases a TLW2-12BL configured to report to the Plaspy endpoint will be detected and start delivering usable telemetry without additional platform configuration.
- If a device does not appear online, verify device reporting settings, transport selection, and firmware version before escalating.

## Transport and Connection Context

Connection and transport choices determine how the TLW2-12BL reaches Plaspy and can affect latency, reliability, and behavior during network transitions. The TLW2-12BL supports multiple transport options; choosing UDP or TCP on port 8888 is a configuration step on the device side.

- The device may be configured to use UDP or TCP on port 8888 for reporting to Plaspy depending on the device firmware and installation preferences.
- Devices can point to the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138 when configuring the reporting endpoint.
- Using TCP can improve delivery reliability for certain telemetry types; UDP can reduce overhead for high frequency updates depending on network conditions.
- The TLW2-12BL also supports alternative channels such as MQTT or SMS for telemetry in environments where IP connectivity is constrained, subject to device configuration.
- Ensure firewall and carrier settings allow outbound connections to port 8888 for the chosen transport on the vehicle modem.

## Protocol Compatibility Notes

- Firmware versions and manufacturer firmware customizations can change available commands, reporting intervals, and event encodings. Confirm the device firmware release when validating behavior.
- Hardware revisions and accessory combinations, such as BLE sensors or additional I O wiring, can alter which telemetry fields are present in reports.
- Transport selection (TCP versus UDP) is device configurable and can affect how Plaspy receives high frequency updates from the tracker.
- Device buffering capacity and upload behavior are dependent on device settings and firmware; TLW2-12BL devices provide large onboard storage but upload timing can vary.
- Manufacturer options such as remote update availability and remote command support may require specific firmware builds or configuration flags.
- Always validate device settings against official TopFly documentation and release notes before deploying at scale.

## Why Protocol Understanding Matters

Knowing how the TLW2-12BL communicates helps ensure reliable onboarding, robust monitoring, and effective troubleshooting when the tracker is used with Plaspy. A clear view of the communication context reduces integration time and helps maintain expected behavior in production.

- Confirms correct endpoint and transport configuration so devices reach the Plaspy server reliably.
- Helps identify whether missing telemetry is a device, network, or configuration issue when diagnosing offline or delayed data.
- Guides decisions about transport selection and reporting intervals to balance update frequency and mobile data usage.
- Informs firmware update planning and compatibility checks when new features or bug fixes are introduced.
- Supports correct wiring and accessory pairing for I O, BLE sensors, and relay control to ensure data appears in Plaspy as expected.

## Why Use Plaspy with This Protocol

Using the TLW2-12BL with Plaspy provides a practical path to real time fleet visibility, event driven alerts, and integrated telemetry for vehicle operations. Plaspy ingests the TLW2-12BL’s GNSS positions, accelerometer events, I O state, and BLE sensor data to present actionable insights in maps, dashboards, and reports that support anti theft, fuel monitoring, cold chain, and driver behavior workflows.

If you want to learn more about how Plaspy works with devices like the TLW2-12BL, visit https://www.plaspy.com for platform details and onboarding guidance. For the most current device specific protocol and firmware information, check the manufacturer documentation at https://www.topflytech.com/ because protocol support, firmware behavior, and device implementation details can change over time and should be verified against official sources.
