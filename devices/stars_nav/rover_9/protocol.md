---
slug: /stars_nav/rover_9/protocol
id: rover_9-protocol
sidebar_label: Protocol
title: Stars Nav - Rover 9 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Stars Nav Rover 9 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Stars Nav Rover 9 protocol
  - Rover 9 GPS protocol
  - Stars Nav GPS tracker protocol
  - Rover 9 Plaspy compatibility
  - vehicle tracking protocol
  - fleet tracking Rover 9
  - Rover 9 communication protocol
  - Plaspy tracker compatibility
  - Rover 9 telemetry protocol
  - Stars Nav tracker protocol
---

# Stars Nav - Rover 9 Protocol

This page describes the public protocol context for using the Stars Nav Rover 9 vehicle tracker with Plaspy. It focuses on how the device communicates in general terms, what connection settings Plaspy expects, and how that communication enables real time tracking and telemetry on the Plaspy platform. Details here are limited to public, non sensitive protocol context and how the tracker integrates at a connection level.

The Rover 9 combines a SiRFstarIII GNSS module, GPRS cellular transport, and over the air programming to deliver position and telemetry to a backend service. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always validate device specific settings with the device documentation before deployment.

## Protocol Overview

The protocol implemented by the Rover 9 is the device side communication method that delivers GPS fixes, alarms, and analog telemetry to a backend server. In practice this means the tracker packages position and event data and sends it to the configured Plaspy endpoint so Plaspy can display, store, and act on the information.

- Provides device identification so Plaspy can associate incoming messages with the correct unit and asset
- Transports GPS position, speed, heading, and timestamp data for live tracking and history
- Carries alarm and input state changes such as door, panic, and immobilizer events for security handling
- Conveys analog telemetry like fuel or temperature readings for monitoring and rules
- Supports over the air configuration updates and remote commands where manufacturer firmware permits

## How Plaspy Detects the Protocol

Plaspy listens for tracker connections at the shared Plaspy endpoint and automatically determines the incoming device protocol so users rarely need to manually select a protocol inside Plaspy. Proper device configuration to report to the Plaspy endpoint is the main requirement for automatic detection and ingestion.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 using port 8888
- The device may be configured using UDP or TCP on port 8888 depending on device support and network setup
- All devices in Plaspy use the same port which simplifies device onboarding
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- In typical setups the user does not need to manually pick a protocol inside Plaspy if the device is configured to report to the above endpoint

## Transport and Connection Context

Connection context focuses on how the Rover 9 reaches the Plaspy endpoint over the mobile network and what the installer must configure on the device. The Rover 9 uses GPRS cellular transport in most deployments and supports features such as sleep modes to reduce data and power use.

- Devices may point to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138
- The device may be configured using UDP or TCP on port 8888; choose the transport the device firmware and your network prefer
- Plaspy uses the same port 8888 for all supported devices simplifying configuration and firewall rules
- GPRS cellular connectivity carries tracker reports to Plaspy and sleep or low power modes affect reporting cadence
- Over the air programming and remote configuration are supported by the device and rely on reliable transport to the configured endpoint

## Protocol Compatibility Notes

- Firmware versions can change behavior such as default transport, heartbeat intervals, and available telemetry fields
- Hardware revisions or regional variants of the Rover 9 may implement different default settings or supported inputs
- Manufacturer side configuration or provisioning can change the strings or server defaults the device uses to report
- Choosing UDP versus TCP can affect reliability and latency depending on mobile network conditions
- Validate the device APN, server address, and transport with Stars Nav documentation before wide deployment
- Test a device in a controlled environment to confirm Plaspy receives the expected events and telemetry

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and fleet managers ensure reliable reporting, effective troubleshooting, and predictable behavior over the life of the deployment. Knowing what data the Rover 9 sends and how Plaspy expects it reduces integration friction and helps maintain operational visibility.

- Ensures correct server and transport settings are applied so devices reach Plaspy consistently
- Helps diagnose missed reports by distinguishing connectivity issues from device configuration problems
- Guides expectations for telemetry available to Plaspy such as analog inputs or alarm events
- Supports planning around power and data usage when devices use sleep modes or low reporting intervals
- Clarifies the scope of remote configuration and over the air updates supported by the tracker

## Why Use Plaspy with This Protocol

Using the Stars Nav Rover 9 with Plaspy provides a practical path to turning vehicle GPS fixes and telemetry into actionable fleet information. Plaspy ingests position, alarms, and analog telemetry from devices reporting to d.plaspy.com and presents that data in dashboards, alerts, and historical reports to help teams monitor assets, respond to events, and analyze operational trends.

If you want to learn more about Plaspy and how it works with devices like the Rover 9, please visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information and firmware notes with the manufacturer at http://www.starsnav.com/.
