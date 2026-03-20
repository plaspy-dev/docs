---
slug: /thinkrace/pt590/protocol
id: pt590-protocol
sidebar_label: Protocol
title: ThinkRace - PT590 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for ThinkRace PT590 compatibility with Plaspy for device communication and integration
keywords:
  - ThinkRace PT590 protocol
  - ThinkRace PT590 GPS protocol
  - PT590 Plaspy compatibility
  - PT590 tracking protocol
  - ThinkRace tracker protocol
  - GPS pet tracker protocol
  - device communication Plaspy
  - ThinkRace PT590 integration
  - pet tracking protocol
  - tracker protocol guide
---

# ThinkRace - PT590 Protocol

This page describes the public protocol context for using the ThinkRace PT590 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy, what connection settings are used publicly, and which aspects of the device behavior matter for successful integration. The PT590 is a GPS pet tracker with two mode positioning, IP67 protection, and remote monitoring features; those device capabilities determine the kinds of messages and events you can expect to see reported to a server like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the PT590 can vary with firmware versions, hardware revisions, and manufacturer implementation choices, so this page stays at a public, non sensitive level while explaining the transport and integration context you need for setup and troubleshooting.

## Protocol Overview

The PT590 communication protocol is the method the tracker uses to report position, status, and alerts to a remote server such as Plaspy. At a high level the protocol enables the device to identify itself, periodically send location and telemetry, and report event-driven updates like power changes or geofence events. Understanding this role helps ensure the tracker is configured to reach Plaspy and that reported data is usable for monitoring and alerts.

- Enables periodic and event driven reporting of GPS positions and status updates to Plaspy.
- Carries essential identification information so Plaspy can associate incoming messages with a device record.
- Facilitates remote monitoring features such as location updates, low battery or tamper alerts, and mode changes.
- Allows configuration commands or remote parameters to be applied by the device manufacturer or integrators where supported.
- Provides a consistent stream of telemetry that Plaspy consumes to display live tracking and historical data.

## How Plaspy Detects the Protocol

Plaspy receives connections from trackers at a shared endpoint and automatically determines which supported protocol a device is using. In most cases, when a PT590 is pointed at the Plaspy endpoint and sending data, the platform will identify the device and begin processing location and event messages without requiring manual protocol selection by the user.

- Plaspy exposes a single public endpoint for device reporting: d.plaspy.com.
- The Plaspy server IP for device connections is 54.85.159.138.
- Plaspy listens on a common port for all devices, which is 8888.
- The platform automatically detects the tracker protocol once a device reports to the endpoint.
- Users typically do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection transport and destination settings determine whether the PT590 can successfully reach Plaspy. The tracker can be configured to use either UDP or TCP depending on device capabilities and carrier or SIM settings. Ensuring the correct transport and destination are set on the device is a primary step for getting the PT590 to communicate with Plaspy.

- Devices may be configured to use UDP or TCP on port 8888 depending on support and configuration.
- The tracker can point to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported tracker models to simplify configuration.
- Choose UDP or TCP on the device according to network stability and the device firmware recommendations.
- Confirm device APN and network settings so outgoing connections to the Plaspy endpoint are allowed by the SIM and carrier.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and event behavior; check the device firmware version when validating compatibility.
- Hardware revisions or regional SKUs may have subtle differences in supported transports or power management that affect reporting frequency.
- Manufacturer configuration tools or SMS commands may be required to set the reporting host and transport on the PT590.
- Some services or carriers may prefer TCP over UDP or vice versa; test both transports if you encounter connectivity issues.
- Plaspy’s automatic detection reduces manual setup, but initial device network settings must point to the Plaspy endpoint for detection to occur.
- Always validate critical behaviors such as SOS, low battery, and geofence reporting after configuration and after firmware updates.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps ensure the PT590 delivers reliable location and event data to Plaspy, and it speeds up troubleshooting when messages are missing or delayed. Knowing the general protocol role and transport context allows administrators to make informed choices about device placement, network settings, and firmware maintenance.

- Speeds up initial setup by focusing on correct transport, host, and APN configuration.
- Helps isolate connectivity issues between device, mobile network, and Plaspy endpoint.
- Clarifies expectations for reporting frequency, event types, and battery impact on transmissions.
- Supports effective testing after firmware upgrades or when changing hardware variants.
- Reduces downtime by guiding practical checks for identification and telemetry delivery.

## Why Use Plaspy with This Protocol

Using the PT590 with Plaspy gives organizations and pet owners a way to centralize real time location, event alerts, and historical tracking in a single platform. Plaspy handles incoming device data, presents it for monitoring and reporting, and applies the same port and endpoint settings across supported models to simplify device onboarding.

If you want to learn more about Plaspy, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions for the PT590, please verify information with the manufacturer at https://www.thinkrace.com/ as protocols and device behavior can change over time.
