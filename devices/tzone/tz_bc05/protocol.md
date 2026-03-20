---
slug: /tzone/tz_bc05/protocol
id: tz_bc05-protocol
sidebar_label: Protocol
title: TZone - TZ-BC05 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for integrating the TZone TZ BC05 beacon tracker with Plaspy for reliable device communication and reporting
keywords:
  - TZone TZ-BC05 protocol
  - TZone TZ-BC05 GPS protocol
  - TZ-BC05 communication protocol
  - TZ-BC05 iBeacon tracker
  - TZone iBeacon protocol
  - Plaspy compatibility
  - Plaspy tracker integration
  - GPS tracker protocol
  - Bluetooth beacon integration
  - vehicle tracking with Plaspy
---

# TZone - TZ-BC05 Protocol

This page describes the public protocol context for using the TZone TZ-BC05 tracker with Plaspy. It focuses on how the tracker communicates in general terms, how Plaspy expects to receive data, and what factors influence device behavior. The TZ-BC05 is a compact Bluetooth 4.0 iBeacon device intended for close range broadcasting and identification, and this guidance explains how that broadcasting interacts with common backend reporting setups.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact behaviour can vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps to public, non sensitive protocol context and practical integration notes while encouraging verification of manufacturer documentation for firmware specific details.

## Protocol Overview

The TZ-BC05 uses Bluetooth Low Energy advertising compatible with the iPhone iBeacon model to broadcast a device identifier and optional metadata at configurable intervals and transmit power. In a Plaspy deployment, those broadcasts need to be observed and forwarded to Plaspy in order to appear in the platform. The protocol role is to consistently identify the device and provide regularly timed broadcasts that a listener or gateway can map into a backend tracking event.

- Broadcasts provide a unique identifier and signal strength information that downstream systems use to infer proximity and identity.
- Adjustable broadcast interval and transmit power let installers balance battery life against detection responsiveness.
- Password protection and pairing options control who can read or change device settings via BLE.
- When a gateway or internet connected device forwards beacon data, the forwarded messages must reach the Plaspy endpoint for processing.
- The protocol itself focuses on Bluetooth advertising; any IP transport used to reach Plaspy is an implementation detail of the forwarding device or gateway.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single common endpoint and port and automatically detects the incoming tracker protocol so users normally do not need to set a protocol manually inside the platform. If a tracker, gateway, or forwarding client is configured to send data to Plaspy, the platform will attempt to identify the format and map incoming data to the appropriate device record.

- Plaspy listens on a single port for all devices and automatically detects the tracker protocol.
- Devices or gateways should be configured to report to d.plaspy.com or the Plaspy server IP to reach the platform.
- Users typically do not need to choose a protocol in Plaspy if the device is properly reporting to the Plaspy endpoint.
- Proper device identification on first report helps Plaspy associate incoming messages with the correct tracker model and account.
- If reports are not arriving or are misidentified, checking the forwarding gateway and device configuration is the first troubleshooting step.

## Transport and Connection Context

The TZ-BC05 itself is a Bluetooth beacon. To be visible in Plaspy the beacon's broadcasts must be observed and forwarded by a networked component. Plaspy accepts device reports over standard IP transports, and the platform provides a consistent endpoint so forwarding services can use the same settings across different device models.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The port used by Plaspy for all devices is 8888 and Plaspy uses the same port for every supported device.
- Devices or gateways may be configured to use UDP or TCP on port 8888 depending on the forwarding component capabilities.
- BLE broadcast forwarding can be performed by a paired smartphone app, a dedicated gateway, or any intermediary that converts beacon data to IP reports.
- Ensure any forwarding client or gateway is pointed to the Plaspy endpoint so the platform receives the beacon data for processing.

## Protocol Compatibility Notes

- The TZ-BC05 implements BLE iBeacon style advertising; compatibility with Plaspy depends on having a forwarding path from BLE to IP that Plaspy can ingest.
- Firmware revisions and hardware variants can change available settings such as broadcast interval, transmit power, and security options.
- Manufacturer side configuration tools and default settings vary; always confirm device configuration before deployment.
- Choosing UDP versus TCP for forwarding may affect delivery reliability depending on network conditions and gateway behavior.
- Gateways and smartphone apps that forward beacon data must follow Plaspy endpoint settings to ensure correct reception.
- Validate compatibility against the most recent manufacturer documentation and any release notes for gateway software used in your setup.

## Why Protocol Understanding Matters

Understanding how the TZ-BC05 advertises and how those adverts reach Plaspy helps ensure reliable setup, effective troubleshooting, and predictable battery life. A clear view of the communication path from beacon to backend reduces configuration errors and improves operational uptime.

- Helps confirm that BLE broadcasts are being observed and forwarded correctly to Plaspy.
- Guides sensible choices for broadcast interval and transmit power to balance detection and battery life.
- Makes it easier to diagnose missing data by checking gateway logs and forwarding configuration.
- Encourages verification of firmware and hardware revisions that can alter behavior.
- Supports secure deployments by calling out pairing and password options that control configuration access.

## Why Use Plaspy with This Protocol

Using the TZ-BC05 with Plaspy offers a practical way to extend beacon based identification into a backend tracking and monitoring workflow. When beacon broadcasts are bridged to Plaspy, organizations gain a unified view of device presence, proximity events, and asset visibility alongside other tracker types supported by the platform. This can be useful for inventory tracking, proximity alerts, and mixed fleets that combine BLE beacons with GPS devices.

To learn more about Plaspy and how it can integrate beacon and tracker data into a single operational view, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be verified against the manufacturer documentation at http://www.tzonedigital.com/ for the most current device specific information.
