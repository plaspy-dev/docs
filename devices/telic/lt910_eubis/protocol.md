---
slug: /telic/lt910_eubis/protocol
id: lt910_eubis-protocol
sidebar_label: Protocol
title: Telic - LT910-EUbis Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview and Plaspy compatibility guidance for the Telic LT910 EUbis tracker and connection context
keywords:
  - Telic LT910-EUbis protocol
  - Telic LT910-EUbis GPS protocol
  - Telic LT910-EUbis Plaspy
  - LT910-EUbis communication protocol
  - LT910-EUbis tracking protocol
  - Telic tracker protocol
  - LTE Cat 1bis tracker
  - fleet management Plaspy
  - GPS tracker protocol Plaspy
  - industrial IoT tracker
---

# Telic - LT910-EUbis Protocol

This page describes the public protocol context for using the Telic LT910-EUbis tracker with Plaspy. It focuses on the communication and connection details that matter for integrating the LT910-EUbis as the cellular transport layer for GPS and telemetry data. The content is intended to help integrators and fleet operators understand how the device reports to Plaspy without exposing private implementation details.

Plaspy accepts reports from supported devices using shared connection settings. The LT910-EUbis can be configured to send telemetry to the Plaspy endpoint at d.plaspy.com or to the server IP 54.85.159.138 using port 8888. Devices may be set to use UDP or TCP on port 8888 depending on device support and configuration. All devices in Plaspy use the same port, and Plaspy automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The device protocol is the set of rules the LT910-EUbis uses to deliver telemetry, location, and status information to a backend such as Plaspy. For integration purposes the focus is on reliable delivery of usable location and sensor data rather than internal packet formats.

- Provides the messaging layer for GNSS position, telemetry, and digital/analog inputs to reach Plaspy.
- Allows the device to identify itself and its reporting mode so Plaspy can normalize incoming data for dashboards and alerts.
- Determines transport behavior such as whether the device uses UDP or TCP to reach the Plaspy endpoint.
- Supports power saving and reporting intervals that affect how often position and telemetry are sent to Plaspy.
- Enables telemetry flows used for fleet features such as anti theft, immobilization triggers, and sensor monitoring when paired with GNSS or vehicle inputs.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and uses that incoming data to determine how to parse and normalize device messages. In most cases, when a device is properly configured to report to the Plaspy endpoint there is no need for manual protocol selection inside Plaspy.

- Plaspy listens on a single, shared port for all supported devices and automatically detects the tracker protocol.
- Devices should point to d.plaspy.com or 54.85.159.138 to ensure messages arrive at the Plaspy server.
- Proper device configuration of server address and transport is usually sufficient for Plaspy to ingest data without additional user setup.
- When messages arrive, Plaspy maps identifiers and telemetry to platform fields so location, status, and alarms appear in dashboards.
- If a device uses uncommon firmware variants, additional verification steps with manufacturer documentation may be needed to confirm expected behavior.

## Transport and Connection Context

Connection context covers how the LT910-EUbis reaches Plaspy over the cellular network. The device provides LTE Cat 1bis with 2G fallback and acts as a communications hub for GNSS or external tracker inputs; the transport selection affects latency, delivery and firewall requirements.

- The LT910-EUbis may be configured to use UDP or TCP on port 8888 depending on device support and chosen firmware settings.
- Devices can be directed to the host d.plaspy.com or the server IP 54.85.159.138 to deliver telemetry to Plaspy.
- Plaspy uses the same port for all devices which simplifies firewall and carrier routing rules for deployments.
- Choice of UDP versus TCP can affect retransmission behavior and real time responsiveness according to the device configuration.
- Ensure mobile operator APN and outbound firewall rules allow traffic to the Plaspy endpoint to avoid delivery issues.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or supported reporting modes; always check the device firmware level when validating compatibility.
- Hardware variants or regional revisions of the LT910-EUbis may expose different I O options that influence the telemetry available to Plaspy.
- Manufacturer side defaults may set a different transport or server address; confirm device configuration to point at the Plaspy endpoint.
- Transport selection between UDP and TCP is device configurable and may affect how messages are retried or ordered.
- Plaspy automatically detects the protocol but unusual or heavily customized firmware may require consultation with the device vendor.
- Validate feature support such as CAN, digital inputs, or immobilizer control against Telic documentation for the specific product variant.

## Why Protocol Understanding Matters

A clear understanding of the device protocol and connection context reduces setup time, improves troubleshooting efficiency, and supports long term reliability when using LT910-EUbis devices with Plaspy. Knowing which transport and reporting options the device uses makes it easier to map device behavior to platform features.

- Faster diagnostics when location or telemetry stops arriving because you can verify transport, server address, and firmware behavior.
- Better configuration choices for reporting intervals and power saving modes to match operational needs and battery life targets.
- Easier alignment of device capabilities with Plaspy features such as alerts, immobilization, and telemetry dashboards.
- Reduced deployment friction by confirming APN, firewall, and endpoint settings before large scale rollouts.
- Clear expectations for what data Plaspy will normalize based on the device's supported telemetry set.

## Why Use Plaspy with This Protocol

Using the LT910-EUbis as the cellular transport for GPS tracker and telemetry solutions provides a practical balance of performance and cost for European deployments. Plaspy ingests the device data and presents location, status, and alerting features that fleet managers and operations teams can act on for routing, security, and maintenance workflows.

Plaspy simplifies integration by using a shared endpoint and port and by automatically detecting supported tracker protocols. To learn more about Plaspy and how it works with devices like the LT910-EUbis please visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol and firmware information with the manufacturer at https://www.telic.de.
