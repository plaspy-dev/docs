---
slug: /arusnavi/arnavi/protocol
id: arnavi-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Arusnavi Arnavi tracker and how it communicates with Plaspy for fleet monitoring
keywords:
  - Arusnavi Arnavi protocol
  - Arusnavi Arnavi GPS protocol
  - Arnavi communication protocol
  - Arnavi tracking protocol
  - Arusnavi GPS tracker compatibility
  - Arnavi CAN bus integration
  - Arnavi sensor monitoring protocol
  - Arnavi fleet tracking Plaspy
  - Plaspy device protocol
  - Plaspy tracker compatibility
---

# Arusnavi - Arnavi Protocol

This page documents the public protocol context for using the Arusnavi Arnavi navigation controller with the Plaspy platform. It explains, in non sensitive terms, how the tracker communicates with Plaspy so integrators and fleet managers can understand the role of the device reporting protocol when connecting Arnavi units to a centralized monitoring service.

The Arnavi is a versatile navigation controller designed for remote monitoring of mobile objects with support for digital, discrete, analog, frequency pulse sensors, and CAN bus integration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The device protocol is the set of rules the Arnavi uses to report location, sensor readings, and vehicle bus data to a server like Plaspy. In broad terms, the protocol defines how the device identifies itself, delivers telemetry and event messages, and conveys sensor and CAN bus information so Plaspy can present meaningful data to users.

- Enables periodic and event driven reporting of GPS and sensor telemetry from the Arnavi to a remote server.
- Carries identification data so Plaspy can associate incoming messages with a registered device.
- Transmits sensor and CAN bus values in a way that Plaspy can map to inputs, alerts, and diagnostics.
- Supports configuration and control messages in some firmware variants to change reporting behavior remotely.
- Provides status and heartbeat information that helps Plaspy determine device connectivity and health.

## How Plaspy Detects the Protocol

Plaspy receives traffic on a shared server endpoint and automatically detects the tracker protocol used by an incoming device when the device is configured to report to the platform. In most cases, you will not need to choose a protocol manually inside Plaspy if the Arnavi is configured to send data to the Plaspy endpoint using the supported transport.

- Plaspy uses a single listening endpoint for device reports so new connections are processed uniformly.
- When an Arnavi device reports to the Plaspy endpoint, the platform inspects the incoming data stream and selects the appropriate handling for that device.
- Users typically only need to configure the Arnavi to point at the Plaspy server; Plaspy handles protocol identification automatically.
- Correct device identification depends on the device sending its identifying information as part of its normal report messages.
- If a device uses multiple reporting modes, ensure it is set to the mode expected by your fleet management workflow so Plaspy can detect and process its messages.

## Transport and Connection Context

Connection details determine how the Arnavi opens a link to the Plaspy service. The Arnavi may be configured to use either UDP or TCP depending on device support and local configuration choices. Plaspy accepts reports on a single, shared port so all supported devices use the same server port and endpoint.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com.
- As an alternative, the Plaspy server IP address 54.85.159.138 can be used in device settings.
- Plaspy listens on port 8888 and all devices supported by the platform use that same port for reporting.
- The Arnavi can be set to use UDP or TCP transport toward port 8888 based on the firmware and network environment.
- Network rules and firewalls should allow outbound UDP or TCP traffic from the device to the Plaspy endpoint to ensure reliable delivery.

## Protocol Compatibility Notes

- Firmware differences between Arnavi units can change which telemetry fields are available and how they are reported.
- Hardware revisions and optional sensor modules may add or alter supported inputs such as analog channels or pulse counters.
- CAN bus data availability depends on vehicle wiring and the Arnavi configuration for CAN channels and message mapping.
- The choice of UDP versus TCP affects delivery characteristics; confirm which transport your firmware build supports.
- Always validate a device by sending test reports to the Plaspy endpoint and verifying that data appears correctly in the system.
- Consult manufacturer release notes when upgrading firmware as protocol behavior and message sets can change.

## Why Protocol Understanding Matters

Understanding the Arnavi communication protocol helps ensure a smooth setup, accurate data interpretation, and efficient troubleshooting when integrating devices with Plaspy. Knowledge of what the device reports and how it connects reduces integration time and improves long term reliability.

- Helps map Arnavi sensor channels and CAN signals to Plaspy inputs and alerts.
- Aids in diagnosing connectivity issues related to transport selection or network filtering.
- Informs decisions about firmware upgrades and the impact on reported fields.
- Makes it easier to validate that device identity and telemetry arrive as expected in Plaspy.
- Supports planning for power, reporting frequency, and data volume based on device behavior.

## Why Use Plaspy with This Protocol

Using the Arnavi tracker with Plaspy provides a practical way to centralize GPS, sensor, and vehicle bus information for fleet monitoring and operational oversight. Plaspy’s protocol detection and unified connection endpoint simplify device onboarding so fleet managers can focus on data and outcomes rather than low level transport plumbing.

Plaspy is designed to accept device reports on a single endpoint and port and to automatically detect tracker protocols, reducing configuration complexity for mixed fleets. To learn more about Plaspy and how it can work with Arnavi devices, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware documentation consult the manufacturer at https://www.arusnavi.ru as protocol support and firmware behavior can change over time.
