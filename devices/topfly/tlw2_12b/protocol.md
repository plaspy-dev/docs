---
slug: /topfly/tlw2_12b/protocol
id: tlw2_12b-protocol
sidebar_label: Protocol
title: TopFly - TLW2-12B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the TopFly TLW2-12B and how it communicates with Plaspy for reliable trailer and asset tracking
keywords:
  - TopFly TLW2-12B protocol
  - TopFly TLW2-12B GPS protocol
  - TopFly TLW2-12B communication protocol
  - TLW2-12B Plaspy
  - TopFly GPS tracker protocol
  - trailer GPS protocol
  - asset tracker protocol Plaspy
  - vehicle tracking protocol
  - cold chain tracking protocol
  - fleet tracking protocol Plaspy
---

# TopFly - TLW2-12B Protocol

This page describes the public protocol context for using the TopFly TLW2-12B tracker with Plaspy. It focuses on how the device communicates in general terms, what connection settings are used to reach Plaspy, and which behaviors are relevant when integrating the TLW2-12B into fleet and asset tracking workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy endpoints. Exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so this page provides safe, non sensitive context to help with setup and troubleshooting while recommending verification against official TopFly documentation.

## Protocol Overview

The TLW2-12B communication protocol governs how the tracker identifies itself to a server, reports GNSS and sensor telemetry, and responds to remote control requests. In practical terms the protocol ensures that location, motion, BLE sensor data, and input/output events are packaged and delivered so Plaspy can present real time maps, alerts, and history.

- Enables regular location and telemetry uploads so Plaspy receives position, motion status, and auxiliary sensor readings.
- Supports buffered storage and bulk reporting so historical points are preserved and transmitted after coverage is restored.
- Carries device identity and health information that Plaspy uses to tie messages to the correct fleet asset.
- Facilitates remote output control commands and alarm triggers relayed from Plaspy to the device.
- Allows BLE sensor readings to be collected locally and forwarded to Plaspy for environmental monitoring.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models without requiring manual protocol selection in most cases. When a TLW2-12B is configured to report to the Plaspy endpoint, the platform automatically identifies the device protocol and processes incoming messages so users can see tracking data and telemetry with minimal manual configuration.

- Plaspy uses a shared server endpoint at d.plaspy.com and accepts connections to 54.85.159.138 for device reporting.
- All devices supported by Plaspy use the same port, 8888, simplifying device configuration across mixed fleets.
- The TLW2-12B may be set to report over UDP or TCP to port 8888 depending on device settings and network conditions.
- In most deployments you do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Automatic detection helps streamline onboarding while still allowing device level configuration to match firmware behavior.

## Transport and Connection Context

Connection transport and addressing are part of the public configuration that determines how the TLW2-12B reaches Plaspy. The device supports cellular uplink and can be configured to target Plaspy by domain name or numeric address. Transport selection and reliable cellular connectivity are key to timely delivery of tracking and buffered data.

- The TLW2-12B may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- Devices can point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138 as the server address.
- Plaspy accepts connections on the same port for all supported devices, reducing configuration errors when deploying mixed hardware.
- Cellular network and carrier settings on the device influence transport reliability and reconnection behavior.
- BLE and local sensors are collected on the device and forwarded over the cellular transport when available.

## Protocol Compatibility Notes

- Firmware revisions can alter message timing, supported transports, and available telemetry fields; confirm firmware release notes when planning deployments.
- Hardware revisions and optional accessory support (for example BLE sensors or relays) may change which telemetry items are present in reports.
- The device may support multiple transport modes; selecting TCP or UDP can affect latency and delivery behavior depending on network conditions.
- Manufacturer configuration menus or provisioning tools may be required to point the device to d.plaspy.com or the Plaspy server IP on port 8888.
- Buffered reporting capacity and upload triggers vary by firmware and configuration; validate buffer and reconnection behavior for long dwell scenarios.
- Always cross reference manufacturer documentation to understand model specific behavior before large scale rollouts.

## Why Protocol Understanding Matters

Having a practical understanding of the device communication protocol helps ensure a smooth integration, accurate telemetry in Plaspy, and reliable incident handling. Awareness of how the TLW2-12B reports data and how Plaspy receives it saves time during commissioning and when diagnosing gaps in history or sensor reports.

- Speeds up initial provisioning by confirming correct server address and transport settings.
- Helps interpret why buffered points appear after reconnection and where to expect delays.
- Improves troubleshooting of connectivity issues by clarifying whether the device or network is the limiting factor.
- Supports configuration of alarm and remote output workflows that depend on timely command delivery.
- Aids planning for battery and power strategies by understanding reporting frequency and telemetry payloads.

## Why Use Plaspy with This Protocol

Using the TLW2-12B with Plaspy gives organizations persistent visibility into trailer and asset location, environmental telemetry from BLE sensors, and remote control of outputs for alarm and immobilization workflows. The TLW2-12B’s large battery, buffering features, and rugged form factor align with Plaspy’s real time tracking, alerting, and historical reporting capabilities to maintain operational oversight whether trailers are on the road or stored in a yard.

If you want to learn more about how Plaspy supports trackers like the TLW2-12B and to explore platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer guidance, please verify information with the official TopFly documentation at https://www.topflytech.com/ .
