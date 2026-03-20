---
slug: /ruptela/eco5/protocol
id: eco5-protocol
sidebar_label: Protocol
title: Ruptela - Eco5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for Ruptela Eco5 GPS tracker compatibility with Plaspy for reliable device integration and communication
keywords:
  - Ruptela Eco5 protocol
  - Ruptela Eco5 GPS protocol
  - Eco5 Plaspy compatibility
  - Ruptela Eco5 communication protocol
  - Eco5 tracking protocol
  - Ruptela GPS tracker Eco5
  - Eco5 fleet management
  - Eco5 BLE telemetry
  - Eco5 telemetry protocol
  - Plaspy supported devices
---

# Ruptela - Eco5 Protocol

This page covers the public protocol context for using the Ruptela Eco5 tracker with Plaspy. It explains the communication roles and connection expectations that matter when sending device telemetry to Plaspy without exposing manufacturer internal details. Use this page to understand how the Eco5 communicates with Plaspy and what to check during setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the high level guidance here is intended to be practical and safe for deployments while encouraging validation against official Ruptela documentation.

## Protocol Overview

At a high level, the device protocol defines how the Eco5 identifies itself to a server, sends position and telemetry, and communicates device state and events. For Plaspy integration this means ensuring the Eco5 is configured to report to the Plaspy endpoint so Plaspy can parse and map the incoming data into tracking, alerting, and reporting features.

- Enables the Eco5 to send location, input/output state, BLE accessory readings, and device status to Plaspy.
- Carries identification information that allows Plaspy to associate messages with a specific device and fleet asset.
- Delivers periodic and event driven updates so Plaspy can provide live maps, route history, and alerts.
- Conveys telemetry such as digital inputs, analog values, and BLE sensor data in a way Plaspy can ingest.
- Provides the necessary connection context so Plaspy can acknowledge receipts and maintain session expectations.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port and automatically detects which supported tracker protocol is in use when devices report correctly. In most cases you do not need to select a protocol inside Plaspy; correct device configuration toward the Plaspy endpoint is the key step.

- Plaspy uses the same port for all supported devices so port configuration is consistent across trackers.
- When the Eco5 reports to the Plaspy endpoint, Plaspy recognizes the message format and maps it to the device record automatically.
- Typical setup requires pointing the device to the Plaspy server address and using the appropriate transport option supported by the device.
- If a device is misconfigured or using an unexpected firmware variant, Plaspy detection may require verifying device reporting settings or firmware behavior.
- Plaspy server domain to use is d.plaspy.com and the server IP is 54.85.159.138 for direct addressing.

## Transport and Connection Context

The Eco5 supports modern cellular connectivity and can be configured to use different transport layers depending on the deployment and device firmware. For Plaspy integration you should confirm the transport mode and server address configured on each unit so data reaches Plaspy reliably.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Plaspy's public server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 if you need to configure an IP address directly.
- The port to target is 8888 and all devices in Plaspy use the same port for reporting.
- Choose UDP or TCP based on network characteristics and device firmware recommendations; both are supported for reporting to Plaspy.
- Ensure APN and cellular settings on the Eco5 are correct for the deployed network so the device can open the chosen transport to Plaspy.

## Protocol Compatibility Notes

- Firmware differences can affect which transport modes and message elements are available; validate firmware release notes for Eco5 units.
- Hardware revisions and commercial variants may introduce slight telemetry or I/O behavior changes; check the unit label and variant documentation.
- Manufacturer side configuration tools such as Ruptela Device Center may also affect the device reporting settings and remote configuration behavior.
- Transport selection between UDP and TCP can change delivery behavior and should match your network and reliability requirements.
- Confirm device APN and network permissions if devices will move between carriers or regions with different connectivity.
- Always cross reference protocol behavior described here with the official Ruptela documentation for model specific details.

## Why Protocol Understanding Matters

Understanding how the Eco5 communicates with Plaspy helps ensure successful setup, faster troubleshooting, and consistent long term operation when devices are deployed at scale.

- Speeds initial provisioning by ensuring devices point to the correct Plaspy server and port.
- Reduces debugging time when connectivity, mapping, or telemetry mapping problems occur.
- Helps you choose UDP or TCP appropriately for delivery guarantees and network behavior.
- Ensures correct interpretation of inputs, BLE sensor data, and device status within Plaspy dashboards.
- Improves maintenance planning by knowing which firmware or hardware factors can change device reporting patterns.

## Why Use Plaspy with This Protocol

Using the Ruptela Eco5 with Plaspy provides a practical way to centralize real time location, telemetry, and event data for fleets of any size. The Eco5 hardware features such as a premium u‑blox GNSS module, BLE 5.0 for accessory connectivity, robust I/O for fuel and driver identification, and rugged housing options make it well suited for mixed fleets. When configured to report to Plaspy, those features translate into actionable dashboards, automated alerts, and operational workflows that improve visibility and response.

To learn more about Plaspy and how it works with devices like the Eco5 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so verify the latest Eco5 specific information on the manufacturer's official site https://ruptela.com/ for the most current documentation.
