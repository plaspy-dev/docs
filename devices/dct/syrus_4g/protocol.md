---
slug: /dct/syrus_4g/protocol
id: syrus_4g-protocol
sidebar_label: Protocol
title: DCT - Syrus 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for DCT Syrus 4G integration with Plaspy including connection and detection guidance
keywords:
  - DCT Syrus 4G protocol
  - DCT Syrus 4G GPS protocol
  - Syrus 4G Plaspy compatibility
  - Syrus 4G communication protocol
  - Syrus 4G tracking protocol
  - DCT GPS tracker protocol
  - Plaspy device protocol
  - fleet management Syrus 4G
  - vehicle telemetry Syrus 4G
  - Syrus 4G GNSS telemetry
---

# DCT - Syrus 4G Protocol

This page covers the public protocol context for using the DCT Syrus 4G telematics gateway with Plaspy. It explains how the device communicates with the Plaspy platform in general, what connection settings are used publicly by Plaspy, and what to keep in mind when configuring a Syrus 4G for fleet or IoT deployments. The content is focused on publicly verifiable protocol and connection facts rather than internal firmware details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and supported features can vary by Syrus 4G firmware version, hardware revision, and manufacturer implementation, so validate device specific capabilities against DCT documentation during integration and testing.

## Protocol Overview

The Syrus 4G communicates telemetry, GNSS fixes, and vehicle sensor data to cloud platforms like Plaspy using the device reporting protocol implemented by DCT. The protocol governs how the gateway identifies itself, how it packages location and telemetry, and how it forwards events or diagnostics to a remote server.

- Enables the gateway to report position, CAN bus telemetry, and sensor data to Plaspy for live tracking and historical playback.
- Carries device identity information so Plaspy can associate incoming telemetry with the correct asset and account.
- Supports periodic reporting and event driven messages for alerts such as ignition changes, fault codes, or geofence events.
- Allows for telemetry aggregation or preprocessing at the device before forwarding to reduce bandwidth and improve timeliness.
- Works in conjunction with the Syrus remote management features for OTA updates and configuration when supported by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and port and is designed to automatically recognize common tracker protocols when devices are properly pointed to the Plaspy server. This reduces manual configuration inside Plaspy for many deployments.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy accepts connections on port 8888 and all devices supported by Plaspy use the same port.
- The Syrus 4G may be configured to use either UDP or TCP transport to report to Plaspy on port 8888 depending on device settings and carrier behavior.
- When a Syrus 4G instance is configured to forward telemetry to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol without the user typically needing to select it manually.
- Ensure the device is configured to report to the correct Plaspy endpoint so automatic detection can occur during initial registration and testing.

## Transport and Connection Context

Connection context covers how the device reaches the Plaspy endpoint rather than low level protocol framing. Syrus 4G supports resilient cellular connectivity and multiple transport options, which affects how the device maintains a session with Plaspy.

- The device may use UDP or TCP on port 8888 depending on device configuration and network conditions.
- Devices can be pointed to the Plaspy server using the domain d.plaspy.com or the IP address 54.85.159.138.
- Plaspy uses the same port for all supported devices which simplifies firewall and NAT rules for fleet deployments.
- Cellular networks, SIM profiles, and carrier NAT behavior can influence whether TCP or UDP is more reliable for a given installation.
- Validate connectivity by allowing outbound traffic to the Plaspy endpoint and confirming that the device is reporting after configuration changes.

## Protocol Compatibility Notes

- Firmware revisions on Syrus 4G can change available telemetry fields, event behavior, and optional features that affect what is reported to Plaspy.
- Hardware variants and accessory options such as satellite backup or different cellular modules may alter supported transports or feature sets.
- Transport selection between UDP and TCP may be required to match carrier constraints or to work around network conditions in specific regions.
- Manufacturer side settings or provisioning steps can be required to enable cloud forwarding or API integration for some Syrus deployments.
- Always test a device in a controlled environment to verify that expected telemetry and events arrive at Plaspy before broad rollouts.
- Consult device diagnostics and logs during setup to confirm that the gateway is addressing the Plaspy endpoint and transmitting expected messages.

## Why Protocol Understanding Matters

Understanding the communication protocol and connection context helps ensure reliable deployment, faster troubleshooting, and accurate telemetry mapping between the Syrus 4G gateway and Plaspy.

- Speeds up initial setup by making sure devices are pointed to the correct Plaspy endpoint and using an appropriate transport.
- Helps diagnose connectivity issues related to carrier NAT, firewall rules, or incorrect destination settings.
- Makes it easier to confirm that vehicle CAN signals, BLE sensor feeds, and diagnostic trouble codes are correctly mapped into Plaspy telemetry.
- Supports planning for scale and resilience by clarifying how devices maintain connections and how Plaspy receives and associates messages.
- Enables informed decisions about firmware upgrades, remote configuration, and optional accessories that may affect reporting.

## Why Use Plaspy with This Protocol

Using Syrus 4G with Plaspy gives fleet operators a consolidated platform for real time tracking, vehicle telemetry, and operational alerts. The gateway’s enterprise features such as dual cellular modems, GNSS performance, and rich vehicle I O make it well suited for demanding fleet and industrial scenarios, while Plaspy provides a single endpoint and automatic protocol detection to simplify integration.

If you want to learn more about how Plaspy can work with devices like the DCT Syrus 4G, visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware notes, and hardware revision details confirm current information at the manufacturer website https://www.digitalcomtech.com/
