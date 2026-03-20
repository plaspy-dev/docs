---
slug: /topfly/t8806r/protocol
id: t8806r-protocol
sidebar_label: Protocol
title: TopFly - T8806+R Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly T8806+R and how it communicates with Plaspy for reliable vehicle and asset tracking
keywords:
  - TopFly T8806R protocol
  - TopFly T8806+R
  - T8806R GPS protocol
  - TopFly protocol Plaspy
  - T8806R tracking protocol
  - TopFly GPS tracker protocol
  - vehicle tracker protocol
  - fleet tracking TopFly
  - BLE sensor integration TopFly
  - Plaspy tracker compatibility
---

# TopFly - T8806+R Protocol

This page describes the public protocol context for using the TopFly T8806+R tracker with Plaspy. It focuses on how the device reports location and telemetry to Plaspy and what aspects of the tracker protocol are relevant during setup and troubleshooting. The goal is to provide clear, non sensitive guidance about connectivity and protocol expectations for fleet and asset tracking professionals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The TopFly T8806+R offers real time and buffered reporting, BLE sensor support, digital inputs and outputs, and a range of telemetry features, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. For production deployments verify device settings against current manufacturer documentation.

## Protocol Overview

The protocol used by the T8806+R is the mechanism that lets the tracker identify itself to Plaspy and deliver position, status, and sensor data in a format the platform can process. On a high level the tracker reporting protocol covers connection setup, device identification, periodic or event driven location reports, and optional telemetry related to inputs outputs BLE and fuel sensing.

- Enables the T8806+R to send GNSS position updates to Plaspy including real time and buffered transmissions.
- Carries telemetry such as ignition status, input alerts, output control feedback, and BLE sensor values.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct vehicle or asset record.
- Supports both periodic reporting and event driven reports for alarms and driving behavior notifications.
- Works with the device buffer so stored points can be uploaded after network recovery.

## How Plaspy Detects the Protocol

Plaspy detects which tracker protocol a device is using automatically when telemetry arrives at the platform endpoint. Users typically do not need to select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint using the shared connection settings.

- Plaspy accepts device reports at the domain d.plaspy.com and the IP address 54.85.159.138.
- The platform listens on port 8888 and all devices supported by Plaspy use the same port.
- Devices may be configured to use UDP or TCP depending on the tracker capabilities and configuration.
- When a properly configured device reports to Plaspy the platform matches the incoming data to a supported device profile and processes it automatically.
- If you have trouble with detection check device reporting settings and ensure the tracker is pointing to the Plaspy endpoint and port.

## Transport and Connection Context

Connection context covers how the device reaches Plaspy rather than the internal message structure. The T8806+R can be set up to use different transport modes and to report its location and status to the Plaspy endpoint using the shared port.

- The T8806+R may be configured to send data over UDP or TCP on port 8888.
- Devices can point to the Plaspy server by domain d.plaspy.com or by the server IP 54.85.159.138 depending on local DNS and configuration preferences.
- Plaspy uses the same port 8888 for all supported trackers which simplifies server settings across fleets.
- Transport selection can affect delivery characteristics such as reliability and latency and should match the device firmware capabilities and network environment.
- Ensure firewall and network rules allow outbound traffic to the Plaspy endpoint on the configured transport and port.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change how the tracker formats or schedules reports so always confirm firmware behavior when troubleshooting.
- Transport mode selection TCP versus UDP is device configurable and may influence whether acknowledgement or retransmission behavior is used by the device.
- Manufacturer optional features such as BLE sensor advertising or RS232 integrations can add telemetry fields that must be mapped in Plaspy.
- Buffer memory and upload behavior differ by device configuration and may affect how historic points are transferred after connectivity is restored.
- Plaspy automatically detects protocol variants but correct device reporting settings are required to ensure smooth onboarding.
- Validate device settings and feature availability against the official TopFly documentation for firmware specific details.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with successful setup diagnostics and long term reliability. Knowing what the tracker sends when and how it connects to Plaspy reduces configuration errors and speeds issue resolution.

- Simplifies initial configuration by ensuring the tracker points to d.plaspy.com or 54.85.159.138 on port 8888 using a supported transport.
- Helps interpret device behavior such as buffered uploads real time intervals and event driven reports during troubleshooting.
- Clarifies how optional features like BLE sensors or RS232 inputs map into Plaspy telemetry so you can enable relevant alerts and dashboards.
- Improves readiness for firmware or hardware changes by focusing checks on transport settings firmware version and buffer policies.
- Supports consistent fleet wide deployment practices by standardizing the connection endpoint and port across devices.

## Why Use Plaspy with This Protocol

Using the TopFly T8806+R with Plaspy provides a straightforward way to collect location and telemetry from hardwired vehicle trackers and BLE enabled sensors. For fleet operators the combination of frequent position updates buffered storage and wide telemetry support helps maintain visibility and operational control across vehicles and assets.

Plaspy simplifies device onboarding by using a single server endpoint and port for all supported devices and automatically detecting the tracker protocol once the device reports correctly. To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol behavior firmware notes and implementation details consult the official manufacturer documentation at https://www.topflytech.com/ as firmware and device features can change over time.
